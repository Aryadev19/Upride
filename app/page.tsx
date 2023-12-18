import Nav from '@/components/Navbar'
import Image from 'next/image'
import City from '@/components/City'
import Hero from '@/components/Hero'
import Chips from '@/components/Chips'
import Service from '@/components/Service'
import Products from '@/components/Products'
import Offers from '@/components/Offers'
import Training from '@/components/Traning'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
    <Nav/>
    <City/>
    <Hero/>
    <Chips/>
    <Service/>
    <Products/>
    <Offers/>
    <Training/>
    <Testimonial/>
    <FAQ/>
    <Footer/>
    </>
  )
}
