import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogList = [
    {
      id: 1,
      title: `Smart Africa and Afriwave Telecom enter into an agreement to advance connectivity and data capacity in Africa`,
      imageUrl: '../../../../assets/francissmart.jpg',
      blogContent: `Kigali, Rwanda – Monday, 8th November 2021 - Smart Africa and
            Afriwave Telecom Ghana Limited have announced a partnership where
            they will collaborate in the One Africa Network and Interconnect
            Clearinghouse initiative, the Data Centre and Cloud Project and the
            Intra-Africa Connectivity project to advance the digital
            transformation of the continent.`,
      link: '',
    },
    {
      id: 2,
      title: `Afriwave Telecom provides quality water for the people of Ekye-Amanfrom`,
      imageUrl: '../../../../assets/ep1.jpg',
      blogContent: ` Afriwave Telecom Ghana Limited as part of its sustainable Corporate
            Social Responsibility (CSR) initiative has rehabilitated an existing
            water facility at Ekye Amanfrom in the Kwahu Afram Plains South
            District in the Eastern Region of Ghana.`,
      link: '',
    },
    {
      id: 3,
      title: `Afriwave Telecom, A licensed Ghanaian Interconnect Clearinghouse (ICH) operator joins the Smart Africa Alliance.`,
      imageUrl: '../../../../assets/smartAfrk.jpg',
      blogContent: ` Smart Africa has announced that Afriwave Telecom has become the
            latest private sector member of the Smart Africa Alliance. The
            organisations will work together towards the vision of transforming
            Africa into a single digital market. Smart Africa is an alliance of
            32 African countries, international organisations and global private
            sector players tasked with defining Africa’s digital agenda.`,
      link: '',
    },
    {
      id: 4,
      title: `Afriwave Telecom Recieves Telecom support company of the  year at the 4th national communications awards, 2022`,
      imageUrl: 'https://www.afriwavetelecom.com/img/ncaward.JPG',
      blogContent: `Ghana's Telecom industry's Interconnect Clearing House (ICH), Afriwave Telecom emerged the Telecom Support Company of the year at the 4th National Communications Awards 2022. The award is in recognition of the company's outstanding strides, success, innovation and tireless effort in the communication and digitalization sector. The ICH was licensed under the Electronic Communication Amendment Act 2016 Act 910 to provide a wide range of services, and as part of the license awarded, Afriwave is authorised to provide a common, independent mechanism for routing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country
Afriwave Telecom has emerged as one of the local leaders in providing telecom solutions and has a track record of utilizing competent skills and expertise to provide a complete range of professional and end to end telecommunication services in the country. Speaking on the award, the Deputy Chief Executive Officer of Afriwave Telecom Ghana Limited, Mr. Francis Poku said the award has motivated him and his team to go the extra mile in making sure the telecom ecosystem in the country becomes viable in terms of Interconnecting.
“Currently, the ICH is connected to all the mobile network operators in the country, namely (AirtelTigo, MTN and Vodafone) providing National Interconnect Clearing House services. Additionally, Afriwave Telecom also provides Interconnect Clearing House services to locally licensed International Wholesale Carriers.” He spoke. He further stated that Afriwave’s Point of Interconnection (POI) locations have been strategically positioned for easy access to existing service provider networks thereby providing clients with efficient and cost-effective options for interconnection. Speaking about the regional market, Mr. Poku noted that, Afriwave Telecom is a member of the Smart Africa Alliance. Smart Africa is a bold and innovative commitment from African Heads of State and Government to accelerate sustainable socio-economic development on the continent ushering Africa into a knowledge economy through affordable access to Broadband and usage of Information and Communications Technologies.
Afriwave is collaborating with Smart Africa Alliance on activities focused on supporting the development of National and Regional Interconnect Clearing House across Africa towards achieving the objectives of One Africa Network Project. He revealed that Afriwave Telecom will soon launch a platform which would create a single point for all Value-Added Service (VAS) providers to gain access to the Mobile network operators (MNOs) from one place.
Mr Poku expressed his appreciation to the hardworking staff of Afriwave Telecom for their immersed contribution to the company's success. " I am humbled and appreciative to the hardworking staff who have enabled Afriwave to achieve this remarkable milestone and has been recognized yet again." The 4th edition of the National Communications Awards (NCA) was held at the Labadi Beach Hotel under the theme: " The Digitalized Economy: Innovation for National Development."`,
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
