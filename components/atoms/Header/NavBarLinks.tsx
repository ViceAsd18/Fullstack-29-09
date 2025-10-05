import { Menu } from "antd"

const NavBarLinks = () => {
    return (
        <Menu mode="horizontal" items={[
            {key : "1", label : "Browse"},
            {key : "2", label : "My Learning"},
            {key : "3", label : "Wishlist"},
        ]}/>
    )
}

export default NavBarLinks