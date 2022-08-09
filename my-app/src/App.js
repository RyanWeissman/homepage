import "./App.css";
import Applet from "./components/Applet/Applet";
import AppletCollection from "./components/AppletCollection/AppletCollection";
import Sandbox from "./components/Sandbox";

function App() {
  const appStyles = {
    backgroundColor: "#333333",
    width: "100%",
    height: "100%",
    position: "absolute",
  };
  return (
    <div style={appStyles}>
      {/* <AppletCollection>
        <Applet name={"Test"} />
        <Applet name={"Applet"} />
      </AppletCollection> */}
      <Sandbox />
    </div>
  );
}

export default App;
