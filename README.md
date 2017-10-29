# Sizer
Sizer dynamically resizes images on webpages so that they match the size of their associated text element.

## Installation
Simply include the sizer files (`sizer.js` and `sizer.css`) on your webpage using your preferred method.

## Quickstart
Sizer is easy as 1, 2, 3!

1. Give your `<img>` a container (if it does not already have one), and add the class `sizer` to that container.
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
        <h1>Do You Like Yogurt?</h1>
        <p>Of course you do! Only silly aligators don't like yogurt! The bacteria used to make yogurt are known as "yogurt cultures". Fermentation of lactose by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tart flavor.[1] Cow's milk is commonly available worldwide, and, as such, is the milk most commonly used to make yogurt. Milk from water buffalo, goats, ewes, mares, camels, and yaks is also used to produce yogurt where available locally. Milk used may be homogenized or not (milk distributed in many parts of the world is homogenized); both types may be used, with substantially different results. SOURCE: <a href="https://en.wikipedia.org/wiki/Yogurt">https://en.wikipedia.org/wiki/Yogurt</a></p>
    </div>
    ```
3. Give the `div.sizer` container a customer attribute `data-sizer` with a value corresponding to the `id` of the text element.
    ```html
    <div class="sizer" data-sizer="text">
        <img src="http://bit.ly/2zQWu1f" alt="">
    </div>
    ```
... and you're done!
