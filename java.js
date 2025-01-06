const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value;
    const searchLink = `https://example.com/search?query=${encodeURIComponent(searchTerm)}`;
    window.location.href = searchLink;
});
document.querySelector("#__next > div > main > div.StyledTabs-sc-1qaor65-0.hoIXXn.Tabsstyle__TabsRoot-sc-18l1o97-0.bHlECi")
