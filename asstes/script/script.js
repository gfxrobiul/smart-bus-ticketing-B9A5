let count = 0;
let restSeat = 20;
let ticketPrice = 550;



const seatBtn = document.getElementsByClassName('seat-btn');
for (const btn of seatBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        setInnerText('select-seat', count);

        restSeat = restSeat - 1;
        setInnerText('restof-seat', restSeat);
        //------------
        let maxSeat = 0;

        if (maxSeat !== 4) {
            btn.classList.add('bg-green-500');
            btn.classList.add('text-white');
        }

        else if (maxSeat == 4) {
            btn.setAttribute("disabled")
            maxSeat++;
        };
       
        //===================

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

        // one btn one click 
      

        //calculate price
        totalPrice('total-cost',parseInt(ticketPrice));

        //calcucalte grand total price
        grandTotalCost('grand-total-cost',parseInt(ticketPrice));

    });
}




// function for reuse 

// total cost section 
function totalPrice (id,value) {
    const totalCost = document.getElementById(id).innerText;

        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(value);
        setInnerText(id, sum);

}

//grand total reuse function
function grandTotalCost (id,value) {
    const totalCost = document.getElementById(id).innerText;

        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(value);
        setInnerText('grand-total-cost', sum);

}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    // get the value from input
    const couponElement = document.getElementById('input-field');
   console.log(couponElement);

  


});