// import { getLocationsHTML } from "./locations.js";
// import { getGuestsHTML } from "./guests.js";
// import { getServicesHTML } from "./services.js";

// const mainContainer = document.querySelector("__");

const locationsHTMLForDOM = getLocationsHTML();
const guestsHTMLForDOM = getGuestsHTML();
const servicesHTMLForDOM = getServicesHTML();

const parkSiteHTML = `
<section id="header">
    <img src="___" alt="Cider Falls Park Logo"> <h1>Cider Falls Park</h1>
</section>

<article id="areas-and-services">
    <section class="services-list">
        <h2>Park Services</h2>
        ${servicesHTMLForDOM()}
    </section>

    <section class="locations">
        ${locationsHTMLForDOM()}
    </section>
</article>

<article id="guests">
    <h2>Our Guests</h2>
    ${guestsHTMLForDOM()}
</article>

<section id="footer">
    <div>(555) 555-5555</div>
    <div>info@CiderFallsPark.com</div>
    <div>1234 Main St. Nashville, TN 37209</div>
</section>
`;

// mainContainer.innerHTML = parkSiteHTML;
