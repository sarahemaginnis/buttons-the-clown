//This is the equivalent of ServiceForm.js from sink-repair

import { sendBooking } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPartyRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumberOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const userAddressOfParty = document.querySelector("input[name='addressOfParty']").value
        const userDateOfReservation = document.querySelector("input[name='dateOfReservation']").value
        const userLengthOfReservation = document.querySelector("input[name='lengthOfReservation']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: userNumberOfChildren,
            addressOfParty: userAddressOfParty,
            dateOfReservation: userDateOfReservation,
            lengthOfReservation: userLengthOfReservation
        }

        // Send the data to the API for permanent storage
        sendBooking(dataToSendToAPI)
    }
})

export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfChildren">How Many Children Attending the Party</label>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="addressOfParty">Address of Party</label>
            <input type="text" name="addressOfParty" class="input" />
        </div>
        <div class="field">
            <label class="label" for="dateOfReservation">Date of Reservation</label>
            <input type="date" name="dateOfReservation" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">Length of Reservation (hours)</label>
            <input type="number" name="lengthOfReservation" class="input" />
        </div>

        <button class="button" id="submitPartyRequest">Submit Party Request</button>
    `

    return html
}