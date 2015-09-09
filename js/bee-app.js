var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var GraphEditor = (function () {
    function GraphEditor() {
        this.content = 'local content';
        this.newContent = new angular2_1.EventEmitter();
    }
    GraphEditor.prototype.newContentReady = function () {
        console.log("from the bottom");
        this.newContent.next({ content: this.content });
    };
    GraphEditor.prototype.onChange = function (e, new_value) {
        this.content = new_value;
    };
    GraphEditor = __decorate([
        angular2_1.Component({
            events: ['newContent'],
            properties: ['content'],
            selector: 'graph-editor'
        }),
        angular2_1.View({
            template: '<h2>Graph Editor</h2>\
  <input #input1 (keyup)="onChange($event, input1.value)" [value]="content" />\
  <button (click)="newContentReady()">send content to be worked on</button>\
  '
        }), 
        __metadata('design:paramtypes', [])
    ], GraphEditor);
    return GraphEditor;
})();
var FlowerField = (function () {
    function FlowerField() {
        this.work = 'new Hive';
    }
    FlowerField = __decorate([
        angular2_1.Component({
            properties: ['work'],
            selector: 'flower-field'
        }),
        angular2_1.View({
            template: '\
    <h2>flower field</h2>\
    <div>{{work}}</div>\
  '
        }), 
        __metadata('design:paramtypes', [])
    ], FlowerField);
    return FlowerField;
})();
var BeeApp = (function () {
    function BeeApp() {
        this.theWork = 'outside work for beehive';
    }
    BeeApp.prototype.respondToNewContent = function (work) {
        console.log("to the top");
        console.log(work.content);
        this.theWork = work.content;
    };
    BeeApp = __decorate([
        angular2_1.Component({
            selector: 'bee-app'
        }),
        angular2_1.View({
            directives: [GraphEditor, FlowerField],
            templateUrl: 'template/bee-app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BeeApp);
    return BeeApp;
})();
var GraphService = (function () {
    function GraphService() {
        this.graphel = { graph: {}, nodes: [{ id: 'a' }, { id: 'b' }], edges: [{ from: 'a', to: 'b' }] };
    }
    return GraphService;
})();
angular2_1.bootstrap(BeeApp);
