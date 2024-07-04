function updateTimeAndDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('dayOfWeek').textContent = `Day: ${dayOfWeek}`;
    document.getElementById('currentTime').textContent = `Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimeAndDay, 1000);

updateTimeAndDay();
