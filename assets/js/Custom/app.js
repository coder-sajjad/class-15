
/**
 *  Custom Arro USe JS For Clock
 */
//  All Elements Custom Arrow JS
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

// All Elements Google Image Arrow JS
const twoSec =document.querySelector('.twoSec');
const twoMin =document.querySelector('.twoMin');
const twoHour =document.querySelector('.twoHour');


    setInterval(() => {
        let time = new Date();
        let currnet_sec = time.getSeconds();
        let currnet_min = time.getMinutes();
        let currnet_hour = time.getHours();

        // Custom Arrow JS
        second.style.transform = `rotate(${ timeArrow(60, currnet_sec ) }deg)`;
        minute.style.transform = `rotate(${ timeArrow(60, currnet_min ) }deg)`;
        hour.style.transform = `rotate(${ timeArrow(12, currnet_hour ) }deg)`;

        // Google arrow JS
        twoSec.style.transform = `rotate(${ timeArrow(60, currnet_sec) }deg)`;
        twoMin.style.transform = `rotate(${ timeArrow(60, currnet_min) }deg)`;
        twoHour.style.transform = `rotate(${ timeArrow(12, currnet_hour) }deg)`;

     
    }, 1000);
    

/**
 *  Google Image Use JS For Clock
 */


    


/**
 *  Instant Data Change
 */
// ALL Elements
const skills = document.querySelectorAll('.skills');
const skillShow = document.querySelector('.skillShow');

// ForEach Function for Skills
skills.forEach(allData => {
    
    allData.addEventListener('change', function(){

        let skill = document.querySelectorAll('.skills:checked');
        
        // Arrow Push for skillArrow
        let skillArrow = [];
        skill.forEach( data => {
            skillArrow.push(data.value);
        })
        
        // Map for skillList
        let skillList = '';
        skillArrow.map( data => {
            skillList += `<li class="list-group-item">${data}</li>`;
        })
        
        skillShow.innerHTML = skillList;
        
    })

});


/**
 *  Calculator JS
 */
// Get value
let valueArr = [];
let getvalue = (value) => {
    valueArr.push(value)

    document.querySelector('.topMmonitor').innerHTML = valueArr.join('');
    document.querySelector('.bottomMonitor').innerHTML = '0';

};

// allclear function
let allclear = () => {
    valueArr = [];
    document.querySelector('.topMmonitor').innerHTML = 0;
    document.querySelector('.bottomMonitor').innerHTML = '';

}

// back function
let back = () => {
    valueArr.pop();
    document.querySelector('.topMmonitor').innerHTML = valueArr.join('');
}

// Result show
let finalresult = () => {

    let stringJoin = valueArr.join('')
    document.querySelector('.bottomMonitor').innerHTML = eval(stringJoin);

}
