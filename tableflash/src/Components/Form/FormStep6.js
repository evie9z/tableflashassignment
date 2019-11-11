import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../FormPage';
import Button from '@material-ui/core/Button';
import image_routing_num from '../../Assets/routingnum.jpg'

const FormSixthPage = props => {

    const { handleSubmit, previousPage } = props;

    return (
        <div className="form-page">
            <div className="form-title">Getting paid</div>
            <div className="form-subtitle">Step 6 of 7</div>
            <form onSubmit={handleSubmit}>
                <div class="row mt-4">
                    <div className="col-md-7">
                        <Field
                            name="legal_business_name"
                            component={renderTextField}
                            label="Legal Business Name"
                            required="true"
                        />
                    </div>
                    <div className="col-md-5">
                        <Field
                            name="ein_num"
                            component={renderTextField}
                            label="EIN Number (GST/HST Number for Canada)"
                            required="true"
                        />
                    </div>
                    <div className="col-md-6">
                        <Field
                            name="routing_num"
                            component={renderTextField}
                            label="Routing Number"
                            required="true"
                        />
                        <Field
                            name="accounct_num"
                            component={renderTextField}
                            label="Account Number"
                            required="true"
                        />
                    </div>
                    <div className="col-md-6">
                        <img src={image_routing_num} alt='image_routing_num' height={270} />
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
})(FormSixthPage)