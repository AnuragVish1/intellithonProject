import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupplierDetails from "./Pages/SupplierDetails";
import SavedSuppliers from "./Pages/SavedSuppliers";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="details" element={<SupplierDetails />} />
          <Route path="contact" element={<SavedSuppliers />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
