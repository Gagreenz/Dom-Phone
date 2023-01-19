import React from "react";

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
            {isMobileSize ? <div>Мобилыч</div> : <div>Компутерыч</div>}
        </div>
    )
}

export default UserPanel;