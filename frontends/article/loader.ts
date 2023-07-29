export const loader = function () {
    // fetch("/api/open/Institute", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ filter: {} }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     });

    fetch("/api/user/Org/get", {
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