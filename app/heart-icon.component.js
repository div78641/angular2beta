System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeartIconComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartIconComponent = (function () {
                function HeartIconComponent() {
                    this.isSelected = false;
                    this.change = new core_1.EventEmitter();
                    this.likeCount = 25;
                }
                HeartIconComponent.prototype.onClick = function () {
                    this.isSelected = !this.isSelected;
                    this.likeCount = (this.isSelected) ? this.likeCount + 1 : this.likeCount - 1;
                    this.change.emit({ newValue: this.isSelected });
                };
                __decorate([
                    core_1.Input('is-selected'), 
                    __metadata('design:type', Boolean)
                ], HeartIconComponent.prototype, "isSelected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HeartIconComponent.prototype, "change", void 0);
                HeartIconComponent = __decorate([
                    core_1.Component({
                        selector: 'heart-icon',
                        templateUrl: 'app/heart-icon.template.html',
                        styles: ["\n        .grey-heart {color:#ccc;}\n        .pink-heart {color:deeppink;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartIconComponent);
                return HeartIconComponent;
            }());
            exports_1("HeartIconComponent", HeartIconComponent);
        }
    }
});
//# sourceMappingURL=heart-icon.component.js.map