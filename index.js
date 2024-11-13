const express = require("express")
//setup express
const app = express();

const PORT = process.env.PORT || 3000

function doWork (task) {
    return `Task complete: ${task}`
}

//config your doors aka routes  verbs
app.get("/doWork", (request, response) => {
    //input
    const task = request.query.task;

    //dowork
    const result = doWork(task)


    //output
    //server output
    console.log(result)

    //client output
    // response.send(result)
    response.json({
        message: result
    })
})

app.get("/", (req, res) => res.send("This the default route.. 😀"))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))