"use strict";(self.webpackChunksocial_network_2_0=self.webpackChunksocial_network_2_0||[]).push([[168],{7206:function(e,s,n){n.r(s),n.d(s,{default:function(){return z}});var r=n(1413),t=n(5987),i=n(2791),a=n(3531),u=n(946),o={body:"users_body__-BLVu",container:"users_container__RRpHr",loader:"users_loader__PL0bF",caption:"users_caption__6HU2o",user:"users_user__ld3FI",info:"users_info__Ifeob",img:"users_img__oo3NV",button:"users_button__rj23l",text:"users_text__eD+Sj",text_left:"users_text_left__ZTIi3",status:"users_status__L7El2",text_right:"users_text_right__SOqul",currentPage:"users_currentPage__H4nOx",page:"users_page__eXsMC",pages:"users_pages__j-EGn"},c=n(1304),l=n(9439),_="paginator_currentPage__IkbnI",d="paginator_page__Lj5-p",f="paginator_pages__CjnSq",g="paginator_button__WkUc1",x=n(184),h=["totalUsersCount","portionSize"],m=function(e){for(var s=e.totalUsersCount,n=e.portionSize,r=(0,t.Z)(e,h),a=Math.ceil(s/r.pageSize),u=[],o=1;o<=a;o++)u.push(o);var c=(0,i.useState)(1),m=(0,l.Z)(c,2),j=m[0],p=m[1],N=Math.ceil(a/n),b=(j-1)*n+1,v=j*n;return(0,x.jsxs)("div",{className:f,children:[j>1?(0,x.jsx)("button",{onClick:function(){return p(j-1)},className:g,children:"Prev."}):(0,x.jsx)("button",{disabled:"none",className:g,children:"Prev."}),u.filter((function(e){return e>=b&&e<=v})).map((function(e){return(0,x.jsx)("span",{onClick:function(){return r.onPageChanget(e)},className:r.currentPage===e?_:d,children:e})})),j<N?(0,x.jsx)("button",{onClick:function(){return p(j+1)},className:g,children:"Next"}):(0,x.jsx)("button",{disabled:"none",className:g,children:"Next"})]})},j=n.p+"static/media/images.0dcc677ee495d94ed17e.jfif",p=n(1087),N=function(e){var s=e.user,n=e.followUnfollowUserTC,r=e.followingInProgress;return(0,x.jsxs)("div",{className:o.user,children:[(0,x.jsxs)("div",{className:o.info,children:[(0,x.jsx)(p.OL,{to:"/profile/"+s.id,children:(0,x.jsx)("img",{src:null!=s.photos.small?s.photos.small:j,alt:"smile",className:o.img})}),s.followed?(0,x.jsx)("button",{disabled:r.some((function(e){return e===s.id})),className:o.button,onClick:function(){n(s.id,!1)},children:"FOLLOW"}):(0,x.jsx)("button",{disabled:r.some((function(e){return e===s.id})),className:o.button,onClick:function(){n(s.id,!0)},children:"UNFOLLOW"})]}),(0,x.jsxs)("div",{className:o.text,children:[(0,x.jsxs)("div",{className:o.text_left,children:[(0,x.jsx)("div",{className:o.name,children:s.name}),(0,x.jsx)("div",{className:o.status,children:s.status})]}),(0,x.jsxs)("div",{className:o.text_right,children:[(0,x.jsx)("div",{className:o.country,children:"user.location.country"}),(0,x.jsx)("div",{className:o.city,children:"user.location.city"})]})]})]},s.id)},b=["users"],v=function(e){var s=e.users,n=(0,t.Z)(e,b);return(0,x.jsx)("div",{className:o.body,children:(0,x.jsxs)("div",{className:o.container,children:[(0,x.jsx)("div",{className:o.caption,children:"Users"}),(0,x.jsx)("div",{className:o.loader,children:n.isFetching?(0,x.jsx)(c.Z,{}):null}),(0,x.jsx)(m,(0,r.Z)({},n)),(0,x.jsx)("div",{className:o.users,children:s.map((function(e){return(0,x.jsx)(N,(0,r.Z)((0,r.Z)({},n),{},{user:e}))}))})]})})},C=function(e){return e.users.users},P=function(e){return e.users.pageSize},U=function(e){return e.users.totalUsersCount},k=function(e){return e.users.currentPage},w=function(e){return e.users.isFetching},S=function(e){return e.users.followingInProgress},Z=function(e){return e.users.portionSize},L=["getUsersTC","setCurrentPage"],z=(0,a.$j)((function(e){return{users:C(e),pageSize:P(e),totalUsersCount:U(e),currentPage:k(e),isFetching:w(e),followingInProgress:S(e),portionSize:Z(e)}}),{followUnfollowUserTC:u.ML,setCurrentPage:u.D4,getUsersTC:u.Zw})((function(e){var s=e.getUsersTC,n=e.setCurrentPage,a=(0,t.Z)(e,L);(0,i.useEffect)((function(){return s(a.currentPage,a.pageSize)}),[]);return(0,x.jsx)(v,(0,r.Z)((0,r.Z)({},a),{},{onPageChanget:function(e){n(e),s(e,a.pageSize)}}))}))}}]);
//# sourceMappingURL=168.00306158.chunk.js.map