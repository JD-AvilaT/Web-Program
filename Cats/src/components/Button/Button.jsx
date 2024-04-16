import  "./Button.css"

export function Button(props) {
    const {tittle, onClick} = props

    const handleClick = () => onClick()

    return(
        <button className="button" onClick={handleClick}>
        <h1>{tittle}</h1></button>
    )
}