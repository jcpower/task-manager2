require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fff4ad2208aa0719445509e', { age: 1 }).then((user) =>{
//     console.log(user)
//     return User.countDocuments({ age: 0 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count 
}

updateAgeAndCount('5fff4ad2208aa0719445509e', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})