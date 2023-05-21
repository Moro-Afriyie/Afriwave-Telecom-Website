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
      id: 1,
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
