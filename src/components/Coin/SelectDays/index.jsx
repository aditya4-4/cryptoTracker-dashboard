/* eslint-disable react/prop-types */
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./styles.css";

function SelectDays({days,handleOnDaysChange }) {
  
  return (
    <div className="select-days">
        <p>Price Change in</p>
      <Select
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "var(--blue)",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={(event) =>handleOnDaysChange(event)}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={10}>10 days</MenuItem>
        <MenuItem value={15}>15 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={45}>45 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={180}>180 days</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
