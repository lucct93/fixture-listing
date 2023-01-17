"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTournamentResponseMock = exports.TournamentDbMock = void 0;
exports.TournamentDbMock = {
    uuid: '1',
    name: 'English Premier League',
};
exports.ListTournamentResponseMock = {
    totalElements: 1,
    totalPages: 1,
    page: 1,
    perpage: 20,
    data: [exports.TournamentDbMock],
};
//# sourceMappingURL=tournament.mock.js.map