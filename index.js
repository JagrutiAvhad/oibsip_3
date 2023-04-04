const calc=()=>
{
    let iptemp=document.getElementById("temp").value;
    const tempSelect = document.getElementById('diff');
    const valtemp = diff.options[tempSelect.selectedIndex].value;
    let res;
    let val=Number(iptemp);
  if(valtemp=="cel")
  {
    res=Math.floor(((val*1.8)+32))+"&#176;Farenite";
  }
  else if(valtemp=="cel1")
  {
    res=Math.floor((val+273.15))+"&#176;Kelvin";
  }
  else if(valtemp=="fah")
  {
     res=(Math.floor((val-32)*5/9))+"&#176;Celsius";
  }
  else if(valtemp=="fah1")
  {
     res=Math.floor((((val+459.67)*0.55)))+"&#176;Kelvin";
  }
  else if(valtemp=="kel")
  {
    res=Math.floor((val-273.15))+"&#176;Celsius";
  }
  else if(valtemp=="kel1")
  {
     res=Math.floor(((1.8*(val-273))+32))+"&#176;Farenite";
  }
  document.getElementById("result").innerHTML=res;
} 
  