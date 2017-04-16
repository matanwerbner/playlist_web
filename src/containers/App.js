import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';
import TopMenu from '../components/shared/topMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  green300
} from 'material-ui/styles/colors';
class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider 
        muiTheme={getMuiTheme({
          isRtl: true,
          palette: {
              accent1Color: green300
          }
        })}>
        <div className="main-container">
          <div className="top-menu-container">
            <TopMenu/>
          </div>
          <div className="mid-container">
            {this.props.children}

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
//<IndexLink to="/">Home</IndexLink> <Link to="/fuel-savings">Demo App</Link>

App.propTypes = {
  children: PropTypes.element
};

export default App;
