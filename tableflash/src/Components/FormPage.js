import React, { Component } from "react";
import Stepper from "./StepperComponent";
import FormFirstPage from "./Form/FormStep1";
import FormSecondPage from "./Form/FormStep2";
import FormThirdPage from "./Form/FormStep3";
import FormFourthPage from "./Form/FormStep4";
import FormFifthPage from "./Form/FormStep5";
import FormSixthPage from "./Form/FormStep6";
import FormSeventhPage from "./Form/FormStep7";
import TextField from '@material-ui/core/TextField';
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from 'prop-types';

// Set text field style and render text field
const textFieldStyle = { width: "100%", height: 75 }
const selectFieldStyle = { width: "100%", height: 75 }

export const renderTextField = ({
    label,
    input,
    required,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            style={textFieldStyle}
            required={required}
            {...input}
            {...custom}
        />
    )

export const renderTextFieldSelect = ({
    label,
    input,
    required,
    value,
    onChange,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            label={label}
            select
            id={label}
            value={value}
            onChange={onChange}
            error={touched && invalid}
            helperText={touched && error}
            style={selectFieldStyle}
            required={required}
            {...input}
            {...custom}
        />
    )

export const renderButtonBase = ({
    className,
    onClick,
    input,
    ...custom
}) => (
        <ButtonBase
           className={className}
            onClick={onClick}
            {...input}
            {...custom}
        />
    )

class FormPage extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            step: 1,
        };
    }

    nextPage() {
        this.setState({ step: this.state.step + 1 });
    }

    previousPage() {
        this.setState({ step: this.state.step - 1 });
    }

    renderForm = (step, onSubmit) => {
        switch (step) {
            case 1: return <FormFirstPage onSubmit={this.nextPage} />
            case 2: return <FormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />
            case 3: return <FormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage} />
            case 4: return <FormFourthPage previousPage={this.previousPage} onSubmit={this.nextPage} />
            case 5: return <FormFifthPage previousPage={this.previousPage} onSubmit={this.nextPage} />
            case 6: return <FormSixthPage previousPage={this.previousPage} onSubmit={this.nextPage} />
            case 7: return <FormSeventhPage previousPage={this.previousPage} onSubmit={onSubmit} />
        }
    }

    render() {
        const { onSubmit } = this.props;
        const { step } = this.state;

        return (
            <div className="form-page adaptive-content">
                <Stepper step={step} />
                {this.renderForm(step, onSubmit)}
            </div>
        )
    }
}

FormPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default FormPage