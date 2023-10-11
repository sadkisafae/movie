import React, { useState } from "react";
import Header from "../../src/components/acceuil/header/Header";
import Side from "../../src/components/acceuil/side/Side";
import Movies from "../../src/components/acceuil/movies/Movies";

import CustomPagination from "../components/Pagination";
import "./Pages.css";
export default function Pages() {
  const [keywordS, setKeywordS] = useState("");
  const [datee1,setDatee1] = useState('');  
  const [datee2,setDatee2] = useState('');

  return (
    <div className="pages">
      <Header />
      <div className="content">
        <Side setKeywordS={setKeywordS} setDatee1={setDatee1} setDatee2={setDatee2}/>
        <Movies keywordS={keywordS} datee1={datee1}  datee2={datee2}/>
      </div>
      <CustomPagination />
    </div>
  );
}
