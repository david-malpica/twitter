const UserService = require('../../app/services/UserService')
describe("Test for User service", () => {
    test("1) New user with User Service", () => {
        const user = UserService.create(1,"david_mg","David")
        expect(user.id).toBe(1)
        expect(user.username).toBe("david_mg")
        expect(user.name).toBe("David")
    })
    test("2 Get info in a new list", () => {
        const user = UserService.create(1,"david_mg","David")
        const userInfo = UserService.getInfo(user)
        expect(userInfo[0]).toBe(1)
        expect(userInfo[1]).toBe("david_mg")
        expect(userInfo[2]).toBe("David")
        expect(userInfo[3]).toBe("Sin bio")
    })
    test ("3 Update Username", () => {
        const user = UserService.create(1,"david_mg","David")
        UserService.updateUsername(user,"david_malp")
        expect(user.username).toBe("david_malp")
    })
    test("4 Make a list of users with usernames",() => {
        const user1 = UserService.create(1,"david_mg1","David")
        const user2 = UserService.create(1,"david_mg2","David")
        const user3 = UserService.create(1,"david_mg3","David")
        const usernames = UserService.getAllUserNames([user1, user2, user3])
        expect(usernames).toContain("david_mg1")
        expect(usernames).toContain("david_mg2")
        expect(usernames).toContain("david_mg3")
    })
})