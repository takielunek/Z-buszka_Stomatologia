import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h1>Kontakt</h1>
      <div className="contactBox">
        <div>
          <div className="contactInfo">
            <MdLocationPin className="contactIcon" />
            <h2 className="contactText">ulica XYZ 1, 00-342 Warszawa</h2>
          </div>
          <div className="contactInfo">
            <FaPhoneAlt className="contactIcon" />
            <h2 className="contactText">+48 22 333 44 55</h2>
          </div>
          <div className="contactInfo">
            <MdAlternateEmail className="contactIcon" />
            <a href="mailto:kontakt@zebuszka.pl" className="contactText">
              {" "}
              <h2>kontakt@zebuszka.pl</h2>
            </a>
          </div>
          <div className="contactInfo">
            <MdOutlineWatchLater className="contactIcon" />
            <h2 className="contactText">Pon - Pt 09:00 — 21:00</h2>
          </div>
        </div>

        <div className="contactMedia">
          <h2>Obserwuj nas na :</h2>
          <div className="contactSocial">
            <a href="http://www.facebook.com">
              {" "}
              <FaFacebookSquare className="contactIcon" />
            </a>

            <a href="http://www.instagram.com">
              <BsInstagram className="contactIcon" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <FaLinkedin className="contactIcon" />
            </a>
          </div>
        </div>
      </div>

    </ContactSection>
  );
};

const ContactSection = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .contactIcon {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textColor};
    margin: 0;
  }

  .contactText {
    margin: 0 0 0 20px;
  }

  .contactInfo {
    display: flex;
    padding: 10px;
  }

  .contactBox {
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .contactMedia {
    margin-top: 0px;
    @media (max-width: 600px) {
      margin-top: 50px;
    }
  }

  .contactSocial {
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
  }

  .contactButton {
    display: flex;
    justify-content: space-around;
    padding: 50px 400px 0;
  }
`;

export default Contact;
