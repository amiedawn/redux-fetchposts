import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./action";

function Posts(props) {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    console.log("dispatch");
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      {value.map((el) => {
        return <h3 key={el.id}>{el.title}</h3>;
      })}
    </div>
  );
}

export default Posts;
