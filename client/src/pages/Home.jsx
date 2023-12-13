import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../components/Carousel'
import Linkpics from '../components/Linkpics'



export default function Home() {

  const slides = [
    {
      url:"https://cdn.shopify.com/s/files/1/0052/9308/0674/collections/Lost-Surfboards-Main-Image.jpg?v=1640817798"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0052/9308/0674/collections/Creatures-Main.jpg?v=1627280008"
    }, 
    {
      url: "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/8/AmazonStores/ATVPDKIKX0DER/13fb19983aa445c7b4dfe70e833b93fa.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.jpg"
     
    },
    {
      url: "https://shop-eat-surf.com/wp-content/uploads/2020/09/image003-980x551.jpg" 
    }
  ]

 

  return (
    <div>
    <div className="home-container">
    <div className='home-caro-container'>
    <Carousel slides={slides} className="caro-pics" />
    </div>
    <div className="about-article">
    <p><strong>Introduction:</strong>Are you ready to ride the waves and embrace the thrill of the ocean? Look no further than Red Skull Surf Shop, your ultimate destination for all things surfing. Situated in the heart of a coastal paradise, our surf shop is dedicated to providing surf enthusiasts with top-quality gear, expert advice, and a vibrant community. Whether you're a seasoned pro or a beginner eager to learn, Red Skull Surf Shop has everything you need to make your surfing experience unforgettable.</p>
    <p><strong>Unparalleled Selection of Surfing Equipment:</strong>At Red Skull, we take pride in curating an extensive range of surfing equipment to cater to surfers of all levels. From high-performance surfboards to wetsuits designed for maximum comfort and durability, we offer a wide selection of premium products from renowned brands. Our knowledgeable staff is always on hand to assist you in finding the perfect board, leash, fins, or any other gear you need to conquer the waves.
    We believe that surfing is more than just a sport—it's a lifestyle. That's why Red Skull Surf Shop goes beyond merely selling equipment; we offer expert guidance and surfing lessons to ensure that you can make the most of your time in the water. Our team of experienced instructors is passionate about sharing their love for surfing and helping you develop your skills. Whether you're a beginner looking to catch your first wave or an experienced surfer aiming to refine your technique, our lessons are tailored to suit your individual needs.</p>
    <p><strong>Community and Events:</strong>At Red Skull Surf Shop, we understand the importance of fostering a sense of community among surfers. Our shop serves as a hub where like-minded individuals can connect, share stories, and build lasting friendships. We host regular events, including surf contests, beach clean-ups, and social gatherings, creating opportunities for surfers to come together and celebrate their shared passion. Join us, and you'll not only find exceptional gear but also a supportive community that embraces the thrill of the surf.</p>
    <h4>Come and experience the thrill of the ocean with us. Visit Red Skull Surf Shop today and let your surfing journey begin!</h4>
      
       </div>

    <h1 className ="products-title">Shop Products</h1>
      </div>
    </div>
  )
}
