import { useEffect, useState } from 'react';
import './App.css';

function App() {
 const [generate,Setgenerate]=useState(false)
 
useEffect(()=>{
    let title = document.querySelector('.title')
    let textbody= document.querySelector('.textbody')
      let rndint=Math.floor(Math.random() * (99 -0 + 1) + 0);    
      fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{ return response.json() }).then((info)=>{
         title.textContent= info[rndint].title
         textbody.textContent=info[rndint].body
      })

}) 

function handleclick(){
    if(generate===false){
      Setgenerate(true)
    }
    else {
      Setgenerate(false)
    }
}


  return (
    <div className="App">
      <div className='header'><div className='name'>RANDOM TEXT GENERATOR</div></div>
      <div className='content'>
        <div className='text'><div className='title'>title</div> <div className='textbody'>body</div> </div>
        <button className='generate' type='button' onClick={handleclick}>CLICK ME</button>
      </div>
    </div>
  );
}

export default App;
