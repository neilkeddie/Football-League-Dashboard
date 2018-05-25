Football Data Dashboard

This project uses JSON data from http://api.football-data.org/index to display the information.

League Tables

There are several league table selections from 2015/16 season through to 2017/18 season to choose from.
Once you have chosen a league then the table will display from the last available matchday, so for seasons that are finished it will be the final 
league table.

Once this has been created a line graph will appear below depicting a League Position by Matchday graph, which shows how each team has moved about 
the league over the course of the season.

Cup Competitions

There are a few choices for cup competitions - FA Cup, DFB Pokal, Champions League, European Championships and (hopefully) the World Cup in the Summer.
When these are chosen the table shows the results from each round (the European Championships and Champions League show the group stage results but not
the leagues - these hadn't been created on the API). If a game has gone to extra time or penalties this will be shown as well as the overall score.

Coding

The main part of the code is written in Javascript, there are some HTML & CSS used also.

Re-used code

I have used a random colour generator function to depict the colour of each line in the line graph.