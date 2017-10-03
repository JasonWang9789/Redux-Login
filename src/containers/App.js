import React, {Component} from 'react'
import {connect} from 'react-redux'
import {usernameInputChange, passwordInputChange, signinClick} from '../actions/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.nameChangeHandle = this.nameChangeHandle.bind(this);
        this.passwordChangeHandle = this.passwordChangeHandle.bind(this);
        this.signinClickHandle = this.signinClickHandle.bind(this);
    }

    nameChangeHandle(event) {
        this.props.dispatch(usernameInputChange(event.target.value));
    }

    passwordChangeHandle(event) {
        this.props.dispatch(passwordInputChange(event.target.value));
    }

    signinClickHandle() {
        this.props.dispatch(signinClick());
    }

    render() {
        return (
            <div>
                Username: <input type='text' value={this.props.inputValid.usernameValue} onChange={this.nameChangeHandle}/>
                <br />
                Password: <input type='password' value={this.props.inputValid.passwordValue} onChange={this.passwordChangeHandle}/>
                <br />
                <button type='button' onClick={this.signinClickHandle}>Sign In</button>
                <br />
                <ValidationMessage isDisplayed={this.props.inputValid.isValidated}/>
            </div>
        );
    }
}

const ValidationMessage = (props)=> {
    if (props.isDisplayed) {
        return (
            <span>Login Successfully!</span>
        )
    } else {
        return null;
    }
};

const mapStateToProps = (state) => {
    const {inputValid} = state;
    return {inputValid};
}

export default connect(mapStateToProps)(App);