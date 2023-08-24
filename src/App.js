import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import MainPage from "./pages/mainPage/MainPage";
import {GamePage} from "./pages/gamePage/GamePage";
import {SettingsPage} from "./pages/settingsPage/SettingsPage";
import './App.css';

function App() {
  return (
<Routes>
  <Route path={'/'} element={<MainLayout/>}>
    <Route index element={<Navigate to={'main'}/>}/>
    <Route path={'main'} element={<MainPage/>}/>
    <Route path={'game'} element={<GamePage/>}/>
    <Route path={'settings'} element={<SettingsPage/>}/>
  </Route>
</Routes>
  );
}

export default App;
