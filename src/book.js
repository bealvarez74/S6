import React from "react"

/*function Book() {
    return (
        <div>Viatge a la Lluna</div>
    )
}*/
function Book(props) {
    return <div>Viatge a la {props.name}</div>;
  }
  
  function Book() {
    return (
      <div>
        <Book name="Lluna" />
      </div>
    );
  }
export default Book

