import { ItemCounter } from './shopping-cart/ItemCounter';
import './App.css';
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
      <ItemCounter productName='Plays station 5' />
      <ItemCounter productName='Xbox one' />
      <ItemCounter productName='Azus Rog' />
    </>
  );
}