import React, { useState } from "react";
import francesca from "../src/images/francesca.jpg";
import manager from "../src/images/manager.jpeg";
import purple from "../src/images/purple.png";
import logoA from "../src/images/logoA.png";
import logoB from "../src/images/logoB.jpg";
import logoF from "../src/images/logoF.png";
import logoD from "../src/images/logoD.png";
import logoG from "../src/images/logoG.png";
import App from "./App.css";
import { Link } from "react-router-dom";
const About = () => {
  const [email, setEmail] = useState();

  const Savechange = () => {
    return <p>wabon</p>;
  };
  return (
    <>
      {" "}
      <div>
        <div>
          <img src={francesca} id="francesca" />
          <img src={purple} id="purple" />
          <img src={manager} id="manager" />
          <img src={logoA} id="logoA" />
          <img src={logoB} id="logoB" />
          <img src={logoF} id="logoF" />
          <img src={logoD} id="logoD" />
          <img src={logoG} id="logoG" />
        </div>
        <p className="Aboutus">About us</p>
        <p className="secret">
          Welcome to COLE ESSENCE, where elegance and luxury blend seamlessly to
          create an unforgettable experience. Nestled in the heart of CHICAGO,
          our hotel has become an iconic destination for discerning travelers
          seeking refined comfort and impeccable service. With a rich history
          dating back to 2001, COLE ESSENCE has established itself as a haven of
          sophistication and timeless charm. Our commitment to excellence is
          evident in every detail, from the exquisite architecture that graces
          our façade to the meticulously curated interior spaces that exude
          elegance. Step into our grand lobby, where a warm ambiance greets you,
          and our attentive staff stands ready to fulfill your every need. Our
          dedication to personalized service ensures that your stay with us is
          tailored to your preferences, making you feel like an honored guest
          from the moment you arrive.Indulge in our opulent accommodations,
          meticulously designed to provide the utmost comfort and tranquility.
          Each room and suite is tastefully appointed with luxurious
          furnishings, sumptuous bedding, and state-of-the-art amenities,
          ensuring a sanctuary where you can unwind and rejuvenate.Our culinary
          offerings are a true gastronomic delight. Our award-winning chefs
          create culinary masterpieces that blend local flavors with
          international influences, taking you on a culinary journey that will
          tantalize your taste buds. Whether you prefer an intimate dining
          experience or a vibrant social setting, our diverse array of
          restaurants and bars will cater to your every desire. COLE ESSENCE
          also boasts exceptional event and conference facilities, making it an
          ideal choice for both business and social gatherings. Our versatile
          spaces, equipped with cutting-edge technology, are perfectly suited
          for corporate meetings, elegant weddings, and other special occasions.
          Our dedicated events team is at your service to ensure every detail is
          flawlessly executed.As a guest of COLE ESSENCE, you have access to a
          wealth of amenities designed to enhance your stay. Unwind in our
          luxurious spa, indulge in invigorating treatments, or take a dip in
          our sparkling pool. Stay active in our well-equipped fitness center or
          explore the nearby attractions with the assistance of our
          knowledgeable concierge team.
        </p>
        <p className="july">Nicole Rachidi(Hotel Manager)</p>
        <p className="rock">Clients</p>
      </div>
      <div className="FOOTER">
        <p className="jack">COLE ESSENCE</p>
        <p className="vibe">
          The service at the Hotel Monteleone was exceptional. There was
          absolutely no issue that was not addressed timely and with
          satisfactory results. We were particulary impressed with how the hotel
          staff anticipated our needs (periodically coming by the Board Room to
          check with us)
        </p>
        <p className="Gunna">Quick Links</p>
        <Link className="cut">Room booking</Link>
        <Link className="hen">Rooms</Link>
        <Link className="cow">Contact</Link>
        <Link className="dog">Explore</Link>
        <p className="bad">Company</p>
        <Link className="city">Privacy policy</Link>
        <Link className="bat">Refund policy</Link>
        <Link className="yah">F.A.Q</Link>
        <Link className="king">About</Link>
        <p className="queen">Social Media</p>
        <Link className="prince">Facebook</Link>
        <Link className="art">Twitter</Link>
        <Link className="sweet">Instagram</Link>
        <Link className="salt">LinkedIn</Link>
        <p className="girl">Newsletter</p>
        <p className="drink">
          Kindly subscribe to our newsletter to get latest deals on our rooms
          and vacation discount.
        </p>
        <input
          value={email}
          type="text"
          name="Email"
          onChange={Savechange}
          placeholder="enter email "
          className="new"
        />
        <button className="sky">Subscribe</button>
      </div>
    </>
  );
};

export default About;
