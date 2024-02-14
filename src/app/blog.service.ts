import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogList = [
    {
      id: 6,
      title: `Afriwave Telecom transforms Teshie Orphanage Library into state-of-the-art facility`,
      imageUrl:
        'https://i0.wp.com/gna.org.gh/web/wp-content/uploads/2023/12/Afriwave-orphanage1-scaled.jpg?fit=2560%2C1707&ssl=1',
      blogContent: `
<p>The management and children of Teshie Orphanage were filled with happiness and excitement when Afriwave Telecom Ghana Limited upgraded their library to a modern standard and provided it with state-of-the-art learning equipment.&nbsp;</p>
<br />
<p>Afriwave, an indigenous company that operates and manages Ghana’s interconnect clearing house (ICH), refurbished the library and resourced it with a thousand space bookshelves and six desktop computers with one year of internet subscription.&nbsp;</p>
<br />
<p>Mr. Lord Aboagye, Corporate Affairs Officer of Afriwave Telecom Ghana, said in a statement copied to the Ghana News Agency on Friday that upgrading the Orphanage Library into a cutting-edge facility would greatly help the children. &nbsp;</p>
<br />
<p>The initiative exemplifies Afriwave Telecom’s commitment to supporting and improving educational resources for those who are underprivileged.&nbsp;</p>
<br />
<p>Mr. Francis Poku, Deputy Chief Executive Officer of Afriwave Telecom, was quoted in the statement as adding that the library refurbishment was part of the company’s mission to make a sustainable impact on the lives of disadvantaged children.&nbsp;</p>
<br />
<p>“When we, Afriwave, provide support of any kind, our focus is to look at how sustainable and impactful the support is,” he said, adding, “There is no better way of ensuring the sustainability of an initiative than to invest in the education of our future leaders.”&nbsp;</p>
<br />
<p>He indicated that Afriwave Telecom would soon launch its SMS platform, which would create a single point for all value-added service (VAS) providers to gain access to mobile network operators from one place.&nbsp;</p>
<br />
<p>Shedding light on the SMS platform, Mr. Poku noted that Afriwave’s SMS platform would help expand the communications needs of customers that route through the ICH.&nbsp;</p>
<br />
<p>He further said that the SMS platform would not only expand the communications needs of customers but would also allow them to experience seamless messaging and transparency in billing.&nbsp;</p>
<br />
<p>This would enable customers to stay in control of costs and make informed decisions.&nbsp;</p>
<br />
<p>He urged VAS providers, banks, corporate organisations, and players in the telecom industry to take advantage of the platform for their messaging needs.&nbsp;</p>
<br />
<p>Currently, the ICH is fully connected to all the telecommunication providers in Ghana and is already carrying all interconnect voice traffic in the country.&nbsp;</p>
<br/>
<p>Mr. Poku urged the orphanage to continue to nurture these young children to restore the confidence they need as children to grow into better adults.&nbsp;</p>
<br />
<p>Mr. and Mrs. Parker, founders of the home, thanked Afriwave for their generosity at such a crucial time of the year.&nbsp;</p>
<br />
<p>Mrs. Parker further expressed her gratitude to the entire management and staff of Afriwave for nominating the home to be recognised in such a manner.&nbsp;</p>
<br />
<p>Teshie Orphanage is a private and nongovernmental organisation that provides shelter and a homely atmosphere for orphans and vulnerable children within the Teshie community.&nbsp;</p>
<br />
<p>It is managed with the assistance of benevolent individuals and organisations to educate and care for these children and equip them to face the challenges of the world.&nbsp;</p>


 `,
      link: '',
      createdAt: new Date('Dec 1, 2023'),
      location: 'Accra',
    },
    {
      id: 1,
      title: `Smart Africa and Afriwave Telecom enter into an agreement to advance connectivity and data capacity in Africa`,
      imageUrl: '../../../../assets/smartafrica.jpg',
      blogContent: `<span><p dir="ltr"><span>Kigali, Rwanda &#8211; Monday, 8th November 2021 - Smart Africa and Afriwave Telecom Ghana Limited have announced a partnership where they will collaborate in the One Africa Network and Interconnect ClearingHouse initiative, the Data Centre and Cloud Project and the Intra-Africa Connectivity project to advance the digital transformation of the continent.</span></p><p dir="ltr"><br></p><p dir="ltr"><span></span></p><p dir="ltr"><span>The partnership will also see Smart Africa and Afriwave Telecom providing training for decision makers across Africa through the Smart Africa Digital Academy (SADA) vehicle.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>Smart Africa is an alliance of 32 African countries, international organisations and global private sector players tasked with defining Africa&#8217;s digital agenda. The alliance is empowered by a bold and innovative commitment by African Heads of State to accelerate sustainable socio-economic development on the continent and usher Africa into the knowledge economy through affordable access to broadband and the use of ICTs. With a vision to create a single digital market in Africa by 2030, the Smart Africa Alliance brings together Heads of State who seek to accelerate the digitalization of the continent and create a common market.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>&#8220;It is important that we keep Africa&#8217;s data within the borders of Africa. In order to achieve that, we must build the capacity to manage and store data on the continent. This partnership with Afriwave Telecom will use African skills to advance Africa&#8217;s capacity and digital transformation,&#8221; said Mr. Lacina Kon&#233;, CEO/Director General, Smart Africa Secretariat.</span></p><p dir="ltr"><span>Afriwave Telecom is a Ghanaian company established in 1998 to provide telecommunications solutions in Ghana and beyond. It is the first and the only licensed Interconnect ClearingHouse (ICH) Operator in Ghana and currently provides national telecommunications interconnect ClearingHouse services to licensed Mobile Network Operators (MTN, Vodafone, AirtelTigo and Glo Mobile) in Ghana. Afriwave Telecom also provides international telecommunications interconnect ClearingHouse services to International Wholesale Carriers who route international telecom traffic into Ghana. The operations of ICH have brought several benefits to the Ghana telecom sector and Afriwave telecom is looking forward to extending its services to other parts of Africa and therefore ready to collaborate with other stakeholders with similar ambitions and objectives.</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>&#8220;We have often wondered when traffic within Africa will be routed within the borders of the continent. The establishment of intra-African cross-border links and interconnections will create an enabling environment aimed towards achieving the ultimate objective of keeping all African traffic within Africa.&#8221; - Mr. Francis Poku, Deputy CEO, Afriwave Telecom. ICH services provide a simple, cost-effective and reliable point of interconnection and interconnection links leading to a reduction in interconnect OPEX and CAPEX; efficient handling of new and traditional interconnect requirements; provides a point of interconnection and reduces the entry barrier to other service providers into the telecom interconnect ecosystem; provides independent verification and reconciliation of interconnect billing records to enhance quick clearing and settlements among connecting entities.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>BENEFITS OF ICH</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>ICT is an enabler for the economy. At Afriwave, we are working through the ICH platform to provide a gateway into the telecom's ecosystem. Provision of financial ClearingHouse services to facilitate easier settlement of interconnect fees amongst MNOs and potential MNOs and VAS providers. Better utilization of Interconnect links. Billing and Mediation services. Integrating other sectors of the economy into the telecom ecosystem will enhance transaction speed and therefore stimulate economic growth. Simple, cost-effective, and reliable Points of Interconnection (POIs). Routing and Reconciliation of Interconnect Traffic between Service Providers: Voice, Short Messaging Service (SMS)</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>END</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>About Afriwave Telecom</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>Afriwave Telecom is a wholly Ghanaian company established in 1998 to provide a full range of telecommunication services including equipment supplies, installation contractors, telecom consultants, manufacturers' representatives and value added network services aimed at both private and public sector clients. In February 2015, Afriwave was awarded Ghana&#8217;s first Interconnect ClearingHouse license after a competitive bidding process against four other applicants. As part of the license awarded, Afriwave is authorized, to provide a common, independent mechanism for monitoring, routing, billing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country. www.afriwavetelecom.com Since it started test operations a couple of months ago, Afriwave has in partnership with SIGOS- the worldwide leader in real time SIM Box detection- successfully detected and blocked over 300,000 unauthorized attempts at illegal international call bypass.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>For more information contact:</span></p><p dir="ltr"><span>Lord Aboagye</span></p><p dir="ltr"><span>Media Relations Manager</span></p><p dir="ltr"><span>Afriwave Telecom Ghana Ltd.</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>lord.aboagye@afriwavetelecom.com</span></p></span>`,
      link: '',
      createdAt: new Date('8 Nov 2021'),
      location: 'Accra',
    },
    {
      id: 2,
      title: `Afriwave Telecom provides quality water for the people of Ekye-Amanfrom`,
      imageUrl: '../../../../assets/ep1.jpeg',
      blogContent: `
      <span><p dir="ltr"><span>Afriwave Telecom Ghana Limited as part of its sustainable Corporate Social Responsibility (CSR) initiative has rehabilitated an existing water facility at Ekye Amanfrom in the Kwahu Afram Plains South District in the Eastern Region of Ghana.</span></p><p dir="ltr"><span>The water facility which was constructed by Millennium International Development Agency (MiDA) has been abandoned by the community for a decade due to the salty taste of the water which was sourced from borehole water. Thanks to Afriwave Telecom, the chiefs, and people of Ekye Amanfrom can now boast of having access to potable water.</span></p><p dir="ltr"><br></p><p dir="ltr"><span>The rehabilitated water facility derives its source of water from the Afram River via submersible pumps and pipes which have been extended 750 meters into the river from the shore. Raw water is channelled through treatment plants before it is pumped into water storage tanks to be accessed by the people. The facility which cost GHC42, 800 is expected to provide safe drinking water to over 7000 residents, who were relying on the raw water from the Afram River for their water needs. Speaking at the inauguration ceremony, the Chief Executive Officer (CEO) of Afriwave Telecom, Mr. Francis Poku said access to safe drinking water was a fundamental right of every citizen. 'The provision of the revamp water facility means the community will have access to clean drinking water, which will in turn impact on the health and sanitation of the thousands who desperately need it,' he said.</span></p><p dir="ltr"><span></span></p><p dir="ltr"><span>He further noted that Afriwave as part of its CSR activities is not only providing quality water to communities in need but also supporting education and youth in ICT as the business has given opportunity to students from public and private universities to learn on the job as interns and national service personnel. Mr. Francis Poku assured that Afriwave Telecom will continue to invest in the communities it&#8217;s operating in.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>The Commercial Director of Afriwave Telecom, Mr. Henry Searyoh stated that Afriwave Telecom is a locally owned organization which has its people at heart and therefore deemed it fit to rise to the call of providing potable water to the people of Ekye Amanfrom when their request was published on Ghana Web and the Ghanaian Times of Tuesday January 28, 2020 with the heading &#8220;Kwahu Afram Plains residents cry for potable water&#8221;. Mr. Searyoh further said providing water to the people of Ekye Amanfrom is a key ingredient to the fight against COVID-19 which the president of Ghana is doing its best to stop the spread. He added that the company was not only interested in conducting its core business of Interconnecting and providing innovative mobile service solutions to all networks but investing in the communities in which it operates. 'Afriwave is a people-centered brand and we are happy to touch a life by saving the residents of Ekye Amanfrom from drinking unclean water,' he stated. The Chiefs and Assembly members of Ekye Amanfrom expressed their appreciation to Afriwave Telecom for supporting the community, adding, 'We thank God and Afriwave for helping us.'</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>They further noted that the leadership of the community would work to ensure that the modernized water system is properly maintained. Afriwave Telecom Ghana Limited is a Ghanaian company which has been licensed by the Government of Ghana through the National Communication Authority to operate and manage Ghana&#8217;s first Interconnect ClearingHouse (ICH). The ICH is a single platform which provides access of interconnection to all existing and new network providers.</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>Afriwave has since going live in May 2016, put in place practical steps for a successful take-off of International Wholesale Carriers,which should translate into creatingadditional employment opportunities to Ghanaians.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span><span>END</span></span><br></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span>About Afriwave Telecom</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>Afriwave Telecom is a wholly Ghanaian company established in 1998 to provide a full range of telecommunication services including equipment supplies, installation contractors, telecom consultants, manufacturers' representatives and value added network services aimed at both private and public sector clients. In February 2015, Afriwave was awarded Ghana&#8217;s first Interconnect ClearingHouse license after a competitive bidding process against four other applicants. As part of the license awarded, Afriwave is authorized, to provide a common, independent mechanism for monitoring, routing, billing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>For more information contact:</span></p><p dir="ltr"><span>Lord Aboagye</span></p><p dir="ltr"><span>Media Relation Manager</span></p><p dir="ltr"><span>Afriwave Telecom Ghana Ltd.</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>lord.aboagye@afriwavetelecom.com</span></p><p><span><br></span></p></span>
`,
      link: '',
      createdAt: new Date('7 Sept 2021'),
    },
    {
      id: 3,
      title: `Afriwave Telecom, A licensed Ghanaian Interconnect ClearingHouse (ICH) operator joins the Smart Africa Alliance.`,
      imageUrl: '../../../../assets/smartafrica.jpg',
      blogContent: `<span><p dir="ltr"><span>Smart Africa has announced that Afriwave Telecom has become the latest private sector member of the Smart Africa Alliance. The organisations will work together towards the vision of transforming Africa into a single digital market. Smart Africa is an alliance of 32 African countries, international organisations and global private sector players tasked with defining Africa&#8217;s digital agenda.</span></p><p dir="ltr"><span>The water facility which was constructed by Millennium International Development Agency (MiDA) has been abandoned by the community for a decade due to the salty taste of the water which was sourced from borehole water. Thanks to Afriwave Telecom, the chiefs, and people of Ekye Amanfrom can now boast of having access to potable water.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>The alliance is empowered by a bold and innovative commitment by African Heads of State to accelerate sustainable socio-economic development on the continent and usher Africa into the knowledge economy through affordable access to broadband and the use of ICTs. With a vision to create a single digital market in Africa by 2030, the Smart Africa Alliance brings together Heads of State who seek to accelerate the digitalization of the continent and create a common market.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span><span>Smart Africa has announced that Afriwave Telecom has become the latest private sector member of the Smart Africa Alliance. The organisations will work together towards the vision of transforming Africa into a single digital market. Smart Africa is an alliance of 32 African countries, international organisations and global private sector players tasked with defining Africa&#8217;s digital agenda. The alliance is empowered by a bold and innovative commitment by African Heads of State to accelerate sustainable socio-economic development on the continent and usher Africa into the knowledge economy through affordable access to broadband and the use of ICTs. With a vision to create a single digital market in Africa by 2030, the Smart Africa Alliance brings together Heads of State who seek to accelerate the digitalization of the continent and create a common market.</span></span><br></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span>&#8220;The Republic of Ghana has been a committed member of the Smart Africa Alliance therefore it is an honour to welcome the first wholly own Ghanaian company joining the Alliance. More importantly, Afriwave Telecom&#8217;s membership presents an opportunity to leverage Afriwave Telecom&#8217;s experience and that of other Smart Africa Private Sector members as we take steps towards developing a blueprint for the deployment of national and regional Interconnect ClearingHouse across Africa,&#8221; said Mr. Lacina Kon&#233;, CEO/Director General, Smart Africa Secretariat.</span></span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span>Afriwave Telecom is a Ghanaian company established in 1998 to provide telecommunications solutions in Ghana and beyond. It is the first and the only licensed Interconnect ClearingHouse (ICH) Operator in Ghana and currently provides national telecommunications interconnect ClearingHouse services to licensed Mobile Network Operators (MTN, Vodafone, AirtelTigo and Glo Mobile) in Ghana. Afriwave Telecom also provides international telecommunications interconnect ClearingHouse services to International Wholesale Carriers who route international telecom traffic into Ghana. The operations of ICH have brought several benefits to the Ghana telecom sector and Afriwave telecom is looking forward to extending its services to other parts of Africa and therefore ready to collaborate with other stakeholders with similar ambitions and objectives.</span></span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span>&#8220;For us in Afriwave Telecom, joining the Smart Africa Alliance is a dream come true and this is because the Smart Africa Alliance has a unique institutional framework that brings together all the relevant stakeholders to accelerate the Africa digital transformation agenda. And we look forward to taking advantage of this unique opportunity to consolidate our operations in Ghana, Africa and other parts of the world. We are also looking forward to collaborating with other Interconnect ClearingHouse Operators in Africa and beyond as we contribute towards achieving the One Africa Network objectives of Smart Africa,&#8221;.Mr. Francis Poku, Deputy CEO, Afriwave Telecom.</span></span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span>ICH services provide a simple, cost-effective and reliable point of interconnection and interconnection links leading to a reduction in interconnect OPEX and CAPEX; efficient handling of new and traditional interconnect requirements; provides a point of interconnection and reduces the entry barrier to other service providers into the telecom interconnect ecosystem; provides independent verification and reconciliation of interconnect billing records to enhance quick clearing and settlements among connecting entities.</span></span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span>For more info:</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>https://smartafrica.org/afriwave-telecom-a-licensed-ghanaian-interconnect-ClearingHouse-ich-operator-joins-the-smart-africa-alliance/</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><br></p><p dir="ltr"><span></span></p><p dir="ltr"><span>END</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>About Afriwave Telecom</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>Afriwave Telecom is a wholly Ghanaian company established in 1998 to provide a full range of telecommunication services including equipment supplies, installation contractors, telecom consultants, manufacturers' representatives and value added network services aimed at both private and public sector clients. In February 2015, Afriwave was awarded Ghana&#8217;s first Interconnect ClearingHouse license after a competitive bidding process against four other applicants. As part of the license awarded, Afriwave is authorized, to provide a common, independent mechanism for monitoring, routing, billing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country.</span></p></span>`,
      link: '',
      createdAt: new Date('6 Sept 2021'),
      location: 'Accra',
    },
    {
      id: 4,
      title: `Afriwave Telecom Recieves Telecom support company of the  year at the 4th national communications awards, 2022`,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/afriwave-telecom-site-rebuild.appspot.com/o/ncawardLarge.jpeg?alt=media&token=1d5ae5f5-5c0b-49a9-ab7e-f448f4da750a',
      blogContent: `
      <span><p dir="ltr"><span></span></p><p dir="ltr"><span></span></p><p dir="ltr"><span>Ghana's Telecom industry's Interconnect ClearingHouse (ICH), Afriwave Telecom emerged the Telecom Support Company of the year at the 4th National Communications Awards 2022. The award is in recognition of the company's outstanding strides, success, innovation and tireless effort in the communication and digitalization sector. The ICH was licensed under the Electronic Communication Amendment Act 2016 Act 910 to provide a wide range of services, and as part of the license awarded, Afriwave is authorised to provide a common, independent mechanism for routing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country</span></p><p dir="ltr"><span><span>Afriwave Telecom has emerged as one of the local leaders in providing telecom solutions and has a track record of utilizing competent skills and expertise to provide a complete range of professional and end to end telecommunication services in the country. Speaking on the award, the Deputy Chief Executive Officer of Afriwave Telecom Ghana Limited, Mr. Francis Poku said the award has motivated him and his team to go the extra mile in making sure the telecom ecosystem in the country becomes viable in terms of Interconnecting.</span></span><br></p><p dir="ltr"><span><span><br></span></span></p><p dir="ltr"><span><span>&#8220;Currently, the ICH is connected to all the mobile network operators in the country, namely (AirtelTigo, MTN and Vodafone) providing National Interconnect ClearingHouse services. Additionally, Afriwave Telecom also provides Interconnect ClearingHouse services to locally licensed International Wholesale Carriers.&#8221; He spoke. He further stated that Afriwave&#8217;s Point of Interconnection (POI) locations have been strategically positioned for easy access to existing service provider networks thereby providing clients with efficient and cost-effective options for interconnection. Speaking about the regional market, Mr. Poku noted that, Afriwave Telecom is a member of the Smart Africa Alliance. Smart Africa is a bold and innovative commitment from African Heads of State and Government to accelerate sustainable socio-economic development on the continent ushering Africa into a knowledge economy through affordable access to Broadband and usage of Information and Communications Technologies.</span></span><span><span><br></span></span></p><p dir="ltr"><span><span>Afriwave is collaborating with Smart Africa Alliance on activities focused on supporting the development of National and Regional Interconnect ClearingHouse across Africa towards achieving the objectives of One Africa Network Project. He revealed that Afriwave Telecom will soon launch a platform which would create a single point for all Value-Added Service (VAS) providers to gain access to the Mobile network operators (MNOs) from one place.</span></span><span><span><br></span></span></p><p dir="ltr"><span><span><br></span></span></p><p dir="ltr"><span><span>Mr Poku expressed his appreciation to the hardworking staff of Afriwave Telecom for their immersed contribution to the company's success. &#34; I am humbled and appreciative to the hardworking staff who have enabled Afriwave to achieve this remarkable milestone and has been recognized yet again.&#34; The 4th edition of the National Communications Awards (NCA) was held at the Labadi Beach Hotel under the theme: &#34; The Digitalized Economy: Innovation for National Development.&#34;</span></span><span><span><br></span></span></p><p dir="ltr"><br></p><p dir="ltr"><span><span>Click </span><a href="https://www.ghanaweb.com/GhanaHomePage/business/Afriwave-Telecom-receives-an-award-at-the-4th-National-Communications-Awards-2022-1674353"><span>here</span></a><span> to read the full article. </span></span><br></p><p dir="ltr"><span><span>END</span></span><br></p><p dir="ltr"><span><span><br></span></span></p><p dir="ltr"><span>About Afriwave Telecom</span></p><p dir="ltr"><span></span></p><p dir="ltr"><span>Afriwave Telecom is a wholly Ghanaian company established in 1998 to provide a full range of telecommunication services including equipment supplies, installation contractors, telecom consultants, manufacturers' representatives and value added network services aimed at both private and public sector clients. In February 2015, Afriwave was awarded Ghana&#8217;s first Interconnect ClearingHouse license after a competitive bidding process against four other applicants. As part of the license awarded, Afriwave is authorized, to provide a common, independent mechanism for monitoring, routing, billing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>For more information contact:</span></p><p dir="ltr"><span>Lord Aboagye</span></p><p dir="ltr"><span>Media Relation Manager</span></p><p dir="ltr"><span>Afriwave Telecom Ghana Ltd.</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>lord.aboagye@afriwavetelecom.com</span></p></span>
 `,
      link: '',
      createdAt: new Date('Dec 5, 2022'),
      location: 'Accra',
    },
    {
      id: 5,
      title: `Afriwave's founder david poku recieves top 20 tech leaders award`,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/afriwave-telecom-site-rebuild.appspot.com/o/David.jpeg?alt=media&token=2eed488a-c61e-4e44-b7f7-c7f1e1fc1d68',
      blogContent: `
<span><p dir="ltr"><span></span></p><p dir="ltr"><span>Afriwave Telecom and its founder Mr David Poku has been awarded at the 12th Ghana Information Technology and Telecom Awards (GITTA) in Accra. While the company was named &#34;Interconnect Clearing Provider of the Year&#34;, its founder, Mr David Poku was honored as one of the &#34;Top 20 Telecom Personalities&#34; for promoting excellence in the country. </span><span>Mr Poku has strong background in management and telecommunications and has been involved in the telecom industry for the last 25 years helping Afriwave diversify into a giant telecom industry. He maintains and develops Afriwave's vision, oversees policy implementation, seeks to protect Afriwave's image and provides leadership to ensure that it achieves its strategic goals.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>The ICH currently carries all interconnect voice traffic in Ghana and is fully connected to all the country's telecom providers, including AirtelTigo, MTN and Vodafone.</span></p><p dir="ltr"><span></span></p><p dir="ltr"><span>Speaking on the award, Mr David Poku said he was pleased Afriwave Telecom was acknowledged for the service it was offering in the country's telecom ecosystem and was especially glad that Afriwave managed to clean Ghana's telecom sector through interconnection. Mr Poku congratulated all of award recipients and urged them to continue working to develop Ghana's telecom sector adding that as a fully Ghanaian company Afriwave Telecom would work harder to enhance interconnection throughout Ghana and beyond.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span><span><span>The theme of this year's GITTA was &#34;Celebrating and Promoting Excellence in the Tech Industry&#34;. GITTA establishes a strategic platform to honor, reward and highlight the innovative ICT initiatives advancing Ghana's private and public sectors with the aim of estabilishing a benchmark for the wave of development in the subregion</span></span><br></span></p><p dir="ltr"><span><span><span><br></span></span></span></p><p dir="ltr"><span><span><span>Click </span><a href="https://gna.org.gh/2022/10/afriwave-founder-david-poku-receives-top-20-tech-leaders-award/?fbclid=IwAR2bGoCgHGPGONne5apNd5OnkT3VqV1nriy5NKI58wVmX0LmYdGMAkKAJBw"><span>here</span></a><span> to read the full article.&#160; </span></span><span><span><br></span></span></span></p><p dir="ltr"><br></p><p dir="ltr"><span><span>END</span></span><br></p><p dir="ltr"><span><span><br></span></span></p><p dir="ltr"><span>About Afriwave Telecom</span></p><p dir="ltr"><span></span></p><p dir="ltr"><span>Afriwave Telecom is a wholly Ghanaian company established in 1998 to provide a full range of telecommunication services including equipment supplies, installation contractors, telecom consultants, manufacturers' representatives and value added network services aimed at both private and public sector clients. In February 2015, Afriwave was awarded Ghana&#8217;s first Interconnect ClearingHouse license after a competitive bidding process against four other applicants. As part of the license awarded, Afriwave is authorized, to provide a common, independent mechanism for monitoring, routing, billing and settlement of local and international interconnect traffic for all existing and future telecommunications operators in the country.</span></p><p dir="ltr"><span><br></span></p><p dir="ltr"><span>For more information contact:</span></p><p dir="ltr"><span>Lord Aboagye</span></p><p dir="ltr"><span>Media Relation Manager</span></p><p dir="ltr"><span>Afriwave Telecom Ghana Ltd.</span></p><p dir="ltr"><span><span></span></span></p><p dir="ltr"><span>lord.aboagye@afriwavetelecom.com</span></p></span>


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
