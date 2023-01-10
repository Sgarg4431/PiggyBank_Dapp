import React from "react";
const style = {
    marginLeft: "600px",
    marginTop:"70px",
  };
  const style1 = {
    marginLeft: "20px",
    marginTop:"20px",
  };
const AddMoney=({addMoney,setAddMoney,setValue})=>{
    return(
    <div>
      <button style={style} onClick={addMoney}>
        Add Money
      </button>
      <input style={style1}
        onChange={(e) => setAddMoney(e.target.value)}
        placeholder="piggy address"
      />
      <input style={style1}
        onChange={(e) => setValue(e.target.value)}
        placeholder="value"
      />
    </div>
    )
}
export default AddMoney;