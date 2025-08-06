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

<article id="areas-and-services">
    <section class="services">
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

<section id="footer">
    <div>(555) 555-5555</div>
    <div>info@CiderFallsPark.com</div>
    <div>1234 Main St. Nashville, TN 37209</div>
</section>
`;

mainContainer.innerHTML = parkSiteHTML;
