function Turtlearium() {
}
Turtlearium.annotations = [
  new angular.ComponentAnnotation({
    selector: 'turtlearium',
  }),
  new angular.ViewAnnotation({
    template: '<canvas></canvas>'
  })
];

function Honeybee() {
  this.onNewSource = function onNewSource() {
    alert("load new source");
  };

}
Honeybee.annotations = [
  new angular.ComponentAnnotation({
    selector: 'honeybee',
  }),
  new angular.ViewAnnotation({
    template: '<graphlet (loadGraph)="onNewSource">graphlet</graphlet>'
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
