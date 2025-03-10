const dateFormatter= (timeMatch)=>{

let formattedTime;
   if(timeMatch){

    const timeValue = parseInt(timeMatch[1],10); // 1 saat geri
    const timeUnit=timeMatch[2];
    //Şuanki zamandan belirtilen saat/dakika/gün kadar geri git 
    let pastTime;

    if (timeUnit === "hour") {
        pastTime = moment().subtract(timeValue, 'hours');
    } else if (timeUnit === "minute") {
        pastTime = moment().subtract(timeValue, 'minutes');
    } else if (timeUnit === "day") {
        pastTime = moment().subtract(timeValue, 'days');
    }



    // Türkiye için zaman formatı: "3 gün once"
    formattedTime = pastTime.locale("tr").fromNow();
   }
    return formattedTime;
};
export {dateFormatter};

