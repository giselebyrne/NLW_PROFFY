const subjects = [
    "Biologia",
    "Ciências",
    "Educação física",
    "Artes",
    "Química",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
]

const weekdays = [
    "Quarta-feira",
    "Domingo",
    "Terça-feira",
    "Segunda-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}