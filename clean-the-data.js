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
   var home = /BUF \(([^)]+)\) - \w{3} \(([^)]+)\)/.exec(e.score)[1];
   var away = /BUF \(([^)]+)\) - \w{3} \(([^)]+)\)/.exec(e.score)[2];
   try {
       /BUF \(([^)]+)\) - \w{3} \(([^)]+)\) (OT)?/.exec( e.score )[3];
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