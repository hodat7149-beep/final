// china-snow.js

const snowCanvas = document.getElementById("snow-china");

if (snowCanvas) {
    const ctx = snowCanvas.getContext("2d");
    
    // DANH SÁCH CÁC EMOJI THỨC ĂN (Bạn có thể thêm/bớt tùy thích)
    const FOOD_EMOJIS = ["🥟", "🍚", "🥢", "🥡", "🌶️", "🥠", "🍜", "🍞", "🫕", "🦀"];
    const FLAKE_COUNT = 70; 

    snowCanvas.width = window.innerWidth;
    snowCanvas.height = window.innerHeight;

    let flakes = [];

    // Đối tượng vật thể rơi (FoodFlake object)
    function FoodFlake() {
        this.x = Math.random() * snowCanvas.width;
        this.y = Math.random() * snowCanvas.height;
        
        this.size = Math.random() * 8 + 18; 
        
        this.speed = Math.random() * 1 + 0.5; // Tốc độ rơi
        this.wind = Math.random() * 1 - 0.5; // Tốc độ gió
        
        this.emoji = FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)];
    }

    // Cập nhật vị trí
    FoodFlake.prototype.update = function () {
        this.y += this.speed;
        this.x += this.wind;

        if (this.y > snowCanvas.height) {
            this.y = -5;
            this.x = Math.random() * snowCanvas.width;
        }
    };

    // Vẽ emoji thay vì tuyết
    FoodFlake.prototype.draw = function () {
        ctx.font = `${this.size}px Arial`; 
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.emoji, this.x, this.y); 
    };

    // Tạo số lượng vật thể rơi
    function createFlakes() {
        flakes = [];
        for (let i = 0; i < FLAKE_COUNT; i++) {
            flakes.push(new FoodFlake());
        }
    }

    // Vòng lặp animation chính
    function moveFlakes() {
        ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);

        for (let i = 0; i < flakes.length; i++) {
            flakes[i].update();
            flakes[i].draw();
        }

        requestAnimationFrame(moveFlakes);
    }

    // Khởi chạy
    createFlakes();
    moveFlakes();

    // Cập nhật kích thước khi cửa sổ thay đổi
    window.addEventListener("resize", () => {
        snowCanvas.width = window.innerWidth;
        snowCanvas.height = window.innerHeight;
        createFlakes(); 
    });
}