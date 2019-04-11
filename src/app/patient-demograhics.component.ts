import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Patient } from './patient';


@Component({
  selector: 'patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css']
})
export class PatientDemographicsComponent implements OnInit, OnDestroy {
  public patient: Patient = new Patient({});
  public messageType: string;
  public message: string;
  public isVisible: boolean;
  public busy: Subscription;
  public errors: any = [];
  public subscription: Subscription;

  constructor() { }
  public getPatientDemographics() {

  }
  public ngOnInit() {
    this.getPatientDemographics();

  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
