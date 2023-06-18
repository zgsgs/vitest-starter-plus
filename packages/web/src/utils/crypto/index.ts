import * as CryptoJS from 'crypto-js'

/** 加密密钥 */
const CryptoSecret = '__CryptoJS_Secret__'

/**
 * encrypt the data
 * @param data 明文
 * @returns 密文
 */
export function encrypto(data: unknown) {
  const newData = JSON.stringify(data)
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString()
}

/**
 * 解密数据
 * @param cipherText 密文
 * @returns 明文
 */
export function decrypto(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  if (originalText)
    return JSON.parse(originalText)

  return null
}
