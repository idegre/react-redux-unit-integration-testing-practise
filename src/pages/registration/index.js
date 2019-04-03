import { connect } from 'react-redux';
import RegistrationPage from './registrationPage';
import { goToStep, setValues } from 'lib/registration/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  toStep: number => dispatch(goToStep(ownProps.history, number)),
  setValues: values => dispatch(setValues(values, ownProps.history)),
})

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);