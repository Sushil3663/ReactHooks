import React from "react";
import "./style.css";

const UseState = () => {

    const initialData = 10;
    //setMyNum is updated function
    // use state hooks


    const [mynum, setMyNum] = React.useState(initialData); 

    return (
        <>
            <div className="center_div">
                <p>{mynum}</p>
                <div className="button2" onMouseMove={ () => setMyNum(mynum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onMouseMove={() => mynum> 0? setMyNum(mynum - 1): setMyNum(0)}>
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

export default UseState;
