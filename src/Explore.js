import React from "react";
import cascade from "../src/images/cascade.jpg";
import gun from "../src/images/gun.jpg";
import copy from "../src/images/copy.jpg";
import chesley from "../src/images/chesley.jpg";
import { Link } from "react-router-dom";

function Explore() {
  // const [email, setEmail] = useState("");
  const Savechange = () => {
    return <p>wabon</p>;
  };
  return (
    <div>
      <img src={cascade} id="cascade" />
      <div>
        <p className="seun">Take a Tour</p>
        <img src={gun} id="mmaswi" />
        <img src={copy} id="copy" />
        <img src={chesley} id="chesley" />
      </div>
      <div className="pork">
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
          type="text"
          name="Email"
          onChange={Savechange}
          placeholder="enter email "
          className="new"
        />
        <button className="sky">Subscribe</button>
      </div>
    </div>
  );
}

export default Explore;
