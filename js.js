let n = 0;
const button = document.querySelector('.Button')
const buttonreset = document.querySelector('.Buttonreset')
const item = document.querySelector('.Item')
const itemvalue = document.querySelector('.Itemvalue')
const dollar = document.querySelector('.dollar')
const dollarin = document.querySelector('.dollarin')
const dollarout = document.querySelector('.dollarout')
const container = document.querySelector('.list')
const MAX_LIMIT = 9
let totalbalance = 0
let totalincomes = 0
let totalespense = 0

const usd = new Intl.NumberFormat('en-US',{
    style:'decimal',
    currency :'USD',
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
});


function addtocontainer(teks1, teks2) {
    const itemlen = document.querySelectorAll('.the')
    item.value = itemvalue.value = "";
    let convertvalue = Number(teks2)
    let border = ""

    if (teks2 != 0 && n < MAX_LIMIT) {
        totalbalance += convertvalue
        dollar.textContent = usd.format(totalbalance)

        const divu = Object.assign(document.createElement('button'), {
            className: 'the',
            textContent: teks1,
            style: 'border : none'
        })
        const spansu = Object.assign(document.createElement('button'), {
            className: 'item',
            textContent: teks2,
            style: 'border : none; background:none'
        })

        if (convertvalue > 0) {
            totalincomes += convertvalue
            dollarin.textContent = usd.format(totalincomes)
            border = "8px solid yellowgreen"
        }
        if (convertvalue < 0) {
            totalespense -= convertvalue
            dollarout.textContent = usd.format(totalespense)
            border = "8px solid red"
        }
        divu.style["border-right"] = border
        divu.style["border-left"] = border
        divu.appendChild(spansu)
        container.prepend(divu)
        n = itemlen.length
    }
    else if(n == MAX_LIMIT){

    }
}


buttonreset.addEventListener('click', () => {
    const toremove = document.querySelectorAll('.the')
    n = 0
    toremove.forEach(remove => {
        remove.remove();
    })
});

button.addEventListener('click', () => {
    addtocontainer(item.value, itemvalue.value)
});