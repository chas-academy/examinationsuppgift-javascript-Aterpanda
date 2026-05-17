
const incomeBtn = document.getElementById('incomeBtn');
const expenseBtn = document.getElementById('expenseBtn');
const incomeList = document.getElementById('incomeList');
const expenseList = document.getElementById('expenseList');
const balanceElement = document.getElementById('balance');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
let saldo = 0;
//Först hämtar jag en massa saker från HTML koden som används i JS koden. 
//Har även en "let" variabel som håller koll på saldot som börjar på 0. 

//Börjar med att lägga till ett par funktioner till som kommer behövas.
function addTransaction(type) {
    const desc = descInput.value;
    const amount = amountInput.value;
    let amountnumber = Number(amount);
//Detta är mer för att göra de fasta hämtade HTML elementen som ligger i text form till mer lösa siffer variabler som kan användas i funktioner som tex +- osv.

    //Här skapar jag ett "li" element som används för att göra så nya rader skapas i listorna när jag lägger till saker i dessa listor.
    const list = document.createElement("li");

    //Här kollar jag vilken transaktion det är och om det är en inkomst så lägger till det i rätt lista och uppdaterar saldot. 
    //Om det inte är en inkomst så hoppar den vidare till "Else if" och kollar om det är en utgift och gör samma sak fast - iställeSt för +.
    if (type === "income") {
        list.textContent = `${desc} - ${amountnumber} kr`;
        incomeList.appendChild(list);

        //Ökar saldot vilket går att göra så enkelt som + eftersom jag "frigjordde" amount till en siffervariabel.
        saldo += amountnumber;

        //Typ samma som ovan men istället om det är en utgift så fortsätter neden och startar nedan kod som lägger det på rätt lista och uppdaterar saldot.
    } else if (type === "expense") {
        list.textContent = `${desc} - ${amountnumber} kr`;
        expenseList.appendChild(list);

        //Minskar saldot med samma logik som ovan fast istället för + så är det -.
        saldo -= amountnumber;
    }
//Nu när det är ett binaärt val så är det svårt att bli fel men annars borde man ha något ytterligare "else" statement
//Som säger att det är något fel med typen av transaktion eller något.

    //Uppdatera saldo på skärmen
    balanceElement.textContent = saldo;

    //Tommer skriv fälten
    descInput.value = "";
    amountInput.value = "";
}

//"lyssnar" efter klick på knapparna och om någon klickar på dem så körs koden från ovan.
incomeBtn.addEventListener("click", function () {
    addTransaction("income");
});

expenseBtn.addEventListener("click", function () {
    addTransaction("expense");
});