import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Details() {
  const [detail, setDetail] = useState(null);
  
  const { id } = useParams();

    useEffect(()=>{
    axios.get(` http://localhost:3500/movies/${id}`).then(({data})=>{
      setDetail(data)
    });   
  },[]);
  

  return (
    <>
      <div> 
        {detail && (
            <div>
          <div className="d-flex">
        <div style={{width:"20%", marginLeft: "100px",paddingTop: "9%"}}>
        
        <img src={`/images/${detail.Image}`} style={{ width:'90%'}}/>
             
            </div>
            <div style={{marginTop:" 5%", border:" 1px solid", background:" #e9ecef",padding: "20px",marginLeft: "10%",width:'40%'}}>
              <h1>{detail.Title}</h1>
              <p>{detail.ReleaseDate}</p>
              <p>{detail.Rating} </p>
              <p>{detail.Synopsis} </p>
            </div>
          </div>
</div>
        )}
       
      </div>
      
    </>
  );
}
