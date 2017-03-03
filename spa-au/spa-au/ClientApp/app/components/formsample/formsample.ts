export class FormSample {

  email = '';
  password = '';
  public isChecked: Boolean;
  public selectedOption: HTMLInputElement;
  public options: any[];
  signup() {
    var myUser = { email: this.email, password: this.password }
    console.log(myUser);
    console.log("isChecked: " + this.isChecked);
    console.log('radio checked: ' + this.selectedOption.id);
  };

  constructor() {
    this.isChecked = false;

    this.options = [
      { id: 1, text: 'First' },
      { id: 2, text: 'Second' },
      { id: 3, text: 'Third' }
    ];
    this.selectedOption = this.options[0];

  }

}