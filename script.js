document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);

function onMouseDown() {
    document.getSelection().removeAllRanges();
    var shareBox = document.querySelector('#shareBox');
    if (shareBox !== null)
        shareBox.remove();
}

function onMouseUp() {
    var sel = document.getSelection(),
        txt = sel.toString();
    if (txt !== "") {
        var range = sel.getRangeAt(0);
        if (range.startContainer.parentElement.parentElement.localName === "article" || range.startContainer.parentElement.localName === "article") {
            var temp = document.querySelector('#shareBoxTemplate');
            document.body.insertBefore(document.importNode(temp.content, true), temp);
		    var rect = range.getBoundingClientRect();
            var shareBox = document.querySelector('#shareBox');
            shareBox.style.top = `calc(${rect.top}px - 38px)`;
		    shareBox.style.left = `calc(${rect.left}px + calc(${rect.width}px / 2) - 30px)`;
            var shareBtn = shareBox.querySelector('button');
            shareBtn['shareTxt'] = txt;
            shareBtn.addEventListener('mousedown', onShareClick, true);
        }
    }
}

function onShareClick() {
    window.open(`https://twitter.com/intent/tweet?text=${this.shareTxt}`);
    this.remove();
    document.getSelection().removeAllRanges()
}
