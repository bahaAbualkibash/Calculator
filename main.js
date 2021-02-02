let number;
let buttonsArr = document.querySelectorAll('button');
let compination = "";

document.querySelector('a').addEventListener('click', remove);
//when press on number buttons 

for (let i = 3; i < 3; i++) {
    buttonsArr[i].addEventListener('click', function() {

        compination = compination + this.innerHTML;



        document.querySelector('input').value = compination;

    })
}
for (let i = 16; i <= 17; i++) {
    buttonsArr[i].addEventListener('click', function() {
        compination = compination + this.title;

        if (compination.includes('--')) {
            compination = compination.replaceAll(/--/g, '');
        }
        document.querySelector('input').style.color = 'white';



        document.querySelector('input').value = compination;
    })
}

for (let i = 1; i < 2; i++) {
    buttonsArr[i].addEventListener('click', function() {

        compination = compination + this.title;
        document.querySelector('input').style.color = 'white';


        document.querySelector('input').value = compination;

    })
}
for (let i = 2; i <= 3; i++) {

    buttonsArr[i].addEventListener('click', function() {
        if (compination.includes('+')) {
            var number = compination.substr(compination.indexOf('+') + 1);
        }
        if (compination.includes('-')) {
            var number = compination.substr(compination.indexOf('-') + 1);
        }
        if (compination.includes('x')) {
            var number = compination.substr(compination.indexOf('x') + 1);
        }
        if (compination.includes('÷')) {
            var number = compination.substr(compination.indexOf('÷') + 1);
        }
        let removeN = number.length;
        number = percentage(number);
        for (let i = 0; i < removeN; i++) {
            remove();
        }
        compination = compination + number;
        document.querySelector('input').value = compination;
        console.log(compination);
    })
}
for (let i = 3; i < buttonsArr.length - 1; i++) {
    if (i == 16) {
        continue;
    }
    buttonsArr[i].addEventListener('click', function() {
        document.querySelector('input').style.color = 'white';

        compination = compination + this.innerText;

        document.querySelector('input').value = compination;
    })
}

document.getElementById('equal').addEventListener('click', whenEqualPressed)


//when press buttons functions


function whenEqualPressed() {
    let com = compination;
    if (com === "") {
        document.querySelector('input').value = "Please Enter a Number"
        return;
    }
    document.querySelector('input').style.color = 'green';

    compination = compination.replace(/÷/g, '/');
    compination = compination.replace(/x/g, '*');

    console.log(compination);
    let result = eval(compination);

    document.querySelector('input').value = result;
    compination = result.toString();;

}
document.getElementById('clear').addEventListener('click', whenClearPressed);

function whenClearPressed() {
    compination = "";
    document.querySelector('input').value = "";
}

function remove() {

    compination = compination.slice(0, -1);
    document.querySelector('input').value = compination;
}

function percentage(number) {
    let percent = number / 100;
    console.log(percent);
    return percent;
}