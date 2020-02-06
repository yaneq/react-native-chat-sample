import {connect} from 'react-redux';
import {SettingsComponent} from './Settings.component';

const SettingsContainer = connect(
  state => ({
    name: state.user.name,
  }),
  dispatch => ({
    // login: () => dispatch(login())
  }),
)(SettingsComponent);

export default SettingsContainer;
