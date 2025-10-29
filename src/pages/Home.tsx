import Hero from '../components/homes/Hero';
import Porto from '../components/homes/Porto';
import Service from '../components/homes/Service';

export default function Home() {
    return (
        <main className='bg-gradient-to-r from-red-900 to-black to-150%'>
            <Hero />
            <Porto />
            <Service />
        </main>
    );
}
