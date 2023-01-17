"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FixtureEventService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixtureEventService = void 0;
const common_1 = require("@nestjs/common");
const events_1 = require("events");
const rxjs_1 = require("rxjs");
let FixtureEventService = FixtureEventService_1 = class FixtureEventService {
    constructor() {
        this.logger = new common_1.Logger(FixtureEventService_1.name);
        this.emitter = new events_1.EventEmitter();
    }
    subscribeUpdatedFixtureEvent() {
        return (0, rxjs_1.fromEvent)(this.emitter, 'fixture_updated');
    }
    async emitEvent(event, data) {
        this.emitter.emit(event, { data });
    }
};
FixtureEventService = FixtureEventService_1 = __decorate([
    (0, common_1.Injectable)()
], FixtureEventService);
exports.FixtureEventService = FixtureEventService;
//# sourceMappingURL=fixture-event.service.js.map