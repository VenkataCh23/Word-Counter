function countWordsAndCharacters() {
    const text = document.getElementById('textInput').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;

    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
}
