import React from "react";
import { useUsersInfoContext } from "../../utils/UserContext";
import Button from 'react-bootstrap/Button';

const Buttons = () => {
  const [state, dispatch] = useUsersInfoContext();
console.log(state)
  const updateMovies = e => (
    dispatch(previousMovies => [...previousMovies, {  }])
  )

  return (
    <div>
      <Button variant="warning" onClick={updateMovies}> 
         Test Btn
        </Button>
      {/* <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item col-12" key={item.id}>
            <Button
              className="btn btn-warning mr-4"
              onClick={() => dispatch({ type: "prioritize", index })}
            >
              I've Watched This
            </Button>
            <Button
              className="btn btn-danger mr-4"
              onClick={() => dispatch({ type: "remove", index })}
            >
                Remove From Watched
            </Button>
            {/* {index}:<span className={item.priority ? "font-weight-bold" : ""}> {item.name}</span> */}
          {/* </li> */} 
      {/* //   ))} */}
      {/* // </ul> */}
    </div>
  );
}

export default Buttons;
