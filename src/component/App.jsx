import React, {useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import AboutUs from './Menu/AboutUs'
import Fedback from './Menu/Fedback'
import CreateArea from './CreateArea'
import { Routes, Route } from 'react-router-dom';

function App() {

  const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
           return [...prevNotes, newNote];
        });

    }

    function deleteNote(id){
        setNotes(prevNotes => {
           return prevNotes.filter((noteItem, index) => {
                return index !== id;

            });
        });

    }

  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/notes" element={<CreateArea 
      onAdd={addNote}
       />}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/fdbk" element={<Fedback/>}/>      
      </Routes>
      
       {notes.map((noteItem, index) => {
        return <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
       })}
      <Footer/>
    </div>
  )
}

export default App