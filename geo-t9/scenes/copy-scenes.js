const fs=require('fs'), path=require('path');
const root=path.resolve(__dirname,'../..');
const m={
1:'geo-t6/scenes/scene_s71_activites.jpg',2:'geo-t8/scenes/scene_s14.jpg',3:'geo-t6/scenes/scene_s45_informel.jpg',4:'geo-t6/scenes/scene_s68_autorite.jpg',5:'geo-t6/scenes/scene_s53_cultures.jpg',6:'geo-t6/scenes/scene_s55_elevage.jpg',7:'geo-t6/scenes/scene_s54_industrielles.jpg',8:'geo-t6/scenes/scene_s56_peche.jpg',9:'geo-t6/scenes/scene_s12_halieutique.jpg',10:'geo-t6/scenes/scene_s57_foret.jpg',11:'geo-t6/scenes/scene_s11_eau_foret.jpg',12:'geo-t6/scenes/scene_s60_industrie.jpg',13:'geo-t6/scenes/scene_s73_infrastructures.jpg',14:'geo-t6/scenes/scene_s59_artisanat.jpg',15:'geo-t6/scenes/scene_s62_commerce.jpg',16:'geo-t6/scenes/scene_s61_tourisme.jpg',17:'geo-t6/scenes/scene_s64_technologie.jpg',18:'geo-t6/scenes/scene_s63_transport.jpg',
21:'geo-t8/scenes/scene_s10.jpg',22:'geo-t8/scenes/scene_s23.jpg',23:'geo-t8/scenes/scene_s11.jpg',24:'geo-t6/scenes/scene_s76_maquette.jpg',
27:'geo-t8/scenes/scene_s24.jpg',28:'geo-t8/scenes/scene_s25.jpg',29:'geo-t6/scenes/scene_s13_faune_flore.jpg',30:'geo-t6/scenes/scene_s21_climat.jpg',31:'geo-t8/scenes/scene_s26.jpg',32:'geo-t6/scenes/scene_s16_ressources_region.jpg',33:'geo-t6/scenes/scene_s17_utilisation.jpg',34:'geo-t6/scenes/scene_s14_minerais.jpg',35:'geo-t6/scenes/scene_s42_infrastructures.jpg',36:'geo-t6/scenes/scene_s01_division.jpg',37:'geo-t6/scenes/scene_s08_ma_region.jpg',38:'geo-t6/scenes/scene_s02_centre.jpg',39:'geo-t6/scenes/scene_s04_nord_ouest.jpg',40:'geo-t6/scenes/scene_s05_sud.jpg',41:'geo-t6/scenes/scene_s03_est.jpg',42:'geo-t6/scenes/scene_s51_zones.jpg',43:'geo-t6/scenes/scene_s06_district.jpg',44:'geo-t6/scenes/scene_s24_mini_projet.jpg',
47:'geo-t6/scenes/scene_s30_evolution.jpg',48:'geo-t6/scenes/scene_s27_repartition.jpg',49:'geo-t6/scenes/scene_s31_migration.jpg',50:'geo-t6/scenes/scene_s33_consequences.jpg',51:'geo-t6/scenes/scene_s28_densite.jpg',52:'geo-t6/scenes/scene_s29_causes.jpg',53:'geo-t6/scenes/scene_s34_pyramide.jpg',54:'geo-t6/scenes/scene_s35_impacts.jpg',55:'geo-t6/scenes/scene_s36_developpement.jpg',56:'geo-t6/scenes/scene_s19_equilibre.jpg',
59:'geo-t8/scenes/scene_s42.jpg',60:'geo-t8/scenes/scene_s44.jpg',61:'geo-t8/scenes/scene_s46.jpg',62:'geo-t8/scenes/scene_s49.jpg',63:'geo-t8/scenes/scene_s48.jpg',64:'geo-t8/scenes/scene_s60.jpg',65:'geo-t8/scenes/scene_s52.jpg',66:'geo-t6/scenes/scene_s18_gestion.jpg',
69:'geo-t6/scenes/scene_s40_pauvrete.jpg',70:'geo-t6/scenes/scene_s69_dina.jpg',71:'geo-t6/scenes/scene_s47_techniques.jpg',72:'geo-t6/scenes/scene_s70_vie_village.jpg',73:'geo-t6/scenes/scene_s43_main_oeuvre.jpg',74:'geo-t6/scenes/scene_s74_normes1.jpg'};
for(const [n,rel] of Object.entries(m)){
 const src=path.join(root,rel), dst=path.join(__dirname,`scene_s${String(n).padStart(2,'0')}.jpg`);
 if(!fs.existsSync(src))throw new Error('Absent '+src);
 fs.copyFileSync(src,dst);
}
const lines=['# Sources et crédits — scènes documentaires GEO T9','',"Les scènes semi-réalistes sont des illustrations pédagogiques JLearn déjà produites pour la collection et réaffectées aux notions concordantes de T9. Elles ne constituent pas des photographies ni des preuves statistiques.",''];
for(const [n,rel] of Object.entries(m))lines.push(`- \`scene_s${String(n).padStart(2,'0')}.jpg\` — illustration JLearn, source interne : \`${rel}\`.`);
fs.writeFileSync(path.join(__dirname,'SOURCES.md'),lines.join('\n')+'\n');
console.log('Scènes copiées :',Object.keys(m).length);
