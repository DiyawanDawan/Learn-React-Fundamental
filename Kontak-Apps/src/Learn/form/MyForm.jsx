import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            gender: ''
        }
        this.onNameChangeEvendHandler = this.onNameChangeEvendHandler.bind(this)
        this.onEmailChangeEvendHandler = this.onEmailChangeEvendHandler.bind(this)
        this.onGenderChangeEvendHandler = this.onGenderChangeEvendHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onNameChangeEvendHandler(even) {
        this.setState(() =>{
            return {
                name: even.target.value
            }
        })
    }
    onEmailChangeEvendHandler(even) {
        this.setState(() =>{
            return {
                email: even.target.value
            }
        })
    }
    onGenderChangeEvendHandler(even) {
        this.setState(() => {
            return {
                gender: even.target.value
            }
        })
    }

    onSubmitEventHandler(even) {
        even.preventDefault()
        const message = `
        Name: ${this.state.name}
        Email: ${this.state.email}
        Gender: ${this.state.gender}
      `;
    
      console.log(message);
    }
    render() {
        return (
            <div>
                <h1> Register Form</h1>
                <form action="" onSubmit={this.onSubmitEventHandler}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEvendHandler}/>
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEvendHandler}/>
                    <br />
                    <label htmlFor="gender">Gender: </label>
                    <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEvendHandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}
