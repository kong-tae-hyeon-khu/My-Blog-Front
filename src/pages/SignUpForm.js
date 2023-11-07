import React, {useState} from "react";
import styles from "../styles/SignUpForm.module.css"
import Button from "../components/Button";

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        "email" : "",
        "userName" : "",
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
    // 서버에 전송.
    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Send Data to Backend
        const userDTO = {
            email : formData.email,
            userName : formData.userName,
            password : formData.password
        };

        fetch('http://localhost:8080/user/signup', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(userDTO)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json();
                }
            })
            .then(data => {
                console.log("data : " + JSON.stringify(data))
            })
            .catch(err => {
                console.log("ERR : " + err);
            })

    }


    return (
        <div>
            <form onSubmit={onSubmitHandler} className={styles.formContainer}>
                <input type="email" name="email" placeholder="Email" onChange={onChangeHandler} className={styles.inputField}></input>
                <input type="text" name="userName" placeholder="UserName" onChange={onChangeHandler} className={styles.inputField}></input>
                <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} className={styles.inputField}></input>
                <Button onClick={onSubmitHandler}>Button</Button>
            </form>
        </div>
    )
}

export default SignUpForm;