import react from 'react';
import './spinner.css'

function Spinnner(){
  console.log("as");
    return (
<>
      <section className='spinner'>
       <div className='load'>  
      <span style={{"--i":"1;"}}></span>
        
         <span style={{"--i":"1"}}></span>
         <span style={{"--i":"2"}}></span>
         <span style={{"--i":"3"}}></span>
         <span style={{"--i":"4"}}></span>
         <span style={{"--i":"5"}}></span>
         <span style={{"--i":"6"}}></span>
         <span style={{"--i":"7"}}></span>
         <span style={{"--i":"8"}}></span>
         <span style={{"--i":"9"}}></span>
         <span style={{"--i":"10"}}></span>
         <span style={{"--i":"11"}}></span>
         <span style={{"--i":"12"}}></span>
         <span style={{"--i":"13"}}></span>
         <span style={{"--i":"14"}}></span>
         <span style={{"--i":"15"}}></span>
         <span style={{"--i":"16"}}></span>
  
       </div>
      </section>  

</>)
}

export default Spinnner;