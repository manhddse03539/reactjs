import { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import './LoginForm.css';

const LoginForm = (props) => {
    const { Login, error } = props;
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const handleSubmitForm = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <Form className="login-form col-md-4 col-xs-6" onSubmit={handleSubmitForm}>
            <h2>LOGIN FORM</h2>
            {(error !== "") ? <div className="error">{error}</div> : ""}
            <FormGroup className="form-group">
                <Label htmlFor="name">Name : </Label>
                <Input type="text" required="required" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} />
            </FormGroup>
            <FormGroup className="form-group">
                <Label htmlFor="email">Email : </Label>
                <Input type="email" required="required" email="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} />
            </FormGroup>
            <FormGroup className="form-group">
                <Label htmlFor="password">Password : </Label>
                <Input type="password" required="required" password="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} />
            </FormGroup>
            <Input id="submit" type="submit" value="Login" />
        </Form>
    )
}

export default LoginForm;
