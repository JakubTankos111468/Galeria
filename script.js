var data={

    "images": [
        {
            "Img":"photos/pes.jpeg",
            "nazov": "Zámok Belvéder",
            "popis": "Pohľad na zámok vo viedni" ,
            "datum": "23.4.2021",
            "cas":"12:32",
            "GPS":"48.19166819116901, 16.380953655872624"
        },
        {
            "Img":"photos/macka.jpeg",
            "nazov": "Zámok Belvéder",
            "popis": "Pohľad na zámok vo viedni" ,
            "datum": "23.4.2021",
            "cas":"12:32",
            "GPS":"48.19166819116901, 16.380953655872624"
        },
        {
            "Img":"photos/zajac.jpeg",
            "nazov": "Zámok Belvéder",
            "popis": "Pohľad na zámok vo viedni" ,
            "datum": "23.4.2021",
            "cas":"12:32",
            "GPS":"48.19166819116901, 16.380953655872624"
        },
        {
            "Img":"photos/budapest1.jpg",
            "nazov": "Budapešť centrum",
            "popis": "Centrum mesta Budapešť" ,
            "datum": "4.8.2021",
            "cas":"10:53",
            "GPS":"47.5010602497734, 19.053851073783242"
        },
        {
            "Img":"photos/budapest2.jpg",
            "nazov": "Kostol",
            "popis": "Kostol v Budapešti" ,
            "datum": "4.8.2021",
            "cas":"13:01",
            "GPS":"47.50223169582447, 19.034070845920255"
        },
        {
            "Img":"photos/budapest3.jpg",
            "nazov": "Budapešť",
            "popis": "Budapešť pohľad zhora" ,
            "datum": "4.8.2021",
            "cas":"15:09",
            "GPS":"47.502684866533016, 19.034808774706722"
        },
        {
            "Img":"photos/rakusko.jpg",
            "nazov": "Neusiedl am See",
            "popis": "západ slnka a maják" ,
            "datum": "24.3.2022",
            "cas":"17:41",
            "GPS":"47.860546354958345, 16.82661381195935"
        },
        {
            "Img":"photos/rakusko2.jpg",
            "nazov": "Neusiedl am See",
            "popis": "západ slnka" ,
            "datum": "24.3.2022",
            "cas":"18:04",
            "GPS":"47.860546354958345, 16.82661381195935"
        },
        {
            "Img":"photos/valencia.jpg",
            "nazov": "Valencia",
            "popis": "pohľad na pamiatku vo valencii" ,
            "datum": "25.8.2022",
            "cas":"15:26",
            "GPS":"39.47251306893975, -0.3248727889897805"
        },
        {
            "Img":"photos/okruh.jpg",
            "nazov": "Slovakia ring",
            "popis": "Pohľad na slovenský okruh v Orechovej Potôni" ,
            "datum": "30.8.2022",
            "cas":"17:46",
            "GPS":"48.05394887107867, 17.569776944003603"
        }
    ]


};



var fotky = [];

for(let i=0;i<data.images.length;i++){
    fotky.push(data.images[i].Img);
}
var naz = [];
for(let i=0;i<data.images.length;i++){
    naz.push(data.images[i].nazov);
    
}
var pop = [];
for(let i=0;i<data.images.length;i++){
    pop.push(data.images[i].popis);
}
var dat = [];
for(let i=0;i<data.images.length;i++){
    dat.push(data.images[i].datum);
}


let counter = 0;

data.images.forEach( function(obj) {

    counter ++;
    var img = new Image();

    var a = document.createElement('a');
    a.setAttribute("data-fancybox", "gallery")
    a.setAttribute("data-src", fotky[counter-1])
    a.setAttribute("id", "obr" + counter + "_data")
    
    a.setAttribute("data-caption", naz[counter-1] +"<br></br>"+ pop[counter-1] + "\n" + dat[counter-1])
    a.setAttribute("name" , obj.nazov)

    img.src = obj.Img;
    img.setAttribute("class", "banner-img");

    img.style.width = "283px";
    img.style.height = "283px";
    img.style.margin = "10px";
    
    img.style.objectFit = "cover";
  
    for(let i=0; i<fotky.length;i++){
        document.getElementById("obr_p").appendChild(a);
        document.getElementById("obr" + counter + "_data").appendChild(img);

    }
  
  });

  function hladanie() {
  
}

  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("data/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
