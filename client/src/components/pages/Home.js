// import InfoCard from '../InfoCard'
// import React from 'react'
// import '../../App.css'
// import Cards from '../Cards'
// import Footer from '../Footer'
// import HeroSection from '../HeroSection'

// const Home = () => {
//   return (
//     <>
//         <Cards></Cards>
//         <Footer />
//     </>
//   )
// }

// export default Home

import Header from "../components/Header";
import Sticky from "../components/Sticky";
import Container from "../components/Container";
import Footer from "../components/Footer";
import './Home.css';


function Home() {

  return (
    <div className="Home">
      <Header />
      <Sticky />
      <Container />
      <Footer />
    </div>
  );
}

export default Home;