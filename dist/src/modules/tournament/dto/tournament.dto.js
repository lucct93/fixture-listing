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
exports.GetTournamentsInputDto = exports.GetTournamentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const paginatio_input_dto_1 = require("../../../shared/pagination/paginatio-input.dto");
class GetTournamentResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: '',
        example: '1',
    }),
    __metadata("design:type", String)
], GetTournamentResponseDto.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: '',
        example: '',
    }),
    __metadata("design:type", String)
], GetTournamentResponseDto.prototype, "name", void 0);
exports.GetTournamentResponseDto = GetTournamentResponseDto;
class GetTournamentsInputDto extends paginatio_input_dto_1.PaginationInputDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Tournament Name',
        example: '',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetTournamentsInputDto.prototype, "name", void 0);
exports.GetTournamentsInputDto = GetTournamentsInputDto;
//# sourceMappingURL=tournament.dto.js.map