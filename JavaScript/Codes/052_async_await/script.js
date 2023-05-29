async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("27 Deg");
        }, 2000);
    });

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("21 Deg");
        }, 5000);
    });

    // delhiWeather.then(alert);
    // bangaloreWeather.then(alert);
    console.log("Fetching delhi weather please wait");
    let delhiW = await delhiWeather;
    console.log("Fetched delhi weather is " + delhiW);
    console.log("Fetching bangalore weather please wait");
    let bangaloreW = await bangaloreWeather;
    console.log("Fetched bangalore weather is " + bangaloreW);

    return [delhiW, bangaloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and i am waiting");
}

const main1 = async () => {
    console.log("Welcome to weather control room");
    let res = await harry();
    console.log(res);

    // res.then((value) => {
    //     console.log(value);
    // })
    console.log(res);

    let res1 = await cherry();
}

main1();