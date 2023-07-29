
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export const loader = function () {
    this.Static.bank = {
        name: "",
        credit: []
    }
    // const iv = crypto.getRandomValues(new Uint8Array(16));
    console.log(makeid(16))
    // fetch("/api/user/bank/set", {
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
}
