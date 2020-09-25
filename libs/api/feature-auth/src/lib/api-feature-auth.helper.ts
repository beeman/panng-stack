import { compare, hash } from 'bcryptjs'

export class ApiFeatureAuthHelper {
  static validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword)
  }

  static hashPassword(password: string): Promise<string> {
    return hash(password, 10)
  }
}
