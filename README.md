## 图像尺寸的增加问题：使用HTMLCanvasElement.toDataURL()在浏览器端导出裁剪的图像时，导出的图像可能大于原始图像大小，这是因为导出的图像类型与原始图像不同。只需将原始图像作为第一个参数传递给toDataURL可解决此问题。如果原始类型是jpeg,用$().cropper('getCroppedCanvas').toDataURL('image/jpeg')来导出图像。


## cropperjs
1) viewMode - 视图模式
	type: Number
	定义裁剪器的视图模式，默认值是0，
	0：裁剪框可以在画布外展开，
	1，2，3将裁剪框限制为画布大小，2或3将画布限制到容器。
	2.限制最小画布尺寸以适应容器。如果画布与容器比例不同，则最小画布的其中一个维度被额外的空格包围。

2）dragMode - 拖动模式
	type：String
	定义裁剪器的拖动模式，default: 'crop',
	options
		'crop': 创建一个新的裁剪框
		'move',移动canvas
		'none',什么也不做

3）aspectRatio - 宽高比
	type: Number
	设置裁剪框的宽高比，默认情况下，为空闲比例（NaN）。

4）data - 初始化图片数据
	type: Object,default: null，如果存储了以前的数据，将自动传递给setData方法。

5）preview - 预览
	type: String(jQuery selector),default: '',为预览添加额外的元素（容器）。
	注意：最大宽度（高度）是预览容器的初始宽度（高度）。
	如果设置了aspectRatio选项，请确保以相同的宽高比设置预览容器。
	如果预览没有正确显示，请给预览容器设overflow:hidden

6) responsive(实时响应)
	调整窗口大小时，重新渲染裁剪器。
	type：Boolean,default: true

7) restore
	调整窗口大小后，恢复裁剪区域。
	type：Boolean,default: true

8）checkCrossOrigin
	检查当前图像是否是跨源图像
	type：Boolean,default: true
	如果是，当克隆图像时，将crossOrigin属性添加到克隆的图像元素中，并将时间戳添加到src属性以重新加载源图像以避免浏览器缓存错误。
	通过将crossQrigin属性添加到图像将停止向图像url添加时间戳，并停止重新加载图像。
	如果图像的crossOrigin属性值为"use-credentials",则在通过XMLHttpRequest读取图像数据时，withCredentials属性将会设置为true。

9）checkOrientation
	检查当前图像的Exif Orientation information
	type：Boolean,default: true

	更准确的说，读取旋转或翻转图像的Orientation值，然后用1（default）覆盖Orientation值，以免在iOS设备上出现一些问题（#120， #509）	
	需要同时设置ratatable（旋转）和scalable(缩放)为true
	注意：不要总是相信这个，因为一些jpg图像有不正确的方向值。
	需要Typed Arrays support(IE10+)

10) modal
	在图像的上方和裁剪框的下方显示黑色模态。
	type：Boolean,default: true

11) guides
	显示裁剪框上的虚线
	type：Boolean,default: true

12）center
	在裁剪框上显示中心指示器。
	type：Boolean,default: true

13）highlight
	在裁剪框上显示白色模态（突出显示裁剪框）
	type：Boolean,default: true

14）background
	显示容器的网格背景
	type：Boolean,default: true

15）autoCrop
	在初始化时启用自动裁剪图像。
	type: Boolean，默认值为：true

16）autoCropArea
	介于0和1之间的数字，定义自动裁剪区域的大小（百分比）
	type： Number,默认值： 0.8（80%）的图像

17）movable
	启用移动图像
	type：Boolean,default: true

18）ratotable(可旋转)
	启用旋转图像
	type: boolean,default: true

19) scalable(可缩放)
	type: boolean,default: true
	Enable to scale the image

20）zoomable
	type: boolean,default: true
	Enable to zoom the image

21) zoomOnTouch
	type: boolean,default: true
	启用通过拖动触摸缩放图像。

22）zoomOnWheel
	type: boolean,default: true
	启用通过鼠标滚轮缩放图像。

23）wheelZoomRatio
	通过滚动滚轮缩放时的缩放倍率
	type：Number Default: 0.1

24) cropBoxMovable
	type: boolean，default: true
	启用通过拖动来移动裁剪框。

25）cropBoxResizable
	type: boolean，default: true
	启用通过拖动来调整裁剪框的大小。

26）toggleDragModeOnDblclick
	类型：布尔值
	默认值：true
	双击裁剪器，在 'crop-重新定义裁剪器' 和 'move-移动裁剪器' 模式下切换

