import { getParkAreas, getServices, getServiceArea } from "./database.js"

export const locationsHTML = () => {
    const locations = getParkAreas()
    const services = getServices()
    const serviceAreas = getServiceArea()

    let locationHTML = "<div class='locations-wrapper'>"

    for (const location of locations) {
        locationHTML += `<section class="location-card">`
        locationHTML += `<h2>${location.name}</h2>`
        locationHTML += `<ul>`

        for (const serviceArea of serviceAreas) {
            if (serviceArea.park_area_id === location.id) {
                for (const service of services) {
                    if (service.id === serviceArea.service_id) {
                        locationHTML += `<li>${service.name}</li>`
                    }
                }
            }
        }

        locationHTML += `</ul>`
        locationHTML += `</section>`
    }

    locationHTML += "</div>"
    return locationHTML
}