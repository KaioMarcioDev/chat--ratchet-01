var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    //console.log("Connection established!");
};

conn.onmessage = function(e) {

    showMessage('other', e.data)

};



const form1 = document.getElementById('form1')
const inp_message = document.getElementById('message')
const inp_name = document.getElementById('name')
const btn_env = document.getElementById('btn1')

const area_content = document.getElementById('content')

btn_env.addEventListener('click',()=>{
    if(inp_message.value !=''){
        let msg = {'name':inp_name.value,'msg':inp_message.value}
        msg = JSON.stringify(msg)

        conn.send(msg)

        showMessage('me', msg)
        
        inp_message.value=''

    }
})



function showMessage(how,data){
    data = JSON.parse(data)

    if(how == 'me'){
         img_src = "assets/imgs/so.png"
    }else if(how == 'other'){
         img_src = "assets/imgs/tu.png"
        }

    const div = document.createElement('div')
    div.setAttribute('class', how)

    const img = document.createElement('img')
    img.setAttribute('src',img_src)

    const div_txt = document.createElement('div')
    div_txt.setAttribute('class', 'text')

    const h5 = document.createElement('h5')
    h5.textContent = data.name

    const p = document.createElement('p')
    p.textContent = data.msg

    div_txt.appendChild(h5)
    div_txt.appendChild(p)

    div.appendChild(img)
    div.appendChild(div_txt)

    area_content.appendChild(div)

}