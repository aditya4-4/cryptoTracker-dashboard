import { useState } from 'react';
import Switch from '@mui/material/Switch';
import "./styles.css"

export default function ThemeSwitch() {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleChange = (event) => {
    setIsLightMode(event.target.checked);
    document.body.classList.toggle("light-mode", event.target.checked);
  };

  return (
    <Switch
      checked={isLightMode}
      onChange={handleChange}
    />
  );
}