import React, {useState} from "react";
import { Form, Input, FormGroup, Button, Label } from "reactstrap";
import "./Css/LoginForm.css"

const LoginForm = ({startLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const creds = {
        email,
        password
    }

    const handleLogin = (event) => {
        event.preventDefault();

        startLogin(creds);

        setEmail("");
        setPassword("");
    }

    console.log(creds)

    return (
        <div className="outerFrame">
            <div className="extra"></div>
            <div className="form">
                <h2>Employee Login</h2>
                <Form onSubmit={handleLogin}
                    id='loginForm'>
                    <FormGroup row>
                        <Input 
                            type='email' 
                            placeholder="Email"
                            value={email}
                            // value ="Punit.Kumar@one.com"
                            onChange={
                                event => setEmail(event.target.value)
                            }
                            id='email'
                            required/>
                    </FormGroup>
                    <FormGroup row>
                    <Input col-6 
                        type='password' 
                        placeholder="Password"
                        value={password}
                            // value="1234"
                        onChange={
                            event => setPassword(event.target.value)
                        }
                        id='password'
                        required/>
                    </FormGroup>

                    <Button type="submit" id="loginSubmit">Login</Button>
                </Form>

            </div>
        </div>
    )
}

export default LoginForm
