import OutputCV from "./components/OutputCV";
import TabList from "./components/TabList";

function App() {
  return (
    <div className="flex-container">
      <div className="left">
        <TabList />
      </div>
      <div className="right">
        <OutputCV />
      </div>
    </div>
  );
}

export default App;
