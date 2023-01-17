import { PaginatedResponseDto } from '../../shared/pagination/paginated-response.dto';
import { GetTournamentResponseDto, GetTournamentsInputDto } from './dto/tournament.dto';
import { TournamentService } from './tournament.service';
export declare class TournamentController {
    private readonly tournamentService;
    constructor(tournamentService: TournamentService);
    findAll(filters: GetTournamentsInputDto): Promise<PaginatedResponseDto<GetTournamentResponseDto>>;
    findOne(tournamenUuid: string): Promise<GetTournamentResponseDto>;
}
