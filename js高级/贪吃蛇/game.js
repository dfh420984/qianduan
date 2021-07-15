//游戏对象自调用函数
	(function(){
		var that = null;
		//游戏对象构造函数
		function Game(map) {
			this.food = new Food();
			this.snake = new Snake();
			this.map = map;
			that = this; //保存game对象
		}
		//初始化游戏对象
		Game.prototype.init = function() {
			this.food.init(this.map); //初始化食物
			this.snake.init(this.map); //初始化小蛇
			// setInterval(function() { //注意setInterval中的this指向是window
			// 	that.snake.move(that.food, that.map); //移动小蛇
			// 	that.snake.init(that.map); //初始化小蛇
			// }, 200);
			//调用移动小蛇方法
			this.runSnake(this.food, this.map);
			//调用按键方法,改变小蛇方向
			this.bindKey();	
		}

		//添加原型方法设置小蛇可以自动的跑起来
		Game.prototype.runSnake = function(food, map) {
			var timeId = setInterval(function() { //注意setInterval中的this指向是window
				this.snake.move(food, map); //移动小蛇
				this.snake.init(map); //初始化小蛇
				//横纵坐标的最大值
				var maxX = map.offsetWidth / this.snake.width;
				var maxY = map.offsetHeight / this.snake.height;

				//小蛇头部的横纵坐标
				var headX = this.snake.body[0].x;
				var headY = this.snake.body[0].y;
				//console.log(headX+"===="+maxX);
				//清楚定时器
				if (headX < 0 || headX >= maxX) {
					clearInterval(timeId);
					alert("撞墙啦");
				}
				if (headY < 0 || headY >= maxY) {
					clearInterval(timeId);
					alert("撞墙啦");
				}

			}.bind(that), 200);   //bind函数改变this指向
		}

		//获取用户按键值，改变小蛇方向
		Game.prototype.bindKey = function() {
			document.addEventListener("keydown", function(e){
				switch (e.keyCode) {
					case 37:
						this.snake.direction = "left";
						break;
					case 38:
						this.snake.direction = "top";
						break;
					case 39:
						this.snake.direction = "right";
						break;
					case 40:
						this.snake.direction = "bottom";
						break;
					default:
						break;
				}
			}.bind(that), false);
		}

		window.Game = Game;
	}());