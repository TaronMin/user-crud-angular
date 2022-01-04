import {Directive, ElementRef, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Directive({
  selector: '[appFormValidation]'
})
export class FormValidationDirective {

  @Input('appFormValidation') control!: FormControl;
  @Input('element') input!: HTMLElement;
  private para!: HTMLElement;
  constructor(private el: ElementRef) {
    console.log(el)
  }

  ngOnInit() {
    this.control.statusChanges.subscribe((value: string) => {
      if (value !== "VALID") {
        this.para = document.createElement("span");
        this.para.className = "error-message";
        this.para.innerText = " Required";
        this.input.after(this.para);
      }else{
        this.para?.remove();
      }
    });
  }
}
