import { LogService } from './log.service'

const originalWarn = console.warn
const originalLog = console.log
const originalError = console.error

let consoleOutput = []

const mockConsole = (output) => consoleOutput.push(output)

describe('LogService', () => {
  let service: LogService

  beforeEach(() => {
    consoleOutput = []
    console.warn = mockConsole
    console.log = mockConsole
    console.error = mockConsole
    service = new LogService()
  })
  afterEach(() => {
    console.warn = originalWarn
    console.log = originalLog
    console.error = originalError
  })

  it('call log fn', () => {
    service.log('log message')
    expect(consoleOutput).toEqual(['log message'])
  })
  it('call log fn', () => {
    service.log('log message')
    expect(consoleOutput).toEqual(['log message'])
  })
  it('call warn fn', () => {
    service.warn('warn message')
    expect(consoleOutput).toEqual(['warn message'])
  })
  it('call error fn', () => {
    service.error('error message')
    expect(consoleOutput).toEqual(['error message'])
  })
})
