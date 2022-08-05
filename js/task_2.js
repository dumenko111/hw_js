const total = 100 
const ordered = 130

const acceptOrder = function (total, ordered) {
    if (ordered > total) {
    return  "На складі недостатньо товарів!"
} 
    return  "Замовлення оформлене, з вами зв'яжеться менеджер"
}

console.log(acceptOrder(total, ordered))
