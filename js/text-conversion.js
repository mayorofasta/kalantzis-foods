'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const emailElement = document.getElementById('text-conversion').firstChild;

    if (emailElement) {
        emailElement.nodeValue = emailElement.nodeValue
            .replace(' ', '@')                // Change the first space to @
            .split(' ').join('.')             // Change remaining spaces to dots
            .replace(/[zxv]/g, '')            // Remove z, x, and v globally
            .replace('eample', 'kalantzisfoods'); // Swap the domain name
    }
});