class RailwayForm {
    constructor(name, trainNo) {
        this.name = name;
        this.trainNo = trainNo;
    }
    submit() {
        alert(this.name + " your form has been submitted for train number " + this.trainNo);
    }
    cancel() {
        alert(this.name + " has cancelled the form for train number " + this.trainNo);
    }
    fill(name, trainNo) {
        this.name = name;
        this.trainNo = trainNo;
    }
}

let harryForm = new RailwayForm("Harry", 43312);
let rohanForm = new RailwayForm("Rohan", 24432);
harryForm.submit();
rohanForm.submit();
harryForm.cancel();
