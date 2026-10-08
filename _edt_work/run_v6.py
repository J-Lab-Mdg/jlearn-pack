import sys; sys.path.insert(0,'_edt_work')
from gen_edt import build, report

RECRE='1h 40 min (100 min) = 20 min × 5'

# ===== T4 & T5 : 20,45,30,30,45 | R 10h20-10h40 | 30,30,30,30,20 =====
times45={1:'7h 30 – 7h 50',2:'7h 50 – 8h 35',3:'8h 35 – 9h 05',4:'9h 05 – 9h 35',5:'9h 35 – 10h 20',
 6:'10h 20 – 10h 40',7:'10h 40 – 11h 10',8:'11h 10 – 11h 40',9:'11h 40 – 12h 10',
 10:'12h 10 – 12h 40',11:'12h 40 – 13h 00'}
durs45={1:20,2:45,3:30,4:30,5:45,7:30,8:30,9:30,10:30,11:20}
P45={
'L':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Français – Compréhension orale',3:'Mathématiques – Nombre',
     4:'Malagasy – Vakiteny',5:'Sciences et Technologie',7:'Mathématiques – Mesure',8:'Tantara',
     9:'EPS',10:'FOV',11:'Zavakanto – Arts visuels'},
'M':{1:'Anglais',2:'Français – Compréhension écrite',3:'Mathématiques – Opération',
     4:"Malagasy – Fiasan'ny teny",5:'Sciences et Technologie',7:'Mathématiques – Géométrie',8:'Français – Production écrite',
     9:'Mathématiques – Algèbre',10:'Français – Fonct. de la langue',11:'Zavakanto – Musique'},
'Me':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Français – Lecture-Fluidité',3:'Mathématiques – Nombre',
     4:'Malagasy – Vakiteny',5:'EPS',7:'Mathématiques – Mesure',8:'Tantara',
     9:'Géographie',10:'Malagasy – Asa an-tsoratra',11:'Anglais'},
'J':{1:'Anglais',2:'Français – Production orale',3:'Mathématiques – Opération',
     4:"Malagasy – Fiasan'ny teny",5:'Sciences et Technologie',7:'Mathématiques – Géométrie',8:'Français – Production écrite',
     9:'Mathématiques – Trait. de données',10:'FOV',11:'Zavakanto – Danse'},
'V':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'EPS',3:'Mathématiques – Nombre',
     4:'Malagasy – Asa an-tsoratra',5:'Sciences et Technologie',7:'Mathématiques – Opération',8:'FOV',
     9:'Géographie',10:'Français – Fonct. de la langue',11:'Zavakanto – Arts dramatiques'},
}
vols45=[
 ('Malagasy','4h (240 min) : Fanehoan-kevitra am-bava 20 min × 3 ; Vakiteny, Fiasan’ny teny, Asa an-tsoratra 30 min × 2 chacun'),
 ('Français','5h (300 min) : CO, CE, PO, Lecture-Fluidité 45 min × 1 chacune ; Production écrite, Fonct. de la langue 30 min × 2 chacune'),
 ('Mathématiques','6h (360 min) = 30 min × 12'),
 ('Sciences et Technologie','3h (180 min) = 45 min × 4'),
 ('Anglais','1h (60 min) = 20 min × 3'),
 ('Tantara','1h (60 min) = 30 min × 2'),
 ('Géographie','1h (60 min) = 30 min × 2'),
 ('FOV','1h 30 min (90 min) = 30 min × 3'),
 ('Zavakanto','1h 20 min (80 min) = 20 min × 4 (Arts visuels, Musique, Danse, Arts dramatiques)'),
 ('EPS','2h (120 min) = 45 min × 2 + 30 min × 1'),
 ('',''),('',''),
]
for classe in ['T4','T5']:
    report(classe, build(classe, times45, {6}, P45, vols45, f'EDT/emploi_du_temps_{classe}.docx', 11, durs45, RECRE))

# ===== T2 & T3 : 25,30,30,30,25,30 | R | 30,30,30,30,20 =====
times23={1:'7h 30 – 7h 55',2:'7h 55 – 8h 25',3:'8h 25 – 8h 55',4:'8h 55 – 9h 25',5:'9h 25 – 9h 50',
 6:'9h 50 – 10h 20',7:'10h 20 – 10h 40',8:'10h 40 – 11h 10',9:'11h 10 – 11h 40',
 10:'11h 40 – 12h 10',11:'12h 10 – 12h 40',12:'12h 40 – 13h 00'}
durs23={1:25,2:30,3:30,4:30,5:25,6:30,8:30,9:30,10:30,11:30,12:20}
P23={
'L':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Malagasy – Vakiteny',3:'Matematika',4:'Français – Compréhension orale',
     5:'Zavakanto',6:'Matematika',8:"Malagasy – Fiasan'ny teny",9:'Français – Lecture-Fluidité',
     10:'Matematika',11:'FOV',12:'EPS'},
'M':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Malagasy – Vakiteny',3:'Matematika',4:'Français – Compréhension écrite',
     5:'Zavakanto',6:'Matematika',8:"Malagasy – Fiasan'ny teny",9:'Français – Production orale',
     10:'Français – Fonct. de la langue',11:'Matematika',12:'FOV'},
