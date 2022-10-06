// Troll
var btns = document.querySelectorAll('button');
for(let btn of btns) {
    btn.onclick = () => {swal("Ú òa", "Không có gì đâu nhé :>")}
}

// Filter range
var filter = document.getElementById('filter');
var changePrice = document.getElementById('change-price');
changePrice.innerHTML = filter.value

filter.oninput = () => {
    changePrice.innerHTML = filter.value;
}
// End Filter range

// Get id book 
    const getId = (clickedId) => {
        localStorage.setItem("bId", clickedId);
    }
// End get id book