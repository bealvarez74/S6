import React from "react"
import Book from './Book'
import booksData from './listBook'

function App(){
    const bookComponents = booksData.map (item => <Book key ={item.id} book={item}/>)
    
 return (
    <div>
        {bookComponents}
    </div>
  )
}

export default App