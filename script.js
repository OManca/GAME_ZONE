let date = new Date()
let dateToday = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate()
let today = document.getElementById('today')
let calendar = document.querySelector('#app-calendar');
let years = document.getElementById('selectYear')
const selectElement = document.querySelector('.ice-cream');

//Pour la date du jour 
today.insertAdjacentHTML("beforeend",`<h2> ${(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear())}</h2>`);

let LastSunday = day => {
    return day % 28 === 0
}
let FirstTuesday = day => {
    return day % 30 === 2
}
let nocturnes = day => {
    return day % 7 === 5 || day % 7 ===6 
}
//Pour selectionneer les chiffre du weenkend et les mettre en couleur 
let weekends = day => {
    // le 6 pour la ligne samedi ou le 0 pour la ligne dimache 
    return day % 7 ===6 || day % 7 === 0
}


//Je crée une boulce pour chaque jour du calendirier 
for (let day = 1; day <= dateToday; day++) {
    let first =  FirstTuesday(day)
    let last = LastSunday(day)
    let nocturne = nocturnes(day)
    let weekend = weekends(day)
    // Pour placer les jour de la semaine dans les cases 
    let dayName = day => {
        let date = new Date(Date.UTC(2018, 0, day));
        return new Intl.DateTimeFormat("fr", {weekday: "short"})
        .format(date);
    }
    
    calendar.insertAdjacentHTML("beforeend", `<div class= "day ${weekend ? "weekend" : ""} ${nocturne ? "nocturne" : ""} ${first ? "FirstTuesday" : ""} ${last ? "LastSunday" : ""} "><div class="name">${dayName(day)}</div>${day}</day>`) 
}

// ${nocturne ? "nocturene" : ""}
/* 
Le mois (avec un code couleur)
fermer tous les premiers mardis de chaque mois 
Journées spéciales (tous les derniers dimanches de chaque mois)
*/
