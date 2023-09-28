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
      imageUrl: '../../../../assets/AfriwaveManagement/DCEO.jpeg',
      details:
        'Francis Poku serves as the Deputy CEO and is responsible for the direction and implementation of the organization’s objectives and provides leadership towards the achievement of its mission, as well as, overseeing the Administration and Business Support, Human Resources, Environment, Health and Safety functions of the Interconnect ClearingHouse. As co-founder of the company, Francis has seen the steady growth of the business from its humble beginnings to becoming one of the sought after companies with expertise in telecommunication equipment, supplies, and service provision.',
      linkedInUrl: 'https://www.linkedin.com/in/francis-poku-a4905924/',
    },
    {
      id: 2,
      name: 'Henry Searyoh',
      position: 'Commercial Director',
      imageUrl: '../../../../assets/AfriwaveManagement/CD.jpeg',
      details: `Henry Searyoh is the Commercial Director and is responsible for developing and implementing commercial strategies according to company goals and objectives with the aim to accelerate growth, as well as the effective management and control of company funds and risk towards the achievement of corporate objectives. With over 25 years’ experience, he brings to the organization a wealth of experience in Finance, Financial and Management Accounting. Other areas of expertise include management and development consulting, business process reviews and policy development.`,
      linkedInUrl: '',
    },
    {
      id: 4,
      name: 'Delali Blekpe',
      position: 'Project Director',
      imageUrl: '../../../../assets/AfriwaveManagement/PM.jpeg',
      details: `Delali is an experienced telecom professional with (19+) years working in Tech Projects and Operations Management and highly skilled in Project Management, Network Planning/Development and Operation & Maintenance Management covering all areas of Telecoms environment spanning from Radio/Core/Transmission planning through rollout to network optimization and maintenance.

Delali possesses strong leadership skills as evidenced in various capacities of leading cross-functional teams through numerous project cycles while implementing strategic solutions for business growth. He is passionate about technology; continuously driving improvements that drive value for the customer while achieving financial and operational objectives.

Delali holds a Bachelor's Degree in Information & Communication Technology (ICT) from the Ghana Institute of Management and Public Administration (GIMPA) and a Higher National Diploma in Electrical/Electronic Engineering from the Takoradi Technical University.`,
      linkedInUrl: 'https://www.linkedin.com/in/delali-blekpe-4b9093b/',
    },
    {
      id: 5,
      name: 'Patricia Abla Quansah',
      position: 'Chief Finance Officer',
      imageUrl: '../../../../assets/AfriwaveManagement/CFO.jpeg',
      details: `Patricia Abla Quansah is the Chief Financial Officer, responsible for managing the financial activities of the company and help in influencing the future direction of the company.
She is a Chartered Certified Accountant and a Fellow of the Association of Chartered Certified Accountants (ACCA-UK) with over 25 years of experience in Treasury Management and Financial Accounting in the Telecom Industry.
Patricia has performed diverse roles in the areas of Finance and Accounting.  She is a business focused leader who is passion driven with excellent leadership and teambuilding skills.

With her experience in Finance and accounting in the telecom industry, Patricia bring a wealth of experience to company.
`,
      linkedInUrl:
        'https://www.linkedin.com/in/patricia-abla-quansah-6503a8153',
    },
    {
      id: 6,
      name: 'Ernest Poku',
      position: 'Facilities / Health & Safety Manager',
      imageUrl: '../../../../assets/AfriwaveManagement/Facilities.jpeg',
      details: `Ernest Poku is the Facilities/Health & Safety manager who is responsible for ensuring the office is run efficiently to meet staff needs. His proactive approach to contract and space management is invaluable.
      He is leader who motivates and inspires his team to do their best at work. He has a wonderful human relationship with all the staff which makes it comfortable for staff to work with him.
      His 10 years’ experience in Health & Safety helps to maintain an incident free and an efficient working environment. His priority is always ensuring the safety and security of the employees and the company’s property.
      `,
      linkedInUrl: 'https://www.linkedin.com/in/ernest-poku-96aa6277',
    },
    // {
    //   id: 7,
    //   name: 'Lord Aboagye',
    //   position: 'Corporate Affairs Officer',
    //   imageUrl: '../../../../assets/AfriwaveManagement/CA.jpeg',
    //   details:
    //     'Lord Aboagye is a communications specialist who leads the development and implementation of Afriwave’s communications and corporate social responsibility strategy. He is a professional with a strong background in strategic corporate communications, media relations and corporate social responsibility. He builds and maintains the positive image of the company and oversees the communications aspect of the business to the outside world in support of the organization’s mission and vision.',
    //   linkedInUrl: 'https://www.linkedin.com/in/lord-aboagye-b3700b27',
    // },
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
