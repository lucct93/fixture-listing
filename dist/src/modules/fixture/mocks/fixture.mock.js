"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHasMachesDBMock = exports.ListFixtureResponseMock = exports.FixtureDbMock = void 0;
exports.FixtureDbMock = {
    uuid: '1a1814f5-c1a0-48be-9842-372e706f0e4a',
    homeTeam: {
        uuid: '1',
        name: 'Chelsea',
        bannelUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/360px-Chelsea_FC.svg.png',
    },
    awayTeam: {
        uuid: '4',
        name: 'Arsenal',
        bannelUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/340px-Arsenal_FC.svg.png',
    },
    tournament: {
        uuid: '1',
        name: 'English Premier League',
    },
    startDate: '2023-01-13T09:30:00.000Z',
    endDate: '2023-01-13T12:00:00.000Z',
    homeScore: 0,
    awayScore: 0,
    status: 1,
};
exports.ListFixtureResponseMock = {
    totalElements: 1,
    totalPages: 1,
    page: 1,
    perpage: 20,
    data: [exports.FixtureDbMock],
};
exports.DateHasMachesDBMock = ['2023-01-13'];
//# sourceMappingURL=fixture.mock.js.map