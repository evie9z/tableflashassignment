import React from "react";
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Checkbox from 'material-ui/Checkbox';
import Typography from '@material-ui/core/Typography';

const renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
        required
    />
);

const FormSeventhPage = props => {

    const { handleSubmit, previousPage } = props;

    return (
        <div className="form-page">
            <div className="form-title">Terms and Conditions</div>
            <div className="form-subtitle">Step 7 of 7</div>
            <form onSubmit={handleSubmit}>
                <div className="col mt-4">
                    <div>
                        <Typography paragraph variant="h6" gutterBottom>
                            1. Merchant Information
                         </Typography>
                        <Typography paragraph variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                         </Typography>
                         <Typography paragraph variant="h6" gutterBottom>
                            2. General Terms
                         </Typography>
                        <Typography paragraph variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                         </Typography>
                    </div>
                    <div className="col mt-4">
                        <Field name="tnc" component={renderCheckbox} label="By checking the box to the left, I agree to Terms and Conditions Agreement and Merchant Terms of Use" />
                    </div>
                </div>

                <div className="space-between margin-top-24">
                    <Button type="submit" className="previous" variant="contained" onClick={previousPage}>Previous</Button>
                    <Button type="submit" className="submit" variant="contained" color="primary">Submit</Button>
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
})(FormSeventhPage)