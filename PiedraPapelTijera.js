let computer
let player

function getComputerChoice() {
    computer = Math.floor(Math.random() * 3) + 1

    switch (computer) {
        case 1:
            computer = "PIEDRA";
            break;
        case 2:
            computer = "PAPEL";
            break;
        case 3:
            computer = "TIJERA";
            break;
    }

    return(computer)
}

function getPlayerChoice() {
    let eleccion
    let valido = 0

    while (valido == 0) {
        eleccion = prompt("Piedra, papel o tijera?").toUpperCase()

        if (eleccion == "PIEDRA" || eleccion == "PAPEL" || eleccion == "TIJERA") {
            valido == 1
            return eleccion
        } else {
            alert("Opción no valida, vuelva a ingresar un valor")
        }
    }
}


function play(computer_choice, player_choice) {
    console.log("computer: " + computer_choice)
    console.log("player: " + player_choice)

    let mensaje

    if (computer_choice == player_choice) {
        mensaje = "Empate"
    } else if ((computer_choice == "PIEDRA" && player_choice == "PAPEL") || (computer_choice == "PAPEL" && player_choice == "TIJERA") || (computer_choice == "TIJERA" && player_choice == "PIEDRA")) {
        mensaje = "Esaaa, ganaste"
    } else if ((player_choice == "PIEDRA" && computer_choice == "PAPEL") || (player_choice == "PAPEL" && computer_choice == "TIJERA") || (player_choice == "TIJERA" && computer_choice == "PIEDRA")) {
        mensaje = "Perdiste, capo"
    } else {
        mensaje = "Error"
    }

    return mensaje
}

console.log(play(getComputerChoice(), getPlayerChoice()))