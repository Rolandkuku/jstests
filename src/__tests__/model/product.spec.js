import expect from "expect";
import Product from "../../model/Product";
import User from "../../model/User";

let product;

const resetProduct = () => {
    return new Product({
        name: "GTX 1080",
        activated: true,
        owner: new User({
            email: "roland@toto.com",
            firstName: "toto",
            lastName: "tata",
            age: 18
        })
    });
}

describe("Product tests", () => {
    beforeEach(() => {
        product = resetProduct();
    });

    it("should pass", () => {
        expect(product.isValid()).toBe(true);
    });

    it("should fail because product as no name", () => {
        product.name = "";
        expect(product.isValid()).toBe(false);
    });

    it("should fail because product name is not a string", () => {
        product.name = 1000;
        expect(product.isValid()).toBe(false);
    });

    it("should fail because product is not activated", () => {
        product.activated = false;
        expect(product.isValid()).toBe(false);
    });

    it("should fail because owner is not valid", () => {
        product.owner = 8;
        expect(product.isValid()).toBe(false);
    });

    afterAll(() => {
        product = {};
    });
});
