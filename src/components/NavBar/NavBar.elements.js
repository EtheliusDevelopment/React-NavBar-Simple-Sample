import styled from 'styled-components';


export const NavBarContainer = styled.div`
width : 100%auto;
height : 80px;
position : sticky;
top : 0;
z-index : 99;
background-color : #49426c;
`

export const NavBarWrapper= styled.div`
margin : auto;
width : 100%;
max-width : 1300px;
height : 100%;
align-items : center;
display : flex;
flex-wrap : wrap;
justify-content : space-between;
`
export const IconLogo= styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    font-family : "Oswald";
    font-size : 2rem;
    color : fuchsia;
`

export const Menu= styled.ul`
    display : flex;
    justify-content : center;
    height : 100%;
    align-items : center;

    @media screen and (max-width:960px){
        width : 100%;
        height : 99vh;
        position : absolute;
        top : 80px;
        left : 0;
        flex-direction : column;
        transition : width 2s, height 2s, transform 1s;
    } 
   
`

export const MenuItem= styled.li`
    height : 100%auto;
    padding : 0.5rem 1.1rem ;
    
    display : flex;
    align-items : center;
    justify-content : center;

    font-family : "Oswald";
    font-size : 1.2rem;
    font-weight : 400;
    transition: width 2s, height 2s, transform 1s;

    &:hover {
        background-color : grey;
        border-bottom : 0.2rem solid pink;
        transform: rotateY(20deg); 
    }

    @media screen and (max-width : 960px) {
        width : 100%;
        height : 70px;

    }
    
`
export const IconLogoMobile= styled.div`
display : none;
@media screen and ( max-width:960px) {
    display: flex;
    color : #fff;
    font-size : 2rem;
    
}
`


export const MenuLink= styled.a`
 text-decoration : none;
 color : violet;
`