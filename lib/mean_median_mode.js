var MeanMedianMode = function() {

var sum = 0;

this.mean = function(array) {
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

this.mode = function(array) {
  var count = {};
  var highest = 0;
  var winner;
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    count[num] = (count[num] || 0) + 1;
  }

  for (var prop in count) {
    if (count[prop] >= highest) {
      highest = count[prop];
    }
  }

  for (var property in count) {
    if (count[property] == highest) {
      winner = property;
    }
  }
  return Number(winner);
};

this.median = function(array) {
  var halved = array.length / 2;
  if (array.length % 2 === 0) {
    return (array[halved] + array[halved - 1]) / 2;
  } else {
    return array[Math.round(halved) - 1];
  }
};
};

var mmm = new MeanMedianMode();
module.exports = mmm;
