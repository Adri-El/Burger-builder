import React, {useState} from 'react';
import {connect} from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


const layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const SideDrawerClosedHandler = ()=>{
        setShowSideDrawer(false)
    }

    const SideDrawerOpenHandler = ()=>{
        setShowSideDrawer(!showSideDrawer)
    }

    
    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated} 
                openSideDrawer={SideDrawerOpenHandler}/>
            <SideDrawer
                isAuth={props.isAuthenticated} 
                open={showSideDrawer} 
                closed={SideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
    
}

const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout); 