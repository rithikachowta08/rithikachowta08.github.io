const Logo = () => {
  return (
    <div className="order-2 text-[16px] lg:order-1 lg:text-base">
      <span className="text-terminal-green">{`>_\u00A0`}</span>
      <span>{`{\u00A0`}</span>
      <span className="text-terminal-green">RC</span>
      <span>{`\u00A0}`}</span>
    </div>
  );
};

export default Logo;
