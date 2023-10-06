describe("Test suite", () =>{

    beforeEach(async function () {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
      });


    it("First test", async () => {
        const pageTitle = await browser.getTitle();
    console.log(pageTitle);
     });

    it("SECOND TEST", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
    });

    it("Third TEST", async () => {
        const element = await $("//div[contains(@class, 'patients')]");
        await browser.execute("arguments[0].click();", element);
        await $("button=Add New Patient").click();
        await $("//input[@name='Name']").setValue("John Doe");
        await $("button=Save").click();
    
        const emailError = await $("label[id='Email-info']");
        expect(await emailError.getText()).toEqual("Enter valid email");
    });

    it("fourth TEST", async () => {
        await $("a=View All").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("//input[@name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
    });
    it("fifth TEST", async () => {
        await $("div.doctors").click();
        await expect(browser).toHaveUrlContaining('doctors')
    });

    it("Sixth TEST", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients");
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    });

    describe('Seventh TEST', () => {
        it('should not be displayed', async () => {
            await expect($("div.doctors")).toBeDisplayed(); 
    });
});
});