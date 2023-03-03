import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MailServiceService} from "../../providers/mail-service.service";
import {MailBody} from "../../models/mail-body";

@Component({
  selector: 'cp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formContact: FormGroup;
  submitted=false;
  textLen=0;
  mail:Partial<MailBody> = {}
  messageSent = "";
  get message(){
    return this.formContact.get('message')
  }
  get tel(){
    return this.formContact.get('telephone');
  }
  get email(){
    return this.formContact.get("email");
  }

  get name(){
    return this.formContact.get("name");
  }

  constructor(private fb:FormBuilder, private ms:MailServiceService) {
    this.formContact = fb.group({
      name: ["", [Validators.minLength(2), Validators.maxLength(255)]],
      email : ["", [Validators.email, Validators.required]],
      telephone : ["", [Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')]],
      message: ["", [Validators.minLength(10), Validators.maxLength(2000), Validators.required]]
    });
  }

  submit() {
    this.submitted = true;
    if(this.formContact.valid){
      this.mail = {
        name: this.formContact.get("name")?.value,
        email: this.formContact.get("email")?.value,
        telephone: this.formContact.get("telephone")?.value,
        message: this.formContact.get("message")?.value
      }
      this.formContact.patchValue({
        name:"", email:"", telephone:"", message:""
      })
      this.submitted = false;
      this.ms.sendMail(this.mail).subscribe({
        next: (value => this.messageSent = "Le message a bien été envoyé"),
        error: (value => this.messageSent = "Une erreur est survenue")
      });
    } else {
      this.messageSent = "Formulaire invalide"
    }
  }

  changeLen(change:string) {
    this.textLen = change.length;
  }
}
