import React from 'react'
import { NavBarContainer, NavBarWrapper, IconLogo, Menu, MenuItem, MenuLink, IconLogoMobile } from './NavBar.elements'
import { GiBull } from "react-icons/gi";
import { FaBars,  } from "react-icons/fa";

const NavBar = () => {
    return (

        <NavBarContainer>

            <NavBarWrapper>
            <IconLogo>
            <GiBull  size={'2em'}/> 
            <h1 style={{color : "fuchsia", fontSize : "2rem", marginLeft : "30px"}}>Toro Loko</h1>
            </IconLogo>

            <IconLogoMobile>
                <FaBars />
            </IconLogoMobile>
            <Menu>
                <MenuItem>
                <MenuLink>HOME</MenuLink>
                </MenuItem>

                <MenuItem>
                <MenuLink>ABOUT US</MenuLink>
                </MenuItem>

                <MenuItem>
                <MenuLink>SERVICES</MenuLink>
                </MenuItem>

                <MenuItem>
                <MenuLink>COMUNITY</MenuLink>
                </MenuItem>

                <MenuItem>
                <MenuLink>CONTACT US</MenuLink>
                </MenuItem>
                
                
                
                
                


            </Menu>
        
            </NavBarWrapper>

        </NavBarContainer>
     
    )
}

export default NavBar
