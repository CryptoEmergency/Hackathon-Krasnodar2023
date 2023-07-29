export const loader = function () {
    this.Static.time = {
        one: 1000,
        two: 2000,
        three: 3000,
        four: 4000,
        five: 5000,
        six: 6000
    }

    this.Static.timer = setInterval(() => {
        
    }, 2000);
}
