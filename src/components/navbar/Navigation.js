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
import { Link, useNavigate } from "react-router-dom";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navigation = ({ isLogged, setIsLogged, setLoggetUser }) => {
  const titles1 = ["Ulubione", "Arena", "Edycja", "Wyloguj", "Rejestracja"];
  const titles2 = ["Ulubione", "Arena", "Logowanie", "Rejestracja"];

  const navigate = useNavigate();

  const handleLoguotButton = () => {
    setIsLogged(false);
    setLoggetUser({});
    navigate("/");
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
            ? titles1.map((title) =>
                title === "Wyloguj" ? (
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
            : titles2.map((title) => (
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
                  ? titles1.map((title) =>
                      title === "Wyloguj" ? (
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
                  : titles2.map((title) => (
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
