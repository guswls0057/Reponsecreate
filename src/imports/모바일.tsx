import svgPaths from "./svg-m50ips32pj";
import img01 from "figma:asset/14d2fecdbf7653a9d71368c5d818864c90989c0a.png";
import img from "figma:asset/d48c75188f91a10887f98773d3d752241341e480.png";
import img1 from "figma:asset/0a77e078790626b0639d2311697c86c3f1ce951c.png";
import img2 from "figma:asset/8be7303e3d03e42c024291d2d6959464b16ebeb5.png";
import img3 from "figma:asset/e2b28d6ce67eee985cddeb730ba79ffa5da05617.png";
import imgImgi1305625D254Bc33Debd5Dbe07Ce4E8Bd6C10E58A6151195X18271 from "figma:asset/3cec76513281bfa29a713170550663dbafcbefd7.png";
import imgImgi139E23122Cffca38034Faa39556722Dbe7316418A891000X15001 from "figma:asset/5fe14a2f1fcdb95ea7617ee37ca0eb3029e5cd2a.png";
import imgImgi16Image1 from "figma:asset/6b7f8319b7ee8897319de1fa99b993d8ab3cae42.png";
import imgImgi17Image1 from "figma:asset/fa7efd3aee4e9589eb61778d11b2efe3ef4554ef.png";
import imgImgi14Image1 from "figma:asset/3429a330cb68d3b5c61a3f04c4083506db35e971.png";
import imgImgi15Image1 from "figma:asset/c61320b46522fb615b5544b186afee09baa1d8cf.png";
import imgImgi3273C1D91E8Acfa416C161611Bab92Feffac4A7Ac31123X20001 from "figma:asset/459b332d3781873ebc5768d80e59bd43af9b5053.png";
import imgImgi34Aad061F4Ec21F54D7094661A3F6Bf8398C9E77Ea1123X20001 from "figma:asset/575f46c05d0ea3d101689500eb6411755b6e17ec.png";
import imgImgi359607E0F8F0D8739F285Bf2393E43186A4C33A95F1123X20001 from "figma:asset/72add292482a37749a10f4147f5507643ddf6a70.png";
import imgImgi335B7072469E29Bcded00F93Dfd93617Ae163123181125X20001 from "figma:asset/f51c2dc7d46f53e3336263edece2b7cfe1294723.png";

function IconamoonSearchThin() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="iconamoon:search-thin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="iconamoon:search-thin">
          <path d={svgPaths.p3571ef00} id="Vector" stroke="var(--stroke-0, #3E322E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0" data-name="찾기, 주문">
      <IconamoonSearchThin />
      <div className="bg-[#4f5d3d] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[50px] shrink-0" data-name="메인버튼">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#d9c5b2] text-[14px] whitespace-nowrap">Order</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="상단바">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#3e322e] text-[16px] tracking-[-0.8px] whitespace-nowrap">Menu</p>
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col h-[738px] items-center overflow-clip relative shrink-0 w-full" data-name="섹션01">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img01} />
      <Component1 />
    </div>
  );
}

function Component4() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0" data-name="판매메뉴">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#aeb4a6] text-[36px] text-left tracking-[-3.6px] whitespace-nowrap">Staples</p>
    </button>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="판매메뉴">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[36px] tracking-[-3.6px] whitespace-nowrap">New Arrivals</p>
    </div>
  );
}

function Component6() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0" data-name="판매메뉴">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#aeb4a6] text-[36px] text-left tracking-[-3.6px] whitespace-nowrap">Bestsellers</p>
    </button>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="상품유형">
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[444px] relative shrink-0 w-full" data-name="오트">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#efede7] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[12px] w-[244px]" data-name="상품명/가격">
      <p className="relative shrink-0 w-full">Brixy Shampoo Bar</p>
      <p className="relative shrink-0 w-full">$16.00</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[444px] relative shrink-0 w-full" data-name="오트">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#efede7] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={img1} />
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[12px] w-[244px]" data-name="상품명/가격">
      <p className="relative shrink-0 w-full">Penne, Semolina</p>
      <p className="relative shrink-0 w-full">$0.99–7.21</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-[444px] relative shrink-0 w-full" data-name="오트">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#efede7] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={img2} />
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[12px] w-[244px]" data-name="상품명/가격">
      <p className="relative shrink-0 w-full">Almond Butter, Raw, Jar</p>
      <p className="relative shrink-0 w-full">$22.00</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="h-[444px] relative shrink-0 w-full" data-name="오트">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#efede7] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={img3} />
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[12px] w-[244px]" data-name="상품명/가격">
      <p className="relative shrink-0 w-full">Nutritional Yeast, Small Flake</p>
      <p className="relative shrink-0 w-full">$1.36–16.95</p>
    </div>
  );
}

