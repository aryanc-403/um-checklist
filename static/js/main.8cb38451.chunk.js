(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{86:function(e,t,a){e.exports=a(99)},99:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(61),c=a(144),l=a(12),i=a(152),s=a(147),d=a(153),u=a(154),m=a(150),f=a(151),p=a(155),b=a(64),E=a(25),g=a.n(E);!function(e){e.VeryEasy="very-easy",e.Easy="easy",e.EasyMedium="easy-med",e.Medium="medium",e.Hard="hard",e.VeryHard="very-hard"}(n||(n={}));var v,y=[{episode:1,name:"Iroha and a Grid",link:"https://atcoder.jp/contests/abc042/tasks/arc058_b",difficulty:n.Easy,rating:1905,postedDate:"01/03/2023",videoLink:"",videoDate:"08/03/2023",uuid:"8d4b9dfc-58a2-410c-8537-b992586a30f7"},{episode:2,name:"Grid and Integers",link:"https://atcoder.jp/contests/code-festival-2016-quala/tasks/codefestival_2016_qualA_d",difficulty:n.Medium,rating:2684,postedDate:"01/03/2023",videoLink:"",videoDate:"09/03/2023",uuid:"95856b5e-6378-48fa-a2c7-cd02fa4dbf0c"},{episode:3,name:"Iroha Loves Strings",link:"https://atcoder.jp/contests/arc058/tasks/arc058_d",difficulty:n.Hard,rating:3678,postedDate:"01/03/2023",videoLink:"",videoDate:"10/03/2023",uuid:"8baa1fe9-6bf3-437b-9b90-87efce3642cd"},{episode:4,name:"BBQ Hard",link:"https://atcoder.jp/contests/agc001/tasks/agc001_e",difficulty:n.VeryHard,rating:6e3,postedDate:"01/03/2023",videoLink:"",videoDate:"11/03/2023",uuid:"8b2302d2-71c3-452a-8a37-390c327581e5"},{episode:5,name:"Digit Sum",link:"https://atcoder.jp/contests/arc060/tasks/arc060_b",difficulty:n.EasyMedium,rating:2261,postedDate:"01/03/2023",videoLink:"",videoDate:"12/03/2023",uuid:"dea6d337-30a0-47f8-a05b-63d8eba64600"},{episode:6,name:"Tak and Cards",link:"https://atcoder.jp/contests/arc060/tasks/arc060_a",difficulty:n.VeryEasy,rating:1583,postedDate:"01/03/2023",videoLink:"",videoDate:"13/03/2023",uuid:"02519cfd-ffdd-4704-8417-dcaddb3088cc"},{episode:7,name:"Best Representation",link:"https://atcoder.jp/contests/arc060/tasks/arc060_d",difficulty:n.Medium,rating:2804,postedDate:"01/03/2023",videoLink:"",videoDate:"14/03/2023",uuid:"37c1de8b-edda-46c5-b8de-b82a11e2ac2e"}],k=Object.freeze(g.a.transform(y,function(e,t){return e[t.uuid]=t,e},{}));!function(e){e.UNSOLVED="Unsolved",e.SOLVED="Solved",e.TRYING="Trying",e.SKIPPED="Skipped"}(v||(v={}));var O,h,D,j,S={status:v.UNSOLVED},C=r.createContext({storageProblemsData:{},updateStorageProblemsData:function(e){}}),P=function(e){var t=e.children,a=r.useState({}),n=Object(l.a)(a,2),o=n[0],c=n[1],i=r.useCallback(function(e){c(e)},[c]);return r.useEffect(function(){var e=JSON.parse(localStorage.getItem("PROBLEM_DATA_PATH")||"{}");e&&c(e)},[]),r.useEffect(function(){localStorage.setItem("PROBLEM_DATA_PATH",JSON.stringify(o))},[o]),r.createElement(C.Provider,{value:{storageProblemsData:o,updateStorageProblemsData:i}},t)},x=r.createContext({problemsData:{},setProblemStatus:function(e,t){}}),L=function(e){var t=e.children,a=r.useContext(C),n=a.storageProblemsData,o=a.updateStorageProblemsData,c=r.useCallback(function(e,t){var a=g.a.cloneDeep(n),r=a[e]?a[e]:g.a.cloneDeep(S);r.status=t,a[e]=r,o(a)},[n,o]),l=r.useMemo(function(){return g.a.transform(Object.keys(k),function(e,t){var a=g.a.cloneDeep(k[t]),r=n[t]?g.a.cloneDeep(n[t]):g.a.cloneDeep(S);return e[t]=Object(b.a)({},a,r),e},{})},[k,n,S]);return r.createElement(x.Provider,{value:{problemsData:l,setProblemStatus:c}},t)},w=a(4),V=a(126),_=a(32),A=a(33),I=a(127),N=a(146),R=a(140),M=a(143),T=Object.freeze((O={},Object(w.a)(O,v.UNSOLVED,V.a[500]),Object(w.a)(O,v.TRYING,_.a[500]),Object(w.a)(O,v.SOLVED,A.a[500]),Object(w.a)(O,v.SKIPPED,I.a[500]),O)),U=Object.freeze((h={},Object(w.a)(h,v.UNSOLVED,v.TRYING),Object(w.a)(h,v.TRYING,v.SOLVED),Object(w.a)(h,v.SOLVED,v.SKIPPED),Object(w.a)(h,v.SKIPPED,v.UNSOLVED),h)),B=function(e){var t=e.status,a=e.onStatusChange;return r.createElement(R.a,{onClick:function(){a(U[t])}},r.createElement(M.a,{badgeContent:t,sx:{"& .MuiBadge-badge":{color:"white",backgroundColor:T[t]}}}))},H=a(67),G=a(35),J=a(34),K=a(133),Y=Object.freeze((D={},Object(w.a)(D,n.VeryEasy,H.a[600]),Object(w.a)(D,n.Easy,A.a.A700),Object(w.a)(D,n.EasyMedium,G.a.A700),Object(w.a)(D,n.Medium,J.a[700]),Object(w.a)(D,n.Hard,K.a.A400),Object(w.a)(D,n.VeryHard,K.a[900]),D)),z=function(e){var t=e.difficulty;return r.createElement(M.a,{badgeContent:t,sx:{"& .MuiBadge-badge":{color:"white",backgroundColor:Y[t],width:"70px"}},overlap:"circular"})},F=Object.freeze((j={},Object(w.a)(j,v.UNSOLVED,V.a[50]),Object(w.a)(j,v.TRYING,_.a[100]),Object(w.a)(j,v.SOLVED,A.a.A200),Object(w.a)(j,v.SKIPPED,I.a.A200),j)),q=function(e){var t=e.episode,a=e.name,n=e.link,o=e.difficulty,c=e.rating,l=e.postedDate,i=e.videoLink,s=e.videoDate,d=e.uuid,u=e.status,p=r.useContext(x).setProblemStatus;return r.createElement(m.a,{key:d,sx:{backgroundColor:F[u]}},r.createElement(f.a,{component:"th",scope:"row",key:"episode"},t),r.createElement(f.a,{align:"right",key:"name"},a),r.createElement(f.a,{align:"right",key:"status"},r.createElement(B,{status:u,onStatusChange:function(e){p(d,e)}})),r.createElement(f.a,{align:"right",key:"link"},r.createElement(N.a,{href:n,target:"_blank",rel:"noreferrer noopener",color:"inherit"},n)),r.createElement(f.a,{align:"right",key:"level"},r.createElement(z,{difficulty:o})),r.createElement(f.a,{align:"right",key:"rating"},c),r.createElement(f.a,{align:"right",key:"postedDate"},l),r.createElement(f.a,{align:"right",key:"videoLink"},r.createElement(N.a,{href:i,target:"_blank",rel:"noreferrer noopener",color:"inherit"},i)),r.createElement(f.a,{align:"right",key:"videoDate"},s))},Q=a(135),W=function(){var e=r.useContext(x).problemsData;return r.createElement(i.a,{component:s.a},r.createElement(d.a,{sx:{minWidth:650},"aria-label":"simple table"},r.createElement(u.a,{sx:{backgroundColor:Q.a.A400}},r.createElement(m.a,null,r.createElement(f.a,null,"Episode"),r.createElement(f.a,{align:"right"},"Name"),r.createElement(f.a,{align:"right"},"Status"),r.createElement(f.a,{align:"right"},"Link"),r.createElement(f.a,{align:"right"},"Level"),r.createElement(f.a,{align:"right"},"CF/Kenkoooo"),r.createElement(f.a,{align:"right"},"Posted"),r.createElement(f.a,{align:"right"},"Video"),r.createElement(f.a,{align:"right"},"Video Posted"))),r.createElement(p.a,null,Object.entries(e).sort(function(e,t){var a=Object(l.a)(e,2)[1].episode;return Object(l.a)(t,2)[1].episode-a}).map(function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return r.createElement(q,Object.assign({},n,{key:a}))}))))},X=a(43),Z=a(149),$=a(148),ee=a(139),te=a(72),ae=a.n(te),ne=a(74),re=a.n(ne),oe=a(75),ce=a.n(oe),le=a(138),ie={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},se=function(e){Object(X.a)(e);var t=r.useContext(C).updateStorageProblemsData,a=r.useState(!1),n=Object(l.a)(a,2),o=n[0],c=n[1],i=function(){return c(!1)};return r.createElement("div",null,r.createElement(R.a,{onClick:function(){return c(!0)},color:"error",variant:"contained"},"Reset Progress",r.createElement(ae.a,null)),r.createElement(ee.a,{open:o,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(Z.a,{sx:ie},r.createElement($.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Reset Progress"),r.createElement($.a,{id:"modal-modal-description",sx:{mt:2}},"Are you sure you want to reset all the progress?"),r.createElement(Z.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.createElement(R.a,{onClick:function(){t({}),i()},color:"error",variant:"contained"},r.createElement($.a,null,"Yes")),r.createElement(R.a,{onClick:i,color:"primary",variant:"contained"},r.createElement($.a,null,"No"))))))},de=function(e){Object(X.a)(e);var t=r.useContext(C).storageProblemsData;return r.createElement("div",null,r.createElement(R.a,{onClick:function(){var e={schema:"STORAGE_PROBLEM_DATA_SCHEMA_V1",data:t},a=JSON.stringify(e,null,2),n=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download="um-backup-v1.json",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)},color:"primary",variant:"contained"},"Backup Progress",r.createElement(re.a,null)))},ue=function(e){Object(X.a)(e);var t=r.useContext(C).updateStorageProblemsData,a=r.useState(!1),n=Object(l.a)(a,2),o=n[0],c=n[1],i=function(){return c(!1)},s=r.useState(),d=Object(l.a)(s,2),u=d[0],m=d[1],f=function(e){if(e&&e.target&&"string"===typeof e.target.result){var a=JSON.parse(e.target.result).data;t(a),i()}};return r.createElement("div",null,r.createElement(R.a,{onClick:function(){return c(!0)},color:"secondary",variant:"contained"},"Import Progress",r.createElement(ce.a,null)),r.createElement(ee.a,{open:o,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(Z.a,{sx:ie},r.createElement($.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Import Progress"),r.createElement($.a,{id:"modal-modal-description",sx:{mt:2}},"Please upload your progress backup."),r.createElement(Z.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.createElement("input",{type:"file",onChange:function(e){var t=e.target.files;t&&t.length>0&&m(t[0])},accept:"application/JSON"}),r.createElement("button",{onClick:function(){if(u){var e=new FileReader;e.onloadend=f,e.readAsText(u,"utf8")}}},"Upload")))))},me=function(e){return Object(X.a)(e),r.createElement(Z.a,{sx:{display:"flex",flexDirection:"row-reverse",backgroundColor:le.a[200]}},r.createElement(se,null),r.createElement(ue,null),r.createElement(de,null))},fe=a(156),pe=function(){return r.createElement(r.Fragment,null,r.createElement(Z.a,null,r.createElement(fe.a,{position:"static",sx:{backgroundColor:le.a[200]}},r.createElement(N.a,{href:"https://um-nik.notion.site/cff90514c6174afcb4ab8ff5dbb5b9a3?v=88948840b1494f18aea5535a6329a914",target:"_blank",rel:"noreferrer noopener",color:"inherit"},r.createElement($.a,{variant:"h3",component:"div",sx:{flexGrow:1,display:"flex",justifyContent:"center"}},"Um Checklist")))))},be=function(){return r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(P,null,r.createElement(me,null),r.createElement(L,null,r.createElement(W,null))))},Ee=function(){return r.createElement(r.Fragment,null,r.createElement(be,null))},ge=a(76),ve=a(145),ye=Object(ge.a)({palette:{primary:{main:"#006400"},secondary:{main:"#ffa500"},action:{active:G.a[200],activatedOpacity:1,hover:G.a[100],hoverOpacity:.7,focus:G.a[600],focusOpacity:1,selected:G.a[300],selectedOpacity:1}}}),ke=function(e){var t=e.children;return r.createElement(ve.a,{theme:ye},t)},Oe=document.getElementById("root");o.createRoot(Oe).render(r.createElement(ke,null,r.createElement(c.a,null),r.createElement(Ee,null)))}},[[86,1,2]]]);
//# sourceMappingURL=main.8cb38451.chunk.js.map