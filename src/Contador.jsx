import { useState } from "react"
import styles from './button.module.css'

export default function Contador() {

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    /* function diminuir() {
        setContador(contador - 1)
    }

    if(contador > 5) {
        return (
            <div>
                <h1>Valor muito alto, {contador}</h1>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        )
    } */
    
    return (

        <div className="container">
             <h1>Meu contador</h1>
             <h3>{contador}</h3>
            {/*{ contador > 3 ? <h1>Valor muito grande</h1> : null}*/} 
             <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
             {/* <button onClick={diminuir}>Diminuir</button> */}
        </div>
    )
}