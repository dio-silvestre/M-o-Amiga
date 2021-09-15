import { StyledHamburger } from "./styles";

const Hamburger = ({ open, setOpen }) => (
  <StyledHamburger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger;
