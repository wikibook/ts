var rectangle = { width: 20, height: 40, background: "blue", isView: false };
var {width, height, background, isView} = rectangle;
console.log(width, height, background, isView);

var {width, ...restElement} = rectangle;
console.log(restElement);
