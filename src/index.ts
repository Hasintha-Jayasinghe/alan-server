import express from "express";
import { Wit } from "node-wit";
import cors from "cors";

const witClient = new Wit({
  accessToken: "DFFZZROOUDCZGL7OU3MXY77PX4R554HA",
});

const app = express();
app.use(cors());

app.get("/chat", async (req, res) => {
  const witRes = await witClient.message(req.query?.msg as string, {});
  res.send(JSON.stringify({ res: witRes }));
});

app.listen(4500, () =>
  console.log("Server Started on port 4500. http://localhost:4500")
);
