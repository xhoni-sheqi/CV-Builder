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

  const handleEditListEducational = (id) => {
    const eduToEdit = listEducation.find((edu) => edu.id === id);
    if (eduToEdit) {
      setSchool(eduToEdit.school);
      setDegree(eduToEdit.degree);
      setStartDate(eduToEdit.startDate);
      setEndDate(eduToEdit.endDate);
      setLocation(eduToEdit.location);

      setListEducation(listEducation.filter((edu) => edu.id !== id));
    }
  };

  // experience information state

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDateE, setStartDateE] = useState("");
  const [endDateE, setEndDateE] = useState("");
  const [locationE, setLocationE] = useState("");
  const [description, setDescription] = useState("");

  const [listExperience, setListExperience] = useState([
    {
      id: Date.now(),
      company: "My Work",
      position: "IT Specialyst",
      startDateE: "1.1.2000",
      endDateE: "1.1.2004",
      locationE: "e",
      description: "us",
    },
  ]);

  const handleSetListExperience = () => {
    if (!company || !position) return;
    const newExperience = {
      id: Date.now(),
      company,
      position,
      startDateE,
      endDateE,
      location,
      description,
    };

    setListExperience([...listExperience, newExperience]);
    setCompany("");
    setPosition("");
    setStartDateE("");
    setEndDateE("");
    setLocationE("");
    setDescription("");
  };

  const handleDeleteListExperience = (id) => {
    setListExperience(listExperience.filter((exp) => exp.id !== id));
  };

  const handleEditListExperience = (id) => {
    const expToEdit = listExperience.find((exp) => exp.id === id);
    if (expToEdit) {
      setCompany(expToEdit.company);
      setPosition(expToEdit.position);
      setStartDateE(expToEdit.startDateE);
      setEndDateE(expToEdit.endDateE);
      setLocationE(expToEdit.locationE);
      setDescription(expToEdit.description);

      setListExperience(listExperience.filter((exp) => exp.id !== id));
    }
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

  const handleSetCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleSetPosition = (e) => {
    setPosition(e.target.value);
  };

  const handleSetStartDateE = (e) => {
    setStartDateE(e.target.value);
  };
  const handleSetEndDateE = (e) => {
    setEndDateE(e.target.value);
  };
  const handleSetLocationE = (e) => {
    setLocationE(e.target.value);
  };
  const handleSetDescription = (e) => {
    setDescription(e.target.value);
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
    setCompany("");
    setPosition("");
    setStartDateE("");
    setEndDateE("");
    setLocationE("");
    setDescription("");
    setListEducation([]);
    setListExperience([]);
  };

  const handleLoadExample = () => {
    setAddress("us");
    setFullName("Jhon Doe");
    setNumber("343234233493");
    setEmail("jhondoe@gmail.com");
    setListEducation([
      {
        id: Date.now(),
        school: "My School",
        degree: "IT Diploma",
        startDate: "1.1.2000",
        endDate: "1.1.2004",
        location: "us",
      },
    ]);
    setListExperience([
      {
        id: Date.now(),
        company: "My Work",
        position: "IT Specialyst",
        startDateE: "1.1.2000",
        endDateE: "1.1.2004",
        locationE: "e",
        description: "us",
      },
    ]);
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
            <Button onClick={handleLoadExample}>Load Example 〄</Button>
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
          onEditEducation={handleEditListEducational}
          company={company}
          position={position}
          startDateE={startDateE}
          endDateE={endDateE}
          locationE={locationE}
          description={description}
          onSetCompany={handleSetCompany}
          onSetPosition={handleSetPosition}
          onSetStartDateE={handleSetStartDateE}
          onSetEndDateE={handleSetEndDateE}
          onSetLocationE={handleSetLocationE}
          onSetDescription={handleSetDescription}
          listExperience={listExperience}
          onAddExperience={handleSetListExperience}
          onDeleteExperience={handleDeleteListExperience}
          onEditExperience={handleEditListExperience}
        />
      </div>
      <div className="right">
        <OutputCV
          outputRenders={outputRenders}
          listEducation={listEducation}
          listExperience={listExperience}
        />
      </div>
    </div>
  );
}

export default App;
