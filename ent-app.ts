import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  appInjector: [GraphService],
  selector: 'honeybee'
})
@View({
  template: '<h2>Honey Bee</h2>\
  {{graph.nodes[0].id}}\
  '
})
class HoneyBee {
  constructor (gs: GraphService) {
    this.graph = gs.graphel;
  }
}

@Component({
  selector: 'beehive'
})
@View({
  template: '<h2>Bee Hive</h2>'
})
class BeeHive {
}


@Component({
  selector: 'ent-app'
})
@View({
  directives: [HoneyBee, BeeHive],
  template: '\
    <h1>first Angular 2 App using TypeScript</h1>\
    <honeybee></honeybee>\
    <beehive></beehive>\
  '
})
class AppComponent {
}


class GraphService {
  graphel: Array<string>;
  constructor() {
    this.graphel = {graph:{}, nodes:[{id:'a'}, {id:'b'}], edges:[{from:'a', to:'b'}]};
  }
}

bootstrap(AppComponent);
