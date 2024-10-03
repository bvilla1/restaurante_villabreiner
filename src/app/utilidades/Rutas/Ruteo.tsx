import { Route, Routes } from "react-router-dom";
import { Incio } from "../../componentes/contenedor/Inicio";
import { MenuCrear } from "../../menu/menu/MenuCrear";
import { MenuListas } from "../../menu/menu/MenuListas";
import { MenuAdmin } from "../../menu/menu/MenuAdmin";
import { MenuActualizar } from "../../menu/menu/MenuActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontradp } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Incio />} />

            <Route path="/mencre" element={<MenuCrear />} />
            <Route path="/menlis" element={<MenuListas/>} />
            <Route path="/menadmin" element={<MenuAdmin/>} />
            <Route path="/menactu/:codigo" element={<MenuActualizar/>} />

            <Route path="/menacer" element={<Acerca/>} />

            <Route path="/" element={<NoEncontradp/>} />

        </Routes>
    )
}