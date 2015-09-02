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
var HoneyBee = (function () {
    function HoneyBee(gs) {
        this.newContent = new angular2_1.EventEmitter();
    }
    HoneyBee.prototype.newContentReady = function () {
        console.log("from the bottom");
        this.newContent.next();
    };
    HoneyBee = __decorate([
        angular2_1.Component({
            events: ['newContent'],
            selector: 'honeybee'
        }),
        angular2_1.View({
            template: '<h2>Honey Bee</h2>\
  \
  <button (click)="newContentReady()">is good</button>\
  '
        }), 
        __metadata('design:paramtypes', [])
    ], HoneyBee);
    return HoneyBee;
})();
var BeeHive = (function () {
    function BeeHive() {
    }
    BeeHive = __decorate([
        angular2_1.Component({
            properties: ['work'],
            selector: 'beehive'
        }),
        angular2_1.View({
            template: '\
    <h2>Bee Hive</h2>\
    <div>{{work}}</div>\
  '
        }), 
        __metadata('design:paramtypes', [])
    ], BeeHive);
    return BeeHive;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.theWork = '';
    }
    AppComponent.prototype.broadcastNewContent = function () {
        console.log("to the top");
        this.theWork = 'new work to be done';
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'ent-app'
        }),
        angular2_1.View({
            directives: [HoneyBee, BeeHive],
            template: '\
    <h1>first Angular 2 App using TypeScript</h1>\
    <honeybee (new-content)="broadcastNewContent()"></honeybee>\
    <beehive [work]="theWork" ></beehive>\
  '
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var GraphService = (function () {
    function GraphService() {
        this.graphel = { graph: {}, nodes: [{ id: 'a' }, { id: 'b' }], edges: [{ from: 'a', to: 'b' }] };
    }
    return GraphService;
})();
angular2_1.bootstrap(AppComponent);
