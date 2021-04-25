import {HeaderMenu} from './HeaderMenu';
import {Banner} from './Banner';
import {Faq} from './Faq';
import {Footer} from './Footer';
import {useEffect} from 'react';

import './App.css';

function App() {

  return (
    <div className="App">
		<HeaderMenu />
		<Banner />
		<Faq />
		<Footer />
    </div>
  );
}

export default App;
