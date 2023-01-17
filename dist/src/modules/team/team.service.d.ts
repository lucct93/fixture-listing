import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Team } from '../../entities';
import { GetTeamResponseDto, GetTeamsInputDto } from './dto/team.dto';
import { PaginatedResponseDto } from '../../shared/pagination/paginated-response.dto';
export declare class TeamService implements OnModuleInit {
    private teamRepo;
    private readonly logger;
    constructor(teamRepo: Repository<Team>);
    onModuleInit(): Promise<void>;
    findAll(filters: GetTeamsInputDto): Promise<PaginatedResponseDto<GetTeamResponseDto>>;
    findOne(teamUuid: string): Promise<Team>;
}
