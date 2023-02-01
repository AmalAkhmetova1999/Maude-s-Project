import EnskedeRooms from "./EnskedeRooms";
import React, { useState } from "react";

const defaultLanguage = "en";
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");
    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  React.useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="App">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <EnskedeRooms />
      </LanguageContext.Provider>
    </div>
  );
}
export default App