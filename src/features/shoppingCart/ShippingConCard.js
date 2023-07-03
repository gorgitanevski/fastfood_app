import { Card, CardContent, Typography } from "@mui/material";

const ShippingConCard = ({ icon }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "280px",
        height: "320px",
        padding: "1rem",
        "&:hover": {
          backgroundColor: "#ED4E53",
          transition: "all 0.4s",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography variant="h4">Lorem Ipsum</Typography>
        <Typography variant="subtitle2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShippingConCard;
