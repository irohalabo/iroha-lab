window.addEventListener('DOMContentLoaded', () => {
    // 1. タイトルやボタンのフェードイン処理
    const fadeElements = document.querySelectorAll('.fade-in-up');
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('active');
        });
    }, 150);

    // 2. 背景画像スライダーを自動でグルグル回す処理
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlideIndex = 0;
    const slideIntervalTime = 4000; // 4秒ごとに次の画像へ（切り替えに1.5秒かかるため、4〜5秒がベスト）

    function nextSlide() {
        // 現在の画像から「active」クラスを外して消す
        slides[currentSlideIndex].classList.remove('active');
        
        // 次の画像の番号を計算（最後の次は0に戻るループ構造）
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        // 次の画像に「active」クラスをつけてふわっと出す
        slides[currentSlideIndex].classList.add('active');
    }

    // 指定した時間（4秒）ごとに、nextSlide関数を繰り返し実行する
    setInterval(nextSlide, slideIntervalTime);
});