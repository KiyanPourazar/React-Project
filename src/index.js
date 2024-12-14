import React from "react";
import ReactDOM from "react-dom/client"; // استفاده از ماژول جدید ReactDOM

import App from "./App";


// گرفتن عنصر root از DOM
const rootElement = document.getElementById("root");

// ساخت یک ریشه با createRoot
const root = ReactDOM.createRoot(rootElement);

// رندر کردن کامپوننت داخل root
root.render(<App />);