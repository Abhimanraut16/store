// // import React from 'react'

// // function SearchPage() {
// //   return (
// //     <div>SearchPage</div>
// //   )
// // }

// // export default SearchPage



// import { Result } from "postcss";

// export default async function SearchPage({ params }) {
//   const searchTerm = params.searchTerm;
  

//   const res = await fetch(`https://jsonserver.reactbd.com/?api_key=${process.env.API_KEY}&query=${searchTerm}&language=${language}`);

//   // const res = await fetch(`https://jsonserver.reactbd.com/?api_key=${process.env.API_KEY}&query=${searchTerm}$language `)

//   //   const id = 123; 
//   // const res = await fetch(`https://jsonserver.reactbd.com/?api_key=${process.env.API_KEY}&query=${searchTerm}&language=${language}&id=${_id}`);


//   const data = await res.json()
//   const results = data.results;
//   return (
//     <>
//       {results && results.lenght === <h1 className="text-center pt-6"> NO result</h1>}
//       {results && <Result results={results} />}
//     </>
//   )
// }