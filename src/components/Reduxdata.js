import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allpost, fetchapi } from "../store/apicall";

export const Reduxdata = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector(allpost);
  // console.log("a", status, data);
  useEffect(() => {
    dispatch(fetchapi());
  }, []);
  return (
    <>
      <div>a</div>
      {/* {posts.apislice.status == "loding" && <p> page is loding</p>}
      <div>{posts.apislice.status}</div>; */}
    </>
  );
};
