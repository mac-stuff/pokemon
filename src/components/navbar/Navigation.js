import styled from "@emotion/styled";
import { CatchingPokemon } from "@mui/icons-material";
import { Stack } from "@mui/system";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Fragment } from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navigation = ({ isLogged, setIsLogged }) => {
  const loginButtons = ["Favorite", "Arena", "Edit", "LogOut"];
  const logoutButtons = ["Favorite", "Arena", "LogIn", "Register"];

  const handleLoguotButton = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  };

  return (
    <AppBar position="static">
      <CustomToolbar>
        <Typography
          component={Link}
          to={`/`}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Pokedex
        </Typography>
        <CatchingPokemon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></CatchingPokemon>
        <Stack direction="row" sx={{ display: { xs: "none", sm: "block" } }}>
          {isLogged
            ? loginButtons.map((title) =>
                title === "LogOut" ? (
                  <Button
                    component={Link}
                    to={"/"}
                    variant="contained"
                    color="primary"
                    key={title}
                    onClick={handleLoguotButton}
                  >
                    {title}
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to={`/${title}`}
                    variant="contained"
                    color="primary"
                    key={title}
                  >
                    {title}
                  </Button>
                )
              )
            : logoutButtons.map((title) => (
                <Button
                  component={Link}
                  to={`/${title}`}
                  variant="contained"
                  color="primary"
                  key={title}
                >
                  {title}
                </Button>
              ))}
        </Stack>
        <PopupState variant="popover">
          {(popupState) => (
            <Fragment>
              <Button
                sx={{ display: { xs: "block", sm: "none" } }}
                variant="contained"
                {...bindTrigger(popupState)}
              >
                MENU
              </Button>
              <Menu {...bindMenu(popupState)}>
                {isLogged
                  ? loginButtons.map((title) =>
                      title === "LogOut" ? (
                        <Button
                          component={Link}
                          to={"/"}
                          variant="contained"
                          color="primary"
                          key={title}
                          onClick={handleLoguotButton}
                        >
                          {title}
                        </Button>
                      ) : (
                        <MenuItem key={title} onClick={popupState.close}>
                          <Button
                            component={Link}
                            to={`/${title}`}
                            variant="contained"
                            color="primary"
                          >
                            {title}
                          </Button>
                        </MenuItem>
                      )
                    )
                  : logoutButtons.map((title) => (
                      <MenuItem key={title} onClick={popupState.close}>
                        <Button
                          component={Link}
                          to={`/${title}`}
                          variant="contained"
                          color="primary"
                        >
                          {title}
                        </Button>
                      </MenuItem>
                    ))}
              </Menu>
            </Fragment>
          )}
        </PopupState>
      </CustomToolbar>
    </AppBar>
  );
};

export default Navigation;
