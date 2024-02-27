
// 1. How to compare two JSON have the same properties without order?
// a. let obj1 = { name: "Person 1", age:5 };
// b. let obj2 = { age:5, name: "Person 1"};

let obj1 = { name: "Person 1", age:5 }; 
let obj2 = { age:5, name: "Person 1" }; 
keys1=Object.keys(obj1)
keys2=Object.keys(obj2)
let notmatching=0
for(i=0;i<keys1.length;i++){
    
if (obj1[keys1[i]]==obj2[keys1[i]]){
    
    if(notmatching==0){
    console.log('obj1 and obj2 have the same properties')
}
else{
    console.log('obj1 and obj2 does not have the same properties')
}

}
}

// 2. Display all the flags in the console

let xhr =new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log( typeof xhr.responseText)
        var data = JSON.parse(xhr.responseText);
      
        for (i = 0 ; i < data.length ; i++){
            console.log(data[i]['name']['official'], '=>',data[i]['flags']['png'])
          
            console.log('-----------------------------------------------------------------------------------------------------------------')

        }
    }
}
xhr.send()




// 3. Use the same rest countries and print all countries names, regions, sub-region and populations

let xhr =new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log( typeof xhr.responseText)
        var data = JSON.parse(xhr.responseText);
      
        for (i = 0 ; i < data.length ; i++){
            console.log('country_name :' , data[i]['name']['official'])
            console.log('region :' , data[i]['region'])
            console.log('subregion :' ,data[i]['subregion'])
            console.log('population :' , data[i]['population'])
            console.log('________________________________________________________________________________________')

        }
    }
}
xhr.send()
