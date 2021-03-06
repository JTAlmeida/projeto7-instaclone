import Sidebarusuario from "../Components/Sidebarusuario"
import Sidebarsugestoes from "../Components/Sidebarsugestoes"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Sidebarusuario />

            <Sidebarsugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}