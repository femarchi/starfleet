
/**
 * Interface of SWAPI model collection response
 */
export interface EntityCollection<EntityType> {
    count: number;
    next: string;
    previous: string;
    results: EntityType[]
}