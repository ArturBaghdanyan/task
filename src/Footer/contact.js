import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import telegram from "./images/telegram.png";
import twitter from "./images/twitter.png";
import map from "./images/map.jpg";
import Button from "./button";

function Contact() {

    return (
        <div className="parent">

            <div className="element">
                <img src={map} alt="map"/>
                <div className="child">
                    <div>
                        <h2>Contact Us</h2>
                        <p>+374823423525</p>
                        <p>Ajapnyak street Yerevan Armenia</p>
                        <p>jfajsfjasmfam@mail.ru</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <p>Services</p>
                        <p>Web development</p>
                        <p>mobile development</p>
                        <p>Ui development</p>
                    </div>
                    <div className="icons">
                        <img src={facebook} alt="facebook"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={telegram} alt="telegram"/>
                        <img src={twitter} alt="twitter"/>
                    </div>
                </div>
            </div>
            <div className="component">
                <Button />
            </div>
        </div>

    )
}
export default Contact;