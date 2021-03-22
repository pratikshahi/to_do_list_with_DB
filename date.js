//jshint esversion:6

//exports allows other js to require date.js and use getDate function
exports.getDate = getDate;
function getDate() {
    const today = new Date();
    //took it from STackoverflow//to locale date string javascript
    //option is JS object

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    //variable day gets todays date in options mentioned
    return today.toLocaleDateString("en-US", options);

}
//using as a anonymous function
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",

    };

    return today.toLocaleDateString("en-US", options);

};
