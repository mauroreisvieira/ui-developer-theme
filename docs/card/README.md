## Introduction

Cards are a convenient means of coherently displaying related content that is composed of different types of objects.
They are also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.


The card component is ready for use.

#### Examples

A card with a thumb, title, text, and action.

```html
<div class="card">
    <div class="card__thumb">
        <img src="http://via.placeholder.com/280x180" alt="Card Thumb" title="Card Thumb" class="card__thumbImage">
    </div>
    <div class="card__title">
        <h2 class="card__titleText">Welcome</h2>
    </div>
    <div class="card__content">
        <p class="card__contentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div class="card__menu">
        <button class="button button--base">See Now</button>
        <button class="button button--link">Cancel</button>
    </div>
</div>
```

## Configuration options

The table below lists the available classes and their effects.

|  Class | Description |
|-----------|--------|
| `card` | Defines div element as an card container |
| `card__thumb` | Defines div as a card thumb container |
| `card__thumbImage` | Assigns appropriate image characteristics to card thumb |
| `card__title` | Defines div as a card title container |
| `card__titleText` | Assigns appropriate text characteristics to card title |
| `card__content` | Defines div as a card content container |
| `card__contentText` | Assigns text characteristics to a card content |
| `card__menu` | Defines element as top right menu button |
