import {connect} from 'react-redux';
import ShowFriendsList from './screen';

import {showList} from '../../../redux/actions';

const mapStateToProps = (state) => {
  
  return {
    friendsList: state.friends.friends,
    loading: state.friends.loading,
    error:state.friends.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showList: () => dispatch(showList()), 
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ShowFriendsList);
