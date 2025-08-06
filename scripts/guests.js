import { getGuests } from "./database.js";

export const guestsHTML = () => {
    const guests = getGuests();
    let guestHTML = "<ul>"
    for (const guest of guests) {
        guestHTML += `<li>${guest.first_name} ${guest.last_name}</li>`
     }
    guestHTML += "</ul>"
    return guestHTML
}