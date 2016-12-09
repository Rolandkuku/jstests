import Product from "./Product";
import EmailSender from "./EmailSender";
import DBConnection from "./DBConnection";

export default class Exchange {

    constructor (data = {}) {
        this.product = data.product || new Product(),
        this.endDate = data.endDate;
        this.startDate = data.startDate;
        this.emailSender = new EmailSender();
        this.DBConnection = new DBConnection();
    }

    isProductValid () {
        return this.product.isValid();
    }

    isDateValid () {
        const now = new Date();
        if (
            this.startDate instanceof Date &&
            this.endDate instanceof Date &&
            this.startDate > now &&
            this.startDate < this.endDate
        ) {
            return true;
        }
        return false;
    }

    isOwnerOldEnough () {
        if (!this.product.owner.isOldEnough()) {
            this.emailSender.sendEmail(this.product.owner.email, "Too young !");
            return false;
        }
        return true;
    }

    isValid () {
        return this.isProductValid() && this.isDateValid();
    }

    save (callback) {
        if (this.isOwnerOldEnough() && this.isValid()) {
            this.DBConnection.save({
                startDate: this.startDate,
                endDate: this.endDate,
                productName: this.product.name,
                owner: this.product.owner.email
            }, (response) => {
                callback(response);
            });
        } else {
            callback({status: "error"});
        }
    }
}
