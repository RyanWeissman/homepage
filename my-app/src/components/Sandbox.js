function AppletCollection({ style, children }) {
  return <div style={style}>{children}</div>;
}

function Applet({ style, name }) {
  return (
    <div style={style}>
      <h1>{name}</h1>
    </div>
  );
}

export default function Sandbox() {
  const appletTheme = {
    color: "#48e5c2",
    backgroundColor: "#5e5e5e",
    margin: "10px",
    width: "100px",
    height: "100px",
    border: "1px dotted #f3d3bd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const appletCollectionTheme = {
    backgroundColor: "#333333",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    columnGap: "10px",
    flexWrap: "wrap",
    width: "782px",
    border: "1px solid #48e5c2",
    padding: "10px",
  };
  return (
    <AppletCollection style={appletCollectionTheme}>
      <Applet name="A" style={appletTheme} />
      <Applet name="B" style={appletTheme} />
      <Applet name="C" style={appletTheme} />
      <Applet name="D" style={appletTheme} />
      <Applet name="E" style={appletTheme} />
      <Applet name="F" style={appletTheme} />
      <Applet name="G" style={appletTheme} />
      <Applet name="H" style={appletTheme} />
      <Applet name="I" style={appletTheme} />
    </AppletCollection>
  );
}
