import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

@Component({
  //>>appInjector: [GraphService],
  events : ['newContent'],
  properties: ['content'],
  selector: 'honeybee'
})
@View({
  template: '<h2>Honey Bee</h2>\
  <input (keyup)="onChange($event, content)" #content [value]="content" />\
  <button (click)="newContentReady()">send content to be worked on</button>\
  '
})
class HoneyBee {
  newContent: EventEmitter;
  content:string = 'hi';
  constructor (gs: GraphService) {
    //>>this.graph = gs.graphel;
    this.newContent = new EventEmitter();
  }
  newContentReady() {
    console.log("from the bottom");
    this.newContent.next(this.content);
  }
  onChange(e, content) {
    this.content = content.value;
    alert(content.value);
  }
}

@Component({
  properties: ['work'],
  selector: 'beehive'
})
@View({
  template: '\
    <h2>Bee Hive</h2>\
    <div>{{work}}</div>\
  '
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
    <honeybee (new-content)="broadcastNewContent($event)"></honeybee>\
    <beehive [work]="theWork" ></beehive>\
  '
})
class AppComponent {
  theWork: string = '';
  broadcastNewContent(work) {
    console.log("to the top");
    console.log(work);
    this.theWork = 'new work to be done';
  }
}


class GraphService {
  graphel: Object;
  constructor() {
    this.graphel = {graph:{}, nodes:[{id:'a'}, {id:'b'}], edges:[{from:'a', to:'b'}]};
  }
}

bootstrap(AppComponent);
