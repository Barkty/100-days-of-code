var result;

fetch('data.json').then(function(res){
    //console.log(res.json());
    res.json().then(function(data){
        console.log(data);
        result = data;
        console.log(result);
        return result
    });
});

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
        
    }
    var daily = document.getElementById('daily');
    daily.addEventListener('click', displayDaily);

    const displayWeekly = () => {
        
    }
    var week = document.getElementById('daily');
    week.addEventListener('click', displayWeekly);
}