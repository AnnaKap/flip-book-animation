let height;
let scrollStatus;
const setScrollStatus = (status) => {
    scrollStatus.innerHTML = status
}
window.onload = (e) => {
    height = Number(getHeight().slice(0,-2));
    scrollStatus = document.getElementById('scrollStatus');
};
window.onresize = (e) => {
    height = getHeight();
}
window.onwheel = (e) => {
    const currScroll = window.pageYOffset;
    const scrollDown = e.deltaY > -1;
    const halfWay = Number(height)/2
    if (scrollDown) {
        if (halfWay > currScroll) {
            setScrollStatus('keep scrolling');
        } else if ((halfWay * 1.5) < currScroll){
            setScrollStatus('the end')
        } else {
            setScrollStatus('halfway there!')
        }
    } else {
        if (currScroll === 0) {
            setScrollStatus('back at the top');
        } else {
            setScrollStatus('going up!');
        }
    }
}

const getHeight = () => {
    const animationStyle =  document.getElementById('animation').style;
    const height =  Object.entries(animationStyle).find((el) => {
        if (el[0] === 'height') {
            return el;
        };
    });
    document.getElementById('body').style = `height: ${height[1]};`;
    return height[1];
}