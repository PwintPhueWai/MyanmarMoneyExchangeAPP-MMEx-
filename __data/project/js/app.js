
let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let res = document.getElementById("result");
let cal = document.getElementById("calc");
let history_list = document.getElementById("data_history");

createOption = (x, y, z) => {
    let op = document.createElement("option");
    let value1 = document.createTextNode(y);
    
    let b = z.split(",");
    let first = b[0];
    let sec = b[1];
    let dataValue = first.concat(sec);
    op.setAttribute("value", parseFloat(dataValue));
    
    // console.log(dataValue);
   
    op.appendChild(value1);
    x.appendChild(op);
}

for (dataD in data.rates) {

    createOption(from, dataD,data.rates[dataD]);
    createOption(to, dataD, data.rates[dataD]);
    // from.appendChild(createOption(dataD));
}

createTr = x => {
    let row = document.getElementById("Trspacer"); 
    if (row) {
        row.remove();
    }
    
    let tr = document.createElement("tr");
    x.map(function (el) {
       
        let td = document.createElement("td");
        let text = document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);
        
    })
    history_list.appendChild(tr);
}

function store() {
    localStorage.setItem("record",history_list.innerHTML)
}

cal.addEventListener("submit", (e) => {
    e.preventDefault();
    //get state
    let a = input.value;
    let from_data = from.value;
    let to_data = to.value;
    
    //process
    let from_test = a +" "+ from.options[from.selectedIndex].innerText;
    let to_test = to.options[to.selectedIndex].innerText;
    let data = a * from_data;
    let money = data / to_data;
    let ans = money.toFixed(2);
    let final_res = ans+" " + to.options[to.selectedIndex].innerText;
    let date = new Date().toLocaleString();
    let arr = [date,from_test,to_test,final_res];
    createTr(arr);
    store();
    //set state
    res.innerText = ans;
    input.value = "";
    input.focus();
    from.value = "";
    to.value = "1";
    
    
})

test = () => {
    console.log(from.options[from.selectedIndex].innerText);
    // console.log(to.options[to.selectedIndex].innerText);

}
(() => {
    if (localStorage.getItem("record")) {
        
        history_list.innerHTML = localStorage.getItem("record");
    }else{
        history_list.innerHTML = `<tr id="Trspacer"><td id="Trspace"colspan="4">There is no record.</td></tr>`;
    }
    
})();

// let b = a.split(",");
// let first = b[0];
// let sec = b[1];
// let dataValue = first.concat(sec);
// console.log(strArr);
ChgMode=()=>{
    document.body.classList.toggle("night-mode");
    document.getElementById("node-icon").classList.toggle("fa-sun");
}
