 const slider = document.querySelector('.slider');
        let currentIndex = 0;

        function nextSlide() {
            currentIndex = (currentIndex + 1) % 3;
            slider.style.transform = `translateX(-${currentIndex *300}px)`;
        }

        setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 이동

        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentIndex = 0;
            let autoSlideInterval;
        
                    // 이전 버튼 클릭 이벤트 처리
        prevBtn.addEventListener("click", function () {
            if (currentIndex === 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex--;
            }
            updateSlider();
        });

        // 다음 버튼 클릭 이벤트 처리
        nextBtn.addEventListener("click", function () {
            if (currentIndex === slides.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateSlider();
        });
        
            // 슬라이더 업데이트 함수
            function updateSlider() {
                const translateXValue = -currentIndex *520; // 300px는 각 슬라이드의 너비입니다.
                slider.style.transform = `translateX(${translateXValue}px)`;
            }
        
            // 자동 슬라이드 함수
            function autoSlide() {
                if (currentIndex < slides.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateSlider();
            }
        
            // 자동 슬라이드 간격 설정 (3초마다)
            autoSlideInterval = setInterval(autoSlide, 3000);
        
            // 자동 슬라이드를 재설정하는 함수
            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(autoSlide, 3000);
            }
        });

        