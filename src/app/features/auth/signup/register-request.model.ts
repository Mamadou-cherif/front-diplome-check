export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  institutionId?: number;
  roles: string[];
}
