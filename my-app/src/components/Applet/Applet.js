export default function Applet({ name }) {
  const appletTheme = {
    color: "#48e5c2",
    backgroundColor: "#5e5e5e",
  };
  return (
    <div style={appletTheme}>
      <h1>{name}</h1>
    </div>
  );
}
