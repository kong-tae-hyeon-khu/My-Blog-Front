import Button from "../components/Button";
import styles from "../styles/SignForm.module.css";
import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignInForm = () => {

    const [formData, setFormData] = useState({
        "email" : "",
        "password" : ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setFormData({
            ...formData,
            [name] : value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const userDTO = {
            email : formData.email,
            password : formData.password
        }

        fetch("http://localhost:8080/user/signin", {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(userDTO)
        })
            .then(response => {
                if (response.ok)
                    return response.json();
                else {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data.token) // JWT 저장 처리 필요.
                localStorage.setItem("jwt", data.token)
            })
            .catch(err => {
                console.log("err : " + err)
            })
    }

    return (
    <div>
        <Header></Header>
        <form onSubmit={onSubmitHandler} className={styles.formContainer}>
            <input placeholder="Email"  type="email" name = "email" onChange={onChangeHandler} className={styles.inputField}></input>
            <input placeholder="Password" type="password" name="password" onChange={onChangeHandler} className={styles.inputField}></input>
            <Button>Button</Button>
        </form>
        <Footer></Footer>
    </div>
    )
}

export default SignInForm;