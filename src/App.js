import {HeaderMenu} from './HeaderMenu';
import {Banner} from './Banner';
import {Faq} from './Faq';
import {Footer} from './Footer';
import {useEffect} from 'react';

import './App.css';

function App() {

	useEffect(() => {
		let Tawk_API=process.env.Tawk_API||{}, Tawk_LoadStart=new Date();
		let s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];

		(function(){
		  s1.async=true;
		  s1.src=process.env.TAWK_SRC;
		  s1.charset='UTF-8';
		  s1.setAttribute('crossorigin','*');
		  s0.parentNode.insertBefore(s1,s0);
		})()

		return () => {
			document.body.removeChild(s0);
			document.body.removeChild(s1);
		}
	}, []);

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
