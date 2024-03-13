import './Button.css'

export function Button(props){
    const { title, onClick, type, uid} = props
    const handleClick = () => onClick(type);
    return(
        <button id={uid}
                type = {type}
                onClick={handleClick}>
            {title}
        </button>
    )
}