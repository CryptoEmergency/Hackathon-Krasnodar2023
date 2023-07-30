export const loader = function () {
    this.Static.bank = {
        name: "",
        credit: []
    }

    this.Static.button = "add"
    this.Static.count = 1

    this.Static.key = {}

    fetch("/api/open/applications/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter: {} }),
    })
        .then((response) => response.json())
        .then((data) => {
            this.recordsApplications = data
            this.init()
        });
    
    fetch("/api/open/Bank", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter: {} }),
    })
        .then((response) => response.json())
        .then((data) => {
            this.records = data
            this.init()
        });

        fetch("/api/open/Bank/set", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ filter: {} }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.records = data
                this.init()
            });

            fetch("/api/user/key/set", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ filter: {} }),
            })
                .then((response) => response.json())
                .then((data) => {
                    this.records = data
                    this.init()
                });
}
