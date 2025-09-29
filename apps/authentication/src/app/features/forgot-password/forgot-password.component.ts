import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  showConfirmation = false;

  onSubmit() {
    // Handle forgot password logic here
    console.log('Forgot password form submitted');
    
    // Show confirmation message
    this.showConfirmation = true;
    this.hideRequestForm();
    this.showConfirmationMessage();
  }

  private hideRequestForm() {
    const requestForm = document.getElementById('requestForm');
    if (requestForm) {
      requestForm.classList.add('hidden');
    }
  }

  private showConfirmationMessage() {
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage) {
      confirmationMessage.classList.remove('hidden');
    }
  }

  resendEmail() {
    console.log('Resending email...');
    // Handle resend email logic
  }

  contactSupport() {
    console.log('Contacting support...');
    // Handle contact support logic
  }
}