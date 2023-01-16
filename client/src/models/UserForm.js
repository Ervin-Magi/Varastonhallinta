import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

const username = React.createRef();
const password = React.createRef();
const firstname = React.createRef();
const lastname = React.createRef();

class UserForm extends Component {


    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: ''
        }
    }
    handleLastNameChange = (e) => {
        e.preventDefault()
        this.setState({
            lastname: e.target.value
        })
    }
    handleFirstnameChange = (e) => {
        e.preventDefault()
        this.setState({
            firstname: e.target.value
        })
    }
    handleUsernameChange = (e) => {
        e.preventDefault()
        this.setState({
          username: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        e.preventDefault()
        this.setState({
          password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(username.current.value, password.current.value, firstname.current.value, lastname.current.value)
        username.current.value = ''
        password.current.value = ''
        firstname.current.value = ''
        lastname.current.value = ''
    }

    render() {
        return (
            <>            
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                <Form.Label>Käyttäjä</Form.Label>
                <Form.Control ref={username} type="text" placeholder="Käyttäjä"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Salasana</Form.Label>
                <Form.Control ref={password} type="password" placeholder="Salasana"/>
                </Form.Group>

                <Form.Group controlId="formBasicFirstname">
                <Form.Label>Etunimi</Form.Label>
                <Form.Control ref={firstname} type="text" placeholder="Etunimi"/>
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                <Form.Label>Sukunimi</Form.Label>
                <Form.Control ref={lastname} type="text" placeholder="Sukunimi"/>
                </Form.Group>

                <Button className="Button" variant="primary" type="submit">Luo uusi</Button>
            </Form>

            </>
        )
    }
}

export default UserForm;