import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import store from "./store";

import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store} children={<App />} />);
