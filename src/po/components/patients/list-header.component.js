const BaseComponent = require('./../common/base.component')

class PatientsListHeader extends BaseComponent{
    
    constructor() {
        super('.specialization-types')
    }

    get addNewDoctorBtn() {
        return this.rootEL.$('button.e-control');
    }
}

module.exports = PatientsListHeader;
