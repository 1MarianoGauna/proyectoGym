const info = 'info.json';

$('#butom').ready(()=>{
    $.getJSON(info, function(respuesta, estado){
        if(estado === "success"){
            let miInfo = respuesta.informacion;
            for(const infor of miInfo){
                $('#lorem').prepend(`<article class='loremArticle'>
                <img src='${infor.img}'>
                <p>${infor.info}</p>
                </article>
                <article class='loremArticle'>
                <img src='${infor.img2}'
                <p>${infor.info2}</p>
                </article>
                <article class='loremArticle'>
                <img src='${infor.img3}'
                <p>${infor.info3}</p>
                </article>`)
            }
        }
    })
})
