import React from "react";
import "./style.css";

//ForEach

const fruits = ["apple", "orange", "cherry"];

fruits.forEach((e, index) => console.log(index + ": " + e));

//myForEach

// myForEach(arr2, (e, idx) => console.log(e, idx))

let arr = ['Bulvasaur', 'Charmander', 'Squirtle']

const myForEach = (array, asd) => {
  for (let i=0; array.length > i; i++){
    asd(i, array[i])
  }
  
}

myForEach(arr, (idx, e) => { console.log(`${idx}: ${e}`) })

// myForEach(arr, (e, idx) => console.log(e, idx))


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
