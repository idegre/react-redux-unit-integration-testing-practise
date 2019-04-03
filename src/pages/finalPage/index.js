import { connect } from 'react-redux';
import FinalPage from './finalPage';

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const mapStateToProps = ({registration: { data }}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage);