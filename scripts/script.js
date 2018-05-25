var url;
var season;
var tableUrl;
var matchDayUrl = [];
var leagueTitle;
var leagueId;
var numberOfMatchDays;

document.getElementById("year-dropdown").onchange = function(event) {
  
  // Check for change in dropdown menu, once changed calculate value to plug into url variable
  // Then run getData function with url variable
  
  var yearSelect = document.getElementById("year-dropdown").value;
  if ( yearSelect == "2015/16") {
    season = 2015;
  } 
  if ( yearSelect == "2016/17") {
    season = 2016;
  } 
  if ( yearSelect == "2017/18") {
    season = 2017;
  }

  url= 'https://api.football-data.org/v1/competitions/?season='+season+'';

  getData( function(data) {
    plotGraphs(data);
  });
  
};

function getData(callback) {
  
// Open new http request to get data to fill drop down list with Leagues available to view

var xhttp = new XMLHttpRequest();

xhttp.open("GET", url, true);
xhttp.setRequestHeader("X-Auth-Token","fcf729d656f64307888515cc3129de65");
xhttp.send();

// Check for any errors whilst getting the data

xhttp.addEventListener("error", urlLoadFailed);

xhttp.onreadystatechange = function(response) {
    if (this.readyState == 4 && this.status == 200) {
       // Callback data to pass into function once all returned ok.
       callback(JSON.parse(this.responseText));
    }
};
}

function getTableData(callback) {
  
// Open new http request to get data from drop down list to create league table

var xhttp = new XMLHttpRequest();


xhttp.open("GET", tableUrl, true);
xhttp.setRequestHeader("X-Auth-Token","fcf729d656f64307888515cc3129de65");
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Callback data to pass into function once all returned ok.
       callback(JSON.parse(this.responseText));
    }
};
}

function getMatchDayTableData(callback) {
  
// Open new http request to get data from each matchday related to league table selected

var xhttp = new XMLHttpRequest();

xhttp.open("GET", matchDayUrl, true);
xhttp.setRequestHeader("X-Auth-Token","fcf729d656f64307888515cc3129de65");
xhttp.send();

// Check for any errors whilst getting the data

xhttp.addEventListener("error", loadFailed);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Callback data to pass into function once all returned ok.
       document.getElementById("matchday-error").innerHTML = "";
       callback(JSON.parse(this.responseText));
    } 
};
}

function urlLoadFailed() {
  document.getElementById("league-selector").innerHTML = "Unable to display menu - please refresh and try again";
}

function loadFailed() {
  document.getElementById("matchday-error").innerHTML = "Unable to display graph - please refresh and try again";
}

function plotGraphs(transactionData) {

var ndx = crossfilter(transactionData);

show_league_selector(ndx);
document.querySelector('select[class="dc-select-menu"]').onchange=changeEventHandler;

}

function show_league_selector(ndx) {
    document.getElementById("league-choice").innerHTML = "Choose a Competition";
    dim = ndx.dimension(function(d) {return [d.caption, d.id]});
    group = dim.group();

    dc.selectMenu("#league-selector")
        .dimension(dim)
        .group(group);
        
    dc.renderAll();

}
 
function changeEventHandler(event) {
    
    // Clear leagueTitle and LeagueId variables so they can be overwritten when choice is made/changed
    
    leagueTitle = '';
    leagueId = '';
    if(!event.target.value) alert('Please Select One');
    else var teamstring = event.target.value; 
    
    var fields = teamstring.split(',');
    leagueTitle = fields[0];
    console.log(leagueTitle);
    leagueId = fields[1];
    
    // Check which competition has been chosen, if it is a cup competition then change url to show fixtures rather than table
    
    if (leagueTitle.includes("FA-Cup") || leagueTitle.includes("DFB-Pokal") || leagueTitle.includes("Champions League") || leagueTitle.includes("European Championship")) {
      tableUrl = '';
      tableUrl = 'https://api.football-data.org/v1/competitions/'+leagueId+'/fixtures';
      } else {
      tableUrl = '';
      tableUrl = 'https://api.football-data.org/v1/competitions/'+leagueId+'/leagueTable';
    }
    getTableData( function(data) {
        show_league_table(data);
    });
} 

