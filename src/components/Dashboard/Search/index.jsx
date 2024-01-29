/* eslint-disable react/prop-types */

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './styles.css'

function Search({search, onSearchChange}) {
  return (
    <div className='search-flex'>
        <SearchRoundedIcon />
        <input type="text" placeholder='search' value={search} onChange={(e) => onSearchChange(e)}/>
    </div>
  )
}

export default Search