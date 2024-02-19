const seatBtn = document.getElementsByClassName('seat-btn');

let count = 0;
let restSeat = 20;
let ticketPrice = 550;


for (const btn of seatBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        setInnerText('select-seat', count);

        restSeat = restSeat - 1;
        setInnerText('restof-seat', restSeat);


        const seatName = e.target.innerText;
        const seatClassName = "Economy";
        const showSeatInfo = document.getElementById('show-seat-info');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = seatName;
        const p3 = document.createElement('p');
        p3.innerText = seatClassName;
        const p2 = document.createElement('p');
        p2.innerText = ticketPrice;


        li.appendChild(p);
        li.appendChild(p3);
        li.appendChild(p2);
        showSeatInfo.appendChild(li);

        //total pric
        totalPrice('total-cost',parseInt(ticketPrice));

        // grand total price 

        const grandTotalCost = document.getElementById('grand-total-cost').innerText;

        const convertGrandTotal = parseInt(grandTotalCost);
        const sum2 = convertGrandTotal + parseInt(ticketPrice);
               

        setInnerText('grand-total-cost', sum2);
    });
}




// function for reuse 

// totalcose section 
function totalPrice (id,value) {
    const totalCost = document.getElementById(id).innerText;

        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(value);
        setInnerText(id, sum);

}

function grandTotalCost (id,value) {
    const totalCost = document.getElementById(id).innerText;

        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(value);
        setInnerText(id, sum);

}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