'Me':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Malagasy – Vakiteny',3:'Matematika',4:'Français – Compréhension orale',
     5:'Zavakanto',6:'Matematika',8:"Malagasy – Fiasan'ny teny",9:'Français – Production écrite',
     10:'Matematika',11:'EPS',12:'FOV'},
'J':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Malagasy – Vakiteny',3:'Matematika',4:'Français – Compréhension écrite',
     5:'Zavakanto',6:'Français – Production orale',8:"Malagasy – Fiasan'ny teny",9:'Français – Fonct. de la langue',
     10:'Matematika',11:'EPS',12:'FOV'},
'V':{1:'Malagasy – Fanehoan-kevitra am-bava',2:'Matematika',3:'Français – Lecture-Fluidité',4:'Matematika',
     5:'Malagasy – Vakiteny',6:'Français – Production écrite',8:"Malagasy – Fiasan'ny teny",9:'FOV',
     10:'Matematika',11:'EPS',12:'Zavakanto'},
}
vols23=[
 ('Malagasy','7h (420 min) : Fanehoan-kevitra am-bava 25 min × 5 ; Vakiteny 30 min × 4 + 25 min × 1 ; Fiasan’ny teny 30 min × 5'),
 ('Français','6h (360 min) = 30 min × 2 par composante (CO, CE, PO, Production écrite, Fonct. de la langue, Lecture-Fluidité)'),
 ('Matematika','7h (420 min) = 30 min × 14'),
 ('FOV','2h (120 min) = 30 min × 2 + 20 min × 3'),
 ('Zavakanto','2h (120 min) = 25 min × 4 + 20 min × 1'),
 ('EPS','2h : 30 min × 3 + 20 min × 1 + 10 min de mise en train quotidienne'),
 ('',''),('',''),('',''),('',''),('',''),('',''),
]
for classe in ['T2','T3']:
    report(classe, build(classe, times23, {7}, P23, vols23, f'EDT/emploi_du_temps_{classe}.docx', 12, durs23, RECRE))

# ===== T1 : 20,20,30,20,30,20,30 | R | 20,30,20,30,20,20 =====
times1={1:'7h 30 – 7h 50',2:'7h 50 – 8h 10',3:'8h 10 – 8h 40',4:'8h 40 – 9h 00',5:'9h 00 – 9h 30',
 6:'9h 30 – 9h 50',7:'9h 50 – 10h 20',8:'10h 20 – 10h 40',9:'10h 40 – 11h 00',10:'11h 00 – 11h 30',
 11:'11h 30 – 11h 50',12:'11h 50 – 12h 20',13:'12h 20 – 12h 40',14:'12h 40 – 13h 00'}
durs1={1:20,2:20,3:30,4:20,5:30,6:20,7:30,9:20,10:30,11:20,12:30,13:20,14:20}
FA='Malagasy – Fanehoan-kevitra am-bava'; VA='Malagasy – Vakiteny'; FI="Malagasy – Fiasan'ny teny"
EV='Éveil à la langue française'; MA='Matematika'
P1={
'L':{1:FA,2:VA,3:MA,4:FI,5:MA,6:VA,7:MA,9:FA,10:'FOV',11:EV,12:'Zavakanto',13:FI,14:'EPS'},
'M':{1:FA,2:VA,3:MA,4:FI,5:MA,6:VA,7:MA,9:FA,10:EV,11:'FOV',12:'Zavakanto',13:EV,14:'Zavakanto'},
'Me':{1:FA,2:VA,3:MA,4:FI,5:MA,6:VA,7:MA,9:FA,10:EV,11:'FOV',12:'Zavakanto',13:FI,14:EV},
'J':{1:FA,2:VA,3:MA,4:FI,5:MA,6:VA,7:MA,9:FA,10:'FOV',11:'Zavakanto',12:'Zavakanto',13:FI,14:'EPS'},
'V':{1:FA,2:VA,3:MA,4:FI,5:MA,6:FI,7:'EPS',9:EV,10:'EPS',11:'FOV',12:EV,13:'Zavakanto',14:'EPS'},
}
vols1=[
 ('Malagasy','9h (540 min) = 20 min × 27 : Fanehoan-kevitra am-bava × 9 ; Vakiteny × 9 ; Fiasan’ny teny × 9 (asa an-tsoratra intégré)'),
 ('Éveil à la langue et à la culture françaises','2h 50 min (170 min) = 20 min × 4 + 30 min × 3'),
 ('Matematika','7h (420 min) = 30 min × 14'),
 ('FOV','2h (120 min) = 30 min × 2 + 20 min × 3'),
 ('Zavakanto','3h (180 min) = 30 min × 4 + 20 min × 3'),
 ('EPS','2h (120 min) = 30 min × 2 + 20 min × 3'),
 ('',''),('',''),('',''),('',''),('',''),('',''),
]
report('T1', build('T1', times1, {8}, P1, vols1, 'EDT/emploi_du_temps_T1.docx', 14, durs1, RECRE))
