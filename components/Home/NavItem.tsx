import Link from "next/link";
import classes from "../styles.module.css";

type NavItemType = {
  label: string;
  type: string;
  href: string;
};

function NavItem({ label, type, href }: NavItemType) {
  return (
    <Link
      className={classes.link}
      href={`#${href}`}
      download={type === "DOWNLOAD"}
    >
      {label}
    </Link>
  );
}

export default NavItem;
