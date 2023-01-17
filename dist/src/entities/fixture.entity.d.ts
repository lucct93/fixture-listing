import { BaseEntity, EFixtureStatus } from '../shared';
import { Team } from './team.entity';
import { Tournament } from './tournament.entity';
export declare class Fixture extends BaseEntity {
    uuid: string;
    homeTeam: Team;
    awayTeam: Team;
    tournament: Tournament;
    startDate: Date;
    endDate: Date;
    homeScore: number;
    awayScore: number;
    status: EFixtureStatus;
}
