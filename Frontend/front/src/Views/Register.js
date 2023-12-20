import Navbar from "./Navbar"


const Register = () => {

    /// Sumbit login handler
    const submitHandler = async() => {
    
        let login = document.querySelector('#credentials-login-field').value
        let password = document.querySelector('#credentials-password-field').value
        let name = document.querySelector('#credentials-name-field').value
        let surname = document.querySelector('#credentials-surname-field').value
    
        let data = {"login": login, "password": password, "name": name, "surname": surname}
    
        await fetch('localhost:5000/user/register/', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })
    }


    return(
        <div>
        <Navbar />
        <div id="container">
            <h1>Register</h1>
            <div id="credentials-div">
                Login 
                <input type="text" id="credentials-login-field" name="login-field"/> <br />
                Password
                <input type="paassword" id="credentials-password-field" mame="password-field" /> <br />
                Name
                <input type="text" id="credentials-name-field" name="name-field" /> <br />
                Surname
                <input type="text" id="credentials-surname-field" name="surname-field" /> <br />
                <center><button id="credentials-login-submit" onClick={submitHandler}>Submit</button></center>
            </div>
        </div>




        </div>
        
    )
}

export default Register









