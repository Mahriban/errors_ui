import React, { Component } from 'react';
import Table from './Table.js';
import './App.css';
//var _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     errors:[],
     };
   }

  componentDidMount() {
    fetch('./data.json').then(response => {
    //data.json is located in public folder
      console.log(response);
      return response.json();
    }).then(data => {
     console.log(data.data[0].timeStamp)
     this.setState({errors: data.data})
    }).catch(err => {
      console.log(err);
    });

  }
  render() {
    const err = this.state.errors;
 
 
    let res = [];
    let i = 0;
    for (const item of err) {
     let condFn = function(value, index, self){
       let cond = value.facility==item.facility&&value.timeStamp ==item.timeStamp&&value.level == item.level
        return cond
      }
      if (typeof res.find(condFn) == "undefined") {
        res[i]=item
        i++;
      }
      else {
       let index = res.findIndex(condFn)
        if(!res[index].message.includes(item.message))
        res[index].message+="  " + item.message
      }
    };

    console.log(res);

    const errors = res.map(function (errors, idx){

    const date = errors.timeStamp;  
    //console.log(date)
      
   var localDate = new Date(date);
   var localDateString = localDate.toLocaleDateString(undefined, {  
       day : 'numeric',
       month : 'short',
       year : 'numeric',
       hour: '2-digit',
       minute: '2-digit',
       second: '2-digit'
     });

 
   return <Table key={Math.random()} level={errors.level}
                    message= {errors.message}
                    timeStamp={localDateString }
                    facility={errors.facility}
                    err= {err}/>
    
    })
  
    return (
      <div  >
      <div className="Headers">
       

      <thead>
    <th style={{width: '10%'}}> <h1  >Level</h1>  </th> 
		<th  style={{width: '66%'}}>	<h1>Message</h1> </th> 
		<th>	<h1 style={{width: '12%'}}>Time</h1> </th> 
		<th>	<h1  style={{width: '2%'}}>Facility</h1> </th> 
      
     </thead>
       </div> 
	
           {errors} 
  
      </div>
    );
  }
}

export default App;
