import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import { AppStateType } from '../redux/rootReducer';

export const withAuthRedirect = (Component:any) => {

    const RedirectComponent = (props:any) => {
        if (!props.userData) return <Redirect to='/'/>

        return <Component {...props}/>
    }

    const mapStatetoProps  = (state:AppStateType) => {
        return {
          userData: state.user.userObj
        }
    }

    let ConnectedRedirectComponent = connect(mapStatetoProps,null)(RedirectComponent)

    return ConnectedRedirectComponent
}