27）minContainerWidth
	类型：数字
	默认值：200
	容器的最小宽度。

28) minContainerHeight
	类型：数字
	默认值：100
	容器的最小高度。

29) minCanvasWidth
	类型：数字
	默认值：0
	画布的最小宽度（img wrapper-图片外层的div）。

30) minCanvasHeight
	类型：数字
	默认值：0
	画布的最小高度（图像包装器）。

31) minCropBoxWidth
	类型：数字
	默认值：0
	裁剪框的最小宽度。
	注意：这个大小是相对于页面，而不是图像。

32) minCropBoxHeight
	类型：数字
	默认值：0
	裁剪框的最小高度。
	注意：这个大小是相对于页面，而不是图像。

/*
	cropper事件绑定的便捷方法，直接作为属性传递：
		$('#image').cropper({
			guides: false,
			ready: function(e){
			
			},
		});
	而不用再次调用
		$('#image').cropper({
			guides: false,
		});
		$('#image').on("ready", function(e){
		
		});
 */

33) ready
	类型：function
	默认值：null
	A shortcut of the "ready" event.

34) cropstart
	类型：function
	默认值：null
	A shortcut of the "cropstart" event。

35) cropmove
	Type: Function
	Default: null
	A shortcut of the "cropmove" event.

36) cropend
	Type: Function
	Default: null
	A shortcut of the "cropend" event.

37) crop
	Type: Function
	Default: null
	A shortcut of the "crop" event.

38) zoom
	Type: Function
	Default: null
	A shortcut of the "zoom" event.



	  		// 调用方法
	  		// 格式：cropper('方法名', '参数1', '参数2', ...)
		    $('#image').cropper('method', argument1, , argument2, ..., argumentN);
	  	}
	});

1) crop() - 选择好选区，调用即可手动裁剪！
	$('#image').cropper({
	  autoCrop: false,		// 关闭自动裁剪
		ready: function () {
			// Do something here

			/*
				这里才是调用 'crop()' 方法				
			 */
			$(this).cropper('crop');		// 裁剪(这里的$(this) === $('#image'))
		}
	});

2) reset()
	将图像和裁剪框重置为初始状态。

3) clear()
	清除裁剪框。

4）replace(url[, onlyColorChanged])
	更换图像的src并重建裁剪器。
	参数:
		url 
			type: String
			新图像的url。
		onlyColorChanged(可选)
			type: 布尔值，默认值为 false。
			如果只改变颜色，而不是大小，那么裁剪器只需要更改所有相关图像的srcs，不需要重新构建裁剪器。 这可以用于应用过滤器。

5) enable()
	启用（解冻）裁剪器。

6）disable()
	禁用（冻结）裁剪器。

7）destroy()
	销毁裁剪器，并从图像中删除实例。

8）move(offsetX[,offsetY])
	canvas(图片外层div)，水平和垂直方向的偏移量，相对于当前位置，单位为px。
	offsetX - 水平
	offsetY - 垂直(如果未设置，默认值是：offsetX)
	实例：
		$('#image').cropper('move', 1);
		$('#image').cropper('move', 1, 0);
		$('#image').cropper('move', 0, -1);

9）moveTo(x[,y])
	canvas(图片外层div)，水平和垂直方向的绝对定位，相对于初始位置，单位为px。

10）zoom(ratio)
	canvas(图片外层div)，相对缩放。(缩放的是canvas)
	type: Number,
	放大，ratio > 0,
	缩小，ratio < 0
	实例：
		$('#image').cropper('zoom', 0.1);
		$('#image').cropper('zoom', -0.1);
11) zoomTo(ratio)
	canvas(图片外层div)，绝对缩放。
	实例：
		// 1:1（canvasData.width === canvasData.naturalWidth）	// 1:1，缩放后宽度 == 原始宽度
		$('#image').cropper('zoomTo', 1);
12) rotate(degree)
	相对当前位置，旋转图像。(旋转的是图像)
	type：Number
	向右旋转(顺时针)：需要正数（度数> 0）
	向左旋转(逆时针)：需要负数（度<0）
	Requires CSS3 2D Transforms support (IE 9+).
13) rotateTo(degree)
	旋转图像到某个角度。(旋转的是图像)
14）scale(scaleX[,scaleY])
	X轴和Y轴，拉伸图片。
	scaleX
		默认值为：1，表示什么都不做。
	scaleY
		未设置，默认值为：scaleX	
	-1，正好相反(也就是镜像)。范围应该是 -Infinite ~ +Infinite
	Requires CSS3 2D Transforms support (IE 9+).
	实例：
		$('#image').cropper('scale', -1); 		// X轴&Y轴同时镜像
		$('#image').cropper('scale', -1, 1); 	// X轴镜像
		$('#image').cropper('scale', 1, -1); 	// Y轴镜像
