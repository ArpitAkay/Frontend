let containerElem = document.getElementsByClassName("container")[0];
let contentArr = ["Intializing Hack Program ...", "Connecting to Instagram ...", "Hacking arpit_noob31 Username ...", "Username found with arpit_noob31 ...", "Success! Instagram User with username arpit_noob31 Hacked ..."];

const hackerman = async () => {
    let i = 0;

    let promise =  new Promise((resolve, reject) => {
        let timerId = setInterval(() => {
            let pEleme = document.createElement("p");
            pEleme.innerText = contentArr[i];

            containerElem.appendChild(pEleme);
            i++;

            if(i === (contentArr.length)) {
                clearInterval(timerId);
            }

        }, 2000);
        
        resolve(true);
    });

    return promise;
}

const main = async () => {
    let value = await hackerman();

    console.log(value);
}

main();