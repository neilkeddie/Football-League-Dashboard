var url;
var season;
var tableUrl;
var matchDayUrl = [];
var leagueTitle;
var leagueId;
var numberOfMatchDays;

document.getElementById("2015").onclick = function(event) {
  season = 2015;
  url= 'https://api.football-data.org/v1/competitions/?season='+season+'';

  getData( function(data) {
    plotGraphs(data);
  });
  
};

document.getElementById("2016").onclick = function(event) {
  season = 2016;
  url = 'https://api.football-data.org/v1/competitions/?season='+season+'';
  
  getData( function(data) {
    plotGraphs(data);
  });
};

document.getElementById("2017").onclick = function(event) {
  season = 2017;
  url = 'https://api.football-data.org/v1/competitions/?season='+season+'';
  
  getData( function(data) {
    plotGraphs(data);
  });
  
};



function getData(callback) {
var xhttp = new XMLHttpRequest();


xhttp.open("GET", url, true);
xhttp.setRequestHeader("X-Auth-Token","fcf729d656f64307888515cc3129de65");
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       callback(JSON.parse(this.responseText));
    }
};
}

function getTableData(callback) {
var xhttp = new XMLHttpRequest();


xhttp.open("GET", tableUrl, true);
xhttp.setRequestHeader("X-Auth-Token","fcf729d656f64307888515cc3129de65");
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       callback(JSON.parse(this.responseText));
    }
};
}

function getMatchDayTableData(callback) {
var xhttp = new XMLHttpRequest();

xhttp.open("GET", matchDayUrl, true);
xhttp.setRequestHeader("X-Auth-Token","fcf729d656f64307888515cc3129de65");
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       callback(JSON.parse(this.responseText));
    } else {
        var headers = xhttp.status;
        console.log(headers);
    }
};
}

function plotGraphs(transactionData) {

var ndx = crossfilter(transactionData);

show_league_selector(ndx);
document.querySelector('select[class="dc-select-menu"]').onchange=changeEventHandler;

}

function show_league_selector(ndx) {
    dim = ndx.dimension(function(d) {return [d.caption, d.id]});
    group = dim.group();

    dc.selectMenu("#league-selector")
        .dimension(dim)
        .group(group);
        
    dc.renderAll();

}
 
function changeEventHandler(event) {
    leagueTitle = '';
    leagueId = '';
    if(!event.target.value) alert('Please Select One');
    else var teamstring = event.target.value; 

    var fields = teamstring.split(',');
    leagueTitle = fields[0];
    leagueId = fields[1];
    tableUrl = '';
    tableUrl = 'https://api.football-data.org/v1/competitions/'+leagueId+'/leagueTable';

    getTableData( function(data) {
        show_league_table(data);
    });
} 

function show_league_table(transactionData) {
  document.getElementById("league-position-by-matchday").innerHTML = "";
  document.getElementById("league-table").innerHTML = "";
  document.getElementById("league-name").innerHTML = leagueTitle;
  
  var tag = '<a href="https://en.wikipedia.org/wiki/'+season+'%E2%80%93'+(season-1999)+'_';
  
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

		  table = d3.select('#league-table').append('table');
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
		                   .text(function (d) {
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

function calculate_chart_data(callback) {
  var matchDayData = [{}];
  matchDayData["season"] = [];
  var matchDayString = {};
  var count = 0;

  for (var i = 1; i <= numberOfMatchDays; i++) {
      matchDayUrl = 'https://api.football-data.org/v1/competitions/'+leagueId+'/leagueTable/?matchday='+i+'';
      console.log(matchDayUrl);
      getMatchDayTableData( function(data) {
        
        var matchDay = d3.values(data)[2];
        var standings = d3.values(data)[3];
        
        matchDayString["matchday"] = matchDay;

                  for (var j = 0; j < standings.length; j++) {
          
                    var team = data.standing[j].teamName;
                    team = team.split(' ').join('_');
                    team = team.replace(/^\d+\.\_/, '');
                    team = team.replace(/\./, '');
                    matchDayString[team] = data.standing[j].position;
                    
                  }
        matchDayData.season.push(matchDayString); 
        matchDayString = {};
        
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
  
  var legendSize = 18;
  var legendSpacing = 6;

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
    
    vis.append("svg:g")
    .attr("transform", "translate(0," + (height - margins.bottom) + ")")
    .call(xAxis);
    
    vis.append("text")
      .attr("x", width / 2)
      .attr("y", height + margins.bottom)
      .style("text-anchor","middle")
      .text("Matchday");
    
    vis.append("svg:g")
    .attr("transform", "translate(" + (margins.left) + ",0)")
    .call(yAxis);
    
    vis.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margins.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Position");
    
    var keyValue = d3.keys(seasonData[1]);
    
    var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("display", "block")
    .style("opacity","0");
    
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
                var selectlines = $(".line").not(this);     //select all the rest of the lines, except the one you are hovering on and drop their opacity
        	      d3.selectAll(selectlines)
        		    .style("opacity",0.2);

        		    var legendIcons = $(".legend").not(legend-this.id);
        		    d3.selectAll(legendIcons)
        		    .style("opacity",0.2);
        		    
      		      d3.select(this)                          //on mouseover of each line, give it a nice thick stroke
        	      .style("stroke-width",'6px');
        	      tooltip
        		    .html(
                  "<div><p>" +this.id+ "</p></div><div><p></p></div>")
                .style("background", this.stroke)
                .style("left", (d3.event.pageX - 50) + "px")   
                .style("top", (d3.event.pageY - 50) + "px")
        		    .style("opacity","1");
        		    
        		    var legendId = '#legend-'+this.id;
        		    console.log(legendId);
        		    d3.select(''+legendId+'')
        		    .style("width","25px")
        		    .style("height","25px")
        		    .style("opacity","1");
        		    
    	        })
    	        .on("mouseout",	function(d) {        //undo everything on the mouseout
            		var selectlines = $(".line").not(this);
              	d3.selectAll(selectlines)
              		.style("opacity",1);
              		
              	var legendIcons = $(".legend").not(this.id);
              	d3.selectAll(legendIcons)
        		    .style("opacity",1);	
              		
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
  
  legendData.shift();

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