const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Currently under construction, come back later')
//     })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('604628290a8aacb72107c9a1')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('604627470b3cdbb69d0c39bb')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks) 

}

main()
