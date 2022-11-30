 const submitbtn=document.getElementById('submitbtn');
 const cityname=document.getElementById('cityname');
 const city_name=document.getElementById('city_name');
 const temp_real_val=document.getElementById('temp_real_val');
 const temp_status=document.getElementById('temp_status');
 const datahide=document.querySelector('.middle_layer');



 


 

 const getInfo=async(event)=>{
    event.preventDefault();  ///dont have refresh
    let cityval=cityname.value;
   

    if(cityval === ""){
        city_name.innerText=`plz write name before the search`;
        datahide.classList.add('data_hide');


    }else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=15cae3b5639e90762d8414e31830ea90`
        const responce= await fetch(url);
            const data=await responce.json();
            const arrydata=[data];
            
            city_name.innerText=`${arrydata[0].name}, ${arrydata[0].sys.country}`;
            temp_real_val.innerText=arrydata[0].main.temp;
            
            // temp_status.innerText=arrydata[0].weather[0].main;
            // console.log(responce);

            const  tempmood=arrydata[0].weather[0].main;
            //condition to cheack sunny or cloudy
            if(tempmood == "Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color: #eccc68;'></i> ";
            }else if(tempmood == "Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i> ";
            }else if(tempmood == "Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i> ";
            }else{
                temp_status.innerHTML=
                "<i class='fas fa-cloud-sun' style='color: #eccc68;'></i> ";

            }
            datahide.classList.remove('data_hide');
            


        }catch{
        city_name.innerText=`plz enter the name properly`;
        datahide.classList.add('data_hide');

        }
    }

 }

 submitbtn.addEventListener('click',getInfo); 