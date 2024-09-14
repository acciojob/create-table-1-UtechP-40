function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable");
	// let tr = document.
  let tr = table.insertRow(0);
  let td = tr.insertCell()
	td.innerText ="New cell1"
	let td2 = tr.insertCell()
	td2.innerText ="New cell2"
}
