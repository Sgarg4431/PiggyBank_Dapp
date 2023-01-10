import React from "react";
const style = {
    paddingLeft:"25px",
    marginLeft: "600px",
    marginTop:"70px",
    paddingRight:"30px",
  };
  const style1 = {
    marginLeft: "20px",
    marginTop:"20px",
  };
const breakpiggy = ({breakPiggy,setAdd}) => {
  return (
    <>
      <button style={style} onClick={breakPiggy}>
        Break
      </button>
      <input
        style={style1}
        onChange={(e) => setAdd(e.target.value)}
        placeholder="piggy address"
      />
    </>
  );
};
export default breakpiggy;