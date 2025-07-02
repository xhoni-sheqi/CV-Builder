import { useState } from "react";
import OutputCV from "./components/OutputCV";
import TabList from "./components/TabList";
import Tab from "./components/Tab";
import Button from "./components/Button";

function App() {
  const [fullName, setFullName] = useState("Jhon Doe");
  const [email, setEmail] = useState("JhonDoe@gmail.com");
  const [number, setNumber] = useState("36212838482");
  const [address, setAddress] = useState("Via Your Address");
  const handleSetFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSetAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleClear = () => {
    setAddress("");
    setFullName("");
    setNumber("");
    setEmail("");
  };

  const outputRenders = {
    fullName: fullName,
    email: email,
    number: number,
    address: address,
  };

  return (
    <div className="flex-container">
      <div className="left">
        <Tab>
          <div className="tab-btns">
            <Button red={true} onClick={handleClear}>
              Clear All 🚮
            </Button>
            <Button>Load Example 〄</Button>
          </div>
        </Tab>
        <TabList
          fullName={fullName}
          onSetFullName={handleSetFullName}
          email={email}
          onSetEmail={handleSetEmail}
          number={number}
          onSetNumber={handleSetNumber}
          address={address}
          onSetAddress={handleSetAddress}
        />
      </div>
      <div className="right">
        <OutputCV outputRenders={outputRenders} />
      </div>
    </div>
  );
}

export default App;
