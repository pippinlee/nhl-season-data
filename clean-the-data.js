// Format of score in data is important
// String should be "(<home> (x) - <away> (x) OT)"

// Will take data and calculate points per game and total
// points per date


var data = {
  //insert data here
};

var season = data["leafs-season"];

var totalPoints = 0;

// Replace the BUF with whichever team's data you're running
// If you were using TORONTO you'd replaced BUF with TOR

season.forEach(function(e){
   var home = /COL \(([^)]+)\) - \w{3} \(([^)]+)\)/.exec(e.score)[1];
   var away = /COL \(([^)]+)\) - \w{3} \(([^)]+)\)/.exec(e.score)[2];
   try {
       /COL \(([^)]+)\) - \w{3} \(([^)]+)\) (OT)?/.exec( e.score )[3];
       e.points = 1;
       totalPoints += 1;
       e.totalPoints = totalPoints;
   }
   catch(err) {
    if (home > away){
       e.points = 2;
       totalPoints += 2;
       e.totalPoints = totalPoints;
    } else {
      e.points = 0;
      e.totalPoints = totalPoints;
    }
   }
});

// print out data
console.log(JSON.stringify(data));

// you'll probably want prettify the json after as well

// now if we want to sort the data

data.forEach(function(l){
    console.log( l.teams.sort(function(a,b) { return parseFloat(b.points) - parseFloat(a.points) } ) )
})

data[“bruins-season"].forEach(function(e){
   for(var i = 0;i < final.length; i++) {
      if( final[i].date === e.date ){
         final[i].teams.push( {team: “bruins", totalPoints: e.totalPoints} );
         var rollOverPoints = e.totalPoints;
      }
   }
})



// -------

var final = final.map(function (game) {
    game.teams.push({team: 'bruins', totalPoints: 0});
    return game;
});

data["bruins-season"].forEach(function(e){
for(var i = 0; i < final.length; i++){
if( final[i].date === e.date ){
         final[i].teams.forEach(function (team) {
            if (team.team === 'bruins') team.totalPoints = e.totalPoints;
         });
    }
  }
});

console.log(final);

// --------

var final = final.map(function (game) {
  game.teams.push( {team: 'bruins', totalPoints: 0} );
  return game;
});

data['bruins-season'].forEach(function(e) {
  for(var i = 0; i < final.length; i++) {
    final.teams.forEach( function(team) {
      if (team.team === "bruins") {
        team.totalPoints = e.totalPoints;
      }
    })
  }
})

console.log(final);