# Sizer
Sizer dynamically resizes images on webpages so that they respect an aspect ratio or match the size of a text element.

## Installation
Simply include the sizer files (`sizer.js` and `sizer.css`) on your webpage using your preferred method.

## Quickstart
Setting up Sizer is easy as 1, 2!

1. Give your `<img>` a container (if it does not already have one) with the attribute `data-sizer`.
    ```html
    <div data-sizer="">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>
    ```
2. Give the image container's `data-sizer` attribute a value corresponding to the aspect ratio you want it to maintain or the `id` of an element you want it to match the height of.
    ```html
    <!-- match height of #text -->
    <div data-sizer="text">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>

    <div id="text">
        <h2>Some text</h2>
        <p>Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.</p>
    </div>

    <!-- maintain 16:9 aspect ratio -->
    <div data-sizer="16:9">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>
    ```
... and you're done!
