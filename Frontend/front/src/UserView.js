fetch('localhost:5000/user/view/<id_Usera>', {
    "method": "GET"
}).then(resposne => response.json()).then(data => {
    let imie = data.imie
    let nazwisko = data.nazwisko
})


