import React, {useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { LanguageContext } from "./App";
import "./CSS/index_CSS.css";
import "./CSS/hotel_CSS.css";
import "./CSS/enskede-rooms_CSS.css";

function EnskedeRooms() {
  const enrooms = {
    en: {
      single_name:"Single Room",
      single:
        "Redecorated cozy room with tastefully décor and top of range high quality bed, 110 cm wide.In addition, there are a high quality working desk and a LCD TV. The bathroom have underfloor heating and a hair dryer. Some of the rooms are situated on lower ground floor.",
        stdouble_name:"Standard Double",
        stdouble:
        "A redecorated large room with tastefully décor and a quality bed, 180 cm wide. In addition,a LCD TV and a high quality working desk. The bathroom has underfloor heating and a hair dryer.",
        twinbed_name: "Standard Twin Bed",
        twinbed:
        "A redecorated spacious room with tastefully décor and two single top of range quality beds, 2 x 90cm wide. In addition, a LCD TV and a high quality working desk. The bathroom has underfloor heating and a hair dryer.",
        supdouble_name: "Superior Double Room",
        supdouble:
        "A room with a view! Redecorated spacious room with tastefully décor with views over residential gardens. Top of range quality double bed 180cm wide. In addition, a LCD TV and a high quality working desk. The bathroom has underfloor heating and a hair dryer.",
        smoke: "*all rooms and public areas are non-smoking",
    },
    se: {
        single_name:"enkelrum",
      single:
        "Ominredda mysiga rum med smakfull inredning och en förstklassig säng av hög kvalitet, 110 cm bred. Dessutom finns det ett högkvalitativt skrivbord och en LCD-TV. Badrummet har golvvärme och en hårtork. Vissa av rummen ligger på nedre våningen.",
        stdouble_name:"Standard dubbel",
        stdouble:
        "Ett renoverat stort rum med smakfull inredning och en kvalitetssäng, 180 cm bred. Dessutom en LCD-TV och ett högkvalitativt skrivbord. Badrummet har golvvärme och en hårtork.",
        twinbed_name: "Standard med 2 enkelsängar",
        twinbed:
        "Ett renoverat rymligt rum med smakfull inredning och två enkelsängar av högsta kvalitet, 2 x 90 cm breda. Dessutom en LCD-TV och ett högkvalitativt skrivbord. Badrummet har golvvärme och en hårtork.",
        supdouble_name: "Dubbelrum Superior",
        supdouble:
        "Ett rum med utsikt! Nyinrett rymligt rum med smakfull inredning med utsikt över bostadsområdena. Dubbelsäng av högsta kvalitet 180 cm bred. Dessutom en LCD-TV och ett högkvalitativt skrivbord. Badrummet har golvvärme och en hårtork .",
        smoke: "*alla rum och allmänna utrymmen är rökfria",
    }
  };

  const [language, setLanguage] = useContext(LanguageContext);
  console.log("language", language);

  return (
    <>
      <div>
      <header>
    <a href="./index.html"><img src={require("./pictures/enskedelogo.png")}class="logo" alt=""/></a>
    <a href="./booking.html" target="_blank"><button class="bookbutton" onclick="book()">BOOK ONLINE</button></a>
    <ul>
        <li> <a href="../enskede/enskede.html">Home</a></li>
        <li> <a href="../enskede/enskede-business.html">Business</a></li>
        <li><a href="../enskede/enskede-leisureandevents.html"> Leisure & Events</a> </li>
        <li> <a href="../enskede/enskede-rooms.html">Rooms</a></li>
        <li> <a href="../enskede/enskede-aboutus.html">About Us</a> </li>
        <li> <a href="../enskede/enskede-contact.html">Contact</a> </li>
    </ul>
</header>
<hr/>

      <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <div class="face front-face">
                    <img src={require("./pictures/room.jpg")} alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                        {enrooms[language].single_name}
                        </div>
                    </div>
                    <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial">
                        {enrooms[language].single}
                        </div>
                        <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <div class="face front-face">
                    <img src={require("./pictures/room1.jpg")} alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                        {enrooms[language].stdouble_name}
                        </div>
                    </div>
                    <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial">
                        {enrooms[language].stdouble}
                        </div>
                        <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <div class="face front-face">
                    <img src={require("./pictures/room2.jpeg")} alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                        {enrooms[language].twinbed_name}
                        </div>
                    </div>
                    <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial">
                        {enrooms[language].twinbed}
                        </div>
                        <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <div class="face front-face">
                    <img src={require("./pictures/room3.jpg")} alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                        {enrooms[language].supdouble_name}
                        </div>
                    </div>
                    <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial">
                        {enrooms[language].supdouble}
                        </div>
                        <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="lang">
          <button value="en" id="en" onClick={() => setLanguage("en")}>
            en
          </button>
          <button value="se" id="se" onClick={() => setLanguage("se")}>
            se
          </button>
          </div>
          <div class="smoke">
        <p>  {enrooms[language].smoke}</p>
    </div>
          <footer>
    <p>Maude's Hotel<br/>
        +46 (8) 600 5900</p>
</footer>
      </div>
    </>
  );
}
export default EnskedeRooms;
