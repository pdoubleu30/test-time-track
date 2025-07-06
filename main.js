//testing


const renderData = (timeframe) => {
    const section = document.getElementById('updateTime');
    section.innerHTML = ''; //clears prior content
    const activity = obj;

    activity.forEach(item =>{
        const title = item.title;
        const timeframes = item.timeframes;
        const current = timeframes[timeframe].current;
        const previous = timeframes[timeframe].previous;
    

/*
    for (const act of activity) { */
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");

        myPara1.textContent = `${current}`;
        myPara2.textContnt = `Yesterday + '' + '-' +${previous}`;

        /*
        myPara1.textContent = activity.timeframes.daily.current;
        myPara2.textContent = `Yesterday +'' +'-' +${activity.timeframes.daily.previous}`;
        */


    section.appendChild(myPara1);
    section.appendChild(myPara2);
});
}

document.querySelectorAll('#buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const timeframe = button.id;
        renderData(timeframe);
    });
});

//inital load with data
renderData('weekly');
