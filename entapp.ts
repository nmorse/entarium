
class Turtlearium {
}
Turtlearium.annotations = [
  new angular.ComponentAnnotation({
    selector: 'turtlearium',
  }),
  new angular.ViewAnnotation({
    templateUrl: 'views/turtlearium.html'
  })
];

function Honeybee() {
  this.currentGraph = "none";
  this.onNewSource = function onNewSource(graphlet_name) {
    alert("load new source");
    this.currentGraph = graphlet_name;
  };

}
Honeybee.annotations = [
  new angular.ComponentAnnotation({
    selector: 'honeybee',
  }),
  new angular.ViewAnnotation({
    templateUrl: 'views/honeybee.html'
  })
];

function App() {
}
App.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app',
  }),
  new angular.ViewAnnotation({
    directives: [Honeybee, Turtlearium],
    template: '<menu>menu</menu><honeybee></honeybee><turtlearium></turtlearium>'
  })
];
