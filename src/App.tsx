import HomePage from './pages/Home';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <HomePage />
            <GlobalStyles />
        </BrowserRouter>
    );
};

export default App;
