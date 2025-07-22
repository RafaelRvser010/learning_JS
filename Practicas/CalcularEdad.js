const c_date = new Date()
let c_year = c_date.getFullYear()
console.log(c_year)

function calculateAge(b_year){
    let c_age = c_year - b_year
    return `Your current age is ${c_age}`
}

console.log(calculateAge(2002))