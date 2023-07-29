export const loader = function () {
    this.Static.sber = {
        active: false,
        time: 3000,
    }

    this.Static.alfa = {
        active: false,
        time: 5000,
    }

    this.Static.raiffeisen = {
        active: false,
        time: 6000,
    }

    setTimeout(() => {
        this.Static.sber.active = true
        this.init()
    }, this.Static.sber.time);

    setTimeout(() => {
        this.Static.alfa.active = true
        this.init()
    }, this.Static.alfa.time);

    setTimeout(() => {
        this.Static.raiffeisen.active = true
        this.init()
    }, this.Static.raiffeisen.time);
}
