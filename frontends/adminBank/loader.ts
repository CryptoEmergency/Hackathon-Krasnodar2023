export const loader = function () {
    this.Static.credit = []

    fetch("/api/open/Bank", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter: {} }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("=Bank=", data);
        });
}
