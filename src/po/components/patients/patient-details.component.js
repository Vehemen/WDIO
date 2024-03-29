const BaseComponent = require('./../common/base.component')

class PatientDetailsComponent extends BaseComponent{

    constructor() {
        super(".new-patient-dialog")
    };
    
    get editBtn() {
        return this.rootEL.$("//button[text()='Edit']")
    }

    get saveBtn() {
        return this.rootEL.$("//button[normalize-space()='Save']")
    }

    get closeBtn() {
        return this.rootEL.$('.e-dlg-closeicon-btn')
    }

    get emailError() {
        return this.rootEL.$("label#Email-info");
    }

/**
 * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
 * @returns{*}
 */;

    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]'
        };
    
        return this.rootEL.$(selectors[name.toLowerCase()]);
    }
}
  

module.exports = PatientDetailsComponent;