import Food from "../../Models/Food";

export const ADD_FOOD = "ADD_FOOD"
export const REMOVE_FOOD = "REMOVE_FOOD";

export interface AddFoodAction {
    type: typeof ADD_FOOD;
    payload: Food;
}

export interface RemoveFoodAction {
    type: typeof REMOVE_FOOD;
}

export type FoodActionTypes = RemoveFoodAction | AddFoodAction