const BaseComponent = require('../common/base.component');

class SpecialistCardComponent extends BaseComponent {

    constructor(id) {
        super(`#Specialist_${id}`);
    }

    get name() {
        return this.rootEL.$('.name');
    }

    get education() {
        return this.rootEL.$('.education' );
    }

}

module.exports = SpecialistCardComponent;