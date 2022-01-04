import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userActions: any = [];
  contactForm: any;
  btnClassName: string = "create-user"
  btnDelClassName: string = "delete"
  @Input() user: User = new User("", "");
  @Output() resultMethod: any = new EventEmitter<any>();

  constructor(public formGroup: FormBuilder) {
  }

  ngOnInit(): void {

  }

  getActionsOfUser(): void {
    this.userActions = this.user.action?.split(",");
    if (this.userActions) {
      this.initAction();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'].currentValue && Object.keys(changes['user'].currentValue).length !== 0) {
      this.initForm();
      this.getActionsOfUser();
    }
  }

  initForm() {
    console.log(this.user, " edit user");
    this.contactForm = this.formGroup.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      actions: this.formGroup.array([]),
    });
  }

  onSubmit() {
    console.log(this.getActions.value);
    let actions = this.getActions.value.join(",");
    console.log(actions);
    let user = {
      firstName: this.getFirstName,
      lastName: this.getLastName,
      action: actions
    };
    console.log(user, " in user form")
    this.resultMethod.emit(user);
  }

  get getFirstName() {
    console.log('asdasd', 111)
    return this.contactForm.controls["firstName"].value;
  }

  get getLastName() {
    return this.contactForm.controls["lastName"].value;
  }

  initAction() {
    this.userActions.forEach((action: string) => {
      this.getActions.push(new FormControl([action]));
    })
  }

  addAction() {
    const actionForm = new FormControl([""]);
    this.getActions.push(actionForm);
  }

  deleteAction(idx: number) {
    this.getActions.removeAt(idx);
  }

  get getActions() {
    return this.contactForm.controls["actions"] as FormArray;
  }

}
