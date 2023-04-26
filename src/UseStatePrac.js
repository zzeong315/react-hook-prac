import React, { useState } from "react";

const UseStatePrac = () => {
  const [item, setItem] = useState(0);
  const increseItem = () => setItem(item + 1);
  const decreseItem = () => setItem(item - 1);

  return (
    <>
      <h1>1. useState</h1>
      <h3>Number: {item}</h3>
      <button onClick={increseItem}>Increse Number</button>
      <button onClick={decreseItem}>Decrese Number</button>
    </>
  )
}

// class UseStateUgly extends React.Component{
//   state = {
//     item: 0
//   }
//   render() {
//     const {item} = this.state;
//       return (
//     <>
//       <h1>Number: {item}</h1>
//       <button onClick={this.increseItem}>Increse Number</button>
//       <button onClick={this.decreseItem}>Decrese Number</button>
//     </>
//   )
//   }
//   increseItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       };
//     });
//   }
//   decreseItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     });
//   }
// }
export default UseStatePrac;
// export default UseStateUgly;