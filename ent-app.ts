import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

@Component({
  //>>appInjector: [GraphService],
  events : ['newContent'],
  selector: 'honeybee'
})
@View({
  template: '<h2>Honey Bee</h2>\
  \
  <button (click)="newContentReady()">is good</button>\
  '
})
class HoneyBee {
  newContent: EventEmitter;
  constructor (gs: GraphService) {
    //>>this.graph = gs.graphel;
    this.newContent = new EventEmitter();
  }
  newContentReady() {
    console.log("from the bottom");
    this.newContent.next();
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
    <honeybee (new-content)="broadcastNewContent()"></honeybee>\
    <beehive></beehive>\
  '
})
class AppComponent {
  broadcastNewContent() {
    console.log("to the top");
  }
}


class GraphService {
  graphel: Object;
  constructor() {
    this.graphel = {graph:{}, nodes:[{id:'a'}, {id:'b'}], edges:[{from:'a', to:'b'}]};
  }
}

bootstrap(AppComponent);
