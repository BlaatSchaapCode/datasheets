function LoadDocument(frameId)
{
	var param = location.search.substr(location.search.indexOf("?") + 1);
	var newDoc = "start.html?" + param;
	var f = document.getElementById(frameId);
	f.src = newDoc;
}
