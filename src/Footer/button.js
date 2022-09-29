import {useState} from "react";
import RegisterList from "./register";
import CreditCard from "./creditCard";

function Button() {
    const [click,setClick] = useState(false);
    const [count,setCount] = useState(false);

    return (
        <div>
            <button onClick={() => {
                setClick(current => !current);
                }}>click to register
            </button>

            <button onClick={() => {
                setCount(current => !current);
                }}>pay
            </button>
            {click && <RegisterList />}
            {count && <CreditCard />}
        </div>
    )
}
export default Button;