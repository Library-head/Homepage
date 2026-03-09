document.addEventListener('DOMContentLoaded', () => {
    // 全局鼠标光晕 (Global Cursor Glow)
    const cursorGlow = document.querySelector('.cursor-glow');
    
    // 只在非触屏设备上启用特效
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.opacity = '1';
            cursorGlow.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });

        // 卡片内部鼠标光晕 (Card Glow)
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const glow = card.querySelector('.card-glow');
                const rect = card.getBoundingClientRect();
                
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                glow.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
            });
        });
    }
});
