function create_new_element(response) {
    let table = document.getElementById('result_table');
    while(table.firstChild){
        table.removeChild(table.firstChild);
    }
    let tr_h = document.createElement('tr');
    let th_fac = document.createElement('th');
    let th_num = document.createElement('th');
    th_fac.innerText = '素因数';
    th_num.innerText = '素因数の数';
    tr_h.appendChild(th_fac);
    tr_h.appendChild(th_num);
    table.appendChild(tr_h);
    for(k in response){
        let tr = document.createElement('tr');
        tr.class = 'replace';
        let td_fac = document.createElement('td');
        let td_num = document.createElement('td');
        td_fac.innerText = k;
        td_num.innerText = response[k];
        tr.appendChild(td_fac);
        tr.appendChild(td_num);
        table.appendChild(tr);
    }

}

$(function(){
    $('#send_number_button').click(function(){
        if (!isNaN($('#send_number_value').val())) {
            if($('#send_number_value').val() > 500000){
                alert("50万以内");
                return;
            }
            console.log($('#send_number_value').val());
            let send_number_data = {
                'target_number': $('#send_number_value').val()
            }
            $.ajax({
                url: '/caluculation',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(send_number_data),
                success: function(response){
                    console.log(response);
                    create_new_element(response);
                },
                error: function(response){
                    alert('Error');
                }
            })
        } else {
            alert("半角数字を入力してください");
        }
    })
})
