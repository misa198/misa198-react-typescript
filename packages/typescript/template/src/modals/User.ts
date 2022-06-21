import { RoleCode } from 'constants/roles';

export interface User {
  id: number;
  name: string;
  role: RoleCode;
}
