import React, { useRef, useState } from "react";
import styles from '../assets/Login.module.css'
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {user, setUser} = useUser()
    const navigate = useNavigate()

    const usernameRef = useRef()
    const passwordRef = useRef()

    const [invalidData, setInvalidData] = useState(false)

    const handleSubmit = () => {
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        const req = JSON.stringify({username, password})
        fetch('/login', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            },
            body: req
        }
        ).then(res => res.json()).then(data => {
            if(Object.keys(data).length > 0) {
                setUser(data['user'])
                navigate('/')
            }
            else {
                setInvalidData(true)
            }
        })
    }

    return (
        <section className={styles['login']}>
            <div className={`${styles['form']} ${invalidData ? styles['invalid'] : ''}`}>
                <h1>Zaloguj się</h1>
                <p className={styles['invalid-info']}>Nieprawidłowe dane logowania!</p>
                <div className={styles['input']}>
                    <input type="text" required ref={usernameRef}/>
                    <label>Nazwa użytkownika</label>
                </div>
                <div className={styles['input']}>
                    <input type="password" required ref={passwordRef}/>
                    <label>Hasło</label>
                </div>
                <button onClick={handleSubmit}>Zaloguj się</button>
            </div>
        </section>
    )
}

export default Login