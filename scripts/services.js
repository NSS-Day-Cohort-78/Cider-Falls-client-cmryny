import { getServices } from "./database.js";

const servicesArray = getServices();

export const servicesHTML = () => {
  let servicesListHTML = '<div class="services-list">';

  for (const service of servicesArray) {
    servicesListHTML += `${service.name}, `;
  }
  servicesListHTML = servicesListHTML.slice(0, -2);
  servicesListHTML += "</div>";

  return servicesListHTML;
};
