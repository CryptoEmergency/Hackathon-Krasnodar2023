export const loader = function () {
    console.log(this.Static.item)
    this.Static.sber = {
        active: false,
        approved: false,
        time: 3000,
    }

    this.Static.alfa = {
        active: false,
        approved: false,
        time: 5000,
    }

    this.Static.raiffeisen = {
        active: false,
        approved: false,
        time: 6000,
    }

    setTimeout(() => {
        this.Static.sber.active = true
        this.Static.sber.approved = Math.random() < 0.5
        this.init()
    }, this.Static.sber.time);

    setTimeout(() => {
        this.Static.alfa.active = true
        this.Static.alfa.approved = Math.random() < 0.5
        this.init()
    }, this.Static.alfa.time);

    setTimeout(() => {
        this.Static.raiffeisen.active = true
        this.Static.raiffeisen.approved = Math.random() < 0.5
        this.init()
    }, this.Static.raiffeisen.time);
}
