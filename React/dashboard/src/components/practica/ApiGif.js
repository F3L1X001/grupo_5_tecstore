import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ApiGif extends Component{
constructor(props){
   super(props);
   this.state ={
     gif:" "
   }

}

mostrarGif=(data)=>{
  console.log(data);
   this.setState(
       {
         gif:data.data.image_url
       }
   
   )

}



apiCall(url,consecuencia){
      fetch(url)
           .then(response => response.json())
           .then (data =>consecuencia(data))//luego es funcion mostrar gif
           .catch(error=>console.log(error));

}

traerGifNuevo(){
    this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=6Psou4tinJrAC5M3GaOIGctzuAGsYoX4&tag=&rating=g',this.mostrarGif)

}


componentDidMount(){
this.traerGifNuevo();


}


render (){
     
     let contenido;
     
     if (this.state.gif==""){
        contenido= <p>cargando...</p>;
     
     
     }else{
        contenido = <img src={this.state.gif}></img>
     
     }
     
  return(
     <div>
        {contenido}
        <button onClick= {()=>this.traerGifNuevo()} > Randon Gif!</button>
     </div>    
  
 );
}



} export default ApiGif;