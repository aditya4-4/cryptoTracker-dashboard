/* eslint-disable react/prop-types */
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './style.css'

export default function PriceToggle({priceType,handleOnPriceTypeChange }) {
  return (
    <div className="price-toggle">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handleOnPriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
