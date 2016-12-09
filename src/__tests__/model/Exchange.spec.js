import expect from "expect";
import Exchange from "../../model/Exchange";
import Product from "../../model/Product";
import User from "../../model/User";

describe("Exchange Tests", () => {

    const resetExchange = () => {
        const startDate = new Date();
        startDate.setHours(startDate.getHours() + 4);
        const endDate = new Date();
        endDate.setHours(endDate.getHours() + 8);
        return new Exchange({
            startDate: startDate,
            endDate: endDate,
            product: new Product({
                name: "Abo toto",
                activated: true,
                owner: new User({
                    email: "roland@kuku.com",
                    firstName: "toto",
                    lastName: "tata",
                    age: 18
                })
            })
        });
    }

    let exchange;

    beforeEach(() => {
        exchange = resetExchange();
        exchange.DBConnection.save = jest.fn((data, callback) => {
            return {
                status: "ok"
            };
        });
    });

    it("should pass", () => {
        expect(exchange.isValid()).toBe(true);
    });

    it("should fail because product is not valid", () => {
        exchange.product.name = "";
        expect(exchange.isProductValid()).toBe(false);
    });

    it("should fail because date is not valid", () => {
        exchange.endDate = new Date();
        expect(exchange.isDateValid()).toBe(false);
    });

    it("sould save the exchange", () => {
        exchange.save((response) => {
            expect(response.status).toEqual("ok");
        });
    });

    it("sould fail to save because exchange is not valid", () => {
        exchange.endDate.setHours();
        exchange.save((response) => {
            expect(response.status).toEqual("error");
        });
    });

    it("sould send an email because the owner is too young", () => {
        exchange.product.owner.age = 2;
        exchange.emailSender.sendEmail = jest.fn();
        exchange.isOwnerOldEnough();
        expect(exchange.emailSender.sendEmail.mock.calls.length).toBe(1);
    });
});
