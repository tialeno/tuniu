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
<!-- 验证消息 -->
<?php if(count($errors) > 0): ?>

        <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <script>layer.msg('<?php echo e($error); ?>',{icon:6,time:1000})</script>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
       
<script>
setTimeout(function(){
    $('.alert-danger').hide();
},2000);
</script>
<?php endif; ?>
<div class="page-content clearfix">
    <div id="Member_Ratings">
      <div class="d_Confirm_Order_style">
    <div class="search_style">
     
      <ul class="search_content clearfix">
       <form action="/admin/user" method="get">
           <li><label class="l_f">会员名称</label><input name="keywords" type="text"  class="text_add" placeholder=""  style=" width:400px"/></li>
           <li><label class="l_f">添加时间</label><input class="inline laydate-icon" id="start" style=" margin-left:10px;"></li>
           <li style="width:90px;"><button type="submit" class="btn_search"><i class="fa fa-search"></i>查询</button></li>
           </form>
      </ul>
    </div>
     <!---->
     <div class="border clearfix">
       <span class="l_f">
        <a href="javascript:ovid()" id="member_add" class="btn btn-warning"><i class="icon-plus"></i>添加用户</a>
        <a href="javascript:ovid()" class="btn btn-danger"><i class="icon-trash"></i>批量删除</a>
       </span>
       <span class="r_f">共：<b><?php echo e($count); ?></b>条</span>
     </div>
     <!---->
     <div class="table_menu_list">
       <table class="table table-striped table-bordered table-hover" id="sample-table">
        <thead>
          <?php if(session('error')): ?>
          session('error')
          <?php endif; ?>
         <tr>
                <th width="25"><label><input type="checkbox" class="ace"><span class="lbl"></span></label></th>
                <th width="80">ID</th>
                <th width="100">用户名</th>
                <th width="80">性别</th>
                <th width="120">手机</th>
                <th width="150">邮箱</th>
                <th width="">地址</th>
                <th width="180">加入时间</th>
                <th width="100">等级</th>
                <th width="70">状态</th>                
                <th width="250">操作</th>
                <th width="200">关联信息</th>
            </tr>
        </thead>
    <tbody>
        <?php $__currentLoopData = $user; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
          <td><label><input type="checkbox" class="ace"><span class="lbl"></span></label></td>
          <td><?php echo e($value->id); ?></td>
          <td><u style="cursor:pointer" class="text-primary" onclick="member_show('张三','member-show.html','10001','500','400')"><?php echo e($value->username); ?></u></td>
          <td><?php echo e($value->sex); ?></td>
          <td><?php echo e($value->tel); ?></td>
          <td><?php echo e($value->email); ?></td>
          <td class="text-l"><?php echo e($value->aid); ?></td>
          <td><?php echo e($value->time); ?></td>
          <td><?php echo e($value->status); ?></td>

            <?php if($value->display == '已开启'): ?>
            <td class="td-status"><span class="label label-success radius"><?php echo e($value->display); ?></span></td>
            <?php else: ?>
            <td class="td-status"><span class="label label-defaunt radius">已停用</span></td>
            <?php endif; ?>

          <td class="td-manage">
            <?php if($value->display == '已开启'): ?>
            <a onClick="member_stop(this,<?php echo e($value->id); ?>)"  href="javascript:;" title="停用"  class="btn btn-xs btn-success"><i class="icon-ok bigger-120"></i></a>
            <?php else: ?>
            <a style="text-decoration:none" class="btn btn-xs " onClick="member_start(this,<?php echo e($value->id); ?>)" href="javascript:;" title="启用"><i class="icon-ok bigger-120"></i></a>
            <?php endif; ?>
          <a title="编辑"  href="/admin/user/<?php echo e($value->id); ?>/edit"  class="btn btn-xs btn-info" ><i class="icon-edit bigger-120"></i></a> 
          <a title="删除" href="javascript:;"  onclick="member_del(this,'<?php echo e($value->id); ?>')" class="btn btn-xs btn-warning" ><i class="icon-trash  bigger-120"></i></a>
          </td>
          <td>
            <a href="/admin/user/<?php echo e($value->id); ?>" class="btn btn-success btn-xs">会员详情</a>
            <a href="/admin/address/<?php echo e($value->id); ?>" class="btn btn-info btn-xs">收货地址</a>
          </td>
        </tr>
       <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </tbody>
    </table>
     
   </div>
  </div>
 </div>
