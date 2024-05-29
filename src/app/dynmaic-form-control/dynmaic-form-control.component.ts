import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SelectInputComponent } from '../../../shared/select-input/select-input.component';
import { TextInputComponent } from '../../../shared/text-input/text-input.component';
import { RadioInputComponent } from '../../../shared/radio-input/radio-input.component';
import { DateInputComponent } from '../../../shared/data-input/date-input.component';
import { CheckboxInputComponent } from '../../../shared/checkbox-input/checkbox-input.component';
import { FormDataService } from '../form-service/form-service.service';

@Component({
  selector: 'app-dynmaic-form-control',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,SelectInputComponent,DateInputComponent,CheckboxInputComponent,TextInputComponent,RadioInputComponent],
  templateUrl: './dynmaic-form-control.component.html',
  styleUrl: './dynmaic-form-control.component.css',
  providers:[FormDataService]
})
export class DynmaicFormControlComponent implements OnInit {
  form: any = new FormGroup ({});
  formMetadata: any;

  constructor(
    private fb: FormBuilder,
    private formMetadataService: FormDataService
  ) { }

  ngOnInit(): void {
    this.formMetadataService.getFormMetadata().subscribe(metadata => {
      this.formMetadata = metadata;
      this.createFormControls();
    });
  }

  createFormControls() {
    this.formMetadata.formFields.forEach((section:any) => {
      section.fields.forEach((field:any) => {
        const control = this.fb.control('', this.bindValidations(field.validations));
        this.form.addControl(field.name, control);
      });
    });
  }

  bindValidations(validations: any) {
    const validList = [];
    if (validations) {
      if (validations.isRequired) {
        validList.push(Validators.required);
      }
      if (validations.pattern) {
        validList.push(Validators.pattern(validations.pattern));
      }
      if (validations.minLength) {
        validList.push(Validators.minLength(validations.minLength));
      }
      if (validations.maxLength) {
        validList.push(Validators.maxLength(validations.maxLength));
      }
    }
    return validList;
  }
submitted = false
onCheckboxChange(e: any, fieldName: string) {
  const checkArray: FormArray = this.form.get(fieldName) as FormArray;

  if (e.target.checked) {
    checkArray.push(this.fb.control(e.target.value));
  } else {
    let i: number = 0;
    checkArray.controls.forEach((item:any) => {
      if (item.value === e.target.value) {
        checkArray.removeAt(i);
        return;
      }
      i++;
    });
  }
}

  onSubmit() {
    if (this.form.valid) {
   
      
    } else {
      console.log('Form is invalid');
this.submitted = true
    }
  }
}