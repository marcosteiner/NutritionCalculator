export default class Food {
    _name: string;
    protein: number;
    energy: number;
    fiber: number;

    public constructor(name: string, protein: number, fiber: number, energy: number){
        this._name = name;
        this.protein = protein;
        this.energy= energy;
        this.fiber = fiber;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    public foobar() {
        return 'foobar';
    }
}
