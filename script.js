//creating req var
var request =new XMLHttpRequest();
//open the request
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//request send
request.send();
//load the responce
request.onload = function (){
    var data=JSON.parse(this.response)
    for(i=0;i<data.length;i++)
    {
        console.log(data[i].name,":", data[i].flag)
    }
}