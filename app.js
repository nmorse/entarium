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
}
Honeybee.annotations = [
  new angular.ComponentAnnotation({
    selector: 'honeybee',
  }),
  new angular.ViewAnnotation({
    template: '<graphlet>graphlet</graphlet>'
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
