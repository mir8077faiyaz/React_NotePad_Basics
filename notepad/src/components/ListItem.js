import React from 'react'
import {Link} from 'react-router-dom'
// const ListItem = (props) => {
//     console.log('PROPS:',props)
//   return (
//     <div>
//         <h3>{props.note.body}</h3>
//     </div>
//   )
// }
const ListItem = ({note}) => {
    return (
      <Link to={`/note/${note.id}`}>
          <div className='notes-list-item'>
            <h3>{note.body}</h3>
          </div>
      </Link>
    )
  }
export default ListItem