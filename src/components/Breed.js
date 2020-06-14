import React from "react";

function Breed({ name, values }) {
  return (
    <>
      <h3>
        <b>Breed: {name}</b>
      </h3>
      <h4>SubBreed(s) </h4>
      <ul>
        {values &&
          values.map((value, index) => {
            return (
              <li key={index}>
                <h6>
                  {" "}
                  <em>{value}</em>{" "}
                </h6>
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default Breed;