import { useState } from "react";
import NavItem from "./NavItem";
import MenuCollapsedIcon from "@/public/icons/menu-collapsed.svg";
import MenuExpandedIcon from "@/public/icons/menu-expanded.svg";
import Menu from "./Menu";

declare global {
  interface Window {
    fullpage_api: any;
  }
}

const navItems = [
  { label: "Home", type: "NAV", href: "home" },
  { label: "About", type: "NAV", href: "about" },
  { label: "Work", type: "NAV", href: "work" },
  { label: "Skills", type: "NAV", href: "skills" },
  { label: "Projects", type: "NAV", href: "projects" },
  { label: "Resume", type: "DOWNLOAD", href: "/files/resume.pdf" },
  { label: "Contact", type: "NAV", href: "contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="order-1 lg:order-2">
      <div className="hidden lg:flex gap-8">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            type={item.type}
            href={item.href}
            hoverStyle
          />
        ))}
      </div>
      <div className="lg:hidden">
        <Menu
          items={navItems}
          isOpen={isMenuOpen}
          onNavigate={() => setIsMenuOpen(false)}
        />
        {isMenuOpen ? (
          <MenuExpandedIcon
            className="relative z-[3]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <MenuCollapsedIcon
            className="relative z-[3]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
