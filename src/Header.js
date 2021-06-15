import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Notifications from "@material-ui/icons/Notifications";
import Chat from "@material-ui/icons/Chat";
import { auth } from './firebase';
import { logout,selectUser } from './features/user/userSlice';



const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout());
        auth.signOut();
    }
    return user && (
        <div className="header"> 
           
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"  placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Messaging"/>

                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar={true} title="me"  onClick={logoutOfApp}/>

            </div>
        </div>
    )
}

export default Header
