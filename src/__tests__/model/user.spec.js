import User from "../../model/User";

const resetUser = () => {
    return new User({
        email: "roland@kuku.com",
        firstName: "toto",
        lastName: "tata",
        age: 18
    });
}

let user;

describe("User tests", () => {

    beforeEach(() => {
        user = resetUser();
    });


    it("should fail because email is invalid", () => {
        user.email = "toto";
        expect(user.isValid()).toBe(false);
    });

    it("should fail because firstName is empty", () => {
        user.firstName = "";
        expect(user.isValid()).toBe(false);
    });

    it("should fail because lastName is empty", () => {
        user.lastName = "";
        expect(user.isValid()).toBe(false);
    });

    it("should fail user is too young", () => {
        user.age = 10;
        expect(user.isValid()).toBe(false);
    });

        it("should be valid", () => {
            expect(user.isValid()).toBe(true);
    });

    afterAll(() => {
        user = {};
    });
});
