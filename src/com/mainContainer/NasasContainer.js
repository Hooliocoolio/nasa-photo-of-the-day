import React, { useEffect, useState } from "react";
import NasasPhoto from '../body/NasasPhoto';
import axios from 'axios';

const API_KEY = "c4lsvUFmisghG73IVzqvVFocipsn2YTRmUKPoLao";
const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";


function NasasContainer() {
  const [astronomy, setAstronomy] = useState({})

  useEffect(() => {
    async function fetchData() {
      axios.get(END_POINT + API_KEY)
        .then(response => {
          console.log('AXiOS', response.data)
          setAstronomy(
            response.data
          )
        })
        .catch(error => {
          console.log(error, 'failed to fetch data')
        })
    }
    fetchData();
  }
  , []);
  
  return(<NasasPhoto data={astronomy} />)
}
  
  export default NasasContainer;
