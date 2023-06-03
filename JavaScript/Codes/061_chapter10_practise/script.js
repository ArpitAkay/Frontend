//Chapter10 - Q1
let url = "https://kontests.net/api/v1/all";

let cardContainer = document.getElementById("card-container");

let response = fetch(url);
response.then((value) => {
    return value.json();
}).then((kontests) => {
    console.log(kontests)

    let ihtml = "";

    for (index in kontests) {
        console.log(kontests[index]);

        const startTime = kontests[index].start_time;
        const dateObjStartTime = new Date(startTime);
        const formattedStartTime = dateObjStartTime.toLocaleString().replace(',', '');

        const endTime = kontests[index].end_time;
        const dateObjEndTime = new Date(endTime);
        const formattedEndTime = dateObjEndTime.toLocaleString().replace(',', '');

        ihtml += `
                <div class="card mx-2 my-2 bg-info" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${kontests[index].name}</h5>
                        <p class="card-text">Starts Time : ${formattedStartTime}</p>
                        <p class="card-text">Ends Time : ${formattedEndTime}</p>
                        <p class="card-text">Site : ${kontests[index].site}</p>
                        <p class="card-text">in_24_hours : ${kontests[index].in_24_hours}</p>
                        <p class="card-text">Status: ${kontests[index].status}</p>
                        <a href="${kontests[index].url}" class="btn btn-primary" target="_blank">Visit Here</a>
                    </div>
                </div>
                `;
    }

    cardContainer.innerHTML = ihtml;
})

//Chapter10 - Q2
let note = prompt("Enter your note");
if(note) {
    localStorage.setItem("note", note);
}

//Chapter10 - Q3
let localStorageNote = localStorage.getItem("note");
alert(localStorageNote);

//Chapter10 - Q4
let deleteNote = confirm("Do you want to delete your note?");

if(deleteNote) {
    localStorage.removeItem("note");
    alert("Your note is deleted");
}
else {
    alert("Your note is not deleted");
}
