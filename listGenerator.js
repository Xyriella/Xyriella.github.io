function createList(){
    let CrosswordList = document.getElementById("CrosswordList")
    const itemCount = 7
    let counter = 0
    let prevItem

    while (counter < itemCount) {
        counter ++

        var newListItem = document.createElement("li")
        var listText = document.createTextNode("Ella-Quence #"+ counter +" - ")
        newListItem.appendChild(listText)
        var linkPadding = document.createTextNode(" | ")

        var crypticLink = document.createElement("a")
        crypticLink.href = "Crosswords/EllaQuenceCryptic" + counter + ".html"
        crypticLink.className = "crosswordLink"
        var crypticLinkText = document.createTextNode("Cryptic")
        crypticLink.appendChild(crypticLinkText)

        var quickLink = document.createElement("a")
        quickLink.href = "Crosswords/EllaQuenceQuick" + counter + ".html"
        quickLink.className = "crosswordLink"
        var quickLinkText = document.createTextNode("Quick")
        quickLink.appendChild(quickLinkText)

        newListItem.appendChild(crypticLink)
        newListItem.appendChild(linkPadding)
        newListItem.appendChild(quickLink)

        CrosswordList.insertBefore(newListItem, prevItem)

        prevItem = newListItem
    }
}