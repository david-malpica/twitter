const User = require('./../models/user')

class UserService  {
    static create(id,username,name){
        return new User(id,username,name, "Sin bio")
    }
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUsername(user, username){
        user.setUsername = username
    }
    static getAllUserNames(users){
        const usersUsernames = users.map(user => user.username)
        return usersUsernames
    }
}
module.exports = UserService;