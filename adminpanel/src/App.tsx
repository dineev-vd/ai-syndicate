import { useRoutes } from "react-router-dom";
import "./App.css";
import { appNavigation } from "./features/navigation";

function App() {
  let element = useRoutes(appNavigation);
  return element;
}

export default App;
