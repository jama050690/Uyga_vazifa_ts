"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryService = void 0;
const libraries = [
    {
        id: 1,
        name: "Alisher Navoiy Kutubxonasi",
        address: "Toshkent, Chilonzor tumani",
        booksCount: 12000,
        isOpen: true
    },
    {
        id: 2,
        name: "Yoshlar Kutubxonasi",
        address: "Samarqand, Registon ko'chasi",
        booksCount: 5400,
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
        const library = {
            id: nextId++,
            name: payload.name,
            address: payload.address,
            booksCount: payload.booksCount,
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
        Object.assign(library, payload);
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
