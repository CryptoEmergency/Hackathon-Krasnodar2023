export const loader = function () {

    fetch("/api/open/Bank", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter: {} }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.records=data
            this.init()
        });


}