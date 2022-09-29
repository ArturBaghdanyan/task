import "./styles.scss";
import {useState} from "react";


function RegisterList() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(input);
    };
    const handleClick = () => {
        setInput('');
    };

    return (

        <div className="main">
            <form>
                <label>
                    Name
                    <input type="text" name="name" value={input.name || ""} onChange={handleChange}/>
                </label>
                <label>
                    lastName
                    <input type="text" name="last" value={input.last || ""} onChange={handleChange}/>
                </label>
                <label>
                    Date
                    <input type="date" name="date" value={input.date || ""} onChange={handleChange}/>
                </label>
                <label>
                    Address
                    <input type="text" name="address" value={input.address || ""} onChange={handleChange} />
                </label>
                <label>
                    Telephone
                    <input type="tel" name="tel" value={input.tel || ""} onChange={handleChange}/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" value={input.email || ""} onChange={handleChange}/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" value={input.password || ""} onChange={handleChange}/>
                </label>
                <span>
                    <input type="submit" onClick={handleSubmit}/>
                    <input type="reset"  onClick={handleClick}/>
                </span>
            </form>
        </div>
    )
}

export default RegisterList;