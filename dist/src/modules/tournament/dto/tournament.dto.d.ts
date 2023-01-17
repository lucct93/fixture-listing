import { PaginationInputDto } from '../../../shared/pagination/paginatio-input.dto';
export declare class GetTournamentResponseDto {
    uuid: string;
    name: string;
}
export declare class GetTournamentsInputDto extends PaginationInputDto {
    name?: string;
}
