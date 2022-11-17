import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Results from "./Results"
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const[submit,setSubmit]=useState(false);

  const placeholder =
    state === "people" ? "search actor name" : "search show name";

  const fetchData = async (e) => {
    e.preventDefault();
    const url = `https://api.tvmaze.com/search/${state}?q=${input}`;
    const result = await axios.get(url);
    // console.log(result.data);
    setData(result.data);
    setSubmit(true)
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="bg-red-800 overflow-auto">
      <h1 className="text-white bg-black py-5 text-4xl pl-8 h-20">TVmaze</h1>
      <div className="flex justify-center py-6">
        <input
          className="ml-8 w-4"
          type="radio"
          name="radio"
          onClick={(e) => {setState("people") 
          setData([])
          setInput([])}}
        />
        <label className="ml-0.5 text-white text-xl">Actor</label>
        <input
          className="ml-8 w-4"
          type="radio"
          name="radio"
          onClick={(e) => { setState("shows")
        setData([])
    setInput([])}}
        />
        <label className="ml-0.5 text-white text-xl">Shows</label>
      </div>
      {state && (
        <form onSubmit={fetchData}>
          <div className="pb-5 flex justify-center">
            <Input
              value={input}
              placeholder={placeholder}
              onChange={changeHandler}
            />
            <button className="ml-2 rounded-md"><SearchIcon fontSize="large"/></button>
          </div>
        </form>
      )}
      {submit && (
        <div className="grid grid-cols-5 gap-4 px-5 py-10">
          {data?.map(post => (<Results details={post} state={state}/>
            // console.log(post);
            // const images=post.person.image?post.person.image.medium:"";
           

                // return(
                // <div key={post.person.id}>
                //     <div>{post.person.id}</div>
                //     <div>{post.person.name}</div>
                // <img src={images} alt={"no image"}/>
                // </div>
                // )

        ))}
        </div>
      )}
    </div>
  );
};

export default Header;
