let arr=[
    "./slider image/slider-1.webp",
    "./slider image/slider-2.webp",
    "./slider image/slider-3.webp",
    "./slider image/slider-4.webp",
    "./slider image/slider-5.webp",
    "./slider image/slider-6.webp",
    "./slider image/slider-7.webp",
    "./slider image/slider-8.webp",
    "./slider image/slider-9.webp"
];
let i=0;
 let int=setInterval(() => {
   
        document.querySelector("#slider-image").src=arr[i];
       i++;
       if(i>8){
        i=0;
       }
  
}, 4000);




let kids=[
    {
     "price": "943",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17170628/2022/2/16/1ba133f6-2c51-4e20-adc5-b7d4d3bcb2af1645003544029KID1BoysBlueLayeredPureCottonKurtawithDhotiPants1.jpg",
     "brand": "For Boys",
     "id": "1"
    },
    {
     "price": "900",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/26/07837259-ff86-4e2a-b4f5-6da6d2b92d401614340366668-1.jpg",
     "brand": "For Girls",
     "id": "2"
    },
    {
     "price": "297",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16399906/2021/12/7/7b37ca01-ca51-4838-a007-7673b2471ecf1638883804381HopscotchBoysBlue1.jpg",
     "brand": "For Boys",
     "id": "3"
    },
    {
     "price": "309",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20412130/2022/10/15/f3b2909f-ad6b-4acf-b45c-828460c823691665802430821Printedjerseytop1.jpg",
     "brand": "For Girls",
     "id": "4"
    },
    {
     "price": "862",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19662810/2022/8/25/62f4ec2a-cdf3-4cdc-a35c-3144b02d736d1661432266938ATUNBoysShirt1.jpg",
     "brand": "For Boys",
     "id": "5"
    },
    {
     "price": "232",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17786148/2022/7/2/8dfed1c9-4473-4685-a854-449375e663421656746629347BitiyabyBhamaGirlsBlueFloralPrintedPleatedKurtawithSkirt7.jpg",
     "brand": "For Girls",
     "id": "6"
    },
    {
     "price": "955",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16265230/2021/11/27/446cb0d6-e1aa-45b0-acb7-cdaa31cc3c5e1637992151710TiberTaberBoysYellowPrintedRegularPureCottonKurtawithDhotiPa1.jpg",
     "brand": "For Boys",
     "id": "7"
    },
    {
     "price": "558",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20648902/2022/11/7/fe8923d1-de07-4de3-a879-ab68aff56d3d1667810060031CherryCrumbleUnisexKidsCream-ColouredBrownPrintedNightsuit1.jpg",
     "brand": "For Girls",
     "id": "8"
    },
    {
     "price": "183",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20394226/2022/10/14/7b9fe69b-f029-4ad8-aa0a-2d58364942301665729182359BUMZEEBoysMaroonWhitePrintedShirtwithTrousers1.jpg",
     "brand": "For Boys",
     "id": "9"
    },
    {
     "price": "633",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20414074/2022/10/15/c2e8c5bd-c091-4444-bf14-e0d4d02f91691665822733811DeMozaKids-GirlsTopPrintedCottonAdventurine1.jpg",
     "brand": "For Girls",
     "id": "10"
    },
    {
     "price": "383",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20294284/2022/10/6/d9dbc0b6-e135-4229-baac-7151153559f61665048109015JuniorsbyLifestyleBeigePrintedCottonShirts1.jpg",
     "brand": "For Boys",
     "id": "11"
    },
    {
     "price": "272",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15396092/2021/9/7/415faca5-7b3c-41c5-8e95-11c4f411f8f81631020548440StyloBugGirlsBlueFloralEmbroideredTieredKurtiwithShararaWith1.jpg",
     "brand": "For Girls",
     "id": "12"
    },
    {
     "price": "189",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/20/108ebab1-4dd9-4b31-92bd-d15c1eaf4a851600551515102-1.jpg",
     "brand": "For Boys",
     "id": "13"
    },
    {
     "price": "383",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10684874/2019/10/5/9344ec9b-712b-4f9f-a243-26d1239d94171570256414558-Cherry-Crumble-Cosy-Applique-Nightsuit-4821570256413684-1.jpg",
     "brand": "For Girls",
     "id": "14"
    },
    {
     "price": "97",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20367732/2022/10/12/9e1ac13a-586e-444a-8905-f2e1fe21a7751665562106772MarksSpencerBoysGreenNavyBluePrintedT-shirtwithPyjamas1.jpg",
     "brand": "For Boys",
     "id": "15"
    },
    {
     "price": "843",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20412150/2022/10/15/49635bca-05ef-484d-8dbd-cb2dc74c524f1665806387193Printedjerseytop1.jpg",
     "brand": "For Girls",
     "id": "16"
    },
    {
     "price": "15",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18633960/2022/6/6/a3a91e0f-405e-4027-88a0-e059fdcb0d781654495023975HERENOWBoysTealSlimFitCasualShirt1.jpg",
     "brand": "For Boys",
     "id": "17"
    },
    {
     "price": "273",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14944012/2021/7/26/624b4fff-4e6a-454f-bd6e-f1c4d3db4fb71627317429160pspeachesGirlsGreenBandhaniEmbroideredPanelledPureCottonTopw1.jpg",
     "brand": "For Girls",
     "id": "18"
    },
    {
     "price": "521",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16278718/2021/11/27/ffe1c615-5051-41b9-ab6d-a8b86defbb721638009551823VastramayBoysTurquoiseDigitalPrintedJodhpuri1.jpg",
     "brand": "For Boys",
     "id": "19"
    },
    {
     "price": "480",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17746578/2022/4/5/c21f1b62-3b56-41e1-84eb-214fc022b3a11649148621816AnthriloGirlsYellowNightsuits1.jpg",
     "brand": "For Girls",
     "id": "20"
    },
    {
     "price": "962",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15019064/2021/8/4/01435a83-2ae8-4f75-bf83-87751b6c10fe1628076836092BABYGO1.jpg",
     "brand": "For Boys",
     "id": "21"
    },
    {
     "price": "971",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20302452/2022/10/7/29d3b8a4-8cc1-44a4-9011-0b8aa83247ec1665082594060Ed-a-MammaSustainableTie-dyeoffshouldertopForgirls-Lilac1.jpg",
     "brand": "For Girls",
     "id": "22"
    },
    {
     "price": "15",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20535176/2022/10/28/82faa2cf-3dad-4d8e-abdc-26263ac70af31666955784685BoyscasualShirt1.jpg",
     "brand": "For Boys",
     "id": "23"
    },
    {
     "price": "619",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20217892/2022/9/29/660757b9-b5c9-4b41-b1d5-359d403b5c821664455701538ATUNGirlsGreyFloralEmbroideredPanelledKurtawithSharara1.jpg",
     "brand": "For Girls",
     "id": "24"
    },
    {
     "price": "455",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8445083/2022/4/18/9530c347-5229-4a7d-a97e-4c18aa7feb781650284977694TiberTaberBoysWhitePrintedPanchakattu1.jpg",
     "brand": "For Boys",
     "id": "25"
    },
    {
     "price": "619",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19452568/2022/8/9/27386914-469a-4a07-a363-d2056bb8d10e1660051366201LazySharkGirlsNavyBluePinkPrintedNightsuit1.jpg",
     "brand": "For Girls",
     "id": "26"
    },
    {
     "price": "559",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19693918/2022/8/27/1ba96daf-fa24-4848-b491-a8b18371f2eb16615826102862-pieceprintedset1.jpg",
     "brand": "For Boys",
     "id": "27"
    },
    {
     "price": "414",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20302454/2022/10/6/02c81ce8-1d8a-46ee-9b0e-5ab55f14978e1665079567124Ed-a-MammaSustainableEmbroideredtopForgirls-Pink1.jpg",
     "brand": "For Girls",
     "id": "28"
    },
    {
     "price": "944",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20535172/2022/10/28/909ed69e-3b58-45e9-8f62-5985c18fc90e1666955786385BoyscasualShirt1.jpg",
     "brand": "For Boys",
     "id": "29"
    },
    {
     "price": "758",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14993534/2021/12/23/f558ef69-cdfc-4d08-8523-86c4cbed3e061640264353416-Sangria-Girls-Magenta--Golden-Paisley-Foil-Print-Kurta-with--1.jpg",
     "brand": "For Girls",
     "id": "30"
    },
    {
     "price": "252",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20217066/2022/9/29/7c1e89b8-5b0e-4691-a68f-5bfef7ec6bc31664446728921KurtaSets1.jpg",
     "brand": "For Boys",
     "id": "31"
    },
    {
     "price": "540",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/3c217a53-3aa3-4fef-936a-84d465359f141610616879045-1.jpg",
     "brand": "For Girls",
     "id": "32"
    },
    {
     "price": "536",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20083750/2022/9/20/275e6141-c152-4591-be3d-e4862a4d1c221663652132838Dungarees1.jpg",
     "brand": "For Boys",
     "id": "33"
    },
    {
     "price": "600",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20302384/2022/10/6/adbc46a0-c101-4c37-a13d-da28d62220291665072077535Ed-a-MammaSustainableEmbroideredtopForgirls-Lime1.jpg",
     "brand": "For Girls",
     "id": "34"
    },
    {
     "price": "488",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20242200/2022/10/1/1be09201-cc38-47a2-b913-aafe621a048b1664601367738Cottonshirt1.jpg",
     "brand": "For Boys",
     "id": "35"
    },
    {
     "price": "286",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19831736/2022/9/8/60fabb65-7147-4c97-8de8-6dc9f14315d21662632699994pspeachesGirlsPeach-ColouredFloralPleatedKurtiwithShararaWit1.jpg",
     "brand": "For Girls",
     "id": "36"
    },
    {
     "price": "719",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20145326/2022/9/23/d9a8f08e-9341-4b7e-bfe1-f2a4c92e61f71663929899523KurtaSets1.jpg",
     "brand": "For Boys",
     "id": "37"
    },
    {
     "price": "278",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20048368/2022/9/18/0e5b9eaf-bb7f-4bc2-bd7b-be9bce147e3e1663481321520KnittingDoodlesUnisexKidsGreenBrownPrintedNightsuit1.jpg",
     "brand": "For Girls",
     "id": "38"
    },
    {
     "price": "77",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16334294/2021/12/2/0599d8c8-0fb7-4e5c-b069-e25db9adb4221638417231887ClothingSet1.jpg",
     "brand": "For Boys",
     "id": "39"
    },
    {
     "price": "319",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20014236/2022/9/16/4e08d35c-01fe-4a39-b22a-8ecae1bafa4c1663300119562V-MartRedFloralPrintPeplumTop1.jpg",
     "brand": "For Girls",
     "id": "40"
    },
    {
     "price": "389",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19662806/2022/8/25/c76e1cfa-1bff-486a-aa55-fdae796cd70f1661432199225ATUNBoysShirt1.jpg",
     "brand": "For Boys",
     "id": "41"
    },
    {
     "price": "522",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19582558/2022/8/22/7f4e61b5-3f14-4b4b-9e55-fb9df34722861661153905487ATUNGirlsPurpleAngrakhaKurtiwithTrousers1.jpg",
     "brand": "For Girls",
     "id": "42"
    },
    {
     "price": "348",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/5/19/1ac9b514-1978-4a6a-8390-2e7c320336701558212667413-1.jpg",
     "brand": "For Boys",
     "id": "43"
    },
    {
     "price": "550",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11310844/2022/6/15/41454e38-f47e-4c4f-b0d2-dbd649cf1a9b1655313804328CherryCrumbleKidsRedGreenCheckedNightSuit1.jpg",
     "brand": "For Girls",
     "id": "44"
    },
    {
     "price": "543",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17474520/2022/11/3/44fd8039-dbe2-4d6c-beb3-3b65cef653ec1667472062609HByHamleysBoysMulticolouredAnimalPrintedPureCottonT-shirtwit1.jpg",
     "brand": "For Boys",
     "id": "45"
    },
    {
     "price": "299",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20299052/2022/10/6/beff8888-ec6f-4389-b7f3-e3abdf524c541665064092583FameForeverbyLifestyleYellowTopCotton1.jpg",
     "brand": "For Girls",
     "id": "46"
    },
    {
     "price": "915",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14672750/2021/7/23/fc7be710-cb99-43f1-b733-ba5d3897b4651627032185643-HERENOW-Boys-Shirts-651627032185315-1.jpg",
     "brand": "For Boys",
     "id": "47"
    },
    {
     "price": "83",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12857244/2021/2/17/14955486-1121-44ff-8054-a71d20fd346f1613545333050-Sangria-Girls-Clothing-Set-2401613545331984-1.jpg",
     "brand": "For Girls",
     "id": "48"
    },
    {
     "price": "45",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20294550/2022/10/6/5c931178-4875-4c95-b4e1-c8e978e3c7f61665055723651MelangebyLifestyleYellowPrintedPureCottonWaistcoat1.jpg",
     "brand": "For Boys",
     "id": "49"
    },
    {
     "price": "29",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17504976/2022/3/12/e1ee2de5-bd83-47ea-9208-5e778495224b1647079769349pspeachesGirlsBlueNightsuits1.jpg",
     "brand": "For Girls",
     "id": "50"
    },
    {
     "price": "495",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18609718/2022/6/4/11c186d0-ca6b-4360-8533-092b360e01a71654327668681FOURFOLDSBoysOliveClothingSet1.jpg",
     "brand": "For Boys",
     "id": "51"
    },
    {
     "price": "202",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18302434/2022/5/17/20a1d178-dacf-4b09-9197-12f9098620ea1652780107657Tie-hemtop1.jpg",
     "brand": "For Girls",
     "id": "52"
    },
    {
     "price": "273",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20406158/2022/10/14/4fa1162a-955d-4f31-94cc-1247ae235f051665760961002Ed-A-MammaSustainableFullSleevesAllOverPrintedShirtWithBandC1.jpg",
     "brand": "For Boys",
     "id": "53"
    },
    {
     "price": "125",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19648122/2022/8/25/c87ee6b0-aee5-4cd0-900b-c200115d48781661419352325ATUNGirlsCream-ColouredFloralEmbroideredPanelledKurtawithSki1.jpg",
     "brand": "For Girls",
     "id": "54"
    },
    {
     "price": "267",
     "title": "Ethnic wear",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7374451/2021/5/11/5152b5e8-35b2-4388-b8fb-d0d24fd0e8911620725509083-JBN-Creation-Boys-Navy-Blue--Maroon-Solid-Kurta-with-Dhoti-P-1.jpg",
     "brand": "For Boys",
     "id": "55"
    },
    {
     "price": "70",
     "title": "Nightdress",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14601220/2022/2/25/dd00a540-3188-4d37-ad44-ac3a9876f8d41645783011157ZeyoGirlsNavyBlueNightsuit1.jpg",
     "brand": "For Girls",
     "id": "56"
    },
    {
     "price": "739",
     "title": "Clothing Set",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20226562/2022/9/30/57fd56e8-bda6-4dd5-8863-75c3b0cbd6f61664504762576ClothingSet1.jpg",
     "brand": "For Boys",
     "id": "57"
    },
    {
     "price": "257",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16108374/2022/8/17/c69cad09-e3ad-4898-99c9-e74e5b3876cf1660739142678CutiekinsPeachRedFloralPrintedRufflesCrepeShirtStyleTop1.jpg",
     "brand": "For Girls",
     "id": "58"
    },
    {
     "price": "23",
     "title": "Shirt",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19999398/2022/9/15/34af594a-b408-4675-a59c-d99171d3a1281663235040529KATEOSCARBoysBlueStandardCasualShirt1.jpg",
     "brand": "For Boys",
     "id": "59"
    },
    {
     "price": "589",
     "title": "Kurta",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19946016/2022/9/21/ac0d173b-854b-4f5c-8d10-cf73815968881663763291204-Frock-style-Cotton-fabric-Orange-color-Floral-printed-Kurta--1.jpg",
     "brand": "For Girls",
     "id": "60"
    }
   ];

