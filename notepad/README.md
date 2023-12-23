Backend Replica: JSON Server (Fetch API)
<TO START REACT APPLICATION USE npm start>
 rm notepad -r -force
1. What is React?
A. React is a frontend framework/library designed for building out user interfaces.

> React was built by FaceBook in 2013. (Other frameworks: Angular, Vue)

Important: Backend frameworks and frontend frameworks do not interfere with each other. 


> JSON Data from Backend is usually in the Following format:

{
    "notes":[
        {
            "id":1,
            "body" "Today's Agenda\n",
            "updated": "2023-12-....."
        },
                {
            "id":2,
            "body" "Trip Plan\n",
            "updated": "2023-12-....."
        },
                {
            "id":3,
            "body" "Budget\n",
            "updated": "2023-12-....."
        }
    ]
}

This Backend data is taken in frontend using AXIOS/FETCH request. 

> Usually without React, we would use HTML, CSS & JS and then we would manipulate DOM. But for complex, large application, a frontend framework can make things easy.

# At the Heart of Every React Applications are Components.

<Header Component>
<Navigation Component>
<Create Post Component>
<Sidebar Component> 

> We add all these code into a parent component. 
> We can nest Components.

A component is simply a JS class or function that returns back some HTML code. (This is JSX --> Javascript XML)


function Notes(){
    return (
        <div className="notes">
            <h1> This is my notes app </h1>
        </div>
    )
}

function Home() {
    return (
        <div>
        <Header/>
        <Notes/>
        <Footer/>
    )
}

When piecing together a page, we add all the components and add them as above.

function Notes(){

    return (
        <div id="notes">
            {
                notes.map((note,index)=>
                <div className=""note-wrapper" key={index}>
                    <p onClick={alert('Note was clicked!')}>{note}</p>
                </div>
                )
            }
        </div>
    )
}

Points:

1) className is used in div since class is a JS reserved keyword.
2) Using the curly braces, we can create loop to loop over all notes 
3) We can pass variable directly to be displayed in browser.

# Single Page Applications using React

In a normal application, we have many pages, (Home, Profile, Product).html but with React, we have a single (Page/Template) application. 

In React, we never reload the page, we take out the current component and replace it with a new component. { Just Like AJAX}.

# Editors, extensions and plugins

1. VSCode (Text Editor)
2. ES7 React/Redux/GraphQL/...
3. Auto Rename Tag
4.Prettier- Code formatter

# Setups 

1. Install NodeJS
2. Run command: npx create-react-app app-name
3. cd into the app folder

# Directory explanation

App
--node_modules -> (All installed packages in react)
--public--> (Contains index.html which is our single Page and other assets)
--src--> (This is the main folder
--> App.js)
--package.json (Settings configuration file)

# App.js file
This is the entry point and any changes here will be shown in webpage.

# Files to be removed from src Folder:
1. SetupTests.js 
2. reportWebVitals.js
3. App.tests.js
4. index.css
5. logo.svg

# Remove the following 
1. From App.js
// import logo from './logo.svg';
2. From index.js
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
3. Remove all existing css from App.css


# Creating Components
Inside src folder create a subfolder named components --> this folder contains all components as .js file

For example:
Header.js
---------------------
const Header =() => {
    return(
        <div>
            <h1>My Header</h1>
        </div>
    )
}

export default Header;
-----------------------

In App.js File
---------------------
import Header from './components/Header'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>  --> Adding Components
    </div>
  );
}

export default App;
---------------------

# Shortcuts:
rafce --> React arrow function component exported.

# Some Additional Information About Components:
1. Each component must be wrapped inside of a parent (for example a div).
2. Fragments: we can remove div and just keep <> <h3> Text </h3> </>
3. We can keep page components separate from other components by creating a folder under source called pages

-------------------------------------------
Additional Notes to be added here.
Add:
src--> assets-->data.js
In App.js-->
import notes from '../assets/data.js'
* .. means going back two folders.
-------------------------------------------

