import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddMovie(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [rating, setRating] = useState();

  
  const navigate = useNavigate();
  const Submit=(e)=>{
    e.preventDefault();
    const data = {
      Title: title,
      Synopsis: description,
      Duration: duration,
      Image: image,
      ReleaseDate: date,
      Rating: rating,
      
    };
    const url = "http://localhost:3500/movies/";
    axios.post(url,data).then(navigate("/admin"))
   
    

  }
const handelCancel =()=>{

   navigate('/admin')
}
  return (
    <form>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
       
        <div
          className="body"
          style={{
            height: "60%",
            display: "flex",
            flexDirection: "row",
            marginLeft: "3%",
          }}
        >
         
          <div className="main" style={{ margin: "1rem", with: "60%" }}>
            <form action="post">
              <h3 style={{ margin: "2%" }}> Add movie</h3>
              <label>title</label>
              <input
                type="text"
                name={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <br /> <br />
              <label>description</label>
              <textarea
                cols={props}
                rows={props}
                placeholder=" entrer la description du film "
                name={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br /> <br />
              <label> duration</label>
              <input
                type="text"
                name={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <br /> <br />
              <label> image</label>
              <input
                type="text"
                placeholder="archive select"
                name={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <br /> <br />
              <label> relaese date</label>
              <input
                type="date"
                name={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <br /> <br />
              <label> rating </label>
              <input
                type="text"
                name={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <br /> <br />
              <button onClick={Submit} className=" btn btn-primary mt-1">
                
                save
              </button>

             
                <button onClick={handelCancel}> cancel</button>
              
            </form>
          </div>
        </div>
        <div
          className="foot"
          style={{
            backgroundColor: "blue",
            height: "30%",
            marginTop: "10%",
            width: "100%",
          }}
        ></div>
      </div>
    </form>
  );
}
