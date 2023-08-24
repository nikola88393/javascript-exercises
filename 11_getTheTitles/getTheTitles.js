const getTheTitles = function(obj) {
    let books = [];
    obj.forEach(element => {
        books.push(element.title);
    });

    return books;

};

// Do not edit below this line
module.exports = getTheTitles;
