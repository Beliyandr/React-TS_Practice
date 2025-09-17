import React, { useState } from "react";
const Counter = ({ count, onDelete, onIncrement, onDecrement }) => {
    const { id, value, name } = count
    // const [count, setCount] = useState(value);



    const formatCount = () => {
        return value === 0 ? "empty" : value;
    };
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };


    return (
        <div>
            <div>
                <span>{name}</span>
                <span className={getBageClasses()}>{formatCount()}</span>
                <button
                    className='btn btn-primary btn-sm m-2'
                    onClick={() => onIncrement(count)}
                >
                    +
                </button>
                <button
                    className='btn btn-primary btn-sm m-2'
                    onClick={() => onDecrement(count)}
                >
                    -
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
};

export default Counter;
