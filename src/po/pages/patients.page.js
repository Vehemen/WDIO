const BasePage = require('./base.page')

const {PatientsListHeader, AddDPatientsModal, SpecialistCard} = require('./../components');

class PatientsPage extends BasePage{

    constructor() {
        super('showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new PatientsListHeader();
        this.addDoctorModal = new AddDPatientsModal();
    }

    specialistCard(id) {
        return new SpecialistCard(id)
    }
}

module.exports = PatientsPage;
