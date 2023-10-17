const BasePage = require('./base.page')

const {DoctorListHeader, AddDoctorModal} = require('../components');

class DoctorsPage extends BasePage{
    constructor() {
        super('showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorModal();
    }
}

module.exports = DoctorsPage;
