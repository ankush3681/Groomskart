{
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
}






   let womens=[
    {
     "price": "943",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1845244/2022/4/20/0e0d27d1-e474-402d-99e5-4b89daf61b161650446669507RoadsterWomenWhiteSelfDesignPufferJacket1.jpg",
     "brand": "Puma",
     "id": "1"
    },
    {
     "price": "900",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13976254/2021/6/4/73189261-764d-48be-b378-dab37fd209c91622804995721-Skechers-Women-Sports-Shoes-3291622804995238-1.jpg",
     "brand": "Adidas",
     "id": "2"
    },
    {
     "price": "297",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
     "brand": "Wrong",
     "id": "3"
    },
    {
     "price": "309",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
     "brand": "Roadster",
     "id": "4"
    },
    {
     "price": "862",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16697006/2022/1/5/4672c4bf-8fe1-4523-91f4-ac08301573251641392147135KALINIWomenMaroonWovenDesign1.jpg",
     "brand": "Puma",
     "id": "5"
    },
    {
     "price": "232",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/27/e19be52e-4694-4672-9dcf-49e112b16ae01611743531195-1.jpg",
     "brand": "Campus",
     "id": "6"
    },
    {
     "price": "955",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15341524/2021/9/2/9e1ddff2-ea07-4e0c-aebb-a2600f61a6471630573211385na1.jpg",
     "brand": "Campus",
     "id": "7"
    },
    {
     "price": "558",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19151726/2022/7/18/2b10cc54-40f8-4a8d-a569-923658b0db4a1658141338725ShuffleMaxWomensShoes1.jpg",
     "brand": "Puma",
     "id": "8"
    },
    {
     "price": "183",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
     "brand": "Campus",
     "id": "9"
    },
    {
     "price": "633",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14277582/2021/7/14/427a0d81-368e-4f47-9e33-71c5208330231626255048300-Moda-Rapido-Women-Jeans-4301626255047563-2.jpg",
     "brand": "Roadster",
     "id": "10"
    },
    {
     "price": "383",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16697006/2022/1/5/4672c4bf-8fe1-4523-91f4-ac08301573251641392147135KALINIWomenMaroonWovenDesign1.jpg",
     "brand": "Campus",
     "id": "11"
    },
    {
     "price": "272",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14323566/2021/8/11/e5a8a298-4261-4146-b160-1bfd3c10749f1628663590983-DressBerry-Yellow--Black-Mandarin-Collar-Puff-Sleeve-Regular-1.jpg",
     "brand": "Wrong",
     "id": "12"
    },
    {
     "price": "189",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14455416/2021/6/23/1f94e361-1c2e-4857-a6f2-5da226432a8f1624442399043-Leather-Retail-Women-Jackets-3671624442398237-1.jpg",
     "brand": "Campus",
     "id": "13"
    },
    {
     "price": "383",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16235302/2022/2/1/29b7e994-41ee-483b-90c7-256a9382c1f91643659191113ElPasoWomenBlackFlatBoots1.jpg",
     "brand": "Adidas",
     "id": "14"
    },
    {
     "price": "97",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
     "brand": "Wrong",
     "id": "15"
    },
    {
     "price": "843",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19259882/2022/7/26/f7ff60de-c0df-4978-b29a-b40223d0239b1658838761314Jeans1.jpg",
     "brand": "Campus",
     "id": "16"
    },
    {
     "price": "15",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16311678/2021/12/15/460713ca-8a86-49de-a4c7-459e5493c9a91639544776150-all-about-you-Women-Sarees-8191639544775617-3.jpg",
     "brand": "Puma",
     "id": "17"
    },
    {
     "price": "273",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13719116/2021/3/3/90d0980a-8b39-48bd-9bf9-a67beb14a9741614753528611-Athena-Fuchsia-Pink-top-with-power-shoulder-sleeve-detail-22-1.jpg",
     "brand": "Wrong",
     "id": "18"
    },
    {
     "price": "521",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12698836/2021/1/5/9f69397d-aab5-4b0c-9507-af3de8434b831609830114124-Roadster-Women-Jackets-51609830112055-1.jpg",
     "brand": "Puma",
     "id": "19"
    },
    {
     "price": "480",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17450954/2022/3/9/9e20f37c-5da9-40c0-8c6b-d347402eb5811646808454812RedTapeWomenWhiteWovenDesignSneakers1.jpg",
     "brand": "Campus",
     "id": "20"
    },
    {
     "price": "962",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19997434/2022/9/16/669015a1-9535-40b1-9d87-6203a17665761663305635133ADORROWomenBlueEthnicMotifsPrintedFlaredSleevesAnarkaliKurta1.jpg",
     "brand": "Roadster",
     "id": "21"
    },
    {
     "price": "971",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8963473/2022/8/30/b752b7f1-3403-4893-88c2-8b8f3b2142c21661862515266-Roadster-Women-Blue-Skinny-Fit-Mid-Rise-Low-Distress-Stretch-1.jpg",
     "brand": "Campus",
     "id": "22"
    },
    {
     "price": "15",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16846726/2022/2/3/d81c0838-9a5f-45a4-a93f-4163e6f9548c1643867893380SatinEmbroideryWorkSaree1.jpg",
     "brand": "Roadster",
     "id": "23"
    },
    {
     "price": "619",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12221944/2020/8/14/b9fc8ee9-ec92-4557-ab60-000e3779291e1597404329638-SASSAFRAS-Women-White-Solid-Top-8171597404327851-1.jpg",
     "brand": "Wrong",
     "id": "24"
    },
    {
     "price": "455",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1926681/2017/11/23/11511419568669-HRX-by-Hrithik-Roshan-Women-Jackets-3171511419568505-1.jpg",
     "brand": "Adidas",
     "id": "25"
    },
    {
     "price": "619",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19456484/2022/9/6/b12c1bd9-0b20-4f1f-be0c-280d0ae38ee51662465876809WaistcoatMangoKidsBoysSweatersMangoKidsBoysSweatshirtsMangoK1.jpg",
     "brand": "Adidas",
     "id": "26"
    },
    {
     "price": "559",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
     "brand": "Roadster",
     "id": "27"
    },
    {
     "price": "414",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9552603/2022/5/20/a5b42476-d64a-49a4-a95c-54853b8148981653026711165-SASSAFRAS-Women-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchab-4.jpg",
     "brand": "Wrong",
     "id": "28"
    },
    {
     "price": "944",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15071236/2021/8/9/3f7066d4-4b76-4774-9457-303e1868692a1628499657874MiteraWomenGreenEmbellished1.jpg",
     "brand": "Adidas",
     "id": "29"
    },
    {
     "price": "758",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20132030/2022/9/22/29cc1474-518e-46c7-a100-640df8b2d6951663856287630CODEbyLifestylePurpleTopsNylon1.jpg",
     "brand": "Puma",
     "id": "30"
    },
    {
     "price": "252",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14017342/2021/4/16/d36879a1-2c54-460e-8478-e2d755d67a9d1618575119929-Leather-Retail-Women-Jackets-1011618575116369-1.jpg",
     "brand": "Wrong",
     "id": "31"
    },
    {
     "price": "540",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12829500/2022/6/13/a279f4cc-9a2a-4d2b-a67e-b1561512b7ee1655121760492-Roadster-Women-Off-White-Solid-Sneakers-5581655121760018-1.jpg",
     "brand": "Roadster",
     "id": "32"
    },
    {
     "price": "536",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
     "brand": "Roadster",
     "id": "33"
    },
    {
     "price": "600",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/11/3/48ecb7ca-d3e3-463e-9acb-b4d6b0d9c0401667477909423-Roadster-Women-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
     "brand": "Campus",
     "id": "34"
    },
    {
     "price": "488",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16630964/2022/1/18/cea4b9ff-673f-4a28-80de-0d6ab828b3671642504766835-Vastranand-Woven-Designe-Paithani-Saree-2601642504765854-1.jpg",
     "brand": "Puma",
     "id": "35"
    },
    {
     "price": "286",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11157052/2021/9/15/15ebc0f3-06b4-43dd-9eb8-759ea3c30d871631705427380-QUIERO-Women-Black--White-Embroidered-Top-3041631705426967-1.jpg",
     "brand": "Campus",
     "id": "36"
    },
    {
     "price": "719",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/21/cc7b2d9c-07f5-4df0-bf4d-ce97fc876f6f1595286015950-1.jpg",
     "brand": "Adidas",
     "id": "37"
    },
    {
     "price": "278",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19781584/2022/9/3/fe706408-0ad4-4207-b40d-3ac3680474aa1662184982679RedTapeWomenPinkMeshWalkingNon-MarkingShoes1.jpg",
     "brand": "Adidas",
     "id": "38"
    },
    {
     "price": "77",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
     "brand": "Roadster",
     "id": "39"
    },
    {
     "price": "319",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/4/c0fa8606-a244-48e0-a360-401956a9cbba1543924444628-1.jpg",
     "brand": "Campus",
     "id": "40"
    },
    {
     "price": "389",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20282042/2022/10/5/b1ab4457-6002-4236-aeb2-4035f562cc4e1664989113769BlackColouredSequinedEmbroideredGeorgetteSaree1.jpg",
     "brand": "Wrong",
     "id": "41"
    },
    {
     "price": "522",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15019102/2021/8/20/13eb4c41-2195-43bf-b719-c8df7a449a191629459716033-Jockey-Women-Black-Ribbed-Thermal-Top-2503-0105-631629459715-1.jpg",
     "brand": "Campus",
     "id": "42"
    },
    {
     "price": "348",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5492286/2019/9/30/7095cb8d-c448-402a-9979-cc9879064b4a1569841689006-Roadster-Women-Navy-Solid-Padded-Jacket-8201569841687608-1.jpg",
     "brand": "Adidas",
     "id": "43"
    },
    {
     "price": "550",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12657184/2022/6/8/c71ae0b9-6ab3-4822-b6c8-92e4890f8e2e1654687933841HRXbyHrithikRoshanWomenWhiteTrainingShoes1.jpg",
     "brand": "Roadster",
     "id": "44"
    },
    {
     "price": "543",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15258048/2021/9/6/a5a4b340-d0b2-44c2-bf0d-7d4733a6413f1630920975833-Libas-Women-Kurta-Sets-1441630920974980-1.jpg",
     "brand": "Puma",
     "id": "45"
    },
    {
     "price": "299",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19702640/2022/10/21/f8038194-bdba-4377-872d-12ab2b869d8b1666353847343-ADBUCKS-Women-Blue-Straight-Fit-High-Rise-Stretchable-Jeans--1.jpg",
     "brand": "Adidas",
     "id": "46"
    },
    {
     "price": "915",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14975358/2021/7/29/9e1484a0-92f8-4871-9b98-fc9f389406691627570339977KALINIWomenBlackPrinted1.jpg",
     "brand": "Adidas",
     "id": "47"
    },
    {
     "price": "83",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19905576/2022/9/21/25903dab-f229-4571-8b36-acfc7518b2341663755186598-Women-Green-Printed-A-line-Top-8221663755186065-1.jpg",
     "brand": "Roadster",
     "id": "48"
    },
    {
     "price": "45",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20303982/2022/10/7/34727cda-38ea-48f6-9bc3-973e93fe2b001665124189528StyliWomenWhiteColourblockedBomberwithPatchworkJacket1.jpg",
     "brand": "Wrong",
     "id": "49"
    },
    {
     "price": "29",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17661694/2022/3/29/4cf5e8f5-870b-4542-815b-ee8df75ca45f1648547981312ASIANWomenMauveWovenDesignSlip-OnSneakers1.jpg",
     "brand": "Puma",
     "id": "50"
    },
    {
     "price": "495",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
     "brand": "Adidas",
     "id": "51"
    },
    {
     "price": "202",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13000414/2020/12/3/4b6ac67e-3089-450c-83e4-f0362b930af91606971728255-SASSAFRAS-Women-Jeans-7971606971722019-1.jpg",
     "brand": "Wrong",
     "id": "52"
    },
    {
     "price": "273",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19987162/2022/9/15/0fcea578-4abc-4d3d-a158-b8c4a0844a191663182482995PrathamBluePurpleEmbellishedSequinnedPureGeorgetteSaree1.jpg",
     "brand": "Puma",
     "id": "53"
    },
    {
     "price": "125",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17669442/2022/4/8/68782273-debf-4ac3-85b4-1ab9cdd9e7411649397188119-HERENOW-Women-Tops-2331649397187657-1.jpg",
     "brand": "Campus",
     "id": "54"
    },
    {
     "price": "267",
     "title": "Jacket",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/12/477a69ec-9dc9-4f86-a770-28b1ce93c9bc1568227255410-1.jpg",
     "brand": "Adidas",
     "id": "55"
    },
    {
     "price": "70",
     "title": "Shoes",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20014166/2022/9/17/94793c15-1302-4d13-bc89-6cebf66d53751663405317961ElPasoWomenBlueTexturedSlip-OnSneakers1.jpg",
     "brand": "Adidas",
     "id": "56"
    },
    {
     "price": "739",
     "title": "Kurtas",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
     "brand": "Roadster",
     "id": "57"
    },
    {
     "price": "257",
     "title": "Jeans",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7744523/2018/11/6/acb0ec0f-036d-4a44-b8fc-2165977d1c881541499459066-Heart-of-Darkness-Skinny-Jeans-1501541499458878-1.jpg",
     "brand": "Adidas",
     "id": "58"
    },
    {
     "price": "23",
     "title": "Saree",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18205204/2022/5/9/123454e5-d2fc-4c3b-8789-283bccb7be751652100736749InddusWomenYellowSarees1.jpg",
     "brand": "Puma",
     "id": "59"
    },
    {
     "price": "589",
     "title": "Top",
     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12222036/2020/10/6/d7ae3065-98d4-42d0-b244-d2b18802ff101601959656577-SASSAFRAS-Women-Black-Solid-High-Neck-Cropped-Top-4441601959-1.jpg",
     "brand": "Wrong",
     "id": "60"
    }
   ];

   Displaydata(womens);

   let wishlist=JSON.parse(localStorage.getItem("wishlist-item")) ||[]

