const {pages} = require('../po');

describe("Test suite", () => {
    beforeEach(async function () {
        await pages('dashboard').open();
    });

    it('Check page title', async() =>{
        await expect(browser).toHaveTitle ('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open add new doctor', async() => {
        //click doctors
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()
        await expect(pages('doctors').addDoctorModal.rootEL).toBeDisplayed();
    })

    it('Add a new doctor', async () => {
  
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootEL.waitForDisplayed();

        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.input('phone').setValue('11111111111111');
        await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
        await pages('doctors').addDoctorModal.input('education').setValue('Basic');
        await pages('doctors').addDoctorModal.input('designation').setValue('Test');

        await pages('doctors').addDoctorModal.saveBtn.click();

        await expect(pages('doctors').addDoctorModal.rootEL).not.toBeDisplayed();
        await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. John Doe');
        await expect(pages('doctors').specialistCard(8).education).toHaveText('Basic', {ignoreCase: true});
    });

    it('Open and close add new doctor window', async() => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootEL.waitForDisplayed();
        await pages('doctors').addDoctorModal.closeBtn.click();

        await expect(pages('doctors').addDoctorModal.rootEL).not.toBeDisplayed();
    });
});