import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class ThankYouPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
                <div className="col-8">
                    <Typography paragraph variant="h4" align="center" gutterBottom>
                        Thank you for signing up with TableFlash.
                </Typography>
                    <Typography paragraph variant="subtitle1" align="center" gutterBottom>
                        An activation specialist will reach out to you soon to walk you through receiving your first TableFlash order!
                </Typography>
                </div>
            </div>
        )
    }
}

export default ThankYouPage;