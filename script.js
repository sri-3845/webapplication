
const java = document.querySelector(".java")
const python = document.querySelector(".python")
const c = document.querySelector(".c")
const title = document.querySelector(".title")
const data = document.querySelector(".data")

const total = document.querySelector(".total")
const average = document.querySelector(".average")


total.addEventListener("click", totalHandler)
average.addEventListener("click", averageHandler)


function totalHandler(e){
	e.preventDefault();
	const totalMarks = parseInt(java.value || 0) + parseInt(python.value || 0) + parseInt(c.value || 0)
	title.innerText = "Total"
	data.innerHTML = totalMarks
	return totalMarks;
}

function averageHandler(e){
	e.preventDefault();
	const averageMarks = (totalHandler(e)) / 3
	title.innerText = "Average"
	data.innerHTML = averageMarks
	return averageMarks;
}