</div>
<!--添加用户图层-->
<div class="add_menber" id="add_menber_style" style="display:none">
    <form action="" method="post" id="submit1">
      <ul class=" page-content">
       <li><label class="label_name">用&nbsp;&nbsp;户 &nbsp;名：</label><span class="add_name"><input value="" name="username" title="用户名" top="用户名" type="text"  class="text_add input-text"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">密码：</label><span class="add_name"><input name="pass" id="password" title="密码" top="密码" type="password"  class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label><span class="add_name">
       <label><input name="sex" type="radio" checked="checked" class="ace" value="0"><span class="lbl">男</span></label>&nbsp;&nbsp;&nbsp;
       <label><input name="sex" type="radio" class="ace" value="1"><span class="lbl">女</span></label>&nbsp;&nbsp;&nbsp;
       <label><input name="sex" type="radio" class="ace" value="2"><span class="lbl" >保密</span></label>
       </span>
       <div class="prompt r_f"></div>
       </li>
       <li><label class="label_name">确认密码：</label><span class="add_name"><input name="repass" id="repassword" type="password" top="确认密码" class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">移动电话：</label><span class="add_name"><input name="tel" id="phone1" title="电话" top="移动电弧" type="text"  class="text_add"/></span><div class="prompt r_f"></div></li>
       <li><label class="label_name">电子邮箱：</label><span class="add_name"><input name="email" id="email1" title="邮箱" top="email" type="text"  class="text_add"/></span><div class="prompt r_f"></div></li>
    
       <li><label class="label_name">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</label><span class="add_name">
       <label><input name="display" type="radio"  value="0" checked="checked" class="ace"><span class="lbl">开启</span></label>&nbsp;&nbsp;&nbsp;
       <label><input name="display"type="radio" value="1"  class="ace"><span class="lbl">关闭</span></label></span><div class="prompt r_f"></div></li>
       <br>
       <?php echo e(csrf_field()); ?>

        <div>
            <input type="submit" value="提交" id="tijiao"  class="ace button1">
            <input type="button" value="取消"  class="ace button1" id="quxiao" style="background:#b0b0b0">
        </div>
      </ul>
    </form>
    
 </div>
</body>
</html>
<script>


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
              $.post("<?php echo e(url('admin/user')); ?>",{"_token": "<?php echo e(csrf_token()); ?>",'str':str},function(data){
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
     $("#submit1 input[type$='text']").each(function(n){
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
        $.post("<?php echo e(url('admin/user')); ?>/"+id,{"_token": "<?php echo e(csrf_token()); ?>","_method":"DELETE"},function(data){
            if(data == 1){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',{icon:1,time:1000});
            }else{
                layer.msg('删除失败!',{icon:1,time:1000});
            }
        });
        
    });
}
laydate({
    elem: '#start',
    event: 'focus' 
});

$('#tijiao').click(function(){
    var num=0;
    var str="";
     // 判断其他是否为空
     $("#submit1 input[type$='text']").each(function(n){
        if($(this).val()==""){           
                 layer.alert(str+=""+$(this).attr("title")+"不能为空！\r\n",{
                title: '提示框',               
                        icon:0,                             
            }); 
                num++;
            return false;            
        }

     if($('#password').val() == ''){
             layer.alert($('#password').attr("title")+"不能为空！\r\n",{
                    title: '提示框',               
                            icon:0,                             
                }); 
                    num++;
                return false;  
         }
      if($('#password').val() != $('#repassword').val()){
            layer.alert("密码不一致！\r\n",{
                    title: '提示框',               
                            icon:0,                             
                }); 
                    num++;
                return false;
         }
         var phone = $('#phone1').val();
      
        if(phone.match(/\d{11}/) == null){
            layer.alert("电话号码格式不正确！\r\n",{
                    title: '提示框',               
                            icon:0,                             
                }); 
                    num++;
                return false;
        }
        var email = $('#email1').val();
        if(email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) == null){
            layer.alert("邮箱格式不正确！\r\n",{
                    title: '提示框',               
                            icon:0,                             
                }); 
                    num++;
                return false;
        }






    });
    


    if(num>0){  
      return false;
    }else{
            // layer.alert('添加成功！',{
   //      title: '提示框',                
            //    icon:1,       
            // });
            // layer.close(index);  
      return true;
    }        
});

</script>