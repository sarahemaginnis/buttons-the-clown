//done

const applicationState = {
    bookings: []
}

const API = "http://localhost:8080"

const mainContainer = document.querySelector("#container")

export const fetchBookings = () => {
    return fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(
            (partyBookings) => {
                // Store the external state in application state
                applicationState.bookings = partyBookings
            }
        )
}

export const getBookings = () => {
    return applicationState.bookings.map(booking => ({ ...booking }))
}

export const sendBooking = (userBookingRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userBookingRequest)
    }

    return fetch(`${API}/bookings`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/bookings/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
