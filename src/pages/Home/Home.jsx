import Navbar from '../../components/Navbar/Navbar';
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from './Header'; 
import LogoHotel from './LogoHotel';
import PopularHotel from './PopularHotel';
import Promotion from './Promotion';
import Testimonials from './Testimonial';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Navbar/>
            </div>
            <div className='h-50'>
                <Header/>
            </div>
            <div className="flex justify-center mb-8">
                <SearchBar/>
            </div>
            <div>
                <Promotion/>
            </div>
            <div className='mt-6'>
                <PopularHotel/>
            </div>
            <div className='h-32'>
                <LogoHotel/>
            </div>
            <div>
                <Testimonials/>
            </div>
           
        </div>
    );
};

export default Home;
