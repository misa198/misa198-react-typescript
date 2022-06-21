export enum RoleCode {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

export const ADMIN = {
  roleName: 'Admin',
  roleCode: RoleCode.ADMIN,
};

export const USER = {
  roleName: 'User',
  roleCode: RoleCode.USER,
};

export const MANAGER = {
  roleName: 'Manager',
  roleCode: RoleCode.MANAGER,
};

export const ROLES = {
  ADMIN,
  USER,
  MANAGER,
};
