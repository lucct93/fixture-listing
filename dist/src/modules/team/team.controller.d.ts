import { TeamService } from './team.service';
import { PaginatedResponseDto } from '../../shared/pagination/paginated-response.dto';
import { GetTeamResponseDto, GetTeamsInputDto } from './dto/team.dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    findAll(filters: GetTeamsInputDto): Promise<PaginatedResponseDto<GetTeamResponseDto>>;
    findOne(teamUuid: string): Promise<GetTeamResponseDto>;
}
