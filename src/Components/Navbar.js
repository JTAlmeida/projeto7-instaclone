import Navbarlogo from "../Components/Navbarlogo";
import NavbarlogoMobile from "../Components/Mobile/NavbarlogoMobile";
import Instagrammobile from "../Components/Mobile/Instagrammobile";
import Pesquisa from "../Components/Pesquisa";
import Icones from "../Components/Icones";
import Iconesmobile from "../Components/Mobile/Iconesmobile";

export default function Navbar(){
    return (
        <div class="navbar">
                <div class="container">
                    
                    <Navbarlogo />
                    <NavbarlogoMobile />
                    
                    <Instagrammobile />
                    
                    <Pesquisa />
                    
                    <Icones />
                    <Iconesmobile />
                    
                </div>
            </div>
    )
}