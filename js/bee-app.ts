import {Component, View, bootstrap, EventEmitter} from 'angular2/angular2';

// graph editor
@Component({
  //injector: [GraphService],
  events : ['newContent'],
  properties: ['content'],
  selector: 'graph-editor'
})
@View({
  template: '<h2>Graph Editor</h2>\
  <input #input1 (keyup)="onChange($event, input1.value)" [value]="content" />\
  <button (click)="newContentReady()">send content to be worked on</button>\
  '
})
class GraphEditor {
  newContent: EventEmitter;
  content:string = 'local content';
  constructor () {
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


// flowerfield
@Component({
  properties: ['work'],
  selector: 'flower-field'
})
@View({
  template: '\
    <h2>flower field</h2>\
    <div>{{work}}</div>\
  '
})
class FlowerField {
  work:string = 'new Hive';
}

@Component({
  selector: 'bee-app'
})
@View({
  directives: [GraphEditor, FlowerField],
  templateUrl: 'template/bee-app.html'
})
class BeeApp {
  theWork: string = 'outside work for beehive';
  respondToNewContent(work) {
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
