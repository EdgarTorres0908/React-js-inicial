import {useState} from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    
    const decrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };

    const increment = () => {
        if (count < stock) {
          setCount(Prev => Prev + 1);
        }
      };

    return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={()=> onAdd(count)}>Agregar al Carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount