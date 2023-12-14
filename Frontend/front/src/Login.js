
const Login = () => {

    /// Sumbit login handler
    const submitHandler = async() => {
    
        let login = document.querySelector('#credentials-login-field').value
        let password = document.querySelector('#credentials-password-field').value
    
        let data = {"login": login, "password": password}
    
        await fetch('localhost:5000/user/login/', {
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

        <div id="container">
            <h1>Log in</h1>
            <div id="credentials-div">
                Login 
                <input type="text" id="credentials-login-field" name="login-field"/> <br />
                Password
                <input type="paassword" id="credentials-password-field" mame="password-field" /> <br />
                <center><button id="credentials-login-submit" onClick={submitHandler}>Submit</button></center>
            </div>
        </div>




        </div>
        
    )
}

export default Login




/// LOGIC




