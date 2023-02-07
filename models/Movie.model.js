const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
    {
      title: {
        type: String,
      },
      genre: {
        type: String,
      },
      plot: String,
      cast: [Object],
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  )
  
  const Movie = model('Movie', movieSchema)
  
  module.exports = Movie