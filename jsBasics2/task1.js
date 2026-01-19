const averageBrade = 101

if (averageBrade < 60) {
    console.log("Незадовільно")
}else if (averageBrade >= 60 && averageBrade <= 70){
    console.log("Задовільно")
}else if (averageBrade >= 71 && averageBrade <= 80){
    console.log("Добре")
}else if (averageBrade >= 81 && averageBrade <= 90){
    console.log("Дуже добре")
}else if (averageBrade >= 91 && averageBrade <= 100){
    console.log("Відмінно")
}else console.log("Нормально заповніть журнал!")