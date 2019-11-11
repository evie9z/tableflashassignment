import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderTextField, renderTextFieldSelect } from '../FormPage';
import { FormHelperText } from '@material-ui/core';
import { CountryRegionData } from "react-country-region-selector";
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";

const FormSecondPage = props => {

    const { handleSubmit, previousPage } = props;

    // Get region data according to selected country
    const getRegions = country => {
        if (!country) {
            return [];
        }
        return country[2].split("|").map(regionPair => {
            let [regionName, regionShortCode = null] = regionPair.split("~");
            return regionName;
        });
    };

    // Initialize data
    const [values, setValues] = React.useState({
        country: '',
        region: '',
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className="form-page">
            <div className="form-title">Tell us about your restaurant</div>
            <div className="form-subtitle">Step 2 of 7</div>
            <form onSubmit={handleSubmit}>

                {/* The first row */}
                <div class="row mt-4">
                    <div className="col-md-4">
                        <Field
                            name="restaurant"
                            component={renderTextField}
                            label="Restaurant"
                            required="true"
                        />
                    </div>
                    <div className="col-md-4">
                        <Field
                            name="restaurant_phone_number"
                            component={renderTextField}
                            label="Restaurant Phone Number"
                            required="true"
                        />
                    </div>
                    <div className="col-md-4">
                        <Field
                            name="store_hours"
                            component={renderTextField}
                            label="Store Hours for Delivery"
                            required="true"
                        />
                        <FormHelperText>
                            Please enter in your regular business hous. You will be able to update your business hours for holidays, special closures, etc. once you are onboarded.
                        </FormHelperText>
                    </div>
                </div>

                {/* The second row */}
                <div class="row mt-4">
                    <div className="col-md-4">
                        <Field
                            name="street"
                            component={renderTextField}
                            label="Street"
                            required="true"
                        />
                    </div>
                    <div className="col-md-4">
                        <Field
                            name="city"
                            component={renderTextField}
                            label="City"
                            required="true"
                        />
                    </div>
                    <div className="col-md-4">
                        <Field
                            name="zip"
                            component={renderTextField}
                            label="Zip/Postal Code"
                            required="true"
                        />
                    </div>
                </div>


                {/* The third row */}
                <div class="row mt-4">
                    <div className="col-md-4">
                        <Field
                            name="country"
                            component={renderTextFieldSelect}
                            label="Country"
                            value={values.country}
                            onChange={handleChange("country")}
                            required="true"
                        >
                            {CountryRegionData.map((option, index) => (
                                <MenuItem key={option[0]} value={option}>
                                    {option[0]}
                                </MenuItem>
                            ))}
                        </Field>
                    </div>
                    <div className="col-md-4">
                        <Field
                            name="region"
                            label="Region"
                            component={renderTextFieldSelect}
                            value={values.region}
                            onChange={handleChange("region")}
                            required="true"
                        >
                            {getRegions(values.country).map(
                                (option, index) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                        </Field>
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

export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    //validate
})(FormSecondPage)