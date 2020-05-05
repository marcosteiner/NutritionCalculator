import Food from "./Food";

export default class Ingredient{
    private _food: Food;
    private _amount: number;
    constructor(food: Food, amount: number) {
        this._food = food;
        this._amount = amount;
    }

    set food(value: Food) {
        this._food = value;
    }

    get food(): Food {
        return this._food;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get amount(): number {
        return this._amount;
    }
}