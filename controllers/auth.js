const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(400).json({ message: 'Wrong email or password.' });
    }
    bcrypt.compare(password, admin.password, (err, isEqual) => {
      if (isEqual === true) {
        res.status(200).json({ message: 'Logged In successfuly!' });
      } else {
        res.status(400).json({ message: 'Wrong email or password.' });
      }
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'An error occured.' });
  }
}

// Main admin only

// exports.signup = (req, res) => {
//   const { email, password } = req.body;
//   try {
//     bcrypt.hash(password, 12, async (err, hash) => {
//       if (err) throw err;
//       await Admin.create({ email, password: hash });
//       return res.status(200).json({ message: 'Success!' });
//     });
//   } catch (error) {
//     res.status(400).json({ message: 'An error occured.' });
//   }
// }