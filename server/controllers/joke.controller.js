const Joke = require("../models/joke.model")

module.exports.findAllJokes = (req, res) => {
    //execute a query
    Joke.find()
        .then(allDaJokes => res.json({ Jokes: allDaJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        //what we return here is what we will receive in react!  Object vs. Array
        .then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json({ Joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
    //execute a query
    let joke;
    Joke.find()
    //how do I incorporate Math.floor(Math.random() * jokes.length)
        .then(jokes => {
            return joke = jokes[Math.floor(Math.random() * jokes.length]
        })
        .then(randomJoke => res.json({ Joke: randomJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

