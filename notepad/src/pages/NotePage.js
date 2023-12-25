import React, {useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
// import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
const NotePage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [note,setNote]=useState(null)

  useEffect(()=>{
    getNote()

  },[id])

  let getNote= async() =>{
    if (id === 'new') return
    let response = await fetch(`http://localhost:8000/notes/${id}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...note, 'updated': new Date() }),
    })
  }
  let createNote = async () => {
    await fetch(`http://localhost:8000/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ ...note, 'updated': new Date().getHours }),
    })
  }
  const deleteNote = async () => {
    try {
      await fetch(`http://localhost:8000/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note }),
      });

      // Assuming you want to navigate to a different page after deletion
      navigate('/');
    } catch (error) {
      // Handle errors
      console.error('Error deleting note:', error);
    }
  };

  let handleSubmit= async ()=>{
    if(id!=='new' && !note.body){
      deleteNote()
    }else if (id!=='new'){
      updateNote()
    }else if(id==='new' && note!==null){
      createNote()
    }
    navigate('/');
    // const history=useHistory()
    // history.push('/')
  }
  
  // let note= notes.find(note=>note.id===Number(id))
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to ="/">
            <ArrowLeft onClick={handleSubmit}/>
          </Link>
        </h3>
          {id!=='new'?(          <button onClick={deleteNote}>Delete</button>):          <button onClick={handleSubmit}>Done</button>}
        
      </div>
      {/* This question-mark handles error for unknown id. */}
      <textarea onChange={(e) => { setNote({ ...note, body: e.target.value }) }} value={note?.body}></textarea>

    </div>
  )
}

export default NotePage