export default class Author {

    constructor(firstName, lastName, bornYear) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.bornYear = bornYear;
        this.books = [];
    }

    isClassic() {
        return (this.bornYear < 1950);
    }

    addBook(book) {
        this.books.push(book);
    }
}