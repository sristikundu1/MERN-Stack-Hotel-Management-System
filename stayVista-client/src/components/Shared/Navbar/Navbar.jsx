import { Link } from "react-router-dom";
import Container from "../Container";
import logo from "../../../assets/images/logo.png"
import MenuDropdown from "./MenuDropdown";
const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
              <Container>
                <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
                    {/* logo  */}
                    <Link to="/">
                        <img className='hidden md:block' 
                        src={logo} 
                        alt="logo"
                        width='100'
                        height='100'/>
                    </Link>
                   {/* Dropdown menu  */}
                   <MenuDropdown></MenuDropdown>
                </div>
              </Container>

            </div>
            
        </div>
    );
};

export default Navbar;