import { useState } from "react";
import "./Counter.css";
import { GrPowerReset } from "react-icons/gr";

function Counter(){
    const [count,setCount]=useState(0);

    function IncreaseCount(){
        setCount((prev)=>(prev+1));
    }

    function DecreaseCount(){
        if(count<=0){
            setCount(0);
        }else{
            setCount((prev)=>(prev-1));
        }
        
    }

    function ResetCounter(){
        setCount(0);
    }

    return(
        <div className="Con">
            <h1 className="heading">Counter App</h1>
            <div className="container">
                <div className="count">
                    <h1>Count={count}</h1>
                </div>
                <span className="blockk">
                    <h3 onClick={IncreaseCount}>Increase</h3>
                    <h3 onClick={DecreaseCount}>Decrease</h3>
                </span>
                <div className="reset">
                    <h3 onClick={ResetCounter}><GrPowerReset/></h3>
                </div>
            </div>
        </div>
    )
}

export default Counter;