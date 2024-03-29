import React, {useContext} from 'react'
import "./navbar.scss"
import logo from "../../assets/vl.png"
import vlblack from "../../assets/vl black.png"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {login, currentUser} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <img src={logo} alt="logo" />
          {/* if dark mode is true then use vlblack as logo */}
        </Link>
        <Link to="/"><HomeOutlinedIcon/></Link>
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/> }
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <Link to={`/profile/${currentUser.userId}`} style={{textDecoration:"none", color:"inherit"}}>
            <img src={currentUser.profilePicture} alt="" />
          </Link>
          <Link to={`/profile/${currentUser.userId}`} style={{textDecoration:"none", color:"inherit"}}>
            <h5>{currentUser.name}</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar