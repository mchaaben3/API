import React, { useEffect, useState } from "react";
import axios from 'axios'
const App = () => {
 const [data, setData] = useState([]); // where to store the returned data
 const [error, setError] = useState(null); // where to store the coming errors
 useEffect(() => {
   function fetchData() {
     // the function to fetch data from the api
     fetch("https://hn.algolia.com/api/v1/search?query=redux")
       .then(res => res.json()) // when the result comes back with success here is what to do
       .then(res => setData(res.hits))
       .catch(err => setError(err)); // if there is an error here what you have to do.
   }

   fetchData();
 }, []);
// const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
// const requestTwo = axios.get("https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
// const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

// axios
//  .all([requestOne, requestTwo, requestThree])
//  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
//      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
//    })
//  )
//  .catch(errors => {
//    console.error(errors);
//  });
 return (
   <div>
     <ul>
       {data.map(course => (
         <li>
           <a href={course.url}> {course.title}</a>
         </li>
       ))}
     </ul>
   </div>
 );
};
export default App;