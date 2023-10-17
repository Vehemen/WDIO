describe("Test suite", () =>{

    beforeEach(async function () {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    })

    it('Check page title', async() =>{
        const title = await browser.getTitle()
        console.log(title)
        await expect(browser).toHaveTitle ('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open add new doctor', async() => {
        //click doctors
        await $('[routerlink="/doctors"]').click();
        //click add new doctor
        await $('.specialization-types button.e-control').click();
        //check that modal window is displayed
        await expect($('.new-doctor-dialog')).toBeDisplayed();
    })

    it('Add a new doctor', async () => {
  
    // click on doctors item in the side menu
    await $('[routerlink="/doctors"]').click();
    // click on add new doctor btn
    await $('.specialization-types button.e-control').click();
    // wait for visibility of modal window
    await $('.new-doctor-dialog').waitForDisplayed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('11111111111111');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');

    await $("//button[normalize-space()='Save']").click();

    await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {ignoreCase: true});
    });

    it('Open and close add new doctor window', async() => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.e-dlg-closeicon-btn').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    });
});