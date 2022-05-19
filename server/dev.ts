import express, { Request, Response } from "express";
const dev = process.env.NODE_ENV !== "production";
import next from "next";
import cors from "cors"

const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.NEXT_PUBLIC_PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(cors()).all("*", (req: Request, res: Response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        return res.status(200).json({});
      }
      return handle(req, res);

    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();