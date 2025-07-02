import Tab from "./Tab.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
function TabList(props) {
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [openTabOne, setOpenTabOne] = useState(false);
  const [openTabTwo, setOpenTabTwo] = useState(false);
  const handleOpenTabEducation = () => {
    setOpenEducation((prevState) => !prevState);
  };
  const handleOpenTabExperience = () => {
    setOpenExperience((prevState) => !prevState);
  };
  const handleOpenTabOne = () => {
    setOpenTabOne((prevState) => !prevState);
  };
  const handleOpenTabTwo = () => {
    setOpenTabTwo((prevState) => !prevState);
  };
  const handleAddEducational = () => {
    props.onAddEducation();
    setOpenEducation((prevState) => !prevState);
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
          type="text"
          value={props.address}
          onChange={props.onSetAddress}
        />
      </Tab>

      {/* Education Details */}
      <Tab>
        <div className="tab-header">
          <h2>🎓Education</h2>
          <p onClick={handleOpenTabOne}>+</p>
        </div>
        {openTabOne ? (
          <>
            <div className="educational-list">
              {props.listEducation.map((edu) => (
                <div key={edu.id} className="edu">
                  <span>{edu.school}</span>
                  {/* usiamo ()=> perchè senno la funzione si avvia non appena il componente renderizza */}
                  <Button onClick={() => props.onDeleteEducation(edu.id)}>
                    ❌
                  </Button>
                </div>
              ))}
            </div>
            <Button onClick={handleOpenTabEducation}>+ Educational</Button>
            {openEducation ? (
              <>
                <label>School</label>
                <input
                  type="text"
                  value={props.school}
                  onChange={props.onSetSchool}
                />
                <label>Degree</label>
                <input
                  type="text"
                  value={props.degree}
                  onChange={props.onSetDegree}
                />
                <label>Start Date</label>
                <input
                  value={props.startDate}
                  onChange={props.onSetStartDate}
                  type="date"
                />
                <label>End Date</label>
                <input
                  type="date"
                  value={props.endDate}
                  onChange={props.onSetEndDate}
                />
                <label>Location</label>
                <input
                  type="text"
                  value={props.location}
                  onChange={props.onSetLocation}
                />
                <div>
                  <Button red={true}>Delete</Button>
                  <Button onClick={handleOpenTabEducation}>Cancel</Button>
                  <Button onClick={handleAddEducational}>Add</Button>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </Tab>

      {/* Experience Details */}
      <Tab>
        <div className="tab-header">
          <h2>👷Experience</h2>
          <p onClick={handleOpenTabTwo}>+</p>
        </div>
        {openTabTwo ? (
          <>
            <Button onClick={handleOpenTabExperience}>+ Experience</Button>
            {openExperience && (
              <>
                <label>Company Name</label>
                <input type="text" />
                <label>Position Title</label>
                <input type="text" />
                <label>Start Date</label>
                <input type="date" />
                <label>End Date</label>
                <input type="date" />
                <label>Location</label>
                <input type="text" />
                <label>Description</label>
                <input type="text" />
                <div>
                  <Button red={true}>Delete</Button>
                  <Button onClick={handleOpenTabExperience}>Cancel</Button>
                  <Button>Add</Button>
                </div>
              </>
            )}
          </>
        ) : (
          ""
        )}
      </Tab>
    </div>
  );
}

export default TabList;
