import React from "react";

function Widget({title,items}){
    const [active,setActive] = React.useState(false);
    const widgetRef = React.useRef();

    const togglePopup = () =>{
        setActive(!active);
    }
    const handleOutsideMouse = (event) =>
    {
        setActive(false);
    }

    React.useEffect(() => {
        widgetRef.current.addEventListener('mouseleave', handleOutsideMouse);
      }, []);

    return(
        <div ref={widgetRef} onMouseEnter={() => togglePopup()} className="widget" >
            <div className="widget-title">{title}</div>
            <div className={(active ? "active" : "") + " widget-menu"}>
                <ul>
                    <li>
                        <a><span>1Решения</span></a>
                    </li>
                    <li>
                        <a><span>2Тарифы</span></a>
                    </li>
                    <li>
                        <a><span>3Вопросы и ответы</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Widget;