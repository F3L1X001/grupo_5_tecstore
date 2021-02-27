import {useState, useEffect}  from "react";



function Metrica({endPoint}) {
    
    const [data,setData]=useState(null);

    useEffect (()=>{
    fetch(endPoint)
    .then(response => response.json())
    .then (dataApi =>{
           setData(dataApi)
           console.log(dataApi);
     
    });
   
    
    },[]);

return(
   <>
      <div>
         {data && <img src={data.data.image_url}></img>}
         
      </div>
   </>

);
    
}
export default Metrica;
