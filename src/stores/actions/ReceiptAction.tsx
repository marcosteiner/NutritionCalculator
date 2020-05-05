import {Action} from "./Action";

type ReceiptActionNames = "ADD_RECEIPT" | "REMOVE_RECEIPT";
export interface ReceiptAction extends Action {
    type: ReceiptActionNames;
}