


import React from 'react'
import App from '../App'
export default function Child(props) {
  return (
    <div>
      {/* <h1>{props.fun()}</h1> */}
    </div>
  )
}




// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case "increase":
//       return { count: state.count + 1 };

//     case "decrease":
//       return { count: Math.max(0, state.count - 1) };

//     case "reset":
//       return { count: 0 };

//     default:
//       return state;
//   }
// }

// export default function Child() {
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>{state.count}</p>

//       <button onClick={() => dispatch({ type: "increase" })}>
//         Increment
//       </button>

//       <button
//         disabled={state.count === 0}
//         onClick={() => dispatch({ type: "decrease" })}
//       >
//         Decrement
//       </button>

//       <button onClick={() => dispatch({ type: "reset" })}>
//         Reset
//       </button>
//     </div>
//   );
// }
