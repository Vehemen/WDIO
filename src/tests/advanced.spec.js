describe("Test suite", () =>{

    beforeEach(async function () {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
      });
    
      it('1 should add elements asynchronously', async () => {
        await browser.executeAsync((done) => {
            setTimeout(() => {
                const div = document.createElement('div');
                div.id = 'newElement';
                document.body.appendChild(div);
                done();
            }, 1000);
        });
        const element = await browser.$('#newElement');
        expect(element).toBeDefined();
    });
    
 
    it('2 should wait until chart is displayed', async () => {
        const selector = '#chartcontainer_ChartBorder';
        await browser.waitUntil(async () => {
            return (await browser.$(selector).isExisting()) && (await browser.$(selector).isDisplayed());
        }, {
            timeout: 100,
            timeoutMsg: 'Expected element to be visible after 0,1 seconds'
        });
    });

    it('3 Should moveTo about button and click', async () => {
        const button = await browser.$("div.calendar");
        await button.click();
        let element = await browser.$('/html/body/app-root/app-main/div/main/app-calendar/div[1]/div[2]/div[1]/ejs-schedule/div[3]/div/table/tbody/tr[2]/td[2]/div/table/tbody/tr[24]/td[5]');
        await element.scrollIntoView();
        await element.doubleClick(); 

        element = await browser.$('div#_dialog_wrapper.e-popup-open');
        const isDisplayed = await element.isDisplayed();

        expect(isDisplayed).toBe(true);  // Если вы используете Jest или другой фреймворк для тестирования

    it('4 should add cookies and and check', async () => {
        const primaryCookies = [
            {name: 'This one to check', value: 'check'},
            {name: 'This one to be sure', value: 'sure'}
        ];
        await browser.deleteCookies();
        await browser.setCookies(primaryCookies);
        const cookies = await browser.getCookies();
    
        primaryCookies.forEach(cookie => {
            const foundCookie = cookies.find(c => c.name === cookie.name && c.value === cookie.value);
            expect(foundCookie).toBeDefined();
        });
    });

   
});

});