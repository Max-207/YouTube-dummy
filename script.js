function searchYouTube() {
    let search_value = document.getElementsByClassName("search-bar")[0].value;
    window.open(`https://www.youtube.com/results?search_query=${search_value}`, '_self');
}