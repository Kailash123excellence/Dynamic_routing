import React from 'react'
import { useParams } from 'react-router';
import Data from '../../Data.json'
import { Link } from 'react-router-dom';
export default function MessageBox() {
const {id}= useParams()
console.log(Data);
  return (
    <>
      <div className='messageBoxItem'>
        {
          Data.map((val)=>{
            if(val.id==id){
              return(<h1>{val.message}</h1>)
            }

          })
        }
        <button className='backBtn'><Link to="/message" className='btnLink'>Back to Message</Link></button>
      </div>
    </>
  );
}
