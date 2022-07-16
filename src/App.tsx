import {MainMenu} from './ui/MainMenu';
import {useAppState} from './redux/hooks';
import {match} from 'variant';
import {AboutPage} from 'ui/AboutPage';
import {OptionsPage} from 'ui/OptionsPage';
import {Home} from 'ui/Home';

export function App() {
    const view = useAppState(s => s.view);
    return (
        <div className="App">
            {match(view, {
                About: _ => <AboutPage />,
                Home: _ => <Home />,
                MainMenu: _ => <MainMenu />,
                Options: _ => <OptionsPage />,
                Reading: _ => <div>Unimplemented</div>,
            })}
        </div>
    );
}

