import React from "react";
import "./style.css";


// After the page is render useEffect tells what to do. for eg after the page is reload somehing will popof after a second. Also we can add something after a page is reload.
// useEffect run after anything change. Automatically re-srender . only show one time when page is render.
// When we use hooks it should be at top level.
const UseEffect = () => {

    // const initialData = 10;
    //setMyNum is updated function
    // use state hooks


    const [mynum, setMyNum] = React.useState(0); 

    React.useEffect(() => { 
        // console.log("Hi");
        document.title = `chats(${mynum})`;
    });
    



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
            </div>
        </>
    );
};

export default UseEffect;
