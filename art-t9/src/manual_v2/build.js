// Art_T9_J-Learn.docx — manuel complet 33 séances / 66 h, 36 parties.
// Traitement C Node.js/docx, skill v18 adapté Arts : fiche A-E, leçon illustrée, pratique, critères sans note.
const fs=require('fs'), path=require('path'), sharp=require('sharp');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  ExternalHyperlink, InternalHyperlink, Bookmark, PageBreak, TableLayoutType,
} = require('docx');
const {parts,domains,sessions,validate}=require('./curriculum');
const ROOT=path.join(__dirname,'../../..');
const A=path.join(ROOT,'art-t9/assets');
const OUT=path.join(ROOT,'art-t9/output/Art_T9_J-Learn.docx');
const BRANCH='arena/3f402b0e-jlearn-pack';
const RAW=`https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/${BRANCH}/art-t9/assets/`;
const FONT='Times New Roman';
const S={body:28,table:28,small:26,h3:32,h2:32,h1:36,title:44,cover:52};
const C={black:'000000',blue:'1F4E79',green:'1E7B34',red:'C00000',rose:'C2185B',grey:'555555',light:'EAF3EA',head:'DDEEFF',err:'FDE9E9'};
const dims=new Map();
function ap(f){ return path.join(A,f); }
async function loadDims(files){ for(const f of new Set(files)){ if(!f) continue; const m=await sharp(ap(f)).metadata(); dims.set(f,{w:m.width,h:m.height}); } }
function run(text,o={}){ return new TextRun({text:String(text),font:FONT,size:o.size??S.body,bold:o.bold,italics:o.italics,color:o.color??C.black,underline:o.underline}); }
function p(text,o={}){ return new Paragraph({alignment:o.align,spacing:{before:o.before??0,after:o.after??100,line:o.line??300},indent:o.indent,children:Array.isArray(text)?text:[run(text,o)]}); }
function pRuns(children,o={}){ return new Paragraph({alignment:o.align,spacing:{before:o.before??0,after:o.after??100,line:o.line??300},children}); }
function h1(text,bookmark){ const children=bookmark?[new Bookmark({id:bookmark,children:[run(text,{bold:true,color:C.blue,size:S.h1})]})]:[run(text,{bold:true,color:C.blue,size:S.h1})]; return new Paragraph({heading:HeadingLevel.HEADING_1,spacing:{before:240,after:140},children}); }
function h2(text){ return new Paragraph({heading:HeadingLevel.HEADING_2,spacing:{before:220,after:120},children:[run(text,{bold:true,color:C.green,size:S.h2})]}); }
function h3(text){ return new Paragraph({heading:HeadingLevel.HEADING_3,spacing:{before:180,after:90},children:[run(text,{bold:true,size:S.h3})]}); }
function bullet(text,o={}){ return new Paragraph({bullet:{level:0},spacing:{after:70,line:300},children:[run(text,{size:o.size??S.body,color:o.color})]}); }
function pageBreak(){ return new Paragraph({children:[new PageBreak()]}); }
function phrase(text){ return new Paragraph({shading:{type:ShadingType.CLEAR,fill:C.light},spacing:{before:90,after:90,line:300},indent:{left:180,right:180},children:[run('Phrase clé : ',{bold:true,color:C.green}),run('« '+text+' »',{italics:true})]}); }
function noBorders(){ const n={style:BorderStyle.NONE,size:0,color:'FFFFFF'}; return {top:n,bottom:n,left:n,right:n,insideHorizontal:n,insideVertical:n}; }
function thinBorders(){ const b={style:BorderStyle.SINGLE,size:4,color:'999999'}; return {top:b,bottom:b,left:b,right:b,insideHorizontal:b,insideVertical:b}; }
function cell(children,o={}){ return new TableCell({columnSpan:o.colSpan,rowSpan:o.rowSpan,verticalAlign:o.vAlign??VerticalAlign.TOP,width:o.width?{size:o.width,type:WidthType.DXA}:undefined,shading:o.fill?{type:ShadingType.CLEAR,fill:o.fill}:undefined,margins:{top:70,bottom:70,left:80,right:80},children}); }
function table(widths,rows,borders=thinBorders()){ return new Table({borders,width:{size:widths.reduce((a,b)=>a+b,0),type:WidthType.DXA},columnWidths:widths,layout:TableLayoutType.FIXED,rows}); }
function img(file,width=600,caption){ const d=dims.get(file); if(!d) throw new Error('Image sans dims '+file); const height=Math.round(width*d.h/d.w); const ext=path.extname(file).toLowerCase(); const type=ext==='.jpg'||ext==='.jpeg'?'jpg':'png'; const out=[new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:100,after:60},children:[new ImageRun({type,data:fs.readFileSync(ap(file)),transformation:{width,height},altText:{title:caption||file,description:caption||file,name:path.basename(file)}})]})]; if(caption) out.push(p(caption,{align:AlignmentType.CENTER,italics:true,size:S.small,color:C.grey,after:140})); return out; }
function linkPara(url,label,o={}){ return new Paragraph({spacing:{after:o.after??80,line:300},children:[new ExternalHyperlink({link:url,children:[run(label,{color:C.blue,underline:{},size:o.size??S.body,bold:o.bold})]})]}); }
function internal(label,anchor){ return new Paragraph({spacing:{after:70,line:300},children:[new InternalHyperlink({anchor,children:[run(label,{color:C.blue,underline:{},size:S.body})]})]}); }
function videoPara(v){ return new Paragraph({spacing:{before:90,after:50,line:300},children:[new ImageRun({type:'png',data:fs.readFileSync(ap('pilots/icone_video.png')),transformation:{width:30,height:21},altText:{title:'Vidéo',description:'Icône vidéo',name:'video'}}),run('  '),new ExternalHyperlink({link:v.url,children:[run(v.title,{color:C.blue,underline:{},size:S.body,bold:true})]})]}); }
function headCell(text,o={}){ return cell([p(text,{bold:true,size:S.small,align:AlignmentType.CENTER,after:0})],{width:o.width,colSpan:o.colSpan,rowSpan:o.rowSpan,fill:C.head,vAlign:VerticalAlign.CENTER}); }
function ra(text){ return pRuns([run('R.A. : ',{bold:true,size:S.table,color:C.rose}),run(text,{size:S.table})],{after:60}); }
function symbolCell(text,w,good){ const sym=good?'✔️':'✗'; return cell([pRuns([run(sym+' ',{bold:true,color:good?C.green:C.red,size:S.table}),run(text,{size:S.table})],{after:0})],{width:w}); }
function errTable(rows){ const widths=[3300,3300,3600]; const header=new TableRow({tableHeader:true,children:['Erreur fréquente','Attendu','Aide simple pour l’enseignant'].map((t,j)=>cell([p(t,{bold:true,size:S.table,after:0})],{width:widths[j],fill:C.head}))}); const body=rows.map(r=>new TableRow({children:[symbolCell(r[0],widths[0],false),symbolCell(r[1],widths[1],true),cell([p(r[2],{size:S.table,after:0})],{width:widths[2]})]})); return table(widths,[header,...body]); }
function evalGrid(criteria){ const widths=[2300,4300,1200,1200,1200]; const header=new TableRow({tableHeader:true,children:[headCell('Critère',{width:widths[0]}),headCell('Ce que j’observe dans la production',{width:widths[1]}),headCell('Acquis',{width:widths[2]}),headCell('En cours',{width:widths[3]}),headCell('À revoir',{width:widths[4]})]}); const rows=criteria.map((c,i)=>new TableRow({children:[cell([p(c,{bold:true,size:S.table,after:0})],{width:widths[0]}),cell([p('Production conforme au critère ; l’élève peut montrer ou expliquer.',{size:S.table,after:0})],{width:widths[1]}),cell([p('☐',{align:AlignmentType.CENTER,size:S.table,after:0})],{width:widths[2]}),cell([p('☐',{align:AlignmentType.CENTER,size:S.table,after:0})],{width:widths[3]}),cell([p('☐',{align:AlignmentType.CENTER,size:S.table,after:0})],{width:widths[4]})]})); return table(widths,[header,...rows]); }
function metaTable(ps){ const left=[]; const L=(label,val)=>left.push(pRuns([run(label+' ',{bold:true,size:S.table}),run(val,{size:S.table})],{after:60}));
  L('Discipline :','Arts'); L('Sous discipline :',ps.map(x=>x.domain).join(' puis ')); L('Thème :',ps.map(x=>x.theme).join(' / ')); L('Titre :',ps.map(x=>x.title).join(' / ')); L('Objectif spécifique :',ps.map(x=>x.objective).join(' ')); L('Documentation :',ps.map(x=>x.pe).join(' ; ')); L('Support et matériel :',ps.map(x=>x.materials).join(' ; '));
  const right=[pRuns([run('Date : ',{bold:true,size:S.table}),run('_______',{size:S.table})],{after:60}),pRuns([run('Classe : ',{bold:true,size:S.table}),run('T9',{size:S.table})],{after:60}),pRuns([run('Séance n° : ',{bold:true,size:S.table}),run(String(ps[0].session),{size:S.table})],{after:60}),pRuns([run('Durée : ',{bold:true,size:S.table}),run(ps.reduce((s,x)=>s+x.minutes,0)+' min',{size:S.table})],{after:60})];
  return table([7000,3200],[new TableRow({children:[cell(left,{width:7000}),cell(right,{width:3200})]})],noBorders());
}
// Largeurs en twips : total 10200 = largeur utile A4 avec marges 850.
// Chaque en-tête doit tenir sans césure caractère par caractère à 13 pt.
const W=[1100,2475,2475,1400,1150,1600];
function deroulementHeader(){ return [
 new TableRow({tableHeader:true,children:[headCell('Étapes et Durée',{width:W[0],rowSpan:2}),headCell('Déroulement de la leçon',{colSpan:2}),headCell('Technique et Stratégie',{width:W[3],rowSpan:2}),headCell('Support et Matériel',{width:W[4],rowSpan:2}),headCell('Observation',{width:W[5],rowSpan:2})]}),
 // docx insère AUTOMATIQUEMENT les cellules de continuation des rowSpan ci-dessus :
 // ne fournir ici que les deux cellules réellement nouvelles (Enseignant / Apprenants).
 new TableRow({tableHeader:true,children:[cell([p('Enseignant',{bold:true,size:S.small,align:AlignmentType.CENTER,after:0})],{width:W[1],fill:'F5F5F5',vAlign:VerticalAlign.CENTER}),cell([p('Apprenants',{bold:true,size:S.small,align:AlignmentType.CENTER,after:0})],{width:W[2],fill:'F5F5F5',vAlign:VerticalAlign.CENTER})]}) ]; }
