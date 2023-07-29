const STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTD: 'rejected'
}

export class MyPromise {
    constructor(executor) {
        if (typeof executor !== 'function') {
            throw new Error('Executor must be a function')
        }
        this.state = STATE.PENDING
        this.value = undefined
        this.onFulfillChain = []
        this.onRejectCallChain = []
        executor(this.resolve.bind(this))
    }

    resolve(res) {
        if(this.state !== STATE.PENDING) {
            return;
        }

        this.state = STATE.FULFILLED
        this.value = res
    }

    then(onFulfill) {
        return new MyPromise(resolve => {
            resolve(onFulfill(this.value))
        })
    }
}