15) scaleX(scaleX)
	X轴拉伸图片
16) scaleY(scaleY)
	Y轴拉伸图片
17) getData([rounded])
	输出最终裁剪区域的位置和大小数据（基于原图像的尺寸）。
	返回一个对象：
		x:裁剪区域左侧的偏移量
		y:裁剪区域顶部的偏移量
		width：裁剪区域的宽度
		height：裁剪区域的高度
		rotate：图像的旋转度。
		scaleX：X轴的拉伸
		scaleY：Y轴拉伸
	参数：
		rounded - 可选，boolean类型，默认为：false。设置为true，返回四舍五入后的数据
	提示：
		我们可以将获取到的裁剪数据，直接发送到服务器后端，来进行图像的裁剪：
		使用rotate旋转图像。
		使用scaleX和scaleY拉伸图像。
		使用x,y,width,height裁剪图像。
18）setData(data)
	传递一个同 'getData()' 返回的对象，来设置图像的裁剪区域。(基于原图)
	传递的数据，是经过 'round' 四舍五入后的数据
	注意：
		此方法仅在 'viewMode' 选项大于或等于1时可用。
19）getContainerData()
	输出最外层容器的大小数据。
	返回一个对象：
		width - 当前容器的宽
		height - 当前容器的高
20）getImageData()
	输出图像位置、大小以及其他相关数据
	返回一个对象：
		left - 图像的左偏移
		top - 图像的上便宜
		width - 图像的宽度
		height - 图像的高度
		naturalWidth - 图像的自然宽度
		naturalHeight - 图像的自然高度
		aspectRatio - 图像的宽高比
		rotate - 图像的旋转角度
		scaleX - 图像的X轴拉伸
		scaleY - 图像的Y轴拉伸
21）getCanvasData()
	输出canvas(图片外层div)位置、大小数据。
	返回一个对象：
		left - canvas的左偏移
		top - canvas的上便宜
		width - canvas的宽度
		height - canvas的高度
		naturalWidth - canvas的自然宽度
		naturalHeight - canvas的自然高度
	实例：
		var imageData = $('#image').cropper('getImageData');
		var canvasData = $('#image').cropper('getCanvasData');
		// 180°旋转图像时，图像尺寸 == canvas尺寸
		if (imageData.rotate % 180 === 0) {
		  console.log(canvasData.naturalWidth === imageData.naturalWidth);
		}
22）setCanvasData(data)
	传递新数据对象，设置canvas(图片外层div)位置和大小。
	对象属性：
		left - canvas的左偏移
		top - canvas的上便宜
		width - canvas的宽度
		height - canvas的高度
23) getCropBoxData()
	输出裁剪框的位置和大小数据
	返回一个对象:
		left - 裁剪框的左偏移
		top - 裁剪框的上偏移
		width - 裁剪框的宽度
		height - 裁剪框的高度
24）setCropBoxData(data)
	传递新数据对象，设置裁剪框的位置和大小数据
	对象属性:
		left - 裁剪框的左偏移
		top - 裁剪框的上偏移
		width - 裁剪框的宽度
		height - 裁剪框的高度
