export function sum(a: number, b: number): number {
    return a + b
}

export async function myasyncfunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 10000)
    })
    return promise
}


