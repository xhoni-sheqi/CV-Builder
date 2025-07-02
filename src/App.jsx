import { useState } from "react";
import OutputCV from "./components/OutputCV";
import TabList from "./components/TabList";
import Tab from "./components/Tab";
import Button from "./components/Button";

function App() {
  // personal information states
  const [fullName, setFullName] = useState("Jhon Doe");
  const [email, setEmail] = useState("JhonDoe@gmail.com");
  const [number, setNumber] = useState("36212838482");
  const [address, setAddress] = useState("Via Your Address");

  // educational information states

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const [listEducation, setListEducation] = useState([
    {
      id: Date.now(),
      school: "My School",
      degree: "IT Diploma",
      startDate: "1.1.2000",
      endDate: "1.1.2004",
      location: "us",
    },
  ]);

  const handleSetListEducation = () => {
    if (!school || !degree) return;
    const newEducation = {
      id: Date.now(),
      school,
      degree,
      startDate,
      endDate,
      location,
    };

    setListEducation([...listEducation, newEducation]);
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
  };

  const handleDeleteListEducational = (id) => {
    setListEducation(listEducation.filter((edu) => edu.id !== id));
  };

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

  const handleSetSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleSetDegree = (e) => {
    setDegree(e.target.value);
  };
  const handleSetStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleSetEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const handleSetLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleClear = () => {
    setAddress("");
    setFullName("");
    setNumber("");
    setEmail("");
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setListEducation([]);
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
          school={school}
          degree={degree}
          startDate={startDate}
          endDate={endDate}
          location={location}
          onSetSchool={handleSetSchool}
          onSetDegree={handleSetDegree}
          onSetStartDate={handleSetStartDate}
          onSetEndDate={handleSetEndDate}
          onSetLocation={handleSetLocation}
          onAddEducation={handleSetListEducation}
          onDeleteEducation={handleDeleteListEducational}
          listEducation={listEducation}
        />
      </div>
      <div className="right">
        <OutputCV outputRenders={outputRenders} listEducation={listEducation} />
      </div>
    </div>
  );
}

export default App;
