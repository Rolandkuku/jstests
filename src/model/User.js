import DBConnection from "./DBConnection";
import EmailSender from "./EmailSender";
export default class User {
    constructor (data = {}) {
        this.email = data.email || "";
        this.firstName = data.firstName || "";
        this.lastName = data.lastName || "";
        this.age = data.age || "";
    }

    isValid () {
        return this.isEmailValid() && this.namesExist() && this.isOldEnough();
    }

    isEmailValid () {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email);
    }

    namesExist () {
        return this.firstName.trim().length > 0 && this.lastName.trim().length > 0;
    }

    isOldEnough () {
        return this.age > 12;
    }
}
