import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MailBody} from "../models/mail-body";

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  private URL = 'https://formspree.io/f/xeqwkraw';
  constructor(private http:HttpClient) {}


  sendMail(body: Partial<MailBody>){
    return this.http.post(this.URL, body);
  }
}
