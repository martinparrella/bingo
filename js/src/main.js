var host = window.location.hostname;
var socket = io.connect("http://" + host + ":3000");

var items = [
    'Amanda wordt woest',
    'Amanda snauwt Jon af',
    'Amanda beledigd iets of iemand',
    'Sam smith meezingen',
    'Harm niest',
    'Skippybal wordt geschopt tussen Boyd & Antwan',
    'Boyd is te laat',
    'Antwan zegt: "Ik heb veel … maar dit …"',
    'Jon doet tof',
    'Jon is woest',
    '"Trek in een bammetje" om 12:28',
    'Ruud krijgt punthoofd van onze muziek',
    'Ruud SOLR/BackBone verhalen',
    'Ruud is klaar met mongo/phalcon',
    '"Sorry dat ik besta"',
    'Smerige praat tijdens de pauze',
    'De "waarom eigenlijk?" vraag',
    'omnomnom zeggen',
    'Iets met 1000',
    'Iemand wordt uitgemaakt voor smeerpoets',
    'Iemand wordt uitgemaakt voor player',
    'Onderonsje over smeerpoetsenapp',
    'De Bruin heeft te maken met amateurs en hobbyisten',
    'Commit op de verkeerde branch',
    'Antwan is woest op het leven',
    'Bergen op Zoom wordt genoemd / belachelijk gemaakt',
    'Schiedam wordt genoemd / belachelijk gemaakt',
    'Iemand is ‘verward’',
    'Stefan is woest op zijn laptop',
    'Telefoon wordt op iemands bureau gelegd',
    'Jon, wanneer ga je trouwen?',
    '"Dankje!"',
    'Antwan maakt seksueel opmerking naar/over vrouwen',
    'Iets over "het leven"',
    'Iemand vraagt of je ‘weleens zonder tandjes hebt gelachen’ o.i.d.'
];

//@TODO move this code
Notification.requestPermission();

socket.on('status', function (data)
{
    console.log('status', data);
    var notification = new Notification("Bingo update: " + data);
});
