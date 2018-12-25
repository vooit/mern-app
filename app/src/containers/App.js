import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        //or this.props.mappedAppSate
        mappedAppState: state.appState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //or this.props.mappedAppActions
        mappedToggleAddTodo: () => dispatch(appActions.toggleAddUser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);