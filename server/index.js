const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const universeController = require("./controller/universeController");

app.use(bodyParser.json());


app.get("/api/universes", universeController.getUniversesDerp);
app.put("/api/universes/:id/:your_name", universeController.updateUniverse);
app.post("/api/universes", universeController.userAddUniverse);
app.delete("/api/universes/:id", universeController.universeDelete);


const PORT = 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));