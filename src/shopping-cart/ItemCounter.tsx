import { useState } from "react";

interface ItemCounterProps {
  productName: string;
  quantity?: number;
}
export const ItemCounter = ({ productName, quantity = 1 }: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);
  const increaseItems = () => {
    setCount(count + 1);
  }
  const decreaseItems = () => {
    if (count === 1) return;
    setCount(count - 1);
  }
  return (
    <section>
      <br />
      <div style={{ marginBottom: '8px' }} >{productName}</div>
      <button onClick={decreaseItems} >-1</button>
      <span style={{
        marginLeft: '10px',
        marginRight: '10px',
      }}>{count}</span>
      <button onClick={increaseItems} >+1</button>
    </section>
  )
}
