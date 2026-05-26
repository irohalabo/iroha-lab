// ページ読み込み完了時にフェードインアニメーションを滑らかに実行
window.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-up');

    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('active');
        });
    }, 150);
});