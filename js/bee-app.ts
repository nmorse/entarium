import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

// honeyBee
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
  content:string = 'local content';
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


// BeeHive
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
  selector: 'bee-app'
})
@View({
  directives: [HoneyBee, BeeHive],
  templateUrl: 'template/bee-app.html'
})
class BeeApp {
  hb_content: string = 'passed in content';
  theWork: string = 'outside work for beehive';
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

bootstrap(BeeApp);
