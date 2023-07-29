export const loader = function () {
    this.Static.bank = {
        name: "",
        credit: []
    }

    fetch("/api/open/Bank/set", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ insert: {} }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("=Bank=", data);
        });
}
