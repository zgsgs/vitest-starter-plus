import viteCompression from 'vite-plugin-compression'

export default (viteEnv: ImportMetaEnv) => {
  const { VITE_COMPRESS_TYPE = 'gzip' } = viteEnv
  return viteCompression({ algorithm: VITE_COMPRESS_TYPE })
}
