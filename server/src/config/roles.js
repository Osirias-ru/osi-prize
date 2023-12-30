const allRoles = {
    user: ['playGame', 'buyShop'],
    admin: ['playGame', 'buyShop', 'manageUsers'],
  };
  
  const roles = Object.keys(allRoles);
  const roleRights = new Map(Object.entries(allRoles));
  
  module.exports = {
    roles,
    roleRights,
  };
  