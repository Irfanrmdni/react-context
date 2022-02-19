
import NavbarLink from './NavbarLink';
import NavbarUser from './NavbarUser';

export default function Navbar() {

    return (
        <nav>
            <NavbarLink children="Dashboard" /> | <NavbarLink children="Products" /> | {''}
            <NavbarLink>
                <NavbarUser />
            </NavbarLink>
        </nav>
    );
}