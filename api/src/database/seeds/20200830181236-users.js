module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [
        { name: "Lucas", email: "lucas@gmail.com", password_hash: "$2a$08$aIV/25w/mT8YmdeNP2BJ5eYzfyiwhip8V7PEEhtEJ9rTr1MhrxCdi" },
      ], {})
    ;
  },
  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  }
};