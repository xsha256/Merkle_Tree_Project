const express = require('express');
const verifyProof = require('../utils/verifyProof');



const port = 1225;

const app = express();
app.use(express.json());
app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const name = body.name;
  const proof = body.proof;
  const MERKLE_ROOT = body.root


  // TODO: prove that a name is in the list 
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT)

  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
