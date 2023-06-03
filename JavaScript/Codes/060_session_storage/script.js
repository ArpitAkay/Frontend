sessionStorage.setItem("Name", "Arpit Kumar");
sessionStorage.getItem("Name");
sessionStorage.clear();
sessionStorage.removeItem("Name");

window.onstorage = (e) => {
    alert("changed");
    console.log(e); 
}