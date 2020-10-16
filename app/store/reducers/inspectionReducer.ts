import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { Iinspection } from 'app/models/reducers/inspection';

const initialState: Iinspection = {
  factory: [
    {
        "code": "69",
        "unit": "calico impex, plot no. b-8, 9 leather technology park banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "70",
        "unit": "calico trends, 17, leather complex, site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "73",
        "unit": "crescent tanners pvt. ltd. unit-1, 16, leather complex, site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "74",
        "unit": "crescent tanners pvt. ltd. unit-2, d-17 site-2, industrial area, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "96",
        "unit": "ordinance equipment factory (o.e.f), phoolbagh, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1098",
        "unit": "a.l. sameer export pvt. ltd., simraha, forbisganj, araria",
        "state": "bihar",
        "district": "araria",
        "ro": "purnea",
        "sector": "slaughter house",
        "basin": "parmar / mahananda",
        "agency": "nit patna"
    },
    {
        "code": "130",
        "unit": "islam tanners, plot no. b-10 upsidc, ltp banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "36",
        "unit": "a.p.f.tanners (sabnam tannery), 70/59, shitla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "366",
        "unit": "a.q. frozen foods pvt. ltd, kunda feeder road, bacchrayun amroha.",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "amu"
    },
    {
        "code": "144",
        "unit": "kings international ltd. d-13, c-19, site-2 upsidc industries area, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "145",
        "unit": "leader fabrics, d-16, industrial. area site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1104",
        "unit": "aasma food & beverages (p) ltd., industrial area, hajipur, vaishali",
        "state": "bihar",
        "district": "vaishali",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "667",
        "unit": "ab mayuri india pvt. ltd. ( formarlyu, kalyani yeast), chandmari more, gayeshpur, kalyani, nadia - 741235",
        "state": "west bengal",
        "district": "nadia",
        "ro": "kankinara",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "37",
        "unit": "abdulla tanners pvt.ltd., 16 b, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "661",
        "unit": "adani wilmar ltd., debhog, hpl link road , haldia - 721657",
        "state": "west bengal",
        "district": "haldia",
        "ro": "haldia",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "160",
        "unit": "model exim unit-ii, a-32, leather technology park banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "676",
        "unit": "aditya birla nuvo ltd. [jayashree textiles]; 5, panchugopal bhaduri sarani rishra, district - hooghly pin-712249",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "textile",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "161",
        "unit": "model exim unit-i (model tanners (india) pvt. ltd.), a-7/1 & 8/3, upsidc ind. area site-ii, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "162",
        "unit": "model tanners (india) pvt. unit- 2, a22,23 & 24, upsidc ind. area, ltp, banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "183",
        "unit": "northern tannery, (new name - northern exims) a-42 & 43, ltp banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "185",
        "unit": "oxford tanners, a-10, leather technology park banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "206",
        "unit": "leayan global ltd. (rohit surfactant), a-5, 6, industrial area, ltp banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "958",
        "unit": "ahirwar ki tannery, 480/379, gajjupurwa, jajmau, kanpur, up (new name- new javed tannery)",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "40",
        "unit": "ahmad international 367-368 a, sanjay nagar jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "39",
        "unit": "ahmad leather industries, 102/88, a-9 (1), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "41",
        "unit": "ahmad tanning industries, 3-b, a block, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "236",
        "unit": "sultan tanneries & leather products d-16, site-ii, industrial area, upsidc, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "42",
        "unit": "aisha tanning industries, 3-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "764",
        "unit": "aizaz tanners, 406 /377-d, asarfabad, jajmau, kanpur, up (aijaj)",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "43",
        "unit": "ajanta tanning industries., 90/76 eidgah road, jajmau, kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "239",
        "unit": "super house ltd. (tannery-i) (chrome tranning division), a-1 c-1, site-2 ind. area, unnao up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1053",
        "unit": "akbarpur chini mills ltd ambedkar nagar",
        "state": "uttar pradesh",
        "district": "ambedkar nagar",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "tamsa / ganga",
        "agency": "nsi"
    },
    {
        "code": "46",
        "unit": "akhlak tanners (ikhaque tanners), 104/99, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "45",
        "unit": "akhtar tanners, 112 a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "240",
        "unit": "super house ltd. (tannery-ii) (goat division), b15, 16, 17, industrial area site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "987",
        "unit": "al haq foods, village-bojpur, dharampur, moradabad",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "slaughter house",
        "basin": "ramganga / ganga",
        "agency": "jmi"
    },
    {
        "code": "367",
        "unit": "al rahman frozen foods, sambhal",
        "state": "uttar pradesh",
        "district": "sambhal",
        "ro": "moradabad",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "35",
        "unit": "al-barkah tannery pvt. ltd., (amin tannery), 173/157, a-25, budhiyaghat, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "346",
        "unit": "al-faheem meatex pvt. ltd., vill.-alipur, hapur road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "slaughter house",
        "basin": "kali east / ganga",
        "agency": "jmi"
    },
    {
        "code": "973",
        "unit": "al-falah frozen foods. sambhal, up",
        "state": "uttar pradesh",
        "district": "sambhal",
        "ro": "moradabad",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "49",
        "unit": "alig industries, 36 a block, 150 feet road,jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "48",
        "unit": "alig international, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "241",
        "unit": "super house ltd. (tannery-iii) (shole division), b-16/17, site-2 ind. area, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "250",
        "unit": "crown international (union tanners), 104/90-a (26), sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "258",
        "unit": "arman tanner (welcome tannery), 77/66-b, shitala bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "50",
        "unit": "allied leather & leather products, 51-a, 150 feet. road, jajmau, kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "265",
        "unit": "mustang leather pvt. ltd., magarwara, unnao, up (treadstone international ltd.)",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "266",
        "unit": "naushad leather finisers 30 a idgah road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "51",
        "unit": "al-meezan tanning industries, 94 a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "632",
        "unit": "alps industries ltd plot no 1a, iie sidcul haridwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "textile",
        "basin": "shukhi nadhi",
        "agency": "iit delhi"
    },
    {
        "code": "396",
        "unit": "alps industries ltd., vill.-aminagar, bhoorbaral, partapur, \nmeerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "269",
        "unit": "a.k. finishers, 44/37a(5), ramrai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "270",
        "unit": "ahetshyam leather & leather product (old name nasir ki tannery), 345/317, plot no. 5, shitala bajar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "397",
        "unit": "al-saqib exports pvt. ltd., vill.-alipur, hapur road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "slaughter house",
        "basin": "kali east / ganga",
        "agency": "jmi"
    },
    {
        "code": "271",
        "unit": "a.k.i india pvt. ltd. (a.n. leather, 415/4, kundan road, akarampur, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "54",
        "unit": "amaan tanners (unit-1), 104/90- a-(20), sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "55",
        "unit": "amaan tanners (unit-2), 104/90-a (17-a), sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "53",
        "unit": "aman enterprises (taj traders ), 71/60, shitla bazar, jajmau, kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "272",
        "unit": "allianz leather (rafique tannery), 184 a-5, buriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "273",
        "unit": "allied leather finishers pvt. ltd. (unit-4), a-38, l.t.p. banther, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "274",
        "unit": "arafat leather finishers. 201/194-b, ramrai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "275",
        "unit": "ato exim, b-13,14, ltp banther, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "56",
        "unit": "amin enterprises (i.a chemicals), 71/60-a, sheetla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1052",
        "unit": "amrit bottlers pvt. ltd. dabhasemar, faizabad",
        "state": "uttar pradesh",
        "district": "faizabad",
        "ro": "faizabad",
        "sector": "food & beverages",
        "basin": "ghaghra / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "998",
        "unit": "amroon foods pvt. ltd, kursi road, barabanki",
        "state": "uttar pradesh",
        "district": "barabanki",
        "ro": "lucknow",
        "sector": "slaughter house",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "398",
        "unit": "anamika sugar mills pvt. ltd., agauta, aurangabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "nsi"
    },
    {
        "code": "400",
        "unit": "anand duplex ltd, unit - 1 vill-saini, meerut-mawana road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "401",
        "unit": "anand duplex ltd, unit - ii vill-saini, meerut-mawana road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "402",
        "unit": "anand tissues ltd., (shree venkatesh paper mill) vill.-fitkari,meerut mawana road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "403",
        "unit": "anand triplex board ltd., vill.-saini,mawana road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "354",
        "unit": "anik industries ltd. (nutricia india pvt. ltd.), dairy complex, kasganj road, etah.",
        "state": "uttar pradesh",
        "district": "etah",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "1110",
        "unit": "ankur bio-chem pvt. ltd., at- dhubi, po- nirsa, dist- dhanbad.",
        "state": "jharkhand",
        "district": "dhanbad",
        "ro": "dhanbad",
        "sector": "distillery",
        "basin": "damodar / ganga",
        "agency": "nit patna"
    },
    {
        "code": "276",
        "unit": "calico trends, 15, leather complex, industries area site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "974",
        "unit": "anod plasma spray ltd. plot no.1,upsidc industrial area 99, 103, 104 uptron estate panki distt. kanpur (u.p) 208020",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "others",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "277",
        "unit": "everest tannery pvt. ltd. (unit-3), b-11, l.t.p. banther, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "30",
        "unit": "anuj dairy pvt. ltd. ind. area, hajipur, vaishali",
        "state": "bihar",
        "district": "vaishali",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "874",
        "unit": "anupam processers, partapur, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "57",
        "unit": "anwar ki tannery (millat international), 175/158-a (4-c), bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "278",
        "unit": "homera tanning industries pvt. ltd., 1-d (17-a-1), 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "279",
        "unit": "laeek tanners (madina traders), 117/124, gajjupurwa, jajmau, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "58",
        "unit": "arafat tanners (n.j.tanners), 201/194-b, sheetla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "280",
        "unit": "lari textile and dying industry pvt. ltd., a-48, ltp, banther, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "59",
        "unit": "arshi enterprises (najulla tannery), 175/158 b-2, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "281",
        "unit": "n.r. tanners unit-2, dargah sareef buiaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "60",
        "unit": "asha export (asha hides) 466/868 near state bank jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "639",
        "unit": "ashok leyland ltd,plot no-1,sector-12, iie ,pantnagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "others",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "876",
        "unit": "ashoka handloom ind-1,shyamnagar,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "296",
        "unit": "ashoka handloom, garh road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "282",
        "unit": "noor ullah tanners (old name nishat tanners), 815, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "283",
        "unit": "r.b.traders, g-16,17, ind area, site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "61",
        "unit": "asia tannery pvt.ltd., 1 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "62",
        "unit": "asif leather finisers, 27-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "63",
        "unit": "aslam tanners, 860-864, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "64",
        "unit": "aslam tannery, 42 k, bhudiyaghat, jajmau, kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "289",
        "unit": "saba exports, plot- b2/b3, ltp, upsidc, banther, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "291",
        "unit": "aftab & company (saukat ki tannery), 396, sanjay nagar, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "292",
        "unit": "sultan tanners (unit-2), plot no.18 site c-2 upsidc, leather complex site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "765",
        "unit": "awadh tannery, 333/307 bhalla state, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "44",
        "unit": "aziz leather finisers, 171/155, bhudhiya ghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "294",
        "unit": "kanpur texcel (p) ltd., \n19, industrial estate, kalpi road, kanpur nagar - 208012",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "295",
        "unit": "prakash textile, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "608",
        "unit": "b.r papers pvt. ltd, jaspur road,kashipur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "65",
        "unit": "baba hide (zoheb leather finisers), 87/1, mona nagar, wajidpur, jajmau, district-kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "297",
        "unit": "amber textiles, d 16, site 2, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "66",
        "unit": "babloo enterprises, 90/76, b.k.u, 150 feet road, idgah road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "298",
        "unit": "bhadohi carpets, bida carpet city, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "301",
        "unit": "carpet international, hariyon bypass road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "610",
        "unit": "bahl paper mills pvt. ltd aliganj road, kashipur , us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "638",
        "unit": "bajaj auto ltd ,plot no-2,sector-10, iie ,pantnagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "others",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1001",
        "unit": "bajaj hindustan ltd, (distillery) khambharkhera, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1002",
        "unit": "bajaj hindustan ltd, (distillery) palia kala, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1003",
        "unit": "bajaj hindustan ltd, (sugar) gola, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "nsi"
    },
    {
        "code": "1004",
        "unit": "bajaj hindustan ltd, (sugar) khambharkhera, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1005",
        "unit": "bajaj hindustan ltd, (sugar) palia, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1006",
        "unit": "bajaj hindustan ltd, gola, (distillery) kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "gomti / ganga",
        "agency": "nsi"
    },
    {
        "code": "405",
        "unit": "bajaj hindustan ltd, sugar unit barkhera, pilibhit",
        "state": "uttar pradesh",
        "district": "pilibhit",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1044",
        "unit": "bajaj hindustan ltd. (distillery div.) athadama rudhauli basti",
        "state": "uttar pradesh",
        "district": "basti",
        "ro": "basti",
        "sector": "distillery",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1045",
        "unit": "bajaj hindustan ltd. (sugar div.) athadama rudhauli basti",
        "state": "uttar pradesh",
        "district": "basti",
        "ro": "basti",
        "sector": "sugar",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "406",
        "unit": "bajaj hindustan ltd. maqsoodapur shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "1040",
        "unit": "bajaj hindustan sugar industries ltd., itai maida, utraula, balrampur.",
        "state": "uttar pradesh",
        "district": "balrampur",
        "ro": "basti",
        "sector": "sugar",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1061",
        "unit": "bajaj hindustan sugar & industries, kunduraki, gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "407",
        "unit": "bajaj hindusthan ltd, bilai, bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "302",
        "unit": "champa dyeing pvt. ltd., gyanpur road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "303",
        "unit": "chandra wollen pvt. ltd. , ugapur aurai, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "samdha tal / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "690",
        "unit": "balaji action buildwell, esipl, sitarganj, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "chemical",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "304",
        "unit": "d. n. yarn dyers rayan (dn) bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "668",
        "unit": "ballavpur paper manufacturing ltd.;po, ballavpur, ranigunj, dist. burdwan",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "pulp & paper",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "1062",
        "unit": "balrampur chini mills ltd chem div unit babhnan gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1041",
        "unit": "balrampur chini mills ltd(chemical divison) balrampur",
        "state": "uttar pradesh",
        "district": "balrampur",
        "ro": "basti",
        "sector": "distillery",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1042",
        "unit": "balrampur chini mills ltd., balrampur",
        "state": "uttar pradesh",
        "district": "balrampur",
        "ro": "basti",
        "sector": "sugar",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1063",
        "unit": "balrampur chini mills, babhnan, gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1099",
        "unit": "banaskantha producer cooperative milk union, sultanpur road, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "305",
        "unit": "d.p. woollen mills, babu sarai maharajganj, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "612",
        "unit": "banwari paper mills ltd, ramnagar road, kashipur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "1116",
        "unit": "bardhaman dharmaraj paper mill (p) ltd.,vill: konarpara, p.o. kalanabogram, p.s. memari, burdwan - 713124, west bengal",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "pulp & paper",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "306",
        "unit": "d.p. yarn dyers, babu sarai maharaj ganj, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "307",
        "unit": "deepak dyeing house, bida carpet city, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "628",
        "unit": "bazpur cooperative sugar factory (sugar unit), bazpur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "308",
        "unit": "diamond hosiery, 29 b, dadanagar, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "647",
        "unit": "bengal beverages pvt. ltd.; durgapur expressway, p.o. dankuni coal complex, p.s. dankuni,",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "666",
        "unit": "berger paints india ltd,. 103,g.t. road, rishra , hooghly - 712 248",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "665",
        "unit": "berger paints india ltd,. 14&15 swarnamoyee road, po.b.garden, howrah-3",
        "state": "west bengal",
        "district": "howrah",
        "ro": "howrah",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "981",
        "unit": "best crop science llp (old name chemtura chemical india pvt. ltd.), c-2, industrial area, gajraula, amroha",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "others",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "309",
        "unit": "handloom bhandar, kundan road, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "310",
        "unit": "i.s. dyeing division (is), ram raypur, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "24",
        "unit": "bhalotia fabtek pvt. ltd. b-6 & 7, industrial area, biada, barari, bhagalpur",
        "state": "bihar",
        "district": "bhagalpur",
        "ro": "barauni",
        "sector": "textile",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "299",
        "unit": "bharat handlooms (dyeing unit) moh-chakmode, nehtaur, bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "textile",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "18",
        "unit": "bharat sugar mills, sidhwalia, dist.-gopalganj.",
        "state": "bihar",
        "district": "gopalganj",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "67",
        "unit": "bharat tanning industries, 150 feet. road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1035",
        "unit": "bhel, industrial area, jagdishpur, amethi.",
        "state": "uttar pradesh",
        "district": "amethi",
        "ro": "raebareli",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "311",
        "unit": "j. s. fabrics, 658, 659, 660, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "701",
        "unit": "bihar distillery & bottlers (p) ltd., unit-ii (bottling division), devri, arra, dist-bhojpur",
        "state": "bihar",
        "district": "bhojpur",
        "ro": "patna",
        "sector": "distillery",
        "basin": "sone / ganga",
        "agency": "nsi"
    },
    {
        "code": "25",
        "unit": "bihar state milk co-operative federation ltd. (unit-nalanda dairy biharsharif, dairy project",
        "state": "bihar",
        "district": "nalanda",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "300",
        "unit": "biharilal kargha udyog,garh road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "410",
        "unit": "bisalpur kisan sehkari chini mills,beasalpur, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "garrah/ganga",
        "agency": "vsi pune"
    },
    {
        "code": "312",
        "unit": "j.s. yarn taxtile pvt.ltd., c-33, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1114",
        "unit": "bokaro dairy, sector 12 bokaro steel city, bokaro",
        "state": "jharkhand",
        "district": "bokaro",
        "ro": "dhanbad",
        "sector": "food & beverages",
        "basin": "damodar / ganga",
        "agency": "nit patna"
    },
    {
        "code": "1111",
        "unit": "bokaro steel plant, bokaro steeel city, bokaro",
        "state": "jharkhand",
        "district": "bokaro",
        "ro": "dhanbad",
        "sector": "others",
        "basin": "damodar / ganga",
        "agency": "nit patna"
    },
    {
        "code": "313",
        "unit": "jeet dyeing, 1759- 1761, manwasi road, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "68",
        "unit": "bright tanning industries, 380/1-d, sir iqbal street, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "412",
        "unit": "brijnathpur sugar mills, (a unit of simbhaoli sugar mills ltd.), vill- brijnathpur, hapur, ghaziabad.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "359",
        "unit": "brindavan beverages pvt. ltd., parsakhera, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "1039",
        "unit": "brindavan bottlers pvt. ltd., makhdumpur, nawabganj, tehsil-hasanganj unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "999",
        "unit": "brindawan bottlers pvt. ltd., shafedabad, barabanki",
        "state": "uttar pradesh",
        "district": "barabanki",
        "ro": "lucknow",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "677",
        "unit": "britannia industries ltd.; 15, taratala road, po & ps taratara, kolkata-700088",
        "state": "west bengal",
        "district": "kolkata",
        "ro": "kankinara",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "1014",
        "unit": "c.p. milk & food product product, pvt. ltd.kurshi road, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "1097",
        "unit": "c.p. milk & food products, kursi road, barabanki",
        "state": "uttar pradesh",
        "district": "barabanki",
        "ro": "lucknow",
        "sector": "food & beverages",
        "basin": "kukrail/gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "314",
        "unit": "jet knitwears pvt.ltd., 57a, dada nagar, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "315",
        "unit": "k vinayak knit wear insutries (k vinayak coatsons), plot no. c-21, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "318",
        "unit": "maha laxmi yarn pvt. ltd., b-4/2,i/a, ramnagar chandauli",
        "state": "uttar pradesh",
        "district": "chandauli",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "319",
        "unit": "mahaveer spin fab, 1081, 1082, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "320",
        "unit": "mamb woollens ltd., jamunipur, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "321",
        "unit": "meenar polydyed yarn ltd. bahhra ralhupur, chandauli",
        "state": "uttar pradesh",
        "district": "chandauli",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "323",
        "unit": "mukund industry, j-16, site-3, panki kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "325",
        "unit": "nikhil india cotton industries, e-52, site-1, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "326",
        "unit": "nirbhay industries, a-3, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "327",
        "unit": "prakash dyeing centre khamaria, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "71",
        "unit": "central leather finishers, 112-a 4, wazidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "72",
        "unit": "century leathers, 82-a, wajidpur, jajmau,kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "620",
        "unit": "century pulp and papr (agro waste based ) lalkuan, nainital",
        "state": "uttarakhand",
        "district": "nainital",
        "ro": "haldwani",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "622",
        "unit": "century pulp and papr (board plant), lalkuan, nainital",
        "state": "uttarakhand",
        "district": "nainital",
        "ro": "haldwani",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "621",
        "unit": "century pulp and papr (waste paper), lalkuan, nainital",
        "state": "uttarakhand",
        "district": "nainital",
        "ro": "haldwani",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "374",
        "unit": "chaddha papers ltd., bilaspur rampur",
        "state": "uttar pradesh",
        "district": "rampur",
        "ro": "moradabad",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "328",
        "unit": "pee sons, mariyad patti, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "414",
        "unit": "chamunda papet pvt. ltd., dheerkhera, industrial area, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "415",
        "unit": "chandpur enterprises limited (paper division), noorpur road, chandpur (bijnor) u.p.",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "331",
        "unit": "r r dyers, naya bazar zahid pur jaypur bypass road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "332",
        "unit": "radhey processor, c-40, upsidc rooma, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "333",
        "unit": "raj dyers, mamdevpur, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "615",
        "unit": "cheema papers ltd. (board div.), bazpur road, kashipur (us nagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "1054",
        "unit": "chilwaria sugar mills ltd chilwaria, bahraich",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1055",
        "unit": "chilwariya sugar (disdiv) chilwariya, baharaich\n(formerly name simbhaoli sugars ltd distillery division unit)",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "faizabad",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "982",
        "unit": "cl gupta exports ltd., village jiwai, amroha, bijnaur",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "others",
        "basin": "ramganga / ganga",
        "agency": "jmi"
    },
    {
        "code": "808",
        "unit": "classic tanning industries, 102/88, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "835",
        "unit": "commercial tanners (shadab leather finisher), 94/80 dargh sarif road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1108",
        "unit": "continental engineers ltd kie ind area, roorkee, haridwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "others",
        "basin": "ganga",
        "agency": "neeri"
    },
    {
        "code": "980",
        "unit": "continental india pvt. ltd., nh-58, modipuram, meerut, \nuttar pradesh",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "others",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "416",
        "unit": "coral news prints ltd. gajraula, j.p.nagar",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "335",
        "unit": "rupesh kumar & brothers, bida carpet city, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "337",
        "unit": "shiekh bhullan carpet pvt. ltd (home flooring and decor )., goppur joharpur gopiganj, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "338",
        "unit": "shyam lal (dyeing division), hari rampur, aurai road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "76",
        "unit": "crown tanners (perfect tanners), 531, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "75",
        "unit": "crown tanners-ii 192/184, ram rai saraya, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "77",
        "unit": "crown tanning industries (naw durga tannery), 62 a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "587",
        "unit": "cta apparals pvt. ltd., p-26, 27, 28 & 29, textile centre pilakhuwa, hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "339",
        "unit": "shubh tex, plot no. d-27, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "342",
        "unit": "universal yarn & textile pvt. ltd., sahjani, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "343",
        "unit": "v.s. textile, b-42, rooma, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "564",
        "unit": "dairy craft india pvt. ltd., village â bahadurgarh, distt. hapur, u.p.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "neeri"
    },
    {
        "code": "362",
        "unit": "dairy india pvt ltd. gajraula, amroha.",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "344",
        "unit": "a.o.v. (aov) exports pvt. ltd. d-1, d-2 ind. area site-1 unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "345",
        "unit": "akzonobel india ltd.(ici), \n(johnson matthey) panki industrial area, kanpur.",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "chemical",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1094",
        "unit": "dalmia chini mills unit (distillery unit), negohi, shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "distillery",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "417",
        "unit": "dalmia chini mills unit, negohi, shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "351",
        "unit": "hindustan coca cola beverages(p)ltd, mehndigunj, raja talab,varanasi.",
        "state": "uttar pradesh",
        "district": "varanasi",
        "ro": "varanasi",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "352",
        "unit": "indagro foods ltd. upsidc, site-2 ind. area, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "925",
        "unit": "danish tanners, 913, wazidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "648",
        "unit": "dankuni coal complex coal india ltd. dankuni",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "418",
        "unit": "daurala organics (a unit of d.c.m. sri ram ind. ltd.),\ndaurala, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "chemical",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "419",
        "unit": "daurala sugar works, chemical unit, daurala, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "chemical",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "420",
        "unit": "daurala sugar works, distillery unit, daurala, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "421",
        "unit": "daurala sugar works,sugar unit, daurala, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "78",
        "unit": "dawn tanning industries, 76/a, eidgah road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1118",
        "unit": "debjyoti pulp & paper, vill. millicola, grand trunk rd, asansol, west bengal 713359",
        "state": "west bengal",
        "district": "asansol",
        "ro": "durgapur",
        "sector": "pulp & paper",
        "basin": "damodar / ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "79",
        "unit": "decent leather finisers, 40/39, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "353",
        "unit": "agricom food pvt. ltd. (j.s. international ltd. leather), technology park,b-32 to b-47 banthar, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "360",
        "unit": "pepsico india holdings pvt.ltd. (varun bewarages) sathariya, jaunpur",
        "state": "uttar pradesh",
        "district": "jaunpur",
        "ro": "varanasi",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "365",
        "unit": "rustam foods pvt. ltd., e-28, ind. area, site-1, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "27",
        "unit": "desh ratna dr. rajendra prasad dugdh utpadak sahkari sangh ltd., barauni dairy, , makhanshala road, barauni, begusarai",
        "state": "bihar",
        "district": "begusarai",
        "ro": "barauni",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "689",
        "unit": "dev bhoomi pulp and paper industry pvt ltd ., jwalapur, hardiwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "pulp & paper",
        "basin": "shukhi nadhi",
        "agency": "cppri"
    },
    {
        "code": "375",
        "unit": "dev prayag paper mill pvt.ltd., upsidc, naini, allahabad",
        "state": "uttar pradesh",
        "district": "allahabad",
        "ro": "allahabad",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "425",
        "unit": "devpriya industries ltd. unit-ii (kraft & duplex) vill.-saini, mawana road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "422",
        "unit": "devpriya industries, unit - i, vill-saini, mawana road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "423",
        "unit": "devpriya papers pvt ltd., vill-saini, mawana road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "424",
        "unit": "devpriya products ltd. unit-1(kraft & duplex) vill.-saini, mawana road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "604",
        "unit": "devrishi papers pvt. ltd, jaspur distt.-u.s.nagar.",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "426",
        "unit": "dewans sugars ltd. agwanpur kanth road,moradabad",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "394",
        "unit": "rahman industries ltd. (alladad tannery) a-7, 8 & 9 leather technology park upsidc, industries area, banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "427",
        "unit": "dhampur sugar distillery pvt. ltd vill. & p.o.-asmoli ist.-moradabad u.p.",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1125",
        "unit": "dhampur sugar mills (sugar unit) , vill-rajpura, dist-sambhal",
        "state": "uttar pradesh",
        "district": "sambhal",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "vardhmar river/ mahoba river/ganga",
        "agency": "vsi pune"
    },
    {
        "code": "428",
        "unit": "dhampur sugar mills ltd,asmali,vill. & post- asmali,tehsil-shambal,dist.moradabad,(u.p) pin.244304",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "429",
        "unit": "dhampur sugar mills ltd. vill. rajpura, tah. gunnur, distt: badaunr, bulandshahr.",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "nsi"
    },
    {
        "code": "430",
        "unit": "dhampur sugar mills ltd.( unit distillary), dhampur distt. bijnor (u.p.)",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "431",
        "unit": "dhampur sugar mills ltd.dhampur distt. bijnor (u.p.)",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "678",
        "unit": "dhunseri petrochem & tea ltd. (south asian petrochem ltd.); p.o. khanjanchak, p.s. - durgachak,",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "petrochemical",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "649",
        "unit": "diamond beverages pvt. ltd.; p-41, taratala road, pin - 700088",
        "state": "west bengal",
        "district": "kolkata",
        "ro": "kankinara",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "395",
        "unit": "allied leather finishers pvt. ltd., f-27,28, 42 &4 3, site-2 ind. area, dahi chawki, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "926",
        "unit": "diamond tanners, plot no. 913-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "404",
        "unit": "annapurna carpet ltd. nakahara road, mirzapur",
        "state": "uttar pradesh",
        "district": "mirzapur",
        "ro": "sonbhadra",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "796",
        "unit": "dilshaad textile (dyeing unit) moh-sarai rajbali, nehtaur, bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "textile",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "927",
        "unit": "dinesh oils ltd. d-12,13,14, industrial area, panki-3, kanpur nagar",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "others",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "408",
        "unit": "bajaj kagaj udyog, 112, jamuka, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "626",
        "unit": "doiwala sugar co. ltd. doiwala, dehradun",
        "state": "uttarakhand",
        "district": "dehradun",
        "ro": "dehradun",
        "sector": "sugar",
        "basin": "river song-ganga",
        "agency": "vsi pune"
    },
    {
        "code": "625",
        "unit": "doon valley distillers, kuanwala, dehradun",
        "state": "uttarakhand",
        "district": "dehradun",
        "ro": "dehradun",
        "sector": "distillery",
        "basin": "river song-ganga",
        "agency": "vsi pune"
    },
    {
        "code": "411",
        "unit": "blue star finisers, 996-999, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "413",
        "unit": "calico trends, a- 34-35, leather technology park banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "432",
        "unit": "diesel locomotive works, manduadih, varanasi",
        "state": "uttar pradesh",
        "district": "varanasi",
        "ro": "varanasi",
        "sector": "others",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "433",
        "unit": "dscl hariyawan, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "434",
        "unit": "dscl loni, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1007",
        "unit": "dscl sugar, ajabapur, lakhimpur kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "nsi"
    },
    {
        "code": "347",
        "unit": "dugdh utpadah sahkari sangh ltd.,talab tiwari,allahabad",
        "state": "uttar pradesh",
        "district": "allahabad",
        "ro": "allahabad",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "435",
        "unit": "dscl rupapur, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "657",
        "unit": "durgapur steel plant, durgapur -3 , burdwan",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "others",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "436",
        "unit": "dwarikesh sugar industries ltd, (distillery unit), unit-dwarikesh nagar p.o-bundki, tehsil-nagina, distt- bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "437",
        "unit": "dwarikesh sugar industries ltd. dwarikesh puram afzalgarh, district-bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "438",
        "unit": "dwarikesh sugar industries ltd. faridpur,bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "469",
        "unit": "dwarikesh sugar industries ltd., unit-dwarikesh nagar p.o-bundki, tehsil-nagina, distt- bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "80",
        "unit": "eagle tannery, 425/390, makku saheed ka bhatta, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1126",
        "unit": "east end silk (p) ltd.,narayanpur ,p.o.-narayanpur ,p.s.-malda,dist.-malda,pin-732141",
        "state": "west bengal",
        "district": "malda",
        "ro": "malda",
        "sector": "textile",
        "basin": "mahananda",
        "agency": "jadavpur"
    },
    {
        "code": "656",
        "unit": "east india pharmaceutical works ltd,; raturia waria road, p.s. coke oven, l.b.d.m.c durgapur - 15",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "pharmaceutical",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "679",
        "unit": "emami paper mills ltd. gulmohor unit, r.n. tagore road po alambazar, kolkata 700035",
        "state": "west bengal",
        "district": "kolkata",
        "ro": "kankinara",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "746",
        "unit": "emco industries,plot no. 70 a (1), 150 feet road jajmau, kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "131",
        "unit": "euro leather industries (ishrat ki tannery), 176/169, laltoopurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "747",
        "unit": "euroasia leather ltd., 101/87 b (a-1), idgah road, wajidpur jajmau, kanpur, up (tajwar hussain ki tannery)",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1015",
        "unit": "eveready industries ltd, aishbagh, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "81",
        "unit": "everest export, 175/158 b-3, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "82",
        "unit": "everest tanners, 184 c-2, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "440",
        "unit": "everest tannery pvt. ltd. (unit-2), a-41, l.t.p. banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "443",
        "unit": "ganga pulp & paper (p)ltd,a-6, industrial area, ramnagar, chandauli",
        "state": "uttar pradesh",
        "district": "chandauli",
        "ro": "varanasi",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "90",
        "unit": "everest tannery upholstery (farhat zabi ki tannery), 175/158 b-4, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "83",
        "unit": "everest tanning industries (unit-2), 184 b-1,poddar colony street, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "84",
        "unit": "everest tanning industries., 97-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "85",
        "unit": "evergreen enterprises, 90 block-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "86",
        "unit": "excel exims, 16-c, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "654",
        "unit": "exide industries ltd., haldia, po. & ps . durgachak, haldia , purba medinipur - 602",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "others",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "655",
        "unit": "exide industries ltd., shyamnagar, 91, new chord road , thakurpukur, - 743128",
        "state": "west bengal",
        "district": "24 south paragnas",
        "ro": "alipore",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "88",
        "unit": "faik leather finishers, 76/65 (21b), ram rai sarya, rasulabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "350",
        "unit": "fair exports (giex foods pvt. ltd.) ahmad nagar pahari distt.rampur (up) 244901",
        "state": "uttar pradesh",
        "district": "rampur",
        "ro": "moradabad",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "amu"
    },
    {
        "code": "749",
        "unit": "faiz leather store (new name ifran tannery), 389/360, shitla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "750",
        "unit": "falaq enterprises, 12/9, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "445",
        "unit": "government opium and alkaloid works, ghazipur",
        "state": "uttar pradesh",
        "district": "ghazipur",
        "ro": "varanasi",
        "sector": "pharmaceutical",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "89",
        "unit": "farhan tanners, 172/156, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "91",
        "unit": "farjam tanners, 416-a2, purani chungi, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "92",
        "unit": "farjana tannery, 466/ 377, asarfabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "606",
        "unit": "fibermarx paper pvt ltd, kashipur road, jaspur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "446",
        "unit": "habib tannery pvt.ltd., 15-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "441",
        "unit": "field gun, kalpi raod, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "93",
        "unit": "finished leather job work, 433/398, makku shaheed ka bhatta, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "809",
        "unit": "firoj ki tannery upsana tannery lane 36/37, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "94",
        "unit": "firoj tanners unit-i, 379/1d, sir iqbal street, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "447",
        "unit": "hamraj tanners, plot no. 175/158, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "103",
        "unit": "g.n.leather, 169/162, laltoo purwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "188",
        "unit": "g.p. leather (pahalwan tannery unit-i), 2-a, arazi no. 493, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "95",
        "unit": "g.s. tanners, 38 c, 150 feet road, sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "204",
        "unit": "gajala tannery (rajjak tannery), 189/172, dargha sarif road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "28",
        "unit": "ganga dairy ltd, ramjanpur, begusarai",
        "state": "bihar",
        "district": "begusarai",
        "ro": "barauni",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "950",
        "unit": "ganga dairy, tulsipuram, ramghat road, atrauli, aligarh, u.p.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "442",
        "unit": "ganga kisan sahkari chini mills, morna, muzaffarnagar",
        "state": "uttar pradesh",
        "district": "muzaffarnagar",
        "ro": "muzzafarnagar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "454",
        "unit": "indian tanning ind., 150 ft. road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "455",
        "unit": "iqbal leather ltd., c-2, industrial area, site-2, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "458",
        "unit": "gem tanners 112 a-3, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "565",
        "unit": "gangol sahkari dugdh utpadak sangh ltd., gangol road, partapur, meerut, u.p.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "470",
        "unit": "khatun tanners (rasid tanners), 88/74(22), hidustan compound, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "106",
        "unit": "gauri tanners (kamrudeen ki tannery), 179, laltupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "97",
        "unit": "gaush leather finishers, 331/306 a, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "98",
        "unit": "gazal tanning industries, 104/90 1a, near esi hospital, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "475",
        "unit": "kisan sahkari chini mills ltd.,ghosi,district-mau(u.p)",
        "state": "uttar pradesh",
        "district": "mau",
        "ro": "azamgarh",
        "sector": "sugar",
        "basin": "tamsa / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "482",
        "unit": "liyakat leather finisers (aman tannery), 127, sir iqbal street, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "444",
        "unit": "genus paper product ltd.,kanth road,village:aghwanpur,district-moradabad(up)",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "101",
        "unit": "globe industrial corporation (new globe exim), 104/90 a-7 (2&3), sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "100",
        "unit": "globe industries corporation, 37-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "99",
        "unit": "globe industries, 37-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "166",
        "unit": "globe leather finisher (mustaq ahmad ki tannery), 88-a, wazidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "102",
        "unit": "globe tanners, 52-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "702",
        "unit": "globus spirits limited, dhandua, jandaha, hajipur, dist-vaishali",
        "state": "bihar",
        "district": "vaishali",
        "ro": "patna",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "928",
        "unit": "gold star leather board, plot no. 70, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "104",
        "unit": "golden enterprises, 175/158-a (25-d), bhudhia ghat jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "105",
        "unit": "goodwill tanners, 98-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "355",
        "unit": "gopalji dairy foods p. ltd., garh road, syana, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "485",
        "unit": "lords distillery limited, nandgunj, ghazipur.",
        "state": "uttar pradesh",
        "district": "ghazipur",
        "ro": "varanasi",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1008",
        "unit": "govind sugar mill, aira, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "489",
        "unit": "minar industries, plot no. 401, wajidpur, sanjay nagar jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1127",
        "unit": "grd paper industries private limited ,nh- 6, chamrail ,p.o. + p.s.-liluah,dist.-howrah,pin-711114",
        "state": "west bengal",
        "district": "howrah",
        "ro": "howrah",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "107",
        "unit": "greater arafat tannery pvt. ltd., 12 c, 150 feet road, new jajmau road, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "696",
        "unit": "green leather industries, industrial area, bela, dist.-muzaffarpur.",
        "state": "bihar",
        "district": "muzaffarpur",
        "ro": "muzaffarpur",
        "sector": "tannery",
        "basin": "burhi gandak / ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "642",
        "unit": "gujrat ambuja export sitarganj(usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "811",
        "unit": "gujrat tanners, 104/90, plot no. 369-370, sanjay nagar, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1009",
        "unit": "gulariya chini mills, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "812",
        "unit": "guljar oversease, 73-74 hindustan tannery compoung, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "663",
        "unit": "gun & shell factory,cossipore, 7,k.c.road, po. & ps . cossipore, kolkata - 2",
        "state": "west bengal",
        "district": "kolkata",
        "ro": "kankinara",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "108",
        "unit": "h rahman tanning industries, 101/87, wazidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "490",
        "unit": "mirza international ltd. (tannery division), industrial area, magarwara, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "501",
        "unit": "newel calcutta(p)ltd,d-16, industrial area, ramnagar,chandauli",
        "state": "uttar pradesh",
        "district": "chandauli",
        "ro": "varanasi",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "109",
        "unit": "h.r. traders, 111-f, chabilepurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "813",
        "unit": "h.s. tanners, 142/135, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "110",
        "unit": "habib leather finisers (habib tannery), 14-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "503",
        "unit": "o bee tee limited,gopepur, gopigunj, \n(sant ravidas nagar), bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "111",
        "unit": "hafiz sons tannery pvt. ltd., 93-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "504",
        "unit": "india interprises (greater interprises), 90/76-c1, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1016",
        "unit": "hal ltd, faizabad road, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "680",
        "unit": "haldia petrochemicals ltd. po durgachak medinipur 713203",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "petrochemical",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "112",
        "unit": "hamid leather finisers, 1-d, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "505",
        "unit": "omega international, g-11, 12, 13 & 14, site-ii, upsidc, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "507",
        "unit": "pacific export, a- 33, leather technology park banthar, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "113",
        "unit": "hanif leather, 331/306, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "114",
        "unit": "haq tanners, 97-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "952",
        "unit": "harbansh dairy pvt. ltd., meerut road, mohiuddinpur, meerut, u.p.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "566",
        "unit": "harbansh lal food pvt. ltd. meerut road, mohiuddinpur, meerut, u.p.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "448",
        "unit": "hari om ind. ltd., 841,, bhauti, pratappur, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "pulp & paper",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "4",
        "unit": "harinagar sugar mills ltd. (distillery division), harinagar, dist.- west champaran.",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "5",
        "unit": "harinagar sugar mills ltd., harinagar, dist.- west champaran.",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "115",
        "unit": "harris leather finishers 150 ft. road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "510",
        "unit": "shree radha interprises, h 42, 43, stie-1 psnki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "9",
        "unit": "hassanpur sugar mills, (old name new india sugar mills) hassanpur, dist.-samastipur.",
        "state": "bihar",
        "district": "samastipur",
        "ro": "barauni",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "116",
        "unit": "hayat tannery, 367-a,moti nagar, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "52",
        "unit": "heena leather exims (alvi leathers), 332/308- a (2b), bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "635",
        "unit": "hero motocorp, plot no 3, sector-10, iie sidcul, haridwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "others",
        "basin": "shukhi nadhi",
        "agency": "neeri"
    },
    {
        "code": "356",
        "unit": "hieinz india pvt. ltd., manzurgarhi, anupshahar road, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "836",
        "unit": "hilton tanning industries, 197/189, ram rai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "118",
        "unit": "himalya tanners, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "573",
        "unit": "hind agro industries ltd., c.d.f. complex, anupshahar road, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "512",
        "unit": "rahman industries ltd. site-iii, akarampur-chakarampur, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1036",
        "unit": "hindustan aeronautics limited korwa,munsiganj, amethi.",
        "state": "uttar pradesh",
        "district": "amethi",
        "ro": "raebareli",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "450",
        "unit": "hindustan aeronautics ltd. (hal, chakeri kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "522",
        "unit": "ruksh international b6/b7, leather technology park banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1",
        "unit": "hindustan coca-cola beverages pvt. ltd., e-1, industrial area patliputra, dist.- patna- 13",
        "state": "bihar",
        "district": "patna",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "449",
        "unit": "hindustan equa ltd, e 7, site 1, panki , kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "650",
        "unit": "hindustan unilever ltd. 63 garden reach road . kolkata 700024",
        "state": "west bengal",
        "district": "kolkata",
        "ro": "kankinara",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "523",
        "unit": "sadaf enterprises exposts pvt. ltd., 13, magarwara akarampur chakrampur, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "524",
        "unit": "saf yeast co. ltd. sandila industrial, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "distillery",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "529",
        "unit": "shri lakshmi cotsyn ltd.,gudhrauli,aung,fatehpur",
        "state": "uttar pradesh",
        "district": "fatehpur",
        "ro": "allahabad",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "19",
        "unit": "hpcl bio-fuel ltd., nh-28 b, lauria bagaha road, lauria, west champran, bihar",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "22",
        "unit": "hpcl bio-fuels ltd., (distillery div.) sugauli, dist.- east champaran.",
        "state": "bihar",
        "district": "east champaran",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "6",
        "unit": "hpcl bio-fuels ltd., lauria, dist.- west champaran.",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "7",
        "unit": "hpcl bio-fuels ltd., sugauli, dist.- east champaran.",
        "state": "bihar",
        "district": "east champaran",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "540",
        "unit": "super tannery ltd. (amin tannery) unit- iii, a-46, ltp,banthar, ind. area, dist. unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "544",
        "unit": "thread india ltd., chaubepur, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "681",
        "unit": "ifb agro industries ltd. village - durgapur, po noorpur, via - sarisha ashram, 24 south parganas",
        "state": "west bengal",
        "district": "24 south paragnas",
        "ro": "alipore",
        "sector": "distillery",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "451",
        "unit": "iffco ltd., aonla bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "fertilizer",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "452",
        "unit": "iffco,phulpur,allahabad",
        "state": "uttar pradesh",
        "district": "allahabad",
        "ro": "allahabad",
        "sector": "fertilizer",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "119",
        "unit": "ilahai tannery, 43/36-b, sitla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "120",
        "unit": "imperial leather finisers pvt.ltd., 176/a-1, chabilepurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "554",
        "unit": "unnao distillery and breverege ltd. sekhpur, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "567",
        "unit": "bhikhoo ram yarn dyers harirampur, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "368",
        "unit": "india frozen foods, sambhal",
        "state": "uttar pradesh",
        "district": "sambhal",
        "ro": "moradabad",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "645",
        "unit": "india glycol ltd. (meg unit), bazpur road, kashipur, distt.- u.s.nagrar.",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "chemical",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "624",
        "unit": "india glycol ltd.(distillary unit) bazpur road, kashipur, distt.- u.s.nagrar.",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "574",
        "unit": "leeza leather, 330 /306, b (6), jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "575",
        "unit": "navratan tannery, 532-533, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1017",
        "unit": "india pesticides ltd, e-17-23, g-31, 32 ind ared chinhat , lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "pesticide",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "576",
        "unit": "ruksh enterprises, b-5, leather technology park banther, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "658",
        "unit": "indian iron & steel co. (iisco), (burnpur works)., p.o.burnpur, p.s.hirpur,burdwan",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "others",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "768",
        "unit": "indian national tannery, 2-a, purani chungi, jajmau, knapur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "21",
        "unit": "indian oil corporation limited (ioc), barauni oil refinery. dist begusarai p.o.barauni oil refinary",
        "state": "bihar",
        "district": "begusarai",
        "ro": "barauni",
        "sector": "oil & refinery",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "651",
        "unit": "indian oil corporation, haldia refinary,haldia oil refinary po, hadia dist,purba mednapur-721606",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "oil & refinery",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "1056",
        "unit": "indian potas ltd (u.p. state sugar corporation ltd.), jarval road bahraich",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "453",
        "unit": "indian potash ltd, sakauti tanda, muzaffarnagar road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "577",
        "unit": "m.k.dying, , site-3, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "578",
        "unit": "praveen taxtiles, e-4, site-2, panki industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "669",
        "unit": "indian pulp and paper pvt. ltd. po hazarinagar, ps naihati, dist-24 pargana (n) pin - 743135",
        "state": "west bengal",
        "district": "24 north paragnas",
        "ro": "kankinara",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "589",
        "unit": "calico unit -2, khasra no. 1534, 1539, shekhpur nari, near ltp banther, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "23",
        "unit": "indira paper mill pvt. ltd., mohuli road, mathpar, begumpur, didarganj, patna",
        "state": "bihar",
        "district": "patna",
        "ro": "patna",
        "sector": "pulp & paper",
        "basin": "punpun river/ganga",
        "agency": "nit patna"
    },
    {
        "code": "1037",
        "unit": "indogulf fertilzer ltd, jagdishpur amethi\n(grasim industries ltd.)",
        "state": "uttar pradesh",
        "district": "amethi",
        "ro": "raebareli",
        "sector": "fertilizer",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "121",
        "unit": "insha leather finisers, (cosmo tanners) 160-c, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "122",
        "unit": "international tanning industries, 645, shitala bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "769",
        "unit": "international tanning industries, 645, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "770",
        "unit": "iqbal & company, 404/377 a, asarfabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "123",
        "unit": "iqbal ahamad ki tannery, 71/60 a, seetala bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "590",
        "unit": "meezan processor, 1460, 1462, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "752",
        "unit": "iqbal tanners 92/97, gajjupurwa jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "814",
        "unit": "iqbal tanners unit-2, 16 c-1, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "591",
        "unit": "mohan gold water and beverage ltd. akarampur, chakarampur, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "979",
        "unit": "irachem c-5, upsidc industrial area, gajraula, jyotiba phule nagar, uttar pradesh",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "others",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "124",
        "unit": "irfan tanners, 75-a, eidgah road, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "125",
        "unit": "irfan tennary, 70/59, sheetla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "126",
        "unit": "irshad ki tannery, 391/362, seetala bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "127",
        "unit": "ishrat finisers industries, 173/166, laltoopurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "128",
        "unit": "islam leather finishers, 141/134, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "129",
        "unit": "islam tanners, 93/79 c, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "592",
        "unit": "dscl sugar (distillery unit), hariyawan, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "distillery",
        "basin": "sai / gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "682",
        "unit": "itc limited paper boards & speciality paper division tribeni unit chandrahati po hooghly 712504",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "2",
        "unit": "itc ltd. (tobacco division), basudeopur, munger-811202",
        "state": "bihar",
        "district": "munger",
        "ro": "barauni",
        "sector": "others",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "32",
        "unit": "itc ltd. dairy plant, sitakund industrial area, nandlalpur, benigir, basudeopur, munger-811202",
        "state": "bihar",
        "district": "munger",
        "ro": "barauni",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "593",
        "unit": "shatabdi systhetic, c-22,23, upsidc, industrial area rooma, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "594",
        "unit": "kishan sahkari sugar mills sathiyaon (distillery) sathiyaon azamgarh",
        "state": "uttar pradesh",
        "district": "azamgarh",
        "ro": "azamgarh",
        "sector": "distillery",
        "basin": "tamsa / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "691",
        "unit": "j.j. exporters ltd., panna mills compound, baunsi road, dist.- bhagalpur.",
        "state": "bihar",
        "district": "bhagalpur",
        "ro": "barauni",
        "sector": "textile",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "456",
        "unit": "j.k. sugar ltd. (dsm sugar) meerganj, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "135",
        "unit": "j.n. international, 391/362, seetala bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "595",
        "unit": "kishan sahkari sugar mills sathiyaon azamgarh",
        "state": "uttar pradesh",
        "district": "azamgarh",
        "ro": "azamgarh",
        "sector": "sugar",
        "basin": "tamsa / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "596",
        "unit": "fida hussain tannery (nafees leather finishers), 24-a-175/158 a, budhiyaghat, jajmau, dist: kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "705",
        "unit": "firoj tanners unit-ii, 18-b, sir iqbal street, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "132",
        "unit": "jai bharat enterprises, 328/305 (2c), bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "457",
        "unit": "jain distillery, 8th km, stone, nagina road, bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "133",
        "unit": "jajmau leathers finishers (bihari tennery), 16-b, galla godown, gajjupura, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "134",
        "unit": "jamal industries, 712, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "376",
        "unit": "janki news print pvt. ltd.(sumit agro products ltd.) panchali baghpat road ,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "706",
        "unit": "famous tannery, 163/156, laltupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "709",
        "unit": "kamaal tanning ind., 43/36, shitla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "713",
        "unit": "divine synthetic, b-9, 10, panki site-4, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "714",
        "unit": "iqbal tanners, 16 c - 1 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "718",
        "unit": "avon dying, dada nagar, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "976",
        "unit": "jindal pipes ltd. 22nd delhi hapur road nh-24, po jindal nagar dist. hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "others",
        "basin": "ganga",
        "agency": "neeri"
    },
    {
        "code": "815",
        "unit": "johara tennary, 168/161, laltoo purwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "459",
        "unit": "jubilant industries limited (fertiliser unit) bhartiagram, gajraula, district- jp nagar, u.p. - 244223",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "fertilizer",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "460",
        "unit": "jubilant industries limited (polymer unit) bhartiagram, gajraula, district- jp nagar, u.p. - 244223",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "chemical",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "461",
        "unit": "jubilant life sciences limited (chemical unit i) bhartiagram, gajraula district- jp nagar, u.p. - 244223",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "chemical",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "462",
        "unit": "jubilant life sciences limited (chemical unit ii) bhartiagram, gajraula, district- jp nagar, u.p. - 244223",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "chemical",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "463",
        "unit": "jubilant life sciences limited (distillery unit) bhartiagram, gajraula district- jp nagar, u.p. - 244223",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "816",
        "unit": "junaid tanning, 93/79-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "891",
        "unit": "jyoti industries(changed name s.s textiles), e-86, udyogpuram partapur, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "719",
        "unit": "best tanning ind., 150 ft. road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "720",
        "unit": "chaudhari leather finisers 410/380, ashaefabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "837",
        "unit": "k.c.tain, 101/87 a, idgah road, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "721",
        "unit": "chawla textiles, 92 a, dada nagar, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "464",
        "unit": "k.r. pulp & paper ltd(unit-ll) jalabad road shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "pulp & paper",
        "basin": "garrah/ganga",
        "agency": "cppri"
    },
    {
        "code": "465",
        "unit": "k.r.pulp & papers ltd. (unit -1), jalalabad road,shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "pulp & paper",
        "basin": "garrah/ganga",
        "agency": "cppri"
    },
    {
        "code": "722",
        "unit": "h.k.tanning ind., plot no. 539/540, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "136",
        "unit": "kadir industries (newada tanners), 94/80, dargah road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "797",
        "unit": "kailash dairy ltd., rithani, delhi road, meerut, u.p.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "732",
        "unit": "a star tanners, 341/a-3, manohar nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "377",
        "unit": "kamakshi papers pvt. ltd., gajraula, distt. amroha",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "892",
        "unit": "kamal dying house, b-5, udyogpuram, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "137",
        "unit": "kamal enterprises, 331/306-b, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "688",
        "unit": "kamarhati paper mill, kamarhatti, west bengal",
        "state": "west bengal",
        "district": "kamarhati",
        "ro": "barrackpore",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "740",
        "unit": "aijaj tannery, 16-d, 150 feet. road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "466",
        "unit": "kanav paper pvt. ltd. (bifurcated unit of devpriya fibers pvt ltd., vill.-panchali, baghpat road, meerut)",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "467",
        "unit": "kanpur dugdh utpadan sahakari sangh, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "741",
        "unit": "al-rahbar leathers pvt. ltd., 173/157 (a-2), bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "316",
        "unit": "kanta polytex p ltd, by pass road, vedvyas puti, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "138",
        "unit": "karamat tanning industries, 783a, sanjay nagar, jajmau, kanpur, up (allies leather export)",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "317",
        "unit": "kartik fabrics pvt.ltd., khasra no.184-185-186, pawanpuri, murad nagar, ghaziabad.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "631",
        "unit": "kashi vishwanath textile mill ltd,ramnagar road",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "textile",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "607",
        "unit": "katyayani paper mill pvt. ltd., jaspur road, kashipur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "378",
        "unit": "kaushambi paper mill pvt. ltd., khasra no-138, vill, naipura khadar, teh, dhanaura, gajraula, amroha",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "139",
        "unit": "kazi leather industries, (huda hide agency), 95/22, farrash khana, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "468",
        "unit": "kesar enterprises suagr division baheri, bareilly",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "726",
        "unit": "keser enterprises (distillery unit) ,bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "893",
        "unit": "keshav industries, khasra no. 290, delhi-garh road, near petrol pump, dhaulana, pilkhuwa, hapur.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "646",
        "unit": "kesoram rayon (unit of cygnet industries ltd.), p.o.nyasari,ps.morga, hooghly - 513",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "textile",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "945",
        "unit": "khaitan india ltd. khaitan nagar, pollashi, nadia, pin - 741157",
        "state": "west bengal",
        "district": "nadia",
        "ro": "kankinara",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "817",
        "unit": "khalid leather finisers, 3, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "140",
        "unit": "khan leather finishers, 434/399-a, makku sahid ka bhatta, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "619",
        "unit": "khatima fibres ltd., khatima (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "742",
        "unit": "al-saba tanners, 3-1 b, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "142",
        "unit": "khursheed anwar ki tennery, 12/9, gajjupurwa, banwari ka bagicha, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "141",
        "unit": "khursheed ki tannery (vti export), 126/119 b, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "743",
        "unit": "ashu charm udyog, 96/82, dargah sharif chauraha, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "143",
        "unit": "khwaja finishers, 389/360-a, shetla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "627",
        "unit": "kichha sugar mills, kichha (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "744",
        "unit": "caravan tanners, 103 / 104-a, hashmi road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "629",
        "unit": "kisan sahakari chinni mill, nadehi (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "745",
        "unit": "danish leather industries, 111-b, chhabeelepurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "929",
        "unit": "kisan sahkari chini mills ltd (disterllery unit) farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "nsi"
    },
    {
        "code": "471",
        "unit": "kisan sahkari chini mills ltd(sugar unit), farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur nagar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "nsi"
    },
    {
        "code": "472",
        "unit": "kisan sahkari chini mills ltd, hasanpur, j.p.nagar",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "473",
        "unit": "kisan sahkari chini mills ltd, jahagirabad, anoopshahr, distt. bulanadshahar",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "379",
        "unit": "kisan sahkari chini mills ltd, satha, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "580",
        "unit": "kisan sahkari chini mills ltd., (distillery unit), sneh road, najibabad, district bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnore",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "474",
        "unit": "kisan sahkari chini mills ltd., tilhar, shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "777",
        "unit": "k.p.chemi colour, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "778",
        "unit": "ashtha enterprises, khanpur, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "476",
        "unit": "kisan sehkari chini mills, semikhera bareillyltd. faridpur,bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "477",
        "unit": "kisan sehkari chini mills,powayan,shajhanpur, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "478",
        "unit": "kisan sehkari chini mills,puranpur, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "782",
        "unit": "harsh enterprises, khanpur, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "783",
        "unit": "khushwaha printers, narkasha, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "618",
        "unit": "km papers,khuriya, kichha road, rudrapur, distt. us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "1058",
        "unit": "km sugar mills ltd distillery div motinagar ,faizabad",
        "state": "uttar pradesh",
        "district": "faizabad",
        "ro": "faizabad",
        "sector": "distillery",
        "basin": "tamsa / ganga",
        "agency": "nsi"
    },
    {
        "code": "1059",
        "unit": "km sugar mills, motinagar, faizabad",
        "state": "uttar pradesh",
        "district": "faizabad",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "tamsa / ganga",
        "agency": "nsi"
    },
    {
        "code": "670",
        "unit": "kohinoor paper & newsprint pvt.ltd.; figc, phase -ii, sector-v, p.o.kalatalahat, ps.falta, 24-pgs(s) ,pin - 743504",
        "state": "west bengal",
        "district": "24 south paragnas",
        "ro": "alipore",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "784",
        "unit": "shethu sad. anguribagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "636",
        "unit": "kranti automobiles, plot no 10-11, sector-8a iie sidcul haridwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "others",
        "basin": "shukhi nadhi",
        "agency": "neeri"
    },
    {
        "code": "479",
        "unit": "kribhco shyam fertilizer limited, jalalabad road shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "fertilizer",
        "basin": "garrah/ganga",
        "agency": "amu"
    },
    {
        "code": "480",
        "unit": "kripa ram dairy pvt. ltd., village- bhojpur, tahsil- modinagar, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "671",
        "unit": "krishana tissue pvt. ltd. madari, po.kantapukur, ps. bagnan, dist. howrah",
        "state": "west bengal",
        "district": "howrah",
        "ro": "howrah",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "1096",
        "unit": "krishna tissue pvt.ltd., burdwan katwa road, po.+ ps. bhatar, dist.-burdwan ,pin-713125",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "pulp & paper",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "1010",
        "unit": "kscm (distillery unit) sampurna nagar, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1011",
        "unit": "kscm (sugar unit) sampurna nagar, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1012",
        "unit": "kumbhi chini mills, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "nsi"
    },
    {
        "code": "805",
        "unit": "kwality ltd. (formerly vashney bandhu food p. ltd.) vill. mumrejpur, debai, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "amu"
    },
    {
        "code": "633",
        "unit": "kwality polythread, plot no 34, sector-3a, iie sidcul haridwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "textile",
        "basin": "shukhi nadhi",
        "agency": "iit delhi"
    },
    {
        "code": "785",
        "unit": "tandon brothers, anguribagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "481",
        "unit": "l.h.sugar factory limited,pilibhit,bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "786",
        "unit": "shiva industries, 26 c, site -1, panki , kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "787",
        "unit": "standard niwar, 23/24 d, panki site-3, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "788",
        "unit": "c.r. clothing pvt. ltd., d 1, ind estate, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "146",
        "unit": "leather age (acme tanners), 86/69, hindustan tannery compound, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "147",
        "unit": "leather imbosing, 379/d-3, sir iqbal street, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "818",
        "unit": "leather life, 77/66-a, sheetla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "148",
        "unit": "leather world, 184-a/1, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "789",
        "unit": "j.p. nit wears, s-9 site-4, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "790",
        "unit": "k.s.m. hosery, g-2, g-3, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1095",
        "unit": "lh sugar factories ltd. (distillery div) pilibhit",
        "state": "uttar pradesh",
        "district": "pilibhit",
        "ro": "bareilly",
        "sector": "distillery",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "149",
        "unit": "liberty tanners, 173/157, burhiaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "792",
        "unit": "usha hosiery, g-30, site-5, panki kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "483",
        "unit": "lml ltd., c 10, site 2, panki , kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "373",
        "unit": "lohia corp. ltd. (old name: lohiya starlinger ltd.), 19 d, panki site-1, kanpur,u.p.",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "484",
        "unit": "lohiya corp ltd., chauberpur , kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "896",
        "unit": "loothara handloom pvt.ltd, gangol road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "798",
        "unit": "jai bajrang yarn dyers, khamriya road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1018",
        "unit": "lucknow producer co-oprative milk union ltd., japling road, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "33",
        "unit": "lumbni bevera-ges pvt. ltd., ind. area, hajipur, vaishali",
        "state": "bihar",
        "district": "vaishali",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "150",
        "unit": "m.a leather, 159/152 b, lattu purwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "165",
        "unit": "m.a. industries (mustafij ahmad ki tannery), 964 k, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "117",
        "unit": "m.h. tanners (hazi badde ki tannery), 433/398, makku said ka bhatta, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "932",
        "unit": "m.i.saddel work, 14-c2, wajidpur jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "810",
        "unit": "gbs tanners pvt. ltd., b-6, site-2, industrial area, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "753",
        "unit": "m.m. leather finishers (anna tannery), 109/90 (e) wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "844",
        "unit": "india dying works/m j dying/ joya dying & finishing works, f-8 site 5, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "758",
        "unit": "m.s tanners (r.k.leather finisers), 87-c(1), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "845",
        "unit": "india prints, khanpur, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1129",
        "unit": "madhubati papers pvt. ltd. ,national highway - 6 ,p.o.-mahishrekha ,p.s.-howrah,dist.-howrah,pin-711303",
        "state": "west bengal",
        "district": "howrah",
        "ro": "howrah",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "846",
        "unit": "r.j.fashion (s.s.printers), anguribag, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "486",
        "unit": "mahadev pulp prod., dada nagar",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "pulp & paper",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "847",
        "unit": "r.r.prints house, khanpur, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "848",
        "unit": "basotia ind., c-16,17, site-4, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "151",
        "unit": "mahboob sons 104 /90 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "640",
        "unit": "mahindra & mahindra ltd ,vill-lalpur kichha road rudrapur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "others",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1064",
        "unit": "maizapur sugar corp gonda maizapur chini mill maizapur, gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "152",
        "unit": "mak international, 4-a, ram rai sarai, rasulabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "849",
        "unit": "shudarshan dying, site-3, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "989",
        "unit": "mangalam milk india pvt.ltd., beruaikala, phoolpur, allahabad",
        "state": "uttar pradesh",
        "district": "allahabad",
        "ro": "allahabad",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1130",
        "unit": "manjhaulia sugar industries pvt. ltd. (distillery div.) ( jai shree sugar mills) manjhaulia, dist.- west champaran.",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "8",
        "unit": "manjhaulia sugar industries pvt. ltd.( jai shree sugar mills) manjhaulia, dist.- west champaran.",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "1065",
        "unit": "mankapur chini mills ltd, , gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1066",
        "unit": "mankapur sugar ind chemical division gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "850",
        "unit": "v.n.sons(standard niwar) panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "153",
        "unit": "maqdom tanning industries, 103/89, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1101",
        "unit": "marbaha forgen foods, simraha, forbesganj, araria",
        "state": "bihar",
        "district": "araria",
        "ro": "purnea",
        "sector": "slaughter house",
        "basin": "parmar / mahananda",
        "agency": "nit patna"
    },
    {
        "code": "851",
        "unit": "sarvodaya bleaching works, g-96, site-3, panki,",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "369",
        "unit": "marya frozen agro foods pvt. ltd., mohanpur, shahjahanpur road, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "slaughter house",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "1102",
        "unit": "mash agro foods ltd., at-chilhamari, p.o.-pothia, dist-kishanganj",
        "state": "bihar",
        "district": "kishanganj",
        "ro": "purnea",
        "sector": "slaughter house",
        "basin": "parmar / mahananda",
        "agency": "nit patna"
    },
    {
        "code": "852",
        "unit": "a.k bleaching and dyeing, g 50, stie-3, panki,",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "853",
        "unit": "shikhar textile & bleaching( old name basudev printer), 18 b dada nagar, kanpur.",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "154",
        "unit": "mash international, 83/69, hindustan compound, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "703",
        "unit": "mateshwari paper mills pvt. ltd., mahauli road, karmalichak, didarganj, patna",
        "state": "bihar",
        "district": "patna",
        "ro": "patna",
        "sector": "pulp & paper",
        "basin": "punpun river/ganga",
        "agency": "nit patna"
    },
    {
        "code": "487",
        "unit": "mawana sugar works, mawana, meerut.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "652",
        "unit": "mcpi private limited, (formerly name - mcc pta corp.pvt.ltd) ,bhunia rai chakmednipore east,haldia dist, 7112249",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "petrochemical",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "854",
        "unit": "kwality zippers pvt. ltd. plot no. 39 â b, dada nagar, industrial area, kanpur, u.p.",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "855",
        "unit": "maharaja bleaching works, d-76, site-4, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "155",
        "unit": "meraj tanning ind. 102/87, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "156",
        "unit": "mercury leather finisers, 265, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "488",
        "unit": "merino industries ltd., village- achheja, p.o.- hapur, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "chemical",
        "basin": "kali east / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "157",
        "unit": "merit leather finisers, 414, sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "158",
        "unit": "merit leather product, 91 a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "572",
        "unit": "milk food ltd.agwanpur bhusan,vice president",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "neeri"
    },
    {
        "code": "857",
        "unit": "b.m.sons, angooribagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "858",
        "unit": "rakam export, d 9, ind. estate, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "26",
        "unit": "mithila dugdh utpadak sahkari sangh ltd.(samastipur dairy), industrial area, harpur alouth, p.o. & dist-samastipur",
        "state": "bihar",
        "district": "samastipur",
        "ro": "barauni",
        "sector": "food & beverages",
        "basin": "burhi gandak / ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "1106",
        "unit": "mithila dugdh utpadak sahkari sangh ltd., laxmi sadar, darbhanga",
        "state": "bihar",
        "district": "darbhanga",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "punpun river/ganga",
        "agency": "nit patna"
    },
    {
        "code": "955",
        "unit": "mla industries (former name - syntic silica prod.), d-7 b, d-8, & d-16, site-1, panki industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "chemical",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "828",
        "unit": "mmz (sartaj tanners), 104/9a (7h), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "159",
        "unit": "mobin tanners, 91 a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "860",
        "unit": "k & aar accessaries, 18 c angooribagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "861",
        "unit": "kamla dyeing (kamla prints), ambedkar nagar, khanpur, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "862",
        "unit": "n.r. silk international (llp), 2/12 a, angooribagh farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "322",
        "unit": "modern process house,mohakampur,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "491",
        "unit": "modi distillery, modi nagar, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "492",
        "unit": "modi nagar paper mills, modi nagar, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "493",
        "unit": "modi sugar mills, modi nagar, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "931",
        "unit": "moh. ishaq, moh. ismile (old name lari tannery), 33/29, (2-a,3-a), jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "163",
        "unit": "moh. wasim leather, 332/308, bhalla estate jajamau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "863",
        "unit": "p lal export, 2/118 b, angooribagh farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "864",
        "unit": "pandey dyeing & printing works, near bansmandi, angooribagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "380",
        "unit": "mohit paper mills pvt ltd. nagina road, bijnor.",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "494",
        "unit": "mohit petro chemicals pvt. ltd, 9th km. stone, nagina road, bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "754",
        "unit": "moin tanners, 382/352-a, sheetla bazar, bangali ghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "865",
        "unit": "r.s creation, jatwara puliya, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "653",
        "unit": "mother dairy calcutta p.o. dankuni coal complex pin - 712310",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "495",
        "unit": "mother dairy fruit & vegetable pvt. ltd., 18 k.m. stone, pilkhua, ghaziabad\nnamed as pilkhuwa dairy",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "1105",
        "unit": "mother dairy fruit & vegetable pvt. ltd., a-bathnna, p.o-piprakothi, motihar, dist-east champarna",
        "state": "bihar",
        "district": "east champaran",
        "ro": "muzaffarpur",
        "sector": "food & beverages",
        "basin": "burhi gandak / ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "933",
        "unit": "mughis tanners, 332/308-a, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "866",
        "unit": "roopkisan ajay kumar, dyeing & printing works, angoori bagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "614",
        "unit": "multiwal duplex pvt ltd, kundeswari road kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "613",
        "unit": "multiwal pulp & board mills pvt. ltd., kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "901",
        "unit": "muskaan dyeing nai basti, navgawn, sadat, amroha.",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "867",
        "unit": "s.r. fashion, angoori bagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "868",
        "unit": "sumit prints, angooribagh, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "357",
        "unit": "n.i.f. pvt ltd (namastey india food), vill-brahampur shivrajpur, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "869",
        "unit": "uchit international, near sani mandir madhopur, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "755",
        "unit": "n.r. tanners pvt. ltd., 175/158-f1, bhuriyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "870",
        "unit": "vijay prints, a4 b, ind. estate, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "773",
        "unit": "n.s tanners, 84-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "167",
        "unit": "n.s. tanners unit-2, 83a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "644",
        "unit": "naari pharma ltd. (indophyto & chemcials pvt ltd), vill-sakhanpur ramnagar",
        "state": "uttarakhand",
        "district": "nainital",
        "ro": "haldwani",
        "sector": "pharmaceutical",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "756",
        "unit": "naaz traders, 111-e/5, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "168",
        "unit": "nadari tanning ind., 96 a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "774",
        "unit": "nafis ki tannery, 1-d-15 a, chhabilepurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "370",
        "unit": "nagar nigam slaughter houe, mohanpur thiriya, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "slaughter house",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "169",
        "unit": "nagauri tanning ind. 102/88-a(3), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "598",
        "unit": "naini papers ltd., moradabad road, kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "599",
        "unit": "naini tissues ltd., moradabad road, kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "672",
        "unit": "nalco chemicals india ltd. kannagar, hooghly",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "chemical",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "496",
        "unit": "nanglamal sugar complex, distillery unit, nanglamal,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "497",
        "unit": "nanglamal sugar complex,nanglamal,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "324",
        "unit": "national handloom, mohkampur, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "934",
        "unit": "national industrial corp. ltd raja -ka-sahaspur,bilari distt.-moradabad(up)",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "1119",
        "unit": "natraj electrocasting pvt. ltd., chhotaram chandrapur, p.s. ausgram, distt- burdwan - 713148",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "pulp & paper",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "871",
        "unit": "a r s dyeing , himmatpur bakuchiya, bhadohi.",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "498",
        "unit": "nav bharat duplex p ltd., badnoli, modi nagar, ghaziabad.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "839",
        "unit": "navi leather finisher, 58 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "873",
        "unit": "anoo shukla ka dyeing plant, f-8, upsidc, rooma, kanpur (rita nit wear)",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "170",
        "unit": "naz leather finishers, 14-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "819",
        "unit": "naz tanners, 111 e/5, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "499",
        "unit": "neoli sugar factory ltd, neoli, kashiram nagar, kasganj",
        "state": "uttar pradesh",
        "district": "kasganj",
        "ro": "aligarh",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "500",
        "unit": "new bonanza india ltd., nagla shekhu road,vill.-saini,meerut-mawana road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "171",
        "unit": "new era enternational, 16 c (3), gajjupurwa, jajmau, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "172",
        "unit": "new era tanning centre, 105/100, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "875",
        "unit": "apolo dyeing house, jangi road, mirzapur",
        "state": "uttar pradesh",
        "district": "mirzapur",
        "ro": "sonbhadra",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "877",
        "unit": "b.c. yarn dyers, morh road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "173",
        "unit": "new leather line, 88/74, 63 k 12, hidustan compound, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "174",
        "unit": "new light tanners, 59 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "175",
        "unit": "new light tanning industries, 125 iqbal street, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "176",
        "unit": "new modern india tannery (new shewan tannery), 395 /366, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "10",
        "unit": "new swadeshi sugar mills, narkatiaganj, dist.- west champaran",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "20",
        "unit": "new swadeshi sugar mills, (distillery division), narkatiaganj, dist.- west champaran",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "775",
        "unit": "new taj leather finisher, 140, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "757",
        "unit": "new universal tannery, 419/378, purani chungi, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "878",
        "unit": "balaji industries, 1582, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "177",
        "unit": "nida tanners 189/172-a, jajmau road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "879",
        "unit": "bee kay woollens (p) ltd, by pass road, bhadohi.",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "880",
        "unit": "carpet palace dyeing division, p.no.- 67-69, 69 a carpet city bida carpet city, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "179",
        "unit": "nisar sons (lari tannery), 166, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "224",
        "unit": "nisha enterprises, (saud tannery), 12/9, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "178",
        "unit": "nisha traders, 25/20, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "180",
        "unit": "nizam tanners, 46/45, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "181",
        "unit": "noor leather finishers, 154/147, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "182",
        "unit": "noor tanners, 5 block-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "881",
        "unit": "deep knitwear, c-19, panki site-4, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "883",
        "unit": "dewnathpur woollen mills pvt. ltd., laxman patti devnathpur bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "502",
        "unit": "northern tannery, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "884",
        "unit": "double aar industries, d-4, site-4 panki industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "184",
        "unit": "nusrat tannery pvt. ltd., 22/19, gajjpurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "886",
        "unit": "ganga knit fab, c-98, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "371",
        "unit": "omar internatinoal, village-yakubpur, sahaspur, dhampur, bijnor.",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "slaughter house",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "887",
        "unit": "ganga textile, c-23, panki site-5, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "288",
        "unit": "omega international (rennets estern export) 2-b & 35, ramrai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "888",
        "unit": "garima ind. 1533, akarampur, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "890",
        "unit": "ideal carpet limited, gopiganj, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "894",
        "unit": "ak industries, 85 b, dadanagar, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "664",
        "unit": "ordnance factory, dum dum , kolkata - 2",
        "state": "west bengal",
        "district": "kolkata",
        "ro": "kankinara",
        "sector": "others",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "959",
        "unit": "ordnance factory, kalpi road, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "others",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "940",
        "unit": "orgami cellulo pvt. ltd. (formerly: jmj paper products pvt. ltd.), khempr, shikarpur, haridwar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "pulp & paper",
        "basin": "banganga",
        "agency": "cppri"
    },
    {
        "code": "895",
        "unit": "kohinoor woollen carpet industry , g.t. road ghatampur aurai, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "948",
        "unit": "oriental aromatics ltd. (formerly camphor & allied products ltd.) rampur rd, c.b.ganj, bareilly,",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "chemical",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "268",
        "unit": "oriental tanning industrial, 5 block-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "506",
        "unit": "oswal overseas ltd.suagr division nawabganj,bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "897",
        "unit": "m.r. proofing industries, magarwara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "820",
        "unit": "oversease tanning corporation 3 -b a-block, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "898",
        "unit": "varanasi carpet exports pvt. ltd. madhosingh, g.t. road, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "899",
        "unit": "manoj dyers, ahemadpur, phulwariya, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "381",
        "unit": "p.b.s foods, (sugar) pvt. ltd, chandpur, distt. bijnor.",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "643",
        "unit": "p.m.v malting pvt ltd, nandnagar industrial estate, mahuakheraganj, kashipur",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1019",
        "unit": "p.n intenational c-11-13, ind area nadarganj, amausi, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "900",
        "unit": "mondey apprials, sadipur, mandhana, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "186",
        "unit": "pacific leather finisers, 197/189, ramrai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "187",
        "unit": "pacific leather pvt.ltd., 198/200, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "822",
        "unit": "pahalwan tannery (unit-2), 2-a, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "193",
        "unit": "pahalwan tannery (unit-3), plot no. 2-a/3, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "902",
        "unit": "palki industry pvt. ltd. c-1, c-2,c-3, tajopur, industrial area, mau.",
        "state": "uttar pradesh",
        "district": "mau",
        "ro": "azamgarh",
        "sector": "textile",
        "basin": "tamsa / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "905",
        "unit": "pramod zari industries pvt. ltd. c-12, industrial estate, maunath bhanjan, mau.",
        "state": "uttar pradesh",
        "district": "mau",
        "ro": "azamgarh",
        "sector": "textile",
        "basin": "tamsa / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "907",
        "unit": "radha dyeing corporation, carpet city bida, bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "189",
        "unit": "paradise leather finfishers, 16 b-2, chabeelepurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "570",
        "unit": "paramount tannery industries, 19 laltupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "190",
        "unit": "park leather (aaj tanners) 58/47,shitla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "911",
        "unit": "sam taxtile, b-44, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1132",
        "unit": "parle biscuits pvt ltd (distillery unit), kathwal kala, bahraich",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "ayodhya",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1057",
        "unit": "parle biscuits pvt ltd, bahraich",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "821",
        "unit": "pasha tanners, 815 b - 2, asarfabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "903",
        "unit": "pashupati taxtiles, garh road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "957",
        "unit": "pasupati acrylon ltd. kashipur roadthakurdawara dist.moradabad-244601 (up)",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "textile",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "508",
        "unit": "paswara papers(p) ltd, mohiuddinpur,delhi road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1133",
        "unit": "patna paper mill pvt. ltd., mahauli, kothiya, patna",
        "state": "bihar",
        "district": "patna",
        "ro": "patna",
        "sector": "pulp & paper",
        "basin": "punpun river/ganga",
        "agency": "nit patna"
    },
    {
        "code": "912",
        "unit": "shiva knit wear, b 15,16, site 4, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "191",
        "unit": "penja leathers, 104/90-a (24-b),sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "192",
        "unit": "penja tanning ind. pvt. ltd., 104/90 (23-a), sanjay nagar, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "660",
        "unit": "pepsico india holdings pvt. ltd. (m/s frito lay division), sankrail, p.o. dhulagorh, p.s. howarh - 711302",
        "state": "west bengal",
        "district": "howrah",
        "ro": "howrah",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "913",
        "unit": "shivam textiles, j 49, site 3, panki, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "904",
        "unit": "pilkhuwa water proofing company, jindal nagar, hapur.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1117",
        "unit": "pinex paper mill pvt. ltd., jambon, kataberia road shivpur, durgapur district - burdwan",
        "state": "west bengal",
        "district": "burdawan",
        "ro": "durgapur",
        "sector": "pulp & paper",
        "basin": "damodar / ganga",
        "agency": "jadavpur"
    },
    {
        "code": "683",
        "unit": "pmc rubber chemicals 103 gt road (west) po & ps rishra district hooghly pin - 712248",
        "state": "west bengal",
        "district": "hooghly",
        "ro": "hooghly",
        "sector": "chemical",
        "basin": "ganga",
        "agency": "jadavpur"
    },
    {
        "code": "914",
        "unit": "shobha woollens pvt. ltd., hari rampur gyanpur road bhadohi",
        "state": "uttar pradesh",
        "district": "bhadohi",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "morwa/ varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "917",
        "unit": "swastik dyeing house (yash creation), natava,mirzapur",
        "state": "uttar pradesh",
        "district": "mirzapur",
        "ro": "sonbhadra",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "329",
        "unit": "prakash woolen mills ltd. chaudhar pur, amroha",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "textile",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "920",
        "unit": "dugdh utpadak sahkari sangh limited, industrial area, ramnagar, chandauli.",
        "state": "uttar pradesh",
        "district": "chandauli",
        "ro": "varanasi",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "923",
        "unit": "allied eximes, a-36, leather technology park banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "924",
        "unit": "america dying & printers, farrukhabad",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "363",
        "unit": "premier agri foods pvt.ltd. vill. andharpura, faridpur, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "195",
        "unit": "prime tanners, 13 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "196",
        "unit": "prince leather, 331/306-a, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "609",
        "unit": "prolific papers pvt ltd, aliganj road, kashipur , us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "616",
        "unit": "psb papers ltd. (unit âii), bariya road, bazpur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "197",
        "unit": "qaiyum leather, 16 c-2, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "930",
        "unit": "kisan sahkari chini mills ltd.,(distellery unit),ghosi,district-mau(u.p)",
        "state": "uttar pradesh",
        "district": "mau",
        "ro": "azamgarh",
        "sector": "distillery",
        "basin": "tamsa / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "953",
        "unit": "r.a. dyeing (formerly kiran hatkargha bunker samitte) beelna . amroha.",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "textile",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "198",
        "unit": "r.a.trade & ind., 187/180 a, laltupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "286",
        "unit": "r.b traders, 156 /149 (30b-2), gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "954",
        "unit": "h.a.g. carpet industry (hag), i/a,mirzapur\n(old name - neman carpet)",
        "state": "uttar pradesh",
        "district": "mirzapur",
        "ro": "sonbhadra",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "960",
        "unit": "amar brothers global pvt. ltd, shivrajpur manpur, g.t. road, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "199",
        "unit": "r.k. tanners, 508, 150 feet road, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "568",
        "unit": "r.k.b. towel mfg. co. ltd., (formely control textiles), hapur road dasna, distt-distt.-hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "962",
        "unit": "maria exports (previously star leather board) plot no-1298, murtja nagar, site-ii, industrial area, unno",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "963",
        "unit": "bangal leather works, a - 45, banthar, dist. unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "906",
        "unit": "rachit prints,b-9,10,11 udyogpuram, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "977",
        "unit": "racl geartech ltd. (raunak automobile ltd.), a-3, industrial area, gajraula amroha, uttar pradesh",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "others",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "964",
        "unit": "calico trends - ii, b - 12, banthar, dist. unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "965",
        "unit": "mash international pvt. ltd., plot no. a - 31, industrial area, banthar, dist. unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "966",
        "unit": "omega international (asfand akhtar), a - 39, banthar, dist. unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "511",
        "unit": "radico khaitan ltd bareilly road,rampur-244901(up)",
        "state": "uttar pradesh",
        "district": "rampur",
        "ro": "moradabad",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "200",
        "unit": "rahim tanners (sara international), 12-b (2) a, 150 ft road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "759",
        "unit": "rahman (ind.) export pvt.ltd., 16-d, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "202",
        "unit": "rahman ind.ltd. (allahdin tannery), 99/85a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "967",
        "unit": "alig tannery, a - 25, upsidc, leather technology park, banther unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "968",
        "unit": "hma leather export pvt. ltd., (upper india tannery) a-40 ltp. banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "201",
        "unit": "rahman industries ltd., 99/85, 97/83, 97/83-a jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "760",
        "unit": "rahmat sons leather finisers (o.n.atif), tannery) 103/96, 150 feet road, gajjupurwa, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "969",
        "unit": "homera tanning industries pvt. ltd., a-4, upsidc, ltp, banthar, unnao, up",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "908",
        "unit": "raj kumar textiles, a-16 udyogpuram, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "285",
        "unit": "raja leather finisers, 192/184, ramrai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "203",
        "unit": "raja tannery, 81-c, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "205",
        "unit": "rajiv leather embosing, 47/46, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "617",
        "unit": "rajlakshmi paper & boards ltd , vill.- vikrampur, bazpur, distt- u.s.nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "970",
        "unit": "al-supaer frozen foods pvt. ltd., unnao d6-d10, industrial area, site-2, unnao-209801",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "334",
        "unit": "ram niwash goyal & sons, sikheda road, modi nagar,ghaziabad.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "513",
        "unit": "rama paper mills ltd, (unit-1, 2 & 3) kiratpur, bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit delhi"
    },
    {
        "code": "514",
        "unit": "rama shyama papers ltd. faridpur, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "909",
        "unit": "rama tax process house,rithani,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "840",
        "unit": "ramsha tanners (firoj ki tannery), 160-c, gajjupurwa jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1134",
        "unit": "rana sugar ltd. (distillery unit), belwara, manpur, moradabad.",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "distillery",
        "basin": "ramganga",
        "agency": "vsi pune"
    },
    {
        "code": "515",
        "unit": "rana sugar ltd. unit karimganj shahbad distt.-rampur state-uttar pradesh",
        "state": "uttar pradesh",
        "district": "rampur",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "516",
        "unit": "rana sugars limited vill-belwara post -manpur & distt.- moradabad-244925(up)",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "284",
        "unit": "rana tannery (apollo tanners), 102-a, wajidpur jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "971",
        "unit": "standard frozen foods exports pvt. ltd., up #84, village chandpur, near upsidc industrial area, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "972",
        "unit": "mash agro foods ltd., unnao, up village bichpari, teshil hasanganj, pargana angain, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "slaughter house",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "983",
        "unit": "s. n. international, d-5, industrial estate, thandi sadak, farrukhabad, u.p.",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "717",
        "unit": "raybon foods p ltd., rampur road, hapur.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "slaughter house",
        "basin": "kali east / ganga",
        "agency": "jmi"
    },
    {
        "code": "623",
        "unit": "rbns sugar (distillary unit), laksar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "distillery",
        "basin": "banganga",
        "agency": "vsi pune"
    },
    {
        "code": "630",
        "unit": "rbns suagr ltd, laksar",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "sugar",
        "basin": "banganga",
        "agency": "vsi pune"
    },
    {
        "code": "1135",
        "unit": "regaal resources pvt. ltd., at- bhatgaon, ps- galgalia, block thakurganj, bihar",
        "state": "bihar",
        "district": "kishanganj",
        "ro": "purnea",
        "sector": "food & beverages",
        "basin": "mahananda",
        "agency": "nit patna"
    },
    {
        "code": "287",
        "unit": "reliance tanning ind. 487-488,150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "517",
        "unit": "rider tanning industries, plot no. 242, gajjupurwa jajmau, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "11",
        "unit": "riga sugar co. ltd. (distillery division), riga, dist. sitamarhi.",
        "state": "bihar",
        "district": "sitamarhi",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "12",
        "unit": "riga sugar co. ltd., riga, dist.-sitamarhi.",
        "state": "bihar",
        "district": "sitamarhi",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "burhi gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "518",
        "unit": "rizwan tanning industries, 104/90 (a), 22, sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "984",
        "unit": "aditya kumar yadav rangai karkhana, ambedkarnagar, farrukhabad, u.p.",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "641",
        "unit": "roquette riddhi siddhi glycol ltd, iie pantnagar, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "519",
        "unit": "rosa sugar works ,roza,shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "sugar",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "823",
        "unit": "roshan and comp., 345/317 (a-1), bhalla eastate jajmau",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "207",
        "unit": "roshan leather, 9/10, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "520",
        "unit": "roto mark system pvt.ltd., 123/355, fajalganj, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "1060",
        "unit": "rozagaon sugar mill, rozagaon, faizabad",
        "state": "uttar pradesh",
        "district": "faizabad",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "tamsa / ganga",
        "agency": "nsi"
    },
    {
        "code": "586",
        "unit": "rrc red rose thred pvt. ltd., p-16, 17 & 18, textile centre pilakhuwa, hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "662",
        "unit": "ruchi soya industries ltd., durgachak, haldia, purba medinipur",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "521",
        "unit": "rudra-bilas kisan sahkari chini mills ltd bilaspur-244923 (distt.-rampur",
        "state": "uttar pradesh",
        "district": "rampur",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "985",
        "unit": "n. s. india, khatakpura, siddiqui narkasha, farrukhabad, u.p.",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "209",
        "unit": "ruksh exim pvt. ltd., 50-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "986",
        "unit": "prateek arts, d3, d4, industrial estate, thandi sadak, fauurkhabad, u.p.",
        "state": "uttar pradesh",
        "district": "farrukhabad",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "990",
        "unit": "shri lakshmi cotsyn ltd., abhaypur,\n g.t.road, fatehpur",
        "state": "uttar pradesh",
        "district": "fatehpur",
        "ro": "allahabad",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "991",
        "unit": "jaypur rugs company pvt. ltd. ,gopalpur, rajapur, kantit, sadar mirzapur",
        "state": "uttar pradesh",
        "district": "mirzapur",
        "ro": "sonbhadra",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "208",
        "unit": "rustam traders, 158/151, laltupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "582",
        "unit": "s & s, p-61, textile centre pilakhuwa, hapur.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "994",
        "unit": "aditya birla chemical (india) ltd., renukoot, sonbhadra",
        "state": "uttar pradesh",
        "district": "sonbhadra",
        "ro": "sonbhadra",
        "sector": "chemical",
        "basin": "son river/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "824",
        "unit": "s.a.tanning industries, 3-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "841",
        "unit": "s.k.s. leather finishers (benefit tanning industry), 175/158 b-4, buiyaghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "210",
        "unit": "s.p. tanners, 785, tadbagia, sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "995",
        "unit": "hindalo industries ltd.,renukoot, sonbhadra",
        "state": "uttar pradesh",
        "district": "sonbhadra",
        "ro": "sonbhadra",
        "sector": "others",
        "basin": "son river/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "597",
        "unit": "s.r.tannery (tanners point), 129 a, block c, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "211",
        "unit": "s.s.tanners (ayaz tanners), 104/90-a (b), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "799",
        "unit": "sab miller india ltd.(new name anheusher bouch), kankarkheda, meerut cantt., meerut, u.p.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "212",
        "unit": "saba export (saba international), 104/90a (28-c), sanjay nagar, jajmau, kanpur, up-208010",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "996",
        "unit": "orient micro abrasive ltd., sonbhadra",
        "state": "uttar pradesh",
        "district": "sonbhadra",
        "ro": "sonbhadra",
        "sector": "others",
        "basin": "son river/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "694",
        "unit": "saba tennery, bela industrial area, bela, dist.- muzaffarpur.",
        "state": "bihar",
        "district": "muzaffarpur",
        "ro": "muzaffarpur",
        "sector": "tannery",
        "basin": "burhi gandak / ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "213",
        "unit": "sabra leather finisers, 94-e, wajdipur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "997",
        "unit": "ski carbon black india pvt. ltd formerly (hitech. carbon) renukoot, sonbhadra",
        "state": "uttar pradesh",
        "district": "sonbhadra",
        "ro": "sonbhadra",
        "sector": "others",
        "basin": "son river/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "825",
        "unit": "saddam tanners, 93/98, gajjpurwa, jajmau, kanpur-up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1000",
        "unit": "haidergarh chini mill ltd vill-pokhra, haidergarh barabanki",
        "state": "uttar pradesh",
        "district": "barabanki",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "214",
        "unit": "safique split work, 104/90 b, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "826",
        "unit": "sahara tanning ind., 104-c-1, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "216",
        "unit": "sahbuddin ki tannery (jishan trading co.), 71/60-a (4), seetala bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "603",
        "unit": "sahota papers ltd, jaspur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "827",
        "unit": "saira industries (akmal sons), 35 a 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "217",
        "unit": "sajid tanners (khalid tanners), 86-a wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "218",
        "unit": "sajid tanners, 361-1 d (30b-2), gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "219",
        "unit": "saliq leathar finisers, plot no. 53, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "842",
        "unit": "sallan enterprises (near gujrat tanners), sanjay nagar, jajmau, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "221",
        "unit": "sallan enterprises, 104/90-a, sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "220",
        "unit": "sallan enterprises, 332/308 (10-b), bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "1022",
        "unit": "aasan. ind. area sarai maluhi, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "textile",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "222",
        "unit": "samson export, 88/74(7), hindustan compound, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "525",
        "unit": "sangal papers ltd., vill-bhainsa, meerut-mawana road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "290",
        "unit": "sannu enterprises, b-13a, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "734",
        "unit": "sanny leather, b-3 330/306, bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1136",
        "unit": "sapphire papers mill private limited ,nh-31,jaganathpur ,p.o.-bidhannagar ,p.s.-phansidewa ,dist.-darjeeling,pin-734426",
        "state": "west bengal",
        "district": "darjeeling",
        "ro": "siliguri",
        "sector": "pulp & paper",
        "basin": "mahananda",
        "agency": "jadavpur"
    },
    {
        "code": "975",
        "unit": "saraswati engineering ltd. d-12, site-1 panki industrial area kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "others",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "1023",
        "unit": "dalmia chini mill(sugar), ramgarh, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "571",
        "unit": "sarfraj tanners 382/353 bagalighat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "223",
        "unit": "sariq tanners, 786, chabilepurwa, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "1024",
        "unit": "dalmia chini mills (sugar) , jawaharpur, ramkoat, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1013",
        "unit": "saryu sahkari chini mill, belrayan, kheri",
        "state": "uttar pradesh",
        "district": "lakhimpur kheri",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "692",
        "unit": "sasamusa sugar mills, sasamusa, dist.-gopalganj.",
        "state": "bihar",
        "district": "gopalganj",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1020",
        "unit": "scooter india ltd, sarojini nagar lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "225",
        "unit": "seema tanning ind. pvt. ltd., 104/90-a (16), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "802",
        "unit": "sgs prints (shilpy handfab pvt. ltd), garh road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "215",
        "unit": "shagun industries, 94-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "226",
        "unit": "shahid tannery, 53, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "947",
        "unit": "shahjahanpur paper and board pvt. ltd., vill. jamaur, jalalabad road, shahjahanpur, u.p.",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "pulp & paper",
        "basin": "garrah/ganga",
        "agency": "cppri"
    },
    {
        "code": "227",
        "unit": "shakoor tannery, 179-180, laltoo purwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "336",
        "unit": "shakun handifab, partapur, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "228",
        "unit": "shalimar leather industries, 74-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "527",
        "unit": "shams leather finisers, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "13",
        "unit": "shanta mani hand made paper industry. doia, soh-sarai, bihar sharif, dist-nalanda.",
        "state": "bihar",
        "district": "nalanda",
        "ro": "patna",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "526",
        "unit": "shaqib leather traders, 157-b, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1025",
        "unit": "dalmia chini mills, (distt) jawaharpur, ramkoat, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "978",
        "unit": "shavasti kisan sahkari chini mill ltd nanpara , bahraich",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "1026",
        "unit": "jb daruka paper, a-ind area, adbaniya, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "pulp & paper",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "961",
        "unit": "shewan tannery, jajmau road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1027",
        "unit": "madhu india deco ltd, atariya, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "textile",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1028",
        "unit": "mohd aafaq mohd ashfaq, laherpur road, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "textile",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "257",
        "unit": "shine leather finishers (welcome chemical ind.), 1-d/11, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "583",
        "unit": "shiv shankar cotton, p-70, textile centre pilakhuwa, hapur.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "584",
        "unit": "shiv shankar dyeing, p-74, textile centre pilakhuwa, hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "919",
        "unit": "shiva fastners, partapur, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1029",
        "unit": "oudh sugar mill, (distillery unit) hargaon, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1030",
        "unit": "avadh sugar and energy ltd., (formaly name - oudh sugar mill, sugar unit) hargaon, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1031",
        "unit": "singhaniya milk product pvt ltd, ramnagar,sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1032",
        "unit": "the kisan sahkari chini mills ltd.mahmudabad,sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1051",
        "unit": "shravasti kisan sahakari chini mill ltd,nanpara,baraich",
        "state": "uttar pradesh",
        "district": "bahraich",
        "ro": "faizabad",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "528",
        "unit": "shre ajudhia sugar mills raja ka sahaspur distt.-moradabad (up)",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "382",
        "unit": "shree mahaveer straw board mills pvt.ltd., power house road, mainpuri",
        "state": "uttar pradesh",
        "district": "mainpuri",
        "ro": "firozabad",
        "sector": "pulp & paper",
        "basin": "esan river / ganga",
        "agency": "cppri"
    },
    {
        "code": "684",
        "unit": "shree renuka sugars, city center, behog po, poorba medinipore, 721651",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "14",
        "unit": "shree vishnu vishal paper mills pvt. ltd., gidha, dist.-bhojpur.",
        "state": "bihar",
        "district": "bhojpur",
        "ro": "patna",
        "sector": "pulp & paper",
        "basin": "sone / ganga",
        "agency": "nit patna"
    },
    {
        "code": "803",
        "unit": "shri calendering works, partapur road pilakhua, hapur.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "hapur",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1033",
        "unit": "the seksaria biswan sugar factory, (sugar unit) biswan, sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1034",
        "unit": "the seksaria biswan sugar factory, ltd ( distillery unit)",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "364",
        "unit": "shridhar milk foods pvt ltd. ikonda road, joya, amroha.",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "1038",
        "unit": "kisan sahkari chini mill sultanpur",
        "state": "uttar pradesh",
        "district": "sultanpur",
        "ro": "raebareli",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1048",
        "unit": "suyash paper mill, ganeshpur road, basti",
        "state": "uttar pradesh",
        "district": "basti",
        "ro": "basti",
        "sector": "pulp & paper",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1076",
        "unit": "shyam dairy products, allahabad.",
        "state": "uttar pradesh",
        "district": "allahabad",
        "ro": "allahabad",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1068",
        "unit": "bajaj hindusthan ltd., (sugar unit), pratappur, district- deoria",
        "state": "uttar pradesh",
        "district": "deoria",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "600",
        "unit": "siddharth papers ltd.(unit-1), moradabad road, kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "601",
        "unit": "siddharth papers ltd.(unit-2), moradabad road, kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "602",
        "unit": "sidheshwari paper udhyog ltd, moradabad road, kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "532",
        "unit": "simbhaoli sugar mills ltd (distillery unit), simbhaoli, ghaziabad.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "579",
        "unit": "simbhaoli sugar mills ltd. (brijnathpur distillery unit), vill-brijnathpur, ghaziabad.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "533",
        "unit": "simbhaoli sugar mills ltd.(sugar division), simbhaoli, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1069",
        "unit": "deoria paper mills ltd., hata road, narayanpur, deoria",
        "state": "uttar pradesh",
        "district": "deoria",
        "ro": "gorakhpur",
        "sector": "pulp & paper",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1070",
        "unit": "ambey processors, fl-2, sector-13, gida, gorakhpur",
        "state": "uttar pradesh",
        "district": "gorakhpur",
        "ro": "gorakhpur",
        "sector": "textile",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "534",
        "unit": "small arms, kalpi raod, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "others",
        "basin": "pandu/ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "693",
        "unit": "smirity paper mills pvt. ltd., mahuli road, chitauna, kothia, patna city, dist.- patna",
        "state": "bihar",
        "district": "patna",
        "ro": "patna",
        "sector": "pulp & paper",
        "basin": "punpun river/ganga",
        "agency": "nit patna"
    },
    {
        "code": "830",
        "unit": "society leather, 85-a, wazidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "231",
        "unit": "sofia international, 87-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "232",
        "unit": "soiab leather, 322/308-a, bhalla estate jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "800",
        "unit": "solitare foods pvt. ltd.(achintya healthcare pvt ltd), gangol road, khasra no. 376, gangol road behind shopia school, partapur, meerut, u.p.",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "neeri"
    },
    {
        "code": "15",
        "unit": "sonasati organics pvt. ltd., rajapatti kothi, dist.-gopalganj.",
        "state": "bihar",
        "district": "gopalganj",
        "ro": "muzaffarpur",
        "sector": "distillery",
        "basin": "gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "383",
        "unit": "sri badri kedar pvt. ltd. najibabad , bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1137",
        "unit": "sri siddhi vinayak paper mills private limited ,bhaktipara ,p.o.-bhaktipara ,p.s.-rajganj , dist.-jalpaiguri,pin-735133",
        "state": "west bengal",
        "district": "jalpaiguri",
        "ro": "siliguri",
        "sector": "pulp & paper",
        "basin": "mahananda",
        "agency": "jadavpur"
    },
    {
        "code": "1071",
        "unit": "bathwal udyog pvt.ltd., fl-3, sector-13, gida, gorakhpur",
        "state": "uttar pradesh",
        "district": "gorakhpur",
        "ro": "gorakhpur",
        "sector": "textile",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1072",
        "unit": "india glycols ltd.,e-1, sector-15, gida, gorakhpur",
        "state": "uttar pradesh",
        "district": "gorakhpur",
        "ro": "gorakhpur",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "761",
        "unit": "standard tannery (khalwa tannery), 190/173, dargh sarif road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "384",
        "unit": "star kraft papers pvt ltd(formely known as devstar paper pvt ltd. panchali,bagpat road,meerut)",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "535",
        "unit": "star tannery, 19, ramrai sarai jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "233",
        "unit": "star tanning industries, 19-b, laltupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "1138",
        "unit": "star zippers,a-8,industrial area partapur,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1067",
        "unit": "starlight bruchem ltd (narang distillery ltd) nawabganj gonda",
        "state": "uttar pradesh",
        "district": "gonda",
        "ro": "faizabad",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "358",
        "unit": "sterling agro industries ltd. kasganj.",
        "state": "uttar pradesh",
        "district": "kasganj",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "531",
        "unit": "subhan tanners 43/36 a shitla bazar jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1139",
        "unit": "sukhjit starch industries. ,narayanpur ,p.o.-narayanpur ,p.s.-malda,dist.-malda,pin-732141",
        "state": "west bengal",
        "district": "malda",
        "ro": "malda",
        "sector": "food & beverages",
        "basin": "mahananda",
        "agency": "jadavpur"
    },
    {
        "code": "235",
        "unit": "suleman tanning ind., 90/76 b(k) idgah road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "1073",
        "unit": "saraya distillery, sardarnagar, gorakhpur",
        "state": "uttar pradesh",
        "district": "gorakhpur",
        "ro": "gorakhpur",
        "sector": "distillery",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1074",
        "unit": "v.n. dyers & processors pvt. ltd., bargadawa, gorakhpur",
        "state": "uttar pradesh",
        "district": "gorakhpur",
        "ro": "gorakhpur",
        "sector": "textile",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "536",
        "unit": "sultan tanners 230, jajmau road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1075",
        "unit": "new gayatri textile, d-18, rooma industrial area, kanpur-208001 (u.p.)",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "234",
        "unit": "sunil enterprises, 330/306 b(8), bhalla estate, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "237",
        "unit": "sunrise leather finisers, 66, ind. area, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "537",
        "unit": "sunrise tannery, plot no.72, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "87",
        "unit": "sunshine industries (f.r.leather), 69-a,150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "238",
        "unit": "sunshine tanning industries, 482-83, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "916",
        "unit": "super dyeing & printing works, nh-24, delhi-hapur road, pilkhuwa, hapur.",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1078",
        "unit": "rayana paper board ind. ltd. unit-2 khalilabad, distt-santkabirnagar",
        "state": "uttar pradesh",
        "district": "sant kabir nagar",
        "ro": "basti",
        "sector": "pulp & paper",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1079",
        "unit": "rayana paper board ind. ltd. unit-1 khalilabad, dist-santkabirnagar",
        "state": "uttar pradesh",
        "district": "sant kabir nagar",
        "ro": "basti",
        "sector": "pulp & paper",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1080",
        "unit": "yash paper mill ltd unit-i&ii, faizabad",
        "state": "uttar pradesh",
        "district": "faizabad",
        "ro": "faizabad",
        "sector": "pulp & paper",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "538",
        "unit": "super leather finisers 406/k-409 sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "242",
        "unit": "super style tanners pvt. ltd., 79, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "164",
        "unit": "super tannery (mona tanning industries) unit-ii, mona nagar, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1081",
        "unit": "new india sugar mills, dhadha bujurag, hata, district- kushinagar",
        "state": "uttar pradesh",
        "district": "kushinagar",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "539",
        "unit": "super tannery ltd., 187/170, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "735",
        "unit": "super trade 12/9, banwarilal ka bagicha, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "541",
        "unit": "superior industries ltd.(distellery division), c.b. ganj, bareilly",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "nsi"
    },
    {
        "code": "685",
        "unit": "supreme paper mills ltd. vill : rainanagar, po chakdah dist - nadia",
        "state": "west bengal",
        "district": "nadia",
        "ro": "kankinara",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "542",
        "unit": "supreme tanning ind., 104/90 (a-7), 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "856",
        "unit": "surya udyog, khurja road, bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "588",
        "unit": "sushil tech pvt. ltd., p-126, 125, p-16, 17 & 18, textile centre pilakhuwa, hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1082",
        "unit": "the kanoria sugar & general manufacturing, company ltd., captainganj district- kushinagar",
        "state": "uttar pradesh",
        "district": "kushinagar",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "243",
        "unit": "swan tanning industries, 199, 205, 207, gajjupurwa, asharfabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "1021",
        "unit": "swarup chemicals (p) ltd, uttardhona, tiwariganj, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "pesticide",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "1083",
        "unit": "triveni engineering & industries ltd., unit-ramkola, district-kushinagar",
        "state": "uttar pradesh",
        "district": "kushinagar",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "762",
        "unit": "taiyaba international 1 d 14-a-1, gajupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "772",
        "unit": "taj traders, 104/90 a (16)a, sanjay nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "831",
        "unit": "tajamul ki tannery, 173/157 c, bhdhia ghat, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1084",
        "unit": "united provinces sugar company ltd., seorahi, district- kushinagar",
        "state": "uttar pradesh",
        "district": "kushinagar",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "narayani/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "246",
        "unit": "tanners co, 91-a, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "245",
        "unit": "tanners india, 38-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "956",
        "unit": "tanners point, 129-a, block-c, ahmad nagar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "372",
        "unit": "tanya marketing pvt. ltd. alipur jijmana hapur road, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "slaughter house",
        "basin": "kali east / ganga",
        "agency": "jmi"
    },
    {
        "code": "244",
        "unit": "tasmiya leather pvt.ltd. (talat leather), 29 a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "385",
        "unit": "tata chemicals ltd. babrala, dist- sambhal",
        "state": "uttar pradesh",
        "district": "sambhal",
        "ro": "moradabad",
        "sector": "fertilizer",
        "basin": "ganga",
        "agency": "amu"
    },
    {
        "code": "673",
        "unit": "tata chemicals ltd., durgachak, haldia, purba medinipur",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "fertilizer",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "637",
        "unit": "tata motors ltd, iii pantnagar, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "others",
        "basin": "ramganga / ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1077",
        "unit": "tata motors ltd., ind area chinhat, lucknow",
        "state": "uttar pradesh",
        "district": "lucknow",
        "ro": "lucknow",
        "sector": "others",
        "basin": "gomti / ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "247",
        "unit": "tej industries, 35-a, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "543",
        "unit": "teva api india ltd, a- 2/1, a-2/2, upsidc industrial area, bijnor road, gajraula â 244235 dist.- j.p.nagar, uttar pradesh.",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "pharmaceutical",
        "basin": "ganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1085",
        "unit": "indian potash ltd., unit- siswa bazar, district- mahrajganj",
        "state": "uttar pradesh",
        "district": "maharajganj",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "386",
        "unit": "the kisan sahkari chini mills ltd., sneh road, najibabad, distt. bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1086",
        "unit": "j.h.v. sugar ltd., gadaura, nichlaul, district- mahrajganj",
        "state": "uttar pradesh",
        "district": "maharajganj",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "387",
        "unit": "the kisan sahkari chini mills, vill. shekhupur, distt. badaun.",
        "state": "uttar pradesh",
        "district": "badaun",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1087",
        "unit": "baba paper & board mills, i/a, ramnagar chandauli",
        "state": "uttar pradesh",
        "district": "chandauli",
        "ro": "varanasi",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1089",
        "unit": "art palace exports pvt. ltd. industrial area, sidhwan, jaunpur",
        "state": "uttar pradesh",
        "district": "jaunpur",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1090",
        "unit": "bokhara industries pvt. ltd. industrial area, sidhwan, jaunpur",
        "state": "uttar pradesh",
        "district": "jaunpur",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "545",
        "unit": "tikaula distillary, tikaula, muzaffarnagar",
        "state": "uttar pradesh",
        "district": "muzaffarnagar",
        "ro": "muzzafarnagar",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "546",
        "unit": "tikaula sugar mills ltd., tikaula, muzaffarnagar",
        "state": "uttar pradesh",
        "district": "muzaffarnagar",
        "ro": "muzzafarnagar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "585",
        "unit": "tirupati handloom, p-67 & 68, textile centre pilakhuwa, hapur",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "17",
        "unit": "tirupati sugar mills, bagha, dist.- west champaran.",
        "state": "bihar",
        "district": "west champaran",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "248",
        "unit": "top tanners,406/377-a, gajjupurwa, asarfabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "829",
        "unit": "trade house (shaukat ki tannery), 8/5 b-1, jajmau, kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "29",
        "unit": "trihut dugdh utapadak sangh ltd. muz. dairy, kolhua paigambarpur, muz.-843108",
        "state": "bihar",
        "district": "muzaffarpur",
        "ro": "muzaffarpur",
        "sector": "food & beverages",
        "basin": "burhi gandak / ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "547",
        "unit": "triveni engineering & industries ltd sugar unit rani nangal p.o. aliabad pipli distt.-moradabad(up)",
        "state": "uttar pradesh",
        "district": "moradabad",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "548",
        "unit": "triveni engineering & industries ltd sugar unit-milaknarayanpur,post-dadiyal distt.-rampur(up)",
        "state": "uttar pradesh",
        "district": "rampur",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "549",
        "unit": "triveni engineering & industries ltd. (sugar unit) vill. sabitgarh, khurja, distt: bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "nsi"
    },
    {
        "code": "388",
        "unit": "triveni engineering & industries ltd. chandanpur, hasanpur, distt. amroha",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "nsi"
    },
    {
        "code": "1091",
        "unit": "kas carpet,yarn dyers, industrial area, sidhwan, jaunpur",
        "state": "uttar pradesh",
        "district": "jaunpur",
        "ro": "varanasi",
        "sector": "textile",
        "basin": "varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "550",
        "unit": "triveni engineering industries ltd, khatauli, muzaffarnagar",
        "state": "uttar pradesh",
        "district": "muzaffarnagar",
        "ro": "muzzafarnagar",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "249",
        "unit": "triveni tanners, 325/302, jajmau road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1043",
        "unit": "tulsipur sugar co. ltd balrampur",
        "state": "uttar pradesh",
        "district": "balrampur",
        "ro": "basti",
        "sector": "sugar",
        "basin": "rapti/ ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "341",
        "unit": "u.p. dying & printing works, 68 navchandi ground, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1092",
        "unit": "nrvs, (new name varuna beverages (p) ltd.) sida, satahariya, jaunpur",
        "state": "uttar pradesh",
        "district": "jaunpur",
        "ro": "varanasi",
        "sector": "food & beverages",
        "basin": "basuhi/varuna/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "551",
        "unit": "umang dairies ltd. 3 km. hasanpur road gajraula, j.p.nagar",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "jmi"
    },
    {
        "code": "361",
        "unit": "unilever india export ltd. (instant tea unit), kasgair road, etah",
        "state": "uttar pradesh",
        "district": "etah",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "251",
        "unit": "unique international, 980-d, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "674",
        "unit": "unitech paper mills pvt. ltd. balichak, ps.debra, chakshyampur, dist. midnapur",
        "state": "west bengal",
        "district": "paschim medinipur",
        "ro": "haldia",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "686",
        "unit": "united brewaries limited, kalyani unit plot no - 18, block - d, vittal mallya road, kalyani, dist - nadia, pin - 741235",
        "state": "west bengal",
        "district": "nadia",
        "ro": "kankinara",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "687",
        "unit": "united phosphorus ltd,durga chak po, haldia, 721602,purba medinipur",
        "state": "west bengal",
        "district": "purba medinipur",
        "ro": "haldia",
        "sector": "pesticide",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "1093",
        "unit": "parle agro ltd., karkhiyaon, agropark,varanasi",
        "state": "uttar pradesh",
        "district": "varanasi",
        "ro": "varanasi",
        "sector": "food & beverages",
        "basin": "naad river/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "252",
        "unit": "united provinces tannery co. ltd., asarfabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "552",
        "unit": "united spirits ltd. unit, roja shajhanpur",
        "state": "uttar pradesh",
        "district": "shahjanpur",
        "ro": "bareilly",
        "sector": "distillery",
        "basin": "garrah/ganga",
        "agency": "nsi"
    },
    {
        "code": "553",
        "unit": "united sprits ltd., distillery unit, meerut cantt, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "675",
        "unit": "universal paper mills ltd., ( uniglobal paper mill pvt. ltd. ) , po. jhargram, paschim medinipur, pin - 721 507",
        "state": "west bengal",
        "district": "paschim medinipur",
        "ro": "haldia",
        "sector": "pulp & paper",
        "basin": "ganga",
        "agency": "iit kharagpur"
    },
    {
        "code": "253",
        "unit": "universal tanning industries, 407/377-a, ashrafabad, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1109",
        "unit": "grasim industries ltd., chemical division & cpp., at.-rehla, dist.-palamu.",
        "state": "jharkhand",
        "district": "palamu",
        "ro": "ranchi",
        "sector": "chemical",
        "basin": "north koel / sone / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1115",
        "unit": "ratan hosary, c-37, upsidc, rooma industrial area, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "937",
        "unit": "up co operative sugar factory federation ltd., (distillery) anoopshahr, distt: bulandshahr.",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1049",
        "unit": "up state sugar corpn ltd munderwa, basti",
        "state": "uttar pradesh",
        "district": "basti",
        "ro": "basti",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "nsi"
    },
    {
        "code": "555",
        "unit": "up. state sugar corporation ltd,mohiuddinpur, meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "389",
        "unit": "upper ganges sugar & industries ltd., (distillery unit), seohara, distt.- bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "390",
        "unit": "upper ganges sugar industries ltd., sugar unit, seohara, distt. bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ramganga / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "556",
        "unit": "upper india pvt.ltd., 38/32, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1120",
        "unit": "indian potash ltd., unit-khadda, district- kushinagar",
        "state": "uttar pradesh",
        "district": "kushinagar",
        "ro": "gorakhpur",
        "sector": "sugar",
        "basin": "narayani/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "391",
        "unit": "uttam sugar mills ltd ,(distillery unit), vill. barkatpur, najibabad, distt.-bijnor",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "distillery",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "557",
        "unit": "uttam sugar mills ltd., unit - barkatpur, tehsil - najibabad, dist. bijnor (u.p.)",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1121",
        "unit": "a.s,leather ( old name - kidco leather finishers pvt ltd plot no h-11, h-12 site -2 unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1122",
        "unit": "agro food industries, s.-11, site-2, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "921",
        "unit": "v.r,s. foods ltd, (unit-3), old bus stand, gulaoti, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "804",
        "unit": "v.r.s food ltd., plot no. c-5-6, upsidc industrial area, sandila, hardoi, u.p.",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "pcri-bhel"
    },
    {
        "code": "806",
        "unit": "v.r.s. foods ltd, (unit-4), old bus stand, gulaoti, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "kali east / ganga",
        "agency": "amu"
    },
    {
        "code": "1123",
        "unit": "baghauli sugar & distillery ltd, (distilery unit), vill-beekapur, post- baghauli, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "distillery",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "946",
        "unit": "vadilal industry ltd., d-24, paraskheda, bareilly, u.p.",
        "state": "uttar pradesh",
        "district": "bareilly",
        "ro": "bareilly",
        "sector": "food & beverages",
        "basin": "ramganga / ganga",
        "agency": "amu"
    },
    {
        "code": "3",
        "unit": "vaishal patliputra dugdh utpadak sahkari sangh ltd. patna dairy project phulwari sharif, patna",
        "state": "bihar",
        "district": "patna",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "punpun river/ganga",
        "agency": "nit patna"
    },
    {
        "code": "1124",
        "unit": "baghauli sugar & distillery ltd, (sugar unit), vill-beekapur, post- baghauli, hardoi",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1128",
        "unit": "jeet dying( unit -1), 581, magarvara, unnao",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "558",
        "unit": "ved cellulose ltd., 16 km. stone, hapur road, vill-lakhan, po-galand, district-ghaziabad.",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "pulp & paper",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "254",
        "unit": "venus industries, 188/171, jajmau road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "581",
        "unit": "venus sugar limited, shivshakti nagar, tehsil chandousi, dist sambal",
        "state": "uttar pradesh",
        "district": "sambhal",
        "ro": "moradabad",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "255",
        "unit": "vertex leather, plot no. 13, 88/74, hindustan compound, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1131",
        "unit": "omega international (unit-3), g-7 to 10, site-2, industrial area,",
        "state": "uttar pradesh",
        "district": "unnao",
        "ro": "unnao",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1103",
        "unit": "vikramshila dugdh utpadak sahakari sangh ltd., mayaganj, hospital road, bhagalpur-812001",
        "state": "bihar",
        "district": "bhagalpur",
        "ro": "barauni",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "16",
        "unit": "vishnu sugar mills, dist.-gopalganj.",
        "state": "bihar",
        "district": "gopalganj",
        "ro": "muzaffarpur",
        "sector": "sugar",
        "basin": "gandak / ganga",
        "agency": "nsi"
    },
    {
        "code": "611",
        "unit": "vishwakarma paper & board ltd, ramnagar road, kashipur (usnagar)",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "1107",
        "unit": "vishwakarma paper & board ltd. (unit-2), ramnagar road, kashipur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "605",
        "unit": "vishwanath paper & boards ltd. haldua sahu, jaspur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga / ganga",
        "agency": "cppri"
    },
    {
        "code": "31",
        "unit": "vpduss ltd. unit-milk chilling centre, industrial area, hajipur, vaishali",
        "state": "bihar",
        "district": "vaishali",
        "ro": "patna",
        "sector": "food & beverages",
        "basin": "ganga",
        "agency": "mit muzaffarpur"
    },
    {
        "code": "256",
        "unit": "wahid tanners, 153-b, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "559",
        "unit": "wasif tannery, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "560",
        "unit": "wave distilleries & brevaries ltd.,vill- ahmedpura , ramghat road, tehsil- atrauli, distt. - aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "392",
        "unit": "wave distillery & brewaries ltd. (brewaries unit), vill.-ahmadpura, ramghat road, tehsil-atrauli, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "distillery",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "561",
        "unit": "wave industries ltd., (sugar unit). panni nagar, bulandshahr.",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "kali east / ganga",
        "agency": "vsi pune"
    },
    {
        "code": "562",
        "unit": "wave industries pvt. ltd, vill-malaysia po-mandi dhanaura, distt-j.p.nagar",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "nsi"
    },
    {
        "code": "293",
        "unit": "wave industries pvt. ltd. unit-bijnor.",
        "state": "uttar pradesh",
        "district": "bijnor",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "843",
        "unit": "western tannery, 87-a, block-1, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "704",
        "unit": "wonder crafts, e-part, large industrial estate, barari, bhagalpur",
        "state": "bihar",
        "district": "bhagalpur",
        "ro": "barauni",
        "sector": "textile",
        "basin": "ganga",
        "agency": "nit patna"
    },
    {
        "code": "393",
        "unit": "yadu sugar mills ltd. vill. vill. sujanpur, bisouli, distt. badaun",
        "state": "uttar pradesh",
        "district": "badaun",
        "ro": "bulandshahar",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "259",
        "unit": "yaqub tanners, 112-f, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "776",
        "unit": "yaseen tanners, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1140",
        "unit": "varun beverages limitd. b-2/1, industrial area, sandila",
        "state": "uttar pradesh",
        "district": "hardoi",
        "ro": "unnao",
        "sector": "food & beverages",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "260",
        "unit": "yusuf enternational, 184-a (6), wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "261",
        "unit": "z.a. leather (star i.a.enterprises), 42/41-a, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "832",
        "unit": "z.r. leather finishersm, 263-b, wajidpur, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "1100",
        "unit": "zakariya agro pvt. ltd., gopipothiya, nh-57, simraha,forbesganj, araria",
        "state": "bihar",
        "district": "araria",
        "ro": "purnea",
        "sector": "slaughter house",
        "basin": "parmar / mahananda",
        "agency": "nit patna"
    },
    {
        "code": "262",
        "unit": "zaz impex, 208/800, gajjupurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "763",
        "unit": "zaz sons export pvt. ltd., 4-b, shitla bazar, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "563",
        "unit": "zaz tannery, 150 feet road, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "263",
        "unit": "zeba tanners, 180/3, laltupurwa, jajmau, kanpur, up-208010",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "833",
        "unit": "zeenat tanners, 183-a (1), ramrai sarai, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "807",
        "unit": "zeeshan enterprises (ahmad bilal ki tannery), 175/168, laltoopurwa, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "834",
        "unit": "zinat tanners 128 /88 ramraisarai jajmau kanpur up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "csir-iitr"
    },
    {
        "code": "229",
        "unit": "zuric international (shivli tannery), 377 (d) a, sir iqbal street, jajmau, kanpur, up",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "hbtu"
    },
    {
        "code": "1141",
        "unit": "basti sugar mills co. ltd., ambedkar nagar",
        "state": "uttar pradesh",
        "district": "ambedkar nagar",
        "ro": "faizabad",
        "sector": "sugar",
        "basin": "tamsa / ganga",
        "agency": "nsi"
    },
    {
        "code": "1142",
        "unit": "wave industries pvt. ltd, (formely name u.p. state sugar corporation ltd.), amroha distt. amroha",
        "state": "uttar pradesh",
        "district": "amroha",
        "ro": "bijnor",
        "sector": "sugar",
        "basin": "ganga",
        "agency": "vsi pune"
    },
    {
        "code": "1143",
        "unit": "kisan sahkari chini mills ltd. rasara, ballia.",
        "state": "uttar pradesh",
        "district": "ballia",
        "ro": "azamgarh",
        "sector": "sugar",
        "basin": "ghaghra / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1144",
        "unit": "u.p. state spining company ltd, barabanki",
        "state": "uttar pradesh",
        "district": "barabanki",
        "ro": "lucknow",
        "sector": "textile",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1145",
        "unit": "raj rajeshwari techno fab, gudhrauli, aung, fatehpur",
        "state": "uttar pradesh",
        "district": "fatehpur",
        "ro": "allahabad",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1146",
        "unit": "g.s dass apparels, p 41,42,43, textile centre, pilakhuwa",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1147",
        "unit": "n.g. textiles, unit 2, w-67, 68, textile centre, pilakhuwa",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1148",
        "unit": "vivo garments, p89, textile centre, pilakhuwa",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1149",
        "unit": "gauri dyers, p-35, textile centre, pilakhwa",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1150",
        "unit": "riya processors, textile centre pilakhuwa",
        "state": "uttar pradesh",
        "district": "hapur",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1151",
        "unit": "electorsteel steel ltd., chandankari, bokaro",
        "state": "jharkhand",
        "district": "bokaro",
        "ro": "dhanbad",
        "sector": "others",
        "basin": "damodar / ganga",
        "agency": "nit patna"
    },
    {
        "code": "1152",
        "unit": "don tanning ind.(abida tanning ind.)76 a , \nidgah road , jajmau",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "clri"
    },
    {
        "code": "1153",
        "unit": "iqbal tannery (afaque export, 345/317, jajmau, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1154",
        "unit": "karamat tanning industries (old name allies leather export), 783a, sanjay nagar, wajidpur, jajmau, kanpur",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1155",
        "unit": "mac international, 4 a, ramrai sarai, rasoolabad road jajmau road jajmau",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur nagar",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1156",
        "unit": "sagun ind. , 94 a , wajidpur , jajmau",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "tannery",
        "basin": "ganga",
        "agency": "mnnit"
    },
    {
        "code": "1157",
        "unit": "shakti dyeing & bleaching works, 16 a, dada nagar, kanpur, u.p.",
        "state": "uttar pradesh",
        "district": "kanpur",
        "ro": "kanpur",
        "sector": "textile",
        "basin": "pandu/ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1158",
        "unit": "mk textile rithani,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1159",
        "unit": "shri adinath texfeb, village kunda , delhi road,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "kali east / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1160",
        "unit": "mesad carpets, bhiskuri, mirzapur",
        "state": "uttar pradesh",
        "district": "mirzapur",
        "ro": "sonbhadra",
        "sector": "textile",
        "basin": "ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1161",
        "unit": "iti ltd, sultanpur road, raibareli.",
        "state": "uttar pradesh",
        "district": "raebareli",
        "ro": "raebareli",
        "sector": "slaughter house",
        "basin": "gomti / ganga",
        "agency": "amu"
    },
    {
        "code": "1162",
        "unit": "shri bhawani paper mills ltd.raebareli",
        "state": "uttar pradesh",
        "district": "raebareli",
        "ro": "raebareli",
        "sector": "pulp & paper",
        "basin": "gomti / ganga",
        "agency": "iit delhi"
    },
    {
        "code": "1163",
        "unit": "kamlapur chini mill, kamlapur sitapur",
        "state": "uttar pradesh",
        "district": "sitapur",
        "ro": "lucknow",
        "sector": "sugar",
        "basin": "gomti / ganga",
        "agency": "iit bhu"
    },
    {
        "code": "1164",
        "unit": "nainital dudgh utpadak sahkari sagh ltd, nainital",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "food & beverages",
        "basin": "ramganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1165",
        "unit": "patanjali ayurved ltd, unit no-03, patanjali food park, pathartha,haridwar-laksar road,haridwar.",
        "state": "uttarakhand",
        "district": "haridwar",
        "ro": "roorkee",
        "sector": "food & beverages",
        "basin": "banganga",
        "agency": "iit roorkee"
    },
    {
        "code": "1166",
        "unit": "shakubari paper mill, bajpur, us nagar",
        "state": "uttarakhand",
        "district": "us nagar",
        "ro": "kashipur",
        "sector": "pulp & paper",
        "basin": "ramganga",
        "agency": "cppri"
    },
    {
        "code": "y-390",
        "unit": "a.m.s. agro international pvt. ltd., kairna shamli",
        "state": "uttar pradesh",
        "district": "shamli",
        "ro": "muzaffarnagar",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-391",
        "unit": "a.n.leather pvt. ltd.(eterma; leather) churmura, farah, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-392",
        "unit": "agarwal knitting works, 138, nunihai agra",
        "state": "uttar pradesh",
        "district": "agra",
        "ro": "agra",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-393",
        "unit": "agmotex fabrics ltd., plot no-2297, visayakpur, rania, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-394",
        "unit": "al ammar food export pvt. ltd. amarpur kodla, tehshil- koil mathura bye pass, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-395",
        "unit": "al- halal international pvt. ltd. amarpur kodla, tehshil- koil, mathura bye pass, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-396",
        "unit": "al marzia agro food, bhagwantpura, jhansi",
        "state": "uttar pradesh",
        "district": "jhansi",
        "ro": "jhansi",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-397",
        "unit": "al-dua food processing pvt.ltd. amarpur, kodla, teshil-koil, mathura bypass road, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-398",
        "unit": "alfa milk food pvt. ltd. a-1 to 7 upsidc industrial area, salempur- hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-399",
        "unit": "al-hamd agro foods products pvt. ltd. udala-liyaspur, sarsol, g.t. road, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-400",
        "unit": "al-hamd frozen foods mundakhera road, khurja, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-401",
        "unit": "al-hamd frozen foods p. ltd. (slaughter house), mundakhera road, khurja, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-402",
        "unit": "al-hasan agro foods pvt.ltd amarpur, kodla, teshil-koal, mathura bypass road, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-403",
        "unit": "alp milk food products pvt. ltd., dakhinara, etah road, sikohabad, firozabad",
        "state": "uttar pradesh",
        "district": "firozabad",
        "ro": "firozabad",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-404",
        "unit": "al-tabarak frozen foods pvt.ltd (slaughter house) mullapara, mathura bye pass road, teshil kol, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-405",
        "unit": "amitech industries khanchandpur rania, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-406",
        "unit": "amtul products p. ltd. d-32, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-407",
        "unit": "anandeshwar industries p. ltd., arazi no- 657, sidhamau, navipur gajner road, jainpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-408",
        "unit": "anuj carpet, village-kakrawali, mathura road, mursan, district-hathras.",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-409",
        "unit": "apl apollo tubes ltd. a-19, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-410",
        "unit": "apl metlex ltd. a-25, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-411",
        "unit": "bahubali traders, sardhana,meerut",
        "state": "uttar pradesh",
        "district": "meerut",
        "ro": "meerut",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-412",
        "unit": "balaji textiles printers, e-70, ind. area, site a, mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-413",
        "unit": "bansal overseas, village-dayanatpur, aligarh road, hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-414",
        "unit": "batra & batra p. ltd. a-81, ind. area, sikandrabad, distt. bulandshahar",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-415",
        "unit": "bhole baba milk food ind ltd dautana, chhata, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-416",
        "unit": "bholey baba milk food industry ltd., khair road, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-417",
        "unit": "blueduck textile pvt. ltd., 3/1, ind. area, sikandrabad, distt. bulandshahar",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-418",
        "unit": "brindavan agro industries pvt. ltd., shergarh road, chhata, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-419",
        "unit": "calpro sepecelitis pvt. ltd. (mahan protein ltd.) barhana, nand gaon road, kosi, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-420",
        "unit": "cellcom tele services p. ltd. a-52, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-421",
        "unit": "chandok textiles enterprises p. ltd, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-422",
        "unit": "continental home furnishing, dundahera, khekra, bagpat",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-423",
        "unit": "cosmo industries, c-44, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-424",
        "unit": "creamy foods ltd. g.t. road, khurja, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-425",
        "unit": "dalip enterprises, d-87, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-426",
        "unit": "dayaljee board ind pvt.ltd.,. a-35,37 ind. estate, firozabad",
        "state": "uttar pradesh",
        "district": "firozabad",
        "ro": "firozabad",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-427",
        "unit": "ekta dairy pvt.ltd, c/9-14,upsidc,malwan, fatehpur",
        "state": "uttar pradesh",
        "district": "fatehpur",
        "ro": "allahabad",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-428",
        "unit": "frigerio conserva allana ltd., (slaughter house) talaspur khurd, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-429",
        "unit": "frigrifigo allana pvt. ltd owned by modern slaughter house nagar nigam chhalesar, kuberpur, agra",
        "state": "uttar pradesh",
        "district": "agra",
        "ro": "agra",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-430",
        "unit": "ganesha ecosphere ltd. (old name-ganesh polytex ltd), raipur,rania, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-431",
        "unit": "geetanjaji enterprises, f-23, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-432",
        "unit": "ginni filaments ltd. unit-2, nh-2, chhata, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-433",
        "unit": "goga foods ltd, khekra,bagpat",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-434",
        "unit": "goodluck industries, a-51, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-435",
        "unit": "goodluck industries, a-59, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-436",
        "unit": "goodluck steel tubes ltd.a-42, 45, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-437",
        "unit": "h.m.a. agro industries ltd., talaspur khurd, aliearh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-438",
        "unit": "haldiram snacks (p)ltd., a-11, sector-68, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-439",
        "unit": "haldiram snacks (p)ltd., c-3, sector-67, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-440",
        "unit": "haldiram snacks (p)ltd., a-2-4, sector-65, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-441",
        "unit": "haldiram snacks (p)ltd., b-1, sector-63, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-442",
        "unit": "hardayal milk product pvt.ltd., etah road, sikohabad, firozabad",
        "state": "uttar pradesh",
        "district": "firozabad",
        "ro": "firozabad",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-443",
        "unit": "hides international ltd. (old name- k.c.k. exports ltd.), 461, fatehpur roshnai, rania, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-444",
        "unit": "hindustan unilever ltd. orai, jalaun",
        "state": "uttar pradesh",
        "district": "jalaun",
        "ro": "jhansi",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-445",
        "unit": "hitech pipes ltd. plot no. 10, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-446",
        "unit": "hma food exports pvt. ltd. (slaughter house) plot no. 293-295 and 297, kuberpur, etmadpur, agra",
        "state": "uttar pradesh",
        "district": "agra",
        "ro": "agra",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-447",
        "unit": "indian potash ltd, (dairy division), ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-448",
        "unit": "ioc ltd mathura refinery mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "oil & refinery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-449",
        "unit": "j.p.c., b-4, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-450",
        "unit": "jain cord pvt ltd,dautana ,chhata,mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-451",
        "unit": "jama corporation p. ltd., khalilpur, jainpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-452",
        "unit": "jama corporation p. ltd., unit-2 jainpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-453",
        "unit": "jila panchayat, pashubadhshala, gangoh, saharanpur",
        "state": "uttar pradesh",
        "district": "saharanpur",
        "ro": "saharanpur",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-454",
        "unit": "karika india pvt. ltd b-126, sector-5, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-455",
        "unit": "kisan co-oprative sugar mills ltd. sarsawa, saharanpur",
        "state": "uttar pradesh",
        "district": "saharanpur",
        "ro": "saharanpur",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-456",
        "unit": "kothari fermentation & biochem ltd. ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-457",
        "unit": "krishna carpet, b-3, 4, 5, industrial estate, district-hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-458",
        "unit": "kundanlal industries, b-17, 18, industrial estate, hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-459",
        "unit": "laljee board industries (p) ltd. a-34, ind. estate, firozabad",
        "state": "uttar pradesh",
        "district": "firozabad",
        "ro": "firozabad",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-460",
        "unit": "lawangana textiles, khanchandpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-461",
        "unit": "laxmi traders, c-9, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-462",
        "unit": "leham export india pvt.ltd. khurja bulandshahar",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-463",
        "unit": "ads distillery ltd, (old name jagatjeet industries) ltd. ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-464",
        "unit": "garg textiles, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-465",
        "unit": "ghanshyam print, unit-2, (rishi print+pardeshi print), e-75, 76, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-466",
        "unit": "ghanshyam print/gaur print/(ghanshyam das kapdewala, unit-1), e-84, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-467",
        "unit": "gopi kishan saari house, c-62, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-468",
        "unit": "harish print (ghanshyam print), e-77-79, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-469",
        "unit": "harsh textile (old name- anil cloths store), c-64, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-470",
        "unit": "prerna thread g-274, sec-d-1 p-3, apparel park industrial area, tronica city, loni, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-471",
        "unit": "makhan chor prints, c-10, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-472",
        "unit": "mathura trading company, e-68, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-473",
        "unit": "mini products (m/s krishna prints), c-36, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-474",
        "unit": "national process/national screen, e-83, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-475",
        "unit": "national textile, c-37, industrial area, site-a,",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-476",
        "unit": "radhika prints, c-51, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-477",
        "unit": "raj shree saari centre, (old name- madanmohan goyal), c-35, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-478",
        "unit": "ramesh chandra, c-48, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-479",
        "unit": "riddhi siddhi print, d-73, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-480",
        "unit": "s.n. dairy foods pvt. ltd. ajroi road, sasni, hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-481",
        "unit": "seema textiles (old name- mathura textiles), e-75, 76, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-482",
        "unit": "siddhi vinayak enterprises, s-9, industrial area, site-a, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-483",
        "unit": "mac housary, tiperpur janta road, saharanpur",
        "state": "uttar pradesh",
        "district": "saharanpur",
        "ro": "saharanpur",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-484",
        "unit": "madina frozen foods p. ltd. (slaughter house), mundakhera road, khurja, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-485",
        "unit": "mahan milk food pvt. ltd. industrial area, salempur, hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-486",
        "unit": "meem agro foods pvt. ltd. kairna shamli",
        "state": "uttar pradesh",
        "district": "shamli",
        "ro": "muzaffarnagar",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-487",
        "unit": "mi industries (i) pvt. ltd, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-488",
        "unit": "mother dairy fruit & vegetable pvt. ltd. unit-etawah, 9 km, road, etawah",
        "state": "uttar pradesh",
        "district": "etawah",
        "ro": "firozabad",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-489",
        "unit": "n.k. dyeing c-170, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-490",
        "unit": "nagar nigam slaughter house, makhdum nagar mathura bypass road, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-491",
        "unit": "nageshwar papers ltd., plot no-745, arazi-142, fatehpur roshnai, raipur gajner road, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-492",
        "unit": "navdurga threds,(new name fabknit india pvt.ltd.) upsidc, kotwan, kosikalan, mtr.",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-493",
        "unit": "om international, d-1, industrial estate, district-hathras.",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-494",
        "unit": "otr papers pvt. ltd. ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-495",
        "unit": "parag dairy,(pcdf lucknow) b-219, phase-ii, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-496",
        "unit": "param dairy ltd, g.t. road, khurja, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-497",
        "unit": "pashupati fabric ltd, kosi, mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-498",
        "unit": "pawan processors, b-6, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-499",
        "unit": "pilakhni distillary & chemical works, pilakhni, saharanpur",
        "state": "uttar pradesh",
        "district": "saharanpur",
        "ro": "saharanpur",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-500",
        "unit": "pooja processors unit 3 plot no. k-41 and k-42, d-1, industrial area tronica city ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-501",
        "unit": "prachi leathers p. ltd., 202, swarooppur, akbarpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-502",
        "unit": "pragati enterprises,village hasanpur , massoorie, khekra,baghpat",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-503",
        "unit": "premium suitings p. ltd., g 6-8, upsidc industrial area, jainpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-504",
        "unit": "r.d.papers ltd., 587, khalilpur, jainpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-505",
        "unit": "r.m. dairy product llp, salempur, gonda road, iglas, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-506",
        "unit": "r.p.textiles, sarswati kund, mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-507",
        "unit": "r.s.a. dying, raipiur, kukhat, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-508",
        "unit": "radha textiles, goverdhan road, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-509",
        "unit": "raj dyeing company plot no. g-76, sector d-1, apparel park, tronica city,ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-510",
        "unit": "raj milk product, darveshabad, fatehpur",
        "state": "uttar pradesh",
        "district": "fatehpur",
        "ro": "allahabad",
        "sector": "food & beverages",
        "basin": "yamuna basin",
        "agency": "neeri"
    },
    {
        "code": "y-511",
        "unit": "rania dying & bleaching, raipiur, kukhat, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-512",
        "unit": "rozar export pvt ltd, shairgarh road chhata mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-513",
        "unit": "s.n. milk products pvt. ltd. sasni, hathras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-514",
        "unit": "s.r.mittal paper mills ltd.mainpuri road, sikohabad, firozabad",
        "state": "uttar pradesh",
        "district": "firozabad",
        "ro": "firozabad",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-515",
        "unit": "s.s. processors pvt. ltd. a-43, sector-5, noida, gautambuddha naga",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-516",
        "unit": "saharanpur textile, janta road, saharanpur",
        "state": "uttar pradesh",
        "district": "saharanpur",
        "ro": "saharanpur",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-517",
        "unit": "samprash foods pvt. ltd., 11th km. stone, aligarh-delhi road, village-pachpeda, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-518",
        "unit": "samtex desinz (formerly- nalini silk mills), plot no.-a-36, phase-ii, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-519",
        "unit": "sandeep paper mills (p) ltd, a-20, sector-6, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-520",
        "unit": "sanidhya engineers (p) ltd., d-43, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-521",
        "unit": "satguru processor, c-160, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-522",
        "unit": "saubhagya processors pvt. ltd. c-23/1/1-14, ind. area sikandrabad, distt. bulandshahar",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-523",
        "unit": "sbec sugar ltd,loyan malakpur,baghpat",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-524",
        "unit": "shades dyeing, hc-27, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-525",
        "unit": "sham dyers b-24, sector-4, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-526",
        "unit": "shamken cotsyn ltd, b-15, c-18 industrial area, kosi kalan, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-527",
        "unit": "shanti dying mills, b-10, industrial area, sikandrabad, district bulandshahr.",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-528",
        "unit": "shri ashok kumar chachra (sidharth dyeing)\n plot no g-59,sector d-1, apparel park, tronica city, ghaziabad",
        "state": "uttar pradesh",
        "district": "ghaziabad",
        "ro": "ghaziabad",
        "sector": "textile",
        "basin": "hindon",
        "agency": "iit delhi"
    },
    {
        "code": "y-529",
        "unit": "shri lakshmi cotsyn ltd., upsidc, malwan, fatehpur",
        "state": "uttar pradesh",
        "district": "fatehpur",
        "ro": "allahabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-530",
        "unit": "shri nathji textiles kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-531",
        "unit": "sil auto fab unit-2, old name-shamken international , nh-2, kotwan kosi, mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-532",
        "unit": "silver tone pulp & paper (unit-2) bhopa road, muzaffarnagar.",
        "state": "uttar pradesh",
        "district": "muzaffarnagar",
        "ro": "muzaffarnagar",
        "sector": "pulp & paper",
        "basin": "kali west",
        "agency": "cppri"
    },
    {
        "code": "y-533",
        "unit": "soni dyeing c-190, hosiery complex, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-534",
        "unit": "sunita textiles, vrindavan road mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-535",
        "unit": "sunrise textile, d-5 industrial area, sikendrabad, district bulandshahr.",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-536",
        "unit": "super fine processors (p) ltd., c-36, sector-8, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-537",
        "unit": "superior food grains pvt. ltd. (unn sugar complex), unn, shamli",
        "state": "uttar pradesh",
        "district": "shamli",
        "ro": "muzaffarnagar",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-538",
        "unit": "surekha prints , vill. devi pura, mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-539",
        "unit": "swaraj components p. ltd. a-39, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-540",
        "unit": "swarn tex prints pvt. ltd. d-25/26, upsidc, kotwan ind area, kosi kalan, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-541",
        "unit": "tahseel dyeing, saraswati kund mtr",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-542",
        "unit": "taxfab industries, a-16, industrial estate, district-hathras.",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-543",
        "unit": "telecom network solution p. ltd. a-10, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-544",
        "unit": "the baghpat co-operative sugar mills ltd,baghpat",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-545",
        "unit": "the ganesh hosiery industries, f-67, sector-11, noida",
        "state": "uttar pradesh",
        "district": "g.b. nagar",
        "ro": "noida",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-546",
        "unit": "tirubala exports (leather division), a-3/3, upsidc industrial area, jainpur, kanpur dehat",
        "state": "uttar pradesh",
        "district": "kanpur dehat",
        "ro": "kanpur dehat",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-547",
        "unit": "tirupati containers p. ltd. a-3/3, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-548",
        "unit": "u.p. twiga fibre glass ltd, ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-549",
        "unit": "urvashi synthetic (p) ltd., orai, jalaun",
        "state": "uttar pradesh",
        "district": "jalaun",
        "ro": "jhansi",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-550",
        "unit": "uttam sugar mills ltd. unit-4, shermou nakur, , saharanpur",
        "state": "uttar pradesh",
        "district": "saharanpur",
        "ro": "saharanpur",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-551",
        "unit": "vallabh dyeing, e-40, 41 industrial area, sikendrabad, district bulandshahr.",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-552",
        "unit": "varun beverages ltd dautana, chhata, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-553",
        "unit": "vinayak fibres ltd. a-6, c-6, kotwan kosi kalan, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-554",
        "unit": "vishal pipes ltd. a-71 (unit-ii), ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-555",
        "unit": "vishal pipes ltd. c-23 ind. area, sikandrabad, distt. bulandshahr",
        "state": "uttar pradesh",
        "district": "bulandshahar",
        "ro": "bulandshahar",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-556",
        "unit": "weavers point khekra",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-557",
        "unit": "weavetex overseas,khekra,baghpat",
        "state": "uttar pradesh",
        "district": "baghpat",
        "ro": "meerut",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-558",
        "unit": "zuberi fibres pvt. ltd. cdf compound, d-1, upsidc, anoopshar, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-559",
        "unit": "zydus wellness ltd (old name hieinz india pvt. ltd.), manzurgarhi, anupshahar road, aligarh",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-560",
        "unit": "gail (india) limited, pata, auraiya",
        "state": "uttar pradesh",
        "district": "auraiya",
        "ro": "kanpur dehat",
        "sector": "petrochemical",
        "basin": "yamuna",
        "agency": "iit bhu"
    },
    {
        "code": "y-561",
        "unit": "ajanta raj protiens, mankpura bah road agra",
        "state": "uttar pradesh",
        "district": "agra",
        "ro": "agra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-562",
        "unit": "g.k. dairy jarar, bah agra",
        "state": "uttar pradesh",
        "district": "agra",
        "ro": "agra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-563",
        "unit": "brindavan agro industries pvt. ltd. hatras",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-564",
        "unit": "diamond oversease, nai ka nagla, hathras.",
        "state": "uttar pradesh",
        "district": "hathras",
        "ro": "aligarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-565",
        "unit": "mahan protein ltd. barhana, nand gaon road, kosi, mathura",
        "state": "uttar pradesh",
        "district": "mathura",
        "ro": "mathura",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-566",
        "unit": "a. p. electroplators, \nplot no.3, gali no.1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-567",
        "unit": "a.g. udyog plot no 278, pocket-h, sector-2, dsiidc , bawana , delhi - 110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-568",
        "unit": "a.k. enterprises 1/536-d/13, gali no. 4, friends colony industrial area, shahdara, delhi â 110095.",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-569",
        "unit": "a.s. industries b-2417, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-570",
        "unit": "accumet engineers 62, najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-571",
        "unit": "adarsh anodizer, \na-8a, street no. 4n, anand parbat industrial area,delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-572",
        "unit": "ajay metal finishing 106-107, dsidc complex, phase-i, okhla industrial area new delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-573",
        "unit": "akshay enterprises 412, fie patparganj industrial area , delhi â 110092",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-574",
        "unit": "alfa automobiles (india) 7/21, kirti nagar indl. area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-575",
        "unit": "alkarma 57, najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-576",
        "unit": "allena auto industries pvt. ltd. b-68, wazirpur industrial area , delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-577",
        "unit": "allied industries a -317, ground and third floor, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-578",
        "unit": "amit india a-21, phase-ii, mangolpuri industrial area, new delhi, - 110034",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-579",
        "unit": "amrapali steel pvt. ltd. d-36, s.m.a. co-operative industrial estate, g.t. karnal road, industrial area, delhi-110033",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-580",
        "unit": "anand engineering corporation 171-b, gali no. 8, friends colony industrial area, g.t. road shahdara, delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-581",
        "unit": "anjaneya cold storge pvt.ltd., b-35, lawrence road industrial area, delhi-35",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-582",
        "unit": "ansun multitech (india) ltd. b-141, okhla industrial area, phase-i, , delhi - 20",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-583",
        "unit": "arman dyeing g-156,157,sector-3,bawana industrial area,delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-584",
        "unit": "arun electroplating b-2305, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-585",
        "unit": "ashoka engineering works,\n plot no. 45/1 gali no.1 anand parbat industrial area, delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-586",
        "unit": "ashoo electroplaters, \n50/17, c-2, street no. 1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-587",
        "unit": "asia continental metallwaren fabrik 60, dilshad garden industrial area, shahdara, delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-588",
        "unit": "atul engineering co. h-8, udyog nagar industrial area , delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-589",
        "unit": "b.t. electroplating works e-772, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-590",
        "unit": "babu ram, \nplot no. 23/2, gali no. 11, anand parbat industrial area, delhi-110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-591",
        "unit": "bajaj auto ways (regd) b-65, wazirpur industrial area , delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-592",
        "unit": "bajaj enterprises\n 54, 1st floor, street no. 30, railway line side, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-593",
        "unit": "baldev platers\n m-7, gali no.3, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-594",
        "unit": "banke bihari process (unit-ii) a-25,sector-2,dsidc bawana industrial area,delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-595",
        "unit": "bansal metal industries, 318, patparganj industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-596",
        "unit": "batra and co. a-71, sector-1, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-597",
        "unit": "bela enterprises 71/2 najafgarh road industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-598",
        "unit": "benlon india ltd. a-68, group wazirpur industrial area , delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-599",
        "unit": "bentex control and switchgear co. b-63/65/3, naraina industrial area, phase-ii, new delhi-110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-600",
        "unit": "berlia steels pvt. ltd. 59, s.s.i industrial area, g.t. karnal road",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-601",
        "unit": "bharat impex b-73, phase i,mayapuri industrial area , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-602",
        "unit": "bird audio india pvt. ltd plot no s-35, phase-i, badli industrial estate",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-603",
        "unit": "blu shine wash k-242, sector-5, dsiidc industrial area bawana delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-604",
        "unit": "bluart industries plot no. a-83/4, wazirpur industrial area, delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-605",
        "unit": "blue bottom g-1003, dsidc, narela industrial area, delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-606",
        "unit": "bombay mechanical works plot no- 156 pocket h sec 5 dsiidc bawana ind area delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-607",
        "unit": "bright electroplaters c-85, phase-ii, mayapuri industrial area, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-608",
        "unit": "bright electroplating engineers. 17,moti nagar dlf industrial area,najafgarh road., delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-609",
        "unit": "bright electroplating industries c-5/2 wazirpur industrial area, delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-610",
        "unit": "bright steel bars\n\n j-36-c, street no.7, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-611",
        "unit": "bush hardware collections pvt. ltd, 159, fie, patparganj industrial area, delhi â 110092",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-612",
        "unit": "chandra electrical industries 7/18, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-613",
        "unit": "chirag sanitary products plot no b-12/5, jhilmil industrial area, delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-614",
        "unit": "city thread (india) pvt. ltd, a-15, jhilmil industrial area, delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-615",
        "unit": "coatwell india pvt. ltd 42, kirti nagar dlf industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-616",
        "unit": "colour creation n1-126, sector-5,dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-617",
        "unit": "colour essence b-3,sector-5,dsidc bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-618",
        "unit": "colour rocks i-281, sector-2,dsidc bawana industrial area,delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-619",
        "unit": "cosmo platers pvt. ltd. t-31, okhla industrial area, phase-ii, delhi â 20",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-620",
        "unit": "cosmo platers pvt. ltd.\n 3/31, anand parbat industrial area, delhi -05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-621",
        "unit": "crown steel fabricators 24, furniture block kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-622",
        "unit": "d. u. metallon pvt. ltd. b-92, okhla industrial area, phase-i, new delhi-20",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-623",
        "unit": "d.b. enterprises 7/26, kirti nagar industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-624",
        "unit": "d.m. exclusive i-54, top floor, sector-2, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-625",
        "unit": "dayal solders plot no 258, pocket-f, sector-5, dsiidc , bawana , delhi - 110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-626",
        "unit": "decorous 18, moti nagar dlf industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-627",
        "unit": "delhi anodizing work, 18/23, gali no.28, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-628",
        "unit": "delhi chrome well b-21, ground floor, dsidc industrial area, rohtak road, nangloi, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "neeri"
    },
    {
        "code": "y-629",
        "unit": "delhi chrome well c-13, dsidc nangloi industrial area complex, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-630",
        "unit": "delhi dyeing mills c-53, phase-ii, mayapuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-631",
        "unit": "delhi milk scheme, west patel nagar,delhi-110008",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-632",
        "unit": "delite electroplators, 18/24, gali no. 28, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-633",
        "unit": "deor metal industries pvt. ltd 16-17/340, gali no. 1b, gt road, shahdara, friends colony industrial area , delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-634",
        "unit": "dhingra industries 8/42, kirti nagar industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-635",
        "unit": "diamond anodisizing works, a-4, street no.1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-636",
        "unit": "dimpal iron factory 55, furniture block kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-637",
        "unit": "divya jewellers pvt. ltd. x-31, phase-ii, okhla industrial area, delhi - 20",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-638",
        "unit": "doctor denim creations sector-2a, block number-6, dsiidc, bawana industrial area,delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-639",
        "unit": "dr. beli ram & sons (mfg) 42, dlf kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-640",
        "unit": "durga barrels co. b-65/2, naraina industrial area, phase-ii, new delhi-110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-641",
        "unit": "eagle industries baldev raj prop 117/1, tulsi ram bhawan, shivji marg, najafgarh road industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-642",
        "unit": "eagle sanitation wh-98, ph-i, mayapuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-643",
        "unit": "east west switchgear industries b-63/1, naraina industrial area, phase-ii, new delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-644",
        "unit": "electromack, b-11 , jhilmill industrial area,delhi - 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-645",
        "unit": "erin garments hl- 9 , sector -2 , bawana industrial area , new delhi- 110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-646",
        "unit": "exotic blues b-150, basement and ground floor, ph-i, mayapuri indl. area, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-647",
        "unit": "feroz &company, 60a, dilshad garden industrial area (shahdara)(north of gt road) , delhi - 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-648",
        "unit": "fiba hardwyn locks ltd c-147, mayapuri indl area ph-11, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-649",
        "unit": "fifth avenue promoters pvt. ltd. b-65, bentex house, naraina inds. area, phase-ii, new delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-650",
        "unit": "flora electrical industries (regd.), a-104, mangolpuri industrial area, phase-ii, delhi-110034",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-651",
        "unit": "funkyy j-57, sector-2, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-652",
        "unit": "futures bath products, plot no-4, mpl no.524/b,g.no.4, friends colony industrial area,delhi - 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-653",
        "unit": "g.r. industries plot no 1, pocket-h, sector-2, dsiidc , bawana , delhi - 110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-654",
        "unit": "ganesh tubes 44, najafgarh road industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-655",
        "unit": "garknit enterprises pvt. ltd. a-42, mayapuri indl. area, gate-1, ph-ii, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-656",
        "unit": "gaurav hosiery m-208, sector-2, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-657",
        "unit": "gbs enterprises, 10, 1st floor, fie patparganj industrial area, delhi â 110092",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-658",
        "unit": "gee em enterprises wz-8/7, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-659",
        "unit": "ghazipur slaughter house delhi food processing complex ( meat) of mcd,pocket b, food processing complex,ghazipur,delhi-110096",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-660",
        "unit": "global engineers plot no -k-26,udyog nagar industrial area , delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-661",
        "unit": "golden electroplaters, \n1/4, st. no. 1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-662",
        "unit": "goldsun automobiles plot no 94 pocket c sector 4 dsidc bawana delhi 110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-663",
        "unit": "gorkha welding works, 50/13, gali no.1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-664",
        "unit": "grd enterprises unit-ii m-78, sector-3, dsiidc bawana industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-665",
        "unit": "greazol surfactants 17,shivaji marg,najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-666",
        "unit": "grover steel works b-55, phase ii, mayapuri industrial area , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-667",
        "unit": "guru nanak engg. works i-14, sector-5, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-668",
        "unit": "gurunanak processor gi-101,ist floor & second floor,phase-ii, mayapuri industrial area new delhi-110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-669",
        "unit": "hari om unit point i-299&300,sec-4,dsiidc bawana, industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-670",
        "unit": "hari ram enterprises 39, rama road, najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-671",
        "unit": "harsh creation (unit-ii) c-57 and c-179 joint building, sector-2, dsiidc bawana industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-672",
        "unit": "hindustan switch pvt. ltd a-23, mayapuri industrial area, phase-i , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-673",
        "unit": "hi-print corporation 29-30, dsidc complex, phase-i, okhla industrial area, delhi - 20",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-674",
        "unit": "hira electronics b-2572, dsidc narela indl area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-675",
        "unit": "ideal udyog plot no: 102, phase-ii, badli industrial estate, delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-676",
        "unit": "igaku needles private limited c-109, okhla industrial area, phase-i, new delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-677",
        "unit": "india hardchrome c-9, rohtak road, dsidc nangloi industrial area , delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-678",
        "unit": "india navigation company a-103, mayapuri industrial area, phase-ii, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-679",
        "unit": "india products e-31,s.m.a. co-op indl area gtk road",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-680",
        "unit": "inditex india pvt. ltd. c-268, phase-ii, mayapuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-681",
        "unit": "iqbal dyeing mill b-68/3, naraina industrial area, phase-ii, new delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-682",
        "unit": "j.l. industries plot no-267, pocket-d, sector-5, dsidc industrial area, bawana delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-683",
        "unit": "j.m.d. enterprises 5/31, kirti nagar industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-684",
        "unit": "jaycee industries 8/42, kirti nagar industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-685",
        "unit": "jayna dial industries factory no.335, fie, patparganj industrial area , delhi â 110092",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-686",
        "unit": "jaysons (india) 56, s.s.i industrial area, g.t. karnal road, delhi-110033ad",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-687",
        "unit": "jindal saw limited 28 , najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-688",
        "unit": "jmd enterprises e-44,sector-5, dsiidc bawana industrial area new delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-689",
        "unit": "jp anodizer, plot no 31/3, gali no. 1 anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-690",
        "unit": "k l vashisht & sons \n 31 p/7a, street no. 4, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-691",
        "unit": "k.p. engineering works (regd.) d-1627, dsidc, narela industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-692",
        "unit": "k.s. anodisers aluminium associated (p) ltd. 267, okhla industrial estate, phase-iii, delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-693",
        "unit": "kanodia technoplast (p) ltd a-43, wazirpur industrial area , delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-694",
        "unit": "kapil enterprises, n-10, gali no. 9, anand parbat industrial area,delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-695",
        "unit": "kapoor engineers(india), plot no. 8, street no. 3, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-696",
        "unit": "kaps electricals j-54-44, sec-1, dsidc indl. area, bawana delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-697",
        "unit": "kcr polytex k-29, ist floor, udyog nagar industrial area, delhi-110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-698",
        "unit": "kohli gravure f-58,phaseii mayapuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-699",
        "unit": "kohli polishing work f-10, ph-ii, mayapuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-700",
        "unit": "krishna engineering works, plot no.-23/2 a , gali no-11, anand parbat industrial area , delhi - 110005.",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-701",
        "unit": "krypton power controls (i) pvt. ltd. h-51,udyog nagar industrial area , delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-702",
        "unit": "kwality electroplators, m - 13, gali no. 01, anand parbat, industrial area, delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-703",
        "unit": "lark industries k-30, ground floor, udyog nagar industrial area, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-704",
        "unit": "m.v.m. products b-2321, dsidc narela industrial complex delhi 110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-705",
        "unit": "machines & instruments 9/56, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-706",
        "unit": "madhu enterprises kh. no.21/20 & 21/21, first floor, gali no.4, samaipur industrial area, delhi-110042",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-707",
        "unit": "malik enterprises sfs shed no-29,catogory ii,dsidc nangloi industrial area, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-708",
        "unit": "mangla handles plot no. 101, phase-ii, badli industrial estate, delhi-42",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-709",
        "unit": "manoj embroidery f-1825, dsiidc narela industiral area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-710",
        "unit": "matchless wheel pvt. ltd. plot no. b-20,rama road najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-711",
        "unit": "max faucets private limited t - 2 138, phase i, mangolpuri, indl. area, delhi , delhi, - 110083",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-712",
        "unit": "mechanical cocks & valves india y-21, phase-ii, okhla industrial area delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-713",
        "unit": "metal bright co. c-178, naraina industrial area phase-i, delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-714",
        "unit": "metal treatment 9/46, kirti nagar indl area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-715",
        "unit": "metro cycle industries b-2607,dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-716",
        "unit": "mohan industries, plot no. 50/17, c-6a, street no. 1 anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-717",
        "unit": "mother dairy fruit & vegetable pvt. ltd. unit mother dairy, mother dairy,patparganj, delhi - 92",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-718",
        "unit": "multi anodizing works, a-26a, street no. 4, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-719",
        "unit": "name address",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-720",
        "unit": "narayan polishing plot no. 56 (private no.a-15), rama road, najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-721",
        "unit": "national steels 21/27-x, block-a, naraina industrial area phase - ii , delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-722",
        "unit": "nav-bharat trading corporation 70, najafgarh road industrial area (rama road), delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-723",
        "unit": "neeta kathuria 31-a, dlf najafgarh road industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-724",
        "unit": "new era metal & general industries, 50/25, street no. 4, anand parbat industral area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-725",
        "unit": "new vishal (i) hardening d-1/104, mayapuri industrial area , phase-ii, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-726",
        "unit": "new wembley products 53, rma road, najafgarh road industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-727",
        "unit": "nirmal trading co. a-13, g.t. karnal road industrial area, delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-728",
        "unit": "om kutir udyog 69, najafgarh road industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-729",
        "unit": "orbit zippers pvt. ltd. f-90/8, okhla industrial area phase-i",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-730",
        "unit": "p.s. industries, k-31/2, gali no.4, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-731",
        "unit": "panna anodizing works b-2496, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-732",
        "unit": "paras sanitary goods 1/536-d/8, gali no. 5, g.t. road shahdara, friends colony industrial area , delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-733",
        "unit": "parkash enterprises shed 20, dsiidc jhilmil ind. area, shahdara, delhi-95",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-734",
        "unit": "parkson printing press a-36/3, ph-i, mayapuri industrial area , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-735",
        "unit": "parmaras jogian industries c-5, rohtak road, dsidc nangloi industrial area , delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-736",
        "unit": "parmod plating works m-39, top floor, sector-1, dsiidc, bawana industrial area, new delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-737",
        "unit": "parvinder enterprises 10/57, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-738",
        "unit": "perfection engg. corporation b-95/4,naraina industrial area phase - i , delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-739",
        "unit": "pindi engineering works b-123, ph-i, mayapuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-740",
        "unit": "plast tech (india), b-40, jhilmil industrial area, gt road shahdara, delhi â 110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-741",
        "unit": "plastocraft sanitary india pvt. ltd. b-59, mayapuri industrial area phase-i, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-742",
        "unit": "pooja enterprises i-2145, dsiidc, narela industrial area, new delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-743",
        "unit": "poultry house b-1 pocket,ghazipur",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-744",
        "unit": "powdertek a-18a, naraina industrial area phase - i , delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-745",
        "unit": "prem electroplaters b-28/5, wazirpur, industrial area, delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-746",
        "unit": "premier electroplating works, a-27g,gali no.4, anand parbat industrial area, delhi -05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-747",
        "unit": "premier industries 78, phase ii, badli industrial estate , delhi - 110042",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-748",
        "unit": "printex, 18/24, gali no. 28, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-749",
        "unit": "punihani international b-114, phase-i okhla industrial area, new delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-750",
        "unit": "pushp sanitary appliances plot no.439, f.i.e patparganj industrial area, delhi â 110092",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-751",
        "unit": "pushpa international d-6/1, phase-i, okhla industrial area, delhi - 20",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-752",
        "unit": "pvg milk products llp plot no-35, pocket-p, sector-5, dsidc industrial area, bawana delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-753",
        "unit": "quality enterprises b-120, mayapuri industrial area phase i, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-754",
        "unit": "r. s. kathuria cyecle and auto ind 9/52, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-755",
        "unit": "r.d electroplaters, 50/13, street no. 1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-756",
        "unit": "r.k industries, plot no.-5, gali no.9, anand parbat industrial area,delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-757",
        "unit": "r.k. metal industries a-99/3, wazirpur industrial area , delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-758",
        "unit": "radha electroplaters, 50/21, street no. 1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-759",
        "unit": "radha enterprises f-1759,dsiidc narela industiral area,new delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-760",
        "unit": "radha krishna process plot no 96 and 97, pocket-n1, sector-5, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-761",
        "unit": "raghubir electric works f-125, phase-ii, mayapuri industrial area, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-762",
        "unit": "rajpal polytex pvt. ltd l-4, rohtak road, udyog nagar industrial area, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-763",
        "unit": "rakesh anodizer, 5-b, gali no.1, anand parbat industrial area , delhi - 110005..",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-764",
        "unit": "ram electroplaters b-2495, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-765",
        "unit": "ram prakash and brothers a-27/4, ph-i, mayapuri industrial area , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-766",
        "unit": "rayat electricals 7/22, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-767",
        "unit": "rohini industries h-7, dsidc indl complex rohtak road nangloi, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-768",
        "unit": "rosy electroplating works, 1017/342, street no. 4-k, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-769",
        "unit": "royal industries d-11, sector-1, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-770",
        "unit": "s.b. enterprises h-5, phase-3, badli industrial area, delhi-110042",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-771",
        "unit": "s.j.m.exports f-13,udyog nagar,industrial area, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-772",
        "unit": "s.s. silverstar accessories pvt. ltd a-116, magolpuri industrial area, ph-ii, new delhi - 110034",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-773",
        "unit": "sagar enterprises a-2, magolpuri industrial area, ph-ii, new delhi - 110034",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-774",
        "unit": "sahi electroplaters 70, rama road, najafgarh road industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-775",
        "unit": "sahi electroplaters pvt. ltd. 54/d-12, rama road najafgarah road indl. area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-776",
        "unit": "sai kirpa steel b-236, sector-1, dsidc indl. area, bawana delhi-39",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-777",
        "unit": "saini textiles a-17, phase-iii, badli industrial estate",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-778",
        "unit": "samar polytex ltd. k-24, udyog nagar industrial area, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-779",
        "unit": "sana enterprises plot no-213, pocket-c, sec-1, dsidc industrial complex bawana, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-780",
        "unit": "sanjay electroplating, 52/14, a-6, gali no. 4d 3,anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-781",
        "unit": "security systems e-45/4, phase-ii, okhla industrial area delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-782",
        "unit": "sharma anodizers, 29 q/7, street no. 4k, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-783",
        "unit": "sharma electroplalting works f-85, okhla industrial estate phase âiii, new delhi-110020",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-784",
        "unit": "shine well enterprises d-148, phase-ii, mayapuri industrial area , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-785",
        "unit": "shiv enterprises 459, fie patparganj ind. area, delhi-92",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-786",
        "unit": "shree narayani industries 2nd floor, a-9/2, jhilmil ind. area, delhi-95",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-787",
        "unit": "shree raj roto india ltd g-6, dsidc industrial complex, rohtak road, nangloi dsidc industrial area, delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-788",
        "unit": "shree ram washing plot no-231.pkt-n,sector-5,bawana industrial area,delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-789",
        "unit": "shri krishna engineering works b-86, g.t. karnal road industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-790",
        "unit": "shri sai washing o-84, sector-5, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-791",
        "unit": "shri venkateshwar faucets private limited t - 2 221, phase i, mangolpuri, indl. area, delhi , delhi, - 110083",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-792",
        "unit": "sikka sanitory works 5/31, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-793",
        "unit": "silvertone trading company c-141, naraina industrial area, phase - i , delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-794",
        "unit": "singh sons electroplating works 70 rama road, shivaji marg, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-795",
        "unit": "sisodia metal industries plot no. 2348, sector-b,dsiidc, narela industrial complex narela, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-796",
        "unit": "skn-bentex group a-8, naraina industrial area, phase-ii, new delhi-110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-797",
        "unit": "snow wolt f-1766, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-798",
        "unit": "soma colouring works, 50/13, gali no. 1, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-799",
        "unit": "sonu industries c-52, mayapuri industrial area, phase-ii, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-800",
        "unit": "speculum-finish 20, dsidc complex, wazirpur industrial area , delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-801",
        "unit": "spokesman india b-2622, dsiidc, narela industrial area, delhi-110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-802",
        "unit": "sri jagdambe traders 340/3, gali no 1b, friends colony ind. area, shahdara, delhi-110095",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-803",
        "unit": "standard enamel works (p) ltd. d-40,g.t.k.road s.m.a industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-804",
        "unit": "standard ring pvt. ltd. a-75/1, g.t. karnal road industrial area, delhi-110033",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-805",
        "unit": "storage system c-309, ph-ii, mayapuri indl area, delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-806",
        "unit": "strebor designs y-43, okhla industrial area, phase-ii, new delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-807",
        "unit": "subash sales pvt ltd b-34, lawrence road indusrial area, delhi-110035",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-808",
        "unit": "subhash chander arora ba-66, phase-ii, mangolpuri industrial area, new delhi, - 110034",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-809",
        "unit": "sudh garhwal paneer nirmata sangh 27, rani jhansi road, delhi-110055,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-810",
        "unit": "sumit metal works plot no 164, first floor, pocket-k, sector-2, dsidc , bawana , delhi - 110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-811",
        "unit": "super electroplating plot no.167, sector-2, pocket-a, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-812",
        "unit": "super shine platers, m-11, gali no.1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-813",
        "unit": "suresh traders & engineers plot no 84, pkt-e, sec-4, bawana indl. area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-814",
        "unit": "taps & cocks india pvt. ltd. , t -2/143, phase - i mangol puri indl. area,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-815",
        "unit": "tara products e-19, dsiidc, industrial complex, rohtak road, nangloi, delhi-110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-816",
        "unit": "tarro industries plot no. 108, pocket-a, sector-1, dsiidc, bawana industrial area, delhi-110039",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-817",
        "unit": "tarun electronics c-171, phase-i, naraina industrial area, delhi - 110028",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-818",
        "unit": "techniks (india) a-51, g.t. karnal road industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-819",
        "unit": "tiwari hosiery factory f-1900,dsidc, narela industrial complex, delhi - 110040",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-820",
        "unit": "toplines home applience a-132, wazirpur, industrial area, delhi, - 110052",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-821",
        "unit": "vashist electroplaters, 3/12, street no. 2, anand parbat industrial area, delhi-05",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-822",
        "unit": "vee jay sales corporation c-297, ph-ii, mayapuri industrial area , delhi - 110064",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-823",
        "unit": "vee kay industries 69/6a, najafgarh road industrial area, delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-824",
        "unit": "vee tex khasra no.20/3, gali no.9, samaipur industrial area, delhi",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-825",
        "unit": "verna metal industries bc-341, mangolpuri industrial area, phase-ii, new delhi, - 110034",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-826",
        "unit": "vikas electroplators, m-11, street no. 1, anand parbat industrial area , delhi - 110005,",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-827",
        "unit": "vikram enterprises k-30, mazznine floor, udyog nagar industrial area, new delhi - 110041",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-828",
        "unit": "volga metal industries ba 25, phase ii mangolpuri industrial area",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-829",
        "unit": "wingrow gravures private limited 58, s.s.i. co-operative industrial estate, g.t. karnal road, delhi-110033",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-830",
        "unit": "wings woollen & weaving mills 9/56b, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-831",
        "unit": "wonderax laboratories 4/10, kirti nagar industrial area , delhi - 110015",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "others",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-832",
        "unit": "ziptech industries m-15, 2nd floor, badli industrial area, delhi-110042",
        "state": "delhi",
        "district": "delhi",
        "ro": "",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-833",
        "unit": "indo autotech ltd., 332-338, sec-24, faridabad, sh. anand kumar jain, 9958111112",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-834",
        "unit": "global automative components (unit-ii), plot no-95, sec-24, faridabad, sh. ritesh gumber , 9873154243",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-835",
        "unit": "vikas strip ltd., plot no. 17 & 18 sector-58 faridabad, sh. deepak goel, 9350377600",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-836",
        "unit": "rainbow painting works, 20/3, mathura road, faridabad, sh. devesh kumar garg, 9811115009",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-837",
        "unit": "shri chari wire 23/7, mathura road, (near jharsantly govt. school), sec-58, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-838",
        "unit": "sisodia engineering, plot no. 7a, new industrial area, faridabad, sh. bijender singh, 9212313111",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-839",
        "unit": "dinesh & co. plot no. 138, sector 25, faridabad, sh. mrs. vinita arora, 9899761168",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-840",
        "unit": "joneja bright steel pvt ltd, plot no.239, sector-24, faridabad, sh. gurnam singh joneja, 9212019812",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-841",
        "unit": "joneja bright steels pvt ltd, plot no.244, sector-24, faridabad, sh. gurnam singh joneja, 9212019812",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-842",
        "unit": "manish wire industries, plot no.215, sector-24, faridabad, sh. ramesh jhawar, 9810287190",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-843",
        "unit": "omega bright steel pvt ltd plot no.109 sector-24, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-844",
        "unit": "kdr bright steel pvt ltd (formally premier iron alloy & steel), plot no. 161, sector-25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-845",
        "unit": "s.s.bright steel plot no.30/5, indl.area, nit, faridabad, sh. mr. harish bareja, 9899659129",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-846",
        "unit": "sterling tools ltd., plot no. 81, sector-25 faridabad, sh. v.k bahl, 0129-4063462",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-847",
        "unit": "escorts ltd (red), plot no-114-115 sector-24, faridabad, sh. k.c kaushik, 9871094279",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-848",
        "unit": "faridabad autocomp system pvt. ltd., plot no. 311-312-313, sector-24, faridabad, sh. anurag agnihotri, 9811085554",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-849",
        "unit": "mitaso appliances ltd., 102, sector 24, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-850",
        "unit": "aksar wire products pvt ltd (formerly- nit needles, plot no-288, sector-24, faridabad), sh. c p agarwal, 9811209167",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-851",
        "unit": "pranav vikas (india) pvt ltd, plot no.45-46, nit, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-852",
        "unit": "sage metal ltd., plot no.-123, sector 24, faridabad, sh. shri prakash agarwal, 09810976283",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-853",
        "unit": "sarvo technologies ltd, plot no. 316, sector-24, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-854",
        "unit": "venus industrial corporation pvt ltd, plot no.197 & 262g-h, sector-24, faridabad, sh. k l kathuria, 9818315479",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-855",
        "unit": "vidhyut steel tube industries pvt ltd., 37 sector-25, faridabad, sh. kamal bhushan mahotra, 9811082010",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-856",
        "unit": "whirlpool of india pvt ltd, 28-29, nit, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-857",
        "unit": "gsp power projects(formally chrome well industries, plot no.62, sector-25, faridabad,",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-858",
        "unit": "kanin india ltd, plot no.79, sector-25, faridabad, sh. vijay kumar, 9711478615",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-859",
        "unit": "ideal coating industries 30/6, industrial area, nit, faridabad, sh. \" manoj bhatia\", 9999575445",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-860",
        "unit": "krishna electroplators(om electroplators ) 51/16, nit, faridabad, sh. chattar singh, 9971375758",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-861",
        "unit": "meta fab industries, plot no. 12, indl. area, faridabad, sh. sumeet bhatnagar, 9811771618",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-862",
        "unit": "paul enterprises, plot no. .203 sector 24, faridabad, sh. \" pritpal singh\", 9999020760",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-863",
        "unit": "plato fab industries, 16/1, industrial area, nit, faridabad, sh. sameer bhatia, 9999575445",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-864",
        "unit": "raj enterprises, plot no.50a, sec-25, industrial area, nit, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-865",
        "unit": "s.s painting industries 51/16, industrial area, nit, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-866",
        "unit": "tanmay electroplators, plot no. 6, industrial area, nit, faridabad, sh. binod kumar prasad, 9999575445",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-867",
        "unit": "v.n. industries plot no. 75 sector 24, faridabad, sh. prem singh, 9899802770",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-868",
        "unit": "eurokon global exports pvt. ltd., plot no.5, industrial area, nit, faridabad, sh. sanjeev gupta, 9811209167",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-869",
        "unit": "jbm industries ltd plot no 268-269 sector 24. faridabad, sh. vinay maheshwari, 9873202613",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-870",
        "unit": "vmf engg., plot no. 59, sector 24, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-871",
        "unit": "dynamic indian equipments plot no. 51/3j, i.a, nit , faridabad, sh. vivekprakash, 9650011865",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-872",
        "unit": "hpl additives ltd, plot no. 6-8, sector-25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "chemical",
        "basin": "river yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-873",
        "unit": "hpl additives ltd, plot no. 72, sector 25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "chemical",
        "basin": "river yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-874",
        "unit": "ecocat india pvt ltd, 04, 20th mile stone, mathura road faridabad, sh. alok trigunayat, 9810403107",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-875",
        "unit": "jitin powder coater, plot no. 67 smie phase-1, opp. ymca, mr, faridabad, sh. santosh kumari madan, 9971215500",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-876",
        "unit": "veegee kaushiko engineering p ltd., p no-126 sec-24 faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-877",
        "unit": "veegee industrial enterpsies p ltd., 31-b industrial area, nit, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-878",
        "unit": "kewal prem, p no-6 e additional industrial area, near yamaha motor, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-879",
        "unit": "jyoti bright steel,plot no. 61, shed no. 06, industrial area, nit, faridabad, sh. santosh bansal, 9999575445",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-880",
        "unit": "kenmore vikas india pvt. ltd., plot no. 04, 20th mile stone, mathura road, , faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-881",
        "unit": "krishna auto flex, plot no. 8, industrial area, nit , faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-882",
        "unit": "studds accerssories ltd., 23/7, m road, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-883",
        "unit": "escorts ltd. ( construction equipment ), plot no. 219 sector-58 , faridabad, sh. gb mathur, 9910879888",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-884",
        "unit": "showa india p ltd., plot no. 23-32, sector-58 , faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-885",
        "unit": "surface finisher pvt ltd, 6/ 9a northen india complex, 20 mile stone mathura road, faridabad, sh. saurav agarwal, 9810190762",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-886",
        "unit": "india yamaha motors pvt ltd, 19/6, mathura road, faridabad., sh. om prakash, 0129-4280100",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-887",
        "unit": "vee gee industrial enterpsies p ltd., 53/2, industrial area faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-888",
        "unit": "sledge hammer oil tools pvt. ltd., p.no. 262-i, sec-24, faridabad, sh. kuldeep saxena, 8860087019",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-889",
        "unit": "gphp holdings p ltd., p no-23, gali no.3 (west) sarrorpur, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-890",
        "unit": "jaiba metals, plot no.30/4, wear well cycle compound, industrial area, nit faridabad, sh. raj kumar gera, 9811856818",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-891",
        "unit": "nirman industries, plot no, 171, sec-24, faridabad, sh. k k mohindroo, 9811209167",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-892",
        "unit": "om processors, plot no. 167, sec-24, industrial area, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "river yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-893",
        "unit": "cold forge, plot no. 181, shed(2,3 & 4), sector-24, faridabad, sh. o p bhatia, 9811101498",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-894",
        "unit": "bee k bee prints pvt. ltd., vill-mohla, ballabgarh faridabad, sh. surinder kumar batra, 9810011839",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "river yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-895",
        "unit": "lakshman tool pvt ltd., plot no. 103, sec-24, faridabad, sh. subhash wali, 9811209167",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-896",
        "unit": "sledge hammer oil pvt ltd., plot no. 262 l and k, sec-24, faridabad, sh. ankur kaushik, 8860087040",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-897",
        "unit": "r r autotech private limited, plot no. 187, sec-24, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-898",
        "unit": "avon coatings\nplot no.- 164, sector-25 faridabad, sh. neeraj jain, 9818174182",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-899",
        "unit": "shivam devansh fab p ltd., vill - mohala, chhaprola road, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "river yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-900",
        "unit": "scientific knits processors pvt. ltd., plot no-165, sector 25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "river yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-901",
        "unit": "bch electric ltd., 20/4, mathura road, faridabad, sh. p khairnar, 989949710",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-902",
        "unit": "jcb india ltd., 23/7 mathrua road, faridabad, sh. subir kumar chowdhury, 98109955878",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "others",
        "basin": "river yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-903",
        "unit": "a.k. automatics, unit -iii, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-904",
        "unit": "a.v. international, p. no. 7b/4, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-905",
        "unit": "aastha creations p. no. e-12, mie-b, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-906",
        "unit": "ads spirits (p) ltd, beri kalanaur road, vill-butiyan, tehsil-beri, distt. jhajjar",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-907",
        "unit": "jdm industries, p. no. 161, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-908",
        "unit": "alsa industries, p. no. 9, mie-b, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-909",
        "unit": "ankit industries, sainik colony, distt. rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-910",
        "unit": "asian paints ltd, p. no. 1, sector-30b, imt, distt. rohtak.",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-911",
        "unit": "asian polymers, opp. p. no. 1298, mie-b, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-912",
        "unit": "balaji industries plot no. 142, hsiidc, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-913",
        "unit": "belco pharma, p. no. 515, mie-a, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "pharmaceutical",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-914",
        "unit": "bharat engg. co., plot no.610, mie, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-915",
        "unit": "bharat rasyan ltd., village mokhra, distt. rohtak.",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-916",
        "unit": "bhartiya leather co. red cross road, b-7, mie-b, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-917",
        "unit": "bhutani alloys p. ltd, p. no. 2385, mie-b,b/garh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-918",
        "unit": "classic international, p. no.2418, mie-b, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-919",
        "unit": "coim india (p) ltd, p. no. 25-26, sec-17, hsiidc, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "chemical",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-920",
        "unit": "energy infrastructure (india) ltd., unit - ii, kilan no. 170 & 1771, sampla beri road, village ismaila, distt. rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-921",
        "unit": "ganpati dying, nizampur road, vill- parnala, distt. jhajjar",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-922",
        "unit": "harjaisons , p. no -ii , 20, 21,35, idc hisar raod, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-923",
        "unit": "harjaisons, p no.164, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-924",
        "unit": "hindustan petroleum corporation ltd, mundra delhi pipe line, vill-asaudha, bahadurgarh, distt. jhajjar. (mdpl storage tank of hpcl)",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-925",
        "unit": "hindustan petroleum corporation ltd, ramanmandi bahadurgarh pipeline (rbpl) of hpcl, distt. jhajjar. (bahadurgarh terminal)",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-926",
        "unit": "hindustan petroleum corporation ltd, ramanmandi bahadurgarh pipeline (rbpl) of hpcl, distt. rohtak.",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-927",
        "unit": "hindustan petroleum corporation, lpg bolting plant, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-928",
        "unit": "hindustan petroleumn corporation ltd, tikri kalan project, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-929",
        "unit": "interfeb processors, vill-parnala,distt. jhajjar",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-930",
        "unit": "itzel bath (p) ltd., plot no. 596/97, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-931",
        "unit": "jain industrial products, p. no. 54-55 & 56, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-932",
        "unit": "k.k. enterprises, 7/b/5 , mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-933",
        "unit": "k.s. enterprises, p. no. 2450, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-934",
        "unit": "kamla enterprises, plot no. 161, old idc, hissar road rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-935",
        "unit": "kavita processor, vill-parnala, distt. jhajjar",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-936",
        "unit": "kawality threads pvt. ltd., p.no. 925-26-27, m.i.e., bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-937",
        "unit": "koyo componants (india), p. no. 62, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-938",
        "unit": "l.m.l. dye inds, mie-b, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-939",
        "unit": "lancer engineering , p. no. 1487, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-940",
        "unit": "luxmi metal finishers, p. no. 77-78, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-941",
        "unit": "m.d. inds, p.no. 2296-97-98, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-942",
        "unit": "marca corma, 36 km stone, d-r road, sankhol, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-943",
        "unit": "maruti suzuki india ltd, p. no. 1, sec-33b-33c, imt, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-944",
        "unit": "master hosiery, vill-parnala, distt. jhajjar.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-945",
        "unit": "micron coating , p. no. 403, mie-a, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-946",
        "unit": "n.k. dyers, village parnala, behind govt. school, nizampur road, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-947",
        "unit": "neha processors house, nizampur road, vill. parnala, distt. jhajjar",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-948",
        "unit": "p.dass forging (p) ltd, sainik colony, distt. rohtak.",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-949",
        "unit": "paksons pharmaceuticals pvt. ltd., 36 km. stone, village sankhol, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "pharmaceutical",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-950",
        "unit": "passion inds. (p) ltd. plot no. 160, hsiidc kutana, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-951",
        "unit": "perfect engineering co. 347, mie -a, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-952",
        "unit": "pharma chem p. no. 710, 711, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "pharmaceutical",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-953",
        "unit": "pinaki industries, unit-ii, 1213-b, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-954",
        "unit": "pinki process house, vill-parnala, distt. jhajjar.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-955",
        "unit": "pooja tannofix tanners (p) ltd, p. no. 2445, mie, part-a, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "tannery",
        "basin": "yamuna river",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-956",
        "unit": "punch ratna steels p. ltd., p. no. 65-66, idc, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-957",
        "unit": "r.b. steel services , p. no. 3-4idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-958",
        "unit": "rohit steels, p. no. 84,85-86, idc, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-959",
        "unit": "rupali arts, p. no. 440, mie-a, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-960",
        "unit": "s.k. enterprises, p. no. 73 idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-961",
        "unit": "sagar steels & wires, p. no. 19, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-962",
        "unit": "sai nath industries, p. no. 2110, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-963",
        "unit": "shakti fastners, p. no. 90, idc, hissar road, rohtak,",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-964",
        "unit": "shiv process, p. no. 285 & 287,mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-965",
        "unit": "shree ganesh inds, p. no. 475, mie, bahaurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-966",
        "unit": "shv energy (p) ltd, p. no. 38, sec-31b, imt, distt. rohtak.",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-967",
        "unit": "steel services, p. no. 149, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-968",
        "unit": "sterling home innovator p ltd., p. no. 88 d, sector -16, hsiidc, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-969",
        "unit": "studio silkraft, p. no. 1757, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-970",
        "unit": "sun rise inds, p.no. 2047, mie, b/garh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-971",
        "unit": "united sanitation, p. no. 1258, mie, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-972",
        "unit": "vidhya dye chem, p. no. 1968, mie-b, bahadurgarh.",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "textile",
        "basin": "yamuna river",
        "agency": "iit roorkee"
    },
    {
        "code": "y-973",
        "unit": "shiv shakti auto components, plot no. 192, idc, hissar road, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-974",
        "unit": "b.k. automatics, plot no. 64, sector-31b, phase-2, imt, rohtak",
        "state": "haryana",
        "district": "rohtak",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-975",
        "unit": "chair dÃ©cor industries, plot no. 75, sector-16, hsiidc, bahadurgarh",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-976",
        "unit": "itzel bath (p) ltd, plot no. 18-19 and 35, udyog vihar, main delhi road, rohtak",
        "state": "haryana",
        "district": "jhajjar",
        "ro": "bahadurgarh",
        "sector": "others",
        "basin": "yamuna river",
        "agency": "cppri"
    },
    {
        "code": "y-977",
        "unit": "anupam tex processors pvt ltdplot no 21 dlf ind area phase 1 faridabad 9810027606",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-978",
        "unit": "bee k bee prints pvt ltdplot no 160 dlf industrial area phase 1 faridabad 9810011839",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-979",
        "unit": "bronze powder private limited13/3, mathura road, faridabad 9810125332",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-980",
        "unit": "color fabs private limited168 dlf industrial area phase-1 faridabad 9810263813",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-981",
        "unit": "color lineplot no 151 dlf indl area phase i faridabad 9999933727",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-982",
        "unit": "competent processors plot no, i 5-6 dlf industrial area phase- 1 faridabad 9810064845",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-983",
        "unit": "creative dyeing and printing mills pvt. ltd main mathura road faridabad 9871432089",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-984",
        "unit": "escorts limited plant 3plot 3 , sector 13 , faridabad , haryana 9910998855",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-985",
        "unit": "escorts limited, assembly plant ftplot no.2 , sector 13 , faridabad , haryana 9910998868",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "others",
        "basin": "yamuna",
        "agency": "jmi"
    },
    {
        "code": "y-986",
        "unit": "friends textile industriesa 15 dlf ind area phase i faridabad 121003 9871891414",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-987",
        "unit": "gunno knits pvt. ltd.91-91a, dlf indl. area, phase-1, faridabad-121003",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-988",
        "unit": "jansevak textile mills21 dlf industrial area phase ii faridabad 9810442507",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-989",
        "unit": "karma processors pvt. ltd.14/6 mile stone, mathura road, faridabad 9810005377",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-990",
        "unit": "kishmish crarftskabulpur khader patti parvarish manjhawali road neharpar faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-991",
        "unit": "kkk fabric processors pvt ltdplot no 72 sector 27 a faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-992",
        "unit": "r k textile industriesplot no.-17, dlf industrial area ph-ii, faridabad-121003",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-993",
        "unit": "richa industries limitedvillage kawnra old faridabad to kheri jasana road faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-994",
        "unit": "shahi exports pvt ltd ip 1 sector 28 9971888402",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-995",
        "unit": "shri jagdamba dyeing mills14/5 mile stone road faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-996",
        "unit": "spectrum creations pvt ltdplot no 50, sector 27a, faridabad 9811175000",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-997",
        "unit": "tirupati textilesplot no 37 sector 27 c faridabad 9810861585",
        "state": "haryana",
        "district": "faridabad",
        "ro": "faridabad",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-998",
        "unit": "a.a. autotech (p) ltd., plot no. 157-158, sector-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-999",
        "unit": "aaa products pvt ltd k no. 12/3/1 behrampur road, begampur khatola",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1000",
        "unit": "abhi automotives (p) ltd.plot no - 244, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1001",
        "unit": "achiever apparels pvt. ltd., plot no. a-7, info city, sector - 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1002",
        "unit": "acil limited, plot no. 53-54 sector-3, imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1003",
        "unit": "aesthetic living merchants pvt. ltd., plot no. 576 & 577, sector-37, pace city-2, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1004",
        "unit": "afflatus international plot no. 10, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1005",
        "unit": "afflatus international, plot no. 16, sector-6, imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1006",
        "unit": "afflatus internationalplot no. 12, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1007",
        "unit": "aggreko energy rental india pvt. ltd.,plot no.-136, sector-8, manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1008",
        "unit": "aims concept clothing pvt. ltd., plot no. b-4, sector - 34, info city, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1009",
        "unit": "ajay hardware industries pvt. ltd., 551-554, khandsa road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1010",
        "unit": "allied blenders & distillers pvt. ltd., 39 km milestone, delhi-jaipur highway, narsinghpur,gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1011",
        "unit": "allied jb friction pvt. ltd,, plot no. 440, sector 8, imt manesar, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1012",
        "unit": "alpha maier private limited, plot no 402 sector - 8, imt manesar, gurgaon(hr)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1013",
        "unit": "amani industries, plot no. 955, sector - 37, pace city ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1014",
        "unit": "borgwarner emissions systems india pvt. ltd., plot no. 19, sector-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1015",
        "unit": "amp superbikes pvt ltd plot no. b-9, sector - 33-34, info city, gurgaon (haryana)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1016",
        "unit": "ams electrocoat llp, plot no. 103, sector - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1017",
        "unit": "anand motor products pvt. ltd.,38 km stone, nh - 8, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1018",
        "unit": "anand nvh products (p) ltd39 k.m. stone, n.h.- 8, begumpur khatola industrial area, sector - 35, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1019",
        "unit": "anya enterprises exim pvt. ltd.plot no-960-961,pace city-ii,sector-37,gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1020",
        "unit": "eltex india private limited, plot no. 13, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1021",
        "unit": "pearlcoin pks india pvt ltdplot no 43, sector - 5, imt manesar, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1022",
        "unit": "art india, plot no. 366, udyog vihar, phase - vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1023",
        "unit": "aryan apparels private limited, plot no. 110, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1024",
        "unit": "ashnoor textile mills ltd, behrampur road, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1025",
        "unit": "ashoka electroplaters, plot no. 937-938 930, pace city-ii, sector-37, opp. honeywell international, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1026",
        "unit": "ask automotive (p) ltd, unit-vii, plot no.155-156, sector-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1027",
        "unit": "ask automotive pvt ltd (unit iii), plot no. 28, sector 4, imt, manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1028",
        "unit": "ask automotive pvt ltd (unit-iv), plot no 79, sector-6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1029",
        "unit": "ask automotive pvt ltd, plot no 446-d, sector-8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1030",
        "unit": "ask automotive pvt ltd. (unit-vi) plot no. 305, sector-6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1031",
        "unit": "atotech india ltd. 66 k. m. stone, nh 8, delhi jaipur highway, village sidhrawali distt. gurgaon 123413, haryana, india",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "chemical",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1032",
        "unit": "aum dacro coating c-445, pioneer industrial estate, bilaspur, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1033",
        "unit": "aum dacro coating, plot no. 91, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1034",
        "unit": "avery dennison india pvt ltd., narsinghpur industrial area, 6th kilometer stone delhi jaipur highway, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1035",
        "unit": "avon biwheeler accessories pvt. ltd., plot no. 421, sector- 8, imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1036",
        "unit": "bajaj motors ltd.- manesar plant 446-a, sector-8, imt manesar, gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1037",
        "unit": "bharti metal finishers pvt ltdplot no. 547-k, pace city -ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1038",
        "unit": "bindu export, plot no. 213, sector-4, phase-ii, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1039",
        "unit": "bliss impex 38 km stone delhi jaipur highway behrampur road khandsa gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1040",
        "unit": "bm processing industries(unit radhey sham tandon m 512, sector- 37, pace city - ii, gurgaon - 122001 , haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1041",
        "unit": "boutique international, plot no 553, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1042",
        "unit": "bridgestone india automotive products pvt. ltd., plot no. 11, sec-3, imt manesar, gurgaon-122050",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1043",
        "unit": "casewell drilling services private limitedplot no. 8-9, sector 7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1044",
        "unit": "chelsea mills, plot no-173-174, sect-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1045",
        "unit": "classic display systems private limited, plot no 109, sector 6 imt manesar, gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1046",
        "unit": "competent automobiles company limited, a-25, infocity, sector - 33-34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1047",
        "unit": "concept clothing, plot no 433 pace city ii sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1048",
        "unit": "concept clothing, plot no. 448, pace city-ii, sector-37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1049",
        "unit": "concept clothing, plot no. 528, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1050",
        "unit": "concept clothing, plot no. 666, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1051",
        "unit": "conquernt control systems pvt. ltd., plot no. 604-605, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1052",
        "unit": "continental automotive brake systems ( i ) pvt ltdplot no 179-180, sector-5, imt manesar,gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1053",
        "unit": "cosmic motors india private limited39 mile stone, sector 35, gurgaon (grace toyota)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1054",
        "unit": "creative print perfectionplot no. 149, udyog vihar, phase - vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1055",
        "unit": "crew b o s products limited plot no. 37, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1056",
        "unit": "dantal hydraulics private limited, plot no. 1c, sector -6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1057",
        "unit": "dantal hydraulics private limitedplot no. 50, sector-3, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1058",
        "unit": "dassan fashions private limited, a-5, info city, sector - 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1059",
        "unit": "dee emm electrocoats pvt. ltd.550-f, pace city-ii, sector-37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1060",
        "unit": "deep electroplators, plot no. 939/942, sec.- 37 pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1061",
        "unit": "degania medical devices pvt ltd., plot no 275, sector - 6, imt manesar, gurgaon hr 122050",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1062",
        "unit": "desiccant rotors international private limited, plot no. 442 sector-8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1063",
        "unit": "devyani international limited, plot no 124 and 125 phase vi udyog vihar sector37 gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1064",
        "unit": "dhanuka laboratories limited, 7th old manesar road, village - mohammadpur, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "pharmaceutical",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1065",
        "unit": "djs printers pvt. ltd., plot no. 100, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1066",
        "unit": "dynamic designs, plot no. 417/430, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1067",
        "unit": "dynamic polymers, plot no. - 927, sector- 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1068",
        "unit": "eih limited printing press plot no.-22, sector-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1069",
        "unit": "electrospark, plot not. 77, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1070",
        "unit": "elegant dyeing and processing limited, behram pur road,udyog vihar,phase vii,gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1071",
        "unit": "excel processors, plot no - 928 sector-37 pace city- ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1072",
        "unit": "fashion accessories, plot no. 408, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1073",
        "unit": "fashion accessoriesplot no. 16, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1074",
        "unit": "fashion accessoriesplot no. 363, sector 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1075",
        "unit": "fashion life, plot no. 914/915, sector - 37, pace city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1076",
        "unit": "flock sur india pvt ltd., 38 km stone nh 8 behrampur road khandsa gurgaon(hr)122002",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1077",
        "unit": "fns agro foods ltd.plot no-290, sector-6 imt manesar haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1078",
        "unit": "forza medi india pvt. ltd.,plot no. 79-80 sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1079",
        "unit": "forza medi india pvt. ltd.plot no. 166, sector-4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1080",
        "unit": "furest day lawson (india) pvt. ltd., 45 milestone, naurangpur, sector - 78, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1081",
        "unit": "galaxy elegant fashions pvt. ltd.,plot no. 19-20, sector - 7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1082",
        "unit": "ganga overseas pvt. ltd. (manesar)plot no. 17, sec. 5, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1083",
        "unit": "gesture apparels private limitedplot no 105 sector 6 imt manesar gurgaon (hr)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1084",
        "unit": "gkb rx lens p. ltd.a-15, info city, sec-34, gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1085",
        "unit": "gkb rx lens pvt ltd unit iiplot no. a-14, info city, sector - 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1086",
        "unit": "goswami fabricatirs and contractorscare of neel metal product ltdpace city ii sector 36 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1087",
        "unit": "green vortex waste management pvt ltdplot no 177, sector 7, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1088",
        "unit": "group shivab-6 & 7, infocity -1, sector -34, gurgaon - 122001",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1089",
        "unit": "gsp power systems pvt ltdvillage- begampur khataula nh-8 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1090",
        "unit": "guru kripa metal finishers, plot no. 933-934, pace city - 2, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1091",
        "unit": "h j fashions private limited, plot no. 590, pace city - ii, sector 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1092",
        "unit": "harish bakers and confectioners pvt ltd\n khasra no. 919-04 & 920-20, village khandsa, behrampur road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1093",
        "unit": "harpreet motors pvt. ltd. plot no. 29-30, sector-34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1094",
        "unit": "hector beverages pvt ltd plot no 132 sector 3 imt manesar gurgaon(hr)122050",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1095",
        "unit": "hi tech gears limited, plot no 24, 25 & 26, sector-7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1096",
        "unit": "himanshu apparels,plot no. 67, udyog vihar, phase - vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1097",
        "unit": "himgiri auto (india) pvt ltd., plot no - 15-16, sector - 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1098",
        "unit": "hytech automotive plot. no 169 sector 7 imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1099",
        "unit": "i i inspection export pvt ltdplot no 91 sector 4 imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1100",
        "unit": "i.r. accessories pvt. ltd., plot no. 154-l& m sector - 7, phase - ii, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1101",
        "unit": "iac international automotive india pvt ltdplot no. 18,sector -7 ,imt , manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1102",
        "unit": "imergy power systems india private limited, plot no. 732, sector - 37, pace city - ii, gurgaon haryana 122001",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1103",
        "unit": "imperial fastners private limitedbehrampur road, khandsa, behind hrec workshop. gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1104",
        "unit": "indo autotech limited plot no 132-133, sector-8,imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1105",
        "unit": "inspirations overseas,plot no. 36, udyog vihar, phase - vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1106",
        "unit": "instyle exports pvt ltd, plot no. 8, phase - vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1107",
        "unit": "ishvar international,plot no. 01, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1108",
        "unit": "isozyme processors private limitedplot no 125, sector 7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1109",
        "unit": "jain textile industries, 38 km stone delhi jaipur highway behrampur road khandsa gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1110",
        "unit": "jak group, plot no .704 p, sector -37, pace city-2, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1111",
        "unit": "jayati tools plot no. 428, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1112",
        "unit": "jbm textiles, plot no. 286-87, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1113",
        "unit": "jdm overseas pvt ltd, plot-115, sector-4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1114",
        "unit": "jeet arts,plot no. 67, sector - 7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1115",
        "unit": "johnson matthey india private limitedplot no. 12, sector 3, imt manesar, gurgaon 122050",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1116",
        "unit": "jyoti apparels, plot no.10, sector-5, imt manesar, gurgaon (haryana)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1117",
        "unit": "k and m garmen guardini india pvt ltdplot no. 640, pace city - ii, sector -37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1118",
        "unit": "kamal ced solutions llp plot no 287, sec-6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1119",
        "unit": "kamal ced solutions llp, plot no. 254, sec-6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1120",
        "unit": "karishma finishers pvt ltdplot no - 967-968, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1121",
        "unit": "katyaini internationalplot no. 181-182, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1122",
        "unit": "khushboo foods private limitedplot no 601 pace city ii sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1123",
        "unit": "kiran udyog pvt. ltd., plot no. 14, sector - 03, imt manesar, gurgaon (hr)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1124",
        "unit": "kiran udyog pvt. ltd., plot no. 32, sector - 03, imt manesar, gurgaon (hr)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1125",
        "unit": "knitcraft apparels international private limited, 929/2, behrampur road, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1126",
        "unit": "knitcraft apparels international private limited, 930/2, behrampur road, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1127",
        "unit": "krishna electroplaters, plot no. 950, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1128",
        "unit": "krishna maruti ltd 40-km stone, delhi-jaipur highway, narsinghpur, gurgon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1129",
        "unit": "krishna metafab pvt ltd, plot no 948 sec37 pace city ii gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1130",
        "unit": "kumar printers pvt ltd, plot no 24 sec 05 imt manesar gurgoan hr",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1131",
        "unit": "l s power control pvt ltd., c-441, ansal pioneer ind. park, vill.- patheri, bilaspur, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1132",
        "unit": "lyra industries, plot no. 90, sector - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1133",
        "unit": "m & m machine craft pvt. ltd.,darbaripur hasanpur road, village - kherki daula, nh - 8, delhi jaipur highway, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1134",
        "unit": "jmd poly plastplot no 351, udyog vihar phase vi , gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1135",
        "unit": "maadhav automotive fastners pvt ltd, plot no. 87-90, phase - vi, sector -37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1136",
        "unit": "maars autocorp pvt. ltd.,1557/949/2, behrampur road, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1137",
        "unit": "macks surface treatments pvt.ltd., plot no. 953, sector-37, pace city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1138",
        "unit": "maestro engineering pvt ltd., plot no. 96a & 97, udyog vihar, phase - 6, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1139",
        "unit": "magneti marelli powertrain india pvt. ltd., plot no. 1,sub plot no. 25 & 32, maruti suppliers park,sector â 3a, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1140",
        "unit": "mahavir die casterrs pvt. ltd, plot no. 114, sector-8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1141",
        "unit": "mahavir die casters pvt ltdplot no. 162, sector - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1142",
        "unit": "majestic auto components plot no. 209 & 210, sector - 6, imt maneasar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1143",
        "unit": "manifold e connect ltd., plot no-138 sector-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1144",
        "unit": "mankind research centre plot no. 191e, sector-4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "pharmaceutical",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1145",
        "unit": "mark exhaust system ltd39/7, begumpur khatola, n.h-8, delhi-jaipur highway, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1146",
        "unit": "mark exhaust systems ltd. unit 5plot no 159 160 sector 5 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1147",
        "unit": "mark exhaust systems ltdplot no.-74, sector-3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1148",
        "unit": "mars associates private limitedplot no. 23, sector - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1149",
        "unit": "marvel craft private limited, plot no. 584, pace city-ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1150",
        "unit": "mascot alloys pvt ltd, plot no-167. sec -3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1151",
        "unit": "matrix clothing pvt. ltd. plot-197, udyog vihar ,phase-vi , sector-37 , gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1152",
        "unit": "maxop engineering company private limited unit ii, plot 405, sector-7, imt manesar, gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1153",
        "unit": "maxop engineering company private limited unit iiiplot no. 209 & 210, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1154",
        "unit": "maxop engineering company private limited, plot no. 10 & 27, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1155",
        "unit": "mectech system pvt ltdplot no - 517-518, sec - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1156",
        "unit": "mega metals unit - iiplot no. 45-46, sector - 5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1157",
        "unit": "mega metalsplot no - 51, sector - 5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1158",
        "unit": "mega rubber technologies pvt. ltd.,plot no. 431, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1159",
        "unit": "mehar prints plot no. - 600, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1160",
        "unit": "mehsana district co op milk prod union ltdplot no 26 d sector 3 imt manesar dist gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1161",
        "unit": "meso metalwares pvt ltdplot no. 20-21, sector-6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1162",
        "unit": "metalex office system pvt. ltd, plot no 319 &316, sector-8, imt manesar, gurgaon, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1163",
        "unit": "micron surface treaters, plot no. 954,sector-37, pace city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1164",
        "unit": "millennium technotools pvt. ltd., plot no. 43 -44, sector 4, imt manesar, gurgoan",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1165",
        "unit": "mm creations, plot no - 69, sec. - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1166",
        "unit": "modern automotives ltd unit iv, plot no. 115 sector 8 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1167",
        "unit": "modern industries, plot no. 106, sector - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1168",
        "unit": "modern prefab systems pvt ltdplot 270-271-273-274, sector - 7, imt, manesar, gurgaon hr",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1169",
        "unit": "monochem graphics pvt. ltd.,plot no. 134, sector - 8, imt manesar, guragon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1170",
        "unit": "motherson sumi systems limitedplot no. - 195-196, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1171",
        "unit": "multilink plot no 88 sector 4 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1172",
        "unit": "n.s. electroplaters, plot no. 958, sector-37, pace city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1173",
        "unit": "nagata auto engineering india pvt ltd, plot no. c-463&464, pioneer industrial park, pathredi,gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1174",
        "unit": "namo fibers pvt ltdplot no. 707, pace city-2, sector-37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1175",
        "unit": "national engineering industries ltd. plot no. 163 imt manesar/sector 3",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1176",
        "unit": "navin internationalplot no. 932, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1177",
        "unit": "new era industries, plot no.612,sector-8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1178",
        "unit": "nifco india pvt. ltd. plot no. 122, sector 8, imt manesar industrial estate, gurgaon - 122050",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1179",
        "unit": "nihon kohnetsu india pvt. ltd.p-312, sector-7, imt manesar, gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1180",
        "unit": "nobel metal tech, plot no.- 940, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1181",
        "unit": "noorveer creations pvt ltd, plot no 191c sector 4 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1182",
        "unit": "ntf india pvt ltd plot no 49 sector 3 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1183",
        "unit": "ntf india pvt ltd., unit iii, plot no 204, sector 4, imt manesar, gurgaon hr",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1184",
        "unit": "nuflower foods and nutrition pvt ltd., plot no 303 sector 7 ii imt manesar gurgaon, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1185",
        "unit": "omax autos ltd.,plot no-06, sector-03, imt manesar, gurgaon (hr)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1186",
        "unit": "omega designs pvt ltd., plot no -343, sector - 37, udyog vihar phase - vi,khandsa gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1187",
        "unit": "orient craft limited, plot no. a-19, sector - 34, info city, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1188",
        "unit": "orient craft limited, plot 9 block a sector 33 34 infocity, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1189",
        "unit": "orient craft limited, plot no - 15, sector - 5, imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1190",
        "unit": "orient craft limitedplot no 360, pace city-ii, sector-37, phase -vi, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1191",
        "unit": "orient craft ltd plot no 3 4 5 udyog vihar phase vi sector 37 near khandsa , gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1192",
        "unit": "orient craft ltd plot no 7p, ehtp area, sector 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1193",
        "unit": "orient craft ltd., 761, plot no 761, sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1194",
        "unit": "orient craft sweaters limited, plot no. 32-33, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1195",
        "unit": "panex overseas, plot no 36 sector 4 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1196",
        "unit": "paramjyoti movers pvt ltd., plot no. 3, sector - 2a, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1197",
        "unit": "parth exports plot no 83, udyog vihar, phase vi, sector 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1198",
        "unit": "pasco motors llp 40 milestone nh 8 narsinghpur gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1199",
        "unit": "pci ltd., plot no. 300, imt manesar, sector-6, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1200",
        "unit": "pearl apparels, plot no. 74, udyog vihar, phase vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1201",
        "unit": "pearl global industries limitedplot no. - 16-17, udhyog vihar, phase - vi, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1202",
        "unit": "pearl honda a unit of kapsons engineers pvt ltd 554 pace city ii sector 37 gurgaon 122001",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1203",
        "unit": "pearlcoin pks india pvt ltdplot no 79 & 80b, sector - 5, imt manesar, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1204",
        "unit": "peters surgical india pvt. ltd.,plot no. 169, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1205",
        "unit": "plastic omnium auto inergy mfg. india pvt. ltd (formerly inergy automotives systems mgf. india pvt. ltd.)sub plot no. 6 & 7, maruti supplier park, plot no. 1, sector - 3a, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1206",
        "unit": "prasha technoglogies limitedplot no 162 sector 5 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1207",
        "unit": "precise seamless apparels pvt ltd plot no-762-763, pace city-ii, sector-37",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1208",
        "unit": "premas biotech pvt ltd, plot no. 77, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "pharmaceutical",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1209",
        "unit": "premier powder coating plot no. - 210 udyog vihar sector -37 phase- vi gurgoan (hr.)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1210",
        "unit": "primo foods pvt. ltd.plot no. 274, sector-6, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1211",
        "unit": "print shop engineers india private limited, plot no 550-b, pace city-ii, sector 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1212",
        "unit": "priyanka india private ltd., plot no. 107 sector - 8 imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1213",
        "unit": "pyoginam, plot no. 268, sector-7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1214",
        "unit": "qcd engineering india pvt. ltd.,plot no. 83, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1215",
        "unit": "qh talbros ltd.plot no. 51, sec. 03 imt manesar, gurgaon, hr.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1216",
        "unit": "quest diagnostics india pvt. ltda-17, infocity sector-34",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1217",
        "unit": "r.c. apparels, 38th milestone, delhi jaipur highway, behrampur road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1218",
        "unit": "raghbeer machinery pvt ltdvill-narsinghpur, nh-8, delhi jaipur highway, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1219",
        "unit": "ragnik exports private limited, plot no. a-4, info city, sector - 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1220",
        "unit": "rcjc, 38 km stone delhi jaipur highway behrampur road khandsa gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1221",
        "unit": "rgc incplot no - 450, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1222",
        "unit": "richa & co.plot no. 2, sector-5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1223",
        "unit": "richa and co, plot no. 30, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1224",
        "unit": "richa global exports pvt. ltd.plot no. 3, sector-4, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1225",
        "unit": "rico aluminium and ferrous auto component ltd, plot no.84, sector-8,imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1226",
        "unit": "rico jinfei wheels limited, plot no - 397, sector - 8, imt, manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1227",
        "unit": "right guard rubber pvt. ltd. plot no. 12 sector 2a imt manesar . gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1228",
        "unit": "rolex hosiery pvt. ltd., plot no. 24, sector-4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1229",
        "unit": "rolex hosiery pvt. ltd.plot no. - 157, sector - 4, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1230",
        "unit": "roop automotives ltd, 439 sec 8 imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1231",
        "unit": "roop automotives ltd., plot no. 440, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1232",
        "unit": "safdarjang motors private limited, plot no. 552, sector - 37, phase - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1233",
        "unit": "sagar steels, plot no 367 and 368 pace city 2 sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1234",
        "unit": "sahana fashions private limited, plot no. 486, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1235",
        "unit": "samyak metals pvt. ltd.,plot no. 719, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1236",
        "unit": "sandhar automach, manesar plot no. 44, sec. 3, imt, manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1237",
        "unit": "sankei pragati india private limited plot-b 101-103 pioneer industrial park, village-pathreri, bilaspur-tauru road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1238",
        "unit": "sansera engineering private limited, plot no. 22 & 23, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1239",
        "unit": "sanya internationalplot no 195d udyog vihar phase-vi sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1240",
        "unit": "sarita handa export pvt ltdplot no 29,sector-iv,imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1241",
        "unit": "sbs international pvt. ltd.plot no. 179-179a sector-3, imt manesar, gurgaon,haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1242",
        "unit": "sebros auto private limitedplot no. 181, sector - 5, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1243",
        "unit": "sgm paper productsplot no, 183 sector- 4 imt manesar gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1244",
        "unit": "sgs india private limited, plot no 21 sector 3 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1245",
        "unit": "sharda motor industries ltd c-506,pioneer industrial park pathredi gurgan",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1246",
        "unit": "shiva enterprises, plot no. 929, sector - 37, pace city - 2, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1247",
        "unit": "shoba design pvt. ltd.plot no. 451-p, sector-37, pace city-ii, gurgaon-122001",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1248",
        "unit": "shree hanuman enterprises mohammadpur jharsa sector 36 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1249",
        "unit": "shree krishna metal finishers, plot no- 964 pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1250",
        "unit": "shri vishwakarma industries, d-110, phase - vi, sector - 37, gurgaon\\",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1251",
        "unit": "shriram enterprises, plot no. 65, sector 7 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1252",
        "unit": "sidh auto industries, plot no. 51, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1253",
        "unit": "sigma brassage fittings pvt ltd., plot no. 82, sector - 7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1254",
        "unit": "sigma corporation india ltd., plot no 91, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1255",
        "unit": "sigma moulds and stampings pvt ltd plot no 149-151 sector 5 imt manesar gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1256",
        "unit": "skh magneti marelli exhaust systems pvt ltd., plot no-23, sector-3 a, maruti supplier park, imt manesar, gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1257",
        "unit": "skh metals limitedplot no 13,14&24 jv msil imt manesar gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1258",
        "unit": "speculum plast pvt. ltd.plot no. 261, sector-7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1259",
        "unit": "spinks softech p ltd., plot no 177 sector 4 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1260",
        "unit": "spirit clothing companyplot no-562, pace city-2, sector-37, gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1261",
        "unit": "spring overseas pvt ltd plot no. 310, sectore -7, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1262",
        "unit": "ss enterprisesplot no. 943-944-945, sector-37, opp. honeywell, pace-city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1263",
        "unit": "standard coatings,plot no. 969. electroplating zone, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1264",
        "unit": "sterling mobikes pvt.ltd., plot no. 26 sector-34 gurgoan(haryana)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1265",
        "unit": "stork rubber products pvt. ltd., stork building, 38 k.m. stone, nh-8, behrampur road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1266",
        "unit": "sudhar metals and alloys, darbaripur hasanpur road, village - kherki daula, nh - 8, delhi jaipur highway, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1267",
        "unit": "sudhir power ltd.,plot no. 92, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1268",
        "unit": "suminoe teijin techno krishna india pvt. ltd.plot no. 437, sector -8 imt manesar-gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1269",
        "unit": "suneel auto comp private limitedplot no. 765, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1270",
        "unit": "sunmax auto engineering pvt. ltd.,plot no. 180-180a, sector - 3, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1271",
        "unit": "sunvacuum former pvt ltd. plot no. 408, sector-7. imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1272",
        "unit": "super bright, 918, sec-37, pace city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1273",
        "unit": "super glitzplot no. 70, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1274",
        "unit": "superon schweisstechnik (india) ltdplot no - 552, sector - 37, phase - 2, 1st floor, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1275",
        "unit": "superon schweisstechnik india ltd., industrial estate plot no 35 sector 35 gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1276",
        "unit": "supreme enterprises, plot no 754 phase ii sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1277",
        "unit": "tahiliani design pvt. ltd.,plot no. 708, pace city - ii, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1278",
        "unit": "talbros marugo rubber pvt ltdplot no. 108-109, sector-08, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1279",
        "unit": "tech four industries pvt. ltd., plot no. 579, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1280",
        "unit": "tets 'n' rai, plot no. 42, sector - 4, imt manesar, gurgaon,",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1281",
        "unit": "tex n nets 38 km stone nh 8 929/2 behrampur road khandsa gurgaon(hr)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1282",
        "unit": "tiger eye vehicle services pvt ltdplot no.-25, sector-34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1283",
        "unit": "tsl electropower p ltd., timken services pvt. ltd. plot no. 138, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1284",
        "unit": "tricolite electrical industries limitedplot no 5 & 32 sector-6, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1285",
        "unit": "trimco enterprisesplot no 194 sector 3 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1286",
        "unit": "triumph auto engg pvt ltd38th milestone delhi jaipur highway behrampur road khandsa gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1287",
        "unit": "tulip institutional services private limitedplot no. 701, sector - 37, near udyog vihar phase -vi, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1288",
        "unit": "u and m overseas pvt ltdplot no. 301, sector - 6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1289",
        "unit": "ul quality assurance pvt. ltd., plot no. 12, info city, phase - i, near hero honda chowk, sector - 34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1290",
        "unit": "ultratech cement limited unit: ultratech concrete38 milestone, behrampur road, khandsa chowk, gurugram (rmc)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1291",
        "unit": "uniflock international limited38 km stone nh 8 behrampur road khandsa gurgaon(hr) 122004",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1292",
        "unit": "unilec engineers limited, begampur khatola road, behrampur industrial area, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1293",
        "unit": "unique wears pvt. ltd.plot no 175 sector 3 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1294",
        "unit": "unitech machines limited, plot no 28 sector 2a manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1295",
        "unit": "v and s international pvt ltd38th km milestone, delhi jaipur highway, behrampur road, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1296",
        "unit": "vee kay industries912, sector-37, pace city- ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1297",
        "unit": "velca racking systems pvt. ltd.,plot no. 281, sec.-7, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1298",
        "unit": "vikrant engineering, plot no. 924, sector 37, pace city ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1299",
        "unit": "vineetaz exports pvt ltdkhandsa road behrampur mohammadpur gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1300",
        "unit": "viney corporation limited, plot no. 42, sector-3, behind esic hospital, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1301",
        "unit": "virender textiles, plot no. 374, udyog vihar, udyog viihar, phase - vi, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1302",
        "unit": "west wind concepts (p) ltd278/279, udyog vihar, phase-vi, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1303",
        "unit": "wilhelm textiles india private limited, 38 km stone delhi jaipur highway behrampur road khandsa gurgaon haryana 122001",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1304",
        "unit": "yudhishthra kapur exports pvt ltd, plot 434, sector-8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1305",
        "unit": "zenica performance cars pvt ltd, khasra no - 1169, behrampur road, khandsa, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1306",
        "unit": "ashi creation pvt ltd., plot no. b-4, sector - 34, info city, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1307",
        "unit": "trend setters international, plot no. 593, sector - 37, pace city - ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1308",
        "unit": "tirlok dyeing operated by suresh kumar, village - gharaulli, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1309",
        "unit": "eap powder coating, plot no. 173-174, udyog vihar, phase - vi, sector - 37, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1310",
        "unit": "sonakshi industries plot 445 446 pace city ii sector 37 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1311",
        "unit": "sar coating llp, plot no.8, sector-6, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1312",
        "unit": "gold brake lining, plot no. 308-c, sector - 6, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1313",
        "unit": "samvardhana motherson auto component pvt ltd\nplot no 351 sector 8 imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1314",
        "unit": "appl industries limited\nplot no. 82, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1315",
        "unit": "segen engineers pvt ltd, plot no - 409, sector - 8, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1316",
        "unit": "santec hydrofluid engineers, plot no 193 sector 8 imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1317",
        "unit": "l g balakrishnan and bros limited, plot no 17 sector 3 imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1318",
        "unit": "om sai power technology, plot no-58, sec-4, imt manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1319",
        "unit": "devyani international limited sector 35, plot no 18 sector 35 gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1320",
        "unit": "akriti printers\nplot no. 272,sector-7,imt manesar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1321",
        "unit": "i r acessories pvt. ltd -unit-ii\n75-76 sector-7 i m t manesar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1322",
        "unit": "alok fashions, plot no b-29, infocity sector-34, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1323",
        "unit": "kamal ced solutions llp\nplot no. 47, sector-6, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1324",
        "unit": "united hitech finishers llp\n139 g, sector 7, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1325",
        "unit": "naveen industries, near jbm industry, plot no.6, khandsa road, near sector-37, pace city-ii, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1326",
        "unit": "shiva profins pvt. ltd., 4th floor, the plaza, m.g.road, gurugram, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1327",
        "unit": "millennium technotools pvt. ltd., plot no. 10, sector 7, imt manesar, gurgoan",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1328",
        "unit": "stericat gutstrings pvt. ltd.,\nplot no. 169, sector - 4, imt manesar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1329",
        "unit": "ample foods pvt. ltd., plot no. 127, sector-6, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1330",
        "unit": "san international, #412, pace city - ii, sector 37, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1331",
        "unit": "ms decorator, plot no. 167, sector - 4, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1332",
        "unit": "avaids techvators pvt. ltd., plot no.184-a & 185, sector-5, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1333",
        "unit": "zigma manufacturing processing, plot no.139-c, sector-07, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1334",
        "unit": "numero uno clothing ltd., plot no.408, sector-08, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1335",
        "unit": "drishti lifestyle, plot no-139-d, sector-07, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1336",
        "unit": "stryker global tehnology center pvt. ltd., plot no.340, sector-8, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1337",
        "unit": "sri nisons wiring system pvt. ltd., plot no.382, sector-8, imt manesar, gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1338",
        "unit": "shree durga udyog, 614/22, shivaji park, khandsa road (behind mata mandir) gurugram",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1339",
        "unit": "anish india exports, plot no. 19-20, ph-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1340",
        "unit": "bhalla chemical works (p) ltd., daultabad road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "chemical",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1341",
        "unit": "chirjeev industries,plot no.317, ph-ii, u.v, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1342",
        "unit": "dee emm industries, b-22, idc mehrauli road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1343",
        "unit": "gaurav international , plot no. 236, phase-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1344",
        "unit": "gaurav international, plot no. 411, phase-iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1345",
        "unit": "gaurav international, plot no.225, phase- i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1346",
        "unit": "global exchange , plot no. 30, sector- 18, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1347",
        "unit": "imperial malt ltd., vill. ghasola, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1348",
        "unit": "nirmal textiles pvt. ltd., # 8,idc mehrauli road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1349",
        "unit": "pragati coatings pvt. ltd., 1/5 k.m. stone, khandsa road, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1350",
        "unit": "richa & co., plot no 389 ph iii udyog vihar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1351",
        "unit": "richa & company,, plot no.239, ph-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1352",
        "unit": "richa global exports pvt. ltd., (old namr gaurav international), plot no. 151, phase-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1353",
        "unit": "shivank udyog ltd.,plot no. 671-673, udyog vihar, ph-v, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1354",
        "unit": "symphony prints, 2916, kataria complex, industrial area, daultabad road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1355",
        "unit": "tha malt co., khandsa road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1356",
        "unit": "vishesh overseas,plot no. 430, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1357",
        "unit": "cassic dials 373 phase ii udyog vihar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1358",
        "unit": "eltex india pvt. ltd., plot no. 887, phase-v, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1359",
        "unit": "munjal showa ltd, plot no-9-11, maruti industrial area, sector-18, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1360",
        "unit": "pearl global ltd., plot no. 446, udyog vihar ph-v, gurgoan",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1361",
        "unit": "pearl global, plot no. 73, phase-i, udyog vihar, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1362",
        "unit": "s & r exports,plot no. 298, udyog vihar, phase-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1363",
        "unit": "s.s. international, plot no. 115, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1364",
        "unit": "enco engineer combine, plot no. 75, maruti indatrial complex, sector-18, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1365",
        "unit": "lumax industries ltd., plot no.16, sector 18, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1366",
        "unit": "richa & co.,plot no.-192,phase-i,udyog vihar,gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1367",
        "unit": "ravels apparels pvt, ltd.,g.p. 46, sec-18, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1368",
        "unit": "stalwart exports (p) ltd., plot no. 410-411, uv, iv, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1369",
        "unit": "addagio overseas, plot no. 195, phase - iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1370",
        "unit": "akriti creations, plot no. 410, phase-iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1371",
        "unit": "balaji engineering works, 27-b, idc, mehrauli road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1372",
        "unit": "bar malt india, jharsa road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1373",
        "unit": "bharat export overseas, plot no. 493, phase-iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1374",
        "unit": "brunswick investments,plot no. 629-630, phase-v,udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1375",
        "unit": "campari exports, plot no. 517, phase - iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1376",
        "unit": "chintoo creation, plot no. 295, phase-ii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1377",
        "unit": "choice clothing (p) ltd, plot no. 332, 357, phase-ii,udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1378",
        "unit": "cmg coats ,kh no. 5564/195-198, daultabad raod, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1379",
        "unit": "danone food & beverages india pvt. ltd., gp - 53, sector - 18, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1380",
        "unit": "destini india ltd., kherki majra road, dhankot, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1381",
        "unit": "dhir international pvt ltd., plot no. 299,phase-2,udyog vihar",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1382",
        "unit": "enrich agro food products ltd., p.no. 276-77, ph-ii, uv, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1383",
        "unit": "ess & bee international, plot no. 669-670, ph-v, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1384",
        "unit": "foremost india exports, plot no. 70-71, phase-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1385",
        "unit": "fredbi fashions,plot no. 119, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1386",
        "unit": "friends garments, plot no.605, udyog vihar, ph-v, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1387",
        "unit": "ganga overseas pvt. ltd., plot no 647-648 phase-v, udyog vihar, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1388",
        "unit": "graffiti exports,plot no. 377, phase ii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1389",
        "unit": "haryana industries,plot no. 318, phase-ii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1390",
        "unit": "hema engg. industries ltd., khandsa road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "amu"
    },
    {
        "code": "y-1391",
        "unit": "hero moto corp, sector-33, n.h.-8, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1392",
        "unit": "hi- fashion clothing co., railway road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1393",
        "unit": "himanshu apparels, plot no 258 udyog vihar phase 4, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1394",
        "unit": "i.i. inspection, plot no. - 95, phase - i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1395",
        "unit": "indian hand fab,plot no.92, uv, ph-i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1396",
        "unit": "industriano (p) ltd., opp. new court, sohna road , gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1397",
        "unit": "instyle exports pvt. ltd., plot no. 134, phase-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1398",
        "unit": "internet exports (india) ltd., plot no. 202, phase - i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1399",
        "unit": "jay bharat maruti ltd., plot no. 5, mjv complex, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1400",
        "unit": "jyoti apparels, plot no. 158, phase - i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1401",
        "unit": "kailash ribbon factory ltd.,plot no. 403, phase-v, udyog vihar, gurgaon (krf ltd.)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1402",
        "unit": "kalamkari design pvt ltd. plot no 121 pace city-i sector-37,gurgaon (ritika)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1403",
        "unit": "karigars , plot no.251, phase-ii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1404",
        "unit": "kautilya industries (p) ltd.plot no. 190, phase-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1405",
        "unit": "knitcraft apparels international,#490-491, ph-iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1406",
        "unit": "l.g enterprises, 12, idc mehrauli road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1407",
        "unit": "lyra industries, plot no. 155 phase i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1408",
        "unit": "m.h.k. exports pvt. ltd., plot no. 882, phase v, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1409",
        "unit": "mac exports ,plot no. 143, phase-1, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1410",
        "unit": "magsons exports ,plot no. 41-42, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1411",
        "unit": "maharani of india, plot no 417 udyog vihar phase iii gurgaon haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1412",
        "unit": "maruti udyog ltd.(maruti suzuki automobile india ltd.), palam gurgaon road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1413",
        "unit": "milestone switchgears pvt. ltd., plot no. 97, udyog vihar phase-i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1414",
        "unit": "modelama export ltd., plot no.105-106, udyog vihar, ph-i, gurgoan",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1415",
        "unit": "modern hi-tech auto products, sect. 18, main road, vill. sarhaul, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1416",
        "unit": "mona trends pvt. ltd, plot no. 146, udyog vihar phase i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1417",
        "unit": "mph networks private limited, plot no. 188, phase-i, udyog vihar, gurgaon, haryana",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1418",
        "unit": "neetee clothing pvt. ltd., plot no. 218, udyog vihar, phase-1, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1419",
        "unit": "om enterprises, plot no. 1496/31, indl area, daltabad road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1420",
        "unit": "orchid overseas,plot no. 133, phase-i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1421",
        "unit": "orient craft ltd.,plot no.7-d, sector-18, maruti indatrial area, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1422",
        "unit": "orient fashion exports india pvt ltd, 488-89, phase 3, udyog vihar, gurgaun",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1423",
        "unit": "pearl global, plot no. 274, phase-ii, udyog vihar, gurgaon.(gopal clothing)",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1424",
        "unit": "q.h. talbros ltd. , plot no. 400, phase-iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1425",
        "unit": "radnik exports, plot no 186 phase-i udyog vihar gurgaon(hr)122016",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1426",
        "unit": "radnik exports, plot no. 215, udyog vihar, phase-i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1427",
        "unit": "rakheja enterprises, plot no. 74, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1428",
        "unit": "rakushka international (p) ltd. plot no. 280, udyog vihar, phase-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1429",
        "unit": "rangi inernational (p) ltd. plot no. 98, phase-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1430",
        "unit": "richa global exports pvt. ltd, 232, ph-i, udyog vihar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1431",
        "unit": "richa global exports pvt. ltd, 294, ph-ii, udyog vihar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1432",
        "unit": "richa global, #871, ph-v, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1433",
        "unit": "rohit enterprises, plot no. 8a, idc mehrauli road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1434",
        "unit": "rolex hosiery (p) ltd. plot no. 7, idc, mehrauli road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1435",
        "unit": "s.a.n. impex, plot no. 255, phase-1, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1436",
        "unit": "s.a.n. international # 289, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1437",
        "unit": "s.k. engineering works, plot no.361,phase-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1438",
        "unit": "sabo hema automative pvt. ltd., 1/3 km stone, khandsa road, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1439",
        "unit": "sahib shakti india, 616, vishvkarma nagar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1440",
        "unit": "sahil auto components pvt. ltd. (sahil enterprises), daultabad road, opp bhalla chemical, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1441",
        "unit": "sangar overseas, plot no. 304, phase-iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1442",
        "unit": "sargam exports ltd. plot no. 154, udyog vihar, phase i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1443",
        "unit": "shiva kriti export, 659, ph-v, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1444",
        "unit": "shivom enterprises, daultabad road, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1445",
        "unit": "sigma industries, 769, udyog vihar, phsse 5",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1446",
        "unit": "singh export (suri impex), plot no. 211, ph-i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1447",
        "unit": "skh metals ltd. (mark auto india.ltd.), plot no. 2,maruti joint venture complex,gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1448",
        "unit": "spark, plot no. 166, phase - i, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1449",
        "unit": "sunderkraft clothing pvt. ltd., plot no. 322, phase - iv, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1450",
        "unit": "super auto industries, # 281/3, surat nagar, daultabad road, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1451",
        "unit": "surya fashion craft pvt., ltd.,plot no. 253, udyog vihar, phase-iv, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1452",
        "unit": "taurus home furnishing ltd, # 418, phase-iii, udyog vihar, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1453",
        "unit": "trw sun steering wheels pvt. ltd. , plot no-35, huda indatrial area, sector-18, gurgaon.",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1454",
        "unit": "unique collectcion phase-i, udyog vihar gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit delhi"
    },
    {
        "code": "y-1455",
        "unit": "vision precision pvt. ltd.plot no.102, sector-37, pace-city-i, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "gurugram region (n)",
        "sector": "others",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1456",
        "unit": "abc impex (p) ltd., plot no. 271, sector-29, part-ii, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1457",
        "unit": "faze-3 ltd., opp. bbmb, resi. colony (near sector-29, huda water tanki), g.t. road, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1458",
        "unit": "haryana organics, 4 km stone, chulkana road, samalkha, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1459",
        "unit": "kapoor industries, g.t. road, village machhrauli, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1460",
        "unit": "kapoor industries, plot no.301, sector-29, part-ii, huda, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1461",
        "unit": "national fertilizers ltd., gohana road, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "fertilizer",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1462",
        "unit": "nestle india ltd., post box no.1, pattikalyana, kiwana road, samalkha, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1463",
        "unit": "panipat co-operative sugar mills (distillery unit), gohana road, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1464",
        "unit": "panipat naphtha cracker project a unit of indian oil, vill. baljattan, tehsil madlauda, panipat refinery, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "petrochemical",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1465",
        "unit": "panipat oil refinery and px pta petrochemical, iocl, village-baholi dist-panipat 132140",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "oil & refinery",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1466",
        "unit": "riviera home furnishing (p) ltd., plot no.235-237 & 264-266, sector-29, part-ii, huda, panipat",
        "state": "haryana",
        "district": "panipat",
        "ro": "panipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1467",
        "unit": "friends enterprises, v.p.o. bijna, moonak road, gharaunda, karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1468",
        "unit": "modern dairies limited, village shamgarh, p.b. no. 3, #136 k.m., g.t. road, karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1469",
        "unit": "kamal leathers, v.p.o. kachhwa, karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1470",
        "unit": "piccadilly agro industries, distellaray unit, vill. bhadson, indri, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1471",
        "unit": "aashima tanners, newal to mugal mazra road, kunjpura, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1472",
        "unit": "piccadilly agro industries sugar unit, bhadson, indri, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1473",
        "unit": "hafed sugar mill, vill- phaphrana, assandh, distt. karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1474",
        "unit": "the karnal coop. sugar mills ltd., # 3km stone, meerut road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1475",
        "unit": "karnal milk food limited, 134km stone, g.t. road, village dadupur, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1476",
        "unit": "goodrich carbohydrates ltd ( for glucose division) (goodrich nutriesters) negla megha , meerut road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1477",
        "unit": "bharat gluco industries (p) ltd., village pakhana, nadana road, taraori, karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1478",
        "unit": "liberty shoes limited, 17th mile stone, g.t. road, gharounda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1479",
        "unit": "goodrich foodtech limited ( formerly name goodrich malt), village nagla,meerut road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1480",
        "unit": "kohinoor textile processing house pvt. ltd., v.p.o. kohand, near shani mandir, g.t. road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1481",
        "unit": "model dairy plant, ndri, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1482",
        "unit": "north west paperkraft chirao mor, kaithal road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1483",
        "unit": "ndri (national dairy research institute), ndri complex, karnal .",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1484",
        "unit": "javi home pvt. ltd., (old name sabare international ltd). , vill-alipur khalsa, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1485",
        "unit": "bharti milk foods pvt. ltd., mugal majra road, vill-kunjpura road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1486",
        "unit": "jai tubes, kunjpura road, power house, village newal, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1487",
        "unit": "nirmal industry, near mitc, meerut road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1488",
        "unit": "shri ram & sons, plot no. 32, near i.t.i., kunjpura road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1489",
        "unit": "shri ram agro industries, # 56/3, hsidc, karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1490",
        "unit": "shree shanti tubes, vill- badli, liberty chowk, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1491",
        "unit": "super enterprises, vill- newal, kunjpura road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1492",
        "unit": "hare krishna industries, vill- alipur khalsa, gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1493",
        "unit": "g.g. international pvt. ltd., alipur khalsa, tehsil- gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1494",
        "unit": "haryana liquors (p) ltd., vill. jundla, distt. karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1495",
        "unit": "vijay modern loomtex private limited, village alipur khalsa khotpura road, ghauranda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1496",
        "unit": "m.d.j. texco fab. (p) ltd., vill. alipur khalsa khotpura road, tehsil gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1497",
        "unit": "goodrich carbohydrates limited, nagla megha( margain) meerut road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1498",
        "unit": "shree krishna enterprises, vpo harisingh pura, gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1499",
        "unit": "damodar texo fab, vpo-harsinghpur,pundri road,teh-gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1500",
        "unit": "s r r impex, arainpura road, gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1501",
        "unit": "javi home private limited unit-2, village-alipur khalsa,tehsil-gharaunda,distt-karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1502",
        "unit": "big foods private limited, vill sonkara, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1503",
        "unit": "s s international, village faridpur distt karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1504",
        "unit": "khurana blankets pvt ltd, village faridpur, tehsil gharaunda, distt karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1505",
        "unit": "goodrich cereals, village nagla, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1506",
        "unit": "rsl distilleries private limited, village chandrao, hadbast 10, indri, karnal.",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1507",
        "unit": "neelmani home furnishings llp, barsat road, village barsat karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1508",
        "unit": "shiv shakti knit fabs, village alipur khalsa, tehsil gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1509",
        "unit": "shiv shakti spuntex, village harsinghpura, tehsil gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1510",
        "unit": "vardhman texo fabs, alipur khalsa, khotpura road,kohand, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1511",
        "unit": "asia home furnishing, vill- alipur khalsa, near shiv dharam kanta, teh- ghauronda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1512",
        "unit": "micro international, vill- alipur khalsa, teh- gharaunda, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1513",
        "unit": "green gold cold stores, village margaine meerut road, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1514",
        "unit": "balaji spinning mills, alipur road kohand, karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1515",
        "unit": "allysa home furnishing, village barsat, tehsil gharaunda, district karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1516",
        "unit": "rugs creation, village alipur khalsa, tehsil gharaunda, district karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1517",
        "unit": "cake studio, h. no. 280a gurunanakpura near hansi chowk karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1518",
        "unit": "jai mahavir hometex, vill- barsat, near victor international school, teh- ghauronda, distt-karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1519",
        "unit": "galaxy overseas, village alipur khalsa tehsil gharaunda karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1520",
        "unit": "birmi overseas pvt ltd, vpo barsat tehsil gharaunda distt karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1521",
        "unit": "platinum textile world vpo pundri faridpur road tehsil gharaunda distt karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1522",
        "unit": "s s international, village barsat tehsil gharaunda karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1523",
        "unit": "aarti yarnfab private limited, village alipur khalsa tehsil gharaunda district karnal",
        "state": "haryana",
        "district": "karnal",
        "ro": "karnal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1524",
        "unit": "classic gravure pvt. ltd., plot no. 39, hsiidc, ph-iv, sector-57, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1525",
        "unit": "concept & solutions metfab pvt. ltd., plot no. 77, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1526",
        "unit": "dayanidhi textiles pvt. ltd., 491, hsiidc, ph-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1527",
        "unit": "deepak enterprises, 262, industrial estate, hsiidc, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1528",
        "unit": "denim art, plot no. 523 d, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1529",
        "unit": "euro threads pvt. ltd., 343, hsiidc, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1530",
        "unit": "eurospa terry towels pvt. ltd, plot no. 481, barhi, hsiidc, ph-ii, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1531",
        "unit": "farmgate agro milch pvt. ltd. (daily food), 79-80, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1532",
        "unit": "fastek zippers india pvt. ltd., plot no. 1779, hsiidc, rai, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1533",
        "unit": "fine dyeing, plot no. 400-401, hsiidc, barhi, distt. sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1534",
        "unit": "first pure diet milk products, plot no. 325, ph-i, hsiidc, indl. estate, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1535",
        "unit": "flora dyeing house (p) ltd., 392, hsiidc, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1536",
        "unit": "fns international pvt. ltd., plot no. 313-314 & 315, epip, indl. estate, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1537",
        "unit": "focus enterprises, plot no. 373, sec-57, ph-iv, industrial estate, kundli, sonipat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1538",
        "unit": "g.c.r. dyeing, 342, hsiidc, indl. estate, barhi, ph-i, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1539",
        "unit": "g.s. setia & brothers pvt. ltd., plot no.155, hsiidc, kundli, phase-ii,sonipat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1540",
        "unit": "gee aar thread pvt. ltd., plot no. 655, indl. estate, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1541",
        "unit": "geeta interfab (p) ltd., plot no. 5, ph-iv, sector-57, hsiidc, kundli, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1542",
        "unit": "generous textiles pvt. ltd., plot no. 383, hsiidc, ph-i, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1543",
        "unit": "global enterprises, plot no. 656, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1544",
        "unit": "globe india, 777, hsiidc, rai, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1545",
        "unit": "heritage foods ltd., plot no. 496-497 ph-i, hsiidc, rai, distt. sonipat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1546",
        "unit": "hpl electric & power limited (old name hpl electric & power pvt. ltd.), plot no. 76b, phase-iv, sector-57, hsiidc, indl. area, kundli, distt. sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1547",
        "unit": "hue plus industries, plot no. 429, hsiidc, ph-i, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1548",
        "unit": "jai ambey enterprises, plot no. 79, phase-iv, indl. area, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1549",
        "unit": "jai roop narrow fabrics, plot no. 110, ph-i, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1550",
        "unit": "jai roop textiles pvt. ltd., plot no. 191, hsiidc, indl. estate, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1551",
        "unit": "jain brothers sanitation pvt. ltd., plot no. 370-372, hsiidc, indl. estate, ph-iv, kundli, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1552",
        "unit": "jsg innotech pvt. ltd., plot no. 63, sector-53, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1553",
        "unit": "jyoti dhaga udyog pvt. ltd., plot no. 406, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1554",
        "unit": "k.m. poly-yarn pvt. ltd., plot no. 512, ph-ii, indl. estate, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1555",
        "unit": "kanodia intercontinental pvt. ltd. (old name mantra overseas), plot no. 8 & 9, hsiidc, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1556",
        "unit": "kanodia international pvt. ltd., plot no. 300-1, sector-53, epip, indl. estate, hsiidc, kundli, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1557",
        "unit": "m.k. dyeing, 98, hsiidc indl.estate barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1558",
        "unit": "madni textile mills pvt. ltd., plot no. 387-388, ph-i, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1559",
        "unit": "magnet inds., plot no. 230, hsiidc, indl. area, barhi",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1560",
        "unit": "maha luxmi overseas, plot no. 218, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1561",
        "unit": "manohar filaments (p) ltd., plot no. 531-532, phase-ii, hsiidc, barhi, distt. sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1562",
        "unit": "milton cycle industries ltd., indl. area, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1563",
        "unit": "modern dyeing pvt. ltd., plot no. 527, hsiidc, phase-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1564",
        "unit": "modern fabric pvt. ltd., 154, phase-ii, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1565",
        "unit": "nagpal trading company, 167, hsiidc, industrial area, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1566",
        "unit": "natraj home furnishing pvt. ltd., plot no. 666-667, hsiidc, ph-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1567",
        "unit": "nutex knit fab, 359, hsiidc, barhi",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1568",
        "unit": "oasis texfab india, plot no. 500, hsiidc, ph-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1569",
        "unit": "omega components (j.a. electronics), plot no.172, phase-iv, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1570",
        "unit": "oriental rug co., plot no. 480, hsiidc, ph-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1571",
        "unit": "parag milk foods ltd. (old name danone foods & beverages india pvt. ltd.), plot no. 2266-68, phase-ii, food park, hsiidc, indl. estate, rai, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1572",
        "unit": "pentagun fabrics, 125, hsiidc, indl. estate, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1573",
        "unit": "rajasthan kniting mills, plot no. 46, indl. estate, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1574",
        "unit": "rakesh textiles, plot no. 240, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1575",
        "unit": "ram kishan & co., 499, ph-ii, indl. area, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1576",
        "unit": "riba textiles ltd., vill. chidana, teh. gohana, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1577",
        "unit": "s.g. star drinks pvt. ltd., plot no. 394, hsiidc, rai, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1578",
        "unit": "s.s. engineering works, 783, phase-v, hsiidc, rai, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1579",
        "unit": "sachin dyers, 28, indl. estate, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1580",
        "unit": "sakshi creation, plot no. 16, hsiidc, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1581",
        "unit": "samarth industries, 384, hsiidc, ph-i, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1582",
        "unit": "sanjeev enterprises, plot no. 111, ph-01, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1583",
        "unit": "sarveshwari engineers, 430, epip, indl. estate, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1584",
        "unit": "shadex creations, plot no. 661, hsiidc, ph-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1585",
        "unit": "sharan elecmech pvt. ltd., plot no. 349, phase-iv, sector-57, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1586",
        "unit": "shivalik processor namely darshna textile, plot no. 416, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1587",
        "unit": "shivam enterprises, plot no. 274, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1588",
        "unit": "shree bankey behari foods, plot no. 514, food park, indl. area, rai, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1589",
        "unit": "shree gopal enterprises, 356, hsiidc, ph-i, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1590",
        "unit": "shree sidhi vinayak texcolours pvt. ltd., plot no. 495, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1591",
        "unit": "shubhram hospital solutions pvt ltd, plot no 485 486, hsiidc, ph-2, barhi, distt sonipat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1592",
        "unit": "sino india textiles pvt. ltd., plot no. 684, ph-ii, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1593",
        "unit": "skylark foods pvt. ltd., 491, food park, hsiidc, indl. estate, rai, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1594",
        "unit": "sl fasteners pvt. ltd., plot no. 321, hsiidc, ph-iv, sector-57, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1595",
        "unit": "smitz marketing, plot no 212 hsiidc barhi sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1596",
        "unit": "smitz polytex, 5, hsiidc, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1597",
        "unit": "sonu enterprises, 358, hsiidc, indl. area, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1598",
        "unit": "spectrum washing p. ltd. (unit-i), 130, hsiidc indl. area, barhi",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1599",
        "unit": "sterile india pvt. ltd., plot no. 100, phase-iv, sector-56, hsiidc, kundli, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "pharmaceutical",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1600",
        "unit": "sterling agro industries ltd., plot no. 73-76, hsiidc, kundli, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1601",
        "unit": "such exports pvt. ltd., 185, hsiidc, indl. estate, barhi, distt. sonipat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1602",
        "unit": "supreme speciality foods (p) ltd., 487, indl. estate, rai, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1603",
        "unit": "swastik multifibre (p) ltd., plot no. 391, hsiidc, barhi, distt. sonipat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1604",
        "unit": "tabi creations pvt. ltd., plot no. 540, ph-ii, hsiidc, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1605",
        "unit": "twenty first centaury creation (p) ltd., 207, hsiidc, indl. estate, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1606",
        "unit": "unique spares & automobiles, plot no. 10, hsiidc, phase-iv, kundli, distt. sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "others",
        "basin": "yamuna",
        "agency": "nit kurushetra"
    },
    {
        "code": "y-1607",
        "unit": "universal knit wears, plot no. 448, hsiidc, kundli, distt. sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1608",
        "unit": "vardhman creations, plot no.487-88, indl. area, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1609",
        "unit": "vardhman gar-tex, 420, hsiidc, barhi, sonepat.",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1610",
        "unit": "vihan textile pvt. ltd., plot no. 210, hsiidc, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1611",
        "unit": "viscot industries, plot no. 19, hsiidc, indl. estate, barhi, sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1612",
        "unit": "vrishabh industries, plot no. 663, hsiidc, barhi, phase-ii, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1613",
        "unit": "yakult danone india (p) ltd., 402-405 & 410-413, hsiidc, indl. area, rai",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1614",
        "unit": "yashas industries, plot no. 190, ie, barhi, distt. sonepat",
        "state": "haryana",
        "district": "sonipat",
        "ro": "regional office, sonipat",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1615",
        "unit": "ballarpur industries limited, yamuna nagar",
        "state": "haryana",
        "district": "yamuna nagar",
        "ro": "yamuna nagar",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1616",
        "unit": "haryana distillery, yamuna nagar",
        "state": "haryana",
        "district": "yamuna nagar",
        "ro": "yamuna nagar",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1617",
        "unit": "saraswati sugar mills, yamuna nagar",
        "state": "haryana",
        "district": "yamuna nagar",
        "ro": "yamuna nagar",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1618",
        "unit": "gupta exim india p.ltd. (process division), vill.prithla, palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1619",
        "unit": "neelkanth apparels pvt ltd, plot no. 1, village- dhatir, prithla dhatir road, palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1620",
        "unit": "s g industries, khatoni no 116/132, village dudhola, sikanderpur road, palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1621",
        "unit": "rqs engineering private limited, village-patli khurd, palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1622",
        "unit": "pantone textiles mills pvt ltd, dudhola sikandarpur road, near gaunchhi drain, palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1623",
        "unit": "kwality limited village softa district palwal haryana",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1624",
        "unit": "tex shadow pvt ltd, dudhola-dhatir road, vill-dhatir, tehsil & distt. palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1625",
        "unit": "shahi dyeing private limited, dudhola dhatir road village dhatir tehsil & distict palwal",
        "state": "haryana",
        "district": "palwal",
        "ro": "palwal",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1626",
        "unit": "shivalik rasayan ltd. kolhupani, premnagar, derhadun",
        "state": "uttarakhand",
        "district": "dehradun",
        "ro": "dehradun",
        "sector": "pesticide",
        "basin": "aasan- (yamuna river)",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1627",
        "unit": "shivalik prints ltd., plot no. 231-232, sector-58, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1628",
        "unit": "haryana tex prints, plot no. 3, sector-25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1629",
        "unit": "kunj behari processors pvt ltd, plot no.95-96, sector-25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1630",
        "unit": "vamani overseas p ltd., p no-169, sec-24 faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1631",
        "unit": "shivalik prints ltd., plot no. 138 sector-24 , faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1632",
        "unit": "karma tex prints pvt. ltd., plot no. 73, sector-25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1633",
        "unit": "shyam tex export ltd., plot no. 38, sector-58 , faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1634",
        "unit": "stl global ltd., plot no. 207-208 sector-58 , faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1635",
        "unit": "vamani overseas p no-137 sec-24 faridabad (garment division)",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1636",
        "unit": "dhruv global ltd.(formerlly- alkay international ltd) , opp. plot no. 84, sector-25, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1637",
        "unit": "rmp fab souring p ltd., p no-288-289, sec-58 faridbad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1638",
        "unit": "city textile industries, p no-27, sec-24 faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1639",
        "unit": "shivalik prints ltd., p no-128, sec-24, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1640",
        "unit": "ashirvad textiles, plot no 64, sector-25, industrial area, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1641",
        "unit": "shivalik design pvt. ltd., plot no. 15, sector-25, ballabgarh, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1642",
        "unit": "denima creations, plot no. 111, 112, sector-58, faridabad, sh. manpreet singh, 9811209167",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1643",
        "unit": "guriya creations pvt ltd., plot no. 169, sec-58, industrial estate, ballabgarh faridabad, sh. rajesh singh, 9811414623",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1644",
        "unit": "j. j. textiles, plot no. 73, sector-24, industrial area, faridabad",
        "state": "haryana",
        "district": "faridabad",
        "ro": "ballabgarh",
        "sector": "textile",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1645",
        "unit": "dagar engineering works,956, sector-37, pace city-ii, gurgaon",
        "state": "haryana",
        "district": "gurugram",
        "ro": "grs",
        "sector": "others",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1646",
        "unit": "viking tanners, inc. plot no 23, idc, near motor market, ambala city",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "tannery",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1647",
        "unit": "the ambala distt. co-op. milk producers union ltd, g.t. road, ambala city",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1648",
        "unit": "epic food products (p) ltd., vill. mohra, nh-1, \ndistt -ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1649",
        "unit": "smriti products pvt. ltd, 55th stone, national highway-73, panchkula road, saha ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1650",
        "unit": "kandhari beverages pvt. ltd, plot no. 460,hsiidc, igc, saha, district âambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "pcri-bhel"
    },
    {
        "code": "y-1651",
        "unit": "coatings & chemicals, 113, inds-area, ambala cantt",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1652",
        "unit": "shiv dial sud & sons, 54, indl. estate, ambala cantt",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "others",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1653",
        "unit": "naraingarh sugar mills limited, village banondi, naraingarh, ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1654",
        "unit": "oasis commercial pvt ltd, village jatwar, tehsil naraingarh, distt ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1655",
        "unit": "oasis overseas exports pvt. ltd., village jatwar, tehsil naraingarh, distt ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1656",
        "unit": "n.v. international ltd., village badholi, tehsil. naraingarh, distt ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1657",
        "unit": "n.v. distilleries ltd., village badholi, tehsil. naraingarh, distt ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "distillery",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1658",
        "unit": "epicu agro product pvt. ltd., p. no. 219-40, saha, ambala",
        "state": "haryana",
        "district": "ambala",
        "ro": "ambala",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1659",
        "unit": "sainsons paper indus. ltd., plot no. 5, vill bakhli, pehowa, kurukshetra",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "pulp & paper",
        "basin": "yamuna",
        "agency": "cppri"
    },
    {
        "code": "y-1660",
        "unit": "haryana milk food ltd., vill. usmanpur, kaithal road, pehowa, distt. kurukshetra",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1661",
        "unit": "kmg milk food ltd., g.t. road, village masana, kurukshetra",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1662",
        "unit": "markandeshwar foods & allied products ltd., # 166- 167 k.m., g.t.road, khanpur, kolian, kurukshetra",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1663",
        "unit": "parul foods specialities (p) ltd., 167 k.m stone, g.t.road, khanpur kolian, kurukshetra",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1664",
        "unit": "inodaya foods pvt. ltd, (jai durga milk product pvt. ltd.), 3-4 km, ladwa road, mathana, kkr",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "food & beverages",
        "basin": "yamuna",
        "agency": "iit roorkee"
    },
    {
        "code": "y-1665",
        "unit": "the shahbad co - operative sugar mill ltd., ladwa road, shahbad, kurukshetra",
        "state": "haryana",
        "district": "kurukshetra",
        "ro": "kurukshetra",
        "sector": "sugar",
        "basin": "yamuna",
        "agency": "vsi pune"
    },
    {
        "code": "y-1666",
        "unit": "hind agro industries ltd., c.d.f. complex, anupshahar road, aligarh.",
        "state": "uttar pradesh",
        "district": "aligarh",
        "ro": "aligarh",
        "sector": "slaughter house",
        "basin": "yamuna",
        "agency": "amu"
    }
]
};

export const inspectionReducer = createReducer(initialState, {});
