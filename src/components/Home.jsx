import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputVal, changeInputVal] = useState("");

  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    changeInputVal(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-1/3 mx-auto shadow-lg p-8 " >
        <h1 className="text-2xl mb-5 text-center">Search By Name</h1>
        <form action="" className="form flex flex-col justify-center items-center">
          <input
            placeholder="Search Name"
            onChange={onChangeHandler}
            id="homeSearch"
            value={inputVal}
            autoComplete= "off"
            className="w-2/3  placeholder:text-center border-2 rounded-lg p-4 mb-5 border-gray-200"
          ></input>
          <button className="bg-green-500 rounded-md p-4 w-1/3">
            <Link
              to= "/result"
              state={{ personName: inputVal }}
            >
              Submit
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
