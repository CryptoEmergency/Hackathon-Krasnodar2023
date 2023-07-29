export const loader = function () {
    this.Static.button = "university"
    this.Static.university = {
        bankCredit: []
    }
    this.Static.specialization = {}
    this.initAuto("button")

    fetch("/api/user/institute/set", {
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

    fetch("/api/user/specialization/set", {
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
