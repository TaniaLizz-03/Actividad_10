const list = document.getElementById("lista");

var pers = ['Robert Moon', 'Lolon Musk', 'Max Steel', 'Tania Lizz']

const agregarPersonas = () => {
    var nombre = document.getElementById("nombre");
    list.innerHTML = '';
    pers.push(nombre.value);

    mostrarValores();
    nombre.value = "";

}

const  mostrarValores = () => { 
    pers.map(element => { 
        var li = document.createElement('li');
        li.innerHTML = element;
        list.appendChild(li);
    })
}

const borrarValores = () => {
    list.innerHTML = '';
    pers = [];

}

mostrarValores();