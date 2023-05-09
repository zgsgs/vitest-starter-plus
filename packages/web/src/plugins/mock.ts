export async function setupMock() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('../../mocks')
    worker.start()
  }
}
