import React from "react";
import {Link} from 'react-router-dom';
import AuthPanel from "./AuthPanel";


function UserPanel(){
    const [isMobileSize,setMobileSize] = React.useState()
    const updateDimensions = () => {
        // 1024px - width of mobile
        if(window.innerWidth < 1024){
            setMobileSize(true);
        }
        else{
            setMobileSize(false);
        }
    }

    React.useEffect(()=> {
        window.addEventListener('resize', updateDimensions);
    },[])
    
    return(
        <div>
            <AuthPanel/>
            {/* {
            isMobileSize ? 
            <div>
                <img src={""} className="avatar-navbar"></img>
                <a href='#'>Пользователь</a>
                <span>
                    &nbsp;|&nbsp;
                </span>
                <a href='#'>Выход</a>
            </div>
            : 
            <div></div>
            } */}
        </div>
    )
}

export default UserPanel;