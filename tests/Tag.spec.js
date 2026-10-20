const{test,expect}=require('@playwright/test')

test('tag1@sanity ', async ({page})=>{

    console.log('This is my first test 1')


})


test('tag2@reg ', async ({page})=>{

    console.log('This is my first test 2')


})



test('tag3', async ({page})=>{

    console.log('This is my first test 3')


})


test('tag4@sanity@reg ', async ({page})=>{

    console.log('This is my first test 4')


})