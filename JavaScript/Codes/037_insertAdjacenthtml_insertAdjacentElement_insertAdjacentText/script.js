document.getElementById("first").insertAdjacentHTML("beforebegin", '<div class="test">beforebegin</div>');
document.getElementById("first").insertAdjacentHTML("beforeend", '<div class="test">beforeend</div>');
document.getElementById("first").insertAdjacentHTML("afterbegin", '<div class="test">afterbegin</div>');
document.getElementById("first").insertAdjacentHTML("afterend", '<div class="test">afterend</div>');

document.getElementById("first").remove();