import PropTypes from "prop-types";
 
const SkillCard = ({
    imgSrc,
    lable,
    desc,
    classes
}) =>{
    return(
        <div className={`flex items-center gap-3 
        ring-2 ring-inset ring-zinc-50/10 
        rounded-2xl p-3 hover:bg-zinc-800 
        transition-colors group ${classes}`}>

            <figure className="">
                <img 
                src={imgSrc}
                width={32}
                height={32} 
                alt={lable}
                />
            </figure>

            <div>
                <h3>{lable}</h3>

                <p className="text-zinc-400 text-sm"> 
                    {desc}
                </p>
            </div>
        </div>
    )
}

SkillCard.PropTypes={
    imgSrc:PropTypes.string.isRequired,
    lable:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    classes:PropTypes.string
}


export default SkillCard;