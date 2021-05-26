import React, { useState, useEffect } from "react";
import { fetchGenreList } from "../../utils/API";
import Button from 'react-bootstrap/Button';
// import { Badge } from "../../models";
// const router = require('express').Router();
// import axios from 'axios';


function Badges() {
  const [badgeList, setbadgeList] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setbadgeList(await fetchGenreList());
    };

    fetchAPI();
}, []); 
// while count is greater than or equal to 10 display badge 
console.log(badgeList)
    const addMovie = (event) => {
      event.preventDefault();
    };

return (
<Button variant="warning" onClick={addMovie}>
         Test Btn
        </Button>
);
}
export default Badges;
//   when user clicks ADD to 'Watched' list,
//   add the movie's genre_id to the User's 'Watched' (in DB))
//   Loop through User's 'Watched, if #id appears 10 times,
//   display badge-image on profile page
// console.log(Badge)


//   let ticketBadge = "/badges/023-ticket.png";
// // when add btn clicked, filter thru list to prepend that id to user's arr
//   const badgeDisplay = badgeList.map((item, index) => {
//     console.log(item.id + " " + item.name);
//     return (
//       <li className="list-inline-item" key={index}>
//         <Image src={ticketBadge} alt={item.name}  ></Image>
//       </li>
//     );
//   });
  // return <div>{badgeDisplay}</div>;




