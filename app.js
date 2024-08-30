const express = require('express');
const app = express();
const herramientasRoutes = require("./src/routes/herramientasRoutes");
const ordenesservicioRoutes = require("./src/routes/ordenesservicioRoutes");
const terceroRoutes = require('./src/routes/terceroRoutes')
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/", herramientasRoutes);
app.use("/ordenDeServicio", ordenesservicioRoutes);
app.use('/tercero', terceroRoutes)
const port = 3131;
app.listen(port, () => {
	console.log(`El servidor corre en el puerto ${port}`);
});