# Rendering out data:
    {
        "id": 2,
        "body": "Bob from bar down the \n\n- Take out trash\n- Eat food",
        "updated": "2021-07-13T20:43:18.550058Z",
        // "created": "2021-07-13T00:17:13.289897Z"
    }

To iterate all the data.js entries, and printing the "body" key only,

In NotesList.js:
    <div>
      <div className="notes-list">
        {notes.map(note =>(
          <p>{note.body}</p>
        )

        )}
      </div>
    </div>

**
The map method is a higher-order function in JavaScript that is used to iterate over elements of an array and create a new array by applying a function to each element in the original array. It doesn't modify the original array but instead returns a new array with the results of applying the provided function to each element.
-------------------------------------------

# Props
Props is an object which can be used to pass data down.

To avoid warning for unique key prop, pass when iterating, pass index, and add it as key. Key prop can be used to identify list items for virtual DOM.
-------------------------------------------
const NotesList = () => {
  return (
    <div>
      <div className="notes-list">
        {notes.map((note,index) =>(
          <ListItem key={index}
          note={note}/>
        )

        )}
      </div>
    </div>
  )
}
-------------------------------------------
To access this prop in a child, 
const ListItem = (props) => {
    console.log('PROPS:',props)
  return (
    <div>
        <h3>{props.note.body}</h3>
    </div>
  )
}
-------------------------------------------
# Props Alternative
Destructure a JS object and access different parts of it.
-------------------------------------------
const ListItem = ({note}) => {
  return (
    <div>
        <h3>{note.body}</h3>
    </div>
  )
}
-------------------------------------------
# React Router
To replace/choose components, we use a React-Router.

https://v5.reactrouter.com/web/guides/quick-start

1. Install React-router-DOM --> cd to reactApp: 
npm install react-router-dom


