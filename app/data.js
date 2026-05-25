// Shared mock data for Sehha
window.SEHHA = {
  facility: {
    name: 'CSU Moussa Bnou Nouceir',
    code: 'CSU-1',
    province: 'Khémisset',
    region: 'Rabat-Salé-Kénitra',
    population: 5042,
  },
  user: {
    name: 'Fatima El Idrissi',
    role: 'Infirmière chef',
    init: 'FE',
  },

  // Children for vaccination
  children: [
    { id:'P-0214', name:'Youssef Alami',     age:'4 mois',  dob:'15/01/2026', antigen:'Penta 2 + VPO 2', time:'09:00', parent:'Khadija Alami', tel:'06 12 34 56 78', addr:'Av. Hassan II, Khémisset', status:'Confirmé' },
    { id:'P-0188', name:'Salma El Fassi',    age:'11 mois', dob:'17/06/2025', antigen:'VAR 1 + Hep.B rappel', time:'10:15', parent:'Soukaina El Fassi', tel:'06 55 21 88 41', addr:'Hay El Amal, Khémisset', status:'En attente' },
    { id:'P-0301', name:'Mohamed Tazi',      age:'2 mois',  dob:'21/03/2026', antigen:'BCG (rattrapage) + Penta 1', time:'11:45', parent:'Houda Tazi', tel:'06 71 09 22 13', addr:'Douar Aït Ali, Khémisset', status:'Rattrapage' },
    { id:'P-0277', name:'Imane Cherkaoui',   age:'6 mois',  dob:'10/11/2025', antigen:'Penta 3 + VPO 3', time:'13:30', parent:'Nadia Cherkaoui', tel:'06 44 17 23 90', addr:'Hay Mohammadi, Khémisset', status:'Confirmé' },
    { id:'P-0245', name:'Adam Benhima',      age:'9 mois',  dob:'25/08/2025', antigen:'VAR 1', time:'14:00', parent:'Karim Benhima', tel:'06 91 02 18 47', addr:'Douar Sidi Allal, Khémisset', status:'Confirmé' },
    { id:'P-0319', name:'Lina Bouazza',      age:'3 mois',  dob:'01/02/2026', antigen:'Penta 1 + VPO 1', time:'15:00', parent:'Amina Bouazza', tel:'06 32 41 09 56', addr:'Hay Salam, Khémisset', status:'Confirmé' },
    { id:'P-0265', name:'Yassine El Khattabi',age:'15 mois', dob:'08/02/2025', antigen:'VAR 2 (rattrapage)', time:'15:45', parent:'Rachid El Khattabi', tel:'06 28 99 04 11', addr:'Douar Lahlou, Khémisset', status:'En retard' },
    { id:'P-0298', name:'Sara Idrissi',      age:'18 mois', dob:'12/11/2024', antigen:'DTC rappel', time:'16:15', parent:'Latifa Idrissi', tel:'06 12 55 77 22', addr:'Av. Mohammed V, Khémisset', status:'Confirmé' },
  ],

  // Pregnant women — CPN
  women: [
    { id:'F-0455', name:'Aicha Benali',      age:28, sa:'24 SA', visit:'CPN 2', risk:'Normal', tel:'06 14 25 36 47', last:'02/04/2026', next:'25/05/2026' },
    { id:'F-0472', name:'Hanane Lahlou',     age:34, sa:'32 SA', visit:'CPN 3', risk:'Élevé',  tel:'06 67 88 21 04', last:'18/04/2026', next:'27/05/2026' },
    { id:'F-0468', name:'Najat Bennani',     age:22, sa:'14 SA', visit:'CPN 1', risk:'Normal', tel:'06 23 17 80 55', last:'—',         next:'28/05/2026' },
    { id:'F-0440', name:'Fatima Zahra Ouahbi',age:30, sa:'36 SA', visit:'CPN 4', risk:'Élevé',  tel:'06 81 04 22 39', last:'01/05/2026', next:'29/05/2026' },
    { id:'F-0481', name:'Souad El Mansouri', age:26, sa:'18 SA', visit:'CPN 1', risk:'Normal', tel:'06 49 16 03 88', last:'—',         next:'30/05/2026' },
  ],

  // Family planning clients
  fp: [
    { id:'F-0512', name:'Khadija Bennani',  method:'DIU',          date:'25/05/2026', next:'25/11/2026', type:'Pose', age:34 },
    { id:'F-0488', name:'Rajae Sefrioui',   method:'COC',          date:'24/05/2026', next:'24/06/2026', type:'Renouvellement', age:29 },
    { id:'F-0501', name:'Asmae Cherkaoui',  method:'Injectables',  date:'23/05/2026', next:'23/08/2026', type:'Renouvellement', age:31 },
    { id:'F-0498', name:'Mounia Tahiri',    method:'Implant',      date:'21/05/2026', next:'21/05/2029', type:'Pose', age:27 },
    { id:'F-0476', name:'Wafaa Idrissi',    method:'PMP',          date:'20/05/2026', next:'20/06/2026', type:'Nouvelle', age:24 },
  ],
};
