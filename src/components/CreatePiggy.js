import React from "react";
const style = {
  marginLeft: "600px",
  marginTop:"70px",
};
const style1 = {
  marginLeft: "10px",
};
const CreatePiggy = ({ createPiggy, setPiggyName,piggy }) => {
  return (
    <div>
      <button style={style} onClick={createPiggy}>
        Create Piggy
      </button>
      <input
        style={style1}
        onChange={(e) => setPiggyName(e.target.value)}
        placeholder="piggy name"
      />
    </div>
  );
};
export default CreatePiggy;
