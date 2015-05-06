### NHL data 2014-2015 🚨

For now the data found for each team is separated into divisions.

A good trick I found when scraping the data was all teams schedules and results follow the URL pattern

`<team name>.nhl.com/club/schedule.htm?season=20142015&gameType=2`

Where `<team name>` can be swapped out for any of the following array of teams:

	var nhlTeamList = ["bruins","habs","leafs","panthers","sabres","sens","tampa","wings","avalanche","blackhawks","blues","jets","predators","stars","wild","bluejackets","capitals","devils","flyers","hurricanes","islanders","penguins","rangers","canucks","coyotes","ducks","flames","kings","oilers","sharks"];`

Each team includes

* Each game
* Score of game
* Points won per game
* Total acccumulated points so far in season

The format looks like the following:

	...
	{
      "date":"Wed Oct 15, 2014",
      "score":"DET (2) - BOS (3) OT",
      "points":1,
      "totalPoints":3
    },
    {
      "date":"Fri Oct 17, 2014",
      "score":"DET (4) - TOR (1)",
      "points":2,
      "totalPoints":5
    },
    {
      "date":"Sat Oct 18, 2014",
      "score":"DET (1) - TOR (0)",
      "points":2,
      "totalPoints":7
    },
    ...