module.exports = {
  sprite: {
    mode: {
      css: {
        variables: {
          replaceSvgWithPng: () => {
            return (sprite, render) => {
              return render(sprite).split('.svg').join('.png');
            }
          }
        },
        sprite: 'sprite.svg',
        render: {
          css: {
            template: './gulp/templates/sprite.css'
          }
        }
      }
    }
  }
};
