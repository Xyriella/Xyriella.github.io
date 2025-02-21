function createList(){
    let CrosswordList = document.getElementById("CrosswordList")
    let counter = 0
    const itemCount = 1

    while (true) {
        counter ++
        if (counter > itemCount) {
            break 
        }
        var newListItem = document.createElement("li")
        var listText = document.createTextNode("Ella Quence #1 - ")
        newListItem.appendChild(listText)
        var linkPadding = document.createTextNode(" | ")

        var crypticLink = document.createElement("a")
        crypticLink.href = "Crosswords/EllaQuenceCryptic" + counter + ".html"
        var crypticLinkText = document.createTextNode("Cryptic")
        crypticLink.appendChild(crypticLinkText)

        var quickLink = document.createElement("a")
        quickLink.href = "Crosswords/EllaQuenceQuick" + counter + ".html"
        var quickLinkText = document.createTextNode("Quick")
        quickLink.appendChild(quickLinkText)

        newListItem.appendChild(crypticLink)
        newListItem.appendChild(linkPadding)
        newListItem.appendChild(quickLink)

        CrosswordList.appendChild(newListItem)
}
}