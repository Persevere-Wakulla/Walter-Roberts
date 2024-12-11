const cashRegister = document.getElementById('container');
const buttons = document.getElementById('buttons');

const register = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0
}

    const penny = .01
    const nickel = .05
    const dime = .10
    const quarter = .25

function changeCoins(number) {
    let cashRegister = new Map();
        let qtyQtr = Math.floor(number / quarter);
        cashRegister.set('quarter', qtyQtr);
        let toDime = (number - (qtyQtr * quarter)).toFixed(2);
        let qtyDime = Math.floor(toDime / dime);
        cashRegister.set('dime', qtyDime);
        let toNickel = (toDime - (qtyDime * dime)).toFixed(2);
        let qtyNickel = Math.floor(toNickel / nickel);
        cashRegister.set('nickel', qtyNickel);
        let toPenny = (toNickel - (qtyNickel * nickel)).toFixed(2);
        let qtyPenny = Math.floor(toPenny / penny);
        cashRegister.set('penny', qtyPenny);
        return cashRegister

}

            function addDigit(digit) {
                var resultField = document.getElementById("results");

                resultField.innerHTML += digit;

                return false;
            }

            function calculate() {
                var resultField = document.getElementById("results");

                resultField.innerHTML = eval(resultField.innerHTML);

                return false;
            }

            function reset() {
                var resultField = document.getElementById("results");

                resultField.innerHTML = "";

                return false;
            }

            onload = function () {
                var links = document.getElementsByTagName("a");
                var length = links.length;

                for (var i = 0; i < length; i++) {
                    var link = links[i];
                    var innerHTML = link.innerHTML;
                    var func = null;

                    switch (innerHTML) {
                        case "Clear":
                            func = reset;
                            break;

                        case "=":
                            func = changeCoins;
                            break;

                        default:
                            // func = getHandlerFunction(innerHTML);
                    }

                    eventUtility.addEvent(link, "click", func);
                }
            };

var eventUtility = {
    addEvent : (function() {
        if (typeof addEventListener === "function") {
            return function (obj, evt, fn) {
                obj.addEventListener (evt, fn, false);
            };
        }   else {
            return function (obj, evt, fn) {
                obj.attachEvent("on" + evt, fn);
            };
        }
        } ()),
            removeEvent : (function() {
                if (typeof removeEventListener === "function") {
                    return function(obj,evt, fn) {
                        obj.removeEventListener(evt, fn, false);
                    };
                }   else {
                    return function(obj, evt, fn) {
                        obj.detachEvent ("on", evt, fn);
                    };
                }
            }())
        };