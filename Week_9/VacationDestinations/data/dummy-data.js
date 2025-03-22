import Country from "../models/countries";
import VacationDestination from "../models/vacationDestinations";

export const COUNTRIES = [
  new Country("c1", "USA", "#f44336"), // Red
  new Country("c2", "Canada", "#2196f3"), // Blue
  new Country("c3", "Australia", "#4caf50"), // Green
  new Country("c4", "France", "#ff9800"), // Orange
  new Country("c5", "Italy", "#9c27b0"), // Purple
  new Country("c6", "Japan", "#ffeb3b"), // Yellow
  new Country("c7", "Brazil", "#03a9f4"), // Light Blue
  new Country("c8", "Germany", "#8bc34a"), // Light Green
  new Country("c9", "South Africa", "#ff5722"), // Deep Orange
  new Country("c10", "Mexico", "#673ab7"), // Deep Purple
];

export const VACATION_DESTINATIONS = [
  new VacationDestination(
    "v1",
    "c1",
    "Grand Canyon National Park",
    5000000, 
    1919,
    4.8,
    "https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg?maxwidth=1300&maxheight=1300&autorotate=false"  
  ),
  new VacationDestination(
    "v2",
    "c2",
    "Banff National Park",
    4000000, 
    1885,
    4.7,
    "https://banfflakelouise.bynder.com/m/3d04f19979f432ec/2000x1080_jpg-2022_MoraineLake_TravelAlberta_RothandRamberg%20(3).jpg"
  ),
  new VacationDestination(
    "v3",
    "c3",
    "Great Barrier Reef",
    2500000, 
    1981,
    4.9,
    "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652301250/EducationHub/photos/barrier-reef.jpg"
  ),
  new VacationDestination(
    "v4",
    "c4",
    "Eiffel Tower",
    7000000, 
    1889,
    4.6,
    "https://www.travelandleisure.com/thmb/LWoXyfvZxrjlzLqPPJENbFYFICU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"  ),
  new VacationDestination(
    "v5",
    "c5",
    "Colosseum",
    6000000, 
    80,
    4.5,
    "https://www.gingerwhite.co.uk/cdn/shop/products/WHC_11_1000by667px_2048x.jpg?v=1616497951"
  ),
  new VacationDestination(
    "v6",
    "c6",
    "Mount Fuji",
    3000000, 
    1963,
    4.4,
    "https://img.goodfon.com/original/1600x1200/4/bb/mount-fuji-gora-fudzhi-yaponiya.jpg"
  ),
  new VacationDestination(
    "v7",
    "c7",
    "Christ the Redeemer",
    2200000, 
    1931,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg"
  ),
  new VacationDestination(
    "v8",
    "c8",
    "Neuschwanstein Castle",
    1500000, 
    1869,
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Schloss_Neuschwanstein_2013.jpg"
  ),
  new VacationDestination(
    "v9",
    "c9",
    "Table Mountain",
    1200000, 
    1998,
    4.8,
    "https://i2.pickpik.com/photos/850/178/363/cape-town-table-mountain-sea-beach-preview.jpg"
  ),
  new VacationDestination(
    "v10",
    "c10",
    "Chichen Itza",
    3000000, 
    600,
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/8/81/Chichen-Itza.jpg"
  ),
  new VacationDestination(
    "v11",
    "c1",
    "Yosemite National Park",
    4000000, 
    1890,
    4.9,
    "https://lookoutpoint.ca/s/photos/photo/rz/2400/G6wndGS_46VLLBcGsQL4w9qMAt0/BWYzKiUPBgA.jpg"
  ),
  new VacationDestination(
    "v12",
    "c2",
    "Niagara Falls",
    8000000, 
    1885,
    4.6,
    "https://dri.es/files/cache/niagara-on-the-lake-2017/niagara-falls-by-night-1-1920w.jpg"
  ),
  new VacationDestination(
    "v13",
    "c3",
    "Sydney Opera House",
    2500000, 
    1973,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Sydneyoperahouse_at_night.jpg"
  ),
  new VacationDestination(
    "v14",
    "c4",
    "Louvre Museum",
    10000000, 
    1793,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/6/66/Louvre_Museum_Wikimedia_Commons_2.jpg"
  ),
  new VacationDestination(
    "v15",
    "c5",
    "Leaning Tower of Pisa",
    5000000, 
    1372,
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Leaning_Tower_of_Pisa_%284%29.jpg"
  ),
  new VacationDestination(
    "v16",
    "c6",
    "Kyoto Temples",
    2000000, 
    794,
    4.6,
    "https://www.worldhistory.org/uploads/images/10666.jpg?v=1739960884-0"
  ),
  new VacationDestination(
    "v17",
    "c7",
    "Iguazu Falls",
    1200000, 
    1984,
    4.9,
    "https://www.worldhistory.org/uploads/images/18517.png?v=1738428547-1708508207"
  ),
  new VacationDestination(
    "v18",
    "c8",
    "Brandenburg Gate",
    2500000, 
    1791,
    4.4,
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg"
  ),
  new VacationDestination(
    "v19",
    "c9",
    "Kruger National Park",
    1500000, 
    1898,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Kruger_National_Park_%28ZA%29%2C_Elefanten_--_2024_--_0579.jpg"
  ),
  new VacationDestination(
    "v20",
    "c10",
    "Teotihuacan Pyramids",
    3500000, 
    100,
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Teotihuacan%2C_Pyramid_of_the_Sun_%2820498681808%29.jpg"
  ),
  new VacationDestination(
    "v21",
    "c1",
    "Yellowstone National Park",
    4000000, 
    1872,
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Wv_Yellowstone_National_Park_banner.jpg"
  ),
  new VacationDestination(
    "v22",
    "c2",
    "Rocky Mountain National Park",
    3000000, 
    1915,
    4.8,
    "https://www.triptipedia.com/tip/img/NTiPE28ON.jpg"
  ),
  new VacationDestination(
    "v23",
    "c3",
    "Bondi Beach",
    4000000, 
    1855,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Bondi_from_above.jpg"
  ),
  new VacationDestination(
    "v24",
    "c4",
    "Mont Saint-Michel",
    3000000, 
    708,
    4.9,
    "https://www.worldhistory.org/uploads/images/9299.jpg?v=1651766885-0"
  ),
  new VacationDestination(
    "v25",
    "c5",
    "Venice Canals",
    10000000, 
    5,
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Canals_of_Venice_at_Dusk.jpg"
  ),
  new VacationDestination(
    "v26",
    "c6",
    "Hiroshima Peace Memorial Park",
    2000000, 
    1954,
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/20181111_Hiroshima_Memorial_Cenotaph-1.jpg"
  ),
  new VacationDestination(
    "v27",
    "c7",
    "Amazon Rainforest",
    800000, 
    2000,
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/AMAZON_RAINFOREST_FLOODED_%C3%81REA_-_panoramio.jpg"
  ),
  new VacationDestination(
    "v28",
    "c8",
    "The Black Forest",
    1000000, 
    30,
    4.8,
    "https://img.goodfon.com/original/1920x1080/f/31/black-forest-germaniya-zima-les.jpg"
  ),
  new VacationDestination(
    "v29",
    "c9",
    "Blyde River Canyon",
    800000, 
    1984,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Blyde_River_Canyon_Panorama_2013.jpg"
  ),
  new VacationDestination(
    "v30",
    "c10",
    "Cabo San Lucas",
    2000000, 
    1990,
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/0/06/Cabo_San_Lucas_Los_Arcos_3.jpg"
  ),
  new VacationDestination(
    "v31",
    "c1",
    "Mount Rushmore National Memorial",
    2500000, 
    1941,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/HDR_Mount_Rushmore.jpg"
  ),
  new VacationDestination(
    "v32",
    "c2",
    "Vancouver Island",
    1500000, 
    1849,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Vancouver_Island_%289287996399%29.jpg"
  ),
  new VacationDestination(
    "v33",
    "c3",
    "Uluru (Ayers Rock)",
    3000000, 
    1873,
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/ULURU.jpg"
  ),
  new VacationDestination(
    "v34",
    "c4",
    "Versailles Palace",
    8000000, 
    1682,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Versailles_Palace.jpg"
  ),
  new VacationDestination(
    "v35",
    "c5",
    "Cinque Terre",
    2500000, 
    1000,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Cinque_Terre_.jpg"
  ),
  new VacationDestination(
    "v36",
    "c6",
    "Fushimi Inari Taisha",
    3000000, 
    711,
    4.9,
    "https://www.touristinjapan.com/wp-content/uploads/2019/03/fushimi-inari-taisha-torii-1020x600.jpg"
  ),
  new VacationDestination(
    "v37",
    "c7",
    "Galápagos Islands",
    2000000, 
    1832,
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG/1280px-Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG"
  ),
  new VacationDestination(
    "v38",
    "c8",
    "Heidelberg Castle",
    900000, 
    1214,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Heidelberg-2726936.jpg"
  ),
  new VacationDestination(
    "v39",
    "c9",
    "Cape Town",
    4500000, 
    1652,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/e/ed/Ayuntamiento%2C_Ciudad_del_Cabo%2C_Sud%C3%A1frica%2C_2018-07-19%2C_DD_08.jpg"
  ),
  new VacationDestination(
    "v40",
    "c10",
    "Copper Canyon",
    1200000, 
    2000,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Copper_Canyon_near_Creel_Mexico_-_panoramio.jpg"
  ),
];