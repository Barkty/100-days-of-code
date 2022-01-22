const fetchData = () => {
    fetch('data.json').then(function(res){
        console.log(res.json());
        res.json().then(function(data){
            console.log(data);
        });
    });

    const displayDaily = () => {
        document.getElementById('work').innerHTML = res;
    }
    var daily = document.getElementById('daily');
    daily.addEventListener('click', displayDaily)
}