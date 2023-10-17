const ListHeaderComponent = require('../components/doctors/list-header.component');
const addDoctorComponent = require('../components/doctors/add-doctor.component');
class DoctorsPage {
    constructor() {
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new addDoctorComponent();
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }
}

module.exports = DoctorsPage;
