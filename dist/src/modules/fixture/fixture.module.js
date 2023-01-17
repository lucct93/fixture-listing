"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixtureModule = void 0;
const common_1 = require("@nestjs/common");
const fixture_service_1 = require("./fixture.service");
const fixture_controller_1 = require("./fixture.controller");
const team_module_1 = require("../team/team.module");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const tournament_module_1 = require("../tournament/tournament.module");
const fixture_event_service_1 = require("./fixture-event.service");
let FixtureModule = class FixtureModule {
};
FixtureModule = __decorate([
    (0, common_1.Module)({
        imports: [team_module_1.TeamModule, typeorm_1.TypeOrmModule.forFeature([entities_1.Fixture]), tournament_module_1.TournamentModule],
        controllers: [fixture_controller_1.FixtureController],
        providers: [fixture_service_1.FixtureService, fixture_event_service_1.FixtureEventService],
    })
], FixtureModule);
exports.FixtureModule = FixtureModule;
//# sourceMappingURL=fixture.module.js.map