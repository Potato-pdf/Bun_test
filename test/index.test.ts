import { describe, test, expect } from "bun:test";
import { myasyncfunction, sum } from "../index"

describe("index.ts", () => {
    test("2 + 2 = 4", () => {
        expect(sum(2, 2)).toBe(4)
    })

    test("async function", (done) => {
        myasyncfunction().then((value) => {
            expect(value).toBe(true)
            done()
        })
    })
})

