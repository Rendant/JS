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
		let btn = document.createElement('button')
		btn.textContent = 'подробнее'
		$(btn).on('click', function() {
			show_info(i)
		})

		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname

		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		tr.appendChild(btn)

		table.appendChild(tr)
	} 
}

function show_info(id) {
	let div = document.getElementById('info')

	let h1 = document.createElement('h1')
	h1.textContent = 'Информация о студенте №' + students[id].id

	div.innerHTML = ''

	div.appendChild(h1)

}

function load_from_site() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response']
	});
}

function load_student(id) {
	$('#zagolovok').text('Информация о студенте №' + students[id].id)
	$('#name').text(students[id].name)
	$('#surname').text(students[id].surname)

	if (id == students.length - 1) {
		$('#button_next').attr({'disabled':true})
	}
	else {
		$('#button_next').attr({'disabled':false})	
	}
	if (id == 0) {
		$('#button_previous').attr({'disabled':true})
	}
	else {
		$('#button_previous').attr({'disabled':false})	
	}

	$('#logo').attr({'src':'http://217.71.129.139:4035/' + students[id].logo})
	$('#mark1').text(students[id].scores[0])
	$('#mark2').text(students[id].scores[1])
	$('#mark3').text(students[id].scores[2])
	$('#mark4').text(students[id].scores[3])
	$('#mark5').text(students[id].scores[4])
	$('#aver').text((Number(mark1.textContent) + Number(mark2.textContent) + Number(mark3.textContent) + Number(mark4.textContent) + Number(mark5.textContent)) / 5)
}

function next_student() {
	id_info += 1
	load_student(id_info)
}

function previous_student() {
	id_info -= 1
	load_student(id_info)
}

function all_upd() {
		load_all()
		$('#btn_all_upd').css({'display':'none'})
}
