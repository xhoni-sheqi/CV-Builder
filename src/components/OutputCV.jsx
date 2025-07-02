function OutputCV({ outputRenders }) {
  return (
    <div className="output">
      <div className="output-header">
        <h1>{outputRenders.fullName}</h1>
        <div>
          <span> {outputRenders.email}</span>
          <span> {outputRenders.number}</span>
          <span> {outputRenders.address}</span>
        </div>
      </div>
      <div className="output-body"></div>
    </div>
  );
}

export default OutputCV;
