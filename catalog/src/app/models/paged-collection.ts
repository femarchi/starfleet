
/**
 * Interface of SWAPI model collection response
 */
export interface PagedCollection<EntityType> {
    count: number;
    next: string;
    previous: string;
    results: EntityType[]
}