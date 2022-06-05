if (snapButton) {
	snapButton.onclick = function () {

		//snip!

		canvas.getContext('2d').drawImage(video, 0, 0)

		var dataUrl = canvas.toDataURL('image/jpeg')

		document.getElementById("shot").src = dataUrl 

		hiddenImage.value = dataUrl

		//snip!

	}
}