25) getCroppedCanvas([options]);
	返回图像裁剪后，绘制的canvas对象，如果图像未裁剪，则将返回整个图像，绘制的canvas。
	返回结果类型是：HTMLCanvasElement 元素对象
	有了canvas对象后，我们就可以调用canvas的API，来进行处理。可以直接将画布显示为图像，或者使用HTMLCanvasElement.toDataURL获取数据URL，或者如果浏览器支持这些API，则使用HTMLCanvasElement.toBlob获取一个Blob并将其上传到具有FormData的服务器。
	参数 'options' 是一个对象：
		width - 输出的canvas的宽度
		height - 输出的canvas的高度
		fillColor - 输出canvas中的透明区域，填充的颜色
		imageSmoothingEnabled - 启用图像的平滑处理(默认是true)
		imageSmoothingQuality - 设置图像平滑处理的质量，可选值有：low, medium, high
	注意(重要！)：
		1>输出画布的宽高比将自动适应裁剪框的纵横比。
		2>如果打算从输出画布获取JPEG图像，则应首先设置fillColor选项，否则JPEG图像中间的透明部分默认为黑色。
	浏览器支持：
		Basic image: requires Canvas support (IE 9+).
		Rotated image: requires CSS3 2D Transforms support (IE 9+).
		Cross-origin image: requires HTML5 CORS settings attributes support (IE 11+).
		Get a canvas drawn the cropped image. If it is not cropped, then returns a canvas drawn the whole image.
	实例：
		1>不传参
			$('#image').cropper('getCroppedCanvas');
		2>传递参数对象
			$('#image').cropper('getCroppedCanvas', {
			  	width: 160,
			  	height: 90,
			  	fillColor: '#fff',
			  	imageSmoothingEnabled: false,
			  	imageSmoothingQuality: 'high',
			});
		3>如果浏览器支持“HTMLCanvasElement.toBlob”，则将裁剪的图像上传到服务器
			$('#image').cropper('getCroppedCanvas').toBlob(function (blob) {

				// 查看HTML5的 'formdata' 文档
				// https://developer.mozilla.org/zh-CN/docs/Web/API/FormData
			  	var formData = new FormData();
			  	formData.append('croppedImage', blob);
			  	$.ajax('/path/to/upload', {
				    method: "POST",
				    data: formData,
				    processData: false,
				    contentType: false,
				    success: function () {
				      	console.log('Upload success');
				    },
				    error: function () {
				      	console.log('Upload error');
				    }
			  	});
			});

26) setAspectRatio(aspectRatio)
	设置裁剪框的宽高比
	aspectRatio：
		类型：Number。必须是正数。

37）setDragMode([mode])
	设置拖拽模式
	[mode]可选，可以是：none, crop, move任意一个，默认是 'none'。
	提示：	
		可以双击裁剪框来切换 'crop' 和 'move' 模式。
2) cropstart
	当canvas(图片外层div)或者裁剪框开始改变时触发此事件。
	1>event.originalEvent:
		type: Event
		options: mousedown,mousestart和pointerdown
	2>event.action
		type: String
		Options: 
			crop - 创建一个新的裁剪框，
			move - 移动canvas(image wrapper)
			zoom - 通过触摸放大和缩小canvas(image wrapper)
			// 调整裁剪框各个方向的大小
			e - 东
			w - 西
			n - 北
			s - 南
			se - 东南
			sw - 西南
			ne - 东北
			nw - 西北
			all - 移动裁剪框（所有方向）
	实例：
		$('#image').on('cropstart', function (e) {
			console.log(e.type); 		// cropstart - 事件类型
			console.log(e.namespace); 	// cropper - 命名空间
			console.log(e.action);		// {} - 行为 
			console.log(e.originalEvent.pageX); 	// originalEvent - 待定

			// 如果需要，阻止cropping, moving等。
			if (e.action === 'crop') {
				e.preventDefault();
			}
		});
3) cropmove
	当canvas（image wrapper）或裁剪框改变时触发此事件。
	1>event.originalEvent
		type: Event
		Options: mousemove,touchmove和pointermove
	2>event.action 
		同 'cropstart'

4）cropend
	当canvas（image wrapper）或裁剪框停止更改时会触发此事件。
	1>event.originalEvent:
		Type: Event
		Options: mouseup, touchend, touchcancel, pointerup and pointercancel.
	2>event.action
		同 'cropstart'

5) crop
	当canvas（image wrapper）或裁剪框更改时，会触发此事件。
	返回的事件的一些属性，同 'getData()' 方法返回的对象一致
		event.x
		event.y
		event.width
		event.height
		event.rotate
		event.scaleX
		event.scaleY

6) zoom
    当裁剪器实例开始放大或缩小canvas（image wrapper）时，触发此事件。 
	1>event.originalEvent:
		Type: Event
		Options: wheel, touchmove.
	2>event.oldRatio:
		缩放前，canvas的比例
		Type: Number
	3>event.ratio:
		缩放后，canvas的比例(缩放后的宽 / 自然宽)
		Type: Number
	实例：
	    $('#image').on('zoom', function (e) {

	    	// 缩放后比例 > 缩放前，表示放大(zoom in)
		  	if (e.ratio > e.oldRatio) {
		    	e.preventDefault();
			}

	    	// 缩放后比例 < 缩放前，表示缩小(zoom out)
		  	if (e.ratio < e.oldRatio) {
		  		// 不允许缩小
		    	e.preventDefault();
			}
		});

## 解决冲突
使用了同 ‘cropper’ 相同命名空间的其他插件，调用 ‘$.fn.cropper.noConflict()’ 来转换cropper
## 浏览器支持
IE 9+