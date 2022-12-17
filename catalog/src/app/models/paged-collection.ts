
/**
 * Interface of SWAPI model collection response
 */
export interface PagedCollection<EntityType> {
    count: number;
    next: string | null;
    previous: string | null;
    results: EntityType[]
}