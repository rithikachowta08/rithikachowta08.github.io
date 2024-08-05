import NavItem from "./NavItem";
import MenuIcon from "@/public/icons/menu.svg";

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
  return (
    <nav className="order-1 lg:order-2">
      <div className="hidden lg:flex gap-8">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            type={item.type}
            href={item.href}
          />
        ))}
      </div>
      <div className="lg:hidden">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navigation;
