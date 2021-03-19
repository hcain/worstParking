const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.static("dist"));
app.get("/api", async (req, res) => {
  try {
    const location = req.query.location;
    const responseForOffset = await axios.get(
      "https://api.yelp.com/v3/businesses/search?categories=parking&sort_by=rating&location=" +
        location,
      {
        headers: {
          Authorization:
            "Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx",
        },
      }
    );
    const offset = responseForOffset.data.total - 20;
    const response = await axios.get(
      "https://api.yelp.com/v3/businesses/search?categories=parking&sort_by=rating&location=" +
        location +
        "&offset=" +
        offset,
      {
        headers: {
          Authorization:
            "Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
