(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(148),r=n(0),o=n.n(r),i=n(133),s=n.n(i),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error?s.a.error:"",c=n.touched&&n.error?"".concat(n.error):"write text";return o.a.createElement("div",{className:i},o.a.createElement("textarea",Object.assign({},r,t,{placeholder:c})))}},126:function(e,t,n){e.exports=n.p+"static/media/avaUsers.a0447fd5.jpg"},127:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(46),r=n(29);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var i={dialogs:[{id:1,name:"Dima"},{id:2,name:"Andrey"},{id:3,name:"Sveta"}],messages:[{id:1,message:"hi"},{id:2,message:"How are you"},{id:3,message:"Where are you from"}]},s=function(e){return{type:"SEND-MESSAGE",message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.message}])});default:return e}}},128:function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"d",function(){return p});var a=n(46),r=n(29),o=n(13);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c={users:[],portionSize:10,pageSize:16,totalUsersCount:0,currentPage:1,isFatching:!1,followingInProgress:[]},l=function(e){return{type:"set-is-fetching",isFetching:e}},u=function(e,t){return{type:"toggle-is-following-progress",isFetching:e,id:t}},m=function(e,t){return function(n){n(l(!0)),o.d.getUsers(e,t).then(function(t){n(function(e){return{type:"set-current-page",currentPage:e}}(e)),n({type:"set-users",users:t.items}),n({type:"set-total-users-count",totalUsersCount:t.totalCount}),n(l(!1))})}},f=function(e){return function(t){t(u(!0,e)),o.d.followUser(e).then(function(n){0===n.resultCode&&t({type:"follow",id:e}),t(u(!1,e))})}},p=function(e){return function(t){t(u(!0,e)),o.d.unfollowUser(e).then(function(n){0===n.resultCode&&t({type:"unfollow",id:e}),t(u(!1,e))})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"follow":return s({},e,{users:e.users.map(function(e){return e.id===t.id?s({},e,{followed:!0}):e})});case"unfollow":return s({},e,{users:e.users.map(function(e){return e.id===t.id?s({},e,{followed:!1}):e})});case"set-users":return s({},e,{users:t.users});case"set-current-page":return s({},e,{currentPage:t.currentPage});case"set-total-users-count":return s({},e,{totalUsersCount:t.totalUsersCount});case"set-is-fetching":return s({},e,{isFetching:t.isFetching});case"toggle-is-following-progress":return s({},e,{followingInProgress:t.isFetching?[].concat(Object(a.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter(function(e){return e!==t.id})});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return c});var a=n(131),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f53dd099-72b7-4054-a5d2-3f81640a958e"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t),{}).then(function(e){return e.data})},followUser:function(e){return r.post("follow/".concat(e),{}).then(function(e){return e.data})},unfollowUser:function(e){return r.delete("follow/".concat(e),{}).then(function(e){return e.data})}},i={getUserProfile:function(e){return r.get("profile/".concat(e)).then(function(e){return e.data})},editUserProfile:function(e,t,n,a,o){return r.put("profile/",{fullName:e,lookingForAJob:t,lookingForAJobDescription:n,aboutMe:a,contacts:o}).then(function(e){return e})},editUserPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e})},getStatus:function(e){return r.get("/profile/status/".concat(e)).then(function(e){return e.data})},updateStatus:function(e){return r.put("/profile/status",{status:e})}},s={getMyData:function(){return r.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("/auth/login")}},c={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},132:function(e,t,n){e.exports=n.p+"static/media/like.8be497a7.svg"},133:function(e,t,n){e.exports={error:"Form_error__2xy92"}},136:function(e,t,n){e.exports={loader:"Loader_loader__qWqvO"}},137:function(e,t,n){e.exports=n.p+"static/media/Spinner-1s-200px.b34c8640.svg"},139:function(e,t,n){e.exports=n.p+"static/media/statusImg.8d663662.svg"},140:function(e,t,n){e.exports=n.p+"static/media/group-users_icon.031b1d00.svg"},141:function(e,t,n){e.exports=n.p+"static/media/messages.d2280b20.svg"},142:function(e,t,n){e.exports=n.p+"static/media/user-shape.c281d5b2.svg"},143:function(e,t,n){e.exports=n.p+"static/media/alien.9be9eb10.svg"},144:function(e,t,n){e.exports=n.p+"static/media/settings.b0789dbe.svg"},145:function(e,t,n){e.exports=n.p+"static/media/login.71e812df.svg"},146:function(e,t,n){e.exports=n.p+"static/media/logout.9956934d.svg"},174:function(e,t,n){e.exports=n(300)},176:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length of symbol is ".concat(e)}}},299:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n(25),s=n(27),c=n(26),l=n(28),u=(n(176),n(32)),m=n(72),f=n.n(m),p=n(46),d=n(29),g=n(13),b=n(35);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v={posts:[{id:1,name:"Hennadii Petrov",post:" Hello how are you?",like:2},{id:2,name:"Ivan Golovchenko",post:" What's up world",like:3}],newPostText:"Java script",userProfile:null,status:"",editProfile:!1},P=function(e){return{type:"SET-STATUS",status:e}},O=function(e){return{type:"EDIT-PROFILE",done:e}},_=function(e){return function(t){g.b.getUserProfile(e).then(function(e){t({type:"SET-USER-PROFILE",userProfile:e})})}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={name:"Hennadii Petrov",post:t.post,like:0};return E({},e,{posts:[].concat(Object(p.a)(e.posts),[n]),newPostText:""});case"SET-USER-PROFILE":return E({},e,{userProfile:E({},t.userProfile,{},t.userProfile.contacts)});case"EDIT-PROFILE":return E({},e,{editProfile:t.done});case"SET-STATUS":return E({},e,{status:t.status});default:return e}},j=n(47),S=n.n(j),w=n(48),k=n.n(w),C=n(132),N=n.n(C),U=function(e){return r.a.createElement("div",{className:k.a.post},r.a.createElement("img",{src:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/25/1498216547-avatar-neytiri.jpg",alt:"ava",className:k.a.ava}),r.a.createElement("div",{className:k.a.name},e.name),r.a.createElement("div",{className:k.a.icon},r.a.createElement("img",{src:N.a,alt:"like"}),e.like),r.a.createElement("div",{className:k.a.textContent},e.post))},A=n(8),T=n(129),D=n(21),I=n(11),x=Object(D.a)(50),F=Object(T.a)({form:"sendPost"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:S.a.mainPost},r.a.createElement("div",{className:S.a.avaPost}),r.a.createElement(A.a,{component:I.a,placeholder:"post",name:"post",validate:[D.b,x]}),r.a.createElement("button",null,"Send post"))}),L=function(e){var t=e.posts.map(function(e){return r.a.createElement(U,{name:e.name,like:e.like,post:e.post,key:e.id})});return r.a.createElement("div",{className:S.a.postsArea},r.a.createElement(F,{onSubmit:function(t){e.addPostAC(t.post)}}),r.a.createElement("div",{className:S.a.postsList},t))},z=n(10),M=Object(z.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},{addPostAC:function(e){return{type:"ADD-POST",post:e}}})(L),R=n(126),H=n.n(R),J=n(42),G=n(7),B=n(66),W=n(95),Z=n.n(W),q=n(90),K=n(57),Y=n.n(K),V=n(139),Q=n.n(V),X=function(e){var t=Object(a.useState)(!1),n=Object(q.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)(e.status),c=Object(q.a)(s,2),l=c[0],u=c[1];return Object(a.useEffect)(function(){u(e.status)},[e.status]),r.a.createElement("div",{className:Y.a.statusContainer},r.a.createElement("img",{src:Q.a,alt:"status",className:Y.a.statusImg}),!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){i(!0)},className:Y.a.status},e.status||"status")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},value:l,onBlur:function(){i(!1),e.updateStatus(l)},className:Y.a.status})))},$=function(e){return r.a.createElement("div",{className:Z.a.info},r.a.createElement("div",null,r.a.createElement("b",null,"Name:")," ",e.userProfile.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"About me:")," ",e.userProfile.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:")," ",e.userProfile.lookingForAJob?"Yes":"No"),r.a.createElement("b",null,"Contacts:"),Object.keys(e.contacts).filter(function(t){if(null!==e.contacts[t]&&e.contacts[t].length>0)return t}).map(function(t){return r.a.createElement("div",{key:t,className:Z.a.contact},r.a.createElement("b",null,t,":")," ",e.contacts[t])}),r.a.createElement(X,{status:e.status,updateStatus:e.updateStatusThunkCreator}))},ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;this.props.getUserProfileThunkCreator(e),this.props.getStatusThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.userId;e.match.params.userId!==t&&this.refreshProfile()}},{key:"render",value:function(){return this.props.userProfile?r.a.createElement("main",{className:f.a.main},r.a.createElement("div",{className:f.a.bgImg}),r.a.createElement("aside",null,r.a.createElement("img",{src:this.props.userProfile.photos.large||H.a,className:f.a.ava,alt:"ava"}),r.a.createElement($,{contacts:this.props.userProfile.contacts,userProfile:this.props.userProfile,status:this.props.status,updateStatusThunkCreator:this.props.updateStatusThunkCreator})),r.a.createElement(M,null)):r.a.createElement(J.a,null)}}]),t}(r.a.Component),te=Object(G.d)(Object(z.b)(function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status}},{getUserProfileThunkCreator:_,getStatusThunkCreator:function(e){return function(t){g.b.getStatus(e).then(function(e){t(P(e))})}},updateStatusThunkCreator:function(e){return function(t){g.b.updateStatus(e).then(function(n){0===n.data.resultCode&&t(P(e))})}}}),u.f,B.a)(ee),ne=n(31),ae=n.n(ne),re=n(14),oe=n(140),ie=n.n(oe),se=n(141),ce=n.n(se),le=n(142),ue=n.n(le),me=n(143),fe=n.n(me),pe=n(144),de=n.n(pe),ge=n(145),be=n.n(ge),he=n(146),Ee=n.n(he),ve=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:ae.a.logo},r.a.createElement("img",{src:fe.a,alt:"logo",className:ae.a.icon})),r.a.createElement("nav",null,r.a.createElement(re.b,{to:"/profile/1428"},r.a.createElement("img",{src:ue.a,alt:"me",className:ae.a.icon})),r.a.createElement(re.b,{to:"/messages"},r.a.createElement("img",{src:ce.a,alt:"messages ",className:ae.a.icon})),r.a.createElement(re.b,{to:"/settings"},r.a.createElement("img",{src:de.a,alt:"settings",className:ae.a.icon})),r.a.createElement(re.b,{to:"/users"},r.a.createElement("img",{src:ie.a,alt:"users",className:ae.a.icon})),e.isAuth?r.a.createElement(re.b,{to:"/login"},r.a.createElement("img",{src:Ee.a,alt:"logout",className:ae.a.icon,onClick:function(){return e.logoutThunkCreator()}}),r.a.createElement("span",{className:ae.a.login},e.login)):r.a.createElement(re.b,{to:"/login"},r.a.createElement("img",{src:be.a,alt:"users",className:ae.a.icon}))))};function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _e={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ye=function(e,t,n,a){return{type:"SET-USER-DATA",data:{userId:e,email:t,login:n,isAuth:a}}},je=function(){return function(e){return g.a.getMyData().then(function(t){if(0===t.resultCode){var n=t.data,a=n.userId,r=n.email,o=n.login;e(ye(a,r,o,!0))}})}},Se=function(){return function(e){return g.c.getCaptchaUrl().then(function(t){var n=t.data.url;e(function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",captchaUrl:e}}(n))})}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Oe({},e,{},t.data);case"GET-CAPTCHA-URL-SUCCESS":return Oe({},e,{captchaUrl:t.captchaUrl});default:return e}},ke=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ve,{isAuth:this.props.isAuth,login:this.props.login,logoutThunkCreator:this.props.logoutThunkCreator})}}]),t}(r.a.Component),Ce=Object(z.b)(function(e){return{id:e.auth.id,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth}},{logoutThunkCreator:function(){return function(e){g.a.logout().then(function(t){0===t.data.resultCode&&e(ye(null,null,null,!1))})}}})(ke),Ne=n(56),Ue=n.n(Ne),Ae=Object(D.a)(30),Te=Object(T.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(A.a,{component:I.a,name:"email",placeholder:"Email",validate:[D.b,Ae]})),r.a.createElement("div",null,r.a.createElement(A.a,{component:I.a,name:"password",placeholder:"Password",validate:[D.b,Ae]})),r.a.createElement("div",null,r.a.createElement(A.a,{component:"input",name:"rememberMe",type:"checkbox"}),"Remember me"),e.captchaUrl&&r.a.createElement("img",{src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&r.a.createElement(A.a,{component:I.a,name:"captcha",placeholder:"Captcha"}),e.error&&r.a.createElement("div",{className:Ue.a.summeryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),De=Object(z.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{loginThunkCreator:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3?arguments[3]:void 0;return function(r){return console.log(e,t,n,a),g.a.login(e,t,n,a).then(function(e){if(0===e.data.resultCode)r(je()),console.log(e.data.resultCode);else{10===e.data.resultCode&&(console.log(e.data.resultCode),r(Se()));var t=e.data.messages.length>0?e.data.messages[0]:"Some error";r(Object(b.a)("login",{_error:t}))}})}}})(function(e){return e.isAuth?r.a.createElement(u.a,{to:"/profile/1428"}):r.a.createElement("main",{className:Ue.a.main},r.a.createElement("div",{className:Ue.a.form},r.a.createElement("h1",null,"Login"),r.a.createElement(Te,{onSubmit:function(t){e.loginThunkCreator(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})))});function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var xe={initializing:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{initializing:t.initializing});default:return e}},Le=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(J.a,null)},r.a.createElement(e,t))}},ze=n(9),Me=n.n(ze),Re=Object(T.a)({form:"settings"})(function(e){return r.a.createElement("form",{className:Me.a.settings,onSubmit:e.handleSubmit},r.a.createElement("div",{className:Me.a.mainInfo},r.a.createElement("div",null,"Full name: ",r.a.createElement("br",null),r.a.createElement(A.a,{component:I.a,name:"fullName",validate:[D.b]})),r.a.createElement("div",null,"Looking for a job: ",r.a.createElement("br",null),r.a.createElement(A.a,{component:"input",type:"checkbox",name:"lookingForAJob"})),r.a.createElement("input",{type:"file",name:"photo",id:"file",className:Me.a.inputfile,onChange:function(t){e.editUserPhotos(t.target.files[0])}}),r.a.createElement("label",{htmlFor:"file"},"Photo")),r.a.createElement("div",null,"About me: ",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.mainField,component:I.a,type:"input",name:"aboutMe",validate:[D.b]})),r.a.createElement("div",null,"Photo Url:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.mainField,component:I.a,type:"input",name:"small"})),r.a.createElement("div",null,"Job description: ",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.mainField,component:I.a,type:"input",name:"lookingForAJobDescription",validate:[D.b]})),r.a.createElement("div",{className:Me.a.contacts},r.a.createElement("div",null,"GitHub:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"github"})),r.a.createElement("div",null,"Vk:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"vk"})),r.a.createElement("div",null,"Facebook:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"facebook"})),r.a.createElement("div",null,"Instagram:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"instagram"})),r.a.createElement("div",null,"Twitter:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"twitter"})),r.a.createElement("div",null,"Website:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"website"})),r.a.createElement("div",null,"Youtube:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"youtube"})),r.a.createElement("div",null,"MainLink:",r.a.createElement("br",null),r.a.createElement(A.a,{className:Me.a.contact,component:I.a,name:"mainLink"}))),e.error&&r.a.createElement("div",{className:Me.a.summeryError},e.error),e.editProfile&&r.a.createElement("div",{className:Me.a.done},'"DONE"'),r.a.createElement("div",null,r.a.createElement("button",{className:Me.a.saveBtn},"Save")))}),He=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t=e.fullName,a=e.lookingForAJob,r=e.lookingForAJobDescription,o=e.aboutMe,i=e.github,s=e.vk,c=e.facebook,l=e.instagram,u=e.twitter,m=e.website,f=e.youtube,p=e.mainLink,d=e.photo;console.log(d);var g={github:i,vk:s,facebook:c,instagram:l,twitter:u,website:m,youtube:f,mainLink:p};n.props.editUserProfileThunkCreator(t,a,r,o,g)},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserProfileThunkCreator(1428)}},{key:"render",value:function(){return r.a.createElement("main",{className:Me.a.main},r.a.createElement(Re,{onSubmit:this.onSubmit,initialValues:this.props.userProfile,editProfile:this.props.editProfile,editUserPhotos:this.props.editUserPhoto}))}}]),t}(r.a.Component),Je=Object(G.d)(Object(z.b)(function(e){return{userProfile:e.profilePage.userProfile,editProfile:e.profilePage.editProfile}},{editUserProfileThunkCreator:function(e,t,n,a,r){return function(o){g.b.editUserProfile(e,t,n,a,r).then(function(e){if(0===e.data.resultCode)o(O(!0));else if(0!==e.data.resultCode){console.log(e);var t=e.data.messages.length>0?e.data.messages[0]:"";o(Object(b.a)("settings",{_error:t}))}})}},editProfileAC:O,getUserProfileThunkCreator:_,editUserPhoto:function(e){return function(){g.b.editUserPhoto(e).then(function(e){0===e.data.resultCode?console.log(e):0!==e.data.resultCode&&console.log(e)})}}}),u.f,B.a)(He),Ge=r.a.lazy(function(){return n.e(4).then(n.bind(null,306))}),Be=r.a.lazy(function(){return n.e(3).then(n.bind(null,305))}),We=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeAPPThunkCreator()}},{key:"render",value:function(){return this.props.initializing?r.a.createElement("div",{className:"wrapper"},r.a.createElement(Ce,null),r.a.createElement(u.b,{path:"/messages",render:Le(Ge)}),r.a.createElement(u.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(u.b,{path:"/users",render:Le(Be)}),r.a.createElement(u.b,{path:"/settings",render:Le(Je)}),r.a.createElement(u.b,{path:"/login",render:function(){return r.a.createElement(De,null)}})):r.a.createElement(J.a,null)}}]),t}(r.a.Component),Ze=Object(G.d)(u.f,Object(z.b)(function(e){return{initializing:e.app.initializing}},{initializeAPPThunkCreator:function(){return function(e){e(je()).then(function(){e({type:"INITIALIZED-SUCCESS",initializing:!0})})}}}))(We),qe=n(67),Ke=n.n(qe),Ye=(n(299),n(127)),Ve=n(128),Qe=n(147),Xe=n(130),$e=Object(G.c)({profilePage:y,messagesPage:Ye.a,usersPage:Ve.a,auth:we,form:Xe.a,app:Fe}),et=Object(G.e)($e,Object(G.a)(Qe.a));window.store=et;var tt=et;Ke.a.render(r.a.createElement(re.a,{basename:"/social_page_new"},r.a.createElement(z.a,{store:tt},r.a.createElement(Ze,{store:tt}))),document.getElementById("root"))},31:function(e,t,n){e.exports={icon:"Header_icon__3zFqL",logo:"Header_logo__y-PHs",login:"Header_login__2ngAy"}},42:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(136),i=n.n(o),s=n(137),c=n.n(s);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:c.a,alt:"louder",className:i.a.loader}))}},47:function(e,t,n){e.exports={postsArea:"Posts_postsArea__3-Duk",mainPost:"Posts_mainPost__py5_z",postsList:"Posts_postsList__1RFAn"}},48:function(e,t,n){e.exports={post:"Post_post__3myZ_",ava:"Post_ava__EBaL_",name:"Post_name__s40fw",icon:"Post_icon__3TP96",textContent:"Post_textContent__1-7o3"}},56:function(e,t,n){e.exports={main:"Login_main__13O-P",form:"Login_form__3ivFq",summeryError:"Login_summeryError__3tMp8"}},57:function(e,t,n){e.exports={statusContainer:"ProfileStatus_statusContainer__2OgCd",status:"ProfileStatus_status__2x_FO",statusImg:"ProfileStatus_statusImg__3t_Qe"}},66:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(24),r=n(25),o=n(27),i=n(26),s=n(28),c=n(0),l=n.n(c),u=n(32),m=n(10),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login"})}}]),n}(l.a.Component);return Object(m.b)(f)(t)}},72:function(e,t,n){e.exports={main:"Profile_main__1HwLm",bgImg:"Profile_bgImg__1TCgz",ava:"Profile_ava__1A2_W",postsArea:"Profile_postsArea__2-Q_j",mainPost:"Profile_mainPost__3jZUn",postsList:"Profile_postsList__2Jk8j",post:"Profile_post__bzzG0",name:"Profile_name__33f8P",textContent:"Profile_textContent__1_kes"}},9:function(e,t,n){e.exports={main:"Settings_main__f1esf",settings:"Settings_settings__KF1PP",mainInfo:"Settings_mainInfo__1_PUF",mainField:"Settings_mainField__3OLTU",contacts:"Settings_contacts__1adO0",inputfile:"Settings_inputfile__2Zf2V",summeryError:"Settings_summeryError__GkbUA",done:"Settings_done__25sUk",contact:"Settings_contact__1DKuR",saveBtn:"Settings_saveBtn__2KMWa"}},95:function(e,t,n){e.exports={info:"ProfileInfo_info__LfZzY",contact:"ProfileInfo_contact__1EoXl"}}},[[174,1,2]]]);
//# sourceMappingURL=main.9c59a0ce.chunk.js.map