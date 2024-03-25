let arr = [];
let subBtn = document.querySelector('.subBtn');
let clrBtn = document.querySelector('.clrBtn');
let num = document.querySelector('.number');
let tableBody = document.querySelector('.tableBody');
let tableContainer = document.querySelector('.tableContainer');

function showTable(){
    tableContainer.style.display = "block";
    if (arr.length > 10) {
        tableContainer.style.overflow ='scroll';
    }
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement("tr");
        let c1 = document.createElement("td");
        c1.classList.add('col1');
        let c2 = document.createElement("td");
        c2.classList.add('col2');
        let c3 = document.createElement("td");
        c3.classList.add('col3');
        let c4 = document.createElement("td");
        c4.classList.add('col4');
        let c5 = document.createElement("td");
        c5.classList.add('col5');
        c1.innerHTML = arr[i].id;
        c1.style.textAlign = 'center';
        c2.innerHTML = arr[i].email;
        c3.innerHTML = arr[i].name;
        c4.innerHTML = arr[i].body;
        c5.innerHTML = arr[i].postId;
        c5.style.textAlign = 'center';
        row.append(c1,c2,c3,c4,c5);
        tableBody.appendChild(row);
    }
}

subBtn.addEventListener("click", async ()=> {
    tableBody.innerHTML = "";
    arr.length = 0;
    debugger;
    if ((num.value <1 || num.value > 500 || num.value == NaN) && num.value !="") {
        alert ("Number between 1 to 500 only, biAtch!");
        num.value = "";
    }else{
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${num.value}`);
        let result = await response.json(); 
        if (result.length == undefined){
            arr.push(result);
        }else{
            arr = result;
        }
        showTable();
    }
    num.value = "";
})

clrBtn.addEventListener("click", () => {
    tableBody.innerHTML = "";
    num.value = "";
    arr.length = 0;
})
    

    