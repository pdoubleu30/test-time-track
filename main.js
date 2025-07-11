
const fetchJson = async () => {
  try {
    let response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Oops! Something went wrong.');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log('Error fetching or parsing JSON');
    //returning null or an empty object/array in case of error
    return null;
  }

};


// Get all elements with the class 'updateTime'
const containers = document.querySelectorAll('.updateTime'); 

const renderCards = async (timeframe) => {
    const fetchedData = await fetchJson(); 

    if (fetchedData) { // Check if data was fetched successfully
  
        containers.forEach(container => {  /*Iterate through each container */ 
        
        const activity = container.dataset.activity;
        const relevantAct= fetchedData.find(item => item.title === activity);

        container.innerHTML = ''; //Clear existing content for each container
          
         if (relevantAct && timeframe ==='daily') {
          const card = document.createElement('div');
                card.className = 'card';
                const current = relevantAct.timeframes[timeframe].current;
                const previous = relevantAct.timeframes[timeframe].previous;
                card.innerHTML = `
                    <p class="hours">${current}hrs</p>
                    <p class="prior">Yesterday - ${previous}hrs</p>
                `;
                container.appendChild(card); 
         } else if (relevantAct && timeframe ==='weekly') {
          const card = document.createElement('div');
                card.className = 'card';
                const current = relevantAct.timeframes[timeframe].current;
                const previous = relevantAct.timeframes[timeframe].previous;
                card.innerHTML = `
                    <p class="hours">${current}hrs</p>
                    <p class="prior">Last Week - ${previous}hrs</p>
                `;
                container.appendChild(card); 
         } else if (relevantAct && timeframe ==='monthly') {
          const card = document.createElement('div');
                card.className = 'card';
                const current = relevantAct.timeframes[timeframe].current;
                const previous = relevantAct.timeframes[timeframe].previous;
                card.innerHTML = `
                    <p class="hours">${current}hrs</p>
                    <p class="prior">Last Month - ${previous}hrs</p>
                `;
                container.appendChild(card); 
         };

        });
    }
};

const buttons = document.querySelectorAll('.timeframe-button');
buttons.forEach(button => {
  button.addEventListener('click', (e) =>{
    const timeframe = e.target.dataset.timeframe;
    renderCards(timeframe);
  })
});

fetchJson();
renderCards('daily');

