(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),r=n.n(a),i=n(3),s=n(0),o=Object(c.createContext)();function d(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],d=Object(c.useState)([]),j=Object(i.a)(d,2),l=j[0],h=j[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;fetch("http://api.weatherapi.com/v1/forecast.json?key=56411f6296174712af881712212508&q=".concat(t,",").concat(n,"&days=3&aqi=no&alerts=no")).then((function(e){return e.json()})).then((function(e){return h(Object(s.jsxs)("div",{className:"weatherContainer",children:[Object(s.jsxs)("div",{className:"currentWeatherInfo",children:[Object(s.jsxs)("p",{children:[e.location.name,", ",e.location.country," "]}),Object(s.jsx)("img",{src:e.current.condition.icon,alt:e.current.condition.text}),Object(s.jsxs)("p",{children:[e.current.condition.text,", ",e.current.temp_c,"\xb0C"]})]}),Object(s.jsx)("div",{className:"nextWetherContainer",children:e.forecast.forecastday.map((function(e,t){return Object(s.jsxs)("div",{className:"nextWeather",children:[Object(s.jsx)("img",{src:e.day.condition.icon,alt:e.day.condition.text}),Object(s.jsx)("p",{className:"itemDateNext",children:e.date}),Object(s.jsxs)("p",{className:"itemInfoC",children:["M: ",Math.round(e.day.maxtemp_c),"\xb0C"]}),Object(s.jsxs)("p",{className:"itemInfoC",children:["L: ",Math.round(e.day.mintemp_c),"\xb0C"]})]},t)}))})]}))}))}))}),[]),Object(s.jsx)(o.Provider,{value:{query:a,weather:l,handleChange:function(e){r(e.target.value)},handleSubmit:function(e){e.preventDefault(),""!==a&&fetch("http://api.weatherapi.com/v1/forecast.json?key=56411f6296174712af881712212508&q=".concat(a,"&days=3&aqi=no&alerts=no")).then((function(e){return e.json()})).then((function(e){return h(Object(s.jsxs)("div",{className:"weatherContainer",children:[Object(s.jsxs)("div",{className:"currentWeatherInfo",children:[Object(s.jsxs)("p",{children:[e.location.name,", ",e.location.country," "]}),Object(s.jsx)("img",{src:e.current.condition.icon,alt:e.current.condition.text}),Object(s.jsxs)("p",{children:[e.current.condition.text,", ",e.current.temp_c,"\xb0C"]})]}),Object(s.jsx)("div",{className:"nextWetherContainer",children:e.forecast.forecastday.map((function(e,t){return Object(s.jsxs)("div",{className:"nextWeather",children:[Object(s.jsx)("img",{src:e.day.condition.icon,alt:e.day.condition.text}),Object(s.jsx)("p",{className:"itemDateNext",children:e.date}),Object(s.jsxs)("p",{className:"itemInfoC",children:["M: ",Math.round(e.day.maxtemp_c),"\xb0C"]}),Object(s.jsxs)("p",{className:"itemInfoC",children:["L: ",Math.round(e.day.mintemp_c),"\xb0C"]})]},t)}))})]}))}))}},children:e.children})}var j=function(){var e=Object(c.useContext)(o),t=e.query,n=e.handleChange,a=e.handleSubmit,r=e.weather;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("form",{onSubmit:a,children:[Object(s.jsx)("input",{value:t,type:"text",placeholder:"e.g. London",onChange:n}),Object(s.jsx)("button",{children:"Search"})]}),r]})};var l=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(j,{})})};r.a.render(Object(s.jsx)(d,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9a0a07f5.chunk.js.map