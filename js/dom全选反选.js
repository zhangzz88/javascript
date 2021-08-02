function fnn(a, b) {
    var bttn = document.getElementById(a);

    bttn.onclick = b;
}

//全选效果
fnn('checkall', function() {
    var add = document.getElementsByName('items');
    var cheee = document.getElementById('checkdallbox');
    for (var i = 0; i < add.length; i++) {
        add[i].checked = true
    }
    cheee.checked = true
})

//全不选效果
fnn('checknobtjh', function() {
    var add = document.getElementsByName('items');
    var cheee = document.getElementById('checkdallbox');
    for (var i = 0; i < add.length; i++) {
        add[i].checked = false
    }
    cheee.checked = false
})

//反选效果
fnn('checkrevth', function() {
    var add = document.getElementsByName('items');
    var cheee = document.getElementById('checkdallbox');
    for (var i = 0; i < add.length; i++) {
        if (add[i].checked) {
            add[i].checked = false
        } else {
            add[i].checked = true
        }
    }

    cheee.checked = true;
    for (var j = 0; j < add.length; j++) {
        if (add[j].checked == false) {
            cheee.checked = false;

        }
    }
})


//提交
fnn('sendbth', function() {
    var add = document.getElementsByName('items');
    adr = [];
    for (var i = 0; i < add.length; i++) {
        if (add[i].checked) {
            adr += add[i].value
        }
    }
    alert(adr)
})

//全不选或全选
fnn('checkdallbox', function() {
    var add = document.getElementsByName('items');
    var cheee = document.getElementById('checkdallbox');
    for (var i = 0; i < add.length; i++) {
        add[i].checked = cheee.checked
    }
})

function attr() {
    var add = document.getElementsByName('items');
    var cheee = document.getElementById('checkdallbox');
    for (var i = 0; i < add.length; i++) {
        add[i].onclick = function() {
            //为什么这个办法不行？
            //add[j]循环到0、1、2的时候，2以下不管是对还是错，都是执行了的只不过是循环到最后一个3的时候把之前的全部覆盖掉了，索引是3的是true全局也是true，到3是false，全选又变成了false
            // for(var j=0;j<add.length;j++){
            // 	if(add[j].checked==false){
            // 		cheee.checked=false
            // 	}else{
            // 		cheee.checked=true
            // 	}
            // }
            //默认设定cheee为选中状态
            cheee.checked = true
                //如果发现add里面有没选中的就把cheee变成没选中状态。
                //点击的时候如果发现add里面全部选中就不做操作。
            for (var j = 0; j < add.length; j++) {
                if (add[j].checked == false) {
                    cheee.checked = false;
                    break
                }
            }
        }
    }
}
attr();