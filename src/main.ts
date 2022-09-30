import express, {Request, Response} from 'express';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
app.listen(port, () => console.log(`listen on http://localhost:${port}/`));


/*function say(message: string): void {
    console.log(`I said: ${message}`);
}
say("Hello");
*/