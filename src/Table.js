import React from 'react';
import './App.css';

const Table = (props) => {
return (
    
    <div   className="Container" key={Math.random()}> 
      <table >
           <tbody>
              <tr style={{wordBreak: 'break-word'}} >
                  <td style={{width: '10%'}}>{props.level}</td>
                  <td style={{width: '66%'}}>{props.message}</td>
                  <td style={{width: '12%'}}>{props.timeStamp}</td>
                  <td style={{width: '12%'}}>{props.facility}</td>
              </tr>

          </tbody>
    </table>
 
   </div> 
)};

export default Table;