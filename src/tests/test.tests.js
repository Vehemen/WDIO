const {pages} = require('../po');

describe("Test suite", () =>{

    beforeEach(async function () {
        await pages('dashboard').open();
    });

      it("First test", async () => {
        const pageTitle = await browser.getTitle();
        console.log(pageTitle);
     });

    it("SECOND TEST", async () => {
        await pages('dashboard').sideMenu.item('doctors').click();

        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()
        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.saveBtn.click();

        const emailError = await pages('doctors').addDoctorModal.emailError;
        expect(await emailError.getText()).toEqual("Enter valid email");
    });

    it("Third TEST", async () => {
        await pages('dashboard').sideMenu.item('patients').click();

        await pages('patients').patientsListHeader.addNewPatientBtn.click()
        await pages('patients').addPatientsModal.input('name').setValue('John Doe');
        await pages('patients').addPatientsModal.saveBtn.click();
    
        const emailError = await pages('patients').addPatientsModal.emailError;
        expect(await emailError.getText()).toEqual("Enter valid email");
    });

    it("fourth TEST", async () => {
        await pages('dashboard').viewAllDoctors();

        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()
        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.saveBtn.click();

        const emailError = await pages('doctors').addDoctorModal.emailError;
        expect(await emailError.getText()).toEqual("Enter valid email");
    })
    
    
});