export const loader = function () {
    this.Static.centr = {
        active: false,
        approved: false,
        time: 2000,
    }

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
        this.Static.centr.active = true
        this.Static.centr.approved = Math.random() < 0.7
        this.init()
    }, this.Static.centr.time);

    setTimeout(() => {
        this.Static.sber.active = true
        this.Static.sber.approved = Math.random() < 0.7
        this.init()
    }, this.Static.sber.time);

    setTimeout(() => {
        this.Static.alfa.active = true
        this.Static.alfa.approved = Math.random() < 0.7
        this.init()
    }, this.Static.alfa.time);

    setTimeout(() => {
        this.Static.raiffeisen.active = true
        this.Static.raiffeisen.approved = Math.random() < 0.7
        this.init()
    }, this.Static.raiffeisen.time);

    fetch("/api/open/applications/set", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter: {} }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}
