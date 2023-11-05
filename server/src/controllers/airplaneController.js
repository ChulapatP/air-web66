const { where } = require('sequelize')
const{Airplane} = require('../models')
module.exports = {
  //get all airplane
  async index (req, res) {
    try {
      const airplanes = await Airplane.findAll()
      res.send(airplanes)
    } catch (error) {
      res.status(500).send({
         error: 'The airplanes information was incorrect'
        })
    }
   
  },

  //create airplane
  async create(req, res) {
    try {
      const airplane = await Airplane.create(req.body)
      res.send(airplane.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The create airplane information was incorrect'
        })
    }
  },

  //edit airplane
  async put(req, res) {
    try {
      await Airplane.update(req.body,{
      where: {
        id: req.params.airplaneId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update airplane information was incorrect'
        })
    }
  },

  // delete airplane
  async delete(req, res) {
    try {
      const airplane = await Airplane.findOne({
        where: {
          id: req.params.airplaneId
        }
      })
      if (!airplane) {
        return res.status(403).send({
          error: 'The airplane id is not found'
        })
      }
      await airplane.destroy()
      res.send(airplane)
    } catch (error) {
      res.status(500).send({
        error: 'Delete airplane information was incorrect'
       })
    }
  },

  // show airplane by id
  async show (req, res) {
    try {
      const airplane = await Airplane.findOne({
        where: {
          id: req.params.airplaneId
        }
      })
      if (!airplane) {
        return res.status(403).send({
          error: 'The airplane id is not found'
        })
      }

      res.send(airplane)
    } catch (error) {
      res.status(500).send({
        error: 'airplane information was incorrect'
       })
    }
  }
}