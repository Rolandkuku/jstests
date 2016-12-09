import User from "./User";
export default class Product {
    constructor (data = {}) {
        this.name = data.name || "";
        this.activated = data.activated || false;
        this.owner = data.owner || {};
    }

    isValid() {
        return this.nameIsNotEmpty() && this.isActivated() && this.hasOwner();
    }

    nameIsNotEmpty() {
        return typeof this.name === "string" && this.name.trim().length > 0;
    }

    isActivated() {
        return this.activated;
    }

    hasOwner() {
        return this.owner instanceof User && this.owner.isValid();
    }
}
