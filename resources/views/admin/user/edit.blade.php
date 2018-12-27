<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="/style/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/style/admin/css/style.css"/>       
        <link href="/style/admin/assets/css/codemirror.css" rel="stylesheet">
        <link rel="stylesheet" href="/style/admin/assets/css/ace.min.css" />
        <link rel="stylesheet" href="/style/admin/assets/css/font-awesome.min.css" />
        <!--[if IE 7]>
          <link rel="stylesheet" href="/style/admin/assets/css/font-awesome-ie7.min.css" />
        <![endif]-->
        <!--[if lte IE 8]>
          <link rel="stylesheet" href="/style/admin/assets/css/ace-ie.min.css" />
        <![endif]-->
            <script src="/style/admin/assets/js/jquery.min.js"></script>

        <!-- <![endif]-->

        <!--[if IE]>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->

        <!--[if !IE]> -->

        <script type="text/javascript">
            window.jQuery || document.write("<script src='/style/admin/assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
        </script>

        <!-- <![endif]-->

        <!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='/style/admin/assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

        <script type="text/javascript">
            if("ontouchend" in document) document.write("<script src='/style/admin/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
        </script>
        <script src="/style/admin/assets/js/bootstrap.min.js"></script>
        <script src="/style/admin/assets/js/typeahead-bs2.min.js"></script>
        <!-- page specific plugin scripts -->
        <script src="/style/admin/assets/js/jquery.dataTables.min.js"></script>
        <script src="/style/admin/assets/js/jquery.dataTables.bootstrap.js"></script>
        <script type="text/javascript" src="/style/admin/js/H-ui.js"></script> 
        <script type="text/javascript" src="/style/admin/js/H-ui.admin.js"></script> 
        <script src="/style/admin/assets/layer/layer.js" type="text/javascript" ></script>
        <script src="/style/admin/assets/laydate/laydate.js" type="text/javascript"></script>
        <title>用户列表</title>
        <style>
            .button1{
                    border-color: #4898d5;
                    background-color: #2e8ded;
                    color: #fff;
                    height: 36px;
                    line-height: 36px;
                    margin: 0 6px;
                    padding: 0 15px;
                    border: 1px solid #dedede;
                    border-radius: 2px;
                    font-weight: 400;
                    cursor: pointer;
                    text-decoration: none;
            }
        </style>
</head>

<body>

<div class="page-content clearfix">
    <div id="Member_Ratings">
      <div class="d_Confirm_Order_style">
    <div class="search_style">
     
      <ul class="search_content clearfix">
       <li><label class="l_f">会员名称</label><input name="" type="text"  class="text_add" placeholder="输入会员名称、电话、邮箱"  style=" width:400px"/></li>
       <li><label class="l_f">添加时间</label><input class="inline laydate-icon" id="start" style=" margin-left:10px;"></li>
       <li style="width:90px;"><button type="button" class="btn_search"><i class="icon-search"></i>查询</button></li>
      </ul>
    </div>
     <!---->
     <div class="border clearfix">
       <span class="l_f">
        <a href="javascript:ovid()" id="member_add" class="btn btn-warning"><i class="icon-plus"></i>修改用户</a>
        <a href="javascript:ovid()" class="btn btn-danger"><i class="icon-trash"></i>批量删除</a>
       </span>
       <span class="r_f">共：<b>123</b>条</span>
     </div>
     <!---->
     <div class="table_menu_list">
       
   </div>
  </div>
 </div>
</div>
<!--添加用户图层-->
<div class="add_menber" id="add_menber_style" style="border:1px solid #b0b0b0" >
    <form action="/admin/user/{{$user->id}}" method="post" id="submit1">
      <ul class=" page-content">
      <!-- 验证消息 -->
@if (count($errors) > 0)
<div class="alert alert-danger">
    <div class="mws-form-message error">
       
        @foreach ($errors->all() as $error)
          {{ $error }}
        @endforeach
     
    </div>
</div>
<script>
setTimeout(function(){
    $('.alert-danger').hide();
},2000);
</script>
@endif
       <li><label class="label_name">用&nbsp;&nbsp;户 &nbsp;名：</label><span class="add_name"><input value="{{$user->username}}" name="username" top="用户名" type="text" datatype="*2-16" nullmsg="用户名不能为空" class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">密码：</label><span class="add_name"><input name="pass" top="密码" type="text"  class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label><span class="add_name">
       <label><input name="sex" type="radio" {{$user->sex == 0 ? 'checked' : ''}} class="ace" value="0"><span class="lbl">男</span></label>&nbsp;&nbsp;&nbsp;
       <label><input name="sex" type="radio" {{$user->sex == 1 ? 'checked' : ''}} class="ace" value="1"><span class="lbl" >女</span></label>&nbsp;&nbsp;&nbsp;
       <label><input name="sex" type="radio" {{$user->sex == 2 ? 'checked' : ''}} class="ace" value="2"><span class="lbl" >保密</span></label>
       </span>
       <div class="prompt r_f"></div>
       </li>
       <li><label class="label_name">确认密码：</label><span class="add_name"><input name="repass" type="text" top="确认密码" class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">移动电话：</label><span class="add_name"><input name="tel" top="移动电话" type="text"  value="{{$user->tel}}" class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">电子邮箱：</label><span class="add_name"><input name="email" top="email" type="text" value="{{$user->email}}" class="text_add"/></span><div class="prompt r_f"></div></li>
    
       <li><label class="label_name">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</label><span class="add_name">
       <label><input name="display" type="radio"  value="0" {{$user->display == 0 ? 'checked' : ''}} checked="checked" class="ace"><span class="lbl">开启</span></label>&nbsp;&nbsp;&nbsp;
       <label><input name="display"type="radio" value="1" {{$user->display == 1 ? 'checked' : ''}} class="ace"><span class="lbl">关闭</span></label></span><div class="prompt r_f"></div></li>
       <br>
       <input type="hidden" name="_method" value="PUT" />
       <input type="hidden" name="id" value="{{$user->id}}" />
       {{csrf_field()}}

        <div>
            <input type="submit" value="修改"  class="ace button1">
            <a href="/admin/user" type="button" value="返回上一步"  class="btn ace button1" id="quxiao" style="background:#b0b0b0">返回上一步</a>
        </div>
      </ul>
    </form>
 </div>
</body>
</html>
<script>
$(function(){
  $('#member_add').click();
});
jQuery(function($) {
                var oTable1 = $('#sample-table').dataTable( {
                "aaSorting": [[ 1, "desc" ]],//默认第几个排序
                "bStateSave": true,//状态保存
                "aoColumnDefs": [
                  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
                  {"orderable":false,"aTargets":[0,8,9]}// 制定列不参与排序
                ] } );
                
                
                $('table th input:checkbox').on('click' , function(){
                    var that = this;
                    $(this).closest('table').find('tr > td:first-child input:checkbox')
                    .each(function(){
                        this.checked = that.checked;
                        $(this).closest('tr').toggleClass('selected');
                    });
                        
                });
            
            
                $('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
                function tooltip_placement(context, source) {
                    var $source = $(source);
                    var $parent = $source.closest('table')
                    var off1 = $parent.offset();
                    var w1 = $parent.width();
            
                    var off2 = $source.offset();
                    var w2 = $source.width();
            
                    if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
                    return 'left';
                }
            })
/*用户-添加*/
 $('#member_add').on('click', function(){
    layer.open({
        type: 1,
        title: '添加用户',
        maxmin: true, 
        shadeClose: true, //点击遮罩关闭层
        area : ['800px' , ''],
        content:$('#add_menber_style'),
        yes:function(index,layero){ 
         var num=0;
         var str="";
     $(".add_menber input[type$='text']").each(function(n){
          if($(this).val()=="")
          {
            layer.alert(str+=""+$(this).attr("top")+"不能为空！\r\n",{
            title: '提示框',               
            icon:0,                             
          }); 
            num++;
            return false;            
          } 
         });
          if(num>0){  return false;}        
          else{
              str=$('#submit1').serialize();
              $.post("{{url('admin/user')}}",{"_token": "{{csrf_token()}}",'str':str},function(data){
                    alert(data);
                    layer.alert('添加成功！',{
                       title: '提示框',                
                    icon:1,     
                      });
                    layer.close(index);  
                });   
              }                                 
            }
        });
    });
 $('#quxiao').click(function(){
    $('.layui-layer-close1').click();
 });
/*用户-查看*/
function member_show(title,url,id,w,h){
    layer_show(title,url+'#?='+id,w,h);
}
/*用户-停用*/
function member_stop(obj,id){
    layer.confirm('确认要停用吗？',function(index){
        $.get('/admin/user/status',{'status':1,'id':id},function(data){
            if(data == 1){
                $(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs " onClick="member_start(this,'+id+')" href="javascript:;" title="启用"><i class="icon-ok bigger-120"></i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已停用</span>');
                $(obj).remove();
                layer.msg('已停用!',{icon: 5,time:1000});
            }else{
                layer.msg('修改失败',{icon: 5,time:1000});
            }
            
        });
    });
}
/*用户-启用*/
function member_start(obj,id){
    layer.confirm('确认要启用吗？',function(index){
        $.get('/admin/user/status',{'status':0,'id':id},function(data){
            if(data == 1){
                $(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs btn-success" onClick="member_stop(this,'+id+')" href="javascript:;" title="停用"><i class="icon-ok bigger-120"></i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已启用</span>');
                $(obj).remove();
                layer.msg('已启用!',{icon: 6,time:1000});
            }else{
                layer.msg('修改失败',{icon: 6,time:1000});
            }
            
        });
    });
}
/*用户-编辑*/
function member_edit(id){
      layer.open({
        type: 1,
        title: '修改用户信息',
        maxmin: true, 
        shadeClose:false, //点击遮罩关闭层
        area : ['800px' , ''],
        content:$('#add_menber_style'),
        btn:['提交','取消'],
        yes:function(index,layero){ 
         var num=0;
         var str="";
     $(".add_menber input[type$='text']").each(function(n){
          if($(this).val()=="")
          {
               
               layer.alert(str+=""+$(this).attr("name")+"不能为空！\r\n",{
                title: '提示框',               
                icon:0,                             
          }); 
            num++;
            return false;            
          } 
         });
          if(num>0){  return false;}        
          else{
              layer.alert('添加成功！',{
               title: '提示框',                
            icon:1,     
              });
               layer.close(index);  
          }                                 
        }
    });
}
/*用户-删除*/
function member_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',{icon:1,time:1000});
    });
}
laydate({
    elem: '#start',
    event: 'focus' 
});

</script>
 <script>
        //表单验证提交
        $("#submit1").Validform({
        
         tiptype:2,
    
        callback:function(data){
        //form[0].submit();
        if(data.status==1){ 

                layer.msg(data.info, {icon: data.status,time: 1000}, function(){ 

                    location.reload();//刷新页面 

                    });   
                
            } 
            else{ 
                layer.msg(data.info, {icon: data.status,time: 3000}); 
            }         
            var index =parent.$("#iframe").attr("src");
            parent.layer.close(index);
        }
        
        
    }); 
    </script>