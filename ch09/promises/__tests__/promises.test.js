import { MyPromise } from '../new_promises'

describe('Promise', () => {
    
    it('should create a new Promise with pending state', () => {
        const promise = new MyPromise(() => { })
        expect(promise.state).toBe('pending')
        expect(promise.value).toBe(undefined)
    })

    describe('When fulfilled', () => {
        
        it('should then a Promise', done => {
            new MyPromise(resolve => resolve({ data: 'fake' }))
            .then(response => {
                expect(response.data).toBe('fake')
            })
            done()
        })
    })
})
