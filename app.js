const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

let language = localStorage.getItem('petroid-language') === 'en' ? 'en' : 'id';
const translations = {
  id: {
    'Language':'Bahasa', 'Select language':'Pilih bahasa', 'Reset observation':'Atur ulang pengamatan', '◷ History':'◷ Riwayat', 'Sample history':'Riwayat sampel',
    'Illustration of carbonate texture':'Ilustrasi tekstur karbonat', 'Crystalline Carbonate':'Karbonat Kristalin',
    'Identification system':'Sistem identifikasi', 'Rock groups':'Kelompok batuan', 'Igneous Rocks':'Batuan Beku',
    'Sedimentary Rocks':'Batuan Sedimen', 'Carbonate Rocks':'Batuan Karbonat', 'Pyroclastic Rocks':'Batuan Piroklastik',
    'Metamorphic Rocks':'Batuan Metamorf', 'Sample Information':'Informasi Sampel', 'Sample name':'Nama sampel',
    'Location':'Lokasi', 'e.g. IG-025':'mis. IG-025', 'Locality or coordinates':'Lokasi atau koordinat',
    'Generate description':'Buat deskripsi', 'Run classification':'Klasifikasikan', 'CLASSIFICATION':'KLASIFIKASI',
    'Awaiting observation':'Menunggu pengamatan', 'Observation summary':'Ringkasan pengamatan', 'Export to PDF':'Ekspor ke PDF',
    'Fresh Color':'Warna Segar', 'Weathered Color':'Warna Lapuk', 'Color Index (Mafic minerals)':'Indeks Warna (mineral mafik)',
    'Grain Size':'Ukuran Butir', 'Degree of Crystallinity':'Derajat Kristalinitas', 'Crystal Shape':'Bentuk Kristal',
    'Dominant Crystal Form':'Bentuk Kristal Dominan', 'Rock Structure':'Struktur Batuan', 'Classification System':'Sistem Klasifikasi',
    'QAPF Mineral Composition':'Komposisi Mineral QAPF', 'Ultramafic Mineral Composition':'Komposisi Mineral Ultramafik',
    'Mineral Composition':'Komposisi Mineral', 'Color Index':'Indeks Warna', 'Describe fresh color':'Deskripsikan warna segar',
    'Describe weathered color':'Deskripsikan warna lapuk', 'Other':'Lainnya', 'Other rock structure':'Struktur batuan lainnya',
    'Type a different observation':'Masukkan pengamatan lain', 'Describe or enter a different option':'Jelaskan atau masukkan pilihan lain',
    'e.g. Light grey, red-brown, or greenish':'mis. abu-abu muda, cokelat kemerahan, atau kehijauan',
    'Enter observation or leave unknown':'Masukkan pengamatan atau biarkan kosong', 'Visible crystals larger than 1 mm':'Kristal terlihat berukuran lebih dari 1 mm',
    'Large phenocrysts within a finer groundmass':'Fenokris besar di dalam massa dasar lebih halus',
    'Crystals smaller than 1 mm':'Kristal berukuran kurang dari 1 mm', 'Quartz, feldspar & feldspathoid':'Kuarsa, feldspar & feldspatoid',
    'Ol–Opx–Cpx triangle':'Diagram segitiga Ol–Opx–Cpx', 'Olivine':'Olivin', 'Orthopyroxene':'Ortopiroksen',
    'Clinopyroxene':'Klinopiroksen', 'Alkali Feldspar':'Feldspar Alkali', 'Feldspathoid':'Feldspatoid',
    'Leucocratic':'Leukokratik', 'Mesocratic':'Mesokratik', 'Melanocratic':'Melanokratik', 'Hypermelanic':'Hipermelanik',
    'Normalised total: 100%':'Total ternormalisasi: 100%', 'Input total:':'Total input:',
    ' · Normalised':' · Ternormalisasi', ' · Normalises to 100%':' · Dinormalisasi menjadi 100%',
    'Fragment Size':'Ukuran Fragmen', 'Fragment Shape':'Bentuk Fragmen', 'Packing':'Kemas', 'Sorting':'Pemilahan',
    'Primary Sedimentary Structures':'Struktur Sedimen Primer', 'Secondary Structures':'Struktur Sekunder',
    'Roundness':'Kebundaran', 'Foliation Type':'Jenis Foliasi', 'Non-foliated Texture':'Tekstur Nonfoliasi',
    'Mineral Texture':'Tekstur Mineral', 'Mineral Composition':'Komposisi Mineral',
    'Is the original depositional texture of the rock still recognizable?':'Apakah tekstur pengendapan asli batuan masih dapat dikenali?',
    'Recognizable':'Dapat dikenali', 'Not recognizable':'Tidak dapat dikenali',
    'Were the rock components bound together during deposition?':'Apakah komponen penyusun batuan saling terikat selama proses pengendapan?',
    'Yes':'Ya', 'No':'Tidak', 'Bound together':'Terikat', 'Tidak terikat':'Tidak terikat',
    'Does the rock contain carbonate mud (lime mud / micrite)?':'Apakah batuan mengandung lumpur karbonat (lime mud / micrite)?',
    'Contains Mud':'Mengandung lumpur karbonat', 'Lacks Mud':'Tidak mengandung lumpur karbonat',
    'Is the rock framework mud-supported or supported by grains touching one another?':'Apakah kerangka batuan didukung oleh lumpur karbonat atau oleh butiran yang saling bersentuhan?',
    'Mud Supported':'Didukung lumpur', 'Grain Supported':'Didukung butiran',
    'What percentage of the rock consists of grains (allochems)?':'Berapa persentase butiran (allochems / grains) dalam batuan?',
    'Grain percentage':'Persentase butiran', 'Less than 10% grains → Mudstone':'Butiran kurang dari 10% → Mudstone',
    '10% or more grains → Wackestone':'Butiran 10% atau lebih → Wackestone', 'Mudstone (< 10%)':'Mudstone (< 10%)',
    'Wackestone (≥ 10%)':'Wackestone (≥ 10%)', 'Finish classification':'Selesaikan klasifikasi',
    '← Back':'← Kembali', 'Reset identification':'Atur ulang identifikasi', 'Classification complete':'Klasifikasi selesai',
    'Step 1 of 5':'Tahap 1 dari 5', 'Step 2 of 5':'Tahap 2 dari 5', 'Step 3 of 5':'Tahap 3 dari 5',
    'Step 4 of 5':'Tahap 4 dari 5', 'Step 5 of 5':'Tahap 5 dari 5', 'Hasil klasifikasi':'Hasil klasifikasi', 'Classification result':'Hasil klasifikasi',
    'ROCK NAME':'NAMA BATUAN', 'Classification Reference: Dunham (1962)':'Referensi Klasifikasi: Dunham (1962)',
    'Dunham (1962) decision tree':'Pohon keputusan Dunham (1962)', 'Depositional texture':'Tekstur pengendapan',
    'Components bound':'Komponen terikat', 'Carbonate mud':'Lumpur karbonat',
    'Komponen terikat':'Komponen terikat', 'Kandungan lumpur karbonat':'Kandungan lumpur karbonat',
    'Grain support':'Dukungan butiran', 'Persentase butiran':'Persentase butiran', 'QUESTION':'PERTANYAAN',
    'HASIL KLASIFIKASI':'HASIL KLASIFIKASI', 'Bound question':'Pertanyaan keterikatan', 'Mud question':'Pertanyaan lumpur',
    'Support question':'Pertanyaan dukungan', 'Grain percentage':'Persentase butiran',
    'Crystalline Carbonate / Crystalline Limestone':'Karbonat Kristalin / Batugamping Kristalin',
    'Complete the relevant Dunham questions first':'Selesaikan pertanyaan Dunham yang relevan terlebih dahulu',
    'Description and classification generated':'Deskripsi dan klasifikasi berhasil dibuat',
    'Result saved to sample history':'Hasil disimpan ke riwayat sampel', 'ROCK IDENTIFICATION':'IDENTIFIKASI BATUAN',
    'Observation Summary':'Ringkasan Pengamatan', 'No parameters':'Tidak ada parameter', 'Not observed':'Tidak diamati',
    'Classification':'Klasifikasi', 'This result is an interpretive classification based on the observations entered. Confirmation in thin section or laboratory analysis may be required.':'Hasil ini merupakan klasifikasi interpretatif berdasarkan pengamatan yang dimasukkan. Konfirmasi melalui sayatan tipis atau analisis laboratorium mungkin diperlukan.',
    'Megascopic Description':'Deskripsi Megaskopis', 'Geological Interpretation':'Interpretasi Geologi',
    'Classification Visualization':'Visualisasi Klasifikasi', 'Edit parameters':'Ubah parameter', 'Save result':'Simpan hasil',
    'SAMPLE ARCHIVE':'ARSIP SAMPEL', 'Identification History':'Riwayat Identifikasi', 'Saved observations':'Pengamatan tersimpan',
    'Load':'Muat', 'No saved samples yet.':'Belum ada sampel tersimpan.', 'No observations yet':'Belum ada pengamatan',
    'Select all':'Pilih semua', 'Delete selected':'Hapus pilihan', 'selected':'dipilih', 'Delete selected samples?':'Hapus sampel yang dipilih?',
    'Selected samples deleted':'Sampel terpilih dihapus', 'Select samples to delete':'Pilih sampel yang akan dihapus',
    'Export selected as PDF':'Ekspor pilihan ke PDF', 'Selected samples':'Sampel terpilih', 'Sample':'Sampel',
    'Select samples to export':'Pilih sampel yang akan diekspor',
    'Answer the first question to begin':'Jawab pertanyaan pertama untuk memulai', 'Identification in progress':'Identifikasi berlangsung',
    'Result saved to sample history':'Hasil disimpan ke riwayat sampel', 'Close':'Tutup',
    'IGNEOUS PETROLOGY':'PETROLOGI BATUAN BEKU', 'Igneous Rock Identification':'Identifikasi Batuan Beku',
    'SEDIMENTARY GEOLOGY':'GEOLOGI BATUAN SEDIMEN', 'Sedimentary Rock Identification':'Identifikasi Batuan Sedimen',
    'CARBONATE PETROLOGY':'PETROLOGI KARBONAT', 'Carbonate Rock Identification':'Identifikasi Batuan Karbonat',
    'PYROCLASTIC GEOLOGY':'GEOLOGI PIROKLASTIK', 'Pyroclastic Rock Identification':'Identifikasi Batuan Piroklastik',
    'METAMORPHIC GEOLOGY':'GEOLOGI METAMORF', 'Metamorphic Rock Identification':'Identifikasi Batuan Metamorf',
    'Streckeisen / QAPF':'Streckeisen / QAPF', 'Wentworth scale':'Skala Wentworth',
    'Dunham classification':'Klasifikasi Dunham', 'Schmid classification':'Klasifikasi Schmid',
    'Structure & fabric':'Struktur & tekstur', 'Streckeisen (1976)':'Streckeisen (1976)',
    'Wentworth grain-size scale':'Skala ukuran butir Wentworth', 'Schmid (1981)':'Schmid (1981)',
    'Fabric & mineralogical classification':'Klasifikasi tekstur & mineralogi',
    'Generate description':'Buat deskripsi', 'Run classification':'Jalankan klasifikasi'
  },
  en: {
    'Bahasa':'Language', 'Pilih bahasa':'Select language', 'Atur ulang pengamatan':'Reset observation', '◷ Riwayat':'◷ History', 'Riwayat sampel':'Sample history',
    'Ilustrasi tekstur karbonat':'Illustration of carbonate texture', 'Karbonat Kristalin':'Crystalline Carbonate',
    'Ilustrasi proporsi mineral pada batuan':'Modal mineral abundance illustration',
    'Sistem identifikasi':'Identification system', 'Kelompok batuan':'Rock groups', 'Batuan Beku':'Igneous Rocks',
    'Batuan Sedimen':'Sedimentary Rocks', 'Batuan Karbonat':'Carbonate Rocks', 'Batuan Piroklastik':'Pyroclastic Rocks',
    'Batuan Metamorf':'Metamorphic Rocks', 'Informasi Sampel':'Sample Information', 'Nama sampel':'Sample name',
    'Lokasi':'Location', 'mis. IG-025':'e.g. IG-025', 'Lokasi atau koordinat':'Locality or coordinates',
    'Buat deskripsi':'Generate description', 'Klasifikasikan':'Run classification', 'Jalankan klasifikasi':'Run classification', 'KLASIFIKASI':'CLASSIFICATION',
    'Menunggu pengamatan':'Awaiting observation', 'Ringkasan pengamatan':'Observation summary', 'Ekspor ke PDF':'Export to PDF',
    'Warna Segar':'Fresh Color', 'Warna Lapuk':'Weathered Color', 'Indeks Warna (mineral mafik)':'Color Index (Mafic minerals)',
    'Ukuran Butir':'Grain Size', 'Derajat Kristalinitas':'Degree of Crystallinity', 'Bentuk Kristal':'Crystal Shape',
    'Bentuk Kristal Dominan':'Dominant Crystal Form', 'Struktur Batuan':'Rock Structure', 'Sistem Klasifikasi':'Classification System',
    'Komposisi Mineral QAPF':'QAPF Mineral Composition', 'Komposisi Mineral Ultramafik':'Ultramafic Mineral Composition',
    'Komposisi Mineral':'Mineral Composition', 'Indeks Warna':'Color Index', 'Deskripsikan warna segar':'Describe fresh color',
    'Deskripsikan warna lapuk':'Describe weathered color', 'Lainnya':'Other', 'Struktur batuan lainnya':'Other rock structure',
    'Masukkan pengamatan lain':'Type a different observation', 'Jelaskan atau masukkan pilihan lain':'Describe or enter a different option',
    'mis. abu-abu muda, cokelat kemerahan, atau kehijauan':'e.g. Light grey, red-brown, or greenish',
    'Masukkan pengamatan atau biarkan kosong':'Enter observation or leave unknown', 'Kristal terlihat berukuran lebih dari 1 mm':'Visible crystals larger than 1 mm',
    'Fenokris besar di dalam massa dasar lebih halus':'Large phenocrysts within a finer groundmass',
    'Kristal berukuran kurang dari 1 mm':'Crystals smaller than 1 mm', 'Kuarsa, feldspar & feldspatoid':'Quartz, feldspar & feldspathoid',
    'Diagram segitiga Ol–Opx–Cpx':'Ol–Opx–Cpx triangle', 'Olivin':'Olivine', 'Ortopiroksen':'Orthopyroxene',
    'Klinopiroksen':'Clinopyroxene', 'Feldspar Alkali':'Alkali Feldspar', 'Feldspatoid':'Feldspathoid',
    'Leukokratik':'Leucocratic', 'Mesokratik':'Mesocratic', 'Melanokratik':'Melanocratic', 'Hipermelanik':'Hypermelanic',
    'Total ternormalisasi: 100%':'Normalised total: 100%', 'Total input:':'Input total:',
    ' · Ternormalisasi':' · Normalised', ' · Dinormalisasi menjadi 100%':' · Normalises to 100%',
    'Ukuran Fragmen':'Fragment Size', 'Bentuk Fragmen':'Fragment Shape', 'Kemas':'Packing', 'Pemilahan':'Sorting',
    'Struktur Sedimen Primer':'Primary Sedimentary Structures', 'Struktur Sekunder':'Secondary Structures',
    'Kebundaran':'Roundness', 'Jenis Foliasi':'Foliation Type', 'Tekstur Nonfoliasi':'Non-foliated Texture',
    'Tekstur Mineral':'Mineral Texture',
    'Apakah tekstur pengendapan asli batuan masih dapat dikenali?':'Is the original depositional texture of the rock still recognizable?',
    'Dapat dikenali':'Recognizable', 'Tidak dapat dikenali':'Not recognizable',
    'Apakah komponen penyusun batuan saling terikat selama proses pengendapan?':'Were the rock components bound together during deposition?',
    'Ya':'Yes', 'Tidak':'No', 'Terikat':'Bound together', 'Tidak terikat':'Not bound',
    'Apakah batuan mengandung lumpur karbonat (lime mud / micrite)?':'Does the rock contain carbonate mud (lime mud / micrite)?',
    'Mengandung lumpur karbonat':'Contains Mud', 'Tidak mengandung lumpur karbonat':'Lacks Mud',
    'Apakah kerangka batuan didukung oleh lumpur karbonat atau oleh butiran yang saling bersentuhan?':'Is the rock framework mud-supported or supported by grains touching one another?',
    'Didukung lumpur':'Mud Supported', 'Didukung butiran':'Grain Supported',
    'Berapa persentase butiran (allochems / grains) dalam batuan?':'What percentage of the rock consists of grains (allochems)?',
    'Persentase butiran':'Grain percentage', 'Butiran kurang dari 10% → Mudstone':'Less than 10% grains → Mudstone',
    'Butiran 10% atau lebih → Wackestone':'10% or more grains → Wackestone', 'Selesaikan klasifikasi':'Finish classification',
    '← Kembali':'← Back', 'Atur ulang identifikasi':'Reset identification', 'Klasifikasi selesai':'Classification complete',
    'Tahap 1 dari 5':'Step 1 of 5', 'Tahap 2 dari 5':'Step 2 of 5', 'Tahap 3 dari 5':'Step 3 of 5',
    'Tahap 4 dari 5':'Step 4 of 5', 'Tahap 5 dari 5':'Step 5 of 5', 'Hasil klasifikasi':'Classification result', 'Referensi Klasifikasi: Dunham (1962)':'Classification Reference: Dunham (1962)',
    'Pohon keputusan Dunham (1962)':'Dunham (1962) decision tree', 'Tekstur pengendapan':'Depositional texture',
    'Kandungan lumpur karbonat':'Carbonate mud content', 'Lumpur karbonat':'Carbonate mud',
    'Komponen terikat':'Components bound', 'Dukungan butiran':'Grain support',
    'HASIL KLASIFIKASI':'CLASSIFICATION RESULT', 'PERTANYAAN':'QUESTION', 'Pertanyaan keterikatan':'Bound question',
    'Pertanyaan lumpur':'Mud question', 'Pertanyaan dukungan':'Support question',
    'Karbonat Kristalin / Batugamping Kristalin':'Crystalline Carbonate / Crystalline Limestone',
    'Selesaikan pertanyaan Dunham yang relevan terlebih dahulu':'Complete the relevant Dunham questions first',
    'Deskripsi dan klasifikasi berhasil dibuat':'Description and classification generated',
    'Hasil disimpan ke riwayat sampel':'Result saved to sample history', 'IDENTIFIKASI BATUAN':'ROCK IDENTIFICATION',
    'Ringkasan Pengamatan':'Observation Summary', 'Tidak ada parameter':'No parameters', 'Tidak diamati':'Not observed',
    'Klasifikasi':'Classification', 'Deskripsi Megaskopis':'Megascopic Description',
    'Interpretasi Geologi':'Geological Interpretation', 'Visualisasi Klasifikasi':'Classification Visualization',
    'Ubah parameter':'Edit parameters', 'Simpan hasil':'Save result', 'ARSIP SAMPEL':'SAMPLE ARCHIVE',
    'Riwayat Identifikasi':'Identification History', 'Pengamatan tersimpan':'Saved observations', 'Muat':'Load',
    'Pilih semua':'Select all', 'Hapus pilihan':'Delete selected', 'dipilih':'selected',
    'Hapus sampel yang dipilih?':'Delete selected samples?', 'Sampel terpilih dihapus':'Selected samples deleted',
    'Pilih sampel yang akan dihapus':'Select samples to delete',
    'Ekspor pilihan ke PDF':'Export selected as PDF', 'Sampel terpilih':'Selected samples', 'Sampel':'Sample',
    'Pilih sampel yang akan diekspor':'Select samples to export',
    'Belum ada sampel tersimpan.':'No saved samples yet.', 'Belum ada pengamatan':'No observations yet',
    'Jawab pertanyaan pertama untuk memulai':'Answer the first question to begin', 'Identifikasi berlangsung':'Identification in progress',
    'Tutup':'Close', 'PETROLOGI BATUAN BEKU':'IGNEOUS PETROLOGY', 'Identifikasi Batuan Beku':'Igneous Rock Identification',
    'GEOLOGI BATUAN SEDIMEN':'SEDIMENTARY GEOLOGY', 'Identifikasi Batuan Sedimen':'Sedimentary Rock Identification',
    'PETROLOGI KARBONAT':'CARBONATE PETROLOGY', 'Identifikasi Batuan Karbonat':'Carbonate Rock Identification',
    'GEOLOGI PIROKLASTIK':'PYROCLASTIC GEOLOGY', 'Identifikasi Batuan Piroklastik':'Pyroclastic Rock Identification',
    'GEOLOGI METAMORF':'METAMORPHIC GEOLOGY', 'Identifikasi Batuan Metamorf':'Metamorphic Rock Identification',
    'Skala Wentworth':'Wentworth scale', 'Klasifikasi Dunham':'Dunham classification', 'Klasifikasi Schmid':'Schmid classification',
    'Struktur & tekstur':'Structure & fabric', 'Skala ukuran butir Wentworth':'Wentworth grain-size scale',
    'Klasifikasi tekstur & mineralogi':'Fabric & mineralogical classification'
  }
};

