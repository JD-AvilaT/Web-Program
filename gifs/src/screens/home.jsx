import { useState } from "react"
import { Forms, Card, Navbar } from "../components/index"

export function Home(){
    const [inputsInfo, setInputsInfo] = useState('')

    const functionsDaddy = (e) => {
        setInputsInfo(e)
    }
    return(
            <section className="flex-col items-center">
                <h1 className="my-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Gifs App</h1>
                <Forms onSubmit={functionsDaddy}/>
                <Navbar/>
                <Card value={inputsInfo}/>
            </section>
    )
}