export declare const FixtureDbMock: {
    uuid: string;
    homeTeam: {
        uuid: string;
        name: string;
        bannelUrl: string;
    };
    awayTeam: {
        uuid: string;
        name: string;
        bannelUrl: string;
    };
    tournament: {
        uuid: string;
        name: string;
    };
    startDate: string;
    endDate: string;
    homeScore: number;
    awayScore: number;
    status: number;
};
export declare const ListFixtureResponseMock: {
    totalElements: number;
    totalPages: number;
    page: number;
    perpage: number;
    data: {
        uuid: string;
        homeTeam: {
            uuid: string;
            name: string;
            bannelUrl: string;
        };
        awayTeam: {
            uuid: string;
            name: string;
            bannelUrl: string;
        };
        tournament: {
            uuid: string;
            name: string;
        };
        startDate: string;
        endDate: string;
        homeScore: number;
        awayScore: number;
        status: number;
    }[];
};
export declare const DateHasMachesDBMock: string[];
