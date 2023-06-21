const express = require('express')
const path = require('path')
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const mergePdfs = require("./merge.js");
const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/index.html"))
})

app.post("/merge", upload.array("pdfs", 12), async (req, res) => {
    console.log(req.files);

    let date = new Date().getTime();
    let resp = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect("http://localhost:3000/static/" + resp);
    // res.send({"data": req.files});
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})