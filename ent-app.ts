import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

@Component({
  //appInjector: [GraphService],
  events : ['newContent'],
  properties: ['content'],
  selector: 'honeybee'
})
@View({
  template: '<h2>Honey Bee</h2>\
  <input #input1 (keyup)="onChange($event, input1.value)" [value]="content" />\
  <button (click)="newContentReady()">send content to be worked on</button>\
  '
})
class HoneyBee {
  newContent: EventEmitter;
  content:string = 'emit content';
  constructor (gs: GraphService) {
    //>>this.graph = gs.graphel;
    this.newContent = new EventEmitter();
  }
  newContentReady() {
    console.log("from the bottom");
    this.newContent.next({content: this.content});
  }
  onChange(e, new_value) {
    this.content = new_value;
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
  work:string = 'new Hive';
}


@Component({
  selector: 'ent-app'
})
@View({
  directives: [HoneyBee, BeeHive],
  template: '\
    <h1>Angular 2 Up-a-Down </h1>\
    <honeybee (new-content)="broadcastNewContent($event)"></honeybee>\
    <beehive [work]="theWork" ></beehive>\
  '
})
class AppComponent {
  //theWork: string = 'first time beehive content';
  broadcastNewContent(work) {
    console.log("to the top");
    console.log(work.content);
    this.theWork = work.content;
  }
}


class GraphService {
  graphel: Object;
  constructor() {
    this.graphel = {graph:{}, nodes:[{id:'a'}, {id:'b'}], edges:[{from:'a', to:'b'}]};
  }
}

bootstrap(AppComponent);
