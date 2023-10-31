const BaseComponent = require('../common/base.component')

class PatientsListHeader extends BaseComponent{

    constructor() {
        super("//div[@class='patient-operations']")
    }

    get addNewPatientBtn() {
        return this.rootEL.$("//button[@class='e-control e-btn e-lib e-normal add-details e-primary']")
    }

    get addmo() {
        return this.rootEL.$('button.e-control');
    }

}

module.exports = PatientsListHeader;
