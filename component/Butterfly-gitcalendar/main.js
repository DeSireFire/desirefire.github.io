// let html = Template.load('/customize/moeShiKi/template/demo.html');
function Template(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}
if(document.getElementById("recent-posts")){
    let html = Template('/component/Butterfly-gitcalendar/main');
    let target = document.getElementById('recent-posts');
    target.insertAdjacentHTML('afterbegin', html);
}

