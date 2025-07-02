import Tab from "./Tab.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
function TabList(props) {
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const handleOpenTabEducation = () => {
    setOpenEducation((prevState) => !prevState);
  };
  const handleOpenTabExperience = () => {
    setOpenExperience((prevState) => !prevState);
  };
  return (
    <div>
      {/* Personal Details */}
      <Tab>
        <h2>🧑‍✈️Personal Details</h2>
        <label>Full Name</label>
        <input
          type="text"
          value={props.fullName}
          onChange={props.onSetFullName}
        />
        <label>Email</label>
        <input type="email" value={props.email} onChange={props.onSetEmail} />
        <label>Phone Number</label>
        <input type="text" value={props.number} onChange={props.onSetNumber} />
        <label>Address</label>
        <input
          type="email"
          value={props.address}
          onChange={props.onSetAddress}
        />
      </Tab>

      {/* Education Details */}
      <Tab>
        <h2>🎓Education</h2>
        <Button onClick={handleOpenTabEducation}>+ Educational</Button>
        {openEducation ? (
          <>
            <label>School</label>
            <input type="text" />
            <label>Degree</label>
            <input type="text" />
            <div className="date">
              <label>Start Date</label>
              <input type="text" />
              <label>End Date</label>
              <input type="text" />
            </div>
            <label>Location</label>
            <input type="text" />
            <div>
              <Button>Delete</Button>
              <Button>Cancel</Button>
              <Button>Add</Button>
            </div>
          </>
        ) : (
          ""
        )}
      </Tab>

      {/* Experience Details */}
      <Tab>
        <h2>👷Experience</h2>
        <Button onClick={handleOpenTabExperience}>+ Experience</Button>
        {openExperience && (
          <>
            <label>Company Name</label>
            <input type="text" />
            <label>Position Title</label>
            <input type="text" />
            <div className="date">
              <label>Start Date</label>
              <input type="text" />
              <label>End Date</label>
              <input type="text" />
            </div>
            <label>Location</label>
            <input type="text" />
            <label>Description</label>
            <input type="text" />
            <div>
              <Button>Delete</Button>
              <Button>Cancel</Button>
              <Button>Add</Button>
            </div>
          </>
        )}
      </Tab>
    </div>
  );
}

export default TabList;
