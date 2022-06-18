import Express from "express";

const app = Express();
const port = process.env.PORT || 8080;

app.use(Express.static('client/dist/'));

app.get('/', (req, res) => {
    res.sendFile('client/dist/index.html')
});

app.listen(port, () => console.log(`listening on localhost:${port}`));