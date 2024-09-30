import React, { useState } from 'react';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import UserProfile from './components/UserProfile';
import ThemeToggle from './components/ThemeToggle';
import AboutPage from './pages/AboutPage';
import DebugPage from './pages/DebugPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => <h2>Главная страница</h2>;
const Diamand = () => <h2>Коллекция Диамантов</h2>;
const Saphire = () => <h2>Коллекция Сапфиров</h2>;

const App = () => {
    const [isDebugOpen, setIsDebugOpen] = useState(false);

    const toggleDebug = () => {
        setIsDebugOpen(!isDebugOpen);
    };

    return (
        <UserProvider>
            <Router>
                <div>
                    <nav>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                        <li>
                            <button onClick={toggleDebug}>История</button>
                        </li>
                        <li>
                            <Link to="/categorydiamand">Коллекция Диамантов</Link>
                        </li>
                        <li>
                            <Link to="/categorysaphire">Коллекция Сапфиров</Link>
                        </li>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categorydiamand" element={<Diamand />} />
                        <Route path="/categorysaphire" element={<Saphire />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>

                    
                    {isDebugOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <button onClick={toggleDebug} className="close-button">Закрыть</button>
                                <DebugPage />
                            </div>
                        </div>
                    )}
                </div>

                <ThemeProvider>
                    <div>
                        <h1>Мой Додаток</h1>
                        <UserProfile />
                        <ThemeToggle />
                    </div>
                </ThemeProvider>
            </Router>
        </UserProvider>
    );
};

export default App;
