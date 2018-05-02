var experiments = [

{ matchday : 1,  Borussia_Dortmund : 1 ,  FC_Bayern_München : 2 ,  Hertha_BSC : 3 ,  FC_Schalke_04 : 3 ,  Bor_Mönchengladbach : 5 ,  Hamburger_SV : 5 ,  TSG_1899_Hoffenheim : 5 ,  Hannover_96 : 5 ,  SC_Freiburg : 9 ,  Eintracht_Frankfurt : 9 ,  FC_Köln : 11 ,  FC_Augsburg : 11 ,  Werder_Bremen : 11 ,  FSV_Mainz_05 : 11 ,  Bayer_Leverkusen : 15 ,  VfB_Stuttgart : 16 ,  Red_Bull_Leipzig : 16 ,  VfL_Wolfsburg : 18 },
{ matchday : 2,  Borussia_Dortmund : 1 ,  FC_Bayern_München : 2 ,  Hamburger_SV : 3 ,  Hannover_96 : 4 ,  Bor_Mönchengladbach : 5 ,  TSG_1899_Hoffenheim : 5 ,  Red_Bull_Leipzig : 7 ,  FC_Schalke_04 : 8 ,  Hertha_BSC : 9 ,  VfB_Stuttgart : 10 ,  VfL_Wolfsburg : 11 ,  FC_Augsburg : 12 ,  Eintracht_Frankfurt : 13 ,  Bayer_Leverkusen : 14 ,  SC_Freiburg : 15 ,  FSV_Mainz_05 : 16 ,  FC_Köln : 17 ,  Werder_Bremen : 18 },
{ matchday : 3,  Borussia_Dortmund : 1 ,  TSG_1899_Hoffenheim : 2 ,  FC_Bayern_München : 3 ,  Hannover_96 : 4 ,  FC_Augsburg : 5 ,  Red_Bull_Leipzig : 6 ,  FC_Schalke_04 : 7 ,  Hertha_BSC : 8 ,  Bor_Mönchengladbach : 9 ,  Bayer_Leverkusen : 10 ,  Eintracht_Frankfurt : 11 ,  VfB_Stuttgart : 12 ,  VfL_Wolfsburg : 13 ,  FSV_Mainz_05 : 14 ,  Hamburger_SV : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 4,  Borussia_Dortmund : 1 ,  TSG_1899_Hoffenheim : 2 ,  Hannover_96 : 3 ,  Red_Bull_Leipzig : 4 ,  FC_Schalke_04 : 5 ,  FC_Bayern_München : 6 ,  Hamburger_SV : 7 ,  FC_Augsburg : 8 ,  Bor_Mönchengladbach : 9 ,  Hertha_BSC : 9 ,  Eintracht_Frankfurt : 11 ,  VfL_Wolfsburg : 12 ,  FSV_Mainz_05 : 13 ,  VfB_Stuttgart : 14 ,  SC_Freiburg : 15 ,  Werder_Bremen : 16 ,  Bayer_Leverkusen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 5,  Borussia_Dortmund : 1 ,  Hannover_96 : 2 ,  FC_Bayern_München : 3 ,  FC_Schalke_04 : 4 ,  TSG_1899_Hoffenheim : 5 ,  Red_Bull_Leipzig : 6 ,  FC_Augsburg : 7 ,  Hamburger_SV : 8 ,  VfB_Stuttgart : 9 ,  Bor_Mönchengladbach : 10 ,  Hertha_BSC : 11 ,  Bayer_Leverkusen : 12 ,  Eintracht_Frankfurt : 13 ,  VfL_Wolfsburg : 14 ,  FSV_Mainz_05 : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 6,  Borussia_Dortmund : 1 ,  FC_Bayern_München : 2 ,  TSG_1899_Hoffenheim : 3 ,  Hannover_96 : 4 ,  FC_Augsburg : 5 ,  FC_Schalke_04 : 6 ,  Bor_Mönchengladbach : 7 ,  Hertha_BSC : 8 ,  Red_Bull_Leipzig : 9 ,  Eintracht_Frankfurt : 10 ,  Hamburger_SV : 11 ,  VfB_Stuttgart : 12 ,  VfL_Wolfsburg : 13 ,  Bayer_Leverkusen : 14 ,  FSV_Mainz_05 : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 7,  Borussia_Dortmund : 1 ,  FC_Bayern_München : 2 ,  Red_Bull_Leipzig : 3 ,  TSG_1899_Hoffenheim : 4 ,  Bor_Mönchengladbach : 5 ,  FC_Schalke_04 : 6 ,  Eintracht_Frankfurt : 7 ,  FC_Augsburg : 8 ,  Hannover_96 : 9 ,  FSV_Mainz_05 : 10 ,  VfB_Stuttgart : 11 ,  Bayer_Leverkusen : 12 ,  Hertha_BSC : 13 ,  VfL_Wolfsburg : 14 ,  Hamburger_SV : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 8,  Borussia_Dortmund : 1 ,  FC_Bayern_München : 2 ,  TSG_1899_Hoffenheim : 3 ,  Red_Bull_Leipzig : 4 ,  Hannover_96 : 5 ,  FC_Augsburg : 6 ,  Bor_Mönchengladbach : 7 ,  Eintracht_Frankfurt : 8 ,  FC_Schalke_04 : 9 ,  Hertha_BSC : 10 ,  Bayer_Leverkusen : 11 ,  VfL_Wolfsburg : 12 ,  FSV_Mainz_05 : 13 ,  VfB_Stuttgart : 14 ,  SC_Freiburg : 15 ,  Hamburger_SV : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 9,  FC_Bayern_München : 1 ,  Borussia_Dortmund : 2 ,  Red_Bull_Leipzig : 3 ,  Hannover_96 : 4 ,  FC_Schalke_04 : 5 ,  Bor_Mönchengladbach : 6 ,  TSG_1899_Hoffenheim : 7 ,  Bayer_Leverkusen : 8 ,  FC_Augsburg : 9 ,  Eintracht_Frankfurt : 10 ,  Hertha_BSC : 11 ,  VfB_Stuttgart : 12 ,  FSV_Mainz_05 : 13 ,  VfL_Wolfsburg : 14 ,  SC_Freiburg : 15 ,  Hamburger_SV : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 10,  FC_Bayern_München : 1 ,  Red_Bull_Leipzig : 2 ,  Borussia_Dortmund : 3 ,  FC_Schalke_04 : 4 ,  TSG_1899_Hoffenheim : 5 ,  Hannover_96 : 6 ,  Eintracht_Frankfurt : 7 ,  Bor_Mönchengladbach : 8 ,  Bayer_Leverkusen : 9 ,  FC_Augsburg : 10 ,  Hertha_BSC : 11 ,  VfB_Stuttgart : 12 ,  FSV_Mainz_05 : 13 ,  VfL_Wolfsburg : 14 ,  Hamburger_SV : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 11,  Borussia_Dortmund : 1 ,  FC_Bayern_München : 2 ,  Red_Bull_Leipzig : 3 ,  TSG_1899_Hoffenheim : 4 ,  FC_Schalke_04 : 5 ,  Hannover_96 : 6 ,  Eintracht_Frankfurt : 7 ,  Bor_Mönchengladbach : 8 ,  Bayer_Leverkusen : 9 ,  FC_Augsburg : 10 ,  Hertha_BSC : 11 ,  FSV_Mainz_05 : 12 ,  VfB_Stuttgart : 13 ,  VfL_Wolfsburg : 14 ,  SC_Freiburg : 15 ,  Hamburger_SV : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 12,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Red_Bull_Leipzig : 3 ,  Bor_Mönchengladbach : 4 ,  Borussia_Dortmund : 5 ,  TSG_1899_Hoffenheim : 6 ,  Eintracht_Frankfurt : 7 ,  Hannover_96 : 8 ,  Bayer_Leverkusen : 9 ,  FC_Augsburg : 10 ,  VfB_Stuttgart : 11 ,  FSV_Mainz_05 : 12 ,  VfL_Wolfsburg : 13 ,  Hertha_BSC : 14 ,  Hamburger_SV : 15 ,  Werder_Bremen : 16 ,  SC_Freiburg : 17 ,  FC_Köln : 18 ,  },
{ matchday : 13,  FC_Bayern_München : 1 ,  Red_Bull_Leipzig : 2 ,  FC_Schalke_04 : 3 ,  Bor_Mönchengladbach : 4 ,  Borussia_Dortmund : 5 ,  Bayer_Leverkusen : 6 ,  TSG_1899_Hoffenheim : 7 ,  FC_Augsburg : 8 ,  Eintracht_Frankfurt : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  VfB_Stuttgart : 12 ,  FSV_Mainz_05 : 13 ,  VfL_Wolfsburg : 14 ,  Hamburger_SV : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 14,  FC_Bayern_München : 1 ,  Red_Bull_Leipzig : 2 ,  FC_Schalke_04 : 3 ,  Bor_Mönchengladbach : 4 ,  TSG_1899_Hoffenheim : 5 ,  Borussia_Dortmund : 6 ,  FC_Augsburg : 7 ,  Eintracht_Frankfurt : 8 ,  Bayer_Leverkusen : 9 ,  Hannover_96 : 10 ,  VfL_Wolfsburg : 11 ,  Hertha_BSC : 12 ,  VfB_Stuttgart : 13 ,  FSV_Mainz_05 : 14 ,  Hamburger_SV : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 15,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Borussia_Dortmund : 3 ,  Bayer_Leverkusen : 4 ,  Red_Bull_Leipzig : 5 ,  Bor_Mönchengladbach : 6 ,  TSG_1899_Hoffenheim : 7 ,  Eintracht_Frankfurt : 8 ,  FC_Augsburg : 9 ,  Hertha_BSC : 10 ,  Hannover_96 : 11 ,  VfL_Wolfsburg : 12 ,  SC_Freiburg : 13 ,  VfB_Stuttgart : 14 ,  FSV_Mainz_05 : 15 ,  Werder_Bremen : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 16,  FC_Bayern_München : 1 ,  Bayer_Leverkusen : 2 ,  FC_Schalke_04 : 3 ,  Red_Bull_Leipzig : 4 ,  Bor_Mönchengladbach : 5 ,  Borussia_Dortmund : 6 ,  Eintracht_Frankfurt : 7 ,  FC_Augsburg : 8 ,  TSG_1899_Hoffenheim : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  SC_Freiburg : 12 ,  VfL_Wolfsburg : 13 ,  VfB_Stuttgart : 14 ,  FSV_Mainz_05 : 15 ,  Werder_Bremen : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 17,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Red_Bull_Leipzig : 3 ,  Bayer_Leverkusen : 4 ,  TSG_1899_Hoffenheim : 5 ,  Borussia_Dortmund : 6 ,  Eintracht_Frankfurt : 7 ,  Bor_Mönchengladbach : 8 ,  FC_Augsburg : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  VfL_Wolfsburg : 12 ,  SC_Freiburg : 13 ,  VfB_Stuttgart : 14 ,  FSV_Mainz_05 : 15 ,  Hamburger_SV : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 18,  FC_Bayern_München : 1 ,  Red_Bull_Leipzig : 2 ,  FC_Schalke_04 : 3 ,  Borussia_Dortmund : 4 ,  Bayer_Leverkusen : 5 ,  Bor_Mönchengladbach : 6 ,  FC_Augsburg : 7 ,  TSG_1899_Hoffenheim : 7 ,  Eintracht_Frankfurt : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  VfL_Wolfsburg : 12 ,  VfB_Stuttgart : 13 ,  SC_Freiburg : 14 ,  FSV_Mainz_05 : 15 ,  Werder_Bremen : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 19,  FC_Bayern_München : 1 ,  Red_Bull_Leipzig : 2 ,  FC_Schalke_04 : 3 ,  Bor_Mönchengladbach : 4 ,  Bayer_Leverkusen : 5 ,  TSG_1899_Hoffenheim : 6 ,  FC_Augsburg : 7 ,  Borussia_Dortmund : 8 ,  Eintracht_Frankfurt : 9 ,  Hannover_96 : 10 ,  VfL_Wolfsburg : 11 ,  Hertha_BSC : 12 ,  VfB_Stuttgart : 13 ,  FSV_Mainz_05 : 14 ,  Hamburger_SV : 15 ,  SC_Freiburg : 16 ,  Werder_Bremen : 17 ,  FC_Köln : 18 ,  },
{ matchday : 20,  FC_Bayern_München : 1 ,  Bayer_Leverkusen : 2 ,  FC_Schalke_04 : 3 ,  Eintracht_Frankfurt : 4 ,  Red_Bull_Leipzig : 5 ,  Borussia_Dortmund : 6 ,  Bor_Mönchengladbach : 7 ,  FC_Augsburg : 8 ,  TSG_1899_Hoffenheim : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  SC_Freiburg : 12 ,  VfL_Wolfsburg : 13 ,  VfB_Stuttgart : 14 ,  FSV_Mainz_05 : 15 ,  Werder_Bremen : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 21,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Borussia_Dortmund : 3 ,  Bayer_Leverkusen : 4 ,  Eintracht_Frankfurt : 5 ,  Red_Bull_Leipzig : 6 ,  TSG_1899_Hoffenheim : 7 ,  FC_Augsburg : 8 ,  Bor_Mönchengladbach : 9 ,  VfB_Stuttgart : 10 ,  Hertha_BSC : 11 ,  Hannover_96 : 12 ,  Werder_Bremen : 13 ,  SC_Freiburg : 14 ,  VfL_Wolfsburg : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 22,  FC_Bayern_München : 1 ,  Red_Bull_Leipzig : 2 ,  Borussia_Dortmund : 3 ,  Eintracht_Frankfurt : 4 ,  Bayer_Leverkusen : 5 ,  FC_Schalke_04 : 6 ,  FC_Augsburg : 7 ,  TSG_1899_Hoffenheim : 8 ,  Hannover_96 : 9 ,  Bor_Mönchengladbach : 10 ,  Hertha_BSC : 11 ,  SC_Freiburg : 12 ,  VfL_Wolfsburg : 13 ,  VfB_Stuttgart : 14 ,  Werder_Bremen : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 23,  FC_Bayern_München : 1 ,  Bayer_Leverkusen : 2 ,  Red_Bull_Leipzig : 3 ,  Borussia_Dortmund : 4 ,  FC_Schalke_04 : 5 ,  Eintracht_Frankfurt : 6 ,  FC_Augsburg : 7 ,  Bor_Mönchengladbach : 8 ,  TSG_1899_Hoffenheim : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  SC_Freiburg : 12 ,  VfL_Wolfsburg : 13 ,  VfB_Stuttgart : 14 ,  Werder_Bremen : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 24,  FC_Bayern_München : 1 ,  Borussia_Dortmund : 2 ,  FC_Schalke_04 : 3 ,  Eintracht_Frankfurt : 4 ,  Bayer_Leverkusen : 5 ,  Red_Bull_Leipzig : 6 ,  Bor_Mönchengladbach : 7 ,  FC_Augsburg : 8 ,  TSG_1899_Hoffenheim : 9 ,  Hannover_96 : 10 ,  Hertha_BSC : 11 ,  VfB_Stuttgart : 12 ,  SC_Freiburg : 13 ,  Werder_Bremen : 14 ,  VfL_Wolfsburg : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 25,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Borussia_Dortmund : 3 ,  Eintracht_Frankfurt : 4 ,  Bayer_Leverkusen : 5 ,  Red_Bull_Leipzig : 6 ,  TSG_1899_Hoffenheim : 7 ,  Bor_Mönchengladbach : 8 ,  VfB_Stuttgart : 9 ,  FC_Augsburg : 10 ,  Hannover_96 : 11 ,  Hertha_BSC : 12 ,  SC_Freiburg : 13 ,  Werder_Bremen : 14 ,  VfL_Wolfsburg : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 26,  FC_Bayern_München : 1 ,  Borussia_Dortmund : 2 ,  Eintracht_Frankfurt : 3 ,  Bayer_Leverkusen : 4 ,  Red_Bull_Leipzig : 5 ,  FC_Schalke_04 : 6 ,  Hannover_96 : 7 ,  FC_Augsburg : 8 ,  TSG_1899_Hoffenheim : 9 ,  Bor_Mönchengladbach : 10 ,  Hertha_BSC : 11 ,  SC_Freiburg : 12 ,  VfB_Stuttgart : 13 ,  VfL_Wolfsburg : 14 ,  Werder_Bremen : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 27,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Bayer_Leverkusen : 3 ,  Borussia_Dortmund : 4 ,  Red_Bull_Leipzig : 5 ,  TSG_1899_Hoffenheim : 6 ,  Eintracht_Frankfurt : 7 ,  Bor_Mönchengladbach : 8 ,  Hertha_BSC : 9 ,  VfB_Stuttgart : 10 ,  FC_Augsburg : 11 ,  Werder_Bremen : 12 ,  Hannover_96 : 13 ,  VfL_Wolfsburg : 14 ,  FSV_Mainz_05 : 15 ,  SC_Freiburg : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  },
{ matchday : 28,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Borussia_Dortmund : 3 ,  Eintracht_Frankfurt : 4 ,  Bayer_Leverkusen : 5 ,  Red_Bull_Leipzig : 6 ,  TSG_1899_Hoffenheim : 7 ,  VfB_Stuttgart : 8 ,  Bor_Mönchengladbach : 9 ,  FC_Augsburg : 10 ,  Hertha_BSC : 11 ,  Werder_Bremen : 12 ,  Hannover_96 : 13 ,  SC_Freiburg : 14 ,  VfL_Wolfsburg : 15 ,  FSV_Mainz_05 : 16 ,  FC_Köln : 17 ,  Hamburger_SV : 18 ,  },
{ matchday : 29,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Borussia_Dortmund : 3 ,  Red_Bull_Leipzig : 4 ,  Bayer_Leverkusen : 5 ,  Eintracht_Frankfurt : 6 ,  TSG_1899_Hoffenheim : 7 ,  VfB_Stuttgart : 8 ,  Bor_Mönchengladbach : 9 ,  FC_Augsburg : 10 ,  Hertha_BSC : 11 ,  Werder_Bremen : 12 ,  Hannover_96 : 13 ,  SC_Freiburg : 14 ,  VfL_Wolfsburg : 15 ,  FSV_Mainz_05 : 16 ,  FC_Köln : 17 ,  Hamburger_SV : 18 ,  },
{ matchday : 30,  FC_Bayern_München : 1 ,  FC_Schalke_04 : 2 ,  Borussia_Dortmund : 3 ,  Bayer_Leverkusen : 4 ,  Eintracht_Frankfurt : 5 ,  Red_Bull_Leipzig : 6 ,  TSG_1899_Hoffenheim : 7 ,  Bor_Mönchengladbach : 8 ,  VfB_Stuttgart : 9 ,  Hertha_BSC : 10 ,  FC_Augsburg : 11 ,  Werder_Bremen : 12 ,  Hannover_96 : 13 ,  SC_Freiburg : 14 ,  VfL_Wolfsburg : 15 ,  FSV_Mainz_05 : 16 ,  Hamburger_SV : 17 ,  FC_Köln : 18 ,  }

];
var ndx = crossfilter(experiments);
var keys = d3.keys(d3.values(experiments)[0]);
var matchday_dim = ndx.dimension(dc.pluck('matchday'));

var minMatchday = matchday_dim.bottom(1)[0].matchday;
var maxMatchday = matchday_dim.top(1)[0].matchday;
var vis = d3.select("#fixtures"),
    width = 1000,
    height = 500,
    margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
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
    
    vis.append("svg:g")
    .attr("transform", "translate(" + (margins.left) + ",0)")
    .call(yAxis);
    
    var keyValue = d3.keys(experiments[1]);
    
    for (var i=1;i < keys.length -1; i++) {
        if ( d3.keys(experiments[1][i]) == 'matchday' ) {
            console.log('Not a team name');
        } else {
        var team = 'd.'+keyValue[i];
        var lineGen = d3.svg.line()
                        .x(function(d) {
                        return xScale(d.matchday);
                        })
                        .y(function(d) {
                        return yScale(eval(team));
                        });

        vis.append('svg:path')
             .attr('d', lineGen(experiments))
             .attr('stroke', 'black')
             .attr('stroke-width', 2)
             .attr('fill', 'none');
    }
}


