import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Food from "../../Models/Food";
import './Foods.css';
import {RootState} from "../../stores";

export default function Foods() {
    const foods = useSelector((state: RootState) => state.foods);

    return (
        <div>
            <FoodList foods={foods}/>
            <AddFood/>
        </div>
    )
}

const FoodList = (props: {foods: Food[]}) => {
    const foodsList = props.foods.map((food, index) =>
        <div key={index}>
            <FoodRow food={food}/>
        </div>
    );
    return (
        <div className={"food-list"}>
            <FoodTitleRow/>
            {foodsList}
        </div>
    )
}

const FoodTitleRow = () => (
    <div>
        <div>
            Name
        </div>
        <div>
            Protein
        </div>
        <div>
            Fiber
        </div>
        <div>
            Energy
        </div>
    </div>
)

const FoodRow = (props: {food: Food}) => (
    <>
        <div>
            {props.food.name}
        </div>
        <div>
            {props.food.protein}
        </div>
        <div>
            {props.food.fiber}
        </div>
        <div>
            {props.food.energy}
        </div>
    </>
)

const AddFood = () => {
    const dispatch = useDispatch();
    let onClickHandler = () => dispatch(
        { type: 'ADD_FOOD', payload: {name: "asdf", protein: 1,fiber: 1, energy: 1}})

    return (
        <div className={"add-food"}>
            <div>
                <input/>
                <input/>
                <input/>
                <input/>
            </div>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}