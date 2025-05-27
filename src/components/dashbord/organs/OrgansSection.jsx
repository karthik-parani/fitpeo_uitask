import ProgressBar from "../../progressBar/ProgressBar";
import lungs from "../../../assets/lungs.png";
import bone from "../../../assets/bone.png";
import tooth from "../../../assets/tooth.png";
import "./OrgansSection.css";

function OrgansSection(props) {
  const currentProgress = 20;
  const { name, date } = props;

  const organImages = {
    lung: lungs,
    bone: bone,
    tooth: tooth,
  };

  const organImage = organImages[name];

  return (
    <div>
      <div
        className="lungs-section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={organImage}
            alt={name}
            style={{ width: "90px", height: "70px", margin: 0 }}
          />
          <p style={{ margin: 8 }}>{name}</p>
        </div>
      </div>
      <p style={{ textAlign: "start", margin: "6px" }}>{date}</p>
      <ProgressBar
        style={{ padding: "10px 0" }}
        progress={currentProgress + 40}
        completedColor="#00BCD4"
        incompleteColor="#BBDEFB"
        thickness={6}
      />
    </div>
  );
}

export default OrgansSection;
