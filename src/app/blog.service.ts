import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogList = [
    {
      id: 1,
      title: `Smart Africa and Afriwave Telecom enter into an agreement to advance connectivity and data capacity in Africa`,
      imageUrl: '../../../../assets/francissmart.jpg',
      blogContent: `Ghana's Telecom industry's Interconnect Clearing House (ICH), Afriwave Telecom emerged the Telecom Support Company of the year at the 4th National Communications Awards 2022. The award is in recognition of the company's outstanding strides, success, innovation and tireless effort in the communication and digitalization sector. The ICH was licensed under the Electronic Communication Amendment Act 2016 Act 910 to provide a wide range of services, and as part of the license awarded, Afriwave is authorised to provide a common, independent mechanism for routing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country
Afriwave Telecom has emerged as one of the local leaders in providing telecom solutions and has a track record of utilizing competent skills and expertise to provide a complete range of professional and end to end telecommunication services in the country. Speaking on the award, the Deputy Chief Executive Officer of Afriwave Telecom Ghana Limited, Mr. Francis Poku said the award has motivated him and his team to go the extra mile in making sure the telecom ecosystem in the country becomes viable in terms of Interconnecting.

“Currently, the ICH is connected to all the mobile network operators in the country, namely (AirtelTigo, MTN and Vodafone) providing National Interconnect Clearing House services. Additionally, Afriwave Telecom also provides Interconnect Clearing House services to locally licensed International Wholesale Carriers.” He spoke. He further stated that Afriwave’s Point of Interconnection (POI) locations have been strategically positioned for easy access to existing service provider networks thereby providing clients with efficient and cost-effective options for interconnection. Speaking about the regional market, Mr. Poku noted that, Afriwave Telecom is a member of the Smart Africa Alliance. Smart Africa is a bold and innovative commitment from African Heads of State and Government to accelerate sustainable socio-economic development on the continent ushering Africa into a knowledge economy through affordable access to Broadband and usage of Information and Communications Technologies.

Afriwave is collaborating with Smart Africa Alliance on activities focused on supporting the development of National and Regional Interconnect Clearing House across Africa towards achieving the objectives of One Africa Network Project. He revealed that Afriwave Telecom will soon launch a platform which would create a single point for all Value-Added Service (VAS) providers to gain access to the Mobile network operators (MNOs) from one place.

Mr Poku expressed his appreciation to the hardworking staff of Afriwave Telecom for their immersed contribution to the company's success. " I am humbled and appreciative to the hardworking staff who have enabled Afriwave to achieve this remarkable milestone and has been recognized yet again." The 4th edition of the National Communications Awards (NCA) was held at the Labadi Beach Hotel under the theme: " The Digitalized Economy: Innovation for National Development."

Click here to read the full article.

END`,
      link: '',
      createdAt: new Date('8 Nov 2021'),
      location: 'Accra',
    },
    {
      id: 2,
      title: `Afriwave Telecom provides quality water for the people of Ekye-Amanfrom`,
      imageUrl: '../../../../assets/ep1.jpg',
      blogContent: `Afriwave Telecom Ghana Limited as part of its sustainable Corporate Social Responsibility (CSR) initiative has rehabilitated an existing water facility at Ekye Amanfrom in the Kwahu Afram Plains South District in the Eastern Region of Ghana.
The water facility which was constructed by Millennium International Development Agency (MiDA) has been abandoned by the community for a decade due to the salty taste of the water which was sourced from borehole water. Thanks to Afriwave Telecom, the chiefs, and people of Ekye Amanfrom can now boast of having access to potable water.


The rehabilitated water facility derives its source of water from the Afram River via submersible pumps and pipes which have been extended 750 meters into the river from the shore. Raw water is channelled through treatment plants before it is pumped into water storage tanks to be accessed by the people. The facility which cost GHC42, 800 is expected to provide safe drinking water to over 7000 residents, who were relying on the raw water from the Afram River for their water needs. Speaking at the inauguration ceremony, the Chief Executive Officer (CEO) of Afriwave Telecom, Mr. Francis Poku said access to safe drinking water was a fundamental right of every citizen. 'The provision of the revamp water facility means the community will have access to clean drinking water, which will in turn impact on the health and sanitation of the thousands who desperately need it,' he said.
He further noted that Afriwave as part of its CSR activities is not only providing quality water to communities in need but also supporting education and youth in ICT as the business has given opportunity to students from public and private universities to learn on the job as interns and national service personnel. Mr. Francis Poku assured that Afriwave Telecom will continue to invest in the communities it’s operating in.


The Commercial Director of Afriwave Telecom, Mr. Henry Searyoh stated that Afriwave Telecom is a locally owned organization which has its people at heart and therefore deemed it fit to rise to the call of providing potable water to the people of Ekye Amanfrom when their request was published on Ghana Web and the Ghanaian Times of Tuesday January 28, 2020 with the heading “Kwahu Afram Plains residents cry for potable water”. Mr. Searyoh further said providing water to the people of Ekye Amanfrom is a key ingredient to the fight against COVID-19 which the president of Ghana is doing its best to stop the spread. He added that the company was not only interested in conducting its core business of Interconnecting and providing innovative mobile service solutions to all networks but investing in the communities in which it operates. 'Afriwave is a people-centered brand and we are happy to touch a life by saving the residents of Ekye Amanfrom from drinking unclean water,' he stated. The Chiefs and Assembly members of Ekye Amanfrom expressed their appreciation to Afriwave Telecom for supporting the community, adding, 'We thank God and Afriwave for helping us.'

They further noted that the leadership of the community would work to ensure that the modernized water system is properly maintained. Afriwave Telecom Ghana Limited is a Ghanaian company which has been licensed by the Government of Ghana through the National Communication Authority to operate and manage Ghana’s first Interconnect Clearing House (ICH). The ICH is a single platform which provides access of interconnection to all existing and new network providers.
Afriwave has since going live in May 2016, put in place practical steps for a successful take-off of International Wholesale Carriers,which should translate into creatingadditional employment opportunities to Ghanaians.`,
      link: '',
      createdAt: new Date('7 Sept 2021'),
    },
    {
      id: 3,
      title: `Afriwave Telecom, A licensed Ghanaian Interconnect Clearinghouse (ICH) operator joins the Smart Africa Alliance.`,
      imageUrl: '../../../../assets/smartafrica.jpg',
      blogContent: `Smart Africa has announced that Afriwave Telecom has become the latest private sector member of the Smart Africa Alliance. The organisations will work together towards the vision of transforming Africa into a single digital market. Smart Africa is an alliance of 32 African countries, international organisations and global private sector players tasked with defining Africa’s digital agenda.
The water facility which was constructed by Millennium International Development Agency (MiDA) has been abandoned by the community for a decade due to the salty taste of the water which was sourced from borehole water. Thanks to Afriwave Telecom, the chiefs, and people of Ekye Amanfrom can now boast of having access to potable water.


The alliance is empowered by a bold and innovative commitment by African Heads of State to accelerate sustainable socio-economic development on the continent and usher Africa into the knowledge economy through affordable access to broadband and the use of ICTs. With a vision to create a single digital market in Africa by 2030, the Smart Africa Alliance brings together Heads of State who seek to accelerate the digitalization of the continent and create a common market.


Smart Africa has announced that Afriwave Telecom has become the latest private sector member of the Smart Africa Alliance. The organisations will work together towards the vision of transforming Africa into a single digital market. Smart Africa is an alliance of 32 African countries, international organisations and global private sector players tasked with defining Africa’s digital agenda. The alliance is empowered by a bold and innovative commitment by African Heads of State to accelerate sustainable socio-economic development on the continent and usher Africa into the knowledge economy through affordable access to broadband and the use of ICTs. With a vision to create a single digital market in Africa by 2030, the Smart Africa Alliance brings together Heads of State who seek to accelerate the digitalization of the continent and create a common market.

“The Republic of Ghana has been a committed member of the Smart Africa Alliance therefore it is an honour to welcome the first wholly own Ghanaian company joining the Alliance. More importantly, Afriwave Telecom’s membership presents an opportunity to leverage Afriwave Telecom’s experience and that of other Smart Africa Private Sector members as we take steps towards developing a blueprint for the deployment of national and regional Interconnect Clearinghouse across Africa,” said Mr. Lacina Koné, CEO/Director General, Smart Africa Secretariat.

Afriwave Telecom is a Ghanaian company established in 1998 to provide telecommunications solutions in Ghana and beyond. It is the first and the only licensed Interconnect Clearinghouse (ICH) Operator in Ghana and currently provides national telecommunications interconnect clearinghouse services to licensed Mobile Network Operators (MTN, Vodafone, AirtelTigo and Glo Mobile) in Ghana. Afriwave Telecom also provides international telecommunications interconnect clearinghouse services to International Wholesale Carriers who route international telecom traffic into Ghana. The operations of ICH have brought several benefits to the Ghana telecom sector and Afriwave telecom is looking forward to extending its services to other parts of Africa and therefore ready to collaborate with other stakeholders with similar ambitions and objectives.

“For us in Afriwave Telecom, joining the Smart Africa Alliance is a dream come true and this is because the Smart Africa Alliance has a unique institutional framework that brings together all the relevant stakeholders to accelerate the Africa digital transformation agenda. And we look forward to taking advantage of this unique opportunity to consolidate our operations in Ghana, Africa and other parts of the world. We are also looking forward to collaborating with other Interconnect Clearinghouse Operators in Africa and beyond as we contribute towards achieving the One Africa Network objectives of Smart Africa,”.Mr. Francis Poku, Deputy CEO, Afriwave Telecom.

ICH services provide a simple, cost-effective and reliable point of interconnection and interconnection links leading to a reduction in interconnect OPEX and CAPEX; efficient handling of new and traditional interconnect requirements; provides a point of interconnection and reduces the entry barrier to other service providers into the telecom interconnect ecosystem; provides independent verification and reconciliation of interconnect billing records to enhance quick clearing and settlements among connecting entities.

For more info:
https://smartafrica.org/afriwave-telecom-a-licensed-ghanaian-interconnect-clearinghouse-ich-operator-joins-the-smart-africa-alliance/`,
      link: '',
      createdAt: new Date('6 Sept 2021'),
      location: 'Accra',
    },
    {
      id: 4,
      title: `Afriwave Telecom Recieves Telecom support company of the  year at the 4th national communications awards, 2022`,
      imageUrl: 'https://www.afriwavetelecom.com/img/ncaward.JPG',
      blogContent: `Kigali, Rwanda – Monday, 8th November 2021 - Smart Africa and Afriwave Telecom Ghana Limited have announced a partnership where they will collaborate in the One Africa Network and Interconnect Clearinghouse initiative, the Data Centre and Cloud Project and the Intra-Africa Connectivity project to advance the digital transformation of the continent.

The partnership will also see Smart Africa and Afriwave Telecom providing training for decision makers across Africa through the Smart Africa Digital Academy (SADA) vehicle.


Smart Africa is an alliance of 32 African countries, international organisations and global private sector players tasked with defining Africa’s digital agenda. The alliance is empowered by a bold and innovative commitment by African Heads of State to accelerate sustainable socio-economic development on the continent and usher Africa into the knowledge economy through affordable access to broadband and the use of ICTs. With a vision to create a single digital market in Africa by 2030, the Smart Africa Alliance brings together Heads of State who seek to accelerate the digitalization of the continent and create a common market.


“It is important that we keep Africa’s data within the borders of Africa. In order to achieve that, we must build the capacity to manage and store data on the continent. This partnership with Afriwave Telecom will use African skills to advance Africa’s capacity and digital transformation,” said Mr. Lacina Koné, CEO/Director General, Smart Africa Secretariat.
Afriwave Telecom is a Ghanaian company established in 1998 to provide telecommunications solutions in Ghana and beyond. It is the first and the only licensed Interconnect Clearinghouse (ICH) Operator in Ghana and currently provides national telecommunications interconnect clearinghouse services to licensed Mobile Network Operators (MTN, Vodafone, AirtelTigo and Glo Mobile) in Ghana. Afriwave Telecom also provides international telecommunications interconnect clearinghouse services to International Wholesale Carriers who route international telecom traffic into Ghana. The operations of ICH have brought several benefits to the Ghana telecom sector and Afriwave telecom is looking forward to extending its services to other parts of Africa and therefore ready to collaborate with other stakeholders with similar ambitions and objectives.
“We have often wondered when traffic within Africa will be routed within the borders of the continent. The establishment of intra-African cross-border links and interconnections will create an enabling environment aimed towards achieving the ultimate objective of keeping all African traffic within Africa.” - Mr. Francis Poku, Deputy CEO, Afriwave Telecom. ICH services provide a simple, cost-effective and reliable point of interconnection and interconnection links leading to a reduction in interconnect OPEX and CAPEX; efficient handling of new and traditional interconnect requirements; provides a point of interconnection and reduces the entry barrier to other service providers into the telecom interconnect ecosystem; provides independent verification and reconciliation of interconnect billing records to enhance quick clearing and settlements among connecting entities.

BENEFITS OF ICH
ICT is an enabler for the economy. At Afriwave, we are working through the ICH platform to provide a gateway into the telecom's ecosystem. Provision of financial clearing house services to facilitate easier settlement of interconnect fees amongst MNOs and potential MNOs and VAS providers. Better utilization of Interconnect links. Billing and Mediation services. Integrating other sectors of the economy into the telecom ecosystem will enhance transaction speed and therefore stimulate economic growth. Simple, cost-effective, and reliable Points of Interconnection (POIs). Routing and Reconciliation of Interconnect Traffic between Service Providers: Voice, Short Messaging Service (SMS)
 `,
      link: '',
      createdAt: new Date('Dec 5, 2022'),
      location: 'Accra',
    },
    {
      id: 5,
      title: `Afriwave's founder david opoku recieves top 20 tech leaders award`,
      imageUrl: 'https://www.afriwavetelecom.com/img/David.JPG',
      blogContent: `Afriwave Telecom and its founder Mr David Poku has been awarded at the 12th Ghana Information Technology and Telecom Awards (GITTA) in Accra. While the company was named "Interconnect Clearing Provider of the Year", its founder, Mr David Poku was honored as one of the "Top 20 Telecom Personalities" for promoting excellence in the country.
Mr Poku has strong background in management and telecommunications and has been involved in the telecom industry for the last 25 years helping Afriwave diversify into a giant telecom industry. He maintains and develops Afriwave's vision, oversees policy implementation, seeks to protect Afriwave's image and provides leadership to ensure that it achieves its strategic goals.

The ICH currently carries all interconnect voice traffic in Ghana and is fully connected to all the country's telecom providers, including AirtelTigo, MTN and Vodafone.
Speaking on the award, Mr David Poku said he was pleased Afriwave Telecom was acknowledged for the service it was offering in the country's telecom ecosystem and was especially glad that Afriwave managed to clean Ghana's telecom sector through interconnection. Mr Poku congratulated all of award recipients and urged them to continue working to develop Ghana's telecom sector adding that as a fully Ghanaian company Afriwave Telecom would work harder to enhance interconnection throughout Ghana and beyond.

The theme of this year's GITTA was "Celebrating and Promoting Excellence in the Tech Industry". GITTA establishes a strategic platform to honor, reward and highlight the innovative ICT initiatives advancing Ghana's private and public sectors with the aim of estabilishing a benchmark for the wave of development in the subregion

 `,
      link: 'Oct 27 2022',
      createdAt: new Date('Dec 5, 2022'),
      location: 'Accra',
    },
  ];
  constructor() {}

  /*getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }

  updatePost(post: any): Observable<any> {
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<any>(url, post);
  }

  deletePost(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }*/

  getAllPosts() {
    this.sortPostsByDate();
    return this.blogList;
  }

  getPostById(id: number) {
    return this.blogList.filter((post) => post.id === id)[0];
  }

  getAllRecentPosts(id: number) {
    this.sortPostsByDate();
    return this.blogList.filter((post) => post.id !== id).slice(0, 5);
  }

  private sortPostsByDate(): void {
    this.blogList.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  }
}
