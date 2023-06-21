class RailwayForm {
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

let harryForm = new RailwayForm();
harryForm.fill("Arpit", 14352);
let rohanForm = new RailwayForm();
rohanForm.fill("Rohan", 14463);
harryForm.submit();
rohanForm.submit();
harryForm.cancel();
