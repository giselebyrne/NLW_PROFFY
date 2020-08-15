const Database = require('./db')
const createProffy = require('./createProffy')
const { select } = require('async')

Database.then(async (db) => {
    //Inserir Dados

    proffyValue = {
        name: "Joana Ramos",
        avatar: "https://avatars1.githubusercontent.com/u/58141994?s=460&u=15765749f2801330b9a6b7cad6cd62b2c6d2a393&v=4",
        whatsapp: "984562147",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>",
    }

    classValue = {
        subject: 3,
        cost: "50",
        // o proffy id virá pelo banco de dados
    }
    
    classScheduleValues = [
        // class_id virá pelo Banco de Dados, após cadastrarmos a class
        {
            weekday: 2,
            time_from: 620,
            time_to: 1200  
        },
        {
            weekday: 3,
            time_from: 820,
            time_to: 1220
        }
    ]
    
    await createProffy(db, {proffyValue, classValue, classScheduleValues});
    
    //Consultar os Dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("select * from proffys")
    //console.log(selectedProffys)
    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        select classes.*, proffys.*
        from proffys
        join classes on (classes.proffy_id = proffys.id)
        where classes.proffy_id = 8;
    `)
    //console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha, é das 08h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima 
    const selectedClassesSchedules = await db.all(`
        select class_schedule.*
        from class_schedule 
        where class_schedule.class_id = "1"
        and class_schedule.weekday = "0"
        and class_schedule.time_from <= "520"
        and class_schedule.time_to > "1300"
    `)
    //console.log(selectedClassesSchedules)
})