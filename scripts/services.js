import { getServices, getParkAreas, getServiceArea } from "./database.js";

const servicesArray = getServices();
const parkAreasArray = getParkAreas();
const serviceAreasArray = getServiceArea();

export const servicesHTML = () => {
  let servicesListHTML = '<div class="services-list">';

  for (const service of servicesArray) {
    servicesListHTML += `<div data-type="service" data-serviceid="${service.id}" data-servicename="${service.name}">${service.name}, `;
  }
  servicesListHTML = servicesListHTML.slice(0, -2);
  servicesListHTML += "</div>";

  return servicesListHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // make sure only type=service triggers alert
  if (itemClicked.dataset.type === "service") {
    // empty array to hold service matches inside serviceAreasArray
    const serviceAreasMatch = [];

    // if the item clicked serviceid matches with a service_id of serviceArea object
    for (const serviceArea of serviceAreasArray) {
      if (serviceArea.service_id === parseInt(itemClicked.dataset.serviceid)) {
        serviceAreasMatch.push(serviceArea);
      }
    }

    // empty array to hold area matches inside serviceAreasArray
    const areaNames = [];

    for (const serviceArea of serviceAreasMatch) {
      // each time an serviceArea object is looked at
      // iterate through parkAreasArray to find matches based on area.id & serviceArea.park_area_id
      for (const area of parkAreasArray) {
        if (area.id === serviceArea.park_area_id) {
          areaNames.push(area.name);
        }
      }
    }

    // if there are multiple names inside areaNames, join them with " and "
    const areasForAlert = areaNames.join(" and ");
    window.alert(
      `${itemClicked.dataset.servicename} is available in ${areasForAlert}`
    );
  }
});
