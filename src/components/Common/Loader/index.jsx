/* eslint-disable react/jsx-no-undef */
import { CircularProgress } from "@mui/material"
import './styles.css'

function Loader() {
  return (
    <div className="loader-container">
         <CircularProgress />
    </div>
  )
}

export default Loader