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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paginated_response_dto_1 = require("../../shared/pagination/paginated-response.dto");
const tournament_dto_1 = require("./dto/tournament.dto");
const tournament_service_1 = require("./tournament.service");
let TournamentController = class TournamentController {
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    async findAll(filters) {
        return this.tournamentService.findAll(filters);
    }
    findOne(tournamenUuid) {
        return this.tournamentService.findOne(tournamenUuid);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Ok',
        type: (paginated_response_dto_1.PaginatedResponseDto),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
        type: Error,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tournament_dto_1.GetTournamentsInputDto]),
    __metadata("design:returntype", Promise)
], TournamentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':tournamenUuid'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Ok',
        type: tournament_dto_1.GetTournamentResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
        type: Error,
    }),
    __param(0, (0, common_1.Param)('tournamenUuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TournamentController.prototype, "findOne", null);
TournamentController = __decorate([
    (0, common_1.Controller)('tournaments'),
    (0, swagger_1.ApiTags)('Tournament'),
    __metadata("design:paramtypes", [tournament_service_1.TournamentService])
], TournamentController);
exports.TournamentController = TournamentController;
//# sourceMappingURL=tournament.controller.js.map