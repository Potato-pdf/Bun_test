import { describe, test, expect } from "bun:test";
import {sum} from "../index"

describe("index.ts", ()=> {
    test("2 + 2 = 4", ()=> {
        expect(sum(2, 2)).toBe(4)
    })
})

