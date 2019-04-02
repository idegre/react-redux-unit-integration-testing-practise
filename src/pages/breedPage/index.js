import BreedPage from './breedPage';
import {connect} from 'react-redux';

const mapStateToProps = ({ breedReducer: { breed, isLoading, photo } }) => ({
    isLoading,
    breed,
    photo
  });
  
export default connect(mapStateToProps)(BreedPage);