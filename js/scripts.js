let students = []
let id_info = 0

function load_all() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname

		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')

		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname

		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)

		table.appendChild(tr)
	}
}

function load_from_site() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response']
	});
}

function load_student(id) {
	let head = document.getElementById('zagolovok')
	head.textContent = 'Информация о студенте №' + students[id].id
	let name_info = document.getElementById('name')
	name_info.textContent = students[id].name
	let surname_info = document.getElementById('surname')
	surname_info.textContent = students[id].surname

	if (id == students.length - 1) {
		let button_next = document.getElementById("button_next").disabled = true;
	}
	else {
		let button_next = document.getElementById("button_next").disabled = false;
	}
	if (id == 0) {
		let button_previous = document.getElementById("button_previous").disabled = true;
	}
	else {
		let button_previous = document.getElementById("button_previous").disabled = false;
	}

	let logo = document.getElementById('logo').src = 'http://217.71.129.139:4035/' + students[id].logo
	let mark1 = document.getElementById('mark1')
	mark1.textContent = students[id].scores[0]
	let mark2 = document.getElementById('mark2')
	mark2.textContent = students[id].scores[1]
	let mark3 = document.getElementById('mark3')
	mark3.textContent = students[id].scores[2]
	let mark4 = document.getElementById('mark4')
	mark4.textContent = students[id].scores[3]
	let mark5 = document.getElementById('mark5')
	mark5.textContent = students[id].scores[4]
	let average = document.getElementById('aver')
	average.textContent = (Number(mark1.textContent) + Number(mark2.textContent) + Number(mark3.textContent) + Number(mark4.textContent) + Number(mark5.textContent)) / 5
}
function next_student() {
	id_info += 1
	console.log(id_info)
	load_student(id_info)
}
function previous_student() {
	id_info -= 1
	console.log(id_info)
	load_student(id_info)
}
