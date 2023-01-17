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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var FixtureService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixtureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const helpers_1 = require("../../shared/helpers");
const paginated_response_dto_1 = require("../../shared/pagination/paginated-response.dto");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../entities");
const team_service_1 = require("../team/team.service");
const tournament_service_1 = require("../tournament/tournament.service");
const fixture_event_service_1 = require("./fixture-event.service");
const shared_1 = require("../../shared");
let FixtureService = FixtureService_1 = class FixtureService {
    constructor(fixtureRepo, teamService, tournamentService, fixtureEventService) {
        this.fixtureRepo = fixtureRepo;
        this.teamService = teamService;
        this.tournamentService = tournamentService;
        this.fixtureEventService = fixtureEventService;
        this.logger = new common_1.Logger(FixtureService_1.name);
    }
    async dateHasMaches({ fromDate, toDate }) {
        const dayByDayFixtureCount = await this.fixtureRepo
            .createQueryBuilder()
            .select(['DATE(f.startDate) AS startDate', 'count("startDate") AS fixtureCount'])
            .from(entities_1.Fixture, 'f')
            .where('f.startDate BETWEEN :fromDate AND :toDate', { fromDate, toDate })
            .groupBy('startDate')
            .orderBy('startDate', 'ASC')
            .getRawMany();
        return dayByDayFixtureCount.map((element) => new Date(element.startDate).toLocaleDateString('en-CA'));
    }
    async findAll(filters) {
        const defaultSort = (filters === null || filters === void 0 ? void 0 : filters.sort) ? JSON.parse(filters.sort) : { startDate: 'DESC' };
        const { page, perpage, skip, tournamentUuid, fromDate, toDate } = filters;
        const paramsFilter = (0, helpers_1.removeEmptyAndApplyTypeOrmOperator)({
            tournament: { uuid: tournamentUuid },
        }, []);
        const findManyOptions = {
            select: {
                uuid: true,
                homeTeam: {
                    name: true,
                    uuid: true,
                    bannelUrl: true,
                },
                awayTeam: {
                    name: true,
                    uuid: true,
                    bannelUrl: true,
                },
                tournament: {
                    uuid: true,
                    name: true,
                },
                homeScore: true,
                awayScore: true,
                startDate: true,
                endDate: true,
                status: true,
                createdAt: true,
            },
            relations: ['tournament', 'homeTeam', 'awayTeam'],
            where: Object.assign(Object.assign({}, paramsFilter), (fromDate && toDate && { startDate: (0, typeorm_2.Between)(fromDate, toDate) })),
            order: defaultSort,
            skip: skip,
            take: perpage,
        };
        const [fixtures, totalElements] = await Promise.all([
            this.fixtureRepo.find(findManyOptions),
            this.fixtureRepo.count(findManyOptions),
        ]);
        return new paginated_response_dto_1.PaginatedResponseDto(fixtures, page, perpage, totalElements);
    }
    async create(_a) {
        var { homeTeamUuid, awayTeamUuid, tournamentUuid } = _a, otherData = __rest(_a, ["homeTeamUuid", "awayTeamUuid", "tournamentUuid"]);
        try {
            if (homeTeamUuid === awayTeamUuid) {
                throw new common_1.BadRequestException('Home Team must be difference with Away Team');
            }
            const tournament = await this.tournamentService.findOne(tournamentUuid);
            const homeTeam = await this.teamService.findOne(homeTeamUuid);
            const awayTeam = await this.teamService.findOne(awayTeamUuid);
            const fixture = this.fixtureRepo.create(Object.assign({ homeTeam,
                awayTeam,
                tournament }, otherData));
            await this.fixtureRepo.save(fixture);
            return fixture;
        }
        catch (err) {
            throw err;
        }
    }
    async update(fixtureUuid, _a) {
        var { homeTeamUuid, awayTeamUuid, tournamentUuid } = _a, otherData = __rest(_a, ["homeTeamUuid", "awayTeamUuid", "tournamentUuid"]);
        const fixture = await this.fixtureRepo.findOne({
            select: {
                uuid: true,
                homeTeam: {
                    name: true,
                    uuid: true,
                    bannelUrl: true,
                },
                awayTeam: {
                    name: true,
                    uuid: true,
                    bannelUrl: true,
                },
                tournament: {
                    uuid: true,
                    name: true,
                },
                homeScore: true,
                awayScore: true,
                startDate: true,
                endDate: true,
                status: true,
            },
            relations: ['homeTeam', 'awayTeam', 'tournament'],
            where: {
                uuid: fixtureUuid,
            },
        });
        if (!fixture) {
            throw new common_1.BadRequestException('Invalid fixture UUID');
        }
        let updatedFixture = Object.assign(Object.assign({}, fixture), otherData);
        if (homeTeamUuid) {
            const homeTeam = await this.teamService.findOne(homeTeamUuid);
            updatedFixture = Object.assign(Object.assign({}, updatedFixture), { homeTeam });
        }
        if (awayTeamUuid) {
            const awayTeam = await this.teamService.findOne(awayTeamUuid);
            updatedFixture = Object.assign(Object.assign({}, updatedFixture), { awayTeam });
        }
        if (tournamentUuid) {
            const tournament = await this.tournamentService.findOne(tournamentUuid);
            updatedFixture = Object.assign(Object.assign({}, updatedFixture), { tournament });
        }
        await Promise.all([
            await this.fixtureRepo.save(updatedFixture),
            otherData.status === shared_1.EFixtureStatus.LIVE &&
                (await this.fixtureEventService.emitEvent('fixture_updated', updatedFixture)),
        ]);
        return updatedFixture;
    }
};
FixtureService = FixtureService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Fixture)),
    __param(1, (0, common_1.Inject)(team_service_1.TeamService)),
    __param(2, (0, common_1.Inject)(tournament_service_1.TournamentService)),
    __param(3, (0, common_1.Inject)(fixture_event_service_1.FixtureEventService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        team_service_1.TeamService,
        tournament_service_1.TournamentService,
        fixture_event_service_1.FixtureEventService])
], FixtureService);
exports.FixtureService = FixtureService;
//# sourceMappingURL=fixture.service.js.map