import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderTextField, renderTextFieldSelect } from '../FormPage';
import { FormHelperText } from '@material-ui/core';
import MenuItem from 'material-ui/MenuItem';
import Button from '@material-ui/core/Button';
import image_uploadfile from '../../Assets/upload_file@3x.png';

let FormThirdPage = props => {

    const { handleSubmit, previousPage } = props;

    // Initialize data
    const [values, setValues] = React.useState({
        shareMenuThrough: 'link',
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className="form-page">
            <div className="form-title">Share your menu</div>
            <div className="form-subtitle">Step 3 of 7</div>
            <FormHelperText>
                Please include a link to an online verison of your menu from a third party delivery site or your restaurant website.
                Alternatively, you can upload your menu via any file type, such as PDF, JPEG, or photo.
                Please ensure the images are not blurry and contain item pricing.
             </FormHelperText>
            <form onSubmit={handleSubmit}>

                {/* The first row */}
                <div class="row mt-4">
                    <div className="col-md-6">
                    <Field
                            name="share_menu_through"
                            component={renderTextFieldSelect}
                            label="How would you like to share your menu?"
                            value={values.shareMenuThrough}
                            onChange={handleChange("shareMenuThrough")}
                            required="true"
                        >
                            <MenuItem key={"link"} value={"link"}>Link</MenuItem>
                            <MenuItem key={"file"} value={"file"}>Upload file</MenuItem>
                        </Field>
                    </div>

                    {/* Conditional rendering */}
                    <div className="col-md-6">
                        {values.shareMenuThrough == "link" ? (<Field
                            name="menu_link"
                            component={renderTextField}
                            label="Link to Menu"
                            required="true"
                        />) : (
                                <div style={{ margin: '10px auto' }}>
                                    <img src={image_uploadfile} alt='image_uploadfile' height={300} />
                                </div>
                            )}
                    </div>
                </div>
                <div className="space-between margin-top-24">
                    <Button type="submit" className="previous" variant="contained" onClick={previousPage}>Previous</Button>
                    <Button type="submit" className="next" variant="contained" color="primary">Next</Button>
                </div>
            </form>
        </div>

    )

}

export default FormThirdPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    //validate
})(FormThirdPage);