import HomeLayout from '../layout/HomeLayout';
import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';
import Princing from '../components/Princing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    const plans = [
        {
            name: 'Free',
            price: 0,
            storage: 5,
            features: [
                { name: '5 GB Storage', available: true },
                { name: '1 Project', available: true },
                { name: 'Community Support', available: true },
                { name: 'File Upload API', available: true },
                { name: 'Max File Size: 5 MB', available: true },
                { name: 'Basic Rate Limit (100 req/day)', available: true },
                { name: 'Priority Support', available: false },
            ],
            popular: false
        },
        {
            name: 'Basic',
            price: 49000,
            storage: 100,
            features: [
                { name: '100 GB Storage', available: true },
                { name: 'Up to 5 Projects', available: true },
                { name: 'Email Support (Office Hours)', available: true },
                { name: 'File Upload API', available: true },
                { name: 'Max File Size: 25 MB', available: true },
                { name: 'Standard Rate Limit (10,000 req/month)', available: true },
                { name: 'Priority Support', available: false },
            ],
            popular: false
        },
        {
            name: 'Pro',
            price: 149000,
            storage: 500,
            features: [
                { name: '500 GB Storage', available: true },
                { name: 'Up to 20 Projects', available: true },
                { name: '24/7 Email & Chat Support', available: true },
                { name: 'File Upload API', available: true },
                { name: 'Max File Size: 100 MB', available: true },
                { name: 'High Rate Limit (100,000 req/month)', available: true },
                { name: 'Priority Support', available: true },
            ],
            popular: true
        },
        {
            name: 'Business',
            price: 399000,
            storage: 2048,
            features: [
                { name: '2 TB Storage', available: true },
                { name: 'Unlimited Projects', available: true },
                { name: 'Dedicated Account Manager', available: true },
                { name: 'File Upload API', available: true },
                { name: 'Max File Size: 1 GB', available: true },
                { name: 'Unlimited Rate Limit (Fair Use)', available: true },
                { name: 'Priority Support', available: true },
            ],
            popular: false
        }
    ];


    return (
        <HomeLayout>
            <Jumbotron />
            <Features />
            <Princing plans={plans} />
            <Contact />
            <Footer />
        </HomeLayout>
    );
}