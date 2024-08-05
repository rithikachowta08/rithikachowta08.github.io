import Link from "next/link";
import "./Home.scss";

type NavItemType = {
  label: string;
  type: string;
  href: string;
};

const NavItem = ({ label, type, href }: NavItemType) => {
  return type === "DOWNLOAD" ? (
    <a download className="link" href={href}>
      {label}
    </a>
  ) : (
    <Link
      className="link"
      onClick={() => window.fullpage_api.moveTo(href)}
      href=""
    >
      {label}
    </Link>
  );
};

export default NavItem;
