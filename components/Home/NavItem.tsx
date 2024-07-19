import Link from "next/link";
import "../styles.scss";

type NavItemType = {
  label: string;
  type: string;
  href: string;
};

const NavItem = ({ label, type, href }: NavItemType) => {
  const scrollToElem = (id) =>
    document.getElementById(id)?.scrollIntoView(true);

  return type === "DOWNLOAD" ? (
    <a download className="link" href={href}>
      {label}
    </a>
  ) : (
    <Link className="link" onClick={() => scrollToElem(href)} href="">
      {label}
    </Link>
  );
};

export default NavItem;
