import { addTwoNumbers } from "./addTwoNumbers"

describe('test of complex calculection', ()=>{
    test('addTwoNumbers', ()=> {
        const result = addTwoNumbers("123", "1");

        expect(result).toBe(124);
    })
})