function Component21() {
  return (
    <button className="block cursor-pointer relative size-[48px]" data-name="오른쪽화살표">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ì¤ë¥¸ìª½íì´í">
          <path d={svgPaths.p3a1a3cf2} fill="var(--fill-0, #4F5D3D)" id="Vector" />
          <path d={svgPaths.pcca0f80} fill="var(--fill-0, #4F5D3D)" id="Vector_2" />
        </g>
      </svg>
    </button>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[42px] items-center leading-[0] left-0 text-[#4f5d3d] text-[80px] top-0 tracking-[-4px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`rethink   reuse   refill`}</p>
      </div>
      <div className="flex flex-col h-[96px] justify-center relative shrink-0 w-[664px]">
        <p className="leading-[1.2] whitespace-pre-wrap">{`rethink   reuse   refill`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`rethink   reuse   refill`}</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-white h-[493px] overflow-clip relative rounded-[500px] shrink-0 w-full" data-name="카드사진">
      <div className="absolute h-[545px] left-[-15.5px] top-[-26px] w-[356px]" data-name="imgi_130_5625d254bc33debd5dbe07ce4e8bd6c10e58a615-1195x1827 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[90.88%] left-[4.61%] max-w-none top-[4.7%] w-[91%]" src={imgImgi1305625D254Bc33Debd5Dbe07Ce4E8Bd6C10E58A6151195X18271} />
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[11px] items-center relative shrink-0 text-[#4f5d3d] text-center w-full" data-name="카드문구">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[44px] tracking-[-4.4px] w-[379px]">Stay in the Loop</p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[15px] w-[261px]">From sustainable lifestyle guides to zero-waste recipes, we’re sharing it all on the blog.</p>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[282px]" data-name="카드문구/버튼">
      <Component24 />
      <div className="bg-[#d9c5b2] content-stretch flex h-[34px] items-center justify-center p-[16px] relative rounded-[50px] shrink-0 w-[111px]" data-name="본문버튼">
        <div aria-hidden="true" className="absolute border border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[14px] whitespace-nowrap">The Scoop</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center py-[16px] relative shrink-0 w-[400px]" data-name="섹션03">
      <div className="bg-[#d9c5b2] h-[100px] overflow-clip relative shrink-0 w-full" data-name="모바일 배너">
        <Frame />
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[325px]" data-name="모바일\카드">
        <Component22 />
        <Component23 />
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-white h-[493px] overflow-clip relative rounded-[500px] shrink-0 w-full" data-name="카드사진">
      <div className="absolute h-[493px] left-[-2px] top-0 w-[329px]" data-name="imgi_139_e23122cffca38034faa39556722dbe7316418a89-1000x1500 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi139E23122Cffca38034Faa39556722Dbe7316418A891000X15001} />
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[11px] items-center relative shrink-0 text-[#4f5d3d] text-center w-full" data-name="카드문구">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[44px] tracking-[-4.4px] w-[379px]">We Pop Up!</p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[15px] w-[261px]">Party at your place? Hosting an event? Book our popup shop to give your guests a sustainable experience.</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[282px]" data-name="카드문구/버튼">
      <Component27 />
      <div className="bg-[#d9c5b2] content-stretch flex h-[34px] items-center justify-center p-[16px] relative rounded-[50px] shrink-0 w-[111px]" data-name="본문버튼">
        <div aria-hidden="true" className="absolute border border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[14px] whitespace-nowrap">PopUp Shop</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="bg-white h-[493px] overflow-clip relative rounded-[500px] shrink-0 w-full" data-name="카드사진">
      <div className="absolute h-[493px] left-[-2px] top-0 w-[329px]" data-name="imgi_139_e23122cffca38034faa39556722dbe7316418a89-1000x1500 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi139E23122Cffca38034Faa39556722Dbe7316418A891000X15001} />
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[16px] items-center relative shrink-0 text-[#4f5d3d] text-center w-full" data-name="카드문구">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[44px] tracking-[-4.4px] w-[379px]">Zero-Waste Breakroom</p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[15px] w-[261px]">Achieve your corporate sustainability goals by switching to package-free office snacks!</p>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[282px]" data-name="카드문구/버튼">
      <Component30 />
      <div className="bg-[#d9c5b2] content-stretch flex h-[34px] items-center justify-center p-[16px] relative rounded-[50px] shrink-0 w-[111px]" data-name="본문버튼">
        <div aria-hidden="true" className="absolute border border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[14px] text-center whitespace-nowrap">Snack Rack</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-end relative shrink-0 w-full" data-name="카테고리">
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">Snacks</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">{`Bath & Body`}</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">Household</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">Reusables</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">{`Oils, Vinegars & Honey`}</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">{` Nuts & Seeds`}</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">{`Coffee & Tea`}</p>
      </div>
      <div className="content-stretch flex flex-col h-[33px] items-center justify-center relative shrink-0 w-full" data-name="상품카테고리">
        <p className="font-['Noto_Serif_KR:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[40px] tracking-[-4px] whitespace-nowrap">Superfoods</p>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex flex-col h-[37px] items-center justify-center relative shrink-0 w-[104px]" data-name="상품카테고리">
      <div className="bg-[#d9c5b2] content-stretch flex h-[34px] items-center justify-center p-[16px] relative rounded-[50px] shrink-0 w-[90px]" data-name="본문버튼">
        <div aria-hidden="true" className="absolute border border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px relative text-[#4f5d3d] text-[16px] text-center">
          <p className="leading-[1.2] whitespace-pre-wrap">{`More  +`}</p>
        </div>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[153px] top-[36px] w-[113px]" data-name="상품카테고리/더보기">
      <Component32 />
      <Component33 />
    </div>
  );
}

function La() {
  return (
    <div className="relative size-[30px]" data-name="la">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2188)" id="la">
          <path d={svgPaths.p1ec2ec00} fill="var(--fill-0, #4F5D3D)" id="Vector" />
          <g id="Group">
            <g id="Vector_2" />
            <path d={svgPaths.p28e4e700} id="Vector_3" stroke="var(--stroke-0, #4F5D3D)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2188">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#d9c5b2] h-[457px] overflow-clip relative shrink-0 w-[400px]" data-name="섹션06">
      <div className="absolute h-[58px] left-[300px] top-[253px] w-[47px]" data-name="imgi_16_image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi16Image1} />
      </div>
      <div className="absolute left-[12px] size-[68px] top-[171px]" data-name="imgi_17_image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-80 pointer-events-none size-full" src={imgImgi17Image1} />
      </div>
      <div className="absolute h-[50px] left-[255px] top-[146px] w-[47px]" data-name="imgi_14_image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi14Image1} />
      </div>
      <div className="absolute h-[42px] left-[111px] top-[30px] w-[30px]" data-name="imgi_15_image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi15Image1} />
      </div>
      <Component31 />
      <div className="absolute flex items-center justify-center left-[305.43px] size-[38.457px] top-[64.51px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.02deg]">
          <La />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="섹션07">
      <div className="relative shrink-0" data-name="픽업">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[66px] py-[118px] relative rounded-[inherit]">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[20px] whitespace-nowrap">Order Pickup</p>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#4f5d3d] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[255px] relative rounded-[175px] shrink-0 w-[260px]" data-name="상점이동">
        <div aria-hidden="true" className="absolute border-2 border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[175px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[129px] py-[146px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-[58px] justify-center leading-[0] relative shrink-0 text-[#4f5d3d] text-[20px] text-center w-[220px]">
              <p className="leading-[1.2] whitespace-pre-wrap">{`Order  Delivery`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0" data-name="인스타그램">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[15px] whitespace-nowrap">Follow us on Instagram</p>
      <div className="bg-[#d9c5b2] content-stretch flex h-[34px] items-center justify-center p-[16px] relative rounded-[50px] shrink-0 w-[120px]" data-name="본문버튼">
        <div aria-hidden="true" className="absolute border border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Arial:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4f5d3d] text-[14px] whitespace-nowrap">@re_grocery</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] h-[368px] overflow-clip relative shrink-0 w-full" data-name="콜라주">
      <div className="col-1 justify-self-start relative row-1 self-start shrink-0 size-[180px]" data-name="imgi_32_73c1d91e8acfa416c161611bab92feffac4a7ac3-1123x2000 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179.09%] left-0 max-w-none top-[-41.75%] w-[99.96%]" src={imgImgi3273C1D91E8Acfa416C161611Bab92Feffac4A7Ac31123X20001} />
        </div>
      </div>
      <div className="col-1 justify-self-start relative row-2 self-start shrink-0 size-[180px]" data-name="imgi_34_aad061f4ec21f54d7094661a3f6bf8398c9e77ea-1123x2000 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179.11%] left-[-0.06%] max-w-none top-[-39.45%] w-full" src={imgImgi34Aad061F4Ec21F54D7094661A3F6Bf8398C9E77Ea1123X20001} />
        </div>
      </div>
      <div className="col-2 justify-self-start relative row-2 self-start shrink-0 size-[180px]" data-name="imgi_35_9607e0f8f0d8739f285bf2393e43186a4c33a95f-1123x2000 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179.39%] left-[-3.15%] max-w-none top-[-40.25%] w-[103%]" src={imgImgi359607E0F8F0D8739F285Bf2393E43186A4C33A95F1123X20001} />
        </div>
      </div>
      <div className="col-2 justify-self-start relative row-1 self-start shrink-0 size-[180px]" data-name="imgi_33_5b7072469e29bcded00f93dfd93617ae16312318-1125x2000 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[172.91%] left-0 max-w-none top-[-34.02%] w-[99.87%]" src={imgImgi335B7072469E29Bcded00F93Dfd93617Ae163123181125X20001} />
        </div>
      </div>
    </div>
  );
}

function Sns() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[44px] relative shrink-0 w-[368px]" data-name="sns사진">
      <Component35 />
      <Component36 />
    </div>
  );
}

function Component38() {
  return (
    <div className="relative shrink-0 w-full" data-name="푸터문구01">
      <div className="content-stretch flex flex-col gap-[27px] items-start px-[27px] relative text-[#f1f2eb] w-full">
        <p className="font-['Noto_Serif_KR:SemiBold',sans-serif] font-semibold h-[75px] leading-[1.2] relative shrink-0 text-[64px] tracking-[-3.2px] w-full">{`re_ `}</p>
        <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[15px] w-full whitespace-pre-wrap">
          <p className="leading-[1.35] mb-0">{` re_ makes it easier and more affordable to shop sustainably. To do better than recycling. To say no to plastic altogether. Thanks to you, we’ve diverted over 500,000 items of `}</p>
          <p className="leading-[1.35] mb-0">{`packaging from landfill since opening on `}</p>
          <p className="leading-[1.35]">Earth Day 2020.</p>
        </div>
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center leading-[1.2] relative shrink-0 w-full" data-name="푸터문구02">
      <p className="font-['Noto_Serif_KR:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#f1f2eb] text-[26px] tracking-[-1.3px] w-[min-content]">{`Let's Keep in Touch`}</p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#f1f2eb] text-[16px] tracking-[-0.48px] w-[min-content]">Sign-up for 10% off your first online order</p>
      <button className="bg-[#f1f2eb] content-stretch cursor-pointer flex font-['Arial:Regular',sans-serif] gap-[234px] h-[33px] items-center not-italic px-[20px] relative shrink-0 text-[14px] text-center w-[370px]" data-name="이메일 입력폼">
        <p className="relative shrink-0 text-[#aeb4a6] whitespace-nowrap">Email</p>
        <p className="relative shrink-0 text-[#4f5d3d] w-[67px]">Subscribe</p>
      </button>
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 w-full" data-name="푸터문구02">
      <div className="content-stretch flex flex-col items-start px-[27px] relative w-full">
        <Component39 />
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[27px] items-start min-h-px min-w-px relative" data-name="문구1">
      <p className="relative shrink-0 tracking-[-0.36px] w-full">Our Ethos</p>
      <p className="relative shrink-0 w-full">FAQs</p>
      <p className="relative shrink-0 w-full">Glossary</p>
      <p className="relative shrink-0 w-full">Press</p>
      <p className="relative shrink-0 w-full">Careers</p>
      <p className="relative shrink-0 w-full">E-Gift Cards</p>
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[75px]" data-name="문구2">
      <p className="h-[16px] relative shrink-0 w-full">Blog: The Scoop</p>
      <p className="h-[16px] relative shrink-0 w-full">PopUp Shop</p>
      <p className="h-[16px] relative shrink-0 w-full">Snack Rack</p>
      <p className="h-[16px] relative shrink-0 w-full">Instagram</p>
      <p className="h-[16px] relative shrink-0 w-full">TikTok</p>
      <p className="h-[16px] relative shrink-0 w-full">Facebook</p>
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[233px] items-start relative shrink-0 w-[85px]" data-name="문구3">
      <p className="relative shrink-0 w-full">club / re_</p>
      <p className="relative shrink-0 w-full">Account</p>
      <p className="relative shrink-0 w-full">Locations</p>
      <p className="relative shrink-0 w-full">Returns</p>
      <p className="relative shrink-0 w-full">Privacy</p>
      <p className="relative shrink-0 w-full">Terms</p>
    </div>
  );
}

function Component40() {
  return (
    <div className="relative shrink-0 w-full" data-name="푸터문구03">
      <div className="content-stretch flex font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[49px] items-start leading-[1.2] px-[27px] relative text-[#f1f2eb] text-[12px] w-full">
        <Component41 />
        <Component42 />
        <Component43 />
      </div>
    </div>
  );
}

function Component44() {
  return (
    <div className="h-[41px] relative shrink-0 w-[53px]" data-name="다운로드 (4) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 41">
        <g clipPath="url(#clip0_1_2165)" id="ë¤ì´ë¡ë (4) 1">
          <path d={svgPaths.p14a5ad00} fill="var(--fill-0, #F1F2EB)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2165">
            <rect fill="white" height="41" width="53" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 w-full" data-name="푸터문구04">
      <div className="content-stretch flex flex-col gap-[30px] items-start px-[27px] relative w-full">
        <Component44 />
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[#f1f2eb] text-[12px] tracking-[-0.36px] w-[min-content]">© 2026 re grocery inc. All rights reserved</p>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="bg-[#4f5d3d] content-stretch flex flex-col gap-[52px] h-[902px] items-start overflow-clip py-[32px] relative shrink-0 w-[402px]" data-name="푸터">
      <Component38 />
      <Component11 />
      <Component40 />
      <Component13 />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="푸터">
      <Sns />
      <Component37 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#d9c5b2] content-stretch flex flex-col gap-[27px] items-center relative size-full" data-name="모바일">
      <Component10 />
      <div className="content-stretch flex flex-col gap-[27px] h-[565px] items-center overflow-clip relative shrink-0 w-[388px]" data-name="섹션02">
        <Component3 />
        <div className="h-[495px] overflow-clip relative shrink-0 w-[372px]" data-name="모바일/뉴어라이블 캐러셀">
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[372px]" data-name="데스크탑모바일/콘텐츠카드">
            <Component7 />
            <Component8 />
          </div>
          <div className="absolute left-[1596px] rounded-[175px] size-[300px] top-[91px]" data-name="상점이동">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[129px] py-[146px] relative rounded-[inherit] size-full">
              <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal h-[58px] leading-[1.2] relative shrink-0 text-[#4f5d3d] text-[24px] text-center w-[220px]">Shop All New Arrivals</p>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#4f5d3d] border-solid inset-0 pointer-events-none rounded-[175px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[399px] top-0 w-[372px]" data-name="데스크탑모바일/콘텐츠카드">
            <Component9 />
            <Component16 />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[798px] top-0 w-[372px]" data-name="데스크탑모바일/콘텐츠카드">
            <Component17 />
            <Component18 />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[1197px] top-0 w-[372px]" data-name="데스크탑모바일/콘텐츠카드">
            <Component19 />
            <Component20 />
          </div>
          <div className="absolute flex items-center justify-center left-[333px] size-[48px] top-[225px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <Component21 />
            </div>
          </div>
        </div>
      </div>
      <Component12 />
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center py-[27px] relative shrink-0 w-[325px]" data-name="섹션04">
        <Component25 />
        <Component26 />
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center py-[8px] relative shrink-0 w-[325px]" data-name="섹션05">
        <Component28 />
        <Component29 />
      </div>
      <Component14 />
      <Component15 />
      <Component34 />
    </div>
  );
}