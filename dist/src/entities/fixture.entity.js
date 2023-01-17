"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fixture = void 0;
const typeorm_1 = require("typeorm");
const shared_1 = require("../shared");
const team_entity_1 = require("./team.entity");
const tournament_entity_1 = require("./tournament.entity");
let Fixture = class Fixture extends shared_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Fixture.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.uuid, { nullable: false }),
    __metadata("design:type", team_entity_1.Team)
], Fixture.prototype, "homeTeam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.uuid, { nullable: false }),
    __metadata("design:type", team_entity_1.Team)
], Fixture.prototype, "awayTeam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournament_entity_1.Tournament, (tournament) => tournament.uuid, { nullable: false }),
    __metadata("design:type", tournament_entity_1.Tournament)
], Fixture.prototype, "tournament", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Fixture.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Fixture.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0, nullable: true }),
    __metadata("design:type", Number)
], Fixture.prototype, "homeScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0, nullable: true }),
    __metadata("design:type", Number)
], Fixture.prototype, "awayScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint' }),
    __metadata("design:type", String)
], Fixture.prototype, "status", void 0);
Fixture = __decorate([
    (0, typeorm_1.Entity)({ name: 'fixtures' })
], Fixture);
exports.Fixture = Fixture;
//# sourceMappingURL=fixture.entity.js.map