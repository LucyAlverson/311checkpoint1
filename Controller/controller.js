const getAllUsers = (req, res) => {
    // perform some logic to get user from the database
    res.json(users)
  }

// make the function available globally as a property on this anonymous object
module.exports = {
  getAllUsers
}

const findWithQuery = () => {
    const users = []
    if (req.body.query) {
      // go find users that match that query
      const users = await db.find(query)
    }
    if (!users.length) {
      // no users, throw error
      res.status(404).send('No users found')
    }
    res.json(users)
  }

  // exports each of the functions/methods we build as an object
  module.exports = {
    findWithQuery
    // other methods could be listed here with a ',' after each.
  }