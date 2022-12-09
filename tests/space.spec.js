const request = require('supertest');
const app = require("../src/index");

describe('User Listing Test', () => {
    it('tests /users endpoints', async() => {
        const response = await request(app).get("/users");
        expect(response.body).toEqual([{"id":1,"email":"alice@prisma.io","name":"Alice"},{"id":2,"email":"nilu@prisma.io","name":"Nilu"},{"id":3,"email":"mahmoud@prisma.io","name":"Mahmoud"}]);
        expect(response.body).toHaveLength(3);
        expect(response.statusCode).toBe(200);
        // Testing a single element in the array

    });
});