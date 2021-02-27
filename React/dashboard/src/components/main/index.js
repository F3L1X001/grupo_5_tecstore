import {useState,useEffect} from 'react'
 import NavBar from '../navBar';
 import Metrica from '../metrica';
 import DataDB from '../dataDB';
 
const  BASE_API= 'https://api.giphy.com';
const API_PRODUCT = '/v1/gifs/random?api_key=6Psou4tinJrAC5M3GaOIGctzuAGsYoX4&tag=&rating=g'
function Main(){

return(
     <>
        <NavBar/>
        <Metrica 
        endPoint= {BASE_API + API_PRODUCT} />
        <Metrica/>

        <DataDB/>
        


    
    </>


      );

}export default Main;