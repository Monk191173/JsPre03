let sel = selector => document.querySelector(selector);

function CoffeeMake(model, price) {
    this.model = model;
    this.price = price;
}
CoffeeMake.prototype.on = function () {
    sel('.result').innerText += "Power on\n"
}
CoffeeMake.prototype.off = function () {
    sel('.result').innerText += 'Power off \n'
}
CoffeeMake.prototype.selftest = function () {
    console.log('Water present');
    console.log('Coffee present');
}
CoffeeMake.prototype.done = function () {
    sel('.result').innerText += 'Coffee is done \n'
}



function Drop(model, price) {
    CoffeeMake.call(this, model, price);


    Drop.prototype.filtertest = function () {
        console.log('filter ok');
    }
    Drop.prototype.make = function () {
        sel('.result').innerText += 'Make coffee \n'
    }
}
Drop.prototype = Object.create(CoffeeMake.prototype);




function Horn(model, price) {
    CoffeeMake.call(this, model, price);

    Horn.prototype.hornOk = function () {
        console.log('Horn inserted');
    }
    Horn.prototype.cappuccino = function () {
        sel('.result').innerText += 'Make cappuccino \n'
    }
}
Horn.prototype = Object.create(CoffeeMake.prototype);


function Coffeemachina(model, price) {
    CoffeeMake.call(this, model, price);

    Coffeemachina.prototype.container = function () {
        console.log('Container empty');
    }
    Coffeemachina.prototype.latte = function () {
        sel('.result').innerText += 'Make latte \n'
    }
}
Coffeemachina.prototype = Object.create(CoffeeMake.prototype);


sel('.drop').addEventListener('click', function () {
    sel('.result').innerText = '';
    let dr = new Drop('HD7462', 2500);
    dr.on();
    dr.selftest();
    dr.filtertest();
    dr.make();
    dr.done();
    dr.off();
})

sel('.horn').addEventListener('click', function () {
    sel('.result').innerText = '';
    let hrn = new Horn('ECM-E10B', 3500);
    hrn.on();
    hrn.selftest();
    hrn.hornOk();
    hrn.cappuccino();
    hrn.done();
    hrn.off();
})

sel('.machine').addEventListener('click', function () {
    sel('.result').innerText = '';
    let mac = new Coffeemachina('DELONGHI', 4500);
    mac.on();
    mac.selftest();
    mac.container();
    mac.latte();
    mac.done();
    mac.off();
})