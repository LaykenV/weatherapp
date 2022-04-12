(()=>{const e=document.querySelector("#cityinput"),t=document.querySelector("h2"),n=document.querySelector("h3"),o=document.querySelector(".weatherd"),c=document.querySelector(".hightemp"),r=document.querySelector(".lowtemp"),a=document.querySelector(".feelslike"),i=document.querySelector(".humidity"),u=document.querySelector("#btn"),l=document.querySelector(".farenheit"),d=document.querySelector(".celcius"),s=document.querySelector("#weatherpic");async function m(e){if(""!==e.value&&void 0!==e.value){const u=e.value,l=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${u}&limit=1&appid=7cca887bcacb1085e8fd6421b8128128`,{mode:"cors"}),m=await l.json(),h=await m[0].lon,y=await m[0].lat,p=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${y}&lon=${h}&units=imperial&appid=7cca887bcacb1085e8fd6421b8128128`,{mode:"cors"}),C=await p.json();console.log(C);const f=C.name;let g=Math.round(C.main.temp),w=Math.round(C.main.feels_like);const q=C.main.humidity;let b=Math.round(C.main.temp_max),S=Math.round(C.main.temp_min);const k=C.weather[0].main;"Rain"==k&&(s.src="../src/img/rain.png"),"Clouds"==k&&(s.src="../src/img/cloudy.png"),"Clear"==k&&(s.src="../src/img/clear.png");const v=C.sys.country;"honeydew"==d.style.backgroundColor&&(g=Math.round(farenheitToCelcius(g)),w=Math.round(farenheitToCelcius(w)),b=Math.round(farenheitToCelcius(b)),S=Math.round(farenheitToCelcius(S))),t.textContent=f+`, ${v}`,n.textContent=g+"°",o.textContent=k,c.textContent="H: "+b+"°",r.textContent="L: "+S+"°",a.textContent="Feels like "+w+"°",i.textContent="Humidity: "+q+"%"}}u.addEventListener("click",(function(t){""!==e.value&&m(e)})),d.addEventListener("click",(function(){l.style.backgroundColor="inherit",d.style.backgroundColor="honeydew",m(e)})),l.addEventListener("click",(function(){d.style.backgroundColor="inherit",l.style.backgroundColor="honeydew",m(e)})),farenheitToCelcius=function(e){return 5*(e-32)/9}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxNQUFNQSxFQUFZQyxTQUFTQyxjQUFjLGNBQ25DQyxFQUFrQkYsU0FBU0MsY0FBYyxNQUN6Q0UsRUFBY0gsU0FBU0MsY0FBYyxNQUNyQ0csRUFBaUJKLFNBQVNDLGNBQWMsYUFDeENJLEVBQWtCTCxTQUFTQyxjQUFjLGFBQ3pDSyxFQUFpQk4sU0FBU0MsY0FBYyxZQUN4Q00sRUFBbUJQLFNBQVNDLGNBQWMsY0FDMUNPLEVBQWtCUixTQUFTQyxjQUFjLGFBQ3pDUSxFQUFZVCxTQUFTQyxjQUFjLFFBQ25DUyxFQUFlVixTQUFTQyxjQUFjLGNBQ3RDVSxFQUFhWCxTQUFTQyxjQUFjLFlBQ3BDVyxFQUFhWixTQUFTQyxjQUFjLGVBUTFDWSxlQUFlQyxFQUFXQyxHQUN0QixHQUFvQixLQUFoQkEsRUFBTUMsWUFBZ0NDLElBQWhCRixFQUFNQyxNQUFxQixDQUNqRCxNQUFNRSxFQUFNSCxFQUFNQyxNQUNaRyxRQUFpQkMsTUFBTSxrREFBa0RGLG1EQUFzRCxDQUFDRyxLQUFNLFNBQ3RJQyxRQUFrQkgsRUFBU0ksT0FDM0JDLFFBQWdCRixFQUFVLEdBQUdHLElBQzdCQyxRQUFnQkosRUFBVSxHQUFHSyxJQUM3QkMsUUFBa0JSLE1BQU0sdURBQXVETSxTQUFlRiwwREFBaUUsQ0FBQ0gsS0FBTSxTQUN0S1EsUUFBb0JELEVBQVVMLE9BQ3BDTyxRQUFRQyxJQUFJRixHQUNaLE1BQU1HLEVBQVdILEVBQVlJLEtBQzdCLElBQUlDLEVBQU9DLEtBQUtDLE1BQU1QLEVBQVlRLEtBQUtILE1BQ25DSSxFQUFZSCxLQUFLQyxNQUFNUCxFQUFZUSxLQUFLRSxZQUM1QyxNQUFNQyxFQUFXWCxFQUFZUSxLQUFLRyxTQUNsQyxJQUFJQyxFQUFVTixLQUFLQyxNQUFNUCxFQUFZUSxLQUFLSyxVQUN0Q0MsRUFBVVIsS0FBS0MsTUFBTVAsRUFBWVEsS0FBS08sVUFDMUMsTUFBTUMsRUFBV2hCLEVBQVlpQixRQUFRLEdBQUdULEtBQ3hCLFFBQVpRLElBQ0FqQyxFQUFXbUMsSUFBTSx1QkFFTCxVQUFaRixJQUNBakMsRUFBV21DLElBQU0seUJBRUwsU0FBWkYsSUFDQWpDLEVBQVdtQyxJQUFNLHdCQUVyQixNQUFNQyxFQUFVbkIsRUFBWW9CLElBQUlELFFBQ1EsWUFBcENyQyxFQUFXdUMsTUFBTUMsa0JBQ2pCakIsRUFBT0MsS0FBS0MsTUFBTWdCLG1CQUFtQmxCLElBQ3JDSSxFQUFZSCxLQUFLQyxNQUFNZ0IsbUJBQW1CZCxJQUMxQ0csRUFBVU4sS0FBS0MsTUFBTWdCLG1CQUFtQlgsSUFDeENFLEVBQVVSLEtBQUtDLE1BQU1nQixtQkFBbUJULEtBRTVDekMsRUFBZ0JtRCxZQUFjckIsRUFBVyxLQUFLZ0IsSUFDOUM3QyxFQUFZa0QsWUFBY25CLEVBQU8sSUFDakM5QixFQUFlaUQsWUFBY1IsRUFDN0J4QyxFQUFnQmdELFlBQWMsTUFBUVosRUFBVSxJQUNoRG5DLEVBQWUrQyxZQUFjLE1BQVFWLEVBQVUsSUFDL0NwQyxFQUFpQjhDLFlBQWMsY0FBZ0JmLEVBQVksSUFDM0Q5QixFQUFnQjZDLFlBQWMsYUFBY2IsRUFBVyxLQTdDL0QvQixFQUFVNkMsaUJBQWlCLFNBQVMsU0FBU0MsR0FDYixLQUFwQnhELEVBQVVpQixPQUNWRixFQUFXZixNQStDdkJZLEVBQVcyQyxpQkFBaUIsU0FBUyxXQUNqQzVDLEVBQWF3QyxNQUFNQyxnQkFBa0IsVUFDckN4QyxFQUFXdUMsTUFBTUMsZ0JBQWtCLFdBQ25DckMsRUFBV2YsTUFHZlcsRUFBYTRDLGlCQUFpQixTQUFTLFdBQ25DM0MsRUFBV3VDLE1BQU1DLGdCQUFrQixVQUNuQ3pDLEVBQWF3QyxNQUFNQyxnQkFBa0IsV0FDckNyQyxFQUFXZixNQUdmcUQsbUJBQXFCLFNBQVNJLEdBQzFCLE9BQWtCLEdBQVZBLEVBQUksSUFBUSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlpbnB1dFwiKTtcbmNvbnN0IGNpdHlOYW1lRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcbmNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJkXCIpO1xuY29uc3QgaGlnaFRlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdodGVtcFwiKTtcbmNvbnN0IGxvd1RlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3d0ZW1wXCIpO1xuY29uc3QgZmVlbHNMaWtlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNsaWtlXCIpO1xuY29uc3QgaHVtaWRpdHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuXCIpO1xuY29uc3QgZmFyZW5oZWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXJlbmhlaXRcIik7XG5jb25zdCBjZWxjaXVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxjaXVzXCIpO1xuY29uc3Qgd2VhdGhlclBpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlcnBpY1wiKTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoY2l0eUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBnZXRXZWF0aGVyKGNpdHlJbnB1dCk7XG4gICAgICAgIH1cbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgaW5wdXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBpbnAgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2lucH0mbGltaXQ9MSZhcHBpZD03Y2NhODg3YmNhY2IxMDg1ZThmZDY0MjFiODEyODEyOGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgY29yZHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBsb25Db3JkID0gYXdhaXQgY29yZHNEYXRhWzBdLmxvbjtcbiAgICAgICAgY29uc3QgbGF0Q29yZCA9IGF3YWl0IGNvcmRzRGF0YVswXS5sYXQ7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRDb3JkfSZsb249JHtsb25Db3JkfSZ1bml0cz1pbXBlcmlhbCZhcHBpZD03Y2NhODg3YmNhY2IxMDg1ZThmZDY0MjFiODEyODEyOGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICAgICAgbGV0IHRlbXAgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gICAgICAgIGxldCBmZWVsc0xpa2UgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICAgICAgbGV0IHRlbXBNYXggPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpO1xuICAgICAgICBsZXQgdGVtcE1pbiA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbik7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJNID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgICAgICBpZiAod2VhdGhlck0gPT0gXCJSYWluXCIpIHtcbiAgICAgICAgICAgIHdlYXRoZXJQaWMuc3JjID0gXCIuLi9zcmMvaW1nL3JhaW4ucG5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdlYXRoZXJNID09IFwiQ2xvdWRzXCIpIHtcbiAgICAgICAgICAgIHdlYXRoZXJQaWMuc3JjID0gXCIuLi9zcmMvaW1nL2Nsb3VkeS5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlck0gPT0gXCJDbGVhclwiKSB7XG4gICAgICAgICAgICB3ZWF0aGVyUGljLnNyYyA9IFwiLi4vc3JjL2ltZy9jbGVhci5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG4gICAgICAgIGlmIChjZWxjaXVzQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcImhvbmV5ZGV3XCIpIHtcbiAgICAgICAgICAgIHRlbXAgPSBNYXRoLnJvdW5kKGZhcmVuaGVpdFRvQ2VsY2l1cyh0ZW1wKSk7XG4gICAgICAgICAgICBmZWVsc0xpa2UgPSBNYXRoLnJvdW5kKGZhcmVuaGVpdFRvQ2VsY2l1cyhmZWVsc0xpa2UpKTtcbiAgICAgICAgICAgIHRlbXBNYXggPSBNYXRoLnJvdW5kKGZhcmVuaGVpdFRvQ2VsY2l1cyh0ZW1wTWF4KSk7XG4gICAgICAgICAgICB0ZW1wTWluID0gTWF0aC5yb3VuZChmYXJlbmhlaXRUb0NlbGNpdXModGVtcE1pbikpO1xuICAgICAgICB9XG4gICAgICAgIGNpdHlOYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGNpdHlOYW1lICsgYCwgJHtjb3VudHJ5fWA7XG4gICAgICAgIHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gdGVtcCArIFwiwrBcIjtcbiAgICAgICAgd2VhdGhlckRpc3BsYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVyTTtcbiAgICAgICAgaGlnaFRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gXCJIOiBcIiArIHRlbXBNYXggKyBcIsKwXCI7XG4gICAgICAgIGxvd1RlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gXCJMOiBcIiArIHRlbXBNaW4gKyBcIsKwXCJcbiAgICAgICAgZmVlbHNMaWtlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiRmVlbHMgbGlrZSBcIiArIGZlZWxzTGlrZSArIFwiwrBcIjtcbiAgICAgICAgaHVtaWRpdHlEaXNwbGF5LnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTogXCIgK2h1bWlkaXR5ICsgXCIlXCI7XG4gICAgfVxufVxuXG5jZWxjaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBmYXJlbmhlaXRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XG4gICAgY2VsY2l1c0J0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhvbmV5ZGV3XCI7XG4gICAgZ2V0V2VhdGhlcihjaXR5SW5wdXQpO1xufSlcblxuZmFyZW5oZWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjZWxjaXVzQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgIGZhcmVuaGVpdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhvbmV5ZGV3XCI7XG4gICAgZ2V0V2VhdGhlcihjaXR5SW5wdXQpO1xufSlcblxuZmFyZW5oZWl0VG9DZWxjaXVzID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiAoeCAtIDMyKSAqIDUvOTtcbn0iXSwibmFtZXMiOlsiY2l0eUlucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2l0eU5hbWVEaXNwbGF5IiwidGVtcERpc3BsYXkiLCJ3ZWF0aGVyRGlzcGxheSIsImhpZ2hUZW1wRGlzcGxheSIsImxvd1RlbXBEaXNwbGF5IiwiZmVlbHNMaWtlRGlzcGxheSIsImh1bWlkaXR5RGlzcGxheSIsInN1Ym1pdEJ0biIsImZhcmVuaGVpdEJ0biIsImNlbGNpdXNCdG4iLCJ3ZWF0aGVyUGljIiwiYXN5bmMiLCJnZXRXZWF0aGVyIiwiaW5wdXQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImlucCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiY29yZHNEYXRhIiwianNvbiIsImxvbkNvcmQiLCJsb24iLCJsYXRDb3JkIiwibGF0IiwicmVzcG9uc2UyIiwid2VhdGhlckRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2l0eU5hbWUiLCJuYW1lIiwidGVtcCIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJ0ZW1wTWF4IiwidGVtcF9tYXgiLCJ0ZW1wTWluIiwidGVtcF9taW4iLCJ3ZWF0aGVyTSIsIndlYXRoZXIiLCJzcmMiLCJjb3VudHJ5Iiwic3lzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYXJlbmhlaXRUb0NlbGNpdXMiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIngiXSwic291cmNlUm9vdCI6IiJ9