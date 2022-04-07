//this is the match to SinkRepair.js in sink-repair
//done

import { Bookings } from "./Bookings.js"
import { BookingForm } from "./BookingForm.js"

export const ClownParty = () => {
    return `
        <h1>Buttons & Lollipop's Parties</h1>
        <section class="bookingForm">
            ${BookingForm()}
        </section>

        <section class="bookingRequests">
            <h2>Party Bookings</h2>
            ${Bookings()}        
        </section>
    `
}