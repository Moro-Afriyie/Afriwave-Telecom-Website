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
        'Francis Poku serves as the Deputy CEO and is responsible for the direction and implementation of the organization’s objectives and provides leadership towards the achievement of its mission, as well as, overseeing the Administration and Business Support, Human Resources, Environment, Health and Safety functions of the Interconnect Clearing House. As co-founder of the company, Francis has seen the steady growth of the business from its humble beginnings to becoming one of the sought after companies with expertise in telecommunication equipment, supplies, and service provision.',
      linkedInUrl: 'https://www.linkedin.com/in/francis-poku-a4905924/',
    },
    {
      id: 2,
      name: 'Henry Searyoh',
      position: 'Commercial Director',
      imageUrl: '../../../../assets/AfriwaveManagement/CD.JPG',
      details: `Henry Searyoh is the Commercial Director and is responsible for developing and implementing commercial strategies according to company goals and objectives with the aim to accelerate growth, as well as the effective management and control of company funds and risk towards the achievement of corporate objectives. With over 25 years’ experience, he brings to the organization a wealth of experience in Finance, Financial and Management Accounting. Other areas of expertise include management and development consulting, business process reviews and policy development.`,
      linkedInUrl: '',
    },
    {
      id: 4,
      name: 'Delali Blekpe',
      position: 'Project Director',
      imageUrl: '../../../../assets/AfriwaveManagement/PM.JPG',
      details: '',
      linkedInUrl: 'https://www.linkedin.com/in/delali-blekpe-4b9093b/',
    },
    {
      id: 5,
      name: 'Patricia Abla Quansah',
      position: 'Chief Finance Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CFO.JPG',
      details: '',
      linkedInUrl:
        'https://www.linkedin.com/in/patricia-abla-quansah-6503a8153',
    },
    {
      id: 6,
      name: 'Ernest Poku',
      position: 'Facilities / Health & Safety Manager',
      imageUrl: '../../../../assets/AfriwaveManagement/Facilities.JPG',
      details: '',
      linkedInUrl: 'https://www.linkedin.com/in/ernest-poku-96aa6277',
    },
    {
      id: 7,
      name: 'Lord Aboagye',
      position: 'Corporate Affairs Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CA.JPG',
      details:
        'Lord Aboagye is a communications specialist who leads the development and implementation of Afriwave’s communications and corporate social responsibility strategy. He is a professional with a strong background in strategic corporate communications, media relations and corporate social responsibility. He builds and maintains the positive image of the company and oversees the communications aspect of the business to the outside world in support of the organization’s mission and vision.',
      linkedInUrl: 'https://www.linkedin.com/in/lord-aboagye-b3700b27',
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
