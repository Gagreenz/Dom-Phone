import React from "react";
import UserPanel from "./UserPanel";
import Widget from "./Widget";

function NavBar(){
    const [isPanelActive,setActive] = React.useState(false);
    React.useEffect(() => {
        if(isPanelActive)
            document.body.classList.add('stop-scroll');
        else
            document.body.classList.remove('stop-scroll')
    },[isPanelActive])
    return(
        <div className="row header d-flex align-items-center">
            <div className="col-3 header-panel" onClick={() => setActive(!isPanelActive)}>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".nav-collapse">  
                    {isPanelActive ? "X": "III"}
                </button> 
            </div>
            <div className="col-6 col-lg-3">
                <div className="header-logo">
                    <span className="title">Dom-Phone</span>
                </div>
            </div>
            <div className={'col-lg-6 header-widget ' + (isPanelActive ? "active": "")}>
                <ul>
                    <li>
                        <Widget title="Говно"/>
                    </li>
                    <li>
                        <Widget title="Залупа"/>
                    </li>
                    <li>
                        <Widget title="Пенис"/>
                    </li>
                </ul>
            </div>
            <div className="col-3 col-lg-3">
                <div>
                    <UserPanel/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;