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
exports.FixtureController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paginated_response_dto_1 = require("../../shared/pagination/paginated-response.dto");
const fixture_dto_1 = require("./dto/fixture.dto");
const fixture_event_service_1 = require("./fixture-event.service");
const fixture_service_1 = require("./fixture.service");
let FixtureController = class FixtureController {
    constructor(fixtureService, fixtureEventService) {
        this.fixtureService = fixtureService;
        this.fixtureEventService = fixtureEventService;
    }
    events(req) {
        return this.fixtureEventService.subscribeUpdatedFixtureEvent();
    }
    async dateHasMaches(data) {
        return this.fixtureService.dateHasMaches(data);
    }
    async findAll(filters) {
        return this.fixtureService.findAll(filters);
    }
    async create(createFixtureInputDto) {
        return this.fixtureService.create(createFixtureInputDto);
    }
    async update(fixtureUuid, updateFixtureDto) {
        return this.fixtureService.update(fixtureUuid, updateFixtureDto);
    }
};
__decorate([
    (0, common_1.Sse)('realtime'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FixtureController.prototype, "events", null);
__decorate([
    (0, common_1.Get)('calendar'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Ok',
        type: [String],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
        type: Error,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fixture_dto_1.GetFixturesCalendarInputDto]),
    __metadata("design:returntype", Promise)
], FixtureController.prototype, "dateHasMaches", null);
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
    __metadata("design:paramtypes", [fixture_dto_1.GetFixturesInputDto]),
    __metadata("design:returntype", Promise)
], FixtureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Ok',
        type: fixture_dto_1.GetFixtureResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
        type: Error,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fixture_dto_1.CreateFixtureInputDto]),
    __metadata("design:returntype", Promise)
], FixtureController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':fixtureUuid'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Ok',
        type: fixture_dto_1.GetFixtureResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request',
        type: Error,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
        type: Error,
    }),
    __param(0, (0, common_1.Param)('fixtureUuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fixture_dto_1.UpdateFixtureInputDto]),
    __metadata("design:returntype", Promise)
], FixtureController.prototype, "update", null);
FixtureController = __decorate([
    (0, common_1.Controller)('fixtures'),
    (0, swagger_1.ApiTags)('Fixtures Listing'),
    __metadata("design:paramtypes", [fixture_service_1.FixtureService,
        fixture_event_service_1.FixtureEventService])
], FixtureController);
exports.FixtureController = FixtureController;
//# sourceMappingURL=fixture.controller.js.map