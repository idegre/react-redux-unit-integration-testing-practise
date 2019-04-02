import { connect } from 'react-redux';
import RegistrationPage from './registrationPage';
import { goToStep } from 'lib/registration/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  toStep: number => dispatch(goToStep(ownProps.history, number)),
})

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);