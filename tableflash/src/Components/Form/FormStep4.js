import React from "react";
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { renderButtonBase } from '../FormPage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';

const defaultBackgroundColor = '#fff';
const selectedBackgroundColor = orange[50];

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 20,
    },
});


let FormFourthPage = props => {

    const { handleSubmit, previousPage } = props;
    const classes = useStyles();

    // Initialize data
    const [values, setValues] = React.useState({
        backgroundColor1: defaultBackgroundColor,
        backgroundColor2: defaultBackgroundColor,
        backgroundColor3: defaultBackgroundColor,
        selectService: "dineInTakeOut",
    });

    const handleOnClick = prop => (e) => {
        setValues({
            backgroundColor1: prop == "dineIn" ? selectedBackgroundColor : defaultBackgroundColor,
            backgroundColor2: prop == "takeOut" ? selectedBackgroundColor : defaultBackgroundColor,
            backgroundColor3: prop == "dineInTakeOut" ? selectedBackgroundColor : defaultBackgroundColor,
            selectService: prop,
        });
    }

    return (
        <div className="form-page">
            <div className="form-title">What TableFlash service would you like to use</div>
            <div className="form-subtitle">Step 4 of 7</div>
            <form onSubmit={handleSubmit}>

                {/* Rendering cards */}
                <div class="row mt-4">
                    <div className="col-md-4">
                        <Card
                            className={classes.card}
                            style={{ backgroundColor: values.backgroundColor1, height: 240 }}
                        >
                            <Field
                                name="sevice"
                                component={renderButtonBase}
                                value={values.selectService}
                                className={classes.cardButton}
                                onClick={handleOnClick("dineIn")}
                            >
                                <CardContent>
                                    <Typography paragraph variant="h5" component="h2" >
                                        Dine In - Scan to Order
                                     </Typography>
                                    <Typography paragraph align="left" variant="body2" gutterBottom>
                                        Dine-in customers scanQR code on your restaurant table to view menu, place order and finish payment all on their mobile phone. You receive orders from a TableFlash printeer and serve customers with fresh food in house.
                                     </Typography>
                                </CardContent>
                            </Field>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card
                            className={classes.card}
                            style={{ backgroundColor: values.backgroundColor2, height: 240 }}
                        >
                            <Field
                                name="sevice"
                                component={renderButtonBase}
                                value={values.selectService}
                                className={classes.cardButton}
                                onClick={handleOnClick("takeOut")}
                            >
                                <CardContent>
                                    <Typography paragraph variant="h5" component="h2" >
                                        Take Out - In App Order
                                     </Typography>
                                    <Typography paragraph align="left" variant="body2" gutterBottom>
                                        Customers find your restaurant in the TableFlash app to view menu, place take-out order and finish payment. You receive take-out orders from a TableFlash printer and get the orders ready for customers to pick up.
                                     </Typography>
                                </CardContent>
                            </Field>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card
                            className={classes.card}
                            style={{ backgroundColor: values.backgroundColor3, height: 240 }}
                        >
                            <Field
                                name="sevice"
                                component={renderButtonBase}
                                value={values.selectService}
                                className={classes.cardButton}
                                onClick={handleOnClick("dineInTakeOut")}
                            >
                                <CardContent>
                                    <Typography paragraph variant="h5" component="h2" >
                                        Dine In + Take Out
                                     </Typography>
                                    <Typography paragraph align="left" variant="body2" gutterBottom>
                                        You receive both dine-in and take-out orders form TableFlash.
                                     </Typography>
                                </CardContent>
                            </Field>
                        </Card>
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


export default FormFourthPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    //validate
})(FormFourthPage);