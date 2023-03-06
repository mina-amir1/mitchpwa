import React from "react";
import { useState, useEffect } from "react";
import { fetchData } from "../../lib/axiosData";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  amountAdded,
  resetValue,
} from "../../features/counter/counter-slice";
import {NavBar} from "../../layouts";

export default function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(amountAdded({ mitch: 3 }));
  };
  const reset = () => {
    dispatch(resetValue());
  };
  const [data, setData] = useState();
  useEffect(() => {
    fetchData("wp-json/").then((resp) => setData(resp));
  }, []);
  return (
    <>
      {!data && (
        <div>
          <h4>Loading ...</h4>
        </div>
      )}
      {data && (
        <div>
          {console.log(data.data.routes)}
          <h1>Done</h1>
          <h3>Counter: {counter}</h3>
          <button onClick={() => handleInc()}>++</button>
          <button onClick={() => reset()}>Reset</button>
          {/* <NavBar /> */}
        </div>
      )}
    </>
  );
}
