import "./MidlePages.scss";
import React from "react";
import CustomizeIcon from "../Lib/Icons/Customize.svg";
import { Context as LangContext } from "../../Content/Localization";
import languages from "../../Localization/Languages";
import { Context as ThemeContext } from "../../Content/Theme";
import { FormControl, Select, MenuItem } from "@mui/material";

const MidleHeading = () => {
  const { lang, setLang } = React.useContext(LangContext);
  const { state, setState } = React.useContext(ThemeContext);
  return (
    <div className="heading">
      <h2 className="heading__title">
        {languages[lang].homePage.headingTitle}
      </h2>
      <div className="heading__selects">
        <FormControl
          // className="box__dark"
          variant="standard"
          sx={{ m: 1, minWidth: 70 }}
        >
          <Select
            className={"box__" + state}
            value={lang}
            onChange={evt => setLang(evt.target.value)}
          >
            <MenuItem value="en">En</MenuItem>
            <MenuItem value="ru">Ru</MenuItem>
            <MenuItem value="uz">Uz</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
          <Select
            className={"box__" + state}
            value={state}
            onChange={evt => setState(evt.target.value)}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </div>
      <img src={CustomizeIcon} alt="icon" />
    </div>
  );
};

export default MidleHeading;
