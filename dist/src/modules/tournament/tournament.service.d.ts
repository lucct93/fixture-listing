import { OnModuleInit } from '@nestjs/common';
import { Tournament } from '../../entities';
import { Repository } from 'typeorm';
import { GetTournamentResponseDto, GetTournamentsInputDto } from './dto/tournament.dto';
import { PaginatedResponseDto } from '../../shared/pagination/paginated-response.dto';
export declare class TournamentService implements OnModuleInit {
    private tournamentRepo;
    private readonly logger;
    constructor(tournamentRepo: Repository<Tournament>);
    onModuleInit(): Promise<void>;
    findAll(filters: GetTournamentsInputDto): Promise<PaginatedResponseDto<GetTournamentResponseDto>>;
    findOne(tournamentUuid: string): Promise<Tournament>;
}
