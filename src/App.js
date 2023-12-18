import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Forum from "./Forum";
import Introduce from "./Introduce";
import Pricelist from "./Pricelist";
import Product from "./Product";
import { Search } from "react-bootstrap-icons";
import CarComing from "./CarComing";
import Detail from "./Detail";
import LoginAndRegister from "./LoginAndRegister";
import Modal from "./Modal";
import { useState } from "react";
import ForumDetail from "./ForumDetail";
import { useNavigate } from "react-router-dom";
import SearchPage from "./Search";

function App() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const navigate = useNavigate();

    const handleRedirectSearch = () => {
        if (!textSearch) {
            alert("Please enter a search term");
            return;
        }
        navigate(`/search/${textSearch}`);
    };

    return (
        <div className="App">
            <nav className="nav-list">
                <Link to="/">
                    <img
                        src="/image/logo.jpg"
                        className="logotren"
                        alt="Hình ảnh logo website"
                    />
                </Link>
                &nbsp;
                <Link to="/Contact" className="linkk">
                    Contact
                </Link>
                &nbsp;
                <Link to="/Forum" className="linkk">
                    Forum
                </Link>
                &nbsp;
                <Link to="/Introduce" className="linkk">
                    Introduce
                </Link>
                &nbsp;
                <Link to="/Pricelist" className="linkk">
                    Pricelist
                </Link>
                &nbsp;
                <Link to="/Product" className="linkk">
                    Product
                </Link>
                &nbsp;
                <Link to="/coming-soon" className="linkk">
                    Car coming
                </Link>
                <div className="search-nav">
                    <input
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleRedirectSearch();
                            }
                        }}
                        value={textSearch}
                        onChange={(e) => setTextSearch(e.target.value)}
                        type="text"
                        placeholder="Enter your name car"
                    ></input>
                    <button type="button" onClick={handleRedirectSearch}>
                        <Search />
                    </button>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home toggle={setIsOpenModal} />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Forum" element={<Forum />} />
                <Route path="/Introduce" element={<Introduce />} />
                <Route path="/Pricelist" element={<Pricelist />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/detail/:slug" element={<Detail />} />
                <Route path="/forum/:slug" element={<ForumDetail />} />
                <Route path="/search/:keyword" element={<SearchPage />} />
                <Route
                    path="/login-and-register/:method"
                    element={<LoginAndRegister />}
                />
                <Route path="/coming-soon" element={<CarComing />} />
            </Routes>
            <div className="end-page">
                <h2>HOLINE : 0987654321</h2>
                <h2>GMAIL : NVC123@gmail.com</h2>
                <h2>ADDRESS : Tang 1 Vincom số 1 đường 30/4 </h2>
            </div>
            <Modal isOpen={isOpenModal} toggle={setIsOpenModal} />
        </div>
    );
}

export default App;
