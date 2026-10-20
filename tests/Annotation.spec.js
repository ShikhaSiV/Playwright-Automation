const {test, expect} = require('@playwright/test')

test ('Annotation1', async({page})=>{
    console.log("this is my test 1")

})

test ('Annotation2', async({page})=>{
    console.log("this is my test 2")

})

test('Annotation3', async({page})=>{
    console.log("this is my test 3")

})

test.fixme('Annotation4', async({page})=>{
    console.log("this is my test 4")

})