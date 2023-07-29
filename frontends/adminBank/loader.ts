export const loader = function () {
    this.Static.bank = {
        name: "",
        credit: []
    }

    fetch("/api/open/bank", {
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
