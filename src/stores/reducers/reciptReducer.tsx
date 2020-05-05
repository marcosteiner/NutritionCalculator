import Receipt from "../../Models/Receipt";
import Ingredient from "../../Models/Ingredient";
import Food from "../../Models/Food";
import {ReceiptAction} from "../actions/ReceiptAction";

let initialReceipts = [
    new Receipt("Nudeln & Tofu", [
        new Ingredient(new Food("Nudeln", 13, 3, 365), 1),
        new Ingredient(new Food("Tofu", 15, 1, 175), 1),
    ])
];

const receiptReducer = function (state: Receipt[] = initialReceipts, action: ReceiptAction): Receipt[] {
    switch (action.type) {
        case "ADD_RECEIPT":
            return state;
        case "REMOVE_RECEIPT":
            return state;
        default:
            return state;
    }
};

export  default receiptReducer;