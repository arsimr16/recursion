// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  function matchClassName(element) {
	if (_(element.classList).contains(className)) {
	  result.push(element);
	}
	_(element.childNodes).forEach(function(child) {
	  matchClassName(child);
	});
  }
  matchClassName(document.body);
  return result;
};


