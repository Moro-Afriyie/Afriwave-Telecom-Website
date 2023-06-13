import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.component.html',
  styleUrls: ['./our-experts.component.scss'],
})
export class OurExpertsComponent implements OnInit, AfterViewInit {
  modalStatus = false;
  selectedMember: any = null;
  constructor() {}

  managementTeam = [
    {
      id: 1,
      name: 'Francis Poku',
      position: 'Deputy Chief Executive Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/DCEO.JPG',
      details:
        'Francis Poku serves as the Deputy CEO and is responsible for the direction and implementation of the organization’s objectives and provides leadership towards the achievement of its mission, as well as, overseeing the Administration and Business Support, Human Resources, Environment, Health and Safety functions of the Interconnect Clearing House. A co-founder of the company, Francis',
      linkedInUrl: '',
    },
    {
      id: 2,
      name: 'Henry Searyoh',
      position: 'Commercial Director',
      imageUrl: '../../../../assets/AfriwaveManagement/CD.JPG',
      details: '  ',
      linkedInUrl: '',
    },
    {
      id: 4,
      name: 'Delali Blekpe',
      position: 'Project Director',
      imageUrl: '../../../../assets/AfriwaveManagement/PM.JPG',
      details: '',
      linkedInUrl: '',
    },
    {
      id: 5,
      name: 'Patricia Abla Quansah',
      position: 'Chief Finance Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CFO.JPG',
      details: '',
      linkedInUrl: '',
    },
    {
      id: 6,
      name: 'Ernest Poku',
      position: 'Facilities / Health & Safety Manager',
      imageUrl: '../../../../assets/AfriwaveManagement/Facilities.JPG',
      details: '',
      linkedInUrl: '',
    },
    {
      id: 7,
      name: 'Lord Aboagye',
      position: 'Corporate Affairs Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CA.JPG',
      details: '',
      linkedInUrl: '',
    },
  ];

  ngOnInit(): void {}

  onShowExpert(member: any) {
    this.modalStatus = !this.modalStatus;
    this.selectedMember = member;
  }

  ngAfterViewInit(): void {
    AOS.init();
  }
}
