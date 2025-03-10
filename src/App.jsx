import { BrowserRouter,Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import Detail from "./pages/Detail";
import Feed from "./pages/Feed";
import Header from "./components/Header";

const App = () => {
  return (
<BrowserRouter>
<Header/>
<Routes>
 <Route path="/" element={<Feed/>}/>
 <Route path="/watch" element={<Detail />} />
        <Route path="/results" element={<Results/>} />
</Routes>
</BrowserRouter>
  );
};
export default App;
