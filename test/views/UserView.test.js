const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
    test("Return an error object when try create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("Return an error object when try create a new user with invalid properties", () => {
        const payload = {username: null, name: 12, id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan un valor valido/)
    })
    test("Return an error object when try create a new user with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })
    test("Create a user with valid information", () => {
        const payload = {username: "username", name: "name", id: 1}
        const result = UserView.createUser(payload)
        expect(result.username).toBe("username")
        expect(result.name).toBe("name")
        expect(result.id).toBe(1)
    })
})