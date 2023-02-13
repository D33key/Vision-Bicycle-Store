import "./scss/app.scss";
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import MainPageCatalog from './components/Catalog/MainPageCatalog';

function App() {
    return (
        <div>
            <Header />
            <main className='main'>
                <Hero />
                <MainPageCatalog title={'Forever Forward.'}/>
            </main>
        </div>
    );
}

export default App;


