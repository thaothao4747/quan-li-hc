/* QUAN LI HC - app bundle 20260718-light-core-16 */

if(new URLSearchParams(location.search).get('resetData')==='1'){localStorage.removeItem('qlkho-state');sessionStorage.removeItem('qlkho-login')}
var today=new Date().toISOString().slice(0,10);
var defaults={kho:[["KHO-TONG","Kho tá»•ng","Nguyá»…n Minh"],["KHO-HC","Kho HÃ nh chÃ­nh","Tráº§n Lan"],["KHO-CN1","Kho Chi nhÃ¡nh 1","LÃª HÃ "]],nhomHangList:["VÄƒn phÃ²ng pháº©m","CÃ´ng cá»¥ dá»¥ng cá»¥","Thiáº¿t bá»‹ IT"],dvtList:["CÃ¡i","Há»™p","Bá»™","Ram"],loaiNhapList:["Nháº­p mua má»›i","Nháº­p quÃ  táº·ng","Nháº­p tráº£ láº¡i"],nccList:["CÃ´ng ty VÄƒn phÃ²ng pháº©m An PhÃ¡t","Cá»­a hÃ ng Thiáº¿t bá»‹ Minh Long","NhÃ  cung cáº¥p khÃ¡c"],loaiXuatList:["Xuáº¥t cáº¥p phÃ¡t","Xuáº¥t táº·ng","Xuáº¥t Ä‘iá»u chuyá»ƒn ná»™i bá»™"],hang:[["VP001","Giáº¥y A4 Double A","VÄƒn phÃ²ng pháº©m","Ram","Khá»•: A4; Äá»‹nh lÆ°á»£ng: 70gsm"],["CC001","MÃ¡y khoan pin","CÃ´ng cá»¥ dá»¥ng cá»¥","CÃ¡i","Serial; Báº£o hÃ nh"],["TB001","Laptop Dell 5420","Thiáº¿t bá»‹ IT","CÃ¡i","RAM: 16GB; SSD: 512GB"],["VP002","BÃºt bi xanh","VÄƒn phÃ²ng pháº©m","Há»™p","MÃ u: xanh; 20 cÃ¢y/há»™p"]],thietBiIT:[["IT-001","SN-D5420-001","TB001","Nháº­p mua má»›i","2026-06-30","Nguyá»…n VÄƒn A","Äang sá»­ dá»¥ng","Laptop cáº¥p cho phÃ²ng HÃ nh chÃ­nh"],["IT-002","SN-D5420-002","TB001","Nháº­p quÃ  táº·ng","2026-06-30","Kho IT","Trong kho","MÃ¡y dá»± phÃ²ng"]],ton:{"KHO-TONG|VP001":120,"KHO-HC|VP001":22,"KHO-CN1|VP001":35,"KHO-TONG|CC001":4,"KHO-CN1|CC001":1,"KHO-TONG|TB001":3,"KHO-HC|TB001":1,"KHO-TONG|VP002":18,"KHO-HC|VP002":5},bd:[["2026-06-30","PN-0001","KHO-TONG","VP001","Nháº­p mua má»›i",100,0],["2026-06-30","PX-0001","KHO-HC","VP002","Xuáº¥t cáº¥p phÃ¡t",0,3]],chuyen:[]};
var state=loadState();
var nav=[['tongquan','Tá»•ng quan'],['ton','Tá»“n kho'],['nhap','Nháº­p kho'],['xuat','Xuáº¥t kho'],['thietbi','Thiáº¿t bá»‹ IT'],['chuyen','Äiá»u chuyá»ƒn'],['baocao','BÃ¡o cÃ¡o'],['hanghoa','HÃ ng hÃ³a'],['thietlap','Thiáº¿t láº­p']];
var mobile=[['tongquan','Tá»•ng quan'],['ton','Tá»“n'],['nhap','Nháº­p'],['xuat','Xuáº¥t'],['thietbi','IT'],['chuyen','Chuyá»ƒn'],['baocao','BÃ¡o cÃ¡o'],['thietlap','Thiáº¿t láº­p']];
var current='tongquan';
var screenHistory=[];
var SUPABASE_CONFIG={url:'https://jcavzbpjbvdbuskrtayf.supabase.co',anonKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjYXZ6YnBqYnZkYnVza3J0YXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODk4MDEsImV4cCI6MjA5ODU2NTgwMX0.-RQhPrHEF3WRlOPqzmxmumwzqdFNQ7dHHKTCz3E29PQ',stateId:'qlhc-main'};
var authDefaults={user:'admin',pass:'admin123'};
var auth=loadAuth();
var isLoggedIn=sessionStorage.getItem('qlkho-login')==='1';
function clone(x){return JSON.parse(JSON.stringify(x))}function mergeByKey(current,defs,keyIndex){current=Array.isArray(current)?current:[];defs.forEach(function(d){if(!current.some(function(x){return x&&x[keyIndex]===d[keyIndex]}))current.push(d)});return current}function cleanTextList(list,fallback){var src=Array.isArray(list)?list:clone(fallback||[]),out=[];src.forEach(function(v){v=String(v||'').trim();if(v&&!out.some(function(x){return x.toLowerCase()===v.toLowerCase()}))out.push(v)});return out}function cleanRows(list,fallback){return Array.isArray(list)?list:clone(fallback||[])}function hangUnit(h){return String(Array.isArray(h)?h[3]||'':h&&h.dvt||'').trim()}function cleanUserCatalogs(s){s=s||{};s.kho=cleanRows(s.kho,defaults.kho);s.hang=cleanRows(s.hang,defaults.hang);s.nhomHangList=cleanTextList(s.nhomHangList,defaults.nhomHangList);s.dvtList=cleanTextList(s.dvtList,defaults.dvtList);s.loaiNhapList=cleanTextList(s.loaiNhapList,defaults.loaiNhapList);s.loaiXuatList=cleanTextList(s.loaiXuatList,defaults.loaiXuatList);s.nccList=cleanTextList(s.nccList,defaults.nccList);s.ton=Object.assign({},s.ton||{});s.bd=Array.isArray(s.bd)?s.bd:clone(defaults.bd);s.chuyen=Array.isArray(s.chuyen)?s.chuyen:[];s.thietBiIT=cleanRows(s.thietBiIT,defaults.thietBiIT);s.receiverDeptList=Array.isArray(s.receiverDeptList)?s.receiverDeptList:[];var seen={};s.receiverDeptList=s.receiverDeptList.filter(function(x){var name=String(x&&x.name||'').trim(),key=name.toLowerCase();if(!name||key==='trong kho'||key==='kho it'||key==='chÆ°a gÃ¡n'||key==='chua gan'||seen[key])return false;seen[key]=1;x.name=name;x.dept=String(x.dept||'').trim();x.note=String(x.note||'').trim();return true}).sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});s.receiverList=s.receiverDeptList.map(function(x){return x.name});var usedUnit={};(s.hang||[]).forEach(function(h){var u=hangUnit(h).toLowerCase();if(u)usedUnit[u]=1});s.dvtList=s.dvtList.filter(function(v){var u=String(v||'').trim().toLowerCase();return u&&!(u==='ram'&&!usedUnit[u])});if(!s.dvtList.length)s.dvtList=['CÃ¡i'];s.__userOwnedCatalogs=true;return s}function migrateState(s){return cleanUserCatalogs(s)}function loadState(){try{var raw=localStorage.getItem('qlkho-state');if(raw)return migrateState(JSON.parse(raw)||{})}catch(e){}return migrateState(clone(defaults))}function save(){localStorage.setItem('qlkho-state',JSON.stringify(state))}function el(id){return document.getElementById(id)}function fmt(n){return new Intl.NumberFormat('vi-VN').format(n)}function nameKho(c){var f=state.kho.find(function(x){return x[0]===c});return f?f[1]:c}function item(c){return normalizeHang(state.hang.find(function(x){return x[0]===c})||[c,c,'','',''])}function fill(sel,arr){sel.innerHTML=arr.map(function(x){return '<option value="'+x[0]+'">'+x[1]+'</option>'}).join('')}function fillText(sel,arr){sel.innerHTML=arr.map(function(x){return '<option value="'+x+'">'+x+'</option>'}).join('')}function td(label,val,cls){return '<td data-label="'+label+'" class="'+(cls||'')+'">'+val+'</td>'}
function loadAuth(){try{return Object.assign({},authDefaults,JSON.parse(localStorage.getItem('qlkho-auth')||'{}'))}catch(e){return Object.assign({},authDefaults)}}function saveAuth(){localStorage.setItem('qlkho-auth',JSON.stringify(auth))}function showLogin(){var s=el('loginScreen');if(s)s.style.display=isLoggedIn?'none':'flex'}function login(){var u=el('loginUser').value.trim(),p=el('loginPass').value;if(u===auth.user&&p===auth.pass){isLoggedIn=true;sessionStorage.setItem('qlkho-login','1');if(el('loginPass'))el('loginPass').value='';if(el('loginError'))el('loginError').textContent='';showLogin();render()}else{if(el('loginError'))el('loginError').textContent='Sai tÃ i khoáº£n hoáº·c máº­t kháº©u'}}function logout(){isLoggedIn=false;sessionStorage.removeItem('qlkho-login');showLogin()}function bindAuth(){if(el('loginBtn'))el('loginBtn').onclick=login;if(el('loginPass'))el('loginPass').onkeydown=function(e){if(e.key==='Enter')login()}}function goBack(){var last=screenHistory.pop();if(last){current=last;render()}else{current='tongquan';render()}}
async function cloudRequest(method, body){if(!SUPABASE_CONFIG.url||!SUPABASE_CONFIG.anonKey)throw new Error('ChÆ°a cáº¥u hÃ¬nh Supabase');var endpoint=SUPABASE_CONFIG.url.replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(SUPABASE_CONFIG.stateId);var headers={'apikey':SUPABASE_CONFIG.anonKey,'Authorization':'Bearer '+SUPABASE_CONFIG.anonKey,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=representation'};var opts={method:method,headers:headers};if(body)opts.body=JSON.stringify(body);var res=await fetch(endpoint,opts);if(!res.ok)throw new Error(await res.text());return res.json()}
async function taiDuLieuOnline(){try{var rows=await cloudRequest('GET');if(rows&&rows[0]&&rows[0].data){state=migrateState(rows[0].data);save();alert('ÄÃ£ táº£i dá»¯ liá»‡u online');render()}else alert('ChÆ°a cÃ³ dá»¯ liá»‡u online')}catch(e){alert('KhÃ´ng táº£i Ä‘Æ°á»£c dá»¯ liá»‡u online: '+e.message)}}
async function dayDuLieuOnline(){try{await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:state,updated_at:new Date().toISOString()});alert('ÄÃ£ Ä‘áº©y dá»¯ liá»‡u lÃªn online')}catch(e){alert('KhÃ´ng Ä‘áº©y Ä‘Æ°á»£c dá»¯ liá»‡u online: '+e.message)}}
function buildNav(){el('sideNav').innerHTML=nav.map(function(n){return '<button class="nav '+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');el('mobileNav').innerHTML=mobile.map(function(n){return '<button class="'+(n[0]===current?'active':'')+'" onclick="'+(n[0]==='logout'?'logout()':'go(\''+n[0]+'\')')+'">'+n[1]+'</button>'}).join('')}
function shell(id,title,sub,body){var back=id==='tongquan'?'':'<div class="screen-tools"><button class="btn back-btn" type="button" onclick="goBack()">â† Trá»Ÿ láº¡i</button></div>';return '<section id="'+id+'" class="screen '+(current===id?'active':'')+'">'+back+'<div class="top"><div><h1>'+title+'</h1><p class="sub">'+sub+'</p></div></div>'+body+'</section>'}
function go(id){if(id===current)return;if(id!=='logout')screenHistory.push(current);current=id;render()}function render(){bindAuth();showLogin();if(!isLoggedIn)return;buildNav();var html='';html+=screenTongQuan();html+=screenKho();html+=screenHang();html+=screenThietBi();html+=screenNhap();html+=screenXuat();html+=screenChuyen();html+=screenTon();html+=screenBaoCao();html+=screenThietLap();el('main').innerHTML=html;bindForms();}
function normalizeHang(h){if(h&&h.length>=6)return [h[0],h[1],h[2],h[3],h[5]||''];return h||['','','','','']}function veTongQuanSauLuu(){current='tongquan';screenHistory=[];save();render()}function nextSlipNo(prefix){var max=0;state.bd.forEach(function(x){var no=String(x[1]||'');if(no.indexOf(prefix+'-')===0){var n=parseInt(no.replace(prefix+'-',''),10);if(!isNaN(n)&&n>max)max=n}});return prefix+'-'+String(max+1).padStart(4,'0')}function stockRows(){return Object.entries(state.ton).map(function(e){var p=e[0].split('|'),h=item(p[1]);return [p[0],p[1],h,e[1]]})}
function screenTongQuan(){var rows=stockRows(),total=Object.values(state.ton).reduce(function(a,b){return a+b},0);var bd=state.bd.slice().reverse().slice(0,10).map(function(x){return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+'</tr>'}).join('');var top=rows.slice().sort(function(a,b){return b[3]-a[3]}).slice(0,5).map(function(r){return '<p>'+r[2][1]+' - '+nameKho(r[0])+': <b>'+fmt(r[3])+' '+r[2][3]+'</b></p>'}).join('')||'<p class="hint">ChÆ°a cÃ³ tá»“n kho.</p>';return shell('tongquan','Tá»•ng quan kho','Theo dÃµi nhanh tá»“n kho vÃ  biáº¿n Ä‘á»™ng má»›i nháº¥t.','<div class="stats"><div class="card dash-card dash-green"><span>Tá»•ng kho</span><strong>'+state.kho.length+'</strong></div><div class="card dash-card dash-blue"><span>Máº·t hÃ ng</span><strong>'+state.hang.length+'</strong></div><div class="card dash-card dash-amber"><span>Tá»•ng tá»“n</span><strong>'+fmt(total)+'</strong></div><div class="card dash-card dash-rose"><span>Phiáº¿u phÃ¡t sinh</span><strong>'+state.bd.length+'</strong></div></div><div class="grid"><div class="panel panel-accent"><div class="head"><h2>Biáº¿n Ä‘á»™ng gáº§n Ä‘Ã¢y</h2><span class="tag">10 dÃ²ng má»›i nháº¥t</span></div><div class="wrap"><table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>Loáº¡i</th><th class="num">Nháº­p</th><th class="num">Xuáº¥t</th></tr></thead><tbody>'+bd+'</tbody></table></div></div><div class="panel panel-blue"><div class="head"><h2>Tá»“n nhiá»u nháº¥t</h2></div><div class="body">'+top+'</div></div></div>')}
function screenKho(){var rows=state.kho.map(function(x,i){return '<tr>'+td('MÃ£',x[0])+td('TÃªn kho',x[1])+td('Phá»¥ trÃ¡ch',x[2])+td('Tráº¡ng thÃ¡i','<span class="tag">Äang dÃ¹ng</span>')+td('', '<button class="btn small" onclick="editKho('+i+')">Sá»­a</button>')+'</tr>'}).join('');return shell('kho','Danh má»¥c kho','Táº¡o má»›i hoáº·c sá»­a thÃ´ng tin kho.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch kho</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn kho</th><th>Phá»¥ trÃ¡ch</th><th>Tráº¡ng thÃ¡i</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div>'+formKho('')+'</div>')}
function formKho(prefix){return '<div class="panel"><div class="head"><h2>ThÃ´ng tin kho</h2></div><div class="body form"><input id="'+prefix+'editKho" type="hidden"><label>MÃ£ kho<input id="'+prefix+'maKho"></label><label>TÃªn kho<input id="'+prefix+'tenKho"></label><label class="full">NgÆ°á»i phá»¥ trÃ¡ch<input id="'+prefix+'ptKho"></label><button class="btn primary" id="'+prefix+'luuKho">LÆ°u kho</button><button class="btn" id="'+prefix+'huyKho">Táº¡o má»›i</button></div></div>'}
function screenHang(){var rows=state.hang.map(function(raw,i){var x=normalizeHang(raw);return '<tr>'+td('MÃ£',x[0])+td('TÃªn hÃ ng',x[1])+td('NhÃ³m',x[2])+td('ÄVT',x[3])+td('Thuá»™c tÃ­nh',x[4])+td('', '<button class="btn small" onclick="editHang('+i+')">Sá»­a</button>')+'</tr>'}).join('');return shell('hanghoa','Danh má»¥c hÃ ng hÃ³a','HÃ ng hÃ³a dÃ¹ng nhÃ³m hÃ ng vÃ  Ä‘Æ¡n vá»‹ tÃ­nh tá»« pháº§n Thiáº¿t láº­p.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch hÃ ng hÃ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>Thuá»™c tÃ­nh</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin hÃ ng hÃ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="maHang" readonly></label><label>TÃªn hÃ ng<input id="tenHang"></label><label>NhÃ³m<select id="nhomHang"></select></label><label>ÄVT<select id="dvt"></select></label><label class="full">Thuá»™c tÃ­nh linh Ä‘á»™ng<input id="thuocTinh" placeholder="MÃ u: xanh; Size: L; Serial: báº¯t buá»™c"></label><button class="btn primary" id="luuHang">LÆ°u hÃ ng hÃ³a</button><button class="btn" id="huyHang">Táº¡o má»›i</button></div></div></div>')}
function normalizeThietBi(x){if(!x)return ['','','','','','','',''];if(x.length>=8)return x;return [x[0]||'', '', x[1]||'', x[2]||'', x[3]||'', x[4]||'', x[5]||'', x[6]||'']}function itItems(){return state.hang.filter(function(h){return normalizeHang(h)[2]==='Thiáº¿t bá»‹ IT'}).map(function(h){h=normalizeHang(h);return [h[0],h[0]+' - '+h[1]]})}function screenThietBi(){var rows=(state.thietBiIT||[]).map(function(raw,i){var x=normalizeThietBi(raw);var h=item(x[2]);return '<tr>'+td('MÃ£ ID',x[0])+td('Sá»‘ seri',x[1]||'')+td('Thiáº¿t bá»‹',h[1])+td('Nguá»“n nháº­p',x[3])+td('NgÃ y nháº­p',x[4])+td('Äang sá»­ dá»¥ng bá»Ÿi',x[5])+td('Tráº¡ng thÃ¡i','<span class="tag">'+x[6]+'</span>')+td('Ghi chÃº',x[7]||'')+td('', '<button class="btn small" onclick="editThietBi('+i+')">Sá»­a</button>')+'</tr>'}).join('')||'<tr><td class="empty" colspan="9">ChÆ°a cÃ³ thiáº¿t bá»‹ IT theo sá»‘ seri.</td></tr>';return shell('thietbi','Thiáº¿t bá»‹ IT theo sá»‘ seri','Theo dÃµi tá»«ng thiáº¿t bá»‹ theo sá»‘ seri, nguá»“n nháº­p, ngÃ y nháº­p vÃ  ngÆ°á»i Ä‘ang sá»­ dá»¥ng.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch thiáº¿t bá»‹</h2></div><div class="wrap"><table><thead><tr><th>MÃ£ ID</th><th>Sá»‘ seri</th><th>Thiáº¿t bá»‹</th><th>Nguá»“n nháº­p</th><th>NgÃ y nháº­p</th><th>Äang sá»­ dá»¥ng bá»Ÿi</th><th>Tráº¡ng thÃ¡i</th><th>Ghi chÃº</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin thiáº¿t bá»‹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label>MÃ£ ID tÃ i sáº£n<input id="maThietBi" placeholder="VD: IT-003"></label><label>Sá»‘ seri<input id="seriThietBi" placeholder="Serial trÃªn mÃ¡y/tem thiáº¿t bá»‹"></label><label>Máº·t hÃ ng IT<select id="hangThietBi"></select></label><label>Nguá»“n nháº­p<select id="nguonThietBi"></select></label><label>NgÃ y nháº­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÆ°á»i Ä‘ang sá»­ dá»¥ng<input id="nguoiDungThietBi" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban/kho"></label><label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Äang sá»­ dá»¥ng</option><option>Äang sá»­a chá»¯a</option><option>Thanh lÃ½</option><option>Tháº¥t láº¡c</option></select></label><label class="full">Ghi chÃº<input id="ghiChuThietBi" placeholder="Cáº¥u hÃ¬nh, tÃ¬nh tráº¡ng, chá»©ng tá»«..."></label><button class="btn primary" id="luuThietBi">LÆ°u thiáº¿t bá»‹</button><button class="btn" id="huyThietBi">Táº¡o má»›i</button></div></div></div>')}
function screenNhap(){return shell('nhap','Nháº­p kho','CÃ³ thá»ƒ chá»n hÃ ng cÃ³ sáºµn hoáº·c táº¡o nhanh hÃ ng hÃ³a má»›i ngay khi nháº­p.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label class="full">HÃ ng hÃ³a<select id="hangNhap"></select></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">Thuá»™c tÃ­nh linh Ä‘á»™ng<input id="nhapThuocTinhMoi" placeholder="MÃ u: xanh; Size: L; Serial: báº¯t buá»™c"></label><p class="hint full">Khi lÆ°u phiáº¿u nháº­p, hÃ ng hÃ³a má»›i sáº½ tá»± thÃªm vÃ o danh má»¥c hÃ ng hÃ³a.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')}
function screenXuat(){return shell('xuat','Xuáº¥t kho','Chá»n hÃ ng hÃ³a trÆ°á»›c, sau Ä‘Ã³ kho xuáº¥t chá»‰ hiá»‡n cÃ¡c kho cÃ²n tá»“n cá»§a hÃ ng Ä‘Ã³.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full">HÃ ng hÃ³a<select id="hangXuat"></select></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label>Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">Chá»n hÃ ng hÃ³a Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>')}
function screenChuyen(){var waiting=state.chuyen.filter(function(x){return x.st==='Chá» nháº­n'});var rows=waiting.length?waiting.map(function(x,i){return '<tr>'+td('Sá»‘ phiáº¿u',x.so)+td('Kho xuáº¥t',nameKho(x.tu))+td('Kho nháº­n',nameKho(x.den))+td('HÃ ng',item(x.hang)[1])+td('SL',x.sl,'num')+td('Tráº¡ng thÃ¡i','<span class="tag warn">'+x.st+'</span>')+td('', '<button class="btn primary small" onclick="nhan('+i+')">XÃ¡c nháº­n nháº­n</button>')+'</tr>'}).join(''):'<tr><td class="empty" colspan="7">KhÃ´ng cÃ³ phiáº¿u chá» nháº­n.</td></tr>';return shell('chuyen','Äiá»u chuyá»ƒn ná»™i bá»™','Kho nháº­n xÃ¡c nháº­n, há»‡ thá»‘ng tá»± sinh phiáº¿u nháº­p Ä‘iá»u chuyá»ƒn.','<div class="panel"><div class="head"><h2>Phiáº¿u chá» nháº­n</h2></div><div class="wrap"><table><thead><tr><th>Sá»‘ phiáº¿u</th><th>Kho xuáº¥t</th><th>Kho nháº­n</th><th>HÃ ng</th><th>SL</th><th>Tráº¡ng thÃ¡i</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div>')}
function stockSearchSuggestions(){var seen={};var out=[];stockRows().forEach(function(r){[nameKho(r[0]),r[1],r[2][1],r[2][2],r[2][3]].forEach(function(v){if(v&&!seen[v]){seen[v]=true;out.push(v)}})});return out}function screenTon(){var rows=stockRows().map(function(r){var text=[nameKho(r[0]),r[1],r[2][1],r[2][2],r[2][3],String(r[3])].join(' ').toLowerCase();return '<tr data-search="'+text.replace(/"/g,'')+'">'+td('Kho',nameKho(r[0]))+td('MÃ£ hÃ ng',r[1])+td('TÃªn hÃ ng',r[2][1])+td('NhÃ³m',r[2][2])+td('ÄVT',r[2][3])+td('Tá»“n',fmt(r[3]),'num')+td('Tráº¡ng thÃ¡i','<span class="tag">Äang theo dÃµi</span>')+'</tr>'}).join('');var opts=stockSearchSuggestions().map(function(x){return '<option value="'+x+'"></option>'}).join('');return shell('ton','Tá»“n kho','TÃ¬m nhanh theo kho, mÃ£ hÃ ng, tÃªn hÃ ng, nhÃ³m hÃ ng hoáº·c Ä‘Æ¡n vá»‹ tÃ­nh.','<div class="panel ton-search-panel-strong"><div class="head"><h2>TÃ¬m kiáº¿m tá»“n kho</h2><button class="btn" id="xoaTimTon" type="button">XÃ³a tÃ¬m</button></div><div class="body form"><label class="full ton-search-field">Search táº¥t cáº£<input id="timTon" list="goiYTon" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng, mÃ£ hÃ ng hoáº·c kho..."><datalist id="goiYTon">'+opts+'</datalist></label></div></div><div class="panel"><div class="head"><h2>Báº£ng tá»“n kho</h2><span class="tag" id="soDongTon"></span></div><div class="wrap"><table><thead><tr><th>Kho</th><th>MÃ£ hÃ ng</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>Tá»“n</th><th>Tráº¡ng thÃ¡i</th></tr></thead><tbody id="tonRowsBody">'+rows+'</tbody></table></div></div>')}
function screenBaoCao(){return shell('baocao','BÃ¡o cÃ¡o','BÃ¡o cÃ¡o chi tiáº¿t XNK, tá»“n tá»«ng kho, tá»•ng quan cÃ¡c kho vÃ  tá»“n theo hÃ ng hÃ³a.','<div class="tabs"><button class="btn tab active" onclick="showReport(\'xnk\',this)">Chi tiáº¿t XNK</button><button class="btn tab" onclick="showReport(\'tk\',this)">Tá»“n tá»«ng kho</button><button class="btn tab" onclick="showReport(\'tq\',this)">Tá»•ng quan</button><button class="btn tab" onclick="showReport(\'hh\',this)">Tá»“n theo hÃ ng</button><button class="btn tab" onclick="showReport(\'ncc\',this)">Tá»•ng há»£p NCC</button><button class="btn tab" onclick="showReport(\'it\',this)">Thiáº¿t bá»‹ IT</button></div><div class="panel"><div class="head"><h2 id="rpTitle">Chi tiáº¿t XNK</h2></div><div class="wrap" id="rp"></div></div>')}
function screenThietLap(){var nh=state.nhomHangList.map(function(x,i){return '<tr>'+td('NhÃ³m hÃ ng',x)+td('', '<button class="btn small" onclick="editNhom('+i+')">Sá»­a</button>')+'</tr>'}).join('');var dv=state.dvtList.map(function(x,i){return '<tr>'+td('ÄVT',x)+td('', '<button class="btn small" onclick="editDvt('+i+')">Sá»­a</button>')+'</tr>'}).join('');var ncc=state.nccList.map(function(x,i){return '<tr>'+td('NCC',x)+td('', '<button class="btn small" onclick="editNcc('+i+')">Sá»­a</button>')+'</tr>'}).join('');var lo=[];state.loaiNhapList.forEach(function(x,i){lo.push(['nhap',i,'Loáº¡i nháº­p',x])});state.loaiXuatList.forEach(function(x,i){lo.push(['xuat',i,'Loáº¡i xuáº¥t',x])});var lorows=lo.map(function(r){return '<tr>'+td('NhÃ³m',r[2])+td('TÃªn loáº¡i',r[3])+td('', '<button class="btn small" onclick="editLoai(\''+r[0]+'\','+r[1]+')">Sá»­a</button>')+'</tr>'}).join('');return shell('thietlap','Thiáº¿t láº­p danh má»¥c','Táº¡o vÃ  thay Ä‘á»•i kho, nhÃ³m hÃ ng, Ä‘Æ¡n vá»‹ tÃ­nh, nhÃ  cung cáº¥p, loáº¡i phiáº¿u. Danh má»¥c hÃ ng hÃ³a chá»‰nh á»Ÿ má»¥c HÃ ng hÃ³a.','<div class="two">'+formKho('set')+'<div class="panel"><div class="head"><h2>Danh sÃ¡ch kho</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn kho</th><th>Phá»¥ trÃ¡ch</th><th></th></tr></thead><tbody>'+state.kho.map(function(x,i){return '<tr>'+td('MÃ£',x[0])+td('TÃªn kho',x[1])+td('Phá»¥ trÃ¡ch',x[2])+td('', '<button class="btn small" onclick="editKhoSetup('+i+')">Sá»­a</button>')+'</tr>'}).join('')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃ³m hÃ ng</h2></div><div class="body form"><input id="editNhom" type="hidden"><label class="full">TÃªn nhÃ³m<input id="tenNhom"></label><button class="btn primary" id="luuNhom">LÆ°u nhÃ³m</button><button class="btn" id="huyNhom">Táº¡o má»›i</button></div><div class="wrap"><table><tbody>'+nh+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ÄÆ¡n vá»‹ tÃ­nh</h2></div><div class="body form"><input id="editDvt" type="hidden"><label class="full">TÃªn Ä‘Æ¡n vá»‹<input id="tenDvt"></label><button class="btn primary" id="luuDvt">LÆ°u ÄVT</button><button class="btn" id="huyDvt">Táº¡o má»›i</button></div><div class="wrap"><table><tbody>'+dv+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃ  cung cáº¥p</h2></div><div class="body form"><input id="editNcc" type="hidden"><label class="full">TÃªn NCC<input id="tenNcc"></label><button class="btn primary" id="luuNcc">LÆ°u NCC</button><button class="btn" id="huyNcc">Táº¡o má»›i</button></div><div class="wrap"><table><tbody>'+ncc+'</tbody></table></div></div><div class="panel"><div class="head"><h2>Loáº¡i phiáº¿u</h2></div><div class="body form"><input id="editLoai" type="hidden"><label>NhÃ³m<select id="loaiNghiepVu"><option value="nhap">Loáº¡i nháº­p</option><option value="xuat">Loáº¡i xuáº¥t</option></select></label><label>TÃªn loáº¡i<input id="tenLoai"></label><button class="btn primary" id="luuLoai">LÆ°u loáº¡i</button><button class="btn" id="huyLoai">Táº¡o má»›i</button></div><div class="wrap"><table><tbody>'+lorows+'</tbody></table></div></div></div>')}
function khoCoTonTheoHang(maHang){return state.kho.filter(function(k){return (state.ton[k[0]+'|'+maHang]||0)>0}).map(function(k){return [k[0],k[1]+' - tá»“n '+fmt(state.ton[k[0]+'|'+maHang]||0)]})}function capNhatKhoXuatTheoHang(){if(!el('hangXuat')||!el('khoXuat'))return;var ma=el('hangXuat').value;var ds=khoCoTonTheoHang(ma);if(ds.length){fill(el('khoXuat'),ds);if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='Chá»‰ hiá»ƒn thá»‹ kho cÃ²n tá»“n cá»§a hÃ ng Ä‘Ã£ chá»n.'}else{el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HÃ ng nÃ y hiá»‡n chÆ°a cÃ³ tá»“n á»Ÿ kho nÃ o.'}}function bindForms(){['khoNhap','khoNhan'].forEach(function(id){if(el(id))fill(el(id),state.kho)});['hangNhap','hangXuat'].forEach(function(id){if(el(id))fill(el(id),state.hang.map(function(x){var h=normalizeHang(x);return [h[0],h[0]+' - '+h[1]]}))});if(el('hangXuat')){el('hangXuat').onchange=capNhatKhoXuatTheoHang;capNhatKhoXuatTheoHang();}if(el('nhomHang'))fillText(el('nhomHang'),state.nhomHangList);if(el('nhapNhomHangMoi'))fillText(el('nhapNhomHangMoi'),state.nhomHangList);if(el('dvt'))fillText(el('dvt'),state.dvtList);if(el('nhapDvtMoi'))fillText(el('nhapDvtMoi'),state.dvtList);if(el('loaiNhap'))fillText(el('loaiNhap'),state.loaiNhapList);if(el('nccNhap'))fillText(el('nccNhap'),state.nccList);if(el('loaiXuat'))fillText(el('loaiXuat'),state.loaiXuatList);bindKho('');bindKho('set');if(el('hangThietBi'))fill(el('hangThietBi'),itItems().length?itItems():state.hang.map(function(x){return [x[0],x[0]+' - '+x[1]]}));if(el('nguonThietBi'))fillText(el('nguonThietBi'),state.loaiNhapList.concat(['Äiá»u chuyá»ƒn ná»™i bá»™','KhÃ¡c']));if(el('luuThietBi'))el('luuThietBi').onclick=saveThietBi;if(el('huyThietBi'))el('huyThietBi').onclick=resetThietBi;if(el('luuHang'))el('luuHang').onclick=saveHang;if(el('huyHang'))el('huyHang').onclick=resetHang;if(el('batHangMoi'))el('batHangMoi').onclick=function(){var box=el('hangMoiBox');var show=box.style.display==='none';box.style.display=show?'block':'none';el('hangNhap').disabled=show;el('batHangMoi').textContent=show?'Chá»n hÃ ng cÃ³ sáºµn':'+ Táº¡o hÃ ng hÃ³a má»›i'};if(el('luuNhap'))el('luuNhap').onclick=saveNhap;if(el('luuXuat'))el('luuXuat').onclick=saveXuat;if(el('luuNhom'))el('luuNhom').onclick=saveNhom;if(el('huyNhom'))el('huyNhom').onclick=resetNhom;if(el('luuDvt'))el('luuDvt').onclick=saveDvt;if(el('huyDvt'))el('huyDvt').onclick=resetDvt;if(el('dayOnline'))el('dayOnline').onclick=dayDuLieuOnline;if(el('taiOnline'))el('taiOnline').onclick=taiDuLieuOnline;if(el('xoaDuLieuCu'))el('xoaDuLieuCu').onclick=xoaDuLieuCu;if(el('capNhatDuLieu'))el('capNhatDuLieu').onclick=capNhatDuLieuMau;if(el('luuBaoMat'))el('luuBaoMat').onclick=saveBaoMat;if(el('luuNcc'))el('luuNcc').onclick=saveNcc;if(el('huyNcc'))el('huyNcc').onclick=resetNcc;if(el('luuLoai'))el('luuLoai').onclick=saveLoai;if(el('huyLoai'))el('huyLoai').onclick=resetLoai;if(current==='ton')bindSearchTon();if(current==='baocao')showReport('xnk')}
function bindSearchTon(){var input=el('timTon'),clear=el('xoaTimTon'),badge=el('soDongTon');if(!input)return;function apply(){var q=input.value.trim().toLowerCase();var rows=[].slice.call(document.querySelectorAll('#tonRowsBody tr'));var shown=0;rows.forEach(function(r){var ok=!q||r.getAttribute('data-search').indexOf(q)>=0;r.style.display=ok?'':'none';if(ok)shown++});if(badge)badge.textContent=shown+' dÃ²ng'}input.oninput=apply;if(clear)clear.onclick=function(){input.value='';apply();input.focus()};apply()}function bindKho(p){if(el(p+'luuKho'))el(p+'luuKho').onclick=function(){saveKho(p)};if(el(p+'huyKho'))el(p+'huyKho').onclick=function(){resetKho(p)}}function saveKho(p){if(!el(p+'maKho').value||!el(p+'tenKho').value)return alert('Nháº­p mÃ£ kho vÃ  tÃªn kho');var i=el(p+'editKho').value;if(i==='')state.kho.push([el(p+'maKho').value,el(p+'tenKho').value,el(p+'ptKho').value||'ChÆ°a gÃ¡n']);else{state.kho[Number(i)][1]=el(p+'tenKho').value;state.kho[Number(i)][2]=el(p+'ptKho').value||'ChÆ°a gÃ¡n'}save();render()}function resetKho(p){[p+'editKho',p+'maKho',p+'tenKho',p+'ptKho'].forEach(function(id){if(el(id))el(id).value=''});if(el(p+'maKho'))el(p+'maKho').disabled=false}function editKho(i){go('kho');setTimeout(function(){fillKho('',i)},0)}function editKhoSetup(i){fillKho('set',i)}function fillKho(p,i){el(p+'editKho').value=i;el(p+'maKho').value=state.kho[i][0];el(p+'maKho').disabled=true;el(p+'tenKho').value=state.kho[i][1];el(p+'ptKho').value=state.kho[i][2]}
function editHang(i){var h=normalizeHang(state.hang[i]);el('editHang').value=i;el('maHang').value=h[0];el('maHang').disabled=true;el('tenHang').value=h[1];el('nhomHang').value=h[2];el('dvt').value=h[3];el('thuocTinh').value=h[4]}function resetHang(){['editHang','maHang','tenHang','thuocTinh'].forEach(function(id){el(id).value=''});el('maHang').disabled=false}function saveHang(){if(!el('maHang').value||!el('tenHang').value)return alert('Nháº­p mÃ£ hÃ ng vÃ  tÃªn hÃ ng');var row=[el('maHang').value,el('tenHang').value,el('nhomHang').value,el('dvt').value,el('thuocTinh').value];var i=el('editHang').value;if(i==='')state.hang.push(row);else state.hang[Number(i)]=row;save();render()}
function editThietBi(i){var x=normalizeThietBi(state.thietBiIT[i]);el('editThietBi').value=i;el('maThietBi').value=x[0];el('maThietBi').disabled=true;el('seriThietBi').value=x[1]||'';el('hangThietBi').value=x[2];el('nguonThietBi').value=x[3];el('ngayThietBi').value=x[4];el('nguoiDungThietBi').value=x[5];el('trangThaiThietBi').value=x[6];el('ghiChuThietBi').value=x[7]||''}function resetThietBi(){['editThietBi','maThietBi','seriThietBi','nguoiDungThietBi','ghiChuThietBi'].forEach(function(id){if(el(id))el(id).value=''});if(el('maThietBi'))el('maThietBi').disabled=false;if(el('ngayThietBi'))el('ngayThietBi').value=today;if(el('trangThaiThietBi'))el('trangThaiThietBi').value='Trong kho'}function saveThietBi(){if(!state.thietBiIT)state.thietBiIT=[];var ma=el('maThietBi').value.trim();var seri=el('seriThietBi').value.trim();if(!ma)return alert('Nháº­p mÃ£ ID tÃ i sáº£n');var row=[ma,seri,el('hangThietBi').value,el('nguonThietBi').value,el('ngayThietBi').value,el('nguoiDungThietBi').value||'Trong kho',el('trangThaiThietBi').value,el('ghiChuThietBi').value];var i=el('editThietBi').value;if(i===''){if(state.thietBiIT.some(function(raw){var x=normalizeThietBi(raw);return x[0]===ma}))return alert('MÃ£ ID nÃ y Ä‘Ã£ tá»“n táº¡i');if(seri&&state.thietBiIT.some(function(raw){var x=normalizeThietBi(raw);return x[1]===seri}))return alert('Sá»‘ seri nÃ y Ä‘Ã£ tá»“n táº¡i');state.thietBiIT.push(row)}else{if(seri&&state.thietBiIT.some(function(raw,idx){var x=normalizeThietBi(raw);return idx!==Number(i)&&x[1]===seri}))return alert('Sá»‘ seri nÃ y Ä‘Ã£ tá»“n táº¡i');state.thietBiIT[Number(i)]=row}save();render()}function saveNhap(){var maHang=el('hangNhap').value;if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){var ma=el('nhapMaHangMoi').value.trim();var ten=el('nhapTenHangMoi').value.trim();if(!ma||!ten)return alert('Nháº­p mÃ£ hÃ ng vÃ  tÃªn hÃ ng má»›i');if(state.hang.some(function(h){return h[0]===ma}))return alert('MÃ£ hÃ ng Ä‘Ã£ tá»“n táº¡i trong danh má»¥c');state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,el('nhapThuocTinhMoi').value]);maHang=ma}var key=el('khoNhap').value+'|'+maHang,sl=Number(el('slNhap').value);state.ton[key]=(state.ton[key]||0)+sl;state.bd.push([today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value]);alert('ÄÃ£ lÆ°u phiáº¿u nháº­p');veTongQuanSauLuu()}function saveXuat(){if(!el('khoXuat').value)return alert('HÃ ng nÃ y chÆ°a cÃ³ kho cÃ²n tá»“n Ä‘á»ƒ xuáº¥t');var key=el('khoXuat').value+'|'+el('hangXuat').value,sl=Number(el('slXuat').value);if((state.ton[key]||0)<sl)return alert('KhÃ´ng Ä‘á»§ tá»“n Ä‘á»ƒ xuáº¥t');state.ton[key]-=sl;state.bd.push([today,el('soXuat').value,el('khoXuat').value,el('hangXuat').value,el('loaiXuat').value,0,sl]);if(el('loaiXuat').value==='Xuáº¥t Ä‘iá»u chuyá»ƒn ná»™i bá»™')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:el('hangXuat').value,sl:sl,st:'Chá» nháº­n'});alert('ÄÃ£ lÆ°u phiáº¿u xuáº¥t');veTongQuanSauLuu()}function nhan(i){var w=state.chuyen.filter(function(x){return x.st==='Chá» nháº­n'}),x=w[i];x.st='HoÃ n táº¥t';var key=x.den+'|'+x.hang;state.ton[key]=(state.ton[key]||0)+x.sl;state.bd.push([today,'PN-DC-'+x.so,x.den,x.hang,'Nháº­p Ä‘iá»u chuyá»ƒn',x.sl,0]);alert('ÄÃ£ nháº­n hÃ ng vÃ  tá»± sinh phiáº¿u nháº­p Ä‘iá»u chuyá»ƒn');veTongQuanSauLuu()}
function xoaDuLieuCu(){if(confirm('XÃ³a dá»¯ liá»‡u cÃ…Â© trÃªn mÃ¡y nÃ y vÃ  náº¡p láº¡i dá»¯ liá»‡u máº«u má»›i?')){localStorage.removeItem('qlkho-state');location.href=location.pathname+'?resetData=1&v='+Date.now()}}function capNhatDuLieuMau(){state=migrateState(state);save();alert('ÄÃ£ cáº­p nháº­t dá»¯ liá»‡u vÃ  danh má»¥c má»›i');render()}function saveBaoMat(){var user=el('tenDangNhap').value.trim()||'admin';var old=el('matKhauCu').value;var p1=el('matKhauMoi').value;var p2=el('matKhauMoi2').value;if(old!==auth.pass)return alert('Máº­t kháº©u hiá»‡n táº¡i khÃ´ng Ä‘Ãºng');if(!p1||p1.length<4)return alert('Máº­t kháº©u má»›i nÃªn cÃ³ Ã­t nháº¥t 4 kÃ½ tá»±');if(p1!==p2)return alert('Nháº­p láº¡i máº­t kháº©u má»›i chÆ°a khá»›p');auth={user:user,pass:p1};saveAuth();alert('ÄÃ£ Ä‘á»•i thÃ´ng tin Ä‘Äƒng nháº­p');logout()}function editNhom(i){el('editNhom').value=i;el('tenNhom').value=state.nhomHangList[i]}function resetNhom(){el('editNhom').value='';el('tenNhom').value=''}function saveNhom(){var v=el('tenNhom').value.trim();if(!v)return alert('Nháº­p tÃªn nhÃ³m');var i=el('editNhom').value;if(i==='')state.nhomHangList.push(v);else{var old=state.nhomHangList[Number(i)];state.nhomHangList[Number(i)]=v;state.hang.forEach(function(h){if(h[2]===old)h[2]=v})}save();render()}function editDvt(i){el('editDvt').value=i;el('tenDvt').value=state.dvtList[i]}function resetDvt(){el('editDvt').value='';el('tenDvt').value=''}function saveDvt(){var v=el('tenDvt').value.trim();if(!v)return alert('Nháº­p Ä‘Æ¡n vá»‹ tÃ­nh');var i=el('editDvt').value;if(i==='')state.dvtList.push(v);else{var old=state.dvtList[Number(i)];state.dvtList[Number(i)]=v;state.hang.forEach(function(h){if(h[3]===old)h[3]=v})}save();render()}function editNcc(i){el('editNcc').value=i;el('tenNcc').value=state.nccList[i]}function resetNcc(){el('editNcc').value='';el('tenNcc').value=''}function saveNcc(){var v=el('tenNcc').value.trim();if(!v)return alert('Nháº­p tÃªn NCC');var i=el('editNcc').value;if(i==='')state.nccList.push(v);else{var old=state.nccList[Number(i)];state.nccList[Number(i)]=v;state.bd.forEach(function(b){if(b[7]===old)b[7]=v})}save();render()}function editLoai(t,i){el('editLoai').value=i;el('loaiNghiepVu').value=t;el('tenLoai').value=(t==='nhap'?state.loaiNhapList:state.loaiXuatList)[i]}function resetLoai(){el('editLoai').value='';el('tenLoai').value='';el('loaiNghiepVu').value='nhap'}function saveLoai(){var v=el('tenLoai').value.trim();if(!v)return alert('Nháº­p tÃªn loáº¡i phiáº¿u');var list=el('loaiNghiepVu').value==='nhap'?state.loaiNhapList:state.loaiXuatList;var i=el('editLoai').value;if(i==='')list.push(v);else list[Number(i)]=v;save();render()}
function showKhoDetail(maKho){var rows=stockRows().filter(function(r){return r[0]===maKho&&r[3]>0});var html='<div class="panel" style="box-shadow:none;margin-top:12px"><div class="head"><h2>Chi tiáº¿t tá»“n: '+nameKho(maKho)+'</h2><button class="btn small" onclick="showReport(\'tk\')">ÄÃ³ng chi tiáº¿t</button></div><div class="wrap"><table><thead><tr><th>MÃ£ hÃ ng</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>Tá»“n</th></tr></thead><tbody>'+rows.map(function(r){return '<tr>'+td('MÃ£ hÃ ng',r[1])+td('TÃªn hÃ ng',r[2][1])+td('NhÃ³m',r[2][2])+td('ÄVT',r[2][3])+td('Tá»“n',fmt(r[3]),'num')+'</tr>'}).join('')+'</tbody></table></div></div>';if(el('rpDetail'))el('rpDetail').innerHTML=html}function showReport(mode,btn){if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}var title={xnk:'Chi tiáº¿t XNK',tk:'Tá»“n tá»«ng kho',tq:'Tá»•ng quan',hh:'Tá»“n theo hÃ ng hÃ³a',ncc:'Tá»•ng há»£p theo NCC',it:'Thiáº¿t bá»‹ IT theo ngÆ°á»i dÃ¹ng'}[mode];if(!el('rp'))return;el('rpTitle').textContent=title;var html='';if(mode==='xnk')html='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC</th><th>Nháº­p</th><th>Xuáº¥t</th></tr></thead><tbody>'+state.bd.slice().reverse().map(function(x){return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+'</tr>'}).join('')+'</tbody></table>';if(mode==='tk')html='<p class="hint">Báº¥m vÃ o tÃªn kho Ä‘á»ƒ xem chi tiáº¿t cÃ¡c máº·t hÃ ng Ä‘ang tá»“n.</p><table><thead><tr><th>Kho</th><th>Tá»•ng tá»“n</th></tr></thead><tbody>'+state.kho.map(function(k){var s=Object.entries(state.ton).filter(function(e){return e[0].startsWith(k[0]+'|')}).reduce(function(a,e){return a+e[1]},0);return '<tr>'+td('Kho','<button class="btn small" onclick="showKhoDetail(\''+k[0]+'\')">'+k[1]+'</button>')+td('Tá»•ng tá»“n',fmt(s),'num')+'</tr>'}).join('')+'</tbody></table><div id="rpDetail"></div>';if(mode==='tq')html='<table><tbody>'+td('Chá»‰ tiÃªu','Tá»•ng kho')+td('GiÃ¡ trá»‹',state.kho.length,'num')+td('Chá»‰ tiÃªu','Tá»•ng hÃ ng hÃ³a')+td('GiÃ¡ trá»‹',state.hang.length,'num')+td('Chá»‰ tiÃªu','Tá»•ng tá»“n')+td('GiÃ¡ trá»‹',fmt(Object.values(state.ton).reduce(function(a,b){return a+b},0)),'num')+'</tbody></table>';if(mode==='hh')html='<table><tbody>'+state.hang.map(function(h){var s=Object.entries(state.ton).filter(function(e){return e[0].endsWith('|'+h[0])}).reduce(function(a,e){return a+e[1]},0);return '<tr>'+td('MÃ£ hÃ ng',h[0])+td('TÃªn hÃ ng',h[1])+td('ÄVT',normalizeHang(h)[3])+td('Tá»•ng tá»“n',fmt(s),'num')+'</tr>'}).join('')+'</tbody></table>';if(mode==='it'){var m={};(state.thietBiIT||[]).forEach(function(x){x=normalizeThietBi(x);var key=x[5]||'ChÆ°a gÃ¡n';if(!m[key])m[key]={total:0,using:0,stock:0};m[key].total+=1;if(x[6]==='Äang sá»­ dá»¥ng')m[key].using+=1;if(x[6]==='Trong kho')m[key].stock+=1});html='<table><thead><tr><th>NgÆ°á»i/phÃ²ng ban</th><th>Tá»•ng thiáº¿t bá»‹</th><th>Äang sá»­ dá»¥ng</th><th>Trong kho</th></tr></thead><tbody>'+Object.keys(m).map(function(k){return '<tr>'+td('NgÆ°á»i/phÃ²ng ban',k)+td('Tá»•ng thiáº¿t bá»‹',m[k].total,'num')+td('Äang sá»­ dá»¥ng',m[k].using,'num')+td('Trong kho',m[k].stock,'num')+'</tr>'}).join('')+'</tbody></table>'}if(mode==='ncc'){var m={};state.bd.forEach(function(x){if((x[5]||0)>0){var key=x[7]||'ChÆ°a chá»n NCC';if(!m[key])m[key]={qty:0,slip:0};m[key].qty+=Number(x[5]||0);m[key].slip+=1}});html='<table><thead><tr><th>NCC</th><th>Sá»‘ phiáº¿u nháº­p</th><th>Tá»•ng sá»‘ lÆ°á»£ng nháº­p</th></tr></thead><tbody>'+Object.keys(m).map(function(k){return '<tr>'+td('NCC',k)+td('Sá»‘ phiáº¿u nháº­p',m[k].slip,'num')+td('Tá»•ng sá»‘ lÆ°á»£ng nháº­p',fmt(m[k].qty),'num')+'</tr>'}).join('')+'</tbody></table>'}el('rp').innerHTML=html}
render();
var deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredInstallPrompt=e;var b=document.getElementById('installApp');if(b)b.style.display='inline-block'});
document.addEventListener('click',function(e){if(e.target&&e.target.id==='installApp'){if(deferredInstallPrompt){deferredInstallPrompt.prompt();deferredInstallPrompt.userChoice.finally(function(){deferredInstallPrompt=null})}else{alert('TrÃªn Ä‘iá»‡n thoáº¡i, má»Ÿ menu trÃ¬nh duyá»‡t rá»“i chá»n ThÃªm vÃ o mÃ n hÃ¬nh chÃ­nh. Vá»›i iPhone: Chia sáº» > ThÃªm vÃ o MH chÃ­nh.')}}});
if(('serviceWorker' in navigator) && location.protocol.indexOf('http')===0){window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js?v=20260718-light-core-16').catch(function(){})})}
;

window.__onlinePatch=true;
(function(){
  function addOnlineButtons(){
    var main=document.getElementById('main');
    if(!main || document.getElementById('onlineSyncPanel'))return;
    var active=document.querySelector('.screen.active');
    if(!active || active.id!=='thietlap')return;
    var panel=document.createElement('div');
    panel.className='panel';
    panel.id='onlineSyncPanel';
    panel.innerHTML='<div class="head"><h2>Äá»“ng bá»™ online</h2></div><div class="body form"><button class="btn primary" id="onlinePushBtn" type="button">Äáº©y dá»¯ liá»‡u online</button><button class="btn" id="onlinePullBtn" type="button">Táº£i dá»¯ liá»‡u online</button><p class="hint full">LÆ°u dá»¯ liá»‡u lÃªn Supabase vÃ  táº£i láº¡i trÃªn Ä‘iá»‡n thoáº¡i hoáº·c mÃ¡y khÃ¡c.</p></div>';
    var first=active.querySelector('.two,.grid,.panel');
    if(first)active.insertBefore(panel,first); else active.appendChild(panel);
    document.getElementById('onlinePushBtn').onclick=function(){dayDuLieuOnline()};
    document.getElementById('onlinePullBtn').onclick=function(){taiDuLieuOnline()};
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'){
    window.render=function(){oldRender.apply(this,arguments);setTimeout(addOnlineButtons,0)};
  }
  document.addEventListener('click',function(){setTimeout(addOnlineButtons,50)});
  setTimeout(addOnlineButtons,100);
})();

;(function(){
  if(window.__reliableMobileSyncAndPhotoSave20260718)return;window.__reliableMobileSyncAndPhotoSave20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var syncTimer=null,applyingRemote=false,rawSetItem=null;
  try{rawSetItem=Storage&&Storage.prototype&&Storage.prototype.setItem}catch(e){}
  function byId(id){return document.getElementById(id)}
  function getState(){try{return typeof state!=='undefined'?state:window.state}catch(e){return window.state}}
  function nowIso(){return new Date().toISOString()}
  function endpoint(){
    var cfg=window.SUPABASE_CONFIG||{};
    if(!cfg.url||!cfg.anonKey||!cfg.stateId)return '';
    return cfg.url.replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(cfg.stateId);
  }
  function headers(){
    var key=(window.SUPABASE_CONFIG||{}).anonKey||'';
    return {'apikey':key,'Authorization':'Bearer '+key,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=representation'};
  }
  function notice(msg){
    try{
      var old=byId('reliableSyncNotice');if(old)old.remove();
      var box=document.createElement('div');box.id='reliableSyncNotice';box.textContent=msg;
      box.style.cssText='position:fixed;left:50%;bottom:82px;transform:translateX(-50%);z-index:99999;background:#10251d;color:#fff;padding:9px 13px;border-radius:999px;font-size:13px;box-shadow:0 10px 24px rgba(0,0,0,.2);max-width:calc(100vw - 24px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
      document.body.appendChild(box);
      setTimeout(function(){if(box&&box.parentNode)box.remove()},1900);
    }catch(e){}
  }
  function saveLocalRaw(){
    var s=getState();if(!s)return false;
    try{
      if(!rawSetItem)rawSetItem=Storage.prototype.setItem;
      rawSetItem.call(localStorage,'qlkho-state',JSON.stringify(s));
      return true;
    }catch(e){
      try{rawSetItem&&rawSetItem.call(localStorage,'qlhc-local-save-error',String(e&&e.message||e||''))}catch(_){}
      return false;
    }
  }
  async function pushOnlineNow(showNotice){
    var s=getState(),url=endpoint();
    if(!s||!url||!window.fetch)return false;
    try{
      s.__updatedAt=nowIso();
      if(!applyingRemote)saveLocalRaw();
      var stamp=Date.now();
      var res=await fetch(url,{method:'POST',headers:headers(),body:JSON.stringify({id:SUPABASE_CONFIG.stateId,data:s,updated_at:new Date(stamp).toISOString()})});
      if(!res.ok)throw new Error(await res.text());
      try{
        localStorage.setItem('qlhc-pending-online-sync','0');
        localStorage.setItem('qlhc-last-remote-stamp',String(stamp));
        localStorage.setItem('qlhc-last-online-sync',new Date(stamp).toISOString());
      }catch(e){}
      if(showNotice)notice('ÄÃ£ Ä‘á»“ng bá»™ online');
      return true;
    }catch(e){
      try{
        localStorage.setItem('qlhc-pending-online-sync','1');
        localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e||''));
      }catch(_){}
      if(showNotice)notice('ChÆ°a Ä‘á»“ng bá»™ Ä‘Æ°á»£c, app sáº½ tá»± thá»­ láº¡i');
      return false;
    }
  }
  async function pullOnlineNow(showNotice){
    var url=endpoint();if(!url||!window.fetch)return false;
    try{
      var pending=localStorage.getItem('qlhc-pending-online-sync')==='1';
      if(pending){await pushOnlineNow(false);return true}
      var res=await fetch(url,{method:'GET',headers:headers()});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(!rows||!rows[0]||!rows[0].data){if(showNotice)notice('ChÆ°a cÃ³ dá»¯ liá»‡u online');return false}
      var remoteStamp=Date.parse(rows[0].updated_at||(rows[0].data&&rows[0].data.__updatedAt)||'')||0;
      var localStamp=Date.parse((getState()||{}).__updatedAt||'')||Number(localStorage.getItem('qlhc-last-local-change')||0)||0;
      if(remoteStamp&&localStamp&&remoteStamp+500<localStamp)return false;
      applyingRemote=true;
      try{
        state=typeof migrateState==='function'?migrateState(rows[0].data):rows[0].data;
        window.state=state;
        saveLocalRaw();
        localStorage.setItem('qlhc-last-remote-stamp',String(remoteStamp||Date.now()));
      }finally{applyingRemote=false}
      if(typeof render==='function')render();
      if(showNotice)notice('ÄÃ£ táº£i dá»¯ liá»‡u online');
      return true;
    }catch(e){
      if(showNotice)notice('ChÆ°a táº£i Ä‘Æ°á»£c dá»¯ liá»‡u online');
      return false;
    }
  }
  function scheduleSync(){
    if(applyingRemote)return;
    try{
      localStorage.setItem('qlhc-pending-online-sync','1');
      localStorage.setItem('qlhc-last-local-change',String(Date.now()));
    }catch(e){}
    clearTimeout(syncTimer);
    syncTimer=setTimeout(function(){pushOnlineNow(false)},900);
  }
  function installStorageWatch(){
    try{
      if(!Storage||!Storage.prototype||Storage.prototype.__qlhcReliableSyncWatch)return;
      var old=Storage.prototype.setItem;
      rawSetItem=old;
      Storage.prototype.setItem=function(k,v){
        var out=old.apply(this,arguments);
        if(k==='qlkho-state'&&!applyingRemote)scheduleSync();
        return out;
      };
      Storage.prototype.__qlhcReliableSyncWatch=true;
    }catch(e){}
  }
  function installSaveWatch(){
    var oldSave=window.save;
    if(typeof oldSave==='function'&&!oldSave.__reliableMobileSyncAndPhotoSave20260718){
      window.save=function(){
        var ok=saveLocalRaw();
        if(!applyingRemote)scheduleSync();
        return ok;
      };
      window.save.__reliableMobileSyncAndPhotoSave20260718=true;
    }
    window.dayDuLieuOnline=function(){return pushOnlineNow(true)};
    window.dayDuLieuOnlineSilent=function(){return pushOnlineNow(false)};
    window.taiDuLieuOnline=function(){return pullOnlineNow(true)};
    window.taiDuLieuOnlineSilent=function(){return pullOnlineNow(false)};
  }
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function findItem(value){
    var s=getState(),q=norm(value),list=s&&Array.isArray(s.hang)?s.hang:[];
    return list.map(hnorm).find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||null;
  }
  function currentNhapItemCode(){
    var input=byId('hangNhap'),v=input?input.value:'';
    var item=findItem(v);
    return item?item[0]:String(v||'').split(' - ')[0].trim();
  }
  function itemName(code){
    var item=findItem(code),s=getState(),list=s&&Array.isArray(s.hang)?s.hang:[];
    if(item)return item[1]||code;
    var h=list.map(hnorm).find(function(x){return x[0]===code});
    return h?h[1]||code:code;
  }
  function setItemPhoto(code,photo,photoName){
    var s=getState();if(!s||!code||!photo)return false;
    if(!s.itemImages||typeof s.itemImages!=='object'||Array.isArray(s.itemImages))s.itemImages={};
    if(!s.itemImageNames||typeof s.itemImageNames!=='object'||Array.isArray(s.itemImageNames))s.itemImageNames={};
    s.itemImages[code]=photo;
    s.itemImageNames[code]=photoName||'áº¢nh hÃ ng hÃ³a';
    if(!s.itemImagesByName||typeof s.itemImagesByName!=='object'||Array.isArray(s.itemImagesByName))s.itemImagesByName={};
    if(!s.itemImageNamesByName||typeof s.itemImageNamesByName!=='object'||Array.isArray(s.itemImageNamesByName))s.itemImageNamesByName={};
    var nameKey=norm(itemName(code));
    if(nameKey){s.itemImagesByName[nameKey]=photo;s.itemImageNamesByName[nameKey]=photoName||'áº¢nh hÃ ng hÃ³a'}
    s.itemImageUpdatedAt=nowIso();
    return true;
  }
  function detailKey(row){return [row&&row[0]||'',row&&row[1]||'',row&&row[2]||'',row&&row[3]||'',row&&row[5]||0].join('|')}
  function setImportDetail(row,desc,photo,photoName){
    var s=getState();if(!s||!row||(!desc&&!photo))return false;
    if(!s.importDetails||typeof s.importDetails!=='object'||Array.isArray(s.importDetails))s.importDetails={};
    row[13]=desc||row[13]||'';
    row[14]=photo||row[14]||'';
    row[15]=photoName||row[15]||'';
    s.importDetails[detailKey(row)]={desc:row[13]||'',photo:row[14]||'',photoName:row[15]||'',item:row[3],kho:row[2],qty:Number(row[5]||0),date:row[0],slip:row[1],ncc:row[7]||''};
    return true;
  }
  function compressImageFile(file){
    return new Promise(function(resolve,reject){
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('Chá»n Ä‘Ãºng file áº£nh'));
      var reader=new FileReader();
      reader.onload=function(){
        var img=new Image();
        img.onload=function(){
          var max=680,w=img.width,h=img.height,ratio=Math.min(1,max/Math.max(w,h));
          var canvas=document.createElement('canvas');
          canvas.width=Math.max(1,Math.round(w*ratio));canvas.height=Math.max(1,Math.round(h*ratio));
          var ctx=canvas.getContext('2d');
          ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.drawImage(img,0,0,canvas.width,canvas.height);
          resolve(canvas.toDataURL('image/jpeg',0.56));
        };
        img.onerror=function(){reject(new Error('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c áº£nh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c áº£nh'))};
      reader.readAsDataURL(file);
    });
  }
  function renderSmallPreview(boxId,data,name){
    var box=byId(boxId);if(!box||!data)return;
    box.innerHTML='<img src="'+data+'" alt="áº¢nh"><span>'+(name||'ÄÃ£ chá»n áº£nh')+'</span>';
    box.classList.add('show');
  }
  function bindPhotoInputs(){
    [
      {id:'nhapItemPhotoInput',data:'__pendingNhapItemImageData',name:'__pendingNhapItemImageName',preview:'nhapItemPhotoPreview'},
      {id:'nhapVariantPhotoInput',data:'__pendingNhapVariantPhoto',name:'__pendingNhapVariantPhotoName',preview:'nhapVariantPhotoPreview'}
    ].forEach(function(cfg){
      var input=byId(cfg.id);if(!input||input.__reliablePhotoCompress20260718)return;
      input.__reliablePhotoCompress20260718=true;
      input.addEventListener('change',function(){
        var file=input.files&&input.files[0];if(!file)return;
        setTimeout(function(){
          compressImageFile(file).then(function(data){
            window[cfg.data]=data;
            window[cfg.name]=file.name||'áº¢nh hÃ ng hÃ³a';
            renderSmallPreview(cfg.preview,data,window[cfg.name]);
          }).catch(function(){});
        },120);
      });
    });
  }
  function installNhapPhotoSaver(){
    var old=window.saveNhap;
    if(typeof old!=='function'||old.__reliablePhotoSaver20260718)return;
    window.saveNhap=function(){
      var s=getState(),before=s&&Array.isArray(s.bd)?s.bd.length:0;
      var codeBefore=currentNhapItemCode();
      var desc=(byId('nhapVariantDesc')&&byId('nhapVariantDesc').value.trim())||(byId('nhapThuocTinhMoi')&&byId('nhapThuocTinhMoi').value.trim())||'';
      var itemPhoto=window.__pendingNhapItemImageData||'';
      var itemPhotoName=window.__pendingNhapItemImageName||'';
      var variantPhoto=window.__pendingNhapVariantPhoto||'';
      var variantPhotoName=window.__pendingNhapVariantPhotoName||'';
      var out=old.apply(this,arguments);
      setTimeout(function(){
        var st=getState(),changed=false,row=null;
        if(st&&Array.isArray(st.bd)&&st.bd.length>before)row=st.bd[st.bd.length-1];
        var code=(row&&row[3])||codeBefore;
        if(row&&itemPhoto&&code)changed=setItemPhoto(code,itemPhoto,itemPhotoName)||changed;
        if(row&&(desc||variantPhoto))changed=setImportDetail(row,desc,variantPhoto,variantPhotoName)||changed;
        if(changed){
          try{if(typeof touchState==='function')touchState()}catch(e){}
          saveLocalRaw();
          pushOnlineNow(false);
          window.__pendingNhapItemImageData='';window.__pendingNhapItemImageName='';
          window.__pendingNhapVariantPhoto='';window.__pendingNhapVariantPhotoName='';
        }
      },180);
      return out;
    };
    window.saveNhap.__reliablePhotoSaver20260718=true;
    var btn=byId('luuNhap');if(btn)btn.onclick=window.saveNhap;
  }
  function refreshHooks(){
    installStorageWatch();
    installSaveWatch();
    bindPhotoInputs();
    installNhapPhotoSaver();
    ['dayOnline','onlinePushBtn'].forEach(function(id){var b=byId(id);if(b)b.onclick=function(){pushOnlineNow(true)}});
    ['taiOnline','onlinePullBtn'].forEach(function(id){var b=byId(id);if(b)b.onclick=function(){pullOnlineNow(true)}});
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__reliableMobileSyncAndPhotoSave20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(refreshHooks,80);setTimeout(refreshHooks,450);return out};
    window.render.__reliableMobileSyncAndPhotoSave20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__reliableMobileSyncAndPhotoSave20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(refreshHooks,60);return out};
    window.bindForms.__reliableMobileSyncAndPhotoSave20260718=true;
  }
  window.addEventListener('online',function(){pushOnlineNow(false).then(function(){pullOnlineNow(false)})});
  window.addEventListener('focus',function(){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnlineNow(false);else pullOnlineNow(false)});
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnlineNow(false);else pullOnlineNow(false)}});
  refreshHooks();
  setTimeout(function(){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnlineNow(false);else pullOnlineNow(false)},1200);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__overviewSearchTotalBadgeCompact20260718)return;
  window.__overviewSearchTotalBadgeCompact20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function install(){
    var existing=document.getElementById('overview-total-badge-compact-style-20260718-light-core-16');
    if(existing){document.head.appendChild(existing);return}
    var st=document.createElement('style');
    st.id='overview-total-badge-compact-style-20260718-light-core-16';
    st.textContent='.overview-stock-result{grid-template-columns:minmax(0,1fr) auto!important;align-items:start!important}.overview-stock-name{grid-column:1!important;grid-row:1!important;align-self:center!important;min-width:0!important;padding-right:8px!important}.overview-stock-total{grid-column:2!important;grid-row:1!important;justify-self:end!important;align-self:start!important;min-width:34px!important;text-align:center!important;padding:4px 9px!important;line-height:1.1!important}.overview-stock-kho{grid-column:1/-1!important;grid-row:2!important;margin-top:1px!important}@media(max-width:900px){.overview-stock-result{grid-template-columns:minmax(0,1fr) auto!important;gap:3px 8px!important;padding:7px 9px!important}.overview-stock-name{font-size:12.8px!important;line-height:1.25!important}.overview-stock-total{grid-column:2!important;grid-row:1!important;justify-self:end!important;font-size:11.5px!important;min-width:32px!important;padding:4px 8px!important}.overview-stock-kho{grid-column:1/-1!important;grid-row:2!important;font-size:11.5px!important;line-height:1.25!important}}';
    document.head.appendChild(st);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
  setTimeout(install,120);
  setTimeout(install,700);
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__overviewSearchTotalBadgeCompact20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,50);return out};
    window.render.__overviewSearchTotalBadgeCompact20260718=true;
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;(function(){
  if(window.__dialogEncodingRescue20260718)return;
  window.__dialogEncodingRescue20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var cp1252={
    8364:128,8218:130,402:131,8222:132,8230:133,8224:134,8225:135,710:136,8240:137,
    352:138,8249:139,338:140,381:142,8216:145,8217:146,8220:147,8221:148,
    8226:149,8211:150,8212:151,732:152,8482:153,353:154,8250:155,339:156,382:158,376:159
  };
  function looksBroken(text){
    if(!text||typeof text!=='string')return false;
    return text.indexOf('\u00c3')>-1||text.indexOf('\u00c2')>-1||text.indexOf('\u00c4')>-1||
      text.indexOf('\u00c6')>-1||text.indexOf('\u00e1\u00ba')>-1||text.indexOf('\u00e1\u00bb')>-1||
      text.indexOf('\u00e2\u20ac')>-1||text.indexOf('\u00e2\u2020')>-1;
  }
  function fixText(text){
    if(typeof text!=='string')return text;
    if(!looksBroken(text)||typeof TextDecoder==='undefined')return text;
    try{
      var bytes=[];
      for(var i=0;i<text.length;i++){
        var code=text.charCodeAt(i);
        if(cp1252[code]!=null)bytes.push(cp1252[code]);
        else if(code<=255)bytes.push(code);
        else return text;
      }
      var out=new TextDecoder('utf-8').decode(new Uint8Array(bytes));
      return out||text;
    }catch(e){return text}
  }
  var oldAlert=window.alert,oldConfirm=window.confirm,oldPrompt=window.prompt;
  if(typeof oldAlert==='function'&&!oldAlert.__dialogEncodingRescue20260718){
    window.alert=function(message){return oldAlert.call(window,fixText(String(message)))};
    window.alert.__dialogEncodingRescue20260718=true;
  }
  if(typeof oldConfirm==='function'&&!oldConfirm.__dialogEncodingRescue20260718){
    window.confirm=function(message){return oldConfirm.call(window,fixText(String(message)))};
    window.confirm.__dialogEncodingRescue20260718=true;
  }
  if(typeof oldPrompt==='function'&&!oldPrompt.__dialogEncodingRescue20260718){
    window.prompt=function(message,value){return oldPrompt.call(window,fixText(String(message)),typeof value==='string'?fixText(value):value)};
    window.prompt.__dialogEncodingRescue20260718=true;
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;(function(){
  if(window.__vietnameseEncodingRescue20260718)return;
  window.__vietnameseEncodingRescue20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var cp1252={
    8364:128,8218:130,402:131,8222:132,8230:133,8224:134,8225:135,710:136,8240:137,
    352:138,8249:139,338:140,381:142,8216:145,8217:146,8220:147,8221:148,
    8226:149,8211:150,8212:151,732:152,8482:153,353:154,8250:155,339:156,382:158,376:159
  };
  function looksBroken(text){
    if(!text||typeof text!=='string')return false;
    return text.indexOf('\u00c3')>-1||text.indexOf('\u00c2')>-1||text.indexOf('\u00c4')>-1||
      text.indexOf('\u00c6')>-1||text.indexOf('\u00e1\u00ba')>-1||text.indexOf('\u00e1\u00bb')>-1||
      text.indexOf('\u00e2\u20ac')>-1||text.indexOf('\u00e2\u2020')>-1;
  }
  function decodeMojibake(text){
    if(!looksBroken(text)||typeof TextDecoder==='undefined')return text;
    try{
      var bytes=[];
      for(var i=0;i<text.length;i++){
        var code=text.charCodeAt(i);
        if(cp1252[code]!=null)bytes.push(cp1252[code]);
        else if(code<=255)bytes.push(code);
        else return text;
      }
      var decoded=new TextDecoder('utf-8').decode(new Uint8Array(bytes));
      return decoded&&decoded!==text?decoded:text;
    }catch(e){return text}
  }
  function fixTextNode(node){
    var fixed=decodeMojibake(node.nodeValue);
    if(fixed!==node.nodeValue)node.nodeValue=fixed;
  }
  function fixAttribute(node,name){
    if(!node||!node.hasAttribute||!node.hasAttribute(name))return;
    var value=node.getAttribute(name);
    var fixed=decodeMojibake(value);
    if(fixed!==value)node.setAttribute(name,fixed);
  }
  function fixDom(root){
    root=root||document.body;
    if(!root)return;
    try{
      var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);
      var nodes=[],node;
      while((node=walker.nextNode())){
        var parent=node.parentElement;
        if(parent&&parent.closest&&parent.closest('script,style,textarea'))continue;
        if(looksBroken(node.nodeValue))nodes.push(node);
      }
      nodes.forEach(fixTextNode);
      root.querySelectorAll('[placeholder],[title],[aria-label]').forEach(function(elm){
        fixAttribute(elm,'placeholder');
        fixAttribute(elm,'title');
        fixAttribute(elm,'aria-label');
      });
    }catch(e){}
  }
  function runFixSoon(){
    setTimeout(function(){fixDom(document.body)},0);
    setTimeout(function(){fixDom(document.body)},120);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__vietnameseEncodingRescue20260718){
    window.render=function(){
      var out=oldRender.apply(this,arguments);
      runFixSoon();
      return out;
    };
    window.render.__vietnameseEncodingRescue20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__vietnameseEncodingRescue20260718){
    window.bindForms=function(){
      var out=oldBind.apply(this,arguments);
      runFixSoon();
      return out;
    };
    window.bindForms.__vietnameseEncodingRescue20260718=true;
  }
  if(typeof MutationObserver!=='undefined'){
    try{
      var mo=new MutationObserver(function(){runFixSoon()});
      mo.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
    }catch(e){}
  }
  document.addEventListener('DOMContentLoaded',runFixSoon);
  window.addEventListener('load',runFixSoon);
  runFixSoon();
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itAssetNamingFinal20260718)return;window.__itAssetNamingFinal20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'d').trim()}
  function money(v){try{return new Intl.NumberFormat('vi-VN').format(Number(v)||0)}catch(e){return String(v||0)}}
  function dateVN(v){v=String(v||'').trim();var m=v.match(/^(\d{4})-(\d{2})-(\d{2})$/);return m?m[3]+'/'+m[2]+'/'+m[1]:v}
  function row(raw){raw=Array.isArray(raw)?raw.slice():[];while(raw.length<12)raw.push('');return raw}
  function codeOf(x){x=row(x);return String(x[0]||x[1]||'').trim()}
  function itemInfo(code){
    var h=(state&&Array.isArray(state.hang)?state.hang:[]).find(function(r){return r&&String(r[0]||'')===String(code||'')});
    try{if(!h&&typeof item==='function')h=item(code)}catch(e){}
    h=Array.isArray(h)?h:[code,code,'Thiáº¿t bá»‹ IT','CÃ¡i',''];
    return [h[0]||code,h[1]||code,h[2]||'Thiáº¿t bá»‹ IT',h[3]||'CÃ¡i',h[4]||''];
  }
  function qtyOf(raw){
    var x=row(raw),code=codeOf(x),n=Number(x[10]||0);
    if((!n||n<0)&&state&&state.itDeviceQtyByCode)n=Number(state.itDeviceQtyByCode[code]||0);
    return n>0?n:1;
  }
  function statusKey(raw){
    var s=norm(row(raw)[6]);
    if(!s||s.indexOf('trong kho')>=0||s.indexOf('cho cap phat')>=0)return 'stock';
    if(s.indexOf('dang su dung')>=0||s.indexOf('cap phat')>=0)return 'using';
    if(s.indexOf('thanh ly')>=0)return 'liquid';
    if(s.indexOf('bao tri')>=0||s.indexOf('sua chua')>=0)return 'repair';
    if(s.indexOf('that lac')>=0||s==='mat'||s.indexOf('mat ')>=0)return 'lost';
    if(s.indexOf('huy')>=0)return 'cancel';
    if(s.indexOf('hong')>=0)return 'broken';
    return 'other';
  }
  function statusLabel(raw){
    var k=statusKey(raw);
    if(k==='stock')return 'Chá» cáº¥p phÃ¡t';
    if(k==='using')return 'Äang sá»­ dá»¥ng';
    if(k==='liquid')return 'Thanh lÃ½';
    if(k==='repair')return 'Báº£o trÃ¬, sá»­a chá»¯a';
    if(k==='lost')return 'Máº¥t';
    if(k==='cancel')return 'Há»§y';
    if(k==='broken')return 'Há»ng';
    return String(row(raw)[6]||'Chá» cáº¥p phÃ¡t');
  }
  function deptOf(raw){
    var x=row(raw);
    if(statusKey(x)==='using')return String(x[8]||'').trim();
    return String(x[9]||x[5]||'Kho Thiáº¿t Bá»‹ IT').trim();
  }
  function userOf(raw){
    var x=row(raw);
    return statusKey(x)==='using'?String(x[5]||'').trim():'';
  }
  function tabHtml(active){
    var c={all:0,stock:0,using:0,liquid:0,repair:0,lost:0,cancel:0,broken:0};
    (state&&Array.isArray(state.thietBiIT)?state.thietBiIT:[]).forEach(function(r){var k=statusKey(r);c.all++;if(c[k]!=null)c[k]++});
    var tabs=[['all','Táº¥t cáº£'],['stock','ChÆ°a cáº¥p phÃ¡t'],['using','Äang sá»­ dá»¥ng'],['liquid','Thanh lÃ½'],['repair','Báº£o trÃ¬, sá»­a chá»¯a'],['lost','Máº¥t'],['cancel','Há»§y'],['broken','Há»ng']];
    active=active||'all';
    return '<div class="it-asset-tabs" id="itAssetTabs">'+tabs.map(function(t){return '<button class="it-asset-tab '+(active===t[0]?'active':'')+'" type="button" data-kind="'+t[0]+'">'+esc(t[1])+' <span>('+money(c[t[0]]||0)+')</span></button>'}).join('')+'</div>';
  }
  function deviceRow(raw,i){
    var x=row(raw),assetCode=codeOf(x),h=itemInfo(x[2]),qty=qtyOf(x),k=statusKey(x),issued=k==='using'?qty:0,remain=k==='stock'?qty:Math.max(qty-issued,0);
    var cls=k==='stock'?'asset-stock':(k==='using'?'asset-using':(k==='broken'||k==='lost'||k==='cancel'?'asset-bad':'asset-other'));
    var user=userOf(x),dept=deptOf(x),search=[assetCode,h[0],h[1],h[2],dateVN(x[4]),statusLabel(x),user,dept,x[7]].join(' ');
    var actions='<div class="row-actions asset-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">Cáº¥p phÃ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">Vá» kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">Sá»­a</button></div>';
    return '<tr data-it-row="1" data-kind="'+k+'" data-search="'+esc(norm(search))+'" data-status="'+esc(norm(statusLabel(x)+' '+(x[6]||'')))+'" data-type="'+esc(x[2]||'')+'" data-warehouse="'+esc(norm(dept))+'">'+
      '<td data-label=""><input class="asset-check" type="checkbox" aria-label="Chá»n '+esc(assetCode)+'"></td>'+
      '<td data-label="MÃ£ TS"><button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(assetCode||'ChÆ°a cÃ³ mÃ£')+'</button></td>'+
      '<td data-label="TÃªn tÃ i sáº£n">'+esc(h[1])+'</td>'+
      '<td data-label="Loáº¡i tÃ i sáº£n">'+esc(h[2]||'Thiáº¿t bá»‹ IT')+'</td>'+
      '<td data-label="NgÃ y mua">'+esc(dateVN(x[4]))+'</td>'+
      '<td data-label="Sá»‘ lÆ°á»£ng" class="num">'+money(qty)+'</td>'+
      '<td data-label="Sá»‘ cáº¥p phÃ¡t" class="num">'+money(issued)+'</td>'+
      '<td data-label="SL cÃ²n láº¡i" class="num">'+money(remain)+'</td>'+
      '<td data-label="Tráº¡ng thÃ¡i"><span class="tag '+cls+'">'+esc(statusLabel(x))+'</span></td>'+
      '<td data-label="NguyÃªn giÃ¡" class="num">'+money(x[11]||0)+'</td>'+
      '<td data-label="NgÆ°á»i sá»­ dá»¥ng">'+esc(user)+'</td>'+
      '<td data-label="PhÃ²ng ban sá»­ dá»¥ng">'+esc(dept)+'</td>'+
      '<td data-label="Thao tÃ¡c">'+actions+'</td>'+
    '</tr>';
  }
  function filterTable(){
    var q=norm((byId('itDeviceSearch')&&byId('itDeviceSearch').value)||''),type=(byId('itTypeFilter')&&byId('itTypeFilter').value)||'',st=norm((byId('itStatusFilter')&&byId('itStatusFilter').value)||''),wh=norm((byId('itWarehouseFilter')&&byId('itWarehouseFilter').value)||'');
    var active=byId('itAssetTabs')&&byId('itAssetTabs').querySelector('.it-asset-tab.active');
    var kind=active?active.getAttribute('data-kind')||'all':'all',shown=0,total=0;
    [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(r){
      total++;
      var ok=(!q||String(r.getAttribute('data-search')||'').indexOf(q)>=0)&&(!type||r.getAttribute('data-type')===type)&&(!st||String(r.getAttribute('data-status')||'').indexOf(st)>=0)&&(!wh||String(r.getAttribute('data-warehouse')||'').indexOf(wh)>=0)&&(kind==='all'||r.getAttribute('data-kind')===kind);
      r.style.display=ok?'':'none';if(ok)shown++;
    });
    if(byId('itVisibleCount'))byId('itVisibleCount').textContent=shown+' / '+total+' tÃ i sáº£n';
  }
  function applyTable(){
    if(typeof current!=='undefined'&&current!=='thietbi')return;
    var tbody=byId('itDeviceRows'),panel=document.querySelector('#thietbi .it-main-panel');if(!tbody||!panel)return;
    var title=panel.querySelector('.head h2');if(title)title.textContent='Danh sÃ¡ch tÃ i sáº£n IT';
    var oldActive=byId('itAssetTabs')&&byId('itAssetTabs').querySelector('.it-asset-tab.active');
    oldActive=oldActive?oldActive.getAttribute('data-kind'):'all';
    if(byId('itAssetTabs'))byId('itAssetTabs').outerHTML=tabHtml(oldActive);else{var line=panel.querySelector('.it-filter-line');if(line)line.insertAdjacentHTML('beforebegin',tabHtml(oldActive))}
    var table=tbody.closest('table');if(table){table.classList.add('it-asset-table');var th=table.querySelector('thead');if(th)th.innerHTML='<tr><th><input class="asset-check" type="checkbox" aria-label="Chá»n táº¥t cáº£"></th><th>MÃ£ TS</th><th>TÃªn tÃ i sáº£n</th><th>Loáº¡i tÃ i sáº£n</th><th>NgÃ y mua</th><th>Sá»‘ lÆ°á»£ng</th><th>Sá»‘ cáº¥p phÃ¡t</th><th>SL cÃ²n láº¡i</th><th>Tráº¡ng thÃ¡i</th><th>NguyÃªn giÃ¡</th><th>NgÆ°á»i sá»­ dá»¥ng</th><th>PhÃ²ng ban sá»­ dá»¥ng</th><th>Thao tÃ¡c</th></tr>'}
    tbody.innerHTML=(state&&Array.isArray(state.thietBiIT)?state.thietBiIT:[]).map(deviceRow).join('')||'<tr><td class="empty" colspan="13">ChÆ°a cÃ³ tÃ i sáº£n IT.</td></tr>';
    var status=byId('itStatusFilter');if(status){var keep=status.value||'';status.innerHTML='<option value="">Táº¥t cáº£ tráº¡ng thÃ¡i</option><option>Chá» cáº¥p phÃ¡t</option><option>Äang sá»­ dá»¥ng</option><option>Thanh lÃ½</option><option>Báº£o trÃ¬, sá»­a chá»¯a</option><option>Máº¥t</option><option>Há»§y</option><option>Há»ng</option>';if(keep)status.value=keep}
    if(byId('itDeviceSearch'))byId('itDeviceSearch').placeholder='TÃ¬m MÃ£ TS, tÃªn tÃ i sáº£n, ngÆ°á»i sá»­ dá»¥ng, phÃ²ng ban...';
    var tabs=byId('itAssetTabs');if(tabs&&!tabs.__itAssetNamingFinalBind){tabs.__itAssetNamingFinalBind=true;tabs.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.it-asset-tab');if(!b)return;[].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.remove('active')});b.classList.add('active');filterTable()})}
    ['itDeviceSearch','itTypeFilter','itStatusFilter','itWarehouseFilter'].forEach(function(id){var n=byId(id);if(n&&!n.__itAssetNamingFinalFilter){n.__itAssetNamingFinalFilter=true;n.addEventListener('input',filterTable);n.addEventListener('change',filterTable)}});
    if(byId('itClearSearch'))byId('itClearSearch').onclick=function(e){if(e)e.preventDefault();['itDeviceSearch','itTypeFilter','itStatusFilter','itWarehouseFilter'].forEach(function(id){var n=byId(id);if(n)n.value=''});var t=byId('itAssetTabs');if(t)[].slice.call(t.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.toggle('active',x.getAttribute('data-kind')==='all')});filterTable()};
    filterTable();
  }
  function setLabel(id,text,placeholder){
    var c=byId(id);if(!c||!c.closest)return;
    var label=c.closest('label');if(label){for(var i=0;i<label.childNodes.length;i++){var n=label.childNodes[i];if(n.nodeType===3&&String(n.nodeValue||'').trim()){n.nodeValue=text;break}}}
    if(placeholder)c.placeholder=placeholder;
  }
  function applyFormLabels(){
    if(typeof current!=='undefined'&&current!=='thietbi')return;
    setLabel('maThietBi','MÃ£ TS','GÃµ hoáº·c quÃ©t MÃ£ TS trÃªn tem thiáº¿t bá»‹');
    setLabel('hangThietBiSearch','TÃªn tÃ i sáº£n','GÃµ tÃªn hoáº·c mÃ£ tÃ i sáº£n Ä‘á»ƒ tÃ¬m');
    setLabel('hangThietBi','TÃªn tÃ i sáº£n');
    setLabel('soLuongThietBi','Sá»‘ lÆ°á»£ng');
    setLabel('nguonThietBi','Nguá»“n nháº­p');
    setLabel('trangThaiThietBi','Tráº¡ng thÃ¡i');
    setLabel('nguoiDungThietBi','NgÆ°á»i sá»­ dá»¥ng','GÃµ tÃªn ngÆ°á»i sá»­ dá»¥ng');
    setLabel('boPhanThietBiIT','PhÃ²ng ban sá»­ dá»¥ng','Tá»± Ä‘iá»n theo ngÆ°á»i sá»­ dá»¥ng');
    setLabel('ghiChuThietBi','Ghi chÃº');
    setLabel('itActionType','Loáº¡i thao tÃ¡c');
    if(byId('luuThietBi'))byId('luuThietBi').textContent='LÆ°u tÃ i sáº£n';
    if(byId('scanSerialBtn'))byId('scanSerialBtn').textContent='QuÃ©t mÃ£';
    var formTitle=document.querySelector('#thietbi #itActionPanel>.head h2,#thietbi .it-form-panel>.head h2');
    if(formTitle){var t=norm(formTitle.textContent);if(t.indexOf('cap phat')>=0)formTitle.textContent='Cáº¥p phÃ¡t tÃ i sáº£n IT';else if(t.indexOf('chuyen')>=0)formTitle.textContent='Chuyá»ƒn kho tÃ i sáº£n IT';else if(t.indexOf('xuat')>=0)formTitle.textContent='Xuáº¥t tÃ i sáº£n IT';else if(t.indexOf('nhap')>=0)formTitle.textContent='Nháº­p tÃ i sáº£n IT'}
  }
  function installStyle(){
    if(byId('it-asset-naming-final-style-20260718'))return;
    var st=document.createElement('style');st.id='it-asset-naming-final-style-20260718';
    st.textContent='#thietbi .it-asset-table th,#thietbi .it-asset-table td{white-space:nowrap}#thietbi .it-asset-table td[data-label="TÃªn tÃ i sáº£n"],#thietbi .it-asset-table td[data-label="PhÃ²ng ban sá»­ dá»¥ng"]{white-space:normal}@media(max-width:900px){#thietbi #itDeviceRows td[data-label="MÃ£ TS"],#thietbi #itDeviceRows td[data-label="TÃªn tÃ i sáº£n"],#thietbi #itDeviceRows td[data-label="Tráº¡ng thÃ¡i"]{font-weight:750!important}}';
    document.head.appendChild(st);
  }
  function apply(){installStyle();applyFormLabels();applyTable()}
  var oldRender=window.render;if(typeof oldRender==='function'&&!oldRender.__itAssetNamingFinal20260718){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,900);setTimeout(apply,1600);return out};window.render.__itAssetNamingFinal20260718=true}
  var oldBind=window.bindForms;if(typeof oldBind==='function'&&!oldBind.__itAssetNamingFinal20260718){window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,700);setTimeout(apply,1300);return out};window.bindForms.__itAssetNamingFinal20260718=true}
  document.addEventListener('change',function(e){if(e.target&&/^(itDeviceSearch|itTypeFilter|itStatusFilter|itWarehouseFilter|trangThaiThietBi|hangThietBiSearch|hangThietBi|maThietBi)$/.test(e.target.id||''))setTimeout(apply,180)},true);
  document.addEventListener('click',function(){setTimeout(apply,450)},true);
  setTimeout(apply,1200);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

;(function(){
  if(window.__itCatalogDuplicateHeaderLast20260718)return;window.__itCatalogDuplicateHeaderLast20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function install(){
    var old=byId('it-catalog-duplicate-header-last-style-20260718');
    if(old)old.remove();
    var st=document.createElement('style');
    st.id='it-catalog-duplicate-header-last-style-20260718';
    st.textContent='section#thietbi.it-catalog-subview #itCatalogStandalonePanel>.head,section#thietbi #itCatalogStandalonePanel.it-catalog-standalone-panel>.head{display:none!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;overflow:hidden!important;visibility:hidden!important}section#thietbi #itCatalogStandalonePanel .it-catalog-standalone-body{border-top:0!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogDuplicateHeaderLast20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,40);setTimeout(install,300);setTimeout(install,900);return out};
    window.render.__itCatalogDuplicateHeaderLast20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogDuplicateHeaderLast20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,40);setTimeout(install,300);return out};
    window.bindForms.__itCatalogDuplicateHeaderLast20260718=true;
  }
  document.addEventListener('click',function(){setTimeout(install,80);setTimeout(install,500)},true);
  setTimeout(install,900);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itCatalogThreeFields20260718)return;window.__itCatalogThreeFields20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'d').trim()}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function unitLike(v){
    var n=norm(v);
    return !n||['cai','hop','bo','ram','thung','cay','chai','goi','cuon','chiec'].indexOf(n)>=0;
  }
  function setLabel(id,text){
    var input=byId(id);if(!input)return;
    var label=input.closest&&input.closest('label');if(!label)return;
    for(var i=0;i<label.childNodes.length;i++){
      var node=label.childNodes[i];
      if(node.nodeType===3&&String(node.nodeValue||'').trim()){
        node.nodeValue=text;
        return;
      }
    }
    label.insertBefore(document.createTextNode(text),label.firstChild);
  }
  function catalogRows(){
    try{
      var rows=(state&&Array.isArray(state.hang)?state.hang:[]);
      return rows.filter(function(raw){
        var h=typeof normalizeHang==='function'?normalizeHang(raw):(raw||[]);
        return norm(h[2]).indexOf('thiet bi it')>=0;
      }).map(function(raw){
        var h=typeof normalizeHang==='function'?normalizeHang(raw):(raw||[]);
        return {code:h[0]||'',name:h[1]||'',group:h[3]||'',desc:h[4]||''};
      });
    }catch(e){return []}
  }
  function groupSuggestions(){
    var base=['Thiáº¿t bá»‹ IT','Laptop','MÃ¡y tÃ­nh','MÃ n hÃ¬nh','MÃ¡y in','Camera','Thiáº¿t bá»‹ máº¡ng','KhÃ¡c'];
    catalogRows().forEach(function(r){
      if(r.group&&!unitLike(r.group)&&base.indexOf(r.group)<0)base.push(r.group);
    });
    return base;
  }
  function ensureGroupInput(){
    var old=byId('itHangDvt');if(!old)return null;
    var val=String(old.value||'').trim();
    if(old.tagName&&old.tagName.toLowerCase()==='select'){
      var input=document.createElement('input');
      input.id='itHangDvt';
      input.value=unitLike(val)?'':val;
      input.placeholder='VD: MÃ n hÃ¬nh, mÃ¡y in, laptop';
      input.setAttribute('list','itCatalogGroupDatalist');
      old.parentNode.replaceChild(input,old);
      old=input;
    }else{
      old.placeholder='VD: MÃ n hÃ¬nh, mÃ¡y in, laptop';
      old.setAttribute('list','itCatalogGroupDatalist');
      if(unitLike(old.value))old.value='';
    }
    var dl=byId('itCatalogGroupDatalist');
    if(!dl){
      dl=document.createElement('datalist');
      dl.id='itCatalogGroupDatalist';
      document.body.appendChild(dl);
    }
    dl.innerHTML=groupSuggestions().map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
    return old;
  }
  function updateTitles(){
    [].slice.call(document.querySelectorAll('#thietbi h2')).forEach(function(h){
      var t=norm(h.textContent);
      if(t.indexOf('them / sua')>=0&&(t.indexOf('nhom thiet bi')>=0||t.indexOf('loai thiet bi')>=0||t.indexOf('mat hang it')>=0))h.textContent='ThÃªm / sá»­a thiáº¿t bá»‹';
      if(t.indexOf('danh muc nhom thiet bi it')>=0||t.indexOf('danh muc mat hang it')>=0)h.textContent='Danh má»¥c thiáº¿t bá»‹ IT';
    });
  }
  function updateForm(){
    var code=byId('itHangCode'),name=byId('itHangName'),desc=byId('itHangDesc');
    if(!code||!name)return;
    var form=code.closest&&code.closest('.form');
    if(form)form.classList.add('it-catalog-three-fields');
    setLabel('itHangCode','MÃ£ thiáº¿t bá»‹');
    setLabel('itHangName','TÃªn thiáº¿t bá»‹');
    ensureGroupInput();
    setLabel('itHangDvt','NhÃ³m thiáº¿t bá»‹');
    if(code){
      code.placeholder='GÃµ hoáº·c quÃ©t mÃ£ thiáº¿t bá»‹';
      code.readOnly=false;
    }
    if(name)name.placeholder='VD: MÃ n hÃ¬nh Dell E2223HN';
    if(desc){
      var label=desc.closest&&desc.closest('label');
      if(label)label.classList.add('it-catalog-desc-hidden');
    }
    var save=byId('saveItHang'),fresh=byId('newItHang');
    if(save)save.textContent='LÆ°u thiáº¿t bá»‹';
    if(fresh)fresh.textContent='Táº¡o má»›i';
  }
  function updateCatalogTable(){
    var tables=[].slice.call(document.querySelectorAll('#thietbi .it-catalog-wrap table,#thietbi .it-catalog-inside table'));
    tables.forEach(function(table){
      var heads=table.querySelectorAll('thead th');
      if(heads[0])heads[0].textContent='MÃ£ thiáº¿t bá»‹';
      if(heads[1])heads[1].textContent='TÃªn thiáº¿t bá»‹';
      if(heads[2])heads[2].textContent='NhÃ³m thiáº¿t bá»‹';
      if(heads[3])heads[3].textContent='MÃ´ táº£';
      [].slice.call(table.querySelectorAll('tbody tr')).forEach(function(row){
        var cells=row.children;
        if(cells[2]&&unitLike(cells[2].textContent))cells[2].textContent='Thiáº¿t bá»‹ IT';
      });
    });
  }
  function wrapSave(){
    if(typeof window.saveItHang==='function'&&!window.saveItHang.__itCatalogThreeFields20260718){
      var oldSave=window.saveItHang;
      window.saveItHang=function(){
        var group=byId('itHangDvt');
        if(group&&!String(group.value||'').trim())group.value='Thiáº¿t bá»‹ IT';
        return oldSave.apply(this,arguments);
      };
      window.saveItHang.__itCatalogThreeFields20260718=true;
    }
    var btn=byId('saveItHang');
    if(btn&&typeof window.saveItHang==='function')btn.onclick=window.saveItHang;
  }
  function installStyle(){
    if(byId('it-catalog-three-fields-style-20260718'))return;
    var st=document.createElement('style');
    st.id='it-catalog-three-fields-style-20260718';
    st.textContent='#thietbi .it-catalog-three-fields{grid-template-columns:minmax(220px,.75fr) minmax(280px,1fr) minmax(220px,.75fr)!important;gap:8px 10px!important}#thietbi .it-catalog-three-fields label{min-width:0!important}#thietbi .it-catalog-three-fields .it-catalog-desc-hidden{display:none!important}#thietbi .it-catalog-three-fields #saveItHang,#thietbi .it-catalog-three-fields #newItHang{grid-column:auto!important;min-height:38px!important}#thietbi .it-catalog-wrap table th:nth-child(4),#thietbi .it-catalog-wrap table td:nth-child(4),#thietbi .it-catalog-inside table th:nth-child(4),#thietbi .it-catalog-inside table td:nth-child(4){display:none!important}@media(max-width:900px){#thietbi .it-catalog-three-fields{grid-template-columns:1fr!important}#thietbi .it-catalog-three-fields #saveItHang,#thietbi .it-catalog-three-fields #newItHang{width:100%!important;min-height:42px!important}}';
    document.head.appendChild(st);
  }
  function apply(){
    if(!isIt())return;
    installStyle();
    updateTitles();
    updateForm();
    updateCatalogTable();
    wrapSave();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogThreeFields20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,650);return out};
    window.render.__itCatalogThreeFields20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogThreeFields20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,120);setTimeout(apply,520);return out};
    window.bindForms.__itCatalogThreeFields20260718=true;
  }
  document.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('#itCatalogActionCard,#newItHang,#saveItHang,.it-catalog-wrap'))setTimeout(apply,160)},true);
  document.addEventListener('input',function(e){if(e.target&&/^(itHangCode|itHangName|itHangDvt)$/.test(e.target.id||''))setTimeout(apply,80)},true);
  setTimeout(apply,700);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__syncPhotoLastLayer20260718)return;window.__syncPhotoLastLayer20260718=true;
  var VERSION='20260718-light-core-16',syncTimer=null,quietLocal=false;
  window.APP_VERSION=VERSION;
  function cfg(){return window.SUPABASE_CONFIG||{}}
  function st(){try{return typeof state!=='undefined'?state:window.state}catch(e){return window.state}}
  function apiUrl(){var c=cfg();return c.url&&c.stateId?c.url.replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId):''}
  function apiHeaders(){var k=cfg().anonKey||'';return {'apikey':k,'Authorization':'Bearer '+k,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=representation'}}
  function localSave(){
    var s=st();if(!s)return false;
    var old=quietLocal;quietLocal=true;
    try{localStorage.setItem('qlkho-state',JSON.stringify(s));return true}
    catch(e){try{localStorage.setItem('qlhc-local-save-error',String(e&&e.message||e||''))}catch(_){ }return false}
    finally{quietLocal=old}
  }
  function markPending(){
    if(quietLocal)return;
    try{localStorage.setItem('qlhc-pending-online-sync','1');localStorage.setItem('qlhc-last-local-change',String(Date.now()))}catch(e){}
    clearTimeout(syncTimer);
    syncTimer=setTimeout(function(){pushOnline(false)},900);
  }
  async function pushOnline(show){
    var s=st(),url=apiUrl();if(!s||!url||!cfg().anonKey||!window.fetch)return false;
    try{
      s.__updatedAt=new Date().toISOString();
      localSave();
      var stamp=Date.now();
      var res=await fetch(url,{method:'POST',headers:apiHeaders(),body:JSON.stringify({id:cfg().stateId,data:s,updated_at:new Date(stamp).toISOString()})});
      if(!res.ok)throw new Error(await res.text());
      try{
        localStorage.setItem('qlhc-pending-online-sync','0');
        localStorage.setItem('qlhc-last-remote-stamp',String(stamp));
        localStorage.setItem('qlhc-last-online-sync',new Date(stamp).toISOString());
      }catch(e){}
      if(show)alert('Da dong bo online');
      return true;
    }catch(e){
      try{localStorage.setItem('qlhc-pending-online-sync','1');localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e||''))}catch(_){}
      if(show)alert('Chua dong bo duoc. App se tu day lai khi co mang.');
      return false;
    }
  }
  async function pullOnline(show){
    var url=apiUrl();if(!url||!cfg().anonKey||!window.fetch)return false;
    try{
      if(localStorage.getItem('qlhc-pending-online-sync')==='1'){await pushOnline(false);return true}
      var res=await fetch(url,{method:'GET',headers:apiHeaders()});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(!rows||!rows[0]||!rows[0].data){if(show)alert('Chua co du lieu online');return false}
      var remoteStamp=Date.parse(rows[0].updated_at||(rows[0].data&&rows[0].data.__updatedAt)||'')||0;
      var localStamp=Date.parse((st()||{}).__updatedAt||'')||Number(localStorage.getItem('qlhc-last-local-change')||0)||0;
      if(remoteStamp&&localStamp&&remoteStamp+700<localStamp)return false;
      quietLocal=true;
      try{state=typeof migrateState==='function'?migrateState(rows[0].data):rows[0].data;window.state=state;localSave();localStorage.setItem('qlhc-last-remote-stamp',String(remoteStamp||Date.now()))}
      finally{quietLocal=false}
      if(typeof render==='function')render();
      if(show)alert('Da tai du lieu online');
      return true;
    }catch(e){if(show)alert('Chua tai duoc du lieu online');return false}
  }
  function installStorageWatch(){
    try{
      if(!Storage||!Storage.prototype||Storage.prototype.__qlhcLastSyncWatch)return;
      var old=Storage.prototype.setItem;
      Storage.prototype.setItem=function(k,v){var out=old.apply(this,arguments);if(k==='qlkho-state'&&!quietLocal)markPending();return out};
      Storage.prototype.__qlhcLastSyncWatch=true;
    }catch(e){}
  }
  function installSave(){
    window.save=function(){var ok=localSave();markPending();return ok};
    window.save.__qlhcLastSave=true;
    window.dayDuLieuOnline=function(){return pushOnline(true)};
    window.dayDuLieuOnlineSilent=function(){return pushOnline(false)};
    window.taiDuLieuOnline=function(){return pullOnline(true)};
    window.taiDuLieuOnlineSilent=function(){return pullOnline(false)};
    ['dayOnline','onlinePushBtn'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pushOnline(true)}});
    ['taiOnline','onlinePullBtn'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pullOnline(true)}});
  }
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function hnorm(h){try{return typeof normalizeHang==='function'?normalizeHang(h):(h||['','','','',''])}catch(e){return h||['','','','','']}}
  function findItem(v){var q=norm(v),s=st(),arr=s&&Array.isArray(s.hang)?s.hang:[];return arr.map(hnorm).find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||null}
  function currentNhapCode(){var inp=document.getElementById('hangNhap'),v=inp?inp.value:'';var h=findItem(v);return h?h[0]:String(v||'').split(' - ')[0].trim()}
  function itemName(code){var h=findItem(code),s=st(),arr=s&&Array.isArray(s.hang)?s.hang:[];if(h)return h[1]||code;h=arr.map(hnorm).find(function(x){return x[0]===code});return h?h[1]||code:code}
  function detailKey(row){return [row&&row[0]||'',row&&row[1]||'',row&&row[2]||'',row&&row[3]||'',row&&row[5]||0].join('|')}
  function setPhoto(code,photo,name){
    var s=st();if(!s||!code||!photo)return false;
    s.itemImages=s.itemImages&&typeof s.itemImages==='object'&&!Array.isArray(s.itemImages)?s.itemImages:{};
    s.itemImageNames=s.itemImageNames&&typeof s.itemImageNames==='object'&&!Array.isArray(s.itemImageNames)?s.itemImageNames:{};
    s.itemImagesByName=s.itemImagesByName&&typeof s.itemImagesByName==='object'&&!Array.isArray(s.itemImagesByName)?s.itemImagesByName:{};
    s.itemImageNamesByName=s.itemImageNamesByName&&typeof s.itemImageNamesByName==='object'&&!Array.isArray(s.itemImageNamesByName)?s.itemImageNamesByName:{};
    s.itemImages[code]=photo;s.itemImageNames[code]=name||'Anh hang hoa';
    s.itemImagesByName[norm(itemName(code))]=photo;s.itemImageNamesByName[norm(itemName(code))]=name||'Anh hang hoa';
    s.itemImageUpdatedAt=new Date().toISOString();
    return true;
  }
  function setDetail(row,desc,photo,name){
    var s=st();if(!s||!row||(!desc&&!photo))return false;
    s.importDetails=s.importDetails&&typeof s.importDetails==='object'&&!Array.isArray(s.importDetails)?s.importDetails:{};
    row[13]=desc||row[13]||'';row[14]=photo||row[14]||'';row[15]=name||row[15]||'';
    s.importDetails[detailKey(row)]={desc:row[13]||'',photo:row[14]||'',photoName:row[15]||'',item:row[3],kho:row[2],qty:Number(row[5]||0),date:row[0],slip:row[1],ncc:row[7]||''};
    return true;
  }
  function compress(file){
    return new Promise(function(resolve,reject){
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('Chon dung file anh'));
      var reader=new FileReader();
      reader.onload=function(){
        var img=new Image();
        img.onload=function(){
          var max=680,w=img.width,h=img.height,r=Math.min(1,max/Math.max(w,h)),c=document.createElement('canvas');
          c.width=Math.max(1,Math.round(w*r));c.height=Math.max(1,Math.round(h*r));
          var ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);
          resolve(c.toDataURL('image/jpeg',0.56));
        };
        img.onerror=function(){reject(new Error('Khong doc duoc anh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('Khong doc duoc anh'))};
      reader.readAsDataURL(file);
    });
  }
  function showPreview(id,data,name){
    var box=document.getElementById(id);if(!box||!data)return;
    box.innerHTML='<img src="'+data+'" alt="Anh"><span>'+esc(name||'Da chon anh')+'</span>';
    box.classList.add('show');
  }
  function installPhotoInputs(){
    [
      {id:'nhapItemPhotoInput',data:'__pendingNhapItemImageData',name:'__pendingNhapItemImageName',preview:'nhapItemPhotoPreview',label:'Anh hang hoa'},
      {id:'nhapVariantPhotoInput',data:'__pendingNhapVariantPhoto',name:'__pendingNhapVariantPhotoName',preview:'nhapVariantPhotoPreview',label:'Anh mo ta'}
    ].forEach(function(x){
      var file=document.getElementById(x.id);if(!file||file.__qlhcLastPhotoBound)return;
      file.__qlhcLastPhotoBound=true;
      file.onchange=function(){
        var f=file.files&&file.files[0];if(!f)return;
        compress(f).then(function(data){window[x.data]=data;window[x.name]=f.name||x.label;showPreview(x.preview,data,window[x.name])}).catch(function(e){alert(e.message||'Khong chen duoc anh')});
      };
    });
  }
  function installNhapSave(){
    var old=window.saveNhap;if(typeof old!=='function'||old.__qlhcLastNhapPhoto)return;
    window.saveNhap=function(){
      var s=st(),before=s&&Array.isArray(s.bd)?s.bd.length:0,codeBefore=currentNhapCode();
      var desc=(document.getElementById('nhapVariantDesc')&&document.getElementById('nhapVariantDesc').value.trim())||(document.getElementById('nhapThuocTinhMoi')&&document.getElementById('nhapThuocTinhMoi').value.trim())||'';
      var img=window.__pendingNhapItemImageData||'',imgName=window.__pendingNhapItemImageName||'',vimg=window.__pendingNhapVariantPhoto||'',vname=window.__pendingNhapVariantPhotoName||'';
      var out=old.apply(this,arguments);
      setTimeout(function(){
        var ss=st(),row=null,changed=false;
        if(ss&&Array.isArray(ss.bd)&&ss.bd.length>before)row=ss.bd[ss.bd.length-1];
        var code=(row&&row[3])||codeBefore;
        if(img&&code)changed=setPhoto(code,img,imgName)||changed;
        if(!img&&vimg&&code){
          var imageMap=(st()&&st().itemImages)||{};
          if(!imageMap[code])changed=setPhoto(code,vimg,vname)||changed;
        }
        if(row&&(desc||vimg))changed=setDetail(row,desc,vimg,vname)||changed;
        if(changed){
          try{if(typeof touchState==='function')touchState()}catch(e){}
          localSave();pushOnline(false);
          window.__pendingNhapItemImageData='';window.__pendingNhapItemImageName='';window.__pendingNhapVariantPhoto='';window.__pendingNhapVariantPhotoName='';
        }
      },260);
      return out;
    };
    window.saveNhap.__qlhcLastNhapPhoto=true;
    var b=document.getElementById('luuNhap');if(b)b.onclick=window.saveNhap;
  }
  function installAll(){installStorageWatch();installSave();installPhotoInputs();installNhapSave()}
  window.__qlhcSyncPhotoInstall=installAll;
  window.__qlhcSyncPhotoPush=pushOnline;
  window.__qlhcSyncPhotoPull=pullOnline;
  var oldRender=window.render;if(typeof oldRender==='function'&&!oldRender.__qlhcLastSyncRender){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(installAll,80);setTimeout(installAll,500);return out};window.render.__qlhcLastSyncRender=true}
  var oldBind=window.bindForms;if(typeof oldBind==='function'&&!oldBind.__qlhcLastSyncBind){window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(installAll,80);return out};window.bindForms.__qlhcLastSyncBind=true}
  installAll();
  window.addEventListener('online',function(){pushOnline(false).then(function(){pullOnline(false)})});
  window.addEventListener('focus',function(){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false);else pullOnline(false)});
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false);else pullOnline(false)}});
  setTimeout(function(){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false);else pullOnline(false)},1600);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__reliableSyncFinal20260718)return;window.__reliableSyncFinal20260718=true;
  var VERSION='20260718-light-core-16',timer=null,applying=false;
  window.APP_VERSION=VERSION;
  function cfg(){return window.SUPABASE_CONFIG||{}}
  function getState(){try{return typeof state!=='undefined'?state:window.state}catch(e){return window.state}}
  function apiUrl(){var c=cfg();return c.url&&c.stateId?c.url.replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId):''}
  function apiHeaders(){var k=cfg().anonKey||'';return {'apikey':k,'Authorization':'Bearer '+k,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=representation'}}
  function saveLocal(){var s=getState();if(!s)return false;try{localStorage.setItem('qlkho-state',JSON.stringify(s));return true}catch(e){try{localStorage.setItem('qlhc-local-save-error',String(e&&e.message||e||''))}catch(_){ }return false}}
  function markPending(){if(applying)return;try{localStorage.setItem('qlhc-pending-online-sync','1');localStorage.setItem('qlhc-last-local-change',String(Date.now()))}catch(e){};clearTimeout(timer);timer=setTimeout(function(){pushOnline(false)},850)}
  async function pushOnline(show){
    var s=getState(),url=apiUrl();if(!s||!url||!cfg().anonKey||!window.fetch)return false;
    try{
      s.__updatedAt=new Date().toISOString();
      saveLocal();
      var stamp=Date.now();
      var res=await fetch(url,{method:'POST',headers:apiHeaders(),body:JSON.stringify({id:cfg().stateId,data:s,updated_at:new Date(stamp).toISOString()})});
      if(!res.ok)throw new Error(await res.text());
      localStorage.setItem('qlhc-pending-online-sync','0');
      localStorage.setItem('qlhc-last-remote-stamp',String(stamp));
      localStorage.setItem('qlhc-last-online-sync',new Date(stamp).toISOString());
      if(show)alert('ÄÃ£ Ä‘á»“ng bá»™ online');
      return true;
    }catch(e){
      try{localStorage.setItem('qlhc-pending-online-sync','1');localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e||''))}catch(_){}
      if(show)alert('ChÆ°a Ä‘á»“ng bá»™ Ä‘Æ°á»£c, app sáº½ tá»± thá»­ láº¡i khi cÃ³ máº¡ng');
      return false;
    }
  }
  async function pullOnline(show){
    var url=apiUrl();if(!url||!cfg().anonKey||!window.fetch)return false;
    try{
      if(localStorage.getItem('qlhc-pending-online-sync')==='1'){await pushOnline(false);return true}
      var res=await fetch(url,{method:'GET',headers:apiHeaders()});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(!rows||!rows[0]||!rows[0].data){if(show)alert('ChÆ°a cÃ³ dá»¯ liá»‡u online');return false}
      var remoteStamp=Date.parse(rows[0].updated_at||(rows[0].data&&rows[0].data.__updatedAt)||'')||0;
      var localStamp=Date.parse((getState()||{}).__updatedAt||'')||Number(localStorage.getItem('qlhc-last-local-change')||0)||0;
      if(remoteStamp&&localStamp&&remoteStamp+500<localStamp)return false;
      applying=true;
      try{state=typeof migrateState==='function'?migrateState(rows[0].data):rows[0].data;window.state=state;saveLocal();localStorage.setItem('qlhc-last-remote-stamp',String(remoteStamp||Date.now()))}finally{applying=false}
      if(typeof render==='function')render();
      if(show)alert('ÄÃ£ táº£i dá»¯ liá»‡u online');
      return true;
    }catch(e){if(show)alert('ChÆ°a táº£i Ä‘Æ°á»£c dá»¯ liá»‡u online');return false}
  }
  function installStorageWatch(){
    try{
      if(!Storage||!Storage.prototype||Storage.prototype.__qlhcFinalWatch)return;
      var old=Storage.prototype.setItem;
      Storage.prototype.setItem=function(k,v){var out=old.apply(this,arguments);if(k==='qlkho-state'&&!applying)markPending();return out};
      Storage.prototype.__qlhcFinalWatch=true;
    }catch(e){}
  }
  function installSave(){
    var old=window.save;
    window.save=function(){var ok=saveLocal();if(!applying)markPending();return ok};
    window.save.__qlhcFinalSave=true;
    window.dayDuLieuOnline=function(){return pushOnline(true)};
    window.dayDuLieuOnlineSilent=function(){return pushOnline(false)};
    window.taiDuLieuOnline=function(){return pullOnline(true)};
    window.taiDuLieuOnlineSilent=function(){return pullOnline(false)};
  }
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(h){try{return typeof normalizeHang==='function'?normalizeHang(h):(h||['','','','',''])}catch(e){return h||['','','','','']}}
  function findItem(v){var q=norm(v),s=getState(),arr=s&&Array.isArray(s.hang)?s.hang:[];return arr.map(hnorm).find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||null}
  function currentNhapCode(){var inp=document.getElementById('hangNhap'),v=inp?inp.value:'';var h=findItem(v);return h?h[0]:String(v||'').split(' - ')[0].trim()}
  function itemName(code){var h=findItem(code),s=getState(),arr=s&&Array.isArray(s.hang)?s.hang:[];if(h)return h[1]||code;h=arr.map(hnorm).find(function(x){return x[0]===code});return h?h[1]||code:code}
  function setPhoto(code,photo,name){var s=getState();if(!s||!code||!photo)return false;s.itemImages=s.itemImages&&typeof s.itemImages==='object'&&!Array.isArray(s.itemImages)?s.itemImages:{};s.itemImageNames=s.itemImageNames&&typeof s.itemImageNames==='object'&&!Array.isArray(s.itemImageNames)?s.itemImageNames:{};s.itemImages[code]=photo;s.itemImageNames[code]=name||'áº¢nh hÃ ng hÃ³a';s.itemImagesByName=s.itemImagesByName&&typeof s.itemImagesByName==='object'&&!Array.isArray(s.itemImagesByName)?s.itemImagesByName:{};s.itemImagesByName[norm(itemName(code))]=photo;s.itemImageUpdatedAt=new Date().toISOString();return true}
  function detailKey(row){return [row&&row[0]||'',row&&row[1]||'',row&&row[2]||'',row&&row[3]||'',row&&row[5]||0].join('|')}
  function setDetail(row,desc,photo,name){var s=getState();if(!s||!row||(!desc&&!photo))return false;s.importDetails=s.importDetails&&typeof s.importDetails==='object'&&!Array.isArray(s.importDetails)?s.importDetails:{};row[13]=desc||row[13]||'';row[14]=photo||row[14]||'';row[15]=name||row[15]||'';s.importDetails[detailKey(row)]={desc:row[13]||'',photo:row[14]||'',photoName:row[15]||'',item:row[3],kho:row[2],qty:Number(row[5]||0),date:row[0],slip:row[1],ncc:row[7]||''};return true}
  function installNhapPhoto(){
    var old=window.saveNhap;if(typeof old!=='function'||old.__qlhcFinalPhoto)return;
    window.saveNhap=function(){
      var s=getState(),before=s&&Array.isArray(s.bd)?s.bd.length:0,codeBefore=currentNhapCode();
      var desc=(document.getElementById('nhapVariantDesc')&&document.getElementById('nhapVariantDesc').value.trim())||(document.getElementById('nhapThuocTinhMoi')&&document.getElementById('nhapThuocTinhMoi').value.trim())||'';
      var img=window.__pendingNhapItemImageData||'',imgName=window.__pendingNhapItemImageName||'';
      var varImg=window.__pendingNhapVariantPhoto||'',varName=window.__pendingNhapVariantPhotoName||'';
      var out=old.apply(this,arguments);
      setTimeout(function(){
        var st=getState(),row=null,changed=false;
        if(st&&Array.isArray(st.bd)&&st.bd.length>before)row=st.bd[st.bd.length-1];
        var code=(row&&row[3])||codeBefore;
        if(row&&img&&code)changed=setPhoto(code,img,imgName)||changed;
        if(row&&(desc||varImg))changed=setDetail(row,desc,varImg,varName)||changed;
        if(changed){try{if(typeof touchState==='function')touchState()}catch(e){};saveLocal();pushOnline(false);window.__pendingNhapItemImageData='';window.__pendingNhapItemImageName='';window.__pendingNhapVariantPhoto='';window.__pendingNhapVariantPhotoName=''}
      },220);
      return out;
    };
    window.saveNhap.__qlhcFinalPhoto=true;
    var btn=document.getElementById('luuNhap');if(btn)btn.onclick=window.saveNhap;
  }
  function installAll(){installStorageWatch();installSave();installNhapPhoto();['dayOnline','onlinePushBtn'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pushOnline(true)}});['taiOnline','onlinePullBtn'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pullOnline(true)}})}
  var oldRender=window.render;if(typeof oldRender==='function'&&!oldRender.__qlhcFinalSync){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(installAll,60);setTimeout(installAll,450);return out};window.render.__qlhcFinalSync=true}
  var oldBind=window.bindForms;if(typeof oldBind==='function'&&!oldBind.__qlhcFinalSync){window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(installAll,60);return out};window.bindForms.__qlhcFinalSync=true}
  installAll();
  window.addEventListener('online',function(){pushOnline(false).then(function(){pullOnline(false)})});
  window.addEventListener('focus',function(){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false);else pullOnline(false)});
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false);else pullOnline(false)}});
  setTimeout(function(){if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false);else pullOnline(false)},1400);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itAssetTerminologySync20260718)return;window.__itAssetTerminologySync20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function money(v){var n=Number(v||0);return isFinite(n)?n.toLocaleString('vi-VN'):String(v||'0')}
  function tnorm(raw){raw=Array.isArray(raw)?raw.slice():[];while(raw.length<12)raw.push('');return raw}
  function codeOf(x){x=tnorm(x);return String(x[0]||x[1]||'').trim()}
  function niceKho(v){v=String(v||'').trim();return norm(v).indexOf('kho thiet bi it')>=0?'Kho Thiáº¿t Bá»‹ IT':v}
  function dateVN(v){v=String(v||'').trim();var m=v.match(/^(\d{4})-(\d{2})-(\d{2})$/);return m?m[3]+'/'+m[2]+'/'+m[1]:v}
  function itemInfo(code){
    var found=null;(state.hang||[]).some(function(r){if(r&&String(r[0]||'')===String(code||'')){found=r;return true}return false});
    found=Array.isArray(found)?found:[code,code,'Thiáº¿t bá»‹ IT','CÃ¡i',''];
    return [found[0]||code,found[1]||code,found[2]||'Thiáº¿t bá»‹ IT',found[3]||'CÃ¡i',found[4]||''];
  }
  function qtyOf(x){
    x=tnorm(x);var code=codeOf(x),n=Number(x[10]||0);
    if((!n||n<0)&&state.itDeviceQtyByCode)n=Number(state.itDeviceQtyByCode[code]||0);
    return n>0?n:1;
  }
  function statusKey(x){
    var s=norm(tnorm(x)[6]);
    if(!s||s.indexOf('trong kho')>=0||s.indexOf('cho cap phat')>=0)return 'stock';
    if(s.indexOf('dang su dung')>=0||s.indexOf('cap phat')>=0)return 'using';
    if(s.indexOf('bao tri')>=0||s.indexOf('sua chua')>=0)return 'repair';
    if(s.indexOf('thanh ly')>=0)return 'liquid';
    if(s.indexOf('that lac')>=0||s==='mat'||s.indexOf('mat ')>=0)return 'lost';
    if(s.indexOf('huy')>=0)return 'cancel';
    if(s.indexOf('hong')>=0)return 'broken';
    return 'other';
  }
  function statusLabel(x){
    var k=statusKey(x);
    if(k==='stock')return 'Chá» cáº¥p phÃ¡t';
    if(k==='using')return 'Äang sá»­ dá»¥ng';
    if(k==='repair')return 'Báº£o trÃ¬, sá»­a chá»¯a';
    if(k==='liquid')return 'Thanh lÃ½';
    if(k==='lost')return 'Máº¥t';
    if(k==='cancel')return 'Há»§y';
    if(k==='broken')return 'Há»ng';
    return String(tnorm(x)[6]||'Chá» cáº¥p phÃ¡t');
  }
  function holderText(x){x=tnorm(x);return statusKey(x)==='using'?String(x[5]||'').trim():''}
  function deptText(x){
    x=tnorm(x);
    if(statusKey(x)==='using')return String(x[8]||'').trim();
    return niceKho(x[9]||x[5]||'Kho Thiáº¿t Bá»‹ IT');
  }
  function rowHtml(raw,i){
    var x=tnorm(raw),code=codeOf(x),h=itemInfo(x[2]),qty=qtyOf(x),kind=statusKey(x);
    var issued=kind==='using'?qty:0,remain=kind==='stock'?qty:0;
    var tagClass=kind==='stock'?'asset-stock':(kind==='using'?'asset-using':(kind==='broken'||kind==='lost'||kind==='cancel'?'asset-bad':'asset-other'));
    var label=statusLabel(x),user=holderText(x),dept=deptText(x);
    var search=[code,h[0],h[1],h[2],dateVN(x[4]),label,user,dept,x[7]].join(' ');
    var actions='<div class="row-actions asset-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">Cáº¥p phÃ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">Vá» kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">Sá»­a</button></div>';
    return '<tr data-it-row="1" data-kind="'+kind+'" data-search="'+esc(norm(search))+'" data-status="'+esc(norm((x[6]||'')+' '+label))+'" data-type="'+esc(x[2]||'')+'" data-warehouse="'+esc(norm(dept))+'">'+
      '<td data-label=""><input class="asset-check" type="checkbox" aria-label="Chá»n '+esc(code)+'"></td>'+
      '<td data-label="MÃ£ TS"><button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(code||'ChÆ°a cÃ³ mÃ£')+'</button></td>'+
      '<td data-label="TÃªn tÃ i sáº£n">'+esc(h[1])+'</td>'+
      '<td data-label="Loáº¡i tÃ i sáº£n">'+esc(h[2]||'Thiáº¿t bá»‹ IT')+'</td>'+
      '<td data-label="NgÃ y mua">'+esc(dateVN(x[4]))+'</td>'+
      '<td data-label="Sá»‘ lÆ°á»£ng" class="num">'+money(qty)+'</td>'+
      '<td data-label="Sá»‘ cáº¥p phÃ¡t" class="num">'+money(issued)+'</td>'+
      '<td data-label="SL cÃ²n láº¡i" class="num">'+money(remain)+'</td>'+
      '<td data-label="Tráº¡ng thÃ¡i"><span class="tag '+tagClass+'">'+esc(label)+'</span></td>'+
      '<td data-label="NguyÃªn giÃ¡" class="num">'+money(x[11]||0)+'</td>'+
      '<td data-label="NgÆ°á»i sá»­ dá»¥ng">'+esc(user)+'</td>'+
      '<td data-label="PhÃ²ng ban sá»­ dá»¥ng">'+esc(dept)+'</td>'+
      '<td data-label="Thao tÃ¡c">'+actions+'</td>'+
    '</tr>';
  }
  function renderTabs(active){
    var c={all:0,stock:0,using:0,liquid:0,repair:0,lost:0,cancel:0,broken:0};
    (state.thietBiIT||[]).forEach(function(r){var k=statusKey(r);c.all++;if(c[k]!=null)c[k]++});
    var tabs=[['all','Táº¥t cáº£'],['stock','ChÆ°a cáº¥p phÃ¡t'],['using','Äang sá»­ dá»¥ng'],['liquid','Thanh lÃ½'],['repair','Báº£o trÃ¬, sá»­a chá»¯a'],['lost','Máº¥t'],['cancel','Há»§y'],['broken','Há»ng']];
    active=active||'all';
    return '<div class="it-asset-tabs" id="itAssetTabs">'+tabs.map(function(t){return '<button class="it-asset-tab '+(active===t[0]?'active':'')+'" type="button" data-kind="'+t[0]+'">'+esc(t[1])+' <span>('+money(c[t[0]]||0)+')</span></button>'}).join('')+'</div>';
  }
  function filterRows(){
    var q=norm((byId('itDeviceSearch')&&byId('itDeviceSearch').value)||''),tp=(byId('itTypeFilter')&&byId('itTypeFilter').value)||'',st=norm((byId('itStatusFilter')&&byId('itStatusFilter').value)||''),wh=norm((byId('itWarehouseFilter')&&byId('itWarehouseFilter').value)||'');
    var active=byId('itAssetTabs')&&byId('itAssetTabs').querySelector('.it-asset-tab.active');
    var kind=active?active.getAttribute('data-kind')||'all':'all',shown=0,total=0;
    [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(r){
      total++;
      var ok=(!q||String(r.getAttribute('data-search')||'').indexOf(q)>=0)&&(!tp||r.getAttribute('data-type')===tp)&&(!st||String(r.getAttribute('data-status')||'').indexOf(st)>=0)&&(!wh||String(r.getAttribute('data-warehouse')||'').indexOf(wh)>=0)&&(kind==='all'||r.getAttribute('data-kind')===kind);
      r.style.display=ok?'':'none';if(ok)shown++;
    });
    if(byId('itVisibleCount'))byId('itVisibleCount').textContent=shown+' / '+total+' tÃ i sáº£n';
  }
  function setLabel(control,text){
    if(!control||!control.closest)return;
    var label=control.closest('label');if(!label)return;
    for(var i=0;i<label.childNodes.length;i++){var n=label.childNodes[i];if(n.nodeType===3&&String(n.nodeValue||'').trim()){n.nodeValue=text;return}}
    label.insertBefore(document.createTextNode(text),label.firstChild);
  }
  function statusOptions(){
    var sel=byId('trangThaiThietBi');if(!sel)return;
    var old=norm(sel.value),keep='Trong kho';
    if(old.indexOf('dang su dung')>=0||old.indexOf('cap phat')>=0)keep='Äang sá»­ dá»¥ng';
    else if(old.indexOf('thanh ly')>=0)keep='Thanh lÃ½';
    else if(old.indexOf('bao tri')>=0||old.indexOf('sua chua')>=0)keep='Báº£o trÃ¬, sá»­a chá»¯a';
    else if(old.indexOf('mat')>=0||old.indexOf('that lac')>=0)keep='Máº¥t';
    else if(old.indexOf('huy')>=0)keep='Há»§y';
    else if(old.indexOf('hong')>=0)keep='Há»ng';
    sel.innerHTML='<option value="Trong kho">Chá» cáº¥p phÃ¡t</option><option>Äang sá»­ dá»¥ng</option><option>Thanh lÃ½</option><option>Báº£o trÃ¬, sá»­a chá»¯a</option><option>Máº¥t</option><option>Há»§y</option><option>Há»ng</option>';
    sel.value=keep;
  }
  function relabelForm(){
    setLabel(byId('maThietBi'),'MÃ£ TS');if(byId('maThietBi'))byId('maThietBi').placeholder='GÃµ hoáº·c quÃ©t mÃ£ TS trÃªn tem thiáº¿t bá»‹';
    setLabel(byId('hangThietBiSearch')||byId('hangThietBi'),'TÃªn tÃ i sáº£n');if(byId('hangThietBiSearch'))byId('hangThietBiSearch').placeholder='GÃµ tÃªn hoáº·c mÃ£ tÃ i sáº£n Ä‘á»ƒ tÃ¬m';
    setLabel(byId('soLuongThietBi'),'Sá»‘ lÆ°á»£ng');
    setLabel(byId('nguonThietBi'),'Nguá»“n nháº­p');
    setLabel(byId('trangThaiThietBi'),'Tráº¡ng thÃ¡i');
    setLabel(byId('nguoiDungThietBi'),'NgÆ°á»i sá»­ dá»¥ng');if(byId('nguoiDungThietBi'))byId('nguoiDungThietBi').placeholder='GÃµ tÃªn nhÃ¢n viÃªn';
    setLabel(byId('boPhanThietBiIT'),'PhÃ²ng ban sá»­ dá»¥ng');
    setLabel(byId('ghiChuThietBi'),'Ghi chÃº');
    if(byId('scanSerialBtn'))byId('scanSerialBtn').textContent='QuÃ©t mÃ£';
    if(byId('luuThietBi'))byId('luuThietBi').textContent='LÆ°u tÃ i sáº£n';
    var title=document.querySelector('#thietbi .it-form-panel>.head h2,#thietbi #itActionPanel>.head h2');
    if(title){
      var t=norm(title.textContent);
      if(t.indexOf('nhap')>=0)title.textContent='Nháº­p tÃ i sáº£n IT';
      else if(t.indexOf('xuat')>=0)title.textContent='Xuáº¥t tÃ i sáº£n IT';
      else if(t.indexOf('cap phat')>=0)title.textContent='Cáº¥p phÃ¡t tÃ i sáº£n IT';
    }
  }
  function syncStatusFilter(){
    var sel=byId('itStatusFilter');if(!sel)return;
    var keep=sel.value||'';
    sel.innerHTML='<option value="">Táº¥t cáº£ tráº¡ng thÃ¡i</option><option>Chá» cáº¥p phÃ¡t</option><option>Äang sá»­ dá»¥ng</option><option>Thanh lÃ½</option><option>Báº£o trÃ¬, sá»­a chá»¯a</option><option>Máº¥t</option><option>Há»§y</option><option>Há»ng</option>';
    if(keep)sel.value=keep;
  }
  function renderAssetList(){
    var tbody=byId('itDeviceRows'),panel=document.querySelector('#thietbi .it-main-panel');if(!tbody||!panel)return;
    var title=panel.querySelector('.head h2');if(title)title.textContent='Danh sÃ¡ch tÃ i sáº£n IT';
    var active=byId('itAssetTabs')&&byId('itAssetTabs').querySelector('.it-asset-tab.active');
    active=active?active.getAttribute('data-kind'):'all';
    if(byId('itAssetTabs'))byId('itAssetTabs').outerHTML=renderTabs(active);else{var filter=panel.querySelector('.it-filter-line');if(filter)filter.insertAdjacentHTML('beforebegin',renderTabs(active))}
    var table=tbody.closest('table');if(table){table.classList.add('it-asset-table');var thead=table.querySelector('thead');if(thead)thead.innerHTML='<tr><th><input class="asset-check" type="checkbox" aria-label="Chá»n táº¥t cáº£"></th><th>MÃ£ TS</th><th>TÃªn tÃ i sáº£n</th><th>Loáº¡i tÃ i sáº£n</th><th>NgÃ y mua</th><th>Sá»‘ lÆ°á»£ng</th><th>Sá»‘ cáº¥p phÃ¡t</th><th>SL cÃ²n láº¡i</th><th>Tráº¡ng thÃ¡i</th><th>NguyÃªn giÃ¡</th><th>NgÆ°á»i sá»­ dá»¥ng</th><th>PhÃ²ng ban sá»­ dá»¥ng</th><th>Thao tÃ¡c</th></tr>'}
    tbody.innerHTML=(state.thietBiIT||[]).map(rowHtml).join('')||'<tr><td class="empty" colspan="13">ChÆ°a cÃ³ tÃ i sáº£n IT.</td></tr>';
    if(byId('itDeviceSearch'))byId('itDeviceSearch').placeholder='TÃ¬m mÃ£ TS, tÃªn tÃ i sáº£n, ngÆ°á»i sá»­ dá»¥ng, phÃ²ng ban...';
    syncStatusFilter();
    var tabs=byId('itAssetTabs');if(tabs&&!tabs.__itTermBind){tabs.__itTermBind=true;tabs.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.it-asset-tab');if(!b)return;[].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.remove('active')});b.classList.add('active');filterRows()})}
    ['itDeviceSearch','itTypeFilter','itStatusFilter','itWarehouseFilter'].forEach(function(id){var el=byId(id);if(el&&!el.__itTermFilter){el.__itTermFilter=true;el.addEventListener('input',filterRows);el.addEventListener('change',filterRows)}});
    if(byId('itClearSearch'))byId('itClearSearch').onclick=function(e){if(e)e.preventDefault();['itDeviceSearch','itTypeFilter','itStatusFilter','itWarehouseFilter'].forEach(function(id){var el=byId(id);if(el)el.value=''});var tabs=byId('itAssetTabs');if(tabs)[].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.toggle('active',x.getAttribute('data-kind')==='all')});filterRows()};
    filterRows();
  }
  function installStyle(){
    if(byId('it-asset-terminology-sync-style-20260718'))return;
    var st=document.createElement('style');st.id='it-asset-terminology-sync-style-20260718';
    st.textContent='#thietbi .it-asset-table th,#thietbi .it-asset-table td{white-space:nowrap}#thietbi .it-asset-table td[data-label="TÃªn tÃ i sáº£n"],#thietbi .it-asset-table td[data-label="PhÃ²ng ban sá»­ dá»¥ng"]{white-space:normal}@media(max-width:900px){#thietbi #itDeviceRows td[data-label="MÃ£ TS"],#thietbi #itDeviceRows td[data-label="TÃªn tÃ i sáº£n"],#thietbi #itDeviceRows td[data-label="Tráº¡ng thÃ¡i"]{font-weight:750!important}}';
    document.head.appendChild(st);
  }
  function wrapSave(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itAssetTerminologySync20260718){
      var old=window.saveThietBi;
      window.saveThietBi=function(){
        var code=byId('maThietBi')?byId('maThietBi').value.trim():'';
        if(!code){alert('Nháº­p MÃ£ TS');return}
        return old.apply(this,arguments);
      };
      window.saveThietBi.__itAssetTerminologySync20260718=true;
    }
    if(byId('luuThietBi'))byId('luuThietBi').onclick=window.saveThietBi;
  }
  function apply(){
    if(!document.querySelector('#thietbi'))return;
    installStyle();
    statusOptions();
    relabelForm();
    wrapSave();
    renderAssetList();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itAssetTerminologySync20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,420);setTimeout(apply,1100);return out};
    window.render.__itAssetTerminologySync20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itAssetTerminologySync20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,300);setTimeout(apply,900);return out};
    window.bindForms.__itAssetTerminologySync20260718=true;
  }
  document.addEventListener('input',function(e){if(e.target&&/^itDeviceSearch|itTypeFilter|itStatusFilter|itWarehouseFilter$/.test(e.target.id||''))setTimeout(filterRows,0)});
  document.addEventListener('change',function(e){if(e.target&&/^(trangThaiThietBi|itDeviceSearch|itTypeFilter|itStatusFilter|itWarehouseFilter)$/.test(e.target.id||''))setTimeout(apply,80)});
  setTimeout(apply,900);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itCatalogDuplicateHeaderFinal20260718)return;window.__itCatalogDuplicateHeaderFinal20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function install(){
    if(byId('it-catalog-duplicate-header-final-style-20260718'))return;
    var st=document.createElement('style');
    st.id='it-catalog-duplicate-header-final-style-20260718';
    st.textContent='#thietbi.it-catalog-subview #itCatalogStandalonePanel>.head,#thietbi #itCatalogStandalonePanel.it-catalog-standalone-panel>.head{display:none!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;overflow:hidden!important}#thietbi #itCatalogStandalonePanel .it-catalog-standalone-body{border-top:0!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogDuplicateHeaderFinal20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,120);setTimeout(install,600);return out};
    window.render.__itCatalogDuplicateHeaderFinal20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogDuplicateHeaderFinal20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,120);return out};
    window.bindForms.__itCatalogDuplicateHeaderFinal20260718=true;
  }
  setTimeout(install,800);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itCatalogCodeScanFinal20260718)return;window.__itCatalogCodeScanFinal20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function isItRow(raw){return norm(hnorm(raw)[2]).indexOf('thiet bi it')>=0}
  function nextItCode(){return typeof nextItemCode==='function'?nextItemCode('Thiáº¿t bá»‹ IT'):'TB'+String(((state.hang||[]).filter(isItRow).length||0)+1).padStart(3,'0')}
  function persist(){try{if(typeof touchState==='function')touchState()}catch(e){}try{if(typeof save==='function')save()}catch(e){}try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}}
  function catalogIndex(){var edit=byId('editItHangIndex');var v=edit?String(edit.value||'').trim():'';return v===''?-1:Number(v)}
  function setCatalogCode(v){
    v=String(v||'').trim();if(!v)return;
    var input=byId('itHangCode');if(!input)return;
    input.removeAttribute('readonly');input.disabled=false;input.readOnly=false;input.value=v;
    try{input.dispatchEvent(new Event('input',{bubbles:true}))}catch(e){}
    try{input.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){}
    input.focus();
  }
  function detectorFormats(){return ['qr_code','code_128','code_39','code_93','ean_13','ean_8','upc_a','upc_e','itf','codabar','data_matrix']}
  function scanImage(file){
    if(!file)return;
    if(!('BarcodeDetector' in window)||!window.createImageBitmap){alert('MÃ¡y nÃ y chÆ°a há»— trá»£ Ä‘á»c mÃ£ tá»« áº£nh. Báº¡n nháº­p tay mÃ£ thiáº¿t bá»‹ IT vÃ o Ã´ MÃ£ thiáº¿t bá»‹ IT.');return}
    window.createImageBitmap(file).then(function(bitmap){return new BarcodeDetector({formats:detectorFormats()}).detect(bitmap)}).then(function(codes){
      var found=codes&&codes[0]&&(codes[0].rawValue||codes[0].displayValue);
      if(found)setCatalogCode(found);else alert('ChÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£ trong áº£nh. Báº¡n thá»­ chá»¥p rÃµ hÆ¡n hoáº·c nháº­p tay mÃ£.');
    }).catch(function(){alert('ChÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£ tá»« áº£nh. Báº¡n thá»­ chá»¥p rÃµ hÆ¡n hoáº·c nháº­p tay mÃ£.')});
  }
  function closeScan(){
    var overlay=byId('itCatalogCodeScanOverlay');
    if(overlay&&overlay.__stream){try{overlay.__stream.getTracks().forEach(function(t){t.stop()})}catch(e){}}
    if(overlay)overlay.remove();
  }
  function openScan(){
    if(!('BarcodeDetector' in window)||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
      var f=byId('itHangCodePhotoInput');if(f)f.click();else alert('MÃ¡y nÃ y chÆ°a há»— trá»£ quÃ©t trá»±c tiáº¿p. Báº¡n cÃ³ thá»ƒ nháº­p tay mÃ£.');
      return;
    }
    closeScan();
    var overlay=document.createElement('div');
    overlay.id='itCatalogCodeScanOverlay';
    overlay.innerHTML='<div class="it-catalog-code-scan-card"><div class="it-catalog-code-scan-head"><strong>QuÃ©t mÃ£ thiáº¿t bá»‹ IT</strong><button class="btn small" type="button" id="itCatalogCodeScanClose">ÄÃ³ng</button></div><video id="itCatalogCodeScanVideo" playsinline muted></video><p>ÄÆ°a mÃ£ váº¡ch/QR vÃ o giá»¯a khung. Náº¿u khÃ´ng quÃ©t Ä‘Æ°á»£c, báº¥m Chá»n tá»‡p hoáº·c nháº­p tay.</p></div>';
    document.body.appendChild(overlay);
    var video=byId('itCatalogCodeScanVideo'),stopped=false,detector=new BarcodeDetector({formats:detectorFormats()});
    function stop(){stopped=true;closeScan()}
    var close=byId('itCatalogCodeScanClose');if(close)close.onclick=stop;
    navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(stream){
      overlay.__stream=stream;video.srcObject=stream;return video.play();
    }).then(function(){
      function loop(){
        if(stopped||!document.body.contains(overlay))return;
        detector.detect(video).then(function(codes){
          var found=codes&&codes[0]&&(codes[0].rawValue||codes[0].displayValue);
          if(found){setCatalogCode(found);stop();return}
          requestAnimationFrame(loop);
        }).catch(function(){requestAnimationFrame(loop)});
      }
      loop();
    }).catch(function(){stop();var f=byId('itHangCodePhotoInput');if(f)f.click();else alert('KhÃ´ng má»Ÿ Ä‘Æ°á»£c camera. Báº¡n nháº­p tay mÃ£ thiáº¿t bá»‹ IT giÃºp mÃ¬nh.')});
  }
  function installTools(){
    if(!isIt())return;
    var input=byId('itHangCode');if(!input)return;
    input.removeAttribute('readonly');input.disabled=false;input.readOnly=false;
    input.placeholder='GÃµ hoáº·c quÃ©t mÃ£ thiáº¿t bá»‹ IT';
    var label=input.closest&&input.closest('label');if(!label)return;
    label.classList.add('it-catalog-code-label');
    var line=input.closest('.it-catalog-code-line');
    if(!line){
      line=document.createElement('div');
      line.className='it-catalog-code-line';
      input.parentNode.insertBefore(line,input);
      line.appendChild(input);
    }
    var scan=byId('itHangCodeScanBtn');
    if(!scan){scan=document.createElement('button');scan.id='itHangCodeScanBtn';scan.type='button';scan.className='btn primary';scan.textContent='QuÃ©t mÃ£';line.appendChild(scan)}
    var pick=byId('itHangCodeFileBtn');
    if(!pick){pick=document.createElement('button');pick.id='itHangCodeFileBtn';pick.type='button';pick.className='btn';pick.textContent='Chá»n tá»‡p';line.appendChild(pick)}
    var file=byId('itHangCodePhotoInput');
    if(!file){file=document.createElement('input');file.id='itHangCodePhotoInput';file.type='file';file.accept='image/*';file.setAttribute('capture','environment');file.className='it-catalog-code-file';label.appendChild(file)}
    if(!scan.__itCatalogCodeFinal){scan.__itCatalogCodeFinal=true;scan.onclick=function(e){if(e)e.preventDefault();openScan()}}
    if(!pick.__itCatalogCodeFinal){pick.__itCatalogCodeFinal=true;pick.onclick=function(e){if(e)e.preventDefault();file.click()}}
    if(!file.__itCatalogCodeFinal){file.__itCatalogCodeFinal=true;file.onchange=function(){scanImage(this.files&&this.files[0]);this.value=''}}
  }
  function updateLinkedCode(oldCode,newCode){
    if(!oldCode||!newCode||oldCode===newCode)return;
    (state.thietBiIT||[]).forEach(function(raw){if(Array.isArray(raw)&&raw[2]===oldCode)raw[2]=newCode});
    (state.bd||[]).forEach(function(row){if(Array.isArray(row)&&row[3]===oldCode)row[3]=newCode});
    (state.chuyen||[]).forEach(function(row){if(row&&row.hang===oldCode)row.hang=newCode});
    if(state.ton){
      var next={};
      Object.keys(state.ton).forEach(function(k){
        var p=k.split('|');if(p[1]===oldCode)p[1]=newCode;
        var nk=p.join('|');next[nk]=(next[nk]||0)+Number(state.ton[k]||0);
      });
      state.ton=next;
    }
  }
  function saveCatalog(){
    if(!adminOk())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c sá»­a danh má»¥c thiáº¿t bá»‹ IT.');
    var edit=byId('editItHangIndex'),idx=edit?String(edit.value||'').trim():'';
    var code=(byId('itHangCode')&&byId('itHangCode').value.trim())||'';
    var name=(byId('itHangName')&&byId('itHangName').value.trim())||'';
    var dvt=(byId('itHangDvt')&&byId('itHangDvt').value)||'CÃ¡i';
    var desc=(byId('itHangDesc')&&byId('itHangDesc').value.trim())||'';
    if(!code){alert('Nháº­p mÃ£ thiáº¿t bá»‹ IT');var c=byId('itHangCode');if(c)c.focus();return}
    if(!name){alert('Nháº­p tÃªn loáº¡i thiáº¿t bá»‹ IT');var n=byId('itHangName');if(n)n.focus();return}
    var oldCode=idx!==''&&state.hang&&state.hang[Number(idx)]?hnorm(state.hang[Number(idx)])[0]:'';
    var dup=(state.hang||[]).some(function(raw,i){return String(i)!==String(idx)&&hnorm(raw)[0]===code});
    if(dup){alert('MÃ£ thiáº¿t bá»‹ IT nÃ y Ä‘Ã£ tá»“n táº¡i. Báº¡n chá»n mÃ£ khÃ¡c hoáº·c báº¥m Sá»­a Ä‘Ãºng dÃ²ng cáº§n sá»­a.');return}
    var row=[code,name,'Thiáº¿t bá»‹ IT',dvt,desc];
    if(idx==='')state.hang.push(row);else state.hang[Number(idx)]=row;
    updateLinkedCode(oldCode,code);
    persist();
    render();
  }
  function wrapCatalog(){
    window.saveItHang=saveCatalog;
    var saveBtn=byId('saveItHang');if(saveBtn)saveBtn.onclick=saveCatalog;
    var newBtn=byId('newItHang');
    if(newBtn&&!newBtn.__itCatalogCodeFinal){newBtn.__itCatalogCodeFinal=true;newBtn.addEventListener('click',function(){setTimeout(function(){installTools();var c=byId('itHangCode');if(c&&!c.value)c.value=nextItCode()},80)})}
  }
  function installStyle(){
    if(byId('it-catalog-code-final-style-20260718'))return;
    var st=document.createElement('style');st.id='it-catalog-code-final-style-20260718';
    st.textContent='#thietbi .it-catalog-code-line{display:grid!important;grid-template-columns:minmax(0,1fr) 86px 92px!important;gap:8px!important;align-items:center!important}#thietbi .it-catalog-code-line #itHangCode{width:100%!important;min-width:0!important;height:38px!important;min-height:38px!important;background:#fbfffd!important}#thietbi .it-catalog-code-line .btn{height:38px!important;min-height:38px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;padding:0 11px!important;border-radius:7px!important;font-weight:750!important;white-space:nowrap!important}#thietbi .it-catalog-code-file{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important;overflow:hidden!important}#itCatalogCodeScanOverlay{position:fixed!important;inset:0!important;z-index:99999!important;background:rgba(0,28,20,.72)!important;display:grid!important;place-items:center!important;padding:16px!important}#itCatalogCodeScanOverlay .it-catalog-code-scan-card{width:min(520px,100%)!important;background:#f7fffb!important;border:1px solid #9edcc8!important;border-radius:12px!important;padding:12px!important;box-shadow:0 20px 55px rgba(0,0,0,.32)!important}#itCatalogCodeScanOverlay .it-catalog-code-scan-head{display:flex!important;justify-content:space-between!important;align-items:center!important;margin-bottom:8px!important}#itCatalogCodeScanVideo{display:block!important;width:100%!important;max-height:58vh!important;background:#001d15!important;border-radius:10px!important;object-fit:cover!important}#itCatalogCodeScanOverlay p{margin:8px 0 0!important;color:#35574a!important;font-size:13px!important}@media(max-width:900px){#thietbi .it-catalog-code-line{grid-template-columns:minmax(0,1fr) 70px 76px!important;gap:5px!important}#thietbi .it-catalog-code-line #itHangCode{height:40px!important;min-height:40px!important;font-size:13px!important}#thietbi .it-catalog-code-line .btn{height:40px!important;min-height:40px!important;font-size:11.5px!important;padding:0 5px!important}}';
    document.head.appendChild(st);
  }
  function apply(){
    if(!isIt())return;
    installStyle();
    installTools();
    wrapCatalog();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogCodeFinal20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,700);return out};
    window.render.__itCatalogCodeFinal20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogCodeFinal20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,140);setTimeout(apply,520);return out};
    window.bindForms.__itCatalogCodeFinal20260718=true;
  }
  document.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('#itCatalogActionCard,#saveItHang,#newItHang'))setTimeout(apply,160)});
  setTimeout(apply,800);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

(function(){
  if(window.__itCatalogCodeScan20260718)return;window.__itCatalogCodeScan20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function isItCatalogRow(raw){var h=hnorm(raw);return norm(h[2]).indexOf('thiet bi it')>=0}
  function currentCatalogIndex(){
    var edit=byId('editItHangIndex');
    var v=edit?String(edit.value||'').trim():'';
    return v===''?-1:Number(v);
  }
  function setCodeValue(value){
    value=String(value||'').trim();
    if(!value)return;
    var input=byId('itHangCode');
    if(!input)return;
    input.value=value;
    input.removeAttribute('readonly');
    input.disabled=false;
    try{input.dispatchEvent(new Event('input',{bubbles:true}))}catch(e){}
    try{input.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){}
    input.focus();
  }
  function detectorFormats(){
    return ['qr_code','code_128','code_39','code_93','ean_13','ean_8','upc_a','upc_e','itf','codabar','data_matrix'];
  }
  function readImageFile(file){
    if(!file)return;
    if(!('BarcodeDetector' in window)||!window.createImageBitmap){
      alert('MÃ¡y nÃ y chÆ°a há»— trá»£ Ä‘á»c mÃ£ tá»« áº£nh. Báº¡n cÃ³ thá»ƒ nháº­p tay mÃ£ thiáº¿t bá»‹ IT vÃ o Ã´ MÃ£ thiáº¿t bá»‹ IT.');
      return;
    }
    window.createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:detectorFormats()});
      return detector.detect(bitmap);
    }).then(function(codes){
      var found=codes&&codes[0]&&(codes[0].rawValue||codes[0].displayValue);
      if(found)setCodeValue(found);
      else alert('ChÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£ trong áº£nh. Báº¡n thá»­ chá»¥p rÃµ hÆ¡n hoáº·c nháº­p tay mÃ£.');
    }).catch(function(){
      alert('ChÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£ tá»« áº£nh. Báº¡n thá»­ chá»¥p rÃµ hÆ¡n hoáº·c nháº­p tay mÃ£.');
    });
  }
  function closeOverlay(){
    var overlay=byId('itCatalogScanOverlay');
    if(overlay&&overlay.__stream){
      try{overlay.__stream.getTracks().forEach(function(t){t.stop()})}catch(e){}
    }
    if(overlay)overlay.remove();
  }
  function openCameraScan(){
    if(!('BarcodeDetector' in window)||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
      var file=byId('itHangCodePhotoInput');
      if(file)file.click();
      else alert('MÃ¡y nÃ y chÆ°a há»— trá»£ quÃ©t trá»±c tiáº¿p. Báº¡n cÃ³ thá»ƒ nháº­p tay mÃ£ thiáº¿t bá»‹ IT.');
      return;
    }
    closeOverlay();
    var overlay=document.createElement('div');
    overlay.id='itCatalogScanOverlay';
    overlay.innerHTML='<div class="it-catalog-scan-card"><div class="it-catalog-scan-head"><strong>QuÃ©t mÃ£ thiáº¿t bá»‹ IT</strong><button class="btn small" type="button" id="itCatalogScanClose">ÄÃ³ng</button></div><video id="itCatalogScanVideo" playsinline muted></video><p>ÄÆ°a mÃ£ váº¡ch/QR vÃ o giá»¯a khung. Náº¿u khÃ´ng quÃ©t Ä‘Æ°á»£c, báº¥m Chá»n tá»‡p hoáº·c nháº­p tay.</p></div>';
    document.body.appendChild(overlay);
    var video=byId('itCatalogScanVideo');
    var detector=new BarcodeDetector({formats:detectorFormats()});
    var stopped=false;
    function stop(){stopped=true;closeOverlay()}
    var close=byId('itCatalogScanClose');
    if(close)close.onclick=stop;
    navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(stream){
      overlay.__stream=stream;
      video.srcObject=stream;
      return video.play();
    }).then(function(){
      function loop(){
        if(stopped||!document.body.contains(overlay))return;
        detector.detect(video).then(function(codes){
          var found=codes&&codes[0]&&(codes[0].rawValue||codes[0].displayValue);
          if(found){setCodeValue(found);stop();return}
          requestAnimationFrame(loop);
        }).catch(function(){requestAnimationFrame(loop)});
      }
      loop();
    }).catch(function(){
      stop();
      var file=byId('itHangCodePhotoInput');
      if(file)file.click();
      else alert('KhÃ´ng má»Ÿ Ä‘Æ°á»£c camera. Báº¡n nháº­p tay mÃ£ thiáº¿t bá»‹ IT giÃºp mÃ¬nh.');
    });
  }
  function installTools(){
    if(!isIt())return;
    var input=byId('itHangCode');
    if(!input)return;
    input.removeAttribute('readonly');
    input.disabled=false;
    input.placeholder='GÃµ hoáº·c quÃ©t mÃ£ thiáº¿t bá»‹ IT';
    var label=input.closest&&input.closest('label');
    if(!label)return;
    var line=input.closest('.it-hang-code-line');
    if(!line){
      line=document.createElement('div');
      line.className='it-hang-code-line';
      input.parentNode.insertBefore(line,input);
      line.appendChild(input);
    }
    if(!byId('itHangCodeScanBtn')){
      var scan=document.createElement('button');
      scan.id='itHangCodeScanBtn';
      scan.type='button';
      scan.className='btn primary it-hang-code-scan';
      scan.textContent='QuÃ©t mÃ£';
      line.appendChild(scan);
    }
    if(!byId('itHangCodeFileBtn')){
      var pick=document.createElement('button');
      pick.id='itHangCodeFileBtn';
      pick.type='button';
      pick.className='btn it-hang-code-file';
      pick.textContent='Chá»n tá»‡p';
      line.appendChild(pick);
    }
    if(!byId('itHangCodePhotoInput')){
      var file=document.createElement('input');
      file.id='itHangCodePhotoInput';
      file.type='file';
      file.accept='image/*';
      file.setAttribute('capture','environment');
      file.className='it-hang-code-hidden-file';
      label.appendChild(file);
    }
    var scanBtn=byId('itHangCodeScanBtn'),fileBtn=byId('itHangCodeFileBtn'),fileInput=byId('itHangCodePhotoInput');
    if(scanBtn&&!scanBtn.__itCatalogScanBind){scanBtn.__itCatalogScanBind=true;scanBtn.onclick=function(e){if(e)e.preventDefault();openCameraScan()}}
    if(fileBtn&&!fileBtn.__itCatalogFileBind){fileBtn.__itCatalogFileBind=true;fileBtn.onclick=function(e){if(e)e.preventDefault();if(fileInput)fileInput.click()}}
    if(fileInput&&!fileInput.__itCatalogFileReady){fileInput.__itCatalogFileReady=true;fileInput.onchange=function(){readImageFile(this.files&&this.files[0]);this.value=''}}
  }
  function updateLinkedRows(oldCode,newCode){
    if(!oldCode||!newCode||oldCode===newCode)return;
    (state.thietBiIT||[]).forEach(function(raw){
      if(!Array.isArray(raw))return;
      if(raw[2]===oldCode)raw[2]=newCode;
      if(raw[0]===oldCode)raw[0]=newCode;
      if(raw[1]===oldCode)raw[1]=newCode;
    });
    (state.bd||[]).forEach(function(row){if(row&&row[3]===oldCode)row[3]=newCode});
    (state.chuyen||[]).forEach(function(row){if(row&&row.hang===oldCode)row.hang=newCode});
    var ton=state.ton||{},next={};
    Object.keys(ton).forEach(function(k){
      var parts=k.split('|');
      if(parts[1]===oldCode)parts[1]=newCode;
      var nk=parts.join('|');
      next[nk]=(next[nk]||0)+Number(ton[k]||0);
    });
    state.ton=next;
    try{if(typeof save==='function')save()}catch(e){}
  }
  function wrapSave(){
    if(typeof window.saveItHang!=='function'||window.saveItHang.__itCatalogCodeScan20260718)return;
    var oldSave=window.saveItHang;
    window.saveItHang=function(){
      var idx=currentCatalogIndex();
      var input=byId('itHangCode');
      var code=input?String(input.value||'').trim():'';
      var oldCode=idx>=0&&state.hang&&state.hang[idx]?hnorm(state.hang[idx])[0]:'';
      if(!code){
        alert('Nháº­p mÃ£ thiáº¿t bá»‹ IT');
        if(input)input.focus();
        return;
      }
      var dup=(state.hang||[]).some(function(raw,i){return i!==idx&&hnorm(raw)[0]===code});
      if(dup){
        alert('MÃ£ thiáº¿t bá»‹ IT nÃ y Ä‘Ã£ tá»“n táº¡i. Báº¡n chá»n mÃ£ khÃ¡c hoáº·c báº¥m Sá»­a Ä‘Ãºng dÃ²ng cáº§n sá»­a.');
        if(input)input.focus();
        return;
      }
      var out=oldSave.apply(this,arguments);
      if(idx>=0&&oldCode&&oldCode!==code)updateLinkedRows(oldCode,code);
      return out;
    };
    window.saveItHang.__itCatalogCodeScan20260718=true;
    var btn=byId('saveItHang');
    if(btn)btn.onclick=window.saveItHang;
  }
  function installStyle(){
    if(byId('it-catalog-code-scan-style-20260718-light-core-16'))return;
    var st=document.createElement('style');
    st.id='it-catalog-code-scan-style-20260718-light-core-16';
    st.textContent='#thietbi .it-hang-code-line{display:grid!important;grid-template-columns:minmax(0,1fr) 86px 92px!important;gap:8px!important;align-items:center!important}#thietbi .it-hang-code-line #itHangCode{width:100%!important;min-width:0!important;height:38px!important;min-height:38px!important;background:#fbfffd!important}#thietbi .it-hang-code-line .btn{height:38px!important;min-height:38px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;padding:0 11px!important;white-space:nowrap!important;border-radius:7px!important;font-weight:750!important}#thietbi .it-hang-code-hidden-file{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important;overflow:hidden!important}#itCatalogScanOverlay{position:fixed!important;inset:0!important;z-index:99999!important;background:rgba(0,28,20,.72)!important;display:grid!important;place-items:center!important;padding:16px!important}#itCatalogScanOverlay .it-catalog-scan-card{width:min(520px,100%)!important;background:#f7fffb!important;border:1px solid #9edcc8!important;border-radius:12px!important;padding:12px!important;box-shadow:0 20px 55px rgba(0,0,0,.32)!important}#itCatalogScanOverlay .it-catalog-scan-head{display:flex!important;justify-content:space-between!important;align-items:center!important;margin-bottom:8px!important}#itCatalogScanVideo{display:block!important;width:100%!important;max-height:58vh!important;background:#001d15!important;border-radius:10px!important;object-fit:cover!important}#itCatalogScanOverlay p{margin:8px 0 0!important;color:#35574a!important;font-size:13px!important}@media(max-width:900px){#thietbi .it-hang-code-line{grid-template-columns:minmax(0,1fr) 72px 78px!important;gap:5px!important}#thietbi .it-hang-code-line #itHangCode{height:40px!important;min-height:40px!important;font-size:13px!important}#thietbi .it-hang-code-line .btn{height:40px!important;min-height:40px!important;font-size:11.5px!important;padding:0 6px!important}}';
    document.head.appendChild(st);
  }
  function apply(){
    if(!isIt())return;
    installStyle();
    installTools();
    wrapSave();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogCodeScan20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,220);setTimeout(apply,760);return out};
    window.render.__itCatalogCodeScan20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogCodeScan20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,160);setTimeout(apply,520);return out};
    window.bindForms.__itCatalogCodeScan20260718=true;
  }
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t&&t.closest&&t.closest('#itCatalogActionCard'))setTimeout(apply,240);
  },true);
  setTimeout(apply,800);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

;(function(){
  var STYLE_ID='it-catalog-hide-duplicate-title-20260718-light-core-16';
  function install(){
    if(document.getElementById(STYLE_ID))return;
    var st=document.createElement('style');
    st.id=STYLE_ID;
    st.textContent='#thietbi #itCatalogStandalonePanel>.head{display:none!important}#thietbi #itCatalogStandalonePanel .it-catalog-standalone-body{border-top:0!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__hideItCatalogDuplicateTitle20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,80);return out};
    window.render.__hideItCatalogDuplicateTitle20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__hideItCatalogDuplicateTitle20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,80);return out};
    window.bindForms.__hideItCatalogDuplicateTitle20260718=true;
  }
  install();
})();

window.__autoOnlineSyncPatch=true;
(function(){
  var lastPush=0;
  var syncing=false;
  function toast(msg){
    var old=document.getElementById('syncToast');
    if(old)old.remove();
    var box=document.createElement('div');
    box.id='syncToast';
    box.textContent=msg;
    box.style.cssText='position:fixed;right:12px;bottom:74px;z-index:99;background:#10251d;color:#fff;padding:9px 12px;border-radius:8px;font-size:13px;box-shadow:0 8px 20px rgba(0,0,0,.18)';
    document.body.appendChild(box);
    setTimeout(function(){if(box&&box.parentNode)box.remove()},2200);
  }
  async function autoPush(){
    if(syncing || !window.dayDuLieuOnline)return;
    var now=Date.now();
    if(now-lastPush<1200)return;
    lastPush=now;
    syncing=true;
    try{await dayDuLieuOnline();toast('ÄÃ£ tá»± Ä‘á»“ng bá»™ online')}catch(e){console.warn(e);toast('ChÆ°a Ä‘á»“ng bá»™ Ä‘Æ°á»£c online')}
    syncing=false;
  }
  async function autoPullFirst(){
    if(sessionStorage.getItem('qlhc-online-pulled')==='1')return;
    if(!window.taiDuLieuOnline)return;
    sessionStorage.setItem('qlhc-online-pulled','1');
    try{await taiDuLieuOnline();toast('ÄÃ£ táº£i dá»¯ liá»‡u online')}catch(e){console.warn(e)}
  }
  var oldSave=window.save;
  if(typeof oldSave==='function'){
    window.save=function(){
      oldSave.apply(this,arguments);
      setTimeout(autoPush,300);
    };
  }
  window.addEventListener('load',function(){setTimeout(autoPullFirst,900)});
  setTimeout(autoPullFirst,1200);
})();
;

window.APP_VERSION='20260718-light-core-16';
(function(){
  async function checkNewVersion(){
    try{
      var res=await fetch('./version.json?v='+Date.now(),{cache:'no-store'});
      if(!res.ok)return;
      var info=await res.json();
      if(info.version&&info.version!==window.APP_VERSION){
        var box=document.createElement('div');
        box.id='updateNotice';
        box.style.cssText='position:fixed;left:10px;right:10px;bottom:calc(74px + env(safe-area-inset-bottom));z-index:120;background:#0f7d5c;color:#fff;border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:center;justify-content:space-between;box-shadow:0 10px 24px rgba(0,0,0,.22);font-size:13px';
        box.innerHTML='<span>CÃ³ báº£n má»›i cá»§a app</span><button type="button" style="border:0;border-radius:8px;background:#fff;color:#0f7d5c;font-weight:700;padding:8px 10px">Cáº­p nháº­t</button>';
        document.body.appendChild(box);
        box.querySelector('button').onclick=function(){
          if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister()})}).finally(function(){location.reload(true)})}
          else location.reload(true);
        };
      }
    }catch(e){}
  }
  window.addEventListener('load',function(){setTimeout(checkNewVersion,1500)});
})();
;

window.__itSerialIdPatch=true;
(function(){
  function serialOf(x){return (x[1]||x[0]||'').trim ? (x[1]||x[0]||'').trim() : (x[1]||x[0]||'')}
  window.screenThietBi=function(){
    var rows=(state.thietBiIT||[]).map(function(raw,i){
      var x=normalizeThietBi(raw), h=item(x[2]), serial=serialOf(x);
      return '<tr>'+td('Sá»‘ seri',serial)+td('Thiáº¿t bá»‹',h[1])+td('Nguá»“n nháº­p',x[3])+td('NgÃ y nháº­p',x[4])+td('Äang sá»­ dá»¥ng bá»Ÿi',x[5])+td('Tráº¡ng thÃ¡i','<span class="tag">'+x[6]+'</span>')+td('Ghi chÃº',x[7]||'')+td('', '<button class="btn small" onclick="editThietBi('+i+')">Sá»­a</button>')+'</tr>'
    }).join('')||'<tr><td class="empty" colspan="8">ChÆ°a cÃ³ thiáº¿t bá»‹ IT theo mÃ£ seri.</td></tr>';
    return shell('thietbi','Thiáº¿t bá»‹ IT theo sá»‘ seri','Theo dÃµi tá»«ng thiáº¿t bá»‹ báº±ng sá»‘ seri: nguá»“n nháº­p, ngÃ y nháº­p, ngÆ°á»i Ä‘ang sá»­ dá»¥ng vÃ  tráº¡ng thÃ¡i.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch thiáº¿t bá»‹</h2></div><div class="wrap"><table><thead><tr><th>Sá»‘ seri</th><th>Thiáº¿t bá»‹</th><th>Nguá»“n nháº­p</th><th>NgÃ y nháº­p</th><th>Äang sá»­ dá»¥ng bá»Ÿi</th><th>Tráº¡ng thÃ¡i</th><th>Ghi chÃº</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin thiáº¿t bá»‹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label class="full">Sá»‘ seri thiáº¿t bá»‹<input id="maThietBi" placeholder="Nháº­p sá»‘ seri trÃªn mÃ¡y/tem thiáº¿t bá»‹"></label><input id="seriThietBi" type="hidden"><label>Máº·t hÃ ng IT<select id="hangThietBi"></select></label><label>Nguá»“n nháº­p<select id="nguonThietBi"></select></label><label>NgÃ y nháº­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÆ°á»i Ä‘ang sá»­ dá»¥ng<input id="nguoiDungThietBi" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban/kho"></label><label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Äang sá»­ dá»¥ng</option><option>Äang sá»­a chá»¯a</option><option>Thanh lÃ½</option><option>Tháº¥t láº¡c</option></select></label><label class="full">Ghi chÃº<input id="ghiChuThietBi" placeholder="Cáº¥u hÃ¬nh, tÃ¬nh tráº¡ng, chá»©ng tá»«..."></label><button class="btn primary" id="luuThietBi">LÆ°u thiáº¿t bá»‹</button><button class="btn" id="huyThietBi">Táº¡o má»›i</button></div></div></div>')
  };
  window.editThietBi=function(i){
    var x=normalizeThietBi(state.thietBiIT[i]), serial=serialOf(x);
    el('editThietBi').value=i;
    el('maThietBi').value=serial;
    el('maThietBi').disabled=false;
    if(el('seriThietBi'))el('seriThietBi').value=serial;
    el('hangThietBi').value=x[2];el('nguonThietBi').value=x[3];el('ngayThietBi').value=x[4];el('nguoiDungThietBi').value=x[5];el('trangThaiThietBi').value=x[6];el('ghiChuThietBi').value=x[7]||''
  };
  window.resetThietBi=function(){
    ['editThietBi','maThietBi','seriThietBi','nguoiDungThietBi','ghiChuThietBi'].forEach(function(id){if(el(id))el(id).value=''});
    if(el('maThietBi'))el('maThietBi').disabled=false;if(el('ngayThietBi'))el('ngayThietBi').value=today;if(el('trangThaiThietBi'))el('trangThaiThietBi').value='Trong kho'
  };
  window.saveThietBi=function(){
    if(!state.thietBiIT)state.thietBiIT=[];
    var serial=el('maThietBi').value.trim();
    if(!serial)return alert('Nháº­p sá»‘ seri thiáº¿t bá»‹');
    var row=[serial,serial,el('hangThietBi').value,el('nguonThietBi').value,el('ngayThietBi').value,el('nguoiDungThietBi').value||'Trong kho',el('trangThaiThietBi').value,el('ghiChuThietBi').value];
    var i=el('editThietBi').value;
    var exists=state.thietBiIT.some(function(raw,idx){var x=normalizeThietBi(raw);return String(x[0]||'')===serial||String(x[1]||'')===serial ? idx!==Number(i) : false});
    if(exists)return alert('Sá»‘ seri nÃ y Ä‘Ã£ tá»“n táº¡i');
    if(i==='')state.thietBiIT.push(row);else state.thietBiIT[Number(i)]=row;
    save();render();
  };
  if(typeof window.render==='function'&&window.isLoggedIn)setTimeout(render,0);
})();
;

window.__itTransferQuickPatch=true;
(function(){
  function serialOfQuick(x){return String(x[1]||x[0]||'')}
  window.chuyenNguoiDungThietBi=function(i){
    if(!state.thietBiIT||!state.thietBiIT[i])return;
    var x=normalizeThietBi(state.thietBiIT[i]);
    var serial=serialOfQuick(x);
    var old=x[5]||'Trong kho';
    var nguoi=prompt('Chuyá»ƒn thiáº¿t bá»‹ '+serial+' cho ai sá»­ dá»¥ng?', old==='Trong kho'?'':old);
    if(nguoi===null)return;
    nguoi=nguoi.trim();
    if(!nguoi)return alert('Nháº­p tÃªn ngÆ°á»i/phÃ²ng ban nháº­n thiáº¿t bá»‹');
    x[0]=serial;x[1]=serial;x[5]=nguoi;x[6]='Äang sá»­ dá»¥ng';
    var note='Chuyá»ƒn tá»« '+old+' sang '+nguoi+' ngÃ y '+today;
    x[7]=x[7] ? x[7]+' | '+note : note;
    state.thietBiIT[i]=x;
    save();render();
  };
  window.traVeKhoThietBi=function(i){
    if(!state.thietBiIT||!state.thietBiIT[i])return;
    var x=normalizeThietBi(state.thietBiIT[i]);
    var old=x[5]||'Trong kho';
    if(!confirm('Chuyá»ƒn thiáº¿t bá»‹ '+serialOfQuick(x)+' vá» kho?'))return;
    x[0]=serialOfQuick(x);x[1]=serialOfQuick(x);x[5]='Kho IT';x[6]='Trong kho';
    var note='Thu há»“i tá»« '+old+' vá» kho ngÃ y '+today;
    x[7]=x[7] ? x[7]+' | '+note : note;
    state.thietBiIT[i]=x;
    save();render();
  };
  window.screenThietBi=function(){
    var rows=(state.thietBiIT||[]).map(function(raw,i){
      var x=normalizeThietBi(raw), h=item(x[2]), serial=serialOfQuick(x);
      var actions='<div class="row-actions"><button class="btn small" onclick="chuyenNguoiDungThietBi('+i+')">Chuyá»ƒn ngÆ°á»i dÃ¹ng</button><button class="btn small" onclick="traVeKhoThietBi('+i+')">Vá» kho</button><button class="btn small" onclick="editThietBi('+i+')">Sá»­a</button></div>';
      return '<tr>'+td('Sá»‘ seri',serial)+td('Thiáº¿t bá»‹',h[1])+td('Nguá»“n nháº­p',x[3])+td('NgÃ y nháº­p',x[4])+td('Äang sá»­ dá»¥ng bá»Ÿi',x[5])+td('Tráº¡ng thÃ¡i','<span class="tag">'+x[6]+'</span>')+td('Ghi chÃº',x[7]||'')+td('Thao tÃ¡c', actions)+'</tr>'
    }).join('')||'<tr><td class="empty" colspan="8">ChÆ°a cÃ³ thiáº¿t bá»‹ IT theo sá»‘ seri.</td></tr>';
    return shell('thietbi','Thiáº¿t bá»‹ IT theo sá»‘ seri','Theo dÃµi vÃ  chuyá»ƒn nhanh thiáº¿t bá»‹ giá»¯a ngÆ°á»i dÃ¹ng/phÃ²ng ban.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch thiáº¿t bá»‹</h2></div><div class="wrap"><table><thead><tr><th>Sá»‘ seri</th><th>Thiáº¿t bá»‹</th><th>Nguá»“n nháº­p</th><th>NgÃ y nháº­p</th><th>Äang sá»­ dá»¥ng bá»Ÿi</th><th>Tráº¡ng thÃ¡i</th><th>Ghi chÃº</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin thiáº¿t bá»‹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label class="full">Sá»‘ seri thiáº¿t bá»‹<input id="maThietBi" placeholder="Nháº­p sá»‘ seri trÃªn mÃ¡y/tem thiáº¿t bá»‹"></label><input id="seriThietBi" type="hidden"><label>Máº·t hÃ ng IT<select id="hangThietBi"></select></label><label>Nguá»“n nháº­p<select id="nguonThietBi"></select></label><label>NgÃ y nháº­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÆ°á»i Ä‘ang sá»­ dá»¥ng<input id="nguoiDungThietBi" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban/kho"></label><label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Äang sá»­ dá»¥ng</option><option>Äang sá»­a chá»¯a</option><option>Thanh lÃ½</option><option>Tháº¥t láº¡c</option></select></label><label class="full">Ghi chÃº<input id="ghiChuThietBi" placeholder="Cáº¥u hÃ¬nh, tÃ¬nh tráº¡ng, chá»©ng tá»«..."></label><button class="btn primary" id="luuThietBi">LÆ°u thiáº¿t bá»‹</button><button class="btn" id="huyThietBi">Táº¡o má»›i</button></div></div></div>')
  };
})();
;

window.__employeeUsersPatch=true;
(function(){
  function ensureUsers(){
    if(!state.users||!Array.isArray(state.users))state.users=[];
    if(!state.users.some(function(u){return u.username==='admin'})){
      state.users.unshift({username:'admin',password:(window.auth&&auth.pass)||'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});
    }
    state.users.forEach(function(u){if(typeof u.active==='undefined')u.active=true;if(!u.name)u.name=u.username;if(!u.role)u.role='NhÃ¢n viÃªn'});
  }
  var oldMigrate=window.migrateState;
  if(typeof oldMigrate==='function'){
    window.migrateState=function(s){s=oldMigrate(s);if(!s.users||!Array.isArray(s.users))s.users=[];if(!s.users.some(function(u){return u.username==='admin'}))s.users.unshift({username:'admin',password:'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});return s};
  }
  ensureUsers();
  window.currentUser=null;
  window.login=function(){
    ensureUsers();
    var u=el('loginUser').value.trim();
    var p=el('loginPass').value;
    var found=state.users.find(function(x){return x.username===u&&x.password===p&&x.active!==false});
    if(!found && window.auth && u===auth.user&&p===auth.pass){found={username:u,password:p,name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true}}
    if(found){
      window.currentUser=found;
      isLoggedIn=true;
      sessionStorage.setItem('qlkho-login','1');
      sessionStorage.setItem('qlkho-user',found.username);
      if(el('loginRemember')&&el('loginRemember').checked){localStorage.setItem('qlhc-remember-login',JSON.stringify({user:u,pass:p,remember:true}))}else{localStorage.removeItem('qlhc-remember-login');if(el('loginPass'))el('loginPass').value=''}
      if(el('loginError'))el('loginError').textContent='';
      showLogin();render();
    }else{if(el('loginError'))el('loginError').textContent='Sai tÃ i khoáº£n hoáº·c máº­t kháº©u'}
  };
  window.logout=function(){isLoggedIn=false;window.currentUser=null;sessionStorage.removeItem('qlkho-login');sessionStorage.removeItem('qlkho-user');showLogin()};
  window.bindAuth=function(){
    var savedLogin=null;try{savedLogin=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null')}catch(e){savedLogin=null}
    if(savedLogin&&savedLogin.remember){
      if(el('loginUser'))el('loginUser').value=savedLogin.user||'';
      if(el('loginPass'))el('loginPass').value=savedLogin.pass||'';
      if(el('loginRemember'))el('loginRemember').checked=true;
    }
    if(el('loginRemember'))el('loginRemember').onchange=function(){if(!this.checked)localStorage.removeItem('qlhc-remember-login')};
    if(el('loginBtn'))el('loginBtn').onclick=login;
    if(el('loginPass'))el('loginPass').onkeydown=function(e){if(e.key==='Enter')login()};
  };  function userRows(){ensureUsers();return state.users.map(function(u,i){return '<tr>'+td('TÃªn Ä‘Äƒng nháº­p',u.username)+td('Há» tÃªn',u.name||'')+td('Vai trÃ²',u.role||'NhÃ¢n viÃªn')+td('Tráº¡ng thÃ¡i',u.active===false?'<span class="tag bad">KhÃ³a</span>':'<span class="tag">Hoáº¡t Ä‘á»™ng</span>')+td('Thao tÃ¡c','<div class="row-actions"><button class="btn small" onclick="editUser('+i+')">Sá»­a</button><button class="btn small" onclick="toggleUser('+i+')">'+(u.active===false?'Má»Ÿ':'KhÃ³a')+'</button></div>')+'</tr>'}).join('')}
  window.editUser=function(i){ensureUsers();var u=state.users[i];if(!u)return;el('editUserIndex').value=i;el('userName').value=u.username;el('userName').disabled=false;el('userFullName').value=u.name||'';el('userPass').value=u.password||'';el('userRole').value=u.role||'NhÃ¢n viÃªn';el('userActive').checked=u.active!==false};
  window.resetUser=function(){['editUserIndex','userName','userFullName','userPass'].forEach(function(id){if(el(id))el(id).value=''});if(el('userName'))el('userName').disabled=false;if(el('userRole'))el('userRole').value='NhÃ¢n viÃªn';if(el('userActive'))el('userActive').checked=true};
  window.toggleUser=function(i){ensureUsers();var u=state.users[i];if(!u)return;if(u.username==='admin'&&u.active!==false)return alert('KhÃ´ng nÃªn khÃ³a tÃ i khoáº£n admin');u.active=!(u.active!==false);save();render()};
  window.saveUser=function(){
    ensureUsers();
    var idx=el('editUserIndex').value;
    var username=el('userName').value.trim();
    var name=el('userFullName').value.trim()||username;
    var pass=el('userPass').value.trim();
    var role=el('userRole').value;
    var active=el('userActive').checked;
    if(!username)return alert('Nháº­p tÃªn Ä‘Äƒng nháº­p');
    if(!pass||pass.length<4)return alert('Máº­t kháº©u nÃªn cÃ³ Ã­t nháº¥t 4 kÃ½ tá»±');
    if(idx===''){
      if(state.users.some(function(u){return u.username===username}))return alert('TÃªn Ä‘Äƒng nháº­p Ä‘Ã£ tá»“n táº¡i');
      state.users.push({username:username,password:pass,name:name,role:role,active:active});
    }else{
      idx=Number(idx);
      var oldUser=state.users[idx];
      if(!oldUser)return alert('KhÃ´ng tÃ¬m tháº¥y tÃ i khoáº£n cáº§n sá»­a');
      if(state.users.some(function(u,j){return j!==idx&&u.username===username}))return alert('TÃªn Ä‘Äƒng nháº­p Ä‘Ã£ tá»“n táº¡i');
      state.users[idx]={username:username,password:pass,name:name,role:role,active:active};
      if(window.currentUser&&window.currentUser.username===oldUser.username){window.currentUser=state.users[idx];sessionStorage.setItem('qlkho-user',username)}
      if(oldUser.username==='admin'&&window.auth){auth.user=username;auth.pass=pass;saveAuth()}
      try{var remembered=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null');if(remembered&&remembered.user===oldUser.username){localStorage.setItem('qlhc-remember-login',JSON.stringify({user:username,pass:pass,remember:true}))}}catch(e){}
    }
    save();
    resetUser();
    alert('ÄÃ£ lÆ°u tÃ i khoáº£n');
    render();
  };  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind();if(el('luuUser'))el('luuUser').onclick=saveUser;if(el('huyUser'))el('huyUser').onclick=resetUser};
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    ensureUsers();
    var html=oldSettings();
    if(html.indexOf('TÃ i khoáº£n nhÃ¢n viÃªn')>=0)return html;
    var panel='<div class="panel"><div class="head"><h2>TÃ i khoáº£n nhÃ¢n viÃªn</h2></div><div class="body form"><input id="editUserIndex" type="hidden"><label>TÃªn Ä‘Äƒng nháº­p<input id="userName" placeholder="VD: nguyenvana"></label><label>Máº­t kháº©u<input id="userPass" placeholder="Tá»‘i thiá»ƒu 4 kÃ½ tá»±"></label><label>Há» tÃªn<input id="userFullName" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban"></label><label>Vai trÃ²<select id="userRole"><option>NhÃ¢n viÃªn</option><option>Admin</option></select></label><label class="full"><input id="userActive" type="checkbox" checked> TÃ i khoáº£n Ä‘ang hoáº¡t Ä‘á»™ng</label><button class="btn primary" id="luuUser">LÆ°u tÃ i khoáº£n</button><button class="btn" id="huyUser">Táº¡o má»›i</button></div><div class="wrap"><table><thead><tr><th>TÃªn Ä‘Äƒng nháº­p</th><th>Há» tÃªn</th><th>Vai trÃ²</th><th>Tráº¡ng thÃ¡i</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+userRows()+'</tbody></table></div></div>';
    return html.replace('<div class="two">',panel+'<div class="two">');
  };
  var oldSaveBaoMat=window.saveBaoMat;
  window.saveBaoMat=function(){
    oldSaveBaoMat();
    ensureUsers();
    var admin=state.users.find(function(u){return u.username==='admin'});
    if(admin&&window.auth){admin.password=auth.pass;admin.name='Quáº£n trá»‹ viÃªn';admin.role='Admin';admin.active=true;save()}
  };
})();
;

window.__rolePermissionPatch=true;
(function(){
  function currentRole(){
    if(window.currentUser&&window.currentUser.role)return window.currentUser.role;
    var u=sessionStorage.getItem('qlkho-user');
    if(u&&state.users){var found=state.users.find(function(x){return x.username===u});if(found){window.currentUser=found;return found.role||'NhÃ¢n viÃªn'}}
    return 'Admin';
  }
  window.isAdmin=function(){return currentRole()==='Admin'};
  var allowedStaff=['tongquan','ton','nhap','xuat','thietbi','chuyen','baocao'];
  var oldGo=window.go;
  window.go=function(id){
    if(!isAdmin()&&allowedStaff.indexOf(id)<0){alert('TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng cÃ³ quyá»n vÃ o má»¥c nÃ y');return}
    oldGo(id);
  };
  window.buildNav=function(){
    var navItems=isAdmin()?nav:nav.filter(function(n){return allowedStaff.indexOf(n[0])>=0});
    var mobileItems=isAdmin()?mobile:mobile.filter(function(n){return allowedStaff.indexOf(n[0])>=0});
    var side=document.getElementById('sideNav');
    if(side)side.innerHTML=navItems.map(function(n){return '<button class="nav '+(current===n[0]?'active':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');
    var mb=document.getElementById('mobileNav');
    if(mb)mb.innerHTML=mobileItems.map(function(n){return '<button class="'+(current===n[0]?'active':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');
  };
  var oldRender=window.render;
  window.render=function(){
    if(!isAdmin()&&allowedStaff.indexOf(current)<0)current='tongquan';
    oldRender();
  };
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    if(!isAdmin())return shell('thietlap','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c vÃ o pháº§n thiáº¿t láº­p.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thay Ä‘á»•i danh má»¥c hoáº·c tÃ i khoáº£n.</div></div>');
    return oldSettings();
  };
  var oldHang=window.screenHang;
  window.screenHang=function(){
    if(!isAdmin())return shell('hanghoa','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c sá»­a danh má»¥c hÃ ng hÃ³a.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thÃªm hoáº·c sá»­a hÃ ng hÃ³a.</div></div>');
    return oldHang();
  };
})();
;

window.__changeMyPasswordPatch=true;
(function(){
  window.doiMatKhauCuaToi=function(){
    if(!state.users||!Array.isArray(state.users))state.users=[];
    var username=(window.currentUser&&window.currentUser.username)||sessionStorage.getItem('qlkho-user')||(window.auth&&auth.user)||'admin';
    var user=state.users.find(function(u){return u.username===username});
    if(!user&&window.auth&&username===auth.user){user={username:auth.user,password:auth.pass,name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true};state.users.unshift(user)}
    var old=el('myOldPass').value;
    var p1=el('myNewPass').value.trim();
    var p2=el('myNewPass2').value.trim();
    if(!user)return alert('KhÃ´ng tÃ¬m tháº¥y tÃ i khoáº£n hiá»‡n táº¡i');
    if(old!==user.password)return alert('Máº­t kháº©u hiá»‡n táº¡i khÃ´ng Ä‘Ãºng');
    if(!p1||p1.length<4)return alert('Máº­t kháº©u má»›i nÃªn cÃ³ Ã­t nháº¥t 4 kÃ½ tá»±');
    if(p1!==p2)return alert('Nháº­p láº¡i máº­t kháº©u má»›i chÆ°a khá»›p');
    user.password=p1;
    if(window.auth&&username===auth.user){auth.pass=p1;saveAuth()}
    if(window.currentUser)window.currentUser.password=p1;
    save();
    ['myOldPass','myNewPass','myNewPass2'].forEach(function(id){if(el(id))el(id).value=''});
    alert('ÄÃ£ Ä‘á»•i máº­t kháº©u. Láº§n Ä‘Äƒng nháº­p sau dÃ¹ng máº­t kháº©u má»›i.');
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind();if(el('luuMyPass'))el('luuMyPass').onclick=doiMatKhauCuaToi};
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    var html=oldSettings();
    if(html.indexOf('Äá»•i máº­t kháº©u cá»§a tÃ´i')>=0)return html;
    var panel='<div class="panel"><div class="head"><h2>Äá»•i máº­t kháº©u cá»§a tÃ´i</h2></div><div class="body form"><label>Máº­t kháº©u hiá»‡n táº¡i<input id="myOldPass" type="password" autocomplete="current-password"></label><label>Máº­t kháº©u má»›i<input id="myNewPass" type="password" autocomplete="new-password"></label><label>Nháº­p láº¡i máº­t kháº©u má»›i<input id="myNewPass2" type="password" autocomplete="new-password"></label><button class="btn primary" id="luuMyPass">Äá»•i máº­t kháº©u</button></div></div>';
    return html.replace('<div class="two">',panel+'<div class="two">');
  };
})();
;

window.__settingsCollapsePatch=true;
(function(){
  function applySettingsCollapse(){
    var screen=document.getElementById('thietlap');
    if(!screen)return;
    if(!screen.querySelector('.settings-note')){
      var top=screen.querySelector('.top');
      if(top)top.insertAdjacentHTML('afterend','<div class="settings-note">Báº¥m tá»«ng tiÃªu Ä‘á» Ä‘á»ƒ má»Ÿ pháº§n cáº§n chá»‰nh</div>');
    }
    var panels=[].slice.call(screen.querySelectorAll('.panel'));
    panels.forEach(function(p,i){
      if(p.getAttribute('data-settings-ready')==='1')return;
      p.setAttribute('data-settings-ready','1');
      p.classList.add('settings-collapsed');
      var head=p.querySelector(':scope > .head');
      if(head){head.onclick=function(e){
        if(e.target&&e.target.closest('button,input,select'))return;
        p.classList.toggle('settings-collapsed');
      }}
    });
  }
  var oldRender=window.render;
  window.render=function(){oldRender();setTimeout(applySettingsCollapse,0)};
  document.addEventListener('click',function(){setTimeout(applySettingsCollapse,50)});
  setTimeout(applySettingsCollapse,300);
})();
;

(function(){
  function canEditSlip(){try{return typeof isAdmin==='function'?isAdmin():((window.currentUser&&String(window.currentUser.role).toLowerCase()==='admin'))}catch(e){return false}}
  function optPairs(arr,selected){return arr.map(function(x){var v=Array.isArray(x)?x[0]:x;var t=Array.isArray(x)?x[1]:x;return '<option value="'+String(v).replace(/"/g,'&quot;')+'" '+(v===selected?'selected':'')+'>'+t+'</option>'}).join('')}
  function optText(arr,selected){return arr.map(function(x){return '<option value="'+String(x).replace(/"/g,'&quot;')+'" '+(x===selected?'selected':'')+'>'+x+'</option>'}).join('')}
  function slipTypeOptions(x){var list=(Number(x[5]||0)>0?state.loaiNhapList:state.loaiXuatList)||[];if(list.indexOf(x[4])<0)list=[x[4]].concat(list);return optText(list,x[4])}
  function applySlipToStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  function slipRows(){var rows=state.bd.map(function(x,i){return {x:x,i:i}}).reverse();return rows.map(function(r){var x=r.x;var action=canEditSlip()?td('Thao tÃ¡c','<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>'):'';return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+action+'</tr>'}).join('')}
  var oldShowReport=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShowReport(mode,btn);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiáº¿t XNK';
    var actionHead=canEditSlip()?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRows()+'</tbody></table>';
  };
  window.editSlip=function(i){
    if(!canEditSlip())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c sá»­a phiáº¿u');
    var x=state.bd[i];if(!x)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    el('rpTitle').textContent='Sá»­a phiáº¿u '+(x[1]||'');
    var hangOpts=state.hang.map(function(raw){var h=normalizeHang(raw);return [h[0],h[0]+' - '+h[1]]});
    el('rp').innerHTML='<div class="body form"><input id="editSlipIndex" type="hidden" value="'+i+'"><label>NgÃ y<input id="editSlipDate" type="date" value="'+(x[0]||today)+'"></label><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="editSlipNo" value="'+(x[1]||'')+'" readonly></label><label>Kho<select id="editSlipKho">'+optPairs(state.kho,x[2])+'</select></label><label>HÃ ng hÃ³a<select id="editSlipHang">'+optPairs(hangOpts,x[3])+'</select></label><label>Loáº¡i phiáº¿u<select id="editSlipLoai">'+slipTypeOptions(x)+'</select></label><label>NCC/Ghi chÃº<input id="editSlipNcc" value="'+(x[7]||'')+'"></label><label>Sá»‘ lÆ°á»£ng nháº­p<input id="editSlipNhap" type="number" min="0" value="'+Number(x[5]||0)+'"></label><label>Sá»‘ lÆ°á»£ng xuáº¥t<input id="editSlipXuat" type="number" min="0" value="'+Number(x[6]||0)+'"></label><p class="hint full">Chá»‰ nháº­p má»™t trong hai Ã´ Nháº­p hoáº·c Xuáº¥t. Khi lÆ°u, tá»“n kho sáº½ tá»± tÃ­nh láº¡i theo phiáº¿u Ä‘Ã£ sá»­a.</p><button class="btn primary" onclick="saveEditSlip()">LÆ°u phiáº¿u Ä‘Ã£ sá»­a</button><button class="btn" onclick="showReport(\'xnk\')">Há»§y</button></div>';
  };
  window.saveEditSlip=function(){
    if(!canEditSlip())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c sá»­a phiáº¿u');
    var i=Number(el('editSlipIndex').value);var old=state.bd[i];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);
    if(nhap<0||xuat<0)return alert('Sá»‘ lÆ°á»£ng khÃ´ng há»£p lá»‡');
    if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('Chá»‰ nháº­p sá»‘ lÆ°á»£ng á»Ÿ má»™t Ã´: Nháº­p hoáº·c Xuáº¥t');
    applySlipToStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim()];
    var key=row[2]+'|'+row[3];var newStock=(state.ton[key]||0)+nhap-xuat;
    if(newStock<0){applySlipToStock(old,1);return alert('KhÃ´ng Ä‘á»§ tá»“n kho sau khi sá»­a phiáº¿u xuáº¥t')}
    state.bd[i]=row;applySlipToStock(row,1);save();alert('ÄÃ£ sá»­a phiáº¿u vÃ  cáº­p nháº­t tá»“n kho');render();current='baocao';setTimeout(function(){showReport('xnk')},0);
  };
})();
;

(function(){
  function prefixByGroup(group){group=String(group||'').toLowerCase();if(group.indexOf('vÄƒn phÃ²ng')>=0||group.indexOf('van phong')>=0)return 'VP';if(group.indexOf('cÃ´ng cá»¥')>=0||group.indexOf('cong cu')>=0)return 'CC';if(group.indexOf('it')>=0||group.indexOf('thiáº¿t bá»‹')>=0||group.indexOf('thiet bi')>=0)return 'TB';return 'HH'}
  window.nextItemCode=function(group){var prefix=prefixByGroup(group);var max=0;(state.hang||[]).forEach(function(raw){var h=normalizeHang(raw);var m=String(h[0]||'').match(new RegExp('^'+prefix+'(\\d+)$'));if(m){var n=parseInt(m[1],10);if(!isNaN(n)&&n>max)max=n}});return prefix+String(max+1).padStart(3,'0')}
  function refreshMainItemCode(){if(el('editHang')&&el('editHang').value===''){var group=el('nhomHang')?el('nhomHang').value:'';if(el('maHang')){el('maHang').value=nextItemCode(group);el('maHang').readOnly=true}}}
  function refreshQuickItemCode(){var group=el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'';if(el('nhapMaHangMoi')){el('nhapMaHangMoi').value=nextItemCode(group);el('nhapMaHangMoi').readOnly=true}}
  var oldBindForms=window.bindForms;
  window.bindForms=function(){oldBindForms.apply(this,arguments);refreshMainItemCode();refreshQuickItemCode();if(el('nhomHang'))el('nhomHang').onchange=refreshMainItemCode;if(el('nhapNhomHangMoi'))el('nhapNhomHangMoi').onchange=refreshQuickItemCode;var oldBtn=el('batHangMoi');if(oldBtn&&!oldBtn.__autoCodeBound){var prev=oldBtn.onclick;oldBtn.onclick=function(){if(prev)prev.apply(this,arguments);setTimeout(refreshQuickItemCode,0)};oldBtn.__autoCodeBound=true}}
  var oldResetHang=window.resetHang;
  window.resetHang=function(){oldResetHang();refreshMainItemCode()}
  var oldSaveHang=window.saveHang;
  window.saveHang=function(){if(el('editHang')&&el('editHang').value===''&&el('maHang'))el('maHang').value=nextItemCode(el('nhomHang')?el('nhomHang').value:'');oldSaveHang()}
  var oldSaveNhap=window.saveNhap;
  window.saveNhap=function(){if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'&&el('nhapMaHangMoi'))el('nhapMaHangMoi').value=nextItemCode(el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'');oldSaveNhap()}
})();
;

(function(){
  window.nextKhoCode=function(){var max=0;(state.kho||[]).forEach(function(k){var m=String(k[0]||'').match(/^KHO-(\d+)$/);if(m){var n=parseInt(m[1],10);if(!isNaN(n)&&n>max)max=n}});return 'KHO-'+String(max+1).padStart(3,'0')}
  window.formKho=function(prefix){prefix=prefix||'';return '<div class="panel"><div class="head"><h2>ThÃªm / sá»­a kho</h2><span class="tag">MÃ£ kho tá»± Ä‘á»™ng</span></div><div class="body form"><input id="'+prefix+'editKho" type="hidden"><label>MÃ£ kho<input id="'+prefix+'maKho" readonly value="'+nextKhoCode()+'"></label><label>TÃªn kho<input id="'+prefix+'tenKho" placeholder="VD: Kho VP 77CT"></label><label class="full">NgÆ°á»i phá»¥ trÃ¡ch<input id="'+prefix+'ptKho" placeholder="TÃªn ngÆ°á»i/phÃ²ng ban phá»¥ trÃ¡ch"></label><button class="btn primary" id="'+prefix+'luuKho">LÆ°u kho</button><button class="btn" id="'+prefix+'huyKho">ThÃªm kho má»›i</button></div></div>'}
  window.resetKho=function(p){p=p||'';[p+'editKho',p+'tenKho',p+'ptKho'].forEach(function(id){if(el(id))el(id).value=''});if(el(p+'maKho')){el(p+'maKho').value=nextKhoCode();el(p+'maKho').readOnly=true;el(p+'maKho').disabled=false}}
  window.fillKho=function(p,i){p=p||'';if(!state.kho[i])return;el(p+'editKho').value=i;el(p+'maKho').value=state.kho[i][0];el(p+'maKho').readOnly=true;el(p+'maKho').disabled=false;el(p+'tenKho').value=state.kho[i][1];el(p+'ptKho').value=state.kho[i][2]||''}
  window.editKho=function(i){current='thietlap';screenHistory.push('tongquan');render();setTimeout(function(){fillKho('set',i);var box=el('settenKho');if(box)box.focus()},0)}
  window.editKhoSetup=function(i){fillKho('set',i);var box=el('settenKho');if(box)box.focus()}
  window.saveKho=function(p){p=p||'';var ma=(el(p+'maKho')&&el(p+'maKho').value)||nextKhoCode();var ten=(el(p+'tenKho')&&el(p+'tenKho').value.trim())||'';var pt=(el(p+'ptKho')&&el(p+'ptKho').value.trim())||'ChÆ°a gÃ¡n';if(!ten)return alert('Nháº­p tÃªn kho');var i=el(p+'editKho').value;if(i===''){if(state.kho.some(function(k){return k[0]===ma}))ma=nextKhoCode();state.kho.push([ma,ten,pt])}else{state.kho[Number(i)][1]=ten;state.kho[Number(i)][2]=pt}save();alert('ÄÃ£ lÆ°u kho');render()}
  var oldScreenThietLap=window.screenThietLap;
  window.screenThietLap=function(){var html=oldScreenThietLap();if(!isAdmin||!isAdmin())return html;return html.replace('<h2>Danh sÃ¡ch kho</h2>','<h2>Danh sÃ¡ch kho</h2><button class="btn small" type="button" onclick="resetKho(\'set\')">+ ThÃªm kho má»›i</button>')}
})();
;

(function(){
  if(window.__warehouseCombinedSettingsPatch)return;
  window.__warehouseCombinedSettingsPatch=true;
  if(!document.getElementById('warehouse-combined-settings-style-20260718-light-core-16')){
    var st=document.createElement('style');
    st.id='warehouse-combined-settings-style-20260718-light-core-16';
    st.textContent='.warehouse-combined-panel + .two > .panel:nth-child(1),.warehouse-combined-panel + .two > .panel:nth-child(2){display:none!important}.warehouse-combined-panel .warehouse-combined-form{display:grid;grid-template-columns:170px minmax(220px,1fr) minmax(220px,1fr) auto auto;gap:10px 12px;align-items:end}.warehouse-combined-panel .warehouse-combined-form label{margin:0}.warehouse-combined-panel .warehouse-combined-table .btn.small{min-width:58px}.warehouse-combined-panel .warehouse-code-note{font-size:12px;color:var(--muted);margin:8px 0 0}@media(max-width:900px){.warehouse-combined-panel .warehouse-combined-form{grid-template-columns:1fr}.warehouse-combined-panel .warehouse-combined-table table{min-width:0}.warehouse-combined-panel .warehouse-combined-table th:nth-child(1),.warehouse-combined-panel .warehouse-combined-table td:nth-child(1){display:none}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function nextCode(){return typeof nextKhoCode==='function'?nextKhoCode():'KHO-'+String(((state.kho||[]).length+1)).padStart(3,'0')}
  function warehouseRows(){
    return (state.kho||[]).map(function(k,i){
      return '<tr>'+td('MÃ£ kho',esc(k[0]))+td('TÃªn kho',esc(k[1]))+td('NgÆ°á»i phá»¥ trÃ¡ch',esc(k[2]||'ChÆ°a gÃ¡n'))+td('Thao tÃ¡c','<button class="btn small" type="button" onclick="editWarehouseCombined('+i+')">Sá»­a</button>')+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="4">ChÆ°a cÃ³ kho.</td></tr>';
  }
  function combinedWarehousePanel(){
    return '<div class="panel warehouse-combined-panel"><div class="head"><h2>Quáº£n lÃ½ kho</h2><span class="tag">ThÃªm, sá»­a vÃ  xem danh sÃ¡ch chung</span></div><div class="body"><div class="warehouse-combined-form"><input id="whEditKho" type="hidden"><label>MÃ£ kho tá»± Ä‘á»™ng<input id="whMaKho" readonly value="'+esc(nextCode())+'"></label><label>TÃªn kho<input id="whTenKho" placeholder="VD: Kho VP 77CT"></label><label>NgÆ°á»i phá»¥ trÃ¡ch<input id="whPtKho" placeholder="TÃªn ngÆ°á»i/phÃ²ng ban"></label><button class="btn primary" id="whSaveKho" type="button">LÆ°u kho</button><button class="btn" id="whNewKho" type="button">ThÃªm má»›i</button></div><p class="warehouse-code-note">MÃ£ kho Ä‘Æ°á»£c giá»¯ tá»± Ä‘á»™ng Ä‘á»ƒ dá»¯ liá»‡u tá»“n khÃ´ng bá»‹ sai. Quáº£n trá»‹ viÃªn sá»­a Ä‘Æ°á»£c tÃªn kho vÃ  ngÆ°á»i phá»¥ trÃ¡ch.</p></div><div class="wrap warehouse-combined-table"><table><thead><tr><th>MÃ£ kho</th><th>TÃªn kho</th><th>NgÆ°á»i phá»¥ trÃ¡ch</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+warehouseRows()+'</tbody></table></div></div>';
  }
  window.resetWarehouseCombined=function(){
    if(el('whEditKho'))el('whEditKho').value='';
    if(el('whMaKho'))el('whMaKho').value=nextCode();
    if(el('whTenKho'))el('whTenKho').value='';
    if(el('whPtKho'))el('whPtKho').value='';
    if(el('whTenKho'))el('whTenKho').focus();
  };
  window.editWarehouseCombined=function(i){
    var k=(state.kho||[])[i];if(!k)return;
    if(el('whEditKho'))el('whEditKho').value=i;
    if(el('whMaKho'))el('whMaKho').value=k[0]||'';
    if(el('whTenKho'))el('whTenKho').value=k[1]||'';
    if(el('whPtKho'))el('whPtKho').value=k[2]||'';
    if(el('whTenKho'))el('whTenKho').focus();
  };
  window.saveWarehouseCombined=function(){
    var ten=(el('whTenKho')&&el('whTenKho').value.trim())||'';
    var pt=(el('whPtKho')&&el('whPtKho').value.trim())||'ChÆ°a gÃ¡n';
    var idx=(el('whEditKho')&&el('whEditKho').value)||'';
    if(!ten)return alert('Nháº­p tÃªn kho');
    if(idx===''){
      var ma=nextCode();
      while((state.kho||[]).some(function(k){return k[0]===ma})){ma='KHO-'+String(parseInt(ma.replace('KHO-',''),10)+1).padStart(3,'0')}
      state.kho.push([ma,ten,pt]);
    }else{
      idx=Number(idx);
      if(!state.kho[idx])return alert('KhÃ´ng tÃ¬m tháº¥y kho cáº§n sá»­a');
      state.kho[idx][1]=ten;
      state.kho[idx][2]=pt;
    }
    save();
    alert('ÄÃ£ lÆ°u kho');
    render();
  };
  var prevBind=window.bindForms;
  window.bindForms=function(){
    prevBind.apply(this,arguments);
    if(el('whSaveKho'))el('whSaveKho').onclick=saveWarehouseCombined;
    if(el('whNewKho'))el('whNewKho').onclick=resetWarehouseCombined;
  };
  var prevSettings=window.screenThietLap;
  window.screenThietLap=function(){
    var html=prevSettings.apply(this,arguments);
    if(html.indexOf('warehouse-combined-panel')>=0)return html;
    if(typeof isAdmin==='function'&&!isAdmin())return html;
    return html.replace('<div class="two">',combinedWarehousePanel()+'<div class="two">');
  };
})();
;

(function(){
  if(window.__itemSearchInputPatch)return;
  window.__itemSearchInputPatch=true;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function itemOptions(){
    return (state.hang||[]).map(function(raw){var h=normalizeHang(raw);return '<option value="'+esc(h[0]+' - '+h[1])+'"></option>'}).join('');
  }
  function itemDisplay(code){var h=item(code);return h[0]+' - '+h[1]}
  window.getItemCodeFromSearch=function(id){
    var v=(el(id)&&el(id).value||'').trim();
    if(!v)return '';
    var found=(state.hang||[]).map(normalizeHang).find(function(h){return v===h[0]||v===h[0]+' - '+h[1]||v.toLowerCase()===String(h[1]||'').toLowerCase()});
    if(found)return found[0];
    var m=v.match(/^([^\s-]+)/);
    if(m&&(state.hang||[]).some(function(raw){return normalizeHang(raw)[0]===m[1]}))return m[1];
    return '';
  };
  window.screenNhap=function(){return shell('nhap','Nháº­p kho','GÃµ mÃ£ hÃ ng hoáº·c tÃªn hÃ ng Ä‘á»ƒ app gá»£i Ã½ nhanh máº·t hÃ ng cáº§n nháº­p.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label class="full">HÃ ng hÃ³a<input id="hangNhap" list="hangNhapList" placeholder="GÃµ mÃ£ hoáº·c tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><datalist id="hangNhapList">'+itemOptions()+'</datalist></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">Thuá»™c tÃ­nh linh Ä‘á»™ng<input id="nhapThuocTinhMoi" placeholder="MÃ u: xanh; Size: L; Serial: báº¯t buá»™c"></label><p class="hint full">Khi lÆ°u phiáº¿u nháº­p, hÃ ng hÃ³a má»›i sáº½ tá»± thÃªm vÃ o danh má»¥c hÃ ng hÃ³a.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')};
  window.screenXuat=function(){return shell('xuat','Xuáº¥t kho','GÃµ mÃ£ hÃ ng hoáº·c tÃªn hÃ ng, sau Ä‘Ã³ kho xuáº¥t chá»‰ hiá»‡n cÃ¡c kho cÃ²n tá»“n cá»§a hÃ ng Ä‘Ã³.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full">HÃ ng hÃ³a<input id="hangXuat" list="hangXuatList" placeholder="GÃµ mÃ£ hoáº·c tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><datalist id="hangXuatList">'+itemOptions()+'</datalist></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label>Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃµ hoáº·c chá»n hÃ ng hÃ³a Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>')};
  window.capNhatKhoXuatTheoHang=function(){
    if(!el('hangXuat')||!el('khoXuat'))return;
    var ma=getItemCodeFromSearch('hangXuat');
    if(!ma){el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='GÃµ hoáº·c chá»n Ä‘Ãºng hÃ ng hÃ³a Ä‘á»ƒ xem kho cÃ²n tá»“n.';return}
    var ds=khoCoTonTheoHang(ma);
    if(ds.length){fill(el('khoXuat'),ds);if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='Chá»‰ hiá»ƒn thá»‹ kho cÃ²n tá»“n cá»§a hÃ ng Ä‘Ã£ chá»n.'}
    else{el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HÃ ng nÃ y hiá»‡n chÆ°a cÃ³ tá»“n á»Ÿ kho nÃ o.'}
  };
  window.saveNhap=function(){
    var maHang=getItemCodeFromSearch('hangNhap');
    if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){
      var ma=el('nhapMaHangMoi').value.trim(),ten=el('nhapTenHangMoi').value.trim();
      if(!ma||!ten)return alert('Nháº­p tÃªn hÃ ng má»›i');
      if(state.hang.some(function(h){return normalizeHang(h)[0]===ma}))return alert('MÃ£ hÃ ng Ä‘Ã£ tá»“n táº¡i trong danh má»¥c');
      state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,el('nhapThuocTinhMoi').value]);
      maHang=ma;
    }
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    var sl=Number(el('slNhap').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoNhap').value+'|'+maHang;
    state.ton[key]=(state.ton[key]||0)+sl;
    state.bd.push([today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value]);
    alert('ÄÃ£ lÆ°u phiáº¿u nháº­p');veTongQuanSauLuu();
  };
  window.saveXuat=function(){
    var maHang=getItemCodeFromSearch('hangXuat');
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    if(!el('khoXuat').value)return alert('HÃ ng nÃ y chÆ°a cÃ³ kho cÃ²n tá»“n Ä‘á»ƒ xuáº¥t');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoXuat').value+'|'+maHang;
    if((state.ton[key]||0)<sl)return alert('KhÃ´ng Ä‘á»§ tá»“n Ä‘á»ƒ xuáº¥t');
    state.ton[key]-=sl;
    state.bd.push([today,el('soXuat').value,el('khoXuat').value,maHang,el('loaiXuat').value,0,sl]);
    if(el('loaiXuat').value==='Xuáº¥t Ä‘iá»u chuyá»ƒn ná»™i bá»™')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'Chá» nháº­n'});
    alert('ÄÃ£ lÆ°u phiáº¿u xuáº¥t');veTongQuanSauLuu();
  };
  var oldBindForms=window.bindForms;
  window.bindForms=function(){
    oldBindForms.apply(this,arguments);
    if(el('hangNhap')&&el('hangNhap').tagName==='INPUT'&&!el('hangNhap').value){var h=normalizeHang((state.hang||[])[0]||[]);if(h[0])el('hangNhap').value=itemDisplay(h[0])}
    if(el('hangXuat')&&el('hangXuat').tagName==='INPUT'){
      if(!el('hangXuat').value){var first=normalizeHang((state.hang||[])[0]||[]);if(first[0])el('hangXuat').value=itemDisplay(first[0])}
      el('hangXuat').oninput=capNhatKhoXuatTheoHang;
      el('hangXuat').onchange=capNhatKhoXuatTheoHang;
      capNhatKhoXuatTheoHang();
    }
    if(el('batHangMoi')){
      var btn=el('batHangMoi');
      btn.onclick=function(){var box=el('hangMoiBox');var show=box.style.display==='none';box.style.display=show?'block':'none';el('hangNhap').disabled=show;btn.textContent=show?'Chá»n hÃ ng cÃ³ sáºµn':'+ Táº¡o hÃ ng hÃ³a má»›i';if(show&&typeof nextItemCode==='function'&&el('nhapMaHangMoi'))el('nhapMaHangMoi').value=nextItemCode(el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'')};
    }
  };
})();
;

(function(){
  if(window.__mobileItemStockSuggestPatch)return;
  window.__mobileItemStockSuggestPatch=true;
  if(!document.getElementById('mobile-item-stock-suggest-style')){
    var st=document.createElement('style');
    st.id='mobile-item-stock-suggest-style';
    st.textContent='.item-search-field{position:relative}.item-suggest-list{display:none;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:#fff;box-shadow:0 10px 22px rgba(13,45,33,.12);max-height:260px;overflow:auto}.item-suggest-list.show{display:block}.item-suggest-row{width:100%;border:0;border-bottom:1px solid var(--line);background:#fff;text-align:left;padding:10px 12px;display:block;color:var(--ink)}.item-suggest-row:last-child{border-bottom:0}.item-suggest-row:active,.item-suggest-row:hover{background:#e8f6f0}.item-suggest-name{font-weight:800;color:#0b2f24;display:block;line-height:1.25}.item-suggest-meta{display:block;margin-top:4px;color:#0f7d5c;font-weight:700;font-size:13px}.item-suggest-empty{padding:10px 12px;color:var(--muted);font-size:13px}@media(max-width:760px){.item-suggest-list{max-height:220px}.item-suggest-row{padding:11px 12px}.item-suggest-name{font-size:15px}.item-suggest-meta{font-size:13px}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function allItems(){return (state.hang||[]).map(normalizeHang)}
  function unitOf(code){return item(code)[3]||''}
  function itemName(code){return item(code)[1]||code}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number(state.ton[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function matchItem(h,q){q=String(q||'').toLowerCase().trim();if(!q)return true;return String(h[0]||'').toLowerCase().indexOf(q)>=0||String(h[1]||'').toLowerCase().indexOf(q)>=0}
  function setSearchValue(inputId,code){var input=el(inputId);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  window.getItemCodeFromSearch=function(id){
    var input=el(id),v=(input&&input.value||'').trim();
    if(input&&input.dataset.code&&v===itemName(input.dataset.code))return input.dataset.code;
    if(!v)return '';
    var found=allItems().find(function(h){return v===h[0]||v===h[0]+' - '+h[1]||v===h[1]||v.toLowerCase()===String(h[1]||'').toLowerCase()});
    if(found)return found[0];
    var m=v.match(/^([^\s-]+)/);
    if(m&&allItems().some(function(h){return h[0]===m[1]}))return m[1];
    return '';
  };
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchItem(h,q)}).slice(0,8);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng hÃ³a</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalStock(h[0]);var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÆ°a cÃ³ tá»“n';return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">Tá»“n '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function renderXuatSuggest(){
    var input=el('hangXuat'),box=el('hangXuatSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var html=[];
    allItems().filter(function(h){return matchItem(h,q)}).forEach(function(h){
      stockWarehouses(h[0]).forEach(function(w){html.push('<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">Tá»“n '+fmt(w.sl)+' '+esc(h[3]||'')+' - '+esc(w.ten)+'</span></button>')});
    });
    if(!html.length)html.push('<div class="item-suggest-empty">KhÃ´ng cÃ³ hÃ ng phÃ¹ há»£p hoáº·c hÃ ng chÆ°a cÃ²n tá»“n</div>');
    box.innerHTML=html.slice(0,12).join('');box.classList.add('show');
  }
  function hideSuggests(){['hangNhapSuggest','hangXuatSuggest'].forEach(function(id){if(el(id))el(id).classList.remove('show')})}
  window.screenNhap=function(){return shell('nhap','Nháº­p kho','GÃµ tÃªn hÃ ng Ä‘á»ƒ xem nhanh tá»“n vÃ  kho Ä‘ang cÃ³ hÃ ng.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangNhap" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">Thuá»™c tÃ­nh linh Ä‘á»™ng<input id="nhapThuocTinhMoi" placeholder="MÃ u: xanh; Size: L; Serial: báº¯t buá»™c"></label><p class="hint full">Khi lÆ°u phiáº¿u nháº­p, hÃ ng hÃ³a má»›i sáº½ tá»± thÃªm vÃ o danh má»¥c hÃ ng hÃ³a.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')};
  window.screenXuat=function(){return shell('xuat','Xuáº¥t kho','GÃµ tÃªn hÃ ng, app sáº½ hiá»‡n tÃªn hÃ ng - sá»‘ lÆ°á»£ng tá»“n - kho Ä‘ang cÃ³ hÃ ng.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label>Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>')};
  window.capNhatKhoXuatTheoHang=function(){
    if(!el('hangXuat')||!el('khoXuat'))return;
    var ma=getItemCodeFromSearch('hangXuat');
    if(!ma){el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='GÃµ hoáº·c chá»n hÃ ng hÃ³a trong gá»£i Ã½.';return}
    var ds=khoCoTonTheoHang(ma);
    if(ds.length){fill(el('khoXuat'),ds);if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='Kho xuáº¥t chá»‰ hiá»‡n kho cÃ²n tá»“n cá»§a hÃ ng Ä‘Ã£ chá»n.'}
    else{el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HÃ ng nÃ y hiá»‡n chÆ°a cÃ³ tá»“n á»Ÿ kho nÃ o.'}
  };
  var prevBind=window.bindForms;
  window.bindForms=function(){
    prevBind.apply(this,arguments);
    if(el('hangNhap')){el('hangNhap').removeAttribute('list');if(!el('hangNhap').value){var h=allItems()[0];if(h)setSearchValue('hangNhap',h[0])}el('hangNhap').onfocus=renderNhapSuggest;el('hangNhap').oninput=renderNhapSuggest}
    if(el('hangXuat')){el('hangXuat').removeAttribute('list');if(!el('hangXuat').value){var first=allItems()[0];if(first)setSearchValue('hangXuat',first[0])}el('hangXuat').onfocus=renderXuatSuggest;el('hangXuat').oninput=function(){renderXuatSuggest();capNhatKhoXuatTheoHang()};el('hangXuat').onchange=capNhatKhoXuatTheoHang;capNhatKhoXuatTheoHang()}
  };
  document.addEventListener('click',function(e){
    var row=e.target&&e.target.closest&&e.target.closest('.item-suggest-row');
    if(row){
      var code=row.getAttribute('data-code'),kind=row.getAttribute('data-kind'),kho=row.getAttribute('data-kho');
      if(kind==='nhap')setSearchValue('hangNhap',code);
      if(kind==='xuat'){setSearchValue('hangXuat',code);capNhatKhoXuatTheoHang();if(kho&&el('khoXuat'))el('khoXuat').value=kho}
      hideSuggests();return;
    }
    if(!e.target.closest('.item-search-field'))hideSuggests();
  });
})();
;

(function(){
  if(window.__tonSearchTotalPatch)return;
  window.__tonSearchTotalPatch=true;
  if(!document.getElementById('ton-search-total-style-20260718-light-core-16')){
    var st=document.createElement('style');
    st.id='ton-search-total-style-20260718-light-core-16';
    st.textContent='.ton-total-summary{display:none;grid-column:1/-1;margin-top:2px;padding:10px 12px;border-radius:8px;background:#e8f6f0;border:1px solid #bee0d0;color:#0f4f3b}.ton-total-summary.show{display:block}.ton-total-title{font-weight:900;font-size:15px;margin-bottom:5px}.ton-total-meta{font-size:13px;line-height:1.4;color:#28634f}.ton-total-meta b{color:#0b2f24}@media(max-width:900px){.ton-total-summary{padding:10px;margin-top:4px}.ton-total-title{font-size:15px}.ton-total-meta{font-size:12.5px}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function rowsForItem(code){return stockRows().filter(function(r){return r[1]===code&&Number(r[3]||0)>0})}
  function matchedItems(q){q=String(q||'').trim().toLowerCase();if(!q)return [];return (state.hang||[]).map(normalizeHang).filter(function(h){return String(h[0]||'').toLowerCase().indexOf(q)>=0||String(h[1]||'').toLowerCase().indexOf(q)>=0})}
  function bestMatchedItems(q){
    var text=String(q||'').trim().toLowerCase();
    if(!text)return [];
    var exact=matchedItems(q).filter(function(h){return String(h[0]||'').toLowerCase()===text||String(h[1]||'').toLowerCase()===text});
    return exact.length?exact:matchedItems(q);
  }
  function updateTonTotalSummary(){
    var box=el('tonTotalSummary'),input=el('timTon');if(!box||!input)return;
    var q=input.value.trim();
    if(!q){box.classList.remove('show');box.innerHTML='';return}
    var items=bestMatchedItems(q);
    if(!items.length){box.classList.remove('show');box.innerHTML='';return}
    if(items.length===1){
      var h=items[0],rows=rowsForItem(h[0]),total=rows.reduce(function(a,r){return a+Number(r[3]||0)},0);
      var detail=rows.map(function(r){return esc(nameKho(r[0]))+': <b>'+fmt(r[3])+' '+esc(h[3]||'')+'</b>'}).join(' &nbsp; | &nbsp; ')||'ChÆ°a cÃ³ tá»“n á»Ÿ kho nÃ o';
      box.innerHTML='<div class="ton-total-title">Tá»•ng tá»“n '+esc(h[1])+': '+fmt(total)+' '+esc(h[3]||'')+'</div><div class="ton-total-meta">'+detail+'</div>';
      box.classList.add('show');
      return;
    }
    var codes={};items.forEach(function(h){codes[h[0]]=h});
    var totalAll=0,warehouses={};
    stockRows().forEach(function(r){if(codes[r[1]]){totalAll+=Number(r[3]||0);warehouses[r[0]]=true}});
    box.innerHTML='<div class="ton-total-title">Tá»•ng tá»“n cÃ¡c hÃ ng phÃ¹ há»£p: '+fmt(totalAll)+'</div><div class="ton-total-meta">CÃ³ '+items.length+' máº·t hÃ ng phÃ¹ há»£p trong '+Object.keys(warehouses).length+' kho. GÃµ rÃµ hÆ¡n tÃªn hÃ ng Ä‘á»ƒ xem chi tiáº¿t tá»«ng kho.</div>';
    box.classList.add('show');
  }
  var oldScreenTon=window.screenTon;
  window.screenTon=function(){
    var html=oldScreenTon.apply(this,arguments);
    if(html.indexOf('tonTotalSummary')>=0)return html;
    return html.replace('</label></div></div><div class="panel"><div class="head"><h2>Báº£ng tá»“n kho</h2>', '</label><div id="tonTotalSummary" class="ton-total-summary"></div></div></div><div class="panel"><div class="head"><h2>Báº£ng tá»“n kho</h2>');
  };
  var oldBindSearchTon=window.bindSearchTon;
  window.bindSearchTon=function(){
    oldBindSearchTon.apply(this,arguments);
    var input=el('timTon'),clear=el('xoaTimTon');
    if(!input)return;
    var prevInput=input.oninput;
    input.oninput=function(e){if(prevInput)prevInput.call(this,e);updateTonTotalSummary()};
    if(clear){var prevClear=clear.onclick;clear.onclick=function(e){if(prevClear)prevClear.call(this,e);updateTonTotalSummary()}}
    updateTonTotalSummary();
  };
})();
;

(function(){
  if(window.__staffEditXnkPatch)return;
  window.__staffEditXnkPatch=true;
  function currentUsername(){return (window.currentUser&&window.currentUser.username)||sessionStorage.getItem('qlkho-user')||(window.auth&&auth.user)||'admin'}
  function currentDisplayName(){var u=currentUsername();var found=(state.users||[]).find(function(x){return x.username===u});return (found&&found.name)||u}
  function canEditXnkSlip(){return isLoggedIn===true||sessionStorage.getItem('qlkho-login')==='1'}
  function optPairs(arr,selected){return arr.map(function(x){var v=Array.isArray(x)?x[0]:x;var t=Array.isArray(x)?x[1]:x;return '<option value="'+String(v).replace(/"/g,'&quot;')+'" '+(v===selected?'selected':'')+'>'+t+'</option>'}).join('')}
  function optText(arr,selected){return arr.map(function(x){return '<option value="'+String(x).replace(/"/g,'&quot;')+'" '+(x===selected?'selected':'')+'>'+x+'</option>'}).join('')}
  function slipTypeOptions(x){var list=(Number(x[5]||0)>0?state.loaiNhapList:state.loaiXuatList)||[];if(list.indexOf(x[4])<0)list=[x[4]].concat(list);return optText(list,x[4])}
  function applySlipToStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  function markOwner(row){if(row&&!row[8]){row[8]=currentUsername();row[9]=currentDisplayName()}return row}
  function slipRows(){return state.bd.map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){var x=r.x;var action=canEditXnkSlip()?td('Thao tÃ¡c','<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>'):'';return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+action+'</tr>'}).join('')}
  window.showReport=(function(oldShowReport){return function(mode,btn){
    if(mode!=='xnk')return oldShowReport(mode,btn);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiáº¿t XNK';
    var actionHead=canEditXnkSlip()?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRows()+'</tbody></table>';
  }})(window.showReport);
  window.editSlip=function(i){
    if(!canEditXnkSlip())return alert('TÃ i khoáº£n nÃ y chÆ°a Ä‘Æ°á»£c quyá»n sá»­a phiáº¿u');
    var x=state.bd[i];if(!x)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    el('rpTitle').textContent='Sá»­a phiáº¿u '+(x[1]||'');
    var hangOpts=state.hang.map(function(raw){var h=normalizeHang(raw);return [h[0],h[0]+' - '+h[1]]});
    el('rp').innerHTML='<div class="body form"><input id="editSlipIndex" type="hidden" value="'+i+'"><label>NgÃ y<input id="editSlipDate" type="date" value="'+(x[0]||today)+'"></label><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="editSlipNo" value="'+(x[1]||'')+'" readonly></label><label>Kho<select id="editSlipKho">'+optPairs(state.kho,x[2])+'</select></label><label>HÃ ng hÃ³a<select id="editSlipHang">'+optPairs(hangOpts,x[3])+'</select></label><label>Loáº¡i phiáº¿u<select id="editSlipLoai">'+slipTypeOptions(x)+'</select></label><label>NCC/Ghi chÃº<input id="editSlipNcc" value="'+(x[7]||'')+'"></label><label>Sá»‘ lÆ°á»£ng nháº­p<input id="editSlipNhap" type="number" min="0" value="'+Number(x[5]||0)+'"></label><label>Sá»‘ lÆ°á»£ng xuáº¥t<input id="editSlipXuat" type="number" min="0" value="'+Number(x[6]||0)+'"></label><p class="hint full">NhÃ¢n viÃªn Ä‘Æ°á»£c sá»­a phiáº¿u XNK. Chá»‰ nháº­p má»™t trong hai Ã´ Nháº­p hoáº·c Xuáº¥t; tá»“n kho sáº½ tá»± tÃ­nh láº¡i.</p><button class="btn primary" onclick="saveEditSlip()">LÆ°u phiáº¿u Ä‘Ã£ sá»­a</button><button class="btn" onclick="showReport(\'xnk\')">Há»§y</button></div>';
  };
  window.saveEditSlip=function(){
    if(!canEditXnkSlip())return alert('TÃ i khoáº£n nÃ y chÆ°a Ä‘Æ°á»£c quyá»n sá»­a phiáº¿u');
    var i=Number(el('editSlipIndex').value);var old=state.bd[i];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);
    if(nhap<0||xuat<0)return alert('Sá»‘ lÆ°á»£ng khÃ´ng há»£p lá»‡');
    if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('Chá»‰ nháº­p sá»‘ lÆ°á»£ng á»Ÿ má»™t Ã´: Nháº­p hoáº·c Xuáº¥t');
    applySlipToStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim(),old[8]||currentUsername(),old[9]||currentDisplayName(),currentUsername(),new Date().toISOString()];
    var key=row[2]+'|'+row[3];var newStock=(state.ton[key]||0)+nhap-xuat;
    if(newStock<0){applySlipToStock(old,1);return alert('KhÃ´ng Ä‘á»§ tá»“n kho sau khi sá»­a phiáº¿u xuáº¥t')}
    state.bd[i]=row;applySlipToStock(row,1);save();alert('ÄÃ£ sá»­a phiáº¿u vÃ  cáº­p nháº­t tá»“n kho');current='baocao';render();setTimeout(function(){showReport('xnk')},0);
  };
  var oldSaveNhap=window.saveNhap;
  window.saveNhap=function(){var before=state.bd.length;oldSaveNhap.apply(this,arguments);if(state.bd.length>before){markOwner(state.bd[state.bd.length-1]);save()}};
  var oldSaveXuat=window.saveXuat;
  window.saveXuat=function(){var before=state.bd.length;oldSaveXuat.apply(this,arguments);if(state.bd.length>before){markOwner(state.bd[state.bd.length-1]);save()}};
})();
;

(function(){
  if(window.__highlightTonSearchPatch)return;
  window.__highlightTonSearchPatch=true;
  if(!document.getElementById('highlight-ton-search-style-20260718-light-core-16')){
    var st=document.createElement('style');
    st.id='highlight-ton-search-style-20260718-light-core-16';
    st.textContent='#ton .search-panel{border-color:#8bcab4!important;background:linear-gradient(135deg,#e2f7ee,#f7fffb)!important}#ton .search-panel .head{background:linear-gradient(90deg,#d8f2e7,#f7fffb)!important}#ton .ton-search-field{position:relative}#ton #timTon{background:#f4fffa!important;border:2px solid #0f8d68!important;box-shadow:0 0 0 3px rgba(15,141,104,.10)!important;font-weight:800;color:#0b2f24!important}#ton #timTon:focus{background:#fff!important;border-color:#087b59!important;box-shadow:0 0 0 4px rgba(15,141,104,.18)!important}.ton-suggest-list{display:none;grid-column:1/-1;margin-top:-4px;border:1px solid #b7dece;border-radius:8px;background:#fff;box-shadow:0 10px 22px rgba(13,45,33,.12);max-height:250px;overflow:auto}.ton-suggest-list.show{display:block}.ton-suggest-row{width:100%;border:0;border-bottom:1px solid #d6e8df;background:#fff;text-align:left;padding:9px 12px;cursor:pointer;color:#12362b}.ton-suggest-row:hover,.ton-suggest-row:active{background:#e5f6ee}.ton-suggest-title{font-weight:900;display:block}.ton-suggest-meta{display:block;margin-top:3px;color:#14785a;font-size:12.5px;font-weight:700}.ton-suggest-empty{padding:10px 12px;color:#66776d;font-size:13px}@media(max-width:900px){#ton #timTon{font-size:16px!important;min-height:44px!important}.ton-suggest-list{max-height:220px}.ton-suggest-row{padding:11px 12px}.ton-suggest-title{font-size:15px}.ton-suggest-meta{font-size:12.5px}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function totalByCode(code){return stockRows().filter(function(r){return r[1]===code}).reduce(function(a,r){return a+Number(r[3]||0)},0)}
  function warehousesByCode(code){return stockRows().filter(function(r){return r[1]===code&&Number(r[3]||0)>0}).map(function(r){return nameKho(r[0])+': '+fmt(r[3])+' '+(r[2][3]||'')}).join(' | ')}
  function suggestionItems(q){
    q=String(q||'').trim().toLowerCase();
    var items=(state.hang||[]).map(normalizeHang).filter(function(h){return !q||String(h[0]||'').toLowerCase().indexOf(q)>=0||String(h[1]||'').toLowerCase().indexOf(q)>=0||String(h[2]||'').toLowerCase().indexOf(q)>=0});
    return items.slice(0,10);
  }
  function renderTonSuggest(){
    var input=el('timTon'),box=el('tonSuggestList');if(!input||!box)return;
    var rows=suggestionItems(input.value);
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃ´ng tÃ¬m tháº¥y gá»£i Ã½ phÃ¹ há»£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalByCode(h[0]);var wh=warehousesByCode(h[0])||'ChÆ°a cÃ³ tá»“n';return '<button class="ton-suggest-row" type="button" data-value="'+esc(h[1])+'"><span class="ton-suggest-title">'+esc(h[1])+'</span><span class="ton-suggest-meta">Tá»•ng '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function hideTonSuggest(){if(el('tonSuggestList'))el('tonSuggestList').classList.remove('show')}
  var oldScreenTon=window.screenTon;
  window.screenTon=function(){
    var html=oldScreenTon.apply(this,arguments);
    html=html.replace('<div class="panel"><div class="head"><h2>TÃ¬m kiáº¿m tá»“n kho</h2>', '<div class="panel search-panel"><div class="head"><h2>TÃ¬m kiáº¿m tá»“n kho</h2>');
    html=html.replace('<label class="full">Search táº¥t cáº£<input id="timTon" list="goiYTon" placeholder="Nháº­p mÃ£ hÃ ng, tÃªn hÃ ng, kho, nhÃ³m hÃ ng..."><datalist id="goiYTon">', '<label class="full ton-search-field">Search táº¥t cáº£<input id="timTon" list="goiYTon" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng, mÃ£ hÃ ng hoáº·c kho..."><datalist id="goiYTon">');
    html=html.replace('</datalist></label>', '</datalist></label><div id="tonSuggestList" class="ton-suggest-list"></div>');
    return html;
  };
  var oldBindSearchTon=window.bindSearchTon;
  window.bindSearchTon=function(){
    oldBindSearchTon.apply(this,arguments);
    var input=el('timTon'),clear=el('xoaTimTon');if(!input)return;
    var prevInput=input.oninput;
    input.onfocus=function(){renderTonSuggest()};
    input.oninput=function(e){if(prevInput)prevInput.call(this,e);renderTonSuggest()};
    if(clear){var prevClear=clear.onclick;clear.onclick=function(e){if(prevClear)prevClear.call(this,e);hideTonSuggest()}}
  };
  document.addEventListener('click',function(e){
    var row=e.target&&e.target.closest&&e.target.closest('.ton-suggest-row');
    if(row){var input=el('timTon');if(input){input.value=row.getAttribute('data-value')||'';input.dispatchEvent(new Event('input',{bubbles:true}))}hideTonSuggest();return}
    if(!e.target.closest('#ton .ton-search-field')&&!e.target.closest('#tonSuggestList'))hideTonSuggest();
  });
})();
;

(function(){
  if(window.__tonSearchStrongPatch)return;window.__tonSearchStrongPatch=true;
  function byId(id){return document.getElementById(id)}
  function clean(v){return String(v||'').replace(/[&<>\"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]})}
  function itemRows(){try{return stockRows()}catch(e){return []}}
  function itemList(){try{return (state.hang||[]).map(normalizeHang)}catch(e){return []}}
  function itemTotal(code){return itemRows().filter(function(r){return r[1]===code}).reduce(function(s,r){return s+Number(r[3]||0)},0)}
  function itemPlaces(code){return itemRows().filter(function(r){return r[1]===code&&Number(r[3]||0)>0}).map(function(r){return nameKho(r[0])+': '+fmt(r[3])+' '+(r[2][3]||'')}).join(' | ')}
  function itemSuggestions(q){
    q=String(q||'').trim().toLowerCase();
    var list=itemList().filter(function(h){var hay=[h[0],h[1],h[2],h[3]].join(' ').toLowerCase();return !q||hay.indexOf(q)>=0});
    return list.slice(0,10);
  }
  function hideSuggest(){var box=byId('tonSuggestList');if(box)box.classList.remove('show')}
  function showSuggest(){
    var input=byId('timTon'),box=byId('tonSuggestList');if(!input||!box)return;
    var rows=itemSuggestions(input.value);
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng hÃ³a phÃ¹ há»£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){
      var total=itemTotal(h[0]);var places=itemPlaces(h[0])||'ChÆ°a cÃ³ tá»“n trong kho';
      return '<button class="ton-suggest-row" type="button" data-value="'+clean(h[1])+'"><span class="ton-suggest-title">'+clean(h[1])+'</span><span class="ton-suggest-meta">Tá»•ng: '+fmt(total)+' '+clean(h[3])+' - '+clean(places)+'</span></button>';
    }).join('');
    box.classList.add('show');
  }
  function enhanceTonSearch(){
    var screen=byId('ton'),input=byId('timTon');if(!screen||!input)return;
    var panel=input.closest('.panel');if(panel)panel.classList.add('ton-search-panel-strong');
    var label=input.closest('label');if(label)label.classList.add('ton-search-field');
    input.placeholder='GÃµ tÃªn hÃ ng, mÃ£ hÃ ng hoáº·c kho...';
    input.setAttribute('autocomplete','off');input.removeAttribute('list');
    if(label&&!byId('tonSuggestList'))label.insertAdjacentHTML('afterend','<div id="tonSuggestList" class="ton-suggest-list"></div>');
    if(!input.dataset.tonStrongReady){
      input.dataset.tonStrongReady='1';
      input.addEventListener('focus',showSuggest);
      input.addEventListener('input',showSuggest);
    }
    var clear=byId('xoaTimTon');
    if(clear&&!clear.dataset.tonStrongReady){clear.dataset.tonStrongReady='1';clear.addEventListener('click',function(){setTimeout(function(){hideSuggest()},30)})}
  }
  function addStyle(){
    if(byId('ton-search-strong-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='ton-search-strong-style-20260718-light-core-16';
    st.textContent='#ton .ton-search-panel-strong{border:1px solid #73bea5!important;background:linear-gradient(135deg,#dff6eb,#ffffff)!important;box-shadow:0 8px 18px rgba(8,92,67,.10)!important}#ton .ton-search-panel-strong .head{background:linear-gradient(90deg,#c8eedc,#f7fffb)!important}#ton .ton-search-panel-strong h2{color:#062f23!important}#ton .ton-search-field{position:relative!important;font-weight:900!important;color:#065a43!important}#ton #timTon{background:linear-gradient(90deg,#dff7ec,#ffffff)!important;border:2px solid #07845f!important;box-shadow:0 0 0 4px rgba(7,132,95,.14)!important;color:#082f24!important;font-weight:900!important;min-height:46px!important;font-size:15px!important}#ton #timTon:focus{background:#fff!important;border-color:#006d4d!important;box-shadow:0 0 0 5px rgba(7,132,95,.22)!important}.ton-suggest-list{display:none;grid-column:1/-1;margin-top:-2px;border:1px solid #8bcab4;border-radius:8px;background:#fff;box-shadow:0 12px 24px rgba(13,45,33,.16);max-height:260px;overflow:auto}.ton-suggest-list.show{display:block}.ton-suggest-row{width:100%;border:0;border-bottom:1px solid #d7eadf;background:#fff;text-align:left;padding:10px 12px;cursor:pointer;color:#12362b}.ton-suggest-row:hover,.ton-suggest-row:active{background:#e0f4eb}.ton-suggest-title{display:block;font-weight:900;color:#073d2f}.ton-suggest-meta{display:block;margin-top:4px;color:#07845f;font-size:12.5px;font-weight:800}.ton-suggest-empty{padding:10px 12px;color:#66776d;font-weight:700}@media(max-width:900px){#ton #timTon{font-size:16px!important;min-height:48px!important}.ton-suggest-row{padding:12px}.ton-suggest-title{font-size:15px}.ton-suggest-meta{font-size:12.5px;line-height:1.35}}';
    document.head.appendChild(st);
  }
  document.addEventListener('click',function(e){
    var row=e.target.closest('.ton-suggest-row');
    if(row){var input=byId('timTon');if(input){input.value=row.getAttribute('data-value')||'';if(typeof input.oninput==='function')input.oninput();input.dispatchEvent(new Event('input',{bubbles:true}))}hideSuggest();return}
    if(!e.target.closest('#ton .ton-search-field')&&!e.target.closest('#tonSuggestList'))hideSuggest();
  });
  addStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__tonSearchStrongWrapped){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhanceTonSearch,0);return out};
    window.render.__tonSearchStrongWrapped=true;
  }
  setTimeout(enhanceTonSearch,100);
})();
;

(function(){
  if(window.__tonSearchPopPatch)return;window.__tonSearchPopPatch=true;
  function el(id){return document.getElementById(id)}
  function addPopStyle(){
    if(el('ton-search-pop-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='ton-search-pop-style-20260718-light-core-16';
    st.textContent='#ton .ton-search-panel-strong{background:linear-gradient(135deg,#0b7f5d,#12a879)!important;border:0!important;box-shadow:0 12px 28px rgba(5,80,58,.24)!important;overflow:visible!important}#ton .ton-search-panel-strong .head{background:rgba(255,255,255,.13)!important;border-bottom:1px solid rgba(255,255,255,.22)!important}#ton .ton-search-panel-strong h2{color:#fff!important;text-shadow:0 1px 0 rgba(0,0,0,.18)!important}#ton .ton-search-panel-strong .btn{background:#fff!important;color:#086b50!important;border-color:rgba(255,255,255,.75)!important;font-weight:900!important}#ton .ton-search-panel-strong .body{background:transparent!important}#ton .ton-search-field{color:#fff!important;font-size:15px!important;font-weight:900!important;letter-spacing:0!important}#ton #timTon{margin-top:8px!important;background:linear-gradient(90deg,#fff8c9,#eafff3)!important;border:3px solid #ffcf4a!important;box-shadow:0 0 0 4px rgba(255,207,74,.28),0 8px 18px rgba(0,0,0,.12)!important;color:#052f24!important;font-size:16px!important;font-weight:900!important;min-height:52px!important;border-radius:10px!important}#ton #timTon::placeholder{color:#527064!important;font-weight:800!important}#ton #timTon:focus{background:#fffdf0!important;border-color:#ffd84d!important;box-shadow:0 0 0 5px rgba(255,216,77,.45),0 10px 24px rgba(0,0,0,.16)!important}.ton-suggest-list{border:2px solid #ffcf4a!important;box-shadow:0 14px 30px rgba(5,80,58,.24)!important}@media(max-width:900px){#ton .ton-search-panel-strong{margin:8px 0 10px!important;border-radius:10px!important}#ton #timTon{min-height:54px!important;font-size:16px!important}}';
    document.head.appendChild(st);
  }
  function enhance(){var input=el('timTon');if(!input)return;var panel=input.closest('.panel');if(panel)panel.classList.add('ton-search-panel-strong');var label=input.closest('label');if(label)label.classList.add('ton-search-field');input.placeholder='GÃµ tÃªn hÃ ng Ä‘á»ƒ xem tá»•ng tá»“n vÃ  kho Ä‘ang cÃ³ hÃ ng...'}
  addPopStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__tonSearchPopWrapped){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhance,0);return out};window.render.__tonSearchPopWrapped=true}
  setTimeout(enhance,100);
})();
;

(function(){
  if(window.__tonFontFixPatch)return;window.__tonFontFixPatch=true;
  function addStyle(){
    if(document.getElementById('ton-font-fix-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='ton-font-fix-style-20260718-light-core-16';
    st.textContent='#ton .ton-search-panel-strong,#ton .ton-search-panel-strong *{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;letter-spacing:0!important;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}#ton .ton-search-panel-strong h2{font-weight:800!important;line-height:1.25!important}#ton .ton-search-field{font-weight:700!important;line-height:1.35!important}#ton #timTon{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;font-weight:700!important;line-height:1.35!important;text-shadow:none!important}#ton #timTon::placeholder{font-weight:600!important}.ton-suggest-title{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;font-weight:700!important;line-height:1.35!important}.ton-suggest-meta{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;font-weight:700!important;line-height:1.4!important}.ton-total-summary,.ton-total-summary *{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;letter-spacing:0!important}.ton-total-summary h3{font-weight:800!important;line-height:1.3!important}.ton-total-summary p{font-weight:500!important;line-height:1.45!important}@media(max-width:900px){#ton #timTon{font-size:16px!important}.ton-suggest-title{font-size:14.5px!important}.ton-suggest-meta{font-size:12.5px!important}}';
    document.head.appendChild(st);
  }
  addStyle();
})();
;

(function(){
  if(window.__hideTonTotalPatch)return;window.__hideTonTotalPatch=true;
  function addStyle(){
    if(document.getElementById('hide-ton-total-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='hide-ton-total-style-20260718-light-core-16';
    st.textContent='#tonTotalSummary{display:none!important}.ton-total-summary{display:none!important}';
    document.head.appendChild(st);
  }
  function hideBox(){var box=document.getElementById('tonTotalSummary');if(box)box.style.display='none'}
  addStyle();hideBox();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__hideTonTotalWrapped){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(hideBox,0);return out};
    window.render.__hideTonTotalWrapped=true;
  }
})();
;

(function(){
  if(window.__oneFontPatch)return;window.__oneFontPatch=true;
  if(document.getElementById('one-font-style-20260718-light-core-16'))return;
  var st=document.createElement('style');st.id='one-font-style-20260718-light-core-16';
  st.textContent='html,body,.app,.app *,button,input,select,textarea,table,th,td{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important;letter-spacing:0!important;text-rendering:auto!important;-webkit-font-smoothing:antialiased!important}body{font-weight:400!important}h1,h2,.brand,.mobile-title strong{font-weight:700!important}label,th,.tag,.nav,.btn{font-weight:600!important}input,select{font-weight:500!important}#ton .ton-search-panel-strong,#ton .ton-search-panel-strong *{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important}#ton .ton-search-panel-strong h2{font-weight:700!important}#ton .ton-search-field{font-weight:600!important}#ton #timTon{font-weight:600!important;font-size:15px!important;line-height:1.35!important;text-shadow:none!important}#ton #timTon::placeholder{font-weight:500!important;color:#5b7067!important}.ton-suggest-title{font-weight:600!important}.ton-suggest-meta{font-weight:600!important}@media(max-width:900px){#ton #timTon{font-size:16px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__scanItSerialPatch)return;window.__scanItSerialPatch=true;
  var scanControls=null,scanStream=null,scanTimer=null;
  function byId(id){return document.getElementById(id)}
  function addStyle(){
    if(byId('scan-it-serial-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='scan-it-serial-style-20260718-light-core-16';
    st.textContent='.serial-scan-wrap{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center}.serial-scan-wrap input{min-width:0}.serial-scan-btn{white-space:nowrap;background:#0f8d68!important;color:#fff!important;border-color:#0f8d68!important;font-weight:700!important}.serial-scan-hint{grid-column:1/-1;color:#5f746b;font-size:12px;font-weight:500;line-height:1.35}.scan-modal{position:fixed;inset:0;z-index:80;display:none;align-items:center;justify-content:center;background:rgba(7,24,18,.72);padding:14px}.scan-modal.show{display:flex}.scan-box{width:min(520px,100%);background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 22px 55px rgba(0,0,0,.35)}.scan-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;background:#10251d;color:#fff}.scan-head h2{margin:0;font-size:17px}.scan-body{padding:12px}.scan-video{width:100%;aspect-ratio:4/3;background:#071812;border-radius:10px;object-fit:cover}.scan-status{margin:10px 0 0;color:#385246;font-size:13px;line-height:1.4}.scan-actions{display:flex;gap:8px;margin-top:12px}.scan-actions .btn{flex:1}@media(max-width:900px){.serial-scan-wrap{grid-template-columns:1fr}.serial-scan-btn{width:100%}.scan-modal{align-items:flex-start;padding-top:calc(72px + env(safe-area-inset-top))}.scan-head h2{font-size:16px}}';
    document.head.appendChild(st);
  }
  function ensureModal(){
    if(byId('scanSerialModal'))return;
    document.body.insertAdjacentHTML('beforeend','<div class="scan-modal" id="scanSerialModal"><div class="scan-box"><div class="scan-head"><h2>QuÃ©t sá»‘ seri thiáº¿t bá»‹</h2><button class="btn small" id="closeScanSerial" type="button">ÄÃ³ng</button></div><div class="scan-body"><video class="scan-video" id="scanSerialVideo" autoplay muted playsinline></video><p class="scan-status" id="scanSerialStatus">ÄÆ°a camera vÃ o mÃ£ váº¡ch hoáº·c QR trÃªn thiáº¿t bá»‹. Náº¿u khÃ´ng quÃ©t Ä‘Æ°á»£c, Ä‘Ã³ng láº¡i vÃ  nháº­p tay.</p><div class="scan-actions"><button class="btn" id="manualSerialBtn" type="button">Nháº­p tay</button><button class="btn primary" id="retryScanSerial" type="button">QuÃ©t láº¡i</button></div></div></div></div>');
    byId('closeScanSerial').onclick=stopSerialScan;
    byId('manualSerialBtn').onclick=stopSerialScan;
    byId('retryScanSerial').onclick=function(){startSerialScan()};
  }
  function setStatus(msg){var s=byId('scanSerialStatus');if(s)s.textContent=msg}
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return;
    var serial=byId('maThietBi'),hidden=byId('seriThietBi');
    if(serial){serial.value=value;serial.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    setStatus('ÄÃ£ quÃ©t Ä‘Æ°á»£c: '+value);
    setTimeout(stopSerialScan,450);
  }
  function stopSerialScan(){
    if(scanControls&&scanControls.stop){try{scanControls.stop()}catch(e){}}
    scanControls=null;
    if(scanTimer){clearInterval(scanTimer);scanTimer=null}
    if(scanStream){scanStream.getTracks().forEach(function(t){try{t.stop()}catch(e){}});scanStream=null}
    var video=byId('scanSerialVideo');if(video)video.srcObject=null;
    var modal=byId('scanSerialModal');if(modal)modal.classList.remove('show');
  }
  function loadZxing(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){resolve(window.ZXingBrowser)});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng má»Ÿ Ä‘Æ°á»£c thÆ° viá»‡n quÃ©t mÃ£'))};
      sc.onerror=function(){reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c thÆ° viá»‡n quÃ©t mÃ£'))};
      document.head.appendChild(sc);
    })
  }
  function startWithBarcodeDetector(video){
    if(!('BarcodeDetector' in window))return Promise.reject(new Error('MÃ¡y chÆ°a há»— trá»£ quÃ©t trá»±c tiáº¿p'));
    return navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(stream){
      scanStream=stream;video.srcObject=stream;return video.play().then(function(){
        var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
        scanTimer=setInterval(function(){detector.detect(video).then(function(codes){if(codes&&codes[0])fillSerial(codes[0].rawValue)}).catch(function(){})},450);
        setStatus('Äang quÃ©t báº±ng camera. Báº¡n váº«n cÃ³ thá»ƒ Ä‘Ã³ng láº¡i Ä‘á»ƒ nháº­p tay.');
      })
    })
  }
  function startWithZxing(video){
    return loadZxing().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      setStatus('Äang má»Ÿ camera Ä‘á»ƒ quÃ©t mÃ£...');
      return reader.decodeFromVideoDevice(undefined,video,function(result,err,controls){
        if(controls)scanControls=controls;
        if(result){var text=result.getText?result.getText():String(result.text||result);fillSerial(text)}
      }).then(function(controls){scanControls=controls;setStatus('Äang quÃ©t mÃ£ váº¡ch/QR. Náº¿u khÃ´ng Ä‘Æ°á»£c, báº¥m ÄÃ³ng Ä‘á»ƒ nháº­p tay.')})
    })
  }
  function startSerialScan(){
    addStyle();ensureModal();
    var modal=byId('scanSerialModal'),video=byId('scanSerialVideo');
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){alert('TrÃ¬nh duyá»‡t chÆ°a há»— trá»£ camera. Báº¡n nháº­p tay sá»‘ seri giÃºp mÃ¬nh nhÃ©.');return}
    if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){alert('Muá»‘n dÃ¹ng camera cáº§n má»Ÿ app báº±ng link https. Báº¡n váº«n nháº­p tay sá»‘ seri Ä‘Æ°á»£c.');return}
    stopSerialScan();ensureModal();modal=byId('scanSerialModal');video=byId('scanSerialVideo');modal.classList.add('show');setStatus('Äang xin quyá»n camera...');
    startWithBarcodeDetector(video).catch(function(){return startWithZxing(video)}).catch(function(){setStatus('KhÃ´ng má»Ÿ Ä‘Æ°á»£c quÃ©t mÃ£ trÃªn mÃ¡y nÃ y. Báº¡n báº¥m ÄÃ³ng rá»“i nháº­p tay sá»‘ seri.');});
  }
  function enhanceSerialField(){
    var input=byId('maThietBi');if(!input||byId('scanSerialBtn'))return;
    var label=input.closest('label');if(!label)return;
    var text=document.createElement('span');text.textContent='Sá»‘ seri thiáº¿t bá»‹';
    var wrap=document.createElement('div');wrap.className='serial-scan-wrap';
    input.parentNode.insertBefore(wrap,input);
    wrap.appendChild(input);
    wrap.insertAdjacentHTML('beforeend','<button class="btn serial-scan-btn" id="scanSerialBtn" type="button">QuÃ©t seri</button><div class="serial-scan-hint">QuÃ©t mÃ£ váº¡ch/QR báº±ng camera, hoáº·c nháº­p tay náº¿u tem má»/khÃ´ng quÃ©t Ä‘Æ°á»£c.</div>');
    var btn=byId('scanSerialBtn');if(btn)btn.onclick=startSerialScan;
  }
  addStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__scanItSerialWrapped){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhanceSerialField,0);return out};
    window.render.__scanItSerialWrapped=true;
  }
  setTimeout(enhanceSerialField,100);
})();
;

(function(){
  if(window.__simpleStockTablePatch)return;window.__simpleStockTablePatch=true;
  function addStyle(){
    if(document.getElementById('simple-stock-table-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='simple-stock-table-style-20260718-light-core-16';
    st.textContent='#ton .simple-stock-table th,#ton .simple-stock-table td{font-size:14px!important;padding:10px 12px!important}#ton .simple-stock-table .stock-item-name{font-weight:700;color:#0b2f24}#ton .simple-stock-table .stock-qty{font-size:16px;font-weight:800;color:#087253;text-align:right;white-space:nowrap}#ton .simple-stock-table .stock-warehouse{font-weight:600;color:#18382d}@media(max-width:900px){#ton .simple-stock-table tr{padding:10px 12px!important}#ton .simple-stock-table td{padding:6px 0!important;font-size:14px!important}#ton .simple-stock-table td:before{min-width:72px;text-align:center}#ton .simple-stock-table .stock-qty{font-size:17px!important}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v||'').replace(/[&<>\"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]})}
  function renderSimpleStock(){
    var body=document.getElementById('tonRowsBody');if(!body||!window.stockRows)return;
    var rows=stockRows().map(function(r){
      var hang=r[2]||[];var text=[nameKho(r[0]),r[1],hang[1],hang[2],hang[3],String(r[3])].join(' ').toLowerCase().replace(/"/g,'');
      return '<tr data-search="'+esc(text)+'"><td data-label="Kho"><span class="stock-warehouse">'+esc(nameKho(r[0]))+'</span></td><td data-label="HÃ ng tá»“n"><span class="stock-item-name">'+esc(hang[1])+'</span></td><td data-label="Sá»‘ lÆ°á»£ng" class="num stock-qty">'+fmt(r[3])+' '+esc(hang[3])+'</td></tr>';
    }).join('');
    body.innerHTML=rows||'<tr><td class="empty" colspan="3">ChÆ°a cÃ³ tá»“n kho.</td></tr>';
    var table=body.closest('table');
    if(table){table.classList.add('simple-stock-table');var head=table.querySelector('thead tr');if(head)head.innerHTML='<th>Kho</th><th>HÃ ng tá»“n</th><th class="num">Sá»‘ lÆ°á»£ng</th>'}
    if(typeof bindSearchTon==='function')bindSearchTon();
  }
  function afterRender(){addStyle();if(document.getElementById('tonRowsBody'))setTimeout(renderSimpleStock,0)}
  addStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__simpleStockWrapped){
    window.render=function(){var out=oldRender.apply(this,arguments);afterRender();return out};
    window.render.__simpleStockWrapped=true;
  }
  setTimeout(afterRender,100);
})();
;

(function(){
  if(window.__raisedNavButtonsPatch)return;window.__raisedNavButtonsPatch=true;
  if(document.getElementById('raised-nav-buttons-style-20260718-light-core-16'))return;
  var st=document.createElement('style');st.id='raised-nav-buttons-style-20260718-light-core-16';
  st.textContent='aside nav{gap:8px!important}.nav{background:rgba(255,255,255,.055)!important;border:1px solid rgba(255,255,255,.10)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 8px 18px rgba(0,0,0,.10)!important;color:#ecfff7!important;font-weight:600!important;transition:transform .12s ease,box-shadow .12s ease,background .12s ease,border-color .12s ease!important}.nav:hover{background:rgba(255,255,255,.12)!important;border-color:rgba(255,255,255,.18)!important;transform:translateY(-1px)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 10px 22px rgba(0,0,0,.16)!important}.nav.active{background:linear-gradient(135deg,#e9fff5,#bcebd7)!important;border-color:#d8ffed!important;color:#082f24!important;font-weight:800!important;box-shadow:0 10px 24px rgba(6,116,82,.30),inset 0 1px 0 rgba(255,255,255,.70)!important}.nav.active:hover{transform:none!important}.mobile-bar{background:linear-gradient(180deg,#0e7f5e,#06714f)!important;border-top:0!important;box-shadow:0 -12px 26px rgba(4,84,60,.24)!important}.mobile-bar button{background:rgba(255,255,255,.10)!important;border:1px solid rgba(255,255,255,.16)!important;color:#f4fffa!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.10),0 6px 14px rgba(0,0,0,.10)!important;font-weight:700!important}.mobile-bar button.active{background:#fff!important;color:#087253!important;border-color:#fff!important;box-shadow:0 8px 18px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.70)!important;font-weight:800!important}.mobile-bar button:active{transform:translateY(1px)!important}@media(max-width:900px){.mobile-bar{gap:5px!important;padding:7px 6px calc(7px + env(safe-area-inset-bottom))!important}.mobile-bar button{border-radius:11px!important;min-height:48px!important}.mobile-bar button.active{transform:translateY(-2px)!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__scanCameraFixPatch)return;window.__scanCameraFixPatch=true;
  var scanControls=null,scanStream=null,scanWatch=null;
  function byId(id){return document.getElementById(id)}
  function setStatus(msg){var s=byId('scanSerialStatus');if(s)s.textContent=msg}
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return;
    var serial=byId('maThietBi'),hidden=byId('seriThietBi');
    if(serial){serial.value=value;serial.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    setStatus('ÄÃ£ láº¥y sá»‘ seri: '+value);
    setTimeout(stopScanV2,500);
  }
  function stopScanV2(){
    if(scanControls&&scanControls.stop){try{scanControls.stop()}catch(e){}}
    scanControls=null;
    if(scanWatch){clearTimeout(scanWatch);scanWatch=null}
    if(scanStream){scanStream.getTracks().forEach(function(t){try{t.stop()}catch(e){}});scanStream=null}
    var video=byId('scanSerialVideo');if(video)video.srcObject=null;
    var modal=byId('scanSerialModal');if(modal)modal.classList.remove('show');
  }
  function loadZxingV2(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ quÃ©t'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ quÃ©t'))};
      sc.onerror=function(){reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ quÃ©t'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('Máº¡ng cháº­m, chÆ°a táº£i Ä‘Æ°á»£c bá»™ quÃ©t'))},9000);
    })
  }
  function ensureScanModalV2(){
    if(!byId('scanSerialModal')){
      document.body.insertAdjacentHTML('beforeend','<div class="scan-modal" id="scanSerialModal"><div class="scan-box"><div class="scan-head"><h2>QuÃ©t sá»‘ seri thiáº¿t bá»‹</h2><button class="btn small" id="closeScanSerial" type="button">ÄÃ³ng</button></div><div class="scan-body"><video class="scan-video" id="scanSerialVideo" autoplay muted playsinline></video><p class="scan-status" id="scanSerialStatus">ÄÆ°a camera vÃ o mÃ£ váº¡ch hoáº·c QR trÃªn thiáº¿t bá»‹. Náº¿u khÃ´ng quÃ©t Ä‘Æ°á»£c, Ä‘Ã³ng láº¡i vÃ  nháº­p tay.</p><div class="scan-actions"><button class="btn" id="manualSerialBtn" type="button">Nháº­p tay</button><button class="btn primary" id="retryScanSerial" type="button">QuÃ©t láº¡i</button></div></div></div></div>');
    }
    var actions=document.querySelector('#scanSerialModal .scan-actions');
    if(actions&&!byId('photoScanSerial'))actions.insertAdjacentHTML('afterbegin','<button class="btn" id="photoScanSerial" type="button">Chá»¥p áº£nh mÃ£</button><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
    if(byId('closeScanSerial'))byId('closeScanSerial').onclick=stopScanV2;
    if(byId('manualSerialBtn'))byId('manualSerialBtn').onclick=stopScanV2;
    if(byId('retryScanSerial'))byId('retryScanSerial').onclick=startScanV2;
    if(byId('photoScanSerial'))byId('photoScanSerial').onclick=function(){var inp=byId('photoScanSerialInput');if(inp)inp.click()};
    if(byId('photoScanSerialInput'))byId('photoScanSerialInput').onchange=decodePhotoV2;
  }
  function decodePhotoV2(e){
    var file=e.target.files&&e.target.files[0];if(!file)return;
    setStatus('Äang Ä‘á»c mÃ£ tá»« áº£nh vá»«a chá»¥p...');
    var url=URL.createObjectURL(file);
    loadZxingV2().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromImageUrl(url).then(function(result){URL.revokeObjectURL(url);fillSerial(result.getText?result.getText():String(result.text||result))})
    }).catch(function(){URL.revokeObjectURL(url);setStatus('ChÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£ tá»« áº£nh. Báº¡n thá»­ chá»¥p gáº§n hÆ¡n, rÃµ nÃ©t hÆ¡n hoáº·c nháº­p tay.')})
  }
  function startScanV2(){
    ensureScanModalV2();stopScanV2();ensureScanModalV2();
    var modal=byId('scanSerialModal'),video=byId('scanSerialVideo');
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){alert('Äiá»‡n thoáº¡i/trÃ¬nh duyá»‡t nÃ y chÆ°a má»Ÿ Ä‘Æ°á»£c camera trong app. Báº¡n nháº­p tay sá»‘ seri giÃºp mÃ¬nh nhÃ©.');return}
    if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){alert('Muá»‘n dÃ¹ng camera cáº§n má»Ÿ app báº±ng link https. Báº¡n váº«n nháº­p tay sá»‘ seri Ä‘Æ°á»£c.');return}
    modal.classList.add('show');
    setStatus('Äang má»Ÿ camera. Náº¿u Ä‘iá»‡n thoáº¡i há»i quyá»n, báº¥m Cho phÃ©p.');
    scanWatch=setTimeout(function(){setStatus('Camera má»Ÿ hÆ¡i lÃ¢u. Náº¿u chÆ°a tháº¥y há»i quyá»n, báº¥m Chá»¥p áº£nh mÃ£ hoáº·c ÄÃ³ng Ä‘á»ƒ nháº­p tay.')},6500);
    loadZxingV2().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromVideoDevice(null,video,function(result,err,controls){
        if(controls)scanControls=controls;
        if(result){fillSerial(result.getText?result.getText():String(result.text||result))}
      }).then(function(controls){scanControls=controls;if(scanWatch){clearTimeout(scanWatch);scanWatch=null}setStatus('Camera Ä‘Ã£ má»Ÿ. ÄÆ°a mÃ£ váº¡ch/QR vÃ o giá»¯a khung Ä‘á»ƒ quÃ©t.')})
    }).catch(function(){
      if(scanWatch){clearTimeout(scanWatch);scanWatch=null}
      setStatus('ChÆ°a má»Ÿ Ä‘Æ°á»£c camera quÃ©t trá»±c tiáº¿p. Báº¡n báº¥m Chá»¥p áº£nh mÃ£ hoáº·c ÄÃ³ng Ä‘á»ƒ nháº­p tay.')
    })
  }
  function bindFixedButton(){var btn=byId('scanSerialBtn');if(btn){btn.onclick=startScanV2;btn.textContent='QuÃ©t seri'}}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__scanCameraFixWrapped){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(bindFixedButton,20);return out};
    window.render.__scanCameraFixWrapped=true;
  }
  document.addEventListener('click',function(e){if(e.target&&e.target.id==='scanSerialBtn'){e.preventDefault();startScanV2()}});
  setTimeout(bindFixedButton,200);
})();
;

(function(){
  if(window.__photoScanFixPatch)return;window.__photoScanFixPatch=true;
  function byId(id){return document.getElementById(id)}
  function setStatus(msg){var s=byId('scanSerialStatus');if(s)s.textContent=msg}
  function fillSerialPhoto(value){
    value=String(value||'').trim();if(!value)return;
    var serial=byId('maThietBi'),hidden=byId('seriThietBi');
    if(serial){serial.value=value;serial.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    setStatus('ÄÃ£ láº¥y sá»‘ seri tá»« áº£nh: '+value);
    setTimeout(function(){var modal=byId('scanSerialModal');if(modal)modal.classList.remove('show')},650);
  }
  function loadZxingPhoto(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))};
      sc.onerror=function(){reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('Máº¡ng cháº­m, chÆ°a táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))},9000);
    })
  }
  function decodeByBarcodeDetector(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('KhÃ´ng há»— trá»£ Ä‘á»c áº£nh trá»±c tiáº¿p'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
      return detector.detect(bitmap).then(function(codes){try{bitmap.close&&bitmap.close()}catch(e){};if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;throw new Error('KhÃ´ng tháº¥y mÃ£ trong áº£nh')})
    })
  }
  function decodeByZxing(file){
    var url=URL.createObjectURL(file);
    return loadZxingPhoto().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromImageUrl(url).then(function(result){URL.revokeObjectURL(url);return result.getText?result.getText():String(result.text||result)})
    }).catch(function(err){URL.revokeObjectURL(url);throw err})
  }
  function photoChangeFixed(e){
    var file=e.target.files&&e.target.files[0];
    e.target.value='';
    if(!file)return;
    setStatus('Äang Ä‘á»c mÃ£ tá»« áº£nh. Báº¡n giá»¯ áº£nh rÃµ nÃ©t vÃ  mÃ£ náº±m gá»n trong khung nhÃ©...');
    decodeByBarcodeDetector(file).then(fillSerialPhoto).catch(function(){
      return decodeByZxing(file).then(fillSerialPhoto)
    }).catch(function(){
      setStatus('áº¢nh nÃ y chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n thá»­ chá»¥p gáº§n hÆ¡n, Ä‘á»§ sÃ¡ng hÆ¡n, hoáº·c nháº­p tay sá»‘ seri.');
      var manual=prompt('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c mÃ£ tá»« áº£nh. Báº¡n nháº­p tay sá»‘ seri táº¡i Ä‘Ã¢y náº¿u muá»‘n:');
      if(manual)fillSerialPhoto(manual);
    })
  }
  function bindPhotoButton(){
    var actions=document.querySelector('#scanSerialModal .scan-actions');
    if(actions&&!byId('photoScanSerial'))actions.insertAdjacentHTML('afterbegin','<button class="btn" id="photoScanSerial" type="button">Chá»¥p áº£nh mÃ£</button><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
    var btn=byId('photoScanSerial'),inp=byId('photoScanSerialInput');
    if(btn&&!btn.__photoScanFixed){btn.__photoScanFixed=true;btn.onclick=function(){var input=byId('photoScanSerialInput');if(input)input.click()}}
    if(inp&&!inp.__photoScanFixed){inp.__photoScanFixed=true;inp.onchange=photoChangeFixed}
  }
  document.addEventListener('click',function(e){setTimeout(bindPhotoButton,50)});
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__photoScanFixWrapped){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(bindPhotoButton,100);return out};window.render.__photoScanFixWrapped=true}
  setTimeout(bindPhotoButton,300);
})();
;

(function(){
  if(window.__directPhotoSerialPatch)return;window.__directPhotoSerialPatch=true;
  function byId(id){return document.getElementById(id)}
  function addStyle(){
    if(byId('direct-photo-serial-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='direct-photo-serial-style-20260718-light-core-16';
    st.textContent='.direct-serial-actions{grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:8px;margin-top:-2px}.direct-photo-label{display:flex!important;align-items:center;justify-content:center;text-align:center;background:#fff7d6!important;color:#785800!important;border:1px solid #f1c24d!important;border-radius:7px;min-height:38px;padding:8px 11px;cursor:pointer;font-weight:700!important}.direct-photo-label:active{transform:translateY(1px)}.direct-photo-input{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important}.direct-serial-note{grid-column:1/-1;color:#5f746b;font-size:12px;line-height:1.35;margin-top:-2px}@media(max-width:900px){.direct-serial-actions{grid-template-columns:1fr}.direct-photo-label{min-height:44px}}';
    document.head.appendChild(st);
  }
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return;
    var main=byId('maThietBi'),hidden=byId('seriThietBi');
    if(main){main.value=value;main.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    alert('ÄÃ£ láº¥y sá»‘ seri: '+value);
  }
  function loadZxing(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))};
      sc.onerror=function(){reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('Máº¡ng cháº­m, chÆ°a táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))},9000);
    })
  }
  function decodeNative(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('KhÃ´ng há»— trá»£ Ä‘á»c áº£nh trá»±c tiáº¿p'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
      return detector.detect(bitmap).then(function(codes){try{bitmap.close&&bitmap.close()}catch(e){};if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;throw new Error('KhÃ´ng tháº¥y mÃ£ trong áº£nh')})
    })
  }
  function decodeZxing(file){
    var url=URL.createObjectURL(file);
    return loadZxing().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromImageUrl(url).then(function(result){URL.revokeObjectURL(url);return result.getText?result.getText():String(result.text||result)})
    }).catch(function(err){URL.revokeObjectURL(url);throw err})
  }
  function onPhotoChange(e){
    var file=e.target.files&&e.target.files[0];e.target.value='';
    if(!file)return;
    var note=byId('directSerialNote');if(note)note.textContent='Äang Ä‘á»c mÃ£ tá»« áº£nh...';
    decodeNative(file).then(fillSerial).catch(function(){return decodeZxing(file).then(fillSerial)}).catch(function(){
      if(note)note.textContent='áº¢nh chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n cÃ³ thá»ƒ chá»¥p gáº§n hÆ¡n hoáº·c nháº­p tay.';
      var manual=prompt('áº¢nh chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n nháº­p tay sá»‘ seri táº¡i Ä‘Ã¢y:');
      if(manual)fillSerial(manual);
    })
  }
  function addDirectButtons(){
    addStyle();
    var input=byId('maThietBi');if(!input||byId('directSerialActions'))return;
    var label=input.closest('label');if(!label)return;
    label.insertAdjacentHTML('afterend','<div class="direct-serial-actions" id="directSerialActions"><button class="btn serial-scan-btn" id="directScanBtn" type="button">QuÃ©t camera</button><label class="direct-photo-label" for="directPhotoSerialInput">Chá»¥p áº£nh mÃ£</label><input class="direct-photo-input" id="directPhotoSerialInput" type="file" accept="image/*" capture="environment"><div class="direct-serial-note" id="directSerialNote">Náº¿u camera khÃ´ng má»Ÿ, báº¡n nháº­p tay sá»‘ seri á»Ÿ Ã´ bÃªn trÃªn.</div></div>');
    var photo=byId('directPhotoSerialInput');if(photo)photo.onchange=onPhotoChange;
    var scan=byId('directScanBtn');if(scan)scan.onclick=function(){var old=byId('scanSerialBtn');if(old&&old!==scan)old.click();else alert('Náº¿u camera khÃ´ng má»Ÿ Ä‘Æ°á»£c, báº¡n dÃ¹ng Chá»¥p áº£nh mÃ£ hoáº·c nháº­p tay sá»‘ seri.')};
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__directPhotoSerialWrapped){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(addDirectButtons,80);return out};window.render.__directPhotoSerialWrapped=true}
  setTimeout(addDirectButtons,300);
})();
;

(function(){
  if(window.__nativePhotoInputPatch)return;window.__nativePhotoInputPatch=true;
  function byId(id){return document.getElementById(id)}
  function addStyle(){
    if(byId('native-photo-input-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='native-photo-input-style-20260718-light-core-16';
    st.textContent='.direct-serial-actions{grid-template-columns:1fr!important}.native-photo-box{grid-column:1/-1;display:grid;gap:6px;background:#fff8dd;border:1px solid #efc44f;border-radius:8px;padding:10px}.native-photo-title{font-weight:800;color:#6c5100}.native-photo-input{display:block!important;position:static!important;opacity:1!important;width:100%!important;height:auto!important;min-height:42px!important;border:1px dashed #c99b25!important;background:#fff!important;color:#10251d!important;border-radius:7px!important;padding:8px!important}.native-photo-help{font-size:12px;color:#6d6040;line-height:1.35}.direct-photo-label{display:none!important}#photoScanSerial,#directScanBtn{display:none!important}@media(max-width:900px){.native-photo-input{font-size:16px!important;min-height:46px!important}.native-photo-box{padding:11px}}';
    document.head.appendChild(st);
  }
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return;
    var main=byId('maThietBi'),hidden=byId('seriThietBi');
    if(main){main.value=value;main.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    alert('ÄÃ£ láº¥y sá»‘ seri: '+value);
  }
  function loadZxing(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))};
      sc.onerror=function(){reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('Máº¡ng cháº­m, chÆ°a táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'))},9000);
    })
  }
  function decodeNative(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('KhÃ´ng há»— trá»£ Ä‘á»c áº£nh trá»±c tiáº¿p'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
      return detector.detect(bitmap).then(function(codes){try{bitmap.close&&bitmap.close()}catch(e){};if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;throw new Error('KhÃ´ng tháº¥y mÃ£ trong áº£nh')})
    })
  }
  function decodeZxing(file){
    var url=URL.createObjectURL(file);
    return loadZxing().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromImageUrl(url).then(function(result){URL.revokeObjectURL(url);return result.getText?result.getText():String(result.text||result)})
    }).catch(function(err){URL.revokeObjectURL(url);throw err})
  }
  function onNativePhoto(e){
    var file=e.target.files&&e.target.files[0];e.target.value='';
    var note=byId('nativePhotoNote');
    if(!file)return;
    if(note)note.textContent='Äang Ä‘á»c mÃ£ tá»« áº£nh...';
    decodeNative(file).then(fillSerial).catch(function(){return decodeZxing(file).then(fillSerial)}).catch(function(){
      if(note)note.textContent='áº¢nh chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n chá»¥p gáº§n hÆ¡n, Ä‘á»§ sÃ¡ng hÆ¡n, hoáº·c nháº­p tay sá»‘ seri.';
      var manual=prompt('áº¢nh chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n nháº­p tay sá»‘ seri táº¡i Ä‘Ã¢y:');
      if(manual)fillSerial(manual);
    })
  }
  function installNativeInput(){
    addStyle();
    var input=byId('maThietBi');if(!input)return;
    var actions=byId('directSerialActions');
    if(!actions){
      var label=input.closest('label');if(!label)return;
      label.insertAdjacentHTML('afterend','<div class="direct-serial-actions" id="directSerialActions"></div>');
      actions=byId('directSerialActions');
    }
    if(!byId('nativePhotoSerialInput')){
      actions.insertAdjacentHTML('afterbegin','<div class="native-photo-box"><div class="native-photo-title">Chá»¥p/chá»n áº£nh mÃ£ seri</div><input class="native-photo-input" id="nativePhotoSerialInput" type="file" accept="image/*" capture="environment"><div class="native-photo-help" id="nativePhotoNote">Báº¥m vÃ o Ã´ nÃ y Ä‘á»ƒ chá»¥p áº£nh tem mÃ£ váº¡ch/QR. Náº¿u mÃ¡y khÃ´ng cho chá»¥p, báº¡n váº«n nháº­p tay á»Ÿ Ã´ Sá»‘ seri bÃªn trÃªn.</div></div>');
    }
    var photo=byId('nativePhotoSerialInput');if(photo&&!photo.__nativePhotoReady){photo.__nativePhotoReady=true;photo.onchange=onNativePhoto}
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__nativePhotoInputWrapped){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(installNativeInput,100);return out};window.render.__nativePhotoInputWrapped=true}
  setTimeout(installNativeInput,300);
})();
;

(function(){
  if(window.__mobileNavModernPatch)return;window.__mobileNavModernPatch=true;
  if(document.getElementById('mobile-nav-modern-style-20260718-light-core-16'))return;
  var st=document.createElement('style');st.id='mobile-nav-modern-style-20260718-light-core-16';
  st.textContent='@media(max-width:900px){.mobile-bar{display:flex!important;overflow-x:auto!important;overflow-y:hidden!important;gap:8px!important;padding:10px 10px calc(10px + env(safe-area-inset-bottom))!important;background:linear-gradient(180deg,#11b98a 0%,#07845f 100%)!important;border-top:1px solid rgba(255,255,255,.22)!important;box-shadow:0 -14px 30px rgba(4,84,60,.28),inset 0 1px 0 rgba(255,255,255,.20)!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}.mobile-bar::-webkit-scrollbar{display:none}.mobile-bar button{flex:0 0 92px!important;width:92px!important;min-height:58px!important;border-radius:15px!important;border:1px solid rgba(255,255,255,.22)!important;background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,.08))!important;color:#f7fffb!important;font-size:13px!important;font-weight:800!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.16)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 8px 16px rgba(4,70,51,.20)!important;scroll-snap-align:start;transition:transform .12s ease,box-shadow .12s ease,background .12s ease!important}.mobile-bar button:active{transform:translateY(2px) scale(.98)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 4px 10px rgba(4,70,51,.18)!important}.mobile-bar button.active{background:linear-gradient(180deg,#ffffff,#eefbf5)!important;color:#087253!important;border-color:#fff!important;text-shadow:none!important;transform:translateY(-4px)!important;box-shadow:0 14px 26px rgba(3,68,49,.30),inset 0 1px 0 rgba(255,255,255,.85)!important}.mobile-bar button.active:after{content:"";display:block;width:24px;height:3px;border-radius:999px;background:#0f8d68;margin:5px auto 0}.mobile-bar button:nth-child(1)::before{content:"TQ"}.mobile-bar button:nth-child(2)::before{content:"TK"}.mobile-bar button:nth-child(3)::before{content:"+"}.mobile-bar button:nth-child(4)::before{content:"âˆ’"}.mobile-bar button:nth-child(5)::before{content:"IT"}.mobile-bar button:nth-child(6)::before{content:"â†”"}.mobile-bar button:nth-child(7)::before{content:"BC"}.mobile-bar button:nth-child(8)::before{content:"âš™"}.mobile-bar button::before{display:block;margin:0 auto 4px;width:26px;height:22px;border-radius:9px;background:rgba(255,255,255,.18);font-size:11px;line-height:22px;color:inherit;text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.18)}.mobile-bar button.active::before{background:#dff6eb;color:#087253}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__stockCardsViewPatch)return;window.__stockCardsViewPatch=true;
  function addStyle(){
    if(document.getElementById('stock-cards-view-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='stock-cards-view-style-20260718-light-core-16';
    st.textContent='#tonStockCards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;padding:12px;background:#f4faf7}.stock-card-row{border:1px solid #c9e1d6;border-radius:10px;background:linear-gradient(180deg,#fff,#f7fffb);box-shadow:0 8px 18px rgba(15,91,65,.08);padding:12px;display:grid;gap:8px}.stock-card-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.stock-card-item{font-weight:800;color:#092f24;font-size:15px;line-height:1.3}.stock-card-qty{flex:0 0 auto;background:#0f8d68;color:#fff;border-radius:999px;padding:6px 10px;font-weight:800;font-size:14px;box-shadow:0 6px 14px rgba(15,141,104,.20)}.stock-card-kho{display:inline-flex;align-items:center;gap:6px;color:#0b6f51;font-weight:700;font-size:13px}.stock-card-kho:before{content:"Kho";background:#e2f5ec;color:#0b6f51;border-radius:999px;padding:3px 8px;font-size:12px}.stock-card-empty{padding:14px;color:#5d7067}#ton .simple-stock-table{display:none!important}@media(max-width:900px){#tonStockCards{grid-template-columns:1fr;padding:10px;gap:9px}.stock-card-row{border-radius:12px;padding:12px}.stock-card-item{font-size:15px}.stock-card-qty{font-size:15px;padding:7px 11px}.stock-card-top{align-items:center}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v||'').replace(/[&<>\"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]})}
  function cardHtml(r){var hang=r[2]||[];var text=[nameKho(r[0]),r[1],hang[1],hang[2],hang[3],String(r[3])].join(' ').toLowerCase();return '<div class="stock-card-row" data-search="'+esc(text)+'"><div class="stock-card-top"><div class="stock-card-item">'+esc(hang[1])+'</div><div class="stock-card-qty">'+fmt(r[3])+' '+esc(hang[3])+'</div></div><div class="stock-card-kho">'+esc(nameKho(r[0]))+'</div></div>'}
  function renderCards(){
    addStyle();
    var body=document.getElementById('tonRowsBody');if(!body||!window.stockRows)return;
    var wrap=body.closest('.wrap');if(!wrap)return;
    var box=document.getElementById('tonStockCards');
    if(!box){wrap.insertAdjacentHTML('beforebegin','<div id="tonStockCards"></div>');box=document.getElementById('tonStockCards')}
    var rows=stockRows();
    box.innerHTML=rows.length?rows.map(cardHtml).join(''):'<div class="stock-card-empty">ChÆ°a cÃ³ tá»“n kho.</div>';
    var badge=document.getElementById('soDongTon');if(badge)badge.textContent=rows.length+' dÃ²ng';
    bindCardSearch();
  }
  function bindCardSearch(){
    var input=document.getElementById('timTon'),clear=document.getElementById('xoaTimTon'),badge=document.getElementById('soDongTon');
    if(!input)return;
    function apply(){
      var q=input.value.trim().toLowerCase();var shown=0;
      document.querySelectorAll('#tonStockCards .stock-card-row').forEach(function(card){var ok=!q||card.getAttribute('data-search').indexOf(q)>=0;card.style.display=ok?'grid':'none';if(ok)shown++});
      document.querySelectorAll('#tonRowsBody tr').forEach(function(r){var ok=!q||r.getAttribute('data-search').indexOf(q)>=0;r.style.display=ok?'':'none'});
      if(badge)badge.textContent=shown+' dÃ²ng';
    }
    input.oninput=apply;
    if(clear)clear.onclick=function(){input.value='';apply();input.focus()};
    apply();
  }
  function afterRender(){if(document.getElementById('tonRowsBody'))setTimeout(renderCards,0)}
  addStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__stockCardsViewWrapped){window.render=function(){var out=oldRender.apply(this,arguments);afterRender();return out};window.render.__stockCardsViewWrapped=true}
  setTimeout(afterRender,150);
})();
;

(function(){
  if(window.__settingsEditDeletePatch)return;window.__settingsEditDeletePatch=true;
  function warnDelete(msg){return confirm(msg+'\n\nBáº¡n cháº¯c cháº¯n muá»‘n xÃ³a khÃ´ng?')}
  function usedKho(code){return Object.keys(state.ton||{}).some(function(k){return k.indexOf(code+'|')===0&&Number(state.ton[k]||0)!==0})||(state.bd||[]).some(function(b){return b[2]===code})||(state.chuyen||[]).some(function(c){return c.tu===code||c.den===code})}
  window.deleteKhoSetup=function(i){var k=state.kho[i];if(!k)return;if(usedKho(k[0])){if(!warnDelete('Kho "'+k[1]+'" Ä‘ang cÃ³ tá»“n hoáº·c Ä‘Ã£ phÃ¡t sinh phiáº¿u. XÃ³a kho cÃ³ thá»ƒ lÃ m bÃ¡o cÃ¡o cÃ…Â© hiá»ƒn thá»‹ mÃ£ kho thay cho tÃªn kho.'))return}else if(!confirm('XÃ³a kho "'+k[1]+'"?'))return;state.kho.splice(i,1);save();render()}
  window.deleteNhom=function(i){var v=state.nhomHangList[i];if(!v)return;if(state.hang.some(function(h){return normalizeHang(h)[2]===v})){if(!warnDelete('NhÃ³m hÃ ng "'+v+'" Ä‘ang Ä‘Æ°á»£c dÃ¹ng trong danh má»¥c hÃ ng hÃ³a. Khi xÃ³a, hÃ ng Ä‘ang thuá»™c nhÃ³m nÃ y sáº½ Ä‘á»ƒ trá»‘ng nhÃ³m.'))return;state.hang.forEach(function(h){if(normalizeHang(h)[2]===v)h[2]=''})}else if(!confirm('XÃ³a nhÃ³m hÃ ng "'+v+'"?'))return;state.nhomHangList.splice(i,1);save();render()}
  window.deleteDvt=function(i){var v=state.dvtList[i];if(!v)return;if(state.hang.some(function(h){return normalizeHang(h)[3]===v})){if(!warnDelete('ÄÆ¡n vá»‹ tÃ­nh "'+v+'" Ä‘ang Ä‘Æ°á»£c dÃ¹ng trong danh má»¥c hÃ ng hÃ³a. Khi xÃ³a, hÃ ng Ä‘ang dÃ¹ng Ä‘Æ¡n vá»‹ nÃ y sáº½ Ä‘á»ƒ trá»‘ng ÄVT.'))return;state.hang.forEach(function(h){if(normalizeHang(h)[3]===v)h[3]=''})}else if(!confirm('XÃ³a Ä‘Æ¡n vá»‹ tÃ­nh "'+v+'"?'))return;state.dvtList.splice(i,1);save();render()}
  window.deleteNcc=function(i){var v=state.nccList[i];if(!v)return;if((state.bd||[]).some(function(b){return b[7]===v})){if(!warnDelete('NCC "'+v+'" Ä‘Ã£ cÃ³ trong phiáº¿u nháº­p. Khi xÃ³a, phiáº¿u cÃ…Â© váº«n giá»¯ tÃªn NCC nÃ y trong bÃ¡o cÃ¡o.'))return}else if(!confirm('XÃ³a NCC "'+v+'"?'))return;state.nccList.splice(i,1);save();render()}
  window.deleteLoai=function(t,i){var list=t==='nhap'?state.loaiNhapList:state.loaiXuatList;var v=list[i];if(!v)return;if((state.bd||[]).some(function(b){return b[4]===v})){if(!warnDelete('Loáº¡i phiáº¿u "'+v+'" Ä‘Ã£ cÃ³ trong phiáº¿u phÃ¡t sinh. Phiáº¿u cÃ…Â© váº«n giá»¯ tÃªn loáº¡i nÃ y Ä‘á»ƒ bÃ¡o cÃ¡o khÃ´ng máº¥t lá»‹ch sá»­.'))return}else if(!confirm('XÃ³a loáº¡i phiáº¿u "'+v+'"?'))return;list.splice(i,1);save();render()}
  function actions(edit,del){return '<span class="row-actions"><button class="btn small" type="button" onclick="'+edit+'">Sá»­a</button><button class="btn small bad" type="button" onclick="'+del+'">XÃ³a</button></span>'}
  function khoRows(){return (state.kho||[]).map(function(x,i){return '<tr>'+td('MÃ£',x[0])+td('TÃªn kho',x[1])+td('Phá»¥ trÃ¡ch',x[2]||'')+td('Thao tÃ¡c',actions('editKhoSetup('+i+')','deleteKhoSetup('+i+')'))+'</tr>'}).join('')||'<tr><td class="empty" colspan="4">ChÆ°a cÃ³ kho.</td></tr>'}
  function oneRows(arr,label,editName,delName){return (arr||[]).map(function(x,i){return '<tr>'+td(label,x)+td('Thao tÃ¡c',actions(editName+'('+i+')',delName+'('+i+')'))+'</tr>'}).join('')||'<tr><td class="empty" colspan="2">ChÆ°a cÃ³ dá»¯ liá»‡u.</td></tr>'}
  function loaiRows(){var lo=[];(state.loaiNhapList||[]).forEach(function(x,i){lo.push(['nhap',i,'Loáº¡i nháº­p',x])});(state.loaiXuatList||[]).forEach(function(x,i){lo.push(['xuat',i,'Loáº¡i xuáº¥t',x])});return lo.map(function(r){return '<tr>'+td('NhÃ³m',r[2])+td('TÃªn loáº¡i',r[3])+td('Thao tÃ¡c',actions('editLoai(\''+r[0]+'\','+r[1]+')','deleteLoai(\''+r[0]+'\','+r[1]+')'))+'</tr>'}).join('')||'<tr><td class="empty" colspan="3">ChÆ°a cÃ³ loáº¡i phiáº¿u.</td></tr>'}
  var oldScreen=window.screenThietLap;
  window.screenThietLap=function(){
    return shell('thietlap','Thiáº¿t láº­p danh má»¥c','Táº¡o, sá»­a hoáº·c xÃ³a kho, nhÃ³m hÃ ng, Ä‘Æ¡n vá»‹ tÃ­nh, nhÃ  cung cáº¥p vÃ  loáº¡i phiáº¿u. Danh má»¥c hÃ ng hÃ³a chá»‰nh á»Ÿ má»¥c HÃ ng hÃ³a.','<div class="two">'+formKho('set')+'<div class="panel"><div class="head"><h2>Danh sÃ¡ch kho</h2><button class="btn small" type="button" onclick="resetKho(\'set\')">+ ThÃªm kho má»›i</button></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn kho</th><th>Phá»¥ trÃ¡ch</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+khoRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃ³m hÃ ng</h2></div><div class="body form"><input id="editNhom" type="hidden"><label class="full">TÃªn nhÃ³m<input id="tenNhom"></label><button class="btn primary" id="luuNhom">LÆ°u nhÃ³m</button><button class="btn" id="huyNhom">Táº¡o má»›i</button></div><div class="wrap"><table><thead><tr><th>NhÃ³m hÃ ng</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+oneRows(state.nhomHangList,'NhÃ³m hÃ ng','editNhom','deleteNhom')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ÄÆ¡n vá»‹ tÃ­nh</h2></div><div class="body form"><input id="editDvt" type="hidden"><label class="full">TÃªn Ä‘Æ¡n vá»‹<input id="tenDvt"></label><button class="btn primary" id="luuDvt">LÆ°u ÄVT</button><button class="btn" id="huyDvt">Táº¡o má»›i</button></div><div class="wrap"><table><thead><tr><th>ÄVT</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+oneRows(state.dvtList,'ÄVT','editDvt','deleteDvt')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃ  cung cáº¥p</h2></div><div class="body form"><input id="editNcc" type="hidden"><label class="full">TÃªn NCC<input id="tenNcc"></label><button class="btn primary" id="luuNcc">LÆ°u NCC</button><button class="btn" id="huyNcc">Táº¡o má»›i</button></div><div class="wrap"><table><thead><tr><th>NCC</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+oneRows(state.nccList,'NCC','editNcc','deleteNcc')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>Loáº¡i phiáº¿u</h2></div><div class="body form"><input id="editLoai" type="hidden"><label>NhÃ³m<select id="loaiNghiepVu"><option value="nhap">Loáº¡i nháº­p</option><option value="xuat">Loáº¡i xuáº¥t</option></select></label><label>TÃªn loáº¡i<input id="tenLoai"></label><button class="btn primary" id="luuLoai">LÆ°u loáº¡i</button><button class="btn" id="huyLoai">Táº¡o má»›i</button></div><div class="wrap"><table><thead><tr><th>NhÃ³m</th><th>TÃªn loáº¡i</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+loaiRows()+'</tbody></table></div></div></div>')
  }
})();
;

(function(){
  if(window.__adminDeleteXnkPatch)return;window.__adminDeleteXnkPatch=true;
  function isAdminUser(){try{return typeof isAdmin==='function'?isAdmin():((currentRole&&currentRole())==='admin')}catch(e){return false}}
  function canEditAny(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function reverseSlip(row){
    if(!row)return;
    var key=row[2]+'|'+row[3];
    var nhap=Number(row[5]||0),xuat=Number(row[6]||0);
    state.ton[key]=Number(state.ton[key]||0)-nhap+xuat;
    if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0;
  }
  window.deleteSlip=function(i){
    if(!isAdminUser())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c xÃ³a phiáº¿u XNK');
    var row=state.bd[i];if(!row)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var name=(row[1]||'')+' - '+(item(row[3])[1]||row[3]);
    if(!confirm('XÃ³a phiáº¿u '+name+'?\n\nTá»“n kho sáº½ tá»± tÃ­nh láº¡i sau khi xÃ³a.'))return;
    reverseSlip(row);
    state.bd.splice(i,1);
    save();
    alert('ÄÃ£ xÃ³a phiáº¿u vÃ  cáº­p nháº­t tá»“n kho');
    current='baocao';render();setTimeout(function(){showReport('xnk')},0);
  }
  function slipRowsWithDelete(){
    return state.bd.map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x;var buttons=[];
      if(canEditAny())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>');
      if(isAdminUser())buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃ³a</button>');
      var action=buttons.length?td('Thao tÃ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'';
      return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+action+'</tr>'
    }).join('')
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShow(mode,btn);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiáº¿t XNK';
    var actionHead=(canEditAny()||isAdminUser())?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsWithDelete()+'</tbody></table>';
  }
})();
;

(function(){
  if(window.__compactSoftUiPatch)return;window.__compactSoftUiPatch=true;
  if(document.getElementById('compact-soft-ui-style-20260718-light-core-16'))return;
  var st=document.createElement('style');st.id='compact-soft-ui-style-20260718-light-core-16';
  st.textContent='html,body,.app,.app *,button,input,select,textarea,table,th,td{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important;letter-spacing:0!important}body{font-size:13px!important;font-weight:400!important;color:#18352a!important}main{padding:14px 16px 64px!important;max-width:1420px!important}h1{font-size:21px!important;font-weight:650!important;line-height:1.18!important;margin-bottom:3px!important}h2{font-size:14.5px!important;font-weight:650!important}.sub,.hint{font-size:12.5px!important;line-height:1.35!important}.brand{font-size:15.5px!important;font-weight:650!important}.brand span{font-size:11px!important}.brand-icon{width:38px!important;height:38px!important;border-radius:10px!important}aside{padding:14px 14px!important}.nav{font-size:13px!important;font-weight:550!important;min-height:34px!important;padding:8px 10px!important;border-radius:7px!important}.nav.active{font-weight:650!important}.panel,.card{border-radius:7px!important;box-shadow:0 6px 16px rgba(20,54,39,.06)!important}.head{padding:9px 12px!important}.body{padding:10px 12px!important}.form{gap:8px 10px!important}.stats{gap:8px!important;margin-bottom:10px!important}.card{padding:10px 12px!important}.card span{font-size:12px!important;font-weight:500!important}.card strong{font-size:20px!important;font-weight:650!important}.dash-card strong{font-size:24px!important}label{font-size:11.8px!important;font-weight:600!important;gap:4px!important}input,select{min-height:35px!important;padding:7px 9px!important;border-radius:6px!important;font-weight:450!important}.btn{min-height:34px!important;padding:7px 10px!important;border-radius:6px!important;font-size:12.8px!important;font-weight:550!important}.small{min-height:28px!important;padding:4px 7px!important;font-size:12px!important}.tag{min-height:20px!important;padding:2px 7px!important;font-size:11.5px!important;font-weight:600!important}table{font-size:12.8px!important}th{font-size:11.5px!important;font-weight:600!important}th,td{padding:7px 10px!important}.tabs{gap:6px!important;margin-bottom:10px!important}.tabs .btn{min-height:34px!important}.stock-card-row{padding:10px!important;border-radius:8px!important;gap:7px!important;box-shadow:0 5px 14px rgba(15,91,65,.06)!important}.stock-card-item{font-size:13.5px!important;font-weight:650!important}.stock-card-qty{font-size:12.8px!important;font-weight:650!important;padding:5px 9px!important}.stock-card-kho{font-size:12.3px!important;font-weight:550!important}.stock-card-kho:before{font-size:11px!important;padding:2px 7px!important}#tonStockCards{gap:8px!important;padding:10px!important}#ton .ton-search-panel-strong{box-shadow:0 6px 16px rgba(8,92,67,.12)!important}#ton .ton-search-panel-strong h2{font-weight:650!important}#ton .ton-search-field{font-weight:550!important;font-size:12.5px!important}#ton #timTon{min-height:44px!important;font-size:14px!important;font-weight:500!important;border-width:2px!important;border-radius:8px!important}.mobile-bar button{font-weight:650!important}@media(max-width:900px){body{font-size:13px!important}main{padding:72px 8px 82px!important}h1{font-size:19px!important}.panel{margin-bottom:8px!important}.head{padding:9px 10px!important}.body{padding:9px 10px!important}.mobile-title{height:64px!important}.mobile-title strong{font-size:15.5px!important;font-weight:700!important}.mobile-title span{font-size:10.8px!important}.mobile-logo{width:36px!important;height:36px!important}.stock-card-row{padding:10px!important}.stock-card-item{font-size:13.8px!important}.stock-card-qty{font-size:13px!important}.mobile-bar button{font-size:12px!important;min-height:52px!important}.mobile-bar button::before{height:20px!important;line-height:20px!important;margin-bottom:3px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__xuatOnlyStockedItems20260717)return;window.__xuatOnlyStockedItems20260717=true;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function allHang(){return (state.hang||[]).map(function(h){return typeof normalizeHang==='function'?normalizeHang(h):h})}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockedItems(){return allHang().filter(function(h){return h&&h[0]&&totalStock(h[0])>0})}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number(state.ton[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function itemName(code){var h=allHang().find(function(x){return x[0]===code});return h?h[1]:code}
  function itemUnit(code){var h=allHang().find(function(x){return x[0]===code});return h?(h[3]||''):''}
  function setSearchValue(inputId,code){var input=el(inputId);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  function matchItem(h,q){q=norm(q);if(!q)return true;return norm(h[0]).indexOf(q)>=0||norm(h[1]).indexOf(q)>=0||norm((h[0]||'')+' - '+(h[1]||'')).indexOf(q)>=0}
  var oldGet=window.getItemCodeFromSearch;
  window.getItemCodeFromSearch=function(id){
    if(id!=='hangXuat')return oldGet?oldGet(id):'';
    var input=el(id),v=(input&&input.value||'').trim();
    if(input&&input.dataset.code&&v===itemName(input.dataset.code)&&totalStock(input.dataset.code)>0)return input.dataset.code;
    if(!v)return '';
    var found=stockedItems().find(function(h){return v===h[0]||v===h[0]+' - '+h[1]||v===h[1]||norm(v)===norm(h[1])});
    return found?found[0]:'';
  };
  window.renderXuatOnlyStockedSuggest=function(){
    var input=el('hangXuat'),box=el('hangXuatSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var html=[];
    stockedItems().filter(function(h){return matchItem(h,q)}).forEach(function(h){
      stockWarehouses(h[0]).forEach(function(w){html.push('<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">Tá»“n '+fmt(w.sl)+' '+esc(itemUnit(h[0]))+' - '+esc(w.ten)+'</span></button>')});
    });
    if(!html.length)html.push('<div class="item-suggest-empty">KhÃ´ng cÃ³ hÃ ng nÃ o cÃ²n tá»“n phÃ¹ há»£p</div>');
    box.innerHTML=html.slice(0,12).join('');box.classList.add('show');
  };
  var oldCap=window.capNhatKhoXuatTheoHang;
  window.capNhatKhoXuatTheoHang=function(){
    var input=el('hangXuat'),kho=el('khoXuat');if(!input||!kho)return;
    var ma=window.getItemCodeFromSearch('hangXuat');
    if(!ma){kho.innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='Chá»‰ gá»£i Ã½ hÃ ng Ä‘ang cÃ²n tá»“n. GÃµ tÃªn hÃ ng hoáº·c chá»n trong danh sÃ¡ch.';return}
    if(oldCap)oldCap.apply(this,arguments);
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    var input=el('hangXuat'),kho=el('khoXuat');if(!input)return;
    input.removeAttribute('list');
    var ma=window.getItemCodeFromSearch('hangXuat');
    if(!ma){
      var first=stockedItems()[0];
      if(first)setSearchValue('hangXuat',first[0]);
      else{input.value='';input.dataset.code='';if(kho)kho.innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='Hiá»‡n chÆ°a cÃ³ hÃ ng nÃ o cÃ²n tá»“n Ä‘á»ƒ xuáº¥t.'}
    }
    input.onfocus=window.renderXuatOnlyStockedSuggest;
    input.oninput=function(){window.renderXuatOnlyStockedSuggest();window.capNhatKhoXuatTheoHang()};
    input.onchange=window.capNhatKhoXuatTheoHang;
    window.capNhatKhoXuatTheoHang();
  };
})();
;

(function(){
  if(document.getElementById('mobile-top-safe-style-20260718-light-core-16'))return;
  var st=document.createElement('style');
  st.id='mobile-top-safe-style-20260718-light-core-16';
  st.textContent='@media(max-width:900px){main{padding-top:calc(116px + env(safe-area-inset-top))!important;padding-bottom:calc(104px + env(safe-area-inset-bottom))!important} .mobile-title{height:calc(96px + env(safe-area-inset-top))!important;padding:calc(30px + env(safe-area-inset-top)) 12px 12px!important;align-items:flex-end!important} .mobile-title strong{font-size:17px!important;line-height:1.08!important} .mobile-title span{font-size:11px!important;line-height:1.18!important} #tongquan .top{margin-top:0!important;margin-bottom:8px!important} #tongquan h1{font-size:20px!important;line-height:1.15!important} #tongquan .sub{font-size:12.5px!important;line-height:1.25!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(document.getElementById('nhap-buttons-even-style-20260718-light-core-16'))return;
  var st=document.createElement('style');
  st.id='nhap-buttons-even-style-20260718-light-core-16';
  st.textContent='#nhap #batHangMoi,#nhap #luuNhap{grid-column:1/-1!important;width:100%!important;min-height:42px!important;height:42px!important;border-radius:6px!important;padding:0 12px!important;display:flex!important;align-items:center!important;justify-content:center!important;font-weight:700!important;line-height:1.2!important;margin:0!important}#nhap #batHangMoi{background:#2f6f9f!important;border-color:#2f6f9f!important;color:#fff!important}#nhap #batHangMoi:hover{background:#2a628d!important;border-color:#2a628d!important;color:#fff!important}#nhap #luuNhap{background:#0f8d68!important;border-color:#0f8d68!important;color:#fff!important}#nhap #luuNhap:hover{background:#0b7656!important;border-color:#0b7656!important;color:#fff!important}@media(max-width:900px){#nhap #batHangMoi,#nhap #luuNhap{min-height:44px!important;height:44px!important;border-radius:8px!important;font-size:13px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__deleteSlipTypeClean20260717)return;window.__deleteSlipTypeClean20260717=true;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function uniq(list){var seen={};return (list||[]).filter(function(v){var k=norm(v);if(!k||seen[k])return false;seen[k]=true;return true})}
  function deletedList(s,t){var key=t==='nhap'?'__deletedLoaiNhap':'__deletedLoaiXuat';if(!Array.isArray(s[key]))s[key]=[];return s[key]}
  function filterDeleted(s){
    s=s||state;
    var delNhap=(s.__deletedLoaiNhap||[]).map(norm);
    var delXuat=(s.__deletedLoaiXuat||[]).map(norm);
    s.loaiNhapList=uniq(s.loaiNhapList).filter(function(v){return delNhap.indexOf(norm(v))<0});
    s.loaiXuatList=uniq(s.loaiXuatList).filter(function(v){return delXuat.indexOf(norm(v))<0});
    return s;
  }
  var oldMigrate=window.migrateState;
  if(typeof oldMigrate==='function'){
    window.migrateState=function(s){return filterDeleted(oldMigrate(s))};
  }
  filterDeleted(state);save();
  window.deleteLoai=function(t,i){
    var list=t==='nhap'?state.loaiNhapList:state.loaiXuatList;
    list=uniq(list);
    if(t==='nhap')state.loaiNhapList=list;else state.loaiXuatList=list;
    var v=list[i];if(!v)return;
    var msg='XÃ³a loáº¡i phiáº¿u "'+v+'" khá»i danh sÃ¡ch chá»n?';
    if((state.bd||[]).some(function(b){return norm(b[4])===norm(v)}))msg+='\n\nLoáº¡i nÃ y Ä‘Ã£ dÃ¹ng trong phiáº¿u cÃ…Â©, bÃ¡o cÃ¡o cÃ…Â© váº«n giá»¯ tÃªn loáº¡i Ä‘á»ƒ khÃ´ng máº¥t lá»‹ch sá»­.';
    if(!confirm(msg))return;
    deletedList(state,t).push(norm(v));
    if(t==='nhap')state.loaiNhapList=state.loaiNhapList.filter(function(x){return norm(x)!==norm(v)});
    else state.loaiXuatList=state.loaiXuatList.filter(function(x){return norm(x)!==norm(v)});
    filterDeleted(state);save();render();
  };
  var oldSaveLoai=window.saveLoai;
  window.saveLoai=function(){
    var t=el('loaiNghiepVu')?el('loaiNghiepVu').value:'nhap';
    var v=el('tenLoai')?el('tenLoai').value.trim():'';
    if(v){
      var del=deletedList(state,t);var k=norm(v);
      for(var i=del.length-1;i>=0;i--){if(del[i]===k)del.splice(i,1)}
    }
    if(oldSaveLoai)oldSaveLoai.apply(this,arguments);
    filterDeleted(state);save();
  };
})();
;

(function(){
  if(document.getElementById('nhap-buttons-web-fix-style-20260718-light-core-16'))return;
  var st=document.createElement('style');
  st.id='nhap-buttons-web-fix-style-20260718-light-core-16';
  st.textContent='#nhap .body.form>#batHangMoi,#nhap .body.form>#luuNhap{grid-column:1/-1!important;display:flex!important;align-items:center!important;justify-content:center!important;width:100%!important;inline-size:100%!important;height:40px!important;min-height:40px!important;max-height:40px!important;block-size:40px!important;min-block-size:40px!important;max-block-size:40px!important;padding:0 14px!important;margin:0!important;border-radius:6px!important;line-height:40px!important;box-sizing:border-box!important;font-size:13px!important;font-weight:700!important;appearance:none!important;-webkit-appearance:none!important;overflow:hidden!important}#nhap .body.form>#batHangMoi{background:#356f9f!important;border-color:#356f9f!important;color:#fff!important}#nhap .body.form>#luuNhap{background:#0f8d68!important;border-color:#0f8d68!important;color:#fff!important}@media(max-width:900px){#nhap .body.form>#batHangMoi,#nhap .body.form>#luuNhap{height:44px!important;min-height:44px!important;max-height:44px!important;block-size:44px!important;min-block-size:44px!important;max-block-size:44px!important;line-height:44px!important;border-radius:8px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__protectLocalData20260717)return;window.__protectLocalData20260717=true;
  function nowIso(){return new Date().toISOString()}
  function stamp(s){if(s)s.__updatedAt=nowIso();return s}
  function timeOf(s){var t=s&&s.__updatedAt?Date.parse(s.__updatedAt):0;return isNaN(t)?0:t}
  function localState(){try{return JSON.parse(localStorage.getItem('qlkho-state')||'{}')}catch(e){return {}}}
  var baseSave=window.save;
  if(typeof baseSave==='function'){
    window.save=function(){stamp(state);baseSave.apply(this,arguments)};
  }
  if(!state.__updatedAt){stamp(state);if(baseSave)baseSave()}
  var baseTai=window.taiDuLieuOnline;
  if(typeof baseTai==='function'){
    window.taiDuLieuOnline=async function(){
      try{
        var rows=await cloudRequest('GET');
        if(rows&&rows[0]&&rows[0].data){
          var remote=migrateState(rows[0].data);
          var local=localState();
          if(timeOf(local)>timeOf(remote)){
            state=migrateState(local);
            if(window.save)save();
            if(typeof render==='function')render();
            try{await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:state,updated_at:new Date().toISOString()})}catch(e){}
            return;
          }
          state=remote;
          if(window.save)save();
          if(typeof render==='function')render();
        }
      }catch(e){console.warn(e)}
    };
  }
  var baseDay=window.dayDuLieuOnline;
  if(typeof baseDay==='function'){
    window.dayDuLieuOnline=async function(){stamp(state);if(window.save)save();return baseDay.apply(this,arguments)};
  }
})();
;

(function(){
  if(window.__nccEditSync20260717)return;window.__nccEditSync20260717=true;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function ensureDeleted(){if(!Array.isArray(state.__deletedNcc))state.__deletedNcc=[];return state.__deletedNcc}
  function uniqueNames(list){var seen={};return (list||[]).filter(function(v){var k=norm(v);if(!k||seen[k])return false;seen[k]=true;return true})}
  function markOldNcc(oldName){var k=norm(oldName);if(!k)return;var del=ensureDeleted();if(del.indexOf(k)<0)del.push(k)}
  function unmarkNcc(name){var k=norm(name);if(!k)return;var del=ensureDeleted();for(var i=del.length-1;i>=0;i--){if(del[i]===k)del.splice(i,1)}}
  function filterDeletedNcc(s){s=s||state;var del=(s.__deletedNcc||[]).map(norm);s.nccList=uniqueNames(s.nccList).filter(function(v){return del.indexOf(norm(v))<0});return s}
  async function syncSilent(){try{if(window.cloudRequest&&window.SUPABASE_CONFIG){await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:state,updated_at:new Date().toISOString()})}}catch(e){console.warn(e)}}
  var oldMigrate=window.migrateState;
  if(typeof oldMigrate==='function')window.migrateState=function(s){return filterDeletedNcc(oldMigrate(s))};
  filterDeletedNcc(state);save();
  window.saveNcc=function(){
    var input=el('tenNcc');if(!input)return;
    var v=input.value.trim();if(!v)return alert('Nháº­p tÃªn NCC');
    var i=el('editNcc')?el('editNcc').value:'';
    state.nccList=uniqueNames(state.nccList);
    if(i===''){
      unmarkNcc(v);
      if(!state.nccList.some(function(x){return norm(x)===norm(v)}))state.nccList.push(v);
    }else{
      var idx=Number(i),old=state.nccList[idx];
      if(old&&norm(old)!==norm(v)){
        markOldNcc(old);
        state.bd.forEach(function(b){if(norm(b[7])===norm(old))b[7]=v});
      }
      unmarkNcc(v);
      state.nccList[idx]=v;
    }
    filterDeletedNcc(state);
    if(el('editNcc'))el('editNcc').value='';
    input.value='';
    save();render();syncSilent();
  };
  window.deleteNcc=function(i){
    state.nccList=uniqueNames(state.nccList);
    var v=state.nccList[i];if(!v)return;
    var msg='XÃ³a NCC "'+v+'" khá»i danh sÃ¡ch chá»n?';
    if((state.bd||[]).some(function(b){return norm(b[7])===norm(v)}))msg+='\n\nNCC nÃ y Ä‘Ã£ cÃ³ trong phiáº¿u cÃ…Â©, phiáº¿u cÃ…Â© váº«n giá»¯ tÃªn Ä‘á»ƒ khÃ´ng máº¥t lá»‹ch sá»­.';
    if(!confirm(msg))return;
    markOldNcc(v);
    state.nccList.splice(i,1);
    filterDeletedNcc(state);save();render();syncSilent();
  };
})();
;

(function(){
  if(window.__tonSearchStockOnly20260717)return;window.__tonSearchStockOnly20260717=true;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function hang(code){try{return item(code)}catch(e){return [code,code,'','']}}
  function totalByCode(code){var total=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)total+=Number(state.ton[k]||0)});return total}
  function placesByCode(code){return Object.keys(state.ton||{}).map(function(k){var p=k.split('|');return {kho:p[0],code:p[1],sl:Number(state.ton[k]||0)}}).filter(function(x){return x.code===code&&x.sl>0}).map(function(x){return nameKho(x.kho)+': '+fmt(x.sl)+' '+(hang(code)[3]||'')}).join(' | ')}
  function stockedItems(q){
    var seen={};var rows=[];q=norm(q);
    Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|'),code=p[1],sl=Number(state.ton[k]||0);if(!code||sl<=0||seen[code])return;var h=hang(code);var hay=norm([code,h[1],h[2],h[3]].join(' '));if(q&&hay.indexOf(q)<0)return;seen[code]=true;rows.push(h)});
    return rows.sort(function(a,b){return String(a[1]||'').localeCompare(String(b[1]||''),'vi')}).slice(0,12);
  }
  function ensureBox(){var input=document.getElementById('timTon');if(!input)return null;var box=document.getElementById('tonSuggestList');if(!box){var label=input.closest('label');if(label){label.insertAdjacentHTML('afterend','<div id="tonSuggestList" class="ton-suggest-list"></div>');box=document.getElementById('tonSuggestList')}}return box}
  function renderSuggest(){
    var input=document.getElementById('timTon'),box=ensureBox();if(!input||!box)return;
    var rows=stockedItems(input.value);
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃ´ng cÃ³ mÃ£ hÃ ng nÃ o cÃ²n tá»“n phÃ¹ há»£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalByCode(h[0]);return '<button class="ton-suggest-row" type="button" data-value="'+esc(h[1])+'"><span class="ton-suggest-title">'+esc(h[0]+' - '+h[1])+'</span><span class="ton-suggest-meta">Tá»•ng: '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(placesByCode(h[0]))+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function bind(){
    if(current!=='ton')return;
    var input=document.getElementById('timTon');if(!input||input.__stockOnlyBound)return;
    input.__stockOnlyBound=true;
    input.removeAttribute('list');
    input.placeholder='GÃµ mÃ£ hÃ ng hoáº·c tÃªn hÃ ng Ä‘ang cÃ²n tá»“n...';
    input.addEventListener('focus',renderSuggest);
    input.addEventListener('input',renderSuggest);
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind.apply(this,arguments);bind()};
  document.addEventListener('click',function(e){var row=e.target.closest&&e.target.closest('.ton-suggest-row');if(row){var input=document.getElementById('timTon');if(input){input.value=row.getAttribute('data-value')||'';input.dispatchEvent(new Event('input',{bubbles:true}))}var box=document.getElementById('tonSuggestList');if(box)box.classList.remove('show');return}if(!e.target.closest||(!e.target.closest('#ton .ton-search-field')&&!e.target.closest('#tonSuggestList'))){var b=document.getElementById('tonSuggestList');if(b)b.classList.remove('show')}});
})();
;

(function(){
  if(window.__reportNhomHang20260717)return;window.__reportNhomHang20260717=true;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function groupOf(code){var h=item(code);return h[2]||'ChÆ°a phÃ¢n nhÃ³m'}
  function ensureGroup(map,name){if(!map[name])map[name]={items:{},ton:0,nhap:0,xuat:0};return map[name]}
  function groupRows(){
    var map={};
    (state.hang||[]).forEach(function(raw){var h=normalizeHang(raw);var g=ensureGroup(map,h[2]||'ChÆ°a phÃ¢n nhÃ³m');g.items[h[0]]=true});
    stockRows().forEach(function(r){var g=ensureGroup(map,r[2][2]||'ChÆ°a phÃ¢n nhÃ³m');g.items[r[1]]=true;g.ton+=Number(r[3]||0)});
    (state.bd||[]).forEach(function(x){var g=ensureGroup(map,groupOf(x[3]));g.items[x[3]]=true;g.nhap+=Number(x[5]||0);g.xuat+=Number(x[6]||0)});
    return Object.keys(map).sort(function(a,b){return a.localeCompare(b,'vi')}).map(function(name){var g=map[name];return {name:name,count:Object.keys(g.items).length,ton:g.ton,nhap:g.nhap,xuat:g.xuat}});
  }
  function reportHtml(){
    var rows=groupRows();
    if(!rows.length)return '<div class="empty">ChÆ°a cÃ³ dá»¯ liá»‡u nhÃ³m hÃ ng.</div>';
    return '<table><thead><tr><th>NhÃ³m hÃ ng</th><th>Sá»‘ máº·t hÃ ng</th><th>Tá»•ng tá»“n</th><th>Tá»•ng nháº­p</th><th>Tá»•ng xuáº¥t</th></tr></thead><tbody>'+rows.map(function(r){return '<tr>'+td('NhÃ³m hÃ ng',esc(r.name))+td('Sá»‘ máº·t hÃ ng',fmt(r.count),'num')+td('Tá»•ng tá»“n',fmt(r.ton),'num')+td('Tá»•ng nháº­p',fmt(r.nhap),'num')+td('Tá»•ng xuáº¥t',fmt(r.xuat),'num')+'</tr>'}).join('')+'</tbody></table>';
  }
  var oldScreen=window.screenBaoCao;
  window.screenBaoCao=function(){
    var html=oldScreen();
    if(html.indexOf("showReport('nhomhang'")<0){
      html=html.replace('<button class="btn tab" onclick="showReport(\'ncc\',this)">Tá»•ng há»£p NCC</button>','<button class="btn tab" onclick="showReport(\'nhomhang\',this)">Theo nhÃ³m hÃ ng</button><button class="btn tab" onclick="showReport(\'ncc\',this)">Tá»•ng há»£p NCC</button>');
    }
    return html;
  };
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='nhomhang')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='BÃ¡o cÃ¡o theo nhÃ³m hÃ ng';
    el('rp').innerHTML=reportHtml();
  };
})();
;

(function(){
  if(window.__reportSearchEditSync20260717)return;window.__reportSearchEditSync20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function safe(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function optPairsFresh(arr,selected){return (arr||[]).map(function(x){var v=Array.isArray(x)?x[0]:x;var t=Array.isArray(x)?(x[1]||x[0]):x;return '<option value="'+safe(v)+'" '+(String(v)===String(selected)?'selected':'')+'>'+safe(t)+'</option>'}).join('')}
  function optTextFresh(arr,selected){var out=[],seen={};(arr||[]).forEach(function(x){var v=String(x||'').trim();if(!v||seen[v])return;seen[v]=true;out.push(v)});if(selected&&!seen[String(selected)])out.unshift(String(selected));return out.map(function(v){return '<option value="'+safe(v)+'" '+(v===String(selected)?'selected':'')+'>'+safe(v)+'</option>'}).join('')}
  function nccDatalist(selected){var list=[],seen={};function add(v){v=String(v||'').trim();if(v&&!seen[v]){seen[v]=true;list.push(v)}}add(selected);(state.nccList||[]).forEach(add);return list.map(function(v){return '<option value="'+safe(v)+'"></option>'}).join('')}
  function currentSlipTypeOptions(row){var list=Number(row[5]||0)>0?(state.loaiNhapList||[]):(state.loaiXuatList||[]);return optTextFresh(list,row[4]||'')}
  function canEditSlipFresh(){try{if(typeof canEditXnkSlip==='function')return canEditXnkSlip();return isLoggedIn===true||sessionStorage.getItem('qlkho-login')==='1'}catch(e){return true}}
  function applySlipStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  var style=document.createElement('style');
  style.textContent='.report-search-panel{margin-bottom:10px}.report-search-panel .body{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:end}.report-search-panel input{background:#f4fff8;border:2px solid #07966f;box-shadow:0 0 0 3px rgba(7,150,111,.09);font-weight:600}.report-search-panel .tag{justify-self:end}.report-row-hidden{display:none!important}@media(max-width:720px){.report-search-panel .body{grid-template-columns:1fr}.report-search-panel .tag{justify-self:start}}';
  document.head.appendChild(style);
  var oldScreen=window.screenBaoCao;
  window.screenBaoCao=function(){
    var html=oldScreen.apply(this,arguments);
    if(html.indexOf('id="reportSearch"')<0){
      var box='<div class="panel report-search-panel"><div class="head"><h2>TÃ¬m kiáº¿m bÃ¡o cÃ¡o</h2><button class="btn small" id="clearReportSearch" type="button">XÃ³a tÃ¬m</button></div><div class="body"><label class="full">Search táº¥t cáº£<input id="reportSearch" autocomplete="off" placeholder="GÃµ ngÃ y, sá»‘ phiáº¿u, kho, hÃ ng, NCC, nhÃ³m hÃ ng..."></label><span class="tag" id="reportSearchCount"></span></div></div>';
      html=html.replace('<div class="panel"><div class="head"><h2 id="rpTitle">',box+'<div class="panel"><div class="head"><h2 id="rpTitle">');
    }
    return html;
  };
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function applyReportSearch(){
    var input=document.getElementById('reportSearch'),rp=document.getElementById('rp'),badge=document.getElementById('reportSearchCount');
    if(!input||!rp)return;
    var q=norm(input.value),rows=[].slice.call(rp.querySelectorAll('tbody tr')),shown=0;
    rows.forEach(function(row){var ok=!q||norm(row.textContent).indexOf(q)>=0;row.classList.toggle('report-row-hidden',!ok);if(ok)shown++});
    if(badge)badge.textContent=rows.length?(shown+' / '+rows.length+' dÃ²ng'):'';
  }
  window.applyReportSearch=applyReportSearch;
  function bindReportSearch(){
    var input=document.getElementById('reportSearch'),clear=document.getElementById('clearReportSearch');
    if(!input)return;
    if(!input.__reportSearchBound){input.__reportSearchBound=true;input.addEventListener('input',applyReportSearch)}
    if(clear&&!clear.__reportSearchBound){clear.__reportSearchBound=true;clear.addEventListener('click',function(){input.value='';applyReportSearch();input.focus()})}
    applyReportSearch();
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){var out=oldShow.apply(this,arguments);setTimeout(function(){bindReportSearch();applyReportSearch()},0);return out};
  var oldKhoDetail=window.showKhoDetail;
  if(typeof oldKhoDetail==='function')window.showKhoDetail=function(){var out=oldKhoDetail.apply(this,arguments);setTimeout(applyReportSearch,0);return out};
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind.apply(this,arguments);if(window.current==='baocao')setTimeout(bindReportSearch,0)};
  window.editSlip=function(i){
    if(!canEditSlipFresh())return alert('TÃ i khoáº£n hiá»‡n táº¡i khÃ´ng cÃ³ quyá»n sá»­a phiáº¿u');
    var row=state.bd[i];if(!row)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var hangOpts=(state.hang||[]).map(function(raw){var h=normalizeHang(raw);return [h[0],h[0]+' - '+h[1]]});
    if(!hangOpts.some(function(h){return h[0]===row[3]})){var old=item(row[3]);hangOpts.unshift([row[3],row[3]+' - '+(old[1]||row[3])])}
    if(document.getElementById('rpTitle'))document.getElementById('rpTitle').textContent='Sá»­a phiáº¿u '+(row[1]||'');
    var html='<div class="body form"><input id="editSlipIndex" type="hidden" value="'+i+'"><label>NgÃ y<input id="editSlipDate" type="date" value="'+safe(row[0]||today)+'"></label><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="editSlipNo" value="'+safe(row[1]||'')+'" readonly></label><label>Kho<select id="editSlipKho">'+optPairsFresh(state.kho,row[2])+'</select></label><label>HÃ ng hÃ³a<select id="editSlipHang">'+optPairsFresh(hangOpts,row[3])+'</select></label><label>Loáº¡i phiáº¿u<select id="editSlipLoai">'+currentSlipTypeOptions(row)+'</select></label><label>NCC/Ghi chÃº<input id="editSlipNcc" list="editSlipNccList" value="'+safe(row[7]||'')+'"><datalist id="editSlipNccList">'+nccDatalist(row[7]||'')+'</datalist></label><label>Sá»‘ lÆ°á»£ng nháº­p<input id="editSlipNhap" type="number" min="0" value="'+Number(row[5]||0)+'"></label><label>Sá»‘ lÆ°á»£ng xuáº¥t<input id="editSlipXuat" type="number" min="0" value="'+Number(row[6]||0)+'"></label><p class="hint full">CÃ¡c Ã´ Kho, HÃ ng hÃ³a, Loáº¡i phiáº¿u vÃ  NCC Ä‘ang láº¥y theo danh má»¥c má»›i nháº¥t báº¡n Ä‘Ã£ sá»­a.</p><button class="btn primary" onclick="saveEditSlip()">LÆ°u phiáº¿u Ä‘Ã£ sá»­a</button><button class="btn" onclick="showReport(\'xnk\')">Há»§y</button></div>';
    document.getElementById('rp').innerHTML=html;
  };
  window.saveEditSlip=function(){
    if(!canEditSlipFresh())return alert('TÃ i khoáº£n hiá»‡n táº¡i khÃ´ng cÃ³ quyá»n sá»­a phiáº¿u');
    var i=Number(document.getElementById('editSlipIndex').value),old=state.bd[i];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var nhap=Number(document.getElementById('editSlipNhap').value||0),xuat=Number(document.getElementById('editSlipXuat').value||0);
    if(nhap<0||xuat<0)return alert('Sá»‘ lÆ°á»£ng khÃ´ng há»£p lá»‡');
    if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('Chá»‰ nháº­p sá»‘ lÆ°á»£ng á»Ÿ má»™t Ã´: Nháº­p hoáº·c Xuáº¥t');
    applySlipStock(old,-1);
    var row=[document.getElementById('editSlipDate').value,old[1],document.getElementById('editSlipKho').value,document.getElementById('editSlipHang').value,document.getElementById('editSlipLoai').value,nhap,xuat,document.getElementById('editSlipNcc').value.trim()];
    var key=row[2]+'|'+row[3],newStock=(state.ton[key]||0)+nhap-xuat;
    if(newStock<0){applySlipStock(old,1);return alert('KhÃ´ng Ä‘á»§ tá»“n kho sau khi sá»­a phiáº¿u xuáº¥t')}
    state.bd[i]=row;applySlipStock(row,1);if(typeof touchState==='function')touchState();save();alert('ÄÃ£ sá»­a phiáº¿u vÃ  cáº­p nháº­t tá»“n kho');current='baocao';render();setTimeout(function(){showReport('xnk');bindReportSearch()},0);
  };
})();
;

(function(){
  if(window.__reportGroupDetail20260717)return;window.__reportGroupDetail20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  window.__openReportGroupName='';
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function groupNameOf(raw){var h=normalizeHang(raw);return h[2]||'ChÆ°a phÃ¢n nhÃ³m'}
  function stockFor(kho,hang){return Number((state.ton||{})[kho+'|'+hang]||0)}
  function itemTotal(code){return (state.kho||[]).reduce(function(sum,k){return sum+stockFor(k[0],code)},0)}
  function khoText(code){
    var parts=(state.kho||[]).map(function(k){return {name:k[1]||k[0],qty:stockFor(k[0],code)}}).filter(function(x){return x.qty>0});
    return parts.length?parts.map(function(x){return esc(x.name)+': <b>'+fmt(x.qty)+'</b>'}).join(' | '):'<span class="muted">ChÆ°a cÃ³ tá»“n trong kho</span>';
  }
  function groupRowsDetail(){
    var map={};
    (state.hang||[]).forEach(function(raw){
      var h=normalizeHang(raw),g=h[2]||'ChÆ°a phÃ¢n nhÃ³m';
      if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};
      map[g].items.push(h);
    });
    (state.bd||[]).forEach(function(x){
      var g=(item(x[3])[2]||'ChÆ°a phÃ¢n nhÃ³m');
      if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};
      map[g].nhap+=Number(x[5]||0);map[g].xuat+=Number(x[6]||0);
    });
    Object.keys(map).forEach(function(g){map[g].ton=map[g].items.reduce(function(s,h){return s+itemTotal(h[0])},0)});
    return Object.keys(map).sort(function(a,b){return a.localeCompare(b,'vi')}).map(function(name){var g=map[name];return {name:name,count:g.items.length,ton:g.ton,nhap:g.nhap,xuat:g.xuat,items:g.items}});
  }
  function groupDetailHtml(group){
    if(!group)return '';
    var rows=group.items.slice().sort(function(a,b){return String(a[1]).localeCompare(String(b[1]),'vi')});
    if(!rows.length)return '<div class="group-detail"><div class="empty">NhÃ³m nÃ y chÆ°a cÃ³ hÃ ng hÃ³a.</div></div>';
    return '<div class="group-detail"><div class="head"><h2>Chi tiáº¿t nhÃ³m: '+esc(group.name)+'</h2><span class="tag">'+fmt(rows.length)+' máº·t hÃ ng</span></div><div class="wrap"><table><thead><tr><th>TÃªn hÃ ng</th><th>ÄVT</th><th>Tá»“n tá»«ng kho</th><th>Tá»•ng tá»“n</th></tr></thead><tbody>'+rows.map(function(h){var total=itemTotal(h[0]);return '<tr>'+td('TÃªn hÃ ng',esc(h[1]||h[0]))+td('ÄVT',esc(h[3]||''))+td('Tá»“n tá»«ng kho',khoText(h[0]))+td('Tá»•ng tá»“n',fmt(total),'num')+'</tr>'}).join('')+'</tbody></table></div></div>';
  }
  function reportHtml(){
    var rows=groupRowsDetail();
    if(!rows.length)return '<div class="empty">ChÆ°a cÃ³ dá»¯ liá»‡u nhÃ³m hÃ ng.</div>';
    var open=window.__openReportGroupName||rows[0].name;
    var openGroup=rows.find(function(r){return r.name===open})||rows[0];
    window.__openReportGroupName=openGroup.name;
    return '<table class="group-report"><thead><tr><th>NhÃ³m hÃ ng</th><th>Sá»‘ máº·t hÃ ng</th><th>Tá»•ng tá»“n</th><th>Tá»•ng nháº­p</th><th>Tá»•ng xuáº¥t</th></tr></thead><tbody>'+rows.map(function(r){var active=r.name===openGroup.name?' active-group':'';var encoded=encodeURIComponent(r.name);return '<tr class="group-row'+active+'">'+td('NhÃ³m hÃ ng','<button class="btn small group-toggle" onclick="openReportGroup(decodeURIComponent(\''+encoded+'\'))">'+esc(r.name)+'</button>')+td('Sá»‘ máº·t hÃ ng',fmt(r.count),'num')+td('Tá»•ng tá»“n',fmt(r.ton),'num')+td('Tá»•ng nháº­p',fmt(r.nhap),'num')+td('Tá»•ng xuáº¥t',fmt(r.xuat),'num')+'</tr>'}).join('')+'</tbody></table>'+groupDetailHtml(openGroup);
  }
  window.openReportGroup=function(name){window.__openReportGroupName=name;showReport('nhomhang');if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0)};
  var css=document.createElement('style');
  css.textContent='.group-report .active-group{background:#eefcf5}.group-toggle{font-weight:700;color:#007a5b}.group-detail{margin-top:12px;border-top:1px solid var(--line)}.group-detail .head{background:#f5fbf8}.group-detail table td:nth-child(3){color:#006b50}.muted{color:#66756f}@media(max-width:720px){.group-detail table td[data-label="Tá»“n tá»«ng kho"]{font-weight:600;line-height:1.45}}';
  document.head.appendChild(css);
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='nhomhang')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='BÃ¡o cÃ¡o theo nhÃ³m hÃ ng';
    el('rp').innerHTML=reportHtml();
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
})();
;

(function(){
  if(window.__reportCompactLayout20260717)return;window.__reportCompactLayout20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  window.__selectedReportKho='';
  window.__openReportGroupName=window.__openReportGroupName||'';
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function enc(v){return encodeURIComponent(String(v==null?'':v))}
  function khoQty(kho,hang){return Number((state.ton||{})[kho+'|'+hang]||0)}
  function totalItem(code){return (state.kho||[]).reduce(function(s,k){return s+khoQty(k[0],code)},0)}
  function stockRowsByKho(maKho){return stockRows().filter(function(r){return r[0]===maKho&&Number(r[3]||0)>0}).sort(function(a,b){return String(a[2][1]).localeCompare(String(b[2][1]),'vi')})}
  function khoChips(code){
    var chips=(state.kho||[]).map(function(k){var q=khoQty(k[0],code);return q>0?'<span class="stock-chip"><b>'+esc(k[1]||k[0])+'</b> '+fmt(q)+'</span>':''}).filter(Boolean);
    return chips.length?chips.join(''):'<span class="muted">ChÆ°a cÃ³ tá»“n</span>';
  }
  function warehouseCards(){
    var rows=(state.kho||[]).map(function(k){var total=Object.keys(state.ton||{}).filter(function(key){return key.indexOf(k[0]+'|')===0}).reduce(function(s,key){return s+Number(state.ton[key]||0)},0);return {id:k[0],name:k[1]||k[0],total:total}});
    if(!window.__selectedReportKho&&rows.length)window.__selectedReportKho=rows[0].id;
    return '<div class="report-card-grid warehouse-grid">'+rows.map(function(r){var active=r.id===window.__selectedReportKho?' active':'';return '<button class="report-card kho-card'+active+'" onclick="openCompactKho(\''+enc(r.id)+'\')"><span>'+esc(r.name)+'</span><strong>'+fmt(r.total)+'</strong><small>Tá»•ng tá»“n</small></button>'}).join('')+'</div>';
  }
  function warehouseDetail(maKho){
    var rows=stockRowsByKho(maKho),name=nameKho(maKho);
    if(!rows.length)return '<div class="compact-detail"><div class="head"><h2>'+esc(name)+'</h2><span class="tag">0 máº·t hÃ ng</span></div><div class="empty">Kho nÃ y chÆ°a cÃ³ hÃ ng tá»“n.</div></div>';
    return '<div class="compact-detail"><div class="head"><h2>'+esc(name)+'</h2><span class="tag">'+fmt(rows.length)+' máº·t hÃ ng</span></div><div class="report-item-grid">'+rows.map(function(r){return '<div class="report-item-card"><div><h3>'+esc(r[2][1])+'</h3><p>'+esc(r[2][2]||'ChÆ°a phÃ¢n nhÃ³m')+' Â· '+esc(r[2][3]||'')+'</p></div><strong>'+fmt(r[3])+'</strong></div>'}).join('')+'</div></div>';
  }
  window.openCompactKho=function(id){window.__selectedReportKho=decodeURIComponent(id);showReport('tk');if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0)};
  function reportTk(){return '<p class="hint compact-hint">Báº¥m vÃ o tá»«ng kho Ä‘á»ƒ xem nhanh cÃ¡c máº·t hÃ ng Ä‘ang tá»“n.</p>'+warehouseCards()+'<div id="rpDetail">'+warehouseDetail(window.__selectedReportKho||((state.kho[0]||[])[0]))+'</div>'}
  function reportHh(){
    var rows=(state.hang||[]).map(function(raw){var h=normalizeHang(raw);return {h:h,total:totalItem(h[0])}}).sort(function(a,b){return b.total-a.total||String(a.h[1]).localeCompare(String(b.h[1]),'vi')});
    return '<div class="report-item-grid">'+rows.map(function(r){return '<div class="report-item-card"><div><h3>'+esc(r.h[1]||r.h[0])+'</h3><p>'+esc(r.h[2]||'ChÆ°a phÃ¢n nhÃ³m')+' Â· '+esc(r.h[3]||'')+'</p><div class="stock-chip-row">'+khoChips(r.h[0])+'</div></div><strong>'+fmt(r.total)+'</strong></div>'}).join('')+'</div>';
  }
  function reportTq(){
    var totalTon=Object.values(state.ton||{}).reduce(function(a,b){return a+Number(b||0)},0);
    return '<div class="report-card-grid"><div class="report-card"><span>Tá»•ng kho</span><strong>'+fmt((state.kho||[]).length)+'</strong></div><div class="report-card"><span>Máº·t hÃ ng</span><strong>'+fmt((state.hang||[]).length)+'</strong></div><div class="report-card"><span>Tá»•ng tá»“n</span><strong>'+fmt(totalTon)+'</strong></div><div class="report-card"><span>Phiáº¿u XNK</span><strong>'+fmt((state.bd||[]).length)+'</strong></div></div>';
  }
  function reportNcc(){
    var m={};(state.bd||[]).forEach(function(x){if(Number(x[5]||0)>0){var key=x[7]||'ChÆ°a chá»n NCC';if(!m[key])m[key]={qty:0,slip:0};m[key].qty+=Number(x[5]||0);m[key].slip+=1}});
    var rows=Object.keys(m).sort(function(a,b){return a.localeCompare(b,'vi')});
    return '<table class="compact-table"><thead><tr><th>NCC</th><th>Sá»‘ phiáº¿u</th><th>Tá»•ng nháº­p</th></tr></thead><tbody>'+rows.map(function(k){return '<tr>'+td('NCC',esc(k))+td('Sá»‘ phiáº¿u',fmt(m[k].slip),'num')+td('Tá»•ng nháº­p',fmt(m[k].qty),'num')+'</tr>'}).join('')+'</tbody></table>';
  }
  function reportIt(){
    var m={};(state.thietBiIT||[]).forEach(function(x){x=normalizeThietBi(x);var key=x[5]||'ChÆ°a gÃ¡n';if(!m[key])m[key]={total:0,using:0,stock:0};m[key].total+=1;if(x[6]==='Äang sá»­ dá»¥ng')m[key].using+=1;if(x[6]==='Trong kho')m[key].stock+=1});
    var rows=Object.keys(m).sort(function(a,b){return a.localeCompare(b,'vi')});
    return '<table class="compact-table"><thead><tr><th>NgÆ°á»i/phÃ²ng ban</th><th>Tá»•ng</th><th>Äang dÃ¹ng</th><th>Trong kho</th></tr></thead><tbody>'+rows.map(function(k){return '<tr>'+td('NgÆ°á»i/phÃ²ng ban',esc(k))+td('Tá»•ng',fmt(m[k].total),'num')+td('Äang dÃ¹ng',fmt(m[k].using),'num')+td('Trong kho',fmt(m[k].stock),'num')+'</tr>'}).join('')+'</tbody></table>';
  }
  function groupData(){
    var map={};
    (state.hang||[]).forEach(function(raw){var h=normalizeHang(raw),g=h[2]||'ChÆ°a phÃ¢n nhÃ³m';if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};map[g].items.push(h)});
    (state.bd||[]).forEach(function(x){var g=(item(x[3])[2]||'ChÆ°a phÃ¢n nhÃ³m');if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};map[g].nhap+=Number(x[5]||0);map[g].xuat+=Number(x[6]||0)});
    Object.keys(map).forEach(function(g){map[g].ton=map[g].items.reduce(function(s,h){return s+totalItem(h[0])},0)});
    return Object.keys(map).sort(function(a,b){return a.localeCompare(b,'vi')}).map(function(name){var g=map[name];return {name:name,count:g.items.length,ton:g.ton,nhap:g.nhap,xuat:g.xuat,items:g.items}});
  }
  window.openCompactGroup=function(name){window.__openReportGroupName=decodeURIComponent(name);showReport('nhomhang');if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0)};
  function reportGroup(){
    var rows=groupData();if(!rows.length)return '<div class="empty">ChÆ°a cÃ³ dá»¯ liá»‡u nhÃ³m hÃ ng.</div>';
    var open=window.__openReportGroupName||rows[0].name,group=rows.find(function(r){return r.name===open})||rows[0];window.__openReportGroupName=group.name;
    var tabs='<div class="report-card-grid group-grid">'+rows.map(function(r){var active=r.name===group.name?' active':'';return '<button class="report-card group-card'+active+'" onclick="openCompactGroup(\''+enc(r.name)+'\')"><span>'+esc(r.name)+'</span><strong>'+fmt(r.ton)+'</strong><small>'+fmt(r.count)+' máº·t hÃ ng</small></button>'}).join('')+'</div>';
    var items=group.items.slice().sort(function(a,b){return String(a[1]).localeCompare(String(b[1]),'vi')});
    var detail='<div class="compact-detail"><div class="head"><h2>'+esc(group.name)+'</h2><span class="tag">'+fmt(items.length)+' máº·t hÃ ng</span></div><div class="report-item-grid">'+items.map(function(h){return '<div class="report-item-card"><div><h3>'+esc(h[1]||h[0])+'</h3><p>ÄVT: '+esc(h[3]||'')+'</p><div class="stock-chip-row">'+khoChips(h[0])+'</div></div><strong>'+fmt(totalItem(h[0]))+'</strong></div>'}).join('')+'</div></div>';
    return tabs+detail;
  }
  var css=document.createElement('style');
  css.textContent='.report-card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px;margin:8px 0 12px}.report-card{border:1px solid #b8d8cb;background:#f8fffb;border-radius:8px;padding:10px 12px;text-align:left;box-shadow:0 6px 16px rgba(8,71,49,.06);color:var(--ink)}button.report-card{cursor:pointer}.report-card span{display:block;font-size:12px;font-weight:700;color:#356557}.report-card strong{display:block;font-size:22px;line-height:1.15;color:#006b50;margin-top:3px}.report-card small{color:#60746d;font-weight:700}.report-card.active{background:#d9f8ea;border-color:#00946e;box-shadow:inset 0 0 0 1px #00946e,0 8px 18px rgba(0,148,110,.12)}.warehouse-grid,.group-grid{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}.compact-detail{background:#fff;border:1px solid var(--line);border-radius:8px;margin-top:8px;overflow:hidden}.compact-detail>.head{padding:10px 12px;background:#f5fbf8}.report-item-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:8px;padding:10px}.report-item-card{display:flex;justify-content:space-between;gap:10px;border:1px solid #cfe4d9;background:#fbfffd;border-radius:8px;padding:9px 10px;min-height:58px}.report-item-card h3{font-size:14px;margin:0 0 4px}.report-item-card p{font-size:12px;margin:0;color:#526b63}.report-item-card>strong{align-self:flex-start;background:#008c68;color:#fff;border-radius:999px;padding:5px 9px;min-width:44px;text-align:center}.stock-chip-row{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}.stock-chip{display:inline-flex;gap:4px;align-items:center;background:#e9f8f1;color:#006b50;border:1px solid #c5eadb;border-radius:999px;padding:3px 7px;font-size:12px;margin:2px 4px 2px 0}.compact-table th,.compact-table td,#rp table th,#rp table td{padding:7px 9px;font-size:13px}.compact-hint{margin-bottom:6px}.report-search-panel{margin-bottom:8px}@media(max-width:720px){.report-card-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.report-card{padding:9px}.report-card strong{font-size:19px}.report-item-grid{grid-template-columns:1fr;padding:8px}.report-item-card h3{font-size:13px}.stock-chip{font-size:11px}}';
  document.head.appendChild(css);
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(['tk','tq','hh','ncc','it','nhomhang'].indexOf(mode)<0)return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    var title={tk:'Tá»“n tá»«ng kho',tq:'Tá»•ng quan',hh:'Tá»“n theo hÃ ng hÃ³a',ncc:'Tá»•ng há»£p theo NCC',it:'Thiáº¿t bá»‹ IT theo ngÆ°á»i dÃ¹ng',nhomhang:'BÃ¡o cÃ¡o theo nhÃ³m hÃ ng'}[mode];
    el('rpTitle').textContent=title;
    var html={tk:reportTk,tq:reportTq,hh:reportHh,ncc:reportNcc,it:reportIt,nhomhang:reportGroup}[mode]();
    el('rp').innerHTML=html;
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
})();
;

(function(){
  if(window.__stockSearchGroup20260717)return;window.__stockSearchGroup20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function info(code){try{return normalizeHang(item(code))}catch(e){return [code,code,'','']}}
  function itemTotal(code){var total=0;Object.keys(state.ton||{}).forEach(function(key){var p=key.split('|');if(p[1]===code)total+=Number(state.ton[key]||0)});return total}
  function places(code,dvt){return Object.keys(state.ton||{}).map(function(key){var p=key.split('|');return {kho:p[0],code:p[1],qty:Number(state.ton[key]||0)}}).filter(function(x){return x.code===code&&x.qty>0}).map(function(x){return nameKho(x.kho)+': '+fmt(x.qty)+' '+(dvt||'')})}
  function stockedItems(query){
    var q=norm(query),seen={},rows=[];
    Object.keys(state.ton||{}).forEach(function(key){
      var p=key.split('|'),code=p[1],qty=Number(state.ton[key]||0);if(!code||qty<=0||seen[code])return;
      var h=info(code),hay=norm([code,h[1],h[2],h[3],nameKho(p[0])].join(' '));
      if(q&&hay.indexOf(q)<0)return;
      seen[code]=true;rows.push(h);
    });
    return rows.sort(function(a,b){return itemTotal(b[0])-itemTotal(a[0])||String(a[1]).localeCompare(String(b[1]),'vi')}).slice(0,18);
  }
  function ensureBox(){var input=document.getElementById('timTon');if(!input)return null;var box=document.getElementById('tonSuggestList');if(!box){var label=input.closest('label');if(label){label.insertAdjacentHTML('afterend','<div id="tonSuggestList" class="ton-suggest-list"></div>');box=document.getElementById('tonSuggestList')}}return box}
  function renderGroupSuggest(){
    var input=document.getElementById('timTon'),box=ensureBox();if(!input||!box)return;
    var rows=stockedItems(input.value);
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃ´ng cÃ³ hÃ ng cÃ²n tá»“n phÃ¹ há»£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=itemTotal(h[0]),ps=places(h[0],h[3]);return '<button class="ton-suggest-row" type="button" data-value="'+esc(h[1])+'"><span class="ton-suggest-title">'+esc(h[1])+'</span><span class="ton-suggest-meta">NhÃ³m: '+esc(h[2]||'ChÆ°a phÃ¢n nhÃ³m')+' Â· Tá»•ng: '+fmt(total)+' '+esc(h[3]||'')+(ps.length?' Â· '+esc(ps.join(' | ')):'')+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function applyCardSearch(){
    var input=document.getElementById('timTon'),badge=document.getElementById('soDongTon');if(!input)return;
    var q=norm(input.value),shown=0;
    document.querySelectorAll('#tonStockCards .stock-card-row').forEach(function(card){var ok=!q||norm(card.getAttribute('data-search')).indexOf(q)>=0;card.style.display=ok?'grid':'none';if(ok)shown++});
    document.querySelectorAll('#tonRowsBody tr').forEach(function(row){var ok=!q||norm(row.getAttribute('data-search')).indexOf(q)>=0;row.style.display=ok?'':'none'});
    if(badge)badge.textContent=shown+' dÃ²ng';
  }
  function bind(){
    if(window.current!=='ton')return;
    var input=document.getElementById('timTon'),clear=document.getElementById('xoaTimTon');if(!input)return;
    input.removeAttribute('list');
    input.placeholder='GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, kho hoáº·c nhÃ³m hÃ ng Ä‘ang cÃ²n tá»“n...';
    if(!input.__groupStockSearchBound){
      input.__groupStockSearchBound=true;
      input.addEventListener('focus',renderGroupSuggest);
      input.addEventListener('input',function(){renderGroupSuggest();applyCardSearch()});
    }
    if(clear&&!clear.__groupStockSearchBound){clear.__groupStockSearchBound=true;clear.addEventListener('click',function(){input.value='';applyCardSearch();renderGroupSuggest();input.focus()})}
    applyCardSearch();
  }
  var style=document.createElement('style');
  style.textContent='.ton-suggest-row.group-match .ton-suggest-title{color:#006b50}.ton-suggest-meta{line-height:1.45}.ton-suggest-row b{color:#005f47}';
  document.head.appendChild(style);
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind.apply(this,arguments);setTimeout(bind,0)};
  document.addEventListener('click',function(e){var row=e.target.closest&&e.target.closest('.ton-suggest-row');if(row){var input=document.getElementById('timTon');if(input){input.value=row.getAttribute('data-value')||'';applyCardSearch();renderGroupSuggest()}var box=document.getElementById('tonSuggestList');if(box)box.classList.remove('show')}});
})();
;

(function(){
  if(window.__removeDefaultNcc20260717)return;window.__removeDefaultNcc20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var HIDDEN=['CÃ´ng ty VÄƒn phÃ²ng pháº©m An PhÃ¡t','Cá»­a hÃ ng Thiáº¿t bá»‹ Minh Long','NhÃ  cung cáº¥p khÃ¡c'];
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function ensureDeleted(s){s=s||state;if(!Array.isArray(s.__deletedNcc))s.__deletedNcc=[];return s.__deletedNcc}
  function unique(list){var seen={};return (list||[]).filter(function(v){var k=norm(v);if(!k||seen[k])return false;seen[k]=true;return true})}
  function applyNccCleanup(s){
    s=s||state;
    var del=ensureDeleted(s);
    HIDDEN.forEach(function(v){var k=norm(v);if(del.indexOf(k)<0)del.push(k)});
    var delMap={};del.forEach(function(k){delMap[norm(k)]=true});
    s.nccList=unique(s.nccList).filter(function(v){return !delMap[norm(v)]});
    return s;
  }
  var oldMigrate=window.migrateState;
  if(typeof oldMigrate==='function')window.migrateState=function(s){return applyNccCleanup(oldMigrate(s))};
  var oldFillText=window.fillText;
  if(typeof oldFillText==='function')window.fillText=function(sel,arr){if(sel&&sel.id==='nccNhap'){applyNccCleanup(state);arr=state.nccList||[]}return oldFillText(sel,arr)};
  var oldBind=window.bindForms;
  window.bindForms=function(){applyNccCleanup(state);oldBind.apply(this,arguments);if(el('nccNhap'))fillText(el('nccNhap'),state.nccList||[])};
  var oldDelete=window.deleteNcc;
  window.deleteNcc=function(i){if(typeof oldDelete==='function'){oldDelete.apply(this,arguments);setTimeout(function(){applyNccCleanup(state);save();render()},0)}else{applyNccCleanup(state);save();render()}};
  applyNccCleanup(state);save();
})();
;

(function(){
  if(window.__exportRecipient20260717)return;window.__exportRecipient20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function exportNeedsReceiver(type){return String(type||'').indexOf('Ä‘iá»u chuyá»ƒn')<0&&String(type||'').indexOf('dieu chuyen')<0}
  window.screenXuat=function(){return shell('xuat','Xuáº¥t kho','GÃµ tÃªn hÃ ng, app sáº½ hiá»‡n tÃªn hÃ ng - sá»‘ lÆ°á»£ng tá»“n - kho Ä‘ang cÃ³ hÃ ng.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label>Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>NgÆ°á»i nháº­n / Bá»™ pháº­n nháº­n<input id="nguoiNhanXuat" placeholder="VD: Nguyá»…n VÄƒn A - PhÃ²ng HC"></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>')};
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(el('hangXuat')?el('hangXuat').value:'');
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    if(!el('khoXuat').value)return alert('HÃ ng nÃ y chÆ°a cÃ³ kho cÃ²n tá»“n Ä‘á»ƒ xuáº¥t');
    var loai=el('loaiXuat').value,nguoiNhan=el('nguoiNhanXuat')?el('nguoiNhanXuat').value.trim():'';
    if(exportNeedsReceiver(loai)&&!nguoiNhan)return alert('Nháº­p ngÆ°á»i nháº­n hoáº·c bá»™ pháº­n nháº­n Ä‘á»ƒ theo dÃµi phiáº¿u xuáº¥t');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoXuat').value+'|'+maHang;
    if((state.ton[key]||0)<sl)return alert('KhÃ´ng Ä‘á»§ tá»“n Ä‘á»ƒ xuáº¥t');
    state.ton[key]-=sl;
    var row=[today,el('soXuat').value,el('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    state.bd.push(row);
    if(loai==='Xuáº¥t Ä‘iá»u chuyá»ƒn ná»™i bá»™')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'Chá» nháº­n'});
    alert('ÄÃ£ lÆ°u phiáº¿u xuáº¥t');veTongQuanSauLuu();
  };
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():((typeof currentRole==='function'?currentRole():currentRole)==='admin')}catch(e){return false}}
  function slipRowsRecipient(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];
      if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>');
      if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃ³a</button>');
      var action=buttons.length?td('Thao tÃ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'';
      return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC/NgÆ°á»i nháº­n',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+action+'</tr>';
    }).join('');
  }
  var oldShowReport=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShowReport.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiáº¿t XNK';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC/NgÆ°á»i nháº­n</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsRecipient()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  var oldEditSlip=window.editSlip;
  window.editSlip=function(i){
    if(typeof canEditSlipFresh==='function'&&!canEditSlipFresh())return alert('TÃ i khoáº£n hiá»‡n táº¡i khÃ´ng cÃ³ quyá»n sá»­a phiáº¿u');
    var row=state.bd[i];if(!row)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    if(typeof oldEditSlip==='function')oldEditSlip.apply(this,arguments);
    setTimeout(function(){
      var label=document.querySelector('label input#editSlipNcc');
      if(label&&label.parentElement){
        var isExport=Number(row[6]||0)>0;
        label.parentElement.childNodes[0].nodeValue=isExport?'NgÆ°á»i nháº­n/Bá»™ pháº­n nháº­n':'NCC/Ghi chÃº';
        label.placeholder=isExport?'VD: Nguyá»…n VÄƒn A - PhÃ²ng HC':'';
      }
      var hint=document.querySelector('#rp .hint.full');
      if(hint)hint.textContent='ThÃ´ng tin NCC hoáº·c ngÆ°á»i nháº­n sáº½ Ä‘Æ°á»£c lÆ°u theo phiáº¿u vÃ  Ä‘á»“ng bá»™ lÃªn bÃ¡o cÃ¡o.';
    },0);
  };
})();
;

(function(){
  if(window.__receiverDirectory20260717)return;window.__receiverDirectory20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function ensureReceivers(s){
    s=s||state;
    if(!Array.isArray(s.receiverList))s.receiverList=[];
    function add(v){v=String(v||'').trim();if(v&&!s.receiverList.some(function(x){return norm(x)===norm(v)}))s.receiverList.push(v)}
    s.receiverList=s.receiverList.filter(function(v){var k=norm(v);return k!=='trong kho'&&k!=='kho it'&&k!=='chua gan'}).sort(function(a,b){return a.localeCompare(b,'vi')});
    return s.receiverList;
  }
  window.addReceiverName=function(v){v=String(v||'').trim();if(!v)return;ensureReceivers(state);if(!state.receiverList.some(function(x){return norm(x)===norm(v)})){state.receiverList.push(v);state.receiverList.sort(function(a,b){return a.localeCompare(b,'vi')})}}
  function receiverOptions(selected){ensureReceivers(state);var list=[],seen={};function add(v){v=String(v||'').trim();if(v&&!seen[norm(v)]){seen[norm(v)]=true;list.push(v)}}add(selected);(state.receiverList||[]).forEach(add);return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('')}
  var oldMigrate=window.migrateState;
  if(typeof oldMigrate==='function')window.migrateState=function(s){s=oldMigrate(s);ensureReceivers(s);return s};
  ensureReceivers(state);
  window.editReceiver=function(i){ensureReceivers(state);if(!state.receiverList[i])return;el('editReceiver').value=i;el('tenReceiver').value=state.receiverList[i]}
  window.resetReceiver=function(){if(el('editReceiver'))el('editReceiver').value='';if(el('tenReceiver'))el('tenReceiver').value=''}
  window.saveReceiver=function(){
    ensureReceivers(state);
    var v=el('tenReceiver').value.trim();if(!v)return alert('Nháº­p tÃªn ngÆ°á»i nháº­n hoáº·c bá»™ pháº­n sá»­ dá»¥ng');
    var i=el('editReceiver').value;
    if(i===''){if(state.receiverList.some(function(x){return norm(x)===norm(v)}))return alert('TÃªn nÃ y Ä‘Ã£ cÃ³ trong danh má»¥c');state.receiverList.push(v)}
    else{var old=state.receiverList[Number(i)];state.receiverList[Number(i)]=v;(state.bd||[]).forEach(function(b){if(Number(b[6]||0)>0&&b[7]===old)b[7]=v});(state.thietBiIT||[]).forEach(function(raw){var x=normalizeThietBi(raw);if(x[5]===old)x[5]=v})}
    state.receiverList=state.receiverList.filter(Boolean).sort(function(a,b){return a.localeCompare(b,'vi')});
    save();render();
  }
  window.deleteReceiver=function(i){
    ensureReceivers(state);
    var v=state.receiverList[i];if(!v)return;
    var used=(state.bd||[]).some(function(b){return Number(b[6]||0)>0&&b[7]===v})||(state.thietBiIT||[]).some(function(raw){return normalizeThietBi(raw)[5]===v});
    if(used){if(!confirm('TÃªn "'+v+'" Ä‘ang cÃ³ trong phiáº¿u xuáº¥t hoáº·c thiáº¿t bá»‹ IT.\n\nKhi xÃ³a, dá»¯ liá»‡u cÃ…Â© váº«n giá»¯ tÃªn nÃ y Ä‘á»ƒ khÃ´ng máº¥t lá»‹ch sá»­. Báº¡n váº«n xÃ³a khá»i danh má»¥c gá»£i Ã½ chá»©?'))return}
    else if(!confirm('XÃ³a "'+v+'" khá»i danh má»¥c ngÆ°á»i nháº­n/bá»™ pháº­n sá»­ dá»¥ng?'))return;
    state.receiverList.splice(i,1);save();render();
  }
  function receiverRows(){ensureReceivers(state);return (state.receiverList||[]).map(function(x,i){return '<tr>'+td('NgÆ°á»i/Bá»™ pháº­n',esc(x))+td('Thao tÃ¡c','<span class="row-actions"><button class="btn small" onclick="editReceiver('+i+')">Sá»­a</button><button class="btn small bad" onclick="deleteReceiver('+i+')">XÃ³a</button></span>')+'</tr>'}).join('')||'<tr><td class="empty" colspan="2">ChÆ°a cÃ³ ngÆ°á»i nháº­n/bá»™ pháº­n sá»­ dá»¥ng.</td></tr>'}
  function receiverPanel(){return '<div class="panel"><div class="head"><h2>NgÆ°á»i nháº­n/Bá»™ pháº­n sá»­ dá»¥ng</h2></div><div class="body form"><input id="editReceiver" type="hidden"><label class="full">TÃªn ngÆ°á»i nháº­n hoáº·c bá»™ pháº­n<input id="tenReceiver" list="receiverSettingList" placeholder="VD: Nguyá»…n VÄƒn A - PhÃ²ng HC"><datalist id="receiverSettingList">'+receiverOptions('')+'</datalist></label><button class="btn primary" id="luuReceiver">LÆ°u</button><button class="btn" id="huyReceiver">Táº¡o má»›i</button><p class="hint full">Danh má»¥c nÃ y dÃ¹ng chung cho phiáº¿u xuáº¥t vÃ  thiáº¿t bá»‹ IT.</p></div><div class="wrap"><table><thead><tr><th>NgÆ°á»i/Bá»™ pháº­n</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+receiverRows()+'</tbody></table></div></div>'}
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    var html=oldSettings.apply(this,arguments);
    if(html.indexOf('NgÆ°á»i nháº­n/Bá»™ pháº­n sá»­ dá»¥ng')>=0)return html;
    if(typeof isAdmin==='function'&&!isAdmin())return html;
    var panel=receiverPanel(),needle='</div></section>',pos=html.lastIndexOf(needle);
    return pos>=0?html.slice(0,pos)+panel+html.slice(pos):html.replace('</section>',panel+'</section>');
  }
  window.screenXuat=function(){return shell('xuat','Xuáº¥t kho','GÃµ tÃªn hÃ ng, app sáº½ hiá»‡n tÃªn hÃ ng - sá»‘ lÆ°á»£ng tá»“n - kho Ä‘ang cÃ³ hÃ ng.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label>Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>NgÆ°á»i nháº­n / Bá»™ pháº­n nháº­n<input id="nguoiNhanXuat" list="receiverXuatList" placeholder="VD: Nguyá»…n VÄƒn A - PhÃ²ng HC"><datalist id="receiverXuatList">'+receiverOptions('')+'</datalist></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>')};
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(el('hangXuat')?el('hangXuat').value:'');
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    if(!el('khoXuat').value)return alert('HÃ ng nÃ y chÆ°a cÃ³ kho cÃ²n tá»“n Ä‘á»ƒ xuáº¥t');
    var loai=el('loaiXuat').value,nguoiNhan=el('nguoiNhanXuat')?el('nguoiNhanXuat').value.trim():'';
    if(String(loai||'').toLowerCase().indexOf('Ä‘iá»u chuyá»ƒn')<0&&String(loai||'').toLowerCase().indexOf('dieu chuyen')<0&&!nguoiNhan)return alert('Nháº­p ngÆ°á»i nháº­n hoáº·c bá»™ pháº­n nháº­n Ä‘á»ƒ theo dÃµi phiáº¿u xuáº¥t');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoXuat').value+'|'+maHang;if((state.ton[key]||0)<sl)return alert('KhÃ´ng Ä‘á»§ tá»“n Ä‘á»ƒ xuáº¥t');
    state.ton[key]-=sl;addReceiverName(nguoiNhan);
    var row=[today,el('soXuat').value,el('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    state.bd.push(row);
    if(loai==='Xuáº¥t Ä‘iá»u chuyá»ƒn ná»™i bá»™')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'Chá» nháº­n'});
    alert('ÄÃ£ lÆ°u phiáº¿u xuáº¥t');veTongQuanSauLuu();
  }
  var oldScreenThietBi=window.screenThietBi;
  if(typeof oldScreenThietBi==='function')window.screenThietBi=function(){
    var html=oldScreenThietBi.apply(this,arguments),list='<datalist id="receiverItList">'+receiverOptions('')+'</datalist>';
    html=html.replace('id="nguoiDungThietBi" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban/kho"','id="nguoiDungThietBi" list="receiverItList" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban/kho"');
    if(html.indexOf('id="receiverItList"')<0)html=html.replace('<label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi">',list+'<label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi">');return html;
  }
  var oldSaveThietBi=window.saveThietBi;
  if(typeof oldSaveThietBi==='function')window.saveThietBi=function(){var v=el('nguoiDungThietBi')?el('nguoiDungThietBi').value.trim():'';var out=oldSaveThietBi.apply(this,arguments);if(v&&v!=='Trong kho'){addReceiverName(v);save()}return out}
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind.apply(this,arguments);if(el('luuReceiver'))el('luuReceiver').onclick=saveReceiver;if(el('huyReceiver'))el('huyReceiver').onclick=resetReceiver}
})();
;

(function(){
  if(window.__dateFormatVi20260717)return;window.__dateFormatVi20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function formatDateVi(v){
    v=String(v==null?'':v).trim();
    var m=v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(m)return m[3]+'/'+m[2]+'/'+m[1];
    return v;
  }
  window.formatDateVi=formatDateVi;
  var oldTd=window.td||td;
  window.td=function(label,val,cls){
    if(label==='NgÃ y'||label==='NgÃ y nháº­p'||label==='NgÃ y táº¡o'||label==='NgÃ y sá»­a')val=formatDateVi(val);
    return oldTd(label,val,cls);
  };
})();
;

(function(){
  if(window.__compactSearchSlipFilter20260717)return;window.__compactSearchSlipFilter20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  window.__reportSlipFilter=window.__reportSlipFilter||'all';
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d')}
  function cellText(row,label){var c=row.querySelector('td[data-label="'+label+'"]');return c?c.textContent.trim():''}
  function isXnkReport(){var t=document.getElementById('rpTitle');return t&&t.textContent.indexOf('Chi tiáº¿t XNK')>=0}
  function rowKind(row){
    var nhap=cellText(row,'Nháº­p'),xuat=cellText(row,'Xuáº¥t');
    if(nhap&&nhap!=='0')return 'nhap';
    if(xuat&&xuat!=='0')return 'xuat';
    return 'all';
  }
  function applyCompactReportSearch(){
    var input=document.getElementById('reportSearch'),rp=document.getElementById('rp'),badge=document.getElementById('reportSearchCount');
    if(!input||!rp)return;
    var q=norm(input.value),filter=window.__reportSlipFilter||'all',onlyXnk=isXnkReport();
    var rows=[].slice.call(rp.querySelectorAll('tbody tr')),shown=0;
    rows.forEach(function(row){
      var textOk=!q||norm(row.textContent).indexOf(q)>=0;
      var kindOk=!onlyXnk||filter==='all'||rowKind(row)===filter;
      var ok=textOk&&kindOk;
      row.classList.toggle('report-row-hidden',!ok);
      if(ok)shown++;
    });
    if(badge)badge.textContent=rows.length?(shown+' / '+rows.length+' dÃ²ng'):'';
  }
  window.applyReportSearch=applyCompactReportSearch;
  window.setReportSlipFilter=function(v){
    window.__reportSlipFilter=v||'all';
    document.querySelectorAll('.report-filter-pills button').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-filter')===window.__reportSlipFilter)});
    applyCompactReportSearch();
  };
  function enhanceReportSearch(){
    var panel=document.querySelector('.report-search-panel'),input=document.getElementById('reportSearch'),clear=document.getElementById('clearReportSearch');
    if(!panel||!input)return;
    panel.classList.add('compact-search-panel');
    var body=panel.querySelector('.body');
    if(body&&!document.getElementById('reportSlipFilter')){
      body.insertAdjacentHTML('afterbegin','<div class="report-filter-pills" id="reportSlipFilter"><button class="active" type="button" data-filter="all" onclick="setReportSlipFilter(\'all\')">Táº¥t cáº£</button><button type="button" data-filter="nhap" onclick="setReportSlipFilter(\'nhap\')">Phiáº¿u nháº­p</button><button type="button" data-filter="xuat" onclick="setReportSlipFilter(\'xuat\')">Phiáº¿u xuáº¥t</button></div>');
    }
    input.placeholder='TÃ¬m ngÃ y, sá»‘ phiáº¿u, kho, hÃ ng, NCC/ngÆ°á»i nháº­n...';
    if(!input.__compactSearchBound){input.__compactSearchBound=true;input.addEventListener('input',applyCompactReportSearch)}
    if(clear&&!clear.__compactSearchBound){clear.__compactSearchBound=true;clear.addEventListener('click',function(){input.value='';applyCompactReportSearch();input.focus()})}
    document.querySelectorAll('.report-filter-pills button').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-filter')===(window.__reportSlipFilter||'all'))});
    applyCompactReportSearch();
  }
  function enhanceAllSearchPanels(){
    var ton=document.querySelector('#ton .ton-search-panel-strong,#ton .search-panel');
    if(ton)ton.classList.add('compact-search-panel');
    enhanceReportSearch();
  }
  var st=document.createElement('style');st.id='compact-search-slip-filter-style-20260718-light-core-16';
  st.textContent='.compact-search-panel{margin:6px 0 8px!important;border-radius:8px!important;box-shadow:0 4px 12px rgba(8,71,49,.06)!important;overflow:visible!important}.compact-search-panel .head{padding:6px 10px!important;min-height:32px!important;align-items:center!important}.compact-search-panel .head h2{font-size:13.5px!important;margin:0!important}.compact-search-panel .body{padding:7px 10px!important;gap:7px!important}.report-search-panel.compact-search-panel .body{display:grid!important;grid-template-columns:auto 1fr auto!important;align-items:end!important}.report-search-panel.compact-search-panel label{margin:0!important}.report-search-panel.compact-search-panel input{min-height:34px!important;font-size:13px!important;border-width:1.5px!important;box-shadow:0 0 0 2px rgba(7,150,111,.07)!important}.report-filter-pills{display:flex;gap:5px;align-items:center;white-space:nowrap}.report-filter-pills button{border:1px solid #b9d8cc;background:#fff;color:#0b4e3d;border-radius:999px;min-height:30px;padding:5px 10px;font-weight:700;cursor:pointer}.report-filter-pills button.active{background:#07845f;color:#fff;border-color:#07845f;box-shadow:0 4px 10px rgba(7,132,95,.16)}#reportSearchCount{align-self:center!important;justify-self:end!important}#ton .compact-search-panel .head{padding:6px 10px!important}#ton .compact-search-panel .body{padding:7px 10px!important}#ton .compact-search-panel h2{font-size:13.5px!important}#ton #timTon{min-height:38px!important;font-size:13.5px!important;margin-top:3px!important;border-width:2px!important}.ton-suggest-list{max-height:210px!important}@media(max-width:900px){.report-search-panel.compact-search-panel .body{grid-template-columns:1fr!important}.report-filter-pills{display:grid;grid-template-columns:repeat(3,1fr);width:100%}.report-filter-pills button{width:100%;padding:6px 6px;font-size:12px}#reportSearchCount{justify-self:start!important}.compact-search-panel .head{padding:6px 9px!important}.compact-search-panel .body{padding:7px 9px!important}#ton #timTon{min-height:42px!important;font-size:16px!important}}';
  document.head.appendChild(st);
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){var out=oldShow.apply(this,arguments);setTimeout(enhanceAllSearchPanels,0);return out};
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind.apply(this,arguments);setTimeout(enhanceAllSearchPanels,0)};
  setTimeout(enhanceAllSearchPanels,100);
})();
;

(function(){
  if(window.__hideReportCount20260717)return;window.__hideReportCount20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var st=document.createElement('style');st.id='hide-report-count-style-20260718-light-core-16';
  st.textContent='#reportSearchCount{display:none!important}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__searchToolbarCompactAll20260717)return;window.__searchToolbarCompactAll20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var st=document.createElement('style');st.id='search-toolbar-compact-all-style-20260718-light-core-16';
  st.textContent='.report-search-panel.compact-search-panel,.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{display:grid!important;grid-template-columns:auto 1fr auto!important;align-items:center!important;gap:8px!important;padding:7px 10px!important;margin:5px 0 8px!important;background:#f9fffc!important;border:1px solid #b9d8cc!important;border-radius:8px!important;box-shadow:0 3px 10px rgba(8,71,49,.05)!important}.report-search-panel.compact-search-panel .head,.ton-search-panel-strong.compact-search-panel .head,#ton .search-panel.compact-search-panel .head{display:contents!important;background:transparent!important;border:0!important;padding:0!important}.report-search-panel.compact-search-panel .head h2,.ton-search-panel-strong.compact-search-panel .head h2,#ton .search-panel.compact-search-panel .head h2{font-size:12.5px!important;margin:0!important;white-space:nowrap!important;color:#0b4e3d!important}.report-search-panel.compact-search-panel .head .btn,.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:3!important;grid-row:1!important;min-height:32px!important;padding:5px 9px!important;background:#fff!important}.report-search-panel.compact-search-panel .body,.ton-search-panel-strong.compact-search-panel .body,#ton .search-panel.compact-search-panel .body{display:grid!important;grid-template-columns:auto minmax(240px,1fr)!important;align-items:center!important;gap:7px!important;padding:0!important;background:transparent!important}.report-search-panel.compact-search-panel label,.ton-search-panel-strong.compact-search-panel label,#ton .search-panel.compact-search-panel label{display:block!important;margin:0!important;font-size:0!important;color:transparent!important}.report-search-panel.compact-search-panel input,.ton-search-panel-strong.compact-search-panel input,#ton .search-panel.compact-search-panel input{margin:0!important;min-height:33px!important;font-size:13px!important;border:1.5px solid #07966f!important;border-radius:7px!important;background:#fff!important;box-shadow:0 0 0 2px rgba(7,150,111,.06)!important}.report-filter-pills{grid-column:1!important;grid-row:1!important}.report-filter-pills button{min-height:31px!important;padding:5px 9px!important;font-size:12px!important}.ton-suggest-list{grid-column:1/-1!important;margin-top:4px!important}@media(max-width:900px){.report-search-panel.compact-search-panel,.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{grid-template-columns:1fr auto!important;padding:7px!important}.report-search-panel.compact-search-panel .head h2,.ton-search-panel-strong.compact-search-panel .head h2,#ton .search-panel.compact-search-panel .head h2{display:none!important}.report-search-panel.compact-search-panel .body,.ton-search-panel-strong.compact-search-panel .body,#ton .search-panel.compact-search-panel .body{grid-column:1/-1!important;grid-template-columns:1fr!important;width:100%!important}.report-filter-pills{grid-template-columns:repeat(3,1fr)!important;display:grid!important;width:100%!important}.report-search-panel.compact-search-panel input,#ton #timTon{min-height:38px!important;font-size:15px!important}.report-search-panel.compact-search-panel .head .btn,.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:2!important;grid-row:1!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__searchInputWider20260717)return;window.__searchInputWider20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var st=document.createElement('style');st.id='search-input-wider-style-20260718-light-core-16';
  st.textContent='.report-search-panel.compact-search-panel{grid-template-columns:1fr auto!important}.report-search-panel.compact-search-panel .head h2{display:none!important}.report-search-panel.compact-search-panel .body{grid-column:1!important;grid-row:1!important;grid-template-columns:auto minmax(560px,1fr)!important;width:100%!important}.report-search-panel.compact-search-panel .head .btn{grid-column:2!important;grid-row:1!important}.report-search-panel.compact-search-panel label,.report-search-panel.compact-search-panel input{width:100%!important}.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{grid-template-columns:1fr auto!important}.ton-search-panel-strong.compact-search-panel .head h2,#ton .search-panel.compact-search-panel .head h2{display:none!important}.ton-search-panel-strong.compact-search-panel .body,#ton .search-panel.compact-search-panel .body{grid-column:1!important;grid-row:1!important;grid-template-columns:1fr!important;width:100%!important}.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:2!important;grid-row:1!important}#ton .ton-search-field,#ton #timTon{width:100%!important}@media(max-width:900px){.report-search-panel.compact-search-panel,.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{grid-template-columns:1fr!important}.report-search-panel.compact-search-panel .head .btn,.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:1!important;grid-row:3!important;justify-self:end!important;margin-top:2px!important}.report-search-panel.compact-search-panel .body{grid-template-columns:1fr!important}.report-filter-pills{grid-row:1!important}.report-search-panel.compact-search-panel label{grid-row:2!important}.report-search-panel.compact-search-panel input,#ton #timTon{width:100%!important;min-height:42px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__nhapGroupFilter20260717)return;window.__nhapGroupFilter20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function allItems(){return (state.hang||[]).map(normalizeHang)}
  function itemName(code){return item(code)[1]||code}
  function itemUnit(code){return item(code)[3]||''}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number(state.ton[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function groupOptions(){return '<option value="">Táº¥t cáº£ nhÃ³m</option>'+(state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'">'+esc(g)+'</option>'}).join('')}
  function currentGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function matchItem(h,q){
    q=norm(q);var group=currentGroup();
    if(group&&String(h[2]||'')!==group)return false;
    if(!q)return true;
    return norm(h[0]).indexOf(q)>=0||norm(h[1]).indexOf(q)>=0||norm(h[2]).indexOf(q)>=0;
  }
  function setSearchValue(inputId,code){var input=el(inputId);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  window.screenNhap=function(){return shell('nhap','Nháº­p kho','Chá»n nhÃ³m hÃ ng Ä‘á»ƒ lá»c nhanh danh sÃ¡ch hÃ ng cáº§n nháº­p.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label>NhÃ³m hÃ ng<select id="nhomNhap">'+groupOptions()+'</select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangNhap" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m trong nhÃ³m Ä‘Ã£ chá»n"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">Thuá»™c tÃ­nh linh Ä‘á»™ng<input id="nhapThuocTinhMoi" placeholder="MÃ u: xanh; Size: L; Serial: báº¯t buá»™c"></label><p class="hint full">Khi lÆ°u phiáº¿u nháº­p, hÃ ng hÃ³a má»›i sáº½ tá»± thÃªm vÃ o danh má»¥c hÃ ng hÃ³a.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')};
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchItem(h,q)}).slice(0,10);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng hÃ³a trong nhÃ³m nÃ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalStock(h[0]);var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÆ°a cÃ³ tá»“n';return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap-group"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">'+esc(h[2]||'ChÆ°a phÃ¢n nhÃ³m')+' - Tá»“n '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    if(el('nhomNhap')){
      el('nhomNhap').onchange=function(){if(el('hangNhap')){el('hangNhap').value='';el('hangNhap').dataset.code=''}renderNhapSuggest()};
    }
    if(el('hangNhap')){
      el('hangNhap').removeAttribute('list');
      el('hangNhap').onfocus=renderNhapSuggest;
      el('hangNhap').oninput=renderNhapSuggest;
      if(!el('hangNhap').value){var first=allItems().find(function(h){return matchItem(h,'')});if(first)setSearchValue('hangNhap',first[0])}
    }
  };
  document.addEventListener('click',function(e){
    var row=e.target&&e.target.closest&&e.target.closest('.item-suggest-row[data-kind="nhap-group"]');
    if(!row)return;
    setSearchValue('hangNhap',row.getAttribute('data-code'));
    if(el('hangNhapSuggest'))el('hangNhapSuggest').classList.remove('show');
  });
})();
;

(function(){
  if(window.__boPhanKhoNhap20260717)return;window.__boPhanKhoNhap20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function uniquePush(arr,v){v=String(v||'').trim();if(v&&!arr.some(function(x){return norm(x)===norm(v)}))arr.push(v)}
  function bpOptions(selected){
    var list=[];uniquePush(list,selected);
    (state.kho||[]).forEach(function(k){uniquePush(list,k[1]);uniquePush(list,k[2])});
    (state.receiverList||[]).forEach(function(x){uniquePush(list,x)});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function addBp(v){if(typeof addReceiverName==='function')addReceiverName(v)}
  function groupOptions(){return '<option value="">Táº¥t cáº£ nhÃ³m</option>'+(state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'">'+esc(g)+'</option>'}).join('')}
  function currentGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function allItems(){return (state.hang||[]).map(normalizeHang)}
  function itemName(code){return item(code)[1]||code}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number(state.ton[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function matchItem(h,q){var g=currentGroup();if(g&&String(h[2]||'')!==g)return false;q=norm(q);if(!q)return true;return norm(h[0]).indexOf(q)>=0||norm(h[1]).indexOf(q)>=0||norm(h[2]).indexOf(q)>=0}
  function setSearchValue(inputId,code){var input=el(inputId);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  window.screenNhap=function(){return shell('nhap','Nháº­p kho','Chá»n nhÃ³m hÃ ng vÃ  bá»™ pháº­n/kho Ä‘á»ƒ quáº£n lÃ½ hÃ ng nháº­p rÃµ hÆ¡n.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>Bá»™ pháº­n/kho<input id="boPhanKhoNhap" list="boPhanKhoNhapList" placeholder="VD: Kho VP 77CT / PhÃ²ng HC"><datalist id="boPhanKhoNhapList">'+bpOptions('')+'</datalist></label><label>NCC<select id="nccNhap"></select></label><label>NhÃ³m hÃ ng<select id="nhomNhap">'+groupOptions()+'</select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangNhap" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m trong nhÃ³m Ä‘Ã£ chá»n"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">Thuá»™c tÃ­nh linh Ä‘á»™ng<input id="nhapThuocTinhMoi" placeholder="MÃ u: xanh; Size: L; Serial: báº¯t buá»™c"></label><p class="hint full">Khi lÆ°u phiáº¿u nháº­p, hÃ ng hÃ³a má»›i sáº½ tá»± thÃªm vÃ o danh má»¥c hÃ ng hÃ³a.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')};
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchItem(h,q)}).slice(0,10);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng hÃ³a trong nhÃ³m nÃ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalStock(h[0]);var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÆ°a cÃ³ tá»“n';return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap-bpkho"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">'+esc(h[2]||'ChÆ°a phÃ¢n nhÃ³m')+' - Tá»“n '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  window.saveNhap=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangNhap'):(el('hangNhap')?el('hangNhap').value:'');
    if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){
      var ma=el('nhapMaHangMoi').value.trim(),ten=el('nhapTenHangMoi').value.trim();
      if(!ma||!ten)return alert('Nháº­p tÃªn hÃ ng má»›i');
      if((state.hang||[]).some(function(h){return normalizeHang(h)[0]===ma}))return alert('MÃ£ hÃ ng Ä‘Ã£ tá»“n táº¡i trong danh má»¥c');
      state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,el('nhapThuocTinhMoi').value]);
      maHang=ma;
    }
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    var sl=Number(el('slNhap').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoNhap').value+'|'+maHang,bp=(el('boPhanKhoNhap')&&el('boPhanKhoNhap').value.trim())||nameKho(el('khoNhap').value);
    state.ton[key]=(state.ton[key]||0)+sl;addBp(bp);
    var row=[today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=bp;
    state.bd.push(row);
    alert('ÄÃ£ lÆ°u phiáº¿u nháº­p');veTongQuanSauLuu();
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    if(el('boPhanKhoNhap')&&!el('boPhanKhoNhap').value&&el('khoNhap'))el('boPhanKhoNhap').value=nameKho(el('khoNhap').value);
    if(el('khoNhap')&&!el('khoNhap').__bpBound){el('khoNhap').__bpBound=true;el('khoNhap').addEventListener('change',function(){if(el('boPhanKhoNhap')&&!el('boPhanKhoNhap').value)el('boPhanKhoNhap').value=nameKho(el('khoNhap').value)})}
    if(el('nhomNhap'))el('nhomNhap').onchange=function(){if(el('hangNhap')){el('hangNhap').value='';el('hangNhap').dataset.code=''}renderNhapSuggest()};
    if(el('hangNhap')){el('hangNhap').removeAttribute('list');el('hangNhap').onfocus=renderNhapSuggest;el('hangNhap').oninput=renderNhapSuggest;if(!el('hangNhap').value){var first=allItems().find(function(h){return matchItem(h,'')});if(first)setSearchValue('hangNhap',first[0])}}
  };
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():((typeof currentRole==='function'?currentRole():currentRole)==='admin')}catch(e){return false}}
  function slipRowsBp(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>');if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃ³a</button>');
      return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('Bá»™ pháº­n/kho',x[12]||'')+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC/NgÆ°á»i nháº­n',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+(buttons.length?td('Thao tÃ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'')+'</tr>';
    }).join('');
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;el('rpTitle').textContent='Chi tiáº¿t XNK';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>Bá»™ pháº­n/kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC/NgÆ°á»i nháº­n</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsBp()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  var oldEditSlip=window.editSlip;
  window.editSlip=function(i){
    if(typeof oldEditSlip==='function')oldEditSlip.apply(this,arguments);
    setTimeout(function(){var hint=document.querySelector('#rp .hint.full');if(hint&&!el('editSlipBpKho'))hint.insertAdjacentHTML('beforebegin','<label>Bá»™ pháº­n/kho<input id="editSlipBpKho" list="editSlipBpKhoList" value="'+esc((state.bd[i]&&state.bd[i][12])||'')+'"><datalist id="editSlipBpKhoList">'+bpOptions((state.bd[i]&&state.bd[i][12])||'')+'</datalist></label>')},0);
  };
  function applyStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  window.saveEditSlip=function(){
    var i=Number(el('editSlipIndex').value),old=state.bd[i];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);if(nhap<0||xuat<0)return alert('Sá»‘ lÆ°á»£ng khÃ´ng há»£p lá»‡');if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('Chá»‰ nháº­p sá»‘ lÆ°á»£ng á»Ÿ má»™t Ã´: Nháº­p hoáº·c Xuáº¥t');
    applyStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim(),old[8]||'',old[9]||'',old[10]||'',old[11]||'',(el('editSlipBpKho')&&el('editSlipBpKho').value.trim())||''];
    var key=row[2]+'|'+row[3],newStock=(state.ton[key]||0)+nhap-xuat;if(newStock<0){applyStock(old,1);return alert('KhÃ´ng Ä‘á»§ tá»“n kho sau khi sá»­a phiáº¿u xuáº¥t')}
    addBp(row[12]);state.bd[i]=row;applyStock(row,1);save();alert('ÄÃ£ sá»­a phiáº¿u vÃ  cáº­p nháº­t tá»“n kho');current='baocao';render();setTimeout(function(){showReport('xnk')},0);
  };
  document.addEventListener('click',function(e){var row=e.target&&e.target.closest&&e.target.closest('.item-suggest-row[data-kind="nhap-bpkho"]');if(row){setSearchValue('hangNhap',row.getAttribute('data-code'));if(el('hangNhapSuggest'))el('hangNhapSuggest').classList.remove('show')}});
})();
;

(function(){
  if(window.__capPhatNhanVienBoPhan20260717)return;window.__capPhatNhanVienBoPhan20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function uniquePush(arr,v){v=String(v||'').trim();if(v&&!arr.some(function(x){return norm(x)===norm(v)}))arr.push(v)}
  function ensureReceiverDirectory(s){
    s=s||state;
    if(!Array.isArray(s.receiverDeptList))s.receiverDeptList=[];
    function add(name,dept){
      name=String(name||'').trim();dept=String(dept||'').trim();if(!name)return;
      var found=s.receiverDeptList.find(function(x){return norm(x.name)===norm(name)});
      if(found){if(dept&&!found.dept)found.dept=dept}
      else s.receiverDeptList.push({name:name,dept:dept});
    }
    s.receiverDeptList=s.receiverDeptList.filter(function(x){var k=norm(x&&x.name);return x&&x.name&&k!=='trong kho'&&k!=='kho it'&&k!=='chua gan'}).sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});
    s.receiverList=s.receiverDeptList.map(function(x){return x.name});
    return s.receiverDeptList;
  }
  function deptOptions(selected){
    var list=[];uniquePush(list,selected);
    (state.kho||[]).forEach(function(k){uniquePush(list,k[1]);uniquePush(list,k[2])});
    ensureReceiverDirectory(state).forEach(function(x){uniquePush(list,x.dept)});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function receiverNameOptions(selected){
    var list=[];uniquePush(list,selected);
    ensureReceiverDirectory(state).forEach(function(x){uniquePush(list,x.name)});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function receiverByName(name){name=norm(name);return ensureReceiverDirectory(state).find(function(x){return norm(x.name)===name})}
  window.addReceiverName=function(name,dept){
    name=String(name||'').trim();dept=String(dept||'').trim();if(!name)return;
    ensureReceiverDirectory(state);
    var found=state.receiverDeptList.find(function(x){return norm(x.name)===norm(name)});
    if(found){if(dept)found.dept=dept}else state.receiverDeptList.push({name:name,dept:dept});
    state.receiverDeptList.sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});
    state.receiverList=state.receiverDeptList.map(function(x){return x.name});
  };
  function receiverRows2(){
    return ensureReceiverDirectory(state).map(function(x,i){return '<tr>'+td('TÃªn ngÆ°á»i nháº­n',esc(x.name))+td('Bá»™ pháº­n/kho',esc(x.dept||''))+td('Thao tÃ¡c','<span class="row-actions"><button class="btn small" onclick="editReceiver('+i+')">Sá»­a</button><button class="btn small bad" onclick="deleteReceiver('+i+')">XÃ³a</button></span>')+'</tr>'}).join('')||'<tr><td class="empty" colspan="3">ChÆ°a cÃ³ ngÆ°á»i nháº­n.</td></tr>';
  }
  function receiverPanel2(){
    return '<div class="panel receiver-dept-panel"><div class="head"><h2>NgÆ°á»i nháº­n/Bá»™ pháº­n sá»­ dá»¥ng</h2></div><div class="body form"><input id="editReceiver" type="hidden"><label>TÃªn ngÆ°á»i nháº­n<input id="tenReceiver" list="receiverSettingList" placeholder="VD: Nguyá»…n VÄƒn A"><datalist id="receiverSettingList">'+receiverNameOptions('')+'</datalist></label><label>Bá»™ pháº­n/kho<input id="deptReceiver" list="deptReceiverList" placeholder="VD: PhÃ²ng HC / Kho VP 77CT"><datalist id="deptReceiverList">'+deptOptions('')+'</datalist></label><button class="btn primary" id="luuReceiver">LÆ°u</button><button class="btn" id="huyReceiver">Táº¡o má»›i</button><p class="hint full">Khi chá»n ngÆ°á»i nháº­n trong phiáº¿u xuáº¥t, app sáº½ tá»± Ä‘iá»n Bá»™ pháº­n/kho Ä‘Ã£ lÆ°u á»Ÿ Ä‘Ã¢y.</p></div><div class="wrap"><table><thead><tr><th>TÃªn ngÆ°á»i nháº­n</th><th>Bá»™ pháº­n/kho</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+receiverRows2()+'</tbody></table></div></div>';
  }
  function replaceReceiverPanel(){
    if(current!=='thietlap')return;
    var oldInput=document.getElementById('tenReceiver');if(!oldInput)return;
    var panel=oldInput.closest('.panel');if(panel&&!panel.classList.contains('receiver-dept-panel'))panel.outerHTML=receiverPanel2();
  }
  window.editReceiver=function(i){var x=ensureReceiverDirectory(state)[i];if(!x)return;if(el('editReceiver'))el('editReceiver').value=i;if(el('tenReceiver'))el('tenReceiver').value=x.name||'';if(el('deptReceiver'))el('deptReceiver').value=x.dept||''};
  window.resetReceiver=function(){['editReceiver','tenReceiver','deptReceiver'].forEach(function(id){if(el(id))el(id).value=''})};
  window.saveReceiver=function(){
    ensureReceiverDirectory(state);
    var name=el('tenReceiver')?el('tenReceiver').value.trim():'',dept=el('deptReceiver')?el('deptReceiver').value.trim():'';
    if(!name)return alert('Nháº­p tÃªn ngÆ°á»i nháº­n');
    var i=el('editReceiver')?el('editReceiver').value:'';
    if(i===''){if(state.receiverDeptList.some(function(x){return norm(x.name)===norm(name)}))return alert('TÃªn ngÆ°á»i nháº­n Ä‘Ã£ cÃ³ trong danh má»¥c');state.receiverDeptList.push({name:name,dept:dept})}
    else{var old=state.receiverDeptList[Number(i)];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y ngÆ°á»i nháº­n cáº§n sá»­a');var oldName=old.name;state.receiverDeptList[Number(i)]={name:name,dept:dept};(state.bd||[]).forEach(function(b){if(Number(b[6]||0)>0&&b[7]===oldName){b[7]=name;if(!b[12])b[12]=dept}});(state.thietBiIT||[]).forEach(function(raw){var x=normalizeThietBi(raw);if(x[5]===oldName)x[5]=name})}
    state.receiverDeptList.sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});state.receiverList=state.receiverDeptList.map(function(x){return x.name});save();render();
  };
  window.deleteReceiver=function(i){
    ensureReceiverDirectory(state);var x=state.receiverDeptList[i];if(!x)return;
    var used=(state.bd||[]).some(function(b){return Number(b[6]||0)>0&&b[7]===x.name})||(state.thietBiIT||[]).some(function(raw){return normalizeThietBi(raw)[5]===x.name});
    if(used){if(!confirm('NgÆ°á»i nháº­n "'+x.name+'" Ä‘Ã£ cÃ³ trong phiáº¿u hoáº·c thiáº¿t bá»‹ IT. Phiáº¿u cÃ…Â© váº«n giá»¯ lá»‹ch sá»­. Báº¡n váº«n xÃ³a khá»i danh má»¥c gá»£i Ã½ chá»©?'))return}
    else if(!confirm('XÃ³a ngÆ°á»i nháº­n "'+x.name+'"?'))return;
    state.receiverDeptList.splice(i,1);state.receiverList=state.receiverDeptList.map(function(y){return y.name});save();render();
  };
  function xuatNeedsReceiver(type){return String(type||'').toLowerCase().indexOf('Ä‘iá»u chuyá»ƒn')<0&&String(type||'').toLowerCase().indexOf('dieu chuyen')<0}
  window.screenXuat=function(){return shell('xuat','Xuáº¥t kho','Chá»n ngÆ°á»i nháº­n Ä‘á»ƒ app tá»± Ä‘iá»n bá»™ pháº­n/kho theo danh má»¥c.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label>Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>NgÆ°á»i nháº­n<input id="nguoiNhanXuat" list="receiverXuatList" placeholder="VD: Nguyá»…n VÄƒn A"><datalist id="receiverXuatList">'+receiverNameOptions('')+'</datalist></label><label>Bá»™ pháº­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="VD: PhÃ²ng HC / Kho VP 77CT"><datalist id="boPhanKhoXuatList">'+deptOptions('')+'</datalist></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>')};
  function autoFillReceiverDept(){var rec=el('nguoiNhanXuat'),dept=el('boPhanKhoXuat');if(!rec||!dept)return;var found=receiverByName(rec.value);if(found&&found.dept)dept.value=found.dept}
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(el('hangXuat')?el('hangXuat').value:'');
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    if(!el('khoXuat').value)return alert('HÃ ng nÃ y chÆ°a cÃ³ kho cÃ²n tá»“n Ä‘á»ƒ xuáº¥t');
    var loai=el('loaiXuat').value,nguoiNhan=el('nguoiNhanXuat')?el('nguoiNhanXuat').value.trim():'',dept=el('boPhanKhoXuat')?el('boPhanKhoXuat').value.trim():'';
    if(xuatNeedsReceiver(loai)&&!nguoiNhan)return alert('Nháº­p ngÆ°á»i nháº­n Ä‘á»ƒ theo dÃµi phiáº¿u xuáº¥t');
    if(xuatNeedsReceiver(loai)&&!dept)return alert('Nháº­p bá»™ pháº­n/kho cá»§a ngÆ°á»i nháº­n');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoXuat').value+'|'+maHang;if((state.ton[key]||0)<sl)return alert('KhÃ´ng Ä‘á»§ tá»“n Ä‘á»ƒ xuáº¥t');
    state.ton[key]-=sl;addReceiverName(nguoiNhan,dept);
    var row=[today,el('soXuat').value,el('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=dept;state.bd.push(row);
    if(loai==='Xuáº¥t Ä‘iá»u chuyá»ƒn ná»™i bá»™')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'Chá» nháº­n'});
    alert('ÄÃ£ lÆ°u phiáº¿u xuáº¥t');veTongQuanSauLuu();
  };
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():((typeof currentRole==='function'?currentRole():currentRole)==='admin')}catch(e){return false}}
  function slipRowsCapPhat(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>');if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃ³a</button>');
      return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('Bá»™ pháº­n/kho',x[12]||'')+td('HÃ ng',item(x[3])[1])+td('Loáº¡i',x[4])+td('NCC/NgÆ°á»i nháº­n',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+(buttons.length?td('Thao tÃ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'')+'</tr>';
    }).join('');
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;el('rpTitle').textContent='Chi tiáº¿t XNK';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>Bá»™ pháº­n/kho</th><th>HÃ ng</th><th>Loáº¡i</th><th>NCC/NgÆ°á»i nháº­n</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsCapPhat()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  var oldEdit=window.editSlip;
  window.editSlip=function(i){
    if(typeof oldEdit==='function')oldEdit.apply(this,arguments);
    setTimeout(function(){
      var row=state.bd[i]||{},hint=document.querySelector('#rp .hint.full');
      if(hint&&!el('editSlipBpKho'))hint.insertAdjacentHTML('beforebegin','<label>Bá»™ pháº­n/kho<input id="editSlipBpKho" list="editSlipBpKhoList" value="'+esc(row[12]||'')+'"><datalist id="editSlipBpKhoList">'+deptOptions(row[12]||'')+'</datalist></label>');
      var ncc=el('editSlipNcc');if(ncc&&Number(row[6]||0)>0){ncc.setAttribute('list','editSlipReceiverList');if(!document.getElementById('editSlipReceiverList'))ncc.insertAdjacentHTML('afterend','<datalist id="editSlipReceiverList">'+receiverNameOptions(row[7]||'')+'</datalist>');ncc.addEventListener('change',function(){var f=receiverByName(ncc.value);if(f&&f.dept&&el('editSlipBpKho'))el('editSlipBpKho').value=f.dept})}
    },0);
  };
  function applyStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  window.saveEditSlip=function(){
    var i=Number(el('editSlipIndex').value),old=state.bd[i];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y phiáº¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);if(nhap<0||xuat<0)return alert('Sá»‘ lÆ°á»£ng khÃ´ng há»£p lá»‡');if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('Chá»‰ nháº­p sá»‘ lÆ°á»£ng á»Ÿ má»™t Ã´: Nháº­p hoáº·c Xuáº¥t');
    applyStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim(),old[8]||'',old[9]||'',old[10]||'',old[11]||'',(el('editSlipBpKho')&&el('editSlipBpKho').value.trim())||''];
    var key=row[2]+'|'+row[3],newStock=(state.ton[key]||0)+nhap-xuat;if(newStock<0){applyStock(old,1);return alert('KhÃ´ng Ä‘á»§ tá»“n kho sau khi sá»­a phiáº¿u xuáº¥t')}
    if(xuat>0)addReceiverName(row[7],row[12]);state.bd[i]=row;applyStock(row,1);save();alert('ÄÃ£ sá»­a phiáº¿u vÃ  cáº­p nháº­t tá»“n kho');current='baocao';render();setTimeout(function(){showReport('xnk')},0);
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);ensureReceiverDirectory(state);replaceReceiverPanel();
    if(el('luuReceiver'))el('luuReceiver').onclick=saveReceiver;if(el('huyReceiver'))el('huyReceiver').onclick=resetReceiver;
    if(el('nguoiNhanXuat')){el('nguoiNhanXuat').addEventListener('change',autoFillReceiverDept);el('nguoiNhanXuat').addEventListener('input',autoFillReceiverDept)}
  };
  ensureReceiverDirectory(state);save();
})();
;

(function(){
  if(window.__silentOnlineLoginFix20260717)return;window.__silentOnlineLoginFix20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function showSoftNotice(msg){
    try{
      var old=document.getElementById('softSyncNotice');
      if(old)old.remove();
      var box=document.createElement('div');
      box.id='softSyncNotice';
      box.textContent=msg;
      box.style.cssText='position:fixed;left:50%;bottom:76px;transform:translateX(-50%);z-index:9999;background:#10251d;color:#fff;padding:9px 12px;border-radius:999px;font-size:13px;box-shadow:0 8px 22px rgba(0,0,0,.20);max-width:calc(100vw - 24px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
      document.body.appendChild(box);
      setTimeout(function(){if(box&&box.parentNode)box.remove()},1800);
    }catch(e){}
  }
  function stampState(){
    try{if(window.state)state.__updatedAt=new Date().toISOString();if(window.save)save()}catch(e){}
  }
  async function pushSilent(showNotice){
    try{
      if(!window.cloudRequest||!window.SUPABASE_CONFIG||!window.state)return false;
      if(state)state.__updatedAt=new Date().toISOString();
      await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:state,updated_at:new Date().toISOString()});
      if(showNotice)showSoftNotice('ÄÃ£ Ä‘á»“ng bá»™ online');
      return true;
    }catch(e){
      console.warn(e);
      if(showNotice)showSoftNotice('ChÆ°a Ä‘á»“ng bá»™ Ä‘Æ°á»£c online');
      return false;
    }
  }
  async function pullSilent(showNotice){
    try{
      if(!window.cloudRequest||!window.SUPABASE_CONFIG)return false;
      var rows=await cloudRequest('GET');
      if(rows&&rows[0]&&rows[0].data){
        state=migrateState(rows[0].data);
        stampState();
        if(typeof render==='function')render();
        if(showNotice)showSoftNotice('ÄÃ£ táº£i dá»¯ liá»‡u online');
        return true;
      }
      if(showNotice)showSoftNotice('ChÆ°a cÃ³ dá»¯ liá»‡u online');
      return false;
    }catch(e){
      console.warn(e);
      if(showNotice)showSoftNotice('KhÃ´ng táº£i Ä‘Æ°á»£c dá»¯ liá»‡u online');
      return false;
    }
  }
  window.dayDuLieuOnline=function(){return pushSilent(true)};
  window.taiDuLieuOnline=function(){return pullSilent(true)};
  window.dayDuLieuOnlineSilent=function(){return pushSilent(false)};
  window.taiDuLieuOnlineSilent=function(){return pullSilent(false)};
  var oldLogin=window.login;
  if(typeof oldLogin==='function'){
    window.login=function(){
      var before=sessionStorage.getItem('qlkho-login')==='1';
      var out=oldLogin.apply(this,arguments);
      setTimeout(function(){
        var after=sessionStorage.getItem('qlkho-login')==='1';
        if(!before&&after)pullSilent(false);
      },250);
      return out;
    };
  }
  if(window.bindAuth)bindAuth();
})();
;

(function(){
  if(window.__restoreUserPermissionSettings20260717)return;window.__restoreUserPermissionSettings20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function ensureUserData(){
    if(!window.state)return [];
    if(!Array.isArray(state.users))state.users=[];
    if(!state.users.some(function(u){return u&&u.username==='admin'})){
      state.users.unshift({username:(window.auth&&auth.user)||'admin',password:(window.auth&&auth.pass)||'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});
    }
    state.users.forEach(function(u){
      if(typeof u.active==='undefined')u.active=true;
      if(!u.name)u.name=u.username;
      if(!u.role)u.role='NhÃ¢n viÃªn';
      if(!u.password)u.password='1234';
    });
    return state.users;
  }
  function safe(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function userRowsRestored(){
    return ensureUserData().map(function(u,i){
      var status=u.active===false?'<span class="tag bad">KhÃ³a</span>':'<span class="tag">Hoáº¡t Ä‘á»™ng</span>';
      return '<tr>'+td('TÃªn Ä‘Äƒng nháº­p',safe(u.username))+td('Há» tÃªn',safe(u.name||''))+td('Vai trÃ²',safe(u.role||'NhÃ¢n viÃªn'))+td('Tráº¡ng thÃ¡i',status)+td('Thao tÃ¡c','<span class="row-actions"><button class="btn small" type="button" onclick="editUser('+i+')">Sá»­a</button><button class="btn small" type="button" onclick="toggleUser('+i+')">'+(u.active===false?'Má»Ÿ':'KhÃ³a')+'</button></span>')+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÆ°a cÃ³ tÃ i khoáº£n nhÃ¢n viÃªn.</td></tr>';
  }
  function userPanelRestored(){
    return '<div class="panel user-permission-panel"><div class="head"><h2>TÃ i khoáº£n nhÃ¢n viÃªn / phÃ¢n quyá»n</h2></div><div class="body form"><input id="editUserIndex" type="hidden"><label>TÃªn Ä‘Äƒng nháº­p<input id="userName" placeholder="VD: nguyenvana"></label><label>Máº­t kháº©u<input id="userPass" placeholder="Tá»‘i thiá»ƒu 4 kÃ½ tá»±"></label><label>Há» tÃªn<input id="userFullName" placeholder="TÃªn nhÃ¢n viÃªn"></label><label>Vai trÃ²<select id="userRole"><option>NhÃ¢n viÃªn</option><option>Admin</option></select></label><label class="full"><input id="userActive" type="checkbox" checked> TÃ i khoáº£n Ä‘ang hoáº¡t Ä‘á»™ng</label><button class="btn primary" id="luuUser" type="button">LÆ°u tÃ i khoáº£n</button><button class="btn" id="huyUser" type="button">Táº¡o má»›i</button><p class="hint full">Admin Ä‘Æ°á»£c vÃ o Thiáº¿t láº­p vÃ  chá»‰nh danh má»¥c. NhÃ¢n viÃªn dÃ¹ng cÃ¡c nghiá»‡p vá»¥ Ä‘Æ°á»£c phÃ¢n quyá»n.</p></div><div class="wrap"><table><thead><tr><th>TÃªn Ä‘Äƒng nháº­p</th><th>Há» tÃªn</th><th>Vai trÃ²</th><th>Tráº¡ng thÃ¡i</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+userRowsRestored()+'</tbody></table></div></div>';
  }
  var oldScreen=window.screenThietLap;
  if(typeof oldScreen==='function'){
    window.screenThietLap=function(){
      if(typeof isAdmin==='function'&&!isAdmin())return shell('thietlap','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c vÃ o pháº§n thiáº¿t láº­p.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thay Ä‘á»•i danh má»¥c hoáº·c tÃ i khoáº£n.</div></div>');
      ensureUserData();
      var html=oldScreen.apply(this,arguments);
      if(html.indexOf('TÃ i khoáº£n nhÃ¢n viÃªn / phÃ¢n quyá»n')>=0||html.indexOf('TÃ i khoáº£n nhÃ¢n viÃªn')>=0)return html;
      var panel=userPanelRestored();
      if(html.indexOf('<div class="two">')>=0)return html.replace('<div class="two">',panel+'<div class="two">');
      var needle='</section>';
      var pos=html.lastIndexOf(needle);
      return pos>=0?html.slice(0,pos)+panel+html.slice(pos):html+panel;
    };
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'){
    window.bindForms=function(){
      oldBind.apply(this,arguments);
      ensureUserData();
      if(el('luuUser'))el('luuUser').onclick=function(){if(typeof saveUser==='function')saveUser()};
      if(el('huyUser'))el('huyUser').onclick=function(){if(typeof resetUser==='function')resetUser()};
    };
  }
  ensureUserData();
  if(window.save)save();
})();
;

(function(){
  if(window.__robustUserLogin20260717)return;window.__robustUserLogin20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function ensureLoginUsers(){
    if(!window.state)return [];
    if(!Array.isArray(state.users))state.users=[];
    if(window.auth){
      var authUser=String(auth.user||'admin').trim()||'admin';
      var found=state.users.find(function(u){return norm(u.username)===norm(authUser)});
      if(!found)state.users.unshift({username:authUser,password:auth.pass||'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});
      else{if(!found.password)found.password=auth.pass||'admin123';if(!found.role)found.role='Admin';if(typeof found.active==='undefined')found.active=true}
    }
    if(!state.users.length)state.users.push({username:'admin',password:'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});
    state.users.forEach(function(u){if(!u.name)u.name=u.username;if(!u.role)u.role='NhÃ¢n viÃªn';if(typeof u.active==='undefined')u.active=true});
    return state.users;
  }
  function findUserForLogin(input,pass){
    var q=norm(input);
    var list=ensureLoginUsers();
    var active=list.find(function(u){return u.active!==false&&String(u.password||'')===String(pass||'')&&(norm(u.username)===q||norm(u.name)===q)});
    if(active)return active;
    if(window.auth&&String(auth.pass||'')===String(pass||'')&&(norm(auth.user)===q||q==='admin')){
      return {username:auth.user||'admin',password:auth.pass||pass,name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true};
    }
    return null;
  }
  window.login=function(){
    var userInput=el('loginUser')?el('loginUser').value.trim():'';
    var pass=el('loginPass')?el('loginPass').value:'';
    var found=findUserForLogin(userInput,pass);
    if(found){
      window.currentUser=found;
      isLoggedIn=true;
      sessionStorage.setItem('qlkho-login','1');
      sessionStorage.setItem('qlkho-user',found.username);
      if(el('loginRemember')&&el('loginRemember').checked)localStorage.setItem('qlhc-remember-login',JSON.stringify({user:found.username,pass:pass,remember:true}));
      else{localStorage.removeItem('qlhc-remember-login');if(el('loginPass'))el('loginPass').value=''}
      if(el('loginError'))el('loginError').textContent='';
      if(window.save)save();
      showLogin();
      render();
      if(window.taiDuLieuOnlineSilent)setTimeout(function(){taiDuLieuOnlineSilent()},350);
      return;
    }
    if(el('loginError'))el('loginError').textContent='Sai tÃ i khoáº£n hoáº·c máº­t kháº©u';
  };
  window.bindAuth=function(){
    var savedLogin=null;try{savedLogin=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null')}catch(e){savedLogin=null}
    if(savedLogin&&savedLogin.remember){
      if(el('loginUser'))el('loginUser').value=savedLogin.user||'';
      if(el('loginPass'))el('loginPass').value=savedLogin.pass||'';
      if(el('loginRemember'))el('loginRemember').checked=true;
    }
    if(el('loginRemember'))el('loginRemember').onchange=function(){if(!this.checked)localStorage.removeItem('qlhc-remember-login')};
    if(el('loginBtn'))el('loginBtn').onclick=login;
    if(el('loginPass'))el('loginPass').onkeydown=function(e){if(e.key==='Enter')login()};
  };
  ensureLoginUsers();
  if(window.save)save();
  if(window.bindAuth)bindAuth();
})();
;

(function(){
  if(window.__mobilePwaCacheLoginFix20260717)return;window.__mobilePwaCacheLoginFix20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function cleanOldCaches(){
    var jobs=[];
    if(window.caches&&caches.keys){
      jobs.push(caches.keys().then(function(keys){
        return Promise.all(keys.filter(function(k){return k.indexOf('qlhc-')===0&&k!=='qlhc-'+VERSION}).map(function(k){return caches.delete(k)}));
      }));
    }
    if(navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){
      jobs.push(navigator.serviceWorker.getRegistrations().then(function(regs){
        return Promise.all(regs.map(function(r){
          try{if(r.active&&r.active.scriptURL&&r.active.scriptURL.indexOf(VERSION)>=0)return Promise.resolve()}catch(e){}
          return r.unregister();
        }));
      }));
    }
    return Promise.all(jobs).catch(function(e){console.warn(e)});
  }
  function shouldHardRefresh(){
    try{return localStorage.getItem('qlhc-pwa-cache-version')!==VERSION&&!sessionStorage.getItem('qlhc-pwa-refreshed-'+VERSION)}catch(e){return false}
  }
  if(shouldHardRefresh()){
    try{sessionStorage.setItem('qlhc-pwa-refreshed-'+VERSION,'1')}catch(e){}
    cleanOldCaches().finally(function(){
      try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
      var path=location.pathname||'./index.html';
      if(path.slice(-1)==='/')path+='index.html';
      location.replace(path+'?v='+VERSION);
    });
  }else{
    cleanOldCaches().finally(function(){
      if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
        navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){});
      }
    });
  }
})();
;

(function(){
  if(window.__itemDescriptionVisible20260717)return;window.__itemDescriptionVisible20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function itemInfo(code){var n=norm(code);return allItems().find(function(h){return norm(h[0])===n||norm(h[1])===n})||[code,code,'','','']}
  function itemDesc(codeOrName){var h=itemInfo(codeOrName);return String(h[4]||'').trim()}
  function itemName(code){var h=itemInfo(code);return h[1]||code}
  function itemUnit(code){var h=itemInfo(code);return h[3]||''}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number((state.ton||{})[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function nextCode(group){return typeof nextItemCode==='function'?nextItemCode(group):'HH'+String((state.hang||[]).length+1).padStart(3,'0')}
  function isAdminUser(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function groupOptions(selected){return (state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'" '+(g===selected?'selected':'')+'>'+esc(g)+'</option>'}).join('')}
  function dvtOptions(selected){return (state.dvtList||[]).map(function(g){return '<option value="'+esc(g)+'" '+(g===selected?'selected':'')+'>'+esc(g)+'</option>'}).join('')}
  function bpOptions(){
    var list=[];
    function push(v){v=String(v||'').trim();if(v&&!list.some(function(x){return norm(x)===norm(v)}))list.push(v)}
    (state.kho||[]).forEach(function(k){push(k[1]);push(k[2])});
    (state.receiverDeptList||[]).forEach(function(x){push(x.dept);push(x.name)});
    (state.receiverList||[]).forEach(push);
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function selectedItemCode(id){
    var input=el(id);if(!input)return '';
    var code=input.dataset&&input.dataset.code;if(code&&itemInfo(code)[0])return code;
    var q=norm(input.value);
    var found=allItems().find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q});
    return found?found[0]:'';
  }
  function setSearchValue(id,code){
    var input=el(id);if(!input)return;
    input.dataset.code=code;
    input.value=itemName(code);
  }
  function currentNhapGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function matchNhapItem(h,q){var g=currentNhapGroup();if(g&&h[2]!==g)return false;q=norm(q);if(!q)return true;return [h[0],h[1],h[2],h[3],h[4]].some(function(v){return norm(v).indexOf(q)>=0})}
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    if(input.dataset.code&&norm(input.value)!==norm(itemName(input.dataset.code)))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchNhapItem(h,input.value)}).slice(0,12);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng hÃ³a trong nhÃ³m nÃ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){
      var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÆ°a cÃ³ tá»“n';
      var desc=h[4]?'<span class="item-desc-note">'+esc(h[4])+'</span>':'';
      return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap-desc"><span class="item-suggest-name">'+esc(h[1])+'</span>'+desc+'<span class="item-suggest-meta">'+esc(h[2]||'ChÆ°a phÃ¢n nhÃ³m')+' - Tá»“n '+fmt(totalStock(h[0]))+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'
    }).join('');
    box.classList.add('show');
  }
  function renderXuatSuggestWithDesc(){
    var input=el('hangXuat'),box=el('hangXuatSuggest');if(!input||!box)return;
    if(input.dataset.code&&norm(input.value)!==norm(itemName(input.dataset.code)))input.dataset.code='';
    var q=norm(input.value),html=[];
    allItems().forEach(function(h){
      if(q&&[h[0],h[1],h[2],h[4]].every(function(v){return norm(v).indexOf(q)<0}))return;
      stockWarehouses(h[0]).forEach(function(w){
        var desc=h[4]?'<span class="item-desc-note">'+esc(h[4])+'</span>':'';
        html.push('<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat-desc"><span class="item-suggest-name">'+esc(h[1])+'</span>'+desc+'<span class="item-suggest-meta">Tá»“n '+fmt(w.sl)+' '+esc(h[3]||'')+' - '+esc(w.ten)+'</span></button>');
      });
    });
    box.innerHTML=html.slice(0,14).join('')||'<div class="item-suggest-empty">KhÃ´ng cÃ³ hÃ ng nÃ o cÃ²n tá»“n phÃ¹ há»£p</div>';
    box.classList.add('show');
  }
  window.screenNhap=function(){
    return shell('nhap','Nháº­p kho','Chá»n nhÃ³m hÃ ng vÃ  ghi mÃ´ táº£ Ä‘á»ƒ dá»… nháº­n biáº¿t size, mÃ u, chi tiáº¿t khi cáº§n tra cá»©u.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>Bá»™ pháº­n/kho<input id="boPhanKhoNhap" list="boPhanKhoNhapList" placeholder="VD: Kho VP 77CT / PhÃ²ng HC"><datalist id="boPhanKhoNhapList">'+bpOptions()+'</datalist></label><label>NCC<select id="nccNhap"></select></label><label>NhÃ³m hÃ ng<select id="nhomNhap"><option value="">Táº¥t cáº£ nhÃ³m</option>'+groupOptions('')+'</select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangNhap" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hoáº·c mÃ´ táº£"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="VD: Ão thun CÃ  Mau"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="nhapThuocTinhMoi" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label><p class="hint full">MÃ´ táº£ nÃ y sáº½ Ä‘i theo máº·t hÃ ng vÃ  hiá»‡n trong danh má»¥c, tá»“n kho, nháº­p xuáº¥t, bÃ¡o cÃ¡o.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')
  };
  window.screenHang=function(){
    if(!isAdminUser())return shell('hanghoa','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c sá»­a danh má»¥c hÃ ng hÃ³a.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thÃªm hoáº·c sá»­a hÃ ng hÃ³a.</div></div>');
    var rows=allItems().map(function(h,i){return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn hÃ ng',esc(h[1]))+td('NhÃ³m',esc(h[2]))+td('ÄVT',esc(h[3]))+td('MÃ´ táº£',esc(h[4]||''))+td('Thao tÃ¡c','<button class="btn small" onclick="editHang('+i+')">Sá»­a</button>')+'</tr>'}).join('');
    return shell('hanghoa','Danh má»¥c hÃ ng hÃ³a','Quáº£n lÃ½ tÃªn hÃ ng, nhÃ³m, Ä‘Æ¡n vá»‹ tÃ­nh vÃ  mÃ´ táº£ nhÆ° size, mÃ u, thÃ´ng sá»‘.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch hÃ ng hÃ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>MÃ´ táº£</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin hÃ ng hÃ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="maHang" readonly></label><label>TÃªn hÃ ng<input id="tenHang" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m<select id="nhomHang">'+groupOptions('')+'</select></label><label>ÄVT<select id="dvt">'+dvtOptions('')+'</select></label><label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="thuocTinh" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label><button class="btn primary" id="luuHang">LÆ°u hÃ ng hÃ³a</button><button class="btn" id="huyHang">Táº¡o má»›i</button></div></div></div>')
  };
  window.editHang=function(i){var h=allItems()[i];if(!h)return;el('editHang').value=i;el('maHang').value=h[0];el('tenHang').value=h[1];el('nhomHang').value=h[2];el('dvt').value=h[3];el('thuocTinh').value=h[4]||''}
  window.resetHang=function(){['editHang','tenHang','thuocTinh'].forEach(function(id){if(el(id))el(id).value=''});if(el('maHang'))el('maHang').value=nextCode(el('nhomHang')?el('nhomHang').value:'')}
  window.saveHang=function(){
    var i=el('editHang')?el('editHang').value:'',ma=el('maHang')?el('maHang').value.trim():'',ten=el('tenHang')?el('tenHang').value.trim():'';
    if(!ma)ma=nextCode(el('nhomHang')?el('nhomHang').value:'');
    if(!ten)return alert('Nháº­p tÃªn hÃ ng');
    var row=[ma,ten,el('nhomHang').value,el('dvt').value,(el('thuocTinh')&&el('thuocTinh').value.trim())||''];
    if(i===''){if((state.hang||[]).some(function(h){return hnorm(h)[0]===ma}))row[0]=nextCode(row[2]);state.hang.push(row)}else state.hang[Number(i)]=row;
    save();render();
  };
  window.saveNhap=function(){
    var maHang=selectedItemCode('hangNhap');
    if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){
      var ma=(el('nhapMaHangMoi')&&el('nhapMaHangMoi').value.trim())||nextCode(el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'');
      var ten=el('nhapTenHangMoi')?el('nhapTenHangMoi').value.trim():'';
      if(!ten)return alert('Nháº­p tÃªn hÃ ng má»›i');
      if((state.hang||[]).some(function(h){return hnorm(h)[0]===ma}))ma=nextCode(el('nhapNhomHangMoi').value);
      state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,(el('nhapThuocTinhMoi')&&el('nhapThuocTinhMoi').value.trim())||'']);
      maHang=ma;
    }
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    var sl=Number(el('slNhap').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=el('khoNhap').value+'|'+maHang,bp=(el('boPhanKhoNhap')&&el('boPhanKhoNhap').value.trim())||nameKho(el('khoNhap').value);
    state.ton[key]=(state.ton[key]||0)+sl;
    if(typeof addReceiverName==='function')addReceiverName(bp,'');
    var row=[today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=bp;state.bd.push(row);
    alert('ÄÃ£ lÆ°u phiáº¿u nháº­p');veTongQuanSauLuu();
  };
  function renameDescriptionFields(){
    [['thuocTinh','VD: Size L; mÃ u xanh; cháº¥t cotton'],['nhapThuocTinhMoi','VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n']].forEach(function(pair){
      var input=el(pair[0]);if(!input)return;input.placeholder=pair[1];
      var label=input.closest('label');if(label&&label.firstChild&&label.firstChild.nodeType===3)label.firstChild.nodeValue='MÃ´ táº£ / Size / mÃ u / chi tiáº¿t';
    });
  }
  function enhanceVisibleDescriptions(){
    renameDescriptionFields();
    document.querySelectorAll('.item-suggest-row[data-code]').forEach(function(row){
      if(row.querySelector('.item-desc-note'))return;
      var d=itemDesc(row.getAttribute('data-code'));if(!d)return;
      var name=row.querySelector('.item-suggest-name');if(name)name.insertAdjacentHTML('afterend','<span class="item-desc-note">'+esc(d)+'</span>');
    });
    document.querySelectorAll('.stock-card-row').forEach(function(card){
      if(card.querySelector('.stock-card-desc'))return;
      var text=card.textContent||'',h=allItems().find(function(x){return text.indexOf(x[1])>=0});
      if(h&&h[4]){var name=card.querySelector('.stock-card-item');if(name)name.insertAdjacentHTML('beforeend','<span class="stock-card-desc">'+esc(h[4])+'</span>')}
    });
    document.querySelectorAll('td[data-label="TÃªn hÃ ng"],td[data-label="HÃ ng"]').forEach(function(td){
      if(td.querySelector('.cell-desc-note'))return;
      var d=itemDesc(td.textContent.trim());if(d)td.insertAdjacentHTML('beforeend','<span class="cell-desc-note">'+esc(d)+'</span>');
    });
  }
  if(!document.getElementById('item-description-visible-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='item-description-visible-style-20260718-light-core-16';
    st.textContent='.item-desc-note,.cell-desc-note,.stock-card-desc{display:block;margin-top:3px;color:#517267!important;font-size:12px!important;font-weight:500!important;line-height:1.35!important}.stock-card-desc{font-size:11.8px!important}.item-suggest-row .item-desc-note{color:#456b60!important}.item-suggest-row .item-suggest-meta{margin-top:3px!important}@media(max-width:900px){.item-desc-note,.cell-desc-note,.stock-card-desc{font-size:11.8px!important}}';
    document.head.appendChild(st);
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    renameDescriptionFields();
    if(el('nhomHang'))el('nhomHang').onchange=function(){if(el('editHang')&&el('editHang').value==='')el('maHang').value=nextCode(el('nhomHang').value)};
    if(el('nhapNhomHangMoi'))el('nhapNhomHangMoi').onchange=function(){if(el('nhapMaHangMoi'))el('nhapMaHangMoi').value=nextCode(el('nhapNhomHangMoi').value)};
    if(el('batHangMoi')&&!el('batHangMoi').__descBound){var old=el('batHangMoi').onclick;el('batHangMoi').onclick=function(){if(old)old.apply(this,arguments);setTimeout(function(){if(el('nhapMaHangMoi'))el('nhapMaHangMoi').value=nextCode(el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'');renameDescriptionFields()},0)};el('batHangMoi').__descBound=true}
    if(el('hangNhap')){el('hangNhap').onfocus=renderNhapSuggest;el('hangNhap').oninput=renderNhapSuggest}
    if(el('nhomNhap'))el('nhomNhap').onchange=function(){if(el('hangNhap')){el('hangNhap').value='';el('hangNhap').dataset.code=''}renderNhapSuggest()};
    if(el('hangXuat')){el('hangXuat').onfocus=renderXuatSuggestWithDesc;el('hangXuat').oninput=function(){renderXuatSuggestWithDesc();if(typeof capNhatKhoXuatTheoHang==='function')capNhatKhoXuatTheoHang()}}
    setTimeout(enhanceVisibleDescriptions,20);
  };
  document.addEventListener('click',function(e){
    var row=e.target&&e.target.closest&&e.target.closest('.item-suggest-row[data-kind="nhap-desc"],.item-suggest-row[data-kind="xuat-desc"]');
    if(row){
      var kind=row.getAttribute('data-kind'),code=row.getAttribute('data-code');
      if(kind==='nhap-desc'){setSearchValue('hangNhap',code);if(el('hangNhapSuggest'))el('hangNhapSuggest').classList.remove('show')}
      if(kind==='xuat-desc'){setSearchValue('hangXuat',code);if(el('khoXuat')&&row.getAttribute('data-kho'))el('khoXuat').value=row.getAttribute('data-kho');if(el('hangXuatSuggest'))el('hangXuatSuggest').classList.remove('show');if(typeof capNhatKhoXuatTheoHang==='function')capNhatKhoXuatTheoHang()}
    }
    setTimeout(enhanceVisibleDescriptions,30);
  });
  var oldRender=window.render;
  window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhanceVisibleDescriptions,60);return out};
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itemDetailButton20260717)return;window.__itemDetailButton20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function info(codeOrName){var q=norm(codeOrName);return allItems().find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||[codeOrName,codeOrName,'','','']}
  function desc(codeOrName){return String(info(codeOrName)[4]||'').trim()}
  function itemName(code){return info(code)[1]||code}
  function itemUnit(code){return info(code)[3]||''}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number((state.ton||{})[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function nextCode(group){return typeof nextItemCode==='function'?nextItemCode(group):'HH'+String((state.hang||[]).length+1).padStart(3,'0')}
  function isAdminUser(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function groupOptions(selected){return (state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'" '+(g===selected?'selected':'')+'>'+esc(g)+'</option>'}).join('')}
  function dvtOptions(selected){return (state.dvtList||[]).map(function(g){return '<option value="'+esc(g)+'" '+(g===selected?'selected':'')+'>'+esc(g)+'</option>'}).join('')}
  function bpOptions(){
    var list=[];function push(v){v=String(v||'').trim();if(v&&!list.some(function(x){return norm(x)===norm(v)}))list.push(v)}
    (state.kho||[]).forEach(function(k){push(k[1]);push(k[2])});
    (state.receiverDeptList||[]).forEach(function(x){push(x.dept);push(x.name)});
    (state.receiverList||[]).forEach(push);
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function detailBtn(code){return desc(code)?'<button class="btn small item-detail-btn" type="button" data-item-detail="'+esc(code)+'">Chi tiáº¿t</button>':''}
  function selectedCode(id){
    var input=el(id);if(!input)return '';
    if(input.dataset&&input.dataset.code)return input.dataset.code;
    var found=info(input.value);return found&&found[0]!==input.value?found[0]:'';
  }
  function setSearchValue(id,code){var input=el(id);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  window.showItemDetail=function(code){
    var h=info(code),d=String(h[4]||'').trim();
    var old=document.getElementById('itemDetailModal');if(old)old.remove();
    var box=document.createElement('div');box.id='itemDetailModal';
    box.innerHTML='<div class="item-detail-backdrop" data-close-detail="1"></div><div class="item-detail-card"><div class="item-detail-head"><h2>Chi tiáº¿t hÃ ng hÃ³a</h2><button class="btn small" type="button" data-close-detail="1">ÄÃ³ng</button></div><div class="item-detail-body"><p><b>'+esc(h[1]||code)+'</b></p><p class="hint">MÃ£ hÃ ng: '+esc(h[0]||'')+' | NhÃ³m: '+esc(h[2]||'')+' | ÄVT: '+esc(h[3]||'')+'</p><div class="item-detail-text">'+(d?esc(d):'ChÆ°a cÃ³ mÃ´ táº£.')+'</div></div></div>';
    document.body.appendChild(box);
  };
  function closeDetail(){var old=document.getElementById('itemDetailModal');if(old)old.remove()}
  function currentNhapGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function matchNhap(h,q){var g=currentNhapGroup();if(g&&h[2]!==g)return false;q=norm(q);if(!q)return true;return [h[0],h[1],h[2],h[3],h[4]].some(function(v){return norm(v).indexOf(q)>=0})}
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    if(input.dataset.code&&norm(input.value)!==norm(itemName(input.dataset.code)))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchNhap(h,input.value)}).slice(0,12);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng hÃ³a trong nhÃ³m nÃ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){
      var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÆ°a cÃ³ tá»“n';
      return '<div class="item-suggest-row item-suggest-row-split" data-code="'+esc(h[0])+'" data-kind="nhap-detail"><button class="item-suggest-main" type="button" data-select-item="'+esc(h[0])+'"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">'+esc(h[2]||'ChÆ°a phÃ¢n nhÃ³m')+' - Tá»“n '+fmt(totalStock(h[0]))+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'+detailBtn(h[0])+'</div>'
    }).join('');
    box.classList.add('show');
  }
  function renderXuatSuggest(){
    var input=el('hangXuat'),box=el('hangXuatSuggest');if(!input||!box)return;
    if(input.dataset.code&&norm(input.value)!==norm(itemName(input.dataset.code)))input.dataset.code='';
    var q=norm(input.value),html=[];
    allItems().forEach(function(h){
      if(q&&[h[0],h[1],h[2],h[4]].every(function(v){return norm(v).indexOf(q)<0}))return;
      stockWarehouses(h[0]).forEach(function(w){
        html.push('<div class="item-suggest-row item-suggest-row-split" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat-detail"><button class="item-suggest-main" type="button" data-select-item="'+esc(h[0])+'" data-select-kho="'+esc(w.ma)+'"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">Tá»“n '+fmt(w.sl)+' '+esc(h[3]||'')+' - '+esc(w.ten)+'</span></button>'+detailBtn(h[0])+'</div>');
      });
    });
    box.innerHTML=html.slice(0,14).join('')||'<div class="item-suggest-empty">KhÃ´ng cÃ³ hÃ ng nÃ o cÃ²n tá»“n phÃ¹ há»£p</div>';
    box.classList.add('show');
  }
  window.screenNhap=function(){
    return shell('nhap','Nháº­p kho','Tá»“n váº«n tÃ­nh chung theo mÃ£ hÃ ng; mÃ´ táº£ xem báº±ng nÃºt Chi tiáº¿t khi cáº§n.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(\'chuyen\')">Nháº­n Ä‘iá»u chuyá»ƒn</button></div><div class="body form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>Loáº¡i nháº­p<select id="loaiNhap"></select></label><label>Kho nháº­n<select id="khoNhap"></select></label><label>Bá»™ pháº­n/kho<input id="boPhanKhoNhap" list="boPhanKhoNhapList" placeholder="VD: Kho VP 77CT / PhÃ²ng HC"><datalist id="boPhanKhoNhapList">'+bpOptions()+'</datalist></label><label>NCC<select id="nccNhap"></select></label><label>NhÃ³m hÃ ng<select id="nhomNhap"><option value="">Táº¥t cáº£ nhÃ³m</option>'+groupOptions('')+'</select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangNhap" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hoáº·c mÃ´ táº£"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button><label>Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div><div class="body form"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label><label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="VD: Ão thun CÃ  Mau"></label><label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label><label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label><label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="nhapThuocTinhMoi" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label><p class="hint full">MÃ´ táº£ khÃ´ng tÃ¡ch tá»“n kho. Tá»“n váº«n tÃ­nh chung theo máº·t hÃ ng nÃ y.</p></div></div><button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button></div></div>')
  };
  window.screenHang=function(){
    if(!isAdminUser())return shell('hanghoa','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c sá»­a danh má»¥c hÃ ng hÃ³a.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thÃªm hoáº·c sá»­a hÃ ng hÃ³a.</div></div>');
    var rows=allItems().map(function(h,i){return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn hÃ ng',esc(h[1]))+td('NhÃ³m',esc(h[2]))+td('ÄVT',esc(h[3]))+td('Chi tiáº¿t',detailBtn(h[0])||'<span class="hint">KhÃ´ng cÃ³</span>')+td('Thao tÃ¡c','<button class="btn small" onclick="editHang('+i+')">Sá»­a</button>')+'</tr>'}).join('');
    return shell('hanghoa','Danh má»¥c hÃ ng hÃ³a','Tá»“n tÃ­nh chung theo mÃ£ hÃ ng; mÃ´ táº£ xem báº±ng nÃºt Chi tiáº¿t.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch hÃ ng hÃ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>Chi tiáº¿t</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin hÃ ng hÃ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="maHang" readonly></label><label>TÃªn hÃ ng<input id="tenHang" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m<select id="nhomHang">'+groupOptions('')+'</select></label><label>ÄVT<select id="dvt">'+dvtOptions('')+'</select></label><label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="thuocTinh" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label><button class="btn primary" id="luuHang">LÆ°u hÃ ng hÃ³a</button><button class="btn" id="huyHang">Táº¡o má»›i</button></div></div></div>')
  };
  function removeOldInlineDesc(){
    document.querySelectorAll('.item-desc-note,.cell-desc-note,.stock-card-desc').forEach(function(x){x.remove()});
  }
  function addDetailButtons(){
    removeOldInlineDesc();
    document.querySelectorAll('.stock-card-row').forEach(function(card){
      if(card.querySelector('.item-detail-btn'))return;
      var text=card.textContent||'',h=allItems().find(function(x){return text.indexOf(x[1])>=0});
      if(h&&desc(h[0])){var top=card.querySelector('.stock-card-top')||card;top.insertAdjacentHTML('beforeend',detailBtn(h[0]))}
    });
    document.querySelectorAll('td[data-label="TÃªn hÃ ng"],td[data-label="HÃ ng"]').forEach(function(td){
      if(td.querySelector('.item-detail-btn'))return;
      var h=allItems().find(function(x){return norm(td.textContent).indexOf(norm(x[1]))>=0||norm(td.textContent).indexOf(norm(x[0]))>=0});
      if(h&&desc(h[0]))td.insertAdjacentHTML('beforeend',detailBtn(h[0]));
    });
  }
  function renameFields(){
    [['thuocTinh','VD: Size L; mÃ u xanh; cháº¥t cotton'],['nhapThuocTinhMoi','VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n']].forEach(function(pair){
      var input=el(pair[0]);if(!input)return;input.placeholder=pair[1];
      var label=input.closest('label');if(label&&label.firstChild&&label.firstChild.nodeType===3)label.firstChild.nodeValue='MÃ´ táº£ / Size / mÃ u / chi tiáº¿t';
    });
  }
  if(!document.getElementById('item-detail-button-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='item-detail-button-style-20260718-light-core-16';
    st.textContent='.item-desc-note,.cell-desc-note,.stock-card-desc{display:none!important}.item-detail-btn{margin-left:7px!important;white-space:nowrap!important;background:#eef8f4!important;color:#08775a!important;border-color:#bfe2d5!important}.item-suggest-row-split{display:flex!important;align-items:center!important;gap:8px!important;padding:0!important}.item-suggest-main{flex:1;border:0;background:transparent;text-align:left;padding:10px 12px;color:var(--ink);cursor:pointer}.item-suggest-row-split .item-detail-btn{margin-right:8px!important}.stock-card-top .item-detail-btn{align-self:center!important;margin-left:auto!important}.item-detail-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.28);z-index:9998}.item-detail-card{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9999;background:#fff;border-radius:10px;box-shadow:0 18px 50px rgba(0,0,0,.25);width:min(460px,calc(100vw - 28px));overflow:hidden}.item-detail-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid var(--line);background:#f5fbf8}.item-detail-head h2{margin:0!important}.item-detail-body{padding:14px}.item-detail-text{margin-top:10px;padding:12px;border:1px solid #cfe5dc;border-radius:8px;background:#f8fffb;line-height:1.5;white-space:pre-wrap}@media(max-width:900px){.item-suggest-row-split{align-items:stretch!important}.item-suggest-main{padding:11px 10px}.item-suggest-row-split .item-detail-btn{margin:7px 8px 7px 0!important;min-width:70px!important}.item-detail-btn{font-size:11.5px!important}}';
    document.head.appendChild(st);
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);renameFields();
    if(el('nhomHang'))el('nhomHang').onchange=function(){if(el('editHang')&&el('editHang').value==='')el('maHang').value=nextCode(el('nhomHang').value)};
    if(el('nhapNhomHangMoi'))el('nhapNhomHangMoi').onchange=function(){if(el('nhapMaHangMoi'))el('nhapMaHangMoi').value=nextCode(el('nhapNhomHangMoi').value)};
    if(el('hangNhap')){el('hangNhap').onfocus=renderNhapSuggest;el('hangNhap').oninput=renderNhapSuggest}
    if(el('nhomNhap'))el('nhomNhap').onchange=function(){if(el('hangNhap')){el('hangNhap').value='';el('hangNhap').dataset.code=''}renderNhapSuggest()};
    if(el('hangXuat')){el('hangXuat').onfocus=renderXuatSuggest;el('hangXuat').oninput=function(){renderXuatSuggest();if(typeof capNhatKhoXuatTheoHang==='function')capNhatKhoXuatTheoHang()}}
    setTimeout(addDetailButtons,30);
  };
  document.addEventListener('click',function(e){
    var detail=e.target&&e.target.closest&&e.target.closest('[data-item-detail]');if(detail){e.preventDefault();e.stopPropagation();showItemDetail(detail.getAttribute('data-item-detail'));return}
    if(e.target&&e.target.closest&&e.target.closest('[data-close-detail]')){closeDetail();return}
    var select=e.target&&e.target.closest&&e.target.closest('[data-select-item]');
    if(select){
      var code=select.getAttribute('data-select-item'),kho=select.getAttribute('data-select-kho');
      if(el('hangNhap')&&select.closest('#hangNhapSuggest')){setSearchValue('hangNhap',code);el('hangNhapSuggest').classList.remove('show')}
      if(el('hangXuat')&&select.closest('#hangXuatSuggest')){setSearchValue('hangXuat',code);if(kho&&el('khoXuat'))el('khoXuat').value=kho;el('hangXuatSuggest').classList.remove('show');if(typeof capNhatKhoXuatTheoHang==='function')capNhatKhoXuatTheoHang()}
    }
    setTimeout(addDetailButtons,40);
  });
  var oldRender=window.render;
  window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(addDetailButtons,80);return out};
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__visualRingReport20260717)return;window.__visualRingReport20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function sum(arr,fn){return (arr||[]).reduce(function(a,x){return a+Number(fn(x)||0)},0)}
  function totalTon(){return Object.values(state.ton||{}).reduce(function(a,b){return a+Number(b||0)},0)}
  function uniqueGroups(){var m={};(state.hang||[]).forEach(function(raw){var h=normalizeHang(raw);m[h[2]||'ChÆ°a phÃ¢n nhÃ³m']=true});return Object.keys(m).length}
  function uniqueNccUsed(){var m={};(state.bd||[]).forEach(function(x){if(Number(x[5]||0)>0)m[x[7]||'ChÆ°a chá»n NCC']=true});return Object.keys(m).length}
  function visualData(){
    return [
      {no:1,label:'Nháº­p kho',value:sum(state.bd,function(x){return x[5]}),unit:'SL nháº­p',mode:'xnk',cls:'pink'},
      {no:2,label:'Xuáº¥t kho',value:sum(state.bd,function(x){return x[6]}),unit:'SL xuáº¥t',mode:'xnk',cls:'red'},
      {no:3,label:'Tá»“n kho',value:totalTon(),unit:'Tá»•ng tá»“n',mode:'tk',cls:'lime'},
      {no:4,label:'HÃ ng hÃ³a',value:(state.hang||[]).length,unit:'Máº·t hÃ ng',mode:'hh',cls:'cyan'},
      {no:5,label:'NhÃ³m hÃ ng',value:uniqueGroups(),unit:'NhÃ³m',mode:'nhomhang',cls:'mint'},
      {no:6,label:'NhÃ  cung cáº¥p',value:uniqueNccUsed()||((state.nccList||[]).length),unit:'NCC',mode:'ncc',cls:'violet'},
      {no:7,label:'Thiáº¿t bá»‹ IT',value:(state.thietBiIT||[]).length,unit:'Thiáº¿t bá»‹',mode:'it',cls:'yellow'}
    ];
  }
  function activateTab(mode){
    document.querySelectorAll('#baocao .tab').forEach(function(b){b.classList.remove('active')});
    var btn=[].slice.call(document.querySelectorAll('#baocao .tab')).find(function(b){return (b.getAttribute('onclick')||'').indexOf("'"+mode+"'")>=0});
    if(btn)btn.classList.add('active');
  }
  window.openVisualReportTarget=function(mode){activateTab(mode);showReport(mode)}
  function visualHtml(){
    var rows=visualData();
    var totalSlips=(state.bd||[]).length;
    var segs=rows.map(function(r,i){
      var deg=(360/rows.length)*i-90;
      return '<button class="visual-seg visual-seg-'+(i+1)+' '+r.cls+'" style="--a:'+deg+'deg" type="button" onclick="openVisualReportTarget(\''+r.mode+'\')"><strong>'+r.no+'</strong><span>'+esc(r.label)+'</span><small>'+fmt(r.value)+' '+esc(r.unit)+'</small></button>'
    }).join('');
    var legend=rows.map(function(r){return '<button class="visual-mini '+r.cls+'" type="button" onclick="openVisualReportTarget(\''+r.mode+'\')"><span>'+r.no+'. '+esc(r.label)+'</span><strong>'+fmt(r.value)+'</strong><small>'+esc(r.unit)+'</small></button>'}).join('');
    return '<div class="visual-report-wrap"><div class="visual-hero"><div class="visual-ring-box"><div class="visual-donut"></div><div class="visual-center"><span>BÃO CÃO</span><strong>QUáº¢N LÃ HC</strong><small>'+fmt(totalSlips)+' phiáº¿u phÃ¡t sinh</small></div>'+segs+'</div><div class="visual-summary"><h3>Tá»•ng quan nhanh</h3><p>Cháº¡m vÃ o tá»«ng máº£ng Ä‘á»ƒ má»Ÿ bÃ¡o cÃ¡o chi tiáº¿t tÆ°Æ¡ng á»©ng.</p><div class="visual-summary-grid"><div><span>Tá»•ng tá»“n</span><strong>'+fmt(totalTon())+'</strong></div><div><span>Máº·t hÃ ng</span><strong>'+fmt((state.hang||[]).length)+'</strong></div><div><span>Kho</span><strong>'+fmt((state.kho||[]).length)+'</strong></div><div><span>NhÃ³m</span><strong>'+fmt(uniqueGroups())+'</strong></div></div></div></div><div class="visual-mini-grid">'+legend+'</div></div>';
  }
  var oldScreen=window.screenBaoCao;
  window.screenBaoCao=function(){
    var html=oldScreen.apply(this,arguments);
    html=html.replace('class="btn tab active" onclick="showReport(\'xnk\',this)"','class="btn tab" onclick="showReport(\'xnk\',this)"');
    if(html.indexOf("showReport('visual'")<0){
      html=html.replace('<div class="tabs">','<div class="tabs"><button class="btn tab active" onclick="showReport(\'visual\',this)">Trá»±c quan</button>');
    }
    return html;
  };
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    var screen=document.getElementById('baocao');
    if(mode!=='visual'){
      if(screen)screen.classList.remove('report-visual-active');
      return oldShow.apply(this,arguments);
    }
    if(btn){document.querySelectorAll('#baocao .tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}else activateTab('visual');
    if(screen)screen.classList.add('report-visual-active');
    if(!el('rp'))return;
    el('rpTitle').textContent='BÃ¡o cÃ¡o trá»±c quan';
    el('rp').innerHTML=visualHtml();
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    if(window.current==='baocao')setTimeout(function(){showReport('visual')},0);
  };
  if(!document.getElementById('visual-ring-report-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='visual-ring-report-style-20260718-light-core-16';
    st.textContent='.report-visual-active .report-search-panel{display:none!important}.visual-report-wrap{padding:12px;background:linear-gradient(135deg,#f7fffb,#eef8f4);border-radius:8px}.visual-hero{display:grid;grid-template-columns:minmax(360px,520px) 1fr;gap:18px;align-items:center}.visual-ring-box{position:relative;width:min(520px,100%);aspect-ratio:1;margin:6px auto}.visual-donut{position:absolute;inset:10%;border-radius:50%;background:conic-gradient(#ff3b9d 0 51.4deg,#d60958 51.4deg 102.8deg,#e9ff6f 102.8deg 154.2deg,#21c4df 154.2deg 205.6deg,#27e0c2 205.6deg 257deg,#8a05e6 257deg 308.4deg,#ffd95b 308.4deg 360deg);box-shadow:0 18px 32px rgba(18,68,51,.16),inset 0 0 0 2px rgba(255,255,255,.6)}.visual-donut:after{content:"";position:absolute;inset:24%;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 2px #e4efe9}.visual-center{position:absolute;inset:34%;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.08);z-index:2}.visual-center span{font-size:12px;font-weight:800;color:#0a7f60}.visual-center strong{font-size:24px;line-height:1.08;color:#102b48}.visual-center small{font-size:11px;color:#63756f;margin-top:5px}.visual-seg{position:absolute;left:50%;top:50%;width:104px;min-height:76px;transform:rotate(var(--a)) translate(0,-215px) rotate(calc(-1 * var(--a)));margin-left:-52px;margin-top:-38px;border:0;border-radius:14px;color:#fff;text-align:center;padding:8px 6px;box-shadow:0 10px 22px rgba(0,0,0,.16);cursor:pointer}.visual-seg strong{display:block;font-size:20px;line-height:1}.visual-seg span{display:block;font-size:12px;font-weight:800;margin-top:3px}.visual-seg small{display:block;font-size:10.5px;margin-top:3px;opacity:.92}.visual-seg.pink,.visual-mini.pink{background:#ff3b9d}.visual-seg.red,.visual-mini.red{background:#d60958}.visual-seg.lime,.visual-mini.lime{background:#dff95c;color:#173022}.visual-seg.cyan,.visual-mini.cyan{background:#21c4df;color:#07313a}.visual-seg.mint,.visual-mini.mint{background:#27d9bc;color:#063b35}.visual-seg.violet,.visual-mini.violet{background:#8708e7}.visual-seg.yellow,.visual-mini.yellow{background:#ffd85a;color:#4a3510}.visual-summary{background:#fff;border:1px solid #cfe4da;border-radius:12px;padding:16px;box-shadow:0 10px 24px rgba(8,71,49,.08)}.visual-summary h3{margin:0 0 6px;font-size:18px}.visual-summary p{margin:0 0 12px;color:#61736d}.visual-summary-grid{display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:8px}.visual-summary-grid div{background:#f5fbf8;border:1px solid #d6eadf;border-radius:10px;padding:10px}.visual-summary-grid span{display:block;color:#60756d;font-size:12px;font-weight:700}.visual-summary-grid strong{display:block;font-size:24px;color:#007a5b;margin-top:3px}.visual-mini-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin-top:12px}.visual-mini{border:0;border-radius:10px;padding:10px;text-align:left;color:#fff;box-shadow:0 8px 18px rgba(8,71,49,.12);cursor:pointer}.visual-mini span,.visual-mini small{display:block;font-weight:700}.visual-mini strong{display:block;font-size:22px;margin:4px 0}@media(max-width:900px){.visual-report-wrap{padding:8px}.visual-hero{display:block}.visual-ring-box{width:min(340px,100%);margin:0 auto 10px}.visual-seg{display:none}.visual-center strong{font-size:18px}.visual-center small{font-size:10px}.visual-summary{padding:12px}.visual-summary-grid{grid-template-columns:repeat(2,1fr)}.visual-mini-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.visual-mini{padding:9px}.visual-mini strong{font-size:19px}}';
    document.head.appendChild(st);
  }
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__pwaOnlineUserLogin20260717)return;window.__pwaOnlineUserLogin20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/\s+/g,' ').trim()}
  function ensureUsers(){
    if(!window.state)return [];
    if(!Array.isArray(state.users))state.users=[];
    if(window.auth){
      var authName=String(auth.user||'admin').trim()||'admin';
      var admin=state.users.find(function(u){return norm(u.username)===norm(authName)});
      if(!admin)state.users.unshift({username:authName,password:auth.pass||'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});
      else{if(!admin.password)admin.password=auth.pass||'admin123';if(!admin.role)admin.role='Admin';if(typeof admin.active==='undefined')admin.active=true}
    }
    if(!state.users.length)state.users.push({username:'admin',password:'admin123',name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true});
    state.users.forEach(function(u){if(!u.name)u.name=u.username;if(!u.role)u.role='NhÃ¢n viÃªn';if(typeof u.active==='undefined')u.active=true});
    return state.users;
  }
  function findUser(user,pass){
    var q=norm(user),p=String(pass||'');
    var found=ensureUsers().find(function(u){return u.active!==false&&String(u.password||'')===p&&(norm(u.username)===q||norm(u.name)===q)});
    if(found)return found;
    if(window.auth&&String(auth.pass||'')===p&&(norm(auth.user)===q||q==='admin'))return {username:auth.user||'admin',password:p,name:'Quáº£n trá»‹ viÃªn',role:'Admin',active:true};
    return null;
  }
  async function pullOnlineForLogin(){
    try{
      if(!window.cloudRequest||!window.SUPABASE_CONFIG)return false;
      var rows=await cloudRequest('GET');
      if(rows&&rows[0]&&rows[0].data){
        state=migrateState(rows[0].data);
        ensureUsers();
        if(window.save)save();
        return true;
      }
    }catch(e){console.warn(e)}
    return false;
  }
  function finishLogin(found,pass,remember){
    window.currentUser=found;
    isLoggedIn=true;
    sessionStorage.setItem('qlkho-login','1');
    sessionStorage.setItem('qlkho-user',found.username);
    if(remember)localStorage.setItem('qlhc-remember-login',JSON.stringify({user:found.username,pass:pass,remember:true}));
    else{localStorage.removeItem('qlhc-remember-login');if(el('loginPass'))el('loginPass').value=''}
    if(el('loginError'))el('loginError').textContent='';
    if(window.save)save();
    showLogin();
    render();
  }
  window.login=async function(){
    var user=el('loginUser')?el('loginUser').value.trim():'';
    var pass=el('loginPass')?el('loginPass').value:'';
    var remember=!!(el('loginRemember')&&el('loginRemember').checked);
    var found=findUser(user,pass);
    if(!found){
      if(el('loginError'))el('loginError').textContent='Äang táº£i tÃ i khoáº£n online...';
      await pullOnlineForLogin();
      found=findUser(user,pass);
    }
    if(found){finishLogin(found,pass,remember);return}
    if(el('loginError'))el('loginError').textContent='Sai tÃ i khoáº£n hoáº·c máº­t kháº©u. Náº¿u vá»«a táº¡o tÃ i khoáº£n trÃªn mÃ¡y tÃ­nh, hÃ£y báº¥m Äáº©y dá»¯ liá»‡u online rá»“i thá»­ láº¡i.';
  };
  window.bindAuth=function(){
    var saved=null;try{saved=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null')}catch(e){saved=null}
    if(saved&&saved.remember){
      if(el('loginUser'))el('loginUser').value=saved.user||'';
      if(el('loginPass'))el('loginPass').value=saved.pass||'';
      if(el('loginRemember'))el('loginRemember').checked=true;
    }
    if(el('loginRemember'))el('loginRemember').onchange=function(){if(!this.checked)localStorage.removeItem('qlhc-remember-login')};
    if(el('loginBtn'))el('loginBtn').onclick=function(){login()};
    if(el('loginUser'))el('loginUser').onkeydown=function(e){if(e.key==='Enter')login()};
    if(el('loginPass'))el('loginPass').onkeydown=function(e){if(e.key==='Enter')login()};
  };
  ensureUsers();
  if(window.bindAuth)bindAuth();
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__groupFieldReport20260717)return;window.__groupFieldReport20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function hinfo(code){try{return normalizeHang(item(code))}catch(e){return [code,code,'','','']}}
  function groupOf(code){var h=hinfo(code);return h[2]||'ChÆ°a phÃ¢n nhÃ³m'}
  function groupCell(code){return '<span class="group-link-chip">'+esc(groupOf(code))+'</span>'}
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():false}catch(e){return false}}
  window.screenTongQuan=function(){
    var rows=stockRows(),total=Object.values(state.ton||{}).reduce(function(a,b){return a+Number(b||0)},0);
    var bd=(state.bd||[]).slice().reverse().slice(0,10).map(function(x){
      return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃ ng',item(x[3])[1])+td('NhÃ³m',groupCell(x[3]))+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+'</tr>';
    }).join('');
    var top=rows.slice().sort(function(a,b){return b[3]-a[3]}).slice(0,5).map(function(r){return '<p>'+esc(r[2][1])+' - '+esc(nameKho(r[0]))+': <b>'+fmt(r[3])+' '+esc(r[2][3])+'</b></p>'}).join('')||'<p class="hint">ChÆ°a cÃ³ tá»“n kho.</p>';
    return shell('tongquan','Tá»•ng quan kho','Theo dÃµi nhanh tá»“n kho vÃ  biáº¿n Ä‘á»™ng má»›i nháº¥t theo nhÃ³m hÃ ng.','<div class="stats"><div class="card dash-card dash-green"><span>Tá»•ng kho</span><strong>'+state.kho.length+'</strong></div><div class="card dash-card dash-blue"><span>Máº·t hÃ ng</span><strong>'+state.hang.length+'</strong></div><div class="card dash-card dash-amber"><span>Tá»•ng tá»“n</span><strong>'+fmt(total)+'</strong></div><div class="card dash-card dash-rose"><span>Phiáº¿u phÃ¡t sinh</span><strong>'+state.bd.length+'</strong></div></div><div class="grid"><div class="panel panel-accent"><div class="head"><h2>Biáº¿n Ä‘á»™ng gáº§n Ä‘Ã¢y</h2><span class="tag">10 dÃ²ng má»›i nháº¥t</span></div><div class="wrap"><table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>HÃ ng</th><th>NhÃ³m</th><th class="num">Nháº­p</th><th class="num">Xuáº¥t</th></tr></thead><tbody>'+bd+'</tbody></table></div></div><div class="panel panel-blue"><div class="head"><h2>Tá»“n nhiá»u nháº¥t</h2></div><div class="body">'+top+'</div></div></div>');
  };
  function slipRowsByGroup(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];
      if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">Sá»­a</button>');
      if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃ³a</button>');
      return '<tr>'+td('NgÃ y',x[0])+td('Sá»‘ phiáº¿u',x[1])+td('Kho',nameKho(x[2]))+td('Bá»™ pháº­n/kho',x[12]||'')+td('NhÃ³m',groupCell(x[3]))+td('HÃ ng',item(x[3])[1])+td('NCC/NgÆ°á»i nháº­n',x[7]||'')+td('Nháº­p',x[5]||'', 'num')+td('Xuáº¥t',x[6]||'', 'num')+(buttons.length?td('Thao tÃ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'')+'</tr>';
    }).join('');
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk'){
      var out=oldShow.apply(this,arguments);
      return out;
    }
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    var screen=document.getElementById('baocao');if(screen)screen.classList.remove('report-visual-active');
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiáº¿t XNK theo nhÃ³m';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃ y</th><th>Sá»‘ phiáº¿u</th><th>Kho</th><th>Bá»™ pháº­n/kho</th><th>NhÃ³m</th><th>HÃ ng</th><th>NCC/NgÆ°á»i nháº­n</th><th>Nháº­p</th><th>Xuáº¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsByGroup()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  function hideNhapTypeField(){
    var s=document.getElementById('nhap');if(!s)return;
    var loai=el('loaiNhap');if(!loai)return;
    var label=loai.closest('label');if(label){label.classList.add('type-merged-hidden');label.style.display='none'}
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    hideNhapTypeField();
  };
  if(!document.getElementById('group-field-report-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='group-field-report-style-20260718-light-core-16';
    st.textContent='.group-link-chip{display:inline-flex;align-items:center;max-width:220px;border-radius:999px;background:#e6f7ef;color:#08745a;border:1px solid #bfe6d7;padding:3px 8px;font-weight:700;font-size:12px;line-height:1.2}.type-merged-hidden{display:none!important}@media(max-width:900px){.group-link-chip{font-size:11.5px;max-width:170px}}';
    document.head.appendChild(st);
  }
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__overviewStockSearchMenuHide20260717)return;window.__overviewStockSearchMenuHide20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hinfo(code){try{return normalizeHang(item(code))}catch(e){return [code,code,'','','']}}
  function stockByItem(){
    var map={};
    (typeof stockRows==='function'?stockRows():[]).forEach(function(r){
      var qty=Number(r[3]||0);if(qty<=0)return;
      var code=r[1],h=r[2]||hinfo(code);
      if(!map[code])map[code]={code:code,name:h[1]||code,group:h[2]||'',unit:h[3]||'',total:0,khos:[],search:''};
      map[code].total+=qty;
      map[code].khos.push({name:nameKho(r[0]),qty:qty});
    });
    return Object.keys(map).map(function(k){
      var x=map[k];
      x.search=norm([x.code,x.name,x.group,x.unit].concat(x.khos.map(function(w){return w.name})).join(' '));
      return x;
    }).sort(function(a,b){return b.total-a.total||a.name.localeCompare(b.name)});
  }
  function overviewStockSearchHtml(){
    return '<div class="panel overview-stock-search-panel">'+
      '<div class="head"><h2>TÃ¬m nhanh tá»“n kho</h2><button class="btn small" id="clearOverviewStockSearch" type="button">XÃ³a tÃ¬m</button></div>'+
      '<div class="body">'+
        '<label class="overview-stock-search-field">Search táº¥t cáº£<input id="overviewStockSearch" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hÃ ng hoáº·c kho..."></label>'+
        '<div id="overviewStockResults" class="overview-stock-results" aria-live="polite"></div>'+
      '</div>'+
    '</div>';
  }
  function renderOverviewStockResults(){
    var input=document.getElementById('overviewStockSearch'),box=document.getElementById('overviewStockResults');if(!input||!box)return;
    var q=norm(input.value),rows=stockByItem().filter(function(x){return q&&x.search.indexOf(q)>=0}).slice(0,12);
    if(!q){box.innerHTML='<div class="overview-stock-empty">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem nhanh tá»•ng tá»“n vÃ  kho Ä‘ang cÃ³ hÃ ng.</div>';return}
    if(!rows.length){box.innerHTML='<div class="overview-stock-empty">KhÃ´ng tÃ¬m tháº¥y hÃ ng cÃ²n tá»“n.</div>';return}
    box.innerHTML=rows.map(function(x){
      var kho=x.khos.map(function(w){return esc(w.name)+': <b>'+fmt(w.qty)+' '+esc(x.unit)+'</b>'}).join(' <span>|</span> ');
      return '<button class="overview-stock-result" type="button" data-key="'+esc(x.name)+'">'+
        '<span class="overview-stock-name">'+esc(x.name)+'</span>'+
        '<span class="overview-stock-total">'+fmt(x.total)+'</span>'+
        '<span class="overview-stock-kho">'+kho+'</span>'+
      '</button>';
    }).join('');
  }
  var oldScreenTongQuan=window.screenTongQuan;
  if(typeof oldScreenTongQuan==='function'){
    window.screenTongQuan=function(){
      var html=oldScreenTongQuan.apply(this,arguments);
      if(html.indexOf('overview-stock-search-panel')>=0)return html;
      var marker='<div class="stats">';
      return html.indexOf(marker)>=0?html.replace(marker,overviewStockSearchHtml()+marker):html.replace('</section>',overviewStockSearchHtml()+'</section>');
    };
  }
  function visibleMenu(list){return (list||[]).filter(function(n){return n&&n[0]!=='ton'})}
  window.buildNav=function(){
    var side=document.getElementById('sideNav'),mob=document.getElementById('mobileNav');
    var baseNav=visibleMenu(window.nav||nav),baseMobile=visibleMenu(window.mobile||mobile);
    var navItems=(typeof isAdmin==='function'&&isAdmin())?baseNav:baseNav.filter(function(n){return ['tongquan','nhap','xuat','thietbi','chuyen','baocao'].indexOf(n[0])>=0});
    var mobileItems=(typeof isAdmin==='function'&&isAdmin())?baseMobile:baseMobile.filter(function(n){return ['tongquan','nhap','xuat','thietbi','chuyen','baocao'].indexOf(n[0])>=0});
    if(side)side.innerHTML=navItems.map(function(n){return '<button class="nav '+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');
    if(mob)mob.innerHTML=mobileItems.map(function(n){return '<button class="'+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    var input=document.getElementById('overviewStockSearch'),clear=document.getElementById('clearOverviewStockSearch');
    if(input&&!input.__overviewStockBound){
      input.oninput=renderOverviewStockResults;
      input.__overviewStockBound=true;
      renderOverviewStockResults();
    }
    if(clear&&!clear.__overviewStockBound){
      clear.onclick=function(){var i=document.getElementById('overviewStockSearch');if(i){i.value='';renderOverviewStockResults();i.focus()}};
      clear.__overviewStockBound=true;
    }
  };
  document.addEventListener('click',function(e){
    var row=e.target.closest&&e.target.closest('.overview-stock-result');
    if(row){
      var input=document.getElementById('overviewStockSearch');
      if(input){input.value=row.getAttribute('data-key')||'';renderOverviewStockResults()}
    }
  });
  if(!document.getElementById('overview-stock-search-menu-hide-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='overview-stock-search-menu-hide-style-20260718-light-core-16';
    st.textContent='.overview-stock-search-panel{margin:0 0 10px!important;border-color:#8ccdb7!important;overflow:visible!important}.overview-stock-search-panel .head{background:linear-gradient(90deg,#0c8f69,#20b78a)!important;color:#fff!important;border-bottom:0!important;padding:8px 10px!important}.overview-stock-search-panel .head h2{color:#fff!important}.overview-stock-search-panel .head .btn{background:#fff!important;color:#087253!important;border-color:#fff!important;font-weight:700!important}.overview-stock-search-panel .body{background:#07966f!important;padding:8px 10px 10px!important}.overview-stock-search-field{display:block!important;color:#fff!important;font-size:12.5px!important;font-weight:650!important}.overview-stock-search-field input{width:100%!important;margin-top:5px!important;min-height:40px!important;border:2px solid #ffd74f!important;border-radius:9px!important;background:#fffde8!important;box-shadow:0 0 0 3px rgba(255,215,79,.22)!important;font-size:14px!important}.overview-stock-results{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:7px;margin-top:8px}.overview-stock-result{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 8px;text-align:left;border:1px solid #b9dfd1;background:#fff;border-radius:8px;padding:8px 10px;cursor:pointer;color:#10352a}.overview-stock-result:hover{background:#f1fff8;border-color:#07966f}.overview-stock-name{font-weight:700;min-width:0}.overview-stock-total{grid-column:2;grid-row:1;background:#07966f;color:#fff;border-radius:999px;padding:4px 8px;font-weight:700;white-space:nowrap}.overview-stock-kho{grid-column:1/-1;color:#087253;font-size:12.5px;line-height:1.35}.overview-stock-kho span{color:#9ab3aa;margin:0 4px}.overview-stock-empty{background:#fff;border:1px solid #b9dfd1;border-radius:8px;padding:9px 10px;color:#5b7067;font-weight:600}@media(max-width:900px){.overview-stock-search-panel{margin-bottom:8px!important}.overview-stock-search-panel .head{padding:8px!important}.overview-stock-search-panel .body{padding:8px!important}.overview-stock-results{grid-template-columns:1fr}.overview-stock-search-field input{font-size:16px!important;min-height:44px!important}.overview-stock-result{grid-template-columns:1fr;gap:5px}.overview-stock-total{grid-column:1;grid-row:auto;justify-self:start}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__overviewSearchCleanGroupText20260717)return;window.__overviewSearchCleanGroupText20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('overview-search-clean-group-text-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='overview-search-clean-group-text-style-20260718-light-core-16';
    st.textContent='.overview-stock-results{margin-top:0!important}.overview-stock-results:has(.overview-stock-result){margin-top:8px!important}.overview-stock-empty{display:none!important}.group-link-chip{display:inline!important;align-items:initial!important;max-width:none!important;border-radius:0!important;background:transparent!important;color:inherit!important;border:0!important;padding:0!important;font-weight:400!important;font-size:inherit!important;line-height:inherit!important}.panel-accent table .group-link-chip,.report-table .group-link-chip{white-space:normal!important}@media(max-width:900px){.group-link-chip{font-size:inherit!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__nhapFormCompactNoDept20260717)return;window.__nhapFormCompactNoDept20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function groupSelectOptions(){
    return '<option value="">Táº¥t cáº£ nhÃ³m</option>'+(state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'">'+esc(g)+'</option>'}).join('');
  }
  window.screenNhap=function(){
    return shell('nhap','Nháº­p kho','Tá»“n váº«n tÃ­nh chung theo mÃ£ hÃ ng; mÃ´ táº£ xem báº±ng nÃºt Chi tiáº¿t khi cáº§n.',
      '<div class="panel nhap-form-panel">'+
        '<div class="head"><h2>Táº¡o phiáº¿u nháº­p</h2><button class="btn blue" onclick="go(&quot;chuyen&quot;)">Nháº­n Ä‘iá»u chuyá»ƒn</button></div>'+
        '<div class="body form nhap-form-grid">'+
          '<label class="nhap-so">Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label>'+
          '<label class="nhap-loai">Loáº¡i nháº­p<select id="loaiNhap"></select></label>'+
          '<label class="nhap-kho">Kho nháº­n<select id="khoNhap"></select></label>'+
          '<label class="nhap-ncc">NCC<select id="nccNhap"></select></label>'+
          '<label class="nhap-group">NhÃ³m hÃ ng<select id="nhomNhap">'+groupSelectOptions()+'</select></label>'+
          '<label class="nhap-qty">Sá»‘ lÆ°á»£ng<input id="slNhap" type="number" value="1"></label>'+
          '<label class="full item-search-field nhap-item">HÃ ng hÃ³a<input id="hangNhap" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hoáº·c mÃ´ táº£"><div id="hangNhapSuggest" class="item-suggest-list"></div></label>'+
          '<button class="btn blue" id="batHangMoi" type="button">+ Táº¡o hÃ ng hÃ³a má»›i</button>'+
          '<div class="full panel nhap-new-item-panel" id="hangMoiBox" style="display:none;box-shadow:none">'+
            '<div class="head"><h2>HÃ ng hÃ³a má»›i</h2></div>'+
            '<div class="body form">'+
              '<label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="nhapMaHangMoi" readonly></label>'+
              '<label>TÃªn hÃ ng má»›i<input id="nhapTenHangMoi" placeholder="VD: Ão thun CÃ  Mau"></label>'+
              '<label>NhÃ³m hÃ ng<select id="nhapNhomHangMoi"></select></label>'+
              '<label>ÄÆ¡n vá»‹ tÃ­nh<select id="nhapDvtMoi"></select></label>'+
              '<label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="nhapThuocTinhMoi" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label>'+
              '<p class="hint full">MÃ´ táº£ khÃ´ng tÃ¡ch tá»“n kho. Tá»“n váº«n tÃ­nh chung theo máº·t hÃ ng nÃ y.</p>'+
            '</div>'+
          '</div>'+
          '<button class="btn primary" id="luuNhap">LÆ°u phiáº¿u nháº­p</button>'+
        '</div>'+
      '</div>');
  };
  if(!document.getElementById('nhap-form-compact-no-dept-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='nhap-form-compact-no-dept-style-20260718-light-core-16';
    st.textContent='#nhap .nhap-form-panel .head{align-items:center!important}#nhap .nhap-form-grid{display:grid!important;grid-template-columns:180px minmax(220px,1fr) minmax(220px,1fr)!important;gap:8px 10px!important;align-items:end!important}#nhap .nhap-loai{display:none!important}#nhap .nhap-so{grid-column:1!important}#nhap .nhap-kho{grid-column:2!important}#nhap .nhap-ncc{grid-column:3!important}#nhap .nhap-group{grid-column:1/3!important}#nhap .nhap-qty{grid-column:3!important}#nhap .nhap-item{grid-column:1/-1!important}#nhap .nhap-form-grid label{min-width:0!important}#nhap .nhap-form-grid input,#nhap .nhap-form-grid select{width:100%!important}#nhap #batHangMoi,#nhap #luuNhap{grid-column:1/-1!important}#nhap .nhap-new-item-panel{grid-column:1/-1!important;border-radius:8px!important;margin:0!important}#nhap .nhap-new-item-panel .body.form{grid-template-columns:repeat(2,minmax(160px,1fr))!important}@media(max-width:900px){#nhap .nhap-form-grid{grid-template-columns:1fr 1fr!important;gap:7px!important}#nhap .nhap-so{grid-column:1!important}#nhap .nhap-kho{grid-column:2!important}#nhap .nhap-ncc{grid-column:1!important}#nhap .nhap-group{grid-column:2!important}#nhap .nhap-qty,#nhap .nhap-item{grid-column:1/-1!important}#nhap .nhap-form-panel .head{padding:8px 10px!important}#nhap .nhap-form-panel .head .btn{min-height:34px!important;font-size:12px!important}#nhap .nhap-new-item-panel .body.form{grid-template-columns:1fr!important}}@media(max-width:520px){#nhap .nhap-form-grid{grid-template-columns:1fr!important}#nhap .nhap-so,#nhap .nhap-kho,#nhap .nhap-ncc,#nhap .nhap-group,#nhap .nhap-qty,#nhap .nhap-item{grid-column:1!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__reportHideOverviewTab20260717)return;window.__reportHideOverviewTab20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function stripOverviewTab(html){
    return String(html||'').replace(/<button[^>]*onclick="showReport\('tq',this\)"[^>]*>\s*Tá»•ng quan\s*<\/button>/g,'');
  }
  var oldScreen=window.screenBaoCao;
  if(typeof oldScreen==='function'){
    window.screenBaoCao=function(){
      return stripOverviewTab(oldScreen.apply(this,arguments));
    };
  }
  function removeOverviewTab(){
    document.querySelectorAll('#baocao .tabs .tab').forEach(function(btn){
      var action=btn.getAttribute('onclick')||'';
      if(action.indexOf("showReport('tq'")>=0||btn.textContent.trim()==='Tá»•ng quan')btn.remove();
    });
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    removeOverviewTab();
  };
  if(!document.getElementById('report-hide-overview-tab-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='report-hide-overview-tab-style-20260718-light-core-16';
    st.textContent="#baocao .tabs .tab[onclick*=\"showReport('tq'\"]{display:none!important}";
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__mobileNhapDetailFit20260717)return;window.__mobileNhapDetailFit20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('mobile-nhap-detail-fit-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='mobile-nhap-detail-fit-style-20260718-light-core-16';
    st.textContent='@media(max-width:900px){#nhap .nhap-form-panel .head{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;gap:8px!important;align-items:center!important}#nhap .nhap-form-panel .head h2{white-space:nowrap!important;line-height:1.15!important}#nhap .nhap-form-panel .head .btn{width:auto!important;min-width:124px!important;max-width:150px!important;padding:0 10px!important;justify-self:end!important;white-space:nowrap!important}#nhap .item-suggest-list .item-suggest-row-split{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;align-items:center!important;gap:6px!important;padding:6px 8px!important}#nhap .item-suggest-list .item-suggest-main{width:100%!important;min-width:0!important;padding:8px 6px!important;line-height:1.3!important}#nhap .item-suggest-list .item-suggest-name{font-size:13px!important;line-height:1.25!important;white-space:normal!important;overflow-wrap:anywhere!important}#nhap .item-suggest-list .item-suggest-meta{font-size:11.5px!important;line-height:1.3!important;white-space:normal!important;overflow-wrap:anywhere!important}#nhap .item-suggest-list .item-detail-btn{grid-column:2!important;grid-row:1!important;width:64px!important;min-width:64px!important;max-width:64px!important;height:32px!important;min-height:32px!important;max-height:32px!important;padding:0 6px!important;margin:0!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;border-radius:7px!important;font-size:11px!important;line-height:1.1!important;align-self:center!important;justify-self:end!important;white-space:nowrap!important}#nhap .item-suggest-list .item-detail-btn.small{width:64px!important}}@media(max-width:420px){#nhap .nhap-form-panel .head .btn{min-width:118px!important;font-size:11.5px!important}#nhap .item-suggest-list .item-detail-btn{width:58px!important;min-width:58px!important;max-width:58px!important;font-size:10.5px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__crossDeviceAutoSync20260717)return;window.__crossDeviceAutoSync20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var applyingRemote=false;
  var initialPullDone=false;
  var dirty=false;
  var pushTimer=null;
  var pollTimer=null;
  function nowIso(){return new Date().toISOString()}
  function stampValue(row){
    var raw=(row&&(row.updated_at||(row.data&&row.data.__updatedAt)))||'';
    var t=Date.parse(raw);
    return isNaN(t)?0:t;
  }
  function lastRemoteStamp(){
    var t=Number(localStorage.getItem('qlhc-last-remote-stamp')||0);
    return isNaN(t)?0:t;
  }
  function setLastRemoteStamp(t){try{localStorage.setItem('qlhc-last-remote-stamp',String(t||Date.now()))}catch(e){}}
  function storeLocal(){
    try{localStorage.setItem('qlkho-state',JSON.stringify(state))}catch(e){}
  }
  function notice(msg){
    try{
      if(typeof showSoftNotice==='function'){showSoftNotice(msg);return}
      var old=document.getElementById('autoSyncNotice');if(old)old.remove();
      var box=document.createElement('div');box.id='autoSyncNotice';box.textContent=msg;
      box.style.cssText='position:fixed;right:12px;bottom:76px;z-index:9999;background:#10251d;color:#fff;padding:9px 12px;border-radius:8px;font-size:13px;box-shadow:0 8px 20px rgba(0,0,0,.18)';
      document.body.appendChild(box);setTimeout(function(){if(box&&box.parentNode)box.remove()},1800);
    }catch(e){}
  }
  async function fetchRemote(){
    if(!window.cloudRequest||!window.SUPABASE_CONFIG)return null;
    var rows=await cloudRequest('GET');
    return rows&&rows[0]?rows[0]:null;
  }
  function applyRemote(row,showNotice){
    if(!row||!row.data)return false;
    var rStamp=stampValue(row)||Date.now();
    applyingRemote=true;
    try{
      state=migrateState(row.data);
      storeLocal();
      setLastRemoteStamp(rStamp);
      dirty=false;
      initialPullDone=true;
    }finally{
      applyingRemote=false;
    }
    if(typeof render==='function')render();
    if(showNotice)notice('ÄÃ£ cáº­p nháº­t dá»¯ liá»‡u online');
    return true;
  }
  async function pullNow(showNotice,force){
    try{
      var row=await fetchRemote();
      if(!row||!row.data){initialPullDone=true;return false}
      var rStamp=stampValue(row)||Date.now();
      var recentLocal=dirty&&Date.now()-Number(localStorage.getItem('qlhc-last-local-change')||0)<4500;
      if(!force&&recentLocal)return false;
      if(force||rStamp>lastRemoteStamp()+500)return applyRemote(row,showNotice);
      initialPullDone=true;
      return false;
    }catch(e){
      console.warn(e);
      initialPullDone=true;
      if(showNotice)notice('ChÆ°a táº£i Ä‘Æ°á»£c dá»¯ liá»‡u online');
      return false;
    }
  }
  async function pushNow(showNotice,force){
    try{
      if(!window.cloudRequest||!window.SUPABASE_CONFIG||!window.state)return false;
      if(!force&&(!initialPullDone||!dirty))return false;
      state.__updatedAt=nowIso();
      storeLocal();
      var stamp=Date.now();
      await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:state,updated_at:new Date(stamp).toISOString()});
      setLastRemoteStamp(stamp);
      dirty=false;
      if(showNotice)notice('ÄÃ£ Ä‘á»“ng bá»™ online');
      return true;
    }catch(e){
      console.warn(e);
      if(showNotice)notice('ChÆ°a Ä‘á»“ng bá»™ Ä‘Æ°á»£c online');
      return false;
    }
  }
  function markDirty(){
    if(applyingRemote)return;
    dirty=true;
    try{localStorage.setItem('qlhc-last-local-change',String(Date.now()))}catch(e){}
    schedulePush();
  }
  function schedulePush(){
    clearTimeout(pushTimer);
    pushTimer=setTimeout(function(){pushNow(false,false)},900);
  }
  var oldSave=window.save;
  if(typeof oldSave==='function'){
    window.save=function(){
      oldSave.apply(this,arguments);
      if(!applyingRemote&&initialPullDone)markDirty();
    };
  }
  ['saveNhap','saveXuat','saveEditSlip','deleteSlip','saveHang','saveKho','saveNcc','saveLoai','saveNhom','saveDvt','saveThietBi'].forEach(function(name){
    var old=window[name];
    if(typeof old!=='function')return;
    window[name]=function(){
      var before='';
      try{before=JSON.stringify(state)}catch(e){}
      var out=old.apply(this,arguments);
      setTimeout(function(){
        var after='';
        try{after=JSON.stringify(state)}catch(e){}
        if(before!==after){dirty=true;try{localStorage.setItem('qlhc-last-local-change',String(Date.now()))}catch(e){};pushNow(false,true)}
      },350);
      return out;
    };
  });
  window.dayDuLieuOnline=function(){return pushNow(true,false)};
  window.dayDuLieuOnlineSilent=function(){return pushNow(false,false)};
  window.taiDuLieuOnline=function(){return pullNow(true,true)};
  window.taiDuLieuOnlineSilent=function(){return pullNow(false,true)};
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'){
    window.bindForms=function(){
      oldBind.apply(this,arguments);
      ['dayOnline','onlinePushBtn'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pushNow(true,true)}});
      ['taiOnline','onlinePullBtn'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pullNow(true,true)}});
    };
  }
  function startPolling(){
    clearInterval(pollTimer);
    pollTimer=setInterval(function(){if(document.visibilityState!=='hidden')pullNow(false,false)},12000);
  }
  window.addEventListener('focus',function(){pullNow(false,false)});
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')pullNow(false,false)});
  setTimeout(function(){pullNow(false,true).finally(startPolling)},900);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__overviewHideRecent20260717)return;window.__overviewHideRecent20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('overview-hide-recent-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='overview-hide-recent-style-20260718-light-core-16';
    st.textContent='#tongquan .grid>.panel-accent{display:none!important}#tongquan .grid{grid-template-columns:1fr!important}#tongquan .grid>.panel-blue{width:100%!important}#tongquan .grid>.panel-blue .body{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))!important;gap:8px!important}#tongquan .grid>.panel-blue .body p{margin:0!important;padding:8px 10px!important;border:1px solid #d3e7dd!important;border-radius:8px!important;background:#fbfffd!important}@media(max-width:900px){#tongquan .grid>.panel-blue .body{grid-template-columns:1fr!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__suggestionSoftFont20260717)return;window.__suggestionSoftFont20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('suggestion-soft-font-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='suggestion-soft-font-style-20260718-light-core-16';
    st.textContent='.item-suggest-list,.item-suggest-list *{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important;letter-spacing:0!important}.item-suggest-row,.item-suggest-main{font-weight:400!important;color:#16352b!important}.item-suggest-name,.ton-suggest-title,.overview-stock-name{font-size:13px!important;font-weight:550!important;line-height:1.3!important;color:#12372c!important}.item-suggest-meta,.ton-suggest-meta,.overview-stock-kho{font-size:12px!important;font-weight:450!important;line-height:1.35!important;color:#087253!important}.item-suggest-row{padding:8px 10px!important}.item-suggest-main{padding:8px 10px!important}.item-suggest-empty,.ton-suggest-empty{font-size:12.5px!important;font-weight:400!important;color:#62766d!important}.item-detail-btn{font-weight:500!important}@media(max-width:900px){.item-suggest-name,.ton-suggest-title,.overview-stock-name{font-size:12.8px!important;font-weight:520!important}.item-suggest-meta,.ton-suggest-meta,.overview-stock-kho{font-size:11.5px!important;font-weight:430!important}.item-suggest-row{padding:8px 9px!important}.item-suggest-main{padding:8px 7px!important}.item-suggest-list .item-detail-btn{font-size:10.5px!important;font-weight:500!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__emptyInputPlaceholders20260717)return;window.__emptyInputPlaceholders20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function hideBox(id){var box=byId(id);if(box){box.classList.remove('show');box.innerHTML=''}}
  function dispatchInput(input){
    try{input.dispatchEvent(new Event('input',{bubbles:true}))}catch(e){}
  }
  function blankField(id,placeholder,boxId,clearCode){
    var input=byId(id);if(!input)return;
    input.value='';
    if(placeholder)input.placeholder=placeholder;
    if(clearCode&&input.dataset)input.dataset.code='';
    if(boxId)hideBox(boxId);
    dispatchInput(input);
  }
  function quietFocus(id,boxId){
    var input=byId(id);if(!input||input.__quietEmptyFocus20260717)return;
    var oldFocus=input.onfocus;
    input.onfocus=function(ev){
      if(!String(input.value||'').trim()){hideBox(boxId);return}
      if(typeof oldFocus==='function')return oldFocus.call(input,ev);
    };
    input.__quietEmptyFocus20260717=true;
  }
  function prepareBlankInputs(){
    blankField('hangNhap','GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hoáº·c mÃ´ táº£','hangNhapSuggest',true);
    blankField('hangXuat','GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m hÃ ng cÃ²n tá»“n','hangXuatSuggest',true);
    blankField('nguoiNhanXuat','GÃµ tÃªn ngÆ°á»i nháº­n','',false);
    blankField('boPhanKhoXuat','Tá»± Ä‘iá»n theo ngÆ°á»i nháº­n hoáº·c gÃµ bá»™ pháº­n/kho','',false);
    blankField('overviewStockSearch','GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hÃ ng hoáº·c kho...','',false);
    blankField('timTon','GÃµ tÃªn hÃ ng Ä‘á»ƒ xem tá»•ng tá»“n vÃ  kho Ä‘ang cÃ³ hÃ ng...','tonSuggestList',false);
    blankField('reportSearch','TÃ¬m ngÃ y, sá»‘ phiáº¿u, kho, hÃ ng, NCC/ngÆ°á»i nháº­n...','',false);
    quietFocus('hangNhap','hangNhapSuggest');
    quietFocus('hangXuat','hangXuatSuggest');
    if(typeof capNhatKhoXuatTheoHang==='function'&&byId('hangXuat'))capNhatKhoXuatTheoHang();
    if(byId('hangXuat')&&!String(byId('hangXuat').value||'').trim()&&byId('goiYKhoXuat'))byId('goiYKhoXuat').textContent='GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.';
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'){
    window.bindForms=function(){
      oldBind.apply(this,arguments);
      setTimeout(prepareBlankInputs,0);
      setTimeout(prepareBlankInputs,60);
    };
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'){
    window.render=function(){
      var out=oldRender.apply(this,arguments);
      setTimeout(prepareBlankInputs,0);
      setTimeout(prepareBlankInputs,80);
      return out;
    };
  }
  if(!document.getElementById('empty-input-placeholders-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='empty-input-placeholders-style-20260718-light-core-16';
    st.textContent='input::placeholder{font-weight:400!important;color:#6b7d75!important}#hangNhap,#hangXuat,#nguoiNhanXuat,#boPhanKhoXuat,#overviewStockSearch,#timTon,#reportSearch{font-weight:430!important}';
    document.head.appendChild(st);
  }
  setTimeout(prepareBlankInputs,0);
  setTimeout(prepareBlankInputs,100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__mobileNavCorrect20260717)return;window.__mobileNavCorrect20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var ICONS={tongquan:'TQ',ton:'TK',nhap:'+',xuat:'âˆ’',thietbi:'IT',chuyen:'â†”',baocao:'BC',hanghoa:'HH',thietlap:'âš™'};
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function visibleMenu(list){return (list||[]).filter(function(n){return n&&n[0]!=='ton'})}
  window.buildNav=function(){
    var side=document.getElementById('sideNav'),mob=document.getElementById('mobileNav');
    var baseNav=visibleMenu(window.nav||nav),baseMobile=visibleMenu(window.mobile||mobile);
    var staffAllowed=['tongquan','nhap','xuat','thietbi','chuyen','baocao'];
    var admin=(typeof isAdmin==='function'&&isAdmin());
    var navItems=admin?baseNav:baseNav.filter(function(n){return staffAllowed.indexOf(n[0])>=0});
    var mobileItems=admin?baseMobile:baseMobile.filter(function(n){return staffAllowed.indexOf(n[0])>=0});
    if(side)side.innerHTML=navItems.map(function(n){return '<button class="nav '+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+esc(n[1])+'</button>'}).join('');
    if(mob)mob.innerHTML=mobileItems.map(function(n){return '<button class="mobile-nav-btn '+(n[0]===current?'active':'')+'" data-nav="'+esc(n[0])+'" data-icon="'+esc(ICONS[n[0]]||'')+'" aria-label="'+esc(n[1])+'" onclick="go(\''+n[0]+'\')"><span>'+esc(n[1])+'</span></button>'}).join('');
  };
  if(!document.getElementById('mobile-nav-correct-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='mobile-nav-correct-style-20260718-light-core-16';
    st.textContent='@media(max-width:900px){main{padding-bottom:calc(96px + env(safe-area-inset-bottom))!important}.mobile-bar{display:flex!important;align-items:center!important;overflow-x:auto!important;overflow-y:hidden!important;gap:8px!important;padding:8px 10px calc(8px + env(safe-area-inset-bottom))!important;background:linear-gradient(180deg,#13b88b 0%,#07845f 100%)!important;border-top:1px solid rgba(255,255,255,.22)!important;box-shadow:0 -12px 28px rgba(4,84,60,.28),inset 0 1px 0 rgba(255,255,255,.18)!important;scroll-snap-type:x proximity!important;-webkit-overflow-scrolling:touch!important}.mobile-bar::-webkit-scrollbar{display:none!important}.mobile-bar button,.mobile-bar .mobile-nav-btn{position:relative!important;display:grid!important;grid-template-rows:24px auto!important;place-items:center!important;gap:3px!important;flex:0 0 84px!important;width:84px!important;min-width:84px!important;min-height:58px!important;padding:7px 5px!important;border-radius:14px!important;border:1px solid rgba(255,255,255,.20)!important;background:linear-gradient(180deg,rgba(255,255,255,.20),rgba(255,255,255,.08))!important;color:#f7fffb!important;font-size:12.2px!important;font-weight:650!important;line-height:1.05!important;text-align:center!important;text-shadow:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 7px 16px rgba(4,70,51,.18)!important;scroll-snap-align:center!important;transition:transform .12s ease,box-shadow .12s ease,background .12s ease!important}.mobile-bar button::before,.mobile-bar .mobile-nav-btn::before{content:attr(data-icon)!important;display:flex!important;align-items:center!important;justify-content:center!important;width:32px!important;height:24px!important;margin:0!important;border-radius:10px!important;background:rgba(255,255,255,.18)!important;color:inherit!important;font-size:11px!important;font-weight:800!important;line-height:1!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.18)!important}.mobile-bar button span,.mobile-bar .mobile-nav-btn span{display:block!important;max-width:100%!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.mobile-bar button.active,.mobile-bar .mobile-nav-btn.active{background:linear-gradient(180deg,#ffffff,#eefbf5)!important;color:#087253!important;border-color:#fff!important;transform:none!important;box-shadow:0 10px 22px rgba(3,68,49,.24),inset 0 1px 0 rgba(255,255,255,.86)!important;font-weight:750!important}.mobile-bar button.active::before,.mobile-bar .mobile-nav-btn.active::before{background:#dff6eb!important;color:#087253!important}.mobile-bar button.active::after,.mobile-bar .mobile-nav-btn.active::after{content:""!important;position:absolute!important;left:50%!important;bottom:6px!important;transform:translateX(-50%)!important;width:24px!important;height:3px!important;border-radius:999px!important;background:#0f8d68!important;margin:0!important}.mobile-bar button:active,.mobile-bar .mobile-nav-btn:active{transform:translateY(1px)!important}@media(max-width:420px){.mobile-bar{gap:7px!important;padding-left:8px!important;padding-right:8px!important}.mobile-bar button,.mobile-bar .mobile-nav-btn{flex-basis:78px!important;width:78px!important;min-width:78px!important;font-size:11.5px!important}}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itemNameDetailLink20260717)return;window.__itemNameDetailLink20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function clean(v){return String(v==null?'':v).replace(/\s+/g,' ').trim()}
  function norm(v){return clean(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d')}
  function items(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(function(h){return typeof normalizeHang==='function'?normalizeHang(h):[h[0],h[1],h[2],h[3],h[4]||'']})}
  function codeFromText(text){
    var t=clean(text).replace(/\s+Chi tiáº¿t\s*$/i,'');
    var nt=norm(t),list=items(),found=null;
    list.some(function(h){if(norm(h[0])===nt||norm(h[1])===nt||norm(h[0]+' - '+h[1])===nt){found=h[0];return true}return false});
    if(found)return found;
    list.some(function(h){if(nt.indexOf(norm(h[1]))>=0||nt.indexOf(norm(h[0]+' - '+h[1]))>=0){found=h[0];return true}return false});
    return found||'';
  }
  function codeFromClickTarget(target){
    var row=target.closest&&target.closest('[data-code]');
    if(row&&row.getAttribute('data-code'))return row.getAttribute('data-code');
    var select=target.closest&&target.closest('[data-select-item]');
    if(select&&select.getAttribute('data-select-item'))return select.getAttribute('data-select-item');
    var stock=target.closest&&target.closest('.overview-stock-result,.ton-suggest-row');
    if(stock&&stock.getAttribute('data-value'))return codeFromText(stock.getAttribute('data-value'));
    if(stock&&stock.getAttribute('data-key'))return codeFromText(stock.getAttribute('data-key'));
    return codeFromText(target.textContent||'');
  }
  function openDetail(code){
    if(!code)return false;
    if(typeof showItemDetail==='function'){showItemDetail(code);return true}
    var h=items().find(function(x){return x[0]===code});
    if(h)alert((h[1]||code)+'\nMÃ£ hÃ ng: '+h[0]+'\nNhÃ³m: '+(h[2]||'')+'\nÄVT: '+(h[3]||'')+'\nChi tiáº¿t: '+(h[4]||'ChÆ°a cÃ³ mÃ´ táº£.'));
    return !!h;
  }
  document.addEventListener('click',function(e){
    if(e.target.closest&&e.target.closest('[data-close-detail],.item-detail-card'))return;
    var target=e.target.closest&&e.target.closest('.item-suggest-name,.overview-stock-name,.ton-suggest-title,.stock-card-item,td[data-label="HÃ ng"],td[data-label="TÃªn hÃ ng"]');
    if(!target)return;
    var code=codeFromClickTarget(target);
    if(!code)return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation)e.stopImmediatePropagation();
    openDetail(code);
  },true);
  if(!document.getElementById('item-name-detail-link-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='item-name-detail-link-style-20260718-light-core-16';
    st.textContent='.item-suggest-name,.overview-stock-name,.ton-suggest-title,.stock-card-item,td[data-label="HÃ ng"],td[data-label="TÃªn hÃ ng"]{cursor:pointer!important;text-decoration:underline!important;text-decoration-thickness:1px!important;text-underline-offset:3px!important;text-decoration-color:rgba(7,132,95,.45)!important}.item-suggest-name:hover,.overview-stock-name:hover,.ton-suggest-title:hover,.stock-card-item:hover,td[data-label="HÃ ng"]:hover,td[data-label="TÃªn hÃ ng"]:hover{color:#006b50!important;text-decoration-color:#006b50!important}.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{content:"  Chi tiáº¿t";font-size:11px!important;font-weight:500!important;color:#087253!important;text-decoration:none!important;opacity:.85}@media(max-width:900px){.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{font-size:10.5px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideInlineDetailLabel20260717)return;window.__hideInlineDetailLabel20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('hide-inline-detail-label-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='hide-inline-detail-label-style-20260718-light-core-16';
    st.textContent='.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{content:none!important;display:none!important}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__inlineClearSearchButton20260717)return;window.__inlineClearSearchButton20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function move(inputId,clearId){
    var input=byId(inputId),clear=byId(clearId);if(!input||!clear)return;
    var box=input.closest&&input.closest('label');if(!box)box=input.parentNode;if(!box)return;
    box.classList.add('inline-clear-search-field');
    clear.classList.add('inline-clear-search-btn');
    clear.setAttribute('type','button');
    clear.setAttribute('aria-label','Xoa tim');
    if(clear.parentNode!==box)box.appendChild(clear);
  }
  function apply(){
    move('overviewStockSearch','clearOverviewStockSearch');
    move('timTon','xoaTimTon');
    move('reportSearch','clearReportSearch');
  }
  if(!document.getElementById('inline-clear-search-button-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='inline-clear-search-button-style-20260718-light-core-16';
    st.textContent='.inline-clear-search-field{position:relative!important;display:block!important;width:100%!important}.inline-clear-search-field input{padding-right:92px!important;width:100%!important;box-sizing:border-box!important}.inline-clear-search-btn{position:absolute!important;right:8px!important;bottom:6px!important;top:auto!important;left:auto!important;width:auto!important;min-width:64px!important;min-height:28px!important;height:28px!important;padding:3px 10px!important;border-radius:7px!important;background:#fff!important;color:#087253!important;border:1px solid rgba(255,255,255,.85)!important;box-shadow:0 3px 9px rgba(8,71,49,.12)!important;font-size:12px!important;font-weight:700!important;line-height:1!important;z-index:4!important}.inline-clear-search-btn:hover{background:#ecfff7!important;border-color:#b9e4d3!important;color:#006b50!important}.report-search-panel.compact-search-panel .head .inline-clear-search-btn,.ton-search-panel-strong.compact-search-panel .head .inline-clear-search-btn,#ton .search-panel.compact-search-panel .head .inline-clear-search-btn,.overview-stock-search-panel .head .inline-clear-search-btn{grid-column:auto!important;grid-row:auto!important;margin:0!important;justify-self:auto!important}.overview-stock-search-field input,#timTon,#reportSearch{padding-right:92px!important}@media(max-width:900px){.inline-clear-search-field input{padding-right:84px!important}.inline-clear-search-btn{right:7px!important;bottom:7px!important;min-width:58px!important;height:30px!important;min-height:30px!important;padding:3px 8px!important;font-size:11.5px!important}.overview-stock-search-field input,#timTon,#reportSearch{padding-right:84px!important}}';
    document.head.appendChild(st);
  }
  document.addEventListener('input',function(){setTimeout(apply,0)},true);
  document.addEventListener('click',function(){setTimeout(apply,30)},true);
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__inlineClearSearchButton20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,0);return out};
    window.render.__inlineClearSearchButton20260717=true;
  }
  var oldShow=window.showReport;
  if(typeof oldShow==='function'&&!oldShow.__inlineClearSearchButton20260717){
    window.showReport=function(){var out=oldShow.apply(this,arguments);setTimeout(apply,0);return out};
    window.showReport.__inlineClearSearchButton20260717=true;
  }
  setTimeout(apply,80);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideSuggestDetailButton20260717)return;window.__hideSuggestDetailButton20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('hide-suggest-detail-button-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='hide-suggest-detail-button-style-20260718-light-core-16';
    st.textContent='.item-suggest-list .item-detail-btn{display:none!important}.item-suggest-list .item-suggest-row-split{display:block!important}.item-suggest-list .item-suggest-main{width:100%!important;display:block!important}.item-suggest-list .item-suggest-name{display:inline!important}@media(max-width:900px){#nhap .item-suggest-list .item-suggest-row-split,#xuat .item-suggest-list .item-suggest-row-split{display:block!important;grid-template-columns:1fr!important;padding:0!important}#nhap .item-suggest-list .item-suggest-main,#xuat .item-suggest-list .item-suggest-main{padding:10px 12px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itemPhotoDescription20260717)return;window.__itemPhotoDescription20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function itemInfo(codeOrName){var q=norm(codeOrName);return allItems().find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||[codeOrName,codeOrName,'','','']}
  function itemPhoto(code){return state&&state.itemImages?state.itemImages[code]||'':''}
  function ensureImages(){if(!state.itemImages||typeof state.itemImages!=='object'||Array.isArray(state.itemImages))state.itemImages={};return state.itemImages}
  function preview(data,name){
    var box=document.getElementById('nhapItemPhotoPreview');if(!box)return;
    if(!data){box.innerHTML='';box.classList.remove('show');return}
    box.innerHTML='<img src="'+data+'" alt="áº¢nh hÃ ng hÃ³a"><span>'+(name?esc(name):'ÄÃ£ chá»n áº£nh')+'</span><button class="btn small" type="button" id="clearNhapItemPhoto">Bá» áº£nh</button>';
    box.classList.add('show');
    var clear=document.getElementById('clearNhapItemPhoto');
    if(clear)clear.onclick=function(){window.__pendingNhapItemImageData='';window.__pendingNhapItemImageName='';preview('','')};
  }
  function compressImage(file){
    return new Promise(function(resolve,reject){
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('Chá»n Ä‘Ãºng file áº£nh'));
      var reader=new FileReader();
      reader.onload=function(){
        var img=new Image();
        img.onload=function(){
          var max=900,w=img.width,h=img.height,ratio=Math.min(1,max/Math.max(w,h));
          var canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(w*ratio));canvas.height=Math.max(1,Math.round(h*ratio));
          var ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
          resolve(canvas.toDataURL('image/jpeg',0.72));
        };
        img.onerror=function(){reject(new Error('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c áº£nh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c áº£nh'))};
      reader.readAsDataURL(file);
    });
  }
  function enhanceNhapPhotoField(){
    var input=document.getElementById('nhapThuocTinhMoi');if(!input)return;
    var label=input.closest&&input.closest('label');if(!label||label.classList.contains('item-photo-desc-field'))return;
    label.classList.add('item-photo-desc-field');
    input.insertAdjacentHTML('afterend','<button class="item-photo-button" id="nhapItemPhotoBtn" type="button">áº¢nh</button><input id="nhapItemPhotoInput" type="file" accept="image/*" style="display:none"><div id="nhapItemPhotoPreview" class="item-photo-preview"></div>');
    var btn=document.getElementById('nhapItemPhotoBtn'),file=document.getElementById('nhapItemPhotoInput');
    if(btn&&file)btn.onclick=function(){file.click()};
    if(file)file.onchange=function(){
      var f=file.files&&file.files[0];if(!f)return;
      btn.textContent='Äang xá»­ lÃ½...';
      compressImage(f).then(function(data){
        window.__pendingNhapItemImageData=data;
        window.__pendingNhapItemImageName=f.name||'áº¢nh hÃ ng hÃ³a';
        btn.textContent='áº¢nh';
        preview(data,window.__pendingNhapItemImageName);
      }).catch(function(e){btn.textContent='áº¢nh';alert(e.message||'KhÃ´ng chÃ¨n Ä‘Æ°á»£c áº£nh')});
    };
    preview(window.__pendingNhapItemImageData||'',window.__pendingNhapItemImageName||'');
  }
  var oldSaveNhap=window.saveNhap;
  if(typeof oldSaveNhap==='function'&&!oldSaveNhap.__itemPhotoDescription20260717){
    window.saveNhap=function(){
      var photo=window.__pendingNhapItemImageData||'',photoName=window.__pendingNhapItemImageName||'';
      var before=(state.bd||[]).length;
      var out=oldSaveNhap.apply(this,arguments);
      if(photo&&(state.bd||[]).length>before){
        var row=state.bd[state.bd.length-1],code=row&&row[3];
        if(code){ensureImages()[code]=photo;state.itemImageNames=state.itemImageNames||{};state.itemImageNames[code]=photoName;try{if(typeof touchState==='function')touchState()}catch(e){};if(window.save)save();try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}}
        window.__pendingNhapItemImageData='';window.__pendingNhapItemImageName='';
      }
      return out;
    };
    window.saveNhap.__itemPhotoDescription20260717=true;
  }
  window.showItemDetail=function(code){
    var h=itemInfo(code),d=String(h[4]||'').trim(),photo=itemPhoto(h[0]),old=document.getElementById('itemDetailModal');if(old)old.remove();
    var photoHtml=photo?'<button class="item-detail-photo-chip" type="button" data-item-photo-open="1">áº¢nh</button><div class="item-detail-photo-wrap"><img src="'+photo+'" alt="áº¢nh '+esc(h[1]||'hÃ ng hÃ³a')+'" data-item-photo-open="1"></div>':'';
    var box=document.createElement('div');box.id='itemDetailModal';
    box.innerHTML='<div class="item-detail-backdrop" data-close-detail="1"></div><div class="item-detail-card item-detail-card-photo"><div class="item-detail-head"><h2>Chi tiáº¿t hÃ ng hÃ³a</h2><button class="btn small" type="button" data-close-detail="1">ÄÃ³ng</button></div><div class="item-detail-body"><p><b>'+esc(h[1]||code)+'</b></p><p class="hint">MÃ£ hÃ ng: '+esc(h[0]||'')+' | NhÃ³m: '+esc(h[2]||'')+' | ÄVT: '+esc(h[3]||'')+'</p><div class="item-detail-text item-detail-desc-box">'+photoHtml+'<div>'+(d?esc(d):'ChÆ°a cÃ³ mÃ´ táº£.')+'</div></div></div></div>';
    document.body.appendChild(box);
  };
  document.addEventListener('click',function(e){
    var img=e.target&&e.target.closest&&e.target.closest('[data-item-photo-open]');if(!img)return;
    var src=(document.querySelector('#itemDetailModal .item-detail-photo-wrap img')||{}).src;if(!src)return;
    var old=document.getElementById('itemPhotoZoom');if(old)old.remove();
    var z=document.createElement('div');z.id='itemPhotoZoom';z.innerHTML='<div class="item-photo-zoom-backdrop" data-close-photo="1"></div><div class="item-photo-zoom-card"><button class="btn small" type="button" data-close-photo="1">ÄÃ³ng</button><img src="'+src+'" alt="áº¢nh hÃ ng hÃ³a"></div>';
    document.body.appendChild(z);
  });
  document.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('[data-close-photo]')){var old=document.getElementById('itemPhotoZoom');if(old)old.remove()}});
  if(!document.getElementById('item-photo-description-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='item-photo-description-style-20260718-light-core-16';
    st.textContent='.item-photo-desc-field{position:relative!important}.item-photo-desc-field input{padding-right:76px!important}.item-photo-button{position:absolute!important;right:8px!important;bottom:6px!important;min-width:54px!important;height:28px!important;min-height:28px!important;border:1px solid #bfe3d5!important;border-radius:7px!important;background:#eefaf5!important;color:#087253!important;font-size:12px!important;font-weight:700!important;cursor:pointer!important;box-shadow:0 3px 9px rgba(8,71,49,.10)!important}.item-photo-preview{display:none;grid-column:1/-1;align-items:center;gap:8px;margin-top:6px;border:1px solid #cfe5dc;border-radius:8px;background:#f8fffb;padding:7px 8px;color:#087253;font-size:12px;font-weight:600}.item-photo-preview.show{display:flex}.item-photo-preview img{width:42px;height:42px;border-radius:7px;object-fit:cover;border:1px solid #cfe5dc}.item-photo-preview span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-detail-desc-box{position:relative!important;padding-top:38px!important}.item-detail-photo-chip{position:absolute;right:10px;top:8px;border:1px solid #bfe3d5;background:#eefaf5;color:#087253;border-radius:7px;min-height:26px;padding:3px 10px;font-size:12px;font-weight:700;cursor:pointer}.item-detail-photo-wrap{margin:4px 0 10px}.item-detail-photo-wrap img{display:block;width:min(100%,260px);max-height:210px;object-fit:cover;border-radius:9px;border:1px solid #cfe5dc;box-shadow:0 8px 20px rgba(8,71,49,.10);cursor:pointer}.item-photo-zoom-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10020}.item-photo-zoom-card{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10021;width:min(760px,calc(100vw - 24px));max-height:calc(100vh - 24px);background:#fff;border-radius:10px;padding:12px;box-shadow:0 20px 60px rgba(0,0,0,.35);display:grid;gap:10px;justify-items:end}.item-photo-zoom-card img{width:100%;max-height:calc(100vh - 100px);object-fit:contain;border-radius:8px;background:#f5fbf8}@media(max-width:900px){.item-photo-button{height:30px!important;min-height:30px!important;bottom:7px!important}.item-detail-photo-wrap img{width:100%;max-height:230px}.item-detail-card-photo{width:min(520px,calc(100vw - 24px))!important}}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itemPhotoDescription20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhanceNhapPhotoField,0);return out};
    window.render.__itemPhotoDescription20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itemPhotoDescription20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(enhanceNhapPhotoField,0);return out};
    window.bindForms.__itemPhotoDescription20260717=true;
  }
  setTimeout(enhanceNhapPhotoField,100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__importVariantPhotos20260717)return;window.__importVariantPhotos20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function itemInfo(code){return allItems().find(function(h){return h[0]===code||h[1]===code})||[code,code,'','','']}
  function khoName(code){try{return typeof nameKho==='function'?nameKho(code):code}catch(e){return code}}
  function qty(v){try{return typeof fmt==='function'?fmt(Number(v||0)):String(v||0)}catch(e){return String(v||0)}}
  function ensureImportDetails(){
    if(!state.importDetails||typeof state.importDetails!=='object'||Array.isArray(state.importDetails))state.importDetails={};
    return state.importDetails;
  }
  function detailKey(row){return [row&&row[0]||'',row&&row[1]||'',row&&row[2]||'',row&&row[3]||'',row&&row[5]||0].join('|')}
  function compressImage(file){
    return new Promise(function(resolve,reject){
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('Chá»n Ä‘Ãºng file áº£nh'));
      var reader=new FileReader();
      reader.onload=function(){
        var img=new Image();
        img.onload=function(){
          var max=900,w=img.width,h=img.height,ratio=Math.min(1,max/Math.max(w,h));
          var canvas=document.createElement('canvas');
          canvas.width=Math.max(1,Math.round(w*ratio));canvas.height=Math.max(1,Math.round(h*ratio));
          var ctx=canvas.getContext('2d');
          ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.drawImage(img,0,0,canvas.width,canvas.height);
          resolve(canvas.toDataURL('image/jpeg',0.72));
        };
        img.onerror=function(){reject(new Error('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c áº£nh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('KhÃ´ng Ä‘á»c Ä‘Æ°á»£c áº£nh'))};
      reader.readAsDataURL(file);
    });
  }
  function previewVariantPhoto(data,name){
    var box=document.getElementById('nhapVariantPhotoPreview');if(!box)return;
    if(!data){box.innerHTML='';box.classList.remove('show');return}
    box.innerHTML='<img src="'+data+'" alt="áº¢nh phÃ¢n loáº¡i"><span>'+(name?esc(name):'ÄÃ£ chá»n áº£nh phÃ¢n loáº¡i')+'</span><button class="btn small" type="button" id="clearNhapVariantPhoto">Bá» áº£nh</button>';
    box.classList.add('show');
    var clear=document.getElementById('clearNhapVariantPhoto');
    if(clear)clear.onclick=function(){window.__pendingNhapVariantPhoto='';window.__pendingNhapVariantPhotoName='';previewVariantPhoto('','')};
  }
  function enhanceNhapVariantField(){
    var saveBtn=document.getElementById('luuNhap');if(saveBtn)saveBtn.onclick=window.saveNhap;
    var hang=document.getElementById('hangNhap');if(!hang||document.getElementById('nhapVariantDesc'))return;
    var label=hang.closest&&hang.closest('label');
    var html='<div class="full nhap-variant-field">'+
      '<label>PhÃ¢n loáº¡i / mÃ´ táº£ láº§n nháº­p</label>'+
      '<div class="nhap-variant-input-wrap">'+
        '<input id="nhapVariantDesc" autocomplete="off" placeholder="VD: loáº¡i inox, loáº¡i nhá»±a, mÃ u cam, cÃ´ng suáº¥t 300W">'+
        '<button class="item-photo-button nhap-variant-photo-btn" id="nhapVariantPhotoBtn" type="button">áº¢nh</button>'+
        '<input id="nhapVariantPhotoInput" type="file" accept="image/*" style="display:none">'+
      '</div>'+
      '<div id="nhapVariantPhotoPreview" class="item-photo-preview nhap-variant-photo-preview"></div>'+
      '<p class="hint nhap-variant-hint">DÃ¹ng khi cÃ¹ng má»™t máº·t hÃ ng cÃ³ nhiá»u loáº¡i/áº£nh. Tá»“n kho váº«n tÃ­nh chung theo mÃ£ hÃ ng.</p>'+
    '</div>';
    (label||hang).insertAdjacentHTML('afterend',html);
    var btn=document.getElementById('nhapVariantPhotoBtn'),file=document.getElementById('nhapVariantPhotoInput');
    if(btn&&file)btn.onclick=function(){file.click()};
    if(file)file.onchange=function(){
      var f=file.files&&file.files[0];if(!f)return;
      btn.textContent='Äang xá»­ lÃ½...';
      compressImage(f).then(function(data){
        window.__pendingNhapVariantPhoto=data;
        window.__pendingNhapVariantPhotoName=f.name||'áº¢nh phÃ¢n loáº¡i';
        btn.textContent='áº¢nh';
        previewVariantPhoto(data,window.__pendingNhapVariantPhotoName);
      }).catch(function(e){btn.textContent='áº¢nh';alert(e.message||'KhÃ´ng chÃ¨n Ä‘Æ°á»£c áº£nh')});
    };
    previewVariantPhoto(window.__pendingNhapVariantPhoto||'',window.__pendingNhapVariantPhotoName||'');
  }
  var oldSaveNhap=window.saveNhap;
  if(typeof oldSaveNhap==='function'&&!oldSaveNhap.__importVariantPhotos20260717){
    window.saveNhap=function(){
      var desc=(document.getElementById('nhapVariantDesc')&&document.getElementById('nhapVariantDesc').value.trim())||'';
      var photo=window.__pendingNhapVariantPhoto||'',photoName=window.__pendingNhapVariantPhotoName||'';
      var before=(state.bd||[]).length;
      var out=oldSaveNhap.apply(this,arguments);
      if((state.bd||[]).length>before&&(desc||photo)){
        var row=state.bd[state.bd.length-1];
        if(row){
          row[13]=desc;row[14]=photo;row[15]=photoName;
          var store=ensureImportDetails();
          store[detailKey(row)]={desc:desc,photo:photo,photoName:photoName,item:row[3],kho:row[2],qty:Number(row[5]||0),date:row[0],slip:row[1],ncc:row[7]||''};
          try{if(typeof touchState==='function')touchState()}catch(e){}
          if(window.save)save();
          try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}
        }
        window.__pendingNhapVariantPhoto='';window.__pendingNhapVariantPhotoName='';
      }
      return out;
    };
    window.saveNhap.__importVariantPhotos20260717=true;
  }
  function importDetailFor(row){
    var saved=state.importDetails&&state.importDetails[detailKey(row)]||{};
    return {
      desc:row&&row[13]||saved.desc||'',
      photo:row&&row[14]||saved.photo||'',
      photoName:row&&row[15]||saved.photoName||'',
      ncc:row&&row[7]||saved.ncc||'',
      qty:Number(row&&row[5]||saved.qty||0)
    };
  }
  function itemVariantRows(code){
    return (state.bd||[]).filter(function(r){return r&&r[3]===code&&Number(r[5]||0)>0}).map(function(r){var d=importDetailFor(r);return {row:r,desc:d.desc,photo:d.photo,photoName:d.photoName,ncc:d.ncc,qty:d.qty}}).filter(function(x){return x.desc||x.photo});
  }
  function itemPhoto(code){return state&&state.itemImages?state.itemImages[code]||'':''}
  window.showItemDetail=function(code){
    var h=itemInfo(code),baseDesc=String(h[4]||'').trim(),basePhoto=itemPhoto(h[0]),vars=itemVariantRows(h[0]);
    var old=document.getElementById('itemDetailModal');if(old)old.remove();
    var basePhotoHtml=basePhoto?'<button class="item-detail-photo-chip" type="button" data-variant-photo-src="'+basePhoto+'">áº¢nh</button><div class="item-detail-photo-wrap"><img src="'+basePhoto+'" alt="áº¢nh '+esc(h[1]||'hÃ ng hÃ³a')+'" data-variant-photo-src="'+basePhoto+'"></div>':'';
    var variantHtml=vars.length?'<div class="item-variant-list"><h3>PhÃ¢n loáº¡i theo láº§n nháº­p</h3><div class="item-variant-grid">'+vars.map(function(v){
      var r=v.row,photo=v.photo?'<img class="item-variant-photo" src="'+v.photo+'" alt="áº¢nh phÃ¢n loáº¡i" data-variant-photo-src="'+v.photo+'">':'<div class="item-variant-photo-empty">ChÆ°a cÃ³ áº£nh</div>';
      return '<div class="item-variant-card">'+photo+'<div class="item-variant-info"><b>'+esc(v.desc||'ChÆ°a nháº­p mÃ´ táº£')+'</b><span>'+esc(khoName(r[2]))+' - '+qty(v.qty)+' '+esc(h[3]||'')+'</span><span>'+esc(r[0]||'')+' | '+esc(r[1]||'')+'</span><span>NCC: '+esc(v.ncc||'')+'</span></div></div>';
    }).join('')+'</div></div>':'';
    var box=document.createElement('div');box.id='itemDetailModal';
    box.innerHTML='<div class="item-detail-backdrop" data-close-detail="1"></div><div class="item-detail-card item-detail-card-photo item-detail-card-wide"><div class="item-detail-head"><h2>Chi tiáº¿t hÃ ng hÃ³a</h2><button class="btn small" type="button" data-close-detail="1">ÄÃ³ng</button></div><div class="item-detail-body"><p><b>'+esc(h[1]||code)+'</b></p><p class="hint">MÃ£ hÃ ng: '+esc(h[0]||'')+' | NhÃ³m: '+esc(h[2]||'')+' | ÄVT: '+esc(h[3]||'')+'</p><div class="item-detail-text item-detail-desc-box">'+basePhotoHtml+'<div>'+(baseDesc?esc(baseDesc):'ChÆ°a cÃ³ mÃ´ táº£ chung.')+'</div></div>'+variantHtml+'</div></div>';
    document.body.appendChild(box);
  };
  document.addEventListener('click',function(e){
    var target=e.target&&e.target.closest&&e.target.closest('[data-variant-photo-src]');if(!target)return;
    var src=target.getAttribute('data-variant-photo-src');if(!src)return;
    var old=document.getElementById('itemPhotoZoom');if(old)old.remove();
    var z=document.createElement('div');z.id='itemPhotoZoom';
    z.innerHTML='<div class="item-photo-zoom-backdrop" data-close-photo="1"></div><div class="item-photo-zoom-card"><button class="btn small" type="button" data-close-photo="1">ÄÃ³ng</button><img src="'+src+'" alt="áº¢nh hÃ ng hÃ³a"></div>';
    document.body.appendChild(z);
  });
  if(!document.getElementById('import-variant-photos-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='import-variant-photos-style-20260718-light-core-16';
    st.textContent='.nhap-variant-field{display:grid!important;gap:5px!important;color:var(--muted);font-size:12px;font-weight:700}.nhap-variant-input-wrap{position:relative}.nhap-variant-input-wrap input{width:100%;padding-right:76px!important}.nhap-variant-photo-btn{bottom:5px!important}.nhap-variant-hint{margin:0!important;font-weight:400}.item-detail-card-wide{width:min(760px,calc(100vw - 28px))!important}.item-variant-list{margin-top:12px}.item-variant-list h3{margin:0 0 8px;font-size:14px}.item-variant-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}.item-variant-card{display:grid;grid-template-columns:74px minmax(0,1fr);gap:10px;border:1px solid #cfe5dc;border-radius:9px;background:#f8fffb;padding:8px}.item-variant-photo,.item-variant-photo-empty{width:74px;height:74px;border-radius:8px;border:1px solid #cfe5dc;background:#eef8f4;object-fit:cover}.item-variant-photo{cursor:pointer}.item-variant-photo-empty{display:grid;place-items:center;text-align:center;color:#6a8177;font-size:11px;font-weight:600}.item-variant-info{display:grid;gap:3px;min-width:0}.item-variant-info b{font-size:13px;color:#12372c;line-height:1.25}.item-variant-info span{font-size:12px;color:#087253;line-height:1.25}@media(max-width:900px){.item-detail-card-wide{width:min(540px,calc(100vw - 18px))!important}.item-variant-grid{grid-template-columns:1fr}.item-variant-card{grid-template-columns:68px minmax(0,1fr)}.item-variant-photo,.item-variant-photo-empty{width:68px;height:68px}.nhap-variant-hint{display:none}}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__importVariantPhotos20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhanceNhapVariantField,0);return out};
    window.render.__importVariantPhotos20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__importVariantPhotos20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(enhanceNhapVariantField,0);return out};
    window.bindForms.__importVariantPhotos20260717=true;
  }
  setTimeout(enhanceNhapVariantField,100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideNhapSuggestGap20260717)return;window.__hideNhapSuggestGap20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function itemLabel(h){return String(h&&h[1]||h&&h[0]||'')}
  function itemOptionText(h){return String((h[0]||'')+' - '+(h[2]||'')+' - '+(h[3]||''))}
  function currentGroup(){var g=document.getElementById('nhomNhap');return g?g.value:''}
  function matchGroup(h){var g=currentGroup();return !g||h[2]===g}
  function findItem(value){
    var q=norm(value);
    if(!q)return null;
    return allItems().find(function(h){return matchGroup(h)&&(norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q)})||null;
  }
  function ensureNativeList(){
    var input=document.getElementById('hangNhap');if(!input)return;
    var list=document.getElementById('hangNhapNativeList');
    if(!list){list=document.createElement('datalist');list.id='hangNhapNativeList';document.body.appendChild(list)}
    var seen={};
    list.innerHTML=allItems().filter(matchGroup).map(function(h){
      var v=itemLabel(h);if(!v||seen[v])return '';seen[v]=1;
      return '<option value="'+String(v).replace(/"/g,'&quot;')+'" label="'+String(itemOptionText(h)).replace(/"/g,'&quot;')+'"></option>';
    }).join('');
    input.setAttribute('list','hangNhapNativeList');
  }
  function syncNhapInput(){
    var input=document.getElementById('hangNhap'),box=document.getElementById('hangNhapSuggest');if(!input)return;
    var found=findItem(input.value);
    if(found){input.dataset.code=found[0]}else if(input.dataset&&input.dataset.code&&norm(input.value)!==norm(itemLabel(hnorm((state.hang||[]).find(function(x){return hnorm(x)[0]===input.dataset.code})||[])))){input.dataset.code=''}
    if(box){box.classList.remove('show');box.innerHTML=''}
  }
  function compactNhapSuggest(){
    var input=document.getElementById('hangNhap'),box=document.getElementById('hangNhapSuggest');
    if(!input)return;
    ensureNativeList();
    syncNhapInput();
    input.onfocus=function(){ensureNativeList();syncNhapInput()};
    input.oninput=function(){syncNhapInput()};
    input.onchange=function(){syncNhapInput()};
    if(box){box.classList.remove('show');box.innerHTML=''}
    var group=document.getElementById('nhomNhap');
    if(group&&!group.__hideNhapSuggestGap20260717){
      var old=group.onchange;
      group.onchange=function(){
        if(typeof old==='function')old.apply(this,arguments);
        setTimeout(function(){ensureNativeList();syncNhapInput();var b=document.getElementById('hangNhapSuggest');if(b){b.classList.remove('show');b.innerHTML=''}},0);
      };
      group.__hideNhapSuggestGap20260717=true;
    }
  }
  if(!document.getElementById('hide-nhap-suggest-gap-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='hide-nhap-suggest-gap-style-20260718-light-core-16';
    st.textContent='#nhap #hangNhapSuggest,#nhap .nhap-item #hangNhapSuggest{display:none!important;visibility:hidden!important;height:0!important;max-height:0!important;min-height:0!important;margin:0!important;padding:0!important;border:0!important;box-shadow:none!important;overflow:hidden!important}#nhap .item-search-field{margin-bottom:0!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__hideNhapSuggestGap20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(compactNhapSuggest,0);return out};
    window.render.__hideNhapSuggestGap20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__hideNhapSuggestGap20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(compactNhapSuggest,0);return out};
    window.bindForms.__hideNhapSuggestGap20260717=true;
  }
  setTimeout(compactNhapSuggest,100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hangDeleteAdminCleanDetail20260717)return;window.__hangDeleteAdminCleanDetail20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function desc(code){var h=allItems().find(function(x){return x[0]===code});return String(h&&h[4]||'').trim()}
  function detailBtn(code){return desc(code)?'<button class="btn small item-detail-btn" type="button" data-item-detail="'+esc(code)+'">Chi tiáº¿t</button>':'<span class="hint">KhÃ´ng cÃ³</span>'}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function itemUsed(code){
    var hasStock=Object.keys(state.ton||{}).some(function(k){return k.split('|')[1]===code&&Number(state.ton[k]||0)!==0});
    var hasSlip=(state.bd||[]).some(function(r){return r&&r[3]===code});
    var hasIT=(state.thietBiIT||[]).some(function(raw){
      try{var x=typeof normalizeThietBi==='function'?normalizeThietBi(raw):raw;return x&&x[2]===code}catch(e){return false}
    });
    return hasStock||hasSlip||hasIT;
  }
  window.deleteHangAdmin=function(i){
    if(!adminOk())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c xÃ³a hÃ ng hÃ³a.');
    var h=hnorm((state.hang||[])[i]);if(!h||!h[0])return;
    if(itemUsed(h[0]))return alert('HÃ ng hÃ³a nÃ y Ä‘Ã£ cÃ³ tá»“n kho, phiáº¿u phÃ¡t sinh hoáº·c thiáº¿t bá»‹ liÃªn quan. Äá»ƒ an toÃ n dá»¯ liá»‡u, báº¡n hÃ£y sá»­a tÃªn/mÃ´ táº£ thay vÃ¬ xÃ³a.');
    if(!confirm('XÃ³a hÃ ng hÃ³a "'+(h[1]||h[0])+'"?'))return;
    state.hang.splice(i,1);
    if(state.itemImages&&state.itemImages[h[0]])delete state.itemImages[h[0]];
    save();render();
  };
  window.screenHang=function(){
    if(!adminOk())return shell('hanghoa','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c sá»­a danh má»¥c hÃ ng hÃ³a.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thÃªm, sá»­a hoáº·c xÃ³a hÃ ng hÃ³a.</div></div>');
    var rows=allItems().map(function(h,i){
      var name='<button class="item-name-link" type="button" data-item-detail="'+esc(h[0])+'">'+esc(h[1])+'</button>';
      var actions='<div class="hang-actions"><button class="btn small" onclick="editHang('+i+')">Sá»­a</button><button class="btn small bad" onclick="deleteHangAdmin('+i+')">XÃ³a</button></div>';
      return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn hÃ ng',name)+td('NhÃ³m',esc(h[2]))+td('ÄVT',esc(h[3]))+td('Chi tiáº¿t',detailBtn(h[0]))+td('Thao tÃ¡c',actions)+'</tr>';
    }).join('');
    return shell('hanghoa','Danh má»¥c hÃ ng hÃ³a','Tá»“n tÃ­nh chung theo mÃ£ hÃ ng; báº¥m tÃªn hÃ ng Ä‘á»ƒ xem mÃ´ táº£.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch hÃ ng hÃ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>Chi tiáº¿t</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin hÃ ng hÃ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="maHang" readonly></label><label>TÃªn hÃ ng<input id="tenHang" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m<select id="nhomHang"></select></label><label>ÄVT<select id="dvt"></select></label><label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="thuocTinh" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label><button class="btn primary" id="luuHang">LÆ°u hÃ ng hÃ³a</button><button class="btn" id="huyHang">Táº¡o má»›i</button></div></div></div>');
  };
  if(!document.getElementById('hang-delete-admin-clean-detail-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='hang-delete-admin-clean-detail-style-20260718-light-core-16';
    st.textContent='#hanghoa td[data-label="TÃªn hÃ ng"]>.item-detail-btn,#hanghoa td[data-label="TÃªn hÃ ng"] .item-detail-btn{display:none!important}.item-name-link{border:0!important;background:transparent!important;padding:0!important;margin:0!important;color:#07372b!important;font:inherit!important;text-align:left!important;text-decoration:underline!important;text-decoration-thickness:1px!important;text-underline-offset:3px!important;text-decoration-color:rgba(7,132,95,.45)!important;cursor:pointer!important}.item-name-link:hover{color:#006b50!important;text-decoration-color:#006b50!important}.hang-actions{display:flex!important;align-items:center!important;gap:6px!important;justify-content:flex-start!important}.hang-actions .btn{min-width:44px!important}@media(max-width:900px){.hang-actions{gap:5px!important}.hang-actions .btn{min-width:40px!important;padding:6px 8px!important}.item-name-link{line-height:1.25!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideXuatSuggestGap20260717)return;window.__hideXuatSuggestGap20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function itemLabel(h){return String(h&&h[1]||h&&h[0]||'')}
  function qty(v){try{return typeof fmt==='function'?fmt(Number(v||0)):String(v||0)}catch(e){return String(v||0)}}
  function warehouseName(code){try{return typeof nameKho==='function'?nameKho(code):code}catch(e){return code}}
  function itemUnitLocal(code){var h=allItems().find(function(x){return x[0]===code});return h?(h[3]||''):''}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockedItems(){return allItems().filter(function(h){return h&&h[0]&&totalStock(h[0])>0})}
  function stockedWarehouses(code){return Object.keys(state.ton||{}).filter(function(k){return k.split('|')[1]===code&&Number(state.ton[k]||0)>0}).map(function(k){var p=k.split('|');return warehouseName(p[0])+': '+qty(state.ton[k])+' '+itemUnitLocal(code)})}
  function findStocked(value){
    var q=norm(value);if(!q)return null;
    var list=stockedItems();
    var exact=list.find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q});
    if(exact)return exact;
    var matches=list.filter(function(h){return norm(h[0]).indexOf(q)>=0||norm(h[1]).indexOf(q)>=0||norm(h[2]).indexOf(q)>=0||norm(h[4]).indexOf(q)>=0});
    return matches.length===1?matches[0]:null;
  }
  function ensureXuatNativeList(){
    var input=document.getElementById('hangXuat');if(!input)return;
    var list=document.getElementById('hangXuatNativeList');
    if(!list){list=document.createElement('datalist');list.id='hangXuatNativeList';document.body.appendChild(list)}
    var seen={};
    list.innerHTML=stockedItems().map(function(h){
      var v=itemLabel(h);if(!v||seen[v])return '';seen[v]=1;
      var note='Tá»•ng '+qty(totalStock(h[0]))+' '+(h[3]||'')+' - '+stockedWarehouses(h[0]).join(' | ');
      return '<option value="'+String(v).replace(/"/g,'&quot;')+'" label="'+String(note).replace(/"/g,'&quot;')+'"></option>';
    }).join('');
    input.setAttribute('list','hangXuatNativeList');
  }
  var oldGet=window.getItemCodeFromSearch;
  window.getItemCodeFromSearch=function(id){
    if(id!=='hangXuat')return oldGet?oldGet.apply(this,arguments):'';
    var input=document.getElementById('hangXuat'),value=input?input.value:'';
    if(input&&input.dataset&&input.dataset.code&&norm(value)===norm(itemLabel(hnorm((state.hang||[]).find(function(x){return hnorm(x)[0]===input.dataset.code})||[])))&&totalStock(input.dataset.code)>0)return input.dataset.code;
    var found=findStocked(value);
    return found?found[0]:'';
  };
  function syncXuatInput(){
    var input=document.getElementById('hangXuat'),box=document.getElementById('hangXuatSuggest');if(!input)return;
    ensureXuatNativeList();
    var found=findStocked(input.value);
    if(found){input.dataset.code=found[0]}else if(input.dataset&&input.dataset.code){input.dataset.code=''}
    if(box){box.classList.remove('show');box.innerHTML=''}
    if(typeof capNhatKhoXuatTheoHang==='function')capNhatKhoXuatTheoHang();
    if(!String(input.value||'').trim()&&document.getElementById('goiYKhoXuat'))document.getElementById('goiYKhoXuat').textContent='GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.';
  }
  function compactXuatSuggest(){
    var input=document.getElementById('hangXuat'),box=document.getElementById('hangXuatSuggest');if(!input)return;
    ensureXuatNativeList();
    input.onfocus=function(){ensureXuatNativeList();if(box){box.classList.remove('show');box.innerHTML=''}};
    input.oninput=syncXuatInput;
    input.onchange=syncXuatInput;
    if(box){box.classList.remove('show');box.innerHTML=''}
  }
  if(!document.getElementById('hide-xuat-suggest-gap-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='hide-xuat-suggest-gap-style-20260718-light-core-16';
    st.textContent='#xuat #hangXuatSuggest{display:none!important;visibility:hidden!important;height:0!important;max-height:0!important;min-height:0!important;margin:0!important;padding:0!important;border:0!important;box-shadow:none!important;overflow:hidden!important}#xuat .item-search-field{margin-bottom:0!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__hideXuatSuggestGap20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(compactXuatSuggest,0);return out};
    window.render.__hideXuatSuggestGap20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__hideXuatSuggestGap20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(compactXuatSuggest,0);return out};
    window.bindForms.__hideXuatSuggestGap20260717=true;
  }
  setTimeout(compactXuatSuggest,100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__mobileXnkCompact20260717)return;window.__mobileXnkCompact20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function markXnk(mode){
    var rp=document.getElementById('rp'),title=document.getElementById('rpTitle');
    if(!rp)return;
    var isXnk=mode==='xnk'||(title&&/XNK/i.test(title.textContent||''));
    rp.classList.toggle('xnk-compact-mobile',!!isXnk);
    if(isXnk){
      rp.querySelectorAll('td').forEach(function(td){
        td.classList.toggle('xnk-empty-cell',!String(td.textContent||'').trim());
      });
    }
  }
  var oldShow=window.showReport;
  if(typeof oldShow==='function'&&!oldShow.__mobileXnkCompact20260717){
    window.showReport=function(mode,btn){var out=oldShow.apply(this,arguments);setTimeout(function(){markXnk(mode)},0);return out};
    window.showReport.__mobileXnkCompact20260717=true;
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__mobileXnkCompact20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(function(){markXnk()},60);return out};
    window.render.__mobileXnkCompact20260717=true;
  }
  if(!document.getElementById('mobile-xnk-compact-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='mobile-xnk-compact-style-20260718-light-core-16';
    st.textContent='@media(max-width:900px){#baocao #rp.xnk-compact-mobile table{display:block!important;background:transparent!important;font-size:12px!important}#baocao #rp.xnk-compact-mobile thead{display:none!important}#baocao #rp.xnk-compact-mobile tbody{display:grid!important;gap:7px!important;background:transparent!important}#baocao #rp.xnk-compact-mobile tr{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:4px 8px!important;margin:0!important;padding:8px 9px!important;border:1px solid #cfe3da!important;border-radius:9px!important;background:#fff!important;box-shadow:0 3px 10px rgba(8,71,49,.06)!important}#baocao #rp.xnk-compact-mobile td{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:5px!important;min-width:0!important;border:0!important;padding:0!important;text-align:left!important;font-size:11.5px!important;line-height:1.25!important;color:#17382d!important;word-break:break-word!important}#baocao #rp.xnk-compact-mobile td:before{content:attr(data-label)!important;flex:0 0 auto!important;min-width:auto!important;padding:1px 5px!important;border-radius:999px!important;background:#e8f6f0!important;color:#087253!important;font-size:9.8px!important;font-weight:650!important;line-height:1.25!important;text-align:left!important}#baocao #rp.xnk-compact-mobile td.xnk-empty-cell{display:none!important}#baocao #rp.xnk-compact-mobile td[data-label="HÃ ng"],#baocao #rp.xnk-compact-mobile td[data-label="Loáº¡i"],#baocao #rp.xnk-compact-mobile td[data-label="NCC/NgÆ°á»i nháº­n"],#baocao #rp.xnk-compact-mobile td[data-label="Thao tÃ¡c"]{grid-column:1/-1!important}#baocao #rp.xnk-compact-mobile td[data-label="HÃ ng"]{font-weight:600!important;color:#0e3026!important}#baocao #rp.xnk-compact-mobile td[data-label="Sá»‘ phiáº¿u"]{font-weight:700!important;color:#064f3d!important}#baocao #rp.xnk-compact-mobile td[data-label="Nháº­p"],#baocao #rp.xnk-compact-mobile td[data-label="Xuáº¥t"]{font-weight:700!important;color:#006b50!important}#baocao #rp.xnk-compact-mobile td[data-label="Thao tÃ¡c"] .row-actions{display:flex!important;gap:6px!important;justify-content:flex-end!important;width:100%!important}#baocao #rp.xnk-compact-mobile td[data-label="Thao tÃ¡c"] .btn{width:auto!important;min-width:48px!important;min-height:28px!important;padding:4px 8px!important;font-size:11px!important}#baocao #rp.xnk-compact-mobile .item-detail-btn,#baocao #rp.xnk-compact-mobile .btn.small{width:auto!important}#baocao #rp.xnk-compact-mobile .wrap{overflow:visible!important}}';
    document.head.appendChild(st);
  }
  setTimeout(function(){markXnk()},100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__warehouseOnePanel20260717)return;window.__warehouseOnePanel20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d')}
  function nextCode(){
    var max=0;
    (state.kho||[]).forEach(function(k){
      var m=String(k&&k[0]||'').match(/^KHO-(\d+)$/i);
      if(m)max=Math.max(max,parseInt(m[1],10)||0);
    });
    return 'KHO-'+String(max+1).padStart(3,'0');
  }
  function warehouseRows(){
    return (state.kho||[]).map(function(k,i){
      var action='<span class="row-actions"><button class="btn small" type="button" onclick="editWarehouseOne('+i+')">Sá»­a</button>';
      if(typeof deleteKhoSetup==='function')action+='<button class="btn small bad" type="button" onclick="deleteKhoSetup('+i+')">XÃ³a</button>';
      action+='</span>';
      return '<tr>'+td('MÃ£ kho',esc(k[0]))+td('TÃªn kho',esc(k[1]))+td('Phá»¥ trÃ¡ch',esc(k[2]||'ChÆ°a gÃ¡n'))+td('Thao tÃ¡c',action)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="4">ChÆ°a cÃ³ kho.</td></tr>';
  }
  function warehousePanel(){
    return '<div class="panel warehouse-one-panel"><div class="head"><h2>Danh sÃ¡ch kho</h2><span class="tag">ThÃªm / sá»­a chung má»™t má»¥c</span></div><div class="body form warehouse-one-form"><input id="whOneEdit" type="hidden"><label>MÃ£ kho<input id="whOneCode" value="'+esc(nextCode())+'" placeholder="VD: KHO-001"></label><label>TÃªn kho<input id="whOneName" placeholder="TÃªn kho"></label><label>NgÆ°á»i phá»¥ trÃ¡ch<input id="whOneOwner" placeholder="TÃªn ngÆ°á»i/phÃ²ng ban"></label><button class="btn primary" id="whOneSave" type="button">LÆ°u kho</button><button class="btn" id="whOneNew" type="button">Táº¡o má»›i</button><p class="hint full">CÃ³ thá»ƒ sá»­a mÃ£ kho. Khi Ä‘á»•i mÃ£, tá»“n kho, phiáº¿u vÃ  Ä‘iá»u chuyá»ƒn Ä‘Ã£ liÃªn káº¿t sáº½ tá»± Ä‘i theo mÃ£ má»›i.</p></div><div class="wrap"><table><thead><tr><th>MÃ£ kho</th><th>TÃªn kho</th><th>Phá»¥ trÃ¡ch</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+warehouseRows()+'</tbody></table></div></div>';
  }
  function transformSettings(html){
    if(!html||html.indexOf('warehouse-one-panel')>=0)return html;
    var box=document.createElement('div');
    box.innerHTML=html;
    var screen=box.querySelector('#thietlap')||box;
    [].slice.call(screen.querySelectorAll('.warehouse-combined-panel')).forEach(function(p){p.parentNode.removeChild(p)});
    var two=screen.querySelector('.two');
    if(!two)return html;
    var panels=[].slice.call(two.children).filter(function(n){return n.classList&&n.classList.contains('panel')});
    panels.forEach(function(p){
      var h=norm((p.querySelector('.head h2')||p.querySelector('h2')||{}).textContent||'');
      if(h.indexOf('them / sua kho')>=0||h.indexOf('thong tin kho')>=0||h.indexOf('danh sach kho')>=0||h.indexOf('quan ly kho')>=0){
        p.parentNode.removeChild(p);
      }
    });
    var holder=document.createElement('div');
    holder.innerHTML=warehousePanel();
    two.insertBefore(holder.firstElementChild,two.firstChild);
    return box.innerHTML;
  }
  function renameKhoCode(oldCode,newCode){
    if(!oldCode||!newCode||oldCode===newCode)return;
    var nextTon={};
    Object.keys(state.ton||{}).forEach(function(key){
      var parts=key.split('|');
      var value=Number(state.ton[key]||0);
      if(parts[0]===oldCode){
        parts[0]=newCode;
        var nextKey=parts.join('|');
        nextTon[nextKey]=(nextTon[nextKey]||0)+value;
      }else{
        nextTon[key]=(nextTon[key]||0)+value;
      }
    });
    state.ton=nextTon;
    (state.bd||[]).forEach(function(row){if(row&&row[2]===oldCode)row[2]=newCode});
    (state.chuyen||[]).forEach(function(row){
      if(row&&row.tu===oldCode)row.tu=newCode;
      if(row&&row.den===oldCode)row.den=newCode;
    });
  }
  function persist(){
    try{if(typeof touchState==='function')touchState()}catch(e){}
    save();
    try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}
  }
  window.resetWarehouseOne=function(){
    if(el('whOneEdit'))el('whOneEdit').value='';
    if(el('whOneCode'))el('whOneCode').value=nextCode();
    if(el('whOneName'))el('whOneName').value='';
    if(el('whOneOwner'))el('whOneOwner').value='';
    if(el('whOneCode'))el('whOneCode').focus();
  };
  window.editWarehouseOne=function(i){
    var k=(state.kho||[])[i];if(!k)return;
    var p=document.querySelector('#thietlap .warehouse-one-panel');
    if(p)p.classList.remove('settings-collapsed');
    if(el('whOneEdit'))el('whOneEdit').value=i;
    if(el('whOneCode'))el('whOneCode').value=k[0]||'';
    if(el('whOneName'))el('whOneName').value=k[1]||'';
    if(el('whOneOwner'))el('whOneOwner').value=k[2]||'';
    if(el('whOneCode'))el('whOneCode').focus();
  };
  window.saveWarehouseOne=function(){
    var idx=(el('whOneEdit')&&el('whOneEdit').value)||'';
    var code=(el('whOneCode')&&el('whOneCode').value.trim())||'';
    var name=(el('whOneName')&&el('whOneName').value.trim())||'';
    var owner=(el('whOneOwner')&&el('whOneOwner').value.trim())||'ChÆ°a gÃ¡n';
    if(!code)return alert('Nháº­p mÃ£ kho');
    if(!name)return alert('Nháº­p tÃªn kho');
    var dup=(state.kho||[]).some(function(k,i){return k&&k[0]===code&&String(i)!==String(idx)});
    if(dup)return alert('MÃ£ kho nÃ y Ä‘Ã£ tá»“n táº¡i');
    if(idx===''){
      state.kho.push([code,name,owner]);
    }else{
      idx=Number(idx);
      if(!state.kho[idx])return alert('KhÃ´ng tÃ¬m tháº¥y kho cáº§n sá»­a');
      var oldCode=state.kho[idx][0];
      renameKhoCode(oldCode,code);
      state.kho[idx]=[code,name,owner];
    }
    persist();
    alert('ÄÃ£ lÆ°u kho');
    render();
  };
  var oldScreen=window.screenThietLap;
  if(typeof oldScreen==='function'&&!oldScreen.__warehouseOnePanel20260717){
    window.screenThietLap=function(){return transformSettings(oldScreen.apply(this,arguments))};
    window.screenThietLap.__warehouseOnePanel20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__warehouseOnePanel20260717){
    window.bindForms=function(){
      var out=oldBind.apply(this,arguments);
      if(el('whOneSave'))el('whOneSave').onclick=saveWarehouseOne;
      if(el('whOneNew'))el('whOneNew').onclick=resetWarehouseOne;
      return out;
    };
    window.bindForms.__warehouseOnePanel20260717=true;
  }
  if(!document.getElementById('warehouse-one-panel-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='warehouse-one-panel-style-20260718-light-core-16';
    st.textContent='#thietlap .warehouse-combined-panel{display:none!important}#thietlap .warehouse-combined-panel + .two > .warehouse-one-panel,#thietlap .warehouse-one-panel{display:block!important;grid-column:1/-1}#thietlap .warehouse-one-form{grid-template-columns:160px minmax(220px,1fr) minmax(220px,1fr) auto auto;align-items:end}#thietlap .warehouse-one-form .hint{margin:0;color:#526b60}.warehouse-one-panel .row-actions{justify-content:flex-start}@media(max-width:900px){#thietlap .warehouse-one-form{grid-template-columns:1fr}#thietlap .warehouse-one-panel table{min-width:640px}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__employeeMainMenu20260717)return;window.__employeeMainMenu20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function isAdminUser(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function uniquePush(arr,v){v=String(v||'').trim();if(v&&!arr.some(function(x){return norm(x)===norm(v)}))arr.push(v)}
  function ensureEmployees(s){
    s=s||state;
    if(!Array.isArray(s.receiverDeptList))s.receiverDeptList=[];
    function add(name,dept,note){
      name=String(name||'').trim();dept=String(dept||'').trim();note=String(note||'').trim();
      if(!name)return;
      var found=s.receiverDeptList.find(function(x){return norm(x.name)===norm(name)});
      if(found){if(dept&&!found.dept)found.dept=dept;if(note&&!found.note)found.note=note}
      else s.receiverDeptList.push({name:name,dept:dept,note:note});
    }
    s.receiverDeptList=s.receiverDeptList.filter(function(x){var k=norm(x&&x.name);return x&&x.name&&k!=='trong kho'&&k!=='kho it'&&k!=='chua gan'}).sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});
    s.receiverList=s.receiverDeptList.map(function(x){return x.name});
    return s.receiverDeptList;
  }
  window.ensureEmployees=ensureEmployees;
  function deptOptions(selected){
    var list=[];uniquePush(list,selected);
    (state.kho||[]).forEach(function(k){uniquePush(list,k[1]);uniquePush(list,k[2])});
    ensureEmployees(state).forEach(function(x){uniquePush(list,x.dept)});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function employeeNameOptions(selected){
    var list=[];uniquePush(list,selected);
    ensureEmployees(state).forEach(function(x){uniquePush(list,x.name)});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function employeeRows(){
    var q=norm((document.getElementById('employeeSearch')||{}).value||'');
    var rows=ensureEmployees(state).map(function(x,i){return {x:x,i:i,search:norm([x.name,x.dept,x.note].join(' '))}}).filter(function(r){return !q||r.search.indexOf(q)>=0});
    return rows.map(function(r){
      var x=r.x;
      return '<tr>'+td('TÃªn nhÃ¢n viÃªn','<button class="link-like employee-name-link" type="button" onclick="editEmployee('+r.i+')">'+esc(x.name)+'</button>')+td('Bá»™ pháº­n/kho',esc(x.dept||''))+td('Ghi chÃº',esc(x.note||''))+td('Thao tÃ¡c','<span class="row-actions"><button class="btn small" type="button" onclick="editEmployee('+r.i+')">Sá»­a</button><button class="btn small bad" type="button" onclick="deleteEmployee('+r.i+')">XÃ³a</button></span>')+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="4">ChÆ°a cÃ³ nhÃ¢n viÃªn phÃ¹ há»£p.</td></tr>';
  }
  function employeeScreen(){
    if(!isAdminUser())return shell('nhanvien','KhÃ´ng cÃ³ quyá»n','Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c thiáº¿t láº­p danh sÃ¡ch nhÃ¢n viÃªn.','<div class="panel"><div class="body">Báº¡n váº«n cÃ³ thá»ƒ nháº­p phiáº¿u theo quyá»n Ä‘Æ°á»£c cáº¥p.</div></div>');
    ensureEmployees(state);
    return shell('nhanvien','NhÃ¢n viÃªn','Thiáº¿t láº­p danh sÃ¡ch nhÃ¢n viÃªn vÃ  bá»™ pháº­n/kho Ä‘á»ƒ theo dÃµi cáº¥p phÃ¡t, sá»­ dá»¥ng.','<div class="grid employee-layout"><div class="panel"><div class="head"><h2>Danh sÃ¡ch nhÃ¢n viÃªn</h2></div><div class="body employee-search-line"><input id="employeeSearch" placeholder="GÃµ tÃªn nhÃ¢n viÃªn hoáº·c bá»™ pháº­n/kho Ä‘á»ƒ tÃ¬m"><button class="btn" id="clearEmployeeSearch" type="button">XÃ³a tÃ¬m</button></div><div class="wrap"><table><thead><tr><th>TÃªn nhÃ¢n viÃªn</th><th>Bá»™ pháº­n/kho</th><th>Ghi chÃº</th><th>Thao tÃ¡c</th></tr></thead><tbody id="employeeRows">'+employeeRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin nhÃ¢n viÃªn</h2></div><div class="body form"><input id="editEmployeeIndex" type="hidden"><label>TÃªn nhÃ¢n viÃªn<input id="employeeName" list="employeeNameList" placeholder="VD: Nguyá»…n VÄƒn A"><datalist id="employeeNameList">'+employeeNameOptions('')+'</datalist></label><label>Bá»™ pháº­n/kho<input id="employeeDept" list="employeeDeptList" placeholder="VD: PhÃ²ng HC / Kho VP 77CT"><datalist id="employeeDeptList">'+deptOptions('')+'</datalist></label><label class="full">Ghi chÃº<input id="employeeNote" placeholder="Chá»©c vá»¥, Ä‘iá»‡n thoáº¡i hoáº·c ghi chÃº náº¿u cáº§n"></label><button class="btn primary" id="saveEmployee" type="button">LÆ°u nhÃ¢n viÃªn</button><button class="btn" id="newEmployee" type="button">Táº¡o má»›i</button><p class="hint full">Danh sÃ¡ch nÃ y dÃ¹ng cho phiáº¿u xuáº¥t/cáº¥p phÃ¡t vÃ  thiáº¿t bá»‹ IT. Khi chá»n nhÃ¢n viÃªn, app tá»± Ä‘iá»n bá»™ pháº­n/kho Ä‘Ã£ lÆ°u.</p></div></div></div>');
  }
  window.screenNhanVien=employeeScreen;
  function persistEmployees(){
    ensureEmployees(state);
    try{if(typeof touchState==='function')touchState()}catch(e){}
    save();
    try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}
  }
  window.editEmployee=function(i){
    var x=ensureEmployees(state)[i];if(!x)return;
    if(el('editEmployeeIndex'))el('editEmployeeIndex').value=i;
    if(el('employeeName'))el('employeeName').value=x.name||'';
    if(el('employeeDept'))el('employeeDept').value=x.dept||'';
    if(el('employeeNote'))el('employeeNote').value=x.note||'';
    if(el('employeeName'))el('employeeName').focus();
  };
  window.resetEmployee=function(){
    ['editEmployeeIndex','employeeName','employeeDept','employeeNote'].forEach(function(id){if(el(id))el(id).value=''});
    if(el('employeeName'))el('employeeName').focus();
  };
  window.saveEmployee=function(){
    ensureEmployees(state);
    var name=(el('employeeName')&&el('employeeName').value.trim())||'';
    var dept=(el('employeeDept')&&el('employeeDept').value.trim())||'';
    var note=(el('employeeNote')&&el('employeeNote').value.trim())||'';
    var idx=(el('editEmployeeIndex')&&el('editEmployeeIndex').value)||'';
    if(!name)return alert('Nháº­p tÃªn nhÃ¢n viÃªn');
    if(!dept)return alert('Nháº­p bá»™ pháº­n/kho cá»§a nhÃ¢n viÃªn');
    var dup=state.receiverDeptList.some(function(x,i){return norm(x.name)===norm(name)&&String(i)!==String(idx)});
    if(dup)return alert('TÃªn nhÃ¢n viÃªn nÃ y Ä‘Ã£ cÃ³ trong danh sÃ¡ch');
    if(idx===''){
      state.receiverDeptList.push({name:name,dept:dept,note:note});
    }else{
      idx=Number(idx);
      var old=state.receiverDeptList[idx];if(!old)return alert('KhÃ´ng tÃ¬m tháº¥y nhÃ¢n viÃªn cáº§n sá»­a');
      var oldName=old.name,oldDept=old.dept;
      state.receiverDeptList[idx]={name:name,dept:dept,note:note};
      (state.bd||[]).forEach(function(b){if(Number(b&&b[6]||0)>0&&b[7]===oldName){b[7]=name;if(!b[12]||b[12]===oldDept)b[12]=dept}});
      (state.thietBiIT||[]).forEach(function(raw){var x=typeof normalizeThietBi==='function'?normalizeThietBi(raw):raw;if(x&&x[5]===oldName)x[5]=name});
    }
    persistEmployees();
    alert('ÄÃ£ lÆ°u nhÃ¢n viÃªn');
    render();
  };
  window.deleteEmployee=function(i){
    ensureEmployees(state);
    var x=state.receiverDeptList[i];if(!x)return;
    var used=(state.bd||[]).some(function(b){return Number(b&&b[6]||0)>0&&b[7]===x.name})||(state.thietBiIT||[]).some(function(raw){var t=typeof normalizeThietBi==='function'?normalizeThietBi(raw):raw;return t&&t[5]===x.name});
    if(used){if(!confirm('NhÃ¢n viÃªn "'+x.name+'" Ä‘Ã£ cÃ³ trong phiáº¿u hoáº·c thiáº¿t bá»‹ IT. Dá»¯ liá»‡u cÃ…Â© váº«n giá»¯ lá»‹ch sá»­. Báº¡n váº«n xÃ³a khá»i danh sÃ¡ch gá»£i Ã½ chá»©?'))return}
    else if(!confirm('XÃ³a nhÃ¢n viÃªn "'+x.name+'"?'))return;
    var removedName=x.name;
    state.receiverDeptList.splice(i,1);
    state.receiverList=(state.receiverList||[]).filter(function(v){return norm(v)!==norm(removedName)});
    persistEmployees();
    render();
  };
  function applyEmployeeSearch(){
    var body=document.getElementById('employeeRows');if(body)body.innerHTML=employeeRows();
  }
  function removeReceiverFromSettings(){
    if(window.current!=='thietlap')return;
    [].slice.call(document.querySelectorAll('#thietlap .panel')).forEach(function(p){
      var h=norm((p.querySelector('.head h2')||p.querySelector('h2')||{}).textContent||'');
      if(h.indexOf('nguoi nhan')>=0||h.indexOf('bo phan su dung')>=0||h.indexOf('bo phan/kho')>=0&&p.querySelector('#tenReceiver')){
        p.parentNode.removeChild(p);
      }
    });
  }
  function addMenuItem(list,item,afterId){
    list=list||[];
    if(!list.some(function(n){return n&&n[0]===item[0]})){
      var pos=list.findIndex(function(n){return n&&n[0]===afterId});
      if(pos>=0)list.splice(pos+1,0,item);else list.push(item);
    }
    return list;
  }
  window.nav=addMenuItem(window.nav||nav,['nhanvien','NhÃ¢n viÃªn'],'thietbi');
  window.mobile=addMenuItem(window.mobile||mobile,['nhanvien','NhÃ¢n viÃªn'],'thietbi');
  var ICONS={tongquan:'TQ',ton:'TK',nhap:'+',xuat:'-',thietbi:'IT',nhanvien:'NV',chuyen:'â†”',baocao:'BC',hanghoa:'HH',thietlap:'âš™'};
  function visibleMenu(list){return (list||[]).filter(function(n){return n&&n[0]!=='ton'})}
  window.buildNav=function(){
    var side=document.getElementById('sideNav'),mob=document.getElementById('mobileNav');
    var baseNav=visibleMenu(window.nav||nav),baseMobile=visibleMenu(window.mobile||mobile);
    var staffAllowed=['tongquan','nhap','xuat','thietbi','chuyen','baocao'];
    var admin=isAdminUser();
    if(!admin&&staffAllowed.indexOf(current)<0)current='tongquan';
    var navItems=admin?baseNav:baseNav.filter(function(n){return staffAllowed.indexOf(n[0])>=0});
    var mobileItems=admin?baseMobile:baseMobile.filter(function(n){return staffAllowed.indexOf(n[0])>=0});
    if(side)side.innerHTML=navItems.map(function(n){return '<button class="nav '+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+esc(n[1])+'</button>'}).join('');
    if(mob)mob.innerHTML=mobileItems.map(function(n){return '<button class="mobile-nav-btn '+(n[0]===current?'active':'')+'" data-nav="'+esc(n[0])+'" data-icon="'+esc(ICONS[n[0]]||'')+'" aria-label="'+esc(n[1])+'" onclick="go(\''+n[0]+'\')"><span>'+esc(n[1])+'</span></button>'}).join('');
  };
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__employeeMainMenu20260717){
    window.render=function(){
      var out=oldRender.apply(this,arguments);
      var main=document.getElementById('main');
      if(main&&current==='nhanvien'){
        main.insertAdjacentHTML('beforeend',employeeScreen());
        bindEmployeeScreen();
      }
      setTimeout(removeReceiverFromSettings,0);
      return out;
    };
    window.render.__employeeMainMenu20260717=true;
  }
  function bindEmployeeScreen(){
    var s=document.getElementById('employeeSearch'),clear=document.getElementById('clearEmployeeSearch');
    if(s&&!s.__employeeBound){s.__employeeBound=true;s.addEventListener('input',applyEmployeeSearch)}
    if(clear&&!clear.__employeeBound){clear.__employeeBound=true;clear.onclick=function(){if(s){s.value='';applyEmployeeSearch();s.focus()}}}
    if(el('saveEmployee'))el('saveEmployee').onclick=saveEmployee;
    if(el('newEmployee'))el('newEmployee').onclick=resetEmployee;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__employeeMainMenu20260717){
    window.bindForms=function(){
      var out=oldBind.apply(this,arguments);
      bindEmployeeScreen();
      removeReceiverFromSettings();
      return out;
    };
    window.bindForms.__employeeMainMenu20260717=true;
  }
  if(!document.getElementById('employee-main-menu-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='employee-main-menu-style-20260718-light-core-16';
    st.textContent='.employee-layout{grid-template-columns:minmax(420px,1.15fr) minmax(300px,.85fr)}.employee-search-line{display:grid;grid-template-columns:minmax(220px,1fr) auto;gap:8px;align-items:center}.employee-name-link{border:0;background:transparent;color:#075f49;text-decoration:underline;text-underline-offset:3px;padding:0;font:inherit;font-weight:650;cursor:pointer}.employee-layout table td{vertical-align:middle}@media(max-width:900px){.employee-layout{grid-template-columns:1fr}.employee-search-line{grid-template-columns:1fr}.employee-layout table{min-width:620px}}';
    document.head.appendChild(st);
  }
  ensureEmployees(state);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__serialScanSafe20260717)return;window.__serialScanSafe20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var stream=null,timer=null,slowTimer=null,controls=null;
  var formats=['qr_code','code_128','code_39','code_93','ean_13','ean_8','upc_a','upc_e','itf','codabar'];
  function byId(id){return document.getElementById(id)}
  function setStatus(msg){var s=byId('scanSerialStatus');if(s)s.textContent=msg}
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return false;
    var main=byId('maThietBi'),hidden=byId('seriThietBi');
    if(main){main.value=value;main.dispatchEvent(new Event('input',{bubbles:true}));main.focus()}
    if(hidden)hidden.value=value;
    setStatus('ÄÃ£ láº¥y sá»‘ seri: '+value);
    setTimeout(stopScan,450);
    return true;
  }
  function stopScan(){
    if(controls&&controls.stop){try{controls.stop()}catch(e){}}
    controls=null;
    if(timer){clearInterval(timer);timer=null}
    if(slowTimer){clearTimeout(slowTimer);slowTimer=null}
    if(stream){stream.getTracks().forEach(function(t){try{t.stop()}catch(e){}});stream=null}
    var video=byId('scanSerialVideo');if(video){try{video.pause()}catch(e){};video.srcObject=null}
    var modal=byId('scanSerialModal');if(modal)modal.classList.remove('show');
  }
  function ensureStyle(){
    if(byId('serial-scan-safe-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='serial-scan-safe-style-20260718-light-core-16';
    st.textContent='.scan-status.good{color:#057251;font-weight:650}.scan-status.warn{color:#835d00;font-weight:650}.scan-status.bad{color:#9c2f2f;font-weight:650}.scan-actions{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important}.scan-actions .btn{width:100%}.serial-scan-wrap{grid-template-columns:1fr auto!important}.serial-scan-hint{font-weight:450!important;color:#60766d!important}@media(max-width:900px){.scan-actions{grid-template-columns:1fr!important}.scan-box{max-height:calc(100vh - 96px);overflow:auto}.serial-scan-wrap{grid-template-columns:1fr!important}}';
    document.head.appendChild(st);
  }
  function ensureModal(){
    ensureStyle();
    if(!byId('scanSerialModal')){
      document.body.insertAdjacentHTML('beforeend','<div class="scan-modal" id="scanSerialModal"><div class="scan-box"><div class="scan-head"><h2>QuÃ©t sá»‘ seri thiáº¿t bá»‹</h2><button class="btn small" id="closeScanSerial" type="button">ÄÃ³ng</button></div><div class="scan-body"><video class="scan-video" id="scanSerialVideo" autoplay muted playsinline></video><p class="scan-status" id="scanSerialStatus">ÄÆ°a mÃ£ váº¡ch/QR vÃ o giá»¯a khung. Náº¿u mÃ¡y khÃ´ng há»— trá»£ quÃ©t trá»±c tiáº¿p, dÃ¹ng Chá»¥p/chá»n áº£nh hoáº·c nháº­p tay.</p><div class="scan-actions"><button class="btn" id="photoScanSerial" type="button">Chá»¥p/chá»n áº£nh</button><button class="btn" id="manualSerialBtn" type="button">Nháº­p tay</button><button class="btn primary" id="retryScanSerial" type="button">QuÃ©t láº¡i</button></div><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none"></div></div></div>');
    }
    var actions=document.querySelector('#scanSerialModal .scan-actions');
    if(actions&&!byId('photoScanSerial'))actions.insertAdjacentHTML('afterbegin','<button class="btn" id="photoScanSerial" type="button">Chá»¥p/chá»n áº£nh</button><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
    if(!byId('photoScanSerialInput')&&actions)actions.insertAdjacentHTML('afterend','<input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
    if(byId('closeScanSerial'))byId('closeScanSerial').onclick=stopScan;
    if(byId('manualSerialBtn'))byId('manualSerialBtn').onclick=function(){stopScan();var main=byId('maThietBi');if(main)main.focus()};
    if(byId('retryScanSerial'))byId('retryScanSerial').onclick=startScan;
    if(byId('photoScanSerial'))byId('photoScanSerial').onclick=function(){var input=byId('photoScanSerialInput')||byId('nativePhotoSerialInput');if(input)input.click()};
    var photo=byId('photoScanSerialInput');if(photo&&!photo.__serialSafeReady){photo.__serialSafeReady=true;photo.onchange=onPhoto}
  }
  function loadZxingSafe(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var urls=['https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js','https://unpkg.com/@zxing/browser@0.1.5/umd/index.min.js'];
      function next(){
        var url=urls.shift();if(!url)return reject(new Error('KhÃ´ng táº£i Ä‘Æ°á»£c bá»™ Ä‘á»c mÃ£'));
        var sc=document.createElement('script');sc.src=url;sc.async=true;sc.setAttribute('data-zxing-browser-safe','1');
        var done=false;
        sc.onload=function(){if(done)return;done=true;window.ZXingBrowser?resolve(window.ZXingBrowser):next()};
        sc.onerror=function(){if(done)return;done=true;next()};
        document.head.appendChild(sc);
        setTimeout(function(){if(!done){done=true;next()}},7000);
      }
      next();
    })
  }
  function detectByNativeImage(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('MÃ¡y chÆ°a há»— trá»£ Ä‘á»c mÃ£ tá»« áº£nh'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:formats});
      return detector.detect(bitmap).then(function(codes){
        try{bitmap.close&&bitmap.close()}catch(e){}
        if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;
        throw new Error('KhÃ´ng tháº¥y mÃ£ trong áº£nh');
      }).catch(function(err){try{bitmap.close&&bitmap.close()}catch(e){};throw err})
    })
  }
  function detectByZxingImage(file){
    var url=URL.createObjectURL(file);
    return loadZxingSafe().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromImageUrl(url).then(function(result){URL.revokeObjectURL(url);return result.getText?result.getText():String(result.text||result)})
    }).catch(function(err){URL.revokeObjectURL(url);throw err})
  }
  function onPhoto(e){
    var file=e.target.files&&e.target.files[0];e.target.value='';
    if(!file)return;
    ensureModal();
    var modal=byId('scanSerialModal');if(modal)modal.classList.add('show');
    var status=byId('scanSerialStatus');if(status){status.className='scan-status warn'}
    setStatus('Äang Ä‘á»c mÃ£ tá»« áº£nh. Chá»¥p gáº§n, rÃµ nÃ©t vÃ  Ä‘á»§ sÃ¡ng sáº½ dá»… nháº­n hÆ¡n...');
    detectByNativeImage(file).then(fillSerial).catch(function(){return detectByZxingImage(file).then(fillSerial)}).catch(function(){
      var status=byId('scanSerialStatus');if(status){status.className='scan-status bad'}
      setStatus('áº¢nh nÃ y chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n chá»¥p láº¡i gáº§n hÆ¡n hoáº·c nháº­p tay sá»‘ seri á»Ÿ Ã´ phÃ­a trÃªn.');
      var manual=prompt('áº¢nh chÆ°a Ä‘á»c Ä‘Æ°á»£c mÃ£. Báº¡n nháº­p tay sá»‘ seri táº¡i Ä‘Ã¢y náº¿u muá»‘n:');
      if(manual)fillSerial(manual);
    })
  }
  function startNativeCamera(video){
    if(!('BarcodeDetector' in window))return Promise.reject(new Error('MÃ¡y chÆ°a há»— trá»£ quÃ©t trá»±c tiáº¿p'));
    return navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(s){
      stream=s;video.srcObject=s;
      return video.play().then(function(){
        var detector=new BarcodeDetector({formats:formats});
        timer=setInterval(function(){
          detector.detect(video).then(function(codes){if(codes&&codes[0])fillSerial(codes[0].rawValue)}).catch(function(){});
        },380);
        var status=byId('scanSerialStatus');if(status){status.className='scan-status good'}
        setStatus('Camera Ä‘Ã£ má»Ÿ. ÄÆ°a mÃ£ váº¡ch/QR vÃ o giá»¯a khung Ä‘á»ƒ quÃ©t.');
      })
    })
  }
  function startZxingCamera(video){
    return loadZxingSafe().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromVideoDevice(null,video,function(result,err,c){
        if(c)controls=c;
        if(result)fillSerial(result.getText?result.getText():String(result.text||result));
      }).then(function(c){controls=c;var status=byId('scanSerialStatus');if(status){status.className='scan-status good'};setStatus('Camera Ä‘Ã£ má»Ÿ. ÄÆ°a mÃ£ váº¡ch/QR vÃ o giá»¯a khung Ä‘á»ƒ quÃ©t.')})
    })
  }
  function startScan(){
    ensureModal();stopScan();ensureModal();
    var modal=byId('scanSerialModal'),video=byId('scanSerialVideo'),status=byId('scanSerialStatus');
    if(status)status.className='scan-status warn';
    if(modal)modal.classList.add('show');
    if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){
      setStatus('Camera chá»‰ cháº¡y trÃªn link https. Báº¡n dÃ¹ng Chá»¥p/chá»n áº£nh hoáº·c nháº­p tay sá»‘ seri.');
      return;
    }
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
      setStatus('TrÃ¬nh duyá»‡t nÃ y khÃ´ng má»Ÿ Ä‘Æ°á»£c camera trá»±c tiáº¿p. Báº¡n dÃ¹ng Chá»¥p/chá»n áº£nh hoáº·c nháº­p tay sá»‘ seri.');
      return;
    }
    setStatus('Äang má»Ÿ camera. Náº¿u Ä‘iá»‡n thoáº¡i há»i quyá»n, báº¥m Cho phÃ©p.');
    slowTimer=setTimeout(function(){setStatus('Camera má»Ÿ hÆ¡i lÃ¢u. Báº¡n cÃ³ thá»ƒ báº¥m Chá»¥p/chá»n áº£nh hoáº·c nháº­p tay sá»‘ seri Ä‘á»ƒ lÃ m nhanh hÆ¡n.')},6500);
    startNativeCamera(video).catch(function(){return startZxingCamera(video)}).then(function(){
      if(slowTimer){clearTimeout(slowTimer);slowTimer=null}
    }).catch(function(){
      if(slowTimer){clearTimeout(slowTimer);slowTimer=null}
      var status=byId('scanSerialStatus');if(status)status.className='scan-status bad';
      setStatus('MÃ¡y nÃ y chÆ°a quÃ©t trá»±c tiáº¿p Ä‘Æ°á»£c trong trÃ¬nh duyá»‡t. Báº¡n dÃ¹ng Chá»¥p/chá»n áº£nh mÃ£ hoáº·c nháº­p tay sá»‘ seri.');
    })
  }
  function ensureDirectPhoto(){
    var input=byId('maThietBi');if(!input)return;
    var scan=byId('scanSerialBtn');if(scan){scan.textContent='QuÃ©t seri';scan.title='QuÃ©t báº±ng camera náº¿u mÃ¡y há»— trá»£';scan.onclick=function(e){if(e){e.preventDefault();e.stopPropagation()}startScan()}}
    var native=byId('nativePhotoSerialInput');if(native&&!native.__serialSafeReady){native.__serialSafeReady=true;native.onchange=onPhoto}
    var note=byId('nativePhotoNote');if(note)note.textContent='Chá»¥p/chá»n áº£nh tem mÃ£ váº¡ch/QR Ä‘á»ƒ app Ä‘á»c sá»‘ seri. Náº¿u mÃ¡y khÃ´ng Ä‘á»c Ä‘Æ°á»£c mÃ£, báº¡n váº«n nháº­p tay á»Ÿ Ã´ Sá»‘ seri bÃªn trÃªn.';
  }
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t&&(t.id==='scanSerialBtn'||t.id==='directScanBtn')){
      e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();startScan();
    }
  },true);
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__serialScanSafe20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(ensureDirectPhoto,140);return out};
    window.render.__serialScanSafe20260717=true;
  }
  ensureStyle();
  setTimeout(ensureDirectPhoto,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__xuatEmployeeWarehouseLink20260717)return;window.__xuatEmployeeWarehouseLink20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function uniquePush(arr,v){v=String(v||'').trim();if(v&&!arr.some(function(x){return norm(x)===norm(v)}))arr.push(v)}
  function isTransfer(type){return norm(type).indexOf('dieu chuyen')>=0}
  function employees(){
    if(typeof ensureEmployees==='function')return ensureEmployees(state);
    if(!Array.isArray(state.receiverDeptList))state.receiverDeptList=[];
    return state.receiverDeptList;
  }
  function employeeByName(name){
    var n=norm(name);
    return employees().find(function(x){return norm(x&&x.name)===n});
  }
  function warehouseByText(text){
    var n=norm(text);
    return (state.kho||[]).find(function(k){return norm(k[0])===n||norm(k[1])===n||norm(k[2])===n});
  }
  function deptToWarehouse(dept){return warehouseByText(dept)}
  function employeeAndWarehouseOptions(selected){
    var list=[];uniquePush(list,selected);
    employees().forEach(function(x){uniquePush(list,x.name)});
    (state.kho||[]).forEach(function(k){uniquePush(list,k[1])});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function deptOptionsLinked(selected){
    var list=[];uniquePush(list,selected);
    employees().forEach(function(x){uniquePush(list,x.dept)});
    (state.kho||[]).forEach(function(k){uniquePush(list,k[1]);uniquePush(list,k[2])});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function addRecipientToDirectory(name,dept){
    name=String(name||'').trim();dept=String(dept||'').trim();if(!name)return;
    if(typeof addReceiverName==='function'){addReceiverName(name,dept);return}
    if(!Array.isArray(state.receiverDeptList))state.receiverDeptList=[];
    var found=state.receiverDeptList.find(function(x){return norm(x.name)===norm(name)});
    if(found){if(dept)found.dept=dept}else state.receiverDeptList.push({name:name,dept:dept,note:''});
    state.receiverList=state.receiverDeptList.map(function(x){return x.name});
  }
  function autoFillRecipient(){
    var rec=byId('nguoiNhanXuat'),dept=byId('boPhanKhoXuat'),khoNhan=byId('khoNhan');
    if(!rec||!dept)return;
    var value=rec.value.trim();
    var emp=employeeByName(value);
    if(emp){
      if(emp.dept)dept.value=emp.dept;
      var empKho=deptToWarehouse(emp.dept||'');
      if(empKho&&khoNhan)khoNhan.value=empKho[0];
      return;
    }
    var kho=warehouseByText(value);
    if(kho){
      rec.value=kho[1];
      dept.value=kho[1];
      if(khoNhan)khoNhan.value=kho[0];
    }
  }
  function autoFillFromKhoNhan(){
    var rec=byId('nguoiNhanXuat'),dept=byId('boPhanKhoXuat'),khoNhan=byId('khoNhan'),loai=byId('loaiXuat');
    if(!rec||!dept||!khoNhan||!loai||!isTransfer(loai.value))return;
    var kho=(state.kho||[]).find(function(k){return k[0]===khoNhan.value});
    if(kho){
      if(!rec.value.trim()||warehouseByText(rec.value))rec.value=kho[1];
      if(!dept.value.trim()||warehouseByText(dept.value))dept.value=kho[1];
    }
  }
  function syncTransferFields(){
    var loai=byId('loaiXuat'),wrap=byId('khoNhanWrap'),hint=byId('receiverQuickHint');
    var transfer=loai&&isTransfer(loai.value);
    if(wrap)wrap.style.display=transfer?'grid':'none';
    if(hint)hint.textContent=transfer?'Äiá»u chuyá»ƒn ná»™i bá»™: Kho nháº­n láº¥y tá»« danh sÃ¡ch kho. NgÆ°á»i nháº­n/kho nháº­n sáº½ tá»± liÃªn káº¿t theo kho nháº­n.':'Cáº¥p phÃ¡t/sá»­ dá»¥ng/táº·ng: chá»n ngÆ°á»i nháº­n tá»« danh sÃ¡ch NhÃ¢n viÃªn, app tá»± Ä‘iá»n Bá»™ pháº­n/kho.';
    autoFillRecipient();
    autoFillFromKhoNhan();
  }
  window.screenXuat=function(){
    employees();
    return shell('xuat','Xuáº¥t kho','Chá»n ngÆ°á»i nháº­n tá»« danh sÃ¡ch nhÃ¢n viÃªn; bá»™ pháº­n/kho tá»± liÃªn káº¿t Ä‘á»ƒ theo dÃµi Ä‘Ã£ nháº­n gÃ¬.','<div class="panel"><div class="head"><h2>Táº¡o phiáº¿u xuáº¥t</h2></div><div class="body form xuat-linked-form"><label>Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>Loáº¡i xuáº¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m hÃ ng cÃ²n tá»“n"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuáº¥t<select id="khoXuat"></select></label><label id="khoNhanWrap">Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><label>NgÆ°á»i nháº­n/kho nháº­n<input id="nguoiNhanXuat" list="receiverXuatList" autocomplete="off" placeholder="GÃµ tÃªn nhÃ¢n viÃªn hoáº·c tÃªn kho nháº­n"><datalist id="receiverXuatList">'+employeeAndWarehouseOptions('')+'</datalist></label><label>Bá»™ pháº­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="Tá»± Ä‘iá»n theo ngÆ°á»i nháº­n/kho nháº­n"><datalist id="boPhanKhoXuatList">'+deptOptionsLinked('')+'</datalist></label><label>Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="receiverQuickHint">Chá»n ngÆ°á»i nháº­n Ä‘á»ƒ app tá»± Ä‘iá»n Bá»™ pháº­n/kho.</p><p class="hint full" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p><button class="btn primary" id="luuXuat">LÆ°u phiáº¿u xuáº¥t</button></div></div>');
  };
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(byId('hangXuat')?byId('hangXuat').value:'');
    if(!maHang)return alert('Chá»n Ä‘Ãºng hÃ ng hÃ³a tá»« danh sÃ¡ch gá»£i Ã½');
    if(!byId('khoXuat')||!byId('khoXuat').value)return alert('HÃ ng nÃ y chÆ°a cÃ³ kho cÃ²n tá»“n Ä‘á»ƒ xuáº¥t');
    var loai=byId('loaiXuat').value,transfer=isTransfer(loai),khoNhan=byId('khoNhan')?byId('khoNhan').value:'';
    var nguoiNhan=byId('nguoiNhanXuat')?byId('nguoiNhanXuat').value.trim():'';
    var dept=byId('boPhanKhoXuat')?byId('boPhanKhoXuat').value.trim():'';
    if(transfer){
      if(!khoNhan)return alert('Chá»n kho nháº­n khi Ä‘iá»u chuyá»ƒn ná»™i bá»™');
      var kho=(state.kho||[]).find(function(k){return k[0]===khoNhan});
      if(kho){if(!nguoiNhan)nguoiNhan=kho[1];if(!dept)dept=kho[1]}
    }else{
      if(!nguoiNhan)return alert('Chá»n hoáº·c nháº­p ngÆ°á»i nháº­n Ä‘á»ƒ theo dÃµi cáº¥p phÃ¡t');
      if(!dept)return alert('Nháº­p bá»™ pháº­n/kho cá»§a ngÆ°á»i nháº­n');
    }
    var sl=Number(byId('slXuat').value||0);if(sl<=0)return alert('Nháº­p sá»‘ lÆ°á»£ng lá»›n hÆ¡n 0');
    var key=byId('khoXuat').value+'|'+maHang;
    if((state.ton[key]||0)<sl)return alert('KhÃ´ng Ä‘á»§ tá»“n Ä‘á»ƒ xuáº¥t');
    state.ton[key]-=sl;
    addRecipientToDirectory(nguoiNhan,dept);
    var row=[today,byId('soXuat').value,byId('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=dept;
    state.bd.push(row);
    if(transfer)state.chuyen.push({so:byId('soXuat').value,tu:byId('khoXuat').value,den:khoNhan,hang:maHang,sl:sl,st:'Chá» nháº­n'});
    alert('ÄÃ£ lÆ°u phiáº¿u xuáº¥t');veTongQuanSauLuu();
  };
  function bindXuatLinked(){
    if(current!=='xuat')return;
    employees();
    var dl=byId('receiverXuatList');if(dl)dl.innerHTML=employeeAndWarehouseOptions((byId('nguoiNhanXuat')||{}).value||'');
    var dld=byId('boPhanKhoXuatList');if(dld)dld.innerHTML=deptOptionsLinked((byId('boPhanKhoXuat')||{}).value||'');
    var rec=byId('nguoiNhanXuat'),dept=byId('boPhanKhoXuat'),khoNhan=byId('khoNhan'),loai=byId('loaiXuat');
    if(rec&&!rec.__linkedReceiver){rec.__linkedReceiver=true;rec.addEventListener('input',autoFillRecipient);rec.addEventListener('change',autoFillRecipient)}
    if(dept&&!dept.__linkedDept){dept.__linkedDept=true;dept.addEventListener('change',function(){var k=deptToWarehouse(dept.value);if(k&&khoNhan)khoNhan.value=k[0]})}
    if(khoNhan&&!khoNhan.__linkedReceiver){khoNhan.__linkedReceiver=true;khoNhan.addEventListener('change',autoFillFromKhoNhan)}
    if(loai&&!loai.__linkedReceiver){loai.__linkedReceiver=true;loai.addEventListener('change',syncTransferFields)}
    if(byId('luuXuat'))byId('luuXuat').onclick=saveXuat;
    syncTransferFields();
  }
  function receivedRows(){
    var people=[];
    function addPerson(name,dept,note){
      name=String(name||'').trim();if(!name)return;
      var found=people.find(function(p){return norm(p.name)===norm(name)});
      if(found){if(dept&&!found.dept)found.dept=dept;if(note&&!found.note)found.note=note;return}
      people.push({name:name,dept:String(dept||''),note:String(note||'')});
    }
    employees().forEach(function(x){addPerson(x.name,x.dept,x.note)});
    (state.bd||[]).forEach(function(b){if(Number(b&&b[6]||0)>0)addPerson(b[7],b[12],'')});
    people.sort(function(a,b){return a.name.localeCompare(b.name,'vi')});
    return people.map(function(p){
      var totals={};
      (state.bd||[]).forEach(function(b){
        if(Number(b&&b[6]||0)>0&&norm(b[7])===norm(p.name)){
          var code=b[3],h=item(code),unit=h[3]||'';
          if(!totals[code])totals[code]={name:h[1]||code,unit:unit,qty:0};
          totals[code].qty+=Number(b[6]||0);
        }
      });
      var items=Object.keys(totals).map(function(code){var t=totals[code];return esc(t.name)+': <b>'+fmt(t.qty)+' '+esc(t.unit)+'</b>'}).join(' | ')||'<span class="muted">ChÆ°a cÃ³ phiáº¿u cáº¥p phÃ¡t/xuáº¥t</span>';
      return '<tr>'+td('NhÃ¢n viÃªn/kho nháº­n',esc(p.name))+td('Bá»™ pháº­n/kho',esc(p.dept||''))+td('ÄÃ£ nháº­n/cáº¥p phÃ¡t',items)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="3">ChÆ°a cÃ³ nhÃ¢n viÃªn/kho nháº­n.</td></tr>';
  }
  function addEmployeeReceivedPanel(){
    if(current!=='nhanvien')return;
    var section=byId('nhanvien');if(!section||byId('employeeReceivedPanel'))return;
    section.insertAdjacentHTML('beforeend','<div class="panel employee-issued-panel" id="employeeReceivedPanel"><div class="head"><h2>Theo dÃµi cáº¥p phÃ¡t theo nhÃ¢n viÃªn/kho</h2></div><div class="wrap"><table><thead><tr><th>NhÃ¢n viÃªn/kho nháº­n</th><th>Bá»™ pháº­n/kho</th><th>ÄÃ£ nháº­n/cáº¥p phÃ¡t</th></tr></thead><tbody>'+receivedRows()+'</tbody></table></div></div>');
  }
  function addStyle(){
    if(byId('xuat-employee-warehouse-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='xuat-employee-warehouse-style-20260718-light-core-16';
    st.textContent='.xuat-linked-form #receiverQuickHint{margin-top:-2px}.employee-issued-panel{margin-top:12px}.employee-issued-panel td:last-child{line-height:1.55}.employee-issued-panel .muted{color:#6b7d75}@media(max-width:900px){.xuat-linked-form{gap:7px!important}.xuat-linked-form label{gap:4px!important}.employee-issued-panel table{min-width:680px}}';
    document.head.appendChild(st);
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__xuatEmployeeWarehouseLink20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);bindXuatLinked();addEmployeeReceivedPanel();return out};
    window.bindForms.__xuatEmployeeWarehouseLink20260717=true;
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__xuatEmployeeWarehouseLink20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(function(){bindXuatLinked();addEmployeeReceivedPanel()},80);return out};
    window.render.__xuatEmployeeWarehouseLink20260717=true;
  }
  addStyle();
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideItemDetailButtonsFinal20260717)return;window.__hideItemDetailButtonsFinal20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function apply(){
    [].slice.call(document.querySelectorAll('.item-detail-btn')).forEach(function(btn){
      btn.setAttribute('aria-hidden','true');
      btn.setAttribute('tabindex','-1');
    });
  }
  if(!document.getElementById('hide-item-detail-buttons-final-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='hide-item-detail-buttons-final-style-20260718-light-core-16';
    st.textContent='.item-detail-btn{display:none!important}.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{content:none!important;display:none!important}td[data-label="HÃ ng"],td[data-label="TÃªn hÃ ng"],.item-name-link,.item-suggest-name,.overview-stock-name,.ton-suggest-title,.stock-card-item{cursor:pointer!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__hideItemDetailButtonsFinal20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,0);return out};
    window.render.__hideItemDetailButtonsFinal20260717=true;
  }
  var oldShow=window.showReport;
  if(typeof oldShow==='function'&&!oldShow.__hideItemDetailButtonsFinal20260717){
    window.showReport=function(){var out=oldShow.apply(this,arguments);setTimeout(apply,0);return out};
    window.showReport.__hideItemDetailButtonsFinal20260717=true;
  }
  setTimeout(apply,80);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__xuatLayoutProfessional20260717)return;window.__xuatLayoutProfessional20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  window.screenXuat=function(){
    return shell('xuat','Xuáº¥t kho','Chá»n hÃ ng cÃ²n tá»“n, ngÆ°á»i nháº­n vÃ  bá»™ pháº­n/kho Ä‘á»ƒ theo dÃµi cáº¥p phÃ¡t rÃµ rÃ ng.','<div class="panel xuat-form-panel"><div class="head xuat-form-head"><h2>Táº¡o phiáº¿u xuáº¥t</h2><span class="xuat-flow-tag">Phiáº¿u tá»± Ä‘á»™ng</span></div><div class="body form xuat-linked-form xuat-modern-form">'+
      '<div class="xuat-section xuat-section-slip"><div class="xuat-section-title">ThÃ´ng tin phiáº¿u</div><div class="xuat-row xuat-row-slip">'+
        '<label class="xuat-field-slip">Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label>'+
        '<label class="xuat-field-type">Loáº¡i xuáº¥t<select id="loaiXuat"></select></label>'+
        '<label class="xuat-field-qty">Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" min="1" value="1"></label>'+
      '</div></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">HÃ ng hÃ³a vÃ  kho xuáº¥t</div><div class="xuat-row xuat-row-item">'+
        '<label class="item-search-field xuat-item-field">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m hÃ ng cÃ²n tá»“n"><div id="hangXuatSuggest" class="item-suggest-list"></div></label>'+
        '<label class="xuat-field-kho">Kho xuáº¥t<select id="khoXuat"></select></label>'+
      '</div><p class="hint xuat-hint" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">NgÆ°á»i nháº­n / kho nháº­n</div><div class="xuat-row xuat-row-recipient">'+
        '<label class="xuat-field-receiver">NgÆ°á»i nháº­n/kho nháº­n<input id="nguoiNhanXuat" list="receiverXuatList" autocomplete="off" placeholder="GÃµ tÃªn nhÃ¢n viÃªn hoáº·c tÃªn kho nháº­n"><datalist id="receiverXuatList"></datalist></label>'+
        '<label class="xuat-field-dept">Bá»™ pháº­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="Tá»± Ä‘iá»n theo ngÆ°á»i nháº­n/kho nháº­n"><datalist id="boPhanKhoXuatList"></datalist></label>'+
        '<label id="khoNhanWrap" class="xuat-field-transfer">Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label>'+
      '</div><p class="hint xuat-hint" id="receiverQuickHint">Cáº¥p phÃ¡t/sá»­ dá»¥ng/táº·ng: chá»n ngÆ°á»i nháº­n tá»« danh sÃ¡ch NhÃ¢n viÃªn, app tá»± Ä‘iá»n Bá»™ pháº­n/kho.</p></div>'+
      '<div class="xuat-actions"><button class="btn primary" id="luuXuat" type="button">LÆ°u phiáº¿u xuáº¥t</button></div>'+
    '</div></div>');
  };
  function addStyle(){
    if(document.getElementById('xuat-layout-professional-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='xuat-layout-professional-style-20260718-light-core-16';
    st.textContent='#xuat .xuat-form-panel{max-width:1180px;margin:0 auto 14px!important;overflow:hidden!important}#xuat .xuat-form-head{padding:11px 14px!important;background:#fbfffd!important}#xuat .xuat-form-head h2{font-size:16px!important;margin:0!important}#xuat .xuat-flow-tag{font-size:12px;font-weight:700;color:#087253;background:#e8f7f0;border:1px solid #c9ebdc;border-radius:999px;padding:4px 9px}.xuat-modern-form{display:block!important;padding:12px!important}.xuat-modern-form .full{grid-column:auto!important}.xuat-section{border:1px solid #d4e7de;background:#fbfffd;border-radius:8px;padding:10px 12px;margin:0 0 10px;box-shadow:0 4px 12px rgba(8,71,49,.035)}.xuat-section-title{font-size:13px;font-weight:800;color:#006b50;margin:0 0 8px}.xuat-row{display:grid;gap:10px;align-items:end}.xuat-row-slip{grid-template-columns:minmax(130px,180px) minmax(240px,1fr) minmax(110px,150px)}.xuat-row-item{grid-template-columns:minmax(0,1fr) minmax(220px,280px)}.xuat-row-recipient{grid-template-columns:minmax(240px,1fr) minmax(240px,1fr) minmax(220px,280px)}#xuat .xuat-modern-form label{display:grid!important;gap:5px!important;margin:0!important;font-size:12px!important;font-weight:700!important;color:#4d665d!important}#xuat .xuat-modern-form input,#xuat .xuat-modern-form select{height:38px!important;min-height:38px!important;border-radius:7px!important;background:#fff!important;font-size:13px!important}#xuat .xuat-modern-form input:focus,#xuat .xuat-modern-form select:focus{border-color:#00946e!important;box-shadow:0 0 0 3px rgba(0,148,110,.12)!important}.xuat-hint{margin:7px 0 0!important;font-size:12px!important;color:#63776f!important}.xuat-actions{display:flex;justify-content:flex-end;margin-top:2px}.xuat-actions .btn{height:40px!important;min-height:40px!important;width:min(360px,100%)!important;border-radius:7px!important;font-size:13px!important;font-weight:800!important}#xuat #hangXuatSuggest{margin-top:4px!important}@media(max-width:900px){#xuat{padding-bottom:98px!important}#xuat .xuat-form-panel{margin:0 4px 10px!important;border-radius:8px!important}#xuat .xuat-form-head{padding:9px 10px!important}#xuat .xuat-form-head h2{font-size:15px!important}.xuat-flow-tag{display:none!important}.xuat-modern-form{padding:8px!important}.xuat-section{padding:8px!important;margin-bottom:8px!important}.xuat-section-title{font-size:12.5px!important;margin-bottom:6px!important}.xuat-row,.xuat-row-slip,.xuat-row-item,.xuat-row-recipient{grid-template-columns:1fr!important;gap:7px!important}#xuat .xuat-modern-form label{font-size:11.8px!important;gap:4px!important}#xuat .xuat-modern-form input,#xuat .xuat-modern-form select{height:42px!important;min-height:42px!important;font-size:14px!important;padding:8px 10px!important}.xuat-hint{font-size:11.5px!important;line-height:1.35!important}.xuat-actions{position:sticky;bottom:86px;z-index:5;background:linear-gradient(180deg,rgba(238,247,242,0),#eef7f2 28%);padding-top:8px}.xuat-actions .btn{width:100%!important;height:44px!important;min-height:44px!important}.xuat-field-transfer[style*="display: none"],#khoNhanWrap[style*="display: none"]{display:none!important}}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__xuatLayoutProfessional20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(addStyle,0);return out};
    window.render.__xuatLayoutProfessional20260717=true;
  }
  addStyle();
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__xuatLayoutPairs20260717)return;window.__xuatLayoutPairs20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  window.screenXuat=function(){
    if(typeof employees==='function')employees();
    var html='<div class="panel xuat-form-panel"><div class="head xuat-form-head"><h2>Táº¡o phiáº¿u xuáº¥t</h2><span class="xuat-flow-tag">Phiáº¿u tá»± Ä‘á»™ng</span></div><div class="body form xuat-linked-form xuat-modern-form">'+
      '<div class="xuat-section xuat-section-slip"><div class="xuat-section-title">ThÃ´ng tin phiáº¿u</div><div class="xuat-row xuat-row-slip">'+
        '<label class="xuat-field-slip">Sá»‘ phiáº¿u tá»± Ä‘á»™ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label>'+
        '<label class="xuat-field-type">Loáº¡i xuáº¥t<select id="loaiXuat"></select></label>'+
      '</div></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">HÃ ng hÃ³a, kho xuáº¥t vÃ  sá»‘ lÆ°á»£ng</div>'+
        '<label class="item-search-field xuat-item-field xuat-item-wide">HÃ ng hÃ³a<input id="hangXuat" autocomplete="off" placeholder="GÃµ tÃªn hÃ ng Ä‘á»ƒ tÃ¬m hÃ ng cÃ²n tá»“n"><div id="hangXuatSuggest" class="item-suggest-list"></div></label>'+
        '<div class="xuat-row xuat-row-stock">'+
          '<label class="xuat-field-kho">Kho xuáº¥t<select id="khoXuat"></select></label>'+
          '<label class="xuat-field-qty">Sá»‘ lÆ°á»£ng<input id="slXuat" type="number" min="1" value="1"></label>'+
        '</div><p class="hint xuat-hint" id="goiYKhoXuat">GÃµ tÃªn hÃ ng Ä‘á»ƒ xem kho cÃ²n tá»“n.</p></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">NgÆ°á»i nháº­n vÃ  bá»™ pháº­n/kho</div><div class="xuat-row xuat-row-recipient">'+
        '<label class="xuat-field-receiver">NgÆ°á»i nháº­n/kho nháº­n<input id="nguoiNhanXuat" list="receiverXuatList" autocomplete="off" placeholder="GÃµ tÃªn nhÃ¢n viÃªn hoáº·c tÃªn kho nháº­n"><datalist id="receiverXuatList"></datalist></label>'+
        '<label class="xuat-field-dept">Bá»™ pháº­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="Tá»± Ä‘iá»n theo ngÆ°á»i nháº­n/kho nháº­n"><datalist id="boPhanKhoXuatList"></datalist></label>'+
      '</div><label id="khoNhanWrap" class="xuat-field-transfer xuat-transfer-single">Kho nháº­n náº¿u Ä‘iá»u chuyá»ƒn<select id="khoNhan"></select></label><p class="hint xuat-hint" id="receiverQuickHint">Cáº¥p phÃ¡t/sá»­ dá»¥ng/táº·ng: chá»n ngÆ°á»i nháº­n tá»« danh sÃ¡ch NhÃ¢n viÃªn, app tá»± Ä‘iá»n Bá»™ pháº­n/kho.</p></div>'+
      '<div class="xuat-actions"><button class="btn primary" id="luuXuat" type="button">LÆ°u phiáº¿u xuáº¥t</button></div>'+
    '</div></div>';
    return shell('xuat','Xuáº¥t kho','Chá»n ngÆ°á»i nháº­n tá»« danh sÃ¡ch nhÃ¢n viÃªn; bá»™ pháº­n/kho tá»± liÃªn káº¿t Ä‘á»ƒ theo dÃµi Ä‘Ã£ nháº­n gÃ¬.',html);
  };
  function addStyle(){
    if(document.getElementById('xuat-layout-pairs-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='xuat-layout-pairs-style-20260718-light-core-16';
    st.textContent='#xuat .xuat-row-slip{grid-template-columns:minmax(150px,220px) minmax(240px,1fr)!important}#xuat .xuat-item-wide{display:grid!important;margin-bottom:8px!important}#xuat .xuat-row-stock{display:grid;grid-template-columns:minmax(240px,1fr) minmax(120px,180px);gap:10px;align-items:end}#xuat .xuat-row-recipient{grid-template-columns:minmax(240px,1fr) minmax(240px,1fr)!important}#xuat .xuat-transfer-single{display:grid;margin-top:8px;max-width:360px}#xuat .xuat-field-transfer[style*="display: none"],#xuat #khoNhanWrap[style*="display: none"]{display:none!important}@media(max-width:900px){#xuat .xuat-row-slip,#xuat .xuat-row-stock,#xuat .xuat-row-recipient{grid-template-columns:1fr!important;gap:7px!important}#xuat .xuat-transfer-single{max-width:none!important;margin-top:7px!important}}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__xuatLayoutPairs20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(addStyle,0);return out};
    window.render.__xuatLayoutPairs20260717=true;
  }
  addStyle();
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__reportEmployeeIssued20260717)return;window.__reportEmployeeIssued20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function employeesList(){
    if(typeof ensureEmployees==='function')return ensureEmployees(state);
    if(!Array.isArray(state.receiverDeptList))state.receiverDeptList=[];
    return state.receiverDeptList;
  }
  function itemInfo(code){
    var h=typeof item==='function'?item(code):(state.hang||[]).find(function(x){return x&&x[0]===code})||[code,code,'','',''];
    return {name:h[1]||code,unit:h[3]||''};
  }
  function issuedPeople(){
    var people=[];
    function add(name,dept,note){
      name=String(name||'').trim();if(!name)return;
      var found=people.find(function(p){return norm(p.name)===norm(name)});
      if(found){if(dept&&!found.dept)found.dept=dept;if(note&&!found.note)found.note=note;return}
      people.push({name:name,dept:String(dept||''),note:String(note||'')});
    }
    employeesList().forEach(function(x){add(x.name,x.dept,x.note)});
    (state.bd||[]).forEach(function(b){if(Number(b&&b[6]||0)>0)add(b[7],b[12],'')});
    people.sort(function(a,b){return a.name.localeCompare(b.name,'vi')});
    return people;
  }
  function issuedRows(){
    var rows=issuedPeople().map(function(p){
      var totals={},totalQty=0,slips=0;
      (state.bd||[]).forEach(function(b){
        if(Number(b&&b[6]||0)>0&&norm(b[7])===norm(p.name)){
          var code=b[3],info=itemInfo(code),qty=Number(b[6]||0);
          if(!totals[code])totals[code]={name:info.name,unit:info.unit,qty:0};
          totals[code].qty+=qty;totalQty+=qty;slips+=1;
        }
      });
      var items=Object.keys(totals).map(function(code){
        var t=totals[code];
        return '<span class="issued-item">'+esc(t.name)+': <b>'+fmt(t.qty)+' '+esc(t.unit)+'</b></span>';
      }).join('')||'<span class="muted">ChÆ°a cÃ³ phiáº¿u cáº¥p phÃ¡t/xuáº¥t</span>';
      return '<tr>'+td('NhÃ¢n viÃªn/kho nháº­n',esc(p.name))+td('Bá»™ pháº­n/kho',esc(p.dept||''))+td('ÄÃ£ nháº­n/cáº¥p phÃ¡t',items)+td('Tá»•ng SL',totalQty?fmt(totalQty):'',totalQty?'num':'')+td('Sá»‘ phiáº¿u',slips?fmt(slips):'',slips?'num':'')+'</tr>';
    }).join('');
    return rows||'<tr><td class="empty" colspan="5">ChÆ°a cÃ³ nhÃ¢n viÃªn/kho nháº­n.</td></tr>';
  }
  function issuedSummary(){
    var people=issuedPeople(),qty=0,active=0;
    people.forEach(function(p){
      var has=false;
      (state.bd||[]).forEach(function(b){if(Number(b&&b[6]||0)>0&&norm(b[7])===norm(p.name)){qty+=Number(b[6]||0);has=true}});
      if(has)active+=1;
    });
    return '<div class="issued-summary">'+
      '<div><span>NgÆ°á»i/kho nháº­n</span><b>'+fmt(people.length)+'</b></div>'+
      '<div><span>ÄÃ£ phÃ¡t sinh</span><b>'+fmt(active)+'</b></div>'+
      '<div><span>Tá»•ng Ä‘Ã£ cáº¥p/xuáº¥t</span><b>'+fmt(qty)+'</b></div>'+
    '</div>';
  }
  function renderIssuedReport(btn){
    if(btn){document.querySelectorAll('#baocao .tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    var title=byId('rpTitle'),rp=byId('rp');if(!rp)return;
    if(title)title.textContent='Cáº¥p phÃ¡t theo nhÃ¢n viÃªn/kho';
    rp.innerHTML=issuedSummary()+'<table class="issued-report-table"><thead><tr><th>NhÃ¢n viÃªn/kho nháº­n</th><th>Bá»™ pháº­n/kho</th><th>ÄÃ£ nháº­n/cáº¥p phÃ¡t</th><th>Tá»•ng SL</th><th>Sá»‘ phiáº¿u</th></tr></thead><tbody>'+issuedRows()+'</tbody></table>';
  }
  var oldScreen=window.screenBaoCao;
  if(typeof oldScreen==='function'&&!oldScreen.__reportEmployeeIssued20260717){
    window.screenBaoCao=function(){
      var html=oldScreen.apply(this,arguments);
      if(html.indexOf("showReport('capnhanvien'")<0){
        html=html.replace(/(<div class="tabs">[\s\S]*?)(<\/div>)/,"$1<button class=\"btn tab\" onclick=\"showReport('capnhanvien',this)\">Cáº¥p phÃ¡t NV/Kho</button>$2");
      }
      return html;
    };
    window.screenBaoCao.__reportEmployeeIssued20260717=true;
  }
  var oldShow=window.showReport;
  if(typeof oldShow==='function'&&!oldShow.__reportEmployeeIssued20260717){
    window.showReport=function(mode,btn){
      if(mode==='capnhanvien'){renderIssuedReport(btn);return}
      return oldShow.apply(this,arguments);
    };
    window.showReport.__reportEmployeeIssued20260717=true;
  }
  if(!byId('report-employee-issued-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='report-employee-issued-style-20260718-light-core-16';
    st.textContent='.issued-summary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:0 0 10px}.issued-summary div{border:1px solid #cfe6dd;background:#f7fffb;border-radius:8px;padding:8px 10px}.issued-summary span{display:block;font-size:12px;color:#5f766d}.issued-summary b{display:block;font-size:18px;margin-top:3px;color:#003b2e}.issued-report-table td:nth-child(3){line-height:1.6}.issued-item{display:inline-block;margin-right:12px;white-space:nowrap}.issued-report-table .muted{color:#6d7c76}@media(max-width:900px){.issued-summary{grid-template-columns:1fr}.issued-report-table{min-width:760px}.issued-item{white-space:normal;display:block;margin:0 0 3px}}';
    document.head.appendChild(st);
  }
  window.openIssuedEmployeeReport=function(){current='baocao';render();setTimeout(function(){showReport('capnhanvien')},0)};
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itCatalogSeparate20260717)return;window.__itCatalogSeparate20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function isIt(h){return norm(h&&h[2])==='thiet bi it'}
  function hangList(){return Array.isArray(state.hang)?state.hang:[]}
  function itRows(){return hangList().map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return isIt(r.h)})}
  function normalRows(){return hangList().map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return !isIt(r.h)})}
  function desc(code){var r=hangList().map(hnorm).find(function(h){return h[0]===code});return String(r&&r[4]||'').trim()}
  function detailText(code){return desc(code)?esc(desc(code)):'<span class="hint">KhÃ´ng cÃ³</span>'}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function nextItCode(){return typeof nextItemCode==='function'?nextItemCode('Thiáº¿t bá»‹ IT'):'TB'+String(itRows().length+1).padStart(3,'0')}
  function dvtOptions(selected){
    var list=Array.isArray(state.dvtList)?state.dvtList:['CÃ¡i'];
    return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function itemUsed(code){
    var hasStock=Object.keys(state.ton||{}).some(function(k){return k.split('|')[1]===code&&Number(state.ton[k]||0)!==0});
    var hasSlip=(state.bd||[]).some(function(r){return r&&r[3]===code});
    var hasIT=(state.thietBiIT||[]).some(function(raw){var x=typeof normalizeThietBi==='function'?normalizeThietBi(raw):raw;return x&&x[2]===code});
    return hasStock||hasSlip||hasIT;
  }
  function normalItemRows(){
    return normalRows().map(function(r){
      var h=r.h,name='<button class="item-name-link" type="button" data-item-detail="'+esc(h[0])+'">'+esc(h[1])+'</button>';
      var actions='<div class="hang-actions"><button class="btn small" onclick="editHang('+r.i+')">Sá»­a</button><button class="btn small bad" onclick="deleteHangAdmin('+r.i+')">XÃ³a</button></div>';
      return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn hÃ ng',name)+td('NhÃ³m',esc(h[2]))+td('ÄVT',esc(h[3]))+td('Chi tiáº¿t',detailText(h[0]))+td('Thao tÃ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="6">ChÆ°a cÃ³ hÃ ng hÃ³a thÆ°á»ng.</td></tr>';
  }
  function itCatalogRows(){
    return itRows().map(function(r){
      var h=r.h,actions='<div class="hang-actions"><button class="btn small" onclick="editItHang('+r.i+')">Sá»­a</button><button class="btn small bad" onclick="deleteItHang('+r.i+')">XÃ³a</button></div>';
      return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn thiáº¿t bá»‹ IT',esc(h[1]))+td('ÄVT',esc(h[3]))+td('MÃ´ táº£',detailText(h[0]))+td('Thao tÃ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÆ°a cÃ³ máº·t hÃ ng IT. HÃ£y táº¡o á»Ÿ khung bÃªn pháº£i.</td></tr>';
  }
  var oldScreenHang=window.screenHang;
  if(typeof oldScreenHang==='function'){
    window.screenHang=function(){
      if(!adminOk())return shell('hanghoa','KhÃ´ng cÃ³ quyá»n','TÃ i khoáº£n nhÃ¢n viÃªn khÃ´ng Ä‘Æ°á»£c sá»­a danh má»¥c hÃ ng hÃ³a.','<div class="panel"><div class="body">Vui lÃ²ng liÃªn há»‡ Admin náº¿u cáº§n thÃªm, sá»­a hoáº·c xÃ³a hÃ ng hÃ³a.</div></div>');
      return shell('hanghoa','Danh má»¥c hÃ ng hÃ³a','HÃ ng hÃ³a thÆ°á»ng Ä‘Æ°á»£c quáº£n lÃ½ táº¡i Ä‘Ã¢y. Thiáº¿t bá»‹ IT Ä‘Æ°á»£c tÃ¡ch riÃªng trong má»¥c Thiáº¿t bá»‹ IT.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃ¡ch hÃ ng hÃ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn hÃ ng</th><th>NhÃ³m</th><th>ÄVT</th><th>Chi tiáº¿t</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+normalItemRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃ´ng tin hÃ ng hÃ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃ£ hÃ ng tá»± Ä‘á»™ng<input id="maHang" readonly></label><label>TÃªn hÃ ng<input id="tenHang" placeholder="TÃªn hÃ ng hÃ³a"></label><label>NhÃ³m<select id="nhomHang"></select></label><label>ÄVT<select id="dvt"></select></label><label class="full">MÃ´ táº£ / Size / mÃ u / chi tiáº¿t<input id="thuocTinh" placeholder="VD: Size L; mÃ u xanh; cháº¥t cotton; tay ngáº¯n"></label><button class="btn primary" id="luuHang">LÆ°u hÃ ng hÃ³a</button><button class="btn" id="huyHang">Táº¡o má»›i</button></div></div></div>');
    };
  }
  var oldScreenThietBi=window.screenThietBi;
  if(typeof oldScreenThietBi==='function'){
    window.screenThietBi=function(){
      var html=oldScreenThietBi.apply(this,arguments);
      if(html.indexOf('id="itCatalogPanel"')<0){
        var panel='<div class="grid it-catalog-grid" id="itCatalogPanel"><div class="panel"><div class="head"><h2>Danh má»¥c máº·t hÃ ng IT</h2></div><div class="wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn thiáº¿t bá»‹ IT</th><th>ÄVT</th><th>MÃ´ táº£</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+itCatalogRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃªm / sá»­a máº·t hÃ ng IT</h2></div><div class="body form"><input id="editItHangIndex" type="hidden"><label>MÃ£ thiáº¿t bá»‹ IT<input id="itHangCode"></label><label>TÃªn thiáº¿t bá»‹ IT<input id="itHangName" placeholder="VD: MÃ n hÃ¬nh Dell"></label><label>ÄVT<select id="itHangDvt">'+dvtOptions('CÃ¡i')+'</select></label><label class="full">MÃ´ táº£ / cáº¥u hÃ¬nh<input id="itHangDesc" placeholder="VD: 24 inch, HDMI, mÃ u Ä‘en"></label><button class="btn primary" id="saveItHang" type="button">LÆ°u máº·t hÃ ng IT</button><button class="btn" id="newItHang" type="button">Táº¡o má»›i</button><p class="hint full">Danh má»¥c nÃ y dÃ¹ng cho Ã´ Máº·t hÃ ng IT á»Ÿ trÃªn. Thiáº¿t bá»‹ cá»¥ thá»ƒ váº«n theo dÃµi báº±ng sá»‘ seri.</p></div></div></div>';
        html=html.replace('</section>',panel+'</section>');
      }
      return html;
    };
  }
  window.editItHang=function(i){
    var h=hnorm(state.hang[i]);if(!h||!h[0])return;
    if(byId('editItHangIndex'))byId('editItHangIndex').value=i;
    if(byId('itHangCode'))byId('itHangCode').value=h[0];
    if(byId('itHangName'))byId('itHangName').value=h[1]||'';
    if(byId('itHangDvt'))byId('itHangDvt').value=h[3]||'CÃ¡i';
    if(byId('itHangDesc'))byId('itHangDesc').value=h[4]||'';
  };
  window.resetItHang=function(){
    if(byId('editItHangIndex'))byId('editItHangIndex').value='';
    if(byId('itHangCode'))byId('itHangCode').value=nextItCode();
    if(byId('itHangName'))byId('itHangName').value='';
    if(byId('itHangDvt'))byId('itHangDvt').value='CÃ¡i';
    if(byId('itHangDesc'))byId('itHangDesc').value='';
  };
  window.saveItHang=function(){
    if(!adminOk())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c sá»­a danh má»¥c thiáº¿t bá»‹ IT.');
    var i=byId('editItHangIndex')?byId('editItHangIndex').value:'',code=byId('itHangCode')?byId('itHangCode').value.trim():nextItCode(),name=byId('itHangName')?byId('itHangName').value.trim():'';
    if(!name)return alert('Nháº­p tÃªn thiáº¿t bá»‹ IT');
    var row=[code,name,'Thiáº¿t bá»‹ IT',byId('itHangDvt')?byId('itHangDvt').value:'CÃ¡i',byId('itHangDesc')?byId('itHangDesc').value.trim():''];
    if(i===''){
      if(hangList().some(function(raw){return hnorm(raw)[0]===code}))code=row[0]=nextItCode();
      state.hang.push(row);
    }else state.hang[Number(i)]=row;
    save();render();
  };
  window.deleteItHang=function(i){
    if(!adminOk())return alert('Chá»‰ quáº£n trá»‹ viÃªn Ä‘Æ°á»£c xÃ³a danh má»¥c thiáº¿t bá»‹ IT.');
    var h=hnorm(state.hang[i]);if(!h||!h[0])return;
    if(itemUsed(h[0]))return alert('Máº·t hÃ ng IT nÃ y Ä‘Ã£ cÃ³ thiáº¿t bá»‹, tá»“n kho hoáº·c phiáº¿u liÃªn quan. Äá»ƒ an toÃ n dá»¯ liá»‡u, báº¡n hÃ£y sá»­a tÃªn/mÃ´ táº£ thay vÃ¬ xÃ³a.');
    if(!confirm('XÃ³a máº·t hÃ ng IT "'+(h[1]||h[0])+'"?'))return;
    state.hang.splice(i,1);save();render();
  };
  function bindSeparateIt(){
    if(current==='hanghoa'){
      var nhom=byId('nhomHang');
      if(nhom){
        [].slice.call(nhom.options).forEach(function(op){if(norm(op.value)==='thiet bi it')op.remove()});
        if(!nhom.value&&nhom.options.length)nhom.value=nhom.options[0].value;
        if(byId('editHang')&&byId('editHang').value===''&&byId('maHang')&&typeof nextItemCode==='function')byId('maHang').value=nextItemCode(nhom.value);
      }
    }
    if(current==='thietbi'){
      var sel=byId('hangThietBi'),items=itRows().map(function(r){return [r.h[0],r.h[0]+' - '+r.h[1]]});
      if(sel)sel.innerHTML=items.length?items.map(function(x){return '<option value="'+esc(x[0])+'">'+esc(x[1])+'</option>'}).join(''):'<option value="">ChÆ°a cÃ³ máº·t hÃ ng IT</option>';
      var dvt=byId('itHangDvt');if(dvt)dvt.innerHTML=dvtOptions(dvt.value||'CÃ¡i');
      if(byId('saveItHang'))byId('saveItHang').onclick=saveItHang;
      if(byId('newItHang'))byId('newItHang').onclick=resetItHang;
      if(byId('itHangCode')&&!byId('editItHangIndex').value)byId('itHangCode').value=nextItCode();
    }
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogSeparate20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);bindSeparateIt();return out};
    window.bindForms.__itCatalogSeparate20260717=true;
  }
  if(!byId('it-catalog-separate-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='it-catalog-separate-style-20260718-light-core-16';
    st.textContent='#itCatalogPanel{margin-top:12px}.it-catalog-grid .hint{color:#6b7d75}.it-catalog-grid table td{vertical-align:middle}@media(max-width:900px){#itCatalogPanel{margin-top:8px}.it-catalog-grid table{min-width:680px}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itCatalogMerged20260717)return;window.__itCatalogMerged20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','',''])}catch(e){return raw||['','','','','','','']}}
  function isIt(h){return norm(h&&h[2])==='thiet bi it'}
  function hangList(){return Array.isArray(state.hang)?state.hang:[]}
  function itRows(){return hangList().map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return isIt(r.h)})}
  function itemName(code){try{return item(code)[1]||code}catch(e){var h=hangList().map(hnorm).find(function(x){return x[0]===code});return h?h[1]:code}}
  function dvtOptions(selected){var list=Array.isArray(state.dvtList)?state.dvtList:['CÃ¡i'];return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('')}
  function nextItCode(){return typeof nextItemCode==='function'?nextItemCode('Thiáº¿t bá»‹ IT'):'TB'+String(itRows().length+1).padStart(3,'0')}
  function deviceRows(){
    return (state.thietBiIT||[]).map(function(raw,i){
      var x=tnorm(raw),serial=x[1]||x[0]||'',actions='<div class="row-actions"><button class="btn small" onclick="chuyenNguoiDungThietBi('+i+')">Chuyá»ƒn ngÆ°á»i dÃ¹ng</button><button class="btn small" onclick="traVeKhoThietBi('+i+')">Vá» kho</button><button class="btn small" onclick="editThietBi('+i+')">Sá»­a</button></div>';
      return '<tr>'+td('Sá»‘ seri',esc(serial))+td('Thiáº¿t bá»‹',esc(itemName(x[2])))+td('Nguá»“n nháº­p',esc(x[3]||''))+td('NgÃ y nháº­p',esc(x[4]||''))+td('Äang sá»­ dá»¥ng bá»Ÿi',esc(x[5]||''))+td('Tráº¡ng thÃ¡i','<span class="tag">'+esc(x[6]||'')+'</span>')+td('Ghi chÃº',esc(x[7]||''))+td('Thao tÃ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="8">ChÆ°a cÃ³ thiáº¿t bá»‹ IT theo sá»‘ seri.</td></tr>';
  }
  function catalogRows(){
    return itRows().map(function(r){
      var h=r.h,actions='<div class="hang-actions"><button class="btn small" onclick="editItHang('+r.i+')">Sá»­a</button><button class="btn small bad" onclick="deleteItHang('+r.i+')">XÃ³a</button></div>';
      return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn thiáº¿t bá»‹ IT',esc(h[1]))+td('ÄVT',esc(h[3]))+td('MÃ´ táº£',esc(h[4]||'KhÃ´ng cÃ³'))+td('Thao tÃ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÆ°a cÃ³ máº·t hÃ ng IT. Táº¡o á»Ÿ khung bÃªn pháº£i.</td></tr>';
  }
  window.screenThietBi=function(){
    var body='<div class="grid it-merged-layout">'+
      '<div class="panel it-merged-list"><div class="head"><h2>Danh sÃ¡ch thiáº¿t bá»‹</h2></div><div class="wrap it-device-wrap"><table><thead><tr><th>Sá»‘ seri</th><th>Thiáº¿t bá»‹</th><th>Nguá»“n nháº­p</th><th>NgÃ y nháº­p</th><th>Äang sá»­ dá»¥ng bá»Ÿi</th><th>Tráº¡ng thÃ¡i</th><th>Ghi chÃº</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+deviceRows()+'</tbody></table></div>'+
        '<div class="it-catalog-inside"><div class="head compact-head"><h2>Danh má»¥c máº·t hÃ ng IT</h2></div><div class="wrap it-catalog-wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn thiáº¿t bá»‹ IT</th><th>ÄVT</th><th>MÃ´ táº£</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+catalogRows()+'</tbody></table></div></div></div>'+
      '<div class="panel it-merged-form"><div class="head"><h2>ThÃ´ng tin thiáº¿t bá»‹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label class="full">Sá»‘ seri thiáº¿t bá»‹<input id="maThietBi" placeholder="Nháº­p sá»‘ seri trÃªn mÃ¡y/tem thiáº¿t bá»‹"></label><input id="seriThietBi" type="hidden"><label>Máº·t hÃ ng IT<select id="hangThietBi"></select></label><label>Nguá»“n nháº­p<select id="nguonThietBi"></select></label><label>NgÃ y nháº­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÆ°á»i Ä‘ang sá»­ dá»¥ng<input id="nguoiDungThietBi" placeholder="TÃªn nhÃ¢n viÃªn/phÃ²ng ban/kho"></label><label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Äang sá»­ dá»¥ng</option><option>Äang sá»­a chá»¯a</option><option>Thanh lÃ½</option><option>Tháº¥t láº¡c</option></select></label><label class="full">Ghi chÃº<input id="ghiChuThietBi" placeholder="Cáº¥u hÃ¬nh, tÃ¬nh tráº¡ng, chá»©ng tá»«..."></label><button class="btn primary" id="luuThietBi">LÆ°u thiáº¿t bá»‹</button><button class="btn" id="huyThietBi">Táº¡o má»›i</button></div>'+
        '<div class="it-catalog-editor"><div class="head compact-head"><h2>ThÃªm / sá»­a máº·t hÃ ng IT</h2></div><div class="body form"><input id="editItHangIndex" type="hidden"><label>MÃ£ thiáº¿t bá»‹ IT<input id="itHangCode"></label><label>TÃªn thiáº¿t bá»‹ IT<input id="itHangName" placeholder="VD: MÃ n hÃ¬nh Dell"></label><label>ÄVT<select id="itHangDvt">'+dvtOptions('CÃ¡i')+'</select></label><label class="full">MÃ´ táº£ / cáº¥u hÃ¬nh<input id="itHangDesc" placeholder="VD: 24 inch, HDMI, mÃ u Ä‘en"></label><button class="btn primary" id="saveItHang" type="button">LÆ°u máº·t hÃ ng IT</button><button class="btn" id="newItHang" type="button">Táº¡o má»›i</button></div></div></div>'+
    '</div>';
    return shell('thietbi','Thiáº¿t bá»‹ IT theo sá»‘ seri','Danh sÃ¡ch thiáº¿t bá»‹ vÃ  danh má»¥c máº·t hÃ ng IT Ä‘Æ°á»£c gom chung trong má»™t mÃ n Ä‘á»ƒ dá»… quáº£n lÃ½.',body);
  };
  function bindMergedIt(){
    if(current!=='thietbi')return;
    var sel=byId('hangThietBi'),items=itRows().map(function(r){return [r.h[0],r.h[0]+' - '+r.h[1]]});
    if(sel)sel.innerHTML=items.length?items.map(function(x){return '<option value="'+esc(x[0])+'">'+esc(x[1])+'</option>'}).join(''):'<option value="">ChÆ°a cÃ³ máº·t hÃ ng IT</option>';
    if(byId('itHangDvt'))byId('itHangDvt').innerHTML=dvtOptions(byId('itHangDvt').value||'CÃ¡i');
    if(byId('saveItHang'))byId('saveItHang').onclick=saveItHang;
    if(byId('newItHang'))byId('newItHang').onclick=resetItHang;
    if(byId('itHangCode')&&byId('editItHangIndex')&&!byId('editItHangIndex').value)byId('itHangCode').value=nextItCode();
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogMerged20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);bindMergedIt();return out};
    window.bindForms.__itCatalogMerged20260717=true;
  }
  if(!byId('it-catalog-merged-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='it-catalog-merged-style-20260718-light-core-16';
    st.textContent='.it-merged-layout{grid-template-columns:minmax(0,1.45fr) minmax(360px,.95fr)!important;gap:10px!important}.it-merged-list,.it-merged-form{align-self:start}.it-catalog-inside,.it-catalog-editor{border-top:1px solid #d7e8df;margin-top:10px}.compact-head{padding-top:10px!important}.compact-head h2{font-size:15px!important}.it-device-wrap{max-height:360px;overflow:auto}.it-catalog-wrap{max-height:220px;overflow:auto}.it-catalog-editor .body{padding-top:10px!important}.it-merged-layout .row-actions,.it-merged-layout .hang-actions{display:flex;flex-wrap:wrap;gap:5px}@media(max-width:900px){.it-merged-layout{display:block!important}.it-merged-layout .panel{margin-bottom:8px!important}.it-device-wrap table,.it-catalog-wrap table{min-width:760px}.it-device-wrap{max-height:330px}.it-catalog-wrap{max-height:220px}.compact-head h2{font-size:14px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itManagementDashboard20260717)return;window.__itManagementDashboard20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','',''])}catch(e){return raw||['','','','','','','']}}
  function money(n){try{return typeof fmt==='function'?fmt(n):String(n)}catch(e){return String(n)}}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function persistIt(){try{if(typeof touchState==='function')touchState()}catch(e){};save();try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}}
  function isItItem(h){return norm(h&&h[2])==='thiet bi it'}
  function itCatalog(){return (state.hang||[]).map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return isItItem(r.h)})}
  function itemInfo(code){var f=(state.hang||[]).map(hnorm).find(function(h){return h[0]===code});return f||[code,code,'Thiáº¿t bá»‹ IT','CÃ¡i','']}
  function itemName(code){return itemInfo(code)[1]||code}
  function serialOf(x){return String((x&&x[1])||(x&&x[0])||'').trim()}
  function statusOf(x){return String(x&&x[6]||'Trong kho').trim()||'Trong kho'}
  function isStock(x){return norm(statusOf(x)).indexOf('trong kho')>=0}
  function ensureEmployeesList(){
    if(typeof ensureEmployees==='function')return ensureEmployees(state);
    if(!Array.isArray(state.receiverDeptList))state.receiverDeptList=[];
    return state.receiverDeptList;
  }
  function employeeByName(name){
    var n=norm(name);
    return ensureEmployeesList().find(function(x){return norm(x&&x.name)===n});
  }
  function employeeOptions(selected){
    var seen={},arr=[];
    function push(v){v=String(v||'').trim();var k=norm(v);if(v&&!seen[k]){seen[k]=1;arr.push(v)}}
    push(selected);
    ensureEmployeesList().forEach(function(x){push(x.name)});
    return arr.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function deptOptions(selected){
    var seen={},arr=[];
    function push(v){v=String(v||'').trim();var k=norm(v);if(v&&!seen[k]){seen[k]=1;arr.push(v)}}
    push(selected);
    ensureEmployeesList().forEach(function(x){push(x.dept)});
    (state.kho||[]).forEach(function(k){push(k[1]);push(k[2])});
    return arr.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function looksLikeItWarehouse(k){
    var s=norm([k&&k[0],k&&k[1],k&&k[2]].join(' '));
    return s.indexOf(' it')>=0||s.indexOf('it ')>=0||s.indexOf('cntt')>=0||s.indexOf('thiet bi')>=0||s.indexOf('cong nghe')>=0;
  }
  function itWarehouses(){
    var all=Array.isArray(state.kho)?state.kho:[];
    var picked=all.filter(looksLikeItWarehouse);
    return picked.length?picked:all;
  }
  function warehouseByText(text){
    var n=norm(text);
    return (state.kho||[]).find(function(k){return norm(k[0])===n||norm(k[1])===n});
  }
  function warehouseNameFromValue(v){
    var f=(state.kho||[]).find(function(k){return k[0]===v});
    return f?f[1]:String(v||'');
  }
  function deviceWarehouse(x){
    x=tnorm(x);
    if(x[9])return String(x[9]).trim();
    if(isStock(x)&&x[5])return String(x[5]).trim();
    var first=itWarehouses()[0];
    return first?first[1]:'Kho thiáº¿t bá»‹ IT';
  }
  function deviceDept(x){
    x=tnorm(x);
    if(x[8])return String(x[8]).trim();
    if(isStock(x))return deviceWarehouse(x);
    var emp=employeeByName(x[5]);
    return emp&&emp.dept?emp.dept:'';
  }
  function holderText(x){
    x=tnorm(x);
    return isStock(x)?deviceWarehouse(x):(x[5]||'ChÆ°a gÃ¡n');
  }
  function warehouseOptions(selected){
    var opts=itWarehouses(),seen={};
    function op(value,label,sel){seen[norm(label)]=1;return '<option value="'+esc(value)+'" '+(sel?'selected':'')+'>'+esc(label)+'</option>'}
    var html=opts.map(function(k){return op(k[0],k[1],selected===k[0]||norm(selected)===norm(k[1]))}).join('');
    if(selected&&!seen[norm(selected)])html='<option value="'+esc(selected)+'" selected>'+esc(selected)+'</option>'+html;
    return html||'<option value="">ChÆ°a cÃ³ kho IT</option>';
  }
  function itItemOptions(selected){
    var rows=itCatalog();
    return rows.map(function(r){return '<option value="'+esc(r.h[0])+'" '+(selected===r.h[0]?'selected':'')+'>'+esc(r.h[0]+' - '+r.h[1])+'</option>'}).join('')||'<option value="">ChÆ°a cÃ³ máº·t hÃ ng IT</option>';
  }
  function sourceOptions(selected){
    var list=(state.loaiNhapList||[]).concat(['Äiá»u chuyá»ƒn ná»™i bá»™','KhÃ¡c']);
    var seen={};
    return list.filter(function(v){var k=norm(v);if(!v||seen[k])return false;seen[k]=1;return true}).map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function unitOptions(selected){
    var list=Array.isArray(state.dvtList)&&state.dvtList.length?state.dvtList:['CÃ¡i'];
    return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function statusOptions(selected){
    var list=['Trong kho','Äang sá»­ dá»¥ng','Äang sá»­a chá»¯a','Thanh lÃ½','Tháº¥t láº¡c'];
    return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function stats(){
    var devices=(state.thietBiIT||[]).map(tnorm),total=devices.length,stock=0,using=0,repair=0,groups={};
    devices.forEach(function(x){if(isStock(x))stock++;else if(norm(statusOf(x)).indexOf('dang su dung')>=0)using++;else if(norm(statusOf(x)).indexOf('sua')>=0)repair++;groups[x[2]||''] = true});
    return {total:total,stock:stock,using:using,repair:repair,groups:Object.keys(groups).filter(Boolean).length};
  }
  function groupRows(){
    var map={};
    itCatalog().forEach(function(r){map[r.h[0]]={code:r.h[0],name:r.h[1],unit:r.h[3]||'CÃ¡i',desc:r.h[4]||'',total:0,stock:0,using:0}});
    (state.thietBiIT||[]).forEach(function(raw){
      var x=tnorm(raw),code=x[2]||'';
      if(!map[code]){var h=itemInfo(code);map[code]={code:code,name:h[1]||code,unit:h[3]||'CÃ¡i',desc:h[4]||'',total:0,stock:0,using:0}}
      map[code].total++;
      if(isStock(x))map[code].stock++;else if(norm(statusOf(x)).indexOf('dang su dung')>=0)map[code].using++;
    });
    var rows=Object.keys(map).map(function(k){return map[k]}).sort(function(a,b){return a.name.localeCompare(b.name,'vi')});
    return rows.map(function(r){
      return '<tr>'+td('MÃ£',esc(r.code))+td('NhÃ³m thiáº¿t bá»‹',esc(r.name))+td('ÄVT',esc(r.unit))+td('Tá»•ng',money(r.total),'num')+td('Trong kho',money(r.stock),'num')+td('ÄÃ£ cáº¥p phÃ¡t',money(r.using),'num')+td('MÃ´ táº£',esc(r.desc||'KhÃ´ng cÃ³'))+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="7">ChÆ°a cÃ³ nhÃ³m/máº·t hÃ ng IT.</td></tr>';
  }
  function deviceRows(){
    var rows=(state.thietBiIT||[]).map(function(raw,i){
      var x=tnorm(raw),h=itemInfo(x[2]),serial=serialOf(x),st=statusOf(x),dept=deviceDept(x),holder=holderText(x),wh=deviceWarehouse(x);
      var search=[serial,h[0],h[1],h[4],x[3],x[4],holder,dept,wh,st,x[7]].join(' ');
      var cls=isStock(x)?'it-stock':(norm(st).indexOf('dang su dung')>=0?'it-using':'it-other');
      var actions='<div class="row-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">Cáº¥p phÃ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">Vá» kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">Sá»­a</button></div>';
      return '<tr data-it-row="1" data-search="'+esc(norm(search))+'" data-status="'+esc(norm(st))+'" data-type="'+esc(x[2]||'')+'" data-warehouse="'+esc(norm(wh))+'">'+
        td('Sá»‘ seri','<button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(serial)+'</button>')+
        td('NhÃ³m thiáº¿t bá»‹',esc(h[1]))+
        td('Kho IT / NgÆ°á»i dÃ¹ng',esc(holder))+
        td('Bá»™ pháº­n/kho',esc(dept||''))+
        td('NgÃ y nháº­p',esc(x[4]||''))+
        td('Tráº¡ng thÃ¡i','<span class="tag '+cls+'">'+esc(st)+'</span>')+
        td('Ghi chÃº',esc(x[7]||''))+
        td('Thao tÃ¡c',actions)+
      '</tr>';
    }).join('');
    return rows||'<tr><td class="empty" colspan="8">ChÆ°a cÃ³ thiáº¿t bá»‹ IT. Nháº­p sá»‘ seri á»Ÿ khung bÃªn pháº£i Ä‘á»ƒ báº¯t Ä‘áº§u.</td></tr>';
  }
  function catalogRows(){
    return itCatalog().map(function(r){
      var h=r.h,actions='<div class="hang-actions"><button class="btn small" onclick="editItHang('+r.i+')">Sá»­a</button><button class="btn small bad" onclick="deleteItHang('+r.i+')">XÃ³a</button></div>';
      return '<tr>'+td('MÃ£',esc(h[0]))+td('TÃªn thiáº¿t bá»‹ IT',esc(h[1]))+td('ÄVT',esc(h[3]))+td('MÃ´ táº£',esc(h[4]||'KhÃ´ng cÃ³'))+td('Thao tÃ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÆ°a cÃ³ máº·t hÃ ng IT. Táº¡o á»Ÿ khung bÃªn pháº£i.</td></tr>';
  }
  window.screenThietBi=function(){
    var s=stats();
    var typeOpts='<option value="">Táº¥t cáº£ nhÃ³m thiáº¿t bá»‹</option>'+itCatalog().map(function(r){return '<option value="'+esc(r.h[0])+'">'+esc(r.h[1])+'</option>'}).join('');
    var whOpts='<option value="">Táº¥t cáº£ kho IT</option>'+itWarehouses().map(function(k){return '<option value="'+esc(norm(k[1]))+'">'+esc(k[1])+'</option>'}).join('');
    var body='<div class="it-total-dashboard">'+
      '<div class="stats it-stats"><div class="card dash-card dash-green"><span>Tá»•ng thiáº¿t bá»‹</span><strong>'+money(s.total)+'</strong></div><div class="card dash-card dash-blue"><span>NhÃ³m thiáº¿t bá»‹</span><strong>'+money(s.groups)+'</strong></div><div class="card dash-card dash-amber"><span>ChÆ°a cáº¥p phÃ¡t</span><strong>'+money(s.stock)+'</strong></div><div class="card dash-card dash-rose"><span>ÄÃ£ cáº¥p phÃ¡t</span><strong>'+money(s.using)+'</strong></div></div>'+
      '<div class="grid it-total-layout">'+
        '<div class="panel it-main-panel"><div class="head"><h2>Báº£ng tá»•ng thá»ƒ thiáº¿t bá»‹ IT</h2><span class="tag" id="itVisibleCount"></span></div><div class="body it-filter-line"><input id="itDeviceSearch" placeholder="TÃ¬m sá»‘ seri, thiáº¿t bá»‹, ngÆ°á»i dÃ¹ng, kho, ghi chÃº..."><select id="itTypeFilter">'+typeOpts+'</select><select id="itStatusFilter"><option value="">Táº¥t cáº£ tráº¡ng thÃ¡i</option><option value="trong kho">ChÆ°a cáº¥p phÃ¡t</option><option value="dang su dung">ÄÃ£ cáº¥p phÃ¡t</option><option value="dang sua">Äang sá»­a chá»¯a</option></select><select id="itWarehouseFilter">'+whOpts+'</select><button class="btn" id="itClearSearch" type="button">XÃ³a tÃ¬m</button></div><div class="wrap it-device-table-wrap"><table><thead><tr><th>Sá»‘ seri</th><th>NhÃ³m thiáº¿t bá»‹</th><th>Kho IT / NgÆ°á»i dÃ¹ng</th><th>Bá»™ pháº­n/kho</th><th>NgÃ y nháº­p</th><th>Tráº¡ng thÃ¡i</th><th>Ghi chÃº</th><th>Thao tÃ¡c</th></tr></thead><tbody id="itDeviceRows">'+deviceRows()+'</tbody></table></div></div>'+
        '<div class="panel it-form-panel"><div class="head"><h2>Nháº­p / cáº¥p phÃ¡t thiáº¿t bá»‹</h2></div><div class="body form it-device-form"><input id="editThietBi" type="hidden"><label class="full">Sá»‘ seri thiáº¿t bá»‹<input id="maThietBi" placeholder="Nháº­p hoáº·c quÃ©t sá»‘ seri trÃªn tem thiáº¿t bá»‹"></label><input id="seriThietBi" type="hidden"><label>Máº·t hÃ ng IT<select id="hangThietBi"></select></label><label>Nguá»“n nháº­p<select id="nguonThietBi"></select></label><label>NgÃ y nháº­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>Tráº¡ng thÃ¡i<select id="trangThaiThietBi">'+statusOptions('Trong kho')+'</select></label><label>Kho thiáº¿t bá»‹ IT<select id="khoThietBiIT"></select></label><label>Cáº¥p phÃ¡t cho nhÃ¢n viÃªn<input id="nguoiDungThietBi" list="itEmployeeList" placeholder="GÃµ tÃªn nhÃ¢n viÃªn trong danh sÃ¡ch"><datalist id="itEmployeeList">'+employeeOptions('')+'</datalist></label><label class="full">Bá»™ pháº­n/kho<input id="boPhanThietBiIT" list="itDeptList" placeholder="Tá»± Ä‘iá»n theo nhÃ¢n viÃªn hoáº·c kho IT"><datalist id="itDeptList">'+deptOptions('')+'</datalist></label><label class="full">Ghi chÃº<input id="ghiChuThietBi" placeholder="Cáº¥u hÃ¬nh, tÃ¬nh tráº¡ng, chá»©ng tá»«..."></label><button class="btn primary" id="luuThietBi" type="button">LÆ°u thiáº¿t bá»‹</button><button class="btn" id="huyThietBi" type="button">Táº¡o má»›i</button><p class="hint full" id="itFormHint">Tráº¡ng thÃ¡i Trong kho sáº½ lÆ°u theo Kho thiáº¿t bá»‹ IT. Khi cáº¥p phÃ¡t, chá»n nhÃ¢n viÃªn Ä‘á»ƒ app tá»± láº¥y bá»™ pháº­n/kho.</p></div><div class="it-catalog-editor"><div class="head compact-head"><h2>ThÃªm / sá»­a nhÃ³m thiáº¿t bá»‹ IT</h2></div><div class="body form"><input id="editItHangIndex" type="hidden"><label>MÃ£ thiáº¿t bá»‹ IT<input id="itHangCode"></label><label>TÃªn nhÃ³m thiáº¿t bá»‹<input id="itHangName" placeholder="VD: Laptop Dell, MÃ¡y in, MÃ n hÃ¬nh"></label><label>ÄVT<select id="itHangDvt"></select></label><label class="full">MÃ´ táº£ / cáº¥u hÃ¬nh<input id="itHangDesc" placeholder="VD: 24 inch, HDMI, mÃ u Ä‘en"></label><button class="btn primary" id="saveItHang" type="button">LÆ°u nhÃ³m IT</button><button class="btn" id="newItHang" type="button">Táº¡o má»›i</button></div></div></div>'+
      '</div>'+
      '<div class="grid it-lower-layout"><div class="panel"><div class="head compact-head"><h2>Sá»‘ lÆ°á»£ng theo nhÃ³m thiáº¿t bá»‹</h2></div><div class="wrap it-group-wrap"><table><thead><tr><th>MÃ£</th><th>NhÃ³m thiáº¿t bá»‹</th><th>ÄVT</th><th>Tá»•ng</th><th>Trong kho</th><th>ÄÃ£ cáº¥p phÃ¡t</th><th>MÃ´ táº£</th></tr></thead><tbody>'+groupRows()+'</tbody></table></div></div><div class="panel"><div class="head compact-head"><h2>Danh má»¥c nhÃ³m thiáº¿t bá»‹ IT</h2></div><div class="wrap it-catalog-wrap"><table><thead><tr><th>MÃ£</th><th>TÃªn thiáº¿t bá»‹ IT</th><th>ÄVT</th><th>MÃ´ táº£</th><th>Thao tÃ¡c</th></tr></thead><tbody>'+catalogRows()+'</tbody></table></div></div></div>'+
    '</div>';
    return shell('thietbi','Quáº£n lÃ½ thiáº¿t bá»‹ IT','Quáº£n lÃ½ riÃªng thiáº¿t bá»‹ IT theo sá»‘ seri, kho IT, nhÃ³m thiáº¿t bá»‹ vÃ  ngÆ°á»i Ä‘Æ°á»£c cáº¥p phÃ¡t.',body);
  };
  window.editThietBi=function(i){
    var x=tnorm((state.thietBiIT||[])[i]);if(!x)return;
    if(byId('editThietBi'))byId('editThietBi').value=i;
    if(byId('maThietBi')){byId('maThietBi').value=serialOf(x);byId('maThietBi').disabled=true}
    if(byId('seriThietBi'))byId('seriThietBi').value=serialOf(x);
    if(byId('hangThietBi'))byId('hangThietBi').value=x[2]||'';
    if(byId('nguonThietBi'))byId('nguonThietBi').value=x[3]||'';
    if(byId('ngayThietBi'))byId('ngayThietBi').value=x[4]||today;
    if(byId('trangThaiThietBi'))byId('trangThaiThietBi').value=statusOf(x);
    if(byId('khoThietBiIT')){var wh=deviceWarehouse(x),found=warehouseByText(wh);byId('khoThietBiIT').value=found?found[0]:wh}
    if(byId('nguoiDungThietBi'))byId('nguoiDungThietBi').value=isStock(x)?'':(x[5]||'');
    if(byId('boPhanThietBiIT'))byId('boPhanThietBiIT').value=deviceDept(x)||'';
    if(byId('ghiChuThietBi'))byId('ghiChuThietBi').value=x[7]||'';
    syncItForm();
    if(byId('maThietBi'))byId('maThietBi').scrollIntoView({behavior:'smooth',block:'center'});
  };
  window.resetThietBi=function(){
    ['editThietBi','maThietBi','seriThietBi','nguoiDungThietBi','boPhanThietBiIT','ghiChuThietBi'].forEach(function(id){if(byId(id))byId(id).value=''});
    if(byId('maThietBi')){byId('maThietBi').disabled=false;byId('maThietBi').focus()}
    if(byId('ngayThietBi'))byId('ngayThietBi').value=today;
    if(byId('trangThaiThietBi'))byId('trangThaiThietBi').value='Trong kho';
    syncItForm();
  };
  window.saveThietBi=function(){
    if(!state.thietBiIT)state.thietBiIT=[];
    var serial=(byId('maThietBi')&&byId('maThietBi').value.trim())||'';
    if(!serial)return alert('Nháº­p sá»‘ seri thiáº¿t bá»‹');
    var hang=(byId('hangThietBi')&&byId('hangThietBi').value)||'';
    if(!hang)return alert('Chá»n máº·t hÃ ng/nhÃ³m thiáº¿t bá»‹ IT');
    var st=(byId('trangThaiThietBi')&&byId('trangThaiThietBi').value)||'Trong kho';
    var whVal=(byId('khoThietBiIT')&&byId('khoThietBiIT').value)||'';
    var whName=warehouseNameFromValue(whVal)||whVal||'Kho thiáº¿t bá»‹ IT';
    var user=(byId('nguoiDungThietBi')&&byId('nguoiDungThietBi').value.trim())||'';
    var dept=(byId('boPhanThietBiIT')&&byId('boPhanThietBiIT').value.trim())||'';
    if(norm(st).indexOf('trong kho')>=0){
      user=whName;dept=whName;
    }else if(norm(st).indexOf('dang su dung')>=0){
      if(!user)return alert('Chá»n hoáº·c nháº­p nhÃ¢n viÃªn Ä‘ang sá»­ dá»¥ng');
      var emp=employeeByName(user);if(emp&&emp.dept&&!dept)dept=emp.dept;
      if(!dept)return alert('Nháº­p bá»™ pháº­n/kho cá»§a nhÃ¢n viÃªn sá»­ dá»¥ng');
    }else{
      if(!user)user=whName;
      if(!dept)dept=whName;
    }
    var row=[serial,serial,hang,(byId('nguonThietBi')&&byId('nguonThietBi').value)||'',(byId('ngayThietBi')&&byId('ngayThietBi').value)||today,user,st,(byId('ghiChuThietBi')&&byId('ghiChuThietBi').value.trim())||'',dept,whName];
    var idx=(byId('editThietBi')&&byId('editThietBi').value)||'';
    var dup=state.thietBiIT.some(function(raw,i){var x=tnorm(raw);return (x[0]===serial||x[1]===serial)&&String(i)!==String(idx)});
    if(dup)return alert('Sá»‘ seri nÃ y Ä‘Ã£ tá»“n táº¡i');
    if(idx==='')state.thietBiIT.push(row);else state.thietBiIT[Number(idx)]=row;
    persistIt();
    alert('ÄÃ£ lÆ°u thiáº¿t bá»‹ IT');
    render();
  };
  window.capPhatThietBi=function(i){
    editThietBi(i);
    if(byId('trangThaiThietBi'))byId('trangThaiThietBi').value='Äang sá»­ dá»¥ng';
    syncItForm();
    if(byId('nguoiDungThietBi'))byId('nguoiDungThietBi').focus();
  };
  window.chuyenNguoiDungThietBi=function(i){capPhatThietBi(i)};
  window.traVeKhoThietBi=function(i){
    if(!state.thietBiIT||!state.thietBiIT[i])return;
    var x=tnorm(state.thietBiIT[i]),wh=itWarehouses()[0],whName=wh?wh[1]:'Kho thiáº¿t bá»‹ IT';
    if(!confirm('Chuyá»ƒn thiáº¿t bá»‹ '+serialOf(x)+' vá» '+whName+'?'))return;
    x[0]=serialOf(x);x[1]=serialOf(x);x[5]=whName;x[6]='Trong kho';x[8]=whName;x[9]=whName;
    state.thietBiIT[i]=x;
    persistIt();
    render();
  };
  function syncItForm(){
    var st=byId('trangThaiThietBi'),user=byId('nguoiDungThietBi'),dept=byId('boPhanThietBiIT'),wh=byId('khoThietBiIT'),hint=byId('itFormHint');
    if(!st)return;
    var stock=norm(st.value).indexOf('trong kho')>=0;
    if(stock){
      var whName=wh?warehouseNameFromValue(wh.value):'';
      if(dept)dept.value=whName||dept.value;
      if(hint)hint.textContent='Tráº¡ng thÃ¡i Trong kho sáº½ lÆ°u theo Kho thiáº¿t bá»‹ IT Ä‘Ã£ chá»n.';
    }else{
      if(hint)hint.textContent='Cáº¥p phÃ¡t: chá»n nhÃ¢n viÃªn tá»« danh sÃ¡ch NhÃ¢n viÃªn, app tá»± Ä‘iá»n bá»™ pháº­n/kho.';
      var emp=user?employeeByName(user.value):null;
      if(emp&&dept&&!dept.value)dept.value=emp.dept||'';
    }
  }
  function bindItManager(){
    if(current!=='thietbi')return;
    ensureEmployeesList();
    if(byId('hangThietBi'))byId('hangThietBi').innerHTML=itItemOptions(byId('hangThietBi').value);
    if(byId('nguonThietBi'))byId('nguonThietBi').innerHTML=sourceOptions(byId('nguonThietBi').value);
    if(byId('khoThietBiIT'))byId('khoThietBiIT').innerHTML=warehouseOptions(byId('khoThietBiIT').value);
    if(byId('itEmployeeList'))byId('itEmployeeList').innerHTML=employeeOptions((byId('nguoiDungThietBi')||{}).value||'');
    if(byId('itDeptList'))byId('itDeptList').innerHTML=deptOptions((byId('boPhanThietBiIT')||{}).value||'');
    if(byId('itHangDvt'))byId('itHangDvt').innerHTML=unitOptions(byId('itHangDvt').value||'CÃ¡i');
    if(byId('saveItHang'))byId('saveItHang').onclick=saveItHang;
    if(byId('newItHang'))byId('newItHang').onclick=resetItHang;
    if(byId('luuThietBi'))byId('luuThietBi').onclick=saveThietBi;
    if(byId('huyThietBi'))byId('huyThietBi').onclick=resetThietBi;
    if(byId('itHangCode')&&byId('editItHangIndex')&&!byId('editItHangIndex').value&&typeof nextItemCode==='function')byId('itHangCode').value=nextItemCode('Thiáº¿t bá»‹ IT');
    var user=byId('nguoiDungThietBi'),dept=byId('boPhanThietBiIT'),status=byId('trangThaiThietBi'),wh=byId('khoThietBiIT');
    if(user&&!user.__itBind){user.__itBind=true;user.addEventListener('input',function(){var emp=employeeByName(user.value);if(emp&&dept)dept.value=emp.dept||'';syncItForm()});user.addEventListener('change',function(){var emp=employeeByName(user.value);if(emp&&dept)dept.value=emp.dept||'';syncItForm()})}
    if(status&&!status.__itBind){status.__itBind=true;status.addEventListener('change',syncItForm)}
    if(wh&&!wh.__itBind){wh.__itBind=true;wh.addEventListener('change',syncItForm)}
    bindItFilters();
    syncItForm();
  }
  function bindItFilters(){
    var q=byId('itDeviceSearch'),type=byId('itTypeFilter'),status=byId('itStatusFilter'),wh=byId('itWarehouseFilter'),clear=byId('itClearSearch'),badge=byId('itVisibleCount');
    function apply(){
      var query=norm(q?q.value:''),tp=type?type.value:'',st=status?norm(status.value):'',kw=wh?wh.value:'',shown=0;
      [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(r){
        var ok=(!query||r.getAttribute('data-search').indexOf(query)>=0)&&(!tp||r.getAttribute('data-type')===tp)&&(!st||r.getAttribute('data-status').indexOf(st)>=0)&&(!kw||r.getAttribute('data-warehouse')===kw);
        r.style.display=ok?'':'none';if(ok)shown++;
      });
      if(badge)badge.textContent=shown+' / '+(state.thietBiIT||[]).length+' thiáº¿t bá»‹';
    }
    [q,type,status,wh].forEach(function(x){if(x&&!x.__itFilter){x.__itFilter=true;x.addEventListener('input',apply);x.addEventListener('change',apply)}});
    if(clear&&!clear.__itFilter){clear.__itFilter=true;clear.onclick=function(){if(q)q.value='';if(type)type.value='';if(status)status.value='';if(wh)wh.value='';apply();if(q)q.focus()}};
    apply();
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itManagementDashboard20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);bindItManager();return out};
    window.bindForms.__itManagementDashboard20260717=true;
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itManagementDashboard20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(bindItManager,80);return out};
    window.render.__itManagementDashboard20260717=true;
  }
  if(!byId('it-management-dashboard-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='it-management-dashboard-style-20260718-light-core-16';
    st.textContent='#thietbi .it-total-layout{grid-template-columns:minmax(0,1.35fr) minmax(360px,.82fr)!important;gap:10px!important}#thietbi .it-lower-layout{grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr)!important;gap:10px!important;margin-top:10px}#thietbi .it-stats{margin-bottom:10px!important}#thietbi .it-main-panel,#thietbi .it-form-panel{align-self:start}#thietbi .it-filter-line{display:grid;grid-template-columns:minmax(220px,1fr) minmax(150px,.55fr) minmax(140px,.48fr) minmax(140px,.48fr) auto;gap:8px;align-items:center;padding:10px 12px!important;background:#f3fbf7;border-bottom:1px solid #d9eadf}#thietbi .it-filter-line input,#thietbi .it-filter-line select{min-height:35px!important;background:#fff!important}#thietbi .it-device-table-wrap{max-height:438px;overflow:auto}#thietbi .it-device-table-wrap table{min-width:980px}#thietbi .it-group-wrap,#thietbi .it-catalog-wrap{max-height:240px;overflow:auto}#thietbi .it-device-form{grid-template-columns:repeat(2,minmax(150px,1fr));gap:8px 10px!important}#thietbi .serial-scan-wrap{grid-column:1/-1}#thietbi .it-catalog-editor{border-top:1px solid #d7e8df;margin-top:10px}#thietbi .compact-head h2{font-size:14px!important}.it-serial-link,.link-like{border:0;background:transparent;color:#006b50;text-decoration:underline;font-weight:650;padding:0;cursor:pointer}.tag.it-stock{background:#e8f8ef;color:#007956}.tag.it-using{background:#e8f1ff;color:#23669a}.tag.it-other{background:#fff4d8;color:#8a6400}@media(max-width:900px){#thietbi{padding-bottom:98px!important}#thietbi .it-total-layout,#thietbi .it-lower-layout{display:block!important}#thietbi .it-stats{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}#thietbi .it-stats .card{min-height:70px!important}#thietbi .it-filter-line{grid-template-columns:1fr!important;padding:8px!important;gap:6px!important}#thietbi .it-filter-line input,#thietbi .it-filter-line select{min-height:42px!important;font-size:14px!important;background:#f2fff8!important}#thietbi .it-device-table-wrap{max-height:none!important;overflow:visible!important}#thietbi .it-device-table-wrap table{min-width:0!important}#thietbi #itDeviceRows tr[data-it-row]{display:grid!important;grid-template-columns:1fr;gap:5px;background:#fff;border:1px solid #cfe6da;border-radius:9px;margin:8px 0;padding:9px 10px;box-shadow:0 5px 14px rgba(11,74,52,.06)}#thietbi #itDeviceRows td{display:flex!important;justify-content:space-between;gap:10px;border:0!important;padding:2px 0!important;font-size:12.8px!important}#thietbi #itDeviceRows td:before{content:attr(data-label);font-weight:650;color:#587166;min-width:90px}#thietbi #itDeviceRows td[data-label="Thao tÃ¡c"]{display:block!important}#thietbi #itDeviceRows td[data-label="Thao tÃ¡c"]:before{display:none}#thietbi .it-device-table-wrap thead{display:none!important}#thietbi .it-form-panel{margin-top:8px!important}#thietbi .it-device-form{grid-template-columns:1fr!important;gap:7px!important}#thietbi .it-device-form input,#thietbi .it-device-form select{min-height:42px!important;background:#f7fffb!important}.it-catalog-wrap table,.it-group-wrap table{min-width:760px}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itSingleWarehouse20260717)return;window.__itSingleWarehouse20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','','',''])}catch(e){return raw||['','','','','','','','']}}
  function isStockStatus(x){return norm(x&&x[6]).indexOf('trong kho')>=0}
  function looksLikeItKho(k){
    var s=norm([k&&k[0],k&&k[1],k&&k[2]].join(' '));
    return s.indexOf('thiet bi it')>=0||s.indexOf('kho it')>=0||s.indexOf(' it')>=0||s.indexOf('it ')>=0||s.indexOf('cntt')>=0||s.indexOf('cong nghe')>=0;
  }
  function primaryItKho(){
    var list=Array.isArray(state.kho)?state.kho:[];
    var exact=list.find(function(k){return norm(k[1]).indexOf('thiet bi it')>=0||norm(k[1]).indexOf('kho it')>=0});
    var loose=list.find(looksLikeItKho);
    var k=exact||loose;
    return k?{code:k[0],name:k[1]}:{code:'Kho Thiáº¿t Bá»‹ IT',name:'Kho Thiáº¿t Bá»‹ IT'};
  }
  function persistIfChanged(changed){
    if(!changed)return;
    try{if(typeof touchState==='function')touchState()}catch(e){}
    try{save()}catch(e){}
    try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}
  }
  function mergeStockDevicesToOneKho(){
    if(!Array.isArray(state.thietBiIT))return;
    var kho=primaryItKho(),changed=false;
    state.thietBiIT.forEach(function(raw,i){
      var x=tnorm(raw);
      if(isStockStatus(x)){
        var serial=String(x[1]||x[0]||'').trim();
        if(x[0]!==serial||x[1]!==serial||x[5]!==kho.name||x[8]!==kho.name||x[9]!==kho.name){
          x[0]=serial;x[1]=serial;x[5]=kho.name;x[8]=kho.name;x[9]=kho.name;
          state.thietBiIT[i]=x;changed=true;
        }
      }
    });
    persistIfChanged(changed);
  }
  function patchItWarehouseControls(){
    if(current!=='thietbi')return;
    var kho=primaryItKho();
    var filter=byId('itWarehouseFilter');
    if(filter){
      filter.innerHTML='<option value="">'+esc(kho.name)+'</option>';
      filter.value='';
      filter.title='ÄÃ£ gá»™p thiáº¿t bá»‹ IT vá» má»™t kho';
      filter.dispatchEvent(new Event('change',{bubbles:true}));
    }
    var formKho=byId('khoThietBiIT');
    if(formKho){
      formKho.innerHTML='<option value="'+esc(kho.code)+'">'+esc(kho.name)+'</option>';
      formKho.value=kho.code;
      formKho.title='Kho IT dÃ¹ng chung';
    }
    var status=byId('trangThaiThietBi'),dept=byId('boPhanThietBiIT');
    if(status&&dept&&norm(status.value).indexOf('trong kho')>=0)dept.value=kho.name;
    [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(tr){
      if((tr.getAttribute('data-status')||'').indexOf('trong kho')>=0){
        tr.setAttribute('data-warehouse','');
        var holder=tr.querySelector('td[data-label="Kho IT / NgÆ°á»i dÃ¹ng"]');
        var bp=tr.querySelector('td[data-label="Bá»™ pháº­n/kho"]');
        if(holder)holder.textContent=kho.name;
        if(bp)bp.textContent=kho.name;
      }
    });
  }
  function apply(){
    mergeStockDevicesToOneKho();
    patchItWarehouseControls();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itSingleWarehouse20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,100);return out};
    window.render.__itSingleWarehouse20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itSingleWarehouse20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,0);return out};
    window.bindForms.__itSingleWarehouse20260717=true;
  }
  if(!byId('it-single-warehouse-style-20260718-light-core-16')){
    var st=document.createElement('style');st.id='it-single-warehouse-style-20260718-light-core-16';
    st.textContent='#thietbi #itWarehouseFilter,#thietbi #khoThietBiIT{font-weight:650!important;background:#f4fff9!important;color:#075941!important}#thietbi #itWarehouseFilter{min-width:160px!important}';
    document.head.appendChild(st);
  }
  setTimeout(apply,150);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itFlowPolish20260717)return;window.__itFlowPolish20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','','','','',''])}catch(e){return raw||['','','','','','','','','','']}}
  function primaryItKho(){
    var list=Array.isArray(state&&state.kho)?state.kho:[];
    var exact=list.find(function(k){var s=norm([k&&k[0],k&&k[1],k&&k[2]].join(' '));return s.indexOf('kho thiet bi it')>=0||s.indexOf('thiet bi it')>=0||s.indexOf('kho it')>=0});
    var loose=list.find(function(k){var s=norm([k&&k[0],k&&k[1],k&&k[2]].join(' '));return s.indexOf('it')>=0||s.indexOf('cntt')>=0||s.indexOf('cong nghe')>=0});
    var k=exact||loose;
    return k?{code:k[0],name:k[1]}:{code:'KHO-IT',name:'Kho Thiáº¿t Bá»‹ IT'};
  }
  function employees(){
    try{if(typeof ensureEmployees==='function')return ensureEmployees(state)}catch(e){}
    return Array.isArray(state.receiverDeptList)?state.receiverDeptList:[];
  }
  function employeeByName(name){
    var n=norm(name);
    return employees().find(function(x){return norm(x&&x.name)===n});
  }
  function uniqueOptions(list,selected){
    var seen={},html='';
    function add(v){v=String(v||'').trim();var k=norm(v);if(v&&!seen[k]){seen[k]=1;html+='<option value="'+esc(v)+'"></option>'}}
    add(selected);
    list.forEach(add);
    return html;
  }
  function addStatusOption(value){
    var sel=byId('trangThaiThietBi');if(!sel)return;
    var exists=[].some.call(sel.options,function(o){return norm(o.value)===norm(value)});
    if(!exists)sel.insertAdjacentHTML('beforeend','<option>'+esc(value)+'</option>');
  }
  function setInputValue(id,value){
    var el=byId(id);if(!el)return;
    el.value=value||'';
    try{el.dispatchEvent(new Event('input',{bubbles:true}))}catch(e){}
  }
  function setSelectValue(id,value){
    var el=byId(id);if(!el)return;
    addStatusOption(value);
    el.value=value||'';
    try{el.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){}
  }
  function noteAppend(base,label,value){
    base=String(base||'').trim();value=String(value||'').trim();
    if(!value)return base;
    var text=label+': '+value;
    if(base.indexOf(text)>=0)return base;
    return base?base+' | '+text:text;
  }
  function applyItFilterCompact(){
    if(current!=='thietbi')return;
    var q=byId('itDeviceSearch'),type=byId('itTypeFilter'),status=byId('itStatusFilter'),badge=byId('itVisibleCount');
    var query=norm(q&&q.value),tp=type&&type.value,st=norm(status&&status.value),shown=0,total=0;
    [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(r){
      total++;
      var ok=(!query||String(r.getAttribute('data-search')||'').indexOf(query)>=0)&&(!tp||r.getAttribute('data-type')===tp)&&(!st||String(r.getAttribute('data-status')||'').indexOf(st)>=0);
      r.style.display=ok?'':'none';
      if(ok)shown++;
    });
    if(badge)badge.textContent=shown+' / '+total+' thiáº¿t bá»‹';
  }
  function compactFilterLine(){
    var line=document.querySelector('#thietbi .it-filter-line');if(!line)return;
    line.classList.add('it-filter-line-compact');
    var wh=byId('itWarehouseFilter');
    if(wh)wh.remove();
    var clear=byId('itClearSearch'),q=byId('itDeviceSearch'),type=byId('itTypeFilter'),status=byId('itStatusFilter');
    [q,type,status].forEach(function(el){
      if(el&&!el.__itCompactFilter){el.__itCompactFilter=true;el.addEventListener('input',applyItFilterCompact);el.addEventListener('change',applyItFilterCompact)}
    });
    if(clear&&!clear.__itCompactClear){
      clear.__itCompactClear=true;
      clear.onclick=function(e){
        if(e)e.preventDefault();
        if(q)q.value='';
        if(type)type.value='';
        if(status)status.value='';
        applyItFilterCompact();
        if(q)q.focus();
      };
    }
    applyItFilterCompact();
  }
  function hideSingleWarehouseForm(){
    var kho=primaryItKho(),sel=byId('khoThietBiIT');
    if(sel){
      sel.innerHTML='<option value="'+esc(kho.code)+'">'+esc(kho.name)+'</option>';
      sel.value=kho.code;
      var label=sel.closest('label');
      if(label)label.classList.add('it-hidden-field');
    }
    var dept=byId('boPhanThietBiIT'),status=byId('trangThaiThietBi');
    if(status&&dept&&norm(status.value).indexOf('trong kho')>=0&&!dept.value)dept.value=kho.name;
  }
  function makeSerialBoxCompact(){
    var input=byId('maThietBi');if(!input)return;
    var label=input.closest('label');if(!label)return;
    label.classList.add('it-serial-label');
    var box=byId('itSerialToolBox');
    if(!box){
      box=document.createElement('div');
      box.id='itSerialToolBox';
      box.className='it-serial-toolbox full';
      label.parentNode.insertBefore(box,label);
      box.appendChild(label);
    }
    var native=byId('nativePhotoSerialInput');
    if(native){
      var nbox=native.closest('.native-photo-box');
      if(nbox&&!box.contains(nbox))box.appendChild(nbox);
      var title=nbox&&nbox.querySelector('.native-photo-title');
      var note=nbox&&nbox.querySelector('.native-photo-help');
      if(title)title.textContent='áº¢nh mÃ£ seri';
      if(note)note.textContent='Chá»¥p/chá»n áº£nh tem mÃ£ náº¿u camera khÃ´ng quÃ©t Ä‘Æ°á»£c.';
    }
    var scan=byId('scanSerialBtn');
    if(scan)scan.textContent='QuÃ©t mÃ£';
    var hint=document.querySelector('#thietbi .serial-scan-hint');
    if(hint)hint.textContent='CÃ³ thá»ƒ quÃ©t, chá»¥p áº£nh mÃ£ hoáº·c nháº­p tay sá»‘ seri.';
  }
  function insertActionFields(){
    var form=document.querySelector('#thietbi .it-device-form');if(!form||byId('itActionType'))return;
    var statusLabel=byId('trangThaiThietBi')&&byId('trangThaiThietBi').closest('label');
    var html='<label>Ná»™i dung nháº­p - xuáº¥t<select id="itActionType"><option value="nhap">Nháº­p thiáº¿t bá»‹</option><option value="cap_phat">Xuáº¥t/cáº¥p phÃ¡t</option><option value="chuyen_kho">MÃ¡y chuyá»ƒn Ä‘i kho khÃ¡c</option><option value="xuat">Xuáº¥t thiáº¿t bá»‹</option></select></label>'+
      '<label id="itTransferWarehouseWrap">MÃ¡y chuyá»ƒn Ä‘i kho khÃ¡c<input id="itTransferWarehouse" list="itTransferWarehouseList" placeholder="GÃµ tÃªn kho nháº­n hoáº·c nÆ¡i chuyá»ƒn Ä‘áº¿n"><datalist id="itTransferWarehouseList"></datalist></label>'+
      '<label id="itExportWrap">TrÆ°á»ng xuáº¥t<input id="itExportContent" placeholder="VD: xuáº¥t thanh lÃ½, xuáº¥t tráº£, xuáº¥t há»ng..."></label>';
    if(statusLabel)statusLabel.insertAdjacentHTML('afterend',html);
    else form.insertAdjacentHTML('afterbegin',html);
    var list=(state.kho||[]).map(function(k){return k[1]});
    var dl=byId('itTransferWarehouseList');if(dl)dl.innerHTML=uniqueOptions(list,'');
  }
  function syncActionFields(){
    var action=byId('itActionType'),status=byId('trangThaiThietBi'),user=byId('nguoiDungThietBi'),dept=byId('boPhanThietBiIT');
    var transferWrap=byId('itTransferWarehouseWrap'),exportWrap=byId('itExportWrap');
    if(!action)return;
    var v=action.value||'nhap';
    if(transferWrap)transferWrap.style.display=v==='chuyen_kho'?'grid':'none';
    if(exportWrap)exportWrap.style.display=v==='xuat'?'grid':'none';
    var userLabel=user&&user.closest('label'),deptLabel=dept&&dept.closest('label');
    if(userLabel)userLabel.style.display=v==='cap_phat'?'grid':'none';
    if(deptLabel)deptLabel.style.display=(v==='cap_phat'||v==='chuyen_kho')?'grid':'none';
    addStatusOption('Chuyá»ƒn kho khÃ¡c');addStatusOption('ÄÃ£ xuáº¥t');
    if(status){
      if(v==='nhap')status.value='Trong kho';
      if(v==='cap_phat')status.value='Äang sá»­ dá»¥ng';
      if(v==='chuyen_kho')status.value='Chuyá»ƒn kho khÃ¡c';
      if(v==='xuat')status.value='ÄÃ£ xuáº¥t';
    }
  }
  function bindActionFields(){
    var action=byId('itActionType');if(action&&!action.__itActionBind){action.__itActionBind=true;action.addEventListener('change',syncActionFields)}
    var transfer=byId('itTransferWarehouse'),dept=byId('boPhanThietBiIT');
    if(transfer&&!transfer.__itTransferBind){
      transfer.__itTransferBind=true;
      transfer.addEventListener('input',function(){if(dept)dept.value=transfer.value});
      transfer.addEventListener('change',function(){if(dept)dept.value=transfer.value});
    }
    var user=byId('nguoiDungThietBi');
    if(user&&!user.__itEmployeePolish){
      user.__itEmployeePolish=true;
      user.addEventListener('change',function(){var emp=employeeByName(user.value);if(emp&&dept)dept.value=emp.dept||''});
      user.addEventListener('input',function(){var emp=employeeByName(user.value);if(emp&&dept)dept.value=emp.dept||''});
    }
    syncActionFields();
  }
  function prepareBeforeSave(){
    var action=byId('itActionType'),kho=primaryItKho(),status=byId('trangThaiThietBi'),user=byId('nguoiDungThietBi'),dept=byId('boPhanThietBiIT'),note=byId('ghiChuThietBi');
    var sel=byId('khoThietBiIT');if(sel){sel.innerHTML='<option value="'+esc(kho.code)+'">'+esc(kho.name)+'</option>';sel.value=kho.code}
    var v=action?action.value:'nhap';
    if(v==='nhap'){
      if(status)status.value='Trong kho';
      if(user)user.value='';
      if(dept)dept.value=kho.name;
      return true;
    }
    if(v==='cap_phat'){
      if(status)status.value='Äang sá»­ dá»¥ng';
      if(user&&!String(user.value||'').trim()){alert('Chá»n hoáº·c nháº­p nhÃ¢n viÃªn nháº­n thiáº¿t bá»‹');return false}
      var emp=user?employeeByName(user.value):null;
      if(emp&&dept&&!dept.value)dept.value=emp.dept||'';
      return true;
    }
    if(v==='chuyen_kho'){
      var transfer=(byId('itTransferWarehouse')&&byId('itTransferWarehouse').value.trim())||'';
      if(!transfer){alert('Nháº­p kho/nÆ¡i chuyá»ƒn Ä‘áº¿n');return false}
      if(status)status.value='Chuyá»ƒn kho khÃ¡c';
      if(user)user.value=transfer;
      if(dept)dept.value=transfer;
      if(note)note.value=noteAppend(note.value,'Chuyá»ƒn kho khÃ¡c',transfer);
      return true;
    }
    if(v==='xuat'){
      var reason=(byId('itExportContent')&&byId('itExportContent').value.trim())||'Xuáº¥t thiáº¿t bá»‹';
      if(status)status.value='ÄÃ£ xuáº¥t';
      if(user)user.value=reason;
      if(dept)dept.value='ÄÃ£ xuáº¥t';
      if(note)note.value=noteAppend(note.value,'Xuáº¥t',reason);
      return true;
    }
    return true;
  }
  function inferActionFromRow(x){
    var st=norm(x&&x[6]),holder=String(x&&x[5]||'');
    if(st.indexOf('chuyen kho')>=0)return 'chuyen_kho';
    if(st.indexOf('da xuat')>=0||st.indexOf('thanh ly')>=0)return 'xuat';
    if(st.indexOf('dang su dung')>=0)return 'cap_phat';
    return 'nhap';
  }
  function setActionFromEdit(i){
    var x=tnorm((state.thietBiIT||[])[i]);
    var action=byId('itActionType');if(!action)return;
    var v=inferActionFromRow(x);action.value=v;
    if(v==='chuyen_kho')setInputValue('itTransferWarehouse',x[5]||x[8]||'');
    if(v==='xuat')setInputValue('itExportContent',x[5]||'Xuáº¥t thiáº¿t bá»‹');
    syncActionFields();
  }
  function wrapItActions(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itFlowPolish){
      var oldSave=window.saveThietBi;
      window.saveThietBi=function(){if(!prepareBeforeSave())return;return oldSave.apply(this,arguments)};
      window.saveThietBi.__itFlowPolish=true;
    }
    if(typeof window.editThietBi==='function'&&!window.editThietBi.__itFlowPolish){
      var oldEdit=window.editThietBi;
      window.editThietBi=function(i){var out=oldEdit.apply(this,arguments);setTimeout(function(){setActionFromEdit(i);hideSingleWarehouseForm();makeSerialBoxCompact()},40);return out};
      window.editThietBi.__itFlowPolish=true;
    }
    if(typeof window.resetThietBi==='function'&&!window.resetThietBi.__itFlowPolish){
      var oldReset=window.resetThietBi;
      window.resetThietBi=function(){var out=oldReset.apply(this,arguments);setTimeout(function(){var action=byId('itActionType');if(action)action.value='nhap';setInputValue('itTransferWarehouse','');setInputValue('itExportContent','');syncActionFields();hideSingleWarehouseForm()},20);return out};
      window.resetThietBi.__itFlowPolish=true;
    }
  }
  function decorateItScreen(){
    if(current!=='thietbi')return;
    var title=document.querySelector('#thietbi .it-form-panel .head h2');
    if(title)title.textContent='Nháº­p - Xuáº¥t thiáº¿t bá»‹';
    compactFilterLine();
    insertActionFields();
    addStatusOption('Chuyá»ƒn kho khÃ¡c');addStatusOption('ÄÃ£ xuáº¥t');
    hideSingleWarehouseForm();
    makeSerialBoxCompact();
    bindActionFields();
    wrapItActions();
  }
  function installStyle(){
    if(byId('it-flow-polish-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-flow-polish-style-20260718-light-core-16';
    st.textContent='#thietbi .it-filter-line-compact{grid-template-columns:minmax(240px,1fr) minmax(150px,.48fr) minmax(140px,.42fr) auto!important;align-items:center!important}#thietbi #itClearSearch{height:36px;white-space:nowrap;font-weight:700}#thietbi .it-hidden-field{display:none!important}#thietbi .it-serial-toolbox{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1fr);gap:7px;background:linear-gradient(180deg,#f7fffb,#eefaf4);border:1px solid #cce8da;border-radius:8px;padding:9px}#thietbi .it-serial-toolbox .it-serial-label{margin:0!important;display:grid!important;gap:5px!important}#thietbi .it-serial-toolbox .serial-scan-wrap{grid-template-columns:minmax(0,1fr) auto!important;gap:7px!important}#thietbi .it-serial-toolbox .serial-scan-hint{font-size:11.5px!important;color:#667a72!important;font-weight:450!important;margin-top:-1px}#thietbi .it-serial-toolbox .native-photo-box{padding:0!important;background:transparent!important;border:0!important;display:grid!important;grid-template-columns:auto minmax(0,1fr);gap:7px!important;align-items:center!important}#thietbi .it-serial-toolbox .native-photo-title{font-size:12px!important;font-weight:700!important;color:#0b6f51!important;white-space:nowrap}#thietbi .it-serial-toolbox .native-photo-input{min-height:36px!important;border:1px dashed #b9d8ca!important;background:#fff!important;border-radius:7px!important;padding:6px 8px!important;font-size:12.5px!important}#thietbi .it-serial-toolbox .native-photo-help{grid-column:1/-1;font-size:11.5px!important;color:#6b7e75!important}#thietbi #itTransferWarehouseWrap,#thietbi #itExportWrap{display:none}#thietbi .it-device-form label{align-content:start}#thietbi .it-form-panel .head h2{font-size:16px!important}@media(max-width:900px){#thietbi .it-filter-line-compact{grid-template-columns:1fr!important}#thietbi #itClearSearch{width:100%;height:40px}#thietbi .it-serial-toolbox{padding:8px;border-radius:10px}#thietbi .it-serial-toolbox .serial-scan-wrap{grid-template-columns:1fr!important}#thietbi .it-serial-toolbox .native-photo-box{grid-template-columns:1fr!important}#thietbi .it-serial-toolbox .native-photo-input{min-height:42px!important;font-size:14px!important}}';
    document.head.appendChild(st);
  }
  installStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itFlowPolish20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(decorateItScreen,180);setTimeout(decorateItScreen,500);return out};
    window.render.__itFlowPolish20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itFlowPolish20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(decorateItScreen,120);setTimeout(decorateItScreen,420);return out};
    window.bindForms.__itFlowPolish20260717=true;
  }
  document.addEventListener('change',function(e){if(e.target&&e.target.id==='trangThaiThietBi')setTimeout(syncActionFields,0)});
  setTimeout(decorateItScreen,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itOverviewActions20260717)return;window.__itOverviewActions20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','','','','',''])}catch(e){return raw||['','','','','','','','','','']}}
  function actionMeta(action){
    var map={
      nhap:{title:'Nháº­p thiáº¿t bá»‹',icon:'+',hint:'Táº¡o thiáº¿t bá»‹ má»›i vÃ o kho IT',cls:'action-green'},
      cap_phat:{title:'Cáº¥p phÃ¡t',icon:'â†’',hint:'Giao thiáº¿t bá»‹ cho nhÃ¢n viÃªn',cls:'action-blue'},
      chuyen_kho:{title:'Chuyá»ƒn kho',icon:'â†”',hint:'MÃ¡y chuyá»ƒn Ä‘i kho/nÆ¡i khÃ¡c',cls:'action-amber'},
      xuat:{title:'Xuáº¥t thiáº¿t bá»‹',icon:'âˆ’',hint:'Xuáº¥t/thu há»“i khá»i danh sÃ¡ch sá»­ dá»¥ng',cls:'action-rose'}
    };
    return map[action]||map.nhap;
  }
  function ensureActionCards(){
    if(current!=='thietbi')return;
    var root=document.querySelector('#thietbi .it-total-dashboard'),stats=document.querySelector('#thietbi .it-stats');
    if(!root||byId('itOverviewActionCards'))return;
    var actions=['nhap','cap_phat','chuyen_kho','xuat'].map(function(k){
      var m=actionMeta(k);
      return '<button class="it-action-card '+m.cls+'" type="button" data-it-action="'+esc(k)+'"><span class="it-action-icon">'+esc(m.icon)+'</span><strong>'+esc(m.title)+'</strong><small>'+esc(m.hint)+'</small></button>';
    }).join('');
    var html='<div class="it-overview-tools" id="itOverviewActionCards"><div class="it-overview-tools-title">Thao tÃ¡c nhanh</div><div class="it-action-card-grid">'+actions+'</div></div>';
    if(stats)stats.insertAdjacentHTML('afterend',html);else root.insertAdjacentHTML('afterbegin',html);
  }
  function markActive(action){
    [].slice.call(document.querySelectorAll('#itOverviewActionCards .it-action-card')).forEach(function(btn){
      btn.classList.toggle('active',btn.getAttribute('data-it-action')===action);
    });
  }
  function syncActionSelect(action){
    var sel=byId('itActionType');if(!sel)return;
    sel.value=action||'nhap';
    try{sel.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){}
  }
  function showItForm(action,opts){
    if(current!=='thietbi')return;
    opts=opts||{};
    var page=byId('thietbi'),panel=document.querySelector('#thietbi .it-form-panel');
    if(!panel)return;
    if(opts.reset&&typeof window.resetThietBi==='function')window.resetThietBi();
    page.classList.add('it-form-visible');
    panel.classList.add('it-form-open');
    panel.style.display='';
    action=action||'nhap';
    syncActionSelect(action);
    markActive(action);
    if(opts.reset){
      setTimeout(function(){syncActionSelect(action);markActive(action)},140);
      setTimeout(function(){syncActionSelect(action);markActive(action)},260);
    }
    var title=panel.querySelector('.head h2'),meta=actionMeta(action);
    if(title)title.textContent=meta.title;
    var hint=byId('itFormHint');
    if(hint)hint.textContent=meta.hint+'. Khi lÆ°u, app váº«n Ä‘á»“ng bá»™ vÃ o danh sÃ¡ch thiáº¿t bá»‹ IT.';
    if(!opts.noScroll)setTimeout(function(){try{panel.scrollIntoView({behavior:'smooth',block:'start'})}catch(e){}},80);
    var serial=byId('maThietBi');
    if(serial&&!opts.noFocus)setTimeout(function(){try{serial.focus()}catch(e){}},140);
  }
  function hideItForm(){
    var page=byId('thietbi'),panel=document.querySelector('#thietbi .it-form-panel');
    if(page)page.classList.remove('it-form-visible');
    if(panel)panel.classList.remove('it-form-open');
    markActive('');
  }
  function ensureCloseButton(){
    var head=document.querySelector('#thietbi .it-form-panel .head');
    if(!head||byId('itCloseForm'))return;
    head.insertAdjacentHTML('beforeend','<button class="btn small" id="itCloseForm" type="button">ÄÃ³ng</button>');
    var btn=byId('itCloseForm');
    if(btn)btn.onclick=function(e){if(e)e.preventDefault();hideItForm()};
  }
  function bindCards(){
    var box=byId('itOverviewActionCards');if(!box||box.__bound)return;
    box.__bound=true;
    box.addEventListener('click',function(e){
      var btn=e.target.closest&&e.target.closest('[data-it-action]');
      if(!btn)return;
      e.preventDefault();
      var action=btn.getAttribute('data-it-action')||'nhap';
      showItForm(action,{reset:true});
    });
  }
  function applyOverviewLayout(){
    if(current!=='thietbi')return;
    var page=byId('thietbi'),panel=document.querySelector('#thietbi .it-form-panel'),main=document.querySelector('#thietbi .it-main-panel');
    if(page)page.classList.add('it-overview-page');
    if(panel&&!panel.classList.contains('it-form-open'))panel.style.display='none';
    if(main)main.classList.add('it-main-full');
    ensureActionCards();
    ensureCloseButton();
    bindCards();
  }
  function inferActionFromDevice(i){
    var x=tnorm((state.thietBiIT||[])[i]),st=norm(x[6]);
    if(st.indexOf('chuyen kho')>=0)return 'chuyen_kho';
    if(st.indexOf('da xuat')>=0||st.indexOf('thanh ly')>=0)return 'xuat';
    if(st.indexOf('dang su dung')>=0)return 'cap_phat';
    return 'nhap';
  }
  function wrapItFunctions(){
    if(typeof window.editThietBi==='function'&&!window.editThietBi.__itOverviewActions){
      var oldEdit=window.editThietBi;
      window.editThietBi=function(i){
        showItForm(inferActionFromDevice(i),{noScroll:true,noFocus:true});
        var out=oldEdit.apply(this,arguments);
        setTimeout(function(){showItForm(inferActionFromDevice(i),{noFocus:true})},180);
        return out;
      };
      window.editThietBi.__itOverviewActions=true;
    }
    if(typeof window.capPhatThietBi==='function'&&!window.capPhatThietBi.__itOverviewActions){
      var oldCap=window.capPhatThietBi;
      window.capPhatThietBi=function(i){
        var out=oldCap.apply(this,arguments);
        setTimeout(function(){showItForm('cap_phat')},180);
        return out;
      };
      window.capPhatThietBi.__itOverviewActions=true;
    }
    if(typeof window.resetThietBi==='function'&&!window.resetThietBi.__itOverviewActions){
      var oldReset=window.resetThietBi;
      window.resetThietBi=function(){
        var out=oldReset.apply(this,arguments);
        setTimeout(function(){syncActionSelect('nhap');markActive('nhap')},80);
        return out;
      };
      window.resetThietBi.__itOverviewActions=true;
    }
  }
  function installStyle(){
    if(byId('it-overview-actions-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-overview-actions-style-20260718-light-core-16';
    st.textContent='#thietbi.it-overview-page .it-total-layout{display:grid!important;grid-template-columns:1fr!important;gap:10px!important}#thietbi.it-overview-page .it-main-panel{width:100%!important}#thietbi.it-overview-page .it-form-panel{order:-1;width:100%!important}#thietbi.it-overview-page:not(.it-form-visible) .it-form-panel{display:none!important}#thietbi.it-overview-page.it-form-visible .it-form-panel{display:block!important}#thietbi .it-overview-tools{margin:0 0 10px 0;border:1px solid #cfe7db;border-radius:8px;background:#fff;box-shadow:0 8px 20px rgba(7,72,51,.06);overflow:hidden}#thietbi .it-overview-tools-title{padding:9px 12px;font-weight:800;color:#0b2f24;border-bottom:1px solid #dbece3;background:#f8fffb}#thietbi .it-action-card-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;padding:10px;background:#f3fbf7}#thietbi .it-action-card{min-height:82px;border:1px solid transparent;border-radius:8px;padding:10px 12px;text-align:left;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;gap:4px 9px;align-items:center;cursor:pointer;box-shadow:0 10px 20px rgba(7,72,51,.08),inset 0 1px 0 rgba(255,255,255,.45);transition:transform .12s ease,box-shadow .12s ease,border-color .12s ease}#thietbi .it-action-card:hover{transform:translateY(-1px);box-shadow:0 13px 24px rgba(7,72,51,.12),inset 0 1px 0 rgba(255,255,255,.55)}#thietbi .it-action-card.active{outline:2px solid #087253;outline-offset:1px}#thietbi .it-action-icon{width:32px;height:32px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.48);font-weight:900;font-size:18px;color:#0b5d45}#thietbi .it-action-card strong{font-size:15px;color:#092f24}#thietbi .it-action-card small{grid-column:1/-1;color:#38564b;font-size:12px;line-height:1.3}.action-green{background:linear-gradient(135deg,#c8f5df,#93deb9)}.action-blue{background:linear-gradient(135deg,#d7ecff,#a9d2f4)}.action-amber{background:linear-gradient(135deg,#fff0c4,#ffd679)}.action-rose{background:linear-gradient(135deg,#ffd3df,#f5a9bd)}#thietbi #itCloseForm{margin-left:auto}#thietbi .it-form-panel .head{gap:8px}#thietbi .it-device-table-wrap{max-height:520px!important}@media(max-width:900px){#thietbi .it-action-card-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding:8px}#thietbi .it-action-card{min-height:76px;padding:9px}#thietbi .it-action-card strong{font-size:14px}#thietbi .it-action-card small{font-size:11.5px}#thietbi .it-overview-tools-title{padding:8px 10px}#thietbi.it-overview-page.it-form-visible .it-form-panel{margin-bottom:8px!important}}';
    document.head.appendChild(st);
  }
  function run(){
    installStyle();
    wrapItFunctions();
    applyOverviewLayout();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itOverviewActions20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,220);setTimeout(run,620);return out};
    window.render.__itOverviewActions20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itOverviewActions20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,180);setTimeout(run,520);return out};
    window.bindForms.__itOverviewActions20260717=true;
  }
  setTimeout(run,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itHideSummary20260717)return;window.__itHideSummary20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function installStyle(){
    if(byId('it-hide-summary-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-hide-summary-style-20260718-light-core-16';
    st.textContent='#thietbi .it-stats{display:none!important}#thietbi .it-overview-tools{margin-top:8px!important}#thietbi .it-total-dashboard{margin-top:0!important}';
    document.head.appendChild(st);
  }
  function apply(){
    installStyle();
    var stats=document.querySelector('#thietbi .it-stats');
    if(stats)stats.setAttribute('aria-hidden','true');
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itHideSummary20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,120);return out};
    window.render.__itHideSummary20260717=true;
  }
  setTimeout(apply,200);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itSerialOnebar20260717)return;window.__itSerialOnebar20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function ensureOneBar(){
    if(current!=='thietbi')return;
    var input=byId('maThietBi'),scan=byId('scanSerialBtn'),file=byId('nativePhotoSerialInput');
    if(!input)return;
    var wrap=input.closest('.serial-scan-wrap')||input.parentElement;
    if(!wrap)return;
    wrap.classList.add('it-serial-onebar');
    if(scan)scan.textContent='QuÃ©t mÃ£';
    if(file){
      file.classList.add('it-hidden-native-file');
      file.setAttribute('tabindex','-1');
      var nbox=file.closest('.native-photo-box');
      if(nbox)nbox.classList.add('it-onebar-native-box');
      var oldTitle=nbox&&nbox.querySelector('.native-photo-title');
      var oldHelp=nbox&&nbox.querySelector('.native-photo-help');
      if(oldTitle)oldTitle.style.display='none';
      if(oldHelp)oldHelp.style.display='none';
      if(!byId('itPickSerialFileBtn')){
        var picker=document.createElement('label');
        picker.id='itPickSerialFileBtn';
        picker.className='btn it-file-picker-btn';
        picker.setAttribute('for','nativePhotoSerialInput');
        picker.textContent='Chá»n tá»‡p';
        if(scan&&scan.parentNode===wrap)scan.insertAdjacentElement('afterend',picker);
        else wrap.appendChild(picker);
      }
    }
    var hint=wrap.querySelector('.serial-scan-hint');
    if(hint)hint.style.display='none';
    var direct=byId('directSerialActions');
    if(direct)direct.classList.add('it-direct-actions-hidden');
  }
  function installStyle(){
    if(byId('it-serial-onebar-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-serial-onebar-style-20260718-light-core-16';
    st.textContent='#thietbi .it-serial-toolbox{padding:7px!important;gap:4px!important;background:#f6fffb!important}#thietbi .it-serial-toolbox .it-serial-label{gap:4px!important}#thietbi .it-serial-onebar{display:grid!important;grid-template-columns:minmax(0,1fr) auto auto!important;gap:7px!important;align-items:center!important}#thietbi .it-serial-onebar input#maThietBi{height:38px!important;min-height:38px!important}#thietbi .it-serial-onebar #scanSerialBtn,#thietbi .it-file-picker-btn{height:38px!important;min-height:38px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap!important;padding:0 13px!important;border-radius:7px!important;font-weight:750!important;cursor:pointer!important;text-decoration:none!important}#thietbi .it-file-picker-btn{background:#fff!important;color:#087253!important;border:1px solid #9fd7c1!important;box-shadow:none!important}#thietbi .it-file-picker-btn:hover{background:#eafff6!important}#thietbi .it-onebar-native-box{display:contents!important}#thietbi .it-hidden-native-file{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important;display:block!important;overflow:hidden!important}#thietbi .it-direct-actions-hidden{display:none!important}#thietbi .it-device-table-wrap table th,#thietbi .it-device-table-wrap table td{padding:7px 9px!important;font-size:13px!important;line-height:1.25!important}#thietbi .it-device-table-wrap .tag{padding:5px 9px!important;font-size:12px!important}#thietbi .it-filter-line-compact{padding:8px 10px!important;gap:7px!important}#thietbi .it-filter-line-compact input,#thietbi .it-filter-line-compact select,#thietbi .it-filter-line-compact button{min-height:34px!important;height:34px!important}@media(max-width:900px){#thietbi .it-serial-onebar{grid-template-columns:minmax(0,1fr) 76px 82px!important;gap:5px!important}#thietbi .it-serial-onebar input#maThietBi{height:40px!important;min-height:40px!important;font-size:14px!important}#thietbi .it-serial-onebar #scanSerialBtn,#thietbi .it-file-picker-btn{height:40px!important;min-height:40px!important;padding:0 8px!important;font-size:12.5px!important}#thietbi .it-device-table-wrap table th,#thietbi .it-device-table-wrap table td{font-size:12.5px!important}}';
    document.head.appendChild(st);
  }
  function run(){installStyle();ensureOneBar()}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itSerialOnebar20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,220);setTimeout(run,650);return out};
    window.render.__itSerialOnebar20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itSerialOnebar20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,180);setTimeout(run,560);return out};
    window.bindForms.__itSerialOnebar20260717=true;
  }
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t&&t.id==='itPickSerialFileBtn'){var file=byId('nativePhotoSerialInput');if(file)setTimeout(function(){},0)}
    setTimeout(run,80);
  });
  setTimeout(run,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itAutoDateWarehouse20260717)return;window.__itAutoDateWarehouse20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function todayLocal(){
    var d=new Date(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
    return d.getFullYear()+'-'+m+'-'+day;
  }
  function primaryItKho(){
    var list=Array.isArray(state&&state.kho)?state.kho:[];
    var k=list.find(function(x){var s=norm([x&&x[0],x&&x[1],x&&x[2]].join(' '));return s.indexOf('thiet bi it')>=0||s.indexOf('kho it')>=0||s.indexOf('cntt')>=0});
    return k?{code:k[0],name:k[1]}:{code:'KHO-IT',name:'Kho Thiáº¿t Bá»‹ IT'};
  }
  function isNewDevice(){
    var edit=byId('editThietBi');
    return !edit||!String(edit.value||'').trim();
  }
  function applyFormDefaults(){
    if(current!=='thietbi')return;
    var date=byId('ngayThietBi'),dateLabel=date&&date.closest('label');
    if(dateLabel)dateLabel.classList.add('it-date-hidden-field');
    if(date&&isNewDevice())date.value=todayLocal();
    var action=byId('itActionType'),status=byId('trangThaiThietBi'),khoSelect=byId('khoThietBiIT'),user=byId('nguoiDungThietBi'),dept=byId('boPhanThietBiIT'),kho=primaryItKho();
    if(khoSelect){
      khoSelect.innerHTML='<option value="'+kho.code+'">'+kho.name+'</option>';
      khoSelect.value=kho.code;
    }
    if(!action||action.value==='nhap'){
      if(status)status.value='Trong kho';
      if(user)user.value='';
      if(dept)dept.value=kho.name;
    }
  }
  function prepareBeforeSave(){
    var date=byId('ngayThietBi');
    if(date&&isNewDevice())date.value=todayLocal();
    var action=byId('itActionType'),status=byId('trangThaiThietBi'),khoSelect=byId('khoThietBiIT'),user=byId('nguoiDungThietBi'),dept=byId('boPhanThietBiIT'),kho=primaryItKho();
    if(khoSelect){
      khoSelect.innerHTML='<option value="'+kho.code+'">'+kho.name+'</option>';
      khoSelect.value=kho.code;
    }
    if(!action||action.value==='nhap'){
      if(status)status.value='Trong kho';
      if(user)user.value='';
      if(dept)dept.value=kho.name;
    }
  }
  function installStyle(){
    if(byId('it-auto-date-warehouse-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-auto-date-warehouse-style-20260718-light-core-16';
    st.textContent='#thietbi .it-date-hidden-field{display:none!important}#thietbi .it-device-form{align-items:end!important}';
    document.head.appendChild(st);
  }
  function wrapSave(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itAutoDateWarehouse20260717){
      var oldSave=window.saveThietBi;
      window.saveThietBi=function(){prepareBeforeSave();return oldSave.apply(this,arguments)};
      window.saveThietBi.__itAutoDateWarehouse20260717=true;
    }
    if(typeof window.resetThietBi==='function'&&!window.resetThietBi.__itAutoDateWarehouse20260717){
      var oldReset=window.resetThietBi;
      window.resetThietBi=function(){var out=oldReset.apply(this,arguments);setTimeout(applyFormDefaults,30);return out};
      window.resetThietBi.__itAutoDateWarehouse20260717=true;
    }
  }
  function run(){installStyle();wrapSave();applyFormDefaults()}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itAutoDateWarehouse20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,200);setTimeout(run,650);return out};
    window.render.__itAutoDateWarehouse20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itAutoDateWarehouse20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,160);setTimeout(run,520);return out};
    window.bindForms.__itAutoDateWarehouse20260717=true;
  }
  document.addEventListener('change',function(e){if(e.target&&e.target.id==='itActionType')setTimeout(applyFormDefaults,40)});
  setTimeout(run,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itSerialInlineFile20260717)return;window.__itSerialInlineFile20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function applyInlineFile(){
    if(current!=='thietbi')return;
    var input=byId('maThietBi'),scan=byId('scanSerialBtn'),file=byId('nativePhotoSerialInput');
    if(!input||!scan||!file)return;
    var wrap=input.closest('.serial-scan-wrap')||scan.closest('.serial-scan-wrap');
    if(!wrap)return;
    wrap.classList.add('it-serial-inline-file-row');
    file.classList.add('it-hidden-native-file');
    var picker=byId('itPickSerialFileBtn');
    if(!picker){
      picker=document.createElement('label');
      picker.id='itPickSerialFileBtn';
      picker.className='btn it-file-picker-btn';
      picker.setAttribute('for','nativePhotoSerialInput');
      picker.textContent='Chá»n tá»‡p';
    }
    picker.setAttribute('for','nativePhotoSerialInput');
    if(picker.parentNode!==wrap||picker.previousElementSibling!==scan){
      scan.insertAdjacentElement('afterend',picker);
    }
    var nbox=file.closest('.native-photo-box');
    if(nbox){
      nbox.classList.add('it-native-photo-collapsed');
      nbox.style.display='contents';
    }
    var title=nbox&&nbox.querySelector('.native-photo-title');
    var help=nbox&&nbox.querySelector('.native-photo-help');
    if(title)title.style.display='none';
    if(help)help.style.display='none';
    var hint=wrap.querySelector('.serial-scan-hint');
    if(hint)hint.style.display='none';
  }
  function installStyle(){
    if(byId('it-serial-inline-file-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-serial-inline-file-style-20260718-light-core-16';
    st.textContent='#thietbi .it-serial-toolbox .serial-scan-wrap.it-serial-inline-file-row,#thietbi .serial-scan-wrap.it-serial-inline-file-row{display:grid!important;grid-template-columns:minmax(0,1fr) 88px 94px!important;gap:7px!important;align-items:center!important;grid-column:1/-1!important}#thietbi .serial-scan-wrap.it-serial-inline-file-row input#maThietBi{grid-column:auto!important;width:100%!important;min-width:0!important;height:38px!important;min-height:38px!important}#thietbi .serial-scan-wrap.it-serial-inline-file-row #scanSerialBtn,#thietbi .serial-scan-wrap.it-serial-inline-file-row #itPickSerialFileBtn{width:auto!important;min-width:0!important;height:38px!important;min-height:38px!important;padding:0 10px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap!important;border-radius:7px!important;font-size:13px!important;font-weight:750!important;line-height:1!important}#thietbi .serial-scan-wrap.it-serial-inline-file-row #itPickSerialFileBtn{background:#fff!important;color:#087253!important;border:1px solid #9fd7c1!important;box-shadow:none!important;margin:0!important;text-decoration:none!important;cursor:pointer!important}#thietbi .it-serial-toolbox .native-photo-box.it-native-photo-collapsed{display:contents!important;padding:0!important;margin:0!important;border:0!important;background:transparent!important}#thietbi .it-hidden-native-file{position:absolute!important;left:-9999px!important;top:auto!important;width:1px!important;height:1px!important;opacity:.01!important;overflow:hidden!important;display:block!important}@media(max-width:900px){#thietbi .it-serial-toolbox .serial-scan-wrap.it-serial-inline-file-row,#thietbi .serial-scan-wrap.it-serial-inline-file-row{grid-template-columns:minmax(0,1fr) 72px 76px!important;gap:5px!important}#thietbi .serial-scan-wrap.it-serial-inline-file-row input#maThietBi{height:40px!important;min-height:40px!important;font-size:13px!important}#thietbi .serial-scan-wrap.it-serial-inline-file-row #scanSerialBtn,#thietbi .serial-scan-wrap.it-serial-inline-file-row #itPickSerialFileBtn{height:40px!important;min-height:40px!important;padding:0 5px!important;font-size:11.5px!important}}';
    document.head.appendChild(st);
  }
  function run(){installStyle();applyInlineFile()}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itSerialInlineFile20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,180);setTimeout(run,620);return out};
    window.render.__itSerialInlineFile20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itSerialInlineFile20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,160);setTimeout(run,560);return out};
    window.bindForms.__itSerialInlineFile20260717=true;
  }
  document.addEventListener('click',function(){setTimeout(run,80)});
  setTimeout(run,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itItemSearchInput20260717)return;window.__itItemSearchInput20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').trim()}
  function hnorm(raw){
    try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}
    catch(e){return raw||['','','','','']}
  }
  function itItems(){
    var rows=(state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm);
    var its=rows.filter(function(h){return norm(h[2]).indexOf('thiet bi it')>=0});
    if(!its.length)its=rows;
    return its.map(function(h){return {code:h[0]||'',name:h[1]||'',group:h[2]||'',desc:h[4]||'',text:(h[0]||'')+' - '+(h[1]||'')}}).filter(function(x){return x.code||x.name});
  }
  function labelFor(code){
    var found=itItems().find(function(x){return x.code===code});
    return found?found.text:'';
  }
  function findItem(text){
    var q=norm(text),list=itItems();
    if(!q)return null;
    return list.find(function(x){return norm(x.text)===q||norm(x.code)===q||norm(x.name)===q})||
      list.find(function(x){return norm(x.text).indexOf(q)>=0||norm(x.code).indexOf(q)>=0||norm(x.name).indexOf(q)>=0||norm(x.desc).indexOf(q)>=0});
  }
  function syncSelectFromSearch(){
    var input=byId('hangThietBiSearch'),sel=byId('hangThietBi');
    if(!input||!sel)return true;
    var item=findItem(input.value);
    if(item){sel.value=item.code;input.dataset.code=item.code;return true}
    if(!String(input.value||'').trim()){sel.value='';input.dataset.code='';return true}
    return false;
  }
  function refreshDatalist(){
    var dl=byId('hangThietBiSearchList');if(!dl)return;
    dl.innerHTML='';
    itItems().forEach(function(item){
      var opt=document.createElement('option');
      opt.value=item.text;
      opt.label=item.group?item.group:'Máº·t hÃ ng IT';
      dl.appendChild(opt);
    });
  }
  function enhanceItemSelect(){
    if(current!=='thietbi')return;
    var sel=byId('hangThietBi');
    if(!sel)return;
    var label=sel.closest('label');
    if(!label)return;
    var input=byId('hangThietBiSearch');
    if(!input){
      input=document.createElement('input');
      input.id='hangThietBiSearch';
      input.setAttribute('list','hangThietBiSearchList');
      input.placeholder='GÃµ tÃªn hoáº·c mÃ£ máº·t hÃ ng IT Ä‘á»ƒ tÃ¬m';
      input.autocomplete='off';
      var dl=document.createElement('datalist');
      dl.id='hangThietBiSearchList';
      label.insertBefore(input,sel);
      label.appendChild(dl);
      input.addEventListener('input',syncSelectFromSearch);
      input.addEventListener('change',syncSelectFromSearch);
      input.addEventListener('blur',function(){
        var item=findItem(input.value);
        if(item){input.value=item.text;sel.value=item.code;input.dataset.code=item.code}
      });
    }
    sel.classList.add('it-hidden-item-select');
    sel.setAttribute('tabindex','-1');
    refreshDatalist();
    if(sel.value)input.value=labelFor(sel.value)||input.value;
    else {
      var first=itItems()[0];
      if(first){sel.value=first.code;input.value=first.text;input.dataset.code=first.code}
    }
  }
  function installStyle(){
    if(byId('it-item-search-input-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-item-search-input-style-20260718-light-core-16';
    st.textContent='#thietbi #hangThietBi.it-hidden-item-select{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important;display:block!important;overflow:hidden!important}#thietbi #hangThietBiSearch{width:100%!important;min-height:38px!important;background:#fff!important;border:1px solid #bdd8ca!important;border-radius:7px!important;padding:8px 10px!important;font:inherit!important}#thietbi #hangThietBiSearch:focus{outline:2px solid rgba(0,137,98,.22)!important;border-color:#008a62!important;box-shadow:0 0 0 3px rgba(0,137,98,.08)!important}@media(max-width:900px){#thietbi #hangThietBiSearch{min-height:42px!important;background:#f7fffb!important;font-size:14px!important}}';
    document.head.appendChild(st);
  }
  function wrapActions(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itItemSearchInput20260717){
      var oldSave=window.saveThietBi;
      window.saveThietBi=function(){
        if(current==='thietbi'&&!syncSelectFromSearch()){
          alert('Chá»n máº·t hÃ ng IT trong danh sÃ¡ch gá»£i Ã½ trÆ°á»›c khi lÆ°u');
          var input=byId('hangThietBiSearch');if(input)input.focus();
          return;
        }
        return oldSave.apply(this,arguments);
      };
      window.saveThietBi.__itItemSearchInput20260717=true;
    }
    if(typeof window.editThietBi==='function'&&!window.editThietBi.__itItemSearchInput20260717){
      var oldEdit=window.editThietBi;
      window.editThietBi=function(){
        var out=oldEdit.apply(this,arguments);
        setTimeout(function(){
          enhanceItemSelect();
          var sel=byId('hangThietBi'),input=byId('hangThietBiSearch');
          if(sel&&input)input.value=labelFor(sel.value)||input.value;
        },80);
        return out;
      };
      window.editThietBi.__itItemSearchInput20260717=true;
    }
    if(typeof window.resetThietBi==='function'&&!window.resetThietBi.__itItemSearchInput20260717){
      var oldReset=window.resetThietBi;
      window.resetThietBi=function(){
        var out=oldReset.apply(this,arguments);
        setTimeout(function(){
          enhanceItemSelect();
          var sel=byId('hangThietBi'),input=byId('hangThietBiSearch'),first=itItems()[0];
          if(sel&&input&&first){sel.value=first.code;input.value=first.text;input.dataset.code=first.code}
        },80);
        return out;
      };
      window.resetThietBi.__itItemSearchInput20260717=true;
    }
  }
  function run(){installStyle();wrapActions();enhanceItemSelect()}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itItemSearchInput20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,220);setTimeout(run,700);return out};
    window.render.__itItemSearchInput20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itItemSearchInput20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,180);setTimeout(run,620);return out};
    window.bindForms.__itItemSearchInput20260717=true;
  }
  setTimeout(run,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__employeeCleanNameInput20260717)return;window.__employeeCleanNameInput20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function cleanEmployeeUi(){
    if(current!=='nhanvien')return;
    var input=byId('employeeName');
    if(input){
      input.removeAttribute('list');
      input.setAttribute('autocomplete','off');
    }
    var dl=byId('employeeNameList');
    if(dl)dl.remove();
  }
  function installStyle(){
    if(byId('employee-clean-name-input-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='employee-clean-name-input-style-20260718-light-core-16';
    st.textContent='#nhanvien .employee-name-link,#nhanvien .employee-name-link:hover,#nhanvien .employee-name-link:focus{text-decoration:none!important;text-underline-offset:0!important;color:#063a2d!important;font-weight:650!important}#nhanvien #employeeName::-webkit-calendar-picker-indicator{display:none!important;opacity:0!important}#nhanvien #employeeName{appearance:textfield!important;-webkit-appearance:none!important;background-image:none!important}';
    document.head.appendChild(st);
  }
  function run(){installStyle();cleanEmployeeUi()}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__employeeCleanNameInput20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,160);setTimeout(run,520);return out};
    window.render.__employeeCleanNameInput20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__employeeCleanNameInput20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,120);setTimeout(run,420);return out};
    window.bindForms.__employeeCleanNameInput20260717=true;
  }
  setTimeout(run,300);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itItemEmptyOnNew20260717)return;window.__itItemEmptyOnNew20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isNewDevice(){
    var edit=byId('editThietBi');
    return !edit||!String(edit.value||'').trim();
  }
  function clearItemIfNew(force){
    if(current!=='thietbi'||!isNewDevice())return;
    var input=byId('hangThietBiSearch'),sel=byId('hangThietBi');
    if(!input||!sel)return;
    if(force||!input.dataset.userTouched){
      input.value='';
      input.dataset.code='';
      sel.value='';
    }
  }
  function bindTouch(){
    var input=byId('hangThietBiSearch');
    if(input&&!input.__itItemEmptyTouch){
      input.__itItemEmptyTouch=true;
      input.addEventListener('input',function(){input.dataset.userTouched='1'});
      input.addEventListener('change',function(){input.dataset.userTouched='1'});
    }
  }
  function installStyle(){
    if(byId('it-item-empty-on-new-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-item-empty-on-new-style-20260718-light-core-16';
    st.textContent='#thietbi #hangThietBiSearch::placeholder{color:#778981!important;font-weight:450!important}';
    document.head.appendChild(st);
  }
  function run(){installStyle();bindTouch();setTimeout(function(){clearItemIfNew(false)},40);setTimeout(function(){clearItemIfNew(false)},180)}
  function clearAfterNew(){setTimeout(function(){clearItemIfNew(true);bindTouch()},120);setTimeout(function(){clearItemIfNew(true);bindTouch()},320)}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itItemEmptyOnNew20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(run,260);setTimeout(run,780);return out};
    window.render.__itItemEmptyOnNew20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itItemEmptyOnNew20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(run,220);setTimeout(run,700);return out};
    window.bindForms.__itItemEmptyOnNew20260717=true;
  }
  if(typeof window.resetThietBi==='function'&&!window.resetThietBi.__itItemEmptyOnNew20260717){
    var oldReset=window.resetThietBi;
    window.resetThietBi=function(){var out=oldReset.apply(this,arguments);clearAfterNew();return out};
    window.resetThietBi.__itItemEmptyOnNew20260717=true;
  }
  if(typeof window.editThietBi==='function'&&!window.editThietBi.__itItemEmptyOnNew20260717){
    var oldEdit=window.editThietBi;
    window.editThietBi=function(){var out=oldEdit.apply(this,arguments);setTimeout(bindTouch,180);return out};
    window.editThietBi.__itItemEmptyOnNew20260717=true;
  }
  setTimeout(run,500);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itAssetListTable20260717)return;window.__itAssetListTable20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function money(n){try{return new Intl.NumberFormat('vi-VN').format(Number(n)||0)}catch(e){return String(n||0)}}
  function dateVN(v){
    v=String(v||'').trim();
    var m=v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return m?m[3]+'/'+m[2]+'/'+m[1]:v;
  }
  function tnorm(raw){
    raw=Array.isArray(raw)?raw:[];
    if(raw.length>=10)return raw;
    if(raw.length>=8)return [raw[0]||'',raw[1]||'',raw[2]||'',raw[3]||'',raw[4]||'',raw[5]||'',raw[6]||'',raw[7]||'',raw[8]||'',raw[9]||''];
    return [raw[0]||'',raw[1]||'',raw[2]||'',raw[3]||'',raw[4]||'',raw[5]||'',raw[6]||'',raw[7]||'','',''];
  }
  function serialOf(x){return String(x&&((x[1]&&x[1])||x[0])||'').trim()}
  function itemInfo(code){
    var h=(state.hang||[]).find(function(r){return r&&r[0]===code});
    if(!h&&typeof item==='function'){try{h=item(code)}catch(e){}}
    h=Array.isArray(h)?h:[code,code,'Thiáº¿t bá»‹ IT','CÃ¡i',''];
    return [h[0]||code,h[1]||code,h[2]||'Thiáº¿t bá»‹ IT',h[3]||'CÃ¡i',h[4]||''];
  }
  function statusText(x){
    var st=String(x&&x[6]||'').trim();
    if(!st)return 'Chá» cáº¥p phÃ¡t';
    return norm(st).indexOf('trong kho')>=0?'Chá» cáº¥p phÃ¡t':st;
  }
  function statusKind(x){
    var s=norm(x&&x[6]);
    if(s.indexOf('trong kho')>=0)return 'stock';
    if(s.indexOf('dang su dung')>=0||s.indexOf('cap phat')>=0)return 'using';
    if(s.indexOf('sua')>=0||s.indexOf('bao tri')>=0)return 'repair';
    if(s.indexOf('thanh ly')>=0)return 'liquid';
    if(s.indexOf('that lac')>=0||s==='mat'||s.indexOf('mat ')>=0)return 'lost';
    if(s.indexOf('huy')>=0)return 'cancel';
    if(s.indexOf('hong')>=0)return 'broken';
    return 'other';
  }
  function holderText(x){
    var kind=statusKind(x),holder=String(x&&x[5]||'').trim();
    if(kind==='stock')return '';
    return holder;
  }
  function deptText(x){
    var kind=statusKind(x),dept=String(x&&x[8]||'').trim();
    if(kind==='stock')return String(x&&x[9]||x&&x[5]||'Kho thiáº¿t bá»‹ IT').trim();
    return dept;
  }
  function rowHtml(raw,i){
    var x=tnorm(raw),h=itemInfo(x[2]),serial=serialOf(x),kind=statusKind(x),issued=kind==='using'?1:0,remain=kind==='using'?0:1;
    var stClass=kind==='using'?'asset-using':(kind==='stock'?'asset-stock':(kind==='broken'||kind==='lost'||kind==='cancel'?'asset-bad':'asset-other'));
    var search=[serial,h[0],h[1],h[2],h[4],x[3],dateVN(x[4]),holderText(x),deptText(x),statusText(x),x[7]].join(' ');
    var actions='<div class="row-actions asset-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">Cáº¥p phÃ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">Vá» kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">Sá»­a</button></div>';
    return '<tr data-it-row="1" data-kind="'+kind+'" data-search="'+esc(norm(search))+'" data-status="'+esc(norm(x[6]||statusText(x)))+'" data-type="'+esc(x[2]||'')+'">'+
      '<td data-label=""><input class="asset-check" type="checkbox" aria-label="Chá»n '+esc(serial)+'"></td>'+
      '<td data-label="MÃ£ tÃ i sáº£n"><button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(serial||'ChÆ°a cÃ³ seri')+'</button></td>'+
      '<td data-label="TÃªn tÃ i sáº£n">'+esc(h[1])+'</td>'+
      '<td data-label="Loáº¡i tÃ i sáº£n">'+esc(h[2]||'Thiáº¿t bá»‹ IT')+'</td>'+
      '<td data-label="NgÃ y mua/nháº­p">'+esc(dateVN(x[4]))+'</td>'+
      '<td data-label="Sá»‘ lÆ°á»£ng" class="num">1</td>'+
      '<td data-label="Sá»‘ cáº¥p phÃ¡t" class="num">'+issued+'</td>'+
      '<td data-label="SL cÃ²n láº¡i" class="num">'+remain+'</td>'+
      '<td data-label="Tráº¡ng thÃ¡i"><span class="tag '+stClass+'">'+esc(statusText(x))+'</span></td>'+
      '<td data-label="NguyÃªn giÃ¡" class="num">0</td>'+
      '<td data-label="NgÆ°á»i sá»­ dá»¥ng">'+esc(holderText(x))+'</td>'+
      '<td data-label="PhÃ²ng ban/kho">'+esc(deptText(x))+'</td>'+
      '<td data-label="Thao tÃ¡c">'+actions+'</td>'+
    '</tr>';
  }
  function counts(){
    var c={all:0,stock:0,using:0,repair:0,liquid:0,lost:0,cancel:0,broken:0,other:0};
    (state.thietBiIT||[]).forEach(function(raw){var k=statusKind(tnorm(raw));c.all++;c[k]=(c[k]||0)+1});
    return c;
  }
  function renderTabs(){
    var c=counts();
    var tabs=[
      ['all','Táº¥t cáº£',c.all],
      ['stock','ChÆ°a cáº¥p phÃ¡t',c.stock],
      ['using','Äang sá»­ dá»¥ng',c.using],
      ['liquid','Thanh lÃ½',c.liquid],
      ['repair','Báº£o trÃ¬, sá»­a chá»¯a',c.repair],
      ['lost','Máº¥t',c.lost],
      ['cancel','Há»§y',c.cancel],
      ['broken','Há»ng',c.broken]
    ];
    return '<div class="it-asset-tabs" id="itAssetTabs">'+tabs.map(function(t,i){
      return '<button class="it-asset-tab '+(i===0?'active':'')+'" type="button" data-kind="'+t[0]+'">'+esc(t[1])+' <span>('+money(t[2])+')</span></button>';
    }).join('')+'</div>';
  }
  function applyFilters(){
    var q=byId('itDeviceSearch'),type=byId('itTypeFilter'),status=byId('itStatusFilter'),badge=byId('itVisibleCount'),tabs=byId('itAssetTabs');
    var active=tabs&&tabs.querySelector('.it-asset-tab.active');
    var tabKind=active?active.getAttribute('data-kind')||'all':'all';
    var query=norm(q&&q.value),tp=type&&type.value,st=norm(status&&status.value),shown=0,total=0;
    [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(r){
      total++;
      var ok=(!query||String(r.getAttribute('data-search')||'').indexOf(query)>=0)&&(!tp||r.getAttribute('data-type')===tp)&&(!st||String(r.getAttribute('data-status')||'').indexOf(st)>=0)&&(tabKind==='all'||r.getAttribute('data-kind')===tabKind);
      r.style.display=ok?'':'none';
      if(ok)shown++;
    });
    if(badge)badge.textContent=shown+' / '+total+' tÃ i sáº£n';
  }
  function upgrade(){
    if(current!=='thietbi')return;
    var panel=document.querySelector('#thietbi .it-main-panel');
    var tbody=byId('itDeviceRows');
    if(!panel||!tbody)return;
    var title=panel.querySelector('.head h2');
    if(title)title.textContent='Danh sÃ¡ch tÃ i sáº£n IT';
    if(!byId('itAssetTabs')){
      var filter=panel.querySelector('.it-filter-line');
      if(filter)filter.insertAdjacentHTML('beforebegin',renderTabs());
    }else{
      byId('itAssetTabs').outerHTML=renderTabs();
    }
    var table=tbody.closest('table');
    if(table){
      table.classList.add('it-asset-table');
      var thead=table.querySelector('thead');
      if(thead)thead.innerHTML='<tr><th><input class="asset-check" type="checkbox" aria-label="Chá»n táº¥t cáº£"></th><th>MÃ£ TS</th><th>TÃªn tÃ i sáº£n</th><th>Loáº¡i tÃ i sáº£n</th><th>NgÃ y mua</th><th>Sá»‘ lÆ°á»£ng</th><th>Sá»‘ cáº¥p phÃ¡t</th><th>SL cÃ²n láº¡i</th><th>Tráº¡ng thÃ¡i</th><th>NguyÃªn giÃ¡</th><th>NgÆ°á»i sá»­ dá»¥ng</th><th>PhÃ²ng ban sá»­ dá»¥ng</th><th>Thao tÃ¡c</th></tr>';
    }
    tbody.innerHTML=(state.thietBiIT||[]).map(rowHtml).join('')||'<tr><td class="empty" colspan="13">ChÆ°a cÃ³ tÃ i sáº£n IT. Báº¥m Nháº­p thiáº¿t bá»‹ Ä‘á»ƒ thÃªm má»›i.</td></tr>';
    var tabs=byId('itAssetTabs');
    if(tabs&&!tabs.__assetBind){
      tabs.__assetBind=true;
      tabs.addEventListener('click',function(e){
        var btn=e.target.closest&&e.target.closest('.it-asset-tab');
        if(!btn)return;
        [].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.remove('active')});
        btn.classList.add('active');
        applyFilters();
      });
    }
    ['itDeviceSearch','itTypeFilter','itStatusFilter'].forEach(function(id){
      var el=byId(id);
      if(el&&!el.__assetFilter){el.__assetFilter=true;el.addEventListener('input',applyFilters);el.addEventListener('change',applyFilters)}
    });
    var clear=byId('itClearSearch');
    if(clear){
      clear.onclick=function(e){
        if(e)e.preventDefault();
        var q=byId('itDeviceSearch'),type=byId('itTypeFilter'),status=byId('itStatusFilter');
        if(q)q.value='';if(type)type.value='';if(status)status.value='';
        var tabs=byId('itAssetTabs');
        if(tabs){[].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.toggle('active',x.getAttribute('data-kind')==='all')})}
        applyFilters();if(q)q.focus();
      };
    }
    applyFilters();
  }
  function installStyle(){
    if(byId('it-asset-list-table-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-asset-list-table-style-20260718-light-core-16';
    st.textContent='#thietbi .it-asset-tabs{display:flex;gap:18px;align-items:center;flex-wrap:wrap;padding:9px 12px 8px;background:#fff;border-bottom:1px solid #e2efe8}#thietbi .it-asset-tab{border:0;background:transparent;color:#5d6d65;font-size:12.5px;font-weight:700;padding:4px 0 8px;cursor:pointer;position:relative;white-space:nowrap}#thietbi .it-asset-tab span{font-weight:750;color:#7b8b83}#thietbi .it-asset-tab.active{color:#008a68}#thietbi .it-asset-tab.active:after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;border-radius:999px;background:#12b892}#thietbi .it-filter-line{background:#fbfffd!important;padding:9px 12px!important}#thietbi .it-asset-table{min-width:1320px!important;font-size:12.7px!important}#thietbi .it-asset-table th{font-size:11.5px!important;color:#718077!important;background:#f9fbfa!important;white-space:nowrap}#thietbi .it-asset-table td{padding:7px 9px!important;line-height:1.25!important;vertical-align:middle!important}#thietbi .asset-check{width:14px!important;height:14px!important;min-height:auto!important;padding:0!important}#thietbi .asset-actions{gap:5px;justify-content:flex-start}#thietbi .asset-actions .btn{min-height:28px!important;padding:4px 8px!important;font-size:12px!important}#thietbi .asset-stock{background:#e4f5ff!important;color:#1884c7!important}#thietbi .asset-using{background:#e0f7ec!important;color:#05855e!important}#thietbi .asset-other{background:#fff3d4!important;color:#8a6400!important}#thietbi .asset-bad{background:#ffe5e5!important;color:#bf3434!important}@media(max-width:900px){#thietbi .it-asset-tabs{gap:10px;overflow-x:auto;flex-wrap:nowrap;padding:8px 10px;-webkit-overflow-scrolling:touch}#thietbi .it-asset-tabs::-webkit-scrollbar{display:none}#thietbi .it-asset-tab{flex:0 0 auto;font-size:12px}#thietbi .it-asset-table{min-width:0!important}#thietbi #itDeviceRows tr[data-it-row]{display:grid!important;grid-template-columns:1fr!important;gap:4px!important}#thietbi #itDeviceRows td[data-label=""]{display:none!important}#thietbi #itDeviceRows td[data-label="MÃ£ tÃ i sáº£n"],#thietbi #itDeviceRows td[data-label="TÃªn tÃ i sáº£n"],#thietbi #itDeviceRows td[data-label="Tráº¡ng thÃ¡i"]{font-weight:750!important}#thietbi #itDeviceRows td[data-label="NguyÃªn giÃ¡"],#thietbi #itDeviceRows td[data-label="Sá»‘ lÆ°á»£ng"],#thietbi #itDeviceRows td[data-label="Sá»‘ cáº¥p phÃ¡t"],#thietbi #itDeviceRows td[data-label="SL cÃ²n láº¡i"]{font-size:12.3px!important}}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itAssetListTable20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(function(){installStyle();upgrade()},180);setTimeout(upgrade,700);return out};
    window.render.__itAssetListTable20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itAssetListTable20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(function(){installStyle();upgrade()},120);return out};
    window.bindForms.__itAssetListTable20260717=true;
  }
  setTimeout(function(){installStyle();upgrade()},500);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideTransferMenuBadge20260717)return;window.__hideTransferMenuBadge20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function menuVisible(list){return (list||[]).filter(function(n){return n&&n[0]!=='ton'&&n[0]!=='chuyen'})}
  function pendingTransferCount(){
    return (Array.isArray(state&&state.chuyen)?state.chuyen:[]).filter(function(x){
      var st=norm(x&&x.st);
      return !st||st.indexOf('cho nhan')>=0;
    }).length;
  }
  function installNav(){
    window.nav=menuVisible(window.nav||nav);
    window.mobile=menuVisible(window.mobile||mobile);
    var ICONS={tongquan:'TQ',nhap:'+',xuat:'-',thietbi:'IT',nhanvien:'NV',baocao:'BC',hanghoa:'HH',thietlap:'âš™'};
    window.buildNav=function(){
      var side=byId('sideNav'),mob=byId('mobileNav');
      var baseNav=menuVisible(window.nav||nav),baseMobile=menuVisible(window.mobile||mobile);
      var admin=(typeof isAdminUser==='function'?isAdminUser():(typeof isAdmin==='function'?isAdmin():true));
      var staffAllowed=['tongquan','nhap','xuat','thietbi','chuyen','baocao'];
      var navItems=admin?baseNav:baseNav.filter(function(n){return staffAllowed.indexOf(n[0])>=0});
      var mobileItems=admin?baseMobile:baseMobile.filter(function(n){return staffAllowed.indexOf(n[0])>=0});
      if(side)side.innerHTML=navItems.map(function(n){return '<button class="nav '+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+esc(n[1])+'</button>'}).join('');
      if(mob)mob.innerHTML=mobileItems.map(function(n){return '<button class="mobile-nav-btn '+(n[0]===current?'active':'')+'" data-nav="'+esc(n[0])+'" data-icon="'+esc(ICONS[n[0]]||'')+'" aria-label="'+esc(n[1])+'" onclick="go(\''+n[0]+'\')"><span>'+esc(n[1])+'</span></button>'}).join('');
    };
  }
  function patchReceiveButton(){
    if(current!=='nhap')return;
    var count=pendingTransferCount();
    [].slice.call(document.querySelectorAll('#nhap button')).forEach(function(btn){
      var text=(btn.textContent||'').trim();
      var onclick=String(btn.getAttribute('onclick')||'');
      if(text.indexOf('Nháº­n Ä‘iá»u chuyá»ƒn')<0&&onclick.indexOf('chuyen')<0)return;
      btn.classList.add('transfer-receive-btn');
      btn.innerHTML='<span>Nháº­n Ä‘iá»u chuyá»ƒn</span>'+(count?'<b class="transfer-badge">'+count+'</b>':'');
      btn.title=count?('CÃ³ '+count+' phiáº¿u Ä‘iá»u chuyá»ƒn chá» nháº­n'):'KhÃ´ng cÃ³ phiáº¿u Ä‘iá»u chuyá»ƒn chá» nháº­n';
    });
  }
  function installStyle(){
    if(byId('hide-transfer-menu-badge-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='hide-transfer-menu-badge-style-20260718-light-core-16';
    st.textContent='.transfer-receive-btn{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;position:relative!important;white-space:nowrap!important}.transfer-receive-btn .transfer-badge{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:22px;padding:0 7px;border-radius:999px;background:#fff;color:#0b6b4f;font-size:12px;font-weight:900;box-shadow:0 4px 12px rgba(0,0,0,.16)}@media(max-width:900px){.transfer-receive-btn{width:auto!important;min-width:132px!important}.transfer-receive-btn .transfer-badge{height:20px;min-width:20px;font-size:11px}}';
    document.head.appendChild(st);
  }
  function apply(){
    installNav();
    installStyle();
    patchReceiveButton();
  }
  installNav();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__hideTransferMenuBadge20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,120);setTimeout(apply,500);return out};
    window.render.__hideTransferMenuBadge20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__hideTransferMenuBadge20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,60);return out};
    window.bindForms.__hideTransferMenuBadge20260717=true;
  }
  setTimeout(apply,400);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itCatalogQuickCard20260717)return;window.__itCatalogQuickCard20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').trim()}
  function ensureCatalogCard(){
    var grid=document.querySelector('#thietbi #itOverviewActionCards .it-action-card-grid');
    if(!grid||byId('itCatalogActionCard'))return;
    grid.insertAdjacentHTML('beforeend',
      '<button class="it-action-card action-mint" id="itCatalogActionCard" type="button">'+
        '<span class="it-action-icon">DM</span>'+
        '<strong>Danh má»¥c thiáº¿t bá»‹ IT</strong>'+
        '<small>ThÃªm, sá»­a nhÃ³m thiáº¿t bá»‹</small>'+
      '</button>');
  }
  function findCatalogListPanel(){
    var panels=[].slice.call(document.querySelectorAll('#thietbi .it-lower-layout > .panel'));
    return panels.find(function(p){
      var h=p.querySelector('.head h2');
      return h&&norm(h.textContent).indexOf('danh muc')>=0;
    });
  }
  function ensureCatalogPanel(){
    var tools=byId('itOverviewActionCards');
    if(!tools)return null;
    var panel=byId('itCatalogStandalonePanel');
    if(!panel){
      tools.insertAdjacentHTML('afterend',
        '<div class="panel it-catalog-standalone-panel" id="itCatalogStandalonePanel" style="display:none">'+
          '<div class="head"><h2>Danh má»¥c thiáº¿t bá»‹ IT</h2><button class="btn small" id="itCloseCatalogPanel" type="button">ÄÃ³ng</button></div>'+
          '<div class="body it-catalog-standalone-body">'+
            '<div id="itCatalogEditorHost"></div>'+
            '<div id="itCatalogListHost"></div>'+
          '</div>'+
        '</div>');
      panel=byId('itCatalogStandalonePanel');
    }
    var editor=document.querySelector('#thietbi .it-catalog-editor');
    var editorHost=byId('itCatalogEditorHost');
    if(editor&&editorHost&&!editorHost.contains(editor)){
      editor.classList.add('it-catalog-editor-in-panel');
      editorHost.appendChild(editor);
    }
    var listPanel=findCatalogListPanel();
    var listHost=byId('itCatalogListHost');
    if(listPanel&&listHost&&!listHost.contains(listPanel)){
      listPanel.classList.add('it-catalog-list-in-panel');
      listHost.appendChild(listPanel);
    }
    var close=byId('itCloseCatalogPanel');
    if(close&&!close.__itCatalogBind){
      close.__itCatalogBind=true;
      close.onclick=function(){hideCatalogPanel()};
    }
    return panel;
  }
  function setCatalogActive(active){
    var card=byId('itCatalogActionCard');
    if(card)card.classList.toggle('active',!!active);
    [].slice.call(document.querySelectorAll('#thietbi #itOverviewActionCards [data-it-action]')).forEach(function(btn){
      if(active)btn.classList.remove('active');
    });
  }
  function showCatalogPanel(){
    var panel=ensureCatalogPanel();
    if(!panel)return;
    var page=byId('thietbi'),form=document.querySelector('#thietbi .it-form-panel');
    if(page)page.classList.remove('it-form-visible');
    if(form){form.classList.remove('it-form-open');form.style.display='none'}
    panel.style.display='block';
    setCatalogActive(true);
    if(panel.scrollIntoView)panel.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function hideCatalogPanel(){
    var panel=byId('itCatalogStandalonePanel');
    if(panel)panel.style.display='none';
    setCatalogActive(false);
  }
  function bindCatalogCard(){
    var card=byId('itCatalogActionCard');
    if(card&&!card.__itCatalogBind){
      card.__itCatalogBind=true;
      card.onclick=function(e){if(e)e.preventDefault();showCatalogPanel()};
    }
    var tools=byId('itOverviewActionCards');
    if(tools&&!tools.__itCatalogHideBind){
      tools.__itCatalogHideBind=true;
      tools.addEventListener('click',function(e){
        var btn=e.target.closest&&e.target.closest('[data-it-action]');
        if(btn)hideCatalogPanel();
      },true);
    }
  }
  function installStyle(){
    if(byId('it-catalog-quick-card-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-catalog-quick-card-style-20260718-light-core-16';
    st.textContent='#thietbi .it-action-card-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important}#thietbi .action-mint{background:linear-gradient(135deg,#d6fff1,#9fe8ca)!important}#thietbi .it-catalog-standalone-panel{margin:0 0 10px!important;border-color:#bfe4d4!important;box-shadow:0 10px 22px rgba(7,72,51,.08)!important}#thietbi .it-catalog-standalone-body{padding:0!important}#thietbi .it-form-panel>.it-catalog-editor{display:none!important}#thietbi #itCatalogEditorHost .it-catalog-editor{display:block!important;border-top:0!important;margin-top:0!important}#thietbi #itCatalogEditorHost .it-catalog-editor>.head{border-radius:0!important;background:#f8fffb!important}#thietbi #itCatalogListHost .it-catalog-list-in-panel{box-shadow:none!important;border-left:0!important;border-right:0!important;border-bottom:0!important;border-radius:0!important;margin:0!important}#thietbi #itCatalogListHost .it-catalog-list-in-panel .head{border-radius:0!important;background:#f8fffb!important}@media(max-width:1100px){#thietbi .it-action-card-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}}@media(max-width:900px){#thietbi .it-action-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}#thietbi .it-catalog-standalone-panel{margin-bottom:8px!important}}';
    document.head.appendChild(st);
  }
  function apply(){
    if(current!=='thietbi')return;
    installStyle();
    ensureCatalogCard();
    ensureCatalogPanel();
    bindCatalogCard();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogQuickCard20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,700);return out};
    window.render.__itCatalogQuickCard20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogQuickCard20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,120);return out};
    window.bindForms.__itCatalogQuickCard20260717=true;
  }
  setTimeout(apply,500);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itActionSubview20260717)return;window.__itActionSubview20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  var activeAction=null;
  function byId(id){return document.getElementById(id)}
  function page(){return byId('thietbi')}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function meta(action){
    var data={
      nhap:{title:'Nh\u1eadp thi\u1ebft b\u1ecb',hint:'T\u1ea1o thi\u1ebft b\u1ecb m\u1edbi v\u00e0o kho IT'},
      cap_phat:{title:'C\u1ea5p ph\u00e1t thi\u1ebft b\u1ecb',hint:'Giao thi\u1ebft b\u1ecb cho nh\u00e2n vi\u00ean'},
      chuyen_kho:{title:'Chuy\u1ec3n kho thi\u1ebft b\u1ecb',hint:'M\u00e1y chuy\u1ec3n \u0111i kho/n\u01a1i kh\u00e1c'},
      xuat:{title:'Xu\u1ea5t thi\u1ebft b\u1ecb',hint:'Xu\u1ea5t/thu h\u1ed3i kh\u1ecfi danh s\u00e1ch s\u1eed d\u1ee5ng'},
      danhmuc:{title:'Danh m\u1ee5c thi\u1ebft b\u1ecb IT',hint:'Th\u00eam, s\u1eeda nh\u00f3m thi\u1ebft b\u1ecb'}
    };
    return data[action]||data.nhap;
  }
  function installStyle(){
    if(byId('it-action-subview-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-action-subview-style-20260718-light-core-16';
    st.textContent=
      '#thietbi .it-lower-layout{display:none!important}'+
      '#thietbi:not(.it-action-subview) .it-form-panel,#thietbi:not(.it-action-subview) #itCatalogStandalonePanel{display:none!important}'+
      '#thietbi.it-action-subview #itOverviewActionCards,#thietbi.it-action-subview .it-main-panel{display:none!important}'+
      '#thietbi.it-action-subview .it-form-panel{display:block!important;width:100%!important;margin-top:0!important}'+
      '#thietbi.it-action-subview.it-catalog-subview .it-form-panel{display:none!important}'+
      '#thietbi.it-action-subview.it-catalog-subview #itCatalogStandalonePanel{display:block!important;width:100%!important;margin-top:0!important}'+
      '#thietbi .it-subview-back{display:none!important}'+
      '#thietbi.it-action-subview #itCloseForm,#thietbi.it-action-subview #itCloseCatalogPanel{display:none!important}'+
      '#thietbi.it-action-subview .it-form-panel .head,#thietbi.it-action-subview #itCatalogStandalonePanel>.head{display:flex!important;align-items:center!important;gap:8px!important}'+
      '#thietbi.it-action-subview .it-form-panel .head h2,#thietbi.it-action-subview #itCatalogStandalonePanel>.head h2{margin:0!important;font-size:17px!important}'+
      '@media(max-width:900px){#thietbi.it-action-subview{padding-bottom:96px!important}#thietbi.it-action-subview .it-form-panel .head,#thietbi.it-action-subview #itCatalogStandalonePanel>.head{display:grid!important;grid-template-columns:1fr!important;align-items:start!important}#thietbi.it-action-subview .it-form-panel .head h2,#thietbi.it-action-subview #itCatalogStandalonePanel>.head h2{font-size:16px!important}}';
    document.head.appendChild(st);
  }
  function setActiveCard(action){
    [].slice.call(document.querySelectorAll('#thietbi .it-action-card')).forEach(function(card){
      var isCatalog=card.id==='itCatalogActionCard';
      var key=isCatalog?'danhmuc':card.getAttribute('data-it-action');
      card.classList.toggle('active',key===action);
    });
  }
  function ensureBack(panel){
    if(!panel)return;
    var head=panel.querySelector(':scope > .head')||panel.querySelector('.head');
    if(!head)return;
    var btn=head.querySelector('.it-subview-back');
    if(btn)btn.remove();
  }
  function syncScreenBack(){
    var p=page();if(!p)return;
    var btn=p.querySelector('.screen-tools .back-btn');
    if(!btn)return;
    var inSub=p.classList.contains('it-action-subview');
    if(inSub){
      btn.textContent='\u2190 Tr\u1edf l\u1ea1i';
      btn.classList.add('it-subview-top-back');
      btn.setAttribute('data-it-subview-back','1');
    }else{
      btn.textContent='\u2190 Tr\u1edf l\u1ea1i';
      btn.classList.remove('it-subview-top-back');
      btn.removeAttribute('data-it-subview-back');
      btn.setAttribute('onclick','goBack()');
    }
    if(!btn.__itSubviewTopBack){
      btn.__itSubviewTopBack=true;
      btn.addEventListener('click',function(e){
        var root=page();
        if(root&&root.classList.contains('it-action-subview')){
          e.preventDefault();
          e.stopPropagation();
          showOverview(true);
        }
      },true);
    }
  }
  function setFormTitle(action){
    var m=meta(action);
    var title=document.querySelector('#thietbi .it-form-panel .head h2');
    if(title)title.textContent=m.title;
    var hint=byId('itFormHint');
    if(hint)hint.textContent=m.hint;
  }
  function showOverview(scroll){
    activeAction=null;
    window.__itActionSubviewAction='';
    var p=page();if(!p)return;
    p.classList.remove('it-action-subview','it-catalog-subview','it-form-visible');
    var form=document.querySelector('#thietbi .it-form-panel');
    if(form){form.classList.remove('it-form-open');form.style.display='none'}
    var catalog=byId('itCatalogStandalonePanel');
    if(catalog)catalog.style.display='none';
    setActiveCard('');
    syncScreenBack();
    if(scroll&&p.scrollIntoView)p.scrollIntoView({behavior:'smooth',block:'start'});
  }
  window.__qlhcItSubviewBack=function(){
    var p=page();
    if(isIt()&&p&&p.classList.contains('it-action-subview')){
      showOverview(true);
      return true;
    }
    return false;
  };
  function showCatalogSubview(){
    activeAction='danhmuc';
    window.__itActionSubviewAction='danhmuc';
    var p=page();if(!p)return;
    var catalog=byId('itCatalogStandalonePanel');
    if(!catalog){setTimeout(showCatalogSubview,160);return}
    var form=document.querySelector('#thietbi .it-form-panel');
    if(form){form.classList.remove('it-form-open');form.style.display='none'}
    p.classList.add('it-action-subview','it-catalog-subview');
    p.classList.remove('it-form-visible');
    catalog.style.display='block';
    ensureBack(catalog);
    syncScreenBack();
    setActiveCard('danhmuc');
    if(catalog.scrollIntoView)catalog.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function showAction(action){
    if(action==='danhmuc'){showCatalogSubview();return}
    activeAction=action||'nhap';
    window.__itActionSubviewAction=activeAction;
    var p=page();if(!p)return;
    var form=document.querySelector('#thietbi .it-form-panel');
    if(!form){setTimeout(function(){showAction(activeAction)},120);return}
    var catalog=byId('itCatalogStandalonePanel');
    if(catalog)catalog.style.display='none';
    p.classList.add('it-action-subview','it-form-visible');
    p.classList.remove('it-catalog-subview');
    form.classList.add('it-form-open');
    form.style.display='block';
    var sel=byId('itActionType');
    if(sel&&sel.value!==activeAction){
      sel.value=activeAction;
      try{sel.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){}
    }
    setFormTitle(activeAction);
    ensureBack(form);
    syncScreenBack();
    setActiveCard(activeAction);
    setTimeout(function(){setFormTitle(activeAction);ensureBack(form);syncScreenBack()},80);
    if(form.scrollIntoView)form.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function apply(){
    installStyle();
    if(!isIt()){activeAction=null;window.__itActionSubviewAction='';return}
    if(activeAction==='danhmuc'||window.__itActionSubviewAction==='danhmuc'){showCatalogSubview();return}
    if(activeAction||window.__itActionSubviewAction){showAction(activeAction||window.__itActionSubviewAction);return}
    showOverview(false);
    syncScreenBack();
  }
  document.addEventListener('click',function(e){
    if(!isIt())return;
    var target=e.target;
    var topBack=target.closest&&target.closest('#thietbi.it-action-subview .screen-tools .back-btn');
    if(topBack){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();showOverview(true);return}
    var back=target.closest&&target.closest('#thietbi .it-subview-back');
    if(back){e.preventDefault();e.stopPropagation();showOverview(true);return}
    var catalog=target.closest&&target.closest('#thietbi #itCatalogActionCard');
    if(catalog){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();showCatalogSubview();return}
    var btn=target.closest&&target.closest('#thietbi [data-it-action]');
    if(btn){
      e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();
      showAction(btn.getAttribute('data-it-action')||'nhap');
    }
  },true);
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itActionSubview20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,240);setTimeout(apply,720);return out};
    window.render.__itActionSubview20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itActionSubview20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,160);return out};
    window.bindForms.__itActionSubview20260717=true;
  }
  var oldGoBack=window.goBack;
  if(typeof oldGoBack==='function'&&!oldGoBack.__unifiedSubviewBack20260717){
    window.goBack=function(){
      if(window.__qlhcItSubviewBack&&window.__qlhcItSubviewBack())return;
      return oldGoBack.apply(this,arguments);
    };
    window.goBack.__unifiedSubviewBack20260717=true;
  }
  setTimeout(apply,800);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itHideActionType20260717)return;window.__itHideActionType20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function installStyle(){
    if(byId('it-hide-action-type-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-hide-action-type-style-20260718-light-core-16';
    st.textContent='#thietbi .it-action-type-hidden{display:none!important}';
    document.head.appendChild(st);
  }
  function apply(){
    installStyle();
    if(!isIt())return;
    var sel=byId('itActionType');
    if(!sel)return;
    var label=sel.closest&&sel.closest('label');
    if(label)label.classList.add('it-action-type-hidden');
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itHideActionType20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,650);return out};
    window.render.__itHideActionType20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itHideActionType20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,120);return out};
    window.bindForms.__itHideActionType20260717=true;
  }
  setTimeout(apply,700);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itDeviceFields20260717)return;window.__itDeviceFields20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'d').trim()}
  function num(v){var n=parseInt(v,10);return isFinite(n)&&n>0?n:1}
  function fmt(n){try{return new Intl.NumberFormat('vi-VN').format(Number(n)||0)}catch(e){return String(n||0)}}
  function tnorm(raw){
    raw=Array.isArray(raw)?raw:[];
    if(raw.length>=11)return raw;
    var out=raw.slice();
    while(out.length<11)out.push('');
    return out;
  }
  function codeOf(raw){var x=tnorm(raw);return String((x[1]&&x[1])||x[0]||'').trim()}
  function ensureState(){
    if(!state.itDeviceQtyByCode)state.itDeviceQtyByCode={};
    if(state.itQtyByCode){
      Object.keys(state.itQtyByCode).forEach(function(k){if(!state.itDeviceQtyByCode[k])state.itDeviceQtyByCode[k]=state.itQtyByCode[k]});
    }
    (state.thietBiIT||[]).forEach(function(raw){
      var code=codeOf(raw);
      if(code&&Array.isArray(raw)&&raw.length>10&&raw[10])state.itDeviceQtyByCode[code]=num(raw[10]);
    });
  }
  function qtyOf(code){
    ensureState();
    code=String(code||'').trim();
    if(!code)return 1;
    var direct=state.itDeviceQtyByCode&&state.itDeviceQtyByCode[code];
    if(direct)return num(direct);
    var row=(state.thietBiIT||[]).find(function(raw){return codeOf(raw)===code});
    return row&&row[10]?num(row[10]):1;
  }
  function setLabel(control,text){
    if(!control)return;
    var label=control.closest&&control.closest('label');
    if(!label)return;
    for(var i=0;i<label.childNodes.length;i++){
      var n=label.childNodes[i];
      if(n.nodeType===3&&String(n.nodeValue||'').trim()){n.nodeValue=text;return}
    }
    label.insertBefore(document.createTextNode(text),label.firstChild);
  }
  function setPlaceholder(id,text){
    var input=byId(id);if(input)input.placeholder=text;
  }
  function setQtyForCode(code,qty){
    ensureState();
    code=String(code||'').trim();
    if(!code)return;
    qty=num(qty);
    state.itDeviceQtyByCode[code]=qty;
    (state.thietBiIT||[]).forEach(function(raw){
      if(codeOf(raw)===code&&Array.isArray(raw)){
        while(raw.length<11)raw.push('');
        raw[10]=qty;
      }
    });
  }
  function currentDeviceCode(){var input=byId('maThietBi');return input?String(input.value||'').trim():''}
  function saveQtyFromForm(){
    var code=currentDeviceCode(),input=byId('soLuongThietBi');
    if(!code||!input)return;
    setQtyForCode(code,input.value);
    input.value=qtyOf(code);
    try{if(typeof save==='function')save()}catch(e){}
  }
  function fillQtyFromCode(force){
    var input=byId('soLuongThietBi');if(!input)return;
    if(document.activeElement===input&&!force)return;
    input.value=qtyOf(currentDeviceCode());
  }
  function ensureQtyInput(){
    var form=document.querySelector('#thietbi .it-device-form');if(!form)return;
    var input=byId('soLuongThietBi');
    if(!input){
      var label=document.createElement('label');
      label.className='it-device-qty-field';
      label.textContent='S\u1ed1 l\u01b0\u1ee3ng';
      input=document.createElement('input');
      input.id='soLuongThietBi';
      input.type='number';
      input.min='1';
      input.step='1';
      input.inputMode='numeric';
      input.placeholder='Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng';
      input.value='1';
      label.appendChild(input);
      var typeControl=byId('hangThietBiSearch')||byId('hangThietBi');
      var typeLabel=typeControl&&typeControl.closest&&typeControl.closest('label');
      if(typeLabel&&typeLabel.parentNode)typeLabel.parentNode.insertBefore(label,typeLabel.nextSibling);
      else form.appendChild(label);
    }
    if(!input.__itQtyBind){
      input.__itQtyBind=true;
      input.addEventListener('change',function(){this.value=num(this.value)});
      input.addEventListener('blur',function(){this.value=num(this.value)});
    }
  }
  function ensureStatusOptions(){
    var sel=byId('trangThaiThietBi');if(!sel)return;
    var keep=sel.value;
    var opts=['Trong kho','\u0110ang s\u1eed d\u1ee5ng','M\u1edbi','\u0110\u00e3 qua s\u1eed d\u1ee5ng','\u0110ang s\u1eeda ch\u1eefa','B\u1ea3o tr\u00ec/s\u1eeda ch\u1eefa','H\u1ecfng','Thanh l\u00fd','Th\u1ea5t l\u1ea1c'];
    var existing={};
    [].slice.call(sel.options).forEach(function(op){existing[norm(op.value)]=1});
    opts.forEach(function(v){if(!existing[norm(v)]){var op=document.createElement('option');op.value=v;op.textContent=v;sel.appendChild(op)}});
    if(keep)sel.value=keep;
  }
  function relabel(){
    var code=byId('maThietBi');
    if(code){setLabel(code,'M\u00e3 thi\u1ebft b\u1ecb');code.placeholder='Nh\u1eadp ho\u1eb7c qu\u00e9t m\u00e3 thi\u1ebft b\u1ecb tr\u00ean tem thi\u1ebft b\u1ecb'}
    var scan=byId('scanSerialBtn');if(scan)scan.textContent='Qu\u00e9t m\u00e3';
    setPlaceholder('hangThietBiSearch','G\u00f5 t\u00ean ho\u1eb7c m\u00e3 lo\u1ea1i thi\u1ebft b\u1ecb \u0111\u1ec3 t\u00ecm');
    var typeControl=byId('hangThietBiSearch')||byId('hangThietBi');
    if(typeControl)setLabel(typeControl,'Lo\u1ea1i thi\u1ebft b\u1ecb');
    var status=byId('trangThaiThietBi');
    if(status)setLabel(status,'Tr\u1ea1ng th\u00e1i thi\u1ebft b\u1ecb');
    var title=document.querySelector('#thietbi .it-catalog-editor h2,#thietbi #itCatalogStandalonePanel h2');
    if(title&&/nh\u00f3m|m\u1eb7t h\u00e0ng|thi\u1ebft b\u1ecb/i.test(title.textContent||''))title.textContent='Th\u00eam / s\u1eeda lo\u1ea1i thi\u1ebft b\u1ecb';
  }
  function bindCodeSync(){
    var code=byId('maThietBi');if(code&&!code.__itQtyCodeBind){code.__itQtyCodeBind=true;code.addEventListener('input',function(){fillQtyFromCode(false)});code.addEventListener('change',function(){fillQtyFromCode(true)})}
  }
  function updateAssetRows(){
    ensureState();
    [].slice.call(document.querySelectorAll('#thietbi #itDeviceRows tr[data-it-row]')).forEach(function(row){
      var link=row.querySelector('.it-serial-link');
      var code=link?String(link.textContent||'').trim():'';
      var qty=qtyOf(code),kind=row.getAttribute('data-kind')||'';
      var cells=row.querySelectorAll('td');
      if(cells.length>=8){
        cells[5].textContent=fmt(qty);
        cells[6].textContent=fmt(kind==='using'?qty:0);
        cells[7].textContent=fmt(kind==='using'?0:qty);
      }
    });
  }
  function wrapActions(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itDeviceFields20260717){
      var oldSave=window.saveThietBi;
      window.saveThietBi=function(){
        saveQtyFromForm();
        var out=oldSave.apply(this,arguments);
        setTimeout(function(){saveQtyFromForm();apply()},220);
        return out;
      };
      window.saveThietBi.__itDeviceFields20260717=true;
    }
    if(typeof window.editThietBi==='function'&&!window.editThietBi.__itDeviceFields20260717){
      var oldEdit=window.editThietBi;
      window.editThietBi=function(){
        var out=oldEdit.apply(this,arguments);
        setTimeout(function(){apply();fillQtyFromCode(true)},160);
        return out;
      };
      window.editThietBi.__itDeviceFields20260717=true;
    }
    if(typeof window.resetThietBi==='function'&&!window.resetThietBi.__itDeviceFields20260717){
      var oldReset=window.resetThietBi;
      window.resetThietBi=function(){
        var out=oldReset.apply(this,arguments);
        setTimeout(function(){apply();var q=byId('soLuongThietBi');if(q)q.value='1'},160);
        return out;
      };
      window.resetThietBi.__itDeviceFields20260717=true;
    }
  }
  function installStyle(){
    if(byId('it-device-fields-style-20260718-light-core-16'))return;
    var st=document.createElement('style');st.id='it-device-fields-style-20260718-light-core-16';
    st.textContent='#thietbi .it-device-qty-field input{width:100%!important}#thietbi .it-device-form label{min-width:0!important}#thietbi .it-device-form input,#thietbi .it-device-form select{font-size:14px!important}@media(max-width:900px){#thietbi .it-device-qty-field input{min-height:42px!important;background:#f7fffb!important}}';
    document.head.appendChild(st);
  }
  function apply(){
    if(!isIt())return;
    installStyle();
    ensureState();
    ensureQtyInput();
    relabel();
    ensureStatusOptions();
    bindCodeSync();
    wrapActions();
    fillQtyFromCode(false);
    updateAssetRows();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itDeviceFields20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,260);setTimeout(apply,820);return out};
    window.render.__itDeviceFields20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itDeviceFields20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,620);return out};
    window.bindForms.__itDeviceFields20260717=true;
  }
  document.addEventListener('change',function(e){if(e.target&&/^(maThietBi|soLuongThietBi|trangThaiThietBi|hangThietBi|hangThietBiSearch)$/.test(e.target.id||''))setTimeout(apply,80)});
  setTimeout(apply,700);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itQuickActionIcons20260717)return;window.__itQuickActionIcons20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function installStyle(){
    if(byId('it-quick-action-icons-style-20260717'))return;
    var st=document.createElement('style');st.id='it-quick-action-icons-style-20260717';
    st.textContent='#thietbi .it-action-icon.it-tool-icon{font-size:19px!important;font-weight:800!important;line-height:1!important;background:rgba(255,255,255,.58)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 8px 16px rgba(4,96,68,.10)!important;color:#075f48!important}#thietbi .it-action-card .it-tool-icon span{display:block;transform:translateY(1px)}#thietbi .action-mint .it-tool-icon{background:rgba(255,255,255,.68)!important}@media(max-width:900px){#thietbi .it-action-icon.it-tool-icon{width:34px!important;height:34px!important;font-size:18px!important}}';
    document.head.appendChild(st);
  }
  function setIcon(card,icon,label){
    if(!card)return;
    var box=card.querySelector('.it-action-icon');
    if(!box)return;
    box.classList.add('it-tool-icon');
    box.innerHTML='<span aria-hidden="true">'+icon+'</span>';
    card.setAttribute('aria-label',label);
    card.setAttribute('title',label);
  }
  function apply(){
    installStyle();
    if(!isIt())return;
    setIcon(document.querySelector('#thietbi [data-it-action="nhap"]'),'ðŸ“¥','Nháº­p thiáº¿t bá»‹');
    setIcon(document.querySelector('#thietbi [data-it-action="cap_phat"]'),'ðŸ‘¤','Cáº¥p phÃ¡t thiáº¿t bá»‹ cho nhÃ¢n viÃªn');
    setIcon(document.querySelector('#thietbi [data-it-action="chuyen_kho"]'),'â‡„','Chuyá»ƒn thiáº¿t bá»‹ sang kho/nÆ¡i khÃ¡c');
    setIcon(document.querySelector('#thietbi [data-it-action="xuat"]'),'ðŸ“¤','Xuáº¥t thiáº¿t bá»‹');
    setIcon(byId('itCatalogActionCard'),'ðŸ§°','Danh má»¥c loáº¡i thiáº¿t bá»‹ IT');
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itQuickActionIcons20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,260);setTimeout(apply,820);return out};
    window.render.__itQuickActionIcons20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itQuickActionIcons20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,620);return out};
    window.bindForms.__itQuickActionIcons20260717=true;
  }
  setTimeout(apply,700);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itCodeMustExist20260717)return;window.__itCodeMustExist20260717=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'d').trim()}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function hnorm(raw){
    try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}
    catch(e){return raw||['','','','','']}
  }
  function itCatalog(){
    var rows=(state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm);
    return rows.filter(function(h){return norm(h[2]).indexOf('thiet bi it')>=0&&String(h[0]||'').trim()});
  }
  function findCatalog(value){
    var q=norm(value),raw=String(value||'').trim();
    if(!q)return null;
    return itCatalog().find(function(h){
      var code=String(h[0]||'').trim(),name=String(h[1]||'').trim(),label=code+' - '+name;
      return norm(code)===q||norm(label)===q||norm(name)===q||raw===code;
    })||null;
  }
  function currentAction(){
    var a=byId('itActionType');
    return a?a.value:'nhap';
  }
  function isNewEntry(){
    var edit=byId('editThietBi');
    return !edit||!String(edit.value||'').trim();
  }
  function setTypeFromCode(){
    var codeInput=byId('maThietBi'),sel=byId('hangThietBi'),search=byId('hangThietBiSearch');
    if(!codeInput)return null;
    var h=findCatalog(codeInput.value);
    if(h){
      codeInput.dataset.catalogCode=h[0]||'';
      if(sel)sel.value=h[0]||'';
      if(search){search.value=(h[0]||'')+' - '+(h[1]||'');search.dataset.code=h[0]||''}
    }else{
      codeInput.dataset.catalogCode='';
    }
    updateHint(h);
    return h;
  }
  function updateHint(found){
    var codeInput=byId('maThietBi');if(!codeInput)return;
    var hint=byId('itCodeCatalogHint');
    if(!hint){
      hint=document.createElement('div');
      hint.id='itCodeCatalogHint';
      hint.className='hint it-code-catalog-hint';
      var wrap=codeInput.closest('.serial-scan-wrap')||codeInput.closest('label');
      if(wrap&&wrap.parentNode)wrap.parentNode.insertBefore(hint,wrap.nextSibling);
    }
    var text=String(codeInput.value||'').trim();
    if(!text){hint.textContent='M\u00e3 thi\u1ebft b\u1ecb ph\u1ea3i c\u00f3 s\u1eb5n trong Danh m\u1ee5c thi\u1ebft b\u1ecb IT.';hint.classList.remove('bad');return}
    if(found){hint.textContent='M\u00e3 h\u1ee3p l\u1ec7: '+(found[0]||'')+' - '+(found[1]||'');hint.classList.remove('bad');return}
    hint.textContent='M\u00e3 n\u00e0y ch\u01b0a c\u00f3 trong Danh m\u1ee5c thi\u1ebft b\u1ecb IT. H\u00e3y t\u1ea1o m\u00e3 \u1edf Danh m\u1ee5c thi\u1ebft b\u1ecb IT tr\u01b0\u1edbc.';
    hint.classList.add('bad');
  }
  function ensureCodeDatalist(){
    var input=byId('maThietBi');if(!input)return;
    input.setAttribute('list','itCodeCatalogList');
    input.placeholder='G\u00f5/qu\u00e9t m\u00e3 \u0111\u00e3 t\u1ea1o trong Danh m\u1ee5c thi\u1ebft b\u1ecb IT';
    var dl=byId('itCodeCatalogList');
    if(!dl){
      dl=document.createElement('datalist');
      dl.id='itCodeCatalogList';
      document.body.appendChild(dl);
    }
    dl.innerHTML=itCatalog().map(function(h){return '<option value="'+esc(h[0])+'" label="'+esc(h[1]||'')+'"></option>'}).join('');
    if(!input.__itCodeCatalogBind){
      input.__itCodeCatalogBind=true;
      input.addEventListener('input',function(){setTypeFromCode()});
      input.addEventListener('change',function(){setTypeFromCode()});
      input.addEventListener('blur',function(){setTypeFromCode()});
    }
    setTypeFromCode();
  }
  function validateBeforeSave(){
    if(!isIt())return true;
    if(currentAction()!=='nhap'||!isNewEntry())return true;
    var input=byId('maThietBi');if(!input)return true;
    var h=setTypeFromCode();
    if(!h){
      alert('M\u00e3 thi\u1ebft b\u1ecb n\u00e0y ch\u01b0a c\u00f3 trong Danh m\u1ee5c thi\u1ebft b\u1ecb IT. B\u1ea1n h\u00e3y b\u1ea5m \u00f4 "Danh m\u1ee5c thi\u1ebft b\u1ecb IT" \u0111\u1ec3 t\u1ea1o m\u00e3 tr\u01b0\u1edbc, r\u1ed3i quay l\u1ea1i nh\u1eadp thi\u1ebft b\u1ecb.');
      input.focus();
      return false;
    }
    input.value=h[0]||input.value;
    return true;
  }
  function installStyle(){
    if(byId('it-code-must-exist-style-20260717'))return;
    var st=document.createElement('style');st.id='it-code-must-exist-style-20260717';
    st.textContent='#thietbi .it-code-catalog-hint{grid-column:1/-1;margin:-3px 0 2px;color:#4f6b61;font-size:12px!important;line-height:1.35}.it-code-catalog-hint.bad{color:#b03a2e!important;font-weight:650}#thietbi #maThietBi{background:#fbfffd!important}@media(max-width:900px){#thietbi .it-code-catalog-hint{font-size:11.8px!important;margin-top:-2px}}';
    document.head.appendChild(st);
  }
  function wrapSave(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itCodeMustExist20260717){
      var oldSave=window.saveThietBi;
      window.saveThietBi=function(){
        if(!validateBeforeSave())return;
        return oldSave.apply(this,arguments);
      };
      window.saveThietBi.__itCodeMustExist20260717=true;
    }
    var btn=byId('luuThietBi');
    if(btn&&btn.onclick!==window.saveThietBi)btn.onclick=window.saveThietBi;
  }
  function apply(){
    if(!isIt())return;
    installStyle();
    ensureCodeDatalist();
    wrapSave();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCodeMustExist20260717){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,220);setTimeout(apply,760);return out};
    window.render.__itCodeMustExist20260717=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCodeMustExist20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,160);setTimeout(apply,520);return out};
    window.bindForms.__itCodeMustExist20260717=true;
  }
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('#itCatalogActionCard'))setTimeout(apply,240);
  });
  setTimeout(apply,700);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

;(function(){
  if(window.__itCatalogDuplicateHeaderReallyLast20260718)return;window.__itCatalogDuplicateHeaderReallyLast20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function install(){
    var old=document.getElementById('it-catalog-duplicate-header-really-last-style-20260718');
    if(old)old.remove();
    var st=document.createElement('style');
    st.id='it-catalog-duplicate-header-really-last-style-20260718';
    st.textContent='section#thietbi.it-catalog-subview div#itCatalogStandalonePanel>.head,section#thietbi div#itCatalogStandalonePanel.it-catalog-standalone-panel>.head{display:none!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:0!important;overflow:hidden!important;visibility:hidden!important}section#thietbi div#itCatalogStandalonePanel .it-catalog-standalone-body{border-top:0!important}';
    document.head.appendChild(st);
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogDuplicateHeaderReallyLast20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,30);setTimeout(install,240);setTimeout(install,900);return out};
    window.render.__itCatalogDuplicateHeaderReallyLast20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogDuplicateHeaderReallyLast20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,30);setTimeout(install,240);return out};
    window.bindForms.__itCatalogDuplicateHeaderReallyLast20260718=true;
  }
  document.addEventListener('click',function(){setTimeout(install,50);setTimeout(install,360)},true);
  setTimeout(install,900);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itCatalogThreeFieldFinal20260718)return;window.__itCatalogThreeFieldFinal20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'d').trim()}
  function isUnitLike(v){return /^(cai|hop|bo|thung|ram|chiec|goi|kg|lit|chai|cay)$/.test(norm(v))}
  function displayGroup(v){v=String(v||'').trim();return (!v||isUnitLike(v))?'Thiáº¿t bá»‹ IT':v}
  function setLabel(control,text){
    if(!control)return;
    var label=control.closest&&control.closest('label');
    if(!label)return;
    for(var i=0;i<label.childNodes.length;i++){
      var n=label.childNodes[i];
      if(n.nodeType===3&&String(n.nodeValue||'').trim()){n.nodeValue=text;return}
    }
    label.insertBefore(document.createTextNode(text),label.firstChild);
  }
  function itRows(){
    try{
      var rows=Array.isArray(state.hang)?state.hang:[];
      return rows.filter(function(r){return norm((r||[])[2]).indexOf('thiet bi it')>=0});
    }catch(e){return []}
  }
  function groupList(){
    var seed=['Thiáº¿t bá»‹ IT','MÃ¡y tÃ­nh','Laptop','MÃ n hÃ¬nh','MÃ¡y in','Camera','Thiáº¿t bá»‹ máº¡ng','KhÃ¡c'];
    itRows().forEach(function(r){var g=displayGroup((r||[])[3]);if(seed.indexOf(g)<0)seed.push(g)});
    return seed;
  }
  function ensureGroupInput(){
    var old=byId('itHangDvt');
    if(!old)return null;
    var value=displayGroup(old.value);
    if(old.tagName&&old.tagName.toLowerCase()==='select'){
      var input=document.createElement('input');
      input.id='itHangDvt';
      input.value=value==='Thiáº¿t bá»‹ IT'?'':value;
      input.setAttribute('list','itHangGroupList');
      input.placeholder='VD: Laptop, MÃ n hÃ¬nh, Camera...';
      old.parentNode.replaceChild(input,old);
      old=input;
    }else{
      old.setAttribute('list','itHangGroupList');
      old.placeholder='VD: Laptop, MÃ n hÃ¬nh, Camera...';
      if(isUnitLike(old.value))old.value='';
    }
    var dl=byId('itHangGroupList');
    if(!dl){
      dl=document.createElement('datalist');
      dl.id='itHangGroupList';
      old.insertAdjacentElement('afterend',dl);
    }
    dl.innerHTML=groupList().map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
    return old;
  }
  function updateForm(){
    if(!isIt())return;
    var title=document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-editor h2,#thietbi .it-catalog-editor h2');
    if(title)title.textContent='ThÃªm / sá»­a thiáº¿t bá»‹';
    var code=byId('itHangCode');
    if(code){setLabel(code,'MÃ£ thiáº¿t bá»‹');code.placeholder='GÃµ hoáº·c quÃ©t mÃ£ thiáº¿t bá»‹'}
    var name=byId('itHangName');
    if(name){setLabel(name,'TÃªn thiáº¿t bá»‹');name.placeholder='VD: MÃ n hÃ¬nh Dell E2223HN'}
    var group=ensureGroupInput();
    if(group)setLabel(group,'NhÃ³m thiáº¿t bá»‹');
    var desc=byId('itHangDesc');
    if(desc){
      var dl=desc.closest&&desc.closest('label');
      if(dl)dl.classList.add('it-catalog-desc-hidden-final');
    }
    var save=byId('saveItHang');
    if(save)save.textContent='LÆ°u thiáº¿t bá»‹';
    var listTitle=document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-wrap')&&document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-wrap').closest('.panel')&&document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-wrap').closest('.panel').querySelector('.head h2');
    if(listTitle)listTitle.textContent='Danh má»¥c thiáº¿t bá»‹ IT';
  }
  function updateTables(){
    if(!isIt())return;
    [].slice.call(document.querySelectorAll('#thietbi .it-catalog-wrap table')).forEach(function(table){
      table.classList.add('it-catalog-three-field-table');
      var heads=table.querySelectorAll('thead th');
      if(heads[0])heads[0].textContent='MÃ£ thiáº¿t bá»‹';
      if(heads[1])heads[1].textContent='TÃªn thiáº¿t bá»‹';
      if(heads[2])heads[2].textContent='NhÃ³m thiáº¿t bá»‹';
      if(heads[3])heads[3].classList.add('it-hide-col-desc-final');
      if(heads[4])heads[4].textContent='Thao tÃ¡c';
      [].slice.call(table.querySelectorAll('tbody tr')).forEach(function(row){
        var cells=row.children;
        if(cells[2])cells[2].textContent=displayGroup(cells[2].textContent);
        if(cells[3])cells[3].classList.add('it-hide-col-desc-final');
      });
    });
  }
  function installStyle(){
    if(byId('it-catalog-three-field-final-style-20260718'))return;
    var st=document.createElement('style');
    st.id='it-catalog-three-field-final-style-20260718';
    st.textContent='#thietbi .it-catalog-desc-hidden-final,#thietbi .it-hide-col-desc-final{display:none!important}#thietbi .it-catalog-three-field-table th,#thietbi .it-catalog-three-field-table td{padding:8px 10px!important}#thietbi .it-catalog-three-field-table th:nth-child(1){width:150px!important}#thietbi .it-catalog-three-field-table th:nth-child(3){width:180px!important}#thietbi #itHangDvt{background:#fbfffd!important}@media(max-width:900px){#thietbi .it-catalog-three-field-table th:nth-child(1),#thietbi .it-catalog-three-field-table th:nth-child(3){width:auto!important}}';
    document.head.appendChild(st);
  }
  function wrapSave(){
    if(typeof window.saveItHang==='function'&&!window.saveItHang.__itCatalogThreeFieldFinal20260718){
      var oldSave=window.saveItHang;
      window.saveItHang=function(){
        var group=byId('itHangDvt');
        if(group&&!String(group.value||'').trim())group.value='Thiáº¿t bá»‹ IT';
        var desc=byId('itHangDesc'),edit=byId('editItHangIndex');
        if(desc&&edit&&String(edit.value||'')!==''&&!String(desc.value||'').trim()){
          var idx=parseInt(edit.value,10),row=state&&Array.isArray(state.hang)?state.hang[idx]:null;
          if(row&&row[4])desc.value=row[4];
        }
        return oldSave.apply(this,arguments);
      };
      window.saveItHang.__itCatalogThreeFieldFinal20260718=true;
    }
    if(typeof window.resetItHang==='function'&&!window.resetItHang.__itCatalogThreeFieldFinal20260718){
      var oldReset=window.resetItHang;
      window.resetItHang=function(){
        var out=oldReset.apply(this,arguments);
        setTimeout(function(){var g=byId('itHangDvt');if(g&&isUnitLike(g.value))g.value='';apply()},120);
        return out;
      };
      window.resetItHang.__itCatalogThreeFieldFinal20260718=true;
    }
    var btn=byId('saveItHang');
    if(btn&&typeof window.saveItHang==='function')btn.onclick=window.saveItHang;
  }
  function apply(){
    installStyle();
    if(!isIt())return;
    updateForm();
    updateTables();
    wrapSave();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogThreeFieldFinal20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,180);setTimeout(apply,650);setTimeout(apply,1200);return out};
    window.render.__itCatalogThreeFieldFinal20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogThreeFieldFinal20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,120);setTimeout(apply,500);return out};
    window.bindForms.__itCatalogThreeFieldFinal20260718=true;
  }
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t&&t.closest&&t.closest('#thietbi'))setTimeout(apply,120);
  },true);
  document.addEventListener('input',function(e){
    if(e.target&&e.target.id==='itHangDvt')setTimeout(updateTables,80);
  });
  setTimeout(apply,800);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__itCatalogCodeLayoutFix20260718)return;window.__itCatalogCodeLayoutFix20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function normalizeCodeLine(){
    if(!isIt())return;
    var input=byId('itHangCode');
    if(!input)return;
    var label=input.closest&&input.closest('label');
    if(!label)return;
    label.classList.add('it-code-full-final');
    var line=input.closest&&input.closest('.it-hang-code-line,.it-catalog-code-line,.it-code-line-final');
    if(!line){
      line=document.createElement('div');
      line.className='it-code-line-final';
      input.parentNode.insertBefore(line,input);
      line.appendChild(input);
    }
    line.classList.add('it-code-line-final');
    var scan=byId('itHangCodeScanBtn');
    if(scan&&scan.parentNode!==line)line.appendChild(scan);
    var pick=byId('itHangCodeFileBtn');
    if(pick&&pick.parentNode!==line)line.appendChild(pick);
    var file=byId('itHangCodePhotoInput');
    if(file&&file.parentNode!==label)label.appendChild(file);
    input.removeAttribute('readonly');
    input.disabled=false;
    input.readOnly=false;
    input.placeholder='GÃµ hoáº·c quÃ©t mÃ£ thiáº¿t bá»‹';
  }
  function installStyle(){
    var old=byId('it-catalog-code-layout-fix-style-20260718');
    if(old)old.remove();
    var st=document.createElement('style');
    st.id='it-catalog-code-layout-fix-style-20260718';
    st.textContent=
      '#thietbi label.it-code-full-final{grid-column:1/-1!important;display:block!important;width:100%!important;min-width:0!important;margin:0!important}'+
      '#thietbi label.it-code-full-final .it-code-line-final,#thietbi label.it-code-full-final .it-hang-code-line,#thietbi label.it-code-full-final .it-catalog-code-line{display:grid!important;grid-template-columns:minmax(260px,1fr) 92px 100px!important;gap:8px!important;align-items:center!important;width:100%!important;max-width:100%!important;margin-top:5px!important}'+
      '#thietbi label.it-code-full-final #itHangCode{display:block!important;width:100%!important;min-width:240px!important;max-width:100%!important;height:38px!important;min-height:38px!important;box-sizing:border-box!important;background:#fbfffd!important}'+
      '#thietbi label.it-code-full-final #itHangCodeScanBtn,#thietbi label.it-code-full-final #itHangCodeFileBtn{height:38px!important;min-height:38px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap!important;padding:0 12px!important;border-radius:7px!important;font-weight:750!important}'+
      '#thietbi label.it-code-full-final #itHangCodePhotoInput{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important;overflow:hidden!important}'+
      '@media(max-width:900px){#thietbi label.it-code-full-final .it-code-line-final,#thietbi label.it-code-full-final .it-hang-code-line,#thietbi label.it-code-full-final .it-catalog-code-line{grid-template-columns:minmax(0,1fr) 72px 78px!important;gap:5px!important}#thietbi label.it-code-full-final #itHangCode{min-width:0!important;height:40px!important;min-height:40px!important;font-size:13px!important}#thietbi label.it-code-full-final #itHangCodeScanBtn,#thietbi label.it-code-full-final #itHangCodeFileBtn{height:40px!important;min-height:40px!important;font-size:11.5px!important;padding:0 6px!important}}';
    document.head.appendChild(st);
  }
  function apply(){
    installStyle();
    normalizeCodeLine();
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__itCatalogCodeLayoutFix20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,160);setTimeout(apply,520);setTimeout(apply,1000);return out};
    window.render.__itCatalogCodeLayoutFix20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogCodeLayoutFix20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(apply,100);setTimeout(apply,420);return out};
    window.bindForms.__itCatalogCodeLayoutFix20260718=true;
  }
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('#thietbi'))setTimeout(apply,120);
  },true);
  setTimeout(apply,700);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__syncPhotoEndReinstall20260718)return;window.__syncPhotoEndReinstall20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function reinstall(){
    try{if(typeof window.__qlhcSyncPhotoInstall==='function')window.__qlhcSyncPhotoInstall()}catch(e){}
  }
  function push(){try{if(typeof window.__qlhcSyncPhotoPush==='function')window.__qlhcSyncPhotoPush(false)}catch(e){}}
  function pull(){try{if(typeof window.__qlhcSyncPhotoPull==='function')window.__qlhcSyncPhotoPull(false)}catch(e){}}
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__syncPhotoEndReinstall20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(reinstall,80);setTimeout(reinstall,520);return out};
    window.render.__syncPhotoEndReinstall20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__syncPhotoEndReinstall20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(reinstall,80);return out};
    window.bindForms.__syncPhotoEndReinstall20260718=true;
  }
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t&&t.closest&&t.closest('#luuNhap,#dayOnline,#taiOnline,#onlinePushBtn,#onlinePullBtn,#nhap,#thietlap'))setTimeout(reinstall,60);
  },true);
  window.addEventListener('online',function(){push();setTimeout(pull,1200)});
  window.addEventListener('focus',function(){try{if(localStorage.getItem('qlhc-pending-online-sync')==='1')push();else pull()}catch(e){}});
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'){try{if(localStorage.getItem('qlhc-pending-online-sync')==='1')push();else pull()}catch(e){}}});
  setTimeout(reinstall,120);
  setTimeout(reinstall,1000);
  setTimeout(function(){try{if(localStorage.getItem('qlhc-pending-online-sync')==='1')push();else pull()}catch(e){}},1800);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();

;(function(){
  if(window.__nhapInlineNewItemConfirmFinal20260718)return;window.__nhapInlineNewItemConfirmFinal20260718=true;
  var VERSION='20260718-light-core-16';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function norm(v){
    return String(v==null?'':v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ä‘/g,'d').replace(/Ä/g,'d').replace(/\s+/g,' ').trim();
  }
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function items(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function currentGroup(){var g=byId('nhomNhap');return g?String(g.value||'').trim():''}
  function findItem(v){
    var q=norm(v);
    if(!q)return null;
    var group=currentGroup();
    return items().find(function(h){
      return (!group||String(h[2]||'')===group)&&(norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q);
    })||items().find(function(h){
      return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q;
    })||null;
  }
  function cleanName(v){
    var s=String(v||'').trim();
    var m=s.match(/^([A-Za-z]{1,8}\d{1,8})\s*[-â€“]\s*(.+)$/);
    return (m?m[2]:s).trim();
  }
  function defaultGroup(){return currentGroup()||(state.nhomHangList&&state.nhomHangList[0])||'ChÆ°a phÃ¢n nhÃ³m'}
  function defaultDvt(){return (state.dvtList&&state.dvtList[0])||'CÃ¡i'}
  function nextCode(group){
    if(typeof nextItemCode==='function'){try{return nextItemCode(group||'')}catch(e){}}
    var max=0;
    (state.hang||[]).forEach(function(raw){var h=hnorm(raw),m=String(h[0]||'').match(/^HH(\d+)$/);if(m){var n=parseInt(m[1],10);if(!isNaN(n)&&n>max)max=n}});
    return 'HH'+String(max+1).padStart(3,'0');
  }
  function descValue(){
    return (byId('nhapVariantDesc')&&byId('nhapVariantDesc').value.trim())||
      (byId('nhapThuocTinhMoi')&&byId('nhapThuocTinhMoi').value.trim())||'';
  }
  function hideOldPanel(){
    var btn=byId('batHangMoi'),box=byId('hangMoiBox'),input=byId('hangNhap');
    if(btn){btn.style.display='none';btn.setAttribute('aria-hidden','true')}
    if(box){box.style.display='none';box.setAttribute('aria-hidden','true')}
    if(input){input.disabled=false;input.removeAttribute('disabled');input.placeholder='GÃµ tÃªn hÃ ng, mÃ£ hÃ ng, nhÃ³m hoáº·c mÃ´ táº£'}
  }
  function installStyle(){
    if(byId('nhap-inline-new-item-final-style-20260718'))return;
    var st=document.createElement('style');
    st.id='nhap-inline-new-item-final-style-20260718';
    st.textContent='#nhap #batHangMoi,#nhap #hangMoiBox,#nhap .nhap-new-item-panel{display:none!important;visibility:hidden!important;height:0!important;min-height:0!important;max-height:0!important;margin:0!important;padding:0!important;border:0!important;overflow:hidden!important}#nhap #luuNhap{grid-column:1/-1!important}';
    document.head.appendChild(st);
  }
  function ensureItemBeforeSave(){
    var input=byId('hangNhap');
    if(!input)return '';
    var raw=String(input.value||'').trim();
    if(!raw)return '';
    var found=findItem(raw);
    if(found){
      input.dataset.code=found[0];
      input.value=found[1]||found[0];
      return found[0];
    }
    var name=cleanName(raw);
    if(!name)return '';
    if(!window.confirm('HÃ ng hÃ³a nÃ y chÆ°a cÃ³ trong danh má»¥c. Báº¡n cÃ³ muá»‘n lÆ°u hÃ ng hÃ³a má»›i khÃ´ng?'))return false;
    var group=defaultGroup(),code=nextCode(group),dvt=defaultDvt(),desc=descValue();
    if(!state.hang)state.hang=[];
    state.hang.push([code,name,group,dvt,desc]);
    input.dataset.code=code;
    input.value=name;
    try{if(typeof touchState==='function')touchState()}catch(e){}
    return code;
  }
  function install(){
    installStyle();
    hideOldPanel();
    var old=window.saveNhap;
    if(typeof old==='function'&&!old.__nhapInlineNewItemConfirmFinal20260718){
      window.saveNhap=function(){
        hideOldPanel();
        var code=ensureItemBeforeSave();
        if(code===false)return;
        if(!code)return alert('GÃµ tÃªn hÃ ng hÃ³a cáº§n nháº­p');
        var input=byId('hangNhap');
        if(input)input.dataset.code=code;
        var out=old.apply(this,arguments);
        try{if(typeof window.__qlhcSyncPhotoPush==='function')window.__qlhcSyncPhotoPush(false)}catch(e){}
        return out;
      };
      window.saveNhap.__nhapInlineNewItemConfirmFinal20260718=true;
    }
    var btn=byId('luuNhap');
    if(btn&&typeof window.saveNhap==='function')btn.onclick=window.saveNhap;
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__nhapInlineNewItemConfirmFinal20260718){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,80);setTimeout(install,420);return out};
    window.render.__nhapInlineNewItemConfirmFinal20260718=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__nhapInlineNewItemConfirmFinal20260718){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,80);return out};
    window.bindForms.__nhapInlineNewItemConfirmFinal20260718=true;
  }
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('#nhap,#luuNhap,#hangNhap'))setTimeout(install,80);
  },true);
  setTimeout(install,160);
  setTimeout(install,900);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();