function sectionRow(text){ return new TableRow({children:[cell([p(text,{bold:true,size:S.table,color:C.red,align:AlignmentType.CENTER,after:0})],{colSpan:6,fill:C.err})]}); }
function row6(stage,ens,app,tech,support){ return new TableRow({children:[cell(String(stage).split('\n').map((l,i)=>p(l,{bold:true,size:S.table,after:i===0?40:0})),{width:W[0]}),cell(Array.isArray(ens)?ens:[p(ens,{size:S.table,after:0})],{width:W[1]}),cell(Array.isArray(app)?app:[p(app,{size:S.table,after:0})],{width:W[2]}),cell([p(tech,{size:S.table,after:0})],{width:W[3]}),cell([p(support,{size:S.table,after:0})],{width:W[4]}),cell([p('',{after:0})],{width:W[5]})]}); }
function synthese(p){ return 'Donc, '+p.understand[0]+' Mots clés à réutiliser : '+p.keywords.join(', ')+'.'; }
function deroulementTable(d){ const short=d.minutes===60; const I=short?'5 min':'10 min', II=short?'45 min':'95 min', III=short?'10 min':'15 min';
  const rows=[...deroulementHeader(),sectionRow('I. Révision'),row6('I. Révision\n'+I,d.review.map(r=>r[0]).join(' '),d.review.map(r=>ra(r[1])),'Question / réponse','—'),sectionRow('II. NOUVELLE LEÇON'),row6('II. NOUVELLE LEÇON\n'+II,'Voir les six sous-étapes ci-dessous.','Voir les six sous-étapes ci-dessous.','Démarche de création','Supports de la séance'),
   row6('1. Mise en situation',d.situation,[p('Les élèves écoutent et répondent à l’oral.',{size:S.table,after:40}),ra(d.situationAnswer)],'Brainstorming','Image, objet ou situation'),
   row6('2. Présentation','Aujourd’hui nous allons apprendre : « '+d.title+' ». Après cette séance vous serez capables de : '+d.objective,'Les élèves écoutent.','Annonce claire','Tableau noir, cahier'),
   row6('3. Observation',d.observe.phrase+' Support : '+d.observe.support,'Les élèves observent ou écoutent silencieusement, sans répondre encore.','Observation silencieuse',d.observe.support),
   row6('4. Analyse',d.questions.map(q=>q[0]).join(' '),d.questions.map(q=>ra(q[1])),'Questions guidées',d.observe.support),
   row6('5. Synthèse',synthese(d),'Les élèves écoutent ; ils peuvent répéter oralement une phrase clé.','Synthèse enseignant','Tableau noir'),
   row6('6. Application',d.practice.title+'. '+d.practice.consigne,[p('Production attendue : '+d.practice.consigne,{size:S.table,after:40}),...d.practice.criteria.map(c=>p('✔️ '+c,{size:S.table,after:30,color:C.green}))],'Travail individuel ou binôme','Cahier, feuille, matériel de production'),
   sectionRow('III. Évaluation'),row6('III. Évaluation\n'+III,d.eval,[p('L’élève présente sa production et explique un choix.',{size:S.table,after:40}),...d.practice.criteria.map(c=>p('Critère : '+c,{size:S.table,after:30}))],'Production + oral court','Feuille d’évaluation, grille E')];
  return table(W,rows);
}
function fiche(ps){ const pivot=ps.length>1; const out=[pageBreak(),h1('SÉANCE '+ps[0].session+' / 33','bm_s'+ps[0].session),p(ps.map(x=>x.title).join(' / '),{bold:true,color:C.red,size:S.h2,after:140}),p('FICHE DE PRÉPARATION',{bold:true,align:AlignmentType.CENTER,size:S.h1,after:140}),metaTable(ps)];
  out.push(h2('A. Ce que l’enseignant doit comprendre')); for(const p0 of ps){ out.push(p(p0.domain+(p0.part?' — '+p0.part:'')+' : '+p0.objective,{bold:true,size:S.body})); for(const u of p0.understand) out.push(bullet(u)); }
  out.push(h2('B. Ce qu’il faut préparer')); for(const p0 of ps){ out.push(pRuns([run('Matériel : ',{bold:true}),run(p0.materials)])); out.push(pRuns([run('Sécurité : ',{bold:true,color:C.red}),run(p0.safety)])); }
  out.push(h2('C. Déroulement de la leçon')); out.push(p('Pas de note chiffrée dans la fiche. L’évaluation sert à observer, encourager et faire ajuster.',{italics:true,size:S.body}));
  for(const p0 of ps){ if(pivot) out.push(h3('Bloc '+p0.part+' — '+p0.domain+' ('+p0.minutes+' min)')); out.push(deroulementTable(p0)); }
  out.push(h2('D. Erreurs fréquentes et aides immédiates')); out.push(errTable(ps.flatMap(x=>x.errors).slice(0,6)));
  out.push(h2('E. Évaluation de la production')); out.push(p('Observer la production dominante, puis la courte explication de l’élève. Cocher Acquis, En cours ou À revoir ; aucune note chiffrée obligatoire.',{size:S.body})); for(const p0 of ps){ if(pivot) out.push(h3(p0.domain+' — '+p0.practice.title)); out.push(evalGrid(p0.practice.criteria)); }
  return out;
}
function resolveImgs(p){ return { observe:p.observe.img||`manual/diagrams/${p.id}_observe.png`, prep:p.prep.img||`manual/diagrams/${p.id}_prepare.png`, steps:p.steps.map((s,i)=>s.img||`manual/diagrams/${p.id}_step_${'abcd'[i]}.png`), practice:p.practice.img||`manual/diagrams/${p.id}_practice.png`, qr:`manual/qr/${p.id}_audio.png` }; }
function lecon(d){ const im=resolveImgs(d); const out=[pageBreak(),h1('LEÇON','bm_lecon_'+d.id),p(d.title,{bold:true,color:C.red,size:S.h2,after:140}),p('Séance '+d.session+(d.part?' — '+d.part:'')+' · '+d.domain+' · '+d.minutes+' min',{size:S.small,color:C.grey})];
  out.push(...img(d.scene,620,'Scène scolaire : '+d.domain.toLowerCase()+' en classe.'));
  out.push(linkPara(RAW+d.audio,'▶ Écouter / télécharger la consigne audio MP3',{bold:true})); out.push(...img(im.qr,120,'QR code vers l’audio de cette partie.'));
  if(d.domain==='Musique') out.push(p('Audio du manuel : consigne parlée. Le modèle chanté ou instrumental est fourni par l’enseignant, un élève compétent ou un support sonore.',{italics:true,size:S.body,color:C.grey}));
  out.push(h2('1. '+d.observe.title)); out.push(p(d.observe.phrase)); for(const b of d.observe.bullets) out.push(bullet(b)); out.push(...img(im.observe,600,d.observe.support));
  out.push(h2('2. '+d.prep.title)); out.push(p(d.prep.phrase)); out.push(p(d.prep.text)); out.push(...img(im.prep,600,'Préparation à compléter ou à essayer avant la production.'));
  out.push(h2('3. Production pas à pas')); d.steps.forEach((s,i)=>{ out.push(h3('abcd'[i]+'. '+s.title)); out.push(p(s.text)); out.push(phrase(s.phrase)); out.push(...img(im.steps[i],600,'Étape '+'abcd'[i]+' — '+s.title)); });
  out.push(pRuns([run('Mots clés : ',{bold:true,color:C.blue}),run(d.keywords.join(' · '),{color:C.blue,bold:true})],{before:120}));
  return out;
}
function pratique(d){ const im=resolveImgs(d); const out=[pageBreak(),h1('PRATIQUE','bm_pratique_'+d.id),p(d.practice.title,{bold:true,color:C.red,size:S.h2,after:140}),p(d.practice.consigne,{size:S.body}),...img(im.practice,600,'Production de transfert : '+d.practice.title)];
  out.push(h2('Critères de réussite')); for(const c of d.practice.criteria) out.push(bullet('✔️ '+c,{color:C.green}));
  out.push(h2('Évaluation courte')); out.push(p(d.eval)); out.push(p('Type d’exercice : production pratique avec présentation orale. Type de sujet d’examen : réaliser une production à partir d’un modèle, d’un objet ou d’une situation, puis expliquer un choix et une amélioration.',{size:S.body,italics:true}));
  if(d.videos.length){ out.push(h2('Vidéos utiles')); for(const v of d.videos){ out.push(videoPara(v)); out.push(p(v.use,{size:S.body,color:C.grey,after:60})); out.push(linkPara(v.url,v.url,{size:S.small,after:120})); } out.push(p('Liens vérifiés en disponibilité le 06/11/2026. L’enseignant visionne l’extrait choisi avant la classe et peut le remplacer par une démonstration locale.',{italics:true,size:S.small,color:C.grey})); }
  out.push(h2('Courte trace élève')); out.push(p(d.practice.trace,{size:S.body}));
  return out;
}
function cover(){ return [p('ARTS T9',{bold:true,align:AlignmentType.CENTER,color:C.blue,size:S.cover,before:600,after:200}),p('J-Learn',{bold:true,align:AlignmentType.CENTER,color:C.green,size:S.cover,after:300}),p('Manuel enseignant — 33 séances de 2 h · 66 h',{align:AlignmentType.CENTER,size:S.h2,after:200}),p('Dessin · Sculpture · Peinture · Musique · Danse · Art dramatique',{align:AlignmentType.CENTER,size:S.h2,after:300}),p('Madagascar — référence PE T9 et FRP Arts T9',{align:AlignmentType.CENTER,size:S.body,after:200}),p('Police de lecture : corps et tableaux 14 pt ; sous-titres 16 pt ; titres plus grands.',{align:AlignmentType.CENTER,size:S.body,color:C.grey,after:200}),p('Chaque séance : fiche de préparation A-E, leçon illustrée pas à pas, pratique de transfert, critères Acquis / En cours / À revoir sans note chiffrée obligatoire.',{align:AlignmentType.CENTER,size:S.body,after:200})]; }
function sommaire(){ const out=[pageBreak(),h1('SOMMAIRE INTERACTIF','bm_sommaire'),p('Cliquer sur une séance ou une partie pour ouvrir la fiche, la leçon ou la pratique.',{size:S.body})];
  for(const d of domains){ out.push(h2(d)); const ps=parts.filter(x=>x.domain===d); out.push(p(ps.map(x=>'S'+x.session+(x.part?x.part==='Première heure'?'a':'b':'')).join(' · ')+' — 11 h',{size:S.body,color:C.grey})); for(const s of sessions.filter(s=>s.parts.some(p=>p.domain===d))){ out.push(internal('Séance '+s.session+' — '+s.parts.map(p=>p.title).join(' / '),'bm_s'+s.session)); } }
  out.push(h2('Accès direct aux leçons et pratiques')); for(const p0 of parts){ out.push(internal('S'+p0.session+(p0.part?p0.part==='Première heure'?'a':'b':'')+' — Leçon : '+p0.title,'bm_lecon_'+p0.id)); out.push(internal('S'+p0.session+(p0.part?p0.part==='Première heure'?'a':'b':'')+' — Pratique : '+p0.practice.title,'bm_pratique_'+p0.id)); }
  return out;
}
function repartition(){ const out=[pageBreak(),h1('RÉPARTITION OFFICIELLE','bm_repartition'),p('33 séances de 2 h = 66 h. Six sous-disciplines de 11 h. Trois séances charnières : S6, S17, S28. Cela donne 36 parties de leçon.',{size:S.body})]; const widths=[2600,2600,2600,2400]; const rows=[new TableRow({tableHeader:true,children:[headCell('Sous-discipline',{width:widths[0]}),headCell('Séances / parties',{width:widths[1]}),headCell('Durée',{width:widths[2]}),headCell('Charnière',{width:widths[3]})]})]; const map={Dessin:'S1-S5 + S6a',Sculpture:'S6b + S7-S11',Peinture:'S12-S16 + S17a',Musique:'S17b + S18-S22',Danse:'S23-S27 + S28a','Art dramatique':'S28b + S29-S33'}; const piv={Dessin:'S6a',Sculpture:'S6b',Peinture:'S17a',Musique:'S17b',Danse:'S28a','Art dramatique':'S28b'}; for(const d of domains) rows.push(new TableRow({children:[cell([p(d,{bold:true,size:S.table,after:0})],{width:widths[0]}),cell([p(map[d],{size:S.table,after:0})],{width:widths[1]}),cell([p('11 h',{size:S.table,after:0})],{width:widths[2]}),cell([p(piv[d],{size:S.table,after:0})],{width:widths[3]})]})); out.push(table(widths,rows)); out.push(p('S6 conserve le projet du PE : instrument de percussion recyclable. S6a clôt le dessin ; S6b lance la sculpture ; S7 développe la fabrication.',{size:S.body,before:140})); return out; }
async function main(){ const v=validate(); console.log('Curriculum OK',v);
  const files=[]; for(const p of parts){ const im=resolveImgs(p); files.push(p.scene,im.observe,im.prep,im.practice,im.qr,...im.steps); } files.push('pilots/icone_video.png'); await loadDims(files);
  const children=[...cover(),...sommaire(),...repartition()];
  for(const s of sessions){ children.push(...fiche(s.parts)); for(const p of s.parts){ children.push(...lecon(p)); children.push(...pratique(p)); } }
  const doc=new Document({creator:'J-Learn',title:'Arts T9 J-Learn',description:'Manuel enseignant Arts T9 Madagascar — 33 séances / 66 h',styles:{default:{document:{run:{font:FONT,size:S.body}}}},sections:[{properties:{page:{margin:{top:850,bottom:850,left:850,right:850},size:{width:11906,height:16838}}},children}]});
  const buf=await Packer.toBuffer(doc); fs.mkdirSync(path.dirname(OUT),{recursive:true}); fs.writeFileSync(OUT,buf); console.log('Écrit',OUT,buf.length,'octets');
}
main().catch(e=>{console.error(e);process.exit(1);});
