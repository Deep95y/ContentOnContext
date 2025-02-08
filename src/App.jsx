import React, {useState, createContext, useContext} from "react";
import { createRoot } from "react-dom/client";

// create a context
const languageContext = createContext();

const languages = ['javascript', 'python'];
// lets create a provider component to wrap app and provide context value
function LanguageProvider({children}) {
  //  handle the function and logic
     const[on, setOn] = useState(false);
     const[text, setText] = useState("");

     const handleToggle = () => {
          setOn(!on);
          setText(!on ? languages[0] : languages[1]);
     };

  return (
     <languageContext.Provider value={{text, handleToggle}}>
            {children}
     </languageContext.Provider>
  );
}

function App() {

  return (
    <LanguageProvider>
      <MainSection/>
    </LanguageProvider>
  
  )
   
}


function MainSection() {
    //  we will use context to access state and toggle function

    const {text, handleToggle} = useContext(languageContext);

     return (
        <div>
          <p id="favoriteLanguage">Favourite programming language: {text}</p>
          <button id="changeFavorite" onClick={handleToggle} style={{background:'lightpink', color:'white',height:'3rem',width:'6rem'}}>Toggle Language</button>
        </div>
     )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
export default App;
