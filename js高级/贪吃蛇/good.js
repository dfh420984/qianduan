//自调用函数食物的
	(function(){
		var elements = [];//用来保存每个小方块食物的
		function Food(width,height,x,y,color) {
			this.width = width || 20;
			this.height = height || 20;
			this.x = x || 0;
			this.y = y || 0;
			this.color = color || "green";
		}

		Food.prototype.init = function(map) {
			//先删除这个小食物
      		//外部无法访问的函数
      		remove();
			var div = document.createElement("div");
			//把div追加到文档中
			map.appendChild(div);
			div.style.width = this.width+"px";
			div.style.height = this.height+"px";
			div.style.backgroundColor = this.color;
			div.style.position = 'absolute';
			//随机横纵坐标
			this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
			this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
			div.style.left = this.x + "px";
			div.style.top = this.y + "px";
			//把div加入到数组elements中
      		elements.push(div);
		}

		//私有的函数---删除食物的
		function remove() {
			for (var i = 0; i < elements.length; i++) {
				var ele = elements[i];
				//找到这个子元素的父级元素,然后删除这个子元素
				ele.parentNode.removeChild(ele);
				//从数组中删除这个元素
				elements.splice(i, 1);
			}
		}

		//把Food暴露给Window,外部可以使用
		window.Food = Food;
	}()); //这样写最后需要加分号