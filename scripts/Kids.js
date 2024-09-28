import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (ClickEvent) => {
        const clickedTarget = ClickEvent.target
        let kid = null
        if(clickedTarget.dataset.type === "child")  {
            for( const child of children) {
                if(child.id === parseInt(clickedTarget.dataset.id)){
                    kid = child
                    window.alert(`${child.name}'s wish is to ${child.wish}`)
                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

