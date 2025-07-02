// const listTabsHeaders = ["🧑‍✈️Personal Details", "🎓Education", "👷Experience"];
import Tab from "./Tab.jsx";
function TabList() {
  return (
    <div>
      <Tab>
        <h2>🧑‍✈️Personal Details</h2>
        <label>Full Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Phone Number</label>
        <input type="text" />
        <label>Address</label>
        <input type="email" />
      </Tab>
    </div>
  );
}

export default TabList;
