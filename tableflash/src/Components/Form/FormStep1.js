import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../FormPage';
import Button from '@material-ui/core/Button';


const FormFirstPage = props =>  {

    const { handleSubmit } = props
        return (
            <div className="form-page">
                <div className="form-title">Tell us about you</div>
                <div className="form-subtitle">Step 1 of 7</div>
                <form onSubmit={handleSubmit}>
                <div class="row mt-4">
                    <div className="col-md-6">
                        <Field
                            name="first_name"
                            component={renderTextField}
                            label="First Name"
                            required="true"
                        />
                    </div>
                    <div className="col-md-6">
                        <Field
                            name="last_name"
                            component={renderTextField}
                            label="Last Name"
                            required="true"
                        />
                    </div>
                    <div className="col-md-6">
                        <Field
                            name="email_address"
                            component={renderTextField}
                            label="Email Address"
                            required="true"
                        />
                    </div>
                    <div className="col-md-6">
                        <Field
                            name="mobile_phone"
                            component={renderTextField}
                            label="Mobile Phone Number"
                            required="true"
                        />
                    </div>
                </div>
                <div className="space-between margin-top-24">
                <div> </div>
                <Button type="submit" className="next" variant="contained" color="primary">Next</Button>
                </div>
                </form>
             </div>
            
        )
    
}

export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    //validate
})(FormFirstPage)