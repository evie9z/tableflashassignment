import React from 'react';
import { createMuiTheme} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect,  } from 'react-router-dom';
import { withRouter } from 'react-router' 
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import FormPage from './Components/FormPage';
import { orange } from '@material-ui/core/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThankYouPage from "./Components/ThankYouPage";

const muiTheme = createMuiTheme({
    
  palette: {
    primary: {
          main: orange[500],
          dark: orange[600],
          contrastText: "#fff"
        },
    action: {
          selected: '#E7A615',
          hover: '#FFD371',
          disabled: '#9B9B9B'
      }
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.showResults  = this.showResults.bind(this);
    };

    // Show results in JSON
    showResults = (values) => {
      console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      this.props.history.push('/thankyou');
    };
  
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
            <div>
              <Switch>
                <Route path="/form" component={ () => <FormPage onSubmit={this.showResults}/>} />
                <Route exact path="/thankyou" component={ThankYouPage}/>
                <Redirect to="/form" />
              </Switch>
            </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(App);