import Food from "../../Models/Food";
import {FoodActionTypes} from "../actions/FoodAction";

export default function FoodReducer(state: Food[], action: FoodActionTypes){
    switch (action.type) {
        case "ADD_FOOD":
            return state;
        case "REMOVE_FOOD":
            return state;
        default:
            return state;
    }
}