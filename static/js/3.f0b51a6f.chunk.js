(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(e,n,t){e.exports={user:"User_user__1I6UE",ava:"User_ava__3WMNz",userAva:"User_userAva__3WZVM",name:"User_name__31Hgo",status:"User_status__3SCjh",location:"User_location__2ZZJm",button:"User_button__loLmy"}},303:function(e,n,t){e.exports={main:"Users_main__204kg"}},304:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__2eZTF",page:"Paginator_page__j-V1l",paginator:"Paginator_paginator__1uX1a"}},305:function(e,n,t){"use strict";t.r(n);var r=t(24),a=t(25),o=t(27),s=t(26),u=t(28),l=t(0),i=t.n(l),c=t(302),p=t.n(c),g=t(126),f=t.n(g),h=t(14),m=function(e){return i.a.createElement("div",{className:p.a.user,key:e.id},i.a.createElement("div",{className:p.a.ava},i.a.createElement(h.b,{to:"/profile/"+e.id},i.a.createElement("img",{src:null!=e.ava.small?e.ava.small:f.a,alt:"ava",className:p.a.userAva}))),e.followed?i.a.createElement("button",{className:p.a.button,onClick:function(){e.unfollowThunkCreator(e.id)},disabled:e.followingInProgress.some(function(n){return n===e.id})},"Unfollow"):i.a.createElement("button",{className:p.a.button,onClick:function(){e.followUserThunkCreator(e.id)},disabled:e.followingInProgress.some(function(n){return n===e.id})},"Follow"),i.a.createElement("div",{className:p.a.name},e.namne),i.a.createElement("div",{className:p.a.status},e.status),i.a.createElement("div",{className:p.a.location},i.a.createElement("p",null,e.country),i.a.createElement("p",null,e.city)))},d=t(303),v=t.n(d),P=t(90),w=t(304),C=t.n(w),_=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),t=[],r=1;r<n;r++)t.push(r);var a=Math.ceil(n/e.portionSize),o=Object(l.useState)(1),s=Object(P.a)(o,2),u=s[0],c=s[1],p=(u-1)*a+1,g=u*a;return i.a.createElement("div",{className:C.a.paginator},u>1&&i.a.createElement("button",{onClick:function(){c(u-1)}},"Previous"),t.filter(function(e){return e>=p&&e<=g}).map(function(n){return i.a.createElement("span",{className:e.currentPage===n?C.a.selectedPage:C.a.page,key:n,onClick:function(){e.onPageChanged(n)}}," ",n)}),a>u&&i.a.createElement("button",{onClick:function(){c(u+1)}},"Next"))},k=function(e){return i.a.createElement("main",{className:v.a.main},i.a.createElement(_,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage,portionSize:e.portionSize}),e.users.map(function(n){return i.a.createElement(m,{name:n.name,ava:n.photos,status:n.status,country:"u.location.country",city:"u.location.city",id:n.id,followed:n.followed,unfollowThunkCreator:e.unfollowThunkCreator,followUserThunkCreator:e.followUserThunkCreator,followingInProgress:e.followingInProgress,key:n.id})}))},y=t(10),U=t(42),b=t(128),E=t(66),S=t(7);function z(e,n){return e===n}var T=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,s=r.pop(),u=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(e){return"function"===typeof e})){var t=n.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}(r),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(t)),i=e(function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return l.apply(null,e)});return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,t=null,r=null;return function(){return function(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}});var N=T(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),j=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalUsersCount},F=function(e){return e.usersPage.currentPage},O=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},x=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(u)))).onPageChanged=function(e){t.props.getUsersThunkCreator(e,t.props.pageSize)},t}return Object(u.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(U.a,null):null,i.a.createElement(k,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,currentPage:this.props.currentPage,unfollowThunkCreator:this.props.unfollowThunkCreator,followUserThunkCreator:this.props.followUserThunkCreator,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,setIsFollowingProgress:this.props.setIsFollowingProgress,portionSize:this.props.portionSize}))}}]),n}(i.a.Component);n.default=Object(S.d)(Object(y.b)(function(e){return{users:N(e),pageSize:j(e),totalUsersCount:I(e),currentPage:F(e),isFetching:O(e),followingInProgress:A(e),portionSize:e.usersPage.portionSize}},{getUsersThunkCreator:b.c,followUserThunkCreator:b.b,unfollowThunkCreator:b.d}),E.a)(x)}}]);
//# sourceMappingURL=3.f0b51a6f.chunk.js.map