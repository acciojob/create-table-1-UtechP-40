function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable")
  let tr = table.insertRow();
  let td = tr.insertCell()
	td.innerText ="Row3 cell1"
	let td2 = tr.insertCell()
	td2.innerText ="Row3 cell2"
}
