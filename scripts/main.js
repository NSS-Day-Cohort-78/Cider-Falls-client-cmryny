import { locationsHTML } from "./locations.js";
import { guestsHTML } from "./guests.js";
import { servicesHTML } from "./services.js";

const mainContainer = document.querySelector(".main-container");

const locationsHTMLForDOM = locationsHTML();
const guestsHTMLForDOM = guestsHTML();
const servicesHTMLForDOM = servicesHTML();

const parkSiteHTML = `
<section id="header">
    <img src="https://i.ibb.co/MxXmyHC5/Cider-Falls-Logo-w-Side-Type-NEW.png" alt="Cider Falls Park Logo">
</section>
<div class="twoColumns">
    <article id="areas-and-services">
        <section class="services-list">
            <h2>Park Services</h2>
            ${servicesHTMLForDOM}
        </section>

        <section class="locations">
            ${locationsHTMLForDOM}
        </section>
    </article>

    <article id="guests">
        <h2>Our Guests</h2>
        ${guestsHTMLForDOM}
    </article>
</div>

<section id="footer">
    <span class="footer-item">(555) 555-5555</span>
    <span class="footer-item">info@CiderFallsPark.com</span>
    <span class="footer-item">1234 Main St. Nashville, TN 37209</span>
</section>
`;

mainContainer.innerHTML = parkSiteHTML;
