import PropTypes from "prop-types"


const ButtonPrimery = ({
    herf,
    target= '_self',
    label,
    icon,
    classes
}) =>{
    if(herf){
        return(
            <a
            className={"btn btn-primary " + classes}
                herf={herf}
                target={target}
                
            >
                {label}
                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }  
            </a>
        )
    } else {
        return(
            <button className={"btn btn-primary" + classes}> 
                {label}

                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
                } 
            </button>
        )
    }
}

ButtonPrimery.propTypes= {
    label:PropTypes.string.isRequired,
    herf:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}

const ButtonOutline = ({
    herf,
    target= '_self',
    label,
    icon,
    classes
}) =>{
    if(herf){
        return(
            <a
            className={"btn btn-outline " + classes}
                herf={herf}
                target={target}
                
            >
                {label}
                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }  
            </a>
        )
    } else {
        return(
            <button className={"btn btn-outline" + classes}> 
                {label}

                {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
                } 
            </button>
        )
    }
}

ButtonOutline.propTypes= {
    label:PropTypes.string.isRequired,
    herf:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}
export {
    ButtonPrimery,
    ButtonOutline
};