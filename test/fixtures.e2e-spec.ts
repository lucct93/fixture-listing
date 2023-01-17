import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Fixture, Team, Tournament } from '../src/entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppModule } from '../src/app.module';
import * as IMPORT_TOURNAMENTS from '../public/tournaments.json';
import { EFixtureStatus } from '../src/shared';

describe('Integration Test', () => {
  let app: INestApplication;
  let fixtureModel: Repository<Fixture>;
  let tournamentModel: Repository<Tournament>;
  let teamModel: Repository<Team>;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    fixtureModel = moduleFixture.get(getRepositoryToken(Fixture));
    tournamentModel = moduleFixture.get(getRepositoryToken(Tournament));
    teamModel = moduleFixture.get(getRepositoryToken(Team));
    fixtureModel.delete({});
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    fixtureModel = moduleFixture.get(getRepositoryToken(Fixture));
    fixtureModel.delete({});
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Fixtures', () => {
    const today = new Date().toISOString();
    const SAMPLE_FIXTURE = {
      homeTeamUuid: 1,
      awayTeamUuid: 2,
      tournamentUuid: IMPORT_TOURNAMENTS[0].uuid,
      startDate: today,
      endDate: null,
      homeScore: 1,
      awayScore: 0,
      status: EFixtureStatus.FUTURE,
    };

    it('/ (POST) - 201', async () => {
      return request(app.getHttpServer())
        .post('/fixtures')
        .send(SAMPLE_FIXTURE)
        .expect(201)
        .then(async () => {
          const fixtures = await fixtureModel.find();
          expect(fixtures.length).toEqual(1);
        });
    });

    it('/ (GET) - 200', async () => {
      const tournament = await tournamentModel.findOne({
        where: {
          uuid: SAMPLE_FIXTURE.tournamentUuid.toString(),
        },
      });
      const homeTeam = await teamModel.findOne({
        where: {
          uuid: SAMPLE_FIXTURE.homeTeamUuid.toString(),
        },
      });
      const awayTeam = await teamModel.findOne({
        where: {
          uuid: SAMPLE_FIXTURE.awayTeamUuid.toString(),
        },
      });
      const repeatTime = 3;
      for (let i = 0; i < repeatTime; i++) {
        const fixture = fixtureModel.create({
          homeTeam,
          awayTeam,
          tournament,
          ...SAMPLE_FIXTURE,
        });
        await fixtureModel.save(fixture);
      }

      return request(app.getHttpServer())
        .get('/fixtures?page=1&perpage=10')
        .then(async ({ ok, body }) => {
          expect(ok).toEqual(true);
          expect(body.data.length).toEqual(repeatTime);
        });
    });
  });
});
