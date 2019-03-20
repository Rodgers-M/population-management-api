module.exports = {
  up: async queryInterface => {
    await queryInterface.addConstraint(
      'locations',
      ['name'],
      {
        type: 'unique',
      }
    ) 
  },
};
