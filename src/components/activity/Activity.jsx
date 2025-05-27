import "./Activity.css";

import "./Activity.css";

const Activity = () => {
  const dayStyles = [
    {
      name: "Mon",
      line1: 95,
      line2: 60,
      line3: 17,
      line4: 25,
      line5: 30,
    },
    {
      name: "Tues",
      line1: 60,
      line2: 90,
      line3: 10,
      line4: 20,
      line5: 25,
    },
    {
      name: "Wed",
      line1: 50,
      line2: 30,
      line3: 25,
      line4: 80,
      line5: 40,
    },
    {
      name: "Thurs",
      line1: 80,
      line2: 65,
      line3: 19,
      line4: 26,
      line5: 35,
    },
    {
      name: "Fri",
      line1: 60,
      line2: 90,
      line3: 30,
      line4: 25,
      line5: 42,
    },
    {
      name: "Sat",
      line1: 70,
      line2: 80,
      line3: 20,
      line4: 25,
      line5: 40,
    },
    {
      name: "Sun",
      line1: 40,
      line4: 75,
      line3: 14,
      line2: 19,
      line5: 95,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f5f8ff",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "15px",
        }}
      >
        {" "}
        <h2
          style={{
            margin: "15px",
            color: "#282d48",
            fontWeight: "bold",
            font: "caption",
            fontSize: "26px",
          }}
        >
          Activity
        </h2>
        <p style={{ fontSize: "12px", font: "caption" }}>
          3 appointments on this week
        </p>
      </div>

      <div className="activity-container">
        {dayStyles.map((day, index) => (
          <div className="day-1-container" key={index}>
            <div className="monday-container">
              <hr
                className="monday-line1"
                style={{ height: `${day.line1}px` }}
              />
              <hr
                className="monday-line2"
                style={{ height: `${day.line2}px` }}
              />
              <div className="offline-container">
                <hr
                  className="monday-line3"
                  style={{ height: `${day.line3}px` }}
                />
                <hr
                  className="monday-line4"
                  style={{ height: `${day.line4}px` }}
                />
              </div>
              <hr
                className="monday-line5"
                style={{ height: `${day.line5}px` }}
              />
            </div>
            <p>{day.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
