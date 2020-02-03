function createArticle() {
	let article = document.createElement("article");
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	let input = document.getElementById("createTitle");
	let textArea = document.getElementById("createContent");
	let articles = document.getElementById("articles");

	articles.appendChild(article);

	h3.innerHTML = input.value;
	p.innerHTML = textArea.value;

	article.appendChild(h3);
	article.appendChild(p);

	
}	