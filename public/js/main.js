const cityname =document.getElementById('cityname');
const submitBtn=document.getElementById('temp');
const error_msg=document.getElementById('error_msg');

const temp_deg=document.getElementById('temp_deg');
const temp_status=document.getElementById('temp_status');
const city_name=document.getElementById('city_name');

const hide_class=document.querySelector('.hide-class');

const getInfo = async(event) =>{
    event.preventDefault();

    let url ="https://api.openweathermap.org/data/2.5/weather?q=pune&appid=ba89043dd036926b8ce46e19d022ae67";
    let cityVal=cityname.value;
    if(cityVal=="")
    { 
        error_msg.innerText=`Plz Wirte City Name For Result`;
        hide_class.classList.add('hide');
    }
    else{
       
        try{

            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ba89043dd036926b8ce46e19d022ae67`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData= [data]; //convert json object into array
            console.log(arrData);

            city_name.innerText=`${arrData[0]['name']} , ${arrData[0]['sys']['country']}`;
            temp_deg.innerText=arrData[0]['main']['temp'];
            //temp_status.innerText=arrData[0]['weather'][0]['main'];
             
            const temstatus=arrData[0]['weather'][0]['main'];
            if(temstatus == "Clear"){
    
                temp_status.innerHTML='<i class="fa fa-sun" style="color: yellow"></i>';
    
            }else if(temstatus == "Clouds"){
                
                temp_status.innerHTML='<i class="fa fa-cloud" style="color: #193abe"></i>';
    
            }else if(temstatus == "Rainy"){
    
                temp_status.innerHTML='<i class="fa fa-rain" style="color: #a4b0be"></i>';
    
            }else{
                temp_status.innerHTML='<i class="fa fa-cloud" style="color: #193abe"></i>';
            }
            
            hide_class.classList.remove('hide');
            error_msg.innerText="";

        }
        catch{
            error_msg.innerText=`Plz Enter City Name Properly`;
            hide_class.classList.add('hide');
        }
        
    }
  
};

submitBtn.addEventListener('click',getInfo);