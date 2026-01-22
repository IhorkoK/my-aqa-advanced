const averageBrade = 60

switch(true){
    case averageBrade < 60:
        console.log("Незадовільно");
        break;
    case averageBrade >= 60 && averageBrade <= 70:
        console.log("Задовільно");
        break;
    case averageBrade >= 71 && averageBrade <= 80:
        console.log("Добре");
        break;
    case averageBrade >= 81 && averageBrade <= 90:
        console.log("Дуже добре");
        break;
    case averageBrade >= 91 && averageBrade <= 100:
        console.log("Відмінно");
        break;
    default: 
        console.log("Заповніть журнал нормально")
}



