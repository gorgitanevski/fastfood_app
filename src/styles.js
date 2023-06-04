import { Link } from "@mui/material";

const style = {
  flexCenter: "d-flex justify-content-around align-items-center",
};

export const NavLinkItem = ({ href, children }) => (
  <Link href={href} underline="none" className="text-white">
    {children}
  </Link>
);

export default style;
