import Link from "next/link";
import "./Home.scss";

type NavItemType = {
  label: string;
  type: string;
  href: string;
  className?: string;
  hoverStyle: boolean;
  onNavigate?: () => void;
};

const NavItem = ({
  className,
  label,
  type,
  href,
  onNavigate,
  hoverStyle = true,
}: NavItemType) => {
  return type === "DOWNLOAD" ? (
    <a
      download
      className={`${className} link ${hoverStyle ? "hover-styled" : ""}`}
      href={href}
      onClick={() => onNavigate?.()}
    >
      {label}
    </a>
  ) : (
    <Link
      className={`${className} link ${hoverStyle ? "hover-styled" : ""}`}
      onClick={() => {
        window.fullpage_api.moveTo(href);
        onNavigate?.();
      }}
      href=""
    >
      {label}
    </Link>
  );
};

export default NavItem;
