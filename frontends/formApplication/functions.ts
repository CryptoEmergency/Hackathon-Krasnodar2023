const fn = {
    "validateEmail": function (email) {
        console.log(email)
        return email
    .toLowerCase()
    .match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    }
}

export { fn }
