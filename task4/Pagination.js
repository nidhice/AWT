let PageNo = 0;
var data = new Array();
data.push(["Nidhi", "nidhi13@gmail.com", "Porbandar"]);
data.push(["Parhvi", "parthvi@gmail.com", "Surat"]);
data.push(["Hitanshi", "hitanshi@gmail.com", "Porbandar"]);
data.push(["Hinal", "hinal@gmail.com", "Ahemdabad"]);
data.push(["Aum", "om@gmail.com", "Diu"]);
data.push(["Prince", "princu@gmail.com", "Porbandar"]);
data.push(["Vansh", "vanshu11@gmail.com", "Porbandar"]);
data.push(["Mital", "mitl16@gmail.com", "Porbandar"]);
data.push(["Janvi", "janu11@gmail.com", "Porbandar"]);
data.push(["Anjana", "anjana10@gmail.com", "Porbandar"]);
data.push(["Vishva", "vish18@gmail.com", "Ahemdabad"]);
data.push(["Vivan", "vivan12@gmail.com", "Porbandar"]);
data.push(["Nirali", "nirali9@gmail.com", "Porbandar"]);
data.push(["Aaryan", "aaru3@gmail.com", "Porbandar"]);
data.push(["Krisha", "krish5@gmail.com", "Porbandar"]);
data.push(["Siya", "Siya5@gmail.com", "Ahemdabad"]);
data.push(["Devam", "devam31@gmail.com", "Ahemdabad"]);

window.onload = function () {
    console.log("loaded");
    createTable(data);
    createButtons();
}



function createTable(arr, index = 0) {
    var table = document.getElementById("TableID").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    var end = Math.min(index + 4, arr.length);
    for (var i = index; i < end; i++) {
        var row = table.insertRow(-1);
        for (const data of arr[i]) {
            var cell = row.insertCell(-1);
            cell.innerHTML = data;
        }
    }
    var spacing = document.createElement("br");
    body.appendChild(spacing);
}

function createButtons() {
    var body = document.getElementById("body");
    var div = document.createElement("div");

    // prev
    var Prev = document.createElement("button");
    Prev.onclick = function () {
        if (PageNo > 0) {
            PageNo--;
            var index = PageNo * 4;
            createTable(data, index);
        }
    };
    Prev.innerHTML = "Prev";
    div.appendChild(Prev);

    // numbers
    var btns = Math.ceil(data.length / 5);
    for (var i = 0; i < btns; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = i + 1;
        btn.value = i;
        btn.onclick = function () {
            NumberPages(this.value);
        };
        div.appendChild(btn);
    }

    // next
    var Next = document.createElement("button");
    Next.onclick = function () {
        var index = (PageNo + 1) * 4;
        if (index < data.length) {
            PageNo++;
            createTable(data, index);
        }
    };
    Next.innerHTML = "Next";
    div.appendChild(Next);

    // all buttons to div
    body.appendChild(div);
}

function NumberPages(Pages) {
    PageNo = parseInt(Pages);
    createTable(data, PageNo * 4);
}