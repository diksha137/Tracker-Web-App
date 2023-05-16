import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js"

function createNote(notes){
    return (
        <Note key={notes.key} title={notes.title} content={notes.content}/>
    )
}

var task=true;
function App(){
    return (
        <div>
           
            <Header/>
            {notes.map(createNote)};
            <Footer/> 
        
           {/* {task ? document.write(<strike> buy milk </strike>) : document.write(<h1>buy milk</h1>)} */}

           </div>
        
    )
}

export default App;


// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// // import Note from "./Note";
// // import notes from "../notes";

// function App() {
//   return (
//     <div>
//       <Header />
//       {/* {notes.map(noteItem => (
//         <Note
//           key={noteItem.key}
//           title={noteItem.title}
//           content={noteItem.content}
//         />
//       ))}; */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
