require("dotenv").config({ path: "./.env.local" });

const { test, expect } = require('@playwright/test')


const LOCAL_URL = 'http://localhost:3000'

test('Visit count is rendered', async ({ page }) => {
	// Mock the API response
	await page.route(`${process.env.NEXT_PUBLIC_VIEWS_API}/viewer-count`, (route) => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ views: 100 })
            });
    });
	
	// Navigate to the page
	await page.goto(LOCAL_URL)
	await page.waitForLoadState('load')

	// Verify that the text content of the page is correct
	await expect(page.locator('#visitorCountFooter')).toBeVisible();
	await expect(page.locator('#visitorCountFooter')).toHaveText(/You are visitor number: 100/);
})


test('no API call if views exist in localStorage', async ({ page }) => {
    // Flag to monitor if the API call has been made
    let apiCalled = false;

    await page.goto(LOCAL_URL);

    // Set the localStorage values immediately after navigating to the page.
    await page.evaluate(() => {
        localStorage.setItem('viewerCount', Date.now().toString());
        localStorage.setItem('numberOfViews', '100');
    });

    await page.route(`${process.env.NEXT_PUBLIC_VIEWS_API}/viewer-count`, route => {
        apiCalled = true; // Update the flag to true if the route is called
        route.continue();
    });

    await page.waitForLoadState('load');

    // Verify that the 'views' value exists in localStorage
    const viewsInLocalStorage = await page.evaluate(() => localStorage.getItem('numberOfViews'));
    expect(viewsInLocalStorage).toBe('100');

    await page.waitForTimeout(100);

    expect(apiCalled).toBeFalsy();
});


test('API call is made if more than an hour has passed since last viewerCount', async ({ page }) => {
    // Flag to monitor if the API call has been made
    let apiCalled = false;

    await page.goto(LOCAL_URL);

    const moreThanAnHourAgo = Date.now() - (60 * 60 * 1000 + 1);

    // Set the localStorage values to simulate the last view was more than an hour ago.
	await page.evaluate((timestamp) => {
        localStorage.setItem('viewerCount', timestamp.toString());
        localStorage.setItem('numberOfViews', '100');
    }, moreThanAnHourAgo);

    // Set up request interception to monitor if the API call to 'viewer-count' is made.
    await page.route(`${process.env.NEXT_PUBLIC_VIEWS_API}/viewer-count`, route => {
        apiCalled = true; // Update the flag to true if the route is called
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ views: 101 })
        });
    });

    await page.reload();
    await page.waitForLoadState('load');

    await page.waitForTimeout(100);

    // Verify that the API was called by checking the flag.
    expect(apiCalled).toBeTruthy();

    const updatedViewsInLocalStorage = await page.evaluate(() => localStorage.getItem('numberOfViews'));
    expect(updatedViewsInLocalStorage).toBe('101');
	await expect(page.locator('#visitorCountFooter')).toHaveText(/You are visitor number: 101/);
});



