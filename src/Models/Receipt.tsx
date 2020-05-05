import Ingredient from "./Ingredient";

export default class Receipt {
    private readonly _name: string;
    private readonly _ingredients: Ingredient[];

    constructor(name: string, ingredients: Ingredient[]) {
        this._name = name;
        this._ingredients = ingredients;
    }

    get name(){
        return this._name;
    }

    protein(): number {
        return this._ingredients.reduce(
            (total: number, current: Ingredient) => total + current.food.protein * current.amount,
            0);
    }

    fiber(): number {
        return this._ingredients.reduce(
            (total: number, current: Ingredient) => total + current.food.fiber * current.amount,
            0);
    }

    energy(): number {
        return this._ingredients.reduce(
            (total: number, current: Ingredient) => total + current.food.energy * current.amount,
            0);
    }
}