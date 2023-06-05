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
        'Francis Poku serves as the Deputy CEO and is responsible for the direction and implementation of the organization’s objectives and provides leadership towards the achievement of its mission, as well as, overseeing the Administration and Business Support, Human Resources, Environment, Health and Safety functions of the Interconnect Clearing House. A co-founder of the company, Francis has seen the steady growth of the business from its humble beginnings to becoming one of the sought after companies with expertise in telecommunication equipment, supplies and service provision.',
    },
    {
      id: 2,
      name: 'Henry Searyoh',
      position: 'Commercial Director',
      imageUrl: '../../../../assets/AfriwaveManagement/CD.JPG',
      details:
        'Henry Searyoh is the Commercial Director and is responsible for developing and implementing commercial strategies according to company goals and objectives with the aim to accelerate growth, as well as, the effective management and control of company funds and risk towards the achievement of corporate objectives. With over 25 years’ experience, he brings to the organization a wealth of experience in Finance, Financial and Management Accounting. Other areas of expertise include management and development consulting, business process reviews and policy development.',
    },
    {
      id: 4,
      name: 'Delali Blekpe',
      position: 'Project Director',
      imageUrl: '../../../../assets/AfriwaveManagement/PM.JPG',
      details: '',
    },
    {
      id: 5,
      name: 'Patricia Abla Quansah',
      position: 'Chief Finance Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CFO.JPG',
      details: '',
    },
    {
      id: 6,
      name: 'Ernest Poku',
      position: 'Facilities / Health & Safety Manager',
      imageUrl: '../../../../assets/AfriwaveManagement/Facilities.JPG',
      details: '',
    },
    {
      id: 7,
      name: 'Lord Aboagye',
      position: 'Corporate Affairs Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CA.JPG',
      details: '',
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
