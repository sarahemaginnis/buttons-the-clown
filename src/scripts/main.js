//done

import { ClownParty } from "./ClownParty.js"
import { fetchBookings } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchBookings().then(
        () => {
            mainContainer.innerHTML = ClownParty() //need to replace this
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)