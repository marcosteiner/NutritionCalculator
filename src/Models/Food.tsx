export default class Food {
    name: string;
    protein: number;
    energy: number;
    fiber: number;

    public constructor(name: string, protein: number, fiber: number, energy: number){
        this.name = name;
        this.protein = protein;
        this.energy= energy;
        this.fiber = fiber;
    }
}