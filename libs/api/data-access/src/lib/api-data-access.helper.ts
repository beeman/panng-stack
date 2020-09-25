import { compare, hash } from 'bcryptjs'
import { createHash } from 'crypto'

const getHash = (str) => createHash('md5').update(str).digest('hex')

const gravatarUrl = 'https://www.gravatar.com/avatar/'
const gravatarSize = 460

export const getGravatarUrl = (email = '') => `${gravatarUrl}${getHash(email)}?s=${gravatarSize}`

export const validatePassword = (password: string, hashedPassword: string): Promise<boolean> => {
  return compare(password, hashedPassword)
}

export const hashPassword = (password: string): Promise<string> => {
  return hash(password, 10)
}