function show_league_table(transactionData) {
  
  document.getElementById("league-position-by-matchday").innerHTML = "";
  document.getElementById("league-table").innerHTML = "";
  document.getElementById("league-name").innerHTML = leagueTitle;
  document.getElementById("league-heading").innerHTML = "Table";
  
  // Check for cup fixtures which have gone into Extra Time and/or Penalty shootout so we can indicate that in the table later.

  if ( leagueTitle.includes("FA-Cup") || leagueTitle.includes("DFB-Pokal") || leagueTitle.includes("World Cup") || leagueTitle.includes("Champions League") || leagueTitle.includes("European Championship")) {
    
    numberOfMatchDays = transactionData.fixtures[transactionData.fixtures.length-1].matchday;

    for(var i = 0; i < transactionData.fixtures.length; i++){
      
      if (((leagueTitle.includes("DFB-Pokal")) || (leagueTitle.includes("FA-Cup"))|| leagueTitle.includes("World Cup") || leagueTitle.includes("Champions League") || leagueTitle.includes("European Championship")) && (transactionData.fixtures[i].result.extraTime != null)) {
        transactionData.fixtures[i].result['goalsHomeTeam'] = transactionData.fixtures[i].result['goalsHomeTeam'] + transactionData.fixtures[i].result.extraTime['goalsHomeTeam'];
        transactionData.fixtures[i].result['goalsAwayTeam'] = transactionData.fixtures[i].result['goalsAwayTeam'] + transactionData.fixtures[i].result.extraTime['goalsAwayTeam'];
        transactionData.fixtures[i].extratime = true;
      
        if (transactionData.fixtures[i].result.penaltyShootout != null) {
          transactionData.fixtures[i].result['goalsHomeTeam'] = transactionData.fixtures[i].result['goalsHomeTeam'] + transactionData.fixtures[i].result.penaltyShootout['goalsHomeTeam'];
          transactionData.fixtures[i].result['goalsAwayTeam'] = transactionData.fixtures[i].result['goalsAwayTeam'] + transactionData.fixtures[i].result.penaltyShootout['goalsAwayTeam'];
          transactionData.fixtures[i].shootout = true;
        } else {
          transactionData.fixtures[i].shootout = false;
        }
        
      } else {
        transactionData.fixtures[i].extratime = false;
        transactionData.fixtures[i].shootout = false;
      }
      transactionData.fixtures[i].home =  transactionData.fixtures[i]['homeTeamName'];
      transactionData.fixtures[i].away =  transactionData.fixtures[i]['awayTeamName'];
      transactionData.fixtures[i].homeGoals =  transactionData.fixtures[i].result['goalsHomeTeam'];
      transactionData.fixtures[i].awayGoals =  transactionData.fixtures[i].result['goalsAwayTeam'];
      delete  transactionData.fixtures[i].homeTeamName;
      delete  transactionData.fixtures[i].awayTeamName;
    }
     
     
  
  	table = d3.select('#league-table').append('table').attr("class","table").attr("class","table-bordered");
  	var titles = d3.keys(transactionData.fixtures[0]);
  	
  	// Change the titles required so we can populate the data that we want in the correct order.
  	
  	titles.splice(4,4);
  	titles.splice(0,3);
  	arraymove(titles,2,3);
  		  
  	var headers = table.append('thead').append('tr')
  	              .selectAll('th')
  	              .data(titles)
  	              .enter()
  	              .append('th')
  	              .attr("style","text-transform:uppercase")
  	              .text( function (d) {
  	                     return d; 
  		            });
  
  	var rows = table.append('tbody').selectAll('tr')
  	           .data(transactionData.fixtures)
  	           .enter()
  	           .append('tr');
        
  		 
  	rows.selectAll('td')
  		  .data(function (d) {
  		   	return titles.map(function (k) {
  		   		return { 'value': d[k], 'name': k};
  	     	});
  	    })
  		  .enter()
  		  .append('td')
  		  .attr("style","text-align:center")
  		  .attr('data-th', function (d) {
  		    	return d.name;
  		  })
  		  .text(function (d) {
  		    	return d.value;
  		  });
  		    
  		    
  	for (var j = 0; j < rows[0].length; j++) {
  
  	    if (rows[0][j].__data__.extratime == true && rows[0][j].__data__.shootout == false) {
  		      rows[0][j].append('After Extra Time');
  
  	    } else if (rows[0][j].__data__.extratime == true && rows[0][j].__data__.shootout == true) {
  		      rows[0][j].append('After Penalties');
  	    }
  	    }
  } else {
    
  // Create table for league season data - append wiki link for more information on each league.
  
  var tag = '<a class="wiki-link" href="https://en.wikipedia.org/wiki/'+season+'%E2%80%93'+(season-1999)+'_';
  
  if ( leagueTitle.includes("Eredivisie")) {
    tag += 'Eredivisie" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("1. Bundesliga")) {
    tag += 'Bundesliga" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("2. Bundesliga")) {
    tag += '2._Bundesliga" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("3. Bundesliga")) {
    tag += '3._Bundesliga" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Premier League")) {
    tag += 'Premier_League" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Championship")) {
    tag += 'EFL_Championship" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("League One")) {
    tag += 'EFL_League_One" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("League Two")) {
    tag += 'EFL_League_Two" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("National League")) {
    tag += 'National_League" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("League Two")) {
    tag += 'EFL_League_Two" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Serie A")) {
    tag += 'Serie_A" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Serie B")) {
    tag += 'Serie_B" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Ligue 1")) {
    tag += 'Ligue_1" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Ligue 2")) {
    tag += 'Ligue_2" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Primeira Liga")) {
    tag += 'Primeira_Liga" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Liga Adelante")) {
    tag += 'Liga_Adelante" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Primera Division")) {
    tag += 'Primera_Division" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("Campeonata")) {
    tag = '<a href="https://en.wikipedia.org/wiki/'+season+'_Campeonato_Brasileiro_S%C3%A9rie_A" target="_blank" >Wiki Info for League Season</a>';
  } else if ( leagueTitle.includes("A League")) {
    tag += 'A-League" target="_blank" >Wiki Info for League Season</a>';
  }

  document.getElementById("league-info").innerHTML = tag;
      
  // Update column names to be more representative of data.
  
  for(var i = 0; i < transactionData.standing.length; i++){
    transactionData.standing[i].team =  transactionData.standing[i]['teamName'];
    transactionData.standing[i].played =  transactionData.standing[i]['playedGames'];
    transactionData.standing[i].for =  transactionData.standing[i]['goals'];
    transactionData.standing[i].against =  transactionData.standing[i]['goalsAgainst'];
    transactionData.standing[i].difference =  transactionData.standing[i]['goalDifference'];
    delete  transactionData.standing[i].teamName;
    delete  transactionData.standing[i].playedGames;
    delete  transactionData.standing[i].goals;
    delete  transactionData.standing[i].goalsAgainst;
    delete  transactionData.standing[i].goalDifference;
  }
  
  
  numberOfMatchDays = d3.values(transactionData)[2];

  var dataValues = d3.values(transactionData)[3];

	table = d3.select('#league-table').append('table').attr("class","table").attr("class","table-bordered");
	var titles = d3.keys(dataValues[0]);
		  titles.splice(7,2);
		  titles.splice(2,1);
		  titles.splice(0,1);
		  arraymove(titles,1,9);
		  arraymove(titles,4,1);
		  arraymove(titles,5,2);

	var headers = table.append('thead').append('tr')
	                   .selectAll('th')
	                   .data(titles).enter()
	                   .append('th')
	                   .attr("style","text-transform:uppercase")
	                   .text( function (d) {
			                    return d; 
	                    });

	var rows = table.append('tbody').selectAll('tr')
	                .data(dataValues)
	                .enter()
	                .append('tr');
		               
		 
	rows.selectAll('td')
		  .data(function (d) {
		   	return titles.map(function (k) {
		   		return { 'value': d[k], 'name': k};
		    	});
		    })
	    .enter()
	    .append('td')
	    .attr("style","text-align:center")
	    .attr('data-th', function (d) {
		    	return d.name;
		    })
	    .text(function (d) {
		    	return d.value;
	    });
		    
	 calculate_chart_data(function(data) {
            show_league_by_matchday(data);
    });
  }
}

