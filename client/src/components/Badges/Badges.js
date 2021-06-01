import React, { useState, useEffect } from "react";
import { fetchGenreList } from "../../utils/API";
import Button from 'react-bootstrap/Button';

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




