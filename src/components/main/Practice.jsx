//-------------------------------useEffect--------------------------------------------
// import { useEffect, useState } from "react";
// export const PracticeData = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [Loading, setLoading] = useState(true);

//   useEffect(() => {
//     const FetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todo"
//         );
//         if (!response.ok) {
//           throw new Error("Enable to fetch");
//         }
//         const res = await response.json();
//         setData(res);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     FetchData();
//   }, []);
//   if (Loading) return <p>Loading...</p>;
//   if (error) return <p>Error...{error}</p>;
//   return (
//     <>
//       {data.map((ele) => {
//         return (
//           <p>
//             <h1>{ele.id}</h1>
//             <p>{ele.title}</p>
//           </p>
//         );
//       })}
//     </>
//   );
// };

//
//-------------------------------map and fetch data-----------------------------------
// import React, { useState } from "react";
// export default function Practice() {
//   const [data, setData] = useState(null);
//   const Data = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const responce = await res.json();
//       setData(responce);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   Data();
//   if (!data) return <p>Loading...</p>;
//   return (
//     <>
//       {data.map((ele) => {
//         return (
//           <>
//             <p>{ele.title}</p>
//           </>
//         );
//       })}
//     </>
//   );
// }

//
//-------------------------------useRef-----------------------------------------------
// import React, { useEffect, useRef } from "react";
// export default function Practice() {

//     const inputRef=useRef(null);

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[])

//   return (
//     <>
//     <h1>Practice</h1>
//     <input type="text"  ref={inputRef}/>
//     </>

//   );
// }

//
//---------------------------------Timer--------------------------------

// import React, { useState, useEffect } from "react";

// export default function Practice() {
//   const [start, setStart] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   function handleStart() {
//     if (!intervalId) {
//       const id = setInterval(() => {
//         setStart((prev) => prev + 1);
//       }, 1000);
//       setIntervalId(id);
//     }
//   }

//   function handleStop() {
//     if (intervalId) {
//       clearInterval(intervalId);
//       setIntervalId(null);
//     }
//   }

//   function handleReset() {
//     if (intervalId) {
//       clearInterval(intervalId);
//       setIntervalId(null);
//     }
//     setStart(0);
//   }

//   useEffect(() => {
//     return () => clearInterval(intervalId);
//   }, [intervalId]);

//   return (
//     <>
//       <div>
//         <h1>Timer</h1>
//         <h1>{start}</h1>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handleStop}>Stop</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </>
//   );
// }

//----------------------Drag and Drop File uploader----------------------

// export default function Practice() {
//   return (
//     <div>
//       <div className="flex items-center justify-center w-full">
//         <label
//           htmlFor="dropzone-file"
//           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//         >
//           <div className="flex flex-col items-center justify-center pt-5 pb-6">
//             <svg
//               className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 16"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//               />
//             </svg>
//             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//               <span className="font-semibold">Click to upload</span> or drag and
//               drop
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               SVG, PNG, JPG or GIF (MAX. 800x400px)
//             </p>
//           </div>
//           <input id="dropzone-file" type="file" className="hidden" />
//         </label>
//       </div>
//     </div>
//   );
// }