function calculate_chart_data(callback) {

  var matchDayData = [{}];
  matchDayData["season"] = [];
  var matchDayString = {};
  var count = 0;
  
  // Get data for each matchday for the number of matchdays

  for (var i = 1; i <= numberOfMatchDays; i++) {
      matchDayUrl = 'https://api.football-data.org/v1/competitions/'+leagueId+'/leagueTable/?matchday='+i+'';
      console.log(matchDayUrl);
      getMatchDayTableData( function(data) {
        
        var matchDay = d3.values(data)[2];
        var standings = d3.values(data)[3];
        
        matchDayString["matchday"] = matchDay;
        
        // For each team update the team names so they can be read properly without error, eliminating certain characters in names (1. * .)

          for (var j = 0; j < standings.length; j++) {
          
            var team = data.standing[j].teamName;
            team = team.replace(/^\d+\.\s/, '');
            team = team.split('. ').join('_');
            team = team.split(' & ').join('_');
            team = team.split(' ').join('_');
            team = team.split('-').join('_');
            team = team.replace(/\./, '');

            matchDayString[team] = data.standing[j].position;
            }
            
        // Push the data into matchDayData array and then clear out the matchDayString object for the next loop
        
        matchDayData.season.push(matchDayString); 
        matchDayString = {};
        
        // Check to see where about in the loop we are so we can log that the data has been calculated.
        
        if (numberOfMatchDays == (count+1)) {
          
          console.log('MatchDayData calculated');
          callback(matchDayData);
        } else {
          count++;
        }
      });
  }

}

