import navitems from "../data/navbar.json";
import { NavLink } from "./NavLink";

export function Navbar() {
    return(
        <ul className="flex gap-x-8">
            {navitems.map((item) => (
                <NavLink key={item.id} title={item.title} link={item.link} />
            ))}
            </ul>
    )
}