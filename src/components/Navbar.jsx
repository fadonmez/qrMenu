import React from "react";
import {
  Navbar as NavbarNextUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  menu,
} from "@nextui-org/react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import logo from "../images/potkal.png";

export default function Navbar({ mode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  let menuItems;
  if (mode === "admin") {
    menuItems = ["See Stock", "Add Stock"];
  } else if (mode === "user") {
    menuItems = ["Main Dishes", "Drinks", "Desserts"];
  }

  return (
    <NavbarNextUI
      disableAnimation={true}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <RouterLink to={mode === "admin" ? "/admin" : "/"}>
            <img src={logo} className="w-1/2 h-16" alt="logo" />
          </RouterLink>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden zort sm:gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => {
          return (
            <NavbarItem key={index}>
              <NavLink
                to={
                  mode === "admin"
                    ? `/admin/${item.toLowerCase().replace(/\s+/g, "")}`
                    : item === "Main Dishes"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
              >
                {item}
              </NavLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className="items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="text-gray-400"
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
              to={
                mode === "admin"
                  ? `/admin/${item.toLowerCase().replace(/\s+/g, "")}`
                  : item === "Main Dishes"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "")}`
              }
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNextUI>
  );
}
