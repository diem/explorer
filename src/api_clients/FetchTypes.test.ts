import { DataOrErrors, isNotFound } from './FetchTypes'

describe('isNotFound', () => {
  it('should return true if given not found error', () => {
    const subjects = [
      { errors: [{ message: 'Not found' }] },
      { errors: [{ message: 'some other problem' }, { message: 'Not found' }] },
    ]

    for (const subject of subjects) {
      expect(isNotFound(subject)).toBeTruthy()
    }
  })
  it('should return false if anything else', () => {
    const subjects: DataOrErrors<any, any>[] = [
      { errors: [{ message: 'Too hot' }] },
      { errors: [{ status: '404' }] },
      { data: [{ message: 'Not Found' }] },
      { data: [{ message: 'Found' }] },
    ]

    for (const subject of subjects) {
      expect(isNotFound(subject)).toBeFalsy()
    }
  })
})
