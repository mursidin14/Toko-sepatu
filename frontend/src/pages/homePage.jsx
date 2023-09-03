import Header from 'components/path/header';
import Hero from 'components/path/Hero';
import Iklan from 'components/path/Iklan';
import Koleksi from 'components/path/Koleksi';
import Baner from 'components/path/Baner';
import Favorite from 'components/path/Favorite';
import About from 'components/path/About';
import Footer from 'components/path/Footer';

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Iklan />
            <Koleksi />
            <Baner />
            <Favorite />
            <About />
            <Footer />
        </>
    )
}