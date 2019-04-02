import { goToStep } from 'lib/registration/actions'
import { connect } from 'react-redux';
import MainPage from './mainPage';

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToStep: () => dispatch(goToStep(ownProps.history, 1))
  })
  
  const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);