// var course = new Object();
//
// var course = {
//   title: "Course title",
//   inst: "Some guy",
//   view: 0,
//   updateViews: function(){
//     return ++course.views;
//   }
//
// }

function Course(title, inst, views){
  this.title = title;
  this.inst = inst;
  this.views = views;
  this.update = function() {
    return ++this.views;
  };
}

var courseInstance = new Course("JS Essentials","A dude",0);
console.log(courseInstance);

console.log(courseInstance.update());
console.log(courseInstance.update());
console.log(courseInstance.update());
console.log(courseInstance.update());
