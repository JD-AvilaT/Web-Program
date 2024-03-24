import './Button.css'

export function Button(props){
    const { variant, title, onClick, type, uid } = props
    const handleClick = () => onClick(type);
    return(
        <button id={uid}
                type = {type}
                onClick={handleClick}
                className={variant}>
            {title}
        </button>
    )
}