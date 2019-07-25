const handleSignIn = (DATABASE, bcrypt) => (req, res) => {
  DATABASE.select("email", "hash")
    .from("login")
    .where({ email: req.body.email })
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return DATABASE.select("*")
          .from("users")
          .where({ email: req.body.email })
          .then(user => res.json(user[0]))
          .catch(err => res.status(400).json("unable to find that user"));
      }
    })
    .catch(err => res.status(400).json("Invalid username or password"));
};

module.exports = {
  handleSignIn
};
