import { useBoolean } from './index'

describe('use-boolean', () => {
  it('default value of bool is false', async () => {
    const { bool } = useBoolean()
    expect(bool.value).toBeFalsy()
  })

  it('The initialization value is true', async () => {
    const { bool } = useBoolean(true)
    expect(bool.value).toBeTruthy()
  })

  it('setTrue() return true', async () => {
    const { bool, setTrue } = useBoolean()
    setTrue()
    expect(bool.value).toBeTruthy()
  })
})
