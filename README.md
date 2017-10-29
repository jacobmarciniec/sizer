# Sizer
Sizer dynamically resizes images on webpages so that they match the size of their associated text element.

## Installation
Simply include the sizer files (`sizer.js` and `sizer.css`) on your webpage using your preferred method.

## Quickstart
Setting up Sizer is easy as 1, 2, 3!

1. Give your `<img>` a container (if it does not already have one) with the class `sizer`.
    ```html
    <div class="sizer">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>
    ```
2. Give the text element you want your image to resize with an `id`.
    ```html
    <div class="sizer">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>

    <div id="text">
        <h2>Some text</h2>
        <p>Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.</p>
    </div>
    ```
3. Give the `div.sizer` container a customer attribute `data-sizer` with a value corresponding to the `id` of the text element.
    ```html
    <div class="sizer" data-sizer="text">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>

    <div id="text">
        <h2>Some text</h2>
        <p>Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.</p>
    </div>
    ```
... and you're done!
