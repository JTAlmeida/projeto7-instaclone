import Navbarlogo from "../Components/Navbarlogo";
import NavbarlogoMobile from "../Components/NavbarlogoMobile";
import Instagrammobile from "../Components/Instagrammobile";
import Pesquisa from "../Components/Pesquisa";
import Icones from "../Components/Icones";
import Iconesmobile from "../Components/Iconesmobile";

function Navbar(){
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

export default Navbar;