import React, { useState } from "react";

import Header from '../headfoot/Header';
import Footer from '../headfoot/Footer';


const NasasPhoto = (props) => {

  const [data] = useState(props)
  console.log(data);
  //date, explanation, hdurl, title, url } = props.data;



  return (

    <div className="container">
      <Header />
      <h2>{props.data.title}</h2>

      {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        More Info
  </button>
      <div className="center"> <a href={props.data.hdurl}>
        <img src={props.data.url} alt={props.data.title} />
      </a></div>
      {/* <!-- The Modal --> */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <div id="title"><h4 className="modal-title">{props.data.title}</h4></div>
              <div id="btn"><button type="button" className="close" data-dismiss="modal">&times;</button></div>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              {props.data.explanation}
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
    // <div className="body">
    //   <Header />
    //   <h3>{props.data.title}</h3>
    //   <span>{props.data.date}</span>
    //   <div> <a href={props.data.hdurl}>
    //     <img src={props.data.url} alt={props.data.title} />
    //   </a></div>

    //   <h3>Photo By: {props.data.copyright}</h3>

    //   <div className="info"><p>{props.data.explanation}</p></div>
    //   <Footer />
    // </div>
  )
}

export default NasasPhoto;