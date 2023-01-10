import React from "react";
const style = {
  marginLeft: "600px",
  marginTop:"70px",
};
const style1 = {
  marginLeft: "50px",
};
const Piggies=({piggies,setIndex})=>{
return(
    <div>
        
      <button style={style} onClick={piggies}>Piggies</button>
      <input style={style1}
        onChange={(e) => setIndex(e.target.value)}
        placeholder="Index number"
      />
    </div>
);
};
export default Piggies;