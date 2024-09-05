
const amount = document.getElementById("principle-amount");
const rate = document.getElementById("rate-of-interest");
const time = document.getElementById("years");
const calculate = document.getElementById("calculate");
const addInfo = document.getElementById("add-info");




function is_range(si){
     return si >= 500 && si <= 10000;
}

function rate_of_interest(si, rate_interest) {
    let rate;
    
    switch (true) {
        case (si < 1000) && (rate_interest < 5):
            rate = 5;
            break;
        case (si >= 1000 && si <= 5000) && (rate_interest < 7):
            rate = 7;
            break;
        case (si > 5000) && (rate_interest < 9):
            rate = 9;
            break;
        default:
            rate = rate_interest;
    }
    
    return rate;
}

function check_bonus_interest(time){
    return time > 5 ? 2 : 0;
}

function simple_interest(si, rate_interest, year){
    return (si * rate_interest * year) / 100;
}

calculate.addEventListener("click", function(){

    let si = Number(amount.value);
    let rate_interest = Number(rate.value);
    let year = Number(time.value);

    if(is_range(si)){
        let rate = rate_of_interest(si, rate_interest);
        if(rate == 5 && rate_interest < 5){
            addInfo.innerHTML = `As a base interest for this ${si} is ${rate}`;
        } else if(rate == 7 && rate_interest < 7 ){
            addInfo.innerHTML = `As a base interest for this ${si} is ${rate}`;
        } else {
            addInfo.innerHTML = `As a base interest for this ${si} is ${rate}`;
        }

        let bonusInterest = check_bonus_interest(year);

        if(bonusInterest != 0){
            addInfo.innerHTML = `Additional Interest ${bonusInterest}% for more than 5 years plan`;
        }

        rate += bonusInterest;

        let interest = simple_interest(si, rate_interest, year);

        document.getElementById("interest").textContent = `Interest: ${interest}`;
        let total = interest + si;
        document.getElementById("total").textContent = `Total amount: ${total}`;
    }
    else{
        window.alert(error());
    }
});

function error(){
    return 'Enter the Princpal Amount between $500 to $10000';
}

