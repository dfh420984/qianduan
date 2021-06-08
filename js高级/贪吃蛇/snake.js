//小蛇自调用构造函数
	(function(){
		var elements = []; //用来存放小蛇每个身体部分
		function Snake(width, height, direction) {
			//小蛇每个身体部分共有属性
			this.width = width || 20; //小蛇每个部分宽
			this.height = height || 20; //小蛇每个部分高
			this.direction = direction || "right"; //小蛇移动方向
			//小蛇身体数组初始化
			this.body = [
				{x:3, y:2, color:"red"},
				{x:2, y:2, color:"orange"},
				{x:1, y:2, color:"orange"}
			];
		}
		//小蛇初始化生成
		Snake.prototype.init = function(map) {
			//初始化前先删除之前小蛇
			remove();

			//初始化小蛇
			for (var i = 0; i < this.body.length; i++) {
				var obj = this.body[i];
				var div = document.createElement("div");
				//小蛇身体追加到页面中;
				map.appendChild(div);
				//设置每个身体部分样式
				div.style.width = this.width+"px";
				div.style.height = this.height+"px";
				div.style.position = 'absolute';
				div.style.left = obj.x * this.width +"px";
				div.style.top = obj.y * this.height +"px";
				div.style.backgroundColor = obj.color;
				//将身体部分追加到数组中
				elements.push(div);
			}
		}
		//小蛇移动事件
		Snake.prototype.move = function(food, map) {
			//小蛇身体部分前后交换
			var i = this.body.length - 1;
			for (; i > 0; i--) {
				this.body[i].x = this.body[i-1].x;
				this.body[i].y = this.body[i-1].y;
			}
			//根据方向改标小蛇头坐标
			switch (this.direction) {
				case "left":
					this.body[0].x -= 1;
					break;
				case "right":
					this.body[0].x += 1;
					break;
				case "top":
					this.body[0].y -= 1;
					break;
				case "bottom":
					this.body[0].y += 1;
					break;
				default:
					break;
			}

			//吃食物,判断小蛇头横纵坐标是否和食物坐标相等
			var headX = this.body[0].x * this.width;
			var headY = this.body[0].y * this.height;
			console.log(headY+"==="+food.y);
			if (headX == food.x && headY == food.y) {
				//给小蛇尾巴追加元素
				//获取小蛇最后一个元素,追加到身体中
				var ele = this.body[this.body.length - 1];
				this.body.push(
					{
						x: ele.x,
						y: ele.y,
						color: ele.color
					}
				);
				//吃掉食物，调用食物初始化方法
				food.init(map);
			}
		}

		//移动前先删除之前小蛇
		function remove() {
			var i = elements.length - 1;
			for (; i >= 0; i--) {
				var ele = elements[i];
				//从map地图中删除
				ele.parentNode.removeChild(ele);
				//从数组中删除
				elements.splice(i, 1);
			}
		}

		//赋值给全局变量
		window.Snake = Snake;
	}());