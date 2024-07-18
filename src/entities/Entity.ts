export abstract class Entity {
    id: number
    title: string
    
    protected constructor(id: number, title: string) {
        this.id = id
        this.title = title
    }
}