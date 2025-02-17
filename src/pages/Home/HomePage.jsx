import React from "react";
import HeroSection from "./HeroSection";
import HomeContentLayout from "./ContentLayout/HomeContentLayout.jsx";
import contentImage1 from "../../assets/images/home_content_img1.png";
import contentImage2 from "../../assets/images/home_content_img2.png";
import contentImageBg1 from "../../assets/images/home_content_bg1.png";
import contentImageBg2 from "../../assets/images/home_content_bg2.png";

import ContentList from "./ContentLayout/ContentList.jsx";
import { listData1, listData2 } from "../../data/homePageData.jsx";
import Wrapper from "../../components/ui/Wrapper.jsx";
import AboutSection from "./AboutSection.jsx";
import TeamCrousel from "./Crousel/TeamCrousel.jsx";
import ClientCrousel from "./Crousel/ClientCrousel.jsx";

export default function () {
  return (
    <>
      <HeroSection />

      {/* our services section */}
      <Wrapper>
        <h1 className="font-bold text-5xl text-center mb-7">Our Services</h1>

        <HomeContentLayout>
          <div className="relative flex-1 ">
            <img src={contentImage1} className="relative"/>
            <img
              src={contentImageBg1}
              className="absolute -top-9 max-w-[450px] w-[70%]  -z-50 left-0"
            />
            <img
              src={contentImageBg2}
              className="absolute bottom-0 max-w-[450px]  w-[70%] -z-50 left-24"
            />
          </div>

          <ContentList data={listData1} />
        </HomeContentLayout>
      </Wrapper>

      {/* Our features section */}
      <Wrapper>
        <h1 className="font-bold text-5xl text-center mb-7">Our Features</h1>
        <HomeContentLayout>
          <ContentList data={listData2} />

          <div className="relative flex-1">
            <img src={contentImage2} />
            <img
              src={contentImageBg1}
              className="absolute -top-5 max-w-[450px] w-[70%]  -z-50 left-0"
            />
            <img
              src={contentImageBg2}
              className="absolute bottom-0 max-w-[450px] w-[70%]  -z-50 left-24"
            />
          </div>
        </HomeContentLayout>
      </Wrapper>

{/* clients review */}

<Wrapper properties={"flex flex-col items-center"}>
  <h1 className="font-bold text-5xl text-center mb-7 pb-3 border-b-2">What Our Clients Say?</h1>
<ClientCrousel/>
</Wrapper>


{/* analysis */}
<Wrapper properties="bg-black py-10 flex flex-row justify-center text-center gap-20 text-white">
  <div>
<h1 className="text-4xl font-medium mb-2">850+</h1>
<p className="text-2xl font-normal">Happy Client</p>
  </div>
  <div>
<h1 className="text-4xl font-medium mb-2">60+</h1>
<p className="text-2xl font-normal">Number of Cars</p>
  </div>
  <div>
<h1 className="text-4xl font-medium mb-2">0+</h1>
<p className="text-2xl font-normal">Car Center</p>
  </div>
  <div>
<h1 className="text-4xl font-medium mb-2">0+</h1>
<p className="text-2xl font-normal">Total Kilometers</p>
  </div>
</Wrapper>


{/* About us */}

<AboutSection/>

{/* Our Team */}

<Wrapper>
<h1 className="font-bold text-5xl text-center mb-3">Our Leadership Team</h1>
<p className="text-2xl font-normal text-center">Meet the people behind our success</p>

<TeamCrousel/>
</Wrapper>



    </>
  );
}
