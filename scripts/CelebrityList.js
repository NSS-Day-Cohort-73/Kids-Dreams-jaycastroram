import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const itemClicked = theClickEvent.target
        let celebrity = null
        if(itemClicked.dataset.type === "celebrity") {
            for(const celeb of celebrities) {
                if( celeb.id === parseInt(itemClicked.dataset.id)) {
                    celebrity = celeb
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star!`)
                }
            }
        }
    }
)





export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
