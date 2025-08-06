import { getParkAreas, getServices, getServiceArea, getGuests } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.locationId) {
            const locationId = parseInt(itemClicked.dataset.locationId)
            const guests = getGuests()
            let count = 0;
            for (const guest of guests ) {
                if (guest.park_area_id === locationId)
                    count++
            }
            window.alert(`This location has ${count} guests.`)
        }
    }
    
)

export const locationsHTML = () => {
    const locations = getParkAreas()
    const services = getServices()
    const serviceAreas = getServiceArea()

    let locationHTML = "<div class='locations-wrapper'>"

    for (const location of locations) {
        locationHTML += `<section class="location-card">`
        locationHTML += `<h2 data-location-id ="${location.id}">${location.name}</h2>`
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