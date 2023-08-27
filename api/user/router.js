const express = require('express')
const app = express();

const router = express.Router()
app.use(express.json());



const { SignUp, Dummy, Login, allUsers, getUserbyEmail,userbyEmail, deleteUser, updateUser } = require('./controller')
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.post('/users', Dummy)
router.post('/signup', SignUp)
router.post('/login', Login)
router.get('/getallusers', allUsers)
router.get('/userbyemail/:email', getUserbyEmail)
router.get('/getuserbyemail', userbyEmail) // this is done using query params
router.delete('/deleteuser', deleteUser) 
router.put('/updateuser', updateUser)




module.exports = router