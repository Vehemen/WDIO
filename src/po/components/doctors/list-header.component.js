class ListHeaderComponent {
    get rootEL() {
        return $('.specialization-types');
    }

    get addNewDoctorBtn() {
        return this.rootEL.$('button.e-control');
    }
}

module.exports = ListHeaderComponent;
