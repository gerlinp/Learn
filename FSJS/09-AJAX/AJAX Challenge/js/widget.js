var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText)
    var statusHTML = '<ul class="bulleted">'
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">'
      } else {
        statusHTML += '<li class="out">'
      }
      statusHTML += employees[i].name
      statusHTML += '</li>'
    }
    statusHTML += '</ul>'
    document.getElementById('employeeList').innerHTML = statusHTML
  }
}
xhr.open('GET', 'data/employees.json')
xhr.send()

let roomsRequest = new XMLHttpRequest()
roomsRequest.onreadystatechange = function () {
  if (roomsRequest.readyState === 4 && roomsRequest.status === 200) {
    const rooms = JSON.parse(roomsRequest.responseText)
    let roomsHTML = '<ul class="rooms">'
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        roomsHTML += `<li class="full">`
      } else {
        roomsHTML += `<li class="empty">`
      }

      roomsHTML += rooms[i].room
      roomsHTML += '</li>'
    }
    roomsHTML += '</ul>'
    document.getElementById('roomList').innerHTML = roomsHTML
  }
}
roomsRequest.open('GET', 'data/rooms.json')
roomsRequest.send()
