import Link from "next/link";

function LinkWithIcon({ label, icon, url }) {
  return (
    <Link
      className="underline flex gap-4 items-center"
      target="_blank"
      href={url}
    >
      {icon}
      {label}
    </Link>
  );
}

export default LinkWithIcon;
