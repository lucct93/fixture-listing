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
exports.GetFixturesCalendarInputDto = exports.GetFixturesInputDto = exports.UpdateFixtureInputDto = exports.GetFixtureResponseDto = exports.CreateFixtureInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const team_dto_1 = require("../../../modules/team/dto/team.dto");
const tournament_dto_1 = require("../../../modules/tournament/dto/tournament.dto");
const shared_1 = require("../../../shared");
const paginatio_input_dto_1 = require("../../../shared/pagination/paginatio-input.dto");
class CreateFixtureInputDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Home Team Uuid',
        example: '1',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFixtureInputDto.prototype, "homeTeamUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Away Team Uuid',
        example: '2',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFixtureInputDto.prototype, "awayTeamUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Tournament Uuid',
        example: '3',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFixtureInputDto.prototype, "tournamentUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: true,
        description: 'Start Match',
        example: '2023-01-13T09:30:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateFixtureInputDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: true,
        description: 'Start Match',
        example: '2023-01-13T12:00:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateFixtureInputDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'home score',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFixtureInputDto.prototype, "homeScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'away score',
        example: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFixtureInputDto.prototype, "awayScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'enum',
        enum: shared_1.EFixtureStatus,
        default: shared_1.EFixtureStatus.FUTURE,
    }),
    (0, class_validator_1.IsEnum)(shared_1.EFixtureStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFixtureInputDto.prototype, "status", void 0);
exports.CreateFixtureInputDto = CreateFixtureInputDto;
class GetFixtureResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: '',
        example: '1',
    }),
    __metadata("design:type", String)
], GetFixtureResponseDto.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: team_dto_1.GetTeamResponseDto,
        required: true,
        description: 'homeTeam',
        example: '',
    }),
    __metadata("design:type", team_dto_1.GetTeamResponseDto)
], GetFixtureResponseDto.prototype, "homeTeam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: team_dto_1.GetTeamResponseDto,
        required: true,
        description: 'homeTeam',
        example: '',
    }),
    __metadata("design:type", team_dto_1.GetTeamResponseDto)
], GetFixtureResponseDto.prototype, "awayTeam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: tournament_dto_1.GetTournamentResponseDto,
        required: true,
        description: 'tournament',
        example: '',
    }),
    __metadata("design:type", tournament_dto_1.GetTournamentResponseDto)
], GetFixtureResponseDto.prototype, "tournament", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        description: 'start date',
        example: '',
    }),
    __metadata("design:type", Date)
], GetFixtureResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        description: 'end date',
        example: '',
    }),
    __metadata("design:type", Date)
], GetFixtureResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'home score',
        example: 1,
    }),
    __metadata("design:type", Number)
], GetFixtureResponseDto.prototype, "homeScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'away score',
        example: 0,
    }),
    __metadata("design:type", Number)
], GetFixtureResponseDto.prototype, "awayScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'enum',
        enum: shared_1.EFixtureStatus,
        default: shared_1.EFixtureStatus.FUTURE,
    }),
    __metadata("design:type", String)
], GetFixtureResponseDto.prototype, "status", void 0);
exports.GetFixtureResponseDto = GetFixtureResponseDto;
class UpdateFixtureInputDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Home Team Uuid',
        example: '1',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFixtureInputDto.prototype, "homeTeamUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Away Team Uuid',
        example: '2',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFixtureInputDto.prototype, "awayTeamUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Season Uuid',
        example: '3',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFixtureInputDto.prototype, "tournamentUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: true,
        description: 'Start Match',
        example: '2023-01-13T09:30:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateFixtureInputDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: true,
        description: 'Start Match',
        example: '2023-01-13T12:00:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateFixtureInputDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'home score',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateFixtureInputDto.prototype, "homeScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'away score',
        example: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateFixtureInputDto.prototype, "awayScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'enum',
        enum: shared_1.EFixtureStatus,
        default: shared_1.EFixtureStatus.LIVE,
    }),
    (0, class_validator_1.IsEnum)(shared_1.EFixtureStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFixtureInputDto.prototype, "status", void 0);
exports.UpdateFixtureInputDto = UpdateFixtureInputDto;
class GetFixturesInputDto extends paginatio_input_dto_1.PaginationInputDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'tournamentUuid',
        example: '1',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetFixturesInputDto.prototype, "tournamentUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'date',
        example: '2023-01-13',
    }),
    (0, class_validator_1.Matches)(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: '$property must be formatted as yyyy-mm-dd',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetFixturesInputDto.prototype, "fromDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'date',
        example: '2023-01-31',
    }),
    (0, class_validator_1.Matches)(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: '$property must be formatted as yyyy-mm-dd',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetFixturesInputDto.prototype, "toDate", void 0);
exports.GetFixturesInputDto = GetFixturesInputDto;
class GetFixturesCalendarInputDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'date',
        example: '2023-01-13',
    }),
    (0, class_validator_1.Matches)(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: '$property must be formatted as yyyy-mm-dd',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetFixturesCalendarInputDto.prototype, "fromDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'date',
        example: '2023-01-31',
    }),
    (0, class_validator_1.Matches)(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: '$property must be formatted as yyyy-mm-dd',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetFixturesCalendarInputDto.prototype, "toDate", void 0);
exports.GetFixturesCalendarInputDto = GetFixturesCalendarInputDto;
//# sourceMappingURL=fixture.dto.js.map