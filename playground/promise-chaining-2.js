require('../src/db/mongoose')
const Task = require ('../src/models/task')

// Task.findByIdAndDelete('6002ff612ccd63c7dc030f23').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch ((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ complted: false})
    return count
}

deleteTaskAndCount('6003000012d197c81f073887').then((count) => {
    console.log(count)
}).catch((e) => {
console.log(e)
})