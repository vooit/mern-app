import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import Todos from '../components/Todos';

const mapStateToProps = (state,ownProps) => {
    return {
        mappedUserState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(userActions.fetchUsers()),
        mappedDeleteUser: userToDelete => dispatch(userActions.deleteUser(userToDelete)),
        mappedEditUser: userToEdit => dispatch(userActions.editUser(userToEdit))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos);