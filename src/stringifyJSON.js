// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === null) {
    return "null";
  }

  if (obj.constructor === String) {
    return '"' + obj + '"';
  }

  if (obj.constructor === Array) {
    if (obj.length > 0) {
      var myArr = [];
      for (var i = 0; i < obj.length; i++) {
        myArr.push(stringifyJSON(obj[i]));
      }
      return '[' + myArr.join(",") + ']';
    } else {
      return '[]';
    }
  }

  if (obj.constructor === Object) {
    var keys = Object.keys(obj);
    if (keys.length > 0) {
      var myObj = '';
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        if (obj[key] === undefined || typeof obj[key] === 'function') {
          // not included in final string
        } else {
          if (j === keys.length - 1) {
            myObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          } else {
            myObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
          }
        }
      }
      return '{' + myObj + '}';
    } else {
      return '{}';
    }
  }

  return obj.toString();

};
