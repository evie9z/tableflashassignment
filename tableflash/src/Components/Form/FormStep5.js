import React from "react";
import { Field, reduxForm } from 'redux-form';
import { FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import { DatePicker, TimePicker } from 'redux-form-material-ui'

// Set style
const OrangeRadio = withStyles({
    root: {
        '&$checked': {
            color: orange[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const required = value => (value == null ? 'Required' : undefined)

let FormFifthPage = props => {


    const { handleSubmit, previousPage } = props;
    const [selectedValue, setSelectedValue] = React.useState('option1');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-12-01T10:00:00'));
    console.log(selectedDate);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="form-page">
            <div className="form-title">Add photos to your TableFlash menu</div>
            <div className="form-subtitle">Step 5 of 7</div>
            <form onSubmit={handleSubmit}>

                {/* Option1 */}
                <div class="col">
                    <div class="row mt-4 justify-content-md-center">
                        <div class="col-md-1 ">
                            <OrangeRadio
                                checked={selectedValue === 'option1'}
                                onChange={handleChange}
                                value="option1"
                                label="Female"
                                name="option_1"
                                inputProps={{ 'aria-label': 'Option1' }}
                            />
                        </div>
                        <div class="col-md-7 ">
                            Option 1 - Submit your cown professional photos. You will receive and email outlining how to submit your own photos after signing up
                        </div>
                    </div>

                    {/* Option2 */}
                    <div class="row mt-4 justify-content-md-center">
                        <div class="col-md-1 ">
                            <OrangeRadio
                                checked={selectedValue === 'option2'}
                                onChange={handleChange}
                                value="option2"
                                name="option_2"
                                inputProps={{ 'aria-label': 'Option2' }}
                            />
                        </div>
                        <div class="col-md-7 ">
                            Option 2 - Schedule a FREE professional photoshoot. Choose a preferred date and time below, and a representative will email you to confirm
                        </div>
                    </div>

                    {/* Conditional rendering */}
                    <div>
                        {selectedValue == "option2" &&
                            <div class="row mt-4 justify-content-md-center">
                                <div className="col-4">
                                    <Field name="preferred_date" component={DatePicker} format={null} hintText="Preferred Date" validate={required} />
                                    <FormHelperText>
                                        Please select a day that is 7-16 days in the future.
                                    </FormHelperText>
                                </div>
                                <div className="col-4">
                                    <Field name="preferred_time" component={TimePicker} format={null} hintText="Preferred Time" validate={required} />
                                </div>
                            </div>}
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


export default FormFifthPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    //validate
})(FormFifthPage);