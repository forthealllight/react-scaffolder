import 'whatwg-fetch';
import querystring from 'querystring';
import React from 'react';
import {render} from 'react-dom';
class Hello extends React.Component{
  componentDidMount(){
    const param={
      name:'1',
      age:'2'
    };
    fetch('/userInfo',{
      method:'POST',
      body:querystring.stringify(param),
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
    }).
    then(function(response){
      response.json().then(function(res){
        console.log(res);
      })
    });
  }
  render(){
    return <div>Hello world</div>
  }
}
render(<Hello/>,document.getElementById('app'));
