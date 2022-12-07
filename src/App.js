import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import ComicDetail from "./routes/comic-detail/comic-detail.component";
import MainPage from "./routes/main-page/main-page.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Navigate to={"/main"} />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="comic/:id" element={<ComicDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
