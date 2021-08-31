import BaseComponent from "../BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { validateEmail } from "../models/utils.js";

export default class RegisterScreen extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {
            data: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },


            error: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    }

    handleInputChange = (fieldName, fieldValue) => {
        
        let tmpState = this.state;

        

        tmpState.data[fieldName] = fieldValue.trim();
        this.setState(tmpState);

        console.log(this.state);
    }

    render() {
        let $container = document.createElement('div');

        let $title = document.createElement('h2');
        $title.classList.add('text-center');
        $title.innerHTML = "Create an account";

        let _name = new InputWrapper({ 
            placeholder: 'Your name', 
            type: 'text', 
            error: this.state.error.name, 
            value: this.state.data.name,
            onchange: (event) => {
                this.handleInputChange('name', event.target.value)
            }
        });
        let _email = new InputWrapper({ placeholder: 'Email', type: 'email', error: this.state.error.email, value: this.state.data.email, onchange: (event) => {
            this.handleInputChange('email', event.target.value)
        } });
        let _password = new InputWrapper({ placeholder: 'Password', type: 'password', error: this.state.error.password, value: this.state.data.password, onchange: (event) => {
            this.handleInputChange('password', event.target.value)
        } });
        let _confirmPassword = new InputWrapper({ placeholder: 'Confirm password', type: 'password', error: this.state.error.confirmPassword, value: this.state.data.confirmPassword, onchange: (event) => {
            this.handleInputChange('confirmFassword', event.target.value)
        } });

        let $btn = document.createElement('button');
        $btn.classList.add('btn', 'btn-primary', 'btn-block');
        $btn.innerHTML = "Register";

        let $form = document.createElement("form");
        $form.onsubmit = this.handleRegister;
        
        // HTMLElement || Node || HTML String
        $form.append(
            $title,
            _name.render(),
            _email.render(),
            _password.render(),
            _confirmPassword.render(),
            $btn
        );
        $container.append(
            $title,
            $form
        );

        return $container;
    }

    handleRegister = (event) =>{
        event.preventDefault();
        console.log("Submit register form");
        let data = this.state.data;
        let errors = this.state.error;
        
        // errors.name = "";
        // errors.email = '';
        // errors.password = '';
        // errors.confirmPassword = '';
        
        let errorString = '';

        if(data.name == ''){
            errorString = 'Invalid name';
        }
        if(data.email == '' || !validateEmail()){
            errorString = 'Invalid email';
        }
        if(data.password == ''){
            errorString = 'Invalid password';
        }
        if(data.confirmPassword == ''){
            errorString = 'Invalid confirmPassword';
        }

        if(data.password != '' && data.confirmPassword != '' && data.password != data.confirmPassword){
            errorString = "Password confirmation is not correct";
        }

        alert(errorString);
    }
}