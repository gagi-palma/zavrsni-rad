let parsedUrl = new URL(window.location.href);
let id = parsedUrl.searchParams.get("id");
let key = parsedUrl.searchParams.get("objekat");


async function renderInfoCity() {
    let response = await fetch(`http://localhost:3000/${key}/${id}`);
    let render = "";
    let info = await response.json();
        render += `<h4>${info.grad}</h4>
                    <p>${info.opisGrada}</p>`
        $("#infoCity").html(render);
}
async function renderImages() {
    let response = await fetch(`http://localhost:3000/${key}/${id}`);
    let info = await response.json();
    for (i = 0; i < info.src.length; i++) {
    $(`.img${i+1}`).css("background-image", `url("${info.src[i]}")`);
    }
}

async function renderInformation() {
    let response = await fetch(`http://localhost:3000/${key}/${id}`);
    let render = "";
    let info = await response.json();
        render += `<h4>${info.mesto}</h4>
                    <p>${info.opisMesta}</p>`
        $("#infoPlace").html(render);
}

async function renderDropdown(URL,NavMenu,NavLeft) {
    let response = await fetch(`http://localhost:3000/${URL}`);
    let render = "";
    let info = await response.json();
    for (i = 0; i < info.length; i++) {
        render += `<a href="secondPage.html?objekat=${URL}&id=${info[i].id}" target="_blank">${info[i].grad}</a>`
        $(`#${NavMenu}`).html(render);
        $(`#${NavLeft}`).html(render);
    }
}
async function renderOthersData() {
    let response = await fetch(`http://localhost:3000/${key}/${id}`);
    let render = "";
    let info = await response.json();
        render += `<h4>${info.nazivSmestaja} **** </h4>
                    <p>${info.mesto}</p>
                    <p>Možete sa našom agencijom provesti divnih ${info.brojDana} odmora.</p>
                    <p>Aranžman obuhvata ${info.brojNocenja} sa polupansionom, noćenjem sa doručkom ili najmom sobe, autobuski prevoz i usluge vodiča za samo ${info.cena}€</p>
                    
                    `
        $("#infoRooms").html(render);
}
renderOthersData();
renderImages();
renderInfoCity();
renderInformation();
renderDropdown("Evropski-gradovi","dropdownCity","leftNavDropdownCity");
renderDropdown("Grcka-more","dropdownGreece","leftNavDropdownGreece");
renderDropdown("Turska-more","dropdownTurkey","leftNavDropdownTurkey");


function openNav() {
    document.getElementById("navLeft").style.width = "40vw";
    document.getElementById("container").style.marginLeft = "40vw";
}

function closeNav() {
    document.getElementById("navLeft").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
}

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}