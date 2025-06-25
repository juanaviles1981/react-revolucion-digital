export const Hijo = ({setColor}) => {
    return (
        <div>
         <button onClick={()=> setColor("red")}>Rojo</button>
         <button onClick={()=> setColor("blue")}>Azul</button>
        </div>

    )
}
