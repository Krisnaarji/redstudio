import Hero from '../components/homes/Hero';
import Porto from '../components/homes/Porto';
import Service from '../components/homes/Service';

export default function Home() {
    return (
        <main className='bg-gradient-to-r from-black to-red-900 to-70%'>
            <Hero />
            <Porto />
            <Service />
        </main>
    );
}
