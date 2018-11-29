
$(document).ready(function(){
	$("#target_type").change(updatePreview);
	$("#container_type").change(updatePreview);
	$("#sandphotoform input:radio").click(updatePreview);
	$("#sandphotoform").submit(checkForm);
	updatePreview();
});

function updatePreview()
{
	$target_type = $("#target_type option:selected").val();
	$container_type = $("#container_type option:selected").val();
	$bgcolorid= $("#sandphotoform input:radio:checked").val();
	if ($target_type && $container_type && $bgcolorid) {
		$("#previewImg").attr("src", "/sandphoto/preview.php?t=" + $target_type + "&c=" + $container_type + "&b=" + $bgcolorid);
	}
}

function checkForm()
{
	if ($("#filename").val() == "")
	{
		alert("��ѡ����Ƭ������");
		return false;
	}
	if (!$("#filename").val().match(/jpg|jpeg|png|tiff/i))
	{
		alert("ֻ֧��jpeg, jpg, png, tiff�ļ�");
		return false;
	}


	return true;
}
