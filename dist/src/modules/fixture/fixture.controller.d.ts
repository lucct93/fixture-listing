/// <reference types="express-serve-static-core" />
/// <reference types="multer" />
import { PaginatedResponseDto } from '../../shared/pagination/paginated-response.dto';
import { CreateFixtureInputDto, GetFixtureResponseDto, GetFixturesCalendarInputDto, GetFixturesInputDto, UpdateFixtureInputDto } from './dto/fixture.dto';
import { FixtureEventService } from './fixture-event.service';
import { FixtureService } from './fixture.service';
export declare class FixtureController {
    private readonly fixtureService;
    private readonly fixtureEventService;
    constructor(fixtureService: FixtureService, fixtureEventService: FixtureEventService);
    events(req: Express.Request): import("rxjs").Observable<unknown>;
    dateHasMaches(data: GetFixturesCalendarInputDto): Promise<string[]>;
    findAll(filters: GetFixturesInputDto): Promise<PaginatedResponseDto<GetFixtureResponseDto>>;
    create(createFixtureInputDto: CreateFixtureInputDto): Promise<GetFixtureResponseDto>;
    update(fixtureUuid: string, updateFixtureDto: UpdateFixtureInputDto): Promise<GetFixtureResponseDto>;
}