function translateValue(value){
  if(language==='id'){
    value=value.replace(/^QUESTION (\d{2} \/ 05)$/, 'PERTANYAAN $1');
    value=value.replace(/^Step (\d) of 5$/, 'Tahap $1 dari 5');
    value=value.replace(/^Less than 10% grains → Mudstone$/, 'Butiran kurang dari 10% → Mudstone');
    value=value.replace(/^10% or more grains → Wackestone$/, 'Butiran 10% atau lebih → Wackestone');
  }else{
    value=value.replace(/^PERTANYAAN (\d{2} \/ 05)$/, 'QUESTION $1');
    value=value.replace(/^Tahap (\d) dari 5$/, 'Step $1 of 5');
    value=value.replace(/^Butiran kurang dari 10% → Mudstone$/, 'Less than 10% grains → Mudstone');
    value=value.replace(/^Butiran 10% atau lebih → Wackestone$/, '10% or more grains → Wackestone');
  }
  return translations[language]?.[value] || value;
}
function applyTranslations(root=document){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    const node=walker.currentNode, trimmed=node.nodeValue.trim();
    if(!trimmed)continue;
    const translated=translateValue(trimmed);
    if(translated!==trimmed)node.nodeValue=node.nodeValue.replace(trimmed,translated);
  }
  $$('[placeholder],[title],[aria-label]',root).forEach(el=>{
    ['placeholder','title','aria-label'].forEach(attr=>{
      const value=el.getAttribute(attr);
      if(value)el.setAttribute(attr,translateValue(value));
    });
  });
  document.documentElement.lang=language;
  document.title=language==='id'?'PetroID — Asisten Identifikasi Batuan':'PetroID — Rock Identification Assistant';
}

