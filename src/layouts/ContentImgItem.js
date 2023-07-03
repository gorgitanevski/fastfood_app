import React from "react";
import { Typography } from "@mui/material";

const ContentImgItem = ({ icon, subOne, subTwo, color, fw }) => {
  return (
    <div className="w-[50%]">
      <div className="flex gap-3">
        {icon}
        <Typography variant="subtitle1">{subOne}</Typography>
      </div>
      <Typography sx={{ color: color, fontWeight: fw }} variant="subtitle2">
        {subTwo}
      </Typography>
    </div>
  );
};

export default ContentImgItem;
