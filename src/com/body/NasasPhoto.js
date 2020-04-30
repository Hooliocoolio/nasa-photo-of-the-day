import React, { useState } from "react";

import Header from '../headfoot/Header';
import Footer from '../headfoot/Footer';


const NasasPhoto = (props) => {
  
  const [data, setData] = useState(props)
  console.log(data);
    //date, explanation, hdurl, title, url } = props.data;



  return (
    <div className="body">
      <Header />
      <h3>{props.data.title}</h3>
      <span>{props.data.date}</span>
      <div> <a href={props.data.hdurl}>
        <img src={props.data.url} alt={props.data.title} />
      </a></div>

      <h3>Photo By: {props.data.copyright}</h3>

      <div className="info"><p>{props.data.explanation}</p></div>
      <Footer />
    </div>
  )
}

export default NasasPhoto;