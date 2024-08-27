const express = require('express');
const app = express();
const herramientasRoutes = require("./src/routes/herramientasRoutes");
app.use("/", herramientasRoutes);
const port = 3131;
app.listen(port, () => {
	console.log(`El servidor corre en el puerto ${port}`);
});
app.set("view engine", "ejs");
app.set("views", "./src/views");