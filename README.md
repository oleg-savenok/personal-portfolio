# Oleg Savenok - Personal Portfolio

## CSS Naming convection

I used SMACSS Architecture and custom BEM naming rules in this project.

### Block
#### html
```html
<div class="block"></div>
```
#### scss 
```scss
.block {
    ...
}
```

### Element

#### html
```html
<div class="block">
    <div class="block__element"></div>
</div>
```
#### scss
```scss
.block {
    &__element {
        ...
    }
}
```