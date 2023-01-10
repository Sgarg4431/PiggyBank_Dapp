import "./App.css";
import { useState, useEffect } from "react";
import PiggyBank from "./artifacts/contracts/PiggyBank.sol/PiggyBank.json";
import Navbar1 from "./components/Navbar";
import CreatePiggy from "./components/CreatePiggy";
import AddMoney from "./components/AddMoney";
import BreakPiggy from "./components/BreakPiggy";
import Piggies from "./components/Piggies";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import piggy1 from "./piggy.png";

function App() {
  const ethers = require("ethers");
  const contractAdd = "0xBe2f83A7fDF006aaa6dab0D367dAdAA245963542";
  const [account, setAccount] = useState(null);
  const [name, setPiggyName] = useState();
  const [piggy, setPiggy] = useState({});
  const [addmoney, setAddMoney] = useState();
  const [value1, setValue] = useState();
  const [addr, setAdd] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    addWalletListener();
  }, []);
  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setAccount("");
      console.log("Please install MetaMask");
    }
  };
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    window.ethereum.on("accountChanged", async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
  };
  const loadContracts = async (signer) => {
    setPiggy(new ethers.Contract(contractAdd, PiggyBank.abi, signer));
  };
  async function createPiggy() {
    if (piggy) {
      try {
        await piggy.createPiggy(name);
      } catch (e) {
        if (e.message.search("Already owned") != -1) {
          alert("Already owned");
        }
      }
    } else {
      alert("Connect to wallet first!");
    }
  }
  async function addMoney() {
    if (piggy) {
      try {
        await piggy.addMoney(addmoney, { value: value1 });
      } catch (e) {
        if (e.message.search("Piggy not created") != -1) {
          alert("Piggy not created");
        }
      }
    } else {
      alert("Connect to wallet first!");
    }
  }
  async function breakPiggy() {
    if (piggy) {
      try {
        await piggy.breakPiggy(addr);
      } catch (e) {
        if (e.message.search("Piggy not created") != -1)
          alert("Piggy not created");
        else if (e.message.search("You are not owner of project") != -1)
          alert("You are not owner of piggy");
      }
    } else {
      alert("Connect to wallet first");
    }
  }
  async function piggies() {
    if (piggy) {
      try {
        const pigg = await piggy.piggies(index);
        alert("Owner is:" + pigg.owner + "  " + "Amount:" + pigg.amount);
      } catch (e) {
        alert("Invalid index");
      }
    } else {
      alert("Connect to wallet first");
    }
  }
  async function show(){
    if(piggy){
      await piggy.showPiggies();
    }
    else{
      alert("Connect wallet");
    }
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={piggy1}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <Navbar1 web3Handler={web3Handler} account={account} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div class="bg-img">
        <br></br>
        <br></br>
        <nav style={{ float: "right" }}>
          <CreatePiggy
            createPiggy={createPiggy}
            piggy={piggy}
            setPiggyName={setPiggyName}
            style={{ alignItems: "flex-end" }}
          />
          <AddMoney
            addMoney={addMoney}
            setAddMoney={setAddMoney}
            setValue={setValue}
          />
          <BreakPiggy breakPiggy={breakPiggy} setAdd={setAdd} />
          <Piggies piggies={piggies} setIndex={setIndex} />
          
        </nav>
      </div>
    </div>
  );
}

export default App;
