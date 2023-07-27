import { classNames } from './classNames'

describe('classNames function', () => {
  it('should return an empty string when no arguments are provided', () => {
    expect(classNames()).toBe('')
  })

  it('should concatenate strings and numbers as space-separated class names', () => {
    expect(classNames('foo', 42, 'bar')).toBe('foo 42 bar')
  })

  it('should handle ClassDictionary inputs correctly', () => {
    const classDict = {
      active: true,
      disabled: false,
      custom: true
    }
    expect(classNames(classDict)).toBe('active custom')
  })

  it('should handle ClassArray inputs correctly', () => {
    const classArray = ['one', 2, { three: true }, ['nested']]
    expect(classNames(classArray)).toBe('one 2 three nested')
  })

  it('should handle nested arrays and objects correctly', () => {
    const nestedClasses = [
      'top-level',
      {
        'nested-object': true,
        'another-class': false
      },
      ['nested-array', { 'deep-nested': true }]
    ]
    expect(classNames(nestedClasses)).toBe('top-level nested-object nested-array deep-nested')
  })

  it('should ignore null, undefined, and false values', () => {
    expect(classNames(null, undefined, false, 'foo')).toBe('foo')
  })

  it('should handle a mix of inputs correctly', () => {
    const mixedArgs = [
      'button',
      42,
      {
        active: true,
        disabled: false
      },
      'large',
      ['nested', 24]
    ]
    expect(classNames(...mixedArgs)).toBe('button 42 active large nested 24')
  })
})
