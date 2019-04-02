import { startRegistration } from 'lib/registration/actions'
import { connect } from 'react-redux';
import MainPage from './mainPage';

const mapDispatchToProps = (dispatch, ownProps) => ({
    startRegistration: () => dispatch(startRegistration(ownProps.history))
  })
  
  const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);