2. Add the following imports on App.js
-------------------------------------------
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
-------------------------------------------
In App.js:
-------------------------------------------
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NotesList from './pages/NotesList'
import NotePage from './pages/NotePage'
function App() {
  return (
    <div className="App">
  <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<NotesList />} />
        <Route path="/note" element={<NotePage />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
-------------------------------------------

# Dynamic Parameters:

To pass Dynamic Parameters in URL, such as id:
    <div className="App">
      <Router>
          <Header/>
          <Routes>
          {/* Notes list contains all the notes */}
          <Route path='/' element={<NotesList />} />
          {/* NotePage Contains one specific Note  */}
          <Route path="/note/:id" element={<NotePage />} />
          </Routes>
      </Router>
    </div>
-------------------------------------------

Accessing URL Information

1. import { useParams } from 'react-router-dom'
3. let { id } = useParams();

-------------------------------------------

# Using Links to pass id:
1. import {Link} from 'react-router-dom'
-------------------------------------------
const ListItem = ({note}) => {
    return (
      <Link to={`/note/${note.id}`}>
          <h3>{note.body}</h3>
      </Link>
    )
  }
-------------------------------------------
# Using Arrow Function to find corresponding ID:
Here, find iterates note, and matches note id to URL id.
let note= notes.find(note=>note.id===Number(id))
-------------------------------------------
# ADDING JSON SERVER:

https://www.npmjs.com/package/json-server


1. Install: npm install -g json-server
2. Run server: json-server --watch db.json --port 8000
(Shortcut--> in package.json add the the command above to scripts)

> a file "db.json" got created, which contains a database, with keys and values.
http://localhost:8000/posts gives all values of the key "posts"

> Replace post with notes from Assets/data.js
-------------------------------------------

# State and Lifecycle Methods:

// Product Component State
{
  "price":"$150",
  "type":"Outdoor",
  "onsale":false
}

State inside of react represents the state of our component. It holds data/information about Component. 
The state above is a JS object.

States can be class-based or function-based, function-based is more regularly used.

-------------------------------------------

function Notes(){
  let [notes,setNotes]= useState(['Wash car', 'Build project', 'Workout'])

  return(
    <div id="notes">
    {
      notes.map((note,index)=>(
        <div className="note-wrapper" key={index}>
          <p onClick={alert('Note was clicked')}>{note}</p>
      ))
    }
    </div>
  )
}
-------------------------------------------

To update State, we use React Hooks.

# React Hooks:
React Hooks are set of functions to modify/set states.

1. useState --> sets the value of a set.
  let [notes,setNotes]= useState(['Wash car', 'Build project', 'Workout'])
-------------------------------------------
# React Lifecycle methods:
https://raw.githubusercontent.com/divanov11/notes-app/master/slide%20images/12%20-%20Life%20Cyce%20Methods.jpg

Mounting Phase:

constructor(): This is the first method called when an instance of a component is created. It's used for initializing state and binding methods.

static getDerivedStateFromProps(): This method is invoked right before calling the render method, both on the initial mount and on subsequent updates. It's used to update the state based on changes in props.

render(): This method is responsible for rendering the component UI. It is a required method for class components.

componentDidMount(): This method is called after the component has been rendered to the DOM. It's often used for performing side effects, such as data fetching.

Updating Phase:

shouldComponentUpdate(): This method is called before rendering when new props or state are received. It allows developers to control whether the component should update or not, based on the changes in props or state.

render(): As mentioned before, render is called during both the mounting and updating phases.

getSnapshotBeforeUpdate(): This method is called right before the changes from the virtual DOM are reflected in the actual DOM. It can capture some information from the DOM before it's potentially changed.

componentDidUpdate(): This method is called after the component is updated in the DOM. It's often used for additional side effects.

Unmounting Phase:

componentWillUnmount(): This method is called just before a component is unmounted and destroyed. It's used for cleanup tasks, such as canceling network requests or cleaning up subscriptions.

-------------------------------------------

# MAKING API CALLS:
import React, {useState,useEffect} from 'react'
-------------------------------------------
    const NotesList = () => {
    let [notes,setNotes]=useState([])
    useEffect(()=>{
      getNotes()
  
    },[])
  
    let getNotes = async() => {
      let response= await fetch('http://localhost:8000/notes')
      let data=await response.json()
      setNotes(data)
      // console.log("data:",data)
  
    }

-------------------------------------------

In the code above, [] at the end of useEffect is extremely important as it keeps looping through use effect by pulling requests.
Get notes is a function driven by fetch API, that brings in all the notes.

-------------------------------------------

# CRUD-ing
1. Updating:

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...note, update: new Date() }),
    })
  }
  let handleSubmit= async ()=>{
    updateNote()
    // const history=useHistory()
    // history.push('/')
  }
-------------------------------------------
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to ="/">
            <ArrowLeft onClick={handleSubmit}/>
          </Link>
        </h3>
      </div>
      {/* This question-mark handles error for unknown id. */}
      <textarea onChange={(e) => { setNote({ ...note, body: e.target.value }) }} value={note?.body}></textarea>

    </div>
-------------------------------------------

2. Deleting
Import {useNavigate } from 'react-router-dom
Use Button onClick
-------------------------------------------
  const navigate = useNavigate(); 
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
-------------------------------------------
3. Create:
  let getNote= async() =>{
    if (id === 'new') return
    let response = await fetch(`http://localhost:8000/notes/${id}`)
    let data = await response.json()
    setNote(data)
  }
-------------------------------------------
if (id === 'new') return --> Ensures request is not set for a new id.
-------------------------------------------
  let createNote = async () => {
    await fetch(`http://localhost:8000/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...note, 'updated': new Date() }),
    })
  }
  -------------------------------------------
  Logic for handleSubmit
  -------------------------------------------
    let handleSubmit= async ()=>{
    if(id!=='new' && !note.body){
      deleteNote()
    }else if (id!=='new'){
      updateNote()
    }else if(id==='new' && note!==null){
      createNote()
    }
    
    // const history=useHistory()
    // history.push('/')
  }
  