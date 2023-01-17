import { PaginationInputDto } from '../../../shared/pagination/paginatio-input.dto';
export declare class CreateTeamDto {
}
export declare class GetTeamResponseDto {
    uuid: string;
    name: string;
    bannelUrl: string;
}
export declare class GetTeamsInputDto extends PaginationInputDto {
    name?: string;
}