const colors = {
  fresh:['White','Light Grey','Dark Grey','Black','Pink','Greenish','Yellow','Brown','Reddish','Other'],
  weathered:['White','Yellowish','Brown','Reddish Brown','Dark Brown','Grey','Yellow','Reddish','Other']
};
const swatches={White:'#ece9dd','Light Grey':'#bbbcb7','Dark Grey':'#696c68','Black':'#252826','Pink':'#c9948c','Greenish':'#76826a','Yellow':'#d4b96c','Yellowish':'#d8c58e','Brown':'#80644c','Reddish Brown':'#945844','Dark Brown':'#594237','Grey':'#999b96','Reddish':'#a65d4b','Other':'#d8d4ca'};

let category='igneous';
let state={};
let carbonateStep=1;
let history=JSON.parse(localStorage.getItem('petroid-history')||'[]');
let selectedHistoryIds=new Set();

const categoryMeta={
  igneous:{eyebrow:'IGNEOUS PETROLOGY',title:'Igneous Rock Identification',orb:'IG',ref:'Streckeisen (1976)'},
  sedimentary:{eyebrow:'SEDIMENTARY GEOLOGY',title:'Sedimentary Rock Identification',orb:'SD',ref:'Wentworth grain-size scale'},
  carbonate:{eyebrow:'CARBONATE PETROLOGY',title:'Carbonate Rock Identification',orb:'CA',ref:'Dunham (1962)'},
  pyroclastic:{eyebrow:'PYROCLASTIC GEOLOGY',title:'Pyroclastic Rock Identification',orb:'PY',ref:'Schmid (1981)'},
  metamorphic:{eyebrow:'METAMORPHIC GEOLOGY',title:'Metamorphic Rock Identification',orb:'MT',ref:'Fabric & mineralogical classification'}
};

function setValue(key,value){state[key]=value; updateSummary();}
function colorField(key,title,values=colors[key.includes('weathered')?'weathered':'fresh']){
  return `<div class="parameter-card" data-summary="${title}"><div class="section-heading"><div><span class="step">○</span><h2>${title}</h2></div></div><label>Describe ${title.toLowerCase()}<input type="text" data-text-key="${key}" value="${state[key]||''}" placeholder="e.g. Light grey, red-brown, or greenish" /></label></div>`;
}
function optionField(key,title,options,columns=3){
  const visualKeys=['crystalShape','crystalForm','structure','roundness','packing','shape','sorting','foliation','nonfoliation'];
  const normalized=options.map(o=>typeof o==='string'?{value:o,desc:''}:o);
  const hasOther=normalized.some(o=>/^other$/i.test(o.value)||/^unknown$/i.test(o.value)||/^none observed$/i.test(o.value));
  const allOptions=hasOther?normalized:[...normalized,{value:'Other',desc:'Type a different observation'}];
  const otherInput=(key==='structure'||allOptions.length>1)?`<div class="other-input ${state[key]==='Other'?'show':''}"><label>Other ${title.toLowerCase()}<input type="text" data-text-key="${key}Other" value="${state[key+'Other']||''}" placeholder="Describe or enter a different option" /></label></div>`:'';
  return `<div class="parameter-card" data-summary="${title}"><div class="section-heading"><div><span class="step">○</span><h2>${title}</h2></div></div><div class="option-grid ${columns===2?'two':columns===4?'four':''}">${allOptions.map(o=>{const value=o.value,desc=o.desc;const slug=value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const visual=visualKeys.includes(key)?`<span class="visual-icon visual-${key.toLowerCase()} visual-${slug}" aria-hidden="true"><i></i><i></i><i></i><i></i></span>`:'';return `<button class="option-button ${visual?'visual-option':''} ${state[key]===value?'selected':''}" data-key="${key}" data-value="${value}">${visual}<strong>${value}</strong>${desc?`<small>${desc}</small>`:''}</button>`}).join('')}</div>${otherInput}</div>`;
}
const modalKeys=['mafic','q','a','p','f','ol','opx','cpx','vitric','lithic','mineral','skeletal','ooids','peloids','oncoids','intraclasts','micrite','grains','metaQuartz','metaFeldspar','metaBiotite','metaMuscovite','metaGarnet','metaAmphibole','metaPyroxene','metaCalcite','metaChlorite'];
const modalPatterns={mafic:'maf',q:'quartz',a:'feldspar',p:'plagioclase',f:'feldspathoid',ol:'olivine',opx:'orthopyroxene',cpx:'clinopyroxene',vitric:'vitric',lithic:'lithic',mineral:'mineral',skeletal:'skeletal',ooids:'ooids',peloids:'peloids',oncoids:'oncoids',intraclasts:'intraclasts',micrite:'micrite',grains:'grains',metaQuartz:'quartz',metaFeldspar:'feldspar',metaBiotite:'biotite',metaMuscovite:'muscovite',metaGarnet:'garnet',metaAmphibole:'amphibole',metaPyroxene:'pyroxene',metaCalcite:'calcite',metaChlorite:'chlorite'};
function modalCircle(key,title,current){
  const pattern=modalPatterns[key]||'mineral';
  const selected=new Set();
  for(let i=0;i<current;i++){const pos=Math.floor(((i*37+11)%100));selected.add(pos)}
  const rowCounts=[6,8,10,12,14,14,12,10,8,6];
  let dots='',index=0;
  rowCounts.forEach((count,row)=>{
    const y=10+(row*80/(rowCounts.length-1));
    const normalizedY=(y-50)/40;
    const halfWidth=Math.sqrt(1-normalizedY*normalizedY)*40;
    for(let column=0;column<count;column++){
      const x=50-halfWidth+(column+0.5)*(halfWidth*2/count);
      dots+=`<span class="modal-dot ${selected.has(index)?'filled '+pattern:''}" style="left:${x}%;top:${y}%"></span>`;
      index++;
    }
  });
  return `<div class="modal-abundance"><div class="modal-circle pattern-${pattern}" data-modal-key="${key}" aria-label="${title}: ${current} percent">${dots}</div><div class="modal-caption"><strong>${title}</strong><b id="${key}ModalOutput">${current}%</b></div></div>`;
}
function rangeField(key,title,max=100,value=0,unit='%'){
  const current=state[key]??value;
  const mafic=key==='mafic' ? `<div class="color-index-visual"><small>${current<30?'Leucocratic':current<60?'Mesocratic':current<90?'Melanocratic':'Hypermelanic'}</small></div>` : '';
  const modal=modalKeys.includes(key)?modalCircle(key,title,current):'';
  return `<div class="parameter-card modal-range-card" data-summary="${title}"><div class="range-row"><div class="range-head"><span>${title}</span><output id="${key}Output">${current}${unit}</output></div><input type="range" min="0" max="${max}" value="${current}" data-range-key="${key}" />${mafic}</div>${modal}</div>`;
}
function compositionVisual(entries){
  return `<div class="composition-visual" id="compositionVisual"><div class="rock-grain-panel"><div class="rock-grain-map" id="compositionRock" aria-label="Ilustrasi proporsi mineral pada batuan"></div></div><div class="composition-legend" id="compositionLegend"></div></div>`;
}
function textField(key,title){return `<div class="parameter-card"><label>${title}<input type="text" data-text-key="${key}" value="${state[key]||''}" placeholder="Enter observation or leave unknown" /></label></div>`;}

