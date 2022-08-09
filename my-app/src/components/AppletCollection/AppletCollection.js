export default function AppletCollection({ children }) {
  const appletCollectionTheme = {
    backgroundColor: "#333333",
    flex: 1,
    flexDirection: "column",
  };
  return <div style={appletCollectionTheme}>{children}</div>;
}
