import React from "react";
const style = {
  paddingLeft: "5px",
  display: "inline-block",
};
const style1 = {
  paddingLeft: "800px",
  display: "inline-block",
};

const Navbar1 = ({ web3Handler, account }) => {
  return (
    <>
      <h1 style={style}>PIGGY BANK</h1>
      <div style={style1}>
        {account ? (
          <button>
            {account.slice(0, 5) + "...." + account.slice(38, 42)}
          </button>
        ) : (
          <button onClick={web3Handler}>connect wallet</button>
        )}
      </div>
    </>
  );
};
export default Navbar1;
