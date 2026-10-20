

const { test, expect } = require('@playwright/test');

test("CRUD API Testing", async ({ request }) => {

    // 1. GET user
    const getResponse = await request.get(
        "https://reqres.in/api/users/2"
    );

    console.log("GET:", await getResponse.json());
    expect(getResponse.status()).toBe(200);


    // 2. CREATE user
    const createResponse = await request.post(
        "https://reqres.in/api/users",
        {
            data: {
                name: "morpheus",
                job: "leader"
            },
            headers: {
                "Accept": "application/json"
            }
        }
    );

    const createdUser = await createResponse.json();
    console.log("CREATE:", createdUser);

    expect(createResponse.status()).toBe(201);

    const userId = createdUser.id;
    expect(userId).toBeTruthy();


    // 3. UPDATE user
    const updateResponse = await request.put(
        `https://reqres.in/api/users/${userId}`,
        {
            data: {
                name: "morpheus",
                job: "zion resident"
            },
            headers: {
                "Accept": "application/json"
            }
        }
    );

    const updatedUser = await updateResponse.json();
    console.log("UPDATE:", updatedUser);

    expect(updateResponse.status()).toBe(200);
    expect(updatedUser.name).toBe("morpheus");
    expect(updatedUser.job).toBe("zion resident");


    // 4. DELETE user
    const deleteResponse = await request.delete(
        `https://reqres.in/api/users/${userId}`
    );

    console.log("DELETE status:", deleteResponse.status());

    expect(deleteResponse.status()).toBe(204);

});

