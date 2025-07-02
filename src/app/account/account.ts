import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {
  signupForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  isStepValid(step: number) {
    if (step === 1) {
      return (
        this.signupForm.get('fullname')?.valid &&
        this.signupForm.get('username')?.valid
      );
    } else if (step === 2) {
      return (
        this.signupForm.get('email')?.valid &&
        this.signupForm.get('phone')?.valid &&
        this.signupForm.get('gender')?.valid
      );
    } else if (step === 3) {
      return (
        this.signupForm.get('dob')?.valid &&
        this.signupForm.get('password')?.valid &&
        this.signupForm.get('confirmPassword')?.valid
      );
    }
    return false;
  }
  
currentStep = 1;

  nextStep() {
    if (this.isStepValid(this.currentStep)) {
      this.currentStep++;
    } else {
      alert('Please fill all required fields in this step.');
    }
  }
  

  prevStep() {
    this.currentStep--;
  }

  submitted = false; // flag to show success message

  onSubmit() {
    if (this.signupForm.valid && this.passwordsMatch()) {
      const formData = this.signupForm.value;

      localStorage.setItem('signupData', JSON.stringify(formData));

      this.submitted = true; // show success message
      this.signupForm.reset(); // clear form
      this.currentStep = 1; // reset to first step
      
      
    }
  }
  
  passwordsMatch(): boolean {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }
  
}
