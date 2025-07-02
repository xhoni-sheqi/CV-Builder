function OutputCV({ outputRenders, listEducation }) {
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
      <div className="output-body">
        {listEducation.length > 0 ? (
          <div className="education">
            <h1>🎓 Education</h1>
            {listEducation.map((edu) => (
              <div className="education-tab" key={edu.id}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <div>
                  <span>{edu.startDate}</span> - <span>{edu.endDate}</span>
                </div>
                <p>{edu.location}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OutputCV;
