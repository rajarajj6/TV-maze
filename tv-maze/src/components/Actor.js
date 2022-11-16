import React, {  useState } from "react";

const Actor = async() => {
    // e.preventDefault();
  const [data, setData] = useState([]);
     const response=await fetch("https://api.tvmaze.com/search/people?q=akon")
     const result=await response.json() 
     console.log(result)
      .then((res) => {
        setData(res);
      })
      .catch((err)=>{
        console.log(err);
      });
  return (
    <div>
      {data.map((x) => (
        <div key={x.person.id}>
          <div>{x.person.id}</div>
        </div>
      ))}
    </div>
  );
};

export default Actor;
