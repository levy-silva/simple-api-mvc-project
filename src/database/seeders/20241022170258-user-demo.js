'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { id: "1e4c1e2a-85f1-4b5a-943e-1c21dcd1b729", name: "Alice", email: "alice@example.com", role: "admin", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "b3de2045-b0bc-46a7-8247-70c8a91e6486", name: "Bob", email: "bob@example.com", role: "customer", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "a9d8cb98-8f7e-4c6b-bff2-998d808d91a6", name: "Charlie", email: "charlie@example.com", role: "vendor", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "3ad45810-2261-4cb6-bdd4-e908df205b44", name: "Diana", email: "diana@example.com", role: "admin", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "1f7d60d4-bc97-442b-ae8d-2677b1b2a84c", name: "Eve", email: "eve@example.com", role: "customer", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "0d44f869-3527-4b50-8cb6-1de72dd0be71", name: "Frank", email: "frank@example.com", role: "vendor", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "55c62e24-35af-4be6-90a2-7c0e23247c5d", name: "Grace", email: "grace@example.com", role: "admin", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "d9456e60-e31f-4b06-b1ea-449bca731d6d", name: "Henry", email: "henry@example.com", role: "customer", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "eb7b4a10-cf9c-438f-9f4c-9b0d02054148", name: "Ivy", email: "ivy@example.com", role: "vendor", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "45d07d6f-e62b-4cc4-a8e5-e6f67cb1b5b3", name: "Jack", email: "jack@example.com", role: "admin", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "d6352ae2-1aa2-4b08-80aa-e35fc9a3b846", name: "Karen", email: "karen@example.com", role: "customer", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "e38fd634-761b-46b2-b5ea-b64bcb0eb9c1", name: "Leo", email: "leo@example.com", role: "vendor", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "b6354317-c01f-42f6-949e-f67c01485c3a", name: "Mia", email: "mia@example.com", role: "admin", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "e7bce5d2-6b28-480d-8750-1cf756d4a69b", name: "Nina", email: "nina@example.com", role: "customer", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "611fb37e-0af8-4215-a451-4b99e16f22f0", name: "Oscar", email: "oscar@example.com", role: "vendor", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "f5c57b64-56d4-4750-84bb-dc8b62001a08", name: "Paul", email: "paul@example.com", role: "admin", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "b9d68d93-161a-42a1-b9e4-7020bafaa271", name: "Quinn", email: "quinn@example.com", role: "customer", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "0f9a82c2-1da7-4b99-b709-8cb9132d6ad6", name: "Rachel", email: "rachel@example.com", role: "vendor", active: false, created_at: new Date(), updated_at: new Date() },
      { id: "c86b11b1-3058-4da7-8441-1f17805a40f4", name: "Sam", email: "sam@example.com", role: "admin", active: true, created_at: new Date(), updated_at: new Date() },
      { id: "24a88e53-45b5-4669-9219-c733f0136db7", name: "Tina", email: "tina@example.com", role: "customer", active: false, created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
