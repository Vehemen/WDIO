const {pages} = require('../po');

describe("Test suite", () =>{

    beforeEach(async function () {
        await pages('dashboard').open();
      });


    it("Should check email error", async () => {
        await pages('dashboard').viewAllDoctors();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()
        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.saveBtn.click();

        const emailError = await pages('doctors').addDoctorModal.emailError;
        expect(await emailError.getText()).toEqual("Enter valid email");
    });
  
    it('should fetch menu links and visit each page', async () => {
        const menuItems = await pages('dashboard').sideMenu.getAllMenuItem();
        
        await menuItems.forEach(async (link) => {
            await link.click()
        })
        await pages('dashboard').viewAllDoctors()
        
        await expect(browser).toHaveUrlContaining('doctors')

    })
    it ('should check planner is about is Displayed', async () => {
        await $("div.calendar").waitForAndClick(); //custom click

        let elem = await $("div.planner-calendar");
        let isDisplayed = await elem.isDisplayed();

        await expect(isDisplayed).toEqual(true)
    });

    it('Should update patients name', async () => {
       await pages("dashboard").sideMenu.item('patients').click();
    
        const element = await pages('patients').edit(7);
        await element.click(); 
        await pages('patients').PatientDetailsComponent.editBtn.click();
        await pages('patients').PatientDetailsComponent.input('name').setValue("Display test");
        await pages('patients').addPatientsModal.saveBtn.click();
        const patientElement = await pages('patients').patientNameSearch('Display test');
        const isExisting = await patientElement.isExisting();
        
        expect(isExisting).toBe(true);
    })
});