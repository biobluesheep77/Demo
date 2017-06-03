document.charset="big5"
function RememberMe() {
    var isremember = $("#remember").prop("checked");
    var account = $('#account').val();

    if (isremember) {
        $.cookie('member', account, { path: '', expires: 9999 });
    } else {
        $.cookie('member', { expires: -1 });
    }

}

function ajax(viewname) {
    var main = $.ajax({
        url: viewname + ".html", type: "GET", success: function (data) {
            //login_verification();
            $('#ajax_main_block').html(data);
			
			 $.cookie('view', viewname, { path: '/', expires: 9999 });
        }
    });
}

function login() {
    var account = $('#account').val();
    var password = $('#password').val();

    $.post("", { account: account, password: password })
    .done(function (data) {
        if (data.status == "OK") {
            $.cookie('login_member', account, { path: '/', expires: 5 });
            window.location.href = 'tpl/Bet.html';
        } else {
            alert('???K???!');
        }
    });
}

function login_verification() {
    var test = $.cookie('login_member');
    if (location.pathname != 'Index' && $.cookie('login_member') == null) {
        document.location.replace = location.hostname + '/Index.html';
    }

}
//??`function
 function batch_order()
        {			
            var money = $('#money').val();
			if(money > 0 && money != 'NaN')
			{
            var total_money = 0;
            var number = 0;
            $('.ball_select').find('input').val(money);

         
            $('#order_box').html('');
            $('.ball_select').each(function () {
                
               var one_money = parseInt($(this).find('input').val());
               var order = $('#order_box').html();

	       var select_name = $(this).find('input').attr('id');
		   
               total_money += one_money;
               number += 1;
               var order_str = ' <tr><td>' + select_name  +'</td><td><span class="font_red">48.34</span></td><td><input type="text" class="ball_input form-control" value="' + one_money + '" /></td><td><input checked="checked" type="checkbox" /></td></tr>';
               $('#order_box').html(order + order_str);
            })
            $('#order_total').html('<tr><td>订单:' + number +'</td><td>总金额:' + total_money + '</td></tr>');

			}
			else{
				alert('请输入下注金额!')
				
			}
        }
		
		
		
		

		
	
