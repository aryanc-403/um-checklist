(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(69),l=a(159),c=a(10),i=a(168),s=a(162),d=a(169),u=a(170),m=a(166),f=a(167),E=a(154),p=a(171),b=a(72),g=a(26),v=a.n(g);!function(e){e.VeryEasy="very-easy",e.Easy="easy",e.EasyMedium="easy-med",e.Medium="medium",e.Hard="hard",e.VeryHard="very-hard"}(n||(n={}));var y,k=[{episode:1,name:"Iroha and a Grid",link:"https://atcoder.jp/contests/abc042/tasks/arc058_b",difficulty:n.Easy,rating:1905,postedDate:"01/03/2023",videoLink:"",videoDate:"08/03/2023",uuid:"8d4b9dfc-58a2-410c-8537-b992586a30f7"},{episode:2,name:"Grid and Integers",link:"https://atcoder.jp/contests/code-festival-2016-quala/tasks/codefestival_2016_qualA_d",difficulty:n.Medium,rating:2684,postedDate:"01/03/2023",videoLink:"",videoDate:"09/03/2023",uuid:"95856b5e-6378-48fa-a2c7-cd02fa4dbf0c"},{episode:3,name:"Iroha Loves Strings",link:"https://atcoder.jp/contests/arc058/tasks/arc058_d",difficulty:n.Hard,rating:3678,postedDate:"01/03/2023",videoLink:"",videoDate:"10/03/2023",uuid:"8baa1fe9-6bf3-437b-9b90-87efce3642cd"},{episode:4,name:"BBQ Hard",link:"https://atcoder.jp/contests/agc001/tasks/agc001_e",difficulty:n.VeryHard,rating:3800,postedDate:"01/03/2023",videoLink:"",videoDate:"11/03/2023",uuid:"8b2302d2-71c3-452a-8a37-390c327581e5"},{episode:5,name:"Digit Sum",link:"https://atcoder.jp/contests/arc060/tasks/arc060_b",difficulty:n.EasyMedium,rating:2261,postedDate:"01/03/2023",videoLink:"",videoDate:"12/03/2023",uuid:"dea6d337-30a0-47f8-a05b-63d8eba64600"},{episode:6,name:"Tak and Cards",link:"https://atcoder.jp/contests/arc060/tasks/arc060_a",difficulty:n.VeryEasy,rating:1583,postedDate:"01/03/2023",videoLink:"",videoDate:"13/03/2023",uuid:"02519cfd-ffdd-4704-8417-dcaddb3088cc"},{episode:7,name:"Best Representation",link:"https://atcoder.jp/contests/arc060/tasks/arc060_d",difficulty:n.Medium,rating:2804,postedDate:"01/03/2023",videoLink:"",videoDate:"14/03/2023",uuid:"37c1de8b-edda-46c5-b8de-b82a11e2ac2e"}],O=Object.freeze(v.a.transform(k,function(e,t){return e[t.uuid]=t,e},{}));!function(e){e.UNSOLVED="Unsolved",e.SOLVED="Solved",e.TRYING="Trying",e.SKIPPED="Skipped",e.MINDSOLVED="Mindsolved"}(y||(y={}));var h,D,j,S,C={status:y.UNSOLVED},x=r.createContext({storageProblemsData:{},updateStorageProblemsData:function(e){}}),P=function(e){var t=e.children,a=r.useState({}),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.useCallback(function(e){l(e)},[l]);return r.useEffect(function(){var e=JSON.parse(localStorage.getItem("PROBLEM_DATA_PATH")||"{}");e&&l(e)},[]),r.useEffect(function(){localStorage.setItem("PROBLEM_DATA_PATH",JSON.stringify(o))},[o]),r.createElement(x.Provider,{value:{storageProblemsData:o,updateStorageProblemsData:i}},t)},L=r.createContext({problemsData:{},setProblemStatus:function(e,t){}}),V=function(e){var t=e.children,a=r.useContext(x),n=a.storageProblemsData,o=a.updateStorageProblemsData,l=r.useCallback(function(e,t){var a=v.a.cloneDeep(n),r=a[e]?a[e]:v.a.cloneDeep(C);r.status=t,a[e]=r,o(a)},[n,o]),c=r.useMemo(function(){return v.a.transform(Object.keys(O),function(e,t){var a=v.a.cloneDeep(O[t]),r=n[t]?v.a.cloneDeep(n[t]):v.a.cloneDeep(C);return e[t]=Object(b.a)({},a,r),e},{})},[O,n,C]);return r.createElement(L.Provider,{value:{problemsData:c,setProblemStatus:l}},t)},I=a(4),N=a(141),w=a(36),M=a(37),_=a(142),A=a(161),R=a(155),T=a(157),U=Object.freeze((h={},Object(I.a)(h,y.UNSOLVED,N.a[500]),Object(I.a)(h,y.TRYING,w.a[500]),Object(I.a)(h,y.SOLVED,M.a[500]),Object(I.a)(h,y.MINDSOLVED,M.a[500]),Object(I.a)(h,y.SKIPPED,_.a[500]),h)),B=Object.freeze((D={},Object(I.a)(D,y.UNSOLVED,y.TRYING),Object(I.a)(D,y.TRYING,y.SOLVED),Object(I.a)(D,y.SOLVED,y.MINDSOLVED),Object(I.a)(D,y.MINDSOLVED,y.SKIPPED),Object(I.a)(D,y.SKIPPED,y.UNSOLVED),D)),G=function(e){var t=e.status,a=e.onStatusChange;return r.createElement(R.a,{onClick:function(){a(B[t])}},r.createElement(T.a,{badgeContent:t,sx:{"& .MuiBadge-badge":{color:"white",backgroundColor:U[t]}}}))},H=a(75),J=a(39),F=a(38),K=a(147),Y=Object.freeze((j={},Object(I.a)(j,n.VeryEasy,H.a[600]),Object(I.a)(j,n.Easy,M.a.A700),Object(I.a)(j,n.EasyMedium,J.a.A700),Object(I.a)(j,n.Medium,F.a[700]),Object(I.a)(j,n.Hard,K.a.A400),Object(I.a)(j,n.VeryHard,K.a[900]),j)),z=function(e){var t=e.difficulty;return r.createElement(T.a,{badgeContent:t,sx:{"& .MuiBadge-badge":{color:"white",backgroundColor:Y[t],width:"70px"}},overlap:"circular"})},q=Object.freeze((S={},Object(I.a)(S,y.UNSOLVED,N.a[50]),Object(I.a)(S,y.TRYING,w.a[100]),Object(I.a)(S,y.SOLVED,M.a.A200),Object(I.a)(S,y.MINDSOLVED,M.a.A200),Object(I.a)(S,y.SKIPPED,_.a.A200),S)),Q=function(e){var t=e.episode,a=e.name,n=e.link,o=e.difficulty,l=e.rating,c=e.postedDate,i=e.videoLink,s=e.videoDate,d=e.uuid,u=e.status,E=r.useContext(L).setProblemStatus;return r.createElement(m.a,{key:d,sx:{backgroundColor:q[u]}},r.createElement(f.a,{component:"th",scope:"row",key:"episode"},t),r.createElement(f.a,{align:"right",key:"name"},a),r.createElement(f.a,{align:"right",key:"status"},r.createElement(G,{status:u,onStatusChange:function(e){E(d,e)}})),r.createElement(f.a,{align:"right",key:"link"},r.createElement(A.a,{href:n,target:"_blank",rel:"noreferrer noopener",color:"inherit"},n)),r.createElement(f.a,{align:"right",key:"level"},r.createElement(z,{difficulty:o})),r.createElement(f.a,{align:"right",key:"rating"},l),r.createElement(f.a,{align:"right",key:"postedDate"},c),r.createElement(f.a,{align:"right",key:"videoLink"},r.createElement(A.a,{href:i,target:"_blank",rel:"noreferrer noopener",color:"inherit"},i)),r.createElement(f.a,{align:"right",key:"videoDate"},s))},W=a(149),X=function(){var e=r.useContext(L).problemsData;return r.createElement(i.a,{component:s.a},r.createElement(d.a,{sx:{minWidth:650},"aria-label":"simple table"},r.createElement(u.a,{sx:{backgroundColor:W.a.A400}},r.createElement(m.a,null,r.createElement(f.a,null,"Episode"),r.createElement(f.a,{align:"right"},"Name"),r.createElement(f.a,{align:"right"},r.createElement(E.a,{title:"Click on problem status to change",placement:"top"},r.createElement("div",null,"Status"))),r.createElement(f.a,{align:"right"},"Link"),r.createElement(f.a,{align:"right"},"Level"),r.createElement(f.a,{align:"right"},"CF/Kenkoooo"),r.createElement(f.a,{align:"right"},"Posted"),r.createElement(f.a,{align:"right"},"Video"),r.createElement(f.a,{align:"right"},"Video Posted"))),r.createElement(p.a,null,Object.entries(e).sort(function(e,t){var a=Object(c.a)(e,2)[1].episode;return Object(c.a)(t,2)[1].episode-a}).map(function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return r.createElement(Q,Object.assign({},n,{key:a}))}))))},Z=a(46),$=a(165),ee=a(164),te=a(156),ae=a(81),ne=a.n(ae),re=a(82),oe=a.n(re),le=a(83),ce=a.n(le),ie=a(153),se={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},de=function(e){Object(Z.a)(e);var t=r.useContext(x).updateStorageProblemsData,a=r.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=function(){return l(!1)};return r.createElement("div",null,r.createElement(R.a,{onClick:function(){return l(!0)},color:"error",variant:"contained"},"Reset Progress",r.createElement(ne.a,null)),r.createElement(te.a,{open:o,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement($.a,{sx:se},r.createElement(ee.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Reset Progress"),r.createElement(ee.a,{id:"modal-modal-description",sx:{mt:2}},"Are you sure you want to reset all the progress?"),r.createElement($.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.createElement(R.a,{onClick:function(){t({}),i()},color:"error",variant:"contained"},r.createElement(ee.a,null,"Yes")),r.createElement(R.a,{onClick:i,color:"primary",variant:"contained"},r.createElement(ee.a,null,"No"))))))},ue=function(e){Object(Z.a)(e);var t=r.useContext(x).storageProblemsData;return r.createElement("div",null,r.createElement(R.a,{onClick:function(){var e={schema:"STORAGE_PROBLEM_DATA_SCHEMA_V1",data:t},a=JSON.stringify(e,null,2),n=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download="um-backup-v1.json",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)},color:"primary",variant:"contained"},"Backup Progress",r.createElement(oe.a,null)))},me=function(e){Object(Z.a)(e);var t=r.useContext(x).updateStorageProblemsData,a=r.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=function(){return l(!1)},s=r.useState(),d=Object(c.a)(s,2),u=d[0],m=d[1],f=function(e){if(e&&e.target&&"string"===typeof e.target.result){var a=JSON.parse(e.target.result).data;t(a),i()}};return r.createElement("div",null,r.createElement(R.a,{onClick:function(){return l(!0)},color:"secondary",variant:"contained"},"Import Progress",r.createElement(ce.a,null)),r.createElement(te.a,{open:o,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement($.a,{sx:se},r.createElement(ee.a,{id:"modal-modal-title",variant:"h6",component:"h2"},"Import Progress"),r.createElement(ee.a,{id:"modal-modal-description",sx:{mt:2}},"Please upload your progress backup."),r.createElement($.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},r.createElement("input",{type:"file",onChange:function(e){var t=e.target.files;t&&t.length>0&&m(t[0])},accept:"application/JSON"}),r.createElement("button",{onClick:function(){if(u){var e=new FileReader;e.onloadend=f,e.readAsText(u,"utf8")}}},"Upload")))))},fe=function(e){return Object(Z.a)(e),r.createElement($.a,{sx:{display:"flex",flexDirection:"row-reverse",backgroundColor:ie.a[200]}},r.createElement(de,null),r.createElement(me,null),r.createElement(ue,null))},Ee=a(172),pe=function(){return r.createElement(r.Fragment,null,r.createElement($.a,null,r.createElement(Ee.a,{position:"static",sx:{backgroundColor:ie.a[200]}},r.createElement(A.a,{href:"https://um-nik.notion.site/cff90514c6174afcb4ab8ff5dbb5b9a3?v=88948840b1494f18aea5535a6329a914",target:"_blank",rel:"noreferrer noopener",color:"inherit"},r.createElement(ee.a,{variant:"h3",component:"div",sx:{flexGrow:1,display:"flex",justifyContent:"center"}},"Um Checklist")))))},be=function(){return r.createElement(r.Fragment,null,r.createElement($.a,null,r.createElement(Ee.a,{position:"static",sx:{backgroundColor:ie.a[200]}},r.createElement(A.a,{href:"https://github.com/aryanc403/um-checklist",target:"_blank",rel:"noreferrer noopener",color:"inherit"},r.createElement(ee.a,{sx:{flexGrow:1,display:"flex",justifyContent:"center"}},"Github (MIT)")))))},ge=function(){return r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(P,null,r.createElement(fe,null),r.createElement(V,null,r.createElement(X,null))),r.createElement(be,null))},ve=function(){return r.createElement(r.Fragment,null,r.createElement(ge,null))},ye=a(84),ke=a(160),Oe=Object(ye.a)({palette:{primary:{main:"#006400"},secondary:{main:"#ffa500"},action:{active:J.a[200],activatedOpacity:1,hover:J.a[100],hoverOpacity:.7,focus:J.a[600],focusOpacity:1,selected:J.a[300],selectedOpacity:1}}}),he=function(e){var t=e.children;return r.createElement(ke.a,{theme:Oe},t)},De=document.getElementById("root");o.createRoot(De).render(r.createElement(he,null,r.createElement(l.a,null),r.createElement(ve,null)))},97:function(e,t,a){e.exports=a(110)}},[[97,1,2]]]);
//# sourceMappingURL=main.b0608315.chunk.js.map