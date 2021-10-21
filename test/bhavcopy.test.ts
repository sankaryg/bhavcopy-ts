import BhavCopy from '../src/bhavcopy'
var request = new BhavCopy()

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('BhavCopy is instantiable', () => {
    expect(new BhavCopy()).toBeInstanceOf(BhavCopy)
  })

  it('should fail, if month is not from month codes', function(done) {
    request
      .download({
        month: 'AUGa',
        year: 2016,
        day: 18
      })
      .catch(err => {
        expect(err).toHaveProperty('message')
        expect(err.message).toEqual('Invalid month name')
        done()
      })
  })

  it('should fail, if month is null', function(done) {
    request
      .download({
        month: '',
        year: 2016,
        day: 18
      })
      .catch(err => {
        expect(err).toHaveProperty('message')
        expect(err.message).toEqual('Invalid month name')
        done()
      })
  })

  it('should fail, if year is not in [1994 -2018]', function(done) {
    request
      .download({
        month: 'AUG',
        year: 1993,
        day: 18
      })
      .catch(err => {
        expect(err).toHaveProperty('message')
        expect(err.message).toEqual('Invalid year name')
        done()
      })
  })

  it('should fail, if year is null', function(done) {
    request
      .download({
        month: 'AUG',
        year: '',
        day: 18
      })
      .catch(err => {
        expect(err).toHaveProperty('message')
        expect(err.message).toEqual('Invalid year name')
        done()
      })
  })

  it('should fail, if day is a alphanumeric', function(done) {
    request
      .download({
        month: 'AUG',
        year: 2016,
        day: '40aa'
      })
      .catch(err => {
        expect(err).toHaveProperty('message')
        expect(err.message).toEqual('Invalid day specified')
        done()
      })
  })

  it('should fail, if day is not in range 1-31', function(done) {
    request
      .download({
        month: 'AUG',
        year: 2016,
        day: '78'
      })
      .catch(err => {
        expect(err).toHaveProperty('message')
        expect(err.message).toEqual('Invalid day specified')
        done()
      })
  })
})
