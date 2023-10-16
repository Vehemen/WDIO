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
        await $("div.calendar").waitForAndClick(); //custom click

        let elem = await $("div.planner-calendar");
        let isDisplayed = await elem.isDisplayed();

        await expect(isDisplayed).toEqual(true)
    });

    it('Should update patients name', async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients");
    
        const element = await browser.$('/html/body/app-root/app-main/div/main/app-patients/div[1]/div/div[2]/ejs-grid/div[7]/div/table/tbody/tr[1]/td[2]/span');
        await element.click(); 
        await $("//button[text()='Edit']").click();
        await $("//input[@name='Name']").setValue("Display test");
        await $("//button[text()='Save']").click();
        const expectedName = 'Display test'; 
        const patientElement = await browser.$(`//span[text()='${expectedName}']`);
        const isExisting = await patientElement.isExisting();
        
        expect(isExisting).toBe(true);
    })
});