export declare class FixtureEventService {
    private readonly logger;
    private readonly emitter;
    subscribeUpdatedFixtureEvent(): import("rxjs").Observable<unknown>;
    emitEvent(event: string, data: any): Promise<void>;
}