function show_league_by_matchday(data) {
  document.getElementById("league-position").innerHTML = "Position By Matchday";
  
  var legendSize = 18;
  var legendSpacing = 6;

  // Sort the data so that it is in numerical order of matchdays.

  var seasonData = data.season;
  seasonData.sort(function(a,b) {return a.matchday - b.matchday;});

  var ndx = crossfilter(data.season);
  var keys = d3.keys(d3.values(seasonData[0]));
  
  var matchday_dim = ndx.dimension(dc.pluck('matchday'));
  var minMatchday = matchday_dim.bottom(1)[0].matchday;
  var maxMatchday = matchday_dim.top(1)[0].matchday;

  var vis = d3.select("#league-position-by-matchday"),
    width = 800,
    height = 500,
    margins = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 40
    },
    xScale = d3.scale.linear().range([margins.left, width - margins.right]).domain([minMatchday,maxMatchday]),
    yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([keys.length -1,1]),
    xAxis = d3.svg.axis()
    .scale(xScale),
    yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");
    
    // Create x-axis
    
    vis.append("svg:g")
    .attr("transform", "translate(0," + (height - margins.bottom) + ")")
    .call(xAxis);
    
    // Set x-axis text
    
    vis.append("text")
      .attr("x", width / 2)
      .attr("y", height + margins.bottom)
      .style("text-anchor","middle")
      .text("Matchday");
    
    // Create y-axis
    
    vis.append("svg:g")
    .attr("transform", "translate(" + (margins.left) + ",0)")
    .call(yAxis);
    
    // Set y-axis text
    
    vis.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - 5)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Position");
    
    var keyValue = d3.keys(seasonData[1]);
    
    // Create tooltip to display when hovering over line
    
    var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("display", "block")
    .style("opacity","0");
    
    // Create legend and line for each team
    
    var legendData = [{}];
    var legendString = {};
    
    for (var i=1;i < keys.length; i++) {

        if ( d3.keys(seasonData[1]) == 'matchday' ) {
            console.log('Not a team name');
        } else {
        var team = 'd.'+keyValue[i];
        var teamColor = getRandomColor();

        legendString["team"] = keyValue[i];
        legendString["color"] = teamColor;
        legendData.push(legendString);
        legendString = {};

        var lineGen = d3.svg.line()
                        .x(function(d) {
                        return xScale(d.matchday);
                        })
                        .y(function(d) {
                        return yScale(eval(team));
                        });

        vis.append('svg:path')
             .attr('d', lineGen(seasonData))
             .attr('stroke', teamColor)
             .attr('stroke-width', 1)
             .attr("class", "line")
             .attr('id',function(d){ return keyValue[i]; })
             .attr('fill', 'none')
             .on("mouseover", function (d) { 
               
                // Select all the rest of the lines, except the one you are hovering on and drop their opacity
                
                var selectlines = $(".line").not(this);     
        	      d3.selectAll(selectlines)
        		    .style("opacity",0.2);

        		    var legendIcons = $(".legend").not(this.id);
        		    d3.selectAll(legendIcons)
        		    .style("opacity",0.2);
        		    
        		    // On mouseover of each line, give it a nice thick stroke, make the tooltip available and place it above the line
        		    
      		      d3.select(this)                          
        	      .style("stroke-width",'6px');
        	      tooltip
        		    .html(
                  "<div><p>" +this.id+ "</p></div><div><p></p></div>")
                .style("background", this.stroke)
                .style("left", (d3.event.pageX - 50) + "px")   
                .style("top", (d3.event.pageY - 50) + "px")
        		    .style("opacity","1");
        		    
        		    var legendId = '#legend-'+this.id;
        		    var nested = d3.select(''+legendId+'')
        		    .style("opacity","1");
        		    
        		    nested.selectAll("rect")
        		    .attr('width', legendSize*2);
                
                nested.selectAll("text")
        		    .attr('x', legendSize*2 + legendSpacing)
                .style("font-weight","500");
    	        })
    	        
    	          // Undo everything on the mouseout
    	          
    	        .on("mouseout",	function(d) {        
            		var selectlines = $(".line").not(this);
              	d3.selectAll(selectlines)
              		.style("opacity",1);
              		
              	var legendIcons = $(".legend").not(this.id);
              	d3.selectAll(legendIcons)
        		    .style("opacity",1);
        		    
        		    var legendId = '#legend-'+this.id;
        		    var nested = d3.select(''+legendId+'')
        		    .style("opacity","1");
        		    
        		    nested.selectAll("rect")
        		    .attr('width', legendSize);
                
                nested.selectAll("text")
        		    .attr('x', legendSize + legendSpacing)
                .style("font-weight","300");
              		
            		d3.select(this)
              		.style("stroke-width",'1px');
              		 tooltip
              		    .style("opacity","0");
          });

}
    var aspect = width / height;
    chart = d3.select('#league-position-by-matchday');
    d3.select(window)
    .on("resize", function() {
    var targetWidth = chart.node().getBoundingClientRect().width;
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
  });

  }
  
  // Remove the first item form legendData (which will be matchday number)
  
  legendData.shift();
  
  // Create legend

  var legend = vis.selectAll('.legend')
                 .data(legendData)
                 .enter()
                 .append('g')
                  .attr('class', 'legend')
                  .attr('id',function(d) { return 'legend-'+ d.team })
                  .attr('transform', function(d, i) {
                  var horz = width + legendSize;
                  var vert = (legendSize * i+1) + (2 * legendSpacing) + 4;
                  return 'translate(' + horz + ',' + vert + ')';
                  });
                  
            legend.append('rect')
                  .attr('width', legendSize)
                  .attr('height', legendSize)
                  .style('fill', function(d) { return d.color})
                  .style('stroke', function(d) { return d.color});
                  
                legend.append('text')
                  .attr('x', legendSize + legendSpacing)
                  .attr('y', legendSize - legendSpacing)                
                  .text( function(d) { return d.team });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}