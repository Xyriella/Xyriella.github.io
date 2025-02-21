function createList(){
    let CrosswordList = document.getElementById("CrosswordList")
    let counter = 0
    const itemCount = 1

    while (true) {
        counter ++
        if (counter > itemCount) {
            break 
        }
        //Cryptic
        {
            var newListItem = document.createElement("li")
            var newLink = document.createElement("a")
            var linkText = document.createTextNode("Ella Quence #1 - Cryptic")
            newLink.href = "/Crosswords/EllaQuence" + counter + "/EllaQuenceCryptic" + counter + ".html"
            newListItem.appendChild(newLink)
            newLink.appendChild(linkText)
            CrosswordList.appendChild(newListItem)
        }
        //Quick
        {
            var newListItem = document.createElement("li")
            var newLink = document.createElement("a")
            var linkText = document.createTextNode("Ella Quence #1 - Quick")
            newLink.href = "/Crosswords/EllaQuence" + counter + "/EllaQuenceQuick" + counter + ".html"
            newListItem.appendChild(newLink)
            newLink.appendChild(linkText)
            CrosswordList.appendChild(newListItem)
        }
    }
}