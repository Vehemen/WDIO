const BaseComponent = require('./../common/base.component')

class AddDoctorComponent extends BaseComponent{

    constructor() {
        super('.new-doctor-dialog')
    };

    get saveBtn() {
        return this.rootEL.$("//button[normalize-space()='Save']")
    }

    get closeBtn() {
        return this.rootEL.$('.e-dlg-closeicon-btn')
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
  

module.exports = AddDoctorComponent;