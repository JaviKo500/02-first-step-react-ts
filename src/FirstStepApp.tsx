import { ItemCounter } from './shopping-cart/ItemCounter';
import './App.css';

interface ItemInCart {
  id: number;
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { id: 1, productName: 'Plays station 5', quantity: 1 },
  { id: 2, productName: 'Xbox one', quantity: 1 },
  { id: 3, productName: 'Azus Rog', quantity: 1 },
];

export function FirstStepsApp() {
  // return (
  //   <>
  //     <h1>Hello world!</h1>
  //     <p>I'm a javiko500</p>
  //     <button>Click me</button>
  //     <div className="">
  //       <h2>Into div</h2>
  //     </div>
  //   </>
  // );
  return (
    <>
      <h1>Cart shopping</h1>
      {itemsInCart.map(item => <ItemCounter
        key={item.id}
        productName={item.productName}
        quantity={item.quantity}
      />
      )}
    </>
  );
}