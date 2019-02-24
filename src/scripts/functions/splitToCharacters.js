export default function splitToCharacters(item) {
    // Get all text from link
    const linkText = item.innerText;

    // Empty link
    item.innerHTML = null;

    for (let i = 0; i < linkText.length; i++) {
        // Create span for adding character into link
        const char = document.createElement('span');

        // Add class name and content for span
        char.className = 'character';
        char.innerText = linkText.charAt(i);

        // Finally append single character into link
        item.append(char);
    }
}
