function orderFood(callback) {
    console.log("Food is being prepared.");
    callback();
}
function  delivary() {
    console.log("Food is delivered");
}

orderFood(delivary);