let providers = []
let DOMProviders = []

function getUrlByAlias (alias) {
    return function(obj) {
        return obj.alias === alias
    }
}

function loadIdpsLogos (url) {
    fetch(url).then((response) => response.json()).then((idps) => {
        for (let i = 0; i < DOMProviders.length; i++) {
            let item = DOMProviders.item(i)
            let alias = item.getAttribute("data-provider-alias")
            let idp = idps.find(getUrlByAlias(alias))
            if (idp) {
                item.firstElementChild.setAttribute("src", idp.logo)
            }
        }
    }).catch((error) => console.log("Can't fetch logos" + error))  
}

function filterProviders(filterText) {
    let visible = []
    providers.forEach(function (element) {
        let include = element.name.includes(filterText)
        visible.push(include)
    })
    for (let i = 0; i < DOMProviders.length; i++) {
        DOMProviders.item(i).style.display = visible[i] ? "inline-flex" : "none"
    }    
}

function populateProviders() {
    DOMProviders = document.getElementsByName("provider")
    DOMProviders.forEach(function(item) {
        let provider = {}
        provider.name = item.getAttribute("data-provider-name")
        provider.id = item.getAttribute("data-provider-id")
        providers.push(provider)
    })  
}

// After the content is loaded, load logos and append them
// Not working
//document.addEventListener("DOMContentLoaded", populateProviders())

// WORKAROUND... I can't get it working...... FUUUUUUUCK
// I have to set it on <body onload="initializeEverything()"></body>
// STUPID JS

function initializeEverything(url = "https://login.wtl2.wikitolearn-test.org/shibboleth-discovery/idps") {
    populateProviders()
    loadIdpsLogos(url)
}


