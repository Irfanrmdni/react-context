import './App.css';
import DisplayTheme from './component/DisplayTheme';
import Setting from './component/Setting';
import Navbar from './component/Navbar';
// import Reducer from './component/Reducer';
import ToggleTheme from './component/ToggleTheme';
import { AppProvider } from './context/app-context';
import { ThemeProvider } from './context/theme-context';

function App() {

   return (
      <div className="App">
         {/* menggunakan AppProvider yang sebelumnya dibuat terpisah */}
         <AppProvider>
            <ThemeProvider>
               <Navbar />
               <hr />
               <Setting />
               <hr />
               <DisplayTheme />
               <hr />
               <ToggleTheme />
            </ThemeProvider>
         </AppProvider>

         {/* <br /> <br /> <hr />
         <Reducer /> */}
      </div>
   );
}

export default App;
