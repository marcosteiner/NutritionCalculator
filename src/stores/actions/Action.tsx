export interface Action {
    type: string
}

export type ActionCreator = () => Action;