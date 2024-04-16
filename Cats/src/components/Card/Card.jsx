import { useState,useEffect } from "react"
import { getCats } from "../../services/getCats";
import { imgCats } from "../../utils/imgCats"
import { Button, Loader, Error } from "../index.js"
import "./Card.css"

export const Card =  () =>   {

    const [loading, setLoading] = useState(false);
    const [catFact, setCatFact] = useState("");
    const [catImage, setCatImage] = useState(null);
    const [error, setError] = useState(null)


    const dataCard = async () => {
        setLoading(true)
        try {
            const dataFact = await getCats()
            setCatFact(dataFact.fact)

            const imgFact = await imgCats(dataFact.fact)
            setCatImage(imgFact)

            setLoading(false)
        } catch (error) {
            console.error("No Miaumiu")
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        dataCard();
    }, []);

    if(loading){
        return(
            <Loader/>
        )
    }

    if(error){
        return(
            <Error/>
        )
    }


    const anotherFact = () => {
        dataCard(); 
    };

    return (
        <div className="card">
            <img src={catImage} className="image" alt="" />
            <Button onClick={anotherFact} tittle={"More Miaufact"} />
        </div>
    );
}