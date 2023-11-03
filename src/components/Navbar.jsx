import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const addtoCart = useSelector((state) => state.itemdata.addinCart);

  return (
    <Box>
      <AppBar className="" position="static">
        <Toolbar className="flex justify-between bg-sky-500 static">
          <Link to={"/"}>
            <Typography variant="h4">Apna Store</Typography>
          </Link>

          <Box className="flex justify-between w-auto">
            <Link to={"/login"}>
              <Button variant="contained">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="contained">signup</Button>
            </Link>
            <Link to="/addtocart">
              <Button variant="contained">
                Add to Cart {addtoCart.length}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
