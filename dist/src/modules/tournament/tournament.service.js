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
var TournamentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const typeorm_2 = require("typeorm");
const helpers_1 = require("../../shared/helpers");
const IMPORT_TOURNAMENTS = require("../../../public/tournaments.json");
const paginated_response_dto_1 = require("../../shared/pagination/paginated-response.dto");
let TournamentService = TournamentService_1 = class TournamentService {
    constructor(tournamentRepo) {
        this.tournamentRepo = tournamentRepo;
        this.logger = new common_1.Logger(TournamentService_1.name);
    }
    async onModuleInit() {
        this.logger.log(`Starting seeding example Leagues ${new Date()}`);
        const isInitilized = await this.tournamentRepo.count();
        if (isInitilized) {
            this.logger.log(`Finish seeding example Leagues ${new Date()}`);
            return;
        }
        const data = IMPORT_TOURNAMENTS.map((e) => this.tournamentRepo.create({
            uuid: e === null || e === void 0 ? void 0 : e.uuid,
            name: e === null || e === void 0 ? void 0 : e.name,
        }));
        await this.tournamentRepo.save(data);
        this.logger.log(`Finish seeding example Leagues ${new Date()}`);
    }
    async findAll(filters) {
        const defaultSort = (filters === null || filters === void 0 ? void 0 : filters.sort) ? JSON.parse(filters.sort) : {};
        const { page, perpage, skip, name } = filters;
        const paramsFilter = (0, helpers_1.removeEmptyAndApplyTypeOrmOperator)({
            name,
        }, []);
        const findManyOptions = {
            where: Object.assign({}, paramsFilter),
            order: defaultSort,
            skip: skip,
            take: perpage,
        };
        const [tournaments, totalElements] = await Promise.all([
            this.tournamentRepo.find(findManyOptions),
            this.tournamentRepo.count(findManyOptions),
        ]);
        return new paginated_response_dto_1.PaginatedResponseDto(tournaments, page, perpage, totalElements);
    }
    async findOne(tournamentUuid) {
        const tournament = await this.tournamentRepo.findOne({
            where: {
                uuid: tournamentUuid,
            },
        });
        if (!tournament) {
            throw new common_1.BadRequestException('Invalid Tournament UUID');
        }
        return tournament;
    }
};
TournamentService = TournamentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Tournament)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TournamentService);
exports.TournamentService = TournamentService;
//# sourceMappingURL=tournament.service.js.map