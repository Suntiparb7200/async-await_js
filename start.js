// // simulate timeout for testing
function simulateTimeout(text, timeout) {
    setTimeout(function () {
        console.log(text);
    }, timeout);
}


simulateTimeout("Hello 1", 1000);
simulateTimeout("Hello 2", 500);
simulateTimeout("Hello 3", 100);

// 2. callbacks function 

function simulateCallback(text, timeout, callback) {
    setTimeout(function () {
        console.log(text);
        callback();
    }, timeout);
}

simulateCallback("Hello 1", 1000, function () {
    simulateCallback("Hello 2", 500, function () {
        simulateCallback("Hello 3", 100, function () {
            console.log("Done");
        });
    });
});
// 3. Promise function


// 4. Async/Await function 

