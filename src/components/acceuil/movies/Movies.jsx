import React, { useEffect, useState } from "react";
import Pagination from "../../Pagination";
import MovieCard from "../moviecard/MovieCard";
import "./MoviesC.css";
import axios from "axios";

 const Movies=({ keywordS, datee1, datee2 })=>{
  console.log(Movies)
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);
  const url = "http://localhost:3500/movies/";


  
  useEffect(() => {
    axios.get(url).then(function (response) {
      setMovies(response.data);
      if (keywordS.length !== 0) {
        const dataByKeyword = response.data.filter((movie) => {
          return movie.Title.toLowerCase().includes(keywordS.toLowerCase());
        });
        setData(dataByKeyword);
      } else {
        setData(response.data);
      }
    });
  }, [keywordS]);

  useEffect(() => {
    if (datee1.length !== 0 && datee2.length !== 0) {
      const dataByDate = movies.filter((movie) => {
        const year = new Date(movie.ReleaseDate).getFullYear();
        return (
          parseInt(year) >= parseInt(datee1) &&
          parseInt(year) <= parseInt(datee2)
        );
      });
      setData(dataByDate);
    }
  }, [datee1, datee2, movies]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState('title');

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  // const sortedMovies = sortMovies(data);

  
  // const sortMovies = (movies)=> {
  //   switch(sortBy) {
  //     case 'year':
  //       return movies.sort((a, b) => b.ReleaseDate.localeCompare(a.ReleaseDate));
  //     case 'rating':
  //       return movies.sort((a, b) => b.Rating - a.Rating);
  //     default:
  //       return movies.sort((a, b) => a.Title.localeCompare(b.Title));
  //   }
  // };



  return (
    <div className="m">
      <div className="topBar">
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
         <div className='d-flex justify-content-end align-items-center my-3'>
        <p className='m-2'>trier par :</p>
        <select className='d-inline ml-5' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">by title</option>
          <option value="year">by year</option>
          <option value="rating">by rating</option>
        </select>
      </div>
      </div>
      <div className="cards">
        {currentPosts.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default Movies