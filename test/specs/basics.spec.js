describe("Test suite", () =>{

    beforeEach(async function () {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
      });


    it("Should check email error", async () => {
        await $("a=View All").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("//input[@name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
    });
  
    it('should fetch menu links and visit each page', async () => {
        const menuItems = await browser.$$('ejs-sidebar#plan nerSiderBar div.sidebar-item');
        
        await menuItems.forEach(async (link) => {
            await link.click()
        })
        await $("a=View All").click();
        
        await expect(browser).toHaveUrlContaining('doctors')

    })

    it ('should check planner is about is Displayed', async () => {
        waitForAndClick(); //custom click

        let elem = await $("div.planner-calendar");
        let isDisplayed = await elem.isDisplayed();

        await expect(isDisplayed).toEqual(true)
    });

    it('should detect when wrapper is visible', async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients");

        await $("//button[text()='Add New Patient']").click();
        const elem = await $("div.patients-detail-wrapper");
        
        await elem.waitForDisplayed({ timeout: 200})
    })
});