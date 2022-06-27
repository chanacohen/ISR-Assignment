window.onload = () => {

    let new_div_list=[];
    citiesDataList.forEach( obj => {
    new_div_list.push("<div class=\"view_item\">");    
    new_div_list.push("<div class=\"vi_left\">"+"<img src=\"" + obj.picturePath + "\"" +"alt=\"" + obj.cityName + "\">"+"</div>");
    new_div_list.push("<div class=\"vi_right\">"+ "<p class=title>" + obj.cityName + "</p>" + "\n" +
                                                  "<p class=content>" + obj.Description + "</p>" +
                                                  "<div id=\"" + obj.cityName + " Button\"" + "class=\"btn\">View Map</div>"           
    + "</div></div>")
    })

    $('#citiesGenerator').html(new_div_list.join(""))



    const jerusalemMapDiv = document.getElementById("jerusalem_map");
    jerusalemMapDiv.style.display = "none";
    const jerusalemBtn = document.getElementById("Jerusalem Button");
    jerusalemBtn.onclick = function () {
        generateJerusalemMap();
        if (jerusalemMapDiv.style.display !== "none") {
            jerusalemMapDiv.style.display = "none";
        } else {
            jerusalemMapDiv.style.display = "block";
            document.getElementById("london_map").style.display = "none";
            document.getElementById("new_york_map").style.display = "none";
            document.getElementById("sydney_map").style.display = "none";

        }
    }

    const londonMapDiv = document.getElementById("london_map");
    londonMapDiv.style.display = "none";
    const londonBtn = document.getElementById("London Button");
    londonBtn.onclick = function () {
        generateLondonMap();
        if (londonMapDiv.style.display !== "none") {
            londonMapDiv.style.display = "none";
        } else {
            londonMapDiv.style.display = "block";
            document.getElementById("jerusalem_map").style.display = "none";
            document.getElementById("new_york_map").style.display = "none";
            document.getElementById("sydney_map").style.display = "none";
        }
    }

    const NyMapDiv = document.getElementById("new_york_map");
    NyMapDiv.style.display = "none";
    const NyBtn = document.getElementById("New York Button");
    NyBtn.onclick = function () {
        generateNewYorkMap();
        if (NyMapDiv.style.display !== "none") {
            NyMapDiv.style.display = "none";
        } else {
            NyMapDiv.style.display = "block";
            document.getElementById("jerusalem_map").style.display = "none";
            document.getElementById("london_map").style.display = "none";
            document.getElementById("sydney_map").style.display = "none";
        }
    }

    const SydneyMapDiv = document.getElementById("sydney_map");
    SydneyMapDiv.style.display = "none";
    const SydneyBtn = document.getElementById("Sydney Button");
    SydneyBtn.onclick = function () {
        generateSydneyMap();
        if (SydneyMapDiv.style.display !== "none") {
            SydneyMapDiv.style.display = "none";
        } else {
            SydneyMapDiv.style.display = "block";
            document.getElementById("jerusalem_map").style.display = "none";
            document.getElementById("london_map").style.display = "none";
            document.getElementById("new_york_map").style.display = "none";
        }
    }
    
}

