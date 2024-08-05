import NavItem from "./NavItem";

function Menu({ items, isOpen, onNavigate }) {
  return (
    <div
      className={`menu flex justify-center items-center ${
        isOpen ? "open p-8" : ""
      }`}
    >
      <div className="flex flex-col gap-8">
        {items.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            type={item.type}
            href={item.href}
            className="text-4xl"
            hoverStyle={false}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
