import { EVENT } from '../events/EVENTS';
import { locale } from '../locale';
import { BasicUI } from './basicUI';
import { DemoUI } from './demoUI';
// eslint-disable-next-line import/prefer-default-export
export class UI extends BasicUI {
	constructor(elementId) {
		super(elementId);
		this.flagX = true
		this.deg = 0
		this.isCrop = 'none'
		this.init();
		this.initEvent();
	}

	init() {
		this.addEvent()
	}

	initEvent() {
		// 事件注册
		// this.app.event.on(EVENT.INIT_LEFT_TREE, this.initTree.bind(this));
	}

	initTree() {
		this.$context.text(`国际化${locale.OPEN}示例`);
		const demoUI = new DemoUI('demo');
		demoUI.show();
	}

	/**
	 * 显示时添加的事件
	 */
	addEvent() {
		// 向左旋转
		$("#btnLeft").bind("click", ()=>{
			this.rotateFn(1)
		});
		// 向右旋转
		$("#btnRight").bind("click", ()=>{
			this.rotateFn(2)
		});
		// 裁剪后的处理
		$("#btnSubmit").bind("click", ()=>{
			if ($("#imageId").attr("src") == null ){
				return false;
			}else{
				var cas = $('#imageId').cropper('getCroppedCanvas');//获取被裁剪后的canvas
				var base64url = cas.toDataURL('image/png'); //转换为base64地址形式

				$('#imgBoxId').attr('src',base64url)

					// ajax 上传图片
					// var formData = new FormData();
					// var file = base64toFile(base64url)
					// formData.append('__avatar1',file );

					// $.ajax({
						// 	type:'post',
						// 	url: '/index.php?r=news/imgupload/toupload',
						// 	cache: false,
						// 	data: formData,
						// 	processData: false,
						// 	contentType: false,
						// 	dataType:'json',
					// }).then(function(res) {
					// 	console.log(res,'-------上传成功')
						
					// }).fail(function(err){ console.log(err)})
			}
			$('#imageId').cropper("destroy");
			$("#file").val("")
			this.isCrop = 'none'
		});
		// 选择图片
		$("#file").bind("change", (e)=>{
			console.log(e)
			this.selectImg(e.target)
		})
		// 复位
		$("#btnInit").on("click", ()=>{
			$('#imageId').cropper("reset");
		});
		// 放大
		$("#btnLarge").bind("click", ()=>{
			$('#imageId').cropper("zoom", 0.1);
		});
		// 裁剪
		$("#btnCrop").bind("click", ()=>{
			this.isCrop = 'crop'
			$('.cropper-drag-box').attr("data-cropper-action", 'crop')
		});
		
		// 缩小
		$("#btnSmall").bind("click", ()=>{
			$('#imageId').cropper("zoom", -0.1);
		});
		// 换向
		$("#btnScale").on("click", ()=>{
			if(this.flagX){
				$('#imageId').cropper("scaleX", -1);
				this.flagX = false;
			}else{
				$('#imageId').cropper("scaleX", 1);
				this.flagX = true;
			}
			this.flagX != this.flagX;
		});

	}
	initImage(cut_size, isCrop) {
		
		var sizeArr = [0,0];
		var aspectRatio = null
		// if(cut_size){
		// 	sizeArr = cut_size.split('*');
		// 	let w = sizeArr[0]*1
		// 	var h = sizeArr[1]*1
	
		// 	if(w > h){
		// 		aspectRatio = (w/h)  / 1
		// 	} else {
		// 		aspectRatio = 1 / (h/w)
		// 	}
		// }
		$('#imageId').cropper({
			viewMode: 1,
			dragMode: isCrop,
			initialAspectRatio: 1,
			preview: '.previewBox',
			// 是否在容器上显示网格背景
			background: true,
			// 定义自动剪裁区域的大小
			// autoCropArea: 1,
			// 是否允许鼠标 缩放图片
			zoomOnWheel: false,
			// 是否允许改变剪裁框的大小
			cropBoxResizable:true,
			// 是否可以移动裁剪框
			cropBoxMovable:true,
			// 是否允许旋转图片
			rotatable: true,

			aspectRatio: aspectRatio,
			// 初始化时，自动裁剪图片
			autoCrop: false,
		})
	}
	rotateFn(type) {
		if(type == 1){
			this.deg += 90
		} else {
			this.deg -= 90
		}
		$('#imageId').cropper("rotate", this.deg);
	}
	selectImg(file) {
		this.initImage(0, this.isCrop)
		if (!file.files || !file.files[0]){
				return;
		}
		var reader = new FileReader();
		reader.onload = function (evt) {
				var replaceSrc = evt.target.result;

				//更换cropper的图片
				$('#imageId').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
				
		}
		reader.readAsDataURL(file.files[0]);
	}

	/**
   * 隐藏时添加的事件
   */
	removeEvent() {
		$('#imageId').cropper("destroy");
	}

	/**
   * 窗口重新绘画
   */
	resize() {
		console.log('窗口变动');
	}
}
