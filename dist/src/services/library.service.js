"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryService = void 0;
const db_1 = require("../../db");
const libraries = [
    {
        id: 1,
        name: "Alisher Navoiy Kutubxonasi",
        address: "Toshkent, Chilonzor tumani",
        books: db_1.libraryBooks[1],
        booksCount: db_1.libraryBooks[1].length,
        isOpen: true
    },
    {
        id: 2,
        name: "Yoshlar Kutubxonasi",
        address: "Samarqand, Registon ko'chasi",
        books: db_1.libraryBooks[2],
        booksCount: db_1.libraryBooks[2].length,
        isOpen: false
    }
];
let nextId = libraries.length + 1;
exports.libraryService = {
    getAll() {
        return libraries;
    },
    getById(id) {
        return libraries.find((library) => library.id === id);
    },
    create(payload) {
        const books = payload.books ?? [];
        const library = {
            id: nextId++,
            name: payload.name,
            address: payload.address,
            books,
            booksCount: books.length,
            isOpen: payload.isOpen ?? true
        };
        libraries.push(library);
        return library;
    },
    update(id, payload) {
        const library = libraries.find((item) => item.id === id);
        if (!library) {
            return undefined;
        }
        if (payload.name !== undefined) {
            library.name = payload.name;
        }
        if (payload.address !== undefined) {
            library.address = payload.address;
        }
        if (payload.isOpen !== undefined) {
            library.isOpen = payload.isOpen;
        }
        if (payload.books !== undefined) {
            library.books = payload.books;
            library.booksCount = payload.books.length;
        }
        return library;
    },
    remove(id) {
        const index = libraries.findIndex((library) => library.id === id);
        if (index === -1) {
            return false;
        }
        libraries.splice(index, 1);
        return true;
    }
};
