//This is the equivalent of Requests.js from sink-repair
//done

import { getBookings, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("booking--")) {
        const [,bookingId] = click.target.id.split("--")
        deleteRequest(parseInt(bookingId))
    }
})

export const Bookings = () => {
    const bookings = getBookings()
    let html = '<ul>'
    const convertBookingToListElement = bookings.map((booking) => {
        return `
    <li>
        ${booking.lengthOfReservation} hour party on ${booking.dateOfReservation} for ${booking.numberOfChildren} children     <button class="request__delete"
                id="booking--${booking.id}">
            Deny
        </button>
    </li>
    `
    })
    html += convertBookingToListElement.join("")
    html += "</ul>"
    return html
}