import "./scss/app.scss";
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import CatalogPreview from "./components/CatalogPreview/MainPageCatalog";
import TextDescription from './components/Description/TextDescription';
import BgDescription from './components/Description/BgDescription';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <Hero />
                <CatalogPreview title={"Forever Forward."} />
                <TextDescription
                    title={"Make your daily commute the best part of your day."}
                    description={
                        "Clean and timeless designs that make every ride a thrill. Wherever you are heading, our bikes are made to make your daily commute a joy."
                    }
                    isLogoShow={true}
                />
                <BgDescription url={"/img/Bycicles/bycicleBg.jpg"} />
            </main>
            <Footer/>
        </div>
    );
}

export default App;


