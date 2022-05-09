const User = require('./../../app/models/user')
describe("Unit test for User class", ()=> {
    test('Create an user object', () => {
        const user = new User(7,"david_mg","David","...")
        expect(user.id).toBe(7)
        expect(user.username).toBe("david_mg")
        expect(user.name).toBe("David")
        expect(user.bio).toBe("...")
        expect(user.dateCreated).not.toBeUndefined()
    })
    test('Add getters', () => {
        const user = new User(1,"carlogilmar","Carlo","Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('Add setters', () => {
        const user = new User(1,"David","David","Bio")
        user.setUsername = "David Malpica"
        expect(user.username).toBe("David Malpica")

        user.setBio = "Bio: ..."
        expect(user.bio).toBe("Bio: ...")
    })
})