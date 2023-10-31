const BasePage = require('./base.page')

const {PatientsListHeader, AddDPatientsModal, SpecialistCard, PatientDetailsComponent} = require('./../components');

class PatientsPage extends BasePage{

    constructor() {
        super('showcase/angular/appointmentplanner/#/doctors')
        this.patientsListHeader = new PatientsListHeader();
        this.addPatientsModal = new AddDPatientsModal();
        this.PatientDetailsComponent = new PatientDetailsComponent();
    }

    specialistCard(id) {
        return new SpecialistCard(id)
    }
    async patientNameSearch(expectedName) {
        return await browser.$(`//span[text()='${expectedName}']`);
    }

    async edit(patientNumber) {
        const selector = `/html/body/app-root/app-main/div/main/app-patients/div[1]/div/div[2]/ejs-grid/div[7]/div/table/tbody/tr[${patientNumber}]/td[2]/span`;
        return await browser.$(selector);
    }
}

module.exports = PatientsPage;
