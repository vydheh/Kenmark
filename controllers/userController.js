const models = require('../utils/allModels');
const jwt = require('jsonwebtoken')
const trade_secret = "MY_SECRET_KEY"

exports.UserLogin = async (req, res, next) => {
  try {
    console.log('here');
      const user = req.body;
      const token = jwt.sign({ name: user.name, mobilenumber: user.mobilenumber, password: user.password , Dateofbirth : user.Dateofbirth , Gender : user.Gender },trade_secret);
      return res.json({
          message: "Login Successfully",
          name: user.name,
          token: token
      })
  } catch (err) {
      return res.status(404).json({ error: err.message })
  }
}

exports.adduser = async (req ,res) =>{
  console.log('here');
    const { name  ,mobilenumber, password ,Dateofbirth , Gender } = req.body;
    const addClause =  {
        name: name,
        mobilenumber: mobilenumber,
        password : password,
        Dateofbirth : Dateofbirth,
        Gender : Gender
      };

    const getUser =  await models.user_Model.findOne({
        where: {
          mobilenumber: mobilenumber
        }
      })

    if(getUser) return res.json({error:'User Already Exist'})
    const adduser = await models.user_Model.create(addClause);
    return res.json({message:'user added successfully'});

}


  exports.readUser = async (req,res) =>{
    const {mobilenumber} = req.body;
    const user_details = await models.user_Model.findOne({
        attributes: ['name'],
        where: {
          mobilenumber: mobilenumber,
        }
      });
      return res.json({message:'user read successfully',user_details});

  }

  exports.updateUser = async (req,res) =>{
    const {newpassword , password} = req.body;
    await models.user_Model.update({ password: newpassword }, {
        where: {
          password: password
        }
      });
      return res.json({message:'user updated successfully'});
  }

  exports.deleteUser = async (req,res) =>{
    const{mobilenumber} = req.body;
    await models.user_Model.destroy({
        where: {
          mobilenumber: mobilenumber
        }
      });
      return res.json({message:'user deleted successfully'});
  }