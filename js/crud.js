$(function(){
    fetchArticle()
    $('#article').keyup(function(){
        searchArticle($(this).val())
    })
})
function fetchArticle(){
    $.ajax({
        url: "http://api-ams.me/v1/api/articles?page=1&limit=15",
        method: "GET",
        success: function(res){
            appendTable(res.DATA)
        },
        error: function(e){
            console.log(e);
        }
    })
}
function appendTable(article){
    var content  = "";
    for (a of article){
        content +=`
        <tr>
            <td scope="row">${a.ID}</td>
            <td>${a.TITLE}</td>
            <td>${a.DESCRIPTION}</td>
            <td><button type="button" class="btn btn-outline-primary waves-effect">delete</button></td>
        </tr>
    `
    }
    

    $('tbody').html(content)
}
function searchArticle(title){
    console.log(title);
    $.ajax({
        url: `http://api-ams.me/v1/api/articles?title=${title}&page=1&limit=15`,
        method: "GET",
        success: function(res){
            appendTable(res.DATA)
        },
        error: function(e){
            console.log(e);
        }
    })
}