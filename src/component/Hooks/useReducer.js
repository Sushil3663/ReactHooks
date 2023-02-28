import React, { useReducer } from "react";
import "./style.css";

// reducer take two arguement

const reducer = (state, action) => {
    if(action.type === "INCR"){
        state = state + 1;
    }
    if(action.type === "DECR"){
        if(state>0){
            state = state - 1;
        }
    }
    return state;
}

const UseReducer = () => {

    // const initialData = 10;
    //setMyNum is updated function
    // use state hooks


    // const [mynum, setMyNum] = React.useReducer(initialData); 
    // useReducer takes two argument like useState
    // takes two parameter 
    // initail data is reflect in state
    // dispatch is used to trigger reducer
    // Inside reducer use have updated function

    const initildata = 10;

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(reducer, initildata);

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({type: "INCR"})} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onClick={() => dispatch({type: "DECR"})} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseReducer;
