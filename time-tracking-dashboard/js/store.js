var result;

fetch('data.json').then(function(res){
    res.json().then(function(data){
        result = data;
        return result
    });
});

var activeDay = '';
var activeWeek = '';
var activeMon = '';

const fetchData = () => {

    const displayDaily = () => {
        document.getElementById('work').innerHTML = result[0]['timeframes']['daily']['current'] + 'hrs';
        document.getElementById('workPrev').innerHTML = "Last week - " + result[0]['timeframes']['daily']['previous'] + 'hrs';
        document.getElementById('play').innerHTML = result[1]['timeframes']['daily']['current'] + 'hrs';
        document.getElementById('playPrev').innerHTML = "Last week - " + result[1]['timeframes']['daily']['previous'] + 'hrs';
        document.getElementById('study').innerHTML = result[2]['timeframes']['daily']['current'] + 'hrs';
        document.getElementById('studyPrev').innerHTML = "Last week - " + result[2]['timeframes']['daily']['previous'] + 'hrs';
        document.getElementById('exercise').innerHTML = result[3]['timeframes']['daily']['current'] + 'hrs';
        document.getElementById('exercisePrev').innerHTML = "Last week - " + result[3]['timeframes']['daily']['previous'] + 'hrs';
        document.getElementById('social').innerHTML = result[4]['timeframes']['daily']['current'] + 'hrs';
        document.getElementById('socialPrev').innerHTML = "Last week - " + result[4]['timeframes']['daily']['previous'] + 'hrs';
        document.getElementById('selfcare').innerHTML = result[5]['timeframes']['daily']['current'] + 'hrs';
        document.getElementById('selfcarePrev').innerHTML = "Last week - " + result[5]['timeframes']['daily']['previous'] + 'hrs';
        
        if (activeDay == 'day') {
            document.getElementById('daily').style.color = 'hsl(236, 100%, 87%)';
            //console.log(activeDay);
        } else {
            document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
        }
    }
    var daily = document.getElementById('daily');
    daily.addEventListener('click', displayDaily, activeDay = 'day');

    const displayWeekly = () => {
        document.getElementById('work').innerHTML = result[0]['timeframes']['weekly']['current'] + 'hrs';
        document.getElementById('workPrev').innerHTML = "Last week - " + result[0]['timeframes']['weekly']['previous'] + 'hrs';
        document.getElementById('play').innerHTML = result[1]['timeframes']['weekly']['current'] + 'hrs';
        document.getElementById('playPrev').innerHTML = "Last week - " + result[1]['timeframes']['weekly']['previous'] + 'hrs';
        document.getElementById('study').innerHTML = result[2]['timeframes']['weekly']['current'] + 'hrs';
        document.getElementById('studyPrev').innerHTML = "Last week - " + result[2]['timeframes']['weekly']['previous'] + 'hrs';
        document.getElementById('exercise').innerHTML = result[3]['timeframes']['weekly']['current'] + 'hrs';
        document.getElementById('exercisePrev').innerHTML = "Last week - " + result[3]['timeframes']['weekly']['previous'] + 'hrs';
        document.getElementById('social').innerHTML = result[4]['timeframes']['weekly']['current'] + 'hrs';
        document.getElementById('socialPrev').innerHTML = "Last week - " + result[4]['timeframes']['weekly']['previous'] + 'hrs';
        document.getElementById('selfcare').innerHTML = result[5]['timeframes']['weekly']['current'] + 'hrs';
        document.getElementById('selfcarePrev').innerHTML = "Last week - " + result[5]['timeframes']['weekly']['previous'] + 'hrs';

        if (activeWeek == 'weekly') {
            document.querySelector('#weekly').style.color = 'hsl(236, 100%, 87%)';
            //console.log(activeWeek);
        } else {
            document.querySelector('#weekly').style.color = 'hsl(235, 45%, 61%)';
        }
    }
    var week = document.getElementById('weekly');
    week.addEventListener('click', displayWeekly, activeWeek = 'weekly');

    const displayMonthly = () => {
        document.getElementById('work').innerHTML = result[0]['timeframes']['monthly']['current'] + 'hrs';
        document.getElementById('workPrev').innerHTML = "Last week - " + result[0]['timeframes']['monthly']['previous'] + 'hrs';
        document.getElementById('play').innerHTML = result[1]['timeframes']['monthly']['current'] + 'hrs';
        document.getElementById('playPrev').innerHTML = "Last week - " + result[1]['timeframes']['monthly']['previous'] + 'hrs';
        document.getElementById('study').innerHTML = result[2]['timeframes']['monthly']['current'] + 'hrs';
        document.getElementById('studyPrev').innerHTML = "Last week - " + result[2]['timeframes']['monthly']['previous'] + 'hrs';
        document.getElementById('exercise').innerHTML = result[3]['timeframes']['monthly']['current'] + 'hrs';
        document.getElementById('exercisePrev').innerHTML = "Last week - " + result[3]['timeframes']['monthly']['previous'] + 'hrs';
        document.getElementById('social').innerHTML = result[4]['timeframes']['monthly']['current'] + 'hrs';
        document.getElementById('socialPrev').innerHTML = "Last week - " + result[4]['timeframes']['monthly']['previous'] + 'hrs';
        document.getElementById('selfcare').innerHTML = result[5]['timeframes']['monthly']['current'] + 'hrs';
        document.getElementById('selfcarePrev').innerHTML = "Last week - " + result[5]['timeframes']['monthly']['previous'] + 'hrs';

        if (activeMon == 'month') {
            document.querySelector('#month').style.color = 'hsl(236, 100%, 87%)';
            //console.log(activeMon);
        } else {
            document.querySelector('#month').style.color = 'hsl(235, 45%, 61%)';
        }
    }
    var month = document.getElementById('month');
    month.addEventListener('click', displayMonthly, activeMon = 'month');
}