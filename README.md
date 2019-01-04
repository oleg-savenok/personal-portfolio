# Oleg Savenok - Personal Portfolio

## CSS Naming convection

I used SMACSS Architecture and custom BEM naming rules in this project.

#### Block

```html
<div class="block"></div>
```
 
```css
.block {...}
```

#### Element

```html
<div class="block">
    <div class="block__element"></div>
</div>
```
 
```scss
.block {
    &__element {...}
}
```