let wishlist=JSON.parse(localStorage.getItem("wishlist-item")) || [];

Displaydata(kids);




document.querySelector("#searchbar").addEventListener("input",function(){
    let q=document.querySelector("#searchbar").value;
    let newdata=kids.filter((ele)=>{
        return ele.title.toLowerCase().includes(q.toLowerCase());
    })
    Displaydata(newdata);
})


function myfun1(){
    kids.sort((a,b)=>{
        return (a.price-b.price);
    })
    Displaydata(kids);
}
function myfun2(){
    kids.sort((a,b)=>{
        return (b.price-a.price);
    })
    Displaydata(kids);
}




function Displaydata(data){
    document.querySelector("#products").innerText=[];
    data.forEach(ele => {
        
        let x =document.createElement("div");
        h2=document.createElement("h2");
        h2.innerText=ele.title;
        img=document.createElement("img");
        img.setAttribute("src",ele.image);
        h3=document.createElement("h3");
        h3.innerText="Rs."+ele.price;
        h4=document.createElement("h5");
        h4.innerText=ele.brand;
        btn=document.createElement("button");
        btn.innerText="Wishlist";
        btn.addEventListener("click",function(){
        wishlist.push(ele);
        localStorage.setItem("wishlist-item",JSON.stringify(wishlist));
        alert("Item added to wishlist")
       })


        x.append(h2,img,h3,h4,btn);
        document.querySelector("#products").append(x);
    });
}


function brand1(){
    let ans=kids.filter((ele)=>{
       return ele.brand=="For Boys";
    })
    Displaydata(ans);
}
function brand2(){
    let ans=kids.filter((ele)=>{
       return ele.brand=="For Girls";
    })
    Displaydata(ans);
}


function item1(){
    let itm=kids.filter((ele)=>{
        return ele.title=="Clothing Set";
    })
    Displaydata(itm);
}
function item2(){
    let itm=kids.filter((ele)=>{
        return ele.title=="Nightdress";
    })
    Displaydata(itm);
}
function item3(){
    let itm=kids.filter((ele)=>{
        return ele.title=="Kurta";
    })
    Displaydata(itm);
}
function item4(){
    let itm=kids.filter((ele)=>{
        return ele.title=="Top";
    })
    Displaydata(itm);
}
function item5(){
    let itm=kids.filter((ele)=>{
        return ele.title=="Shirt";
    })
    Displaydata(itm);
}
function item6(){
    let itm=kids.filter((ele)=>{
        return ele.title=="Ethnic wear";
    })
    Displaydata(itm);
}

