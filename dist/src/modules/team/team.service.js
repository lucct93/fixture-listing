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
var TeamService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../entities");
const paginated_response_dto_1 = require("../../shared/pagination/paginated-response.dto");
const helpers_1 = require("../../shared/helpers");
const IMPORTED_TEAMS = require("../../../public/teams.json");
let TeamService = TeamService_1 = class TeamService {
    constructor(teamRepo) {
        this.teamRepo = teamRepo;
        this.logger = new common_1.Logger(TeamService_1.name);
    }
    async onModuleInit() {
        this.logger.log(`Starting seeding example Leagues ${new Date()}`);
        const isInitilized = await this.teamRepo.count();
        if (isInitilized) {
            this.logger.log(`Finish seeding example Leagues ${new Date()}`);
            return;
        }
        const data = IMPORTED_TEAMS.map((e) => this.teamRepo.create({
            uuid: e === null || e === void 0 ? void 0 : e.uuid,
            name: e === null || e === void 0 ? void 0 : e.shortName,
            bannelUrl: e === null || e === void 0 ? void 0 : e.imageUrl,
        }));
        await this.teamRepo.save(data);
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
        const [teams, totalElements] = await Promise.all([
            this.teamRepo.find(findManyOptions),
            this.teamRepo.count(findManyOptions),
        ]);
        return new paginated_response_dto_1.PaginatedResponseDto(teams, page, perpage, totalElements);
    }
    async findOne(teamUuid) {
        const team = await this.teamRepo.findOne({
            where: {
                uuid: teamUuid,
            },
        });
        if (!team) {
            throw new common_1.BadRequestException('Invalid Team UUID');
        }
        return team;
    }
};
TeamService = TeamService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map