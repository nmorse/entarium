import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

@Component({
  //>>appInjector: [GraphService],
  events : ['newcontent'],
  selector: 'honeybee'
})
@View({
  template: '<h2>Honey Bee</h2>\
  \
  <button (click)="newContentReady()">is good</button>\
  '
})
class HoneyBee {
  newcontent: EventEmitter;
  constructor (gs: GraphService) {
    //>>this.graph = gs.graphel;
    this.newcontent = new EventEmitter();
  }
  newContentReady() {
    console.log("from the bottom");
    this.newcontent.next();
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
    <honeybee (newcontent)="broadcastNewContent()"></honeybee>\
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