// price sort
  
function myfun1(){
    womens.sort((a,b)=>{
        return (a.price-b.price);
    })
    Displaydata(womens);
}
function myfun2(){
    womens.sort((a,b)=>{
        return (b.price-a.price);
    })
    Displaydata(womens);
}

// searchbar input

document.querySelector("#searchbar").addEventListener("input",function(){
    let q=document.querySelector("#searchbar").value;
    let newdata=womens.filter((ele)=>{
        return ele.title.toLowerCase().includes(q.toLowerCase());
    })
    Displaydata(newdata);
})



   function Displaydata(data){
       document.querySelector("#items").innerText=[];
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
            alert("Item added to wishlist");
           })
    
    
            x.append(h2,img,h3,h4,btn);
            document.querySelector("#items").append(x);
        });
           
    }



// brand Selection
    
function brand1(){
    let ans=womens.filter((ele)=>{
       return ele.brand=="Puma";
    })
    Displaydata(ans);
}
function brand2(){
    let ans=womens.filter((ele)=>{
       return ele.brand=="Roadster";
    })
    Displaydata(ans);
}
function brand3(){
    let ans=womens.filter((ele)=>{
       return ele.brand=="Wrong";
    })
    Displaydata(ans);
}
function brand4(){
    let ans=womens.filter((ele)=>{
       return ele.brand=="Adidas";
    })
    Displaydata(ans);
}
function brand5(){
    let ans=womens.filter((ele)=>{
       return ele.brand=="Campus";
    })
    Displaydata(ans);
}

// items selection

function item1(){
    let itm=womens.filter((ele)=>{
        return ele.title=="Saree";
    })
    Displaydata(itm);
}
function item2(){
    let itm=womens.filter((ele)=>{
        return ele.title=="Jacket";
    })
    Displaydata(itm);
}
function item3(){
    let itm=womens.filter((ele)=>{
        return ele.title=="Kurtas";
    })
    Displaydata(itm);
}
function item4(){
    let itm=womens.filter((ele)=>{
        return ele.title=="Shoes";
    })
    Displaydata(itm);
}
function item5(){
    let itm=womens.filter((ele)=>{
        return ele.title=="Top";
    })
    Displaydata(itm);
}
function item6(){
    let itm=womens.filter((ele)=>{
        return ele.title=="Jeans";
    })
    Displaydata(itm);
}



            
   
    
    