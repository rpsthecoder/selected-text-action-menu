document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);

function onMouseDown() {
    document.getSelection().removeAllRanges();
    var shareBox = document.querySelector('article #shareBox');
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
            range.collapse(false);
            range.insertNode(document.importNode(temp.content, true));
            var shareBox = document.querySelector('article #shareBox');
            //shareBox.style.top = `calc(${getComputedStyle(shareBox).top} - 30px)`;
            var shareBtn = shareBox.querySelector('button');
            shareBtn['shareTxt'] = txt;
            shareBtn.addEventListener('mousedown', onShareClick, true);
        }
    }
}

function onShareClick() {
    alert(`Ready to share the following text:\n\n${this.shareTxt}\n`);
    this.remove();
    document.getSelection().removeAllRanges()
}
