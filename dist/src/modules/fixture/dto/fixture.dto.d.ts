import { GetTeamResponseDto } from '../../../modules/team/dto/team.dto';
import { GetTournamentResponseDto } from '../../../modules/tournament/dto/tournament.dto';
import { EFixtureStatus } from '../../../shared';
import { PaginationInputDto } from '../../../shared/pagination/paginatio-input.dto';
export declare class CreateFixtureInputDto {
    homeTeamUuid: string;
    awayTeamUuid: string;
    tournamentUuid: string;
    startDate: Date;
    endDate: Date;
    homeScore: number;
    awayScore: number;
    status: EFixtureStatus;
}
export declare class GetFixtureResponseDto {
    uuid: string;
    homeTeam: GetTeamResponseDto;
    awayTeam: GetTeamResponseDto;
    tournament: GetTournamentResponseDto;
    startDate: Date;
    endDate: Date;
    homeScore: number;
    awayScore: number;
    status: EFixtureStatus;
}
export declare class UpdateFixtureInputDto {
    homeTeamUuid?: string;
    awayTeamUuid?: string;
    tournamentUuid?: string;
    startDate?: Date;
    endDate?: Date;
    homeScore?: number;
    awayScore?: number;
    status?: EFixtureStatus;
}
export declare class GetFixturesInputDto extends PaginationInputDto {
    tournamentUuid?: string;
    fromDate?: string;
    toDate?: string;
}
export declare class GetFixturesCalendarInputDto {
    fromDate: string;
    toDate: string;
}
