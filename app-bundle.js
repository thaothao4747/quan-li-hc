/* QUAN LI HC - app bundle 20260721-mobile-login-sync-1 */

if(new URLSearchParams(location.search).get('resetData')==='1'){localStorage.removeItem('qlkho-state');sessionStorage.removeItem('qlkho-login')}
var today=new Date().toISOString().slice(0,10);
var defaults={kho:[["KHO-TONG","Kho tÃ¡Â»â€¢ng","NguyÃ¡Â»â€¦n Minh"],["KHO-HC","Kho HÃƒÂ nh chÃƒÂ­nh","TrÃ¡ÂºÂ§n Lan"],["KHO-CN1","Kho Chi nhÃƒÂ¡nh 1","LÃƒÂª HÃƒÂ "]],nhomHangList:["VÃ„Æ’n phÃƒÂ²ng phÃ¡ÂºÂ©m","CÃƒÂ´ng cÃ¡Â»Â¥ dÃ¡Â»Â¥ng cÃ¡Â»Â¥","ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT"],dvtList:["CÃƒÂ¡i","HÃ¡Â»â„¢p","BÃ¡Â»â„¢","Ram"],loaiNhapList:["NhÃ¡ÂºÂ­p mua mÃ¡Â»â€ºi","NhÃ¡ÂºÂ­p quÃƒÂ  tÃ¡ÂºÂ·ng","NhÃ¡ÂºÂ­p trÃ¡ÂºÂ£ lÃ¡ÂºÂ¡i"],nccList:["CÃƒÂ´ng ty VÃ„Æ’n phÃƒÂ²ng phÃ¡ÂºÂ©m An PhÃƒÂ¡t","CÃ¡Â»Â­a hÃƒÂ ng ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ Minh Long","NhÃƒÂ  cung cÃ¡ÂºÂ¥p khÃƒÂ¡c"],loaiXuatList:["XuÃ¡ÂºÂ¥t cÃ¡ÂºÂ¥p phÃƒÂ¡t","XuÃ¡ÂºÂ¥t tÃ¡ÂºÂ·ng","XuÃ¡ÂºÂ¥t Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢"],hang:[["VP001","GiÃ¡ÂºÂ¥y A4 Double A","VÃ„Æ’n phÃƒÂ²ng phÃ¡ÂºÂ©m","Ram","KhÃ¡Â»â€¢: A4; Ã„ÂÃ¡Â»â€¹nh lÃ†Â°Ã¡Â»Â£ng: 70gsm"],["CC001","MÃƒÂ¡y khoan pin","CÃƒÂ´ng cÃ¡Â»Â¥ dÃ¡Â»Â¥ng cÃ¡Â»Â¥","CÃƒÂ¡i","Serial; BÃ¡ÂºÂ£o hÃƒÂ nh"],["TB001","Laptop Dell 5420","ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT","CÃƒÂ¡i","RAM: 16GB; SSD: 512GB"],["VP002","BÃƒÂºt bi xanh","VÃ„Æ’n phÃƒÂ²ng phÃ¡ÂºÂ©m","HÃ¡Â»â„¢p","MÃƒÂ u: xanh; 20 cÃƒÂ¢y/hÃ¡Â»â„¢p"]],thietBiIT:[["IT-001","SN-D5420-001","TB001","NhÃ¡ÂºÂ­p mua mÃ¡Â»â€ºi","2026-06-30","NguyÃ¡Â»â€¦n VÃ„Æ’n A","Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng","Laptop cÃ¡ÂºÂ¥p cho phÃƒÂ²ng HÃƒÂ nh chÃƒÂ­nh"],["IT-002","SN-D5420-002","TB001","NhÃ¡ÂºÂ­p quÃƒÂ  tÃ¡ÂºÂ·ng","2026-06-30","Kho IT","Trong kho","MÃƒÂ¡y dÃ¡Â»Â± phÃƒÂ²ng"]],ton:{"KHO-TONG|VP001":120,"KHO-HC|VP001":22,"KHO-CN1|VP001":35,"KHO-TONG|CC001":4,"KHO-CN1|CC001":1,"KHO-TONG|TB001":3,"KHO-HC|TB001":1,"KHO-TONG|VP002":18,"KHO-HC|VP002":5},bd:[["2026-06-30","PN-0001","KHO-TONG","VP001","NhÃ¡ÂºÂ­p mua mÃ¡Â»â€ºi",100,0],["2026-06-30","PX-0001","KHO-HC","VP002","XuÃ¡ÂºÂ¥t cÃ¡ÂºÂ¥p phÃƒÂ¡t",0,3]],chuyen:[]};
var state=loadState();
var nav=[['tongquan','TÃ¡Â»â€¢ng quan'],['ton','TÃ¡Â»â€œn kho'],['nhap','NhÃ¡ÂºÂ­p kho'],['xuat','XuÃ¡ÂºÂ¥t kho'],['thietbi','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT'],['chuyen','Ã„ÂiÃ¡Â»Âu chuyÃ¡Â»Æ’n'],['baocao','BÃƒÂ¡o cÃƒÂ¡o'],['hanghoa','HÃƒÂ ng hÃƒÂ³a'],['thietlap','ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p']];
var mobile=[['tongquan','TÃ¡Â»â€¢ng quan'],['ton','TÃ¡Â»â€œn'],['nhap','NhÃ¡ÂºÂ­p'],['xuat','XuÃ¡ÂºÂ¥t'],['thietbi','IT'],['chuyen','ChuyÃ¡Â»Æ’n'],['baocao','BÃƒÂ¡o cÃƒÂ¡o'],['thietlap','ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p']];
var current='tongquan';
var screenHistory=[];
var SUPABASE_CONFIG={url:'https://jcavzbpjbvdbuskrtayf.supabase.co',anonKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjYXZ6YnBqYnZkYnVza3J0YXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODk4MDEsImV4cCI6MjA5ODU2NTgwMX0.-RQhPrHEF3WRlOPqzmxmumwzqdFNQ7dHHKTCz3E29PQ',stateId:'qlhc-main'};
var authDefaults={user:'admin',pass:'admin123'};
var auth=loadAuth();
var isLoggedIn=sessionStorage.getItem('qlkho-login')==='1';
function clone(x){return JSON.parse(JSON.stringify(x))}function mergeByKey(current,defs,keyIndex){current=Array.isArray(current)?current:[];defs.forEach(function(d){if(!current.some(function(x){return x&&x[keyIndex]===d[keyIndex]}))current.push(d)});return current}function cleanTextList(list,fallback){var src=Array.isArray(list)?list:clone(fallback||[]),out=[];src.forEach(function(v){v=String(v||'').trim();if(v&&!out.some(function(x){return x.toLowerCase()===v.toLowerCase()}))out.push(v)});return out}function cleanRows(list,fallback){return Array.isArray(list)?list:clone(fallback||[])}function hangUnit(h){return String(Array.isArray(h)?h[3]||'':h&&h.dvt||'').trim()}function cleanUserCatalogs(s){s=s||{};s.kho=cleanRows(s.kho,defaults.kho);s.hang=cleanRows(s.hang,defaults.hang);s.nhomHangList=cleanTextList(s.nhomHangList,defaults.nhomHangList);s.dvtList=cleanTextList(s.dvtList,defaults.dvtList);s.loaiNhapList=cleanTextList(s.loaiNhapList,defaults.loaiNhapList);s.loaiXuatList=cleanTextList(s.loaiXuatList,defaults.loaiXuatList);s.nccList=cleanTextList(s.nccList,defaults.nccList);s.ton=Object.assign({},s.ton||{});s.bd=Array.isArray(s.bd)?s.bd:clone(defaults.bd);s.chuyen=Array.isArray(s.chuyen)?s.chuyen:[];s.thietBiIT=cleanRows(s.thietBiIT,defaults.thietBiIT);s.receiverDeptList=Array.isArray(s.receiverDeptList)?s.receiverDeptList:[];var seen={};s.receiverDeptList=s.receiverDeptList.filter(function(x){var name=String(x&&x.name||'').trim(),key=name.toLowerCase();if(!name||key==='trong kho'||key==='kho it'||key==='chÃ†Â°a gÃƒÂ¡n'||key==='chua gan'||seen[key])return false;seen[key]=1;x.name=name;x.dept=String(x.dept||'').trim();x.note=String(x.note||'').trim();return true}).sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});s.receiverList=s.receiverDeptList.map(function(x){return x.name});var usedUnit={};(s.hang||[]).forEach(function(h){var u=hangUnit(h).toLowerCase();if(u)usedUnit[u]=1});s.dvtList=s.dvtList.filter(function(v){var u=String(v||'').trim().toLowerCase();return u&&!(u==='ram'&&!usedUnit[u])});if(!s.dvtList.length)s.dvtList=['CÃƒÂ¡i'];s.__userOwnedCatalogs=true;return s}function migrateState(s){return cleanUserCatalogs(s)}function loadState(){try{var raw=localStorage.getItem('qlkho-state');if(raw)return migrateState(JSON.parse(raw)||{})}catch(e){}return migrateState(clone(defaults))}function save(){localStorage.setItem('qlkho-state',JSON.stringify(state))}function el(id){return document.getElementById(id)}function fmt(n){return new Intl.NumberFormat('vi-VN').format(n)}function nameKho(c){var f=state.kho.find(function(x){return x[0]===c});return f?f[1]:c}function item(c){return normalizeHang(state.hang.find(function(x){return x[0]===c})||[c,c,'','',''])}function fill(sel,arr){sel.innerHTML=arr.map(function(x){return '<option value="'+x[0]+'">'+x[1]+'</option>'}).join('')}function fillText(sel,arr){sel.innerHTML=arr.map(function(x){return '<option value="'+x+'">'+x+'</option>'}).join('')}function td(label,val,cls){return '<td data-label="'+label+'" class="'+(cls||'')+'">'+val+'</td>'}
function loadAuth(){try{return Object.assign({},authDefaults,JSON.parse(localStorage.getItem('qlkho-auth')||'{}'))}catch(e){return Object.assign({},authDefaults)}}function saveAuth(){localStorage.setItem('qlkho-auth',JSON.stringify(auth))}function showLogin(){var s=el('loginScreen');if(s)s.style.display=isLoggedIn?'none':'flex'}function login(){var u=el('loginUser').value.trim(),p=el('loginPass').value;if(u===auth.user&&p===auth.pass){isLoggedIn=true;sessionStorage.setItem('qlkho-login','1');if(el('loginPass'))el('loginPass').value='';if(el('loginError'))el('loginError').textContent='';showLogin();render()}else{if(el('loginError'))el('loginError').textContent='Sai tÃƒÂ i khoÃ¡ÂºÂ£n hoÃ¡ÂºÂ·c mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u'}}function logout(){isLoggedIn=false;sessionStorage.removeItem('qlkho-login');showLogin()}function bindAuth(){if(el('loginBtn'))el('loginBtn').onclick=login;if(el('loginPass'))el('loginPass').onkeydown=function(e){if(e.key==='Enter')login()}}function goBack(){var last=screenHistory.pop();if(last){current=last;render()}else{current='tongquan';render()}}
async function cloudRequest(method, body){if(!SUPABASE_CONFIG.url||!SUPABASE_CONFIG.anonKey)throw new Error('ChÃ†Â°a cÃ¡ÂºÂ¥u hÃƒÂ¬nh Supabase');var endpoint=SUPABASE_CONFIG.url.replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(SUPABASE_CONFIG.stateId);var headers={'apikey':SUPABASE_CONFIG.anonKey,'Authorization':'Bearer '+SUPABASE_CONFIG.anonKey,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=representation'};var opts={method:method,headers:headers};if(body)opts.body=JSON.stringify(body);var res=await fetch(endpoint,opts);if(!res.ok)throw new Error(await res.text());return res.json()}
async function taiDuLieuOnline(){try{var rows=await cloudRequest('GET');if(rows&&rows[0]&&rows[0].data){state=migrateState(rows[0].data);save();alert('Ã„ÂÃƒÂ£ tÃ¡ÂºÂ£i dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');render()}else alert('ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u online')}catch(e){alert('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃ¡Â»Â¯ liÃ¡Â»â€¡u online: '+e.message)}}
async function dayDuLieuOnline(){try{await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:state,updated_at:new Date().toISOString()});alert('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡ÂºÂ©y dÃ¡Â»Â¯ liÃ¡Â»â€¡u lÃƒÂªn online')}catch(e){alert('KhÃƒÂ´ng Ã„â€˜Ã¡ÂºÂ©y Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃ¡Â»Â¯ liÃ¡Â»â€¡u online: '+e.message)}}
function buildNav(){el('sideNav').innerHTML=nav.map(function(n){return '<button class="nav '+(n[0]===current?'active':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');el('mobileNav').innerHTML=mobile.map(function(n){return '<button class="'+(n[0]===current?'active':'')+'" onclick="'+(n[0]==='logout'?'logout()':'go(\''+n[0]+'\')')+'">'+n[1]+'</button>'}).join('')}
function shell(id,title,sub,body){var back=id==='tongquan'?'':'<div class="screen-tools"><button class="btn back-btn" type="button" onclick="goBack()">Ã¢â€ Â TrÃ¡Â»Å¸ lÃ¡ÂºÂ¡i</button></div>';return '<section id="'+id+'" class="screen '+(current===id?'active':'')+'">'+back+'<div class="top"><div><h1>'+title+'</h1><p class="sub">'+sub+'</p></div></div>'+body+'</section>'}
function go(id){if(id===current)return;if(id!=='logout')screenHistory.push(current);current=id;render()}function render(){bindAuth();showLogin();if(!isLoggedIn)return;buildNav();var html='';html+=screenTongQuan();html+=screenKho();html+=screenHang();html+=screenThietBi();html+=screenNhap();html+=screenXuat();html+=screenChuyen();html+=screenTon();html+=screenBaoCao();html+=screenThietLap();el('main').innerHTML=html;bindForms();}
function normalizeHang(h){if(h&&h.length>=6)return [h[0],h[1],h[2],h[3],h[5]||''];return h||['','','','','']}function veTongQuanSauLuu(){current='tongquan';screenHistory=[];save();render()}function nextSlipNo(prefix){var max=0;state.bd.forEach(function(x){var no=String(x[1]||'');if(no.indexOf(prefix+'-')===0){var n=parseInt(no.replace(prefix+'-',''),10);if(!isNaN(n)&&n>max)max=n}});return prefix+'-'+String(max+1).padStart(4,'0')}function stockRows(){return Object.entries(state.ton).map(function(e){var p=e[0].split('|'),h=item(p[1]);return [p[0],p[1],h,e[1]]})}
function screenTongQuan(){var rows=stockRows(),total=Object.values(state.ton).reduce(function(a,b){return a+b},0);var bd=state.bd.slice().reverse().slice(0,10).map(function(x){return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+'</tr>'}).join('');var top=rows.slice().sort(function(a,b){return b[3]-a[3]}).slice(0,5).map(function(r){return '<p>'+r[2][1]+' - '+nameKho(r[0])+': <b>'+fmt(r[3])+' '+r[2][3]+'</b></p>'}).join('')||'<p class="hint">ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn kho.</p>';return shell('tongquan','TÃ¡Â»â€¢ng quan kho','Theo dÃƒÂµi nhanh tÃ¡Â»â€œn kho vÃƒÂ  biÃ¡ÂºÂ¿n Ã„â€˜Ã¡Â»â„¢ng mÃ¡Â»â€ºi nhÃ¡ÂºÂ¥t.','<div class="stats"><div class="card dash-card dash-green"><span>TÃ¡Â»â€¢ng kho</span><strong>'+state.kho.length+'</strong></div><div class="card dash-card dash-blue"><span>MÃ¡ÂºÂ·t hÃƒÂ ng</span><strong>'+state.hang.length+'</strong></div><div class="card dash-card dash-amber"><span>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</span><strong>'+fmt(total)+'</strong></div><div class="card dash-card dash-rose"><span>PhiÃ¡ÂºÂ¿u phÃƒÂ¡t sinh</span><strong>'+state.bd.length+'</strong></div></div><div class="grid"><div class="panel panel-accent"><div class="head"><h2>BiÃ¡ÂºÂ¿n Ã„â€˜Ã¡Â»â„¢ng gÃ¡ÂºÂ§n Ã„â€˜ÃƒÂ¢y</h2><span class="tag">10 dÃƒÂ²ng mÃ¡Â»â€ºi nhÃ¡ÂºÂ¥t</span></div><div class="wrap"><table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th class="num">NhÃ¡ÂºÂ­p</th><th class="num">XuÃ¡ÂºÂ¥t</th></tr></thead><tbody>'+bd+'</tbody></table></div></div><div class="panel panel-blue"><div class="head"><h2>TÃ¡Â»â€œn nhiÃ¡Â»Âu nhÃ¡ÂºÂ¥t</h2></div><div class="body">'+top+'</div></div></div>')}
function screenKho(){var rows=state.kho.map(function(x,i){return '<tr>'+td('MÃƒÂ£',x[0])+td('TÃƒÂªn kho',x[1])+td('PhÃ¡Â»Â¥ trÃƒÂ¡ch',x[2])+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag">Ã„Âang dÃƒÂ¹ng</span>')+td('', '<button class="btn small" onclick="editKho('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');return shell('kho','Danh mÃ¡Â»Â¥c kho','TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi hoÃ¡ÂºÂ·c sÃ¡Â»Â­a thÃƒÂ´ng tin kho.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch kho</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn kho</th><th>PhÃ¡Â»Â¥ trÃƒÂ¡ch</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div>'+formKho('')+'</div>')}
function formKho(prefix){return '<div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin kho</h2></div><div class="body form"><input id="'+prefix+'editKho" type="hidden"><label>MÃƒÂ£ kho<input id="'+prefix+'maKho"></label><label>TÃƒÂªn kho<input id="'+prefix+'tenKho"></label><label class="full">NgÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch<input id="'+prefix+'ptKho"></label><button class="btn primary" id="'+prefix+'luuKho">LÃ†Â°u kho</button><button class="btn" id="'+prefix+'huyKho">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div>'}
function screenHang(){var rows=state.hang.map(function(raw,i){var x=normalizeHang(raw);return '<tr>'+td('MÃƒÂ£',x[0])+td('TÃƒÂªn hÃƒÂ ng',x[1])+td('NhÃƒÂ³m',x[2])+td('Ã„ÂVT',x[3])+td('ThuÃ¡Â»â„¢c tÃƒÂ­nh',x[4])+td('', '<button class="btn small" onclick="editHang('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');return shell('hanghoa','Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a','HÃƒÂ ng hÃƒÂ³a dÃƒÂ¹ng nhÃƒÂ³m hÃƒÂ ng vÃƒÂ  Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh tÃ¡Â»Â« phÃ¡ÂºÂ§n ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch hÃƒÂ ng hÃƒÂ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>ThuÃ¡Â»â„¢c tÃƒÂ­nh</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin hÃƒÂ ng hÃƒÂ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="maHang" readonly></label><label>TÃƒÂªn hÃƒÂ ng<input id="tenHang"></label><label>NhÃƒÂ³m<select id="nhomHang"></select></label><label>Ã„ÂVT<select id="dvt"></select></label><label class="full">ThuÃ¡Â»â„¢c tÃƒÂ­nh linh Ã„â€˜Ã¡Â»â„¢ng<input id="thuocTinh" placeholder="MÃƒÂ u: xanh; Size: L; Serial: bÃ¡ÂºÂ¯t buÃ¡Â»â„¢c"></label><button class="btn primary" id="luuHang">LÃ†Â°u hÃƒÂ ng hÃƒÂ³a</button><button class="btn" id="huyHang">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>')}
function normalizeThietBi(x){if(!x)return ['','','','','','','',''];if(x.length>=8)return x;return [x[0]||'', '', x[1]||'', x[2]||'', x[3]||'', x[4]||'', x[5]||'', x[6]||'']}function itItems(){return state.hang.filter(function(h){return normalizeHang(h)[2]==='ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT'}).map(function(h){h=normalizeHang(h);return [h[0],h[0]+' - '+h[1]]})}function screenThietBi(){var rows=(state.thietBiIT||[]).map(function(raw,i){var x=normalizeThietBi(raw);var h=item(x[2]);return '<tr>'+td('MÃƒÂ£ ID',x[0])+td('SÃ¡Â»â€˜ seri',x[1]||'')+td('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',h[1])+td('NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p',x[3])+td('NgÃƒÂ y nhÃ¡ÂºÂ­p',x[4])+td('Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i',x[5])+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag">'+x[6]+'</span>')+td('Ghi chÃƒÂº',x[7]||'')+td('', '<button class="btn small" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('')||'<tr><td class="empty" colspan="9">ChÃ†Â°a cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri.</td></tr>';return shell('thietbi','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri','Theo dÃƒÂµi tÃ¡Â»Â«ng thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ theo sÃ¡Â»â€˜ seri, nguÃ¡Â»â€œn nhÃ¡ÂºÂ­p, ngÃƒÂ y nhÃ¡ÂºÂ­p vÃƒÂ  ngÃ†Â°Ã¡Â»Âi Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£ ID</th><th>SÃ¡Â»â€˜ seri</th><th>ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p</th><th>NgÃƒÂ y nhÃ¡ÂºÂ­p</th><th>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Ghi chÃƒÂº</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label>MÃƒÂ£ ID tÃƒÂ i sÃ¡ÂºÂ£n<input id="maThietBi" placeholder="VD: IT-003"></label><label>SÃ¡Â»â€˜ seri<input id="seriThietBi" placeholder="Serial trÃƒÂªn mÃƒÂ¡y/tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹"></label><label>MÃ¡ÂºÂ·t hÃƒÂ ng IT<select id="hangThietBi"></select></label><label>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p<select id="nguonThietBi"></select></label><label>NgÃƒÂ y nhÃ¡ÂºÂ­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÃ†Â°Ã¡Â»Âi Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng<input id="nguoiDungThietBi" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban/kho"></label><label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Ã„Âang sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>Thanh lÃƒÂ½</option><option>ThÃ¡ÂºÂ¥t lÃ¡ÂºÂ¡c</option></select></label><label class="full">Ghi chÃƒÂº<input id="ghiChuThietBi" placeholder="CÃ¡ÂºÂ¥u hÃƒÂ¬nh, tÃƒÂ¬nh trÃ¡ÂºÂ¡ng, chÃ¡Â»Â©ng tÃ¡Â»Â«..."></label><button class="btn primary" id="luuThietBi">LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</button><button class="btn" id="huyThietBi">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>')}
function screenNhap(){return shell('nhap','NhÃ¡ÂºÂ­p kho','CÃƒÂ³ thÃ¡Â»Æ’ chÃ¡Â»Ân hÃƒÂ ng cÃƒÂ³ sÃ¡ÂºÂµn hoÃ¡ÂºÂ·c tÃ¡ÂºÂ¡o nhanh hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi ngay khi nhÃ¡ÂºÂ­p.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label class="full">HÃƒÂ ng hÃƒÂ³a<select id="hangNhap"></select></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">ThuÃ¡Â»â„¢c tÃƒÂ­nh linh Ã„â€˜Ã¡Â»â„¢ng<input id="nhapThuocTinhMoi" placeholder="MÃƒÂ u: xanh; Size: L; Serial: bÃ¡ÂºÂ¯t buÃ¡Â»â„¢c"></label><p class="hint full">Khi lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p, hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃƒÂªm vÃƒÂ o danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')}
function screenXuat(){return shell('xuat','XuÃ¡ÂºÂ¥t kho','ChÃ¡Â»Ân hÃƒÂ ng hÃƒÂ³a trÃ†Â°Ã¡Â»â€ºc, sau Ã„â€˜ÃƒÂ³ kho xuÃ¡ÂºÂ¥t chÃ¡Â»â€° hiÃ¡Â»â€¡n cÃƒÂ¡c kho cÃƒÂ²n tÃ¡Â»â€œn cÃ¡Â»Â§a hÃƒÂ ng Ã„â€˜ÃƒÂ³.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full">HÃƒÂ ng hÃƒÂ³a<select id="hangXuat"></select></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label>Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">ChÃ¡Â»Ân hÃƒÂ ng hÃƒÂ³a Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>')}
function screenChuyen(){var waiting=state.chuyen.filter(function(x){return x.st==='ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});var rows=waiting.length?waiting.map(function(x,i){return '<tr>'+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x.so)+td('Kho xuÃ¡ÂºÂ¥t',nameKho(x.tu))+td('Kho nhÃ¡ÂºÂ­n',nameKho(x.den))+td('HÃƒÂ ng',item(x.hang)[1])+td('SL',x.sl,'num')+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag warn">'+x.st+'</span>')+td('', '<button class="btn primary small" onclick="nhan('+i+')">XÃƒÂ¡c nhÃ¡ÂºÂ­n nhÃ¡ÂºÂ­n</button>')+'</tr>'}).join(''):'<tr><td class="empty" colspan="7">KhÃƒÂ´ng cÃƒÂ³ phiÃ¡ÂºÂ¿u chÃ¡Â»Â nhÃ¡ÂºÂ­n.</td></tr>';return shell('chuyen','Ã„ÂiÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢','Kho nhÃ¡ÂºÂ­n xÃƒÂ¡c nhÃ¡ÂºÂ­n, hÃ¡Â»â€¡ thÃ¡Â»â€˜ng tÃ¡Â»Â± sinh phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n.','<div class="panel"><div class="head"><h2>PhiÃ¡ÂºÂ¿u chÃ¡Â»Â nhÃ¡ÂºÂ­n</h2></div><div class="wrap"><table><thead><tr><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho xuÃ¡ÂºÂ¥t</th><th>Kho nhÃ¡ÂºÂ­n</th><th>HÃƒÂ ng</th><th>SL</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div>')}
function stockSearchSuggestions(){var seen={};var out=[];stockRows().forEach(function(r){[nameKho(r[0]),r[1],r[2][1],r[2][2],r[2][3]].forEach(function(v){if(v&&!seen[v]){seen[v]=true;out.push(v)}})});return out}function screenTon(){var rows=stockRows().map(function(r){var text=[nameKho(r[0]),r[1],r[2][1],r[2][2],r[2][3],String(r[3])].join(' ').toLowerCase();return '<tr data-search="'+text.replace(/"/g,'')+'">'+td('Kho',nameKho(r[0]))+td('MÃƒÂ£ hÃƒÂ ng',r[1])+td('TÃƒÂªn hÃƒÂ ng',r[2][1])+td('NhÃƒÂ³m',r[2][2])+td('Ã„ÂVT',r[2][3])+td('TÃ¡Â»â€œn',fmt(r[3]),'num')+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag">Ã„Âang theo dÃƒÂµi</span>')+'</tr>'}).join('');var opts=stockSearchSuggestions().map(function(x){return '<option value="'+x+'"></option>'}).join('');return shell('ton','TÃ¡Â»â€œn kho','TÃƒÂ¬m nhanh theo kho, mÃƒÂ£ hÃƒÂ ng, tÃƒÂªn hÃƒÂ ng, nhÃƒÂ³m hÃƒÂ ng hoÃ¡ÂºÂ·c Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh.','<div class="panel ton-search-panel-strong"><div class="head"><h2>TÃƒÂ¬m kiÃ¡ÂºÂ¿m tÃ¡Â»â€œn kho</h2><button class="btn" id="xoaTimTon" type="button">XÃƒÂ³a tÃƒÂ¬m</button></div><div class="body form"><label class="full ton-search-field">Search tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£<input id="timTon" list="goiYTon" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng hoÃ¡ÂºÂ·c kho..."><datalist id="goiYTon">'+opts+'</datalist></label></div></div><div class="panel"><div class="head"><h2>BÃ¡ÂºÂ£ng tÃ¡Â»â€œn kho</h2><span class="tag" id="soDongTon"></span></div><div class="wrap"><table><thead><tr><th>Kho</th><th>MÃƒÂ£ hÃƒÂ ng</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>TÃ¡Â»â€œn</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th></tr></thead><tbody id="tonRowsBody">'+rows+'</tbody></table></div></div>')}
function screenBaoCao(){return shell('baocao','BÃƒÂ¡o cÃƒÂ¡o','BÃƒÂ¡o cÃƒÂ¡o chi tiÃ¡ÂºÂ¿t XNK, tÃ¡Â»â€œn tÃ¡Â»Â«ng kho, tÃ¡Â»â€¢ng quan cÃƒÂ¡c kho vÃƒÂ  tÃ¡Â»â€œn theo hÃƒÂ ng hÃƒÂ³a.','<div class="tabs"><button class="btn tab active" onclick="showReport(\'xnk\',this)">Chi tiÃ¡ÂºÂ¿t XNK</button><button class="btn tab" onclick="showReport(\'tk\',this)">TÃ¡Â»â€œn tÃ¡Â»Â«ng kho</button><button class="btn tab" onclick="showReport(\'tq\',this)">TÃ¡Â»â€¢ng quan</button><button class="btn tab" onclick="showReport(\'hh\',this)">TÃ¡Â»â€œn theo hÃƒÂ ng</button><button class="btn tab" onclick="showReport(\'ncc\',this)">TÃ¡Â»â€¢ng hÃ¡Â»Â£p NCC</button><button class="btn tab" onclick="showReport(\'it\',this)">ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</button></div><div class="panel"><div class="head"><h2 id="rpTitle">Chi tiÃ¡ÂºÂ¿t XNK</h2></div><div class="wrap" id="rp"></div></div>')}
function screenThietLap(){var nh=state.nhomHangList.map(function(x,i){return '<tr>'+td('NhÃƒÂ³m hÃƒÂ ng',x)+td('', '<button class="btn small" onclick="editNhom('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');var dv=state.dvtList.map(function(x,i){return '<tr>'+td('Ã„ÂVT',x)+td('', '<button class="btn small" onclick="editDvt('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');var ncc=state.nccList.map(function(x,i){return '<tr>'+td('NCC',x)+td('', '<button class="btn small" onclick="editNcc('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');var lo=[];state.loaiNhapList.forEach(function(x,i){lo.push(['nhap',i,'LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p',x])});state.loaiXuatList.forEach(function(x,i){lo.push(['xuat',i,'LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t',x])});var lorows=lo.map(function(r){return '<tr>'+td('NhÃƒÂ³m',r[2])+td('TÃƒÂªn loÃ¡ÂºÂ¡i',r[3])+td('', '<button class="btn small" onclick="editLoai(\''+r[0]+'\','+r[1]+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');return shell('thietlap','ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p danh mÃ¡Â»Â¥c','TÃ¡ÂºÂ¡o vÃƒÂ  thay Ã„â€˜Ã¡Â»â€¢i kho, nhÃƒÂ³m hÃƒÂ ng, Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh, nhÃƒÂ  cung cÃ¡ÂºÂ¥p, loÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u. Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a chÃ¡Â»â€°nh Ã¡Â»Å¸ mÃ¡Â»Â¥c HÃƒÂ ng hÃƒÂ³a.','<div class="two">'+formKho('set')+'<div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch kho</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn kho</th><th>PhÃ¡Â»Â¥ trÃƒÂ¡ch</th><th></th></tr></thead><tbody>'+state.kho.map(function(x,i){return '<tr>'+td('MÃƒÂ£',x[0])+td('TÃƒÂªn kho',x[1])+td('PhÃ¡Â»Â¥ trÃƒÂ¡ch',x[2])+td('', '<button class="btn small" onclick="editKhoSetup('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃƒÂ³m hÃƒÂ ng</h2></div><div class="body form"><input id="editNhom" type="hidden"><label class="full">TÃƒÂªn nhÃƒÂ³m<input id="tenNhom"></label><button class="btn primary" id="luuNhom">LÃ†Â°u nhÃƒÂ³m</button><button class="btn" id="huyNhom">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><tbody>'+nh+'</tbody></table></div></div><div class="panel"><div class="head"><h2>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh</h2></div><div class="body form"><input id="editDvt" type="hidden"><label class="full">TÃƒÂªn Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹<input id="tenDvt"></label><button class="btn primary" id="luuDvt">LÃ†Â°u Ã„ÂVT</button><button class="btn" id="huyDvt">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><tbody>'+dv+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃƒÂ  cung cÃ¡ÂºÂ¥p</h2></div><div class="body form"><input id="editNcc" type="hidden"><label class="full">TÃƒÂªn NCC<input id="tenNcc"></label><button class="btn primary" id="luuNcc">LÃ†Â°u NCC</button><button class="btn" id="huyNcc">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><tbody>'+ncc+'</tbody></table></div></div><div class="panel"><div class="head"><h2>LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u</h2></div><div class="body form"><input id="editLoai" type="hidden"><label>NhÃƒÂ³m<select id="loaiNghiepVu"><option value="nhap">LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p</option><option value="xuat">LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t</option></select></label><label>TÃƒÂªn loÃ¡ÂºÂ¡i<input id="tenLoai"></label><button class="btn primary" id="luuLoai">LÃ†Â°u loÃ¡ÂºÂ¡i</button><button class="btn" id="huyLoai">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><tbody>'+lorows+'</tbody></table></div></div></div>')}
function khoCoTonTheoHang(maHang){return state.kho.filter(function(k){return (state.ton[k[0]+'|'+maHang]||0)>0}).map(function(k){return [k[0],k[1]+' - tÃ¡Â»â€œn '+fmt(state.ton[k[0]+'|'+maHang]||0)]})}function capNhatKhoXuatTheoHang(){if(!el('hangXuat')||!el('khoXuat'))return;var ma=el('hangXuat').value;var ds=khoCoTonTheoHang(ma);if(ds.length){fill(el('khoXuat'),ds);if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='ChÃ¡Â»â€° hiÃ¡Â»Æ’n thÃ¡Â»â€¹ kho cÃƒÂ²n tÃ¡Â»â€œn cÃ¡Â»Â§a hÃƒÂ ng Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân.'}else{el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HÃƒÂ ng nÃƒÂ y hiÃ¡Â»â€¡n chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn Ã¡Â»Å¸ kho nÃƒÂ o.'}}function bindForms(){['khoNhap','khoNhan'].forEach(function(id){if(el(id))fill(el(id),state.kho)});['hangNhap','hangXuat'].forEach(function(id){if(el(id))fill(el(id),state.hang.map(function(x){var h=normalizeHang(x);return [h[0],h[0]+' - '+h[1]]}))});if(el('hangXuat')){el('hangXuat').onchange=capNhatKhoXuatTheoHang;capNhatKhoXuatTheoHang();}if(el('nhomHang'))fillText(el('nhomHang'),state.nhomHangList);if(el('nhapNhomHangMoi'))fillText(el('nhapNhomHangMoi'),state.nhomHangList);if(el('dvt'))fillText(el('dvt'),state.dvtList);if(el('nhapDvtMoi'))fillText(el('nhapDvtMoi'),state.dvtList);if(el('loaiNhap'))fillText(el('loaiNhap'),state.loaiNhapList);if(el('nccNhap'))fillText(el('nccNhap'),state.nccList);if(el('loaiXuat'))fillText(el('loaiXuat'),state.loaiXuatList);bindKho('');bindKho('set');if(el('hangThietBi'))fill(el('hangThietBi'),itItems().length?itItems():state.hang.map(function(x){return [x[0],x[0]+' - '+x[1]]}));if(el('nguonThietBi'))fillText(el('nguonThietBi'),state.loaiNhapList.concat(['Ã„ÂiÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢','KhÃƒÂ¡c']));if(el('luuThietBi'))el('luuThietBi').onclick=saveThietBi;if(el('huyThietBi'))el('huyThietBi').onclick=resetThietBi;if(el('luuHang'))el('luuHang').onclick=saveHang;if(el('huyHang'))el('huyHang').onclick=resetHang;if(el('batHangMoi'))el('batHangMoi').onclick=function(){var box=el('hangMoiBox');var show=box.style.display==='none';box.style.display=show?'block':'none';el('hangNhap').disabled=show;el('batHangMoi').textContent=show?'ChÃ¡Â»Ân hÃƒÂ ng cÃƒÂ³ sÃ¡ÂºÂµn':'+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi'};if(el('luuNhap'))el('luuNhap').onclick=saveNhap;if(el('luuXuat'))el('luuXuat').onclick=saveXuat;if(el('luuNhom'))el('luuNhom').onclick=saveNhom;if(el('huyNhom'))el('huyNhom').onclick=resetNhom;if(el('luuDvt'))el('luuDvt').onclick=saveDvt;if(el('huyDvt'))el('huyDvt').onclick=resetDvt;if(el('dayOnline'))el('dayOnline').onclick=dayDuLieuOnline;if(el('taiOnline'))el('taiOnline').onclick=taiDuLieuOnline;if(el('xoaDuLieuCu'))el('xoaDuLieuCu').onclick=xoaDuLieuCu;if(el('capNhatDuLieu'))el('capNhatDuLieu').onclick=capNhatDuLieuMau;if(el('luuBaoMat'))el('luuBaoMat').onclick=saveBaoMat;if(el('luuNcc'))el('luuNcc').onclick=saveNcc;if(el('huyNcc'))el('huyNcc').onclick=resetNcc;if(el('luuLoai'))el('luuLoai').onclick=saveLoai;if(el('huyLoai'))el('huyLoai').onclick=resetLoai;if(current==='ton')bindSearchTon();if(current==='baocao')showReport('xnk')}
function bindSearchTon(){var input=el('timTon'),clear=el('xoaTimTon'),badge=el('soDongTon');if(!input)return;function apply(){var q=input.value.trim().toLowerCase();var rows=[].slice.call(document.querySelectorAll('#tonRowsBody tr'));var shown=0;rows.forEach(function(r){var ok=!q||r.getAttribute('data-search').indexOf(q)>=0;r.style.display=ok?'':'none';if(ok)shown++});if(badge)badge.textContent=shown+' dÃƒÂ²ng'}input.oninput=apply;if(clear)clear.onclick=function(){input.value='';apply();input.focus()};apply()}function bindKho(p){if(el(p+'luuKho'))el(p+'luuKho').onclick=function(){saveKho(p)};if(el(p+'huyKho'))el(p+'huyKho').onclick=function(){resetKho(p)}}function saveKho(p){if(!el(p+'maKho').value||!el(p+'tenKho').value)return alert('NhÃ¡ÂºÂ­p mÃƒÂ£ kho vÃƒÂ  tÃƒÂªn kho');var i=el(p+'editKho').value;if(i==='')state.kho.push([el(p+'maKho').value,el(p+'tenKho').value,el(p+'ptKho').value||'ChÃ†Â°a gÃƒÂ¡n']);else{state.kho[Number(i)][1]=el(p+'tenKho').value;state.kho[Number(i)][2]=el(p+'ptKho').value||'ChÃ†Â°a gÃƒÂ¡n'}save();render()}function resetKho(p){[p+'editKho',p+'maKho',p+'tenKho',p+'ptKho'].forEach(function(id){if(el(id))el(id).value=''});if(el(p+'maKho'))el(p+'maKho').disabled=false}function editKho(i){go('kho');setTimeout(function(){fillKho('',i)},0)}function editKhoSetup(i){fillKho('set',i)}function fillKho(p,i){el(p+'editKho').value=i;el(p+'maKho').value=state.kho[i][0];el(p+'maKho').disabled=true;el(p+'tenKho').value=state.kho[i][1];el(p+'ptKho').value=state.kho[i][2]}
function editHang(i){var h=normalizeHang(state.hang[i]);el('editHang').value=i;el('maHang').value=h[0];el('maHang').disabled=true;el('tenHang').value=h[1];el('nhomHang').value=h[2];el('dvt').value=h[3];el('thuocTinh').value=h[4]}function resetHang(){['editHang','maHang','tenHang','thuocTinh'].forEach(function(id){el(id).value=''});el('maHang').disabled=false}function saveHang(){if(!el('maHang').value||!el('tenHang').value)return alert('NhÃ¡ÂºÂ­p mÃƒÂ£ hÃƒÂ ng vÃƒÂ  tÃƒÂªn hÃƒÂ ng');var row=[el('maHang').value,el('tenHang').value,el('nhomHang').value,el('dvt').value,el('thuocTinh').value];var i=el('editHang').value;if(i==='')state.hang.push(row);else state.hang[Number(i)]=row;save();render()}
function editThietBi(i){var x=normalizeThietBi(state.thietBiIT[i]);el('editThietBi').value=i;el('maThietBi').value=x[0];el('maThietBi').disabled=true;el('seriThietBi').value=x[1]||'';el('hangThietBi').value=x[2];el('nguonThietBi').value=x[3];el('ngayThietBi').value=x[4];el('nguoiDungThietBi').value=x[5];el('trangThaiThietBi').value=x[6];el('ghiChuThietBi').value=x[7]||''}function resetThietBi(){['editThietBi','maThietBi','seriThietBi','nguoiDungThietBi','ghiChuThietBi'].forEach(function(id){if(el(id))el(id).value=''});if(el('maThietBi'))el('maThietBi').disabled=false;if(el('ngayThietBi'))el('ngayThietBi').value=today;if(el('trangThaiThietBi'))el('trangThaiThietBi').value='Trong kho'}function saveThietBi(){if(!state.thietBiIT)state.thietBiIT=[];var ma=el('maThietBi').value.trim();var seri=el('seriThietBi').value.trim();if(!ma)return alert('NhÃ¡ÂºÂ­p mÃƒÂ£ ID tÃƒÂ i sÃ¡ÂºÂ£n');var row=[ma,seri,el('hangThietBi').value,el('nguonThietBi').value,el('ngayThietBi').value,el('nguoiDungThietBi').value||'Trong kho',el('trangThaiThietBi').value,el('ghiChuThietBi').value];var i=el('editThietBi').value;if(i===''){if(state.thietBiIT.some(function(raw){var x=normalizeThietBi(raw);return x[0]===ma}))return alert('MÃƒÂ£ ID nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');if(seri&&state.thietBiIT.some(function(raw){var x=normalizeThietBi(raw);return x[1]===seri}))return alert('SÃ¡Â»â€˜ seri nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');state.thietBiIT.push(row)}else{if(seri&&state.thietBiIT.some(function(raw,idx){var x=normalizeThietBi(raw);return idx!==Number(i)&&x[1]===seri}))return alert('SÃ¡Â»â€˜ seri nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');state.thietBiIT[Number(i)]=row}save();render()}function saveNhap(){var maHang=el('hangNhap').value;if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){var ma=el('nhapMaHangMoi').value.trim();var ten=el('nhapTenHangMoi').value.trim();if(!ma||!ten)return alert('NhÃ¡ÂºÂ­p mÃƒÂ£ hÃƒÂ ng vÃƒÂ  tÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi');if(state.hang.some(function(h){return h[0]===ma}))return alert('MÃƒÂ£ hÃƒÂ ng Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i trong danh mÃ¡Â»Â¥c');state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,el('nhapThuocTinhMoi').value]);maHang=ma}var key=el('khoNhap').value+'|'+maHang,sl=Number(el('slNhap').value);state.ton[key]=(state.ton[key]||0)+sl;state.bd.push([today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value]);alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p');veTongQuanSauLuu()}function saveXuat(){if(!el('khoXuat').value)return alert('HÃƒÂ ng nÃƒÂ y chÃ†Â°a cÃƒÂ³ kho cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');var key=el('khoXuat').value+'|'+el('hangXuat').value,sl=Number(el('slXuat').value);if((state.ton[key]||0)<sl)return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');state.ton[key]-=sl;state.bd.push([today,el('soXuat').value,el('khoXuat').value,el('hangXuat').value,el('loaiXuat').value,0,sl]);if(el('loaiXuat').value==='XuÃ¡ÂºÂ¥t Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:el('hangXuat').value,sl:sl,st:'ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');veTongQuanSauLuu()}function nhan(i){var w=state.chuyen.filter(function(x){return x.st==='ChÃ¡Â»Â nhÃ¡ÂºÂ­n'}),x=w[i];x.st='HoÃƒÂ n tÃ¡ÂºÂ¥t';var key=x.den+'|'+x.hang;state.ton[key]=(state.ton[key]||0)+x.sl;state.bd.push([today,'PN-DC-'+x.so,x.den,x.hang,'NhÃ¡ÂºÂ­p Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n',x.sl,0]);alert('Ã„ÂÃƒÂ£ nhÃ¡ÂºÂ­n hÃƒÂ ng vÃƒÂ  tÃ¡Â»Â± sinh phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n');veTongQuanSauLuu()}
function xoaDuLieuCu(){if(confirm('XÃƒÂ³a dÃ¡Â»Â¯ liÃ¡Â»â€¡u cÃƒâ€¦Ã‚Â© trÃƒÂªn mÃƒÂ¡y nÃƒÂ y vÃƒÂ  nÃ¡ÂºÂ¡p lÃ¡ÂºÂ¡i dÃ¡Â»Â¯ liÃ¡Â»â€¡u mÃ¡ÂºÂ«u mÃ¡Â»â€ºi?')){localStorage.removeItem('qlkho-state');location.href=location.pathname+'?resetData=1&v='+Date.now()}}function capNhatDuLieuMau(){state=migrateState(state);save();alert('Ã„ÂÃƒÂ£ cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t dÃ¡Â»Â¯ liÃ¡Â»â€¡u vÃƒÂ  danh mÃ¡Â»Â¥c mÃ¡Â»â€ºi');render()}function saveBaoMat(){var user=el('tenDangNhap').value.trim()||'admin';var old=el('matKhauCu').value;var p1=el('matKhauMoi').value;var p2=el('matKhauMoi2').value;if(old!==auth.pass)return alert('MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i khÃƒÂ´ng Ã„â€˜ÃƒÂºng');if(!p1||p1.length<4)return alert('MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi nÃƒÂªn cÃƒÂ³ ÃƒÂ­t nhÃ¡ÂºÂ¥t 4 kÃƒÂ½ tÃ¡Â»Â±');if(p1!==p2)return alert('NhÃ¡ÂºÂ­p lÃ¡ÂºÂ¡i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi chÃ†Â°a khÃ¡Â»â€ºp');auth={user:user,pass:p1};saveAuth();alert('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡Â»â€¢i thÃƒÂ´ng tin Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p');logout()}function editNhom(i){el('editNhom').value=i;el('tenNhom').value=state.nhomHangList[i]}function resetNhom(){el('editNhom').value='';el('tenNhom').value=''}function saveNhom(){var v=el('tenNhom').value.trim();if(!v)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn nhÃƒÂ³m');var i=el('editNhom').value;if(i==='')state.nhomHangList.push(v);else{var old=state.nhomHangList[Number(i)];state.nhomHangList[Number(i)]=v;state.hang.forEach(function(h){if(h[2]===old)h[2]=v})}save();render()}function editDvt(i){el('editDvt').value=i;el('tenDvt').value=state.dvtList[i]}function resetDvt(){el('editDvt').value='';el('tenDvt').value=''}function saveDvt(){var v=el('tenDvt').value.trim();if(!v)return alert('NhÃ¡ÂºÂ­p Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh');var i=el('editDvt').value;if(i==='')state.dvtList.push(v);else{var old=state.dvtList[Number(i)];state.dvtList[Number(i)]=v;state.hang.forEach(function(h){if(h[3]===old)h[3]=v})}save();render()}function editNcc(i){el('editNcc').value=i;el('tenNcc').value=state.nccList[i]}function resetNcc(){el('editNcc').value='';el('tenNcc').value=''}function saveNcc(){var v=el('tenNcc').value.trim();if(!v)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn NCC');var i=el('editNcc').value;if(i==='')state.nccList.push(v);else{var old=state.nccList[Number(i)];state.nccList[Number(i)]=v;state.bd.forEach(function(b){if(b[7]===old)b[7]=v})}save();render()}function editLoai(t,i){el('editLoai').value=i;el('loaiNghiepVu').value=t;el('tenLoai').value=(t==='nhap'?state.loaiNhapList:state.loaiXuatList)[i]}function resetLoai(){el('editLoai').value='';el('tenLoai').value='';el('loaiNghiepVu').value='nhap'}function saveLoai(){var v=el('tenLoai').value.trim();if(!v)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn loÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u');var list=el('loaiNghiepVu').value==='nhap'?state.loaiNhapList:state.loaiXuatList;var i=el('editLoai').value;if(i==='')list.push(v);else list[Number(i)]=v;save();render()}
function showKhoDetail(maKho){var rows=stockRows().filter(function(r){return r[0]===maKho&&r[3]>0});var html='<div class="panel" style="box-shadow:none;margin-top:12px"><div class="head"><h2>Chi tiÃ¡ÂºÂ¿t tÃ¡Â»â€œn: '+nameKho(maKho)+'</h2><button class="btn small" onclick="showReport(\'tk\')">Ã„ÂÃƒÂ³ng chi tiÃ¡ÂºÂ¿t</button></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£ hÃƒÂ ng</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>TÃ¡Â»â€œn</th></tr></thead><tbody>'+rows.map(function(r){return '<tr>'+td('MÃƒÂ£ hÃƒÂ ng',r[1])+td('TÃƒÂªn hÃƒÂ ng',r[2][1])+td('NhÃƒÂ³m',r[2][2])+td('Ã„ÂVT',r[2][3])+td('TÃ¡Â»â€œn',fmt(r[3]),'num')+'</tr>'}).join('')+'</tbody></table></div></div>';if(el('rpDetail'))el('rpDetail').innerHTML=html}function showReport(mode,btn){if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}var title={xnk:'Chi tiÃ¡ÂºÂ¿t XNK',tk:'TÃ¡Â»â€œn tÃ¡Â»Â«ng kho',tq:'TÃ¡Â»â€¢ng quan',hh:'TÃ¡Â»â€œn theo hÃƒÂ ng hÃƒÂ³a',ncc:'TÃ¡Â»â€¢ng hÃ¡Â»Â£p theo NCC',it:'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng'}[mode];if(!el('rp'))return;el('rpTitle').textContent=title;var html='';if(mode==='xnk')html='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th></tr></thead><tbody>'+state.bd.slice().reverse().map(function(x){return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+'</tr>'}).join('')+'</tbody></table>';if(mode==='tk')html='<p class="hint">BÃ¡ÂºÂ¥m vÃƒÂ o tÃƒÂªn kho Ã„â€˜Ã¡Â»Æ’ xem chi tiÃ¡ÂºÂ¿t cÃƒÂ¡c mÃ¡ÂºÂ·t hÃƒÂ ng Ã„â€˜ang tÃ¡Â»â€œn.</p><table><thead><tr><th>Kho</th><th>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</th></tr></thead><tbody>'+state.kho.map(function(k){var s=Object.entries(state.ton).filter(function(e){return e[0].startsWith(k[0]+'|')}).reduce(function(a,e){return a+e[1]},0);return '<tr>'+td('Kho','<button class="btn small" onclick="showKhoDetail(\''+k[0]+'\')">'+k[1]+'</button>')+td('TÃ¡Â»â€¢ng tÃ¡Â»â€œn',fmt(s),'num')+'</tr>'}).join('')+'</tbody></table><div id="rpDetail"></div>';if(mode==='tq')html='<table><tbody>'+td('ChÃ¡Â»â€° tiÃƒÂªu','TÃ¡Â»â€¢ng kho')+td('GiÃƒÂ¡ trÃ¡Â»â€¹',state.kho.length,'num')+td('ChÃ¡Â»â€° tiÃƒÂªu','TÃ¡Â»â€¢ng hÃƒÂ ng hÃƒÂ³a')+td('GiÃƒÂ¡ trÃ¡Â»â€¹',state.hang.length,'num')+td('ChÃ¡Â»â€° tiÃƒÂªu','TÃ¡Â»â€¢ng tÃ¡Â»â€œn')+td('GiÃƒÂ¡ trÃ¡Â»â€¹',fmt(Object.values(state.ton).reduce(function(a,b){return a+b},0)),'num')+'</tbody></table>';if(mode==='hh')html='<table><tbody>'+state.hang.map(function(h){var s=Object.entries(state.ton).filter(function(e){return e[0].endsWith('|'+h[0])}).reduce(function(a,e){return a+e[1]},0);return '<tr>'+td('MÃƒÂ£ hÃƒÂ ng',h[0])+td('TÃƒÂªn hÃƒÂ ng',h[1])+td('Ã„ÂVT',normalizeHang(h)[3])+td('TÃ¡Â»â€¢ng tÃ¡Â»â€œn',fmt(s),'num')+'</tr>'}).join('')+'</tbody></table>';if(mode==='it'){var m={};(state.thietBiIT||[]).forEach(function(x){x=normalizeThietBi(x);var key=x[5]||'ChÃ†Â°a gÃƒÂ¡n';if(!m[key])m[key]={total:0,using:0,stock:0};m[key].total+=1;if(x[6]==='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng')m[key].using+=1;if(x[6]==='Trong kho')m[key].stock+=1});html='<table><thead><tr><th>NgÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban</th><th>TÃ¡Â»â€¢ng thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>Trong kho</th></tr></thead><tbody>'+Object.keys(m).map(function(k){return '<tr>'+td('NgÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban',k)+td('TÃ¡Â»â€¢ng thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',m[k].total,'num')+td('Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng',m[k].using,'num')+td('Trong kho',m[k].stock,'num')+'</tr>'}).join('')+'</tbody></table>'}if(mode==='ncc'){var m={};state.bd.forEach(function(x){if((x[5]||0)>0){var key=x[7]||'ChÃ†Â°a chÃ¡Â»Ân NCC';if(!m[key])m[key]={qty:0,slip:0};m[key].qty+=Number(x[5]||0);m[key].slip+=1}});html='<table><thead><tr><th>NCC</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</th><th>TÃ¡Â»â€¢ng sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng nhÃ¡ÂºÂ­p</th></tr></thead><tbody>'+Object.keys(m).map(function(k){return '<tr>'+td('NCC',k)+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p',m[k].slip,'num')+td('TÃ¡Â»â€¢ng sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng nhÃ¡ÂºÂ­p',fmt(m[k].qty),'num')+'</tr>'}).join('')+'</tbody></table>'}el('rp').innerHTML=html}
render();
var deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredInstallPrompt=e;var b=document.getElementById('installApp');if(b)b.style.display='inline-block'});
document.addEventListener('click',function(e){if(e.target&&e.target.id==='installApp'){if(deferredInstallPrompt){deferredInstallPrompt.prompt();deferredInstallPrompt.userChoice.finally(function(){deferredInstallPrompt=null})}else{alert('TrÃƒÂªn Ã„â€˜iÃ¡Â»â€¡n thoÃ¡ÂºÂ¡i, mÃ¡Â»Å¸ menu trÃƒÂ¬nh duyÃ¡Â»â€¡t rÃ¡Â»â€œi chÃ¡Â»Ân ThÃƒÂªm vÃƒÂ o mÃƒÂ n hÃƒÂ¬nh chÃƒÂ­nh. VÃ¡Â»â€ºi iPhone: Chia sÃ¡ÂºÂ» > ThÃƒÂªm vÃƒÂ o MH chÃƒÂ­nh.')}}});
if(('serviceWorker' in navigator) && location.protocol.indexOf('http')===0){window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js?v=20260721-mobile-login-sync-1').catch(function(){})})}
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
    panel.innerHTML='<div class="head"><h2>Ã„ÂÃ¡Â»â€œng bÃ¡Â»â„¢ online</h2></div><div class="body form"><button class="btn primary" id="onlinePushBtn" type="button">Ã„ÂÃ¡ÂºÂ©y dÃ¡Â»Â¯ liÃ¡Â»â€¡u online</button><button class="btn" id="onlinePullBtn" type="button">TÃ¡ÂºÂ£i dÃ¡Â»Â¯ liÃ¡Â»â€¡u online</button><p class="hint full">LÃ†Â°u dÃ¡Â»Â¯ liÃ¡Â»â€¡u lÃƒÂªn Supabase vÃƒÂ  tÃ¡ÂºÂ£i lÃ¡ÂºÂ¡i trÃƒÂªn Ã„â€˜iÃ¡Â»â€¡n thoÃ¡ÂºÂ¡i hoÃ¡ÂºÂ·c mÃƒÂ¡y khÃƒÂ¡c.</p></div>';
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
  if(window.__qlhcMobileLoginSync20260721)return;
  window.__qlhcMobileLoginSync20260721=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;

  function byId(id){return document.getElementById(id)}
  function getCfg(){
    try{return typeof SUPABASE_CONFIG!=='undefined'?SUPABASE_CONFIG:(window.SUPABASE_CONFIG||{})}
    catch(e){return window.SUPABASE_CONFIG||{}}
  }
  function norm(v){
    return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();
  }
  function localState(){
    try{
      if(typeof state!=='undefined'&&state)return state;
      return JSON.parse(localStorage.getItem('qlkho-state')||'{}')||{};
    }catch(e){return {}}
  }
  function setLocalState(next){
    if(!next||typeof next!=='object')return;
    try{if(typeof migrateState==='function')next=migrateState(next)}catch(e){}
    try{state=next}catch(e){window.state=next}
    try{window.state=next}catch(e){}
    try{localStorage.setItem('qlkho-state',JSON.stringify(next))}catch(e){}
  }
  function ensureUserShape(s){
    s=s||localState();
    if(!Array.isArray(s.users))s.users=[];
    var authUser='admin',authPass='admin123';
    try{
      var saved=JSON.parse(localStorage.getItem('qlkho-auth')||'{}')||{};
      authUser=String((window.auth&&auth.user)||saved.user||'admin').trim()||'admin';
      authPass=String((window.auth&&auth.pass)||saved.pass||'admin123');
    }catch(e){
      authUser=String((window.auth&&auth.user)||'admin').trim()||'admin';
      authPass=String((window.auth&&auth.pass)||'admin123');
    }
    var found=s.users.find(function(u){return norm(u&&u.username)===norm(authUser)});
    if(!found)s.users.unshift({username:authUser,password:authPass,name:'Quan tri vien',role:'Admin',active:true});
    s.users.forEach(function(u){
      if(!u.username)u.username=u.name||'user';
      if(!u.name)u.name=u.username;
      if(!u.role)u.role='Nhan vien';
      if(typeof u.active==='undefined')u.active=true;
      if(typeof u.password==='undefined')u.password='';
    });
    return s.users;
  }
  function collectUsers(){
    var map={},list=[];
    function add(u){
      if(!u||u.active===false)return;
      var username=String(u.username||u.user||u.name||'').trim();
      if(!username)return;
      var key=norm(username);
      if(map[key])return;
      map[key]=true;
      list.push({
        username:username,
        password:String(u.password||u.pass||''),
        name:String(u.name||username),
        role:String(u.role||'Nhan vien'),
        active:u.active!==false
      });
    }
    try{ensureUserShape(localState()).forEach(add)}catch(e){}
    try{var a=JSON.parse(localStorage.getItem('qlkho-auth')||'{}')||{};add({username:a.user||'admin',password:a.pass||'admin123',name:'Quan tri vien',role:'Admin',active:true})}catch(e){}
    try{if(window.auth)add({username:auth.user||'admin',password:auth.pass||'admin123',name:'Quan tri vien',role:'Admin',active:true})}catch(e){}
    add({username:'admin',password:'admin123',name:'Quan tri vien',role:'Admin',active:true});
    return list;
  }
  function findUserIn(list,user,pass){
    var q=norm(user),p=String(pass||'');
    return (list||[]).find(function(u){
      return u&&u.active!==false&&String(u.password||'')===p&&(norm(u.username)===q||norm(u.name)===q);
    })||null;
  }
  function mergeUsersIntoState(users){
    if(!users||!users.length)return;
    var s=localState();
    ensureUserShape(s);
    users.forEach(function(u){
      if(!u||!u.username)return;
      var idx=s.users.findIndex(function(x){return norm(x&&x.username)===norm(u.username)});
      if(idx<0)s.users.push(u);
      else s.users[idx]=Object.assign({},s.users[idx],u);
    });
    setLocalState(s);
  }
  function apiUrl(){
    var c=getCfg();
    if(!c.url||!c.anonKey)return '';
    return String(c.url).replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId||'qlhc-main');
  }
  function apiHeaders(){
    var key=(getCfg()||{}).anonKey||'';
    return {apikey:key,Authorization:'Bearer '+key,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=representation'};
  }
  async function pullUsersForLogin(){
    var url=apiUrl();
    if(!url||!window.fetch)return collectUsers();
    try{
      var res=await fetch(url,{method:'GET',headers:apiHeaders(),cache:'no-store'});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(rows&&rows[0]&&rows[0].data){
        var remote=rows[0].data;
        try{if(typeof migrateState==='function')remote=migrateState(remote)}catch(e){}
        var remoteUsers=Array.isArray(remote.users)?remote.users:[];
        mergeUsersIntoState(remoteUsers);
        if(!localState().users||!localState().users.length)setLocalState(remote);
      }
    }catch(e){
      try{localStorage.setItem('qlhc-login-sync-error',String(e&&e.message||e))}catch(_){}
    }
    return collectUsers();
  }
  function finishLogin(user,pass,remember){
    window.currentUser=user;
    try{isLoggedIn=true}catch(e){window.isLoggedIn=true}
    sessionStorage.setItem('qlkho-login','1');
    sessionStorage.setItem('qlkho-user',user.username);
    if(remember)localStorage.setItem('qlhc-remember-login',JSON.stringify({user:user.username,pass:pass,remember:true}));
    else{localStorage.removeItem('qlhc-remember-login');if(byId('loginPass'))byId('loginPass').value=''}
    if(byId('loginError'))byId('loginError').textContent='';
    if(typeof showLogin==='function')showLogin();
    if(typeof render==='function')render();
  }
  window.login=async function(){
    var userInput=byId('loginUser')?byId('loginUser').value.trim():'';
    var pass=byId('loginPass')?byId('loginPass').value:'';
    var remember=!!(byId('loginRemember')&&byId('loginRemember').checked);
    if(!userInput||!pass){
      if(byId('loginError'))byId('loginError').textContent='Nháº­p tÃ i khoáº£n vÃ  máº­t kháº©u.';
      return;
    }
    var btn=byId('loginBtn');
    if(btn){btn.disabled=true;btn.textContent='Äang kiá»ƒm tra...'}
    if(byId('loginError'))byId('loginError').textContent='Äang táº£i tÃ i khoáº£n online...';
    try{
      var users=await pullUsersForLogin();
      var found=findUserIn(users,userInput,pass);
      if(found){finishLogin(found,pass,remember);return}
      if(byId('loginError'))byId('loginError').textContent='Sai tÃ i khoáº£n hoáº·c máº­t kháº©u. Náº¿u vá»«a táº¡o tÃ i khoáº£n trÃªn mÃ¡y tÃ­nh, má»Ÿ web rá»“i báº¥m lÆ°u/Ä‘áº©y dá»¯ liá»‡u online má»™t láº§n.';
    }finally{
      if(btn){btn.disabled=false;btn.textContent='ÄÄƒng nháº­p'}
    }
  };
  window.bindAuth=function(){
    var saved=null;
    try{saved=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null')}catch(e){saved=null}
    if(saved&&saved.remember){
      if(byId('loginUser'))byId('loginUser').value=saved.user||'';
      if(byId('loginPass'))byId('loginPass').value=saved.pass||'';
      if(byId('loginRemember'))byId('loginRemember').checked=true;
    }
    if(byId('loginRemember'))byId('loginRemember').onchange=function(){if(!this.checked)localStorage.removeItem('qlhc-remember-login')};
    if(byId('loginBtn'))byId('loginBtn').onclick=function(){window.login()};
    if(byId('loginUser'))byId('loginUser').onkeydown=function(e){if(e.key==='Enter')window.login()};
    if(byId('loginPass'))byId('loginPass').onkeydown=function(e){if(e.key==='Enter')window.login()};
  };
  function syncAfterUserSave(){
    try{
      var s=localState();
      ensureUserShape(s);
      setLocalState(s);
      localStorage.setItem('qlhc-pending-online-sync','1');
    }catch(e){}
    setTimeout(function(){
      try{
        if(typeof window.__qlhcForceSaveAndSync==='function')window.__qlhcForceSaveAndSync(false);
        else if(typeof window.dayDuLieuOnlineSilent==='function')window.dayDuLieuOnlineSilent();
      }catch(e){}
    },500);
  }
  function wrapUserSave(){
    if(typeof window.saveUser==='function'&&!window.saveUser.__qlhcMobileLoginSync20260721){
      var oldSaveUser=window.saveUser;
      window.saveUser=function(){
        var out=oldSaveUser.apply(this,arguments);
        syncAfterUserSave();
        return out;
      };
      window.saveUser.__qlhcMobileLoginSync20260721=true;
    }
    if(typeof window.saveBaoMat==='function'&&!window.saveBaoMat.__qlhcMobileLoginSync20260721){
      var oldSaveBaoMat=window.saveBaoMat;
      window.saveBaoMat=function(){
        var out=oldSaveBaoMat.apply(this,arguments);
        syncAfterUserSave();
        return out;
      };
      window.saveBaoMat.__qlhcMobileLoginSync20260721=true;
    }
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__qlhcMobileLoginSync20260721){
    window.render=function(){
      var out=oldRender.apply(this,arguments);
      setTimeout(function(){if(window.bindAuth)bindAuth();wrapUserSave()},60);
      return out;
    };
    window.render.__qlhcMobileLoginSync20260721=true;
  }
  function boot(){try{ensureUserShape(localState());if(window.bindAuth)bindAuth();wrapUserSave()}catch(e){}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  window.addEventListener('load',function(){setTimeout(boot,250);setTimeout(boot,1200)});
})();

;(function(){
  if(window.__qlhcSavePhotoReliable20260720)return;
  window.__qlhcSavePhotoReliable20260720=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;

  function byId(id){return document.getElementById(id)}
  function getState(){return window.state||null}
  function nowIso(){return new Date().toISOString()}
  function text(v){return String(v==null?'':v)}
  function norm(v){return text(v).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function items(){var s=getState();return s&&Array.isArray(s.hang)?s.hang:[]}
  function itemInfo(code){return items().find(function(h){return h&&h[0]===code})||[]}
  function itemName(code){var h=itemInfo(code);return h[1]||code||''}
  function detailKey(row){return [row&&row[0]||'',row&&row[1]||'',row&&row[2]||'',row&&row[3]||'',row&&row[5]||0].join('|')}

  function repairText(s){
    var out=text(s);
    if(!/[ÃƒÃ‚Ã„Ã¡ÂºÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬]/.test(out))return out;
    for(var i=0;i<3;i++){
      try{
        var next=decodeURIComponent(escape(out));
        if(!next||next===out)break;
        out=next;
      }catch(e){break}
    }
    return out;
  }

  if(!window.__qlhcDialogTextRepair20260720){
    window.__qlhcDialogTextRepair20260720=true;
    var nativeAlert=window.alert,nativeConfirm=window.confirm;
    window.alert=function(msg){return nativeAlert.call(window,repairText(msg))};
    window.confirm=function(msg){return nativeConfirm.call(window,repairText(msg))};
  }

  function validItemCode(code){return !!(code&&itemInfo(code)[0])}
  function findItemFromValue(raw){
    var q=norm(raw);
    if(!q)return null;
    return items().find(function(h){
      if(!h)return false;
      return norm(h[0])===q||norm(h[1])===q||norm((h[0]||'')+' - '+(h[1]||''))===q;
    })||null;
  }

  var oldSelected=window.selectedItemCode;
  window.selectedItemCode=function(id){
    var input=byId(id);
    if(!input)return '';
    var ds=input.dataset||{};
    if(validItemCode(ds.code))return ds.code;
    var found=findItemFromValue(input.value);
    if(found){
      input.dataset.code=found[0];
      return found[0];
    }
    if(typeof oldSelected==='function'){
      try{return oldSelected(id)||''}catch(e){}
    }
    return '';
  };

  function normalizePhotoStores(s){
    if(!s)return s;
    if(!s.itemImages||typeof s.itemImages!=='object'||Array.isArray(s.itemImages))s.itemImages={};
    if(!s.itemImageNames||typeof s.itemImageNames!=='object'||Array.isArray(s.itemImageNames))s.itemImageNames={};
    delete s.itemImagesByName;
    delete s.itemImageNamesByName;

    if(!s.importDetails||typeof s.importDetails!=='object'||Array.isArray(s.importDetails))s.importDetails={};
    var rows=Array.isArray(s.bd)?s.bd:[];
    var rowMap={};
    rows.forEach(function(row){
      if(!Array.isArray(row))return;
      rowMap[detailKey(row)]=row;
    });
    Object.keys(s.importDetails).forEach(function(k){
      var d=s.importDetails[k]||{};
      var row=rowMap[k];
      if(row&&d.desc&&!row[13])row[13]=d.desc;
      if(row&&d.photo&&!row[14]){
        row[14]=d.photo;
        row[15]=d.photoName||row[15]||'Anh hang hoa';
      }
      if(row&&row[14]&&!d.photo)d.photo=row[14];
      if(row&&row[15]&&!d.photoName)d.photoName=row[15];
      s.importDetails[k]=d;
    });
    return s;
  }

  var nativeSetItem=Storage.prototype.setItem;
  if(!Storage.prototype.setItem.__qlhcSavePhotoReliable20260720){
    Storage.prototype.setItem=function(key,value){
      if(key==='qlkho-state'){
        var s=getState();
        if(s){
          normalizePhotoStores(s);
          s.__updatedAt=nowIso();
          value=JSON.stringify(s);
        }
      }
      try{
        return nativeSetItem.call(this,key,value);
      }catch(err){
        if(key==='qlkho-state'){
          window.__qlhcLastSaveError=err;
          setTimeout(function(){
            try{window.alert('Anh dang qua nang nen app chua luu duoc. Ban chup/chen anh nho hon roi bam Luu lai giup minh.')}catch(e){}
          },20);
          return false;
        }
        throw err;
      }
    };
    Storage.prototype.setItem.__qlhcSavePhotoReliable20260720=true;
  }

  function saveLocal(){
    var s=getState();
    if(!s)return false;
    normalizePhotoStores(s);
    s.__updatedAt=nowIso();
    try{
      localStorage.setItem('qlkho-state',JSON.stringify(s));
      localStorage.setItem('qlhc-pending-online-sync','1');
      return true;
    }catch(e){
      window.__qlhcLastSaveError=e;
      return false;
    }
  }

  async function pushOnline(showNotice){
    var s=getState();
    if(!s)return false;
    if(!saveLocal())return false;
    try{
      if(typeof window.__qlhcSyncPhotoPush==='function'){
        await window.__qlhcSyncPhotoPush(false);
      }else if(typeof window.dayDuLieuOnlineSilent==='function'){
        await window.dayDuLieuOnlineSilent();
      }else if(typeof window.cloudRequest==='function'&&window.SUPABASE_CONFIG){
        await window.cloudRequest('POST',{id:window.SUPABASE_CONFIG.stateId||'qlhc-main',data:s,updated_at:s.__updatedAt});
      }
      localStorage.removeItem('qlhc-pending-online-sync');
      if(showNotice)window.alert('Da luu va dong bo online.');
      return true;
    }catch(e){
      try{localStorage.setItem('qlhc-pending-online-sync','1')}catch(_){}
      if(showNotice)window.alert('Da luu tren may nay. Khi co mang on dinh app se tu dong day online lai.');
      return false;
    }
  }

  function compressPhoto(file){
    return new Promise(function(resolve,reject){
      if(!file)return resolve('');
      var reader=new FileReader();
      reader.onerror=reject;
      reader.onload=function(){
        var img=new Image();
        img.onerror=reject;
        img.onload=function(){
          var maxSide=520;
          var w=img.width,h=img.height;
          if(w>maxSide||h>maxSide){
            var r=Math.min(maxSide/w,maxSide/h);
            w=Math.max(1,Math.round(w*r));
            h=Math.max(1,Math.round(h*r));
          }
          var canvas=document.createElement('canvas');
          canvas.width=w;canvas.height=h;
          canvas.getContext('2d').drawImage(img,0,0,w,h);
          resolve(canvas.toDataURL('image/jpeg',0.48));
        };
        img.src=reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function showPhotoPreview(id,data,name){
    var box=byId(id);
    if(!box)return;
    if(!data){box.innerHTML='';return}
    box.innerHTML='<div class="item-photo-chip"><img src="'+data+'" alt="Anh"><span>'+repairText(name||'Anh da chon')+'</span></div>';
  }

  document.addEventListener('change',function(e){
    var target=e.target;
    if(!target||!target.id)return;
    if(target.id!=='nhapItemPhotoInput'&&target.id!=='nhapVariantPhotoInput')return;
    var file=target.files&&target.files[0];
    if(!file)return;
    e.stopImmediatePropagation();
    compressPhoto(file).then(function(data){
      if(target.id==='nhapItemPhotoInput'){
        window.__pendingNhapItemPhoto=data;
        window.__pendingNhapItemPhotoName=file.name||'Anh hang hoa';
        showPhotoPreview('nhapItemPhotoPreview',data,file.name);
      }else{
        window.__pendingNhapVariantPhoto=data;
        window.__pendingNhapVariantPhotoName=file.name||'Anh phan loai';
        showPhotoPreview('nhapVariantPhotoPreview',data,file.name);
      }
    }).catch(function(){
      window.alert('App chua doc duoc anh nay. Ban chon anh khac nhe.');
    });
  },true);

  function latestNhapRow(beforeLength,code){
    var s=getState();
    var rows=s&&Array.isArray(s.bd)?s.bd:[];
    for(var i=rows.length-1;i>=Math.max(0,beforeLength);i--){
      if(!code||rows[i]&&rows[i][3]===code)return rows[i];
    }
    return rows.length>beforeLength?rows[rows.length-1]:null;
  }

  function attachNhapPhoto(beforeLength,codeBefore){
    var s=getState();
    if(!s)return false;
    var input=byId('hangNhap');
    var code=codeBefore||(input&&input.dataset&&input.dataset.code)||window.selectedItemCode('hangNhap');
    if(!code)return false;
    var changed=false;
    if(window.__pendingNhapItemPhoto){
      if(!s.itemImages||typeof s.itemImages!=='object'||Array.isArray(s.itemImages))s.itemImages={};
      if(!s.itemImageNames||typeof s.itemImageNames!=='object'||Array.isArray(s.itemImageNames))s.itemImageNames={};
      s.itemImages[code]=window.__pendingNhapItemPhoto;
      s.itemImageNames[code]=window.__pendingNhapItemPhotoName||'Anh hang hoa';
      s.itemImageUpdatedAt=nowIso();
      window.__pendingNhapItemPhoto='';
      window.__pendingNhapItemPhotoName='';
      changed=true;
    }
    var descEl=byId('nhapVariantDesc');
    var desc=descEl?text(descEl.value).trim():'';
    var photo=window.__pendingNhapVariantPhoto||'';
    if(desc||photo){
      var row=latestNhapRow(beforeLength,code);
      if(row){
        row[13]=desc||row[13]||'';
        row[14]=photo||row[14]||'';
        row[15]=window.__pendingNhapVariantPhotoName||row[15]||'';
        if(!s.importDetails||typeof s.importDetails!=='object'||Array.isArray(s.importDetails))s.importDetails={};
        s.importDetails[detailKey(row)]={desc:row[13]||'',item:row[3],kho:row[2],qty:Number(row[5]||0),date:row[0],slip:row[1],ncc:row[7]||''};
        window.__pendingNhapVariantPhoto='';
        window.__pendingNhapVariantPhotoName='';
        changed=true;
      }
    }
    if(changed)normalizePhotoStores(s);
    return changed;
  }

  function wrapSave(name,after){
    var old=window[name];
    if(typeof old!=='function'||old.__qlhcSavePhotoReliable20260720)return;
    window[name]=function(){
      var s=getState();
      var beforeLength=s&&Array.isArray(s.bd)?s.bd.length:0;
      var codeBefore='';
      try{codeBefore=window.selectedItemCode('hangNhap')||''}catch(e){}
      var out=old.apply(this,arguments);
      setTimeout(function(){
        try{if(after)after(beforeLength,codeBefore)}catch(e){}
        saveLocal();
        pushOnline(false);
      },180);
      return out;
    };
    window[name].__qlhcSavePhotoReliable20260720=true;
  }

  function install(){
    wrapSave('saveNhap',attachNhapPhoto);
    ['saveXuat','saveHang','saveKho','saveNcc','saveLoai','saveNhom','saveDvt','saveThietBi','saveItHang','saveEmployee','deleteEmployee','deleteHang','deleteSlip','saveEditSlip'].forEach(function(name){
      wrapSave(name,null);
    });
    var btn=byId('luuNhap');
    if(btn&&typeof window.saveNhap==='function')btn.onclick=window.saveNhap;
    normalizePhotoStores(getState());
  }

  document.addEventListener('click',function(e){
    var el=e.target&&e.target.closest&&e.target.closest('button,.btn,input[type="button"],input[type="submit"]');
    if(!el)return;
    var label=repairText(el.textContent||el.value||'').toLowerCase();
    if(/luu|xoa|sua|tao moi|khoa|cap nhat|nhan dieu chuyen/.test(norm(label))){
      setTimeout(function(){saveLocal();pushOnline(false)},550);
    }
  },true);

  window.__qlhcForceSaveAndSync=function(showNotice){saveLocal();return pushOnline(showNotice!==false)};
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__qlhcSavePhotoReliable20260720){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,80);setTimeout(install,500);return out};
    window.render.__qlhcSavePhotoReliable20260720=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__qlhcSavePhotoReliable20260720){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,80);return out};
    window.bindForms.__qlhcSavePhotoReliable20260720=true;
  }
  window.addEventListener('focus',function(){
    try{if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushOnline(false)}catch(e){}
  });
  setTimeout(install,120);
  setTimeout(install,900);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
    navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){});
  }
})();

;(function(){
  if(window.__qlhcMobileLoginSyncFinal20260721)return;
  window.__qlhcMobileLoginSyncFinal20260721=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;

  function byId(id){return document.getElementById(id)}
  function cfg(){
    try{return typeof SUPABASE_CONFIG!=='undefined'?SUPABASE_CONFIG:(window.SUPABASE_CONFIG||{})}
    catch(e){return window.SUPABASE_CONFIG||{}}
  }
  function text(v){return String(v==null?'':v)}
  function norm(v){
    return text(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();
  }
  function getState(){
    try{
      if(typeof state!=='undefined'&&state)return state;
      return JSON.parse(localStorage.getItem('qlkho-state')||'{}')||{};
    }catch(e){return {}}
  }
  function setStateLocal(next){
    if(!next||typeof next!=='object')return;
    try{if(typeof migrateState==='function')next=migrateState(next)}catch(e){}
    try{state=next}catch(e){window.state=next}
    try{window.state=next}catch(e){}
    try{localStorage.setItem('qlkho-state',JSON.stringify(next))}catch(e){}
  }
  function ensureUsers(s){
    s=s||getState();
    if(!Array.isArray(s.users))s.users=[];
    var authUser='admin',authPass='admin123';
    try{
      var saved=JSON.parse(localStorage.getItem('qlkho-auth')||'{}')||{};
      authUser=text((window.auth&&auth.user)||saved.user||'admin').trim()||'admin';
      authPass=text((window.auth&&auth.pass)||saved.pass||'admin123');
    }catch(e){}
    if(!s.users.some(function(u){return norm(u&&u.username)===norm(authUser)})){
      s.users.unshift({username:authUser,password:authPass,name:'Quan tri vien',role:'Admin',active:true});
    }
    s.users.forEach(function(u){
      if(!u.username)u.username=u.name||'user';
      if(!u.name)u.name=u.username;
      if(!u.role)u.role='Nhan vien';
      if(typeof u.password==='undefined')u.password='';
      if(typeof u.active==='undefined')u.active=true;
    });
    return s.users;
  }
  function collectUsers(){
    var map={},out=[];
    function add(u){
      if(!u||u.active===false)return;
      var username=text(u.username||u.user||u.name).trim();
      if(!username)return;
      var key=norm(username);
      if(map[key])return;
      map[key]=true;
      out.push({
        username:username,
        password:text(u.password||u.pass),
        name:text(u.name||username),
        role:text(u.role||'Nhan vien'),
        active:u.active!==false
      });
    }
    try{ensureUsers(getState()).forEach(add)}catch(e){}
    try{var a=JSON.parse(localStorage.getItem('qlkho-auth')||'{}')||{};add({username:a.user||'admin',password:a.pass||'admin123',name:'Quan tri vien',role:'Admin',active:true})}catch(e){}
    try{if(window.auth)add({username:auth.user||'admin',password:auth.pass||'admin123',name:'Quan tri vien',role:'Admin',active:true})}catch(e){}
    add({username:'admin',password:'admin123',name:'Quan tri vien',role:'Admin',active:true});
    return out;
  }
  function findUser(list,user,pass){
    var u=norm(user),p=text(pass);
    return (list||[]).find(function(x){
      return x&&x.active!==false&&text(x.password)===p&&(norm(x.username)===u||norm(x.name)===u);
    })||null;
  }
  function mergeUsers(users){
    if(!Array.isArray(users)||!users.length)return;
    var s=getState();
    ensureUsers(s);
    users.forEach(function(u){
      if(!u||!u.username)return;
      var idx=s.users.findIndex(function(x){return norm(x&&x.username)===norm(u.username)});
      if(idx<0)s.users.push(u);
      else s.users[idx]=Object.assign({},s.users[idx],u);
    });
    setStateLocal(s);
  }
  function endpoint(){
    var c=cfg();
    if(!c.url||!c.anonKey)return '';
    return text(c.url).replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId||'qlhc-main');
  }
  function headers(){
    var key=(cfg()||{}).anonKey||'';
    return {apikey:key,Authorization:'Bearer '+key,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=representation'};
  }
  async function pullUsers(){
    var url=endpoint();
    if(!url||!window.fetch)return collectUsers();
    try{
      var res=await fetch(url,{method:'GET',headers:headers(),cache:'no-store'});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(rows&&rows[0]&&rows[0].data){
        var remote=rows[0].data;
        try{if(typeof migrateState==='function')remote=migrateState(remote)}catch(e){}
        if(Array.isArray(remote.users))mergeUsers(remote.users);
        var local=getState();
        if((!local.users||!local.users.length)&&remote&&remote.users)setStateLocal(remote);
      }
    }catch(e){
      try{localStorage.setItem('qlhc-login-sync-error',text(e&&e.message||e))}catch(_){}
    }
    return collectUsers();
  }
  function finish(found,pass,remember){
    window.currentUser=found;
    try{isLoggedIn=true}catch(e){window.isLoggedIn=true}
    sessionStorage.setItem('qlkho-login','1');
    sessionStorage.setItem('qlkho-user',found.username);
    if(remember)localStorage.setItem('qlhc-remember-login',JSON.stringify({user:found.username,pass:pass,remember:true}));
    else{
      localStorage.removeItem('qlhc-remember-login');
      if(byId('loginPass'))byId('loginPass').value='';
    }
    if(byId('loginError'))byId('loginError').textContent='';
    if(typeof showLogin==='function')showLogin();
    if(typeof render==='function')render();
  }
  window.login=async function(){
    var user=byId('loginUser')?byId('loginUser').value.trim():'';
    var pass=byId('loginPass')?byId('loginPass').value:'';
    var remember=!!(byId('loginRemember')&&byId('loginRemember').checked);
    if(!user||!pass){
      if(byId('loginError'))byId('loginError').textContent='Nhap tai khoan va mat khau.';
      return;
    }
    var btn=byId('loginBtn');
    if(btn){btn.disabled=true;btn.textContent='Dang kiem tra...'}
    if(byId('loginError'))byId('loginError').textContent='Dang tai tai khoan online...';
    try{
      var users=await pullUsers();
      var found=findUser(users,user,pass);
      if(found){finish(found,pass,remember);return}
      if(byId('loginError'))byId('loginError').textContent='Sai tai khoan hoac mat khau. Neu vua tao tai khoan tren may tinh, hay day du lieu online roi thu lai.';
    }finally{
      if(btn){btn.disabled=false;btn.textContent='Dang nhap'}
    }
  };
  window.bindAuth=function(){
    var saved=null;
    try{saved=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null')}catch(e){saved=null}
    if(saved&&saved.remember){
      if(byId('loginUser'))byId('loginUser').value=saved.user||'';
      if(byId('loginPass'))byId('loginPass').value=saved.pass||'';
      if(byId('loginRemember'))byId('loginRemember').checked=true;
    }
    if(byId('loginRemember'))byId('loginRemember').onchange=function(){if(!this.checked)localStorage.removeItem('qlhc-remember-login')};
    if(byId('loginBtn'))byId('loginBtn').onclick=function(){window.login()};
    if(byId('loginUser'))byId('loginUser').onkeydown=function(e){if(e.key==='Enter')window.login()};
    if(byId('loginPass'))byId('loginPass').onkeydown=function(e){if(e.key==='Enter')window.login()};
  };
  function syncAfterAccountSave(){
    try{
      var s=getState();
      ensureUsers(s);
      setStateLocal(s);
      localStorage.setItem('qlhc-pending-online-sync','1');
    }catch(e){}
    setTimeout(function(){
      try{
        if(typeof window.__qlhcForceSaveAndSync==='function')window.__qlhcForceSaveAndSync(false);
        else if(typeof window.dayDuLieuOnlineSilent==='function')window.dayDuLieuOnlineSilent();
      }catch(e){}
    },500);
  }
  function wrapAccountSaves(){
    if(typeof window.saveUser==='function'&&!window.saveUser.__qlhcMobileLoginSyncFinal20260721){
      var oldSaveUser=window.saveUser;
      window.saveUser=function(){
        var out=oldSaveUser.apply(this,arguments);
        syncAfterAccountSave();
        return out;
      };
      window.saveUser.__qlhcMobileLoginSyncFinal20260721=true;
    }
    if(typeof window.saveBaoMat==='function'&&!window.saveBaoMat.__qlhcMobileLoginSyncFinal20260721){
      var oldSaveBaoMat=window.saveBaoMat;
      window.saveBaoMat=function(){
        var out=oldSaveBaoMat.apply(this,arguments);
        syncAfterAccountSave();
        return out;
      };
      window.saveBaoMat.__qlhcMobileLoginSyncFinal20260721=true;
    }
  }
  var previousRender=window.render;
  if(typeof previousRender==='function'&&!previousRender.__qlhcMobileLoginSyncFinal20260721){
    window.render=function(){
      var out=previousRender.apply(this,arguments);
      setTimeout(function(){window.bindAuth();wrapAccountSaves()},80);
      return out;
    };
    window.render.__qlhcMobileLoginSyncFinal20260721=true;
  }
  function boot(){try{ensureUsers(getState());setStateLocal(getState());window.bindAuth();wrapAccountSaves()}catch(e){}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  window.addEventListener('load',function(){setTimeout(boot,250);setTimeout(boot,1200)});
})();

;(function(){
  if(window.__fontIconFullFix20260720)return;
  window.__fontIconFullFix20260720=true;
  var VERSION='20260721-mobile-login-sync-1';
  var TITLE='QU\u1EA2N L\u00CD HC';
  var SHORT='C\u00F4ng c\u1EE5 d\u1EE5ng c\u1EE5';
  var SUB='C\u00F4ng c\u1EE5 d\u1EE5ng c\u1EE5 v\u00E0 \u0111\u1ED3 d\u00F9ng v\u0103n ph\u00F2ng';
  function rescueText(text){
    if(typeof text!=='string'||!/[ÃƒÃ‚Ã„Ã¡ÂºÃ¡Â»]/.test(text))return text;
    try{
      var encoded='';
      for(var i=0;i<text.length;i++){
        var code=text.charCodeAt(i);
        if(code>255)return text;
        encoded+='%'+('0'+code.toString(16)).slice(-2);
      }
      return decodeURIComponent(encoded);
    }catch(e){return text}
  }
  function all(sel){return Array.prototype.slice.call(document.querySelectorAll(sel))}
  function one(sel){return document.querySelector(sel)}
  function ensureMeta(name,content){
    var meta=one('meta[name="'+name+'"]');
    if(!meta){meta=document.createElement('meta');meta.setAttribute('name',name);document.head.appendChild(meta)}
    meta.setAttribute('content',content);
  }
  function ensureLink(rel,href,type){
    var link=one('link[rel="'+rel+'"]');
    if(!link){link=document.createElement('link');link.setAttribute('rel',rel);document.head.appendChild(link)}
    link.setAttribute('href',href);
    if(type)link.setAttribute('type',type);
  }
  function ensureStyle(){
    if(document.getElementById('font-icon-full-fix-style-20260720'))return;
    var css='.brand-icon.icon-fallback,.mobile-logo.icon-fallback{display:inline-flex!important;align-items:center!important;justify-content:center!important;background:linear-gradient(145deg,#f7fff9,#b9ecd1)!important;color:#075b43!important;border:1px solid rgba(0,128,96,.25)!important;font-weight:900!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.85),0 8px 18px rgba(0,0,0,.18)!important}.brand-icon.icon-fallback{width:42px!important;height:42px!important;border-radius:10px!important;font-size:15px!important}.mobile-logo.icon-fallback{width:34px!important;height:34px!important;border-radius:9px!important;font-size:12px!important}';
    var style=document.createElement('style');
    style.id='font-icon-full-fix-style-20260720';
    style.textContent=css;
    document.head.appendChild(style);
  }
  function fallbackIcon(img){
    if(!img||img.dataset.iconFallbackDone)return;
    img.dataset.iconFallbackDone='1';
    var span=document.createElement('span');
    span.className=(img.className||'')+' icon-fallback';
    span.textContent='HC';
    span.setAttribute('aria-label',TITLE);
    img.replaceWith(span);
  }
  function fixIcon(img){
    if(!img||img.dataset.fontIconFixReady)return;
    img.dataset.fontIconFixReady='1';
    img.alt=TITLE;
    img.onerror=function(){
      if(!img.dataset.iconRetryDone){
        img.dataset.iconRetryDone='1';
        img.src='./app-icon-coffee.png?v='+VERSION+'&r='+Date.now();
        return;
      }
      fallbackIcon(img);
    };
    if(!img.getAttribute('src')||img.getAttribute('src').indexOf('app-icon-coffee.png')<0){
      img.src='./app-icon-coffee.png?v='+VERSION;
    }
    setTimeout(function(){if(img.complete&&img.naturalWidth===0)fallbackIcon(img)},900);
  }
  function fixText(){
    document.title=TITLE;
    ensureMeta('apple-mobile-web-app-title',TITLE);
    ensureLink('icon','./app-icon-coffee.png?v='+VERSION,'image/png');
    ensureLink('apple-touch-icon','./app-icon-coffee.png?v='+VERSION);
    all('.brand').forEach(function(el){el.innerHTML=TITLE+'<span>'+SUB+'</span>'});
    var mobileStrong=one('.mobile-title strong');
    if(mobileStrong)mobileStrong.textContent=TITLE;
    var mobileSub=one('.mobile-title span');
    if(mobileSub)mobileSub.textContent=SHORT;
    all('.brand-icon,.mobile-logo').forEach(fixIcon);
  }
  if(!window.__nativeDialogTextFix20260720){
    window.__nativeDialogTextFix20260720=true;
    var oldAlert=window.alert;
    var oldConfirm=window.confirm;
    window.alert=function(message){return oldAlert.call(window,rescueText(String(message)))};
    window.confirm=function(message){return oldConfirm.call(window,rescueText(String(message)))};
  }
  function apply(){
    ensureStyle();
    fixText();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
  setTimeout(apply,120);
  setTimeout(apply,800);
  setTimeout(apply,2200);
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__fontIconFullFix20260720){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(apply,80);return out};
    window.render.__fontIconFullFix20260720=true;
  }
})();

;(function(){
  if(window.__reliableMobileSyncAndPhotoSave20260718)return;window.__reliableMobileSyncAndPhotoSave20260718=true;
  var VERSION='20260721-mobile-login-sync-1';
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
      if(showNotice)notice('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ online');
      return true;
    }catch(e){
      try{
        localStorage.setItem('qlhc-pending-online-sync','1');
        localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e||''));
      }catch(_){}
      if(showNotice)notice('ChÃ†Â°a Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ Ã„â€˜Ã†Â°Ã¡Â»Â£c, app sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃ¡Â»Â­ lÃ¡ÂºÂ¡i');
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
      if(!rows||!rows[0]||!rows[0].data){if(showNotice)notice('ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');return false}
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
      if(showNotice)notice('Ã„ÂÃƒÂ£ tÃ¡ÂºÂ£i dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
      return true;
    }catch(e){
      if(showNotice)notice('ChÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
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
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
    s.itemImageNames[code]=photoName||'Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a';
    if(!s.itemImagesByName||typeof s.itemImagesByName!=='object'||Array.isArray(s.itemImagesByName))s.itemImagesByName={};
    if(!s.itemImageNamesByName||typeof s.itemImageNamesByName!=='object'||Array.isArray(s.itemImageNamesByName))s.itemImageNamesByName={};
    var nameKey=norm(itemName(code));
    if(nameKey){s.itemImagesByName[nameKey]=photo;s.itemImageNamesByName[nameKey]=photoName||'Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a'}
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
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng file Ã¡ÂºÂ£nh'));
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
        img.onerror=function(){reject(new Error('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh'))};
      reader.readAsDataURL(file);
    });
  }
  function renderSmallPreview(boxId,data,name){
    var box=byId(boxId);if(!box||!data)return;
    box.innerHTML='<img src="'+data+'" alt="Ã¡ÂºÂ¢nh"><span>'+(name||'Ã„ÂÃƒÂ£ chÃ¡Â»Ân Ã¡ÂºÂ£nh')+'</span>';
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
            window[cfg.name]=file.name||'Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a';
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
  if(window.__qlhcSavePhotoEndLayer20260720)return;
  window.__qlhcSavePhotoEndLayer20260720=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;

  function byId(id){return document.getElementById(id)}
  function getState(){
    try{return typeof state!=='undefined'?state:window.state}catch(e){return window.state||null}
  }
  function norm(v){
    return String(v==null?'':v)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .replace(/[\u00c3\u00c2]/g,'')
      .replace(/\s+/g,' ')
      .trim();
  }
  function esc(v){
    return String(v==null?'':v).replace(/[&<>"']/g,function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function nowIso(){return new Date().toISOString()}
  function hnorm(raw){
    try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}
    catch(e){return raw||['','','','','']}
  }
  function items(){
    var s=getState();
    return s&&Array.isArray(s.hang)?s.hang.map(hnorm):[];
  }
  function itemInfo(code){
    return items().find(function(h){return String(h[0]||'')===String(code||'')})||[code||'',code||'','','',''];
  }
  function findItem(value){
    var q=norm(value);
    if(!q)return null;
    return items().find(function(h){
      return norm(h[0])===q||norm(h[1])===q||norm((h[0]||'')+' - '+(h[1]||''))===q;
    })||null;
  }
  function selectedCodeFromInput(id){
    var input=byId(id);
    if(!input)return '';
    var data=input.dataset&&input.dataset.code;
    if(data&&itemInfo(data)[0])return data;
    var found=findItem(input.value);
    return found?found[0]:'';
  }
  var previousSelected=window.selectedItemCode;
  window.selectedItemCode=function(id){
    var direct=selectedCodeFromInput(id);
    if(direct)return direct;
    try{return typeof previousSelected==='function'?(previousSelected.apply(this,arguments)||''):''}
    catch(e){return ''}
  };

  function detailKey(row){
    if(!row)return '';
    return [row[0]||'',row[1]||'',row[2]||'',row[3]||'',row[5]||0,row[6]||0].join('|');
  }
  function compactState(s){
    if(!s)return s;
    if(!s.itemImages||typeof s.itemImages!=='object'||Array.isArray(s.itemImages))s.itemImages={};
    if(!s.itemImageNames||typeof s.itemImageNames!=='object'||Array.isArray(s.itemImageNames))s.itemImageNames={};
    if(!s.importDetails||typeof s.importDetails!=='object'||Array.isArray(s.importDetails))s.importDetails={};

    if(s.itemImagesByName&&typeof s.itemImagesByName==='object'){
      Object.keys(s.itemImagesByName).forEach(function(k){
        var img=s.itemImagesByName[k];
        if(!img)return;
        var found=items().find(function(h){return norm(h[1])===norm(k)});
        if(found&&!s.itemImages[found[0]])s.itemImages[found[0]]=img;
      });
    }
    delete s.itemImagesByName;
    delete s.itemImageNamesByName;

    if(Array.isArray(s.bd)){
      s.bd.forEach(function(row){
        var key=detailKey(row),d=s.importDetails[key];
        if(!d)return;
        if(d.desc&&!row[13])row[13]=d.desc;
        if(d.photo&&!row[14])row[14]=d.photo;
        if(d.photoName&&!row[15])row[15]=d.photoName;
      });
    }
    Object.keys(s.importDetails).forEach(function(k){
      var d=s.importDetails[k]||{};
      var row=Array.isArray(s.bd)?s.bd.find(function(r){return detailKey(r)===k}):null;
      if(row&&row[14]&&!d.photo)d.photo=row[14];
      if(row&&row[15]&&!d.photoName)d.photoName=row[15];
      s.importDetails[k]=d;
    });
    return s;
  }
  function saveLocal(show){
    var s=getState();
    if(!s)return false;
    compactState(s);
    try{if(typeof touchState==='function')touchState()}catch(e){}
    try{
      localStorage.setItem('qlkho-state',JSON.stringify(s));
      localStorage.setItem('qlhc-pwa-cache-version',VERSION);
      localStorage.setItem('qlhc-pending-online-sync','1');
      return true;
    }catch(e){
      if(show!==false)alert('Khong luu duoc du lieu tren may nay. Anh co the qua nang, hay chon anh nho hon.');
      return false;
    }
  }
  async function pushOnline(show){
    var s=getState();
    if(!s||!saveLocal(show))return false;
    try{
      if(typeof cloudRequest==='function'&&typeof SUPABASE_CONFIG!=='undefined'){
        await cloudRequest('POST',{id:SUPABASE_CONFIG.stateId,data:compactState(s),updated_at:nowIso()});
        localStorage.removeItem('qlhc-pending-online-sync');
        return true;
      }
      if(typeof window.dayDuLieuOnlineSilent==='function'){
        await window.dayDuLieuOnlineSilent();
        localStorage.removeItem('qlhc-pending-online-sync');
        return true;
      }
    }catch(e){
      if(show)alert('Da luu tren may nay, nhung chua day online duoc. Mo mang lai roi bam Day du lieu online.');
    }
    return false;
  }
  window.__qlhcForceSaveAndSync=function(show){saveLocal(show!==false);return pushOnline(show!==false)};

  function resizeImage(file){
    return new Promise(function(resolve,reject){
      if(!file)return resolve(null);
      if(!/^image\//.test(file.type||''))return reject(new Error('not-image'));
      var reader=new FileReader();
      reader.onload=function(){
        var img=new Image();
        img.onload=function(){
          var max=520,w=img.width,h=img.height,scale=Math.min(1,max/Math.max(w,h));
          var canvas=document.createElement('canvas');
          canvas.width=Math.max(1,Math.round(w*scale));
          canvas.height=Math.max(1,Math.round(h*scale));
          var ctx=canvas.getContext('2d');
          ctx.drawImage(img,0,0,canvas.width,canvas.height);
          resolve({data:canvas.toDataURL('image/jpeg',0.48),name:file.name||'anh-hang-hoa.jpg'});
        };
        img.onerror=reject;
        img.src=reader.result;
      };
      reader.onerror=reject;
      reader.readAsDataURL(file);
    });
  }
  function previewPhoto(inputId,data,name){
    var id=inputId==='nhapVariantPhotoInput'?'nhapVariantPhotoPreview':'nhapItemPhotoPreview';
    var p=byId(id);
    if(!p)return;
    p.innerHTML='<div class="photo-preview-inline"><img alt="" src="'+data+'"><span>'+esc(name||'Anh da chon')+'</span></div>';
    p.style.display='block';
  }
  document.addEventListener('change',function(e){
    var input=e.target;
    if(!input||!input.id||input.id!=='nhapItemPhotoInput'&&input.id!=='nhapVariantPhotoInput')return;
    e.stopImmediatePropagation();
    var file=input.files&&input.files[0];
    if(!file)return;
    resizeImage(file).then(function(out){
      if(!out)return;
      if(input.id==='nhapItemPhotoInput'){
        window.__pendingNhapItemPhoto=out.data;
        window.__pendingNhapItemPhotoName=out.name;
        window.__pendingNhapItemImageData=out.data;
        window.__pendingNhapItemImageName=out.name;
      }else{
        window.__pendingNhapVariantPhoto=out.data;
        window.__pendingNhapVariantPhotoName=out.name;
      }
      previewPhoto(input.id,out.data,out.name);
      saveLocal(false);
    }).catch(function(){
      alert('Anh nay khong doc duoc. Ban thu chup/chon anh khac nhe.');
    });
  },true);

  function attachNhapPhoto(row,codeBefore,descBefore,itemPhoto,itemPhotoName,variantPhoto,variantPhotoName){
    var s=getState();
    if(!s||!row)return false;
    var code=codeBefore||row[3]||selectedCodeFromInput('hangNhap');
    var changed=false;
    if(code){
      s.itemImages=s.itemImages||{};
      s.itemImageNames=s.itemImageNames||{};
      if(itemPhoto){
        s.itemImages[code]=itemPhoto;
        s.itemImageNames[code]=itemPhotoName||'anh-hang-hoa.jpg';
        changed=true;
      }else if(variantPhoto&&!s.itemImages[code]){
        s.itemImages[code]=variantPhoto;
        s.itemImageNames[code]=variantPhotoName||'anh-hang-hoa.jpg';
        changed=true;
      }
    }
    if(descBefore||variantPhoto){
      row[13]=descBefore||row[13]||'';
      if(variantPhoto)row[14]=variantPhoto;
      if(variantPhotoName)row[15]=variantPhotoName;
      s.importDetails=s.importDetails||{};
      s.importDetails[detailKey(row)]={desc:row[13]||'',item:row[3],kho:row[2],qty:Number(row[5]||0),date:row[0],slip:row[1]};
      changed=true;
    }
    window.__pendingNhapItemPhoto='';
    window.__pendingNhapItemPhotoName='';
    window.__pendingNhapItemImageData='';
    window.__pendingNhapItemImageName='';
    window.__pendingNhapVariantPhoto='';
    window.__pendingNhapVariantPhotoName='';
    return changed;
  }
  function wrapNhap(){
    var old=window.saveNhap;
    if(typeof old!=='function'||old.__qlhcSavePhotoEndLayer20260720)return;
    window.saveNhap=function(){
      var s=getState(),before=s&&Array.isArray(s.bd)?s.bd.length:0;
      var codeBefore=selectedCodeFromInput('hangNhap');
      var descBefore=(byId('nhapVariantDesc')&&byId('nhapVariantDesc').value.trim())||
        (byId('nhapThuocTinhMoi')&&byId('nhapThuocTinhMoi').value.trim())||'';
      var itemPhoto=window.__pendingNhapItemPhoto||window.__pendingNhapItemImageData||'';
      var itemPhotoName=window.__pendingNhapItemPhotoName||window.__pendingNhapItemImageName||'';
      var variantPhoto=window.__pendingNhapVariantPhoto||'';
      var variantPhotoName=window.__pendingNhapVariantPhotoName||'';
      var out=old.apply(this,arguments);
      setTimeout(function(){
        var st=getState();
        var row=st&&Array.isArray(st.bd)&&st.bd.length>before?st.bd[st.bd.length-1]:null;
        attachNhapPhoto(row,codeBefore,descBefore,itemPhoto,itemPhotoName,variantPhoto,variantPhotoName);
        saveLocal(false);
        pushOnline(false);
      },260);
      return out;
    };
    window.saveNhap.__qlhcSavePhotoEndLayer20260720=true;
  }
  function wrapSave(name){
    var old=window[name];
    if(typeof old!=='function'||old.__qlhcSavePhotoEndLayer20260720)return;
    window[name]=function(){
      var out=old.apply(this,arguments);
      setTimeout(function(){saveLocal(false);pushOnline(false)},180);
      return out;
    };
    window[name].__qlhcSavePhotoEndLayer20260720=true;
  }
  function repairDialogText(msg){
    var s=String(msg==null?'':msg);
    if(/H..ng|HÃƒ|Ã„|mÃƒ|danh m/i.test(s)&&/danh|muc|m.c|h.ng/i.test(s)){
      return 'Hang hoa nay chua co trong danh muc. Ban co muon luu hang hoa moi khong?';
    }
    if(/G..|GÃƒ|nh.p|nhap|h.ng/i.test(s)&&/hang/i.test(norm(s))){
      return 'Go ten hang hoa can nhap';
    }
    return s;
  }
  if(!window.alert.__qlhcDialogTextRepairEnd20260720){
    var oldAlert=window.alert;
    window.alert=function(msg){return oldAlert.call(window,repairDialogText(msg))};
    window.alert.__qlhcDialogTextRepairEnd20260720=true;
  }
  if(!window.confirm.__qlhcDialogTextRepairEnd20260720){
    var oldConfirm=window.confirm;
    window.confirm=function(msg){return oldConfirm.call(window,repairDialogText(msg))};
    window.confirm.__qlhcDialogTextRepairEnd20260720=true;
  }
  function install(){
    wrapNhap();
    [
      'saveXuat','saveHang','saveKho','saveNcc','saveLoai','saveNhom','saveDvt',
      'saveThietBi','saveItHang','saveEmployee','saveReceiver','saveBaoMat',
      'saveItAsset','saveItCatalog','xoaHang','deleteHang','xoaNcc','deleteNcc',
      'xoaKho','deleteKho','xoaDvt','deleteDvt','xoaNhom','deleteNhom','xoaLoai',
      'deleteLoai','deleteEmployee','deleteReceiver','deleteItAsset','deleteItCatalog'
    ].forEach(wrapSave);
    var btn=byId('luuNhap');
    if(btn&&typeof window.saveNhap==='function')btn.onclick=window.saveNhap;
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__qlhcSavePhotoEndLayer20260720){
    window.render=function(){
      var out=oldRender.apply(this,arguments);
      setTimeout(install,60);
      setTimeout(install,360);
      return out;
    };
    window.render.__qlhcSavePhotoEndLayer20260720=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__qlhcSavePhotoEndLayer20260720){
    window.bindForms=function(){
      var out=oldBind.apply(this,arguments);
      setTimeout(install,60);
      return out;
    };
    window.bindForms.__qlhcSavePhotoEndLayer20260720=true;
  }
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('#nhap,#luuNhap,#hangNhap,#nhapVariantPhotoBtn,#nhapItemPhotoBtn'))setTimeout(install,80);
  },true);
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')saveLocal(false)});
  window.addEventListener('beforeunload',function(){saveLocal(false)});
  setTimeout(function(){compactState(getState());install()},120);
  setTimeout(install,900);
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
    navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){});
  }
})();

;(function(){
  if(window.__overviewSearchTotalBadgeCompact20260718)return;
  window.__overviewSearchTotalBadgeCompact20260718=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function install(){
    var existing=document.getElementById('overview-total-badge-compact-style-20260721-mobile-login-sync-1');
    if(existing){document.head.appendChild(existing);return}
    var st=document.createElement('style');
    st.id='overview-total-badge-compact-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    h=Array.isArray(h)?h:[code,code,'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','CÃƒÂ¡i',''];
    return [h[0]||code,h[1]||code,h[2]||'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',h[3]||'CÃƒÂ¡i',h[4]||''];
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
    if(k==='stock')return 'ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t';
    if(k==='using')return 'Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
    if(k==='liquid')return 'Thanh lÃƒÂ½';
    if(k==='repair')return 'BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a';
    if(k==='lost')return 'MÃ¡ÂºÂ¥t';
    if(k==='cancel')return 'HÃ¡Â»Â§y';
    if(k==='broken')return 'HÃ¡Â»Âng';
    return String(row(raw)[6]||'ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t');
  }
  function deptOf(raw){
    var x=row(raw);
    if(statusKey(x)==='using')return String(x[8]||'').trim();
    return String(x[9]||x[5]||'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT').trim();
  }
  function userOf(raw){
    var x=row(raw);
    return statusKey(x)==='using'?String(x[5]||'').trim():'';
  }
  function tabHtml(active){
    var c={all:0,stock:0,using:0,liquid:0,repair:0,lost:0,cancel:0,broken:0};
    (state&&Array.isArray(state.thietBiIT)?state.thietBiIT:[]).forEach(function(r){var k=statusKey(r);c.all++;if(c[k]!=null)c[k]++});
    var tabs=[['all','TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£'],['stock','ChÃ†Â°a cÃ¡ÂºÂ¥p phÃƒÂ¡t'],['using','Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng'],['liquid','Thanh lÃƒÂ½'],['repair','BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a'],['lost','MÃ¡ÂºÂ¥t'],['cancel','HÃ¡Â»Â§y'],['broken','HÃ¡Â»Âng']];
    active=active||'all';
    return '<div class="it-asset-tabs" id="itAssetTabs">'+tabs.map(function(t){return '<button class="it-asset-tab '+(active===t[0]?'active':'')+'" type="button" data-kind="'+t[0]+'">'+esc(t[1])+' <span>('+money(c[t[0]]||0)+')</span></button>'}).join('')+'</div>';
  }
  function deviceRow(raw,i){
    var x=row(raw),assetCode=codeOf(x),h=itemInfo(x[2]),qty=qtyOf(x),k=statusKey(x),issued=k==='using'?qty:0,remain=k==='stock'?qty:Math.max(qty-issued,0);
    var cls=k==='stock'?'asset-stock':(k==='using'?'asset-using':(k==='broken'||k==='lost'||k==='cancel'?'asset-bad':'asset-other'));
    var user=userOf(x),dept=deptOf(x),search=[assetCode,h[0],h[1],h[2],dateVN(x[4]),statusLabel(x),user,dept,x[7]].join(' ');
    var actions='<div class="row-actions asset-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">CÃ¡ÂºÂ¥p phÃƒÂ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">VÃ¡Â»Â kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button></div>';
    return '<tr data-it-row="1" data-kind="'+k+'" data-search="'+esc(norm(search))+'" data-status="'+esc(norm(statusLabel(x)+' '+(x[6]||'')))+'" data-type="'+esc(x[2]||'')+'" data-warehouse="'+esc(norm(dept))+'">'+
      '<td data-label=""><input class="asset-check" type="checkbox" aria-label="ChÃ¡Â»Ân '+esc(assetCode)+'"></td>'+
      '<td data-label="MÃƒÂ£ TS"><button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(assetCode||'ChÃ†Â°a cÃƒÂ³ mÃƒÂ£')+'</button></td>'+
      '<td data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n">'+esc(h[1])+'</td>'+
      '<td data-label="LoÃ¡ÂºÂ¡i tÃƒÂ i sÃ¡ÂºÂ£n">'+esc(h[2]||'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT')+'</td>'+
      '<td data-label="NgÃƒÂ y mua">'+esc(dateVN(x[4]))+'</td>'+
      '<td data-label="SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng" class="num">'+money(qty)+'</td>'+
      '<td data-label="SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t" class="num">'+money(issued)+'</td>'+
      '<td data-label="SL cÃƒÂ²n lÃ¡ÂºÂ¡i" class="num">'+money(remain)+'</td>'+
      '<td data-label="TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"><span class="tag '+cls+'">'+esc(statusLabel(x))+'</span></td>'+
      '<td data-label="NguyÃƒÂªn giÃƒÂ¡" class="num">'+money(x[11]||0)+'</td>'+
      '<td data-label="NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng">'+esc(user)+'</td>'+
      '<td data-label="PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng">'+esc(dept)+'</td>'+
      '<td data-label="Thao tÃƒÂ¡c">'+actions+'</td>'+
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
    if(byId('itVisibleCount'))byId('itVisibleCount').textContent=shown+' / '+total+' tÃƒÂ i sÃ¡ÂºÂ£n';
  }
  function applyTable(){
    if(typeof current!=='undefined'&&current!=='thietbi')return;
    var tbody=byId('itDeviceRows'),panel=document.querySelector('#thietbi .it-main-panel');if(!tbody||!panel)return;
    var title=panel.querySelector('.head h2');if(title)title.textContent='Danh sÃƒÂ¡ch tÃƒÂ i sÃ¡ÂºÂ£n IT';
    var oldActive=byId('itAssetTabs')&&byId('itAssetTabs').querySelector('.it-asset-tab.active');
    oldActive=oldActive?oldActive.getAttribute('data-kind'):'all';
    if(byId('itAssetTabs'))byId('itAssetTabs').outerHTML=tabHtml(oldActive);else{var line=panel.querySelector('.it-filter-line');if(line)line.insertAdjacentHTML('beforebegin',tabHtml(oldActive))}
    var table=tbody.closest('table');if(table){table.classList.add('it-asset-table');var th=table.querySelector('thead');if(th)th.innerHTML='<tr><th><input class="asset-check" type="checkbox" aria-label="ChÃ¡Â»Ân tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£"></th><th>MÃƒÂ£ TS</th><th>TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n</th><th>LoÃ¡ÂºÂ¡i tÃƒÂ i sÃ¡ÂºÂ£n</th><th>NgÃƒÂ y mua</th><th>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng</th><th>SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t</th><th>SL cÃƒÂ²n lÃ¡ÂºÂ¡i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>NguyÃƒÂªn giÃƒÂ¡</th><th>NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>Thao tÃƒÂ¡c</th></tr>'}
    tbody.innerHTML=(state&&Array.isArray(state.thietBiIT)?state.thietBiIT:[]).map(deviceRow).join('')||'<tr><td class="empty" colspan="13">ChÃ†Â°a cÃƒÂ³ tÃƒÂ i sÃ¡ÂºÂ£n IT.</td></tr>';
    var status=byId('itStatusFilter');if(status){var keep=status.value||'';status.innerHTML='<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ trÃ¡ÂºÂ¡ng thÃƒÂ¡i</option><option>ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Thanh lÃƒÂ½</option><option>BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>MÃ¡ÂºÂ¥t</option><option>HÃ¡Â»Â§y</option><option>HÃ¡Â»Âng</option>';if(keep)status.value=keep}
    if(byId('itDeviceSearch'))byId('itDeviceSearch').placeholder='TÃƒÂ¬m MÃƒÂ£ TS, tÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n, ngÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng, phÃƒÂ²ng ban...';
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
    setLabel('maThietBi','MÃƒÂ£ TS','GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t MÃƒÂ£ TS trÃƒÂªn tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    setLabel('hangThietBiSearch','TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n','GÃƒÂµ tÃƒÂªn hoÃ¡ÂºÂ·c mÃƒÂ£ tÃƒÂ i sÃ¡ÂºÂ£n Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m');
    setLabel('hangThietBi','TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n');
    setLabel('soLuongThietBi','SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng');
    setLabel('nguonThietBi','NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p');
    setLabel('trangThaiThietBi','TrÃ¡ÂºÂ¡ng thÃƒÂ¡i');
    setLabel('nguoiDungThietBi','NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng','GÃƒÂµ tÃƒÂªn ngÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng');
    setLabel('boPhanThietBiIT','PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng','TÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân theo ngÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng');
    setLabel('ghiChuThietBi','Ghi chÃƒÂº');
    setLabel('itActionType','LoÃ¡ÂºÂ¡i thao tÃƒÂ¡c');
    if(byId('luuThietBi'))byId('luuThietBi').textContent='LÃ†Â°u tÃƒÂ i sÃ¡ÂºÂ£n';
    if(byId('scanSerialBtn'))byId('scanSerialBtn').textContent='QuÃƒÂ©t mÃƒÂ£';
    var formTitle=document.querySelector('#thietbi #itActionPanel>.head h2,#thietbi .it-form-panel>.head h2');
    if(formTitle){var t=norm(formTitle.textContent);if(t.indexOf('cap phat')>=0)formTitle.textContent='CÃ¡ÂºÂ¥p phÃƒÂ¡t tÃƒÂ i sÃ¡ÂºÂ£n IT';else if(t.indexOf('chuyen')>=0)formTitle.textContent='ChuyÃ¡Â»Æ’n kho tÃƒÂ i sÃ¡ÂºÂ£n IT';else if(t.indexOf('xuat')>=0)formTitle.textContent='XuÃ¡ÂºÂ¥t tÃƒÂ i sÃ¡ÂºÂ£n IT';else if(t.indexOf('nhap')>=0)formTitle.textContent='NhÃ¡ÂºÂ­p tÃƒÂ i sÃ¡ÂºÂ£n IT'}
  }
  function installStyle(){
    if(byId('it-asset-naming-final-style-20260718'))return;
    var st=document.createElement('style');st.id='it-asset-naming-final-style-20260718';
    st.textContent='#thietbi .it-asset-table th,#thietbi .it-asset-table td{white-space:nowrap}#thietbi .it-asset-table td[data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n"],#thietbi .it-asset-table td[data-label="PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng"]{white-space:normal}@media(max-width:900px){#thietbi #itDeviceRows td[data-label="MÃƒÂ£ TS"],#thietbi #itDeviceRows td[data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n"],#thietbi #itDeviceRows td[data-label="TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"]{font-weight:750!important}}';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    var base=['ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','Laptop','MÃƒÂ¡y tÃƒÂ­nh','MÃƒÂ n hÃƒÂ¬nh','MÃƒÂ¡y in','Camera','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ mÃ¡ÂºÂ¡ng','KhÃƒÂ¡c'];
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
      input.placeholder='VD: MÃƒÂ n hÃƒÂ¬nh, mÃƒÂ¡y in, laptop';
      input.setAttribute('list','itCatalogGroupDatalist');
      old.parentNode.replaceChild(input,old);
      old=input;
    }else{
      old.placeholder='VD: MÃƒÂ n hÃƒÂ¬nh, mÃƒÂ¡y in, laptop';
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
      if(t.indexOf('them / sua')>=0&&(t.indexOf('nhom thiet bi')>=0||t.indexOf('loai thiet bi')>=0||t.indexOf('mat hang it')>=0))h.textContent='ThÃƒÂªm / sÃ¡Â»Â­a thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(t.indexOf('danh muc nhom thiet bi it')>=0||t.indexOf('danh muc mat hang it')>=0)h.textContent='Danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
    });
  }
  function updateForm(){
    var code=byId('itHangCode'),name=byId('itHangName'),desc=byId('itHangDesc');
    if(!code||!name)return;
    var form=code.closest&&code.closest('.form');
    if(form)form.classList.add('it-catalog-three-fields');
    setLabel('itHangCode','MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    setLabel('itHangName','TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    ensureGroupInput();
    setLabel('itHangDvt','NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    if(code){
      code.placeholder='GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      code.readOnly=false;
    }
    if(name)name.placeholder='VD: MÃƒÂ n hÃƒÂ¬nh Dell E2223HN';
    if(desc){
      var label=desc.closest&&desc.closest('label');
      if(label)label.classList.add('it-catalog-desc-hidden');
    }
    var save=byId('saveItHang'),fresh=byId('newItHang');
    if(save)save.textContent='LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
    if(fresh)fresh.textContent='TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi';
  }
  function updateCatalogTable(){
    var tables=[].slice.call(document.querySelectorAll('#thietbi .it-catalog-wrap table,#thietbi .it-catalog-inside table'));
    tables.forEach(function(table){
      var heads=table.querySelectorAll('thead th');
      if(heads[0])heads[0].textContent='MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(heads[1])heads[1].textContent='TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(heads[2])heads[2].textContent='NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(heads[3])heads[3].textContent='MÃƒÂ´ tÃ¡ÂºÂ£';
      [].slice.call(table.querySelectorAll('tbody tr')).forEach(function(row){
        var cells=row.children;
        if(cells[2]&&unitLike(cells[2].textContent))cells[2].textContent='ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
      });
    });
  }
  function wrapSave(){
    if(typeof window.saveItHang==='function'&&!window.saveItHang.__itCatalogThreeFields20260718){
      var oldSave=window.saveItHang;
      window.saveItHang=function(){
        var group=byId('itHangDvt');
        if(group&&!String(group.value||'').trim())group.value='ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
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
  var VERSION='20260721-mobile-login-sync-1',syncTimer=null,quietLocal=false;
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
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
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
  var VERSION='20260721-mobile-login-sync-1',timer=null,applying=false;
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
      if(show)alert('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ online');
      return true;
    }catch(e){
      try{localStorage.setItem('qlhc-pending-online-sync','1');localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e||''))}catch(_){}
      if(show)alert('ChÃ†Â°a Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ Ã„â€˜Ã†Â°Ã¡Â»Â£c, app sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃ¡Â»Â­ lÃ¡ÂºÂ¡i khi cÃƒÂ³ mÃ¡ÂºÂ¡ng');
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
      if(!rows||!rows[0]||!rows[0].data){if(show)alert('ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');return false}
      var remoteStamp=Date.parse(rows[0].updated_at||(rows[0].data&&rows[0].data.__updatedAt)||'')||0;
      var localStamp=Date.parse((getState()||{}).__updatedAt||'')||Number(localStorage.getItem('qlhc-last-local-change')||0)||0;
      if(remoteStamp&&localStamp&&remoteStamp+500<localStamp)return false;
      applying=true;
      try{state=typeof migrateState==='function'?migrateState(rows[0].data):rows[0].data;window.state=state;saveLocal();localStorage.setItem('qlhc-last-remote-stamp',String(remoteStamp||Date.now()))}finally{applying=false}
      if(typeof render==='function')render();
      if(show)alert('Ã„ÂÃƒÂ£ tÃ¡ÂºÂ£i dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
      return true;
    }catch(e){if(show)alert('ChÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');return false}
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
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function hnorm(h){try{return typeof normalizeHang==='function'?normalizeHang(h):(h||['','','','',''])}catch(e){return h||['','','','','']}}
  function findItem(v){var q=norm(v),s=getState(),arr=s&&Array.isArray(s.hang)?s.hang:[];return arr.map(hnorm).find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||null}
  function currentNhapCode(){var inp=document.getElementById('hangNhap'),v=inp?inp.value:'';var h=findItem(v);return h?h[0]:String(v||'').split(' - ')[0].trim()}
  function itemName(code){var h=findItem(code),s=getState(),arr=s&&Array.isArray(s.hang)?s.hang:[];if(h)return h[1]||code;h=arr.map(hnorm).find(function(x){return x[0]===code});return h?h[1]||code:code}
  function setPhoto(code,photo,name){var s=getState();if(!s||!code||!photo)return false;s.itemImages=s.itemImages&&typeof s.itemImages==='object'&&!Array.isArray(s.itemImages)?s.itemImages:{};s.itemImageNames=s.itemImageNames&&typeof s.itemImageNames==='object'&&!Array.isArray(s.itemImageNames)?s.itemImageNames:{};s.itemImages[code]=photo;s.itemImageNames[code]=name||'Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a';s.itemImagesByName=s.itemImagesByName&&typeof s.itemImagesByName==='object'&&!Array.isArray(s.itemImagesByName)?s.itemImagesByName:{};s.itemImagesByName[norm(itemName(code))]=photo;s.itemImageUpdatedAt=new Date().toISOString();return true}
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
  function money(v){var n=Number(v||0);return isFinite(n)?n.toLocaleString('vi-VN'):String(v||'0')}
  function tnorm(raw){raw=Array.isArray(raw)?raw.slice():[];while(raw.length<12)raw.push('');return raw}
  function codeOf(x){x=tnorm(x);return String(x[0]||x[1]||'').trim()}
  function niceKho(v){v=String(v||'').trim();return norm(v).indexOf('kho thiet bi it')>=0?'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT':v}
  function dateVN(v){v=String(v||'').trim();var m=v.match(/^(\d{4})-(\d{2})-(\d{2})$/);return m?m[3]+'/'+m[2]+'/'+m[1]:v}
  function itemInfo(code){
    var found=null;(state.hang||[]).some(function(r){if(r&&String(r[0]||'')===String(code||'')){found=r;return true}return false});
    found=Array.isArray(found)?found:[code,code,'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','CÃƒÂ¡i',''];
    return [found[0]||code,found[1]||code,found[2]||'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',found[3]||'CÃƒÂ¡i',found[4]||''];
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
    if(k==='stock')return 'ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t';
    if(k==='using')return 'Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
    if(k==='repair')return 'BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a';
    if(k==='liquid')return 'Thanh lÃƒÂ½';
    if(k==='lost')return 'MÃ¡ÂºÂ¥t';
    if(k==='cancel')return 'HÃ¡Â»Â§y';
    if(k==='broken')return 'HÃ¡Â»Âng';
    return String(tnorm(x)[6]||'ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t');
  }
  function holderText(x){x=tnorm(x);return statusKey(x)==='using'?String(x[5]||'').trim():''}
  function deptText(x){
    x=tnorm(x);
    if(statusKey(x)==='using')return String(x[8]||'').trim();
    return niceKho(x[9]||x[5]||'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT');
  }
  function rowHtml(raw,i){
    var x=tnorm(raw),code=codeOf(x),h=itemInfo(x[2]),qty=qtyOf(x),kind=statusKey(x);
    var issued=kind==='using'?qty:0,remain=kind==='stock'?qty:0;
    var tagClass=kind==='stock'?'asset-stock':(kind==='using'?'asset-using':(kind==='broken'||kind==='lost'||kind==='cancel'?'asset-bad':'asset-other'));
    var label=statusLabel(x),user=holderText(x),dept=deptText(x);
    var search=[code,h[0],h[1],h[2],dateVN(x[4]),label,user,dept,x[7]].join(' ');
    var actions='<div class="row-actions asset-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">CÃ¡ÂºÂ¥p phÃƒÂ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">VÃ¡Â»Â kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button></div>';
    return '<tr data-it-row="1" data-kind="'+kind+'" data-search="'+esc(norm(search))+'" data-status="'+esc(norm((x[6]||'')+' '+label))+'" data-type="'+esc(x[2]||'')+'" data-warehouse="'+esc(norm(dept))+'">'+
      '<td data-label=""><input class="asset-check" type="checkbox" aria-label="ChÃ¡Â»Ân '+esc(code)+'"></td>'+
      '<td data-label="MÃƒÂ£ TS"><button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(code||'ChÃ†Â°a cÃƒÂ³ mÃƒÂ£')+'</button></td>'+
      '<td data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n">'+esc(h[1])+'</td>'+
      '<td data-label="LoÃ¡ÂºÂ¡i tÃƒÂ i sÃ¡ÂºÂ£n">'+esc(h[2]||'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT')+'</td>'+
      '<td data-label="NgÃƒÂ y mua">'+esc(dateVN(x[4]))+'</td>'+
      '<td data-label="SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng" class="num">'+money(qty)+'</td>'+
      '<td data-label="SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t" class="num">'+money(issued)+'</td>'+
      '<td data-label="SL cÃƒÂ²n lÃ¡ÂºÂ¡i" class="num">'+money(remain)+'</td>'+
      '<td data-label="TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"><span class="tag '+tagClass+'">'+esc(label)+'</span></td>'+
      '<td data-label="NguyÃƒÂªn giÃƒÂ¡" class="num">'+money(x[11]||0)+'</td>'+
      '<td data-label="NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng">'+esc(user)+'</td>'+
      '<td data-label="PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng">'+esc(dept)+'</td>'+
      '<td data-label="Thao tÃƒÂ¡c">'+actions+'</td>'+
    '</tr>';
  }
  function renderTabs(active){
    var c={all:0,stock:0,using:0,liquid:0,repair:0,lost:0,cancel:0,broken:0};
    (state.thietBiIT||[]).forEach(function(r){var k=statusKey(r);c.all++;if(c[k]!=null)c[k]++});
    var tabs=[['all','TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£'],['stock','ChÃ†Â°a cÃ¡ÂºÂ¥p phÃƒÂ¡t'],['using','Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng'],['liquid','Thanh lÃƒÂ½'],['repair','BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a'],['lost','MÃ¡ÂºÂ¥t'],['cancel','HÃ¡Â»Â§y'],['broken','HÃ¡Â»Âng']];
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
    if(byId('itVisibleCount'))byId('itVisibleCount').textContent=shown+' / '+total+' tÃƒÂ i sÃ¡ÂºÂ£n';
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
    if(old.indexOf('dang su dung')>=0||old.indexOf('cap phat')>=0)keep='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
    else if(old.indexOf('thanh ly')>=0)keep='Thanh lÃƒÂ½';
    else if(old.indexOf('bao tri')>=0||old.indexOf('sua chua')>=0)keep='BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a';
    else if(old.indexOf('mat')>=0||old.indexOf('that lac')>=0)keep='MÃ¡ÂºÂ¥t';
    else if(old.indexOf('huy')>=0)keep='HÃ¡Â»Â§y';
    else if(old.indexOf('hong')>=0)keep='HÃ¡Â»Âng';
    sel.innerHTML='<option value="Trong kho">ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Thanh lÃƒÂ½</option><option>BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>MÃ¡ÂºÂ¥t</option><option>HÃ¡Â»Â§y</option><option>HÃ¡Â»Âng</option>';
    sel.value=keep;
  }
  function relabelForm(){
    setLabel(byId('maThietBi'),'MÃƒÂ£ TS');if(byId('maThietBi'))byId('maThietBi').placeholder='GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t mÃƒÂ£ TS trÃƒÂªn tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
    setLabel(byId('hangThietBiSearch')||byId('hangThietBi'),'TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n');if(byId('hangThietBiSearch'))byId('hangThietBiSearch').placeholder='GÃƒÂµ tÃƒÂªn hoÃ¡ÂºÂ·c mÃƒÂ£ tÃƒÂ i sÃ¡ÂºÂ£n Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m';
    setLabel(byId('soLuongThietBi'),'SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng');
    setLabel(byId('nguonThietBi'),'NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p');
    setLabel(byId('trangThaiThietBi'),'TrÃ¡ÂºÂ¡ng thÃƒÂ¡i');
    setLabel(byId('nguoiDungThietBi'),'NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng');if(byId('nguoiDungThietBi'))byId('nguoiDungThietBi').placeholder='GÃƒÂµ tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn';
    setLabel(byId('boPhanThietBiIT'),'PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng');
    setLabel(byId('ghiChuThietBi'),'Ghi chÃƒÂº');
    if(byId('scanSerialBtn'))byId('scanSerialBtn').textContent='QuÃƒÂ©t mÃƒÂ£';
    if(byId('luuThietBi'))byId('luuThietBi').textContent='LÃ†Â°u tÃƒÂ i sÃ¡ÂºÂ£n';
    var title=document.querySelector('#thietbi .it-form-panel>.head h2,#thietbi #itActionPanel>.head h2');
    if(title){
      var t=norm(title.textContent);
      if(t.indexOf('nhap')>=0)title.textContent='NhÃ¡ÂºÂ­p tÃƒÂ i sÃ¡ÂºÂ£n IT';
      else if(t.indexOf('xuat')>=0)title.textContent='XuÃ¡ÂºÂ¥t tÃƒÂ i sÃ¡ÂºÂ£n IT';
      else if(t.indexOf('cap phat')>=0)title.textContent='CÃ¡ÂºÂ¥p phÃƒÂ¡t tÃƒÂ i sÃ¡ÂºÂ£n IT';
    }
  }
  function syncStatusFilter(){
    var sel=byId('itStatusFilter');if(!sel)return;
    var keep=sel.value||'';
    sel.innerHTML='<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ trÃ¡ÂºÂ¡ng thÃƒÂ¡i</option><option>ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Thanh lÃƒÂ½</option><option>BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>MÃ¡ÂºÂ¥t</option><option>HÃ¡Â»Â§y</option><option>HÃ¡Â»Âng</option>';
    if(keep)sel.value=keep;
  }
  function renderAssetList(){
    var tbody=byId('itDeviceRows'),panel=document.querySelector('#thietbi .it-main-panel');if(!tbody||!panel)return;
    var title=panel.querySelector('.head h2');if(title)title.textContent='Danh sÃƒÂ¡ch tÃƒÂ i sÃ¡ÂºÂ£n IT';
    var active=byId('itAssetTabs')&&byId('itAssetTabs').querySelector('.it-asset-tab.active');
    active=active?active.getAttribute('data-kind'):'all';
    if(byId('itAssetTabs'))byId('itAssetTabs').outerHTML=renderTabs(active);else{var filter=panel.querySelector('.it-filter-line');if(filter)filter.insertAdjacentHTML('beforebegin',renderTabs(active))}
    var table=tbody.closest('table');if(table){table.classList.add('it-asset-table');var thead=table.querySelector('thead');if(thead)thead.innerHTML='<tr><th><input class="asset-check" type="checkbox" aria-label="ChÃ¡Â»Ân tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£"></th><th>MÃƒÂ£ TS</th><th>TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n</th><th>LoÃ¡ÂºÂ¡i tÃƒÂ i sÃ¡ÂºÂ£n</th><th>NgÃƒÂ y mua</th><th>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng</th><th>SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t</th><th>SL cÃƒÂ²n lÃ¡ÂºÂ¡i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>NguyÃƒÂªn giÃƒÂ¡</th><th>NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>Thao tÃƒÂ¡c</th></tr>'}
    tbody.innerHTML=(state.thietBiIT||[]).map(rowHtml).join('')||'<tr><td class="empty" colspan="13">ChÃ†Â°a cÃƒÂ³ tÃƒÂ i sÃ¡ÂºÂ£n IT.</td></tr>';
    if(byId('itDeviceSearch'))byId('itDeviceSearch').placeholder='TÃƒÂ¬m mÃƒÂ£ TS, tÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n, ngÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng, phÃƒÂ²ng ban...';
    syncStatusFilter();
    var tabs=byId('itAssetTabs');if(tabs&&!tabs.__itTermBind){tabs.__itTermBind=true;tabs.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.it-asset-tab');if(!b)return;[].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.remove('active')});b.classList.add('active');filterRows()})}
    ['itDeviceSearch','itTypeFilter','itStatusFilter','itWarehouseFilter'].forEach(function(id){var el=byId(id);if(el&&!el.__itTermFilter){el.__itTermFilter=true;el.addEventListener('input',filterRows);el.addEventListener('change',filterRows)}});
    if(byId('itClearSearch'))byId('itClearSearch').onclick=function(e){if(e)e.preventDefault();['itDeviceSearch','itTypeFilter','itStatusFilter','itWarehouseFilter'].forEach(function(id){var el=byId(id);if(el)el.value=''});var tabs=byId('itAssetTabs');if(tabs)[].slice.call(tabs.querySelectorAll('.it-asset-tab')).forEach(function(x){x.classList.toggle('active',x.getAttribute('data-kind')==='all')});filterRows()};
    filterRows();
  }
  function installStyle(){
    if(byId('it-asset-terminology-sync-style-20260718'))return;
    var st=document.createElement('style');st.id='it-asset-terminology-sync-style-20260718';
    st.textContent='#thietbi .it-asset-table th,#thietbi .it-asset-table td{white-space:nowrap}#thietbi .it-asset-table td[data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n"],#thietbi .it-asset-table td[data-label="PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng"]{white-space:normal}@media(max-width:900px){#thietbi #itDeviceRows td[data-label="MÃƒÂ£ TS"],#thietbi #itDeviceRows td[data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n"],#thietbi #itDeviceRows td[data-label="TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"]{font-weight:750!important}}';
    document.head.appendChild(st);
  }
  function wrapSave(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itAssetTerminologySync20260718){
      var old=window.saveThietBi;
      window.saveThietBi=function(){
        var code=byId('maThietBi')?byId('maThietBi').value.trim():'';
        if(!code){alert('NhÃ¡ÂºÂ­p MÃƒÂ£ TS');return}
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function isItRow(raw){return norm(hnorm(raw)[2]).indexOf('thiet bi it')>=0}
  function nextItCode(){return typeof nextItemCode==='function'?nextItemCode('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT'):'TB'+String(((state.hang||[]).filter(isItRow).length||0)+1).padStart(3,'0')}
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
    if(!('BarcodeDetector' in window)||!window.createImageBitmap){alert('MÃƒÂ¡y nÃƒÂ y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT vÃƒÂ o ÃƒÂ´ MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.');return}
    window.createImageBitmap(file).then(function(bitmap){return new BarcodeDetector({formats:detectorFormats()}).detect(bitmap)}).then(function(codes){
      var found=codes&&codes[0]&&(codes[0].rawValue||codes[0].displayValue);
      if(found)setCatalogCode(found);else alert('ChÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£ trong Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n thÃ¡Â»Â­ chÃ¡Â»Â¥p rÃƒÂµ hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay mÃƒÂ£.');
    }).catch(function(){alert('ChÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n thÃ¡Â»Â­ chÃ¡Â»Â¥p rÃƒÂµ hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay mÃƒÂ£.')});
  }
  function closeScan(){
    var overlay=byId('itCatalogCodeScanOverlay');
    if(overlay&&overlay.__stream){try{overlay.__stream.getTracks().forEach(function(t){t.stop()})}catch(e){}}
    if(overlay)overlay.remove();
  }
  function openScan(){
    if(!('BarcodeDetector' in window)||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
      var f=byId('itHangCodePhotoInput');if(f)f.click();else alert('MÃƒÂ¡y nÃƒÂ y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p. BÃ¡ÂºÂ¡n cÃƒÂ³ thÃ¡Â»Æ’ nhÃ¡ÂºÂ­p tay mÃƒÂ£.');
      return;
    }
    closeScan();
    var overlay=document.createElement('div');
    overlay.id='itCatalogCodeScanOverlay';
    overlay.innerHTML='<div class="it-catalog-code-scan-card"><div class="it-catalog-code-scan-head"><strong>QuÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</strong><button class="btn small" type="button" id="itCatalogCodeScanClose">Ã„ÂÃƒÂ³ng</button></div><video id="itCatalogCodeScanVideo" playsinline muted></video><p>Ã„ÂÃ†Â°a mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR vÃƒÂ o giÃ¡Â»Â¯a khung. NÃ¡ÂºÂ¿u khÃƒÂ´ng quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c, bÃ¡ÂºÂ¥m ChÃ¡Â»Ân tÃ¡Â»â€¡p hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay.</p></div>';
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
    }).catch(function(){stop();var f=byId('itHangCodePhotoInput');if(f)f.click();else alert('KhÃƒÂ´ng mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c camera. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT giÃƒÂºp mÃƒÂ¬nh.')});
  }
  function installTools(){
    if(!isIt())return;
    var input=byId('itHangCode');if(!input)return;
    input.removeAttribute('readonly');input.disabled=false;input.readOnly=false;
    input.placeholder='GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
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
    if(!scan){scan=document.createElement('button');scan.id='itHangCodeScanBtn';scan.type='button';scan.className='btn primary';scan.textContent='QuÃƒÂ©t mÃƒÂ£';line.appendChild(scan)}
    var pick=byId('itHangCodeFileBtn');
    if(!pick){pick=document.createElement('button');pick.id='itHangCodeFileBtn';pick.type='button';pick.className='btn';pick.textContent='ChÃ¡Â»Ân tÃ¡Â»â€¡p';line.appendChild(pick)}
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
    if(!adminOk())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.');
    var edit=byId('editItHangIndex'),idx=edit?String(edit.value||'').trim():'';
    var code=(byId('itHangCode')&&byId('itHangCode').value.trim())||'';
    var name=(byId('itHangName')&&byId('itHangName').value.trim())||'';
    var dvt=(byId('itHangDvt')&&byId('itHangDvt').value)||'CÃƒÂ¡i';
    var desc=(byId('itHangDesc')&&byId('itHangDesc').value.trim())||'';
    if(!code){alert('NhÃ¡ÂºÂ­p mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');var c=byId('itHangCode');if(c)c.focus();return}
    if(!name){alert('NhÃ¡ÂºÂ­p tÃƒÂªn loÃ¡ÂºÂ¡i thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');var n=byId('itHangName');if(n)n.focus();return}
    var oldCode=idx!==''&&state.hang&&state.hang[Number(idx)]?hnorm(state.hang[Number(idx)])[0]:'';
    var dup=(state.hang||[]).some(function(raw,i){return String(i)!==String(idx)&&hnorm(raw)[0]===code});
    if(dup){alert('MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i. BÃ¡ÂºÂ¡n chÃ¡Â»Ân mÃƒÂ£ khÃƒÂ¡c hoÃ¡ÂºÂ·c bÃ¡ÂºÂ¥m SÃ¡Â»Â­a Ã„â€˜ÃƒÂºng dÃƒÂ²ng cÃ¡ÂºÂ§n sÃ¡Â»Â­a.');return}
    var row=[code,name,'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',dvt,desc];
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
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
      alert('MÃƒÂ¡y nÃƒÂ y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n cÃƒÂ³ thÃ¡Â»Æ’ nhÃ¡ÂºÂ­p tay mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT vÃƒÂ o ÃƒÂ´ MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.');
      return;
    }
    window.createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:detectorFormats()});
      return detector.detect(bitmap);
    }).then(function(codes){
      var found=codes&&codes[0]&&(codes[0].rawValue||codes[0].displayValue);
      if(found)setCodeValue(found);
      else alert('ChÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£ trong Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n thÃ¡Â»Â­ chÃ¡Â»Â¥p rÃƒÂµ hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay mÃƒÂ£.');
    }).catch(function(){
      alert('ChÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n thÃ¡Â»Â­ chÃ¡Â»Â¥p rÃƒÂµ hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay mÃƒÂ£.');
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
      else alert('MÃƒÂ¡y nÃƒÂ y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p. BÃ¡ÂºÂ¡n cÃƒÂ³ thÃ¡Â»Æ’ nhÃ¡ÂºÂ­p tay mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.');
      return;
    }
    closeOverlay();
    var overlay=document.createElement('div');
    overlay.id='itCatalogScanOverlay';
    overlay.innerHTML='<div class="it-catalog-scan-card"><div class="it-catalog-scan-head"><strong>QuÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</strong><button class="btn small" type="button" id="itCatalogScanClose">Ã„ÂÃƒÂ³ng</button></div><video id="itCatalogScanVideo" playsinline muted></video><p>Ã„ÂÃ†Â°a mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR vÃƒÂ o giÃ¡Â»Â¯a khung. NÃ¡ÂºÂ¿u khÃƒÂ´ng quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c, bÃ¡ÂºÂ¥m ChÃ¡Â»Ân tÃ¡Â»â€¡p hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay.</p></div>';
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
      else alert('KhÃƒÂ´ng mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c camera. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT giÃƒÂºp mÃƒÂ¬nh.');
    });
  }
  function installTools(){
    if(!isIt())return;
    var input=byId('itHangCode');
    if(!input)return;
    input.removeAttribute('readonly');
    input.disabled=false;
    input.placeholder='GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
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
      scan.textContent='QuÃƒÂ©t mÃƒÂ£';
      line.appendChild(scan);
    }
    if(!byId('itHangCodeFileBtn')){
      var pick=document.createElement('button');
      pick.id='itHangCodeFileBtn';
      pick.type='button';
      pick.className='btn it-hang-code-file';
      pick.textContent='ChÃ¡Â»Ân tÃ¡Â»â€¡p';
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
        alert('NhÃ¡ÂºÂ­p mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');
        if(input)input.focus();
        return;
      }
      var dup=(state.hang||[]).some(function(raw,i){return i!==idx&&hnorm(raw)[0]===code});
      if(dup){
        alert('MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i. BÃ¡ÂºÂ¡n chÃ¡Â»Ân mÃƒÂ£ khÃƒÂ¡c hoÃ¡ÂºÂ·c bÃ¡ÂºÂ¥m SÃ¡Â»Â­a Ã„â€˜ÃƒÂºng dÃƒÂ²ng cÃ¡ÂºÂ§n sÃ¡Â»Â­a.');
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
    if(byId('it-catalog-code-scan-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');
    st.id='it-catalog-code-scan-style-20260721-mobile-login-sync-1';
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
  var STYLE_ID='it-catalog-hide-duplicate-title-20260721-mobile-login-sync-1';
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
    try{await dayDuLieuOnline();toast('Ã„ÂÃƒÂ£ tÃ¡Â»Â± Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ online')}catch(e){console.warn(e);toast('ChÃ†Â°a Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ Ã„â€˜Ã†Â°Ã¡Â»Â£c online')}
    syncing=false;
  }
  async function autoPullFirst(){
    if(sessionStorage.getItem('qlhc-online-pulled')==='1')return;
    if(!window.taiDuLieuOnline)return;
    sessionStorage.setItem('qlhc-online-pulled','1');
    try{await taiDuLieuOnline();toast('Ã„ÂÃƒÂ£ tÃ¡ÂºÂ£i dÃ¡Â»Â¯ liÃ¡Â»â€¡u online')}catch(e){console.warn(e)}
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

window.APP_VERSION='20260721-mobile-login-sync-1';
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
        box.innerHTML='<span>CÃƒÂ³ bÃ¡ÂºÂ£n mÃ¡Â»â€ºi cÃ¡Â»Â§a app</span><button type="button" style="border:0;border-radius:8px;background:#fff;color:#0f7d5c;font-weight:700;padding:8px 10px">CÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t</button>';
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
      return '<tr>'+td('SÃ¡Â»â€˜ seri',serial)+td('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',h[1])+td('NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p',x[3])+td('NgÃƒÂ y nhÃ¡ÂºÂ­p',x[4])+td('Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i',x[5])+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag">'+x[6]+'</span>')+td('Ghi chÃƒÂº',x[7]||'')+td('', '<button class="btn small" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'
    }).join('')||'<tr><td class="empty" colspan="8">ChÃ†Â°a cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo mÃƒÂ£ seri.</td></tr>';
    return shell('thietbi','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri','Theo dÃƒÂµi tÃ¡Â»Â«ng thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ bÃ¡ÂºÂ±ng sÃ¡Â»â€˜ seri: nguÃ¡Â»â€œn nhÃ¡ÂºÂ­p, ngÃƒÂ y nhÃ¡ÂºÂ­p, ngÃ†Â°Ã¡Â»Âi Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng vÃƒÂ  trÃ¡ÂºÂ¡ng thÃƒÂ¡i.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="wrap"><table><thead><tr><th>SÃ¡Â»â€˜ seri</th><th>ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p</th><th>NgÃƒÂ y nhÃ¡ÂºÂ­p</th><th>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Ghi chÃƒÂº</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label class="full">SÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹<input id="maThietBi" placeholder="NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ seri trÃƒÂªn mÃƒÂ¡y/tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹"></label><input id="seriThietBi" type="hidden"><label>MÃ¡ÂºÂ·t hÃƒÂ ng IT<select id="hangThietBi"></select></label><label>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p<select id="nguonThietBi"></select></label><label>NgÃƒÂ y nhÃ¡ÂºÂ­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÃ†Â°Ã¡Â»Âi Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng<input id="nguoiDungThietBi" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban/kho"></label><label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Ã„Âang sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>Thanh lÃƒÂ½</option><option>ThÃ¡ÂºÂ¥t lÃ¡ÂºÂ¡c</option></select></label><label class="full">Ghi chÃƒÂº<input id="ghiChuThietBi" placeholder="CÃ¡ÂºÂ¥u hÃƒÂ¬nh, tÃƒÂ¬nh trÃ¡ÂºÂ¡ng, chÃ¡Â»Â©ng tÃ¡Â»Â«..."></label><button class="btn primary" id="luuThietBi">LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</button><button class="btn" id="huyThietBi">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>')
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
    if(!serial)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    var row=[serial,serial,el('hangThietBi').value,el('nguonThietBi').value,el('ngayThietBi').value,el('nguoiDungThietBi').value||'Trong kho',el('trangThaiThietBi').value,el('ghiChuThietBi').value];
    var i=el('editThietBi').value;
    var exists=state.thietBiIT.some(function(raw,idx){var x=normalizeThietBi(raw);return String(x[0]||'')===serial||String(x[1]||'')===serial ? idx!==Number(i) : false});
    if(exists)return alert('SÃ¡Â»â€˜ seri nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');
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
    var nguoi=prompt('ChuyÃ¡Â»Æ’n thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ '+serial+' cho ai sÃ¡Â»Â­ dÃ¡Â»Â¥ng?', old==='Trong kho'?'':old);
    if(nguoi===null)return;
    nguoi=nguoi.trim();
    if(!nguoi)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn ngÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban nhÃ¡ÂºÂ­n thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    x[0]=serial;x[1]=serial;x[5]=nguoi;x[6]='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
    var note='ChuyÃ¡Â»Æ’n tÃ¡Â»Â« '+old+' sang '+nguoi+' ngÃƒÂ y '+today;
    x[7]=x[7] ? x[7]+' | '+note : note;
    state.thietBiIT[i]=x;
    save();render();
  };
  window.traVeKhoThietBi=function(i){
    if(!state.thietBiIT||!state.thietBiIT[i])return;
    var x=normalizeThietBi(state.thietBiIT[i]);
    var old=x[5]||'Trong kho';
    if(!confirm('ChuyÃ¡Â»Æ’n thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ '+serialOfQuick(x)+' vÃ¡Â»Â kho?'))return;
    x[0]=serialOfQuick(x);x[1]=serialOfQuick(x);x[5]='Kho IT';x[6]='Trong kho';
    var note='Thu hÃ¡Â»â€œi tÃ¡Â»Â« '+old+' vÃ¡Â»Â kho ngÃƒÂ y '+today;
    x[7]=x[7] ? x[7]+' | '+note : note;
    state.thietBiIT[i]=x;
    save();render();
  };
  window.screenThietBi=function(){
    var rows=(state.thietBiIT||[]).map(function(raw,i){
      var x=normalizeThietBi(raw), h=item(x[2]), serial=serialOfQuick(x);
      var actions='<div class="row-actions"><button class="btn small" onclick="chuyenNguoiDungThietBi('+i+')">ChuyÃ¡Â»Æ’n ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng</button><button class="btn small" onclick="traVeKhoThietBi('+i+')">VÃ¡Â»Â kho</button><button class="btn small" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button></div>';
      return '<tr>'+td('SÃ¡Â»â€˜ seri',serial)+td('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',h[1])+td('NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p',x[3])+td('NgÃƒÂ y nhÃ¡ÂºÂ­p',x[4])+td('Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i',x[5])+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag">'+x[6]+'</span>')+td('Ghi chÃƒÂº',x[7]||'')+td('Thao tÃƒÂ¡c', actions)+'</tr>'
    }).join('')||'<tr><td class="empty" colspan="8">ChÃ†Â°a cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri.</td></tr>';
    return shell('thietbi','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri','Theo dÃƒÂµi vÃƒÂ  chuyÃ¡Â»Æ’n nhanh thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ giÃ¡Â»Â¯a ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng/phÃƒÂ²ng ban.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="wrap"><table><thead><tr><th>SÃ¡Â»â€˜ seri</th><th>ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p</th><th>NgÃƒÂ y nhÃ¡ÂºÂ­p</th><th>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Ghi chÃƒÂº</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label class="full">SÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹<input id="maThietBi" placeholder="NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ seri trÃƒÂªn mÃƒÂ¡y/tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹"></label><input id="seriThietBi" type="hidden"><label>MÃ¡ÂºÂ·t hÃƒÂ ng IT<select id="hangThietBi"></select></label><label>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p<select id="nguonThietBi"></select></label><label>NgÃƒÂ y nhÃ¡ÂºÂ­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÃ†Â°Ã¡Â»Âi Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng<input id="nguoiDungThietBi" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban/kho"></label><label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Ã„Âang sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>Thanh lÃƒÂ½</option><option>ThÃ¡ÂºÂ¥t lÃ¡ÂºÂ¡c</option></select></label><label class="full">Ghi chÃƒÂº<input id="ghiChuThietBi" placeholder="CÃ¡ÂºÂ¥u hÃƒÂ¬nh, tÃƒÂ¬nh trÃ¡ÂºÂ¡ng, chÃ¡Â»Â©ng tÃ¡Â»Â«..."></label><button class="btn primary" id="luuThietBi">LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</button><button class="btn" id="huyThietBi">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>')
  };
})();
;

window.__employeeUsersPatch=true;
(function(){
  function ensureUsers(){
    if(!state.users||!Array.isArray(state.users))state.users=[];
    if(!state.users.some(function(u){return u.username==='admin'})){
      state.users.unshift({username:'admin',password:(window.auth&&auth.pass)||'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});
    }
    state.users.forEach(function(u){if(typeof u.active==='undefined')u.active=true;if(!u.name)u.name=u.username;if(!u.role)u.role='NhÃƒÂ¢n viÃƒÂªn'});
  }
  var oldMigrate=window.migrateState;
  if(typeof oldMigrate==='function'){
    window.migrateState=function(s){s=oldMigrate(s);if(!s.users||!Array.isArray(s.users))s.users=[];if(!s.users.some(function(u){return u.username==='admin'}))s.users.unshift({username:'admin',password:'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});return s};
  }
  ensureUsers();
  window.currentUser=null;
  window.login=function(){
    ensureUsers();
    var u=el('loginUser').value.trim();
    var p=el('loginPass').value;
    var found=state.users.find(function(x){return x.username===u&&x.password===p&&x.active!==false});
    if(!found && window.auth && u===auth.user&&p===auth.pass){found={username:u,password:p,name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true}}
    if(found){
      window.currentUser=found;
      isLoggedIn=true;
      sessionStorage.setItem('qlkho-login','1');
      sessionStorage.setItem('qlkho-user',found.username);
      if(el('loginRemember')&&el('loginRemember').checked){localStorage.setItem('qlhc-remember-login',JSON.stringify({user:u,pass:p,remember:true}))}else{localStorage.removeItem('qlhc-remember-login');if(el('loginPass'))el('loginPass').value=''}
      if(el('loginError'))el('loginError').textContent='';
      showLogin();render();
    }else{if(el('loginError'))el('loginError').textContent='Sai tÃƒÂ i khoÃ¡ÂºÂ£n hoÃ¡ÂºÂ·c mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u'}
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
  };  function userRows(){ensureUsers();return state.users.map(function(u,i){return '<tr>'+td('TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p',u.username)+td('HÃ¡Â»Â tÃƒÂªn',u.name||'')+td('Vai trÃƒÂ²',u.role||'NhÃƒÂ¢n viÃƒÂªn')+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i',u.active===false?'<span class="tag bad">KhÃƒÂ³a</span>':'<span class="tag">HoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng</span>')+td('Thao tÃƒÂ¡c','<div class="row-actions"><button class="btn small" onclick="editUser('+i+')">SÃ¡Â»Â­a</button><button class="btn small" onclick="toggleUser('+i+')">'+(u.active===false?'MÃ¡Â»Å¸':'KhÃƒÂ³a')+'</button></div>')+'</tr>'}).join('')}
  window.editUser=function(i){ensureUsers();var u=state.users[i];if(!u)return;el('editUserIndex').value=i;el('userName').value=u.username;el('userName').disabled=false;el('userFullName').value=u.name||'';el('userPass').value=u.password||'';el('userRole').value=u.role||'NhÃƒÂ¢n viÃƒÂªn';el('userActive').checked=u.active!==false};
  window.resetUser=function(){['editUserIndex','userName','userFullName','userPass'].forEach(function(id){if(el(id))el(id).value=''});if(el('userName'))el('userName').disabled=false;if(el('userRole'))el('userRole').value='NhÃƒÂ¢n viÃƒÂªn';if(el('userActive'))el('userActive').checked=true};
  window.toggleUser=function(i){ensureUsers();var u=state.users[i];if(!u)return;if(u.username==='admin'&&u.active!==false)return alert('KhÃƒÂ´ng nÃƒÂªn khÃƒÂ³a tÃƒÂ i khoÃ¡ÂºÂ£n admin');u.active=!(u.active!==false);save();render()};
  window.saveUser=function(){
    ensureUsers();
    var idx=el('editUserIndex').value;
    var username=el('userName').value.trim();
    var name=el('userFullName').value.trim()||username;
    var pass=el('userPass').value.trim();
    var role=el('userRole').value;
    var active=el('userActive').checked;
    if(!username)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p');
    if(!pass||pass.length<4)return alert('MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u nÃƒÂªn cÃƒÂ³ ÃƒÂ­t nhÃ¡ÂºÂ¥t 4 kÃƒÂ½ tÃ¡Â»Â±');
    if(idx===''){
      if(state.users.some(function(u){return u.username===username}))return alert('TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');
      state.users.push({username:username,password:pass,name:name,role:role,active:active});
    }else{
      idx=Number(idx);
      var oldUser=state.users[idx];
      if(!oldUser)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y tÃƒÂ i khoÃ¡ÂºÂ£n cÃ¡ÂºÂ§n sÃ¡Â»Â­a');
      if(state.users.some(function(u,j){return j!==idx&&u.username===username}))return alert('TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');
      state.users[idx]={username:username,password:pass,name:name,role:role,active:active};
      if(window.currentUser&&window.currentUser.username===oldUser.username){window.currentUser=state.users[idx];sessionStorage.setItem('qlkho-user',username)}
      if(oldUser.username==='admin'&&window.auth){auth.user=username;auth.pass=pass;saveAuth()}
      try{var remembered=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null');if(remembered&&remembered.user===oldUser.username){localStorage.setItem('qlhc-remember-login',JSON.stringify({user:username,pass:pass,remember:true}))}}catch(e){}
    }
    save();
    resetUser();
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u tÃƒÂ i khoÃ¡ÂºÂ£n');
    render();
  };  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind();if(el('luuUser'))el('luuUser').onclick=saveUser;if(el('huyUser'))el('huyUser').onclick=resetUser};
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    ensureUsers();
    var html=oldSettings();
    if(html.indexOf('TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn')>=0)return html;
    var panel='<div class="panel"><div class="head"><h2>TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn</h2></div><div class="body form"><input id="editUserIndex" type="hidden"><label>TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p<input id="userName" placeholder="VD: nguyenvana"></label><label>MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u<input id="userPass" placeholder="TÃ¡Â»â€˜i thiÃ¡Â»Æ’u 4 kÃƒÂ½ tÃ¡Â»Â±"></label><label>HÃ¡Â»Â tÃƒÂªn<input id="userFullName" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban"></label><label>Vai trÃƒÂ²<select id="userRole"><option>NhÃƒÂ¢n viÃƒÂªn</option><option>Admin</option></select></label><label class="full"><input id="userActive" type="checkbox" checked> TÃƒÂ i khoÃ¡ÂºÂ£n Ã„â€˜ang hoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng</label><button class="btn primary" id="luuUser">LÃ†Â°u tÃƒÂ i khoÃ¡ÂºÂ£n</button><button class="btn" id="huyUser">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><thead><tr><th>TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p</th><th>HÃ¡Â»Â tÃƒÂªn</th><th>Vai trÃƒÂ²</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+userRows()+'</tbody></table></div></div>';
    return html.replace('<div class="two">',panel+'<div class="two">');
  };
  var oldSaveBaoMat=window.saveBaoMat;
  window.saveBaoMat=function(){
    oldSaveBaoMat();
    ensureUsers();
    var admin=state.users.find(function(u){return u.username==='admin'});
    if(admin&&window.auth){admin.password=auth.pass;admin.name='QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn';admin.role='Admin';admin.active=true;save()}
  };
})();
;

window.__rolePermissionPatch=true;
(function(){
  function currentRole(){
    if(window.currentUser&&window.currentUser.role)return window.currentUser.role;
    var u=sessionStorage.getItem('qlkho-user');
    if(u&&state.users){var found=state.users.find(function(x){return x.username===u});if(found){window.currentUser=found;return found.role||'NhÃƒÂ¢n viÃƒÂªn'}}
    return 'Admin';
  }
  window.isAdmin=function(){return currentRole()==='Admin'};
  var allowedStaff=['tongquan','ton','nhap','xuat','thietbi','chuyen','baocao'];
  var oldGo=window.go;
  window.go=function(id){
    if(!isAdmin()&&allowedStaff.indexOf(id)<0){alert('TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân vÃƒÂ o mÃ¡Â»Â¥c nÃƒÂ y');return}
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
    if(!isAdmin())return shell('thietlap','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c vÃƒÂ o phÃ¡ÂºÂ§n thiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thay Ã„â€˜Ã¡Â»â€¢i danh mÃ¡Â»Â¥c hoÃ¡ÂºÂ·c tÃƒÂ i khoÃ¡ÂºÂ£n.</div></div>');
    return oldSettings();
  };
  var oldHang=window.screenHang;
  window.screenHang=function(){
    if(!isAdmin())return shell('hanghoa','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thÃƒÂªm hoÃ¡ÂºÂ·c sÃ¡Â»Â­a hÃƒÂ ng hÃƒÂ³a.</div></div>');
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
    if(!user&&window.auth&&username===auth.user){user={username:auth.user,password:auth.pass,name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true};state.users.unshift(user)}
    var old=el('myOldPass').value;
    var p1=el('myNewPass').value.trim();
    var p2=el('myNewPass2').value.trim();
    if(!user)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y tÃƒÂ i khoÃ¡ÂºÂ£n hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i');
    if(old!==user.password)return alert('MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i khÃƒÂ´ng Ã„â€˜ÃƒÂºng');
    if(!p1||p1.length<4)return alert('MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi nÃƒÂªn cÃƒÂ³ ÃƒÂ­t nhÃ¡ÂºÂ¥t 4 kÃƒÂ½ tÃ¡Â»Â±');
    if(p1!==p2)return alert('NhÃ¡ÂºÂ­p lÃ¡ÂºÂ¡i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi chÃ†Â°a khÃ¡Â»â€ºp');
    user.password=p1;
    if(window.auth&&username===auth.user){auth.pass=p1;saveAuth()}
    if(window.currentUser)window.currentUser.password=p1;
    save();
    ['myOldPass','myNewPass','myNewPass2'].forEach(function(id){if(el(id))el(id).value=''});
    alert('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡Â»â€¢i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u. LÃ¡ÂºÂ§n Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p sau dÃƒÂ¹ng mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi.');
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind();if(el('luuMyPass'))el('luuMyPass').onclick=doiMatKhauCuaToi};
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    var html=oldSettings();
    if(html.indexOf('Ã„ÂÃ¡Â»â€¢i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u cÃ¡Â»Â§a tÃƒÂ´i')>=0)return html;
    var panel='<div class="panel"><div class="head"><h2>Ã„ÂÃ¡Â»â€¢i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u cÃ¡Â»Â§a tÃƒÂ´i</h2></div><div class="body form"><label>MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i<input id="myOldPass" type="password" autocomplete="current-password"></label><label>MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi<input id="myNewPass" type="password" autocomplete="new-password"></label><label>NhÃ¡ÂºÂ­p lÃ¡ÂºÂ¡i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u mÃ¡Â»â€ºi<input id="myNewPass2" type="password" autocomplete="new-password"></label><button class="btn primary" id="luuMyPass">Ã„ÂÃ¡Â»â€¢i mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u</button></div></div>';
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
      if(top)top.insertAdjacentHTML('afterend','<div class="settings-note">BÃ¡ÂºÂ¥m tÃ¡Â»Â«ng tiÃƒÂªu Ã„â€˜Ã¡Â»Â Ã„â€˜Ã¡Â»Æ’ mÃ¡Â»Å¸ phÃ¡ÂºÂ§n cÃ¡ÂºÂ§n chÃ¡Â»â€°nh</div>');
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
  function slipRows(){var rows=state.bd.map(function(x,i){return {x:x,i:i}}).reverse();return rows.map(function(r){var x=r.x;var action=canEditSlip()?td('Thao tÃƒÂ¡c','<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>'):'';return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+action+'</tr>'}).join('')}
  var oldShowReport=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShowReport(mode,btn);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK';
    var actionHead=canEditSlip()?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRows()+'</tbody></table>';
  };
  window.editSlip=function(i){
    if(!canEditSlip())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var x=state.bd[i];if(!x)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    el('rpTitle').textContent='SÃ¡Â»Â­a phiÃ¡ÂºÂ¿u '+(x[1]||'');
    var hangOpts=state.hang.map(function(raw){var h=normalizeHang(raw);return [h[0],h[0]+' - '+h[1]]});
    el('rp').innerHTML='<div class="body form"><input id="editSlipIndex" type="hidden" value="'+i+'"><label>NgÃƒÂ y<input id="editSlipDate" type="date" value="'+(x[0]||today)+'"></label><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="editSlipNo" value="'+(x[1]||'')+'" readonly></label><label>Kho<select id="editSlipKho">'+optPairs(state.kho,x[2])+'</select></label><label>HÃƒÂ ng hÃƒÂ³a<select id="editSlipHang">'+optPairs(hangOpts,x[3])+'</select></label><label>LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u<select id="editSlipLoai">'+slipTypeOptions(x)+'</select></label><label>NCC/Ghi chÃƒÂº<input id="editSlipNcc" value="'+(x[7]||'')+'"></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng nhÃ¡ÂºÂ­p<input id="editSlipNhap" type="number" min="0" value="'+Number(x[5]||0)+'"></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng xuÃ¡ÂºÂ¥t<input id="editSlipXuat" type="number" min="0" value="'+Number(x[6]||0)+'"></label><p class="hint full">ChÃ¡Â»â€° nhÃ¡ÂºÂ­p mÃ¡Â»â„¢t trong hai ÃƒÂ´ NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t. Khi lÃ†Â°u, tÃ¡Â»â€œn kho sÃ¡ÂºÂ½ tÃ¡Â»Â± tÃƒÂ­nh lÃ¡ÂºÂ¡i theo phiÃ¡ÂºÂ¿u Ã„â€˜ÃƒÂ£ sÃ¡Â»Â­a.</p><button class="btn primary" onclick="saveEditSlip()">LÃ†Â°u phiÃ¡ÂºÂ¿u Ã„â€˜ÃƒÂ£ sÃ¡Â»Â­a</button><button class="btn" onclick="showReport(\'xnk\')">HÃ¡Â»Â§y</button></div>';
  };
  window.saveEditSlip=function(){
    if(!canEditSlip())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var i=Number(el('editSlipIndex').value);var old=state.bd[i];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);
    if(nhap<0||xuat<0)return alert('SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng khÃƒÂ´ng hÃ¡Â»Â£p lÃ¡Â»â€¡');
    if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('ChÃ¡Â»â€° nhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng Ã¡Â»Å¸ mÃ¡Â»â„¢t ÃƒÂ´: NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t');
    applySlipToStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim()];
    var key=row[2]+'|'+row[3];var newStock=(state.ton[key]||0)+nhap-xuat;
    if(newStock<0){applySlipToStock(old,1);return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn kho sau khi sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t')}
    state.bd[i]=row;applySlipToStock(row,1);save();alert('Ã„ÂÃƒÂ£ sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u vÃƒÂ  cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t tÃ¡Â»â€œn kho');render();current='baocao';setTimeout(function(){showReport('xnk')},0);
  };
})();
;

(function(){
  function prefixByGroup(group){group=String(group||'').toLowerCase();if(group.indexOf('vÃ„Æ’n phÃƒÂ²ng')>=0||group.indexOf('van phong')>=0)return 'VP';if(group.indexOf('cÃƒÂ´ng cÃ¡Â»Â¥')>=0||group.indexOf('cong cu')>=0)return 'CC';if(group.indexOf('it')>=0||group.indexOf('thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹')>=0||group.indexOf('thiet bi')>=0)return 'TB';return 'HH'}
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
  window.formKho=function(prefix){prefix=prefix||'';return '<div class="panel"><div class="head"><h2>ThÃƒÂªm / sÃ¡Â»Â­a kho</h2><span class="tag">MÃƒÂ£ kho tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng</span></div><div class="body form"><input id="'+prefix+'editKho" type="hidden"><label>MÃƒÂ£ kho<input id="'+prefix+'maKho" readonly value="'+nextKhoCode()+'"></label><label>TÃƒÂªn kho<input id="'+prefix+'tenKho" placeholder="VD: Kho VP 77CT"></label><label class="full">NgÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch<input id="'+prefix+'ptKho" placeholder="TÃƒÂªn ngÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban phÃ¡Â»Â¥ trÃƒÂ¡ch"></label><button class="btn primary" id="'+prefix+'luuKho">LÃ†Â°u kho</button><button class="btn" id="'+prefix+'huyKho">ThÃƒÂªm kho mÃ¡Â»â€ºi</button></div></div>'}
  window.resetKho=function(p){p=p||'';[p+'editKho',p+'tenKho',p+'ptKho'].forEach(function(id){if(el(id))el(id).value=''});if(el(p+'maKho')){el(p+'maKho').value=nextKhoCode();el(p+'maKho').readOnly=true;el(p+'maKho').disabled=false}}
  window.fillKho=function(p,i){p=p||'';if(!state.kho[i])return;el(p+'editKho').value=i;el(p+'maKho').value=state.kho[i][0];el(p+'maKho').readOnly=true;el(p+'maKho').disabled=false;el(p+'tenKho').value=state.kho[i][1];el(p+'ptKho').value=state.kho[i][2]||''}
  window.editKho=function(i){current='thietlap';screenHistory.push('tongquan');render();setTimeout(function(){fillKho('set',i);var box=el('settenKho');if(box)box.focus()},0)}
  window.editKhoSetup=function(i){fillKho('set',i);var box=el('settenKho');if(box)box.focus()}
  window.saveKho=function(p){p=p||'';var ma=(el(p+'maKho')&&el(p+'maKho').value)||nextKhoCode();var ten=(el(p+'tenKho')&&el(p+'tenKho').value.trim())||'';var pt=(el(p+'ptKho')&&el(p+'ptKho').value.trim())||'ChÃ†Â°a gÃƒÂ¡n';if(!ten)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn kho');var i=el(p+'editKho').value;if(i===''){if(state.kho.some(function(k){return k[0]===ma}))ma=nextKhoCode();state.kho.push([ma,ten,pt])}else{state.kho[Number(i)][1]=ten;state.kho[Number(i)][2]=pt}save();alert('Ã„ÂÃƒÂ£ lÃ†Â°u kho');render()}
  var oldScreenThietLap=window.screenThietLap;
  window.screenThietLap=function(){var html=oldScreenThietLap();if(!isAdmin||!isAdmin())return html;return html.replace('<h2>Danh sÃƒÂ¡ch kho</h2>','<h2>Danh sÃƒÂ¡ch kho</h2><button class="btn small" type="button" onclick="resetKho(\'set\')">+ ThÃƒÂªm kho mÃ¡Â»â€ºi</button>')}
})();
;

(function(){
  if(window.__warehouseCombinedSettingsPatch)return;
  window.__warehouseCombinedSettingsPatch=true;
  if(!document.getElementById('warehouse-combined-settings-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');
    st.id='warehouse-combined-settings-style-20260721-mobile-login-sync-1';
    st.textContent='.warehouse-combined-panel + .two > .panel:nth-child(1),.warehouse-combined-panel + .two > .panel:nth-child(2){display:none!important}.warehouse-combined-panel .warehouse-combined-form{display:grid;grid-template-columns:170px minmax(220px,1fr) minmax(220px,1fr) auto auto;gap:10px 12px;align-items:end}.warehouse-combined-panel .warehouse-combined-form label{margin:0}.warehouse-combined-panel .warehouse-combined-table .btn.small{min-width:58px}.warehouse-combined-panel .warehouse-code-note{font-size:12px;color:var(--muted);margin:8px 0 0}@media(max-width:900px){.warehouse-combined-panel .warehouse-combined-form{grid-template-columns:1fr}.warehouse-combined-panel .warehouse-combined-table table{min-width:0}.warehouse-combined-panel .warehouse-combined-table th:nth-child(1),.warehouse-combined-panel .warehouse-combined-table td:nth-child(1){display:none}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function nextCode(){return typeof nextKhoCode==='function'?nextKhoCode():'KHO-'+String(((state.kho||[]).length+1)).padStart(3,'0')}
  function warehouseRows(){
    return (state.kho||[]).map(function(k,i){
      return '<tr>'+td('MÃƒÂ£ kho',esc(k[0]))+td('TÃƒÂªn kho',esc(k[1]))+td('NgÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch',esc(k[2]||'ChÃ†Â°a gÃƒÂ¡n'))+td('Thao tÃƒÂ¡c','<button class="btn small" type="button" onclick="editWarehouseCombined('+i+')">SÃ¡Â»Â­a</button>')+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="4">ChÃ†Â°a cÃƒÂ³ kho.</td></tr>';
  }
  function combinedWarehousePanel(){
    return '<div class="panel warehouse-combined-panel"><div class="head"><h2>QuÃ¡ÂºÂ£n lÃƒÂ½ kho</h2><span class="tag">ThÃƒÂªm, sÃ¡Â»Â­a vÃƒÂ  xem danh sÃƒÂ¡ch chung</span></div><div class="body"><div class="warehouse-combined-form"><input id="whEditKho" type="hidden"><label>MÃƒÂ£ kho tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="whMaKho" readonly value="'+esc(nextCode())+'"></label><label>TÃƒÂªn kho<input id="whTenKho" placeholder="VD: Kho VP 77CT"></label><label>NgÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch<input id="whPtKho" placeholder="TÃƒÂªn ngÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban"></label><button class="btn primary" id="whSaveKho" type="button">LÃ†Â°u kho</button><button class="btn" id="whNewKho" type="button">ThÃƒÂªm mÃ¡Â»â€ºi</button></div><p class="warehouse-code-note">MÃƒÂ£ kho Ã„â€˜Ã†Â°Ã¡Â»Â£c giÃ¡Â»Â¯ tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng Ã„â€˜Ã¡Â»Æ’ dÃ¡Â»Â¯ liÃ¡Â»â€¡u tÃ¡Â»â€œn khÃƒÂ´ng bÃ¡Â»â€¹ sai. QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn sÃ¡Â»Â­a Ã„â€˜Ã†Â°Ã¡Â»Â£c tÃƒÂªn kho vÃƒÂ  ngÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch.</p></div><div class="wrap warehouse-combined-table"><table><thead><tr><th>MÃƒÂ£ kho</th><th>TÃƒÂªn kho</th><th>NgÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+warehouseRows()+'</tbody></table></div></div>';
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
    var pt=(el('whPtKho')&&el('whPtKho').value.trim())||'ChÃ†Â°a gÃƒÂ¡n';
    var idx=(el('whEditKho')&&el('whEditKho').value)||'';
    if(!ten)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn kho');
    if(idx===''){
      var ma=nextCode();
      while((state.kho||[]).some(function(k){return k[0]===ma})){ma='KHO-'+String(parseInt(ma.replace('KHO-',''),10)+1).padStart(3,'0')}
      state.kho.push([ma,ten,pt]);
    }else{
      idx=Number(idx);
      if(!state.kho[idx])return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y kho cÃ¡ÂºÂ§n sÃ¡Â»Â­a');
      state.kho[idx][1]=ten;
      state.kho[idx][2]=pt;
    }
    save();
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u kho');
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
  window.screenNhap=function(){return shell('nhap','NhÃ¡ÂºÂ­p kho','GÃƒÂµ mÃƒÂ£ hÃƒÂ ng hoÃ¡ÂºÂ·c tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ app gÃ¡Â»Â£i ÃƒÂ½ nhanh mÃ¡ÂºÂ·t hÃƒÂ ng cÃ¡ÂºÂ§n nhÃ¡ÂºÂ­p.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label class="full">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" list="hangNhapList" placeholder="GÃƒÂµ mÃƒÂ£ hoÃ¡ÂºÂ·c tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><datalist id="hangNhapList">'+itemOptions()+'</datalist></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">ThuÃ¡Â»â„¢c tÃƒÂ­nh linh Ã„â€˜Ã¡Â»â„¢ng<input id="nhapThuocTinhMoi" placeholder="MÃƒÂ u: xanh; Size: L; Serial: bÃ¡ÂºÂ¯t buÃ¡Â»â„¢c"></label><p class="hint full">Khi lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p, hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃƒÂªm vÃƒÂ o danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')};
  window.screenXuat=function(){return shell('xuat','XuÃ¡ÂºÂ¥t kho','GÃƒÂµ mÃƒÂ£ hÃƒÂ ng hoÃ¡ÂºÂ·c tÃƒÂªn hÃƒÂ ng, sau Ã„â€˜ÃƒÂ³ kho xuÃ¡ÂºÂ¥t chÃ¡Â»â€° hiÃ¡Â»â€¡n cÃƒÂ¡c kho cÃƒÂ²n tÃ¡Â»â€œn cÃ¡Â»Â§a hÃƒÂ ng Ã„â€˜ÃƒÂ³.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" list="hangXuatList" placeholder="GÃƒÂµ mÃƒÂ£ hoÃ¡ÂºÂ·c tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><datalist id="hangXuatList">'+itemOptions()+'</datalist></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label>Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃƒÂµ hoÃ¡ÂºÂ·c chÃ¡Â»Ân hÃƒÂ ng hÃƒÂ³a Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>')};
  window.capNhatKhoXuatTheoHang=function(){
    if(!el('hangXuat')||!el('khoXuat'))return;
    var ma=getItemCodeFromSearch('hangXuat');
    if(!ma){el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='GÃƒÂµ hoÃ¡ÂºÂ·c chÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.';return}
    var ds=khoCoTonTheoHang(ma);
    if(ds.length){fill(el('khoXuat'),ds);if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='ChÃ¡Â»â€° hiÃ¡Â»Æ’n thÃ¡Â»â€¹ kho cÃƒÂ²n tÃ¡Â»â€œn cÃ¡Â»Â§a hÃƒÂ ng Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân.'}
    else{el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HÃƒÂ ng nÃƒÂ y hiÃ¡Â»â€¡n chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn Ã¡Â»Å¸ kho nÃƒÂ o.'}
  };
  window.saveNhap=function(){
    var maHang=getItemCodeFromSearch('hangNhap');
    if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){
      var ma=el('nhapMaHangMoi').value.trim(),ten=el('nhapTenHangMoi').value.trim();
      if(!ma||!ten)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi');
      if(state.hang.some(function(h){return normalizeHang(h)[0]===ma}))return alert('MÃƒÂ£ hÃƒÂ ng Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i trong danh mÃ¡Â»Â¥c');
      state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,el('nhapThuocTinhMoi').value]);
      maHang=ma;
    }
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    var sl=Number(el('slNhap').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoNhap').value+'|'+maHang;
    state.ton[key]=(state.ton[key]||0)+sl;
    state.bd.push([today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value]);
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p');veTongQuanSauLuu();
  };
  window.saveXuat=function(){
    var maHang=getItemCodeFromSearch('hangXuat');
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    if(!el('khoXuat').value)return alert('HÃƒÂ ng nÃƒÂ y chÃ†Â°a cÃƒÂ³ kho cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoXuat').value+'|'+maHang;
    if((state.ton[key]||0)<sl)return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    state.ton[key]-=sl;
    state.bd.push([today,el('soXuat').value,el('khoXuat').value,maHang,el('loaiXuat').value,0,sl]);
    if(el('loaiXuat').value==='XuÃ¡ÂºÂ¥t Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');veTongQuanSauLuu();
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
      btn.onclick=function(){var box=el('hangMoiBox');var show=box.style.display==='none';box.style.display=show?'block':'none';el('hangNhap').disabled=show;btn.textContent=show?'ChÃ¡Â»Ân hÃƒÂ ng cÃƒÂ³ sÃ¡ÂºÂµn':'+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi';if(show&&typeof nextItemCode==='function'&&el('nhapMaHangMoi'))el('nhapMaHangMoi').value=nextItemCode(el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'')};
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
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng hÃƒÂ³a</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalStock(h[0]);var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn';return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">TÃ¡Â»â€œn '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function renderXuatSuggest(){
    var input=el('hangXuat'),box=el('hangXuatSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var html=[];
    allItems().filter(function(h){return matchItem(h,q)}).forEach(function(h){
      stockWarehouses(h[0]).forEach(function(w){html.push('<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">TÃ¡Â»â€œn '+fmt(w.sl)+' '+esc(h[3]||'')+' - '+esc(w.ten)+'</span></button>')});
    });
    if(!html.length)html.push('<div class="item-suggest-empty">KhÃƒÂ´ng cÃƒÂ³ hÃƒÂ ng phÃƒÂ¹ hÃ¡Â»Â£p hoÃ¡ÂºÂ·c hÃƒÂ ng chÃ†Â°a cÃƒÂ²n tÃ¡Â»â€œn</div>');
    box.innerHTML=html.slice(0,12).join('');box.classList.add('show');
  }
  function hideSuggests(){['hangNhapSuggest','hangXuatSuggest'].forEach(function(id){if(el(id))el(id).classList.remove('show')})}
  window.screenNhap=function(){return shell('nhap','NhÃ¡ÂºÂ­p kho','GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem nhanh tÃ¡Â»â€œn vÃƒÂ  kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">ThuÃ¡Â»â„¢c tÃƒÂ­nh linh Ã„â€˜Ã¡Â»â„¢ng<input id="nhapThuocTinhMoi" placeholder="MÃƒÂ u: xanh; Size: L; Serial: bÃ¡ÂºÂ¯t buÃ¡Â»â„¢c"></label><p class="hint full">Khi lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p, hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃƒÂªm vÃƒÂ o danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')};
  window.screenXuat=function(){return shell('xuat','XuÃ¡ÂºÂ¥t kho','GÃƒÂµ tÃƒÂªn hÃƒÂ ng, app sÃ¡ÂºÂ½ hiÃ¡Â»â€¡n tÃƒÂªn hÃƒÂ ng - sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng tÃ¡Â»â€œn - kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label>Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>')};
  window.capNhatKhoXuatTheoHang=function(){
    if(!el('hangXuat')||!el('khoXuat'))return;
    var ma=getItemCodeFromSearch('hangXuat');
    if(!ma){el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='GÃƒÂµ hoÃ¡ÂºÂ·c chÃ¡Â»Ân hÃƒÂ ng hÃƒÂ³a trong gÃ¡Â»Â£i ÃƒÂ½.';return}
    var ds=khoCoTonTheoHang(ma);
    if(ds.length){fill(el('khoXuat'),ds);if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='Kho xuÃ¡ÂºÂ¥t chÃ¡Â»â€° hiÃ¡Â»â€¡n kho cÃƒÂ²n tÃ¡Â»â€œn cÃ¡Â»Â§a hÃƒÂ ng Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân.'}
    else{el('khoXuat').innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HÃƒÂ ng nÃƒÂ y hiÃ¡Â»â€¡n chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn Ã¡Â»Å¸ kho nÃƒÂ o.'}
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
  if(!document.getElementById('ton-search-total-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');
    st.id='ton-search-total-style-20260721-mobile-login-sync-1';
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
      var detail=rows.map(function(r){return esc(nameKho(r[0]))+': <b>'+fmt(r[3])+' '+esc(h[3]||'')+'</b>'}).join(' &nbsp; | &nbsp; ')||'ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn Ã¡Â»Å¸ kho nÃƒÂ o';
      box.innerHTML='<div class="ton-total-title">TÃ¡Â»â€¢ng tÃ¡Â»â€œn '+esc(h[1])+': '+fmt(total)+' '+esc(h[3]||'')+'</div><div class="ton-total-meta">'+detail+'</div>';
      box.classList.add('show');
      return;
    }
    var codes={};items.forEach(function(h){codes[h[0]]=h});
    var totalAll=0,warehouses={};
    stockRows().forEach(function(r){if(codes[r[1]]){totalAll+=Number(r[3]||0);warehouses[r[0]]=true}});
    box.innerHTML='<div class="ton-total-title">TÃ¡Â»â€¢ng tÃ¡Â»â€œn cÃƒÂ¡c hÃƒÂ ng phÃƒÂ¹ hÃ¡Â»Â£p: '+fmt(totalAll)+'</div><div class="ton-total-meta">CÃƒÂ³ '+items.length+' mÃ¡ÂºÂ·t hÃƒÂ ng phÃƒÂ¹ hÃ¡Â»Â£p trong '+Object.keys(warehouses).length+' kho. GÃƒÂµ rÃƒÂµ hÃ†Â¡n tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem chi tiÃ¡ÂºÂ¿t tÃ¡Â»Â«ng kho.</div>';
    box.classList.add('show');
  }
  var oldScreenTon=window.screenTon;
  window.screenTon=function(){
    var html=oldScreenTon.apply(this,arguments);
    if(html.indexOf('tonTotalSummary')>=0)return html;
    return html.replace('</label></div></div><div class="panel"><div class="head"><h2>BÃ¡ÂºÂ£ng tÃ¡Â»â€œn kho</h2>', '</label><div id="tonTotalSummary" class="ton-total-summary"></div></div></div><div class="panel"><div class="head"><h2>BÃ¡ÂºÂ£ng tÃ¡Â»â€œn kho</h2>');
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
  function slipRows(){return state.bd.map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){var x=r.x;var action=canEditXnkSlip()?td('Thao tÃƒÂ¡c','<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>'):'';return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+action+'</tr>'}).join('')}
  window.showReport=(function(oldShowReport){return function(mode,btn){
    if(mode!=='xnk')return oldShowReport(mode,btn);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK';
    var actionHead=canEditXnkSlip()?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRows()+'</tbody></table>';
  }})(window.showReport);
  window.editSlip=function(i){
    if(!canEditXnkSlip())return alert('TÃƒÂ i khoÃ¡ÂºÂ£n nÃƒÂ y chÃ†Â°a Ã„â€˜Ã†Â°Ã¡Â»Â£c quyÃ¡Â»Ân sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var x=state.bd[i];if(!x)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    el('rpTitle').textContent='SÃ¡Â»Â­a phiÃ¡ÂºÂ¿u '+(x[1]||'');
    var hangOpts=state.hang.map(function(raw){var h=normalizeHang(raw);return [h[0],h[0]+' - '+h[1]]});
    el('rp').innerHTML='<div class="body form"><input id="editSlipIndex" type="hidden" value="'+i+'"><label>NgÃƒÂ y<input id="editSlipDate" type="date" value="'+(x[0]||today)+'"></label><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="editSlipNo" value="'+(x[1]||'')+'" readonly></label><label>Kho<select id="editSlipKho">'+optPairs(state.kho,x[2])+'</select></label><label>HÃƒÂ ng hÃƒÂ³a<select id="editSlipHang">'+optPairs(hangOpts,x[3])+'</select></label><label>LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u<select id="editSlipLoai">'+slipTypeOptions(x)+'</select></label><label>NCC/Ghi chÃƒÂº<input id="editSlipNcc" value="'+(x[7]||'')+'"></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng nhÃ¡ÂºÂ­p<input id="editSlipNhap" type="number" min="0" value="'+Number(x[5]||0)+'"></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng xuÃ¡ÂºÂ¥t<input id="editSlipXuat" type="number" min="0" value="'+Number(x[6]||0)+'"></label><p class="hint full">NhÃƒÂ¢n viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u XNK. ChÃ¡Â»â€° nhÃ¡ÂºÂ­p mÃ¡Â»â„¢t trong hai ÃƒÂ´ NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t; tÃ¡Â»â€œn kho sÃ¡ÂºÂ½ tÃ¡Â»Â± tÃƒÂ­nh lÃ¡ÂºÂ¡i.</p><button class="btn primary" onclick="saveEditSlip()">LÃ†Â°u phiÃ¡ÂºÂ¿u Ã„â€˜ÃƒÂ£ sÃ¡Â»Â­a</button><button class="btn" onclick="showReport(\'xnk\')">HÃ¡Â»Â§y</button></div>';
  };
  window.saveEditSlip=function(){
    if(!canEditXnkSlip())return alert('TÃƒÂ i khoÃ¡ÂºÂ£n nÃƒÂ y chÃ†Â°a Ã„â€˜Ã†Â°Ã¡Â»Â£c quyÃ¡Â»Ân sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var i=Number(el('editSlipIndex').value);var old=state.bd[i];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);
    if(nhap<0||xuat<0)return alert('SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng khÃƒÂ´ng hÃ¡Â»Â£p lÃ¡Â»â€¡');
    if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('ChÃ¡Â»â€° nhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng Ã¡Â»Å¸ mÃ¡Â»â„¢t ÃƒÂ´: NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t');
    applySlipToStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim(),old[8]||currentUsername(),old[9]||currentDisplayName(),currentUsername(),new Date().toISOString()];
    var key=row[2]+'|'+row[3];var newStock=(state.ton[key]||0)+nhap-xuat;
    if(newStock<0){applySlipToStock(old,1);return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn kho sau khi sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t')}
    state.bd[i]=row;applySlipToStock(row,1);save();alert('Ã„ÂÃƒÂ£ sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u vÃƒÂ  cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t tÃ¡Â»â€œn kho');current='baocao';render();setTimeout(function(){showReport('xnk')},0);
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
  if(!document.getElementById('highlight-ton-search-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');
    st.id='highlight-ton-search-style-20260721-mobile-login-sync-1';
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
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y gÃ¡Â»Â£i ÃƒÂ½ phÃƒÂ¹ hÃ¡Â»Â£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalByCode(h[0]);var wh=warehousesByCode(h[0])||'ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn';return '<button class="ton-suggest-row" type="button" data-value="'+esc(h[1])+'"><span class="ton-suggest-title">'+esc(h[1])+'</span><span class="ton-suggest-meta">TÃ¡Â»â€¢ng '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function hideTonSuggest(){if(el('tonSuggestList'))el('tonSuggestList').classList.remove('show')}
  var oldScreenTon=window.screenTon;
  window.screenTon=function(){
    var html=oldScreenTon.apply(this,arguments);
    html=html.replace('<div class="panel"><div class="head"><h2>TÃƒÂ¬m kiÃ¡ÂºÂ¿m tÃ¡Â»â€œn kho</h2>', '<div class="panel search-panel"><div class="head"><h2>TÃƒÂ¬m kiÃ¡ÂºÂ¿m tÃ¡Â»â€œn kho</h2>');
    html=html.replace('<label class="full">Search tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£<input id="timTon" list="goiYTon" placeholder="NhÃ¡ÂºÂ­p mÃƒÂ£ hÃƒÂ ng, tÃƒÂªn hÃƒÂ ng, kho, nhÃƒÂ³m hÃƒÂ ng..."><datalist id="goiYTon">', '<label class="full ton-search-field">Search tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£<input id="timTon" list="goiYTon" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng hoÃ¡ÂºÂ·c kho..."><datalist id="goiYTon">');
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
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng hÃƒÂ³a phÃƒÂ¹ hÃ¡Â»Â£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){
      var total=itemTotal(h[0]);var places=itemPlaces(h[0])||'ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn trong kho';
      return '<button class="ton-suggest-row" type="button" data-value="'+clean(h[1])+'"><span class="ton-suggest-title">'+clean(h[1])+'</span><span class="ton-suggest-meta">TÃ¡Â»â€¢ng: '+fmt(total)+' '+clean(h[3])+' - '+clean(places)+'</span></button>';
    }).join('');
    box.classList.add('show');
  }
  function enhanceTonSearch(){
    var screen=byId('ton'),input=byId('timTon');if(!screen||!input)return;
    var panel=input.closest('.panel');if(panel)panel.classList.add('ton-search-panel-strong');
    var label=input.closest('label');if(label)label.classList.add('ton-search-field');
    input.placeholder='GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng hoÃ¡ÂºÂ·c kho...';
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
    if(byId('ton-search-strong-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='ton-search-strong-style-20260721-mobile-login-sync-1';
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
    if(el('ton-search-pop-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='ton-search-pop-style-20260721-mobile-login-sync-1';
    st.textContent='#ton .ton-search-panel-strong{background:linear-gradient(135deg,#0b7f5d,#12a879)!important;border:0!important;box-shadow:0 12px 28px rgba(5,80,58,.24)!important;overflow:visible!important}#ton .ton-search-panel-strong .head{background:rgba(255,255,255,.13)!important;border-bottom:1px solid rgba(255,255,255,.22)!important}#ton .ton-search-panel-strong h2{color:#fff!important;text-shadow:0 1px 0 rgba(0,0,0,.18)!important}#ton .ton-search-panel-strong .btn{background:#fff!important;color:#086b50!important;border-color:rgba(255,255,255,.75)!important;font-weight:900!important}#ton .ton-search-panel-strong .body{background:transparent!important}#ton .ton-search-field{color:#fff!important;font-size:15px!important;font-weight:900!important;letter-spacing:0!important}#ton #timTon{margin-top:8px!important;background:linear-gradient(90deg,#fff8c9,#eafff3)!important;border:3px solid #ffcf4a!important;box-shadow:0 0 0 4px rgba(255,207,74,.28),0 8px 18px rgba(0,0,0,.12)!important;color:#052f24!important;font-size:16px!important;font-weight:900!important;min-height:52px!important;border-radius:10px!important}#ton #timTon::placeholder{color:#527064!important;font-weight:800!important}#ton #timTon:focus{background:#fffdf0!important;border-color:#ffd84d!important;box-shadow:0 0 0 5px rgba(255,216,77,.45),0 10px 24px rgba(0,0,0,.16)!important}.ton-suggest-list{border:2px solid #ffcf4a!important;box-shadow:0 14px 30px rgba(5,80,58,.24)!important}@media(max-width:900px){#ton .ton-search-panel-strong{margin:8px 0 10px!important;border-radius:10px!important}#ton #timTon{min-height:54px!important;font-size:16px!important}}';
    document.head.appendChild(st);
  }
  function enhance(){var input=el('timTon');if(!input)return;var panel=input.closest('.panel');if(panel)panel.classList.add('ton-search-panel-strong');var label=input.closest('label');if(label)label.classList.add('ton-search-field');input.placeholder='GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem tÃ¡Â»â€¢ng tÃ¡Â»â€œn vÃƒÂ  kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng...'}
  addPopStyle();
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__tonSearchPopWrapped){window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(enhance,0);return out};window.render.__tonSearchPopWrapped=true}
  setTimeout(enhance,100);
})();
;

(function(){
  if(window.__tonFontFixPatch)return;window.__tonFontFixPatch=true;
  function addStyle(){
    if(document.getElementById('ton-font-fix-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='ton-font-fix-style-20260721-mobile-login-sync-1';
    st.textContent='#ton .ton-search-panel-strong,#ton .ton-search-panel-strong *{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;letter-spacing:0!important;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}#ton .ton-search-panel-strong h2{font-weight:800!important;line-height:1.25!important}#ton .ton-search-field{font-weight:700!important;line-height:1.35!important}#ton #timTon{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;font-weight:700!important;line-height:1.35!important;text-shadow:none!important}#ton #timTon::placeholder{font-weight:600!important}.ton-suggest-title{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;font-weight:700!important;line-height:1.35!important}.ton-suggest-meta{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;font-weight:700!important;line-height:1.4!important}.ton-total-summary,.ton-total-summary *{font-family:Arial,"Segoe UI",Helvetica,sans-serif!important;letter-spacing:0!important}.ton-total-summary h3{font-weight:800!important;line-height:1.3!important}.ton-total-summary p{font-weight:500!important;line-height:1.45!important}@media(max-width:900px){#ton #timTon{font-size:16px!important}.ton-suggest-title{font-size:14.5px!important}.ton-suggest-meta{font-size:12.5px!important}}';
    document.head.appendChild(st);
  }
  addStyle();
})();
;

(function(){
  if(window.__hideTonTotalPatch)return;window.__hideTonTotalPatch=true;
  function addStyle(){
    if(document.getElementById('hide-ton-total-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='hide-ton-total-style-20260721-mobile-login-sync-1';
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
  if(document.getElementById('one-font-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');st.id='one-font-style-20260721-mobile-login-sync-1';
  st.textContent='html,body,.app,.app *,button,input,select,textarea,table,th,td{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important;letter-spacing:0!important;text-rendering:auto!important;-webkit-font-smoothing:antialiased!important}body{font-weight:400!important}h1,h2,.brand,.mobile-title strong{font-weight:700!important}label,th,.tag,.nav,.btn{font-weight:600!important}input,select{font-weight:500!important}#ton .ton-search-panel-strong,#ton .ton-search-panel-strong *{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important}#ton .ton-search-panel-strong h2{font-weight:700!important}#ton .ton-search-field{font-weight:600!important}#ton #timTon{font-weight:600!important;font-size:15px!important;line-height:1.35!important;text-shadow:none!important}#ton #timTon::placeholder{font-weight:500!important;color:#5b7067!important}.ton-suggest-title{font-weight:600!important}.ton-suggest-meta{font-weight:600!important}@media(max-width:900px){#ton #timTon{font-size:16px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__scanItSerialPatch)return;window.__scanItSerialPatch=true;
  var scanControls=null,scanStream=null,scanTimer=null;
  function byId(id){return document.getElementById(id)}
  function addStyle(){
    if(byId('scan-it-serial-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='scan-it-serial-style-20260721-mobile-login-sync-1';
    st.textContent='.serial-scan-wrap{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center}.serial-scan-wrap input{min-width:0}.serial-scan-btn{white-space:nowrap;background:#0f8d68!important;color:#fff!important;border-color:#0f8d68!important;font-weight:700!important}.serial-scan-hint{grid-column:1/-1;color:#5f746b;font-size:12px;font-weight:500;line-height:1.35}.scan-modal{position:fixed;inset:0;z-index:80;display:none;align-items:center;justify-content:center;background:rgba(7,24,18,.72);padding:14px}.scan-modal.show{display:flex}.scan-box{width:min(520px,100%);background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 22px 55px rgba(0,0,0,.35)}.scan-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;background:#10251d;color:#fff}.scan-head h2{margin:0;font-size:17px}.scan-body{padding:12px}.scan-video{width:100%;aspect-ratio:4/3;background:#071812;border-radius:10px;object-fit:cover}.scan-status{margin:10px 0 0;color:#385246;font-size:13px;line-height:1.4}.scan-actions{display:flex;gap:8px;margin-top:12px}.scan-actions .btn{flex:1}@media(max-width:900px){.serial-scan-wrap{grid-template-columns:1fr}.serial-scan-btn{width:100%}.scan-modal{align-items:flex-start;padding-top:calc(72px + env(safe-area-inset-top))}.scan-head h2{font-size:16px}}';
    document.head.appendChild(st);
  }
  function ensureModal(){
    if(byId('scanSerialModal'))return;
    document.body.insertAdjacentHTML('beforeend','<div class="scan-modal" id="scanSerialModal"><div class="scan-box"><div class="scan-head"><h2>QuÃƒÂ©t sÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2><button class="btn small" id="closeScanSerial" type="button">Ã„ÂÃƒÂ³ng</button></div><div class="scan-body"><video class="scan-video" id="scanSerialVideo" autoplay muted playsinline></video><p class="scan-status" id="scanSerialStatus">Ã„ÂÃ†Â°a camera vÃƒÂ o mÃƒÂ£ vÃ¡ÂºÂ¡ch hoÃ¡ÂºÂ·c QR trÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹. NÃ¡ÂºÂ¿u khÃƒÂ´ng quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c, Ã„â€˜ÃƒÂ³ng lÃ¡ÂºÂ¡i vÃƒÂ  nhÃ¡ÂºÂ­p tay.</p><div class="scan-actions"><button class="btn" id="manualSerialBtn" type="button">NhÃ¡ÂºÂ­p tay</button><button class="btn primary" id="retryScanSerial" type="button">QuÃƒÂ©t lÃ¡ÂºÂ¡i</button></div></div></div></div>');
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
    setStatus('Ã„ÂÃƒÂ£ quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c: '+value);
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
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c thÃ†Â° viÃ¡Â»â€¡n quÃƒÂ©t mÃƒÂ£'))};
      sc.onerror=function(){reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c thÃ†Â° viÃ¡Â»â€¡n quÃƒÂ©t mÃƒÂ£'))};
      document.head.appendChild(sc);
    })
  }
  function startWithBarcodeDetector(video){
    if(!('BarcodeDetector' in window))return Promise.reject(new Error('MÃƒÂ¡y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p'));
    return navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(stream){
      scanStream=stream;video.srcObject=stream;return video.play().then(function(){
        var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
        scanTimer=setInterval(function(){detector.detect(video).then(function(codes){if(codes&&codes[0])fillSerial(codes[0].rawValue)}).catch(function(){})},450);
        setStatus('Ã„Âang quÃƒÂ©t bÃ¡ÂºÂ±ng camera. BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n cÃƒÂ³ thÃ¡Â»Æ’ Ã„â€˜ÃƒÂ³ng lÃ¡ÂºÂ¡i Ã„â€˜Ã¡Â»Æ’ nhÃ¡ÂºÂ­p tay.');
      })
    })
  }
  function startWithZxing(video){
    return loadZxing().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      setStatus('Ã„Âang mÃ¡Â»Å¸ camera Ã„â€˜Ã¡Â»Æ’ quÃƒÂ©t mÃƒÂ£...');
      return reader.decodeFromVideoDevice(undefined,video,function(result,err,controls){
        if(controls)scanControls=controls;
        if(result){var text=result.getText?result.getText():String(result.text||result);fillSerial(text)}
      }).then(function(controls){scanControls=controls;setStatus('Ã„Âang quÃƒÂ©t mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR. NÃ¡ÂºÂ¿u khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c, bÃ¡ÂºÂ¥m Ã„ÂÃƒÂ³ng Ã„â€˜Ã¡Â»Æ’ nhÃ¡ÂºÂ­p tay.')})
    })
  }
  function startSerialScan(){
    addStyle();ensureModal();
    var modal=byId('scanSerialModal'),video=byId('scanSerialVideo');
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){alert('TrÃƒÂ¬nh duyÃ¡Â»â€¡t chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ camera. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri giÃƒÂºp mÃƒÂ¬nh nhÃƒÂ©.');return}
    if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){alert('MuÃ¡Â»â€˜n dÃƒÂ¹ng camera cÃ¡ÂºÂ§n mÃ¡Â»Å¸ app bÃ¡ÂºÂ±ng link https. BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri Ã„â€˜Ã†Â°Ã¡Â»Â£c.');return}
    stopSerialScan();ensureModal();modal=byId('scanSerialModal');video=byId('scanSerialVideo');modal.classList.add('show');setStatus('Ã„Âang xin quyÃ¡Â»Ân camera...');
    startWithBarcodeDetector(video).catch(function(){return startWithZxing(video)}).catch(function(){setStatus('KhÃƒÂ´ng mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c quÃƒÂ©t mÃƒÂ£ trÃƒÂªn mÃƒÂ¡y nÃƒÂ y. BÃ¡ÂºÂ¡n bÃ¡ÂºÂ¥m Ã„ÂÃƒÂ³ng rÃ¡Â»â€œi nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.');});
  }
  function enhanceSerialField(){
    var input=byId('maThietBi');if(!input||byId('scanSerialBtn'))return;
    var label=input.closest('label');if(!label)return;
    var text=document.createElement('span');text.textContent='SÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
    var wrap=document.createElement('div');wrap.className='serial-scan-wrap';
    input.parentNode.insertBefore(wrap,input);
    wrap.appendChild(input);
    wrap.insertAdjacentHTML('beforeend','<button class="btn serial-scan-btn" id="scanSerialBtn" type="button">QuÃƒÂ©t seri</button><div class="serial-scan-hint">QuÃƒÂ©t mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR bÃ¡ÂºÂ±ng camera, hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay nÃ¡ÂºÂ¿u tem mÃ¡Â»Â/khÃƒÂ´ng quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c.</div>');
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
    if(document.getElementById('simple-stock-table-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='simple-stock-table-style-20260721-mobile-login-sync-1';
    st.textContent='#ton .simple-stock-table th,#ton .simple-stock-table td{font-size:14px!important;padding:10px 12px!important}#ton .simple-stock-table .stock-item-name{font-weight:700;color:#0b2f24}#ton .simple-stock-table .stock-qty{font-size:16px;font-weight:800;color:#087253;text-align:right;white-space:nowrap}#ton .simple-stock-table .stock-warehouse{font-weight:600;color:#18382d}@media(max-width:900px){#ton .simple-stock-table tr{padding:10px 12px!important}#ton .simple-stock-table td{padding:6px 0!important;font-size:14px!important}#ton .simple-stock-table td:before{min-width:72px;text-align:center}#ton .simple-stock-table .stock-qty{font-size:17px!important}}';
    document.head.appendChild(st);
  }
  function esc(v){return String(v||'').replace(/[&<>\"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]})}
  function renderSimpleStock(){
    var body=document.getElementById('tonRowsBody');if(!body||!window.stockRows)return;
    var rows=stockRows().map(function(r){
      var hang=r[2]||[];var text=[nameKho(r[0]),r[1],hang[1],hang[2],hang[3],String(r[3])].join(' ').toLowerCase().replace(/"/g,'');
      return '<tr data-search="'+esc(text)+'"><td data-label="Kho"><span class="stock-warehouse">'+esc(nameKho(r[0]))+'</span></td><td data-label="HÃƒÂ ng tÃ¡Â»â€œn"><span class="stock-item-name">'+esc(hang[1])+'</span></td><td data-label="SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng" class="num stock-qty">'+fmt(r[3])+' '+esc(hang[3])+'</td></tr>';
    }).join('');
    body.innerHTML=rows||'<tr><td class="empty" colspan="3">ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn kho.</td></tr>';
    var table=body.closest('table');
    if(table){table.classList.add('simple-stock-table');var head=table.querySelector('thead tr');if(head)head.innerHTML='<th>Kho</th><th>HÃƒÂ ng tÃ¡Â»â€œn</th><th class="num">SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng</th>'}
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
  if(document.getElementById('raised-nav-buttons-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');st.id='raised-nav-buttons-style-20260721-mobile-login-sync-1';
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
    setStatus('Ã„ÂÃƒÂ£ lÃ¡ÂºÂ¥y sÃ¡Â»â€˜ seri: '+value);
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
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ quÃƒÂ©t'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ quÃƒÂ©t'))};
      sc.onerror=function(){reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ quÃƒÂ©t'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('MÃ¡ÂºÂ¡ng chÃ¡ÂºÂ­m, chÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ quÃƒÂ©t'))},9000);
    })
  }
  function ensureScanModalV2(){
    if(!byId('scanSerialModal')){
      document.body.insertAdjacentHTML('beforeend','<div class="scan-modal" id="scanSerialModal"><div class="scan-box"><div class="scan-head"><h2>QuÃƒÂ©t sÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2><button class="btn small" id="closeScanSerial" type="button">Ã„ÂÃƒÂ³ng</button></div><div class="scan-body"><video class="scan-video" id="scanSerialVideo" autoplay muted playsinline></video><p class="scan-status" id="scanSerialStatus">Ã„ÂÃ†Â°a camera vÃƒÂ o mÃƒÂ£ vÃ¡ÂºÂ¡ch hoÃ¡ÂºÂ·c QR trÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹. NÃ¡ÂºÂ¿u khÃƒÂ´ng quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c, Ã„â€˜ÃƒÂ³ng lÃ¡ÂºÂ¡i vÃƒÂ  nhÃ¡ÂºÂ­p tay.</p><div class="scan-actions"><button class="btn" id="manualSerialBtn" type="button">NhÃ¡ÂºÂ­p tay</button><button class="btn primary" id="retryScanSerial" type="button">QuÃƒÂ©t lÃ¡ÂºÂ¡i</button></div></div></div></div>');
    }
    var actions=document.querySelector('#scanSerialModal .scan-actions');
    if(actions&&!byId('photoScanSerial'))actions.insertAdjacentHTML('afterbegin','<button class="btn" id="photoScanSerial" type="button">ChÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£</button><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
    if(byId('closeScanSerial'))byId('closeScanSerial').onclick=stopScanV2;
    if(byId('manualSerialBtn'))byId('manualSerialBtn').onclick=stopScanV2;
    if(byId('retryScanSerial'))byId('retryScanSerial').onclick=startScanV2;
    if(byId('photoScanSerial'))byId('photoScanSerial').onclick=function(){var inp=byId('photoScanSerialInput');if(inp)inp.click()};
    if(byId('photoScanSerialInput'))byId('photoScanSerialInput').onchange=decodePhotoV2;
  }
  function decodePhotoV2(e){
    var file=e.target.files&&e.target.files[0];if(!file)return;
    setStatus('Ã„Âang Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh vÃ¡Â»Â«a chÃ¡Â»Â¥p...');
    var url=URL.createObjectURL(file);
    loadZxingV2().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromImageUrl(url).then(function(result){URL.revokeObjectURL(url);fillSerial(result.getText?result.getText():String(result.text||result))})
    }).catch(function(){URL.revokeObjectURL(url);setStatus('ChÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n thÃ¡Â»Â­ chÃ¡Â»Â¥p gÃ¡ÂºÂ§n hÃ†Â¡n, rÃƒÂµ nÃƒÂ©t hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay.')})
  }
  function startScanV2(){
    ensureScanModalV2();stopScanV2();ensureScanModalV2();
    var modal=byId('scanSerialModal'),video=byId('scanSerialVideo');
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){alert('Ã„ÂiÃ¡Â»â€¡n thoÃ¡ÂºÂ¡i/trÃƒÂ¬nh duyÃ¡Â»â€¡t nÃƒÂ y chÃ†Â°a mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c camera trong app. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri giÃƒÂºp mÃƒÂ¬nh nhÃƒÂ©.');return}
    if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){alert('MuÃ¡Â»â€˜n dÃƒÂ¹ng camera cÃ¡ÂºÂ§n mÃ¡Â»Å¸ app bÃ¡ÂºÂ±ng link https. BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri Ã„â€˜Ã†Â°Ã¡Â»Â£c.');return}
    modal.classList.add('show');
    setStatus('Ã„Âang mÃ¡Â»Å¸ camera. NÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»â€¡n thoÃ¡ÂºÂ¡i hÃ¡Â»Âi quyÃ¡Â»Ân, bÃ¡ÂºÂ¥m Cho phÃƒÂ©p.');
    scanWatch=setTimeout(function(){setStatus('Camera mÃ¡Â»Å¸ hÃ†Â¡i lÃƒÂ¢u. NÃ¡ÂºÂ¿u chÃ†Â°a thÃ¡ÂºÂ¥y hÃ¡Â»Âi quyÃ¡Â»Ân, bÃ¡ÂºÂ¥m ChÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£ hoÃ¡ÂºÂ·c Ã„ÂÃƒÂ³ng Ã„â€˜Ã¡Â»Æ’ nhÃ¡ÂºÂ­p tay.')},6500);
    loadZxingV2().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromVideoDevice(null,video,function(result,err,controls){
        if(controls)scanControls=controls;
        if(result){fillSerial(result.getText?result.getText():String(result.text||result))}
      }).then(function(controls){scanControls=controls;if(scanWatch){clearTimeout(scanWatch);scanWatch=null}setStatus('Camera Ã„â€˜ÃƒÂ£ mÃ¡Â»Å¸. Ã„ÂÃ†Â°a mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR vÃƒÂ o giÃ¡Â»Â¯a khung Ã„â€˜Ã¡Â»Æ’ quÃƒÂ©t.')})
    }).catch(function(){
      if(scanWatch){clearTimeout(scanWatch);scanWatch=null}
      setStatus('ChÃ†Â°a mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c camera quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p. BÃ¡ÂºÂ¡n bÃ¡ÂºÂ¥m ChÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£ hoÃ¡ÂºÂ·c Ã„ÂÃƒÂ³ng Ã„â€˜Ã¡Â»Æ’ nhÃ¡ÂºÂ­p tay.')
    })
  }
  function bindFixedButton(){var btn=byId('scanSerialBtn');if(btn){btn.onclick=startScanV2;btn.textContent='QuÃƒÂ©t seri'}}
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
    setStatus('Ã„ÂÃƒÂ£ lÃ¡ÂºÂ¥y sÃ¡Â»â€˜ seri tÃ¡Â»Â« Ã¡ÂºÂ£nh: '+value);
    setTimeout(function(){var modal=byId('scanSerialModal');if(modal)modal.classList.remove('show')},650);
  }
  function loadZxingPhoto(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))};
      sc.onerror=function(){reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('MÃ¡ÂºÂ¡ng chÃ¡ÂºÂ­m, chÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))},9000);
    })
  }
  function decodeByBarcodeDetector(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('KhÃƒÂ´ng hÃ¡Â»â€” trÃ¡Â»Â£ Ã„â€˜Ã¡Â»Âc Ã¡ÂºÂ£nh trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
      return detector.detect(bitmap).then(function(codes){try{bitmap.close&&bitmap.close()}catch(e){};if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;throw new Error('KhÃƒÂ´ng thÃ¡ÂºÂ¥y mÃƒÂ£ trong Ã¡ÂºÂ£nh')})
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
    setStatus('Ã„Âang Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n giÃ¡Â»Â¯ Ã¡ÂºÂ£nh rÃƒÂµ nÃƒÂ©t vÃƒÂ  mÃƒÂ£ nÃ¡ÂºÂ±m gÃ¡Â»Ân trong khung nhÃƒÂ©...');
    decodeByBarcodeDetector(file).then(fillSerialPhoto).catch(function(){
      return decodeByZxing(file).then(fillSerialPhoto)
    }).catch(function(){
      setStatus('Ã¡ÂºÂ¢nh nÃƒÂ y chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n thÃ¡Â»Â­ chÃ¡Â»Â¥p gÃ¡ÂºÂ§n hÃ†Â¡n, Ã„â€˜Ã¡Â»Â§ sÃƒÂ¡ng hÃ†Â¡n, hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.');
      var manual=prompt('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri tÃ¡ÂºÂ¡i Ã„â€˜ÃƒÂ¢y nÃ¡ÂºÂ¿u muÃ¡Â»â€˜n:');
      if(manual)fillSerialPhoto(manual);
    })
  }
  function bindPhotoButton(){
    var actions=document.querySelector('#scanSerialModal .scan-actions');
    if(actions&&!byId('photoScanSerial'))actions.insertAdjacentHTML('afterbegin','<button class="btn" id="photoScanSerial" type="button">ChÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£</button><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
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
    if(byId('direct-photo-serial-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='direct-photo-serial-style-20260721-mobile-login-sync-1';
    st.textContent='.direct-serial-actions{grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:8px;margin-top:-2px}.direct-photo-label{display:flex!important;align-items:center;justify-content:center;text-align:center;background:#fff7d6!important;color:#785800!important;border:1px solid #f1c24d!important;border-radius:7px;min-height:38px;padding:8px 11px;cursor:pointer;font-weight:700!important}.direct-photo-label:active{transform:translateY(1px)}.direct-photo-input{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important}.direct-serial-note{grid-column:1/-1;color:#5f746b;font-size:12px;line-height:1.35;margin-top:-2px}@media(max-width:900px){.direct-serial-actions{grid-template-columns:1fr}.direct-photo-label{min-height:44px}}';
    document.head.appendChild(st);
  }
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return;
    var main=byId('maThietBi'),hidden=byId('seriThietBi');
    if(main){main.value=value;main.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    alert('Ã„ÂÃƒÂ£ lÃ¡ÂºÂ¥y sÃ¡Â»â€˜ seri: '+value);
  }
  function loadZxing(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))};
      sc.onerror=function(){reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('MÃ¡ÂºÂ¡ng chÃ¡ÂºÂ­m, chÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))},9000);
    })
  }
  function decodeNative(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('KhÃƒÂ´ng hÃ¡Â»â€” trÃ¡Â»Â£ Ã„â€˜Ã¡Â»Âc Ã¡ÂºÂ£nh trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
      return detector.detect(bitmap).then(function(codes){try{bitmap.close&&bitmap.close()}catch(e){};if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;throw new Error('KhÃƒÂ´ng thÃ¡ÂºÂ¥y mÃƒÂ£ trong Ã¡ÂºÂ£nh')})
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
    var note=byId('directSerialNote');if(note)note.textContent='Ã„Âang Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh...';
    decodeNative(file).then(fillSerial).catch(function(){return decodeZxing(file).then(fillSerial)}).catch(function(){
      if(note)note.textContent='Ã¡ÂºÂ¢nh chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n cÃƒÂ³ thÃ¡Â»Æ’ chÃ¡Â»Â¥p gÃ¡ÂºÂ§n hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay.';
      var manual=prompt('Ã¡ÂºÂ¢nh chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri tÃ¡ÂºÂ¡i Ã„â€˜ÃƒÂ¢y:');
      if(manual)fillSerial(manual);
    })
  }
  function addDirectButtons(){
    addStyle();
    var input=byId('maThietBi');if(!input||byId('directSerialActions'))return;
    var label=input.closest('label');if(!label)return;
    label.insertAdjacentHTML('afterend','<div class="direct-serial-actions" id="directSerialActions"><button class="btn serial-scan-btn" id="directScanBtn" type="button">QuÃƒÂ©t camera</button><label class="direct-photo-label" for="directPhotoSerialInput">ChÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£</label><input class="direct-photo-input" id="directPhotoSerialInput" type="file" accept="image/*" capture="environment"><div class="direct-serial-note" id="directSerialNote">NÃ¡ÂºÂ¿u camera khÃƒÂ´ng mÃ¡Â»Å¸, bÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri Ã¡Â»Å¸ ÃƒÂ´ bÃƒÂªn trÃƒÂªn.</div></div>');
    var photo=byId('directPhotoSerialInput');if(photo)photo.onchange=onPhotoChange;
    var scan=byId('directScanBtn');if(scan)scan.onclick=function(){var old=byId('scanSerialBtn');if(old&&old!==scan)old.click();else alert('NÃ¡ÂºÂ¿u camera khÃƒÂ´ng mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c, bÃ¡ÂºÂ¡n dÃƒÂ¹ng ChÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£ hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.')};
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
    if(byId('native-photo-input-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='native-photo-input-style-20260721-mobile-login-sync-1';
    st.textContent='.direct-serial-actions{grid-template-columns:1fr!important}.native-photo-box{grid-column:1/-1;display:grid;gap:6px;background:#fff8dd;border:1px solid #efc44f;border-radius:8px;padding:10px}.native-photo-title{font-weight:800;color:#6c5100}.native-photo-input{display:block!important;position:static!important;opacity:1!important;width:100%!important;height:auto!important;min-height:42px!important;border:1px dashed #c99b25!important;background:#fff!important;color:#10251d!important;border-radius:7px!important;padding:8px!important}.native-photo-help{font-size:12px;color:#6d6040;line-height:1.35}.direct-photo-label{display:none!important}#photoScanSerial,#directScanBtn{display:none!important}@media(max-width:900px){.native-photo-input{font-size:16px!important;min-height:46px!important}.native-photo-box{padding:11px}}';
    document.head.appendChild(st);
  }
  function fillSerial(value){
    value=String(value||'').trim();if(!value)return;
    var main=byId('maThietBi'),hidden=byId('seriThietBi');
    if(main){main.value=value;main.dispatchEvent(new Event('input',{bubbles:true}))}
    if(hidden)hidden.value=value;
    alert('Ã„ÂÃƒÂ£ lÃ¡ÂºÂ¥y sÃ¡Â»â€˜ seri: '+value);
  }
  function loadZxing(){
    return new Promise(function(resolve,reject){
      if(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader)return resolve(window.ZXingBrowser);
      var old=document.querySelector('script[data-zxing-browser]');
      if(old){old.addEventListener('load',function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))});old.addEventListener('error',reject);return}
      var sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/index.min.js';sc.async=true;sc.setAttribute('data-zxing-browser','1');
      sc.onload=function(){window.ZXingBrowser?resolve(window.ZXingBrowser):reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))};
      sc.onerror=function(){reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))};
      document.head.appendChild(sc);
      setTimeout(function(){if(!(window.ZXingBrowser&&window.ZXingBrowser.BrowserMultiFormatReader))reject(new Error('MÃ¡ÂºÂ¡ng chÃ¡ÂºÂ­m, chÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'))},9000);
    })
  }
  function decodeNative(file){
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('KhÃƒÂ´ng hÃ¡Â»â€” trÃ¡Â»Â£ Ã„â€˜Ã¡Â»Âc Ã¡ÂºÂ£nh trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:['qr_code','code_128','code_39','ean_13','ean_8','upc_a','upc_e','itf','codabar']});
      return detector.detect(bitmap).then(function(codes){try{bitmap.close&&bitmap.close()}catch(e){};if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;throw new Error('KhÃƒÂ´ng thÃ¡ÂºÂ¥y mÃƒÂ£ trong Ã¡ÂºÂ£nh')})
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
    if(note)note.textContent='Ã„Âang Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh...';
    decodeNative(file).then(fillSerial).catch(function(){return decodeZxing(file).then(fillSerial)}).catch(function(){
      if(note)note.textContent='Ã¡ÂºÂ¢nh chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n chÃ¡Â»Â¥p gÃ¡ÂºÂ§n hÃ†Â¡n, Ã„â€˜Ã¡Â»Â§ sÃƒÂ¡ng hÃ†Â¡n, hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.';
      var manual=prompt('Ã¡ÂºÂ¢nh chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri tÃ¡ÂºÂ¡i Ã„â€˜ÃƒÂ¢y:');
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
      actions.insertAdjacentHTML('afterbegin','<div class="native-photo-box"><div class="native-photo-title">ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh mÃƒÂ£ seri</div><input class="native-photo-input" id="nativePhotoSerialInput" type="file" accept="image/*" capture="environment"><div class="native-photo-help" id="nativePhotoNote">BÃ¡ÂºÂ¥m vÃƒÂ o ÃƒÂ´ nÃƒÂ y Ã„â€˜Ã¡Â»Æ’ chÃ¡Â»Â¥p Ã¡ÂºÂ£nh tem mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR. NÃ¡ÂºÂ¿u mÃƒÂ¡y khÃƒÂ´ng cho chÃ¡Â»Â¥p, bÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n nhÃ¡ÂºÂ­p tay Ã¡Â»Å¸ ÃƒÂ´ SÃ¡Â»â€˜ seri bÃƒÂªn trÃƒÂªn.</div></div>');
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
  if(document.getElementById('mobile-nav-modern-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');st.id='mobile-nav-modern-style-20260721-mobile-login-sync-1';
  st.textContent='@media(max-width:900px){.mobile-bar{display:flex!important;overflow-x:auto!important;overflow-y:hidden!important;gap:8px!important;padding:10px 10px calc(10px + env(safe-area-inset-bottom))!important;background:linear-gradient(180deg,#11b98a 0%,#07845f 100%)!important;border-top:1px solid rgba(255,255,255,.22)!important;box-shadow:0 -14px 30px rgba(4,84,60,.28),inset 0 1px 0 rgba(255,255,255,.20)!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}.mobile-bar::-webkit-scrollbar{display:none}.mobile-bar button{flex:0 0 92px!important;width:92px!important;min-height:58px!important;border-radius:15px!important;border:1px solid rgba(255,255,255,.22)!important;background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,.08))!important;color:#f7fffb!important;font-size:13px!important;font-weight:800!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.16)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 8px 16px rgba(4,70,51,.20)!important;scroll-snap-align:start;transition:transform .12s ease,box-shadow .12s ease,background .12s ease!important}.mobile-bar button:active{transform:translateY(2px) scale(.98)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 4px 10px rgba(4,70,51,.18)!important}.mobile-bar button.active{background:linear-gradient(180deg,#ffffff,#eefbf5)!important;color:#087253!important;border-color:#fff!important;text-shadow:none!important;transform:translateY(-4px)!important;box-shadow:0 14px 26px rgba(3,68,49,.30),inset 0 1px 0 rgba(255,255,255,.85)!important}.mobile-bar button.active:after{content:"";display:block;width:24px;height:3px;border-radius:999px;background:#0f8d68;margin:5px auto 0}.mobile-bar button:nth-child(1)::before{content:"TQ"}.mobile-bar button:nth-child(2)::before{content:"TK"}.mobile-bar button:nth-child(3)::before{content:"+"}.mobile-bar button:nth-child(4)::before{content:"Ã¢Ë†â€™"}.mobile-bar button:nth-child(5)::before{content:"IT"}.mobile-bar button:nth-child(6)::before{content:"Ã¢â€ â€"}.mobile-bar button:nth-child(7)::before{content:"BC"}.mobile-bar button:nth-child(8)::before{content:"Ã¢Å¡â„¢"}.mobile-bar button::before{display:block;margin:0 auto 4px;width:26px;height:22px;border-radius:9px;background:rgba(255,255,255,.18);font-size:11px;line-height:22px;color:inherit;text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.18)}.mobile-bar button.active::before{background:#dff6eb;color:#087253}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__stockCardsViewPatch)return;window.__stockCardsViewPatch=true;
  function addStyle(){
    if(document.getElementById('stock-cards-view-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='stock-cards-view-style-20260721-mobile-login-sync-1';
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
    box.innerHTML=rows.length?rows.map(cardHtml).join(''):'<div class="stock-card-empty">ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn kho.</div>';
    var badge=document.getElementById('soDongTon');if(badge)badge.textContent=rows.length+' dÃƒÂ²ng';
    bindCardSearch();
  }
  function bindCardSearch(){
    var input=document.getElementById('timTon'),clear=document.getElementById('xoaTimTon'),badge=document.getElementById('soDongTon');
    if(!input)return;
    function apply(){
      var q=input.value.trim().toLowerCase();var shown=0;
      document.querySelectorAll('#tonStockCards .stock-card-row').forEach(function(card){var ok=!q||card.getAttribute('data-search').indexOf(q)>=0;card.style.display=ok?'grid':'none';if(ok)shown++});
      document.querySelectorAll('#tonRowsBody tr').forEach(function(r){var ok=!q||r.getAttribute('data-search').indexOf(q)>=0;r.style.display=ok?'':'none'});
      if(badge)badge.textContent=shown+' dÃƒÂ²ng';
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
  function warnDelete(msg){return confirm(msg+'\n\nBÃ¡ÂºÂ¡n chÃ¡ÂºÂ¯c chÃ¡ÂºÂ¯n muÃ¡Â»â€˜n xÃƒÂ³a khÃƒÂ´ng?')}
  function usedKho(code){return Object.keys(state.ton||{}).some(function(k){return k.indexOf(code+'|')===0&&Number(state.ton[k]||0)!==0})||(state.bd||[]).some(function(b){return b[2]===code})||(state.chuyen||[]).some(function(c){return c.tu===code||c.den===code})}
  window.deleteKhoSetup=function(i){var k=state.kho[i];if(!k)return;if(usedKho(k[0])){if(!warnDelete('Kho "'+k[1]+'" Ã„â€˜ang cÃƒÂ³ tÃ¡Â»â€œn hoÃ¡ÂºÂ·c Ã„â€˜ÃƒÂ£ phÃƒÂ¡t sinh phiÃ¡ÂºÂ¿u. XÃƒÂ³a kho cÃƒÂ³ thÃ¡Â»Æ’ lÃƒÂ m bÃƒÂ¡o cÃƒÂ¡o cÃƒâ€¦Ã‚Â© hiÃ¡Â»Æ’n thÃ¡Â»â€¹ mÃƒÂ£ kho thay cho tÃƒÂªn kho.'))return}else if(!confirm('XÃƒÂ³a kho "'+k[1]+'"?'))return;state.kho.splice(i,1);save();render()}
  window.deleteNhom=function(i){var v=state.nhomHangList[i];if(!v)return;if(state.hang.some(function(h){return normalizeHang(h)[2]===v})){if(!warnDelete('NhÃƒÂ³m hÃƒÂ ng "'+v+'" Ã„â€˜ang Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃƒÂ¹ng trong danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a. Khi xÃƒÂ³a, hÃƒÂ ng Ã„â€˜ang thuÃ¡Â»â„¢c nhÃƒÂ³m nÃƒÂ y sÃ¡ÂºÂ½ Ã„â€˜Ã¡Â»Æ’ trÃ¡Â»â€˜ng nhÃƒÂ³m.'))return;state.hang.forEach(function(h){if(normalizeHang(h)[2]===v)h[2]=''})}else if(!confirm('XÃƒÂ³a nhÃƒÂ³m hÃƒÂ ng "'+v+'"?'))return;state.nhomHangList.splice(i,1);save();render()}
  window.deleteDvt=function(i){var v=state.dvtList[i];if(!v)return;if(state.hang.some(function(h){return normalizeHang(h)[3]===v})){if(!warnDelete('Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh "'+v+'" Ã„â€˜ang Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃƒÂ¹ng trong danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a. Khi xÃƒÂ³a, hÃƒÂ ng Ã„â€˜ang dÃƒÂ¹ng Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ nÃƒÂ y sÃ¡ÂºÂ½ Ã„â€˜Ã¡Â»Æ’ trÃ¡Â»â€˜ng Ã„ÂVT.'))return;state.hang.forEach(function(h){if(normalizeHang(h)[3]===v)h[3]=''})}else if(!confirm('XÃƒÂ³a Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh "'+v+'"?'))return;state.dvtList.splice(i,1);save();render()}
  window.deleteNcc=function(i){var v=state.nccList[i];if(!v)return;if((state.bd||[]).some(function(b){return b[7]===v})){if(!warnDelete('NCC "'+v+'" Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p. Khi xÃƒÂ³a, phiÃ¡ÂºÂ¿u cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ tÃƒÂªn NCC nÃƒÂ y trong bÃƒÂ¡o cÃƒÂ¡o.'))return}else if(!confirm('XÃƒÂ³a NCC "'+v+'"?'))return;state.nccList.splice(i,1);save();render()}
  window.deleteLoai=function(t,i){var list=t==='nhap'?state.loaiNhapList:state.loaiXuatList;var v=list[i];if(!v)return;if((state.bd||[]).some(function(b){return b[4]===v})){if(!warnDelete('LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u "'+v+'" Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong phiÃ¡ÂºÂ¿u phÃƒÂ¡t sinh. PhiÃ¡ÂºÂ¿u cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ tÃƒÂªn loÃ¡ÂºÂ¡i nÃƒÂ y Ã„â€˜Ã¡Â»Æ’ bÃƒÂ¡o cÃƒÂ¡o khÃƒÂ´ng mÃ¡ÂºÂ¥t lÃ¡Â»â€¹ch sÃ¡Â»Â­.'))return}else if(!confirm('XÃƒÂ³a loÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u "'+v+'"?'))return;list.splice(i,1);save();render()}
  function actions(edit,del){return '<span class="row-actions"><button class="btn small" type="button" onclick="'+edit+'">SÃ¡Â»Â­a</button><button class="btn small bad" type="button" onclick="'+del+'">XÃƒÂ³a</button></span>'}
  function khoRows(){return (state.kho||[]).map(function(x,i){return '<tr>'+td('MÃƒÂ£',x[0])+td('TÃƒÂªn kho',x[1])+td('PhÃ¡Â»Â¥ trÃƒÂ¡ch',x[2]||'')+td('Thao tÃƒÂ¡c',actions('editKhoSetup('+i+')','deleteKhoSetup('+i+')'))+'</tr>'}).join('')||'<tr><td class="empty" colspan="4">ChÃ†Â°a cÃƒÂ³ kho.</td></tr>'}
  function oneRows(arr,label,editName,delName){return (arr||[]).map(function(x,i){return '<tr>'+td(label,x)+td('Thao tÃƒÂ¡c',actions(editName+'('+i+')',delName+'('+i+')'))+'</tr>'}).join('')||'<tr><td class="empty" colspan="2">ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u.</td></tr>'}
  function loaiRows(){var lo=[];(state.loaiNhapList||[]).forEach(function(x,i){lo.push(['nhap',i,'LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p',x])});(state.loaiXuatList||[]).forEach(function(x,i){lo.push(['xuat',i,'LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t',x])});return lo.map(function(r){return '<tr>'+td('NhÃƒÂ³m',r[2])+td('TÃƒÂªn loÃ¡ÂºÂ¡i',r[3])+td('Thao tÃƒÂ¡c',actions('editLoai(\''+r[0]+'\','+r[1]+')','deleteLoai(\''+r[0]+'\','+r[1]+')'))+'</tr>'}).join('')||'<tr><td class="empty" colspan="3">ChÃ†Â°a cÃƒÂ³ loÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u.</td></tr>'}
  var oldScreen=window.screenThietLap;
  window.screenThietLap=function(){
    return shell('thietlap','ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p danh mÃ¡Â»Â¥c','TÃ¡ÂºÂ¡o, sÃ¡Â»Â­a hoÃ¡ÂºÂ·c xÃƒÂ³a kho, nhÃƒÂ³m hÃƒÂ ng, Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh, nhÃƒÂ  cung cÃ¡ÂºÂ¥p vÃƒÂ  loÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u. Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a chÃ¡Â»â€°nh Ã¡Â»Å¸ mÃ¡Â»Â¥c HÃƒÂ ng hÃƒÂ³a.','<div class="two">'+formKho('set')+'<div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch kho</h2><button class="btn small" type="button" onclick="resetKho(\'set\')">+ ThÃƒÂªm kho mÃ¡Â»â€ºi</button></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn kho</th><th>PhÃ¡Â»Â¥ trÃƒÂ¡ch</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+khoRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃƒÂ³m hÃƒÂ ng</h2></div><div class="body form"><input id="editNhom" type="hidden"><label class="full">TÃƒÂªn nhÃƒÂ³m<input id="tenNhom"></label><button class="btn primary" id="luuNhom">LÃ†Â°u nhÃƒÂ³m</button><button class="btn" id="huyNhom">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><thead><tr><th>NhÃƒÂ³m hÃƒÂ ng</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+oneRows(state.nhomHangList,'NhÃƒÂ³m hÃƒÂ ng','editNhom','deleteNhom')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh</h2></div><div class="body form"><input id="editDvt" type="hidden"><label class="full">TÃƒÂªn Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹<input id="tenDvt"></label><button class="btn primary" id="luuDvt">LÃ†Â°u Ã„ÂVT</button><button class="btn" id="huyDvt">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><thead><tr><th>Ã„ÂVT</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+oneRows(state.dvtList,'Ã„ÂVT','editDvt','deleteDvt')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>NhÃƒÂ  cung cÃ¡ÂºÂ¥p</h2></div><div class="body form"><input id="editNcc" type="hidden"><label class="full">TÃƒÂªn NCC<input id="tenNcc"></label><button class="btn primary" id="luuNcc">LÃ†Â°u NCC</button><button class="btn" id="huyNcc">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><thead><tr><th>NCC</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+oneRows(state.nccList,'NCC','editNcc','deleteNcc')+'</tbody></table></div></div><div class="panel"><div class="head"><h2>LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u</h2></div><div class="body form"><input id="editLoai" type="hidden"><label>NhÃƒÂ³m<select id="loaiNghiepVu"><option value="nhap">LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p</option><option value="xuat">LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t</option></select></label><label>TÃƒÂªn loÃ¡ÂºÂ¡i<input id="tenLoai"></label><button class="btn primary" id="luuLoai">LÃ†Â°u loÃ¡ÂºÂ¡i</button><button class="btn" id="huyLoai">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div><div class="wrap"><table><thead><tr><th>NhÃƒÂ³m</th><th>TÃƒÂªn loÃ¡ÂºÂ¡i</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+loaiRows()+'</tbody></table></div></div></div>')
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
    if(!isAdminUser())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c xÃƒÂ³a phiÃ¡ÂºÂ¿u XNK');
    var row=state.bd[i];if(!row)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var name=(row[1]||'')+' - '+(item(row[3])[1]||row[3]);
    if(!confirm('XÃƒÂ³a phiÃ¡ÂºÂ¿u '+name+'?\n\nTÃ¡Â»â€œn kho sÃ¡ÂºÂ½ tÃ¡Â»Â± tÃƒÂ­nh lÃ¡ÂºÂ¡i sau khi xÃƒÂ³a.'))return;
    reverseSlip(row);
    state.bd.splice(i,1);
    save();
    alert('Ã„ÂÃƒÂ£ xÃƒÂ³a phiÃ¡ÂºÂ¿u vÃƒÂ  cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t tÃ¡Â»â€œn kho');
    current='baocao';render();setTimeout(function(){showReport('xnk')},0);
  }
  function slipRowsWithDelete(){
    return state.bd.map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x;var buttons=[];
      if(canEditAny())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>');
      if(isAdminUser())buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃƒÂ³a</button>');
      var action=buttons.length?td('Thao tÃƒÂ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'';
      return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+action+'</tr>'
    }).join('')
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShow(mode,btn);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK';
    var actionHead=(canEditAny()||isAdminUser())?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsWithDelete()+'</tbody></table>';
  }
})();
;

(function(){
  if(window.__compactSoftUiPatch)return;window.__compactSoftUiPatch=true;
  if(document.getElementById('compact-soft-ui-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');st.id='compact-soft-ui-style-20260721-mobile-login-sync-1';
  st.textContent='html,body,.app,.app *,button,input,select,textarea,table,th,td{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important;letter-spacing:0!important}body{font-size:13px!important;font-weight:400!important;color:#18352a!important}main{padding:14px 16px 64px!important;max-width:1420px!important}h1{font-size:21px!important;font-weight:650!important;line-height:1.18!important;margin-bottom:3px!important}h2{font-size:14.5px!important;font-weight:650!important}.sub,.hint{font-size:12.5px!important;line-height:1.35!important}.brand{font-size:15.5px!important;font-weight:650!important}.brand span{font-size:11px!important}.brand-icon{width:38px!important;height:38px!important;border-radius:10px!important}aside{padding:14px 14px!important}.nav{font-size:13px!important;font-weight:550!important;min-height:34px!important;padding:8px 10px!important;border-radius:7px!important}.nav.active{font-weight:650!important}.panel,.card{border-radius:7px!important;box-shadow:0 6px 16px rgba(20,54,39,.06)!important}.head{padding:9px 12px!important}.body{padding:10px 12px!important}.form{gap:8px 10px!important}.stats{gap:8px!important;margin-bottom:10px!important}.card{padding:10px 12px!important}.card span{font-size:12px!important;font-weight:500!important}.card strong{font-size:20px!important;font-weight:650!important}.dash-card strong{font-size:24px!important}label{font-size:11.8px!important;font-weight:600!important;gap:4px!important}input,select{min-height:35px!important;padding:7px 9px!important;border-radius:6px!important;font-weight:450!important}.btn{min-height:34px!important;padding:7px 10px!important;border-radius:6px!important;font-size:12.8px!important;font-weight:550!important}.small{min-height:28px!important;padding:4px 7px!important;font-size:12px!important}.tag{min-height:20px!important;padding:2px 7px!important;font-size:11.5px!important;font-weight:600!important}table{font-size:12.8px!important}th{font-size:11.5px!important;font-weight:600!important}th,td{padding:7px 10px!important}.tabs{gap:6px!important;margin-bottom:10px!important}.tabs .btn{min-height:34px!important}.stock-card-row{padding:10px!important;border-radius:8px!important;gap:7px!important;box-shadow:0 5px 14px rgba(15,91,65,.06)!important}.stock-card-item{font-size:13.5px!important;font-weight:650!important}.stock-card-qty{font-size:12.8px!important;font-weight:650!important;padding:5px 9px!important}.stock-card-kho{font-size:12.3px!important;font-weight:550!important}.stock-card-kho:before{font-size:11px!important;padding:2px 7px!important}#tonStockCards{gap:8px!important;padding:10px!important}#ton .ton-search-panel-strong{box-shadow:0 6px 16px rgba(8,92,67,.12)!important}#ton .ton-search-panel-strong h2{font-weight:650!important}#ton .ton-search-field{font-weight:550!important;font-size:12.5px!important}#ton #timTon{min-height:44px!important;font-size:14px!important;font-weight:500!important;border-width:2px!important;border-radius:8px!important}.mobile-bar button{font-weight:650!important}@media(max-width:900px){body{font-size:13px!important}main{padding:72px 8px 82px!important}h1{font-size:19px!important}.panel{margin-bottom:8px!important}.head{padding:9px 10px!important}.body{padding:9px 10px!important}.mobile-title{height:64px!important}.mobile-title strong{font-size:15.5px!important;font-weight:700!important}.mobile-title span{font-size:10.8px!important}.mobile-logo{width:36px!important;height:36px!important}.stock-card-row{padding:10px!important}.stock-card-item{font-size:13.8px!important}.stock-card-qty{font-size:13px!important}.mobile-bar button{font-size:12px!important;min-height:52px!important}.mobile-bar button::before{height:20px!important;line-height:20px!important;margin-bottom:3px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__xuatOnlyStockedItems20260717)return;window.__xuatOnlyStockedItems20260717=true;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
      stockWarehouses(h[0]).forEach(function(w){html.push('<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">TÃ¡Â»â€œn '+fmt(w.sl)+' '+esc(itemUnit(h[0]))+' - '+esc(w.ten)+'</span></button>')});
    });
    if(!html.length)html.push('<div class="item-suggest-empty">KhÃƒÂ´ng cÃƒÂ³ hÃƒÂ ng nÃƒÂ o cÃƒÂ²n tÃ¡Â»â€œn phÃƒÂ¹ hÃ¡Â»Â£p</div>');
    box.innerHTML=html.slice(0,12).join('');box.classList.add('show');
  };
  var oldCap=window.capNhatKhoXuatTheoHang;
  window.capNhatKhoXuatTheoHang=function(){
    var input=el('hangXuat'),kho=el('khoXuat');if(!input||!kho)return;
    var ma=window.getItemCodeFromSearch('hangXuat');
    if(!ma){kho.innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='ChÃ¡Â»â€° gÃ¡Â»Â£i ÃƒÂ½ hÃƒÂ ng Ã„â€˜ang cÃƒÂ²n tÃ¡Â»â€œn. GÃƒÂµ tÃƒÂªn hÃƒÂ ng hoÃ¡ÂºÂ·c chÃ¡Â»Ân trong danh sÃƒÂ¡ch.';return}
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
      else{input.value='';input.dataset.code='';if(kho)kho.innerHTML='';if(el('goiYKhoXuat'))el('goiYKhoXuat').textContent='HiÃ¡Â»â€¡n chÃ†Â°a cÃƒÂ³ hÃƒÂ ng nÃƒÂ o cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t.'}
    }
    input.onfocus=window.renderXuatOnlyStockedSuggest;
    input.oninput=function(){window.renderXuatOnlyStockedSuggest();window.capNhatKhoXuatTheoHang()};
    input.onchange=window.capNhatKhoXuatTheoHang;
    window.capNhatKhoXuatTheoHang();
  };
})();
;

(function(){
  if(document.getElementById('mobile-top-safe-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');
  st.id='mobile-top-safe-style-20260721-mobile-login-sync-1';
  st.textContent='@media(max-width:900px){main{padding-top:calc(116px + env(safe-area-inset-top))!important;padding-bottom:calc(104px + env(safe-area-inset-bottom))!important} .mobile-title{height:calc(96px + env(safe-area-inset-top))!important;padding:calc(30px + env(safe-area-inset-top)) 12px 12px!important;align-items:flex-end!important} .mobile-title strong{font-size:17px!important;line-height:1.08!important} .mobile-title span{font-size:11px!important;line-height:1.18!important} #tongquan .top{margin-top:0!important;margin-bottom:8px!important} #tongquan h1{font-size:20px!important;line-height:1.15!important} #tongquan .sub{font-size:12.5px!important;line-height:1.25!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(document.getElementById('nhap-buttons-even-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');
  st.id='nhap-buttons-even-style-20260721-mobile-login-sync-1';
  st.textContent='#nhap #batHangMoi,#nhap #luuNhap{grid-column:1/-1!important;width:100%!important;min-height:42px!important;height:42px!important;border-radius:6px!important;padding:0 12px!important;display:flex!important;align-items:center!important;justify-content:center!important;font-weight:700!important;line-height:1.2!important;margin:0!important}#nhap #batHangMoi{background:#2f6f9f!important;border-color:#2f6f9f!important;color:#fff!important}#nhap #batHangMoi:hover{background:#2a628d!important;border-color:#2a628d!important;color:#fff!important}#nhap #luuNhap{background:#0f8d68!important;border-color:#0f8d68!important;color:#fff!important}#nhap #luuNhap:hover{background:#0b7656!important;border-color:#0b7656!important;color:#fff!important}@media(max-width:900px){#nhap #batHangMoi,#nhap #luuNhap{min-height:44px!important;height:44px!important;border-radius:8px!important;font-size:13px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__deleteSlipTypeClean20260717)return;window.__deleteSlipTypeClean20260717=true;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
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
    var msg='XÃƒÂ³a loÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u "'+v+'" khÃ¡Â»Âi danh sÃƒÂ¡ch chÃ¡Â»Ân?';
    if((state.bd||[]).some(function(b){return norm(b[4])===norm(v)}))msg+='\n\nLoÃ¡ÂºÂ¡i nÃƒÂ y Ã„â€˜ÃƒÂ£ dÃƒÂ¹ng trong phiÃ¡ÂºÂ¿u cÃƒâ€¦Ã‚Â©, bÃƒÂ¡o cÃƒÂ¡o cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ tÃƒÂªn loÃ¡ÂºÂ¡i Ã„â€˜Ã¡Â»Æ’ khÃƒÂ´ng mÃ¡ÂºÂ¥t lÃ¡Â»â€¹ch sÃ¡Â»Â­.';
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
  if(document.getElementById('nhap-buttons-web-fix-style-20260721-mobile-login-sync-1'))return;
  var st=document.createElement('style');
  st.id='nhap-buttons-web-fix-style-20260721-mobile-login-sync-1';
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
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
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
    var v=input.value.trim();if(!v)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn NCC');
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
    var msg='XÃƒÂ³a NCC "'+v+'" khÃ¡Â»Âi danh sÃƒÂ¡ch chÃ¡Â»Ân?';
    if((state.bd||[]).some(function(b){return norm(b[7])===norm(v)}))msg+='\n\nNCC nÃƒÂ y Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong phiÃ¡ÂºÂ¿u cÃƒâ€¦Ã‚Â©, phiÃ¡ÂºÂ¿u cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ tÃƒÂªn Ã„â€˜Ã¡Â»Æ’ khÃƒÂ´ng mÃ¡ÂºÂ¥t lÃ¡Â»â€¹ch sÃ¡Â»Â­.';
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
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
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
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃƒÂ´ng cÃƒÂ³ mÃƒÂ£ hÃƒÂ ng nÃƒÂ o cÃƒÂ²n tÃ¡Â»â€œn phÃƒÂ¹ hÃ¡Â»Â£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalByCode(h[0]);return '<button class="ton-suggest-row" type="button" data-value="'+esc(h[1])+'"><span class="ton-suggest-title">'+esc(h[0]+' - '+h[1])+'</span><span class="ton-suggest-meta">TÃ¡Â»â€¢ng: '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(placesByCode(h[0]))+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function bind(){
    if(current!=='ton')return;
    var input=document.getElementById('timTon');if(!input||input.__stockOnlyBound)return;
    input.__stockOnlyBound=true;
    input.removeAttribute('list');
    input.placeholder='GÃƒÂµ mÃƒÂ£ hÃƒÂ ng hoÃ¡ÂºÂ·c tÃƒÂªn hÃƒÂ ng Ã„â€˜ang cÃƒÂ²n tÃ¡Â»â€œn...';
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
  function groupOf(code){var h=item(code);return h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m'}
  function ensureGroup(map,name){if(!map[name])map[name]={items:{},ton:0,nhap:0,xuat:0};return map[name]}
  function groupRows(){
    var map={};
    (state.hang||[]).forEach(function(raw){var h=normalizeHang(raw);var g=ensureGroup(map,h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m');g.items[h[0]]=true});
    stockRows().forEach(function(r){var g=ensureGroup(map,r[2][2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m');g.items[r[1]]=true;g.ton+=Number(r[3]||0)});
    (state.bd||[]).forEach(function(x){var g=ensureGroup(map,groupOf(x[3]));g.items[x[3]]=true;g.nhap+=Number(x[5]||0);g.xuat+=Number(x[6]||0)});
    return Object.keys(map).sort(function(a,b){return a.localeCompare(b,'vi')}).map(function(name){var g=map[name];return {name:name,count:Object.keys(g.items).length,ton:g.ton,nhap:g.nhap,xuat:g.xuat}});
  }
  function reportHtml(){
    var rows=groupRows();
    if(!rows.length)return '<div class="empty">ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u nhÃƒÂ³m hÃƒÂ ng.</div>';
    return '<table><thead><tr><th>NhÃƒÂ³m hÃƒÂ ng</th><th>SÃ¡Â»â€˜ mÃ¡ÂºÂ·t hÃƒÂ ng</th><th>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</th><th>TÃ¡Â»â€¢ng nhÃ¡ÂºÂ­p</th><th>TÃ¡Â»â€¢ng xuÃ¡ÂºÂ¥t</th></tr></thead><tbody>'+rows.map(function(r){return '<tr>'+td('NhÃƒÂ³m hÃƒÂ ng',esc(r.name))+td('SÃ¡Â»â€˜ mÃ¡ÂºÂ·t hÃƒÂ ng',fmt(r.count),'num')+td('TÃ¡Â»â€¢ng tÃ¡Â»â€œn',fmt(r.ton),'num')+td('TÃ¡Â»â€¢ng nhÃ¡ÂºÂ­p',fmt(r.nhap),'num')+td('TÃ¡Â»â€¢ng xuÃ¡ÂºÂ¥t',fmt(r.xuat),'num')+'</tr>'}).join('')+'</tbody></table>';
  }
  var oldScreen=window.screenBaoCao;
  window.screenBaoCao=function(){
    var html=oldScreen();
    if(html.indexOf("showReport('nhomhang'")<0){
      html=html.replace('<button class="btn tab" onclick="showReport(\'ncc\',this)">TÃ¡Â»â€¢ng hÃ¡Â»Â£p NCC</button>','<button class="btn tab" onclick="showReport(\'nhomhang\',this)">Theo nhÃƒÂ³m hÃƒÂ ng</button><button class="btn tab" onclick="showReport(\'ncc\',this)">TÃ¡Â»â€¢ng hÃ¡Â»Â£p NCC</button>');
    }
    return html;
  };
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='nhomhang')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='BÃƒÂ¡o cÃƒÂ¡o theo nhÃƒÂ³m hÃƒÂ ng';
    el('rp').innerHTML=reportHtml();
  };
})();
;

(function(){
  if(window.__reportSearchEditSync20260717)return;window.__reportSearchEditSync20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
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
      var box='<div class="panel report-search-panel"><div class="head"><h2>TÃƒÂ¬m kiÃ¡ÂºÂ¿m bÃƒÂ¡o cÃƒÂ¡o</h2><button class="btn small" id="clearReportSearch" type="button">XÃƒÂ³a tÃƒÂ¬m</button></div><div class="body"><label class="full">Search tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£<input id="reportSearch" autocomplete="off" placeholder="GÃƒÂµ ngÃƒÂ y, sÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u, kho, hÃƒÂ ng, NCC, nhÃƒÂ³m hÃƒÂ ng..."></label><span class="tag" id="reportSearchCount"></span></div></div>';
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
    if(badge)badge.textContent=rows.length?(shown+' / '+rows.length+' dÃƒÂ²ng'):'';
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
    if(!canEditSlipFresh())return alert('TÃƒÂ i khoÃ¡ÂºÂ£n hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i khÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var row=state.bd[i];if(!row)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var hangOpts=(state.hang||[]).map(function(raw){var h=normalizeHang(raw);return [h[0],h[0]+' - '+h[1]]});
    if(!hangOpts.some(function(h){return h[0]===row[3]})){var old=item(row[3]);hangOpts.unshift([row[3],row[3]+' - '+(old[1]||row[3])])}
    if(document.getElementById('rpTitle'))document.getElementById('rpTitle').textContent='SÃ¡Â»Â­a phiÃ¡ÂºÂ¿u '+(row[1]||'');
    var html='<div class="body form"><input id="editSlipIndex" type="hidden" value="'+i+'"><label>NgÃƒÂ y<input id="editSlipDate" type="date" value="'+safe(row[0]||today)+'"></label><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="editSlipNo" value="'+safe(row[1]||'')+'" readonly></label><label>Kho<select id="editSlipKho">'+optPairsFresh(state.kho,row[2])+'</select></label><label>HÃƒÂ ng hÃƒÂ³a<select id="editSlipHang">'+optPairsFresh(hangOpts,row[3])+'</select></label><label>LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u<select id="editSlipLoai">'+currentSlipTypeOptions(row)+'</select></label><label>NCC/Ghi chÃƒÂº<input id="editSlipNcc" list="editSlipNccList" value="'+safe(row[7]||'')+'"><datalist id="editSlipNccList">'+nccDatalist(row[7]||'')+'</datalist></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng nhÃ¡ÂºÂ­p<input id="editSlipNhap" type="number" min="0" value="'+Number(row[5]||0)+'"></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng xuÃ¡ÂºÂ¥t<input id="editSlipXuat" type="number" min="0" value="'+Number(row[6]||0)+'"></label><p class="hint full">CÃƒÂ¡c ÃƒÂ´ Kho, HÃƒÂ ng hÃƒÂ³a, LoÃ¡ÂºÂ¡i phiÃ¡ÂºÂ¿u vÃƒÂ  NCC Ã„â€˜ang lÃ¡ÂºÂ¥y theo danh mÃ¡Â»Â¥c mÃ¡Â»â€ºi nhÃ¡ÂºÂ¥t bÃ¡ÂºÂ¡n Ã„â€˜ÃƒÂ£ sÃ¡Â»Â­a.</p><button class="btn primary" onclick="saveEditSlip()">LÃ†Â°u phiÃ¡ÂºÂ¿u Ã„â€˜ÃƒÂ£ sÃ¡Â»Â­a</button><button class="btn" onclick="showReport(\'xnk\')">HÃ¡Â»Â§y</button></div>';
    document.getElementById('rp').innerHTML=html;
  };
  window.saveEditSlip=function(){
    if(!canEditSlipFresh())return alert('TÃƒÂ i khoÃ¡ÂºÂ£n hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i khÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var i=Number(document.getElementById('editSlipIndex').value),old=state.bd[i];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var nhap=Number(document.getElementById('editSlipNhap').value||0),xuat=Number(document.getElementById('editSlipXuat').value||0);
    if(nhap<0||xuat<0)return alert('SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng khÃƒÂ´ng hÃ¡Â»Â£p lÃ¡Â»â€¡');
    if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('ChÃ¡Â»â€° nhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng Ã¡Â»Å¸ mÃ¡Â»â„¢t ÃƒÂ´: NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t');
    applySlipStock(old,-1);
    var row=[document.getElementById('editSlipDate').value,old[1],document.getElementById('editSlipKho').value,document.getElementById('editSlipHang').value,document.getElementById('editSlipLoai').value,nhap,xuat,document.getElementById('editSlipNcc').value.trim()];
    var key=row[2]+'|'+row[3],newStock=(state.ton[key]||0)+nhap-xuat;
    if(newStock<0){applySlipStock(old,1);return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn kho sau khi sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t')}
    state.bd[i]=row;applySlipStock(row,1);if(typeof touchState==='function')touchState();save();alert('Ã„ÂÃƒÂ£ sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u vÃƒÂ  cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t tÃ¡Â»â€œn kho');current='baocao';render();setTimeout(function(){showReport('xnk');bindReportSearch()},0);
  };
})();
;

(function(){
  if(window.__reportGroupDetail20260717)return;window.__reportGroupDetail20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  window.__openReportGroupName='';
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function groupNameOf(raw){var h=normalizeHang(raw);return h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m'}
  function stockFor(kho,hang){return Number((state.ton||{})[kho+'|'+hang]||0)}
  function itemTotal(code){return (state.kho||[]).reduce(function(sum,k){return sum+stockFor(k[0],code)},0)}
  function khoText(code){
    var parts=(state.kho||[]).map(function(k){return {name:k[1]||k[0],qty:stockFor(k[0],code)}}).filter(function(x){return x.qty>0});
    return parts.length?parts.map(function(x){return esc(x.name)+': <b>'+fmt(x.qty)+'</b>'}).join(' | '):'<span class="muted">ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn trong kho</span>';
  }
  function groupRowsDetail(){
    var map={};
    (state.hang||[]).forEach(function(raw){
      var h=normalizeHang(raw),g=h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m';
      if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};
      map[g].items.push(h);
    });
    (state.bd||[]).forEach(function(x){
      var g=(item(x[3])[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m');
      if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};
      map[g].nhap+=Number(x[5]||0);map[g].xuat+=Number(x[6]||0);
    });
    Object.keys(map).forEach(function(g){map[g].ton=map[g].items.reduce(function(s,h){return s+itemTotal(h[0])},0)});
    return Object.keys(map).sort(function(a,b){return a.localeCompare(b,'vi')}).map(function(name){var g=map[name];return {name:name,count:g.items.length,ton:g.ton,nhap:g.nhap,xuat:g.xuat,items:g.items}});
  }
  function groupDetailHtml(group){
    if(!group)return '';
    var rows=group.items.slice().sort(function(a,b){return String(a[1]).localeCompare(String(b[1]),'vi')});
    if(!rows.length)return '<div class="group-detail"><div class="empty">NhÃƒÂ³m nÃƒÂ y chÃ†Â°a cÃƒÂ³ hÃƒÂ ng hÃƒÂ³a.</div></div>';
    return '<div class="group-detail"><div class="head"><h2>Chi tiÃ¡ÂºÂ¿t nhÃƒÂ³m: '+esc(group.name)+'</h2><span class="tag">'+fmt(rows.length)+' mÃ¡ÂºÂ·t hÃƒÂ ng</span></div><div class="wrap"><table><thead><tr><th>TÃƒÂªn hÃƒÂ ng</th><th>Ã„ÂVT</th><th>TÃ¡Â»â€œn tÃ¡Â»Â«ng kho</th><th>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</th></tr></thead><tbody>'+rows.map(function(h){var total=itemTotal(h[0]);return '<tr>'+td('TÃƒÂªn hÃƒÂ ng',esc(h[1]||h[0]))+td('Ã„ÂVT',esc(h[3]||''))+td('TÃ¡Â»â€œn tÃ¡Â»Â«ng kho',khoText(h[0]))+td('TÃ¡Â»â€¢ng tÃ¡Â»â€œn',fmt(total),'num')+'</tr>'}).join('')+'</tbody></table></div></div>';
  }
  function reportHtml(){
    var rows=groupRowsDetail();
    if(!rows.length)return '<div class="empty">ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u nhÃƒÂ³m hÃƒÂ ng.</div>';
    var open=window.__openReportGroupName||rows[0].name;
    var openGroup=rows.find(function(r){return r.name===open})||rows[0];
    window.__openReportGroupName=openGroup.name;
    return '<table class="group-report"><thead><tr><th>NhÃƒÂ³m hÃƒÂ ng</th><th>SÃ¡Â»â€˜ mÃ¡ÂºÂ·t hÃƒÂ ng</th><th>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</th><th>TÃ¡Â»â€¢ng nhÃ¡ÂºÂ­p</th><th>TÃ¡Â»â€¢ng xuÃ¡ÂºÂ¥t</th></tr></thead><tbody>'+rows.map(function(r){var active=r.name===openGroup.name?' active-group':'';var encoded=encodeURIComponent(r.name);return '<tr class="group-row'+active+'">'+td('NhÃƒÂ³m hÃƒÂ ng','<button class="btn small group-toggle" onclick="openReportGroup(decodeURIComponent(\''+encoded+'\'))">'+esc(r.name)+'</button>')+td('SÃ¡Â»â€˜ mÃ¡ÂºÂ·t hÃƒÂ ng',fmt(r.count),'num')+td('TÃ¡Â»â€¢ng tÃ¡Â»â€œn',fmt(r.ton),'num')+td('TÃ¡Â»â€¢ng nhÃ¡ÂºÂ­p',fmt(r.nhap),'num')+td('TÃ¡Â»â€¢ng xuÃ¡ÂºÂ¥t',fmt(r.xuat),'num')+'</tr>'}).join('')+'</tbody></table>'+groupDetailHtml(openGroup);
  }
  window.openReportGroup=function(name){window.__openReportGroupName=name;showReport('nhomhang');if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0)};
  var css=document.createElement('style');
  css.textContent='.group-report .active-group{background:#eefcf5}.group-toggle{font-weight:700;color:#007a5b}.group-detail{margin-top:12px;border-top:1px solid var(--line)}.group-detail .head{background:#f5fbf8}.group-detail table td:nth-child(3){color:#006b50}.muted{color:#66756f}@media(max-width:720px){.group-detail table td[data-label="TÃ¡Â»â€œn tÃ¡Â»Â«ng kho"]{font-weight:600;line-height:1.45}}';
  document.head.appendChild(css);
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='nhomhang')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='BÃƒÂ¡o cÃƒÂ¡o theo nhÃƒÂ³m hÃƒÂ ng';
    el('rp').innerHTML=reportHtml();
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
})();
;

(function(){
  if(window.__reportCompactLayout20260717)return;window.__reportCompactLayout20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
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
    return chips.length?chips.join(''):'<span class="muted">ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn</span>';
  }
  function warehouseCards(){
    var rows=(state.kho||[]).map(function(k){var total=Object.keys(state.ton||{}).filter(function(key){return key.indexOf(k[0]+'|')===0}).reduce(function(s,key){return s+Number(state.ton[key]||0)},0);return {id:k[0],name:k[1]||k[0],total:total}});
    if(!window.__selectedReportKho&&rows.length)window.__selectedReportKho=rows[0].id;
    return '<div class="report-card-grid warehouse-grid">'+rows.map(function(r){var active=r.id===window.__selectedReportKho?' active':'';return '<button class="report-card kho-card'+active+'" onclick="openCompactKho(\''+enc(r.id)+'\')"><span>'+esc(r.name)+'</span><strong>'+fmt(r.total)+'</strong><small>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</small></button>'}).join('')+'</div>';
  }
  function warehouseDetail(maKho){
    var rows=stockRowsByKho(maKho),name=nameKho(maKho);
    if(!rows.length)return '<div class="compact-detail"><div class="head"><h2>'+esc(name)+'</h2><span class="tag">0 mÃ¡ÂºÂ·t hÃƒÂ ng</span></div><div class="empty">Kho nÃƒÂ y chÃ†Â°a cÃƒÂ³ hÃƒÂ ng tÃ¡Â»â€œn.</div></div>';
    return '<div class="compact-detail"><div class="head"><h2>'+esc(name)+'</h2><span class="tag">'+fmt(rows.length)+' mÃ¡ÂºÂ·t hÃƒÂ ng</span></div><div class="report-item-grid">'+rows.map(function(r){return '<div class="report-item-card"><div><h3>'+esc(r[2][1])+'</h3><p>'+esc(r[2][2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' Ã‚Â· '+esc(r[2][3]||'')+'</p></div><strong>'+fmt(r[3])+'</strong></div>'}).join('')+'</div></div>';
  }
  window.openCompactKho=function(id){window.__selectedReportKho=decodeURIComponent(id);showReport('tk');if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0)};
  function reportTk(){return '<p class="hint compact-hint">BÃ¡ÂºÂ¥m vÃƒÂ o tÃ¡Â»Â«ng kho Ã„â€˜Ã¡Â»Æ’ xem nhanh cÃƒÂ¡c mÃ¡ÂºÂ·t hÃƒÂ ng Ã„â€˜ang tÃ¡Â»â€œn.</p>'+warehouseCards()+'<div id="rpDetail">'+warehouseDetail(window.__selectedReportKho||((state.kho[0]||[])[0]))+'</div>'}
  function reportHh(){
    var rows=(state.hang||[]).map(function(raw){var h=normalizeHang(raw);return {h:h,total:totalItem(h[0])}}).sort(function(a,b){return b.total-a.total||String(a.h[1]).localeCompare(String(b.h[1]),'vi')});
    return '<div class="report-item-grid">'+rows.map(function(r){return '<div class="report-item-card"><div><h3>'+esc(r.h[1]||r.h[0])+'</h3><p>'+esc(r.h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' Ã‚Â· '+esc(r.h[3]||'')+'</p><div class="stock-chip-row">'+khoChips(r.h[0])+'</div></div><strong>'+fmt(r.total)+'</strong></div>'}).join('')+'</div>';
  }
  function reportTq(){
    var totalTon=Object.values(state.ton||{}).reduce(function(a,b){return a+Number(b||0)},0);
    return '<div class="report-card-grid"><div class="report-card"><span>TÃ¡Â»â€¢ng kho</span><strong>'+fmt((state.kho||[]).length)+'</strong></div><div class="report-card"><span>MÃ¡ÂºÂ·t hÃƒÂ ng</span><strong>'+fmt((state.hang||[]).length)+'</strong></div><div class="report-card"><span>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</span><strong>'+fmt(totalTon)+'</strong></div><div class="report-card"><span>PhiÃ¡ÂºÂ¿u XNK</span><strong>'+fmt((state.bd||[]).length)+'</strong></div></div>';
  }
  function reportNcc(){
    var m={};(state.bd||[]).forEach(function(x){if(Number(x[5]||0)>0){var key=x[7]||'ChÃ†Â°a chÃ¡Â»Ân NCC';if(!m[key])m[key]={qty:0,slip:0};m[key].qty+=Number(x[5]||0);m[key].slip+=1}});
    var rows=Object.keys(m).sort(function(a,b){return a.localeCompare(b,'vi')});
    return '<table class="compact-table"><thead><tr><th>NCC</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>TÃ¡Â»â€¢ng nhÃ¡ÂºÂ­p</th></tr></thead><tbody>'+rows.map(function(k){return '<tr>'+td('NCC',esc(k))+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',fmt(m[k].slip),'num')+td('TÃ¡Â»â€¢ng nhÃ¡ÂºÂ­p',fmt(m[k].qty),'num')+'</tr>'}).join('')+'</tbody></table>';
  }
  function reportIt(){
    var m={};(state.thietBiIT||[]).forEach(function(x){x=normalizeThietBi(x);var key=x[5]||'ChÃ†Â°a gÃƒÂ¡n';if(!m[key])m[key]={total:0,using:0,stock:0};m[key].total+=1;if(x[6]==='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng')m[key].using+=1;if(x[6]==='Trong kho')m[key].stock+=1});
    var rows=Object.keys(m).sort(function(a,b){return a.localeCompare(b,'vi')});
    return '<table class="compact-table"><thead><tr><th>NgÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban</th><th>TÃ¡Â»â€¢ng</th><th>Ã„Âang dÃƒÂ¹ng</th><th>Trong kho</th></tr></thead><tbody>'+rows.map(function(k){return '<tr>'+td('NgÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban',esc(k))+td('TÃ¡Â»â€¢ng',fmt(m[k].total),'num')+td('Ã„Âang dÃƒÂ¹ng',fmt(m[k].using),'num')+td('Trong kho',fmt(m[k].stock),'num')+'</tr>'}).join('')+'</tbody></table>';
  }
  function groupData(){
    var map={};
    (state.hang||[]).forEach(function(raw){var h=normalizeHang(raw),g=h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m';if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};map[g].items.push(h)});
    (state.bd||[]).forEach(function(x){var g=(item(x[3])[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m');if(!map[g])map[g]={items:[],ton:0,nhap:0,xuat:0};map[g].nhap+=Number(x[5]||0);map[g].xuat+=Number(x[6]||0)});
    Object.keys(map).forEach(function(g){map[g].ton=map[g].items.reduce(function(s,h){return s+totalItem(h[0])},0)});
    return Object.keys(map).sort(function(a,b){return a.localeCompare(b,'vi')}).map(function(name){var g=map[name];return {name:name,count:g.items.length,ton:g.ton,nhap:g.nhap,xuat:g.xuat,items:g.items}});
  }
  window.openCompactGroup=function(name){window.__openReportGroupName=decodeURIComponent(name);showReport('nhomhang');if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0)};
  function reportGroup(){
    var rows=groupData();if(!rows.length)return '<div class="empty">ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u nhÃƒÂ³m hÃƒÂ ng.</div>';
    var open=window.__openReportGroupName||rows[0].name,group=rows.find(function(r){return r.name===open})||rows[0];window.__openReportGroupName=group.name;
    var tabs='<div class="report-card-grid group-grid">'+rows.map(function(r){var active=r.name===group.name?' active':'';return '<button class="report-card group-card'+active+'" onclick="openCompactGroup(\''+enc(r.name)+'\')"><span>'+esc(r.name)+'</span><strong>'+fmt(r.ton)+'</strong><small>'+fmt(r.count)+' mÃ¡ÂºÂ·t hÃƒÂ ng</small></button>'}).join('')+'</div>';
    var items=group.items.slice().sort(function(a,b){return String(a[1]).localeCompare(String(b[1]),'vi')});
    var detail='<div class="compact-detail"><div class="head"><h2>'+esc(group.name)+'</h2><span class="tag">'+fmt(items.length)+' mÃ¡ÂºÂ·t hÃƒÂ ng</span></div><div class="report-item-grid">'+items.map(function(h){return '<div class="report-item-card"><div><h3>'+esc(h[1]||h[0])+'</h3><p>Ã„ÂVT: '+esc(h[3]||'')+'</p><div class="stock-chip-row">'+khoChips(h[0])+'</div></div><strong>'+fmt(totalItem(h[0]))+'</strong></div>'}).join('')+'</div></div>';
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
    var title={tk:'TÃ¡Â»â€œn tÃ¡Â»Â«ng kho',tq:'TÃ¡Â»â€¢ng quan',hh:'TÃ¡Â»â€œn theo hÃƒÂ ng hÃƒÂ³a',ncc:'TÃ¡Â»â€¢ng hÃ¡Â»Â£p theo NCC',it:'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng',nhomhang:'BÃƒÂ¡o cÃƒÂ¡o theo nhÃƒÂ³m hÃƒÂ ng'}[mode];
    el('rpTitle').textContent=title;
    var html={tk:reportTk,tq:reportTq,hh:reportHh,ncc:reportNcc,it:reportIt,nhomhang:reportGroup}[mode]();
    el('rp').innerHTML=html;
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
})();
;

(function(){
  if(window.__stockSearchGroup20260717)return;window.__stockSearchGroup20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
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
    if(!rows.length){box.innerHTML='<div class="ton-suggest-empty">KhÃƒÂ´ng cÃƒÂ³ hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn phÃƒÂ¹ hÃ¡Â»Â£p</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=itemTotal(h[0]),ps=places(h[0],h[3]);return '<button class="ton-suggest-row" type="button" data-value="'+esc(h[1])+'"><span class="ton-suggest-title">'+esc(h[1])+'</span><span class="ton-suggest-meta">NhÃƒÂ³m: '+esc(h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' Ã‚Â· TÃ¡Â»â€¢ng: '+fmt(total)+' '+esc(h[3]||'')+(ps.length?' Ã‚Â· '+esc(ps.join(' | ')):'')+'</span></button>'}).join('');
    box.classList.add('show');
  }
  function applyCardSearch(){
    var input=document.getElementById('timTon'),badge=document.getElementById('soDongTon');if(!input)return;
    var q=norm(input.value),shown=0;
    document.querySelectorAll('#tonStockCards .stock-card-row').forEach(function(card){var ok=!q||norm(card.getAttribute('data-search')).indexOf(q)>=0;card.style.display=ok?'grid':'none';if(ok)shown++});
    document.querySelectorAll('#tonRowsBody tr').forEach(function(row){var ok=!q||norm(row.getAttribute('data-search')).indexOf(q)>=0;row.style.display=ok?'':'none'});
    if(badge)badge.textContent=shown+' dÃƒÂ²ng';
  }
  function bind(){
    if(window.current!=='ton')return;
    var input=document.getElementById('timTon'),clear=document.getElementById('xoaTimTon');if(!input)return;
    input.removeAttribute('list');
    input.placeholder='GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, kho hoÃ¡ÂºÂ·c nhÃƒÂ³m hÃƒÂ ng Ã„â€˜ang cÃƒÂ²n tÃ¡Â»â€œn...';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var HIDDEN=['CÃƒÂ´ng ty VÃ„Æ’n phÃƒÂ²ng phÃ¡ÂºÂ©m An PhÃƒÂ¡t','CÃ¡Â»Â­a hÃƒÂ ng ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ Minh Long','NhÃƒÂ  cung cÃ¡ÂºÂ¥p khÃƒÂ¡c'];
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function exportNeedsReceiver(type){return String(type||'').indexOf('Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n')<0&&String(type||'').indexOf('dieu chuyen')<0}
  window.screenXuat=function(){return shell('xuat','XuÃ¡ÂºÂ¥t kho','GÃƒÂµ tÃƒÂªn hÃƒÂ ng, app sÃ¡ÂºÂ½ hiÃ¡Â»â€¡n tÃƒÂªn hÃƒÂ ng - sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng tÃ¡Â»â€œn - kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label>Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n / BÃ¡Â»â„¢ phÃ¡ÂºÂ­n nhÃ¡ÂºÂ­n<input id="nguoiNhanXuat" placeholder="VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A - PhÃƒÂ²ng HC"></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>')};
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(el('hangXuat')?el('hangXuat').value:'');
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    if(!el('khoXuat').value)return alert('HÃƒÂ ng nÃƒÂ y chÃ†Â°a cÃƒÂ³ kho cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    var loai=el('loaiXuat').value,nguoiNhan=el('nguoiNhanXuat')?el('nguoiNhanXuat').value.trim():'';
    if(exportNeedsReceiver(loai)&&!nguoiNhan)return alert('NhÃ¡ÂºÂ­p ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n hoÃ¡ÂºÂ·c bÃ¡Â»â„¢ phÃ¡ÂºÂ­n nhÃ¡ÂºÂ­n Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoXuat').value+'|'+maHang;
    if((state.ton[key]||0)<sl)return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    state.ton[key]-=sl;
    var row=[today,el('soXuat').value,el('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    state.bd.push(row);
    if(loai==='XuÃ¡ÂºÂ¥t Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');veTongQuanSauLuu();
  };
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():((typeof currentRole==='function'?currentRole():currentRole)==='admin')}catch(e){return false}}
  function slipRowsRecipient(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];
      if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>');
      if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃƒÂ³a</button>');
      var action=buttons.length?td('Thao tÃƒÂ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'';
      return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+action+'</tr>';
    }).join('');
  }
  var oldShowReport=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShowReport.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;
    el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsRecipient()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  var oldEditSlip=window.editSlip;
  window.editSlip=function(i){
    if(typeof canEditSlipFresh==='function'&&!canEditSlipFresh())return alert('TÃƒÂ i khoÃ¡ÂºÂ£n hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i khÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u');
    var row=state.bd[i];if(!row)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    if(typeof oldEditSlip==='function')oldEditSlip.apply(this,arguments);
    setTimeout(function(){
      var label=document.querySelector('label input#editSlipNcc');
      if(label&&label.parentElement){
        var isExport=Number(row[6]||0)>0;
        label.parentElement.childNodes[0].nodeValue=isExport?'NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/BÃ¡Â»â„¢ phÃ¡ÂºÂ­n nhÃ¡ÂºÂ­n':'NCC/Ghi chÃƒÂº';
        label.placeholder=isExport?'VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A - PhÃƒÂ²ng HC':'';
      }
      var hint=document.querySelector('#rp .hint.full');
      if(hint)hint.textContent='ThÃƒÂ´ng tin NCC hoÃ¡ÂºÂ·c ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n sÃ¡ÂºÂ½ Ã„â€˜Ã†Â°Ã¡Â»Â£c lÃ†Â°u theo phiÃ¡ÂºÂ¿u vÃƒÂ  Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ lÃƒÂªn bÃƒÂ¡o cÃƒÂ¡o.';
    },0);
  };
})();
;

(function(){
  if(window.__receiverDirectory20260717)return;window.__receiverDirectory20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
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
    var v=el('tenReceiver').value.trim();if(!v)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n hoÃ¡ÂºÂ·c bÃ¡Â»â„¢ phÃ¡ÂºÂ­n sÃ¡Â»Â­ dÃ¡Â»Â¥ng');
    var i=el('editReceiver').value;
    if(i===''){if(state.receiverList.some(function(x){return norm(x)===norm(v)}))return alert('TÃƒÂªn nÃƒÂ y Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong danh mÃ¡Â»Â¥c');state.receiverList.push(v)}
    else{var old=state.receiverList[Number(i)];state.receiverList[Number(i)]=v;(state.bd||[]).forEach(function(b){if(Number(b[6]||0)>0&&b[7]===old)b[7]=v});(state.thietBiIT||[]).forEach(function(raw){var x=normalizeThietBi(raw);if(x[5]===old)x[5]=v})}
    state.receiverList=state.receiverList.filter(Boolean).sort(function(a,b){return a.localeCompare(b,'vi')});
    save();render();
  }
  window.deleteReceiver=function(i){
    ensureReceivers(state);
    var v=state.receiverList[i];if(!v)return;
    var used=(state.bd||[]).some(function(b){return Number(b[6]||0)>0&&b[7]===v})||(state.thietBiIT||[]).some(function(raw){return normalizeThietBi(raw)[5]===v});
    if(used){if(!confirm('TÃƒÂªn "'+v+'" Ã„â€˜ang cÃƒÂ³ trong phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t hoÃ¡ÂºÂ·c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.\n\nKhi xÃƒÂ³a, dÃ¡Â»Â¯ liÃ¡Â»â€¡u cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ tÃƒÂªn nÃƒÂ y Ã„â€˜Ã¡Â»Æ’ khÃƒÂ´ng mÃ¡ÂºÂ¥t lÃ¡Â»â€¹ch sÃ¡Â»Â­. BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n xÃƒÂ³a khÃ¡Â»Âi danh mÃ¡Â»Â¥c gÃ¡Â»Â£i ÃƒÂ½ chÃ¡Â»Â©?'))return}
    else if(!confirm('XÃƒÂ³a "'+v+'" khÃ¡Â»Âi danh mÃ¡Â»Â¥c ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/bÃ¡Â»â„¢ phÃ¡ÂºÂ­n sÃ¡Â»Â­ dÃ¡Â»Â¥ng?'))return;
    state.receiverList.splice(i,1);save();render();
  }
  function receiverRows(){ensureReceivers(state);return (state.receiverList||[]).map(function(x,i){return '<tr>'+td('NgÃ†Â°Ã¡Â»Âi/BÃ¡Â»â„¢ phÃ¡ÂºÂ­n',esc(x))+td('Thao tÃƒÂ¡c','<span class="row-actions"><button class="btn small" onclick="editReceiver('+i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteReceiver('+i+')">XÃƒÂ³a</button></span>')+'</tr>'}).join('')||'<tr><td class="empty" colspan="2">ChÃ†Â°a cÃƒÂ³ ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/bÃ¡Â»â„¢ phÃ¡ÂºÂ­n sÃ¡Â»Â­ dÃ¡Â»Â¥ng.</td></tr>'}
  function receiverPanel(){return '<div class="panel"><div class="head"><h2>NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/BÃ¡Â»â„¢ phÃ¡ÂºÂ­n sÃ¡Â»Â­ dÃ¡Â»Â¥ng</h2></div><div class="body form"><input id="editReceiver" type="hidden"><label class="full">TÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n hoÃ¡ÂºÂ·c bÃ¡Â»â„¢ phÃ¡ÂºÂ­n<input id="tenReceiver" list="receiverSettingList" placeholder="VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A - PhÃƒÂ²ng HC"><datalist id="receiverSettingList">'+receiverOptions('')+'</datalist></label><button class="btn primary" id="luuReceiver">LÃ†Â°u</button><button class="btn" id="huyReceiver">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full">Danh mÃ¡Â»Â¥c nÃƒÂ y dÃƒÂ¹ng chung cho phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t vÃƒÂ  thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.</p></div><div class="wrap"><table><thead><tr><th>NgÃ†Â°Ã¡Â»Âi/BÃ¡Â»â„¢ phÃ¡ÂºÂ­n</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+receiverRows()+'</tbody></table></div></div>'}
  var oldSettings=window.screenThietLap;
  window.screenThietLap=function(){
    var html=oldSettings.apply(this,arguments);
    if(html.indexOf('NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/BÃ¡Â»â„¢ phÃ¡ÂºÂ­n sÃ¡Â»Â­ dÃ¡Â»Â¥ng')>=0)return html;
    if(typeof isAdmin==='function'&&!isAdmin())return html;
    var panel=receiverPanel(),needle='</div></section>',pos=html.lastIndexOf(needle);
    return pos>=0?html.slice(0,pos)+panel+html.slice(pos):html.replace('</section>',panel+'</section>');
  }
  window.screenXuat=function(){return shell('xuat','XuÃ¡ÂºÂ¥t kho','GÃƒÂµ tÃƒÂªn hÃƒÂ ng, app sÃ¡ÂºÂ½ hiÃ¡Â»â€¡n tÃƒÂªn hÃƒÂ ng - sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng tÃ¡Â»â€œn - kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label>Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n / BÃ¡Â»â„¢ phÃ¡ÂºÂ­n nhÃ¡ÂºÂ­n<input id="nguoiNhanXuat" list="receiverXuatList" placeholder="VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A - PhÃƒÂ²ng HC"><datalist id="receiverXuatList">'+receiverOptions('')+'</datalist></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>')};
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(el('hangXuat')?el('hangXuat').value:'');
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    if(!el('khoXuat').value)return alert('HÃƒÂ ng nÃƒÂ y chÃ†Â°a cÃƒÂ³ kho cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    var loai=el('loaiXuat').value,nguoiNhan=el('nguoiNhanXuat')?el('nguoiNhanXuat').value.trim():'';
    if(String(loai||'').toLowerCase().indexOf('Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n')<0&&String(loai||'').toLowerCase().indexOf('dieu chuyen')<0&&!nguoiNhan)return alert('NhÃ¡ÂºÂ­p ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n hoÃ¡ÂºÂ·c bÃ¡Â»â„¢ phÃ¡ÂºÂ­n nhÃ¡ÂºÂ­n Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoXuat').value+'|'+maHang;if((state.ton[key]||0)<sl)return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    state.ton[key]-=sl;addReceiverName(nguoiNhan);
    var row=[today,el('soXuat').value,el('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    state.bd.push(row);
    if(loai==='XuÃ¡ÂºÂ¥t Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');veTongQuanSauLuu();
  }
  var oldScreenThietBi=window.screenThietBi;
  if(typeof oldScreenThietBi==='function')window.screenThietBi=function(){
    var html=oldScreenThietBi.apply(this,arguments),list='<datalist id="receiverItList">'+receiverOptions('')+'</datalist>';
    html=html.replace('id="nguoiDungThietBi" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban/kho"','id="nguoiDungThietBi" list="receiverItList" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban/kho"');
    if(html.indexOf('id="receiverItList"')<0)html=html.replace('<label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi">',list+'<label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi">');return html;
  }
  var oldSaveThietBi=window.saveThietBi;
  if(typeof oldSaveThietBi==='function')window.saveThietBi=function(){var v=el('nguoiDungThietBi')?el('nguoiDungThietBi').value.trim():'';var out=oldSaveThietBi.apply(this,arguments);if(v&&v!=='Trong kho'){addReceiverName(v);save()}return out}
  var oldBind=window.bindForms;
  window.bindForms=function(){oldBind.apply(this,arguments);if(el('luuReceiver'))el('luuReceiver').onclick=saveReceiver;if(el('huyReceiver'))el('huyReceiver').onclick=resetReceiver}
})();
;

(function(){
  if(window.__dateFormatVi20260717)return;window.__dateFormatVi20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
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
    if(label==='NgÃƒÂ y'||label==='NgÃƒÂ y nhÃ¡ÂºÂ­p'||label==='NgÃƒÂ y tÃ¡ÂºÂ¡o'||label==='NgÃƒÂ y sÃ¡Â»Â­a')val=formatDateVi(val);
    return oldTd(label,val,cls);
  };
})();
;

(function(){
  if(window.__compactSearchSlipFilter20260717)return;window.__compactSearchSlipFilter20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  window.__reportSlipFilter=window.__reportSlipFilter||'all';
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d')}
  function cellText(row,label){var c=row.querySelector('td[data-label="'+label+'"]');return c?c.textContent.trim():''}
  function isXnkReport(){var t=document.getElementById('rpTitle');return t&&t.textContent.indexOf('Chi tiÃ¡ÂºÂ¿t XNK')>=0}
  function rowKind(row){
    var nhap=cellText(row,'NhÃ¡ÂºÂ­p'),xuat=cellText(row,'XuÃ¡ÂºÂ¥t');
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
    if(badge)badge.textContent=rows.length?(shown+' / '+rows.length+' dÃƒÂ²ng'):'';
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
      body.insertAdjacentHTML('afterbegin','<div class="report-filter-pills" id="reportSlipFilter"><button class="active" type="button" data-filter="all" onclick="setReportSlipFilter(\'all\')">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£</button><button type="button" data-filter="nhap" onclick="setReportSlipFilter(\'nhap\')">PhiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button><button type="button" data-filter="xuat" onclick="setReportSlipFilter(\'xuat\')">PhiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div>');
    }
    input.placeholder='TÃƒÂ¬m ngÃƒÂ y, sÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u, kho, hÃƒÂ ng, NCC/ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n...';
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
  var st=document.createElement('style');st.id='compact-search-slip-filter-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var st=document.createElement('style');st.id='hide-report-count-style-20260721-mobile-login-sync-1';
  st.textContent='#reportSearchCount{display:none!important}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__searchToolbarCompactAll20260717)return;window.__searchToolbarCompactAll20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var st=document.createElement('style');st.id='search-toolbar-compact-all-style-20260721-mobile-login-sync-1';
  st.textContent='.report-search-panel.compact-search-panel,.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{display:grid!important;grid-template-columns:auto 1fr auto!important;align-items:center!important;gap:8px!important;padding:7px 10px!important;margin:5px 0 8px!important;background:#f9fffc!important;border:1px solid #b9d8cc!important;border-radius:8px!important;box-shadow:0 3px 10px rgba(8,71,49,.05)!important}.report-search-panel.compact-search-panel .head,.ton-search-panel-strong.compact-search-panel .head,#ton .search-panel.compact-search-panel .head{display:contents!important;background:transparent!important;border:0!important;padding:0!important}.report-search-panel.compact-search-panel .head h2,.ton-search-panel-strong.compact-search-panel .head h2,#ton .search-panel.compact-search-panel .head h2{font-size:12.5px!important;margin:0!important;white-space:nowrap!important;color:#0b4e3d!important}.report-search-panel.compact-search-panel .head .btn,.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:3!important;grid-row:1!important;min-height:32px!important;padding:5px 9px!important;background:#fff!important}.report-search-panel.compact-search-panel .body,.ton-search-panel-strong.compact-search-panel .body,#ton .search-panel.compact-search-panel .body{display:grid!important;grid-template-columns:auto minmax(240px,1fr)!important;align-items:center!important;gap:7px!important;padding:0!important;background:transparent!important}.report-search-panel.compact-search-panel label,.ton-search-panel-strong.compact-search-panel label,#ton .search-panel.compact-search-panel label{display:block!important;margin:0!important;font-size:0!important;color:transparent!important}.report-search-panel.compact-search-panel input,.ton-search-panel-strong.compact-search-panel input,#ton .search-panel.compact-search-panel input{margin:0!important;min-height:33px!important;font-size:13px!important;border:1.5px solid #07966f!important;border-radius:7px!important;background:#fff!important;box-shadow:0 0 0 2px rgba(7,150,111,.06)!important}.report-filter-pills{grid-column:1!important;grid-row:1!important}.report-filter-pills button{min-height:31px!important;padding:5px 9px!important;font-size:12px!important}.ton-suggest-list{grid-column:1/-1!important;margin-top:4px!important}@media(max-width:900px){.report-search-panel.compact-search-panel,.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{grid-template-columns:1fr auto!important;padding:7px!important}.report-search-panel.compact-search-panel .head h2,.ton-search-panel-strong.compact-search-panel .head h2,#ton .search-panel.compact-search-panel .head h2{display:none!important}.report-search-panel.compact-search-panel .body,.ton-search-panel-strong.compact-search-panel .body,#ton .search-panel.compact-search-panel .body{grid-column:1/-1!important;grid-template-columns:1fr!important;width:100%!important}.report-filter-pills{grid-template-columns:repeat(3,1fr)!important;display:grid!important;width:100%!important}.report-search-panel.compact-search-panel input,#ton #timTon{min-height:38px!important;font-size:15px!important}.report-search-panel.compact-search-panel .head .btn,.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:2!important;grid-row:1!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__searchInputWider20260717)return;window.__searchInputWider20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var st=document.createElement('style');st.id='search-input-wider-style-20260721-mobile-login-sync-1';
  st.textContent='.report-search-panel.compact-search-panel{grid-template-columns:1fr auto!important}.report-search-panel.compact-search-panel .head h2{display:none!important}.report-search-panel.compact-search-panel .body{grid-column:1!important;grid-row:1!important;grid-template-columns:auto minmax(560px,1fr)!important;width:100%!important}.report-search-panel.compact-search-panel .head .btn{grid-column:2!important;grid-row:1!important}.report-search-panel.compact-search-panel label,.report-search-panel.compact-search-panel input{width:100%!important}.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{grid-template-columns:1fr auto!important}.ton-search-panel-strong.compact-search-panel .head h2,#ton .search-panel.compact-search-panel .head h2{display:none!important}.ton-search-panel-strong.compact-search-panel .body,#ton .search-panel.compact-search-panel .body{grid-column:1!important;grid-row:1!important;grid-template-columns:1fr!important;width:100%!important}.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:2!important;grid-row:1!important}#ton .ton-search-field,#ton #timTon{width:100%!important}@media(max-width:900px){.report-search-panel.compact-search-panel,.ton-search-panel-strong.compact-search-panel,#ton .search-panel.compact-search-panel{grid-template-columns:1fr!important}.report-search-panel.compact-search-panel .head .btn,.ton-search-panel-strong.compact-search-panel .head .btn,#ton .search-panel.compact-search-panel .head .btn{grid-column:1!important;grid-row:3!important;justify-self:end!important;margin-top:2px!important}.report-search-panel.compact-search-panel .body{grid-template-columns:1fr!important}.report-filter-pills{grid-row:1!important}.report-search-panel.compact-search-panel label{grid-row:2!important}.report-search-panel.compact-search-panel input,#ton #timTon{width:100%!important;min-height:42px!important}}';
  document.head.appendChild(st);
})();
;

(function(){
  if(window.__nhapGroupFilter20260717)return;window.__nhapGroupFilter20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function allItems(){return (state.hang||[]).map(normalizeHang)}
  function itemName(code){return item(code)[1]||code}
  function itemUnit(code){return item(code)[3]||''}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number(state.ton[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function groupOptions(){return '<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ nhÃƒÂ³m</option>'+(state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'">'+esc(g)+'</option>'}).join('')}
  function currentGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function matchItem(h,q){
    q=norm(q);var group=currentGroup();
    if(group&&String(h[2]||'')!==group)return false;
    if(!q)return true;
    return norm(h[0]).indexOf(q)>=0||norm(h[1]).indexOf(q)>=0||norm(h[2]).indexOf(q)>=0;
  }
  function setSearchValue(inputId,code){var input=el(inputId);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  window.screenNhap=function(){return shell('nhap','NhÃ¡ÂºÂ­p kho','ChÃ¡Â»Ân nhÃƒÂ³m hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ lÃ¡Â»Âc nhanh danh sÃƒÂ¡ch hÃƒÂ ng cÃ¡ÂºÂ§n nhÃ¡ÂºÂ­p.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>NCC<select id="nccNhap"></select></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhomNhap">'+groupOptions()+'</select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m trong nhÃƒÂ³m Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">ThuÃ¡Â»â„¢c tÃƒÂ­nh linh Ã„â€˜Ã¡Â»â„¢ng<input id="nhapThuocTinhMoi" placeholder="MÃƒÂ u: xanh; Size: L; Serial: bÃ¡ÂºÂ¯t buÃ¡Â»â„¢c"></label><p class="hint full">Khi lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p, hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃƒÂªm vÃƒÂ o danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')};
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchItem(h,q)}).slice(0,10);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng hÃƒÂ³a trong nhÃƒÂ³m nÃƒÂ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalStock(h[0]);var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn';return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap-group"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">'+esc(h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' - TÃ¡Â»â€œn '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function uniquePush(arr,v){v=String(v||'').trim();if(v&&!arr.some(function(x){return norm(x)===norm(v)}))arr.push(v)}
  function bpOptions(selected){
    var list=[];uniquePush(list,selected);
    (state.kho||[]).forEach(function(k){uniquePush(list,k[1]);uniquePush(list,k[2])});
    (state.receiverList||[]).forEach(function(x){uniquePush(list,x)});
    return list.map(function(v){return '<option value="'+esc(v)+'"></option>'}).join('');
  }
  function addBp(v){if(typeof addReceiverName==='function')addReceiverName(v)}
  function groupOptions(){return '<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ nhÃƒÂ³m</option>'+(state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'">'+esc(g)+'</option>'}).join('')}
  function currentGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function allItems(){return (state.hang||[]).map(normalizeHang)}
  function itemName(code){return item(code)[1]||code}
  function totalStock(code){var sum=0;Object.keys(state.ton||{}).forEach(function(k){var p=k.split('|');if(p[1]===code)sum+=Number(state.ton[k]||0)});return sum}
  function stockWarehouses(code){return (state.kho||[]).map(function(k){return {ma:k[0],ten:k[1],sl:Number(state.ton[k[0]+'|'+code]||0)}}).filter(function(x){return x.sl>0})}
  function matchItem(h,q){var g=currentGroup();if(g&&String(h[2]||'')!==g)return false;q=norm(q);if(!q)return true;return norm(h[0]).indexOf(q)>=0||norm(h[1]).indexOf(q)>=0||norm(h[2]).indexOf(q)>=0}
  function setSearchValue(inputId,code){var input=el(inputId);if(!input)return;input.dataset.code=code;input.value=itemName(code)}
  window.screenNhap=function(){return shell('nhap','NhÃ¡ÂºÂ­p kho','ChÃ¡Â»Ân nhÃƒÂ³m hÃƒÂ ng vÃƒÂ  bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho Ã„â€˜Ã¡Â»Æ’ quÃ¡ÂºÂ£n lÃƒÂ½ hÃƒÂ ng nhÃ¡ÂºÂ­p rÃƒÂµ hÃ†Â¡n.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoNhap" list="boPhanKhoNhapList" placeholder="VD: Kho VP 77CT / PhÃƒÂ²ng HC"><datalist id="boPhanKhoNhapList">'+bpOptions('')+'</datalist></label><label>NCC<select id="nccNhap"></select></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhomNhap">'+groupOptions()+'</select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m trong nhÃƒÂ³m Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">ThuÃ¡Â»â„¢c tÃƒÂ­nh linh Ã„â€˜Ã¡Â»â„¢ng<input id="nhapThuocTinhMoi" placeholder="MÃƒÂ u: xanh; Size: L; Serial: bÃ¡ÂºÂ¯t buÃ¡Â»â„¢c"></label><p class="hint full">Khi lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p, hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi sÃ¡ÂºÂ½ tÃ¡Â»Â± thÃƒÂªm vÃƒÂ o danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')};
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    var q=input.value;if(input.dataset.code&&q!==itemName(input.dataset.code))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchItem(h,q)}).slice(0,10);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng hÃƒÂ³a trong nhÃƒÂ³m nÃƒÂ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){var total=totalStock(h[0]);var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn';return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap-bpkho"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">'+esc(h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' - TÃ¡Â»â€œn '+fmt(total)+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'}).join('');
    box.classList.add('show');
  }
  window.saveNhap=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangNhap'):(el('hangNhap')?el('hangNhap').value:'');
    if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){
      var ma=el('nhapMaHangMoi').value.trim(),ten=el('nhapTenHangMoi').value.trim();
      if(!ma||!ten)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi');
      if((state.hang||[]).some(function(h){return normalizeHang(h)[0]===ma}))return alert('MÃƒÂ£ hÃƒÂ ng Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i trong danh mÃ¡Â»Â¥c');
      state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,el('nhapThuocTinhMoi').value]);
      maHang=ma;
    }
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    var sl=Number(el('slNhap').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoNhap').value+'|'+maHang,bp=(el('boPhanKhoNhap')&&el('boPhanKhoNhap').value.trim())||nameKho(el('khoNhap').value);
    state.ton[key]=(state.ton[key]||0)+sl;addBp(bp);
    var row=[today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=bp;
    state.bd.push(row);
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p');veTongQuanSauLuu();
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
      var x=r.x,buttons=[];if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>');if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃƒÂ³a</button>');
      return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',x[12]||'')+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+(buttons.length?td('Thao tÃƒÂ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'')+'</tr>';
    }).join('');
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsBp()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  var oldEditSlip=window.editSlip;
  window.editSlip=function(i){
    if(typeof oldEditSlip==='function')oldEditSlip.apply(this,arguments);
    setTimeout(function(){var hint=document.querySelector('#rp .hint.full');if(hint&&!el('editSlipBpKho'))hint.insertAdjacentHTML('beforebegin','<label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="editSlipBpKho" list="editSlipBpKhoList" value="'+esc((state.bd[i]&&state.bd[i][12])||'')+'"><datalist id="editSlipBpKhoList">'+bpOptions((state.bd[i]&&state.bd[i][12])||'')+'</datalist></label>')},0);
  };
  function applyStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  window.saveEditSlip=function(){
    var i=Number(el('editSlipIndex').value),old=state.bd[i];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);if(nhap<0||xuat<0)return alert('SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng khÃƒÂ´ng hÃ¡Â»Â£p lÃ¡Â»â€¡');if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('ChÃ¡Â»â€° nhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng Ã¡Â»Å¸ mÃ¡Â»â„¢t ÃƒÂ´: NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t');
    applyStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim(),old[8]||'',old[9]||'',old[10]||'',old[11]||'',(el('editSlipBpKho')&&el('editSlipBpKho').value.trim())||''];
    var key=row[2]+'|'+row[3],newStock=(state.ton[key]||0)+nhap-xuat;if(newStock<0){applyStock(old,1);return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn kho sau khi sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t')}
    addBp(row[12]);state.bd[i]=row;applyStock(row,1);save();alert('Ã„ÂÃƒÂ£ sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u vÃƒÂ  cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t tÃ¡Â»â€œn kho');current='baocao';render();setTimeout(function(){showReport('xnk')},0);
  };
  document.addEventListener('click',function(e){var row=e.target&&e.target.closest&&e.target.closest('.item-suggest-row[data-kind="nhap-bpkho"]');if(row){setSearchValue('hangNhap',row.getAttribute('data-code'));if(el('hangNhapSuggest'))el('hangNhapSuggest').classList.remove('show')}});
})();
;

(function(){
  if(window.__capPhatNhanVienBoPhan20260717)return;window.__capPhatNhanVienBoPhan20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
    return ensureReceiverDirectory(state).map(function(x,i){return '<tr>'+td('TÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n',esc(x.name))+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',esc(x.dept||''))+td('Thao tÃƒÂ¡c','<span class="row-actions"><button class="btn small" onclick="editReceiver('+i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteReceiver('+i+')">XÃƒÂ³a</button></span>')+'</tr>'}).join('')||'<tr><td class="empty" colspan="3">ChÃ†Â°a cÃƒÂ³ ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n.</td></tr>';
  }
  function receiverPanel2(){
    return '<div class="panel receiver-dept-panel"><div class="head"><h2>NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/BÃ¡Â»â„¢ phÃ¡ÂºÂ­n sÃ¡Â»Â­ dÃ¡Â»Â¥ng</h2></div><div class="body form"><input id="editReceiver" type="hidden"><label>TÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n<input id="tenReceiver" list="receiverSettingList" placeholder="VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A"><datalist id="receiverSettingList">'+receiverNameOptions('')+'</datalist></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="deptReceiver" list="deptReceiverList" placeholder="VD: PhÃƒÂ²ng HC / Kho VP 77CT"><datalist id="deptReceiverList">'+deptOptions('')+'</datalist></label><button class="btn primary" id="luuReceiver">LÃ†Â°u</button><button class="btn" id="huyReceiver">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full">Khi chÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n trong phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t, app sÃ¡ÂºÂ½ tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho Ã„â€˜ÃƒÂ£ lÃ†Â°u Ã¡Â»Å¸ Ã„â€˜ÃƒÂ¢y.</p></div><div class="wrap"><table><thead><tr><th>TÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+receiverRows2()+'</tbody></table></div></div>';
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
    if(!name)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n');
    var i=el('editReceiver')?el('editReceiver').value:'';
    if(i===''){if(state.receiverDeptList.some(function(x){return norm(x.name)===norm(name)}))return alert('TÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong danh mÃ¡Â»Â¥c');state.receiverDeptList.push({name:name,dept:dept})}
    else{var old=state.receiverDeptList[Number(i)];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n cÃ¡ÂºÂ§n sÃ¡Â»Â­a');var oldName=old.name;state.receiverDeptList[Number(i)]={name:name,dept:dept};(state.bd||[]).forEach(function(b){if(Number(b[6]||0)>0&&b[7]===oldName){b[7]=name;if(!b[12])b[12]=dept}});(state.thietBiIT||[]).forEach(function(raw){var x=normalizeThietBi(raw);if(x[5]===oldName)x[5]=name})}
    state.receiverDeptList.sort(function(a,b){return String(a.name).localeCompare(String(b.name),'vi')});state.receiverList=state.receiverDeptList.map(function(x){return x.name});save();render();
  };
  window.deleteReceiver=function(i){
    ensureReceiverDirectory(state);var x=state.receiverDeptList[i];if(!x)return;
    var used=(state.bd||[]).some(function(b){return Number(b[6]||0)>0&&b[7]===x.name})||(state.thietBiIT||[]).some(function(raw){return normalizeThietBi(raw)[5]===x.name});
    if(used){if(!confirm('NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n "'+x.name+'" Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong phiÃ¡ÂºÂ¿u hoÃ¡ÂºÂ·c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT. PhiÃ¡ÂºÂ¿u cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ lÃ¡Â»â€¹ch sÃ¡Â»Â­. BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n xÃƒÂ³a khÃ¡Â»Âi danh mÃ¡Â»Â¥c gÃ¡Â»Â£i ÃƒÂ½ chÃ¡Â»Â©?'))return}
    else if(!confirm('XÃƒÂ³a ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n "'+x.name+'"?'))return;
    state.receiverDeptList.splice(i,1);state.receiverList=state.receiverDeptList.map(function(y){return y.name});save();render();
  };
  function xuatNeedsReceiver(type){return String(type||'').toLowerCase().indexOf('Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n')<0&&String(type||'').toLowerCase().indexOf('dieu chuyen')<0}
  window.screenXuat=function(){return shell('xuat','XuÃ¡ÂºÂ¥t kho','ChÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n Ã„â€˜Ã¡Â»Æ’ app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho theo danh mÃ¡Â»Â¥c.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label>Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n<input id="nguoiNhanXuat" list="receiverXuatList" placeholder="VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A"><datalist id="receiverXuatList">'+receiverNameOptions('')+'</datalist></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="VD: PhÃƒÂ²ng HC / Kho VP 77CT"><datalist id="boPhanKhoXuatList">'+deptOptions('')+'</datalist></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>')};
  function autoFillReceiverDept(){var rec=el('nguoiNhanXuat'),dept=el('boPhanKhoXuat');if(!rec||!dept)return;var found=receiverByName(rec.value);if(found&&found.dept)dept.value=found.dept}
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(el('hangXuat')?el('hangXuat').value:'');
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    if(!el('khoXuat').value)return alert('HÃƒÂ ng nÃƒÂ y chÃ†Â°a cÃƒÂ³ kho cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    var loai=el('loaiXuat').value,nguoiNhan=el('nguoiNhanXuat')?el('nguoiNhanXuat').value.trim():'',dept=el('boPhanKhoXuat')?el('boPhanKhoXuat').value.trim():'';
    if(xuatNeedsReceiver(loai)&&!nguoiNhan)return alert('NhÃ¡ÂºÂ­p ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');
    if(xuatNeedsReceiver(loai)&&!dept)return alert('NhÃ¡ÂºÂ­p bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho cÃ¡Â»Â§a ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n');
    var sl=Number(el('slXuat').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoXuat').value+'|'+maHang;if((state.ton[key]||0)<sl)return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    state.ton[key]-=sl;addReceiverName(nguoiNhan,dept);
    var row=[today,el('soXuat').value,el('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=dept;state.bd.push(row);
    if(loai==='XuÃ¡ÂºÂ¥t Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢')state.chuyen.push({so:el('soXuat').value,tu:el('khoXuat').value,den:el('khoNhan').value,hang:maHang,sl:sl,st:'ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');veTongQuanSauLuu();
  };
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():((typeof currentRole==='function'?currentRole():currentRole)==='admin')}catch(e){return false}}
  function slipRowsCapPhat(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>');if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃƒÂ³a</button>');
      return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',x[12]||'')+td('HÃƒÂ ng',item(x[3])[1])+td('LoÃ¡ÂºÂ¡i',x[4])+td('NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+(buttons.length?td('Thao tÃƒÂ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'')+'</tr>';
    }).join('');
  }
  var oldShow=window.showReport;
  window.showReport=function(mode,btn){
    if(mode!=='xnk')return oldShow.apply(this,arguments);
    if(btn){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    if(!el('rp'))return;el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>HÃƒÂ ng</th><th>LoÃ¡ÂºÂ¡i</th><th>NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsCapPhat()+'</tbody></table>';
    if(typeof applyReportSearch==='function')setTimeout(applyReportSearch,0);
  };
  var oldEdit=window.editSlip;
  window.editSlip=function(i){
    if(typeof oldEdit==='function')oldEdit.apply(this,arguments);
    setTimeout(function(){
      var row=state.bd[i]||{},hint=document.querySelector('#rp .hint.full');
      if(hint&&!el('editSlipBpKho'))hint.insertAdjacentHTML('beforebegin','<label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="editSlipBpKho" list="editSlipBpKhoList" value="'+esc(row[12]||'')+'"><datalist id="editSlipBpKhoList">'+deptOptions(row[12]||'')+'</datalist></label>');
      var ncc=el('editSlipNcc');if(ncc&&Number(row[6]||0)>0){ncc.setAttribute('list','editSlipReceiverList');if(!document.getElementById('editSlipReceiverList'))ncc.insertAdjacentHTML('afterend','<datalist id="editSlipReceiverList">'+receiverNameOptions(row[7]||'')+'</datalist>');ncc.addEventListener('change',function(){var f=receiverByName(ncc.value);if(f&&f.dept&&el('editSlipBpKho'))el('editSlipBpKho').value=f.dept})}
    },0);
  };
  function applyStock(row,sign){var key=row[2]+'|'+row[3];state.ton[key]=(state.ton[key]||0)+sign*Number(row[5]||0)-sign*Number(row[6]||0);if(Math.abs(state.ton[key])<0.00001)state.ton[key]=0}
  window.saveEditSlip=function(){
    var i=Number(el('editSlipIndex').value),old=state.bd[i];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y phiÃ¡ÂºÂ¿u');
    var nhap=Number(el('editSlipNhap').value||0),xuat=Number(el('editSlipXuat').value||0);if(nhap<0||xuat<0)return alert('SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng khÃƒÂ´ng hÃ¡Â»Â£p lÃ¡Â»â€¡');if((nhap>0&&xuat>0)||(!nhap&&!xuat))return alert('ChÃ¡Â»â€° nhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng Ã¡Â»Å¸ mÃ¡Â»â„¢t ÃƒÂ´: NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c XuÃ¡ÂºÂ¥t');
    applyStock(old,-1);
    var row=[el('editSlipDate').value,old[1],el('editSlipKho').value,el('editSlipHang').value,el('editSlipLoai').value,nhap,xuat,el('editSlipNcc').value.trim(),old[8]||'',old[9]||'',old[10]||'',old[11]||'',(el('editSlipBpKho')&&el('editSlipBpKho').value.trim())||''];
    var key=row[2]+'|'+row[3],newStock=(state.ton[key]||0)+nhap-xuat;if(newStock<0){applyStock(old,1);return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn kho sau khi sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t')}
    if(xuat>0)addReceiverName(row[7],row[12]);state.bd[i]=row;applyStock(row,1);save();alert('Ã„ÂÃƒÂ£ sÃ¡Â»Â­a phiÃ¡ÂºÂ¿u vÃƒÂ  cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t tÃ¡Â»â€œn kho');current='baocao';render();setTimeout(function(){showReport('xnk')},0);
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
  var VERSION='20260721-mobile-login-sync-1';
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
      if(showNotice)showSoftNotice('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ online');
      return true;
    }catch(e){
      console.warn(e);
      if(showNotice)showSoftNotice('ChÃ†Â°a Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ Ã„â€˜Ã†Â°Ã¡Â»Â£c online');
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
        if(showNotice)showSoftNotice('Ã„ÂÃƒÂ£ tÃ¡ÂºÂ£i dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
        return true;
      }
      if(showNotice)showSoftNotice('ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
      return false;
    }catch(e){
      console.warn(e);
      if(showNotice)showSoftNotice('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function ensureUserData(){
    if(!window.state)return [];
    if(!Array.isArray(state.users))state.users=[];
    if(!state.users.some(function(u){return u&&u.username==='admin'})){
      state.users.unshift({username:(window.auth&&auth.user)||'admin',password:(window.auth&&auth.pass)||'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});
    }
    state.users.forEach(function(u){
      if(typeof u.active==='undefined')u.active=true;
      if(!u.name)u.name=u.username;
      if(!u.role)u.role='NhÃƒÂ¢n viÃƒÂªn';
      if(!u.password)u.password='1234';
    });
    return state.users;
  }
  function safe(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function userRowsRestored(){
    return ensureUserData().map(function(u,i){
      var status=u.active===false?'<span class="tag bad">KhÃƒÂ³a</span>':'<span class="tag">HoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng</span>';
      return '<tr>'+td('TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p',safe(u.username))+td('HÃ¡Â»Â tÃƒÂªn',safe(u.name||''))+td('Vai trÃƒÂ²',safe(u.role||'NhÃƒÂ¢n viÃƒÂªn'))+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i',status)+td('Thao tÃƒÂ¡c','<span class="row-actions"><button class="btn small" type="button" onclick="editUser('+i+')">SÃ¡Â»Â­a</button><button class="btn small" type="button" onclick="toggleUser('+i+')">'+(u.active===false?'MÃ¡Â»Å¸':'KhÃƒÂ³a')+'</button></span>')+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÃ†Â°a cÃƒÂ³ tÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn.</td></tr>';
  }
  function userPanelRestored(){
    return '<div class="panel user-permission-panel"><div class="head"><h2>TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn / phÃƒÂ¢n quyÃ¡Â»Ân</h2></div><div class="body form"><input id="editUserIndex" type="hidden"><label>TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p<input id="userName" placeholder="VD: nguyenvana"></label><label>MÃ¡ÂºÂ­t khÃ¡ÂºÂ©u<input id="userPass" placeholder="TÃ¡Â»â€˜i thiÃ¡Â»Æ’u 4 kÃƒÂ½ tÃ¡Â»Â±"></label><label>HÃ¡Â»Â tÃƒÂªn<input id="userFullName" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn"></label><label>Vai trÃƒÂ²<select id="userRole"><option>NhÃƒÂ¢n viÃƒÂªn</option><option>Admin</option></select></label><label class="full"><input id="userActive" type="checkbox" checked> TÃƒÂ i khoÃ¡ÂºÂ£n Ã„â€˜ang hoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng</label><button class="btn primary" id="luuUser" type="button">LÃ†Â°u tÃƒÂ i khoÃ¡ÂºÂ£n</button><button class="btn" id="huyUser" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full">Admin Ã„â€˜Ã†Â°Ã¡Â»Â£c vÃƒÂ o ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p vÃƒÂ  chÃ¡Â»â€°nh danh mÃ¡Â»Â¥c. NhÃƒÂ¢n viÃƒÂªn dÃƒÂ¹ng cÃƒÂ¡c nghiÃ¡Â»â€¡p vÃ¡Â»Â¥ Ã„â€˜Ã†Â°Ã¡Â»Â£c phÃƒÂ¢n quyÃ¡Â»Ân.</p></div><div class="wrap"><table><thead><tr><th>TÃƒÂªn Ã„â€˜Ã„Æ’ng nhÃ¡ÂºÂ­p</th><th>HÃ¡Â»Â tÃƒÂªn</th><th>Vai trÃƒÂ²</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+userRowsRestored()+'</tbody></table></div></div>';
  }
  var oldScreen=window.screenThietLap;
  if(typeof oldScreen==='function'){
    window.screenThietLap=function(){
      if(typeof isAdmin==='function'&&!isAdmin())return shell('thietlap','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c vÃƒÂ o phÃ¡ÂºÂ§n thiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thay Ã„â€˜Ã¡Â»â€¢i danh mÃ¡Â»Â¥c hoÃ¡ÂºÂ·c tÃƒÂ i khoÃ¡ÂºÂ£n.</div></div>');
      ensureUserData();
      var html=oldScreen.apply(this,arguments);
      if(html.indexOf('TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn / phÃƒÂ¢n quyÃ¡Â»Ân')>=0||html.indexOf('TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn')>=0)return html;
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
  function ensureLoginUsers(){
    if(!window.state)return [];
    if(!Array.isArray(state.users))state.users=[];
    if(window.auth){
      var authUser=String(auth.user||'admin').trim()||'admin';
      var found=state.users.find(function(u){return norm(u.username)===norm(authUser)});
      if(!found)state.users.unshift({username:authUser,password:auth.pass||'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});
      else{if(!found.password)found.password=auth.pass||'admin123';if(!found.role)found.role='Admin';if(typeof found.active==='undefined')found.active=true}
    }
    if(!state.users.length)state.users.push({username:'admin',password:'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});
    state.users.forEach(function(u){if(!u.name)u.name=u.username;if(!u.role)u.role='NhÃƒÂ¢n viÃƒÂªn';if(typeof u.active==='undefined')u.active=true});
    return state.users;
  }
  function findUserForLogin(input,pass){
    var q=norm(input);
    var list=ensureLoginUsers();
    var active=list.find(function(u){return u.active!==false&&String(u.password||'')===String(pass||'')&&(norm(u.username)===q||norm(u.name)===q)});
    if(active)return active;
    if(window.auth&&String(auth.pass||'')===String(pass||'')&&(norm(auth.user)===q||q==='admin')){
      return {username:auth.user||'admin',password:auth.pass||pass,name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true};
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
    if(el('loginError'))el('loginError').textContent='Sai tÃƒÂ i khoÃ¡ÂºÂ£n hoÃ¡ÂºÂ·c mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng hÃƒÂ³a trong nhÃƒÂ³m nÃƒÂ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){
      var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn';
      var desc=h[4]?'<span class="item-desc-note">'+esc(h[4])+'</span>':'';
      return '<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kind="nhap-desc"><span class="item-suggest-name">'+esc(h[1])+'</span>'+desc+'<span class="item-suggest-meta">'+esc(h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' - TÃ¡Â»â€œn '+fmt(totalStock(h[0]))+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'
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
        html.push('<button class="item-suggest-row" type="button" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat-desc"><span class="item-suggest-name">'+esc(h[1])+'</span>'+desc+'<span class="item-suggest-meta">TÃ¡Â»â€œn '+fmt(w.sl)+' '+esc(h[3]||'')+' - '+esc(w.ten)+'</span></button>');
      });
    });
    box.innerHTML=html.slice(0,14).join('')||'<div class="item-suggest-empty">KhÃƒÂ´ng cÃƒÂ³ hÃƒÂ ng nÃƒÂ o cÃƒÂ²n tÃ¡Â»â€œn phÃƒÂ¹ hÃ¡Â»Â£p</div>';
    box.classList.add('show');
  }
  window.screenNhap=function(){
    return shell('nhap','NhÃ¡ÂºÂ­p kho','ChÃ¡Â»Ân nhÃƒÂ³m hÃƒÂ ng vÃƒÂ  ghi mÃƒÂ´ tÃ¡ÂºÂ£ Ã„â€˜Ã¡Â»Æ’ dÃ¡Â»â€¦ nhÃ¡ÂºÂ­n biÃ¡ÂºÂ¿t size, mÃƒÂ u, chi tiÃ¡ÂºÂ¿t khi cÃ¡ÂºÂ§n tra cÃ¡Â»Â©u.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoNhap" list="boPhanKhoNhapList" placeholder="VD: Kho VP 77CT / PhÃƒÂ²ng HC"><datalist id="boPhanKhoNhapList">'+bpOptions()+'</datalist></label><label>NCC<select id="nccNhap"></select></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhomNhap"><option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ nhÃƒÂ³m</option>'+groupOptions('')+'</select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hoÃ¡ÂºÂ·c mÃƒÂ´ tÃ¡ÂºÂ£"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="VD: ÃƒÂo thun CÃƒÂ  Mau"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="nhapThuocTinhMoi" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label><p class="hint full">MÃƒÂ´ tÃ¡ÂºÂ£ nÃƒÂ y sÃ¡ÂºÂ½ Ã„â€˜i theo mÃ¡ÂºÂ·t hÃƒÂ ng vÃƒÂ  hiÃ¡Â»â€¡n trong danh mÃ¡Â»Â¥c, tÃ¡Â»â€œn kho, nhÃ¡ÂºÂ­p xuÃ¡ÂºÂ¥t, bÃƒÂ¡o cÃƒÂ¡o.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')
  };
  window.screenHang=function(){
    if(!isAdminUser())return shell('hanghoa','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thÃƒÂªm hoÃ¡ÂºÂ·c sÃ¡Â»Â­a hÃƒÂ ng hÃƒÂ³a.</div></div>');
    var rows=allItems().map(function(h,i){return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn hÃƒÂ ng',esc(h[1]))+td('NhÃƒÂ³m',esc(h[2]))+td('Ã„ÂVT',esc(h[3]))+td('MÃƒÂ´ tÃ¡ÂºÂ£',esc(h[4]||''))+td('Thao tÃƒÂ¡c','<button class="btn small" onclick="editHang('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');
    return shell('hanghoa','Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a','QuÃ¡ÂºÂ£n lÃƒÂ½ tÃƒÂªn hÃƒÂ ng, nhÃƒÂ³m, Ã„â€˜Ã†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh vÃƒÂ  mÃƒÂ´ tÃ¡ÂºÂ£ nhÃ†Â° size, mÃƒÂ u, thÃƒÂ´ng sÃ¡Â»â€˜.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch hÃƒÂ ng hÃƒÂ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>MÃƒÂ´ tÃ¡ÂºÂ£</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin hÃƒÂ ng hÃƒÂ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="maHang" readonly></label><label>TÃƒÂªn hÃƒÂ ng<input id="tenHang" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m<select id="nhomHang">'+groupOptions('')+'</select></label><label>Ã„ÂVT<select id="dvt">'+dvtOptions('')+'</select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="thuocTinh" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label><button class="btn primary" id="luuHang">LÃ†Â°u hÃƒÂ ng hÃƒÂ³a</button><button class="btn" id="huyHang">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>')
  };
  window.editHang=function(i){var h=allItems()[i];if(!h)return;el('editHang').value=i;el('maHang').value=h[0];el('tenHang').value=h[1];el('nhomHang').value=h[2];el('dvt').value=h[3];el('thuocTinh').value=h[4]||''}
  window.resetHang=function(){['editHang','tenHang','thuocTinh'].forEach(function(id){if(el(id))el(id).value=''});if(el('maHang'))el('maHang').value=nextCode(el('nhomHang')?el('nhomHang').value:'')}
  window.saveHang=function(){
    var i=el('editHang')?el('editHang').value:'',ma=el('maHang')?el('maHang').value.trim():'',ten=el('tenHang')?el('tenHang').value.trim():'';
    if(!ma)ma=nextCode(el('nhomHang')?el('nhomHang').value:'');
    if(!ten)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn hÃƒÂ ng');
    var row=[ma,ten,el('nhomHang').value,el('dvt').value,(el('thuocTinh')&&el('thuocTinh').value.trim())||''];
    if(i===''){if((state.hang||[]).some(function(h){return hnorm(h)[0]===ma}))row[0]=nextCode(row[2]);state.hang.push(row)}else state.hang[Number(i)]=row;
    save();render();
  };
  window.saveNhap=function(){
    var maHang=selectedItemCode('hangNhap');
    if(el('hangMoiBox')&&el('hangMoiBox').style.display!=='none'){
      var ma=(el('nhapMaHangMoi')&&el('nhapMaHangMoi').value.trim())||nextCode(el('nhapNhomHangMoi')?el('nhapNhomHangMoi').value:'');
      var ten=el('nhapTenHangMoi')?el('nhapTenHangMoi').value.trim():'';
      if(!ten)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi');
      if((state.hang||[]).some(function(h){return hnorm(h)[0]===ma}))ma=nextCode(el('nhapNhomHangMoi').value);
      state.hang.push([ma,ten,el('nhapNhomHangMoi').value,el('nhapDvtMoi').value,(el('nhapThuocTinhMoi')&&el('nhapThuocTinhMoi').value.trim())||'']);
      maHang=ma;
    }
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    var sl=Number(el('slNhap').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=el('khoNhap').value+'|'+maHang,bp=(el('boPhanKhoNhap')&&el('boPhanKhoNhap').value.trim())||nameKho(el('khoNhap').value);
    state.ton[key]=(state.ton[key]||0)+sl;
    if(typeof addReceiverName==='function')addReceiverName(bp,'');
    var row=[today,el('soNhap').value,el('khoNhap').value,maHang,el('loaiNhap').value,sl,0,el('nccNhap').value];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=bp;state.bd.push(row);
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p');veTongQuanSauLuu();
  };
  function renameDescriptionFields(){
    [['thuocTinh','VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton'],['nhapThuocTinhMoi','VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n']].forEach(function(pair){
      var input=el(pair[0]);if(!input)return;input.placeholder=pair[1];
      var label=input.closest('label');if(label&&label.firstChild&&label.firstChild.nodeType===3)label.firstChild.nodeValue='MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t';
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
    document.querySelectorAll('td[data-label="TÃƒÂªn hÃƒÂ ng"],td[data-label="HÃƒÂ ng"]').forEach(function(td){
      if(td.querySelector('.cell-desc-note'))return;
      var d=itemDesc(td.textContent.trim());if(d)td.insertAdjacentHTML('beforeend','<span class="cell-desc-note">'+esc(d)+'</span>');
    });
  }
  if(!document.getElementById('item-description-visible-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='item-description-visible-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
  function detailBtn(code){return desc(code)?'<button class="btn small item-detail-btn" type="button" data-item-detail="'+esc(code)+'">Chi tiÃ¡ÂºÂ¿t</button>':''}
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
    box.innerHTML='<div class="item-detail-backdrop" data-close-detail="1"></div><div class="item-detail-card"><div class="item-detail-head"><h2>Chi tiÃ¡ÂºÂ¿t hÃƒÂ ng hÃƒÂ³a</h2><button class="btn small" type="button" data-close-detail="1">Ã„ÂÃƒÂ³ng</button></div><div class="item-detail-body"><p><b>'+esc(h[1]||code)+'</b></p><p class="hint">MÃƒÂ£ hÃƒÂ ng: '+esc(h[0]||'')+' | NhÃƒÂ³m: '+esc(h[2]||'')+' | Ã„ÂVT: '+esc(h[3]||'')+'</p><div class="item-detail-text">'+(d?esc(d):'ChÃ†Â°a cÃƒÂ³ mÃƒÂ´ tÃ¡ÂºÂ£.')+'</div></div></div>';
    document.body.appendChild(box);
  };
  function closeDetail(){var old=document.getElementById('itemDetailModal');if(old)old.remove()}
  function currentNhapGroup(){return el('nhomNhap')?el('nhomNhap').value:''}
  function matchNhap(h,q){var g=currentNhapGroup();if(g&&h[2]!==g)return false;q=norm(q);if(!q)return true;return [h[0],h[1],h[2],h[3],h[4]].some(function(v){return norm(v).indexOf(q)>=0})}
  function renderNhapSuggest(){
    var input=el('hangNhap'),box=el('hangNhapSuggest');if(!input||!box)return;
    if(input.dataset.code&&norm(input.value)!==norm(itemName(input.dataset.code)))input.dataset.code='';
    var rows=allItems().filter(function(h){return matchNhap(h,input.value)}).slice(0,12);
    if(!rows.length){box.innerHTML='<div class="item-suggest-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng hÃƒÂ³a trong nhÃƒÂ³m nÃƒÂ y</div>';box.classList.add('show');return}
    box.innerHTML=rows.map(function(h){
      var wh=stockWarehouses(h[0]).slice(0,2).map(function(x){return x.ten}).join(', ')||'chÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn';
      return '<div class="item-suggest-row item-suggest-row-split" data-code="'+esc(h[0])+'" data-kind="nhap-detail"><button class="item-suggest-main" type="button" data-select-item="'+esc(h[0])+'"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">'+esc(h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m')+' - TÃ¡Â»â€œn '+fmt(totalStock(h[0]))+' '+esc(h[3]||'')+' - '+esc(wh)+'</span></button>'+detailBtn(h[0])+'</div>'
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
        html.push('<div class="item-suggest-row item-suggest-row-split" data-code="'+esc(h[0])+'" data-kho="'+esc(w.ma)+'" data-kind="xuat-detail"><button class="item-suggest-main" type="button" data-select-item="'+esc(h[0])+'" data-select-kho="'+esc(w.ma)+'"><span class="item-suggest-name">'+esc(h[1])+'</span><span class="item-suggest-meta">TÃ¡Â»â€œn '+fmt(w.sl)+' '+esc(h[3]||'')+' - '+esc(w.ten)+'</span></button>'+detailBtn(h[0])+'</div>');
      });
    });
    box.innerHTML=html.slice(0,14).join('')||'<div class="item-suggest-empty">KhÃƒÂ´ng cÃƒÂ³ hÃƒÂ ng nÃƒÂ o cÃƒÂ²n tÃ¡Â»â€œn phÃƒÂ¹ hÃ¡Â»Â£p</div>';
    box.classList.add('show');
  }
  window.screenNhap=function(){
    return shell('nhap','NhÃ¡ÂºÂ­p kho','TÃ¡Â»â€œn vÃ¡ÂºÂ«n tÃƒÂ­nh chung theo mÃƒÂ£ hÃƒÂ ng; mÃƒÂ´ tÃ¡ÂºÂ£ xem bÃ¡ÂºÂ±ng nÃƒÂºt Chi tiÃ¡ÂºÂ¿t khi cÃ¡ÂºÂ§n.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(\'chuyen\')">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div><div class="body form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label><label>LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label><label>Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoNhap" list="boPhanKhoNhapList" placeholder="VD: Kho VP 77CT / PhÃƒÂ²ng HC"><datalist id="boPhanKhoNhapList">'+bpOptions()+'</datalist></label><label>NCC<select id="nccNhap"></select></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhomNhap"><option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ nhÃƒÂ³m</option>'+groupOptions('')+'</select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hoÃ¡ÂºÂ·c mÃƒÂ´ tÃ¡ÂºÂ£"><div id="hangNhapSuggest" class="item-suggest-list"></div></label><button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label><div class="full panel" id="hangMoiBox" style="display:none;box-shadow:none"><div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div><div class="body form"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label><label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="VD: ÃƒÂo thun CÃƒÂ  Mau"></label><label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label><label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="nhapThuocTinhMoi" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label><p class="hint full">MÃƒÂ´ tÃ¡ÂºÂ£ khÃƒÂ´ng tÃƒÂ¡ch tÃ¡Â»â€œn kho. TÃ¡Â»â€œn vÃ¡ÂºÂ«n tÃƒÂ­nh chung theo mÃ¡ÂºÂ·t hÃƒÂ ng nÃƒÂ y.</p></div></div><button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button></div></div>')
  };
  window.screenHang=function(){
    if(!isAdminUser())return shell('hanghoa','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thÃƒÂªm hoÃ¡ÂºÂ·c sÃ¡Â»Â­a hÃƒÂ ng hÃƒÂ³a.</div></div>');
    var rows=allItems().map(function(h,i){return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn hÃƒÂ ng',esc(h[1]))+td('NhÃƒÂ³m',esc(h[2]))+td('Ã„ÂVT',esc(h[3]))+td('Chi tiÃ¡ÂºÂ¿t',detailBtn(h[0])||'<span class="hint">KhÃƒÂ´ng cÃƒÂ³</span>')+td('Thao tÃƒÂ¡c','<button class="btn small" onclick="editHang('+i+')">SÃ¡Â»Â­a</button>')+'</tr>'}).join('');
    return shell('hanghoa','Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a','TÃ¡Â»â€œn tÃƒÂ­nh chung theo mÃƒÂ£ hÃƒÂ ng; mÃƒÂ´ tÃ¡ÂºÂ£ xem bÃ¡ÂºÂ±ng nÃƒÂºt Chi tiÃ¡ÂºÂ¿t.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch hÃƒÂ ng hÃƒÂ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>Chi tiÃ¡ÂºÂ¿t</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin hÃƒÂ ng hÃƒÂ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="maHang" readonly></label><label>TÃƒÂªn hÃƒÂ ng<input id="tenHang" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m<select id="nhomHang">'+groupOptions('')+'</select></label><label>Ã„ÂVT<select id="dvt">'+dvtOptions('')+'</select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="thuocTinh" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label><button class="btn primary" id="luuHang">LÃ†Â°u hÃƒÂ ng hÃƒÂ³a</button><button class="btn" id="huyHang">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>')
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
    document.querySelectorAll('td[data-label="TÃƒÂªn hÃƒÂ ng"],td[data-label="HÃƒÂ ng"]').forEach(function(td){
      if(td.querySelector('.item-detail-btn'))return;
      var h=allItems().find(function(x){return norm(td.textContent).indexOf(norm(x[1]))>=0||norm(td.textContent).indexOf(norm(x[0]))>=0});
      if(h&&desc(h[0]))td.insertAdjacentHTML('beforeend',detailBtn(h[0]));
    });
  }
  function renameFields(){
    [['thuocTinh','VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton'],['nhapThuocTinhMoi','VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n']].forEach(function(pair){
      var input=el(pair[0]);if(!input)return;input.placeholder=pair[1];
      var label=input.closest('label');if(label&&label.firstChild&&label.firstChild.nodeType===3)label.firstChild.nodeValue='MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t';
    });
  }
  if(!document.getElementById('item-detail-button-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='item-detail-button-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function sum(arr,fn){return (arr||[]).reduce(function(a,x){return a+Number(fn(x)||0)},0)}
  function totalTon(){return Object.values(state.ton||{}).reduce(function(a,b){return a+Number(b||0)},0)}
  function uniqueGroups(){var m={};(state.hang||[]).forEach(function(raw){var h=normalizeHang(raw);m[h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m']=true});return Object.keys(m).length}
  function uniqueNccUsed(){var m={};(state.bd||[]).forEach(function(x){if(Number(x[5]||0)>0)m[x[7]||'ChÃ†Â°a chÃ¡Â»Ân NCC']=true});return Object.keys(m).length}
  function visualData(){
    return [
      {no:1,label:'NhÃ¡ÂºÂ­p kho',value:sum(state.bd,function(x){return x[5]}),unit:'SL nhÃ¡ÂºÂ­p',mode:'xnk',cls:'pink'},
      {no:2,label:'XuÃ¡ÂºÂ¥t kho',value:sum(state.bd,function(x){return x[6]}),unit:'SL xuÃ¡ÂºÂ¥t',mode:'xnk',cls:'red'},
      {no:3,label:'TÃ¡Â»â€œn kho',value:totalTon(),unit:'TÃ¡Â»â€¢ng tÃ¡Â»â€œn',mode:'tk',cls:'lime'},
      {no:4,label:'HÃƒÂ ng hÃƒÂ³a',value:(state.hang||[]).length,unit:'MÃ¡ÂºÂ·t hÃƒÂ ng',mode:'hh',cls:'cyan'},
      {no:5,label:'NhÃƒÂ³m hÃƒÂ ng',value:uniqueGroups(),unit:'NhÃƒÂ³m',mode:'nhomhang',cls:'mint'},
      {no:6,label:'NhÃƒÂ  cung cÃ¡ÂºÂ¥p',value:uniqueNccUsed()||((state.nccList||[]).length),unit:'NCC',mode:'ncc',cls:'violet'},
      {no:7,label:'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',value:(state.thietBiIT||[]).length,unit:'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',mode:'it',cls:'yellow'}
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
    return '<div class="visual-report-wrap"><div class="visual-hero"><div class="visual-ring-box"><div class="visual-donut"></div><div class="visual-center"><span>BÃƒÂO CÃƒÂO</span><strong>QUÃ¡ÂºÂ¢N LÃƒÂ HC</strong><small>'+fmt(totalSlips)+' phiÃ¡ÂºÂ¿u phÃƒÂ¡t sinh</small></div>'+segs+'</div><div class="visual-summary"><h3>TÃ¡Â»â€¢ng quan nhanh</h3><p>ChÃ¡ÂºÂ¡m vÃƒÂ o tÃ¡Â»Â«ng mÃ¡ÂºÂ£ng Ã„â€˜Ã¡Â»Æ’ mÃ¡Â»Å¸ bÃƒÂ¡o cÃƒÂ¡o chi tiÃ¡ÂºÂ¿t tÃ†Â°Ã†Â¡ng Ã¡Â»Â©ng.</p><div class="visual-summary-grid"><div><span>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</span><strong>'+fmt(totalTon())+'</strong></div><div><span>MÃ¡ÂºÂ·t hÃƒÂ ng</span><strong>'+fmt((state.hang||[]).length)+'</strong></div><div><span>Kho</span><strong>'+fmt((state.kho||[]).length)+'</strong></div><div><span>NhÃƒÂ³m</span><strong>'+fmt(uniqueGroups())+'</strong></div></div></div></div><div class="visual-mini-grid">'+legend+'</div></div>';
  }
  var oldScreen=window.screenBaoCao;
  window.screenBaoCao=function(){
    var html=oldScreen.apply(this,arguments);
    html=html.replace('class="btn tab active" onclick="showReport(\'xnk\',this)"','class="btn tab" onclick="showReport(\'xnk\',this)"');
    if(html.indexOf("showReport('visual'")<0){
      html=html.replace('<div class="tabs">','<div class="tabs"><button class="btn tab active" onclick="showReport(\'visual\',this)">TrÃ¡Â»Â±c quan</button>');
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
    el('rpTitle').textContent='BÃƒÂ¡o cÃƒÂ¡o trÃ¡Â»Â±c quan';
    el('rp').innerHTML=visualHtml();
  };
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    if(window.current==='baocao')setTimeout(function(){showReport('visual')},0);
  };
  if(!document.getElementById('visual-ring-report-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='visual-ring-report-style-20260721-mobile-login-sync-1';
    st.textContent='.report-visual-active .report-search-panel{display:none!important}.visual-report-wrap{padding:12px;background:linear-gradient(135deg,#f7fffb,#eef8f4);border-radius:8px}.visual-hero{display:grid;grid-template-columns:minmax(360px,520px) 1fr;gap:18px;align-items:center}.visual-ring-box{position:relative;width:min(520px,100%);aspect-ratio:1;margin:6px auto}.visual-donut{position:absolute;inset:10%;border-radius:50%;background:conic-gradient(#ff3b9d 0 51.4deg,#d60958 51.4deg 102.8deg,#e9ff6f 102.8deg 154.2deg,#21c4df 154.2deg 205.6deg,#27e0c2 205.6deg 257deg,#8a05e6 257deg 308.4deg,#ffd95b 308.4deg 360deg);box-shadow:0 18px 32px rgba(18,68,51,.16),inset 0 0 0 2px rgba(255,255,255,.6)}.visual-donut:after{content:"";position:absolute;inset:24%;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 2px #e4efe9}.visual-center{position:absolute;inset:34%;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.08);z-index:2}.visual-center span{font-size:12px;font-weight:800;color:#0a7f60}.visual-center strong{font-size:24px;line-height:1.08;color:#102b48}.visual-center small{font-size:11px;color:#63756f;margin-top:5px}.visual-seg{position:absolute;left:50%;top:50%;width:104px;min-height:76px;transform:rotate(var(--a)) translate(0,-215px) rotate(calc(-1 * var(--a)));margin-left:-52px;margin-top:-38px;border:0;border-radius:14px;color:#fff;text-align:center;padding:8px 6px;box-shadow:0 10px 22px rgba(0,0,0,.16);cursor:pointer}.visual-seg strong{display:block;font-size:20px;line-height:1}.visual-seg span{display:block;font-size:12px;font-weight:800;margin-top:3px}.visual-seg small{display:block;font-size:10.5px;margin-top:3px;opacity:.92}.visual-seg.pink,.visual-mini.pink{background:#ff3b9d}.visual-seg.red,.visual-mini.red{background:#d60958}.visual-seg.lime,.visual-mini.lime{background:#dff95c;color:#173022}.visual-seg.cyan,.visual-mini.cyan{background:#21c4df;color:#07313a}.visual-seg.mint,.visual-mini.mint{background:#27d9bc;color:#063b35}.visual-seg.violet,.visual-mini.violet{background:#8708e7}.visual-seg.yellow,.visual-mini.yellow{background:#ffd85a;color:#4a3510}.visual-summary{background:#fff;border:1px solid #cfe4da;border-radius:12px;padding:16px;box-shadow:0 10px 24px rgba(8,71,49,.08)}.visual-summary h3{margin:0 0 6px;font-size:18px}.visual-summary p{margin:0 0 12px;color:#61736d}.visual-summary-grid{display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:8px}.visual-summary-grid div{background:#f5fbf8;border:1px solid #d6eadf;border-radius:10px;padding:10px}.visual-summary-grid span{display:block;color:#60756d;font-size:12px;font-weight:700}.visual-summary-grid strong{display:block;font-size:24px;color:#007a5b;margin-top:3px}.visual-mini-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin-top:12px}.visual-mini{border:0;border-radius:10px;padding:10px;text-align:left;color:#fff;box-shadow:0 8px 18px rgba(8,71,49,.12);cursor:pointer}.visual-mini span,.visual-mini small{display:block;font-weight:700}.visual-mini strong{display:block;font-size:22px;margin:4px 0}@media(max-width:900px){.visual-report-wrap{padding:8px}.visual-hero{display:block}.visual-ring-box{width:min(340px,100%);margin:0 auto 10px}.visual-seg{display:none}.visual-center strong{font-size:18px}.visual-center small{font-size:10px}.visual-summary{padding:12px}.visual-summary-grid{grid-template-columns:repeat(2,1fr)}.visual-mini-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.visual-mini{padding:9px}.visual-mini strong{font-size:19px}}';
    document.head.appendChild(st);
  }
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__pwaOnlineUserLogin20260717)return;window.__pwaOnlineUserLogin20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/\s+/g,' ').trim()}
  function ensureUsers(){
    if(!window.state)return [];
    if(!Array.isArray(state.users))state.users=[];
    if(window.auth){
      var authName=String(auth.user||'admin').trim()||'admin';
      var admin=state.users.find(function(u){return norm(u.username)===norm(authName)});
      if(!admin)state.users.unshift({username:authName,password:auth.pass||'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});
      else{if(!admin.password)admin.password=auth.pass||'admin123';if(!admin.role)admin.role='Admin';if(typeof admin.active==='undefined')admin.active=true}
    }
    if(!state.users.length)state.users.push({username:'admin',password:'admin123',name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true});
    state.users.forEach(function(u){if(!u.name)u.name=u.username;if(!u.role)u.role='NhÃƒÂ¢n viÃƒÂªn';if(typeof u.active==='undefined')u.active=true});
    return state.users;
  }
  function findUser(user,pass){
    var q=norm(user),p=String(pass||'');
    var found=ensureUsers().find(function(u){return u.active!==false&&String(u.password||'')===p&&(norm(u.username)===q||norm(u.name)===q)});
    if(found)return found;
    if(window.auth&&String(auth.pass||'')===p&&(norm(auth.user)===q||q==='admin'))return {username:auth.user||'admin',password:p,name:'QuÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn',role:'Admin',active:true};
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
      if(el('loginError'))el('loginError').textContent='Ã„Âang tÃ¡ÂºÂ£i tÃƒÂ i khoÃ¡ÂºÂ£n online...';
      await pullOnlineForLogin();
      found=findUser(user,pass);
    }
    if(found){finishLogin(found,pass,remember);return}
    if(el('loginError'))el('loginError').textContent='Sai tÃƒÂ i khoÃ¡ÂºÂ£n hoÃ¡ÂºÂ·c mÃ¡ÂºÂ­t khÃ¡ÂºÂ©u. NÃ¡ÂºÂ¿u vÃ¡Â»Â«a tÃ¡ÂºÂ¡o tÃƒÂ i khoÃ¡ÂºÂ£n trÃƒÂªn mÃƒÂ¡y tÃƒÂ­nh, hÃƒÂ£y bÃ¡ÂºÂ¥m Ã„ÂÃ¡ÂºÂ©y dÃ¡Â»Â¯ liÃ¡Â»â€¡u online rÃ¡Â»â€œi thÃ¡Â»Â­ lÃ¡ÂºÂ¡i.';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function hinfo(code){try{return normalizeHang(item(code))}catch(e){return [code,code,'','','']}}
  function groupOf(code){var h=hinfo(code);return h[2]||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m'}
  function groupCell(code){return '<span class="group-link-chip">'+esc(groupOf(code))+'</span>'}
  function canEditReport(){try{return typeof canEditXnkSlip==='function'?canEditXnkSlip():true}catch(e){return true}}
  function canDeleteReport(){try{return typeof isAdmin==='function'?isAdmin():false}catch(e){return false}}
  window.screenTongQuan=function(){
    var rows=stockRows(),total=Object.values(state.ton||{}).reduce(function(a,b){return a+Number(b||0)},0);
    var bd=(state.bd||[]).slice().reverse().slice(0,10).map(function(x){
      return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('HÃƒÂ ng',item(x[3])[1])+td('NhÃƒÂ³m',groupCell(x[3]))+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+'</tr>';
    }).join('');
    var top=rows.slice().sort(function(a,b){return b[3]-a[3]}).slice(0,5).map(function(r){return '<p>'+esc(r[2][1])+' - '+esc(nameKho(r[0]))+': <b>'+fmt(r[3])+' '+esc(r[2][3])+'</b></p>'}).join('')||'<p class="hint">ChÃ†Â°a cÃƒÂ³ tÃ¡Â»â€œn kho.</p>';
    return shell('tongquan','TÃ¡Â»â€¢ng quan kho','Theo dÃƒÂµi nhanh tÃ¡Â»â€œn kho vÃƒÂ  biÃ¡ÂºÂ¿n Ã„â€˜Ã¡Â»â„¢ng mÃ¡Â»â€ºi nhÃ¡ÂºÂ¥t theo nhÃƒÂ³m hÃƒÂ ng.','<div class="stats"><div class="card dash-card dash-green"><span>TÃ¡Â»â€¢ng kho</span><strong>'+state.kho.length+'</strong></div><div class="card dash-card dash-blue"><span>MÃ¡ÂºÂ·t hÃƒÂ ng</span><strong>'+state.hang.length+'</strong></div><div class="card dash-card dash-amber"><span>TÃ¡Â»â€¢ng tÃ¡Â»â€œn</span><strong>'+fmt(total)+'</strong></div><div class="card dash-card dash-rose"><span>PhiÃ¡ÂºÂ¿u phÃƒÂ¡t sinh</span><strong>'+state.bd.length+'</strong></div></div><div class="grid"><div class="panel panel-accent"><div class="head"><h2>BiÃ¡ÂºÂ¿n Ã„â€˜Ã¡Â»â„¢ng gÃ¡ÂºÂ§n Ã„â€˜ÃƒÂ¢y</h2><span class="tag">10 dÃƒÂ²ng mÃ¡Â»â€ºi nhÃ¡ÂºÂ¥t</span></div><div class="wrap"><table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>HÃƒÂ ng</th><th>NhÃƒÂ³m</th><th class="num">NhÃ¡ÂºÂ­p</th><th class="num">XuÃ¡ÂºÂ¥t</th></tr></thead><tbody>'+bd+'</tbody></table></div></div><div class="panel panel-blue"><div class="head"><h2>TÃ¡Â»â€œn nhiÃ¡Â»Âu nhÃ¡ÂºÂ¥t</h2></div><div class="body">'+top+'</div></div></div>');
  };
  function slipRowsByGroup(){
    return (state.bd||[]).map(function(x,i){return {x:x,i:i}}).reverse().map(function(r){
      var x=r.x,buttons=[];
      if(canEditReport())buttons.push('<button class="btn small" onclick="editSlip('+r.i+')">SÃ¡Â»Â­a</button>');
      if(canDeleteReport()&&typeof deleteSlip==='function')buttons.push('<button class="btn small bad" onclick="deleteSlip('+r.i+')">XÃƒÂ³a</button>');
      return '<tr>'+td('NgÃƒÂ y',x[0])+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',x[1])+td('Kho',nameKho(x[2]))+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',x[12]||'')+td('NhÃƒÂ³m',groupCell(x[3]))+td('HÃƒÂ ng',item(x[3])[1])+td('NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n',x[7]||'')+td('NhÃ¡ÂºÂ­p',x[5]||'', 'num')+td('XuÃ¡ÂºÂ¥t',x[6]||'', 'num')+(buttons.length?td('Thao tÃƒÂ¡c','<span class="row-actions">'+buttons.join('')+'</span>'):'')+'</tr>';
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
    el('rpTitle').textContent='Chi tiÃ¡ÂºÂ¿t XNK theo nhÃƒÂ³m';
    var actionHead=(canEditReport()||canDeleteReport())?'<th>Thao tÃƒÂ¡c</th>':'';
    el('rp').innerHTML='<table><thead><tr><th>NgÃƒÂ y</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th><th>Kho</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>NhÃƒÂ³m</th><th>HÃƒÂ ng</th><th>NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n</th><th>NhÃ¡ÂºÂ­p</th><th>XuÃ¡ÂºÂ¥t</th>'+actionHead+'</tr></thead><tbody>'+slipRowsByGroup()+'</tbody></table>';
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
  if(!document.getElementById('group-field-report-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='group-field-report-style-20260721-mobile-login-sync-1';
    st.textContent='.group-link-chip{display:inline-flex;align-items:center;max-width:220px;border-radius:999px;background:#e6f7ef;color:#08745a;border:1px solid #bfe6d7;padding:3px 8px;font-weight:700;font-size:12px;line-height:1.2}.type-merged-hidden{display:none!important}@media(max-width:900px){.group-link-chip{font-size:11.5px;max-width:170px}}';
    document.head.appendChild(st);
  }
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__overviewStockSearchMenuHide20260717)return;window.__overviewStockSearchMenuHide20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
      '<div class="head"><h2>TÃƒÂ¬m nhanh tÃ¡Â»â€œn kho</h2><button class="btn small" id="clearOverviewStockSearch" type="button">XÃƒÂ³a tÃƒÂ¬m</button></div>'+
      '<div class="body">'+
        '<label class="overview-stock-search-field">Search tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£<input id="overviewStockSearch" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hÃƒÂ ng hoÃ¡ÂºÂ·c kho..."></label>'+
        '<div id="overviewStockResults" class="overview-stock-results" aria-live="polite"></div>'+
      '</div>'+
    '</div>';
  }
  function renderOverviewStockResults(){
    var input=document.getElementById('overviewStockSearch'),box=document.getElementById('overviewStockResults');if(!input||!box)return;
    var q=norm(input.value),rows=stockByItem().filter(function(x){return q&&x.search.indexOf(q)>=0}).slice(0,12);
    if(!q){box.innerHTML='<div class="overview-stock-empty">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem nhanh tÃ¡Â»â€¢ng tÃ¡Â»â€œn vÃƒÂ  kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng.</div>';return}
    if(!rows.length){box.innerHTML='<div class="overview-stock-empty">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn.</div>';return}
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
  if(!document.getElementById('overview-stock-search-menu-hide-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='overview-stock-search-menu-hide-style-20260721-mobile-login-sync-1';
    st.textContent='.overview-stock-search-panel{margin:0 0 10px!important;border-color:#8ccdb7!important;overflow:visible!important}.overview-stock-search-panel .head{background:linear-gradient(90deg,#0c8f69,#20b78a)!important;color:#fff!important;border-bottom:0!important;padding:8px 10px!important}.overview-stock-search-panel .head h2{color:#fff!important}.overview-stock-search-panel .head .btn{background:#fff!important;color:#087253!important;border-color:#fff!important;font-weight:700!important}.overview-stock-search-panel .body{background:#07966f!important;padding:8px 10px 10px!important}.overview-stock-search-field{display:block!important;color:#fff!important;font-size:12.5px!important;font-weight:650!important}.overview-stock-search-field input{width:100%!important;margin-top:5px!important;min-height:40px!important;border:2px solid #ffd74f!important;border-radius:9px!important;background:#fffde8!important;box-shadow:0 0 0 3px rgba(255,215,79,.22)!important;font-size:14px!important}.overview-stock-results{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:7px;margin-top:8px}.overview-stock-result{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 8px;text-align:left;border:1px solid #b9dfd1;background:#fff;border-radius:8px;padding:8px 10px;cursor:pointer;color:#10352a}.overview-stock-result:hover{background:#f1fff8;border-color:#07966f}.overview-stock-name{font-weight:700;min-width:0}.overview-stock-total{grid-column:2;grid-row:1;background:#07966f;color:#fff;border-radius:999px;padding:4px 8px;font-weight:700;white-space:nowrap}.overview-stock-kho{grid-column:1/-1;color:#087253;font-size:12.5px;line-height:1.35}.overview-stock-kho span{color:#9ab3aa;margin:0 4px}.overview-stock-empty{background:#fff;border:1px solid #b9dfd1;border-radius:8px;padding:9px 10px;color:#5b7067;font-weight:600}@media(max-width:900px){.overview-stock-search-panel{margin-bottom:8px!important}.overview-stock-search-panel .head{padding:8px!important}.overview-stock-search-panel .body{padding:8px!important}.overview-stock-results{grid-template-columns:1fr}.overview-stock-search-field input{font-size:16px!important;min-height:44px!important}.overview-stock-result{grid-template-columns:1fr;gap:5px}.overview-stock-total{grid-column:1;grid-row:auto;justify-self:start}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__overviewSearchCleanGroupText20260717)return;window.__overviewSearchCleanGroupText20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('overview-search-clean-group-text-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='overview-search-clean-group-text-style-20260721-mobile-login-sync-1';
    st.textContent='.overview-stock-results{margin-top:0!important}.overview-stock-results:has(.overview-stock-result){margin-top:8px!important}.overview-stock-empty{display:none!important}.group-link-chip{display:inline!important;align-items:initial!important;max-width:none!important;border-radius:0!important;background:transparent!important;color:inherit!important;border:0!important;padding:0!important;font-weight:400!important;font-size:inherit!important;line-height:inherit!important}.panel-accent table .group-link-chip,.report-table .group-link-chip{white-space:normal!important}@media(max-width:900px){.group-link-chip{font-size:inherit!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__nhapFormCompactNoDept20260717)return;window.__nhapFormCompactNoDept20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function groupSelectOptions(){
    return '<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ nhÃƒÂ³m</option>'+(state.nhomHangList||[]).map(function(g){return '<option value="'+esc(g)+'">'+esc(g)+'</option>'}).join('');
  }
  window.screenNhap=function(){
    return shell('nhap','NhÃ¡ÂºÂ­p kho','TÃ¡Â»â€œn vÃ¡ÂºÂ«n tÃƒÂ­nh chung theo mÃƒÂ£ hÃƒÂ ng; mÃƒÂ´ tÃ¡ÂºÂ£ xem bÃ¡ÂºÂ±ng nÃƒÂºt Chi tiÃ¡ÂºÂ¿t khi cÃ¡ÂºÂ§n.',
      '<div class="panel nhap-form-panel">'+
        '<div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</h2><button class="btn blue" onclick="go(&quot;chuyen&quot;)">NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</button></div>'+
        '<div class="body form nhap-form-grid">'+
          '<label class="nhap-so">SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soNhap" value="'+nextSlipNo('PN')+'" readonly></label>'+
          '<label class="nhap-loai">LoÃ¡ÂºÂ¡i nhÃ¡ÂºÂ­p<select id="loaiNhap"></select></label>'+
          '<label class="nhap-kho">Kho nhÃ¡ÂºÂ­n<select id="khoNhap"></select></label>'+
          '<label class="nhap-ncc">NCC<select id="nccNhap"></select></label>'+
          '<label class="nhap-group">NhÃƒÂ³m hÃƒÂ ng<select id="nhomNhap">'+groupSelectOptions()+'</select></label>'+
          '<label class="nhap-qty">SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slNhap" type="number" value="1"></label>'+
          '<label class="full item-search-field nhap-item">HÃƒÂ ng hÃƒÂ³a<input id="hangNhap" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hoÃ¡ÂºÂ·c mÃƒÂ´ tÃ¡ÂºÂ£"><div id="hangNhapSuggest" class="item-suggest-list"></div></label>'+
          '<button class="btn blue" id="batHangMoi" type="button">+ TÃ¡ÂºÂ¡o hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</button>'+
          '<div class="full panel nhap-new-item-panel" id="hangMoiBox" style="display:none;box-shadow:none">'+
            '<div class="head"><h2>HÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi</h2></div>'+
            '<div class="body form">'+
              '<label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="nhapMaHangMoi" readonly></label>'+
              '<label>TÃƒÂªn hÃƒÂ ng mÃ¡Â»â€ºi<input id="nhapTenHangMoi" placeholder="VD: ÃƒÂo thun CÃƒÂ  Mau"></label>'+
              '<label>NhÃƒÂ³m hÃƒÂ ng<select id="nhapNhomHangMoi"></select></label>'+
              '<label>Ã„ÂÃ†Â¡n vÃ¡Â»â€¹ tÃƒÂ­nh<select id="nhapDvtMoi"></select></label>'+
              '<label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="nhapThuocTinhMoi" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label>'+
              '<p class="hint full">MÃƒÂ´ tÃ¡ÂºÂ£ khÃƒÂ´ng tÃƒÂ¡ch tÃ¡Â»â€œn kho. TÃ¡Â»â€œn vÃ¡ÂºÂ«n tÃƒÂ­nh chung theo mÃ¡ÂºÂ·t hÃƒÂ ng nÃƒÂ y.</p>'+
            '</div>'+
          '</div>'+
          '<button class="btn primary" id="luuNhap">LÃ†Â°u phiÃ¡ÂºÂ¿u nhÃ¡ÂºÂ­p</button>'+
        '</div>'+
      '</div>');
  };
  if(!document.getElementById('nhap-form-compact-no-dept-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='nhap-form-compact-no-dept-style-20260721-mobile-login-sync-1';
    st.textContent='#nhap .nhap-form-panel .head{align-items:center!important}#nhap .nhap-form-grid{display:grid!important;grid-template-columns:180px minmax(220px,1fr) minmax(220px,1fr)!important;gap:8px 10px!important;align-items:end!important}#nhap .nhap-loai{display:none!important}#nhap .nhap-so{grid-column:1!important}#nhap .nhap-kho{grid-column:2!important}#nhap .nhap-ncc{grid-column:3!important}#nhap .nhap-group{grid-column:1/3!important}#nhap .nhap-qty{grid-column:3!important}#nhap .nhap-item{grid-column:1/-1!important}#nhap .nhap-form-grid label{min-width:0!important}#nhap .nhap-form-grid input,#nhap .nhap-form-grid select{width:100%!important}#nhap #batHangMoi,#nhap #luuNhap{grid-column:1/-1!important}#nhap .nhap-new-item-panel{grid-column:1/-1!important;border-radius:8px!important;margin:0!important}#nhap .nhap-new-item-panel .body.form{grid-template-columns:repeat(2,minmax(160px,1fr))!important}@media(max-width:900px){#nhap .nhap-form-grid{grid-template-columns:1fr 1fr!important;gap:7px!important}#nhap .nhap-so{grid-column:1!important}#nhap .nhap-kho{grid-column:2!important}#nhap .nhap-ncc{grid-column:1!important}#nhap .nhap-group{grid-column:2!important}#nhap .nhap-qty,#nhap .nhap-item{grid-column:1/-1!important}#nhap .nhap-form-panel .head{padding:8px 10px!important}#nhap .nhap-form-panel .head .btn{min-height:34px!important;font-size:12px!important}#nhap .nhap-new-item-panel .body.form{grid-template-columns:1fr!important}}@media(max-width:520px){#nhap .nhap-form-grid{grid-template-columns:1fr!important}#nhap .nhap-so,#nhap .nhap-kho,#nhap .nhap-ncc,#nhap .nhap-group,#nhap .nhap-qty,#nhap .nhap-item{grid-column:1!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__reportHideOverviewTab20260717)return;window.__reportHideOverviewTab20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function stripOverviewTab(html){
    return String(html||'').replace(/<button[^>]*onclick="showReport\('tq',this\)"[^>]*>\s*TÃ¡Â»â€¢ng quan\s*<\/button>/g,'');
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
      if(action.indexOf("showReport('tq'")>=0||btn.textContent.trim()==='TÃ¡Â»â€¢ng quan')btn.remove();
    });
  }
  var oldBind=window.bindForms;
  window.bindForms=function(){
    oldBind.apply(this,arguments);
    removeOverviewTab();
  };
  if(!document.getElementById('report-hide-overview-tab-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='report-hide-overview-tab-style-20260721-mobile-login-sync-1';
    st.textContent="#baocao .tabs .tab[onclick*=\"showReport('tq'\"]{display:none!important}";
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__mobileNhapDetailFit20260717)return;window.__mobileNhapDetailFit20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('mobile-nhap-detail-fit-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='mobile-nhap-detail-fit-style-20260721-mobile-login-sync-1';
    st.textContent='@media(max-width:900px){#nhap .nhap-form-panel .head{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;gap:8px!important;align-items:center!important}#nhap .nhap-form-panel .head h2{white-space:nowrap!important;line-height:1.15!important}#nhap .nhap-form-panel .head .btn{width:auto!important;min-width:124px!important;max-width:150px!important;padding:0 10px!important;justify-self:end!important;white-space:nowrap!important}#nhap .item-suggest-list .item-suggest-row-split{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;align-items:center!important;gap:6px!important;padding:6px 8px!important}#nhap .item-suggest-list .item-suggest-main{width:100%!important;min-width:0!important;padding:8px 6px!important;line-height:1.3!important}#nhap .item-suggest-list .item-suggest-name{font-size:13px!important;line-height:1.25!important;white-space:normal!important;overflow-wrap:anywhere!important}#nhap .item-suggest-list .item-suggest-meta{font-size:11.5px!important;line-height:1.3!important;white-space:normal!important;overflow-wrap:anywhere!important}#nhap .item-suggest-list .item-detail-btn{grid-column:2!important;grid-row:1!important;width:64px!important;min-width:64px!important;max-width:64px!important;height:32px!important;min-height:32px!important;max-height:32px!important;padding:0 6px!important;margin:0!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;border-radius:7px!important;font-size:11px!important;line-height:1.1!important;align-self:center!important;justify-self:end!important;white-space:nowrap!important}#nhap .item-suggest-list .item-detail-btn.small{width:64px!important}}@media(max-width:420px){#nhap .nhap-form-panel .head .btn{min-width:118px!important;font-size:11.5px!important}#nhap .item-suggest-list .item-detail-btn{width:58px!important;min-width:58px!important;max-width:58px!important;font-size:10.5px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__crossDeviceAutoSync20260717)return;window.__crossDeviceAutoSync20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
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
    if(showNotice)notice('Ã„ÂÃƒÂ£ cÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
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
      if(showNotice)notice('ChÃ†Â°a tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c dÃ¡Â»Â¯ liÃ¡Â»â€¡u online');
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
      if(showNotice)notice('Ã„ÂÃƒÂ£ Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ online');
      return true;
    }catch(e){
      console.warn(e);
      if(showNotice)notice('ChÃ†Â°a Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ Ã„â€˜Ã†Â°Ã¡Â»Â£c online');
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('overview-hide-recent-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='overview-hide-recent-style-20260721-mobile-login-sync-1';
    st.textContent='#tongquan .grid>.panel-accent{display:none!important}#tongquan .grid{grid-template-columns:1fr!important}#tongquan .grid>.panel-blue{width:100%!important}#tongquan .grid>.panel-blue .body{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))!important;gap:8px!important}#tongquan .grid>.panel-blue .body p{margin:0!important;padding:8px 10px!important;border:1px solid #d3e7dd!important;border-radius:8px!important;background:#fbfffd!important}@media(max-width:900px){#tongquan .grid>.panel-blue .body{grid-template-columns:1fr!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__suggestionSoftFont20260717)return;window.__suggestionSoftFont20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('suggestion-soft-font-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='suggestion-soft-font-style-20260721-mobile-login-sync-1';
    st.textContent='.item-suggest-list,.item-suggest-list *{font-family:"Segoe UI",Arial,Helvetica,sans-serif!important;letter-spacing:0!important}.item-suggest-row,.item-suggest-main{font-weight:400!important;color:#16352b!important}.item-suggest-name,.ton-suggest-title,.overview-stock-name{font-size:13px!important;font-weight:550!important;line-height:1.3!important;color:#12372c!important}.item-suggest-meta,.ton-suggest-meta,.overview-stock-kho{font-size:12px!important;font-weight:450!important;line-height:1.35!important;color:#087253!important}.item-suggest-row{padding:8px 10px!important}.item-suggest-main{padding:8px 10px!important}.item-suggest-empty,.ton-suggest-empty{font-size:12.5px!important;font-weight:400!important;color:#62766d!important}.item-detail-btn{font-weight:500!important}@media(max-width:900px){.item-suggest-name,.ton-suggest-title,.overview-stock-name{font-size:12.8px!important;font-weight:520!important}.item-suggest-meta,.ton-suggest-meta,.overview-stock-kho{font-size:11.5px!important;font-weight:430!important}.item-suggest-row{padding:8px 9px!important}.item-suggest-main{padding:8px 7px!important}.item-suggest-list .item-detail-btn{font-size:10.5px!important;font-weight:500!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__emptyInputPlaceholders20260717)return;window.__emptyInputPlaceholders20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
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
    blankField('hangNhap','GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hoÃ¡ÂºÂ·c mÃƒÂ´ tÃ¡ÂºÂ£','hangNhapSuggest',true);
    blankField('hangXuat','GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn','hangXuatSuggest',true);
    blankField('nguoiNhanXuat','GÃƒÂµ tÃƒÂªn ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n','',false);
    blankField('boPhanKhoXuat','TÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân theo ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n hoÃ¡ÂºÂ·c gÃƒÂµ bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho','',false);
    blankField('overviewStockSearch','GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hÃƒÂ ng hoÃ¡ÂºÂ·c kho...','',false);
    blankField('timTon','GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem tÃ¡Â»â€¢ng tÃ¡Â»â€œn vÃƒÂ  kho Ã„â€˜ang cÃƒÂ³ hÃƒÂ ng...','tonSuggestList',false);
    blankField('reportSearch','TÃƒÂ¬m ngÃƒÂ y, sÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u, kho, hÃƒÂ ng, NCC/ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n...','',false);
    quietFocus('hangNhap','hangNhapSuggest');
    quietFocus('hangXuat','hangXuatSuggest');
    if(typeof capNhatKhoXuatTheoHang==='function'&&byId('hangXuat'))capNhatKhoXuatTheoHang();
    if(byId('hangXuat')&&!String(byId('hangXuat').value||'').trim()&&byId('goiYKhoXuat'))byId('goiYKhoXuat').textContent='GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.';
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
  if(!document.getElementById('empty-input-placeholders-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='empty-input-placeholders-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var ICONS={tongquan:'TQ',ton:'TK',nhap:'+',xuat:'Ã¢Ë†â€™',thietbi:'IT',chuyen:'Ã¢â€ â€',baocao:'BC',hanghoa:'HH',thietlap:'Ã¢Å¡â„¢'};
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
  if(!document.getElementById('mobile-nav-correct-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='mobile-nav-correct-style-20260721-mobile-login-sync-1';
    st.textContent='@media(max-width:900px){main{padding-bottom:calc(96px + env(safe-area-inset-bottom))!important}.mobile-bar{display:flex!important;align-items:center!important;overflow-x:auto!important;overflow-y:hidden!important;gap:8px!important;padding:8px 10px calc(8px + env(safe-area-inset-bottom))!important;background:linear-gradient(180deg,#13b88b 0%,#07845f 100%)!important;border-top:1px solid rgba(255,255,255,.22)!important;box-shadow:0 -12px 28px rgba(4,84,60,.28),inset 0 1px 0 rgba(255,255,255,.18)!important;scroll-snap-type:x proximity!important;-webkit-overflow-scrolling:touch!important}.mobile-bar::-webkit-scrollbar{display:none!important}.mobile-bar button,.mobile-bar .mobile-nav-btn{position:relative!important;display:grid!important;grid-template-rows:24px auto!important;place-items:center!important;gap:3px!important;flex:0 0 84px!important;width:84px!important;min-width:84px!important;min-height:58px!important;padding:7px 5px!important;border-radius:14px!important;border:1px solid rgba(255,255,255,.20)!important;background:linear-gradient(180deg,rgba(255,255,255,.20),rgba(255,255,255,.08))!important;color:#f7fffb!important;font-size:12.2px!important;font-weight:650!important;line-height:1.05!important;text-align:center!important;text-shadow:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 7px 16px rgba(4,70,51,.18)!important;scroll-snap-align:center!important;transition:transform .12s ease,box-shadow .12s ease,background .12s ease!important}.mobile-bar button::before,.mobile-bar .mobile-nav-btn::before{content:attr(data-icon)!important;display:flex!important;align-items:center!important;justify-content:center!important;width:32px!important;height:24px!important;margin:0!important;border-radius:10px!important;background:rgba(255,255,255,.18)!important;color:inherit!important;font-size:11px!important;font-weight:800!important;line-height:1!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.18)!important}.mobile-bar button span,.mobile-bar .mobile-nav-btn span{display:block!important;max-width:100%!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.mobile-bar button.active,.mobile-bar .mobile-nav-btn.active{background:linear-gradient(180deg,#ffffff,#eefbf5)!important;color:#087253!important;border-color:#fff!important;transform:none!important;box-shadow:0 10px 22px rgba(3,68,49,.24),inset 0 1px 0 rgba(255,255,255,.86)!important;font-weight:750!important}.mobile-bar button.active::before,.mobile-bar .mobile-nav-btn.active::before{background:#dff6eb!important;color:#087253!important}.mobile-bar button.active::after,.mobile-bar .mobile-nav-btn.active::after{content:""!important;position:absolute!important;left:50%!important;bottom:6px!important;transform:translateX(-50%)!important;width:24px!important;height:3px!important;border-radius:999px!important;background:#0f8d68!important;margin:0!important}.mobile-bar button:active,.mobile-bar .mobile-nav-btn:active{transform:translateY(1px)!important}@media(max-width:420px){.mobile-bar{gap:7px!important;padding-left:8px!important;padding-right:8px!important}.mobile-bar button,.mobile-bar .mobile-nav-btn{flex-basis:78px!important;width:78px!important;min-width:78px!important;font-size:11.5px!important}}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itemNameDetailLink20260717)return;window.__itemNameDetailLink20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function clean(v){return String(v==null?'':v).replace(/\s+/g,' ').trim()}
  function norm(v){return clean(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d')}
  function items(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(function(h){return typeof normalizeHang==='function'?normalizeHang(h):[h[0],h[1],h[2],h[3],h[4]||'']})}
  function codeFromText(text){
    var t=clean(text).replace(/\s+Chi tiÃ¡ÂºÂ¿t\s*$/i,'');
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
    if(h)alert((h[1]||code)+'\nMÃƒÂ£ hÃƒÂ ng: '+h[0]+'\nNhÃƒÂ³m: '+(h[2]||'')+'\nÃ„ÂVT: '+(h[3]||'')+'\nChi tiÃ¡ÂºÂ¿t: '+(h[4]||'ChÃ†Â°a cÃƒÂ³ mÃƒÂ´ tÃ¡ÂºÂ£.'));
    return !!h;
  }
  document.addEventListener('click',function(e){
    if(e.target.closest&&e.target.closest('[data-close-detail],.item-detail-card'))return;
    var target=e.target.closest&&e.target.closest('.item-suggest-name,.overview-stock-name,.ton-suggest-title,.stock-card-item,td[data-label="HÃƒÂ ng"],td[data-label="TÃƒÂªn hÃƒÂ ng"]');
    if(!target)return;
    var code=codeFromClickTarget(target);
    if(!code)return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation)e.stopImmediatePropagation();
    openDetail(code);
  },true);
  if(!document.getElementById('item-name-detail-link-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='item-name-detail-link-style-20260721-mobile-login-sync-1';
    st.textContent='.item-suggest-name,.overview-stock-name,.ton-suggest-title,.stock-card-item,td[data-label="HÃƒÂ ng"],td[data-label="TÃƒÂªn hÃƒÂ ng"]{cursor:pointer!important;text-decoration:underline!important;text-decoration-thickness:1px!important;text-underline-offset:3px!important;text-decoration-color:rgba(7,132,95,.45)!important}.item-suggest-name:hover,.overview-stock-name:hover,.ton-suggest-title:hover,.stock-card-item:hover,td[data-label="HÃƒÂ ng"]:hover,td[data-label="TÃƒÂªn hÃƒÂ ng"]:hover{color:#006b50!important;text-decoration-color:#006b50!important}.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{content:"  Chi tiÃ¡ÂºÂ¿t";font-size:11px!important;font-weight:500!important;color:#087253!important;text-decoration:none!important;opacity:.85}@media(max-width:900px){.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{font-size:10.5px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideInlineDetailLabel20260717)return;window.__hideInlineDetailLabel20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('hide-inline-detail-label-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='hide-inline-detail-label-style-20260721-mobile-login-sync-1';
    st.textContent='.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{content:none!important;display:none!important}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__inlineClearSearchButton20260717)return;window.__inlineClearSearchButton20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
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
  if(!document.getElementById('inline-clear-search-button-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='inline-clear-search-button-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  if(!document.getElementById('hide-suggest-detail-button-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='hide-suggest-detail-button-style-20260721-mobile-login-sync-1';
    st.textContent='.item-suggest-list .item-detail-btn{display:none!important}.item-suggest-list .item-suggest-row-split{display:block!important}.item-suggest-list .item-suggest-main{width:100%!important;display:block!important}.item-suggest-list .item-suggest-name{display:inline!important}@media(max-width:900px){#nhap .item-suggest-list .item-suggest-row-split,#xuat .item-suggest-list .item-suggest-row-split{display:block!important;grid-template-columns:1fr!important;padding:0!important}#nhap .item-suggest-list .item-suggest-main,#xuat .item-suggest-list .item-suggest-main{padding:10px 12px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itemPhotoDescription20260717)return;window.__itemPhotoDescription20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function itemInfo(codeOrName){var q=norm(codeOrName);return allItems().find(function(h){return norm(h[0])===q||norm(h[1])===q||norm(h[0]+' - '+h[1])===q})||[codeOrName,codeOrName,'','','']}
  function itemPhoto(code){return state&&state.itemImages?state.itemImages[code]||'':''}
  function ensureImages(){if(!state.itemImages||typeof state.itemImages!=='object'||Array.isArray(state.itemImages))state.itemImages={};return state.itemImages}
  function preview(data,name){
    var box=document.getElementById('nhapItemPhotoPreview');if(!box)return;
    if(!data){box.innerHTML='';box.classList.remove('show');return}
    box.innerHTML='<img src="'+data+'" alt="Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a"><span>'+(name?esc(name):'Ã„ÂÃƒÂ£ chÃ¡Â»Ân Ã¡ÂºÂ£nh')+'</span><button class="btn small" type="button" id="clearNhapItemPhoto">BÃ¡Â»Â Ã¡ÂºÂ£nh</button>';
    box.classList.add('show');
    var clear=document.getElementById('clearNhapItemPhoto');
    if(clear)clear.onclick=function(){window.__pendingNhapItemImageData='';window.__pendingNhapItemImageName='';preview('','')};
  }
  function compressImage(file){
    return new Promise(function(resolve,reject){
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng file Ã¡ÂºÂ£nh'));
      var reader=new FileReader();
      reader.onload=function(){
        var img=new Image();
        img.onload=function(){
          var max=900,w=img.width,h=img.height,ratio=Math.min(1,max/Math.max(w,h));
          var canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(w*ratio));canvas.height=Math.max(1,Math.round(h*ratio));
          var ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
          resolve(canvas.toDataURL('image/jpeg',0.72));
        };
        img.onerror=function(){reject(new Error('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh'))};
      reader.readAsDataURL(file);
    });
  }
  function enhanceNhapPhotoField(){
    var input=document.getElementById('nhapThuocTinhMoi');if(!input)return;
    var label=input.closest&&input.closest('label');if(!label||label.classList.contains('item-photo-desc-field'))return;
    label.classList.add('item-photo-desc-field');
    input.insertAdjacentHTML('afterend','<button class="item-photo-button" id="nhapItemPhotoBtn" type="button">Ã¡ÂºÂ¢nh</button><input id="nhapItemPhotoInput" type="file" accept="image/*" style="display:none"><div id="nhapItemPhotoPreview" class="item-photo-preview"></div>');
    var btn=document.getElementById('nhapItemPhotoBtn'),file=document.getElementById('nhapItemPhotoInput');
    if(btn&&file)btn.onclick=function(){file.click()};
    if(file)file.onchange=function(){
      var f=file.files&&file.files[0];if(!f)return;
      btn.textContent='Ã„Âang xÃ¡Â»Â­ lÃƒÂ½...';
      compressImage(f).then(function(data){
        window.__pendingNhapItemImageData=data;
        window.__pendingNhapItemImageName=f.name||'Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a';
        btn.textContent='Ã¡ÂºÂ¢nh';
        preview(data,window.__pendingNhapItemImageName);
      }).catch(function(e){btn.textContent='Ã¡ÂºÂ¢nh';alert(e.message||'KhÃƒÂ´ng chÃƒÂ¨n Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh')});
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
    var photoHtml=photo?'<button class="item-detail-photo-chip" type="button" data-item-photo-open="1">Ã¡ÂºÂ¢nh</button><div class="item-detail-photo-wrap"><img src="'+photo+'" alt="Ã¡ÂºÂ¢nh '+esc(h[1]||'hÃƒÂ ng hÃƒÂ³a')+'" data-item-photo-open="1"></div>':'';
    var box=document.createElement('div');box.id='itemDetailModal';
    box.innerHTML='<div class="item-detail-backdrop" data-close-detail="1"></div><div class="item-detail-card item-detail-card-photo"><div class="item-detail-head"><h2>Chi tiÃ¡ÂºÂ¿t hÃƒÂ ng hÃƒÂ³a</h2><button class="btn small" type="button" data-close-detail="1">Ã„ÂÃƒÂ³ng</button></div><div class="item-detail-body"><p><b>'+esc(h[1]||code)+'</b></p><p class="hint">MÃƒÂ£ hÃƒÂ ng: '+esc(h[0]||'')+' | NhÃƒÂ³m: '+esc(h[2]||'')+' | Ã„ÂVT: '+esc(h[3]||'')+'</p><div class="item-detail-text item-detail-desc-box">'+photoHtml+'<div>'+(d?esc(d):'ChÃ†Â°a cÃƒÂ³ mÃƒÂ´ tÃ¡ÂºÂ£.')+'</div></div></div></div>';
    document.body.appendChild(box);
  };
  document.addEventListener('click',function(e){
    var img=e.target&&e.target.closest&&e.target.closest('[data-item-photo-open]');if(!img)return;
    var src=(document.querySelector('#itemDetailModal .item-detail-photo-wrap img')||{}).src;if(!src)return;
    var old=document.getElementById('itemPhotoZoom');if(old)old.remove();
    var z=document.createElement('div');z.id='itemPhotoZoom';z.innerHTML='<div class="item-photo-zoom-backdrop" data-close-photo="1"></div><div class="item-photo-zoom-card"><button class="btn small" type="button" data-close-photo="1">Ã„ÂÃƒÂ³ng</button><img src="'+src+'" alt="Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a"></div>';
    document.body.appendChild(z);
  });
  document.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('[data-close-photo]')){var old=document.getElementById('itemPhotoZoom');if(old)old.remove()}});
  if(!document.getElementById('item-photo-description-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='item-photo-description-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
      if(!file||!/^image\//.test(file.type||''))return reject(new Error('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng file Ã¡ÂºÂ£nh'));
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
        img.onerror=function(){reject(new Error('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh'))};
        img.src=reader.result;
      };
      reader.onerror=function(){reject(new Error('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh'))};
      reader.readAsDataURL(file);
    });
  }
  function previewVariantPhoto(data,name){
    var box=document.getElementById('nhapVariantPhotoPreview');if(!box)return;
    if(!data){box.innerHTML='';box.classList.remove('show');return}
    box.innerHTML='<img src="'+data+'" alt="Ã¡ÂºÂ¢nh phÃƒÂ¢n loÃ¡ÂºÂ¡i"><span>'+(name?esc(name):'Ã„ÂÃƒÂ£ chÃ¡Â»Ân Ã¡ÂºÂ£nh phÃƒÂ¢n loÃ¡ÂºÂ¡i')+'</span><button class="btn small" type="button" id="clearNhapVariantPhoto">BÃ¡Â»Â Ã¡ÂºÂ£nh</button>';
    box.classList.add('show');
    var clear=document.getElementById('clearNhapVariantPhoto');
    if(clear)clear.onclick=function(){window.__pendingNhapVariantPhoto='';window.__pendingNhapVariantPhotoName='';previewVariantPhoto('','')};
  }
  function enhanceNhapVariantField(){
    var saveBtn=document.getElementById('luuNhap');if(saveBtn)saveBtn.onclick=window.saveNhap;
    var hang=document.getElementById('hangNhap');if(!hang||document.getElementById('nhapVariantDesc'))return;
    var label=hang.closest&&hang.closest('label');
    var html='<div class="full nhap-variant-field">'+
      '<label>PhÃƒÂ¢n loÃ¡ÂºÂ¡i / mÃƒÂ´ tÃ¡ÂºÂ£ lÃ¡ÂºÂ§n nhÃ¡ÂºÂ­p</label>'+
      '<div class="nhap-variant-input-wrap">'+
        '<input id="nhapVariantDesc" autocomplete="off" placeholder="VD: loÃ¡ÂºÂ¡i inox, loÃ¡ÂºÂ¡i nhÃ¡Â»Â±a, mÃƒÂ u cam, cÃƒÂ´ng suÃ¡ÂºÂ¥t 300W">'+
        '<button class="item-photo-button nhap-variant-photo-btn" id="nhapVariantPhotoBtn" type="button">Ã¡ÂºÂ¢nh</button>'+
        '<input id="nhapVariantPhotoInput" type="file" accept="image/*" style="display:none">'+
      '</div>'+
      '<div id="nhapVariantPhotoPreview" class="item-photo-preview nhap-variant-photo-preview"></div>'+
      '<p class="hint nhap-variant-hint">DÃƒÂ¹ng khi cÃƒÂ¹ng mÃ¡Â»â„¢t mÃ¡ÂºÂ·t hÃƒÂ ng cÃƒÂ³ nhiÃ¡Â»Âu loÃ¡ÂºÂ¡i/Ã¡ÂºÂ£nh. TÃ¡Â»â€œn kho vÃ¡ÂºÂ«n tÃƒÂ­nh chung theo mÃƒÂ£ hÃƒÂ ng.</p>'+
    '</div>';
    (label||hang).insertAdjacentHTML('afterend',html);
    var btn=document.getElementById('nhapVariantPhotoBtn'),file=document.getElementById('nhapVariantPhotoInput');
    if(btn&&file)btn.onclick=function(){file.click()};
    if(file)file.onchange=function(){
      var f=file.files&&file.files[0];if(!f)return;
      btn.textContent='Ã„Âang xÃ¡Â»Â­ lÃƒÂ½...';
      compressImage(f).then(function(data){
        window.__pendingNhapVariantPhoto=data;
        window.__pendingNhapVariantPhotoName=f.name||'Ã¡ÂºÂ¢nh phÃƒÂ¢n loÃ¡ÂºÂ¡i';
        btn.textContent='Ã¡ÂºÂ¢nh';
        previewVariantPhoto(data,window.__pendingNhapVariantPhotoName);
      }).catch(function(e){btn.textContent='Ã¡ÂºÂ¢nh';alert(e.message||'KhÃƒÂ´ng chÃƒÂ¨n Ã„â€˜Ã†Â°Ã¡Â»Â£c Ã¡ÂºÂ£nh')});
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
    var basePhotoHtml=basePhoto?'<button class="item-detail-photo-chip" type="button" data-variant-photo-src="'+basePhoto+'">Ã¡ÂºÂ¢nh</button><div class="item-detail-photo-wrap"><img src="'+basePhoto+'" alt="Ã¡ÂºÂ¢nh '+esc(h[1]||'hÃƒÂ ng hÃƒÂ³a')+'" data-variant-photo-src="'+basePhoto+'"></div>':'';
    var variantHtml=vars.length?'<div class="item-variant-list"><h3>PhÃƒÂ¢n loÃ¡ÂºÂ¡i theo lÃ¡ÂºÂ§n nhÃ¡ÂºÂ­p</h3><div class="item-variant-grid">'+vars.map(function(v){
      var r=v.row,photo=v.photo?'<img class="item-variant-photo" src="'+v.photo+'" alt="Ã¡ÂºÂ¢nh phÃƒÂ¢n loÃ¡ÂºÂ¡i" data-variant-photo-src="'+v.photo+'">':'<div class="item-variant-photo-empty">ChÃ†Â°a cÃƒÂ³ Ã¡ÂºÂ£nh</div>';
      return '<div class="item-variant-card">'+photo+'<div class="item-variant-info"><b>'+esc(v.desc||'ChÃ†Â°a nhÃ¡ÂºÂ­p mÃƒÂ´ tÃ¡ÂºÂ£')+'</b><span>'+esc(khoName(r[2]))+' - '+qty(v.qty)+' '+esc(h[3]||'')+'</span><span>'+esc(r[0]||'')+' | '+esc(r[1]||'')+'</span><span>NCC: '+esc(v.ncc||'')+'</span></div></div>';
    }).join('')+'</div></div>':'';
    var box=document.createElement('div');box.id='itemDetailModal';
    box.innerHTML='<div class="item-detail-backdrop" data-close-detail="1"></div><div class="item-detail-card item-detail-card-photo item-detail-card-wide"><div class="item-detail-head"><h2>Chi tiÃ¡ÂºÂ¿t hÃƒÂ ng hÃƒÂ³a</h2><button class="btn small" type="button" data-close-detail="1">Ã„ÂÃƒÂ³ng</button></div><div class="item-detail-body"><p><b>'+esc(h[1]||code)+'</b></p><p class="hint">MÃƒÂ£ hÃƒÂ ng: '+esc(h[0]||'')+' | NhÃƒÂ³m: '+esc(h[2]||'')+' | Ã„ÂVT: '+esc(h[3]||'')+'</p><div class="item-detail-text item-detail-desc-box">'+basePhotoHtml+'<div>'+(baseDesc?esc(baseDesc):'ChÃ†Â°a cÃƒÂ³ mÃƒÂ´ tÃ¡ÂºÂ£ chung.')+'</div></div>'+variantHtml+'</div></div>';
    document.body.appendChild(box);
  };
  document.addEventListener('click',function(e){
    var target=e.target&&e.target.closest&&e.target.closest('[data-variant-photo-src]');if(!target)return;
    var src=target.getAttribute('data-variant-photo-src');if(!src)return;
    var old=document.getElementById('itemPhotoZoom');if(old)old.remove();
    var z=document.createElement('div');z.id='itemPhotoZoom';
    z.innerHTML='<div class="item-photo-zoom-backdrop" data-close-photo="1"></div><div class="item-photo-zoom-card"><button class="btn small" type="button" data-close-photo="1">Ã„ÂÃƒÂ³ng</button><img src="'+src+'" alt="Ã¡ÂºÂ¢nh hÃƒÂ ng hÃƒÂ³a"></div>';
    document.body.appendChild(z);
  });
  if(!document.getElementById('import-variant-photos-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='import-variant-photos-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
  if(!document.getElementById('hide-nhap-suggest-gap-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='hide-nhap-suggest-gap-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function allItems(){return (window.state&&Array.isArray(state.hang)?state.hang:[]).map(hnorm)}
  function desc(code){var h=allItems().find(function(x){return x[0]===code});return String(h&&h[4]||'').trim()}
  function detailBtn(code){return desc(code)?'<button class="btn small item-detail-btn" type="button" data-item-detail="'+esc(code)+'">Chi tiÃ¡ÂºÂ¿t</button>':'<span class="hint">KhÃƒÂ´ng cÃƒÂ³</span>'}
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
    if(!adminOk())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c xÃƒÂ³a hÃƒÂ ng hÃƒÂ³a.');
    var h=hnorm((state.hang||[])[i]);if(!h||!h[0])return;
    if(itemUsed(h[0]))return alert('HÃƒÂ ng hÃƒÂ³a nÃƒÂ y Ã„â€˜ÃƒÂ£ cÃƒÂ³ tÃ¡Â»â€œn kho, phiÃ¡ÂºÂ¿u phÃƒÂ¡t sinh hoÃ¡ÂºÂ·c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ liÃƒÂªn quan. Ã„ÂÃ¡Â»Æ’ an toÃƒÂ n dÃ¡Â»Â¯ liÃ¡Â»â€¡u, bÃ¡ÂºÂ¡n hÃƒÂ£y sÃ¡Â»Â­a tÃƒÂªn/mÃƒÂ´ tÃ¡ÂºÂ£ thay vÃƒÂ¬ xÃƒÂ³a.');
    if(!confirm('XÃƒÂ³a hÃƒÂ ng hÃƒÂ³a "'+(h[1]||h[0])+'"?'))return;
    state.hang.splice(i,1);
    if(state.itemImages&&state.itemImages[h[0]])delete state.itemImages[h[0]];
    save();render();
  };
  window.screenHang=function(){
    if(!adminOk())return shell('hanghoa','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thÃƒÂªm, sÃ¡Â»Â­a hoÃ¡ÂºÂ·c xÃƒÂ³a hÃƒÂ ng hÃƒÂ³a.</div></div>');
    var rows=allItems().map(function(h,i){
      var name='<button class="item-name-link" type="button" data-item-detail="'+esc(h[0])+'">'+esc(h[1])+'</button>';
      var actions='<div class="hang-actions"><button class="btn small" onclick="editHang('+i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteHangAdmin('+i+')">XÃƒÂ³a</button></div>';
      return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn hÃƒÂ ng',name)+td('NhÃƒÂ³m',esc(h[2]))+td('Ã„ÂVT',esc(h[3]))+td('Chi tiÃ¡ÂºÂ¿t',detailBtn(h[0]))+td('Thao tÃƒÂ¡c',actions)+'</tr>';
    }).join('');
    return shell('hanghoa','Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a','TÃ¡Â»â€œn tÃƒÂ­nh chung theo mÃƒÂ£ hÃƒÂ ng; bÃ¡ÂºÂ¥m tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem mÃƒÂ´ tÃ¡ÂºÂ£.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch hÃƒÂ ng hÃƒÂ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>Chi tiÃ¡ÂºÂ¿t</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin hÃƒÂ ng hÃƒÂ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="maHang" readonly></label><label>TÃƒÂªn hÃƒÂ ng<input id="tenHang" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m<select id="nhomHang"></select></label><label>Ã„ÂVT<select id="dvt"></select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="thuocTinh" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label><button class="btn primary" id="luuHang">LÃ†Â°u hÃƒÂ ng hÃƒÂ³a</button><button class="btn" id="huyHang">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>');
  };
  if(!document.getElementById('hang-delete-admin-clean-detail-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='hang-delete-admin-clean-detail-style-20260721-mobile-login-sync-1';
    st.textContent='#hanghoa td[data-label="TÃƒÂªn hÃƒÂ ng"]>.item-detail-btn,#hanghoa td[data-label="TÃƒÂªn hÃƒÂ ng"] .item-detail-btn{display:none!important}.item-name-link{border:0!important;background:transparent!important;padding:0!important;margin:0!important;color:#07372b!important;font:inherit!important;text-align:left!important;text-decoration:underline!important;text-decoration-thickness:1px!important;text-underline-offset:3px!important;text-decoration-color:rgba(7,132,95,.45)!important;cursor:pointer!important}.item-name-link:hover{color:#006b50!important;text-decoration-color:#006b50!important}.hang-actions{display:flex!important;align-items:center!important;gap:6px!important;justify-content:flex-start!important}.hang-actions .btn{min-width:44px!important}@media(max-width:900px){.hang-actions{gap:5px!important}.hang-actions .btn{min-width:40px!important;padding:6px 8px!important}.item-name-link{line-height:1.25!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__hideXuatSuggestGap20260717)return;window.__hideXuatSuggestGap20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
      var note='TÃ¡Â»â€¢ng '+qty(totalStock(h[0]))+' '+(h[3]||'')+' - '+stockedWarehouses(h[0]).join(' | ');
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
    if(!String(input.value||'').trim()&&document.getElementById('goiYKhoXuat'))document.getElementById('goiYKhoXuat').textContent='GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.';
  }
  function compactXuatSuggest(){
    var input=document.getElementById('hangXuat'),box=document.getElementById('hangXuatSuggest');if(!input)return;
    ensureXuatNativeList();
    input.onfocus=function(){ensureXuatNativeList();if(box){box.classList.remove('show');box.innerHTML=''}};
    input.oninput=syncXuatInput;
    input.onchange=syncXuatInput;
    if(box){box.classList.remove('show');box.innerHTML=''}
  }
  if(!document.getElementById('hide-xuat-suggest-gap-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='hide-xuat-suggest-gap-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  if(!document.getElementById('mobile-xnk-compact-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='mobile-xnk-compact-style-20260721-mobile-login-sync-1';
    st.textContent='@media(max-width:900px){#baocao #rp.xnk-compact-mobile table{display:block!important;background:transparent!important;font-size:12px!important}#baocao #rp.xnk-compact-mobile thead{display:none!important}#baocao #rp.xnk-compact-mobile tbody{display:grid!important;gap:7px!important;background:transparent!important}#baocao #rp.xnk-compact-mobile tr{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:4px 8px!important;margin:0!important;padding:8px 9px!important;border:1px solid #cfe3da!important;border-radius:9px!important;background:#fff!important;box-shadow:0 3px 10px rgba(8,71,49,.06)!important}#baocao #rp.xnk-compact-mobile td{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:5px!important;min-width:0!important;border:0!important;padding:0!important;text-align:left!important;font-size:11.5px!important;line-height:1.25!important;color:#17382d!important;word-break:break-word!important}#baocao #rp.xnk-compact-mobile td:before{content:attr(data-label)!important;flex:0 0 auto!important;min-width:auto!important;padding:1px 5px!important;border-radius:999px!important;background:#e8f6f0!important;color:#087253!important;font-size:9.8px!important;font-weight:650!important;line-height:1.25!important;text-align:left!important}#baocao #rp.xnk-compact-mobile td.xnk-empty-cell{display:none!important}#baocao #rp.xnk-compact-mobile td[data-label="HÃƒÂ ng"],#baocao #rp.xnk-compact-mobile td[data-label="LoÃ¡ÂºÂ¡i"],#baocao #rp.xnk-compact-mobile td[data-label="NCC/NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n"],#baocao #rp.xnk-compact-mobile td[data-label="Thao tÃƒÂ¡c"]{grid-column:1/-1!important}#baocao #rp.xnk-compact-mobile td[data-label="HÃƒÂ ng"]{font-weight:600!important;color:#0e3026!important}#baocao #rp.xnk-compact-mobile td[data-label="SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u"]{font-weight:700!important;color:#064f3d!important}#baocao #rp.xnk-compact-mobile td[data-label="NhÃ¡ÂºÂ­p"],#baocao #rp.xnk-compact-mobile td[data-label="XuÃ¡ÂºÂ¥t"]{font-weight:700!important;color:#006b50!important}#baocao #rp.xnk-compact-mobile td[data-label="Thao tÃƒÂ¡c"] .row-actions{display:flex!important;gap:6px!important;justify-content:flex-end!important;width:100%!important}#baocao #rp.xnk-compact-mobile td[data-label="Thao tÃƒÂ¡c"] .btn{width:auto!important;min-width:48px!important;min-height:28px!important;padding:4px 8px!important;font-size:11px!important}#baocao #rp.xnk-compact-mobile .item-detail-btn,#baocao #rp.xnk-compact-mobile .btn.small{width:auto!important}#baocao #rp.xnk-compact-mobile .wrap{overflow:visible!important}}';
    document.head.appendChild(st);
  }
  setTimeout(function(){markXnk()},100);
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__warehouseOnePanel20260717)return;window.__warehouseOnePanel20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d')}
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
      var action='<span class="row-actions"><button class="btn small" type="button" onclick="editWarehouseOne('+i+')">SÃ¡Â»Â­a</button>';
      if(typeof deleteKhoSetup==='function')action+='<button class="btn small bad" type="button" onclick="deleteKhoSetup('+i+')">XÃƒÂ³a</button>';
      action+='</span>';
      return '<tr>'+td('MÃƒÂ£ kho',esc(k[0]))+td('TÃƒÂªn kho',esc(k[1]))+td('PhÃ¡Â»Â¥ trÃƒÂ¡ch',esc(k[2]||'ChÃ†Â°a gÃƒÂ¡n'))+td('Thao tÃƒÂ¡c',action)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="4">ChÃ†Â°a cÃƒÂ³ kho.</td></tr>';
  }
  function warehousePanel(){
    return '<div class="panel warehouse-one-panel"><div class="head"><h2>Danh sÃƒÂ¡ch kho</h2><span class="tag">ThÃƒÂªm / sÃ¡Â»Â­a chung mÃ¡Â»â„¢t mÃ¡Â»Â¥c</span></div><div class="body form warehouse-one-form"><input id="whOneEdit" type="hidden"><label>MÃƒÂ£ kho<input id="whOneCode" value="'+esc(nextCode())+'" placeholder="VD: KHO-001"></label><label>TÃƒÂªn kho<input id="whOneName" placeholder="TÃƒÂªn kho"></label><label>NgÃ†Â°Ã¡Â»Âi phÃ¡Â»Â¥ trÃƒÂ¡ch<input id="whOneOwner" placeholder="TÃƒÂªn ngÃ†Â°Ã¡Â»Âi/phÃƒÂ²ng ban"></label><button class="btn primary" id="whOneSave" type="button">LÃ†Â°u kho</button><button class="btn" id="whOneNew" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full">CÃƒÂ³ thÃ¡Â»Æ’ sÃ¡Â»Â­a mÃƒÂ£ kho. Khi Ã„â€˜Ã¡Â»â€¢i mÃƒÂ£, tÃ¡Â»â€œn kho, phiÃ¡ÂºÂ¿u vÃƒÂ  Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n Ã„â€˜ÃƒÂ£ liÃƒÂªn kÃ¡ÂºÂ¿t sÃ¡ÂºÂ½ tÃ¡Â»Â± Ã„â€˜i theo mÃƒÂ£ mÃ¡Â»â€ºi.</p></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£ kho</th><th>TÃƒÂªn kho</th><th>PhÃ¡Â»Â¥ trÃƒÂ¡ch</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+warehouseRows()+'</tbody></table></div></div>';
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
    var owner=(el('whOneOwner')&&el('whOneOwner').value.trim())||'ChÃ†Â°a gÃƒÂ¡n';
    if(!code)return alert('NhÃ¡ÂºÂ­p mÃƒÂ£ kho');
    if(!name)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn kho');
    var dup=(state.kho||[]).some(function(k,i){return k&&k[0]===code&&String(i)!==String(idx)});
    if(dup)return alert('MÃƒÂ£ kho nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');
    if(idx===''){
      state.kho.push([code,name,owner]);
    }else{
      idx=Number(idx);
      if(!state.kho[idx])return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y kho cÃ¡ÂºÂ§n sÃ¡Â»Â­a');
      var oldCode=state.kho[idx][0];
      renameKhoCode(oldCode,code);
      state.kho[idx]=[code,name,owner];
    }
    persist();
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u kho');
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
  if(!document.getElementById('warehouse-one-panel-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='warehouse-one-panel-style-20260721-mobile-login-sync-1';
    st.textContent='#thietlap .warehouse-combined-panel{display:none!important}#thietlap .warehouse-combined-panel + .two > .warehouse-one-panel,#thietlap .warehouse-one-panel{display:block!important;grid-column:1/-1}#thietlap .warehouse-one-form{grid-template-columns:160px minmax(220px,1fr) minmax(220px,1fr) auto auto;align-items:end}#thietlap .warehouse-one-form .hint{margin:0;color:#526b60}.warehouse-one-panel .row-actions{justify-content:flex-start}@media(max-width:900px){#thietlap .warehouse-one-form{grid-template-columns:1fr}#thietlap .warehouse-one-panel table{min-width:640px}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__employeeMainMenu20260717)return;window.__employeeMainMenu20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
      return '<tr>'+td('TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn','<button class="link-like employee-name-link" type="button" onclick="editEmployee('+r.i+')">'+esc(x.name)+'</button>')+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',esc(x.dept||''))+td('Ghi chÃƒÂº',esc(x.note||''))+td('Thao tÃƒÂ¡c','<span class="row-actions"><button class="btn small" type="button" onclick="editEmployee('+r.i+')">SÃ¡Â»Â­a</button><button class="btn small bad" type="button" onclick="deleteEmployee('+r.i+')">XÃƒÂ³a</button></span>')+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="4">ChÃ†Â°a cÃƒÂ³ nhÃƒÂ¢n viÃƒÂªn phÃƒÂ¹ hÃ¡Â»Â£p.</td></tr>';
  }
  function employeeScreen(){
    if(!isAdminUser())return shell('nhanvien','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c thiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p danh sÃƒÂ¡ch nhÃƒÂ¢n viÃƒÂªn.','<div class="panel"><div class="body">BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n cÃƒÂ³ thÃ¡Â»Æ’ nhÃ¡ÂºÂ­p phiÃ¡ÂºÂ¿u theo quyÃ¡Â»Ân Ã„â€˜Ã†Â°Ã¡Â»Â£c cÃ¡ÂºÂ¥p.</div></div>');
    ensureEmployees(state);
    return shell('nhanvien','NhÃƒÂ¢n viÃƒÂªn','ThiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p danh sÃƒÂ¡ch nhÃƒÂ¢n viÃƒÂªn vÃƒÂ  bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi cÃ¡ÂºÂ¥p phÃƒÂ¡t, sÃ¡Â»Â­ dÃ¡Â»Â¥ng.','<div class="grid employee-layout"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch nhÃƒÂ¢n viÃƒÂªn</h2></div><div class="body employee-search-line"><input id="employeeSearch" placeholder="GÃƒÂµ tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn hoÃ¡ÂºÂ·c bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m"><button class="btn" id="clearEmployeeSearch" type="button">XÃƒÂ³a tÃƒÂ¬m</button></div><div class="wrap"><table><thead><tr><th>TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>Ghi chÃƒÂº</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody id="employeeRows">'+employeeRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin nhÃƒÂ¢n viÃƒÂªn</h2></div><div class="body form"><input id="editEmployeeIndex" type="hidden"><label>TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn<input id="employeeName" list="employeeNameList" placeholder="VD: NguyÃ¡Â»â€¦n VÃ„Æ’n A"><datalist id="employeeNameList">'+employeeNameOptions('')+'</datalist></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="employeeDept" list="employeeDeptList" placeholder="VD: PhÃƒÂ²ng HC / Kho VP 77CT"><datalist id="employeeDeptList">'+deptOptions('')+'</datalist></label><label class="full">Ghi chÃƒÂº<input id="employeeNote" placeholder="ChÃ¡Â»Â©c vÃ¡Â»Â¥, Ã„â€˜iÃ¡Â»â€¡n thoÃ¡ÂºÂ¡i hoÃ¡ÂºÂ·c ghi chÃƒÂº nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n"></label><button class="btn primary" id="saveEmployee" type="button">LÃ†Â°u nhÃƒÂ¢n viÃƒÂªn</button><button class="btn" id="newEmployee" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full">Danh sÃƒÂ¡ch nÃƒÂ y dÃƒÂ¹ng cho phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t/cÃ¡ÂºÂ¥p phÃƒÂ¡t vÃƒÂ  thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT. Khi chÃ¡Â»Ân nhÃƒÂ¢n viÃƒÂªn, app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho Ã„â€˜ÃƒÂ£ lÃ†Â°u.</p></div></div></div>');
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
    if(!name)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn');
    if(!dept)return alert('NhÃ¡ÂºÂ­p bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho cÃ¡Â»Â§a nhÃƒÂ¢n viÃƒÂªn');
    var dup=state.receiverDeptList.some(function(x,i){return norm(x.name)===norm(name)&&String(i)!==String(idx)});
    if(dup)return alert('TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn nÃƒÂ y Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong danh sÃƒÂ¡ch');
    if(idx===''){
      state.receiverDeptList.push({name:name,dept:dept,note:note});
    }else{
      idx=Number(idx);
      var old=state.receiverDeptList[idx];if(!old)return alert('KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y nhÃƒÂ¢n viÃƒÂªn cÃ¡ÂºÂ§n sÃ¡Â»Â­a');
      var oldName=old.name,oldDept=old.dept;
      state.receiverDeptList[idx]={name:name,dept:dept,note:note};
      (state.bd||[]).forEach(function(b){if(Number(b&&b[6]||0)>0&&b[7]===oldName){b[7]=name;if(!b[12]||b[12]===oldDept)b[12]=dept}});
      (state.thietBiIT||[]).forEach(function(raw){var x=typeof normalizeThietBi==='function'?normalizeThietBi(raw):raw;if(x&&x[5]===oldName)x[5]=name});
    }
    persistEmployees();
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u nhÃƒÂ¢n viÃƒÂªn');
    render();
  };
  window.deleteEmployee=function(i){
    ensureEmployees(state);
    var x=state.receiverDeptList[i];if(!x)return;
    var used=(state.bd||[]).some(function(b){return Number(b&&b[6]||0)>0&&b[7]===x.name})||(state.thietBiIT||[]).some(function(raw){var t=typeof normalizeThietBi==='function'?normalizeThietBi(raw):raw;return t&&t[5]===x.name});
    if(used){if(!confirm('NhÃƒÂ¢n viÃƒÂªn "'+x.name+'" Ã„â€˜ÃƒÂ£ cÃƒÂ³ trong phiÃ¡ÂºÂ¿u hoÃ¡ÂºÂ·c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT. DÃ¡Â»Â¯ liÃ¡Â»â€¡u cÃƒâ€¦Ã‚Â© vÃ¡ÂºÂ«n giÃ¡Â»Â¯ lÃ¡Â»â€¹ch sÃ¡Â»Â­. BÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n xÃƒÂ³a khÃ¡Â»Âi danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½ chÃ¡Â»Â©?'))return}
    else if(!confirm('XÃƒÂ³a nhÃƒÂ¢n viÃƒÂªn "'+x.name+'"?'))return;
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
  window.nav=addMenuItem(window.nav||nav,['nhanvien','NhÃƒÂ¢n viÃƒÂªn'],'thietbi');
  window.mobile=addMenuItem(window.mobile||mobile,['nhanvien','NhÃƒÂ¢n viÃƒÂªn'],'thietbi');
  var ICONS={tongquan:'TQ',ton:'TK',nhap:'+',xuat:'-',thietbi:'IT',nhanvien:'NV',chuyen:'Ã¢â€ â€',baocao:'BC',hanghoa:'HH',thietlap:'Ã¢Å¡â„¢'};
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
  if(!document.getElementById('employee-main-menu-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='employee-main-menu-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    setStatus('Ã„ÂÃƒÂ£ lÃ¡ÂºÂ¥y sÃ¡Â»â€˜ seri: '+value);
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
    if(byId('serial-scan-safe-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='serial-scan-safe-style-20260721-mobile-login-sync-1';
    st.textContent='.scan-status.good{color:#057251;font-weight:650}.scan-status.warn{color:#835d00;font-weight:650}.scan-status.bad{color:#9c2f2f;font-weight:650}.scan-actions{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important}.scan-actions .btn{width:100%}.serial-scan-wrap{grid-template-columns:1fr auto!important}.serial-scan-hint{font-weight:450!important;color:#60766d!important}@media(max-width:900px){.scan-actions{grid-template-columns:1fr!important}.scan-box{max-height:calc(100vh - 96px);overflow:auto}.serial-scan-wrap{grid-template-columns:1fr!important}}';
    document.head.appendChild(st);
  }
  function ensureModal(){
    ensureStyle();
    if(!byId('scanSerialModal')){
      document.body.insertAdjacentHTML('beforeend','<div class="scan-modal" id="scanSerialModal"><div class="scan-box"><div class="scan-head"><h2>QuÃƒÂ©t sÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2><button class="btn small" id="closeScanSerial" type="button">Ã„ÂÃƒÂ³ng</button></div><div class="scan-body"><video class="scan-video" id="scanSerialVideo" autoplay muted playsinline></video><p class="scan-status" id="scanSerialStatus">Ã„ÂÃ†Â°a mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR vÃƒÂ o giÃ¡Â»Â¯a khung. NÃ¡ÂºÂ¿u mÃƒÂ¡y khÃƒÂ´ng hÃ¡Â»â€” trÃ¡Â»Â£ quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p, dÃƒÂ¹ng ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay.</p><div class="scan-actions"><button class="btn" id="photoScanSerial" type="button">ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh</button><button class="btn" id="manualSerialBtn" type="button">NhÃ¡ÂºÂ­p tay</button><button class="btn primary" id="retryScanSerial" type="button">QuÃƒÂ©t lÃ¡ÂºÂ¡i</button></div><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none"></div></div></div>');
    }
    var actions=document.querySelector('#scanSerialModal .scan-actions');
    if(actions&&!byId('photoScanSerial'))actions.insertAdjacentHTML('afterbegin','<button class="btn" id="photoScanSerial" type="button">ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh</button><input id="photoScanSerialInput" type="file" accept="image/*" capture="environment" style="display:none">');
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
        var url=urls.shift();if(!url)return reject(new Error('KhÃƒÂ´ng tÃ¡ÂºÂ£i Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃ¡Â»â„¢ Ã„â€˜Ã¡Â»Âc mÃƒÂ£'));
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
    if(!('BarcodeDetector' in window)||!window.createImageBitmap)return Promise.reject(new Error('MÃƒÂ¡y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh'));
    return createImageBitmap(file).then(function(bitmap){
      var detector=new BarcodeDetector({formats:formats});
      return detector.detect(bitmap).then(function(codes){
        try{bitmap.close&&bitmap.close()}catch(e){}
        if(codes&&codes[0]&&codes[0].rawValue)return codes[0].rawValue;
        throw new Error('KhÃƒÂ´ng thÃ¡ÂºÂ¥y mÃƒÂ£ trong Ã¡ÂºÂ£nh');
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
    setStatus('Ã„Âang Ã„â€˜Ã¡Â»Âc mÃƒÂ£ tÃ¡Â»Â« Ã¡ÂºÂ£nh. ChÃ¡Â»Â¥p gÃ¡ÂºÂ§n, rÃƒÂµ nÃƒÂ©t vÃƒÂ  Ã„â€˜Ã¡Â»Â§ sÃƒÂ¡ng sÃ¡ÂºÂ½ dÃ¡Â»â€¦ nhÃ¡ÂºÂ­n hÃ†Â¡n...');
    detectByNativeImage(file).then(fillSerial).catch(function(){return detectByZxingImage(file).then(fillSerial)}).catch(function(){
      var status=byId('scanSerialStatus');if(status){status.className='scan-status bad'}
      setStatus('Ã¡ÂºÂ¢nh nÃƒÂ y chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n chÃ¡Â»Â¥p lÃ¡ÂºÂ¡i gÃ¡ÂºÂ§n hÃ†Â¡n hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri Ã¡Â»Å¸ ÃƒÂ´ phÃƒÂ­a trÃƒÂªn.');
      var manual=prompt('Ã¡ÂºÂ¢nh chÃ†Â°a Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£. BÃ¡ÂºÂ¡n nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri tÃ¡ÂºÂ¡i Ã„â€˜ÃƒÂ¢y nÃ¡ÂºÂ¿u muÃ¡Â»â€˜n:');
      if(manual)fillSerial(manual);
    })
  }
  function startNativeCamera(video){
    if(!('BarcodeDetector' in window))return Promise.reject(new Error('MÃƒÂ¡y chÃ†Â°a hÃ¡Â»â€” trÃ¡Â»Â£ quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p'));
    return navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(s){
      stream=s;video.srcObject=s;
      return video.play().then(function(){
        var detector=new BarcodeDetector({formats:formats});
        timer=setInterval(function(){
          detector.detect(video).then(function(codes){if(codes&&codes[0])fillSerial(codes[0].rawValue)}).catch(function(){});
        },380);
        var status=byId('scanSerialStatus');if(status){status.className='scan-status good'}
        setStatus('Camera Ã„â€˜ÃƒÂ£ mÃ¡Â»Å¸. Ã„ÂÃ†Â°a mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR vÃƒÂ o giÃ¡Â»Â¯a khung Ã„â€˜Ã¡Â»Æ’ quÃƒÂ©t.');
      })
    })
  }
  function startZxingCamera(video){
    return loadZxingSafe().then(function(ZXingBrowser){
      var reader=new ZXingBrowser.BrowserMultiFormatReader();
      return reader.decodeFromVideoDevice(null,video,function(result,err,c){
        if(c)controls=c;
        if(result)fillSerial(result.getText?result.getText():String(result.text||result));
      }).then(function(c){controls=c;var status=byId('scanSerialStatus');if(status){status.className='scan-status good'};setStatus('Camera Ã„â€˜ÃƒÂ£ mÃ¡Â»Å¸. Ã„ÂÃ†Â°a mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR vÃƒÂ o giÃ¡Â»Â¯a khung Ã„â€˜Ã¡Â»Æ’ quÃƒÂ©t.')})
    })
  }
  function startScan(){
    ensureModal();stopScan();ensureModal();
    var modal=byId('scanSerialModal'),video=byId('scanSerialVideo'),status=byId('scanSerialStatus');
    if(status)status.className='scan-status warn';
    if(modal)modal.classList.add('show');
    if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){
      setStatus('Camera chÃ¡Â»â€° chÃ¡ÂºÂ¡y trÃƒÂªn link https. BÃ¡ÂºÂ¡n dÃƒÂ¹ng ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.');
      return;
    }
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
      setStatus('TrÃƒÂ¬nh duyÃ¡Â»â€¡t nÃƒÂ y khÃƒÂ´ng mÃ¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Â£c camera trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p. BÃ¡ÂºÂ¡n dÃƒÂ¹ng ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.');
      return;
    }
    setStatus('Ã„Âang mÃ¡Â»Å¸ camera. NÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»â€¡n thoÃ¡ÂºÂ¡i hÃ¡Â»Âi quyÃ¡Â»Ân, bÃ¡ÂºÂ¥m Cho phÃƒÂ©p.');
    slowTimer=setTimeout(function(){setStatus('Camera mÃ¡Â»Å¸ hÃ†Â¡i lÃƒÂ¢u. BÃ¡ÂºÂ¡n cÃƒÂ³ thÃ¡Â»Æ’ bÃ¡ÂºÂ¥m ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri Ã„â€˜Ã¡Â»Æ’ lÃƒÂ m nhanh hÃ†Â¡n.')},6500);
    startNativeCamera(video).catch(function(){return startZxingCamera(video)}).then(function(){
      if(slowTimer){clearTimeout(slowTimer);slowTimer=null}
    }).catch(function(){
      if(slowTimer){clearTimeout(slowTimer);slowTimer=null}
      var status=byId('scanSerialStatus');if(status)status.className='scan-status bad';
      setStatus('MÃƒÂ¡y nÃƒÂ y chÃ†Â°a quÃƒÂ©t trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p Ã„â€˜Ã†Â°Ã¡Â»Â£c trong trÃƒÂ¬nh duyÃ¡Â»â€¡t. BÃ¡ÂºÂ¡n dÃƒÂ¹ng ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh mÃƒÂ£ hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.');
    })
  }
  function ensureDirectPhoto(){
    var input=byId('maThietBi');if(!input)return;
    var scan=byId('scanSerialBtn');if(scan){scan.textContent='QuÃƒÂ©t seri';scan.title='QuÃƒÂ©t bÃ¡ÂºÂ±ng camera nÃ¡ÂºÂ¿u mÃƒÂ¡y hÃ¡Â»â€” trÃ¡Â»Â£';scan.onclick=function(e){if(e){e.preventDefault();e.stopPropagation()}startScan()}}
    var native=byId('nativePhotoSerialInput');if(native&&!native.__serialSafeReady){native.__serialSafeReady=true;native.onchange=onPhoto}
    var note=byId('nativePhotoNote');if(note)note.textContent='ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh tem mÃƒÂ£ vÃ¡ÂºÂ¡ch/QR Ã„â€˜Ã¡Â»Æ’ app Ã„â€˜Ã¡Â»Âc sÃ¡Â»â€˜ seri. NÃ¡ÂºÂ¿u mÃƒÂ¡y khÃƒÂ´ng Ã„â€˜Ã¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Â£c mÃƒÂ£, bÃ¡ÂºÂ¡n vÃ¡ÂºÂ«n nhÃ¡ÂºÂ­p tay Ã¡Â»Å¸ ÃƒÂ´ SÃ¡Â»â€˜ seri bÃƒÂªn trÃƒÂªn.';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
    if(hint)hint.textContent=transfer?'Ã„ÂiÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢: Kho nhÃ¡ÂºÂ­n lÃ¡ÂºÂ¥y tÃ¡Â»Â« danh sÃƒÂ¡ch kho. NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n sÃ¡ÂºÂ½ tÃ¡Â»Â± liÃƒÂªn kÃ¡ÂºÂ¿t theo kho nhÃ¡ÂºÂ­n.':'CÃ¡ÂºÂ¥p phÃƒÂ¡t/sÃ¡Â»Â­ dÃ¡Â»Â¥ng/tÃ¡ÂºÂ·ng: chÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n tÃ¡Â»Â« danh sÃƒÂ¡ch NhÃƒÂ¢n viÃƒÂªn, app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho.';
    autoFillRecipient();
    autoFillFromKhoNhan();
  }
  window.screenXuat=function(){
    employees();
    return shell('xuat','XuÃ¡ÂºÂ¥t kho','ChÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n tÃ¡Â»Â« danh sÃƒÂ¡ch nhÃƒÂ¢n viÃƒÂªn; bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho tÃ¡Â»Â± liÃƒÂªn kÃ¡ÂºÂ¿t Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi Ã„â€˜ÃƒÂ£ nhÃ¡ÂºÂ­n gÃƒÂ¬.','<div class="panel"><div class="head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2></div><div class="body form xuat-linked-form"><label>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label><label>LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label><label class="full item-search-field">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn"><div id="hangXuatSuggest" class="item-suggest-list"></div></label><label>Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label><label id="khoNhanWrap">Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><label>NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n<input id="nguoiNhanXuat" list="receiverXuatList" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn hoÃ¡ÂºÂ·c tÃƒÂªn kho nhÃ¡ÂºÂ­n"><datalist id="receiverXuatList">'+employeeAndWarehouseOptions('')+'</datalist></label><label>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="TÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân theo ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n"><datalist id="boPhanKhoXuatList">'+deptOptionsLinked('')+'</datalist></label><label>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" value="1"></label><p class="hint full" id="receiverQuickHint">ChÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n Ã„â€˜Ã¡Â»Æ’ app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho.</p><p class="hint full" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p><button class="btn primary" id="luuXuat">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div></div>');
  };
  window.saveXuat=function(){
    var maHang=(typeof getItemCodeFromSearch==='function')?getItemCodeFromSearch('hangXuat'):(byId('hangXuat')?byId('hangXuat').value:'');
    if(!maHang)return alert('ChÃ¡Â»Ân Ã„â€˜ÃƒÂºng hÃƒÂ ng hÃƒÂ³a tÃ¡Â»Â« danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½');
    if(!byId('khoXuat')||!byId('khoXuat').value)return alert('HÃƒÂ ng nÃƒÂ y chÃ†Â°a cÃƒÂ³ kho cÃƒÂ²n tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    var loai=byId('loaiXuat').value,transfer=isTransfer(loai),khoNhan=byId('khoNhan')?byId('khoNhan').value:'';
    var nguoiNhan=byId('nguoiNhanXuat')?byId('nguoiNhanXuat').value.trim():'';
    var dept=byId('boPhanKhoXuat')?byId('boPhanKhoXuat').value.trim():'';
    if(transfer){
      if(!khoNhan)return alert('ChÃ¡Â»Ân kho nhÃ¡ÂºÂ­n khi Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢');
      var kho=(state.kho||[]).find(function(k){return k[0]===khoNhan});
      if(kho){if(!nguoiNhan)nguoiNhan=kho[1];if(!dept)dept=kho[1]}
    }else{
      if(!nguoiNhan)return alert('ChÃ¡Â»Ân hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi cÃ¡ÂºÂ¥p phÃƒÂ¡t');
      if(!dept)return alert('NhÃ¡ÂºÂ­p bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho cÃ¡Â»Â§a ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n');
    }
    var sl=Number(byId('slXuat').value||0);if(sl<=0)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng lÃ¡Â»â€ºn hÃ†Â¡n 0');
    var key=byId('khoXuat').value+'|'+maHang;
    if((state.ton[key]||0)<sl)return alert('KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ tÃ¡Â»â€œn Ã„â€˜Ã¡Â»Æ’ xuÃ¡ÂºÂ¥t');
    state.ton[key]-=sl;
    addRecipientToDirectory(nguoiNhan,dept);
    var row=[today,byId('soXuat').value,byId('khoXuat').value,maHang,loai,0,sl,nguoiNhan];
    if(typeof currentUsername==='function'){row[8]=currentUsername();row[9]=typeof currentDisplayName==='function'?currentDisplayName():currentUsername()}
    row[12]=dept;
    state.bd.push(row);
    if(transfer)state.chuyen.push({so:byId('soXuat').value,tu:byId('khoXuat').value,den:khoNhan,hang:maHang,sl:sl,st:'ChÃ¡Â»Â nhÃ¡ÂºÂ­n'});
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t');veTongQuanSauLuu();
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
      var items=Object.keys(totals).map(function(code){var t=totals[code];return esc(t.name)+': <b>'+fmt(t.qty)+' '+esc(t.unit)+'</b>'}).join(' | ')||'<span class="muted">ChÃ†Â°a cÃƒÂ³ phiÃ¡ÂºÂ¿u cÃ¡ÂºÂ¥p phÃƒÂ¡t/xuÃ¡ÂºÂ¥t</span>';
      return '<tr>'+td('NhÃƒÂ¢n viÃƒÂªn/kho nhÃ¡ÂºÂ­n',esc(p.name))+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',esc(p.dept||''))+td('Ã„ÂÃƒÂ£ nhÃ¡ÂºÂ­n/cÃ¡ÂºÂ¥p phÃƒÂ¡t',items)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="3">ChÃ†Â°a cÃƒÂ³ nhÃƒÂ¢n viÃƒÂªn/kho nhÃ¡ÂºÂ­n.</td></tr>';
  }
  function addEmployeeReceivedPanel(){
    if(current!=='nhanvien')return;
    var section=byId('nhanvien');if(!section||byId('employeeReceivedPanel'))return;
    section.insertAdjacentHTML('beforeend','<div class="panel employee-issued-panel" id="employeeReceivedPanel"><div class="head"><h2>Theo dÃƒÂµi cÃ¡ÂºÂ¥p phÃƒÂ¡t theo nhÃƒÂ¢n viÃƒÂªn/kho</h2></div><div class="wrap"><table><thead><tr><th>NhÃƒÂ¢n viÃƒÂªn/kho nhÃ¡ÂºÂ­n</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>Ã„ÂÃƒÂ£ nhÃ¡ÂºÂ­n/cÃ¡ÂºÂ¥p phÃƒÂ¡t</th></tr></thead><tbody>'+receivedRows()+'</tbody></table></div></div>');
  }
  function addStyle(){
    if(byId('xuat-employee-warehouse-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='xuat-employee-warehouse-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function apply(){
    [].slice.call(document.querySelectorAll('.item-detail-btn')).forEach(function(btn){
      btn.setAttribute('aria-hidden','true');
      btn.setAttribute('tabindex','-1');
    });
  }
  if(!document.getElementById('hide-item-detail-buttons-final-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='hide-item-detail-buttons-final-style-20260721-mobile-login-sync-1';
    st.textContent='.item-detail-btn{display:none!important}.item-suggest-name::after,.overview-stock-name::after,.ton-suggest-title::after,.stock-card-item::after{content:none!important;display:none!important}td[data-label="HÃƒÂ ng"],td[data-label="TÃƒÂªn hÃƒÂ ng"],.item-name-link,.item-suggest-name,.overview-stock-name,.ton-suggest-title,.stock-card-item{cursor:pointer!important}';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  window.screenXuat=function(){
    return shell('xuat','XuÃ¡ÂºÂ¥t kho','ChÃ¡Â»Ân hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn, ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n vÃƒÂ  bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi cÃ¡ÂºÂ¥p phÃƒÂ¡t rÃƒÂµ rÃƒÂ ng.','<div class="panel xuat-form-panel"><div class="head xuat-form-head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2><span class="xuat-flow-tag">PhiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng</span></div><div class="body form xuat-linked-form xuat-modern-form">'+
      '<div class="xuat-section xuat-section-slip"><div class="xuat-section-title">ThÃƒÂ´ng tin phiÃ¡ÂºÂ¿u</div><div class="xuat-row xuat-row-slip">'+
        '<label class="xuat-field-slip">SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label>'+
        '<label class="xuat-field-type">LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label>'+
        '<label class="xuat-field-qty">SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" min="1" value="1"></label>'+
      '</div></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">HÃƒÂ ng hÃƒÂ³a vÃƒÂ  kho xuÃ¡ÂºÂ¥t</div><div class="xuat-row xuat-row-item">'+
        '<label class="item-search-field xuat-item-field">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn"><div id="hangXuatSuggest" class="item-suggest-list"></div></label>'+
        '<label class="xuat-field-kho">Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label>'+
      '</div><p class="hint xuat-hint" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n / kho nhÃ¡ÂºÂ­n</div><div class="xuat-row xuat-row-recipient">'+
        '<label class="xuat-field-receiver">NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n<input id="nguoiNhanXuat" list="receiverXuatList" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn hoÃ¡ÂºÂ·c tÃƒÂªn kho nhÃ¡ÂºÂ­n"><datalist id="receiverXuatList"></datalist></label>'+
        '<label class="xuat-field-dept">BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="TÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân theo ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n"><datalist id="boPhanKhoXuatList"></datalist></label>'+
        '<label id="khoNhanWrap" class="xuat-field-transfer">Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label>'+
      '</div><p class="hint xuat-hint" id="receiverQuickHint">CÃ¡ÂºÂ¥p phÃƒÂ¡t/sÃ¡Â»Â­ dÃ¡Â»Â¥ng/tÃ¡ÂºÂ·ng: chÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n tÃ¡Â»Â« danh sÃƒÂ¡ch NhÃƒÂ¢n viÃƒÂªn, app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho.</p></div>'+
      '<div class="xuat-actions"><button class="btn primary" id="luuXuat" type="button">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div>'+
    '</div></div>');
  };
  function addStyle(){
    if(document.getElementById('xuat-layout-professional-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='xuat-layout-professional-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  window.screenXuat=function(){
    if(typeof employees==='function')employees();
    var html='<div class="panel xuat-form-panel"><div class="head xuat-form-head"><h2>TÃ¡ÂºÂ¡o phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</h2><span class="xuat-flow-tag">PhiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng</span></div><div class="body form xuat-linked-form xuat-modern-form">'+
      '<div class="xuat-section xuat-section-slip"><div class="xuat-section-title">ThÃƒÂ´ng tin phiÃ¡ÂºÂ¿u</div><div class="xuat-row xuat-row-slip">'+
        '<label class="xuat-field-slip">SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="soXuat" value="'+nextSlipNo('PX')+'" readonly></label>'+
        '<label class="xuat-field-type">LoÃ¡ÂºÂ¡i xuÃ¡ÂºÂ¥t<select id="loaiXuat"></select></label>'+
      '</div></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">HÃƒÂ ng hÃƒÂ³a, kho xuÃ¡ÂºÂ¥t vÃƒÂ  sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng</div>'+
        '<label class="item-search-field xuat-item-field xuat-item-wide">HÃƒÂ ng hÃƒÂ³a<input id="hangXuat" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m hÃƒÂ ng cÃƒÂ²n tÃ¡Â»â€œn"><div id="hangXuatSuggest" class="item-suggest-list"></div></label>'+
        '<div class="xuat-row xuat-row-stock">'+
          '<label class="xuat-field-kho">Kho xuÃ¡ÂºÂ¥t<select id="khoXuat"></select></label>'+
          '<label class="xuat-field-qty">SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng<input id="slXuat" type="number" min="1" value="1"></label>'+
        '</div><p class="hint xuat-hint" id="goiYKhoXuat">GÃƒÂµ tÃƒÂªn hÃƒÂ ng Ã„â€˜Ã¡Â»Æ’ xem kho cÃƒÂ²n tÃ¡Â»â€œn.</p></div>'+
      '<div class="xuat-section"><div class="xuat-section-title">NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n vÃƒÂ  bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</div><div class="xuat-row xuat-row-recipient">'+
        '<label class="xuat-field-receiver">NgÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n<input id="nguoiNhanXuat" list="receiverXuatList" autocomplete="off" placeholder="GÃƒÂµ tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn hoÃ¡ÂºÂ·c tÃƒÂªn kho nhÃ¡ÂºÂ­n"><datalist id="receiverXuatList"></datalist></label>'+
        '<label class="xuat-field-dept">BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanKhoXuat" list="boPhanKhoXuatList" placeholder="TÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân theo ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n/kho nhÃ¡ÂºÂ­n"><datalist id="boPhanKhoXuatList"></datalist></label>'+
      '</div><label id="khoNhanWrap" class="xuat-field-transfer xuat-transfer-single">Kho nhÃ¡ÂºÂ­n nÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n<select id="khoNhan"></select></label><p class="hint xuat-hint" id="receiverQuickHint">CÃ¡ÂºÂ¥p phÃƒÂ¡t/sÃ¡Â»Â­ dÃ¡Â»Â¥ng/tÃ¡ÂºÂ·ng: chÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n tÃ¡Â»Â« danh sÃƒÂ¡ch NhÃƒÂ¢n viÃƒÂªn, app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho.</p></div>'+
      '<div class="xuat-actions"><button class="btn primary" id="luuXuat" type="button">LÃ†Â°u phiÃ¡ÂºÂ¿u xuÃ¡ÂºÂ¥t</button></div>'+
    '</div></div>';
    return shell('xuat','XuÃ¡ÂºÂ¥t kho','ChÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi nhÃ¡ÂºÂ­n tÃ¡Â»Â« danh sÃƒÂ¡ch nhÃƒÂ¢n viÃƒÂªn; bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho tÃ¡Â»Â± liÃƒÂªn kÃ¡ÂºÂ¿t Ã„â€˜Ã¡Â»Æ’ theo dÃƒÂµi Ã„â€˜ÃƒÂ£ nhÃ¡ÂºÂ­n gÃƒÂ¬.',html);
  };
  function addStyle(){
    if(document.getElementById('xuat-layout-pairs-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='xuat-layout-pairs-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
      }).join('')||'<span class="muted">ChÃ†Â°a cÃƒÂ³ phiÃ¡ÂºÂ¿u cÃ¡ÂºÂ¥p phÃƒÂ¡t/xuÃ¡ÂºÂ¥t</span>';
      return '<tr>'+td('NhÃƒÂ¢n viÃƒÂªn/kho nhÃ¡ÂºÂ­n',esc(p.name))+td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',esc(p.dept||''))+td('Ã„ÂÃƒÂ£ nhÃ¡ÂºÂ­n/cÃ¡ÂºÂ¥p phÃƒÂ¡t',items)+td('TÃ¡Â»â€¢ng SL',totalQty?fmt(totalQty):'',totalQty?'num':'')+td('SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u',slips?fmt(slips):'',slips?'num':'')+'</tr>';
    }).join('');
    return rows||'<tr><td class="empty" colspan="5">ChÃ†Â°a cÃƒÂ³ nhÃƒÂ¢n viÃƒÂªn/kho nhÃ¡ÂºÂ­n.</td></tr>';
  }
  function issuedSummary(){
    var people=issuedPeople(),qty=0,active=0;
    people.forEach(function(p){
      var has=false;
      (state.bd||[]).forEach(function(b){if(Number(b&&b[6]||0)>0&&norm(b[7])===norm(p.name)){qty+=Number(b[6]||0);has=true}});
      if(has)active+=1;
    });
    return '<div class="issued-summary">'+
      '<div><span>NgÃ†Â°Ã¡Â»Âi/kho nhÃ¡ÂºÂ­n</span><b>'+fmt(people.length)+'</b></div>'+
      '<div><span>Ã„ÂÃƒÂ£ phÃƒÂ¡t sinh</span><b>'+fmt(active)+'</b></div>'+
      '<div><span>TÃ¡Â»â€¢ng Ã„â€˜ÃƒÂ£ cÃ¡ÂºÂ¥p/xuÃ¡ÂºÂ¥t</span><b>'+fmt(qty)+'</b></div>'+
    '</div>';
  }
  function renderIssuedReport(btn){
    if(btn){document.querySelectorAll('#baocao .tab').forEach(function(x){x.classList.remove('active')});btn.classList.add('active')}
    var title=byId('rpTitle'),rp=byId('rp');if(!rp)return;
    if(title)title.textContent='CÃ¡ÂºÂ¥p phÃƒÂ¡t theo nhÃƒÂ¢n viÃƒÂªn/kho';
    rp.innerHTML=issuedSummary()+'<table class="issued-report-table"><thead><tr><th>NhÃƒÂ¢n viÃƒÂªn/kho nhÃ¡ÂºÂ­n</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>Ã„ÂÃƒÂ£ nhÃ¡ÂºÂ­n/cÃ¡ÂºÂ¥p phÃƒÂ¡t</th><th>TÃ¡Â»â€¢ng SL</th><th>SÃ¡Â»â€˜ phiÃ¡ÂºÂ¿u</th></tr></thead><tbody>'+issuedRows()+'</tbody></table>';
  }
  var oldScreen=window.screenBaoCao;
  if(typeof oldScreen==='function'&&!oldScreen.__reportEmployeeIssued20260717){
    window.screenBaoCao=function(){
      var html=oldScreen.apply(this,arguments);
      if(html.indexOf("showReport('capnhanvien'")<0){
        html=html.replace(/(<div class="tabs">[\s\S]*?)(<\/div>)/,"$1<button class=\"btn tab\" onclick=\"showReport('capnhanvien',this)\">CÃ¡ÂºÂ¥p phÃƒÂ¡t NV/Kho</button>$2");
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
  if(!byId('report-employee-issued-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='report-employee-issued-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function isIt(h){return norm(h&&h[2])==='thiet bi it'}
  function hangList(){return Array.isArray(state.hang)?state.hang:[]}
  function itRows(){return hangList().map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return isIt(r.h)})}
  function normalRows(){return hangList().map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return !isIt(r.h)})}
  function desc(code){var r=hangList().map(hnorm).find(function(h){return h[0]===code});return String(r&&r[4]||'').trim()}
  function detailText(code){return desc(code)?esc(desc(code)):'<span class="hint">KhÃƒÂ´ng cÃƒÂ³</span>'}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function nextItCode(){return typeof nextItemCode==='function'?nextItemCode('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT'):'TB'+String(itRows().length+1).padStart(3,'0')}
  function dvtOptions(selected){
    var list=Array.isArray(state.dvtList)?state.dvtList:['CÃƒÂ¡i'];
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
      var actions='<div class="hang-actions"><button class="btn small" onclick="editHang('+r.i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteHangAdmin('+r.i+')">XÃƒÂ³a</button></div>';
      return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn hÃƒÂ ng',name)+td('NhÃƒÂ³m',esc(h[2]))+td('Ã„ÂVT',esc(h[3]))+td('Chi tiÃ¡ÂºÂ¿t',detailText(h[0]))+td('Thao tÃƒÂ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="6">ChÃ†Â°a cÃƒÂ³ hÃƒÂ ng hÃƒÂ³a thÃ†Â°Ã¡Â»Âng.</td></tr>';
  }
  function itCatalogRows(){
    return itRows().map(function(r){
      var h=r.h,actions='<div class="hang-actions"><button class="btn small" onclick="editItHang('+r.i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteItHang('+r.i+')">XÃƒÂ³a</button></div>';
      return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',esc(h[1]))+td('Ã„ÂVT',esc(h[3]))+td('MÃƒÂ´ tÃ¡ÂºÂ£',detailText(h[0]))+td('Thao tÃƒÂ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÃ†Â°a cÃƒÂ³ mÃ¡ÂºÂ·t hÃƒÂ ng IT. HÃƒÂ£y tÃ¡ÂºÂ¡o Ã¡Â»Å¸ khung bÃƒÂªn phÃ¡ÂºÂ£i.</td></tr>';
  }
  var oldScreenHang=window.screenHang;
  if(typeof oldScreenHang==='function'){
    window.screenHang=function(){
      if(!adminOk())return shell('hanghoa','KhÃƒÂ´ng cÃƒÂ³ quyÃ¡Â»Ân','TÃƒÂ i khoÃ¡ÂºÂ£n nhÃƒÂ¢n viÃƒÂªn khÃƒÂ´ng Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a.','<div class="panel"><div class="body">Vui lÃƒÂ²ng liÃƒÂªn hÃ¡Â»â€¡ Admin nÃ¡ÂºÂ¿u cÃ¡ÂºÂ§n thÃƒÂªm, sÃ¡Â»Â­a hoÃ¡ÂºÂ·c xÃƒÂ³a hÃƒÂ ng hÃƒÂ³a.</div></div>');
      return shell('hanghoa','Danh mÃ¡Â»Â¥c hÃƒÂ ng hÃƒÂ³a','HÃƒÂ ng hÃƒÂ³a thÃ†Â°Ã¡Â»Âng Ã„â€˜Ã†Â°Ã¡Â»Â£c quÃ¡ÂºÂ£n lÃƒÂ½ tÃ¡ÂºÂ¡i Ã„â€˜ÃƒÂ¢y. ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT Ã„â€˜Ã†Â°Ã¡Â»Â£c tÃƒÂ¡ch riÃƒÂªng trong mÃ¡Â»Â¥c ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.','<div class="grid"><div class="panel"><div class="head"><h2>Danh sÃƒÂ¡ch hÃƒÂ ng hÃƒÂ³a</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn hÃƒÂ ng</th><th>NhÃƒÂ³m</th><th>Ã„ÂVT</th><th>Chi tiÃ¡ÂºÂ¿t</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+normalItemRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂ´ng tin hÃƒÂ ng hÃƒÂ³a</h2></div><div class="body form"><input id="editHang" type="hidden"><label>MÃƒÂ£ hÃƒÂ ng tÃ¡Â»Â± Ã„â€˜Ã¡Â»â„¢ng<input id="maHang" readonly></label><label>TÃƒÂªn hÃƒÂ ng<input id="tenHang" placeholder="TÃƒÂªn hÃƒÂ ng hÃƒÂ³a"></label><label>NhÃƒÂ³m<select id="nhomHang"></select></label><label>Ã„ÂVT<select id="dvt"></select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / Size / mÃƒÂ u / chi tiÃ¡ÂºÂ¿t<input id="thuocTinh" placeholder="VD: Size L; mÃƒÂ u xanh; chÃ¡ÂºÂ¥t cotton; tay ngÃ¡ÂºÂ¯n"></label><button class="btn primary" id="luuHang">LÃ†Â°u hÃƒÂ ng hÃƒÂ³a</button><button class="btn" id="huyHang">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>');
    };
  }
  var oldScreenThietBi=window.screenThietBi;
  if(typeof oldScreenThietBi==='function'){
    window.screenThietBi=function(){
      var html=oldScreenThietBi.apply(this,arguments);
      if(html.indexOf('id="itCatalogPanel"')<0){
        var panel='<div class="grid it-catalog-grid" id="itCatalogPanel"><div class="panel"><div class="head"><h2>Danh mÃ¡Â»Â¥c mÃ¡ÂºÂ·t hÃƒÂ ng IT</h2></div><div class="wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</th><th>Ã„ÂVT</th><th>MÃƒÂ´ tÃ¡ÂºÂ£</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+itCatalogRows()+'</tbody></table></div></div><div class="panel"><div class="head"><h2>ThÃƒÂªm / sÃ¡Â»Â­a mÃ¡ÂºÂ·t hÃƒÂ ng IT</h2></div><div class="body form"><input id="editItHangIndex" type="hidden"><label>MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT<input id="itHangCode"></label><label>TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT<input id="itHangName" placeholder="VD: MÃƒÂ n hÃƒÂ¬nh Dell"></label><label>Ã„ÂVT<select id="itHangDvt">'+dvtOptions('CÃƒÂ¡i')+'</select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / cÃ¡ÂºÂ¥u hÃƒÂ¬nh<input id="itHangDesc" placeholder="VD: 24 inch, HDMI, mÃƒÂ u Ã„â€˜en"></label><button class="btn primary" id="saveItHang" type="button">LÃ†Â°u mÃ¡ÂºÂ·t hÃƒÂ ng IT</button><button class="btn" id="newItHang" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full">Danh mÃ¡Â»Â¥c nÃƒÂ y dÃƒÂ¹ng cho ÃƒÂ´ MÃ¡ÂºÂ·t hÃƒÂ ng IT Ã¡Â»Å¸ trÃƒÂªn. ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ cÃ¡Â»Â¥ thÃ¡Â»Æ’ vÃ¡ÂºÂ«n theo dÃƒÂµi bÃ¡ÂºÂ±ng sÃ¡Â»â€˜ seri.</p></div></div></div>';
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
    if(byId('itHangDvt'))byId('itHangDvt').value=h[3]||'CÃƒÂ¡i';
    if(byId('itHangDesc'))byId('itHangDesc').value=h[4]||'';
  };
  window.resetItHang=function(){
    if(byId('editItHangIndex'))byId('editItHangIndex').value='';
    if(byId('itHangCode'))byId('itHangCode').value=nextItCode();
    if(byId('itHangName'))byId('itHangName').value='';
    if(byId('itHangDvt'))byId('itHangDvt').value='CÃƒÂ¡i';
    if(byId('itHangDesc'))byId('itHangDesc').value='';
  };
  window.saveItHang=function(){
    if(!adminOk())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c sÃ¡Â»Â­a danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.');
    var i=byId('editItHangIndex')?byId('editItHangIndex').value:'',code=byId('itHangCode')?byId('itHangCode').value.trim():nextItCode(),name=byId('itHangName')?byId('itHangName').value.trim():'';
    if(!name)return alert('NhÃ¡ÂºÂ­p tÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');
    var row=[code,name,'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',byId('itHangDvt')?byId('itHangDvt').value:'CÃƒÂ¡i',byId('itHangDesc')?byId('itHangDesc').value.trim():''];
    if(i===''){
      if(hangList().some(function(raw){return hnorm(raw)[0]===code}))code=row[0]=nextItCode();
      state.hang.push(row);
    }else state.hang[Number(i)]=row;
    save();render();
  };
  window.deleteItHang=function(i){
    if(!adminOk())return alert('ChÃ¡Â»â€° quÃ¡ÂºÂ£n trÃ¡Â»â€¹ viÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Â£c xÃƒÂ³a danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.');
    var h=hnorm(state.hang[i]);if(!h||!h[0])return;
    if(itemUsed(h[0]))return alert('MÃ¡ÂºÂ·t hÃƒÂ ng IT nÃƒÂ y Ã„â€˜ÃƒÂ£ cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹, tÃ¡Â»â€œn kho hoÃ¡ÂºÂ·c phiÃ¡ÂºÂ¿u liÃƒÂªn quan. Ã„ÂÃ¡Â»Æ’ an toÃƒÂ n dÃ¡Â»Â¯ liÃ¡Â»â€¡u, bÃ¡ÂºÂ¡n hÃƒÂ£y sÃ¡Â»Â­a tÃƒÂªn/mÃƒÂ´ tÃ¡ÂºÂ£ thay vÃƒÂ¬ xÃƒÂ³a.');
    if(!confirm('XÃƒÂ³a mÃ¡ÂºÂ·t hÃƒÂ ng IT "'+(h[1]||h[0])+'"?'))return;
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
      if(sel)sel.innerHTML=items.length?items.map(function(x){return '<option value="'+esc(x[0])+'">'+esc(x[1])+'</option>'}).join(''):'<option value="">ChÃ†Â°a cÃƒÂ³ mÃ¡ÂºÂ·t hÃƒÂ ng IT</option>';
      var dvt=byId('itHangDvt');if(dvt)dvt.innerHTML=dvtOptions(dvt.value||'CÃƒÂ¡i');
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
  if(!byId('it-catalog-separate-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='it-catalog-separate-style-20260721-mobile-login-sync-1';
    st.textContent='#itCatalogPanel{margin-top:12px}.it-catalog-grid .hint{color:#6b7d75}.it-catalog-grid table td{vertical-align:middle}@media(max-width:900px){#itCatalogPanel{margin-top:8px}.it-catalog-grid table{min-width:680px}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itCatalogMerged20260717)return;window.__itCatalogMerged20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','',''])}catch(e){return raw||['','','','','','','']}}
  function isIt(h){return norm(h&&h[2])==='thiet bi it'}
  function hangList(){return Array.isArray(state.hang)?state.hang:[]}
  function itRows(){return hangList().map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return isIt(r.h)})}
  function itemName(code){try{return item(code)[1]||code}catch(e){var h=hangList().map(hnorm).find(function(x){return x[0]===code});return h?h[1]:code}}
  function dvtOptions(selected){var list=Array.isArray(state.dvtList)?state.dvtList:['CÃƒÂ¡i'];return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('')}
  function nextItCode(){return typeof nextItemCode==='function'?nextItemCode('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT'):'TB'+String(itRows().length+1).padStart(3,'0')}
  function deviceRows(){
    return (state.thietBiIT||[]).map(function(raw,i){
      var x=tnorm(raw),serial=x[1]||x[0]||'',actions='<div class="row-actions"><button class="btn small" onclick="chuyenNguoiDungThietBi('+i+')">ChuyÃ¡Â»Æ’n ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng</button><button class="btn small" onclick="traVeKhoThietBi('+i+')">VÃ¡Â»Â kho</button><button class="btn small" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button></div>';
      return '<tr>'+td('SÃ¡Â»â€˜ seri',esc(serial))+td('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',esc(itemName(x[2])))+td('NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p',esc(x[3]||''))+td('NgÃƒÂ y nhÃ¡ÂºÂ­p',esc(x[4]||''))+td('Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i',esc(x[5]||''))+td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag">'+esc(x[6]||'')+'</span>')+td('Ghi chÃƒÂº',esc(x[7]||''))+td('Thao tÃƒÂ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="8">ChÃ†Â°a cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri.</td></tr>';
  }
  function catalogRows(){
    return itRows().map(function(r){
      var h=r.h,actions='<div class="hang-actions"><button class="btn small" onclick="editItHang('+r.i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteItHang('+r.i+')">XÃƒÂ³a</button></div>';
      return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',esc(h[1]))+td('Ã„ÂVT',esc(h[3]))+td('MÃƒÂ´ tÃ¡ÂºÂ£',esc(h[4]||'KhÃƒÂ´ng cÃƒÂ³'))+td('Thao tÃƒÂ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÃ†Â°a cÃƒÂ³ mÃ¡ÂºÂ·t hÃƒÂ ng IT. TÃ¡ÂºÂ¡o Ã¡Â»Å¸ khung bÃƒÂªn phÃ¡ÂºÂ£i.</td></tr>';
  }
  window.screenThietBi=function(){
    var body='<div class="grid it-merged-layout">'+
      '<div class="panel it-merged-list"><div class="head"><h2>Danh sÃƒÂ¡ch thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="wrap it-device-wrap"><table><thead><tr><th>SÃ¡Â»â€˜ seri</th><th>ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p</th><th>NgÃƒÂ y nhÃ¡ÂºÂ­p</th><th>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng bÃ¡Â»Å¸i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Ghi chÃƒÂº</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+deviceRows()+'</tbody></table></div>'+
        '<div class="it-catalog-inside"><div class="head compact-head"><h2>Danh mÃ¡Â»Â¥c mÃ¡ÂºÂ·t hÃƒÂ ng IT</h2></div><div class="wrap it-catalog-wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</th><th>Ã„ÂVT</th><th>MÃƒÂ´ tÃ¡ÂºÂ£</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+catalogRows()+'</tbody></table></div></div></div>'+
      '<div class="panel it-merged-form"><div class="head"><h2>ThÃƒÂ´ng tin thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="body form"><input id="editThietBi" type="hidden"><label class="full">SÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹<input id="maThietBi" placeholder="NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ seri trÃƒÂªn mÃƒÂ¡y/tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹"></label><input id="seriThietBi" type="hidden"><label>MÃ¡ÂºÂ·t hÃƒÂ ng IT<select id="hangThietBi"></select></label><label>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p<select id="nguonThietBi"></select></label><label>NgÃƒÂ y nhÃ¡ÂºÂ­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>NgÃ†Â°Ã¡Â»Âi Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng<input id="nguoiDungThietBi" placeholder="TÃƒÂªn nhÃƒÂ¢n viÃƒÂªn/phÃƒÂ²ng ban/kho"></label><label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi"><option>Trong kho</option><option>Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng</option><option>Ã„Âang sÃ¡Â»Â­a chÃ¡Â»Â¯a</option><option>Thanh lÃƒÂ½</option><option>ThÃ¡ÂºÂ¥t lÃ¡ÂºÂ¡c</option></select></label><label class="full">Ghi chÃƒÂº<input id="ghiChuThietBi" placeholder="CÃ¡ÂºÂ¥u hÃƒÂ¬nh, tÃƒÂ¬nh trÃ¡ÂºÂ¡ng, chÃ¡Â»Â©ng tÃ¡Â»Â«..."></label><button class="btn primary" id="luuThietBi">LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</button><button class="btn" id="huyThietBi">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div>'+
        '<div class="it-catalog-editor"><div class="head compact-head"><h2>ThÃƒÂªm / sÃ¡Â»Â­a mÃ¡ÂºÂ·t hÃƒÂ ng IT</h2></div><div class="body form"><input id="editItHangIndex" type="hidden"><label>MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT<input id="itHangCode"></label><label>TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT<input id="itHangName" placeholder="VD: MÃƒÂ n hÃƒÂ¬nh Dell"></label><label>Ã„ÂVT<select id="itHangDvt">'+dvtOptions('CÃƒÂ¡i')+'</select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / cÃ¡ÂºÂ¥u hÃƒÂ¬nh<input id="itHangDesc" placeholder="VD: 24 inch, HDMI, mÃƒÂ u Ã„â€˜en"></label><button class="btn primary" id="saveItHang" type="button">LÃ†Â°u mÃ¡ÂºÂ·t hÃƒÂ ng IT</button><button class="btn" id="newItHang" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>'+
    '</div>';
    return shell('thietbi','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri','Danh sÃƒÂ¡ch thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ vÃƒÂ  danh mÃ¡Â»Â¥c mÃ¡ÂºÂ·t hÃƒÂ ng IT Ã„â€˜Ã†Â°Ã¡Â»Â£c gom chung trong mÃ¡Â»â„¢t mÃƒÂ n Ã„â€˜Ã¡Â»Æ’ dÃ¡Â»â€¦ quÃ¡ÂºÂ£n lÃƒÂ½.',body);
  };
  function bindMergedIt(){
    if(current!=='thietbi')return;
    var sel=byId('hangThietBi'),items=itRows().map(function(r){return [r.h[0],r.h[0]+' - '+r.h[1]]});
    if(sel)sel.innerHTML=items.length?items.map(function(x){return '<option value="'+esc(x[0])+'">'+esc(x[1])+'</option>'}).join(''):'<option value="">ChÃ†Â°a cÃƒÂ³ mÃ¡ÂºÂ·t hÃƒÂ ng IT</option>';
    if(byId('itHangDvt'))byId('itHangDvt').innerHTML=dvtOptions(byId('itHangDvt').value||'CÃƒÂ¡i');
    if(byId('saveItHang'))byId('saveItHang').onclick=saveItHang;
    if(byId('newItHang'))byId('newItHang').onclick=resetItHang;
    if(byId('itHangCode')&&byId('editItHangIndex')&&!byId('editItHangIndex').value)byId('itHangCode').value=nextItCode();
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__itCatalogMerged20260717){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);bindMergedIt();return out};
    window.bindForms.__itCatalogMerged20260717=true;
  }
  if(!byId('it-catalog-merged-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='it-catalog-merged-style-20260721-mobile-login-sync-1';
    st.textContent='.it-merged-layout{grid-template-columns:minmax(0,1.45fr) minmax(360px,.95fr)!important;gap:10px!important}.it-merged-list,.it-merged-form{align-self:start}.it-catalog-inside,.it-catalog-editor{border-top:1px solid #d7e8df;margin-top:10px}.compact-head{padding-top:10px!important}.compact-head h2{font-size:15px!important}.it-device-wrap{max-height:360px;overflow:auto}.it-catalog-wrap{max-height:220px;overflow:auto}.it-catalog-editor .body{padding-top:10px!important}.it-merged-layout .row-actions,.it-merged-layout .hang-actions{display:flex;flex-wrap:wrap;gap:5px}@media(max-width:900px){.it-merged-layout{display:block!important}.it-merged-layout .panel{margin-bottom:8px!important}.it-device-wrap table,.it-catalog-wrap table{min-width:760px}.it-device-wrap{max-height:330px}.it-catalog-wrap{max-height:220px}.compact-head h2{font-size:14px!important}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itManagementDashboard20260717)return;window.__itManagementDashboard20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function hnorm(raw){try{return typeof normalizeHang==='function'?normalizeHang(raw):(raw||['','','','',''])}catch(e){return raw||['','','','','']}}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','',''])}catch(e){return raw||['','','','','','','']}}
  function money(n){try{return typeof fmt==='function'?fmt(n):String(n)}catch(e){return String(n)}}
  function adminOk(){try{return typeof isAdmin==='function'?isAdmin():true}catch(e){return true}}
  function persistIt(){try{if(typeof touchState==='function')touchState()}catch(e){};save();try{if(typeof dayDuLieuOnlineSilent==='function')dayDuLieuOnlineSilent()}catch(e){}}
  function isItItem(h){return norm(h&&h[2])==='thiet bi it'}
  function itCatalog(){return (state.hang||[]).map(function(raw,i){return {h:hnorm(raw),i:i}}).filter(function(r){return isItItem(r.h)})}
  function itemInfo(code){var f=(state.hang||[]).map(hnorm).find(function(h){return h[0]===code});return f||[code,code,'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','CÃƒÂ¡i','']}
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
    return first?first[1]:'Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
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
    return isStock(x)?deviceWarehouse(x):(x[5]||'ChÃ†Â°a gÃƒÂ¡n');
  }
  function warehouseOptions(selected){
    var opts=itWarehouses(),seen={};
    function op(value,label,sel){seen[norm(label)]=1;return '<option value="'+esc(value)+'" '+(sel?'selected':'')+'>'+esc(label)+'</option>'}
    var html=opts.map(function(k){return op(k[0],k[1],selected===k[0]||norm(selected)===norm(k[1]))}).join('');
    if(selected&&!seen[norm(selected)])html='<option value="'+esc(selected)+'" selected>'+esc(selected)+'</option>'+html;
    return html||'<option value="">ChÃ†Â°a cÃƒÂ³ kho IT</option>';
  }
  function itItemOptions(selected){
    var rows=itCatalog();
    return rows.map(function(r){return '<option value="'+esc(r.h[0])+'" '+(selected===r.h[0]?'selected':'')+'>'+esc(r.h[0]+' - '+r.h[1])+'</option>'}).join('')||'<option value="">ChÃ†Â°a cÃƒÂ³ mÃ¡ÂºÂ·t hÃƒÂ ng IT</option>';
  }
  function sourceOptions(selected){
    var list=(state.loaiNhapList||[]).concat(['Ã„ÂiÃ¡Â»Âu chuyÃ¡Â»Æ’n nÃ¡Â»â„¢i bÃ¡Â»â„¢','KhÃƒÂ¡c']);
    var seen={};
    return list.filter(function(v){var k=norm(v);if(!v||seen[k])return false;seen[k]=1;return true}).map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function unitOptions(selected){
    var list=Array.isArray(state.dvtList)&&state.dvtList.length?state.dvtList:['CÃƒÂ¡i'];
    return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function statusOptions(selected){
    var list=['Trong kho','Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng','Ã„Âang sÃ¡Â»Â­a chÃ¡Â»Â¯a','Thanh lÃƒÂ½','ThÃ¡ÂºÂ¥t lÃ¡ÂºÂ¡c'];
    return list.map(function(v){return '<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>'}).join('');
  }
  function stats(){
    var devices=(state.thietBiIT||[]).map(tnorm),total=devices.length,stock=0,using=0,repair=0,groups={};
    devices.forEach(function(x){if(isStock(x))stock++;else if(norm(statusOf(x)).indexOf('dang su dung')>=0)using++;else if(norm(statusOf(x)).indexOf('sua')>=0)repair++;groups[x[2]||''] = true});
    return {total:total,stock:stock,using:using,repair:repair,groups:Object.keys(groups).filter(Boolean).length};
  }
  function groupRows(){
    var map={};
    itCatalog().forEach(function(r){map[r.h[0]]={code:r.h[0],name:r.h[1],unit:r.h[3]||'CÃƒÂ¡i',desc:r.h[4]||'',total:0,stock:0,using:0}});
    (state.thietBiIT||[]).forEach(function(raw){
      var x=tnorm(raw),code=x[2]||'';
      if(!map[code]){var h=itemInfo(code);map[code]={code:code,name:h[1]||code,unit:h[3]||'CÃƒÂ¡i',desc:h[4]||'',total:0,stock:0,using:0}}
      map[code].total++;
      if(isStock(x))map[code].stock++;else if(norm(statusOf(x)).indexOf('dang su dung')>=0)map[code].using++;
    });
    var rows=Object.keys(map).map(function(k){return map[k]}).sort(function(a,b){return a.name.localeCompare(b.name,'vi')});
    return rows.map(function(r){
      return '<tr>'+td('MÃƒÂ£',esc(r.code))+td('NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',esc(r.name))+td('Ã„ÂVT',esc(r.unit))+td('TÃ¡Â»â€¢ng',money(r.total),'num')+td('Trong kho',money(r.stock),'num')+td('Ã„ÂÃƒÂ£ cÃ¡ÂºÂ¥p phÃƒÂ¡t',money(r.using),'num')+td('MÃƒÂ´ tÃ¡ÂºÂ£',esc(r.desc||'KhÃƒÂ´ng cÃƒÂ³'))+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="7">ChÃ†Â°a cÃƒÂ³ nhÃƒÂ³m/mÃ¡ÂºÂ·t hÃƒÂ ng IT.</td></tr>';
  }
  function deviceRows(){
    var rows=(state.thietBiIT||[]).map(function(raw,i){
      var x=tnorm(raw),h=itemInfo(x[2]),serial=serialOf(x),st=statusOf(x),dept=deviceDept(x),holder=holderText(x),wh=deviceWarehouse(x);
      var search=[serial,h[0],h[1],h[4],x[3],x[4],holder,dept,wh,st,x[7]].join(' ');
      var cls=isStock(x)?'it-stock':(norm(st).indexOf('dang su dung')>=0?'it-using':'it-other');
      var actions='<div class="row-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">CÃ¡ÂºÂ¥p phÃƒÂ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">VÃ¡Â»Â kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button></div>';
      return '<tr data-it-row="1" data-search="'+esc(norm(search))+'" data-status="'+esc(norm(st))+'" data-type="'+esc(x[2]||'')+'" data-warehouse="'+esc(norm(wh))+'">'+
        td('SÃ¡Â»â€˜ seri','<button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(serial)+'</button>')+
        td('NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',esc(h[1]))+
        td('Kho IT / NgÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng',esc(holder))+
        td('BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho',esc(dept||''))+
        td('NgÃƒÂ y nhÃ¡ÂºÂ­p',esc(x[4]||''))+
        td('TrÃ¡ÂºÂ¡ng thÃƒÂ¡i','<span class="tag '+cls+'">'+esc(st)+'</span>')+
        td('Ghi chÃƒÂº',esc(x[7]||''))+
        td('Thao tÃƒÂ¡c',actions)+
      '</tr>';
    }).join('');
    return rows||'<tr><td class="empty" colspan="8">ChÃ†Â°a cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT. NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ seri Ã¡Â»Å¸ khung bÃƒÂªn phÃ¡ÂºÂ£i Ã„â€˜Ã¡Â»Æ’ bÃ¡ÂºÂ¯t Ã„â€˜Ã¡ÂºÂ§u.</td></tr>';
  }
  function catalogRows(){
    return itCatalog().map(function(r){
      var h=r.h,actions='<div class="hang-actions"><button class="btn small" onclick="editItHang('+r.i+')">SÃ¡Â»Â­a</button><button class="btn small bad" onclick="deleteItHang('+r.i+')">XÃƒÂ³a</button></div>';
      return '<tr>'+td('MÃƒÂ£',esc(h[0]))+td('TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',esc(h[1]))+td('Ã„ÂVT',esc(h[3]))+td('MÃƒÂ´ tÃ¡ÂºÂ£',esc(h[4]||'KhÃƒÂ´ng cÃƒÂ³'))+td('Thao tÃƒÂ¡c',actions)+'</tr>';
    }).join('')||'<tr><td class="empty" colspan="5">ChÃ†Â°a cÃƒÂ³ mÃ¡ÂºÂ·t hÃƒÂ ng IT. TÃ¡ÂºÂ¡o Ã¡Â»Å¸ khung bÃƒÂªn phÃ¡ÂºÂ£i.</td></tr>';
  }
  window.screenThietBi=function(){
    var s=stats();
    var typeOpts='<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</option>'+itCatalog().map(function(r){return '<option value="'+esc(r.h[0])+'">'+esc(r.h[1])+'</option>'}).join('');
    var whOpts='<option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ kho IT</option>'+itWarehouses().map(function(k){return '<option value="'+esc(norm(k[1]))+'">'+esc(k[1])+'</option>'}).join('');
    var body='<div class="it-total-dashboard">'+
      '<div class="stats it-stats"><div class="card dash-card dash-green"><span>TÃ¡Â»â€¢ng thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</span><strong>'+money(s.total)+'</strong></div><div class="card dash-card dash-blue"><span>NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</span><strong>'+money(s.groups)+'</strong></div><div class="card dash-card dash-amber"><span>ChÃ†Â°a cÃ¡ÂºÂ¥p phÃƒÂ¡t</span><strong>'+money(s.stock)+'</strong></div><div class="card dash-card dash-rose"><span>Ã„ÂÃƒÂ£ cÃ¡ÂºÂ¥p phÃƒÂ¡t</span><strong>'+money(s.using)+'</strong></div></div>'+
      '<div class="grid it-total-layout">'+
        '<div class="panel it-main-panel"><div class="head"><h2>BÃ¡ÂºÂ£ng tÃ¡Â»â€¢ng thÃ¡Â»Æ’ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</h2><span class="tag" id="itVisibleCount"></span></div><div class="body it-filter-line"><input id="itDeviceSearch" placeholder="TÃƒÂ¬m sÃ¡Â»â€˜ seri, thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹, ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng, kho, ghi chÃƒÂº..."><select id="itTypeFilter">'+typeOpts+'</select><select id="itStatusFilter"><option value="">TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ trÃ¡ÂºÂ¡ng thÃƒÂ¡i</option><option value="trong kho">ChÃ†Â°a cÃ¡ÂºÂ¥p phÃƒÂ¡t</option><option value="dang su dung">Ã„ÂÃƒÂ£ cÃ¡ÂºÂ¥p phÃƒÂ¡t</option><option value="dang sua">Ã„Âang sÃ¡Â»Â­a chÃ¡Â»Â¯a</option></select><select id="itWarehouseFilter">'+whOpts+'</select><button class="btn" id="itClearSearch" type="button">XÃƒÂ³a tÃƒÂ¬m</button></div><div class="wrap it-device-table-wrap"><table><thead><tr><th>SÃ¡Â»â€˜ seri</th><th>NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>Kho IT / NgÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng</th><th>BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho</th><th>NgÃƒÂ y nhÃ¡ÂºÂ­p</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>Ghi chÃƒÂº</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody id="itDeviceRows">'+deviceRows()+'</tbody></table></div></div>'+
        '<div class="panel it-form-panel"><div class="head"><h2>NhÃ¡ÂºÂ­p / cÃ¡ÂºÂ¥p phÃƒÂ¡t thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="body form it-device-form"><input id="editThietBi" type="hidden"><label class="full">SÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹<input id="maThietBi" placeholder="NhÃ¡ÂºÂ­p hoÃ¡ÂºÂ·c quÃƒÂ©t sÃ¡Â»â€˜ seri trÃƒÂªn tem thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹"></label><input id="seriThietBi" type="hidden"><label>MÃ¡ÂºÂ·t hÃƒÂ ng IT<select id="hangThietBi"></select></label><label>NguÃ¡Â»â€œn nhÃ¡ÂºÂ­p<select id="nguonThietBi"></select></label><label>NgÃƒÂ y nhÃ¡ÂºÂ­p<input id="ngayThietBi" type="date" value="'+today+'"></label><label>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i<select id="trangThaiThietBi">'+statusOptions('Trong kho')+'</select></label><label>Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT<select id="khoThietBiIT"></select></label><label>CÃ¡ÂºÂ¥p phÃƒÂ¡t cho nhÃƒÂ¢n viÃƒÂªn<input id="nguoiDungThietBi" list="itEmployeeList" placeholder="GÃƒÂµ tÃƒÂªn nhÃƒÂ¢n viÃƒÂªn trong danh sÃƒÂ¡ch"><datalist id="itEmployeeList">'+employeeOptions('')+'</datalist></label><label class="full">BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho<input id="boPhanThietBiIT" list="itDeptList" placeholder="TÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân theo nhÃƒÂ¢n viÃƒÂªn hoÃ¡ÂºÂ·c kho IT"><datalist id="itDeptList">'+deptOptions('')+'</datalist></label><label class="full">Ghi chÃƒÂº<input id="ghiChuThietBi" placeholder="CÃ¡ÂºÂ¥u hÃƒÂ¬nh, tÃƒÂ¬nh trÃ¡ÂºÂ¡ng, chÃ¡Â»Â©ng tÃ¡Â»Â«..."></label><button class="btn primary" id="luuThietBi" type="button">LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</button><button class="btn" id="huyThietBi" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button><p class="hint full" id="itFormHint">TrÃ¡ÂºÂ¡ng thÃƒÂ¡i Trong kho sÃ¡ÂºÂ½ lÃ†Â°u theo Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT. Khi cÃ¡ÂºÂ¥p phÃƒÂ¡t, chÃ¡Â»Ân nhÃƒÂ¢n viÃƒÂªn Ã„â€˜Ã¡Â»Æ’ app tÃ¡Â»Â± lÃ¡ÂºÂ¥y bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho.</p></div><div class="it-catalog-editor"><div class="head compact-head"><h2>ThÃƒÂªm / sÃ¡Â»Â­a nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</h2></div><div class="body form"><input id="editItHangIndex" type="hidden"><label>MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT<input id="itHangCode"></label><label>TÃƒÂªn nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹<input id="itHangName" placeholder="VD: Laptop Dell, MÃƒÂ¡y in, MÃƒÂ n hÃƒÂ¬nh"></label><label>Ã„ÂVT<select id="itHangDvt"></select></label><label class="full">MÃƒÂ´ tÃ¡ÂºÂ£ / cÃ¡ÂºÂ¥u hÃƒÂ¬nh<input id="itHangDesc" placeholder="VD: 24 inch, HDMI, mÃƒÂ u Ã„â€˜en"></label><button class="btn primary" id="saveItHang" type="button">LÃ†Â°u nhÃƒÂ³m IT</button><button class="btn" id="newItHang" type="button">TÃ¡ÂºÂ¡o mÃ¡Â»â€ºi</button></div></div></div>'+
      '</div>'+
      '<div class="grid it-lower-layout"><div class="panel"><div class="head compact-head"><h2>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng theo nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</h2></div><div class="wrap it-group-wrap"><table><thead><tr><th>MÃƒÂ£</th><th>NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</th><th>Ã„ÂVT</th><th>TÃ¡Â»â€¢ng</th><th>Trong kho</th><th>Ã„ÂÃƒÂ£ cÃ¡ÂºÂ¥p phÃƒÂ¡t</th><th>MÃƒÂ´ tÃ¡ÂºÂ£</th></tr></thead><tbody>'+groupRows()+'</tbody></table></div></div><div class="panel"><div class="head compact-head"><h2>Danh mÃ¡Â»Â¥c nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</h2></div><div class="wrap it-catalog-wrap"><table><thead><tr><th>MÃƒÂ£</th><th>TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</th><th>Ã„ÂVT</th><th>MÃƒÂ´ tÃ¡ÂºÂ£</th><th>Thao tÃƒÂ¡c</th></tr></thead><tbody>'+catalogRows()+'</tbody></table></div></div></div>'+
    '</div>';
    return shell('thietbi','QuÃ¡ÂºÂ£n lÃƒÂ½ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','QuÃ¡ÂºÂ£n lÃƒÂ½ riÃƒÂªng thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT theo sÃ¡Â»â€˜ seri, kho IT, nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ vÃƒÂ  ngÃ†Â°Ã¡Â»Âi Ã„â€˜Ã†Â°Ã¡Â»Â£c cÃ¡ÂºÂ¥p phÃƒÂ¡t.',body);
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
    if(!serial)return alert('NhÃ¡ÂºÂ­p sÃ¡Â»â€˜ seri thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    var hang=(byId('hangThietBi')&&byId('hangThietBi').value)||'';
    if(!hang)return alert('ChÃ¡Â»Ân mÃ¡ÂºÂ·t hÃƒÂ ng/nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');
    var st=(byId('trangThaiThietBi')&&byId('trangThaiThietBi').value)||'Trong kho';
    var whVal=(byId('khoThietBiIT')&&byId('khoThietBiIT').value)||'';
    var whName=warehouseNameFromValue(whVal)||whVal||'Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
    var user=(byId('nguoiDungThietBi')&&byId('nguoiDungThietBi').value.trim())||'';
    var dept=(byId('boPhanThietBiIT')&&byId('boPhanThietBiIT').value.trim())||'';
    if(norm(st).indexOf('trong kho')>=0){
      user=whName;dept=whName;
    }else if(norm(st).indexOf('dang su dung')>=0){
      if(!user)return alert('ChÃ¡Â»Ân hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p nhÃƒÂ¢n viÃƒÂªn Ã„â€˜ang sÃ¡Â»Â­ dÃ¡Â»Â¥ng');
      var emp=employeeByName(user);if(emp&&emp.dept&&!dept)dept=emp.dept;
      if(!dept)return alert('NhÃ¡ÂºÂ­p bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho cÃ¡Â»Â§a nhÃƒÂ¢n viÃƒÂªn sÃ¡Â»Â­ dÃ¡Â»Â¥ng');
    }else{
      if(!user)user=whName;
      if(!dept)dept=whName;
    }
    var row=[serial,serial,hang,(byId('nguonThietBi')&&byId('nguonThietBi').value)||'',(byId('ngayThietBi')&&byId('ngayThietBi').value)||today,user,st,(byId('ghiChuThietBi')&&byId('ghiChuThietBi').value.trim())||'',dept,whName];
    var idx=(byId('editThietBi')&&byId('editThietBi').value)||'';
    var dup=state.thietBiIT.some(function(raw,i){var x=tnorm(raw);return (x[0]===serial||x[1]===serial)&&String(i)!==String(idx)});
    if(dup)return alert('SÃ¡Â»â€˜ seri nÃƒÂ y Ã„â€˜ÃƒÂ£ tÃ¡Â»â€œn tÃ¡ÂºÂ¡i');
    if(idx==='')state.thietBiIT.push(row);else state.thietBiIT[Number(idx)]=row;
    persistIt();
    alert('Ã„ÂÃƒÂ£ lÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');
    render();
  };
  window.capPhatThietBi=function(i){
    editThietBi(i);
    if(byId('trangThaiThietBi'))byId('trangThaiThietBi').value='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
    syncItForm();
    if(byId('nguoiDungThietBi'))byId('nguoiDungThietBi').focus();
  };
  window.chuyenNguoiDungThietBi=function(i){capPhatThietBi(i)};
  window.traVeKhoThietBi=function(i){
    if(!state.thietBiIT||!state.thietBiIT[i])return;
    var x=tnorm(state.thietBiIT[i]),wh=itWarehouses()[0],whName=wh?wh[1]:'Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
    if(!confirm('ChuyÃ¡Â»Æ’n thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ '+serialOf(x)+' vÃ¡Â»Â '+whName+'?'))return;
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
      if(hint)hint.textContent='TrÃ¡ÂºÂ¡ng thÃƒÂ¡i Trong kho sÃ¡ÂºÂ½ lÃ†Â°u theo Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân.';
    }else{
      if(hint)hint.textContent='CÃ¡ÂºÂ¥p phÃƒÂ¡t: chÃ¡Â»Ân nhÃƒÂ¢n viÃƒÂªn tÃ¡Â»Â« danh sÃƒÂ¡ch NhÃƒÂ¢n viÃƒÂªn, app tÃ¡Â»Â± Ã„â€˜iÃ¡Â»Ân bÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho.';
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
    if(byId('itHangDvt'))byId('itHangDvt').innerHTML=unitOptions(byId('itHangDvt').value||'CÃƒÂ¡i');
    if(byId('saveItHang'))byId('saveItHang').onclick=saveItHang;
    if(byId('newItHang'))byId('newItHang').onclick=resetItHang;
    if(byId('luuThietBi'))byId('luuThietBi').onclick=saveThietBi;
    if(byId('huyThietBi'))byId('huyThietBi').onclick=resetThietBi;
    if(byId('itHangCode')&&byId('editItHangIndex')&&!byId('editItHangIndex').value&&typeof nextItemCode==='function')byId('itHangCode').value=nextItemCode('ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT');
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
      if(badge)badge.textContent=shown+' / '+(state.thietBiIT||[]).length+' thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
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
  if(!byId('it-management-dashboard-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='it-management-dashboard-style-20260721-mobile-login-sync-1';
    st.textContent='#thietbi .it-total-layout{grid-template-columns:minmax(0,1.35fr) minmax(360px,.82fr)!important;gap:10px!important}#thietbi .it-lower-layout{grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr)!important;gap:10px!important;margin-top:10px}#thietbi .it-stats{margin-bottom:10px!important}#thietbi .it-main-panel,#thietbi .it-form-panel{align-self:start}#thietbi .it-filter-line{display:grid;grid-template-columns:minmax(220px,1fr) minmax(150px,.55fr) minmax(140px,.48fr) minmax(140px,.48fr) auto;gap:8px;align-items:center;padding:10px 12px!important;background:#f3fbf7;border-bottom:1px solid #d9eadf}#thietbi .it-filter-line input,#thietbi .it-filter-line select{min-height:35px!important;background:#fff!important}#thietbi .it-device-table-wrap{max-height:438px;overflow:auto}#thietbi .it-device-table-wrap table{min-width:980px}#thietbi .it-group-wrap,#thietbi .it-catalog-wrap{max-height:240px;overflow:auto}#thietbi .it-device-form{grid-template-columns:repeat(2,minmax(150px,1fr));gap:8px 10px!important}#thietbi .serial-scan-wrap{grid-column:1/-1}#thietbi .it-catalog-editor{border-top:1px solid #d7e8df;margin-top:10px}#thietbi .compact-head h2{font-size:14px!important}.it-serial-link,.link-like{border:0;background:transparent;color:#006b50;text-decoration:underline;font-weight:650;padding:0;cursor:pointer}.tag.it-stock{background:#e8f8ef;color:#007956}.tag.it-using{background:#e8f1ff;color:#23669a}.tag.it-other{background:#fff4d8;color:#8a6400}@media(max-width:900px){#thietbi{padding-bottom:98px!important}#thietbi .it-total-layout,#thietbi .it-lower-layout{display:block!important}#thietbi .it-stats{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}#thietbi .it-stats .card{min-height:70px!important}#thietbi .it-filter-line{grid-template-columns:1fr!important;padding:8px!important;gap:6px!important}#thietbi .it-filter-line input,#thietbi .it-filter-line select{min-height:42px!important;font-size:14px!important;background:#f2fff8!important}#thietbi .it-device-table-wrap{max-height:none!important;overflow:visible!important}#thietbi .it-device-table-wrap table{min-width:0!important}#thietbi #itDeviceRows tr[data-it-row]{display:grid!important;grid-template-columns:1fr;gap:5px;background:#fff;border:1px solid #cfe6da;border-radius:9px;margin:8px 0;padding:9px 10px;box-shadow:0 5px 14px rgba(11,74,52,.06)}#thietbi #itDeviceRows td{display:flex!important;justify-content:space-between;gap:10px;border:0!important;padding:2px 0!important;font-size:12.8px!important}#thietbi #itDeviceRows td:before{content:attr(data-label);font-weight:650;color:#587166;min-width:90px}#thietbi #itDeviceRows td[data-label="Thao tÃƒÂ¡c"]{display:block!important}#thietbi #itDeviceRows td[data-label="Thao tÃƒÂ¡c"]:before{display:none}#thietbi .it-device-table-wrap thead{display:none!important}#thietbi .it-form-panel{margin-top:8px!important}#thietbi .it-device-form{grid-template-columns:1fr!important;gap:7px!important}#thietbi .it-device-form input,#thietbi .it-device-form select{min-height:42px!important;background:#f7fffb!important}.it-catalog-wrap table,.it-group-wrap table{min-width:760px}}';
    document.head.appendChild(st);
  }
  try{localStorage.setItem('qlhc-pwa-cache-version',VERSION)}catch(e){}
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){})}
})();
;

(function(){
  if(window.__itSingleWarehouse20260717)return;window.__itSingleWarehouse20260717=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
    return k?{code:k[0],name:k[1]}:{code:'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT',name:'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT'};
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
      filter.title='Ã„ÂÃƒÂ£ gÃ¡Â»â„¢p thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT vÃ¡Â»Â mÃ¡Â»â„¢t kho';
      filter.dispatchEvent(new Event('change',{bubbles:true}));
    }
    var formKho=byId('khoThietBiIT');
    if(formKho){
      formKho.innerHTML='<option value="'+esc(kho.code)+'">'+esc(kho.name)+'</option>';
      formKho.value=kho.code;
      formKho.title='Kho IT dÃƒÂ¹ng chung';
    }
    var status=byId('trangThaiThietBi'),dept=byId('boPhanThietBiIT');
    if(status&&dept&&norm(status.value).indexOf('trong kho')>=0)dept.value=kho.name;
    [].slice.call(document.querySelectorAll('#itDeviceRows tr[data-it-row]')).forEach(function(tr){
      if((tr.getAttribute('data-status')||'').indexOf('trong kho')>=0){
        tr.setAttribute('data-warehouse','');
        var holder=tr.querySelector('td[data-label="Kho IT / NgÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng"]');
        var bp=tr.querySelector('td[data-label="BÃ¡Â»â„¢ phÃ¡ÂºÂ­n/kho"]');
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
  if(!byId('it-single-warehouse-style-20260721-mobile-login-sync-1')){
    var st=document.createElement('style');st.id='it-single-warehouse-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','','','','',''])}catch(e){return raw||['','','','','','','','','','']}}
  function primaryItKho(){
    var list=Array.isArray(state&&state.kho)?state.kho:[];
    var exact=list.find(function(k){var s=norm([k&&k[0],k&&k[1],k&&k[2]].join(' '));return s.indexOf('kho thiet bi it')>=0||s.indexOf('thiet bi it')>=0||s.indexOf('kho it')>=0});
    var loose=list.find(function(k){var s=norm([k&&k[0],k&&k[1],k&&k[2]].join(' '));return s.indexOf('it')>=0||s.indexOf('cntt')>=0||s.indexOf('cong nghe')>=0});
    var k=exact||loose;
    return k?{code:k[0],name:k[1]}:{code:'KHO-IT',name:'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT'};
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
    if(badge)badge.textContent=shown+' / '+total+' thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
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
      if(title)title.textContent='Ã¡ÂºÂ¢nh mÃƒÂ£ seri';
      if(note)note.textContent='ChÃ¡Â»Â¥p/chÃ¡Â»Ân Ã¡ÂºÂ£nh tem mÃƒÂ£ nÃ¡ÂºÂ¿u camera khÃƒÂ´ng quÃƒÂ©t Ã„â€˜Ã†Â°Ã¡Â»Â£c.';
    }
    var scan=byId('scanSerialBtn');
    if(scan)scan.textContent='QuÃƒÂ©t mÃƒÂ£';
    var hint=document.querySelector('#thietbi .serial-scan-hint');
    if(hint)hint.textContent='CÃƒÂ³ thÃ¡Â»Æ’ quÃƒÂ©t, chÃ¡Â»Â¥p Ã¡ÂºÂ£nh mÃƒÂ£ hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p tay sÃ¡Â»â€˜ seri.';
  }
  function insertActionFields(){
    var form=document.querySelector('#thietbi .it-device-form');if(!form||byId('itActionType'))return;
    var statusLabel=byId('trangThaiThietBi')&&byId('trangThaiThietBi').closest('label');
    var html='<label>NÃ¡Â»â„¢i dung nhÃ¡ÂºÂ­p - xuÃ¡ÂºÂ¥t<select id="itActionType"><option value="nhap">NhÃ¡ÂºÂ­p thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</option><option value="cap_phat">XuÃ¡ÂºÂ¥t/cÃ¡ÂºÂ¥p phÃƒÂ¡t</option><option value="chuyen_kho">MÃƒÂ¡y chuyÃ¡Â»Æ’n Ã„â€˜i kho khÃƒÂ¡c</option><option value="xuat">XuÃ¡ÂºÂ¥t thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</option></select></label>'+
      '<label id="itTransferWarehouseWrap">MÃƒÂ¡y chuyÃ¡Â»Æ’n Ã„â€˜i kho khÃƒÂ¡c<input id="itTransferWarehouse" list="itTransferWarehouseList" placeholder="GÃƒÂµ tÃƒÂªn kho nhÃ¡ÂºÂ­n hoÃ¡ÂºÂ·c nÃ†Â¡i chuyÃ¡Â»Æ’n Ã„â€˜Ã¡ÂºÂ¿n"><datalist id="itTransferWarehouseList"></datalist></label>'+
      '<label id="itExportWrap">TrÃ†Â°Ã¡Â»Âng xuÃ¡ÂºÂ¥t<input id="itExportContent" placeholder="VD: xuÃ¡ÂºÂ¥t thanh lÃƒÂ½, xuÃ¡ÂºÂ¥t trÃ¡ÂºÂ£, xuÃ¡ÂºÂ¥t hÃ¡Â»Âng..."></label>';
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
    addStatusOption('ChuyÃ¡Â»Æ’n kho khÃƒÂ¡c');addStatusOption('Ã„ÂÃƒÂ£ xuÃ¡ÂºÂ¥t');
    if(status){
      if(v==='nhap')status.value='Trong kho';
      if(v==='cap_phat')status.value='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
      if(v==='chuyen_kho')status.value='ChuyÃ¡Â»Æ’n kho khÃƒÂ¡c';
      if(v==='xuat')status.value='Ã„ÂÃƒÂ£ xuÃ¡ÂºÂ¥t';
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
      if(status)status.value='Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng';
      if(user&&!String(user.value||'').trim()){alert('ChÃ¡Â»Ân hoÃ¡ÂºÂ·c nhÃ¡ÂºÂ­p nhÃƒÂ¢n viÃƒÂªn nhÃ¡ÂºÂ­n thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');return false}
      var emp=user?employeeByName(user.value):null;
      if(emp&&dept&&!dept.value)dept.value=emp.dept||'';
      return true;
    }
    if(v==='chuyen_kho'){
      var transfer=(byId('itTransferWarehouse')&&byId('itTransferWarehouse').value.trim())||'';
      if(!transfer){alert('NhÃ¡ÂºÂ­p kho/nÃ†Â¡i chuyÃ¡Â»Æ’n Ã„â€˜Ã¡ÂºÂ¿n');return false}
      if(status)status.value='ChuyÃ¡Â»Æ’n kho khÃƒÂ¡c';
      if(user)user.value=transfer;
      if(dept)dept.value=transfer;
      if(note)note.value=noteAppend(note.value,'ChuyÃ¡Â»Æ’n kho khÃƒÂ¡c',transfer);
      return true;
    }
    if(v==='xuat'){
      var reason=(byId('itExportContent')&&byId('itExportContent').value.trim())||'XuÃ¡ÂºÂ¥t thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(status)status.value='Ã„ÂÃƒÂ£ xuÃ¡ÂºÂ¥t';
      if(user)user.value=reason;
      if(dept)dept.value='Ã„ÂÃƒÂ£ xuÃ¡ÂºÂ¥t';
      if(note)note.value=noteAppend(note.value,'XuÃ¡ÂºÂ¥t',reason);
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
    if(v==='xuat')setInputValue('itExportContent',x[5]||'XuÃ¡ÂºÂ¥t thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
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
    if(title)title.textContent='NhÃ¡ÂºÂ­p - XuÃ¡ÂºÂ¥t thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
    compactFilterLine();
    insertActionFields();
    addStatusOption('ChuyÃ¡Â»Æ’n kho khÃƒÂ¡c');addStatusOption('Ã„ÂÃƒÂ£ xuÃ¡ÂºÂ¥t');
    hideSingleWarehouseForm();
    makeSerialBoxCompact();
    bindActionFields();
    wrapItActions();
  }
  function installStyle(){
    if(byId('it-flow-polish-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-flow-polish-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function tnorm(raw){try{return typeof normalizeThietBi==='function'?normalizeThietBi(raw):(raw||['','','','','','','','','',''])}catch(e){return raw||['','','','','','','','','','']}}
  function actionMeta(action){
    var map={
      nhap:{title:'NhÃ¡ÂºÂ­p thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',icon:'+',hint:'TÃ¡ÂºÂ¡o thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ mÃ¡Â»â€ºi vÃƒÂ o kho IT',cls:'action-green'},
      cap_phat:{title:'CÃ¡ÂºÂ¥p phÃƒÂ¡t',icon:'Ã¢â€ â€™',hint:'Giao thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ cho nhÃƒÂ¢n viÃƒÂªn',cls:'action-blue'},
      chuyen_kho:{title:'ChuyÃ¡Â»Æ’n kho',icon:'Ã¢â€ â€',hint:'MÃƒÂ¡y chuyÃ¡Â»Æ’n Ã„â€˜i kho/nÃ†Â¡i khÃƒÂ¡c',cls:'action-amber'},
      xuat:{title:'XuÃ¡ÂºÂ¥t thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹',icon:'Ã¢Ë†â€™',hint:'XuÃ¡ÂºÂ¥t/thu hÃ¡Â»â€œi khÃ¡Â»Âi danh sÃƒÂ¡ch sÃ¡Â»Â­ dÃ¡Â»Â¥ng',cls:'action-rose'}
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
    var html='<div class="it-overview-tools" id="itOverviewActionCards"><div class="it-overview-tools-title">Thao tÃƒÂ¡c nhanh</div><div class="it-action-card-grid">'+actions+'</div></div>';
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
    if(hint)hint.textContent=meta.hint+'. Khi lÃ†Â°u, app vÃ¡ÂºÂ«n Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ vÃƒÂ o danh sÃƒÂ¡ch thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT.';
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
    head.insertAdjacentHTML('beforeend','<button class="btn small" id="itCloseForm" type="button">Ã„ÂÃƒÂ³ng</button>');
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
    if(byId('it-overview-actions-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-overview-actions-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function installStyle(){
    if(byId('it-hide-summary-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-hide-summary-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function ensureOneBar(){
    if(current!=='thietbi')return;
    var input=byId('maThietBi'),scan=byId('scanSerialBtn'),file=byId('nativePhotoSerialInput');
    if(!input)return;
    var wrap=input.closest('.serial-scan-wrap')||input.parentElement;
    if(!wrap)return;
    wrap.classList.add('it-serial-onebar');
    if(scan)scan.textContent='QuÃƒÂ©t mÃƒÂ£';
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
        picker.textContent='ChÃ¡Â»Ân tÃ¡Â»â€¡p';
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
    if(byId('it-serial-onebar-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-serial-onebar-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
  function todayLocal(){
    var d=new Date(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
    return d.getFullYear()+'-'+m+'-'+day;
  }
  function primaryItKho(){
    var list=Array.isArray(state&&state.kho)?state.kho:[];
    var k=list.find(function(x){var s=norm([x&&x[0],x&&x[1],x&&x[2]].join(' '));return s.indexOf('thiet bi it')>=0||s.indexOf('kho it')>=0||s.indexOf('cntt')>=0});
    return k?{code:k[0],name:k[1]}:{code:'KHO-IT',name:'Kho ThiÃ¡ÂºÂ¿t BÃ¡Â»â€¹ IT'};
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
    if(byId('it-auto-date-warehouse-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-auto-date-warehouse-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
      picker.textContent='ChÃ¡Â»Ân tÃ¡Â»â€¡p';
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
    if(byId('it-serial-inline-file-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-serial-inline-file-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').trim()}
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
      opt.label=item.group?item.group:'MÃ¡ÂºÂ·t hÃƒÂ ng IT';
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
      input.placeholder='GÃƒÂµ tÃƒÂªn hoÃ¡ÂºÂ·c mÃƒÂ£ mÃ¡ÂºÂ·t hÃƒÂ ng IT Ã„â€˜Ã¡Â»Æ’ tÃƒÂ¬m';
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
    if(byId('it-item-search-input-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-item-search-input-style-20260721-mobile-login-sync-1';
    st.textContent='#thietbi #hangThietBi.it-hidden-item-select{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:.01!important;display:block!important;overflow:hidden!important}#thietbi #hangThietBiSearch{width:100%!important;min-height:38px!important;background:#fff!important;border:1px solid #bdd8ca!important;border-radius:7px!important;padding:8px 10px!important;font:inherit!important}#thietbi #hangThietBiSearch:focus{outline:2px solid rgba(0,137,98,.22)!important;border-color:#008a62!important;box-shadow:0 0 0 3px rgba(0,137,98,.08)!important}@media(max-width:900px){#thietbi #hangThietBiSearch{min-height:42px!important;background:#f7fffb!important;font-size:14px!important}}';
    document.head.appendChild(st);
  }
  function wrapActions(){
    if(typeof window.saveThietBi==='function'&&!window.saveThietBi.__itItemSearchInput20260717){
      var oldSave=window.saveThietBi;
      window.saveThietBi=function(){
        if(current==='thietbi'&&!syncSelectFromSearch()){
          alert('ChÃ¡Â»Ân mÃ¡ÂºÂ·t hÃƒÂ ng IT trong danh sÃƒÂ¡ch gÃ¡Â»Â£i ÃƒÂ½ trÃ†Â°Ã¡Â»â€ºc khi lÃ†Â°u');
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
  var VERSION='20260721-mobile-login-sync-1';
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
    if(byId('employee-clean-name-input-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='employee-clean-name-input-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    if(byId('it-item-empty-on-new-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-item-empty-on-new-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
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
    h=Array.isArray(h)?h:[code,code,'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','CÃƒÂ¡i',''];
    return [h[0]||code,h[1]||code,h[2]||'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT',h[3]||'CÃƒÂ¡i',h[4]||''];
  }
  function statusText(x){
    var st=String(x&&x[6]||'').trim();
    if(!st)return 'ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t';
    return norm(st).indexOf('trong kho')>=0?'ChÃ¡Â»Â cÃ¡ÂºÂ¥p phÃƒÂ¡t':st;
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
    if(kind==='stock')return String(x&&x[9]||x&&x[5]||'Kho thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT').trim();
    return dept;
  }
  function rowHtml(raw,i){
    var x=tnorm(raw),h=itemInfo(x[2]),serial=serialOf(x),kind=statusKind(x),issued=kind==='using'?1:0,remain=kind==='using'?0:1;
    var stClass=kind==='using'?'asset-using':(kind==='stock'?'asset-stock':(kind==='broken'||kind==='lost'||kind==='cancel'?'asset-bad':'asset-other'));
    var search=[serial,h[0],h[1],h[2],h[4],x[3],dateVN(x[4]),holderText(x),deptText(x),statusText(x),x[7]].join(' ');
    var actions='<div class="row-actions asset-actions"><button class="btn small" type="button" onclick="capPhatThietBi('+i+')">CÃ¡ÂºÂ¥p phÃƒÂ¡t</button><button class="btn small" type="button" onclick="traVeKhoThietBi('+i+')">VÃ¡Â»Â kho</button><button class="btn small" type="button" onclick="editThietBi('+i+')">SÃ¡Â»Â­a</button></div>';
    return '<tr data-it-row="1" data-kind="'+kind+'" data-search="'+esc(norm(search))+'" data-status="'+esc(norm(x[6]||statusText(x)))+'" data-type="'+esc(x[2]||'')+'">'+
      '<td data-label=""><input class="asset-check" type="checkbox" aria-label="ChÃ¡Â»Ân '+esc(serial)+'"></td>'+
      '<td data-label="MÃƒÂ£ tÃƒÂ i sÃ¡ÂºÂ£n"><button class="link-like it-serial-link" type="button" onclick="editThietBi('+i+')">'+esc(serial||'ChÃ†Â°a cÃƒÂ³ seri')+'</button></td>'+
      '<td data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n">'+esc(h[1])+'</td>'+
      '<td data-label="LoÃ¡ÂºÂ¡i tÃƒÂ i sÃ¡ÂºÂ£n">'+esc(h[2]||'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT')+'</td>'+
      '<td data-label="NgÃƒÂ y mua/nhÃ¡ÂºÂ­p">'+esc(dateVN(x[4]))+'</td>'+
      '<td data-label="SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng" class="num">1</td>'+
      '<td data-label="SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t" class="num">'+issued+'</td>'+
      '<td data-label="SL cÃƒÂ²n lÃ¡ÂºÂ¡i" class="num">'+remain+'</td>'+
      '<td data-label="TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"><span class="tag '+stClass+'">'+esc(statusText(x))+'</span></td>'+
      '<td data-label="NguyÃƒÂªn giÃƒÂ¡" class="num">0</td>'+
      '<td data-label="NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng">'+esc(holderText(x))+'</td>'+
      '<td data-label="PhÃƒÂ²ng ban/kho">'+esc(deptText(x))+'</td>'+
      '<td data-label="Thao tÃƒÂ¡c">'+actions+'</td>'+
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
      ['all','TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£',c.all],
      ['stock','ChÃ†Â°a cÃ¡ÂºÂ¥p phÃƒÂ¡t',c.stock],
      ['using','Ã„Âang sÃ¡Â»Â­ dÃ¡Â»Â¥ng',c.using],
      ['liquid','Thanh lÃƒÂ½',c.liquid],
      ['repair','BÃ¡ÂºÂ£o trÃƒÂ¬, sÃ¡Â»Â­a chÃ¡Â»Â¯a',c.repair],
      ['lost','MÃ¡ÂºÂ¥t',c.lost],
      ['cancel','HÃ¡Â»Â§y',c.cancel],
      ['broken','HÃ¡Â»Âng',c.broken]
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
    if(badge)badge.textContent=shown+' / '+total+' tÃƒÂ i sÃ¡ÂºÂ£n';
  }
  function upgrade(){
    if(current!=='thietbi')return;
    var panel=document.querySelector('#thietbi .it-main-panel');
    var tbody=byId('itDeviceRows');
    if(!panel||!tbody)return;
    var title=panel.querySelector('.head h2');
    if(title)title.textContent='Danh sÃƒÂ¡ch tÃƒÂ i sÃ¡ÂºÂ£n IT';
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
      if(thead)thead.innerHTML='<tr><th><input class="asset-check" type="checkbox" aria-label="ChÃ¡Â»Ân tÃ¡ÂºÂ¥t cÃ¡ÂºÂ£"></th><th>MÃƒÂ£ TS</th><th>TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n</th><th>LoÃ¡ÂºÂ¡i tÃƒÂ i sÃ¡ÂºÂ£n</th><th>NgÃƒÂ y mua</th><th>SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng</th><th>SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t</th><th>SL cÃƒÂ²n lÃ¡ÂºÂ¡i</th><th>TrÃ¡ÂºÂ¡ng thÃƒÂ¡i</th><th>NguyÃƒÂªn giÃƒÂ¡</th><th>NgÃ†Â°Ã¡Â»Âi sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>PhÃƒÂ²ng ban sÃ¡Â»Â­ dÃ¡Â»Â¥ng</th><th>Thao tÃƒÂ¡c</th></tr>';
    }
    tbody.innerHTML=(state.thietBiIT||[]).map(rowHtml).join('')||'<tr><td class="empty" colspan="13">ChÃ†Â°a cÃƒÂ³ tÃƒÂ i sÃ¡ÂºÂ£n IT. BÃ¡ÂºÂ¥m NhÃ¡ÂºÂ­p thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ Ã„â€˜Ã¡Â»Æ’ thÃƒÂªm mÃ¡Â»â€ºi.</td></tr>';
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
    if(byId('it-asset-list-table-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-asset-list-table-style-20260721-mobile-login-sync-1';
    st.textContent='#thietbi .it-asset-tabs{display:flex;gap:18px;align-items:center;flex-wrap:wrap;padding:9px 12px 8px;background:#fff;border-bottom:1px solid #e2efe8}#thietbi .it-asset-tab{border:0;background:transparent;color:#5d6d65;font-size:12.5px;font-weight:700;padding:4px 0 8px;cursor:pointer;position:relative;white-space:nowrap}#thietbi .it-asset-tab span{font-weight:750;color:#7b8b83}#thietbi .it-asset-tab.active{color:#008a68}#thietbi .it-asset-tab.active:after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;border-radius:999px;background:#12b892}#thietbi .it-filter-line{background:#fbfffd!important;padding:9px 12px!important}#thietbi .it-asset-table{min-width:1320px!important;font-size:12.7px!important}#thietbi .it-asset-table th{font-size:11.5px!important;color:#718077!important;background:#f9fbfa!important;white-space:nowrap}#thietbi .it-asset-table td{padding:7px 9px!important;line-height:1.25!important;vertical-align:middle!important}#thietbi .asset-check{width:14px!important;height:14px!important;min-height:auto!important;padding:0!important}#thietbi .asset-actions{gap:5px;justify-content:flex-start}#thietbi .asset-actions .btn{min-height:28px!important;padding:4px 8px!important;font-size:12px!important}#thietbi .asset-stock{background:#e4f5ff!important;color:#1884c7!important}#thietbi .asset-using{background:#e0f7ec!important;color:#05855e!important}#thietbi .asset-other{background:#fff3d4!important;color:#8a6400!important}#thietbi .asset-bad{background:#ffe5e5!important;color:#bf3434!important}@media(max-width:900px){#thietbi .it-asset-tabs{gap:10px;overflow-x:auto;flex-wrap:nowrap;padding:8px 10px;-webkit-overflow-scrolling:touch}#thietbi .it-asset-tabs::-webkit-scrollbar{display:none}#thietbi .it-asset-tab{flex:0 0 auto;font-size:12px}#thietbi .it-asset-table{min-width:0!important}#thietbi #itDeviceRows tr[data-it-row]{display:grid!important;grid-template-columns:1fr!important;gap:4px!important}#thietbi #itDeviceRows td[data-label=""]{display:none!important}#thietbi #itDeviceRows td[data-label="MÃƒÂ£ tÃƒÂ i sÃ¡ÂºÂ£n"],#thietbi #itDeviceRows td[data-label="TÃƒÂªn tÃƒÂ i sÃ¡ÂºÂ£n"],#thietbi #itDeviceRows td[data-label="TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"]{font-weight:750!important}#thietbi #itDeviceRows td[data-label="NguyÃƒÂªn giÃƒÂ¡"],#thietbi #itDeviceRows td[data-label="SÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng"],#thietbi #itDeviceRows td[data-label="SÃ¡Â»â€˜ cÃ¡ÂºÂ¥p phÃƒÂ¡t"],#thietbi #itDeviceRows td[data-label="SL cÃƒÂ²n lÃ¡ÂºÂ¡i"]{font-size:12.3px!important}}';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
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
    var ICONS={tongquan:'TQ',nhap:'+',xuat:'-',thietbi:'IT',nhanvien:'NV',baocao:'BC',hanghoa:'HH',thietlap:'Ã¢Å¡â„¢'};
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
      if(text.indexOf('NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n')<0&&onclick.indexOf('chuyen')<0)return;
      btn.classList.add('transfer-receive-btn');
      btn.innerHTML='<span>NhÃ¡ÂºÂ­n Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n</span>'+(count?'<b class="transfer-badge">'+count+'</b>':'');
      btn.title=count?('CÃƒÂ³ '+count+' phiÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n chÃ¡Â»Â nhÃ¡ÂºÂ­n'):'KhÃƒÂ´ng cÃƒÂ³ phiÃ¡ÂºÂ¿u Ã„â€˜iÃ¡Â»Âu chuyÃ¡Â»Æ’n chÃ¡Â»Â nhÃ¡ÂºÂ­n';
    });
  }
  function installStyle(){
    if(byId('hide-transfer-menu-badge-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='hide-transfer-menu-badge-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').trim()}
  function ensureCatalogCard(){
    var grid=document.querySelector('#thietbi #itOverviewActionCards .it-action-card-grid');
    if(!grid||byId('itCatalogActionCard'))return;
    grid.insertAdjacentHTML('beforeend',
      '<button class="it-action-card action-mint" id="itCatalogActionCard" type="button">'+
        '<span class="it-action-icon">DM</span>'+
        '<strong>Danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</strong>'+
        '<small>ThÃƒÂªm, sÃ¡Â»Â­a nhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹</small>'+
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
          '<div class="head"><h2>Danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT</h2><button class="btn small" id="itCloseCatalogPanel" type="button">Ã„ÂÃƒÂ³ng</button></div>'+
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
    if(byId('it-catalog-quick-card-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-catalog-quick-card-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    if(byId('it-action-subview-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-action-subview-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function installStyle(){
    if(byId('it-hide-action-type-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-hide-action-type-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    if(byId('it-device-fields-style-20260721-mobile-login-sync-1'))return;
    var st=document.createElement('style');st.id='it-device-fields-style-20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    box.textContent='';
    var span=document.createElement('span');
    span.setAttribute('aria-hidden','true');
    span.textContent=icon;
    box.appendChild(span);
    card.setAttribute('aria-label',label);
    card.setAttribute('title',label);
  }
  function apply(){
    installStyle();
    if(!isIt())return;
    setIcon(document.querySelector('#thietbi [data-it-action="nhap"]'),'+','Nhap thiet bi');
    setIcon(document.querySelector('#thietbi [data-it-action="cap_phat"]'),'\u2192','Cap phat thiet bi cho nhan vien');
    setIcon(document.querySelector('#thietbi [data-it-action="chuyen_kho"]'),'\u21C4','Chuyen thiet bi sang kho/noi khac');
    setIcon(document.querySelector('#thietbi [data-it-action="xuat"]'),'\u2212','Xuat thiet bi');
    setIcon(byId('itCatalogActionCard'),'DM','Danh muc loai thiet bi IT');
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function isIt(){try{return typeof current!=='undefined'&&current==='thietbi'}catch(e){return false}}
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'d').trim()}
  function isUnitLike(v){return /^(cai|hop|bo|thung|ram|chiec|goi|kg|lit|chai|cay)$/.test(norm(v))}
  function displayGroup(v){v=String(v||'').trim();return (!v||isUnitLike(v))?'ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT':v}
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
    var seed=['ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT','MÃƒÂ¡y tÃƒÂ­nh','Laptop','MÃƒÂ n hÃƒÂ¬nh','MÃƒÂ¡y in','Camera','ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ mÃ¡ÂºÂ¡ng','KhÃƒÂ¡c'];
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
      input.value=value==='ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT'?'':value;
      input.setAttribute('list','itHangGroupList');
      input.placeholder='VD: Laptop, MÃƒÂ n hÃƒÂ¬nh, Camera...';
      old.parentNode.replaceChild(input,old);
      old=input;
    }else{
      old.setAttribute('list','itHangGroupList');
      old.placeholder='VD: Laptop, MÃƒÂ n hÃƒÂ¬nh, Camera...';
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
    if(title)title.textContent='ThÃƒÂªm / sÃ¡Â»Â­a thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
    var code=byId('itHangCode');
    if(code){setLabel(code,'MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');code.placeholder='GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹'}
    var name=byId('itHangName');
    if(name){setLabel(name,'TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');name.placeholder='VD: MÃƒÂ n hÃƒÂ¬nh Dell E2223HN'}
    var group=ensureGroupInput();
    if(group)setLabel(group,'NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹');
    var desc=byId('itHangDesc');
    if(desc){
      var dl=desc.closest&&desc.closest('label');
      if(dl)dl.classList.add('it-catalog-desc-hidden-final');
    }
    var save=byId('saveItHang');
    if(save)save.textContent='LÃ†Â°u thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
    var listTitle=document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-wrap')&&document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-wrap').closest('.panel')&&document.querySelector('#thietbi #itCatalogStandalonePanel .it-catalog-wrap').closest('.panel').querySelector('.head h2');
    if(listTitle)listTitle.textContent='Danh mÃ¡Â»Â¥c thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
  }
  function updateTables(){
    if(!isIt())return;
    [].slice.call(document.querySelectorAll('#thietbi .it-catalog-wrap table')).forEach(function(table){
      table.classList.add('it-catalog-three-field-table');
      var heads=table.querySelectorAll('thead th');
      if(heads[0])heads[0].textContent='MÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(heads[1])heads[1].textContent='TÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(heads[2])heads[2].textContent='NhÃƒÂ³m thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
      if(heads[3])heads[3].classList.add('it-hide-col-desc-final');
      if(heads[4])heads[4].textContent='Thao tÃƒÂ¡c';
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
        if(group&&!String(group.value||'').trim())group.value='ThiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ IT';
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
  var VERSION='20260721-mobile-login-sync-1';
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
    input.placeholder='GÃƒÂµ hoÃ¡ÂºÂ·c quÃƒÂ©t mÃƒÂ£ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹';
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
  var VERSION='20260721-mobile-login-sync-1';
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
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function norm(v){
    return String(v==null?'':v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Ã„â€˜/g,'d').replace(/Ã„Â/g,'d').replace(/\s+/g,' ').trim();
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
    var m=s.match(/^([A-Za-z]{1,8}\d{1,8})\s*[-Ã¢â‚¬â€œ]\s*(.+)$/);
    return (m?m[2]:s).trim();
  }
  function defaultGroup(){return currentGroup()||(state.nhomHangList&&state.nhomHangList[0])||'ChÃ†Â°a phÃƒÂ¢n nhÃƒÂ³m'}
  function defaultDvt(){return (state.dvtList&&state.dvtList[0])||'CÃƒÂ¡i'}
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
    if(input){input.disabled=false;input.removeAttribute('disabled');input.placeholder='GÃƒÂµ tÃƒÂªn hÃƒÂ ng, mÃƒÂ£ hÃƒÂ ng, nhÃƒÂ³m hoÃ¡ÂºÂ·c mÃƒÂ´ tÃ¡ÂºÂ£'}
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
    if(!window.confirm('HÃƒÂ ng hÃƒÂ³a nÃƒÂ y chÃ†Â°a cÃƒÂ³ trong danh mÃ¡Â»Â¥c. BÃ¡ÂºÂ¡n cÃƒÂ³ muÃ¡Â»â€˜n lÃ†Â°u hÃƒÂ ng hÃƒÂ³a mÃ¡Â»â€ºi khÃƒÂ´ng?'))return false;
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
        if(!code)return alert('GÃƒÂµ tÃƒÂªn hÃƒÂ ng hÃƒÂ³a cÃ¡ÂºÂ§n nhÃ¡ÂºÂ­p');
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

;(function(){
  if(window.__qlhcTailSaveEnsure20260720)return;
  window.__qlhcTailSaveEnsure20260720=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  function byId(id){return document.getElementById(id)}
  function safeSync(){
    try{
      if(typeof window.__qlhcForceSaveAndSync==='function')window.__qlhcForceSaveAndSync(false);
      else if(typeof save==='function'){save();if(typeof window.dayDuLieuOnlineSilent==='function')window.dayDuLieuOnlineSilent()}
    }catch(e){}
  }
  function wrap(name,wait){
    var old=window[name];
    if(typeof old!=='function'||old.__qlhcTailSaveEnsure20260720)return;
    window[name]=function(){
      var out=old.apply(this,arguments);
      setTimeout(safeSync,wait||300);
      return out;
    };
    window[name].__qlhcTailSaveEnsure20260720=true;
  }
  function install(){
    [
      'saveNhap','saveXuat','saveHang','saveKho','saveNcc','saveLoai','saveNhom','saveDvt',
      'saveThietBi','saveItHang','saveEmployee','saveReceiver','saveItAsset','saveItCatalog',
      'xoaHang','deleteHang','xoaNcc','deleteNcc','xoaKho','deleteKho','xoaDvt','deleteDvt',
      'xoaNhom','deleteNhom','xoaLoai','deleteLoai','deleteEmployee','deleteReceiver',
      'deleteItAsset','deleteItCatalog'
    ].forEach(function(name){wrap(name,name==='saveNhap'?520:300)});
    var btn=byId('luuNhap');
    if(btn&&typeof window.saveNhap==='function')btn.onclick=window.saveNhap;
  }
  if(!window.alert.__qlhcTailTextFix20260720){
    var oldAlert=window.alert;
    window.alert=function(msg){
      var s=String(msg==null?'':msg);
      if(/HÃƒ|Ã„|Ã‚|Ã¡|mÃƒ|danh m/i.test(s)&&/hang|h.ng|danh|m.c/i.test(s))s='Hang hoa nay chua co trong danh muc. Ban co muon luu hang hoa moi khong?';
      return oldAlert.call(window,s);
    };
    window.alert.__qlhcTailTextFix20260720=true;
  }
  if(!window.confirm.__qlhcTailTextFix20260720){
    var oldConfirm=window.confirm;
    window.confirm=function(msg){
      var s=String(msg==null?'':msg);
      if(/HÃƒ|Ã„|Ã‚|Ã¡|mÃƒ|danh m/i.test(s)&&/hang|h.ng|danh|m.c/i.test(s))s='Hang hoa nay chua co trong danh muc. Ban co muon luu hang hoa moi khong?';
      return oldConfirm.call(window,s);
    };
    window.confirm.__qlhcTailTextFix20260720=true;
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__qlhcTailSaveEnsure20260720){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,80);return out};
    window.render.__qlhcTailSaveEnsure20260720=true;
  }
  setTimeout(install,120);
  setTimeout(install,900);
})();

;(function(){
  if(window.__qlhcMobileSyncRetry20260720)return;
  window.__qlhcMobileSyncRetry20260720=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var touchedAt=0,timer=null,retryTimer=null,inFlight=false;

  function markTouch(){touchedAt=Date.now()}
  ['click','input','change','submit'].forEach(function(ev){
    document.addEventListener(ev,markTouch,true);
  });
  function cfg(){
    try{return typeof SUPABASE_CONFIG!=='undefined'?SUPABASE_CONFIG:(window.SUPABASE_CONFIG||{})}
    catch(e){return window.SUPABASE_CONFIG||{}}
  }
  function getState(){
    try{return typeof state!=='undefined'?state:window.state}
    catch(e){return window.state||null}
  }
  function nowIso(){return new Date().toISOString()}
  function normalize(v){
    return String(v==null?'':v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();
  }
  function hangList(){
    var s=getState();
    return s&&Array.isArray(s.hang)?s.hang:[];
  }
  function itemName(row){
    return String((row&&row[1])||'');
  }
  function compact(s){
    if(!s)return s;
    if(!s.itemImages||typeof s.itemImages!=='object'||Array.isArray(s.itemImages))s.itemImages={};
    if(!s.itemImageNames||typeof s.itemImageNames!=='object'||Array.isArray(s.itemImageNames))s.itemImageNames={};
    if(s.itemImagesByName&&typeof s.itemImagesByName==='object'&&!Array.isArray(s.itemImagesByName)){
      Object.keys(s.itemImagesByName).forEach(function(name){
        var photo=s.itemImagesByName[name];
        if(!photo)return;
        var found=hangList().find(function(h){return normalize(itemName(h))===normalize(name)});
        if(found&&found[0]&&!s.itemImages[found[0]])s.itemImages[found[0]]=photo;
      });
    }
    delete s.itemImagesByName;
    delete s.itemImageNamesByName;
    if(!s.importDetails||typeof s.importDetails!=='object'||Array.isArray(s.importDetails))s.importDetails={};
    Object.keys(s.importDetails).forEach(function(k){
      if(s.importDetails[k]){
        s.importDetails[k].photo=s.importDetails[k].photo||'';
        s.importDetails[k].photoName=s.importDetails[k].photoName||'';
      }
    });
    s.__lastLocalSaveAt=nowIso();
    return s;
  }
  function saveLocal(){
    var s=compact(getState());
    if(!s)return false;
    try{
      localStorage.setItem('qlkho-state',JSON.stringify(s));
      localStorage.setItem('qlhc-pwa-cache-version',VERSION);
      return true;
    }catch(e){
      localStorage.setItem('qlhc-last-sync-error','Khong luu duoc tren may: '+(e&&e.message||e));
      return false;
    }
  }
  async function pushNow(show){
    var c=cfg(),s=compact(getState());
    if(!s)return false;
    if(!saveLocal())return false;
    try{localStorage.setItem('qlhc-pending-online-sync','1')}catch(e){}
    if(!c.url||!c.anonKey)return false;
    if(typeof navigator!=='undefined'&&navigator.onLine===false)return false;
    if(inFlight)return false;
    inFlight=true;
    try{
      var url=String(c.url).replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId||'qlhc-main');
      var res=await fetch(url,{
        method:'POST',
        headers:{
          apikey:c.anonKey,
          Authorization:'Bearer '+c.anonKey,
          'Content-Type':'application/json',
          Prefer:'resolution=merge-duplicates,return=minimal'
        },
        body:JSON.stringify({id:c.stateId||'qlhc-main',data:s,updated_at:nowIso()})
      });
      if(!res.ok)throw new Error(await res.text());
      localStorage.setItem('qlhc-pending-online-sync','0');
      localStorage.setItem('qlhc-last-sync-ok',nowIso());
      localStorage.removeItem('qlhc-last-sync-error');
      if(show)alert('Da dong bo du lieu online');
      return true;
    }catch(e){
      localStorage.setItem('qlhc-pending-online-sync','1');
      localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e));
      scheduleRetry();
      if(show)alert('Da luu tren may nay, nhung chua dong bo online duoc. App se tu thu lai khi co mang.');
      return false;
    }finally{
      inFlight=false;
    }
  }
  function scheduleRetry(){
    clearTimeout(retryTimer);
    retryTimer=setTimeout(function(){
      if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushNow(false);
    },5000);
  }
  function queueSync(delay){
    clearTimeout(timer);
    try{localStorage.setItem('qlhc-pending-online-sync','1')}catch(e){}
    timer=setTimeout(function(){pushNow(false)},delay||700);
  }
  window.__qlhcForceSaveAndSync=function(show){return pushNow(show!==false)};
  window.dayDuLieuOnlineSilent=function(){return pushNow(false)};
  window.dayDuLieuOnline=function(){return pushNow(true)};

  function wrap(name,delay){
    var old=window[name];
    if(typeof old!=='function'||old.__qlhcMobileSyncRetry20260720)return;
    window[name]=function(){
      markTouch();
      var out=old.apply(this,arguments);
      setTimeout(function(){saveLocal();queueSync(delay||700)},delay||700);
      return out;
    };
    window[name].__qlhcMobileSyncRetry20260720=true;
  }
  function install(){
    [
      'saveNhap','saveXuat','saveHang','saveKho','saveNcc','saveLoai','saveNhom','saveDvt',
      'saveThietBi','saveItHang','saveEmployee','saveReceiver','saveItAsset','saveItCatalog',
      'saveEditSlip','deleteSlip','xoaHang','deleteHang','xoaNcc','deleteNcc','xoaKho','deleteKho',
      'xoaDvt','deleteDvt','xoaNhom','deleteNhom','xoaLoai','deleteLoai','deleteEmployee',
      'deleteReceiver','deleteItAsset','deleteItCatalog'
    ].forEach(function(name){wrap(name,name==='saveNhap'?900:650)});
    var oldSave=window.save;
    if(typeof oldSave==='function'&&!oldSave.__qlhcMobileSyncRetry20260720){
      window.save=function(){
        var out=oldSave.apply(this,arguments);
        if(Date.now()-touchedAt<15000)queueSync(900);
        return out;
      };
      window.save.__qlhcMobileSyncRetry20260720=true;
    }
    ['dayOnline','onlinePushBtn'].forEach(function(id){
      var btn=document.getElementById(id);
      if(btn)btn.onclick=function(){pushNow(true)};
    });
  }
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__qlhcMobileSyncRetry20260720){
    window.render=function(){
      var out=oldRender.apply(this,arguments);
      setTimeout(install,100);
      setTimeout(install,600);
      return out;
    };
    window.render.__qlhcMobileSyncRetry20260720=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__qlhcMobileSyncRetry20260720){
    window.bindForms=function(){
      var out=oldBind.apply(this,arguments);
      setTimeout(install,100);
      return out;
    };
    window.bindForms.__qlhcMobileSyncRetry20260720=true;
  }
  window.addEventListener('online',function(){
    if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushNow(false);
  });
  window.addEventListener('focus',function(){
    if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushNow(false);
  });
  document.addEventListener('visibilitychange',function(){
    if(document.visibilityState==='hidden')saveLocal();
    if(document.visibilityState==='visible'&&localStorage.getItem('qlhc-pending-online-sync')==='1')pushNow(false);
  });
  setInterval(function(){
    if(localStorage.getItem('qlhc-pending-online-sync')==='1')pushNow(false);
  },30000);
  setTimeout(install,150);
  setTimeout(install,1000);
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
    navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){});
  }
})();



;(function(){
  if(window.__qlhcFinalTwoWaySync20260720)return;
  window.__qlhcFinalTwoWaySync20260720=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;
  var applyingRemote=false,inFlight=false,retryTimer=null,queueTimer=null,lastUserEdit=0;

  function cfg(){
    try{return typeof SUPABASE_CONFIG!=='undefined'?SUPABASE_CONFIG:(window.SUPABASE_CONFIG||{})}
    catch(e){return window.SUPABASE_CONFIG||{}}
  }
  function getState(){
    try{return typeof state!=='undefined'?state:window.state}
    catch(e){return window.state||null}
  }
  function setState(next){
    try{state=next}catch(e){window.state=next}
  }
  function nowIso(){return new Date().toISOString()}
  function safeTime(v){var t=Date.parse(v||'');return isNaN(t)?0:t}
  function pending(){try{return localStorage.getItem('qlhc-pending-online-sync')==='1'}catch(e){return false}}
  function lastOk(){try{return localStorage.getItem('qlhc-last-sync-ok')||''}catch(e){return ''}}
  function markPending(){
    if(applyingRemote)return;
    try{
      localStorage.setItem('qlhc-pending-online-sync','1');
      localStorage.setItem('qlhc-last-local-change',nowIso());
    }catch(e){}
  }
  function needsPush(){
    if(pending())return true;
    var s=getState();
    var local=s&&s.__lastLocalSaveAt||'';
    return safeTime(local)>safeTime(lastOk())+1000;
  }
  function normalizeStores(s){
    if(!s)return s;
    if(!s.itemImages||typeof s.itemImages!=='object'||Array.isArray(s.itemImages))s.itemImages={};
    if(!s.itemImageNames||typeof s.itemImageNames!=='object'||Array.isArray(s.itemImageNames))s.itemImageNames={};
    if(!s.importDetails||typeof s.importDetails!=='object'||Array.isArray(s.importDetails))s.importDetails={};
    delete s.itemImagesByName;
    delete s.itemImageNamesByName;
    var rowMap={};
    if(Array.isArray(s.bd)){
      s.bd.forEach(function(row){
        if(!row)return;
        var key=[row[0]||'',row[1]||'',row[2]||'',row[3]||'',row[5]||0].join('|');
        rowMap[key]=row;
      });
    }
    Object.keys(s.importDetails).forEach(function(k){
      var d=s.importDetails[k];
      var row=rowMap[k];
      if(d&&typeof d==='object'&&row){
        if(d.desc&&!row[13])row[13]=d.desc;
        if(d.photo&&!row[14]){row[14]=d.photo;row[15]=d.photoName||row[15]||'anh-hang-hoa.jpg'}
        if(row[14]&&!d.photo)d.photo=row[14];
        if(row[15]&&!d.photoName)d.photoName=row[15];
      }
    });
    return s;
  }
  function saveLocal(touch){
    var s=normalizeStores(getState());
    if(!s)return false;
    if(touch&&!applyingRemote)s.__lastLocalSaveAt=nowIso();
    try{
      localStorage.setItem('qlkho-state',JSON.stringify(s));
      localStorage.setItem('qlhc-pwa-cache-version',VERSION);
      if(touch)markPending();
      return true;
    }catch(e){
      try{localStorage.setItem('qlhc-last-sync-error','Khong luu duoc tren may: '+(e&&e.message||e))}catch(_){}
      return false;
    }
  }
  function endpoint(){
    var c=cfg();
    if(!c.url||!c.anonKey)return null;
    return String(c.url).replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId||'qlhc-main');
  }
  function headers(){
    var c=cfg();
    return {
      apikey:c.anonKey,
      Authorization:'Bearer '+c.anonKey,
      'Content-Type':'application/json',
      Prefer:'resolution=merge-duplicates,return=minimal'
    };
  }
  function scheduleRetry(){
    clearTimeout(retryTimer);
    retryTimer=setTimeout(function(){if(needsPush())pushOnline(false)},6000);
  }
  async function pushOnline(show){
    var url=endpoint(),s=normalizeStores(getState()),c=cfg();
    if(!s||!url||!c.anonKey)return false;
    try{localStorage.setItem('qlhc-pending-online-sync','1')}catch(e){}
    if(typeof navigator!=='undefined'&&navigator.onLine===false){scheduleRetry();return false}
    if(inFlight)return false;
    inFlight=true;
    try{
      var stamp=nowIso();
      s.__updatedAt=stamp;
      if(!s.__lastLocalSaveAt)s.__lastLocalSaveAt=stamp;
      saveLocal(false);
      var res=await fetch(url,{
        method:'POST',
        headers:headers(),
        body:JSON.stringify({id:c.stateId||'qlhc-main',data:s,updated_at:stamp})
      });
      if(!res.ok)throw new Error(await res.text());
      localStorage.setItem('qlhc-pending-online-sync','0');
      localStorage.setItem('qlhc-last-sync-ok',stamp);
      localStorage.removeItem('qlhc-last-sync-error');
      if(show)alert('Da dong bo du lieu online');
      return true;
    }catch(e){
      try{
        localStorage.setItem('qlhc-pending-online-sync','1');
        localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e));
      }catch(_){}
      scheduleRetry();
      if(show)alert('Da luu tren may nay. App se tu dong bo lai khi co mang.');
      return false;
    }finally{inFlight=false}
  }
  async function pullOnline(show){
    var url=endpoint(),c=cfg();
    if(!url||!c.anonKey)return false;
    if(inFlight)return false;
    inFlight=true;
    try{
      var res=await fetch(url,{method:'GET',headers:headers()});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(rows&&rows[0]&&rows[0].data){
        var local=getState()||{};
        var remoteStamp=safeTime(rows[0].updated_at||(rows[0].data&&rows[0].data.__updatedAt)||'');
        var localStamp=safeTime(local.__lastLocalSaveAt||local.__updatedAt||'');
        if(needsPush()&&(!remoteStamp||localStamp>=remoteStamp-1000)){
          inFlight=false;
          return pushOnline(show);
        }
        applyingRemote=true;
        var remote=rows[0].data;
        try{if(typeof migrateState==='function')remote=migrateState(remote)}catch(e){}
        setState(normalizeStores(remote));
        localStorage.setItem('qlkho-state',JSON.stringify(getState()));
        localStorage.setItem('qlhc-last-sync-ok',rows[0].updated_at||nowIso());
        localStorage.setItem('qlhc-pending-online-sync','0');
        localStorage.removeItem('qlhc-last-sync-error');
        applyingRemote=false;
        if(Date.now()-lastUserEdit>2500&&typeof render==='function')render();
        if(show)alert('Da tai du lieu online moi nhat');
        return true;
      }
      return false;
    }catch(e){
      try{localStorage.setItem('qlhc-last-sync-error',String(e&&e.message||e))}catch(_){}
      return false;
    }finally{applyingRemote=false;inFlight=false}
  }
  function queuePush(delay){
    if(applyingRemote)return;
    saveLocal(true);
    clearTimeout(queueTimer);
    queueTimer=setTimeout(function(){pushOnline(false)},delay||900);
  }
  function norm(v){return String(v==null?'':v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim()}
  function items(){var s=getState();return s&&Array.isArray(s.hang)?s.hang:[]}
  function itemByCode(code){return items().find(function(h){return h&&h[0]===code})||null}
  function findItem(value){
    var q=norm(value);
    if(!q)return null;
    return items().find(function(h){return h&&(norm(h[0])===q||norm(h[1])===q||norm((h[0]||'')+' - '+(h[1]||''))===q)})||null;
  }
  function detailKey(row){return [row&&row[0]||'',row&&row[1]||'',row&&row[2]||'',row&&row[3]||'',row&&row[5]||0].join('|')}
  function captureNhapPhotos(){
    return {
      itemPhoto:window.__pendingNhapItemPhoto||window.__pendingNhapItemImageData||'',
      itemName:window.__pendingNhapItemPhotoName||window.__pendingNhapItemImageName||'anh-hang-hoa.jpg',
      variantPhoto:window.__pendingNhapVariantPhoto||'',
      variantName:window.__pendingNhapVariantPhotoName||'anh-phan-loai.jpg',
      desc:(document.getElementById('nhapVariantDesc')&&document.getElementById('nhapVariantDesc').value.trim())||
        (document.getElementById('nhapThuocTinhMoi')&&document.getElementById('nhapThuocTinhMoi').value.trim())||''
    };
  }
  function attachNhapPhotos(captured){
    if(!captured)return false;
    var s=getState(),input=document.getElementById('hangNhap');
    if(!s||!Array.isArray(s.bd))return false;
    var last=s.bd[s.bd.length-1],code=(input&&input.dataset&&input.dataset.code)||'';
    if(!code&&input){var found=findItem(input.value);if(found)code=found[0]}
    if(!code&&last)code=last[3];
    if(!code)return false;
    var changed=false;
    s.itemImages=s.itemImages&&typeof s.itemImages==='object'&&!Array.isArray(s.itemImages)?s.itemImages:{};
    s.itemImageNames=s.itemImageNames&&typeof s.itemImageNames==='object'&&!Array.isArray(s.itemImageNames)?s.itemImageNames:{};
    var img=captured.itemPhoto||captured.variantPhoto;
    var imgName=captured.itemPhoto?captured.itemName:captured.variantName;
    if(img&&!s.itemImages[code]){s.itemImages[code]=img;s.itemImageNames[code]=imgName;changed=true}
    if(last&&last[3]===code&&(captured.desc||captured.variantPhoto)){
      last[13]=captured.desc||last[13]||'';
      if(captured.variantPhoto){last[14]=captured.variantPhoto;last[15]=captured.variantName}
      s.importDetails=s.importDetails&&typeof s.importDetails==='object'&&!Array.isArray(s.importDetails)?s.importDetails:{};
      s.importDetails[detailKey(last)]={desc:last[13]||'',photo:last[14]||'',photoName:last[15]||'',item:last[3],kho:last[2],qty:Number(last[5]||0),date:last[0],slip:last[1]};
      changed=true;
    }
    if(changed)saveLocal(true);
    return changed;
  }
  function wrap(name,delay){
    var old=window[name];
    if(typeof old!=='function'||old.__qlhcFinalTwoWaySync20260720)return;
    window[name]=function(){
      lastUserEdit=Date.now();
      var photo=name==='saveNhap'?captureNhapPhotos():null;
      var out=old.apply(this,arguments);
      if(photo)setTimeout(function(){attachNhapPhotos(photo);queuePush(700)},350);
      else setTimeout(function(){queuePush(delay||700)},delay||700);
      return out;
    };
    window[name].__qlhcFinalTwoWaySync20260720=true;
  }
  function install(){
    [
      'saveNhap','saveXuat','saveHang','saveKho','saveNcc','saveLoai','saveNhom','saveDvt',
      'saveThietBi','saveItHang','saveEmployee','saveReceiver','saveItAsset','saveItCatalog',
      'saveEditSlip','deleteSlip','xoaHang','deleteHang','xoaNcc','deleteNcc','xoaKho','deleteKho',
      'xoaDvt','deleteDvt','xoaNhom','deleteNhom','xoaLoai','deleteLoai','deleteEmployee',
      'deleteReceiver','deleteItAsset','deleteItCatalog'
    ].forEach(function(n){wrap(n,n==='saveNhap'?950:700)});
    var oldSave=window.save;
    if(typeof oldSave==='function'&&!oldSave.__qlhcFinalTwoWaySync20260720){
      window.save=function(){
        var out=oldSave.apply(this,arguments);
        if(!applyingRemote&&Date.now()-lastUserEdit<20000)queuePush(900);
        return out;
      };
      window.save.__qlhcFinalTwoWaySync20260720=true;
    }
    ['onlinePushBtn','dayOnline'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pushOnline(true)}});
    ['onlinePullBtn','taiOnline'].forEach(function(id){var b=document.getElementById(id);if(b)b.onclick=function(){pullOnline(true)}});
  }
  window.__qlhcForceSaveAndSync=function(show){saveLocal(true);return pushOnline(show!==false)};
  window.dayDuLieuOnlineSilent=function(){return pushOnline(false)};
  window.dayDuLieuOnline=function(){return pushOnline(true)};
  window.taiDuLieuOnline=function(){return pullOnline(true)};
  window.__qlhcSyncNow=function(){return pushOnline(true)};
  window.__qlhcPullNow=function(){return pullOnline(true)};
  window.__qlhcSyncStatus=function(){return {
    pending:pending(),
    lastOk:lastOk(),
    lastError:(function(){try{return localStorage.getItem('qlhc-last-sync-error')||''}catch(e){return ''}})()
  }};

  ['click','input','change','submit'].forEach(function(ev){
    document.addEventListener(ev,function(){lastUserEdit=Date.now()},true);
  });
  var oldRender=window.render;
  if(typeof oldRender==='function'&&!oldRender.__qlhcFinalTwoWaySync20260720){
    window.render=function(){var out=oldRender.apply(this,arguments);setTimeout(install,80);setTimeout(install,600);return out};
    window.render.__qlhcFinalTwoWaySync20260720=true;
  }
  var oldBind=window.bindForms;
  if(typeof oldBind==='function'&&!oldBind.__qlhcFinalTwoWaySync20260720){
    window.bindForms=function(){var out=oldBind.apply(this,arguments);setTimeout(install,80);return out};
    window.bindForms.__qlhcFinalTwoWaySync20260720=true;
  }
  window.addEventListener('online',function(){if(needsPush())pushOnline(false);else pullOnline(false)});
  window.addEventListener('focus',function(){if(needsPush())pushOnline(false);else pullOnline(false)});
  document.addEventListener('visibilitychange',function(){
    if(document.visibilityState==='hidden'){saveLocal(false);if(needsPush())pushOnline(false)}
    if(document.visibilityState==='visible'){if(needsPush())pushOnline(false);else pullOnline(false)}
  });
  setInterval(function(){if(needsPush())pushOnline(false);else pullOnline(false)},45000);
  setTimeout(install,120);
  setTimeout(install,900);
  setTimeout(function(){if(needsPush())pushOnline(false);else pullOnline(false)},2200);
  if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
    navigator.serviceWorker.register('./sw.js?v='+VERSION).catch(function(){});
  }
})();

;(function(){
  if(window.__qlhcMobileLoginSyncLast20260721)return;
  window.__qlhcMobileLoginSyncLast20260721=true;
  var VERSION='20260721-mobile-login-sync-1';
  window.APP_VERSION=VERSION;

  function byId(id){return document.getElementById(id)}
  function cfg(){
    try{return typeof SUPABASE_CONFIG!=='undefined'?SUPABASE_CONFIG:(window.SUPABASE_CONFIG||{})}
    catch(e){return window.SUPABASE_CONFIG||{}}
  }
  function text(v){return String(v==null?'':v)}
  function norm(v){
    return text(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();
  }
  function getState(){
    try{
      if(typeof state!=='undefined'&&state)return state;
      return JSON.parse(localStorage.getItem('qlkho-state')||'{}')||{};
    }catch(e){return {}}
  }
  function setStateLocal(next){
    if(!next||typeof next!=='object')return;
    try{if(typeof migrateState==='function')next=migrateState(next)}catch(e){}
    try{state=next}catch(e){window.state=next}
    try{window.state=next}catch(e){}
    try{localStorage.setItem('qlkho-state',JSON.stringify(next))}catch(e){}
  }
  function ensureUsers(s){
    s=s||getState();
    if(!Array.isArray(s.users))s.users=[];
    var authUser='admin',authPass='admin123';
    try{
      var saved=JSON.parse(localStorage.getItem('qlkho-auth')||'{}')||{};
      authUser=text((window.auth&&auth.user)||saved.user||'admin').trim()||'admin';
      authPass=text((window.auth&&auth.pass)||saved.pass||'admin123');
    }catch(e){}
    if(!s.users.some(function(u){return norm(u&&u.username)===norm(authUser)})){
      s.users.unshift({username:authUser,password:authPass,name:'Quan tri vien',role:'Admin',active:true});
    }
    s.users.forEach(function(u){
      if(!u.username)u.username=u.name||'user';
      if(!u.name)u.name=u.username;
      if(!u.role)u.role='Nhan vien';
      if(typeof u.password==='undefined')u.password='';
      if(typeof u.active==='undefined')u.active=true;
    });
    return s.users;
  }
  function collectUsers(){
    var map={},out=[];
    function add(u){
      if(!u||u.active===false)return;
      var username=text(u.username||u.user||u.name).trim();
      if(!username)return;
      var key=norm(username);
      if(map[key])return;
      map[key]=true;
      out.push({
        username:username,
        password:text(u.password||u.pass),
        name:text(u.name||username),
        role:text(u.role||'Nhan vien'),
        active:u.active!==false
      });
    }
    try{ensureUsers(getState()).forEach(add)}catch(e){}
    try{var a=JSON.parse(localStorage.getItem('qlkho-auth')||'{}')||{};add({username:a.user||'admin',password:a.pass||'admin123',name:'Quan tri vien',role:'Admin',active:true})}catch(e){}
    try{if(window.auth)add({username:auth.user||'admin',password:auth.pass||'admin123',name:'Quan tri vien',role:'Admin',active:true})}catch(e){}
    add({username:'admin',password:'admin123',name:'Quan tri vien',role:'Admin',active:true});
    return out;
  }
  function findUser(list,user,pass){
    var u=norm(user),p=text(pass);
    return (list||[]).find(function(x){
      return x&&x.active!==false&&text(x.password)===p&&(norm(x.username)===u||norm(x.name)===u);
    })||null;
  }
  function mergeUsers(users){
    if(!Array.isArray(users)||!users.length)return;
    var s=getState();
    ensureUsers(s);
    users.forEach(function(u){
      if(!u||!u.username)return;
      var idx=s.users.findIndex(function(x){return norm(x&&x.username)===norm(u.username)});
      if(idx<0)s.users.push(u);
      else s.users[idx]=Object.assign({},s.users[idx],u);
    });
    setStateLocal(s);
  }
  function endpoint(){
    var c=cfg();
    if(!c.url||!c.anonKey)return '';
    return text(c.url).replace(/\/$/,'')+'/rest/v1/app_state?id=eq.'+encodeURIComponent(c.stateId||'qlhc-main');
  }
  function headers(){
    var key=(cfg()||{}).anonKey||'';
    return {apikey:key,Authorization:'Bearer '+key,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=representation'};
  }
  async function pullUsers(){
    var url=endpoint();
    if(!url||!window.fetch)return collectUsers();
    try{
      var res=await fetch(url,{method:'GET',headers:headers(),cache:'no-store'});
      if(!res.ok)throw new Error(await res.text());
      var rows=await res.json();
      if(rows&&rows[0]&&rows[0].data){
        var remote=rows[0].data;
        try{if(typeof migrateState==='function')remote=migrateState(remote)}catch(e){}
        if(Array.isArray(remote.users))mergeUsers(remote.users);
        var local=getState();
        if((!local.users||!local.users.length)&&remote&&remote.users)setStateLocal(remote);
      }
    }catch(e){
      try{localStorage.setItem('qlhc-login-sync-error',text(e&&e.message||e))}catch(_){}
    }
    return collectUsers();
  }
  function finish(found,pass,remember){
    window.currentUser=found;
    try{isLoggedIn=true}catch(e){window.isLoggedIn=true}
    sessionStorage.setItem('qlkho-login','1');
    sessionStorage.setItem('qlkho-user',found.username);
    if(remember)localStorage.setItem('qlhc-remember-login',JSON.stringify({user:found.username,pass:pass,remember:true}));
    else{
      localStorage.removeItem('qlhc-remember-login');
      if(byId('loginPass'))byId('loginPass').value='';
    }
    if(byId('loginError'))byId('loginError').textContent='';
    if(typeof showLogin==='function')showLogin();
    if(typeof render==='function')render();
  }
  window.login=async function(){
    var user=byId('loginUser')?byId('loginUser').value.trim():'';
    var pass=byId('loginPass')?byId('loginPass').value:'';
    var remember=!!(byId('loginRemember')&&byId('loginRemember').checked);
    if(!user||!pass){
      if(byId('loginError'))byId('loginError').textContent='Nhap tai khoan va mat khau.';
      return;
    }
    var btn=byId('loginBtn');
    if(btn){btn.disabled=true;btn.textContent='Dang kiem tra...'}
    if(byId('loginError'))byId('loginError').textContent='Dang tai tai khoan online...';
    try{
      var users=await pullUsers();
      var found=findUser(users,user,pass);
      if(found){finish(found,pass,remember);return}
      if(byId('loginError'))byId('loginError').textContent='Sai tai khoan hoac mat khau. Neu vua tao tai khoan tren may tinh, hay day du lieu online roi thu lai.';
    }finally{
      if(btn){btn.disabled=false;btn.textContent='Dang nhap'}
    }
  };
  window.bindAuth=function(){
    var saved=null;
    try{saved=JSON.parse(localStorage.getItem('qlhc-remember-login')||'null')}catch(e){saved=null}
    if(saved&&saved.remember){
      if(byId('loginUser'))byId('loginUser').value=saved.user||'';
      if(byId('loginPass'))byId('loginPass').value=saved.pass||'';
      if(byId('loginRemember'))byId('loginRemember').checked=true;
    }
    if(byId('loginRemember'))byId('loginRemember').onchange=function(){if(!this.checked)localStorage.removeItem('qlhc-remember-login')};
    if(byId('loginBtn'))byId('loginBtn').onclick=function(){window.login()};
    if(byId('loginUser'))byId('loginUser').onkeydown=function(e){if(e.key==='Enter')window.login()};
    if(byId('loginPass'))byId('loginPass').onkeydown=function(e){if(e.key==='Enter')window.login()};
  };
  function syncAfterAccountSave(){
    try{
      var s=getState();
      ensureUsers(s);
      setStateLocal(s);
      localStorage.setItem('qlhc-pending-online-sync','1');
    }catch(e){}
    setTimeout(function(){
      try{
        if(typeof window.__qlhcForceSaveAndSync==='function')window.__qlhcForceSaveAndSync(false);
        else if(typeof window.dayDuLieuOnlineSilent==='function')window.dayDuLieuOnlineSilent();
      }catch(e){}
    },500);
  }
  function wrapAccountSaves(){
    if(typeof window.saveUser==='function'&&!window.saveUser.__qlhcMobileLoginSyncLast20260721){
      var oldSaveUser=window.saveUser;
      window.saveUser=function(){
        var out=oldSaveUser.apply(this,arguments);
        syncAfterAccountSave();
        return out;
      };
      window.saveUser.__qlhcMobileLoginSyncLast20260721=true;
    }
    if(typeof window.saveBaoMat==='function'&&!window.saveBaoMat.__qlhcMobileLoginSyncLast20260721){
      var oldSaveBaoMat=window.saveBaoMat;
      window.saveBaoMat=function(){
        var out=oldSaveBaoMat.apply(this,arguments);
        syncAfterAccountSave();
        return out;
      };
      window.saveBaoMat.__qlhcMobileLoginSyncLast20260721=true;
    }
  }
  var previousRender=window.render;
  if(typeof previousRender==='function'&&!previousRender.__qlhcMobileLoginSyncLast20260721){
    window.render=function(){
      var out=previousRender.apply(this,arguments);
      setTimeout(function(){window.bindAuth();wrapAccountSaves()},80);
      return out;
    };
    window.render.__qlhcMobileLoginSyncLast20260721=true;
  }
  function boot(){try{ensureUsers(getState());setStateLocal(getState());window.bindAuth();wrapAccountSaves()}catch(e){}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  window.addEventListener('load',function(){setTimeout(boot,250);setTimeout(boot,1200)});
})();


