const DashboardPage = require('../po/pages/dashboard.page');
const DoctorsPage = require('../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe("Test suite", () => {
    beforeEach(async function () {
        await dashboardPage.open();
    });

    it('Check page title', async() =>{
        await expect(browser).toHaveTitle ('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open add new doctor', async() => {
        //click doctors
        await dashboardPage.sideMenu.item('doctors').click();
        //click add new doctor
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click()
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