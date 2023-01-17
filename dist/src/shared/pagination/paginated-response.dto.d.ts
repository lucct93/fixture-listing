export declare class PaginatedResponseDto<T> {
    constructor(data: T[], page: number, size: number, totalElements: number);
    data: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
}
