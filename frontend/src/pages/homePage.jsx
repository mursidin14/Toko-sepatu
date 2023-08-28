import Header from 'components/path/header';
import Hero from 'components/path/Hero';
import Koleksi from 'components/path/Koleksi';
import About from 'components/path/About';

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Koleksi />
            <About />
        </>
    )
}