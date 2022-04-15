import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    // hook for an error message
    const [errorMessage, setErrorMessage] = useState('');
    //  hook for setting form state
    const [formState,setFormState] = useState({name: '',email: '',message: ''});
    const {name,email,message} = formState;

    // This function will sync the internal state of the component formState with the user input from the DOM. 
    function handleChange(e) {
        // use helper function to vallidate our email as well as set error message based on input
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('your email is not valid!');
            }else{
                setErrorMessage('');
            }
        }else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            }else{
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    };

    // function for submitting data to database
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
   
    return (
        <div className="min-vh-100 d-flex justify-content-center">
            <form className="w-50 min-vh-100 d-flex flex-column justify-content-center justify-content-evenly" onSubmit={handleSubmit}>
<div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" name="name" className="form-control" id="name" defaultValue={name} onBlur={handleChange} />
</div>
 <div className="mb-3">
  <label htmlFor="email" className="form-label">Email</label>
  <input type="email" name="email" className="form-control" id="email" defaultValue={email} onBlur={handleChange} />
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea name="message" className="form-control"  id="message" rows="3" defaultValue={message} onBlur={handleChange} />
</div>
{errorMessage &&(
    <div>
        <p>{errorMessage}</p>
    </div>
)} 
<button data-testid='contact-submit' type="submit">Submit</button>
</form>
        </div>
        
    )
};

export default Contact;