import React from "react";
import NasasPhoto from '../body/NasasPhoto';
import axios from 'axios';




class NasasContainer extends React.Component {
  constructor() {
    super();
  
    this.state = {
      astronomy: []
   }
  
  }  
  
  componentDidMount() {
    const API_KEY = "c4lsvUFmisghG73IVzqvVFocipsn2YTRmUKPoLao";
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";

    axios.get(END_POINT + API_KEY)
      .then(response => {
        this.setState({
          astronomy: response.data
        })
        console.log(this.state.astronomy)
      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      });
}

  render() {

    return (
      <NasasPhoto />
    )
  }
}
  
  
  export default NasasContainer;