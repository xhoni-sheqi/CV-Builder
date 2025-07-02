import { useState } from "react";
import OutputCV from "./components/OutputCV";
import TabList from "./components/TabList";

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

  const outputRenders = {
    fullName: fullName,
    email: email,
    number: number,
    address: address,
  };

  return (
    <div className="flex-container">
      <div className="left">
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
