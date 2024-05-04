function createCard(title, cName, views, monthOld, duration, thumbnail){
    let view
    if (views<1000)
        view = views;
    
    else if(views>=1000000){
        view = views/ 1000000 + "M"
    }
    else{
        view = views/ 1000 + "K"
    }
    let html = `<div class="card">
    <div class="img">
        <img src="${thumbnail}"
            alt="Loading Error">
        <p>${duration}</p>
    </div>
    <div>
        <h3>${title}</h3>
        <div class="text">
            <p>${cName}</p>
            <p>• ${view} views</p>
            <p>• ${monthOld} months ago</p>
        </div>
    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      createCard(item.title, item.cName, item.views, item.monthOld, item.duration, item.thumbnail);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));




createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A")