function igneousForm(){
  return colorField('fresh','Fresh Color')+colorField('weathered','Weathered Color')+
  rangeField('mafic','Color Index (Mafic minerals)',100,state.mafic??20,'%')+
  optionField('grain','Grain Size',[{value:'Phaneritic',desc:'Visible crystals larger than 1 mm'},{value:'Porphyritic',desc:'Large phenocrysts within a finer groundmass'},{value:'Aphanitic',desc:'Crystals smaller than 1 mm'}],3)+
  optionField('crystallinity','Degree of Crystallinity',['Holocrystalline','Hypocrystalline','Holohyaline'],3)+
  optionField('crystalShape','Crystal Shape',['Euhedral','Subhedral','Anhedral'],3)+
  optionField('crystalForm','Dominant Crystal Form',['Panidiomorphic','Hypidiomorphic','Allotriomorphic'],3)+
  optionField('structure','Rock Structure',['Massive','Vesicular','Amygdaloidal','Flow banded','Pillow structure','Columnar jointing'],3)+
  `<div class="parameter-card" data-summary="Classification system"><div class="section-heading"><div><span class="step">○</span><h2>Classification System</h2></div></div><div class="option-grid two"><button class="option-button ${state.system==='QAPF'||!state.system?'selected':''}" data-key="system" data-value="QAPF"><strong>QAPF Streckeisen</strong><small>Quartz, feldspar & feldspathoid</small></button><button class="option-button ${state.system==='Ultramafic'?'selected':''}" data-key="system" data-value="Ultramafic"><strong>Ultramafic</strong><small>Ol–Opx–Cpx triangle</small></button></div></div>`+
  mineralSection();
}

function mineralSection(){
  if(state.system==='Ultramafic'){
    return `<div class="parameter-card" data-summary="Ultramafic composition"><div class="section-heading"><div><span class="step">02</span><h2>Ultramafic Mineral Composition</h2></div></div><div class="modal-grid">${[['ol','Olivine'],['opx','Orthopyroxene'],['cpx','Clinopyroxene']].map(([k,t])=>`<div>${rangeField(k,t,100,state[k]??0,'%')}</div>`).join('')}</div><div class="normalize-total"><span id="mineralTotal">Normalised total: 100%</span></div></div>`;
  }
  return `<div class="parameter-card" data-summary="Mineral composition"><div class="section-heading"><div><span class="step">02</span><h2>QAPF Mineral Composition</h2></div></div><div class="modal-grid">${[['q','Quartz'],['a','Alkali Feldspar'],['p','Plagioclase'],['f','Feldspathoid']].map(([k,t])=>`<div>${rangeField(k,t,100,state[k]??0,'%')}</div>`).join('')}</div><div class="normalize-total"><span id="mineralTotal">Normalised total: 100%</span></div></div>`;
}

function sedimentaryForm(){
  return colorField('fresh','Fresh Color',['White','Light Grey','Dark Grey','Yellow','Brown','Reddish','Other'])+colorField('weathered','Weathered Color')+
  optionField('grain','Grain Size',[{value:'Boulder',desc:'> 256 mm'},{value:'Cobble',desc:'64–256 mm'},{value:'Pebble',desc:'4–64 mm'},{value:'Granule',desc:'2–4 mm'},{value:'Very coarse sand',desc:'1–2 mm'},{value:'Coarse sand',desc:'0.5–1 mm'},{value:'Medium sand',desc:'0.25–0.5 mm'},{value:'Fine sand',desc:'0.125–0.25 mm'},{value:'Very fine sand',desc:'0.0625–0.125 mm'},{value:'Silt',desc:'0.0039–0.0625 mm'},{value:'Clay',desc:'< 0.0039 mm'}],3)+
  optionField('roundness','Grain Roundness',['Angular','Subangular','Subrounded','Rounded','Well rounded'],3)+
  optionField('packing','Packing',['Open packing','Closed packing'],2)+
  optionField('primary','Primary Sedimentary Structures',['Parallel lamination','Cross bedding','Graded bedding','Ripple marks','Mud cracks','Sole marks','Massive bedding'],3)+
  optionField('secondary','Secondary Structures',['Bioturbation','Concretions','Nodules','Stylolites','Deformation structures','None observed'],3);
}

function carbonateForm(){
  const steps=[
    {key:'texture',title:'Depositional texture',question:'Apakah tekstur pengendapan asli batuan masih dapat dikenali?',options:[['Yes','Dapat dikenali','recognized'],['No','Tidak dapat dikenali','recrystallized']]},
    {key:'bound',title:'Komponen terikat',question:'Apakah komponen penyusun batuan saling terikat selama proses pengendapan?',options:[['Yes','Bound together','bound'],['No','Tidak terikat','separate']]},
    {key:'mud',title:'Kandungan lumpur karbonat',question:'Apakah batuan mengandung lumpur karbonat (lime mud / micrite)?',options:[['Contains Mud','Mengandung lumpur karbonat','mud'],['Lacks Mud','Tidak mengandung lumpur karbonat','no-mud']]},
    {key:'support',title:'Grain support',question:'Apakah kerangka batuan didukung oleh lumpur karbonat atau oleh butiran yang saling bersentuhan?',options:[['Mud Supported','Mud supported','mud-supported'],['Grain Supported','Grain supported','grain-supported']]},
    {key:'grains',title:'Persentase butiran',question:'Berapa persentase butiran (allochems / grains) dalam batuan?'}
  ];
  const result=getCarbonateResult();
  const currentStep=steps[carbonateStep-1];
  const answered=step=>step.key==='grains'?state.carbonateComplete:state[step.key]!==undefined;
  const selected=step=>step.key==='grains'?(state.carbonateComplete?`${state.grains}% grains`:null):state[step.key];
  const stopAfter=state.texture==='No'?1:state.bound==='Yes'?2:state.mud==='Lacks Mud'?3:state.support==='Grain Supported'?4:carbonateStep;
  const tree=steps.map((step,index)=>{
    const active=carbonateStep===index+1&&!result;
    const done=answered(step);
    const unreachable=index+1>stopAfter;
    const upcoming=index+1>carbonateStep&&!result;
    const branches=step.options?step.options.map(([value,label,art])=>{
      const chosen=state[step.key]===value;
      const eliminated=unreachable||(done&&!chosen);
      const destination=step.key==='texture'?(value==='No'?'Crystalline Carbonate':'Bound question'):step.key==='bound'?(value==='Yes'?'Boundstone':'Mud question'):step.key==='mud'?(value==='Lacks Mud'?'Grainstone':'Support question'):step.key==='support'?(value==='Grain Supported'?'Packstone':'Grain percentage'):'';
      return `<div class="tree-branch ${chosen?'chosen':''} ${eliminated?'eliminated':''} ${upcoming?'upcoming':''}"><span class="tree-arrow">↳</span><span class="tree-answer">${value}</span><span class="tree-destination">${destination}</span></div>`;
    }).join(''):`<div class="tree-branch ${state.carbonateComplete?'chosen':''} ${done?'':'upcoming'}"><span class="tree-arrow">↳</span><span class="tree-answer">&lt; 10% → Mudstone</span><span class="tree-destination">≥ 10% → Wackestone</span></div>`;
    return `<div class="tree-node ${active?'active':''} ${done?'complete':''} ${upcoming?'upcoming':''} ${unreachable?'eliminated':''}"><div class="tree-question"><span class="tree-step">${String(index+1).padStart(2,'0')}</span><strong>${step.title}</strong>${selected(step)?`<b>${selected(step)}</b>`:''}</div><div class="tree-branches">${branches}</div></div>`;
  }).join('');
  const endNode=result?`<div class="tree-result"><small>HASIL KLASIFIKASI</small><strong>${result.name}</strong></div>`:'';
  const illustrations=currentStep.key==='grains'?carbonateGrainIllustrations(state.grains??0):currentStep.options.map(([value,label,art])=>`<div class="carbonate-illustration"><div class="carbonate-svg">${carbonateSectionSvg(art)}</div><strong>${label}</strong></div>`).join('');
  const questionContent=currentStep.key==='grains'
    ? `<div class="carbonate-grain-question">${rangeField('grains','Grain percentage',100,state.grains??0,'%')}<p class="threshold-note">${(state.grains??0)<10?'Less than 10% grains → Mudstone':'10% or more grains → Wackestone'}</p><button class="run-button carbonate-next" id="carbonateFinish">Finish classification <span>→</span></button></div>`
    : `<div class="decision-options">${currentStep.options.map(([value,label,art])=>`<button class="decision-choice ${state[currentStep.key]===value?'selected':''}" data-carbonate-key="${currentStep.key}" data-carbonate-value="${value}"><span class="decision-art">${carbonateSectionSvg(art)}</span><strong>${label}</strong><small>${value}</small></button>`).join('')}</div>`;
  const resultSummary=result?`<section class="carbonate-result-inline"><p>ROCK NAME</p><h2>${result.name}</h2><span>Classification Reference: Dunham (1962)</span><p>${result.description}</p></section>`:'';
  return `<div class="carbonate-workflow"><section class="parameter-card carbonate-question-card"><div class="carbonate-progress"><span>QUESTION ${String(carbonateStep).padStart(2,'0')} / 05</span><span>${result?'Classification complete':`Step ${carbonateStep} of 5`}</span></div><h2>${result?'Hasil klasifikasi':currentStep.question}</h2>${result?'':`${currentStep.key==='grains'?`<div class="carbonate-illustrations">${illustrations}</div>`:''}${questionContent}`}<div class="carbonate-controls"><button class="secondary-button" id="carbonateBack" ${carbonateStep<=1?'disabled':''}>← Back</button><button class="text-button" id="carbonateReset">Reset identification</button></div>${resultSummary}</section><section class="parameter-card carbonate-tree-card"><div class="section-heading"><div><span class="step">↳</span><h2>Dunham (1962) decision tree</h2></div></div><div class="carbonate-tree"><div class="tree-start">START</div>${tree}${endNode}</div></section></div>`;
}

