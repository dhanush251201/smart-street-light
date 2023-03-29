// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default Page1 =() => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Set the API endpoint
//     const url = "https://api.thingspeak.com/channels/2083199/feeds.json?api_key=0IAORLIZBKLHXJ9W";

//     // Make a GET request to the endpoint
//     axios.get(url)
//       .then(response => {
//         // Get the JSON data from the response
//         const data = response.data;

//         // Set the data state
//         setData(data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }
