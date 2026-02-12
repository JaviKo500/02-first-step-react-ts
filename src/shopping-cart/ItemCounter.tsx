interface ItemCounterProps {
  productName: string;
  quantity?: number;
}
export const ItemCounter = ({ productName, quantity = 1 }: ItemCounterProps) => {
  return (
    <section>
      <br />
      <div style={{ marginBottom: '8px' }} >{productName}</div>
      <button>-1</button>
      <span style={{
        marginLeft: '10px',
        marginRight: '10px',
      }}>{quantity}</span>
      <button>+1</button>
    </section>
  )
}
