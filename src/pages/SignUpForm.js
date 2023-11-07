import React, {useState} from "react";
import Button from "../components/Button";

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        "email" : "",
        "id" : "",
        "password" : ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name] : value
        })

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log("Email : ", formData.email);
        console.log("ID : ", formData.id);
        console.log("Password : ", formData.password);
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="email" name="email" placeholder="Email" onChange={onChangeHandler}></input>
                <input type="text" name="id" placeholder="ID" onChange={onChangeHandler}></input>
                <input type="password" name="password" placeholder="Password" onChange={onChangeHandler}></input>
                <Button onSubmit={onSubmitHandler} text="Click"></Button>
            </form>
        </div>
    )
}

export default SignUpForm;