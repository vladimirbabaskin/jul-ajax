
<h2>News</h2>
<form method="POST" name="addnews">
    <label>Название:
	<input type="text" name="title"/>
    </label><br><br>
    <label>Tekct:
	<textarea name="text"></textarea>
    </label><br><br>
    <input type="submit" value="добавить"/>
</form>

<!--<input type="button" value="обновить" onclick="news()"/>-->
<div id="news"> 
</div>
<script src="js/news.js"></script>
