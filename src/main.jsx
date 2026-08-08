import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowDown,
  ArrowUp,
  CalendarDays,
  Building2,
  Dumbbell,
  Waves,
  Trees,
  ShieldCheck,
  MapPinned
} from 'lucide-react';

import './styles.css';

const phone = '9250995854';
const wa = `https://wa.me/91${phone}`;
const A = '/assets/';

function App() {
  const nav = [
    ['Overview', 'overview'],
    ['Residences', 'residences'],
    ['Lifestyle', 'lifestyle'],
    ['Location', 'location'],
    ['Contact', 'contact']
  ];

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="site" id="top">

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="nav">

        <a className="brand" href="#top">
          <span>काशी</span>
          <b>NIRMAL</b>
          <small>HEIGHTS</small>
        </a>

        <nav>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="navCta"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section className="hero">

          <img
            src={A + 'hero-tower.jpg'}
            alt="Kashi Nirmal Heights tower artistic impression"
          />

          <div className="heroShade" />

          <div className="heroContent">

            <p className="eyebrow">
              TRANSPORT NAGAR · VARANASI
            </p>

            <h1>
              A New Icon of
              <br />
              <em>Luxury</em> in Varanasi
            </h1>

            <p className="heroSub">
              Luxury 2, 3 & 4 Bedroom Residences
              <br />
              Nurtured within an exclusive enclave.
            </p>

            <div className="actions">

              <a
                className="btn gold"
                href="#contact"
              >
                <CalendarDays size={16} />
                Book a Site Visit
              </a>

              <a
                className="btn ghost"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

            </div>

            <p className="note">
              Artistic impression · Refer to project documentation
              for final specifications and representations.
            </p>

          </div>

        </section>


        {/* =========================
            OVERVIEW
        ========================= */}

        <section
          id="overview"
          className="intro section"
        >

          <div className="introCopy">

            <p className="eyebrow dark">
              KASHI NIRMAL HEIGHTS
            </p>

            <h2>
              Refined living meets timeless elegance.
            </h2>

            <p>
              Crafted for those who demand nothing but the exceptional,
              Kashi Nirmal Heights is positioned as a premium residential
              address in Transport Nagar, Varanasi.
            </p>

            <p>
              The brochure presents luxury 2, 3 & 4 bedroom residences,
              thoughtfully curated lifestyle amenities and a design-led
              approach to everyday living.
            </p>

            <div className="facts">

              <div>
                <Building2 />
                <b>2, 3 & 4</b>
                <span>Bedroom Residences</span>
              </div>

              <div>
                <MapPin />
                <b>Transport Nagar</b>
                <span>Varanasi</span>
              </div>

              <div>
                <ShieldCheck />
                <b>VDA Approved</b>
                <span>As presented in brochure</span>
              </div>

            </div>

          </div>

          <div className="imageFrame">

            <img
              src={A + 'entrance.jpg'}
              alt="Kashi Nirmal Heights entrance artistic impression"
            />

            <span>
              Artistic Impression
            </span>

          </div>

        </section>


        {/* =========================
            ARCHITECTURE
        ========================= */}

       <section className="architectSection darkSection">

  {/* FULL BROCHURE IMAGE */}

  <div className="architectBrochure">
    <img
      src={A + 'img-002.jpg'}
      alt="Kashi Nirmal Heights architecture and project consultants"
    />
  </div>


  {/* ARCHITECTURE INFORMATION */}

  <div className="architectContent">

    <p className="eyebrow">
      ARCHITECTURE & EXPERTISE
    </p>

    <h2>
      Designed to inspire.
      <br />
      Crafted to endure.
    </h2>

    <p>
      The brochure identifies Hafeez Contractor as project
      architect and presents construction quality management
      and structural/wind tunnel testing credentials as part
      of the project team.
    </p>

    <div className="pillRow">
      <span>Hafeez Contractor</span>
      <span>ACPL Consultant</span>
      <span>TQ Cert</span>
      <span>IIT BHU</span>
    </div>

  </div>

</section>


        {/* =========================
            RESIDENCES
        ========================= */}

        <section
          id="residences"
          className="section residences"
        >

          <div className="sectionHead">

            <p className="eyebrow dark">
              THE RESIDENCES
            </p>

            <h2>
              Choose the residence
              <br />
              <em>that fits your life.</em>
            </h2>

            <p>
              Luxury 2, 3 & 4 bedroom residences,
              presented in the project brochure.
            </p>

          </div>

          <div className="resGrid">

            <article>

              <div className="cardImg">

                <img
                  src={A + 'interior.jpg'}
                  alt="Luxury 2 BHK interior artistic impression"
                />

                <span>
                  Artistic Impression
                </span>

              </div>

              <h3>
                2 BHK
              </h3>

              <p>
                Thoughtfully planned spaces for contemporary living.
              </p>

            </article>


            <article>

              <div className="cardImg">

                <img
                  src={A + 'balcony.jpg'}
                  alt="Luxury 3 BHK residence balcony artistic impression"
                />

                <span>
                  Artistic Impression
                </span>

              </div>

              <h3>
                3 BHK
              </h3>

              <p>
                Generous living designed for modern family life.
              </p>

            </article>


            <article>

              <div className="cardImg">

                <img
                  src={A + 'hero-tower.jpg'}
                  alt="Kashi Nirmal Heights tower artistic impression"
                />

                <span>
                  Artistic Impression
                </span>

              </div>

              <h3>
                4 BHK
              </h3>

              <p>
                A larger expression of refined residential living.
              </p>

            </article>

          </div>

        </section>


        {/* =========================
            LIFESTYLE
        ========================= */}

        <section
          id="lifestyle"
          className="section lifestyle"
        >

          <div className="split">

            <div>

              <p className="eyebrow dark">
                LIFESTYLE
              </p>

              <h2>
                Nature's luxury.
                <br />
                <em>Everyday living.</em>
              </h2>

              <p>
                The brochure brings together landscaped environments,
                wellness, recreation and family-oriented spaces to create
                a complete lifestyle proposition.
              </p>

              <div className="amenityList">

                <span>
                  <Waves />
                  Swimming Pool
                </span>

                <span>
                  <Dumbbell />
                  Gymnasium & Wellness
                </span>

                <span>
                  <Trees />
                  Landscaped Greens
                </span>

                <span>
                  <ShieldCheck />
                  Security Features
                </span>

              </div>

            </div>

            <img
              src={A + 'pool.jpg'}
              alt="Swimming pool artistic impression"
            />

          </div>


          <div className="gallery">

            <img
              src={A + 'wellness.jpg'}
              alt="Wellness and fitness spaces"
            />

            <img
              src={A + 'clubhouse.jpg'}
              alt="Clubhouse lifestyle spaces"
            />

            <img
              src={A + 'kids-sports.jpg'}
              alt="Kids and sports facilities"
            />

          </div>

        </section>


        {/* =========================
            LOCATION
        ========================= */}

        <section
          id="location"
          className="location section darkSection"
        >

          <div className="locCopy">

            <p className="eyebrow">
              THE ADDRESS
            </p>

            <h2>
              Connected to the
              <br />
              <em>best of Varanasi.</em>
            </h2>

            <p>
              Transport Nagar places the project within the connectivity
              network presented in the brochure, with key destinations
              including the airport, railway stations, Kashi Vishwanath
              Temple, BHU, NH-19 and Varanasi Ring Road.
            </p>

            <div className="locItems">

              <span>
                <MapPinned />
                Lal Bahadur Shastri International Airport
              </span>

              <span>
                <MapPinned />
                Varanasi Cantt Railway Station
              </span>

              <span>
                <MapPinned />
                Kashi Vishwanath Temple
              </span>

              <span>
                <MapPinned />
                BHU
              </span>

              <span>
                <MapPinned />
                NH-19
              </span>

              <span>
                <MapPinned />
                Varanasi Ring Road
              </span>

            </div>

          </div>

          <div className="mapFrame">

            <img
              src={A + 'location-map.jpg'}
              alt="Location map from Kashi Nirmal Heights brochure"
            />

            <span>
              Location map not to scale
            </span>

          </div>

        </section>


        {/* =========================
            MASTER PLAN
        ========================= */}

        <section className="section plan">

          <div className="sectionHead">

            <p className="eyebrow dark">
              MASTER PLAN
            </p>

            <h2>
              Thoughtfully planned.
              <br />
              <em>Beautifully connected.</em>
            </h2>

          </div>

          <div className="planFrame">

            <img
              src={A + 'site-plan.jpg'}
              alt="Kashi Nirmal Heights site plan from brochure"
            />

          </div>

        </section>


        {/* =========================
            SPECIFICATIONS
        ========================= */}

        <section className="section specs">

          <div className="sectionHead">

            <p className="eyebrow dark">
              SPECIFICATIONS
            </p>

            <h2>
              Details that support
              <br />
              <em>everyday comfort.</em>
            </h2>

          </div>

          <div className="specGrid">

            <div>
              <b>Structure</b>
              <span>
                RCC structure as specified in project documentation.
              </span>
            </div>

            <div>
              <b>Flooring</b>
              <span>
                Specifications as presented in the project brochure.
              </span>
            </div>

            <div>
              <b>Kitchen & Bathrooms</b>
              <span>
                Detailed material and fitting specifications provided
                in the brochure.
              </span>
            </div>

            <div>
              <b>Doors & Windows</b>
              <span>
                Project specifications as documented in the brochure.
              </span>
            </div>

            <div>
              <b>Electrical</b>
              <span>
                Concealed electrical systems as specified.
              </span>
            </div>

            <div>
              <b>Power & Security</b>
              <span>
                Backup and security provisions as documented.
              </span>
            </div>

          </div>

          <p className="sourceNote">
            Specifications shown here are a concise website summary.
            Please refer to the project brochure and final agreement
            for complete specifications.
          </p>

        </section>


        {/* =========================
            FINAL CONTACT CTA
        ========================= */}

        <section
  id="contact"
  className="contactSection"
>
  <div className="contactIntro">

    <p className="eyebrow">
      BOOK YOUR SITE VISIT
    </p>

    <h2>
      Your new address
      <br />
      <em>awaits.</em>
    </h2>

    <p>
      Interested in Kashi Nirmal Heights?
      Share your details and preferred visit time.
      Our team will connect with you on WhatsApp.
    </p>

    <div className="contactHighlights">

      <span>
        <MapPin size={17} />
        Transport Nagar, Varanasi
      </span>

      <span>
        <Phone size={17} />
        9250995854
      </span>

      <span>
        <MessageCircle size={17} />
        WhatsApp Enquiry
      </span>

    </div>

  </div>


  <form
    className="siteVisitForm"
    onSubmit={(e) => {

      e.preventDefault();

      const form = e.currentTarget;
      const data = new FormData(form);

      const name = data.get('name');
      const phoneNumber = data.get('phone');
      const date = data.get('date');
      const time = data.get('time');
      const message = data.get('message');

      const text =
`*New Site Visit Request*

Name: ${name}
Phone: ${phoneNumber}
Preferred Date: ${date}
Preferred Time: ${time}
Requirement: ${message || 'Not specified'}

Project: Kashi Nirmal Heights
Location: Transport Nagar, Varanasi`;

      window.open(
        `${wa}?text=${encodeURIComponent(text)}`,
        '_blank'
      );

      form.reset();
    }}
  >

    <div className="formRow">

      <label>
        Your Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />
      </label>

    </div>


    <div className="formRow">

      <label>
        Preferred Date
        <input
          type="date"
          name="date"
          required
        />
      </label>

      <label>
        Preferred Time
        <select
          name="time"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a time
          </option>

          <option value="10:00 AM">
            10:00 AM
          </option>

          <option value="11:00 AM">
            11:00 AM
          </option>

          <option value="12:00 PM">
            12:00 PM
          </option>

          <option value="1:00 PM">
            1:00 PM
          </option>

          <option value="2:00 PM">
            2:00 PM
          </option>

          <option value="3:00 PM">
            3:00 PM
          </option>

          <option value="4:00 PM">
            4:00 PM
          </option>

          <option value="5:00 PM">
            5:00 PM
          </option>

          <option value="6:00 PM">
            6:00 PM
          </option>

        </select>
      </label>

    </div>


    <label>
      Requirement / Message
      <textarea
        name="message"
        rows="4"
        placeholder="Tell us what you are looking for (optional)"
      />
    </label>


    <button
      type="submit"
      className="formSubmit"
    >
      <MessageCircle size={18} />
      Request Site Visit on WhatsApp
    </button>


    <p className="formNote">
      Your enquiry will open in WhatsApp with the details you provide.
    </p>

  </form>

</section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="brand footerBrand">
          <span>काशी</span>
          <b>NIRMAL</b>
          <small>HEIGHTS</small>
        </div>

        <p>
          Transport Nagar, Varanasi · Luxury 2, 3 & 4 Bedroom Residences
        </p>

        <p className="footerNote">
          Images and representations are sourced from the provided
          project brochure. Artistic impressions and stock images are
          for representation purposes only.
        </p>

      </footer>


      {/* =========================
          FLOATING ACTION BUTTONS
      ========================= */}

      <div className="floatingActions">

        {/* WhatsApp */}

        <a
          className="floatingBtn floatingWhatsapp"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle size={23} />
          <span>WhatsApp</span>
        </a>


        {/* Call */}

        <a
          className="floatingBtn floatingCall"
          href={`tel:+91${phone}`}
          aria-label="Call Us"
        >
          <Phone size={22} />
          <span>Call Us</span>
        </a>


        {/* Site Visit */}

        <a
          className="floatingBtn floatingVisit"
          href="#contact"
          aria-label="Book a Site Visit"
        >
          <CalendarDays size={21} />
          <span>Book a Site Visit</span>
        </a>


        {/* Back to Top */}

        <button
          className="floatingBtn floatingTop"
          onClick={backToTop}
          aria-label="Back to Top"
        >
          <ArrowUp size={22} />
          <span>Back to Top</span>
        </button>

      </div>

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);