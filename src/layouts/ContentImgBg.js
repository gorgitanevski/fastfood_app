import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentImgItem from "../layouts/ContentImgItem";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const ContentImgBg = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
      }}
    >
      <div className="text-white flex flex-col h-full justify-center items-center gap-[3rem]">
        <ContentImgItem
          icon={<LocationOnIcon fontSize="medium" />}
          subOne="Adress"
          subTwo="3002 Buena Vista Avenue"
          fw="light"
        />

        <ContentImgItem
          icon={<LocalPhoneIcon fontSize="medium" />}
          subOne="Call us"
          subTwo="+1 900 123456789"
          color="#1976d2"
          fw="bold"
        />

        <ContentImgItem
          icon={<EmailIcon fontSize="medium" />}
          subOne="General Suport"
          subTwo="email@email.com"
          color="#1976d2"
          fw="bold"
        />
      </div>
    </div>
  );
};

export default ContentImgBg;
