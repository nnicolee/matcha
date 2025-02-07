# matcha making game ໒꒰ྀིᵔ ᵕ ᵔ ꒱ྀི১

inspired by traditional matcha preparation, this is a cute and interactive web game where users can learn how to make matcha by dragging and dropping ingredients into a bowl. built with next.js, react, typescript, and tailwind css.

## features ⋆｡𖦹°⭒˚｡⋆

- interactive drag-and-drop gameplay
- step-by-step matcha making instruction
- feedback for each step
- responsive design
- congratulations modal

## getting started ദ്ദി •⩊• )

### install ꒰ᐢ. .ᐢ꒱₊˚⊹

1. clone the repository
```bash
git clone <your-repository-url>
```

2. install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. open [http://localhost:3000](http://localhost:3000) 

## project structure ⋆౨ৎ˚⟡˖ ࣪

```
components/
├── Bowl.tsx           # bowl component with step animations
├── DraggableItem.tsx  # draggable ingredients/tools
├── CongratulationsModal.tsx  # completion modal
└── MatchaGame.tsx     # main game component

public/
├── matcha_crumbs.png
├── matcha_liquid.png
├── foamy.png
├── matcha_milk.png
├── matcha_powder.png
├── water_kettle.png
├── matcha_whisk.png
└── milk.png
```

## tech stack ૮ ․ ․ ྀིა

- Next.js 13+
- React 18
- TypeScript
- Tailwind CSS
- React Drag and Drop API