function carbonateSectionSvg(kind){
  const bg=kind==='recrystallized'?'#d8d1bd':kind==='bound'?'#d8d1bd':'#e7dfc8';
  const dots=Array.from({length:18},(_,i)=>{
    const closePacking=kind==='grain-supported'||kind==='no-mud';
    const x=closePacking?20+(i%5)*36:14+(i%6)*31+(Math.floor(i/6)%2)*11;
    const y=closePacking?12+Math.floor(i/5)*14:15+Math.floor(i/6)*19;
    const fill=kind==='recrystallized'?'#beb69e':kind==='bound'?'#cfbd91':'#c3a979';
    const radius=kind==='recrystallized'?7:kind==='ooids'?5:kind==='peloids'?4:closePacking?8:6;
    const visible=kind==='mudstone'?i<3:kind==='wackestone'?i<11:true;
    if(!visible)return '';
    return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="#756c59" stroke-width="1"/>`;
  }).join('');
  let binding='';
  if(kind==='bound')binding='<path d="M25 25 Q55 3 87 27 T150 25 M38 45 Q74 60 130 43" fill="none" stroke="#71806b" stroke-width="3"/>';
  if(kind==='recrystallized')binding='<path d="M3 16 L185 12 M4 34 L185 30 M4 54 L185 50" fill="none" stroke="#9b9279" stroke-width="1"/>';
  if(kind==='mud-supported'||kind==='mud')binding='<path d="M0 56 H190" stroke="#b09b72" stroke-width="5" opacity=".5"/>';
  return `<svg viewBox="0 0 190 68" role="img" aria-label="Illustration of carbonate texture"><rect x="1" y="1" width="188" height="66" rx="8" fill="${bg}" stroke="#aaa18a"/>${binding}${dots}</svg>`;
}
function carbonateGrainIllustrations(value){
  return `<div class="carbonate-illustration grain-range-visual"><div class="grain-compare">${carbonateSectionSvg('mudstone')}${carbonateSectionSvg('wackestone')}</div><div class="grain-compare-labels"><span>Mudstone (&lt; 10%)</span><span>Wackestone (≥ 10%)</span></div></div>`;
}

function pyroForm(){
  return colorField('fresh','Fresh Color')+colorField('weathered','Weathered Color')+
  optionField('grain','Fragment Size',[{value:'Fine ash',desc:'< 1/16 mm'},{value:'Coarse ash',desc:'1/16–2 mm'},{value:'Lapilli',desc:'2–64 mm'},{value:'Block / bomb',desc:'> 64 mm'}],4)+
  optionField('shape','Fragment Shape',['Angular','Subangular','Subrounded','Rounded'],4)+
  optionField('packing','Packing',['Open packing (matrix supported)','Closed packing (clast supported)'],2)+
  optionField('sorting','Sorting',['Very well sorted','Well sorted','Moderately sorted','Poorly sorted','Very poorly sorted'],3)+
  optionField('hardness','Hardness',['Very soft','Soft','Medium','Hard','Very hard'],3)+
  rangeField('mohs','Mohs hardness (if known)',10,state.mohs??0,'')+
  optionField('texture','Texture',['Vitroclastic','Crystal tuff','Lithic fragmental','Porphyritic','Massive'],3)+
  `<div class="parameter-card" data-summary="Composition"><div class="section-heading"><div><span class="step">02</span><h2>Fragment Composition</h2></div></div><div class="modal-grid">${[['vitric','Vitric'],['lithic','Lithic'],['mineral','Mineral']].map(([k,t])=>`<div>${rangeField(k,t,100,state[k]??0,'%')}</div>`).join('')}</div><div class="normalize-total"><span id="mineralTotal">Normalised total: 100%</span></div></div>`;
}

function metamorphicForm(){
  return colorField('fresh','Fresh Color')+colorField('weathered','Weathered Color')+
  optionField('structure','Rock Structure',['Foliated','Non-foliated'],2)+
  (state.structure==='Foliated'?optionField('foliation','Foliation Type',['Slaty','Phyllitic','Schistose','Gneissic'],4):optionField('nonfoliation','Non-foliated Texture',['Granoblastic','Hornfelsic','Cataclastic','Mylonitic'],4))+
  optionField('texture','Mineral Texture',['Lepidoblastic','Nematoblastic','Porphyroblastic','Granoblastic'],4)+
  `<div class="parameter-card" data-summary="Mineral composition"><div class="section-heading"><div><span class="step">02</span><h2>Mineral Composition</h2></div></div><div class="option-grid three">${['Quartz','Feldspar','Biotite','Muscovite','Garnet','Amphibole','Pyroxene','Calcite','Chlorite'].map(v=>`<button class="option-button ${state.minerals?.includes(v)?'selected':''}" data-multi="minerals" data-value="${v}"><strong>${v}</strong></button>`).join('')}</div></div>`;
}

function renderForm(){
  const formMap={igneous:igneousForm,sedimentary:sedimentaryForm,carbonate:carbonateForm,pyroclastic:pyroForm,metamorphic:metamorphicForm};
  $('#parameterForm').innerHTML=formMap[category]();
  $('.run-bar').hidden=category==='carbonate'&&!getCarbonateResult();
  bindFormEvents(); updateSummary(); applyTranslations();
}

function bindFormEvents(){
  if(category==='carbonate'){
    $$('[data-carbonate-key]').forEach(button=>button.addEventListener('click',()=>answerCarbonate(button.dataset.carbonateKey,button.dataset.carbonateValue)));
    $('#carbonateBack')?.addEventListener('click',backCarbonate);
    $('#carbonateReset')?.addEventListener('click',resetCarbonate);
    $('#carbonateFinish')?.addEventListener('click',()=>{state.carbonateComplete=true;renderForm()});
  }
  $$('.swatch,.option-button').forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.dataset.multi){
      const k=btn.dataset.multi; state[k]=state[k]||[];
      const v=btn.dataset.value, i=state[k].indexOf(v);
      i>=0?state[k].splice(i,1):state[k].push(v); btn.classList.toggle('selected');
    }else if(btn.dataset.key){
      const k=btn.dataset.key,v=btn.dataset.value; setValue(k,v);
      $$(`[data-key="${k}"]`).forEach(x=>x.classList.remove('selected')); btn.classList.add('selected');
      const card=btn.closest('.parameter-card'); const other=card?.querySelector('.other-input'); if(other)other.classList.toggle('show',v==='Other');
    }
    if(category==='igneous'||category==='metamorphic') renderForm();
    else updateSummary();
  }));
  $$('input[type=range]').forEach(r=>r.addEventListener('input',()=>{
    const k=r.dataset.rangeKey; state[k]=Number(r.value); $('#'+k+'Output').textContent=r.value+(k==='mohs'?'':'%');
    if(k==='mafic'){const label=$(`[data-range-key="mafic"]`)?.closest('.modal-range-card')?.querySelector('.color-index-visual small');if(label)label.textContent=state.mafic<30?'Leucocratic':state.mafic<60?'Mesocratic':state.mafic<90?'Melanocratic':'Hypermelanic';}
    updateModalCircle(k,r.value);updateMineralTotal();updateCompositionVisual();updateSummary();
    if(category==='carbonate'&&k==='grains'){
      const note=$('.threshold-note'),finish=$('#carbonateFinish');
      if(note)note.textContent=state.grains<10?'Less than 10% grains → Mudstone':'10% or more grains → Wackestone';
      if(finish)finish.disabled=false;
    }
    applyTranslations();
  }));
  $$('[data-text-key]').forEach(inp=>inp.addEventListener('input',()=>setValue(inp.dataset.textKey,inp.value)));
}

function answerCarbonate(key,value){
  const downstream={texture:['bound','mud','support','grains','carbonateComplete'],bound:['mud','support','grains','carbonateComplete'],mud:['support','grains','carbonateComplete'],support:['grains','carbonateComplete']};
  (downstream[key]||[]).forEach(item=>delete state[item]);
  state[key]=value;
  if(key==='texture')carbonateStep=value==='Yes'?2:1;
  if(key==='bound')carbonateStep=value==='No'?3:2;
  if(key==='mud')carbonateStep=value==='Contains Mud'?4:3;
  if(key==='support')carbonateStep=value==='Mud Supported'?5:4;
  renderForm();
}
function backCarbonate(){
  if(state.carbonateComplete){
    delete state.carbonateComplete;
    carbonateStep=5;
  }else if(getCarbonateResult()){
    const lastAnswered=state.support!==undefined?4:state.mud!==undefined?3:state.bound!==undefined?2:1;
    const key=['','texture','bound','mud','support'][lastAnswered];
    delete state[key]; delete state.carbonateComplete;
    carbonateStep=lastAnswered;
  }else if(carbonateStep>1){
    carbonateStep--;
  }
  renderForm();
}
function resetCarbonate(){
  ['texture','bound','mud','support','grains','carbonateComplete'].forEach(key=>delete state[key]);
  carbonateStep=1;
  renderForm();
}
function getCarbonateResult(){
  const {texture,bound,mud,support,grains,carbonateComplete}=state;
  let name='';
  if(texture==='No')name='Crystalline Carbonate / Crystalline Limestone';
  else if(texture==='Yes'&&bound==='Yes')name='Boundstone';
  else if(texture==='Yes'&&bound==='No'&&mud==='Lacks Mud')name='Grainstone';
  else if(texture==='Yes'&&bound==='No'&&mud==='Contains Mud'&&support==='Grain Supported')name='Packstone';
  else if(texture==='Yes'&&bound==='No'&&mud==='Contains Mud'&&support==='Mud Supported'&&carbonateComplete)name=grains<10?'Mudstone':'Wackestone';
  if(!name)return null;
  const descriptions={
    id:{
      'Crystalline Carbonate / Crystalline Limestone':'Tekstur pengendapan asli tidak dapat dikenali, kemungkinan karena rekristalisasi; batuan dideskripsikan sebagai karbonat kristalin dan tidak dimasukkan ke kategori tekstur deposisional Dunham.',
      Boundstone:'Komponen karbonat terikat selama pengendapan oleh organisme atau struktur pembentuk terumbu.',
      Grainstone:'Batuan karbonat grain-supported tanpa lumpur karbonat.',
      Packstone:'Batuan karbonat grain-supported dengan lumpur karbonat di antara butiran yang saling bersentuhan.',
      Mudstone:'Batuan karbonat mud-supported dengan kandungan butiran kurang dari 10%.',
      Wackestone:`Batuan karbonat mud-supported dengan kandungan butiran ${grains}% (≥10%).`
    },
    en:{
      'Crystalline Carbonate / Crystalline Limestone':'The original depositional texture is not recognizable, likely due to recrystallization. The rock is described as crystalline carbonate and is excluded from Dunham depositional-texture categories.',
      Boundstone:'Carbonate components were bound during deposition by organisms or reef-building structures.',
      Grainstone:'A grain-supported carbonate rock without carbonate mud.',
      Packstone:'A grain-supported carbonate rock with carbonate mud between grains that touch one another.',
      Mudstone:'A mud-supported carbonate rock containing less than 10% grains.',
      Wackestone:`A mud-supported carbonate rock containing ${grains}% grains (≥10%).`
    }
  };
  const description=descriptions[language][name];
  const interpretation=language==='id'
    ?'Klasifikasi ini didasarkan pada tekstur deposisional dan hubungan lumpur–butiran yang diamati; interpretasi dapat dipengaruhi oleh rekristalisasi dan keterbatasan pengamatan megaskopis.'
    :'This classification is based on observed depositional texture and mud–grain relationships; interpretation may be affected by recrystallization and limits of megascopic observation.';
  return {name,ref:'Dunham (1962)',description,interpretation};
}

function updateModalCircle(key,value){
  const circle=$(`.modal-circle[data-modal-key="${key}"]`); if(!circle)return;
  const pattern=modalPatterns[key]||'mineral';
  const selected=new Set(); for(let i=0;i<Number(value);i++)selected.add(Math.floor((i*37+11)%100));
  circle.querySelectorAll('.modal-dot').forEach((dot,i)=>{
    dot.className=`modal-dot ${selected.has(i)?`filled ${pattern}`:''}`;
  });
  circle.setAttribute('aria-label',`${key}: ${value} percent`);
  const output=$('#'+key+'ModalOutput'); if(output)output.textContent=value+'%';
}
function updateMineralTotal(){
  const el=$('#mineralTotal'); if(!el)return;
  const keys=category==='igneous'? (state.system==='Ultramafic'?['ol','opx','cpx']:['q','a','p','f']):category==='carbonate'?['skeletal','ooids','peloids','oncoids','intraclasts','micrite']:['vitric','lithic','mineral'];
  const total=keys.reduce((n,k)=>n+(Number(state[k])||0),0);
  el.textContent=`Input total: ${total}%`+(total===100?' · Normalised':' · Normalises to 100%'); el.className=total===100?'': 'invalid';
}

function updateCompositionVisual(){
  const rock=$('#compositionRock'), legend=$('#compositionLegend'); if(!rock||!legend)return;
  const entries=category==='igneous'?(state.system==='Ultramafic'?[['ol','Olivine'],['opx','Orthopyroxene'],['cpx','Clinopyroxene']]:[['q','Quartz'],['a','Alkali Feldspar'],['p','Plagioclase'],['f','Feldspathoid']]):[['vitric','Vitric'],['lithic','Lithic'],['mineral','Mineral']];
  const values=entries.map(([k])=>Number(state[k])||0), sum=values.reduce((a,b)=>a+b,0), normalized=sum?values.map(v=>v/sum*100):values;
  const colors=['#bfc0a9','#c8a77d','#d3c6ae','#8e9994','#8e9480','#c2ad82','#a78d7a'];
  const counts=normalized.map(v=>Math.round(v));
  let remaining=100-counts.reduce((a,b)=>a+b,0);
  const order=normalized.map((v,i)=>({i,f:v-Math.floor(v)})).sort((a,b)=>b.f-a.f);
  for(let i=0;i<Math.abs(remaining);i++){const item=order[i%order.length];counts[item.i]+=remaining>0?1:-1;}
  const grainTypes=[]; counts.forEach((count,i)=>{for(let n=0;n<count;n++)grainTypes.push(i)});
  for(let i=grainTypes.length-1;i>0;i--){const j=(i*37+11)% (i+1);[grainTypes[i],grainTypes[j]]=[grainTypes[j],grainTypes[i]]}
  rock.innerHTML=grainTypes.map((type,i)=>`<span style="--grain:${colors[type]};--size:${type%3===0?'8':type%3===1?'11':'6'}px" title="${entries[type][1]}"></span>`).join('');
  legend.innerHTML=entries.map(([k,label],i)=>`<span><i style="background:${colors[i]}"></i>${label} <strong>${normalized[i].toFixed(0)}%</strong></span>`).join('');
}
function updateSummary(){
  const populated=Object.keys(state).filter(k=>state[k]!==undefined&&state[k]!==''&&!(Array.isArray(state[k])&&state[k].length===0));
  const target=category==='igneous'?12:category==='sedimentary'?7:category==='carbonate'?5:category==='pyroclastic'?10:7;
  const pct=category==='carbonate'?(getCarbonateResult()?100:Math.min(95,Math.round((carbonateStep-1)/5*100))):Math.min(100,Math.round(populated.length/target*100));
  $('#completion').textContent=pct+'%'; $('#progressBar').style.width=pct+'%';
  const labels={fresh:'Fresh',weathered:'Weathered',grain:'Grain size',roundness:'Roundness',packing:'Packing',support:'Support',structure:'Structure',crystallinity:'Crystallinity',crystalShape:'Crystal shape',crystalForm:'Crystal form',system:'System',mafic:'Mafic index',texture:'Texture',mud:'Mud',sorting:'Sorting',hardness:'Hardness'};
  const rows=populated.slice(0,6).map(k=>`<div class="summary-row"><span>${labels[k]||k}</span><span>${Array.isArray(state[k])?state[k].join(', '):state[k]}${typeof state[k]==='number'&&k!=='mohs'?'%':''}</span></div>`).join('');
  $('#summaryList').innerHTML=category==='carbonate'?carbonateSummaryRows():rows||'<div class="summary-row"><span>No observations yet</span><span>—</span></div>';
  if(category==='carbonate')updateCarbonatePreview();
  updateMineralTotal(); updateCompositionVisual();
  applyTranslations();
}
function carbonateSummaryRows(){
  const labels=[['texture','Depositional texture'],['bound','Components bound'],['mud','Carbonate mud'],['support','Grain support'],['grains','Grains']];
  const rows=labels.filter(([key])=>state[key]!==undefined).map(([key,label])=>`<div class="summary-row"><span>${label}</span><span>${key==='grains'?state[key]+'%':state[key]}</span></div>`).join('');
  return rows||'<div class="summary-row"><span>Answer the first question to begin</span><span>—</span></div>';
}
function updateCarbonatePreview(){
  const result=getCarbonateResult();
  $('#previewName').textContent=result?.name||'Identification in progress';
  $('#rockOrb').textContent=result?'Ca':'…';
}

function classify(){
  if(category==='igneous')return classifyIgneous();
  if(category==='sedimentary')return classifySedimentary();
  if(category==='carbonate')return classifyCarbonate();
  if(category==='pyroclastic')return classifyPyro();
  return classifyMetamorphic();
}
function norm(keys){const sum=keys.reduce((n,k)=>n+(Number(state[k])||0),0)||1;return Object.fromEntries(keys.map(k=>[k,(Number(state[k])||0)/sum*100]));}
function classifyIgneous(){
  if(state.system==='Ultramafic'){
    const n=norm(['ol','opx','cpx']); let name='Peridotite';
    if(n.opx>n.ol&&n.opx>n.cpx)name='Orthopyroxenite'; else if(n.cpx>n.ol&&n.cpx>n.opx)name='Clinopyroxenite'; else if(n.ol<40)name='Pyroxenite';
    const description=`A ${state.grain?.toLowerCase()||'phaneritic'} ultramafic rock dominated by olivine and/or pyroxene. Estimated ultramafic composition: Ol ${n.ol.toFixed(0)}%, Opx ${n.opx.toFixed(0)}%, Cpx ${n.cpx.toFixed(0)}%.`;
    return {name,ref:'Streckeisen (1976) — ultramafic diagram',description,interpretation:'The ultramafic assemblage is consistent with mantle-derived or high-temperature cumulate crystallisation in a mafic–ultramafic magmatic system.',diagram:'triangle'};
  }
  const n=norm(['q','a','p','f']); let name='Not resolved';
  if(n.f>n.q&&n.f>0){name=n.p>n.a?'Foidite / Foid-bearing rock': 'Foid syenite';}
  else if(n.q>0){name=n.p>=n.a?(n.p>60?'Granodiorite':'Tonolite'): 'Granite';}
  else {name=n.p>=n.a?(n.p>65?'Diorite / Gabbro':'Monzodiorite'): 'Monzonite / Syenite';}
  const desc=`A ${state.grain?.toLowerCase()||'phaneritic'} igneous rock with a ${state.mafic<30?'leucocratic':state.mafic<60?'mesocratic':state.mafic<90?'melanocratic':'hypermelanic'} colour index. Normalised felsic composition: Q ${n.q.toFixed(0)}%, A ${n.a.toFixed(0)}%, P ${n.p.toFixed(0)}%, F ${n.f.toFixed(0)}%.`;
  return {name,ref:'Streckeisen (1976) — QAPF',description:desc,interpretation:'The mineral proportions indicate crystallisation of a silica-saturated or silica-undersaturated magma, subject to confirmation from thin-section analysis.',diagram:'triangle'};
}
function classifySedimentary(){
  const g=(state.grain||'').toLowerCase(); let name='Siltstone / Claystone';
  if(/boulder|cobble|pebble|granule/.test(g)) name=(state.roundness||'').includes('Rounded')?'Conglomerate':'Breccia';
  else if(g.includes('sand'))name='Sandstone';
  else if(g.includes('silt'))name='Siltstone';
  else if(g.includes('clay'))name='Claystone';
  return {name,ref:'Wentworth grain-size classification',description:`A ${g||'undetermined'} sedimentary rock with ${state.roundness?.toLowerCase()||'unknown roundness'} grains and ${state.packing?.toLowerCase()||'unknown packing'}. Primary structure: ${state.primary||'not recorded'}; secondary structure: ${state.secondary||'not recorded'}.`,interpretation:'The grain size, rounding and sorting together indicate the likely depositional energy of the environment. Confirmation should consider sorting and sedimentary context.'};
}
function classifyCarbonate(){
  return getCarbonateResult()||{name:'Identification in progress',ref:'Dunham (1962)',description:'Answer each relevant decision-tree question to complete the Dunham classification.',interpretation:'The rock name will be assigned only when the necessary observations have been entered.'};
}
function classifyPyro(){
  const g=(state.grain||''); let name='Pyroclastic deposit';
  if(g==='Fine ash')name='Fine ash tuff'; else if(g==='Coarse ash')name='Coarse ash tuff'; else if(g==='Lapilli')name='Lapillistone'; else if(g==='Block / bomb')name='Pyroclastic breccia / agglomerate';
  return {name,ref:'Schmid (1981)',description:`A ${g.toLowerCase()} pyroclastic rock with ${state.shape?.toLowerCase()||'unrecorded'} fragments, ${state.sorting?.toLowerCase()||'unrecorded sorting'} and ${state.texture?.toLowerCase()||'unrecorded texture'} texture.`,interpretation:'Dominant fragment size and composition indicate the volcanic fragmentation and transport regime. Lapilli and block/bomb deposits suggest proximal or energetic eruptions; ash is consistent with distal fallout or pyroclastic flows.'};
}
function classifyMetamorphic(){
  let name='Metamorphic rock';
  if(state.structure==='Foliated'){const f=(state.foliation||'').toLowerCase();name=f==='slaty'?'Slate':f==='phyllitic'?'Phyllite':f==='schistose'?'Schist':f==='gneissic'?'Gneiss':'Foliated metamorphic rock';}
  else {const t=(state.nonfoliation||'').toLowerCase();name=t==='hornfelsic'?'Hornfels':t==='cataclastic'?'Cataclasite':t==='mylonitic'?'Mylonite':(state.minerals||[]).includes('Calcite')?'Marble':(state.minerals||[]).includes('Quartz')?'Quartzite':'Granoblastic rock';}
  const minerals=state.minerals?.join(', ')||'not recorded';
  let protolith='Undetermined'; if(name==='Slate'||name==='Phyllite'||name==='Schist')protolith='Mudstone or shale'; if(name==='Marble')protolith='Limestone or dolostone'; if(name==='Quartzite')protolith='Quartz sandstone'; if(name==='Gneiss')protolith='Pelite or felsic igneous rock';
  return {name,ref:'Structural and mineralogical metamorphic classification',description:`A ${state.structure?.toLowerCase()||'metamorphic'} rock with ${state.texture?.toLowerCase()||'unrecorded'} mineral texture. Recorded mineral composition: ${minerals}.`,interpretation:`Estimated protolith: ${protolith}. The fabric reflects the metamorphic grade and dominant deformation or recrystallisation processes.`};
}

function generateDescription(){
  if(category==='carbonate'&&!getCarbonateResult()){showToast('Complete the relevant Dunham questions first');return}
  const r=classify(); $('#previewName').textContent=r.name; $('#rockOrb').textContent=r.name.split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
  showToast('Description and classification generated');
}

function runClassification(){
  if(category==='carbonate'&&!getCarbonateResult()){showToast('Complete the relevant Dunham questions first');return}
  const r=classify(); $('#previewName').textContent=r.name; $('#rockOrb').textContent=r.name.split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const name=$('#sampleName').value.trim()||'Unnamed sample';
  const location=$('#location').value.trim()||'Location not recorded';
  const observationLabels={texture:'Depositional texture',bound:'Components bound together',mud:'Carbonate mud content',support:'Grain support',grains:'Grain percentage'};
  const observations=Object.entries(state).filter(([k,v])=>k!=='carbonateComplete'&&v!==''&&v!==undefined&&( !Array.isArray(v)||v.length)).map(([k,v])=>`<div><span>${category==='carbonate'?(observationLabels[k]||k):k}</span><strong>${Array.isArray(v)?v.join(', '):k==='texture'&&category==='carbonate'?v==='Yes'?'Recognizable':'Not recognizable':v}</strong></div>`).join('');
  $('#resultContent').innerHTML=`<div class="result-head"><div class="rock-orb"><span>${r.name.split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase()}</span></div><div><p>ROCK IDENTIFICATION</p><h2 id="resultTitle">${r.name}</h2><span style="font-size:10px;color:#748078">${name} · ${location}</span></div></div><div class="result-grid"><section class="result-section"><h3>Observation Summary</h3><div class="result-list">${observations||'<div><span>No parameters</span><strong>Not observed</strong></div>'}</div></section><section class="result-section"><h3>Classification</h3><p><strong>${r.ref}</strong><br><br>This result is an interpretive classification based on the observations entered. Confirmation in thin section or laboratory analysis may be required.</p></section><section class="result-section full"><h3>Megascopic Description</h3><p>${r.description}</p></section><section class="result-section full"><h3>Geological Interpretation</h3><p>${r.interpretation}</p></section>${r.diagram?`<section class="result-section full"><h3>Classification Visualization</h3><div class="diagram"><div class="diagram-triangle"></div><div class="diagram-lines"></div></div></section>`:''}</div><div style="display:flex;justify-content:flex-end;margin-top:16px;gap:8px"><button class="text-button" id="editResult">Edit parameters</button><button class="run-button" id="saveResult">Save result</button></div>`;
  $('#modalBackdrop').hidden=false;
  $('#editResult').onclick=()=>{$('#modalBackdrop').hidden=true};
  $('#saveResult').onclick=()=>saveResult(r,name,location);
  applyTranslations();
}
function persistHistory(){
  history=history.slice(0,30);
  localStorage.setItem('petroid-history',JSON.stringify(history));
  updateHistoryCount();
}
function saveResult(r,name,location){
  history.unshift({id:Date.now(),category,name,location,rock:r.name,ref:r.ref,date:new Date().toLocaleString(),state:{...state},description:r.description});
  persistHistory(); showToast('Result saved to sample history');
}
function updateHistoryCount(){ $('#historyCount').textContent=history.length; }
function showHistory(){
  selectedHistoryIds.clear();
  renderHistory();
  $('#modalBackdrop').hidden=false;
}
function renderHistory(){
  const allSelected=history.length>0&&history.every((sample,index)=>selectedHistoryIds.has(String(sample.id??index)));
  const rows=history.map((sample,index)=>{
    const id=String(sample.id??index);
    return `<div class="history-row"><label class="history-select"><input type="checkbox" class="history-checkbox" data-history-id="${escapeHtml(id)}" ${selectedHistoryIds.has(id)?'checked':''}><span>${escapeHtml(sample.name)}</span></label><small>${escapeHtml(sample.location)} · ${escapeHtml(sample.date)}</small><div class="history-row-result"><strong>${escapeHtml(sample.rock)}</strong><button class="text-button load-history" data-index="${index}" style="height:auto">Load</button></div></div>`;
  }).join('');
  $('#resultContent').innerHTML=`<div class="result-head"><div class="rock-orb"><span>◷</span></div><div><p>SAMPLE ARCHIVE</p><h2 id="resultTitle">Identification History</h2></div></div><div class="result-grid" style="grid-template-columns:1fr"><section class="result-section full"><h3>Saved observations</h3>${history.length?`<div class="history-toolbar"><label><input id="historySelectAll" type="checkbox" ${allSelected?'checked':''}> <span>Select all</span></label><span id="historySelectedCount">${selectedHistoryIds.size} ${translateValue('selected')}</span><button id="deleteHistoryButton" class="history-delete-button" ${selectedHistoryIds.size?'':'disabled'}>Delete selected</button><button id="exportHistoryButton" class="history-export-button" ${selectedHistoryIds.size?'':'disabled'}>Export selected as PDF</button></div><div class="history-list">${rows}</div>`:'<p style="font-size:12px;color:#748078">No saved samples yet.</p>'}</section></div>`;
  $('#modalBackdrop').hidden=false;
  $$('.history-checkbox').forEach(box=>box.addEventListener('change',()=>{
    const id=box.dataset.historyId;
    if(box.checked)selectedHistoryIds.add(id);else selectedHistoryIds.delete(id);
    updateHistorySelection();
  }));
  $('#historySelectAll')?.addEventListener('change',event=>{
    selectedHistoryIds.clear();
    if(event.target.checked)history.forEach((sample,index)=>selectedHistoryIds.add(String(sample.id??index)));
    renderHistory();
  });
  $('#deleteHistoryButton')?.addEventListener('click',deleteSelectedHistory);
  $('#exportHistoryButton')?.addEventListener('click',exportSelectedHistory);
  $$('.load-history').forEach(button=>button.addEventListener('click',()=>{
    const sample=history[Number(button.dataset.index)];
    category=sample.category;state={...sample.state};$('#sampleName').value=sample.name;$('#location').value=sample.location;
    switchCategory(category);$('#modalBackdrop').hidden=true;
  }));
  applyTranslations();
}
function updateHistorySelection(){
  const allSelected=history.length>0&&history.every((sample,index)=>selectedHistoryIds.has(String(sample.id??index)));
  $('#historySelectAll').checked=allSelected;
  $('#historySelectedCount').textContent=`${selectedHistoryIds.size} ${translateValue('selected')}`;
  $('#deleteHistoryButton').disabled=selectedHistoryIds.size===0;
  $('#exportHistoryButton').disabled=selectedHistoryIds.size===0;
  applyTranslations();
}
function escapeHtml(value){
  return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function exportSelectedHistory(){
  const selected=history.filter((sample,index)=>selectedHistoryIds.has(String(sample.id??index)));
  if(!selected.length){showToast('Select samples to export');return}
  const observationLabels={texture:'Depositional texture',bound:'Components bound together',mud:'Carbonate mud content',support:'Grain support',grains:'Grain percentage',fresh:'Fresh color',weathered:'Weathered color',grain:'Grain size',roundness:'Roundness',packing:'Packing',structure:'Structure',crystallinity:'Crystallinity',crystalShape:'Crystal shape',crystalForm:'Crystal form',system:'Classification system',mafic:'Color index',sorting:'Sorting',hardness:'Hardness',primary:'Primary structures',secondary:'Secondary structures',foliation:'Foliation type',nonfoliation:'Non-foliated texture',texture:'Texture',minerals:'Minerals',shape:'Fragment shape'};
  const categoryLabels={igneous:'Igneous Rocks',sedimentary:'Sedimentary Rocks',carbonate:'Carbonate Rocks',pyroclastic:'Pyroclastic Rocks',metamorphic:'Metamorphic Rocks'};
  const documents=selected.map(sample=>{
    const observations=Object.entries(sample.state||{}).filter(([key,value])=>key!=='carbonateComplete'&&value!==''&&value!==undefined&&(!Array.isArray(value)||value.length)).map(([key,value])=>`<div class="history-print-observation"><span>${escapeHtml(translateValue(observationLabels[key]||key))}</span><strong>${escapeHtml(Array.isArray(value)?value.join(', '):value)}</strong></div>`).join('');
    const categoryName=translateValue(categoryLabels[sample.category]||sample.category);
    return `<article class="history-print-sample"><header><p>PetroID · ${escapeHtml(categoryName)}</p><h1>${escapeHtml(sample.name)}</h1><p>${escapeHtml(sample.location)} · ${escapeHtml(sample.date)}</p></header><section><h2>${escapeHtml(sample.rock)}</h2><p>${escapeHtml(sample.ref||'')}</p><h3>${escapeHtml(translateValue('Saved observations'))}</h3><div class="history-print-observations">${observations||`<p>${escapeHtml(translateValue('No observations yet'))}</p>`}</div><h3>${escapeHtml(translateValue('Megascopic Description'))}</h3><p>${escapeHtml(sample.description||'')}</p></section></article>`;
  }).join('');
  $('#resultContent').innerHTML=`<div class="history-print-document"><h1>${escapeHtml(translateValue('Selected samples'))}</h1>${documents}</div>`;
  document.body.classList.add('printing-history');
  window.print();
  document.body.classList.remove('printing-history');
  renderHistory();
}
function deleteSelectedHistory(){
  if(!selectedHistoryIds.size)return;
  if(!window.confirm(translateValue('Delete selected samples?')))return;
  history=history.filter((sample,index)=>!selectedHistoryIds.has(String(sample.id??index)));
  selectedHistoryIds.clear();
  persistHistory();
  renderHistory();
  showToast('Selected samples deleted');
}
function showToast(msg){const t=$('#toast');t.textContent=msg;applyTranslations(t);t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}

function switchCategory(cat){
  category=cat; state={};
  carbonateStep=1;
  $$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.category===cat));
  const m=categoryMeta[cat]; $('#eyebrow').textContent=m.eyebrow; $('#pageTitle').textContent=m.title; $('#previewReference').textContent=m.ref;
  $('#previewName').textContent='Awaiting observation'; $('#rockOrb').textContent=m.orb;
  $('#sampleName').value=''; $('#location').value=''; renderForm();
}

$$('.nav-item').forEach(b=>b.onclick=()=>switchCategory(b.dataset.category));
$('#brandButton').onclick=()=>switchCategory('igneous');
$('#resetButton').onclick=()=>switchCategory(category);
$('#runButton').onclick=runClassification;
$('#generateButton').onclick=generateDescription;
$('#historyButton').onclick=showHistory; $('#historyTopButton').onclick=showHistory;
$('#modalClose').onclick=()=>$('#modalBackdrop').hidden=true;
$('#modalBackdrop').onclick=e=>{if(e.target===e.currentTarget)e.currentTarget.hidden=true};
$('#exportButton').onclick=()=>{if(category==='carbonate'&&!getCarbonateResult()){showToast('Complete the relevant Dunham questions first');return}runClassification();setTimeout(()=>window.print(),200)};

$('#languageSelect').value=language;
$('#languageSelect').addEventListener('change',event=>{
  const selectedLanguage=event.target.value;
  if(!['en','id'].includes(selectedLanguage))return;
  language=selectedLanguage;
  localStorage.setItem('petroid-language',selectedLanguage);
  renderForm();
  applyTranslations();
});
switchCategory('igneous'); updateHistoryCount(); applyTranslations();
