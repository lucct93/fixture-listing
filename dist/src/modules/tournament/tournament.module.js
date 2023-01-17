"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const tournament_controller_1 = require("./tournament.controller");
const tournament_service_1 = require("./tournament.service");
let TournamentModule = class TournamentModule {
};
TournamentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Tournament])],
        controllers: [tournament_controller_1.TournamentController],
        providers: [tournament_service_1.TournamentService],
        exports: [tournament_service_1.TournamentService],
    })
], TournamentModule);
exports.TournamentModule = TournamentModule;
//# sourceMappingURL=tournament.module.js.map