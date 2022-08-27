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

const buttons = [
  "Ulubione",
  "Arena",
  "Logowanie",
  "Rejestracja",
  "Edycja",
  "Wyloguj",
];

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navigation = ({ setSelectedPage }) => {
  const clickHandle = (event) => {
    event.preventDefault();
    setSelectedPage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <AppBar position="static">
      <CustomToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Pokedex
        </Typography>
        <CatchingPokemon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></CatchingPokemon>
        <Stack direction="row" sx={{ display: { xs: "none", sm: "block" } }}>
          {buttons.map((button) => (
            <Button
              variant="contained"
              key={button}
              onClick={clickHandle}
              value={button}
            >
              {button}
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
                {buttons.map((button) => (
                  <MenuItem key={button} onClick={popupState.close}>
                    {button}
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
