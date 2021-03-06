// // simulate timeout for testing
// 1.normal js
function simulateTimeout(text, timeout) {
    setTimeout(function () {
        console.log(text);
    }, timeout);
}


simulateTimeout("Hello 1", 1000);
simulateTimeout("Hello 2", 500);
simulateTimeout("Hello 3", 100);

// 2.callbacks function

function simulateCallback(text, timeout, callback) {
    setTimeout(function () {
        console.log(text);
        callback();
    }, timeout);
}

simulateCallback("Hello 3 cb", 1000, function () {
    simulateCallback("Hello 2 cb", 500, function () {
        simulateCallback("Hello 1 cb", 100, function () {
            console.log("Done");
        });
    });
});

// 3.Promise function

function simulatePromise(text, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text === "C") return reject(`Text "C" has Rejected`)
            console.log(text);
            resolve();
        }, timeout);
    });
}

simulatePromise("A", 1000)
    .then(() => {
        return simulatePromise("B", 500);
    })
    .then(function () {
        return simulatePromise("C", 100);
    })
    .then(() => {
        console.log("I finish Promise");
    })
    .catch((error) => {
        console.error(error);
    });


// 4.Async/Await function 

function simulateAsync(text, timeout) {
    return new Promise((resolve, reject) => {
        if (text === "C") return reject(`C is rejected`);
        setTimeout(() => {
            console.log(text);
            resolve();
        }, timeout);
    });
}

async function run() {
    try {
        await simulateAsync("A", 1000);
        await simulateAsync("B", 500);
        await simulateAsync("C", 100);
    } catch (err) {
        console.error(err);
    }
}

run();

/// Finished Async/Await :)