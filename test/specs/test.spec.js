describe("Test suite", () =>{

    it("First test", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
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
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        await $("a=View All").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("//input[@name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
    });
});