import { PaginatedResponseDto } from '../../shared/pagination/paginated-response.dto';
import { Repository } from 'typeorm';
import { Fixture } from '../../entities';
import { CreateFixtureInputDto, GetFixtureResponseDto, GetFixturesCalendarInputDto, GetFixturesInputDto, UpdateFixtureInputDto } from './dto/fixture.dto';
import { TeamService } from '../team/team.service';
import { TournamentService } from '../tournament/tournament.service';
import { FixtureEventService } from './fixture-event.service';
export declare class FixtureService {
    private fixtureRepo;
    private teamService;
    private tournamentService;
    private fixtureEventService;
    private readonly logger;
    constructor(fixtureRepo: Repository<Fixture>, teamService: TeamService, tournamentService: TournamentService, fixtureEventService: FixtureEventService);
    dateHasMaches({ fromDate, toDate }: GetFixturesCalendarInputDto): Promise<string[]>;
    findAll(filters: GetFixturesInputDto): Promise<PaginatedResponseDto<Fixture>>;
    create({ homeTeamUuid, awayTeamUuid, tournamentUuid, ...otherData }: CreateFixtureInputDto): Promise<Fixture>;
    update(fixtureUuid: string, { homeTeamUuid, awayTeamUuid, tournamentUuid, ...otherData }: UpdateFixtureInputDto): Promise<GetFixtureResponseDto>;
}
