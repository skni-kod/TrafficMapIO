import React from 'react'
import styles from '../assets/Navbar.module.css'
import { Link, redirect } from 'react-router-dom'
import { useUser } from '../UserContext'

const Navbar = () => {

    const {user, setUser} = useUser()
    
    const handleLogout = () => {
        setUser({})
    }

    const loginBtn = <Link to='/login' >Logowanie</Link>
    const logoutBtn = <button onClick={handleLogout}>Wyloguj</button>
    const userBtn = Object.keys(user).length == 0 ? loginBtn : logoutBtn 

    return (
        <nav className={styles['navbar']}>
            <Link to='/'>Home</Link>
            {userBtn}
        </nav>
    )
}

export default Navbar