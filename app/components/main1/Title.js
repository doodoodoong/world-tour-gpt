export default function Title({ gradient, title }) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "7rem",
    background: gradient,
    borderRadius: "0.5rem",
    marginTop: "1.75rem",
  };
  return (
    <div style={style}>
      <text className="lg:text-5xl sm:text-3xl text-xl">{title}</text>
    </div>
  );
}
